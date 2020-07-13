CREATE TABLE `db` (
  `id` INT(6) AUTO_INCREMENT PRIMARY KEY,
  `nm_marca` VARCHAR(30) NOT NULL,
  `nm_veiculo` VARCHAR(45) NOT NULL,
  `ano` INT() NOT NULL,
  `nm_descricao` VARCHAR(3000) NOT NULL,
  `vendido` TINYINT(1),
  `created`: Datetime,
  `updated`: Datetime

)