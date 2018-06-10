USE sj1xwzggy85879p8;

CREATE TABLE friends (
	`google_id` VARCHAR(100) NOT NULL PRIMARY KEY,
	`name` VARCHAR(100) NOT NULL,
    `questionResponses` VARCHAR(100) NOT NULL,
    `compositeScore` INT NOT NULL,
    `photoURL` VARCHAR(500) NOT NULL,
    `googlePlusURL` VARCHAR(500) NOT NULL
);

INSERT INTO friends (google_id, name, questionResponses, compositeScore, photoURL, googlePlusURL)
VALUES ("1", "Vladdy Putin", "1,1,1,1,1,1,1,1,1,1", 10, "http://1.bp.blogspot.com/-hNC-oT6f-fY/TeXxO26yjvI/AAAAAAAAAOY/qfkOqdKkBi8/s1600/platon-photographer-putin-man-of-the-year-portrait.jpg", "https://en.wikipedia.org/wiki/Vladimir_Putin");

INSERT INTO friends (google_id, name, questionResponses, compositeScore, photoURL, googlePlusURL)
VALUES ("2", "Sarah Palin", "1,2,1,2,1,2,1,2,1,2", 15,"http://3.bp.blogspot.com/-KKkgjjQ3Ih8/TeXxmp8RakI/AAAAAAAAAOw/kb5w5uBw9OE/s1600/platon-photographer-tina-fey-portrait.jpg", "https://en.wikipedia.org/wiki/Tina_Fey");

INSERT INTO friends (google_id, name, questionResponses, compositeScore, photoURL, googlePlusURL)
VALUES ("3", "Prince", "3,3,3,3,3,3,3,3,3,3", 30,"http://1.bp.blogspot.com/-cMIyE1KS0wM/TeXxiLwHmLI/AAAAAAAAAOk/OCtsAGL5BhY/s640/platon_photographer-prince-rogers-nelson-portrait.jpg", "https://en.wikipedia.org/wiki/Prince_(musician)");