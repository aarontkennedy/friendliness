USE sj1xwzggy85879p8;

CREATE TABLE friends (
	`google_id` VARCHAR(100) NOT NULL PRIMARY KEY,
	`name` VARCHAR(100) NOT NULL,
    `question1` INT NOT NULL,
    `question2` INT NOT NULL,
    `question3` INT NOT NULL,
    `question4` INT NOT NULL,
    `question5` INT NOT NULL,
    `question6` INT NOT NULL,
    `question7` INT NOT NULL,
    `question8` INT NOT NULL,
    `question9` INT NOT NULL,
    `question10` INT NOT NULL,
    `photoURL` VARCHAR(500) NOT NULL,
    `googlePlusURL` VARCHAR(500) NOT NULL
);

INSERT INTO friends 
VALUES ("1", "Vladdy Putin", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, "http://1.bp.blogspot.com/-hNC-oT6f-fY/TeXxO26yjvI/AAAAAAAAAOY/qfkOqdKkBi8/s1600/platon-photographer-putin-man-of-the-year-portrait.jpg", "https://en.wikipedia.org/wiki/Vladimir_Putin");

INSERT INTO friends 
VALUES ("2", "Sarah Palin", 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, "http://3.bp.blogspot.com/-KKkgjjQ3Ih8/TeXxmp8RakI/AAAAAAAAAOw/kb5w5uBw9OE/s1600/platon-photographer-tina-fey-portrait.jpg", "https://en.wikipedia.org/wiki/Tina_Fey");

INSERT INTO friends
VALUES ("3", "Prince", 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,"http://1.bp.blogspot.com/-cMIyE1KS0wM/TeXxiLwHmLI/AAAAAAAAAOk/OCtsAGL5BhY/s640/platon_photographer-prince-rogers-nelson-portrait.jpg", "https://en.wikipedia.org/wiki/Prince_(musician)");
