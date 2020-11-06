-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2020 at 02:54 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `physiotherapy_exercises`
--

-- --------------------------------------------------------

--
-- Table structure for table `exerciseproperties`
--

CREATE TABLE `exerciseproperties` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `condition` varchar(255) DEFAULT NULL,
  `difficulty` varchar(255) DEFAULT NULL,
  `equipment` varchar(255) DEFAULT NULL,
  `exerciseType` varchar(255) DEFAULT NULL,
  `bodyPart` varchar(255) DEFAULT NULL,
  `ageCategory` varchar(255) DEFAULT NULL,
  `imageOrientation` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exerciseproperties`
--

INSERT INTO `exerciseproperties` (`id`, `title`, `condition`, `difficulty`, `equipment`, `exerciseType`, `bodyPart`, `ageCategory`, `imageOrientation`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
(1, 'Tetraplegia', 'C1-C4 Tetraplegia', 'Low', 'Free weights', 'Stretching/ROW', 'Head/neck', 'Infant/young child', 'Not specified', 'img1.jpg', '2020-11-05 14:21:26', '2020-11-05 14:21:26'),
(2, 'Tetraplegia', 'C1-C4 Tetraplegia', 'Low', 'Free weights', 'Stretching/ROW', 'Head/neck', 'Infant/young child', 'Not specified', 'img2.jpg', '2020-11-05 14:22:02', '2020-11-05 14:22:02'),
(3, 'Tetraplegia', 'C1-C4 Tetraplegia', 'High', 'Free weights', 'Stretching/ROW', 'Head/neck', 'Infant/young child', 'Not specified', 'img3.jpg', '2020-11-05 14:22:39', '2020-11-05 14:22:39'),
(4, 'Strok', 'Strok', 'Medium', 'Weight machine', 'Fitness training', 'Shoulder/upper arm', 'Adult', 'Left specified', 'img4.jpg', '2020-11-05 14:22:54', '2020-11-05 14:22:54'),
(5, 'Traumatic brain injury', 'Traumatic brain injury', 'Medium', 'Weight machine', 'Control exercises', 'Shoulder/upper arm', 'Child', 'Left specified', 'img5.jpg', '2020-11-05 14:23:12', '2020-11-05 14:23:12'),
(6, 'Motor delay', 'Motor delay', 'Low', 'Weight machine', 'Fitness training', 'Elbow/forearm', 'Child', 'Right specified', 'img6.jpg', '2020-11-05 14:23:35', '2020-11-05 14:23:35'),
(7, 'Tetraplegia', 'C6 Tetraplegia', 'Low', 'Wall mounted pulleys', 'Control exercises', 'Elbow/forearm', 'Child', 'Not specified', 'img7.jpg', '2020-11-05 14:23:46', '2020-11-05 14:23:46'),
(8, 'Motor delay', 'Motor delay', 'Low', 'Free weights', 'Control exercises', 'Elbow/forearm', 'Senior', 'Right specified', 'img8.jpg', '2020-11-05 14:24:03', '2020-11-05 14:24:03'),
(9, 'Motor delay', 'Motor dela', 'Low', 'Wall mounted pulleys', 'Fitness training', 'Elbow/forearm', 'Senior', 'Left specified', 'img9.jpg', '2020-11-05 14:24:27', '2020-11-05 14:24:27'),
(10, 'Tetraplegia', 'C5 Tetraplegia', 'High', 'Free weights', 'Fitness training', 'Head/neck', 'Senior', 'Right specified', 'img10.jpg', '2020-11-05 14:24:39', '2020-11-05 14:24:39'),
(11, 'Tetraplegia', 'C6 Tetraplegia', 'Medium', 'Wall mounted pulleys', 'Fitness training', 'Head/neck', 'Senior', 'Right specified', 'img11.jpg', '2020-11-05 14:24:53', '2020-11-05 14:24:53'),
(12, 'Tetraplegia', 'C5 Tetraplegia', 'Medium', 'Weight machine', 'Control exercises', 'Head/neck', 'Senior', 'Not specified', 'img12.jpg', '2020-11-05 14:25:06', '2020-11-05 14:25:06'),
(13, 'Motor dela', 'Motor dela', 'Low', 'Weight machine', 'Fitness training', 'Shoulder/upper arm', 'Child', 'Left specified', 'img13.jpg', '2020-11-05 14:25:21', '2020-11-05 14:25:21'),
(14, 'Tetraplegia', 'C6 Tetraplegia', 'Low', 'Weight machine', 'Fitness training', 'Shoulder/upper arm', 'Senior', 'Right specified', 'img14.jpg', '2020-11-05 14:25:41', '2020-11-05 14:25:41'),
(15, 'Tetraplegia', 'C6 Tetraplegia', 'High', 'Free weights', 'Control exercises', 'Shoulder/upper arm', 'Senior', 'Right specified', 'img14.jpg', '2020-11-05 14:25:53', '2020-11-05 14:25:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exerciseproperties`
--
ALTER TABLE `exerciseproperties`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exerciseproperties`
--
ALTER TABLE `exerciseproperties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
