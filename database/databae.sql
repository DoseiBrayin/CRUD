DROP SCHEMA IF EXISTS `crud` ;

CREATE SCHEMA IF NOT EXISTS `crud` DEFAULT CHARACTER SET utf8 ;
USE `crud` ;

DROP TABLE IF EXISTS `crud`.`empleado` ;

CREATE TABLE `crud`.`empleado`
( `CEDULA` VARCHAR
(12) NOT NULL , `NOMBRE` VARCHAR
(45) NOT NULL , `ROL` VARCHAR
(45) NOT NULL , `CORREO` VARCHAR
(45) NOT NULL , `CELULAR` VARCHAR
(12) NOT NULL , `DIR` VARCHAR
(45) NOT NULL , PRIMARY KEY
(`CEDULA`)) ENGINE = InnoDB;
