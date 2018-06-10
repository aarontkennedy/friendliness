module.exports = function (app) {
    // get the necessary keys for connecting to google and getting
    // oAuth2 working
    const fs = require('fs');
    const path = require('path');
    const keyPath = path.join(__dirname, 'client_id.json');
    // was in the sample code... gives the keys a default before loading...
    let keys = { redirect_uris: [''] };
    if (fs.existsSync(keyPath)) {
        keys = require(keyPath).web;
    }
    // else ???

    // google signin + profile information
    const { google } = require('googleapis');
    const plus = google.plus('v1');
    const scopes = ['https://www.googleapis.com/auth/plus.me'];


    // create an oAuth client to authorize the API call
    const oAuth2Client = new google.auth.OAuth2(
        keys.client_id,
        keys.client_secret,
        keys.redirect_uris[0]
    );

    /**
 * This is one of the many ways you can configure googleapis to use authentication credentials.  In this method, we're setting a global reference for all APIs.  Any other API you use here, like google.drive('v3'), will now use this auth client. You can also override the auth client at the service and method call levels.
 */
    google.options({ auth: oAuth2Client });

    // when a user clicks the sign in button, we redirect to google
    // where they login and we wait for a callback
    app.get("/signin", function (req, res) {

        // grab the url that will be used for authorization
        const authorizeUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            prompt: 'consent',
            scope: scopes.join(' ')
        });

        res.redirect(authorizeUrl); // send them to google
    });

    app.get("/oauth2callback", async function (req, res) {

        const querystring = require('querystring');
        const url = require('url');
        const qs = querystring.parse(url.parse(req.url).query);

        //console.log("awaiting token");
        try {
        const { tokens } = await oAuth2Client.getToken(qs.code);
        oAuth2Client.credentials = tokens;
        }
        catch (error) {
            // if i reload the page, the grabbing of the token fails
            // i think...  just attempt to move forward and use existing token?
            console.error(error);
        }

        //console.log("awaiting user info");
        const result = await plus.people.get({ userId: 'me' });
        //console.log(result.data);

        res.render("survey", { personData: result.data });
    });

}