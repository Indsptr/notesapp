CREATE DATABASE notes_db;
USE notes_db;
create table notes
(
    id       bigint auto_increment
        primary key,
    title    text     not null,
    datetime datetime not null,
    note     longtext not null
);
SHOW COLUMNS from notes;
select * from notes;