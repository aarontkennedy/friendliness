# friendliness

This is a friend finding node.js powered web application.  It get a user's identity via Google oAuth2.  It stores the user's info along with some survey results in a mySQL database.  It returns potential friends that are chosen by similar survey results.  See it in action at https://friendliness.herokuapp.com .

If you want to run this repo on your own, you will need a couple of additional files.  You will need a client_id.json from Google oAuth2 credentials service in the routing file folder.  It should look like: 
{"web":
{"client_id":"xxx",
"project_id":"xxx",
"auth_uri":"xxx",
"token_uri":"xxx,
"auth_provider_x509_cert_url":"xxx",
"client_secret":"xxx",
"redirect_uris":["https://xxx/oauth2callback"],
"javascript_origins":["https://xxx"]}}

You also need a mySQL database.  The connection info is in a file called mySQLkeys.json and is in the data folder.  It should look like: 
{
    "host": "xxx",
    "port": 3306,
    "user": "xxx",
    "password": "xxx",
    "database": "xxx"
}
