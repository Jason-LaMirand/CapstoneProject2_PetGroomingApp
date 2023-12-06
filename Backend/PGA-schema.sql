/*Pet Grooming App schema*/

/*dog breed type*/
CREATE TABLE dogBreedTypes (
    id SERIAL PRIMARY KEY,
    breedTypeName VARCHAR(255) DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT NULL,
    updatedAt TIMESTAMP DEFAULT NULL
);

/*dog_breed table*/
CREATE TABLE dogBreeds (
    id SERIAL PRIMARY KEY,
    breedName VARCHAR(100) NOT NULL,
    breedTypeId INT DEFAULT NULL REFERENCES dogBreedTypes(id),
    breedOrigin VARCHAR(100) DEFAULT NULL,
    breedImage VARCHAR(255) DEFAULT NULL,
    breedPdf VARCHAR(255) DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT NULL,
    updatedAt TIMESTAMP DEFAULT NULL
);

/*pets table*/
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    petName TEXT NOT NULL,
    age TEXT DEFAULT NULL,
    gender TEXT NOT NULL,
    spayedOrNeutered BOOLEAN,
    adopted BOOLEAN,
    weigh TEXT DEFAULT NULL,
    color TEXT NOT NULL,
    img TEXT DEFAULT NULL

);

/*users table */
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

/*services table */
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    price TEXT DEFAULT NULL,
    duration TEXT DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT NULL,
    updatedAt TIMESTAMP DEFAULT NULL,
    img TEXT DEFAULT NULL  
);



/*pet applications table*/
CREATE TABLE petApplications (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  pet_id INTEGER,
  CONSTRAINT fk_users
    FOREIGN KEY(user_id)
      REFERENCES users(id),
  CONSTRAINT fk_pets
    FOREIGN KEY(pet_id)
      REFERENCES pets(id)
);

-- CREATE TABLE Users (
--     id INT(11) NOT NULL AUTO_INCREMENT,
--     isAdmin BOOLEAN DEFAULT false,
--     firstName VARCHAR(255) COLLATE UTF8_UNICODE_CI NOT NULL,
--     lastName VARCHAR(255) COLLATE UTF8_UNICODE_CI NOT NULL,
--     email VARCHAR(128) COLLATE UTF8_UNICODE_CI NOT NULL,
--     address VARCHAR(200) COLLATE UTF8_UNICODE_CI NOT NULL,
--     address2 VARCHAR(200) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
--     city VARCHAR(128) COLLATE UTF8_UNICODE_CI NOT NULL,
--     state VARCHAR(5) COLLATE UTF8_UNICODE_CI NOT NULL,
--     zipCode VARCHAR(5) COLLATE UTF8_UNICODE_CI NOT NULL,
--     phone VARCHAR(45) COLLATE UTF8_UNICODE_CI NOT NULL,
--     roleId INT(11) DEFAULT NULL,
--     dogName VARCHAR(255) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
--     dogType INT DEFAULT NULL,
--     dogTemperamentId VARCHAR(255) COLLATE UTF8_UNICODE_CI DEFAULT NULL,
--     imageId TINYINT(3) DEFAULT '0',
--     dogNote TEXT DEFAULT NULL,
--     password VARCHAR(255) NOT NULL,
--     createdAt DATETIME NOT NULL,
--     updatedAt DATETIME DEFAULT NULL,
--     PRIMARY KEY (id),
--     UNIQUE KEY email (email)
-- );


/*add foreign key to appointments for user_id*/

-- ALTER TABLE `looking_ruff_db`.`appointments` 
-- ADD INDEX `fk_user_id_idx` (`userId` ASC);
-- ;
-- ALTER TABLE `looking_ruff_db`.`appointments` 
-- ADD CONSTRAINT `fk_user_id`
--   FOREIGN KEY (`userId`)
--   REFERENCES `looking_ruff_db`.`Users` (`id`)
--   ON DELETE NO ACTION
--   ON UPDATE NO ACTION;