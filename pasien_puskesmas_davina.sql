-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 12:28 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2205946_davinanazwa_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `pasien_puskesmas_davina`
--

CREATE TABLE `pasien_puskesmas_davina` (
  `id` int(11) NOT NULL,
  `nama` varchar(75) NOT NULL,
  `usia` int(11) NOT NULL,
  `jenis_kelamin` varchar(25) NOT NULL,
  `alamat` varchar(125) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pasien_puskesmas_davina`
--

INSERT INTO `pasien_puskesmas_davina` (`id`, `nama`, `usia`, `jenis_kelamin`, `alamat`, `deskripsi`) VALUES
(1, 'Satoru Gojo', 28, 'Laki-laki', 'Jl. Shibuya', 'Kepala terasa pusing, badan pegal-pegal, dan tidur tidak teratur'),
(2, 'Megumi Fushiguro', 18, 'Laki-laki', 'Jl. Fujiko', 'Badan terasa berat, sering kunang-kunang'),
(3, 'Suguru Geto', 27, 'Laki-laki', 'Jl. Asakusa', 'Tidur tidak teratur, sulit menelan makan, sering sakit di bagian kerongkongan'),
(4, 'Nanami Kento', 27, 'Laki-laki', 'Jl. Kuantan', 'Badan pegal-pegal, meriang, dan tidak bisa tidur'),
(5, 'Shoko Ieri', 28, 'Perempuan', 'Jl. Akihabara', 'Sulit menggerakan kedua tangan, nafas terasa berat'),
(9, 'Toji Fushiguro', 47, 'Laki-laki', 'Jl. Osaka', 'Badan pegal-pegal, kepala sakit saat menengok'),
(10, 'Davina Nazwa', 19, 'Perempuan', 'Jl. Kyoto', 'Sakit badan, pegal-pegal'),
(12, 'Rin Itoshi', 18, 'Laki-laki', 'Jl. Kenanga', 'Badan pegal-pegal'),
(14, 'Haibara Yuu', 17, 'Laki-laki', 'Jl. Jujutsu', 'Sakit kepala, sakit pinggang'),
(22, 'Sae Itoshi', 20, 'Laki-laki', 'Jl. Bintang', 'Sakit kepala, sakit pinggang, mata berkunang-kunang');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasien_puskesmas_davina`
--
ALTER TABLE `pasien_puskesmas_davina`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pasien_puskesmas_davina`
--
ALTER TABLE `pasien_puskesmas_davina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
