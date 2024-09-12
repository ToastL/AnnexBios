CREATE TABLE `actors`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `firstname` VARCHAR(255) NOT NULL,
    `infix` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `date_of_birth` DATE NOT NULL,
    `origin` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `movies_id` VARCHAR(255) NOT NULL
);
CREATE TABLE `tickets`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `guest` BOOLEAN NOT NULL,
    `user_id` BIGINT NULL,
    `email` VARCHAR(255) NOT NULL,
    `hall` BIGINT NOT NULL,
    `row` BIGINT NOT NULL,
    `seat` BIGINT NOT NULL
);
CREATE TABLE `users`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `firstname` VARCHAR(255) NOT NULL,
    `infix` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
CREATE TABLE `movies`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `rating` FLOAT(53) NOT NULL,
    `duration` TIME NOT NULL,
    `release_date` DATE NOT NULL,
    `age_restriction` BIGINT NOT NULL,
    `banner_path` VARCHAR(255) NOT NULL,
    `price` BIGINT NOT NULL
);
ALTER TABLE `actors` ADD CONSTRAINT `actors_movies_id_foreign` FOREIGN KEY(`movies_id`) REFERENCES `movies`(`id`);
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);