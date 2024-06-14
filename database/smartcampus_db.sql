/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 8.0.36 : Database - smartcampus_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`smartcampus_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `smartcampus_db`;

/*Table structure for table `tb_admin` */

DROP TABLE IF EXISTS `tb_admin`;

CREATE TABLE `tb_admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `gender` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `telephone` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `portrait_path` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `tb_admin` */

insert  into `tb_admin`(`id`,`name`,`gender`,`password`,`email`,`telephone`,`address`,`portrait_path`) values 
(101,'admin','F','21232f297a57a5a743894a0e4a801fc3','admintest@test.com','13260161111','Marburg','upload/b470866491984cb2bb1b09623479a1b3.png'),
(102,'admin1','M','21232f297a57a5a743894a0e4a801fc3','admintest1@test.com','13260166090','Marburg','upload/default.jpg'),
(103,'admin2','M','21232f297a57a5a743894a0e4a801fc3','admintest2@test.com','13260166090','Marburg','upload/default.jpg'),
(104,'admin3','M','21232f297a57a5a743894a0e4a801fc3','admintest3@test.com','13666666666','Marburg','upload/default.jpg');

/*Table structure for table `tb_clazz` */

DROP TABLE IF EXISTS `tb_clazz`;

CREATE TABLE `tb_clazz` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `number` int DEFAULT NULL,
  `introduction` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `headmaster` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `telephone` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `grade_name` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `tb_clazz` */

insert  into `tb_clazz`(`id`,`name`,`number`,`introduction`,`headmaster`,`email`,`telephone`,`grade_name`) values 
(1,'1st grade Class 1',30,'This class is the best class.','Niklas','Niklas@test.com','13260166090','1st grade'),
(2,'1st grade Class 2',28,'This class is the best class.','Leonard','Leonard@test.com','13260166090','1st grade'),
(3,'2nd grade Class 1',35,'This class is the best class.','Florian','Florian@test.com','13260166090','2nd grade'),
(4,'2nd grade Class 2',30,'This class is the best class.','Matthias','Matthias@test.com','13260166090','2nd grade'),
(5,'3rd grade Class 3',30,'This class is the best class.','Niklas','Niklas@test.com','13260166090','3rd grade'),
(6,'3rd grade Class 2',30,'This class is the best class.','Johannes','Johannes@test.com','13260166090','3rd grade'),
(7,'4th grade Class 1',30,'This class is the best class.','Sebastian','Sebastian@test.com','13260166090','4th grade');

/*Table structure for table `tb_grade` */

DROP TABLE IF EXISTS `tb_grade`;

CREATE TABLE `tb_grade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `manager` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `telephone` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `introduction` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`,`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `tb_grade` */

insert  into `tb_grade`(`id`,`name`,`manager`,`email`,`telephone`,`introduction`) values 
(1,'1st grade','Mike','mike@test.com','13260166090','1st grade is the best grade.'),
(2,'2nd grade','Laura','Laura@test.com','13260166090','2nd grade is the best grade.'),
(3,'3rd grade','Anna','anna@test.com','13666666666','This grade is the best grade.'),
(4,'4th grade','Julia','julia@test.com','13666666666','This grade is the best grade.'),
(5,'5th grade','Sophia','sophia@test.com','13666666666','This grade is the best grade.'),
(13,'6th grade','Lena','lena@test.com','13888888888','This grade is the best grade.');

/*Table structure for table `tb_student` */

DROP TABLE IF EXISTS `tb_student`;

CREATE TABLE `tb_student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sno` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `name` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `gender` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `telephone` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `introduction` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `portrait_path` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `clazz_name` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `tb_student` */

insert  into `tb_student`(`id`,`sno`,`name`,`gender`,`password`,`email`,`telephone`,`address`,`introduction`,`portrait_path`,`clazz_name`) values 
(1,'1001','Test9','M','e10adc3949ba59abbe56e057f20f883e','test@test.com','13260166090','Marburg','This student is the best.','upload/0de09ab88ba44731bc94ca558430fb13.png','1st grade Class 1'),
(2,'1002','Test8','F','e10adc3949ba59abbe56e057f20f883e','test@test.com','13260166090','Marburg','This student is the best.','upload/84f517f92b384724b619c8e233ee7e79.png','1st grade Class 1'),
(3,'1003','Test7','M','e10adc3949ba59abbe56e057f20f883e','test@test.com','13260166090','Marburg','This student is the best.','upload/2b257338325c4c8196e3d86b5ee2e17d.png','2nd grade Class 1'),
(4,'1004','Test6','F','e10adc3949ba59abbe56e057f20f883e','test@test.com','13260166090','Marburg','This student is the best.','upload/261b7450070d48818dd5a9b6213c2dad.png','2nd grade Class 1'),
(5,'1005','Test5','F','e10adc3949ba59abbe56e057f20f883e','test@test.com','13260166090','Marburg','This student is the best.','upload/2797d031d25a4a438b6a69d321998069.png','3rd grade Class 3'),
(6,'1006','Test4','M','e10adc3949ba59abbe56e057f20f883e','test@test.com','13260166090','Marburg','This student is the best.','upload/669a3259f15b4d019b4550cc4189f837.png','3rd grade Class 2'),
(7,'1007','Test3','F','e10adc3949ba59abbe56e057f20f883e','test@test.com','13260166090','Marburg','This student is the best.','upload/0baa3bbc3ec14004ad83bba1497a4504.png','3rd grade Class 2'),
(8,'1008','Test2','M','e10adc3949ba59abbe56e057f20f883e','test2@test.com','13260166090','Marburg','This student is the best.','upload/0baa3bbc3ec14004ad83bba1497a4504.png','4th grade Class 1'),
(10,'1010','Test1','M','e10adc3949ba59abbe56e057f20f883e','test1@test.com','13888888888','Marburg','This student is the best.','upload/0baa3bbc3ec14004ad83bba1497a4504.png','3rd grade Class 2');

/*Table structure for table `tb_teacher` */

DROP TABLE IF EXISTS `tb_teacher`;

CREATE TABLE `tb_teacher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tno` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `name` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `gender` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `telephone` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `portrait_path` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `clazz_name` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

/*Data for the table `tb_teacher` */

insert  into `tb_teacher`(`id`,`tno`,`name`,`gender`,`password`,`email`,`telephone`,`address`,`portrait_path`,`clazz_name`) values 
(1,'101','Leonard','M','123456','dasheng@163.com','13260166090','Marburg','upload/94a8b1b57f754b1286ea489799cef104.png','1st grade Class 1'),
(2,'102','Florian','M','e10adc3949ba59abbe56e057f20f883e','Leonard@test.com','13260166090','Marburg','upload/66533de0905c432d8737c99704afbf53.png','1st grade Class 2'),
(3,'103','Matthias','M','e10adc3949ba59abbe56e057f20f883e','xiaohan@163.com','13260166090','Marburg','upload/f6b093facf5e4277a45271f4ddcfdf5d.png','2nd grade Class 1'),
(4,'104','Hannah','F','e10adc3949ba59abbe56e057f20f883e','xiaoqiang@163.com','13260166090','Marburg','upload/bcb11ea25ea14633920b3786922776b6.png','2nd grade Class 2'),
(5,'105','Johannes','M','e10adc3949ba59abbe56e057f20f883e','xiaohua@163.com','13260166090','Marburg','upload/d60a03ec75f847beb3558e8c9ffe2f5f.png','3rd grade Class 3'),
(6,'106','Sebastian','M','e10adc3949ba59abbe56e057f20f883e','xiaozhao@163.com','13260166090','Marburg','upload/a6ee9956b4004e60a4457787e3772b26.png','3rd grade Class 2'),
(7,'107','Klara','F','e10adc3949ba59abbe56e057f20f883e','xiaofei@163.com','13260166090','Marburg','upload/c44c308d91234eac8d89c6673fb5bb06.png','4th grade Class 1'),
(8,'108','Niklas','M','e10adc3949ba59abbe56e057f20f883e','Niklas@test.com','13260166090','Marburg','upload/bd1ead4f0d89421a930d5666eb8ebdcc.png','1st grade Class 1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
