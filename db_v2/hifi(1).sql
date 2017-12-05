-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 05. 12 2017 kl. 17:15:56
-- Serverversion: 5.7.14
-- PHP-version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hifi`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `accesstokens`
--

CREATE TABLE `accesstokens` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `token` varchar(600) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `accesstokens`
--

INSERT INTO `accesstokens` (`id`, `userid`, `token`, `created`) VALUES
(2, 1, 'sha1$ef06f74f$1$5512ac4e4cd6d03688b924f88b71f5edd283ff72', '2017-10-05 14:52:46'),
(3, 1, '841abc3a494349216ae5a372ddde75a89148f119ca994e45a19e21f11eaf66c6595f37c4f459a87b7b2264ad4c10b40dff0b20e4dbc0717193ab17ce6eec24daee2e88fe03636cc6306e7bed163617702dc02db941c70bf0f544cec77c72aa0c62895d54c7fa8bf067d087caf30366bc4690931dad5fd36770052ea04786961e3398f7676c30342c60491c1b92a984bd1a5a1808b2a04761ca26a5857d002c3ee3bd63fbfaf9afc260d56962ad750b06bb8b7699a38a71fca607c345eca62712bac72c470e064359f81e74f30a3c1588a575b3ec26e20a4de1522bab96600dda77bec5a4c2ee8623fb2cea18a97684bbe6d64fc727d460cd0711fca038c5ee79', '2017-11-10 10:55:46'),
(4, 1, '677b6c109f21f6fe5bf89f1c37fdf0dac29d8abcfd213457e312a8d7078162babc6ce66a8f1b1fbc8aef05390b3d7341509606563600d37e1f10f8f63b362d540e5ae5b7155d6308de360600c461fc159c99e42fa1bdf24bddcf3c7f83ab6b0761f889d9a1f8a2b588cdfb461c6c77eab7f889e75fee61454aa61f140a8c2633e9d106bd8125b61aebfc2fe57368701c581780d467a1b2c22842e775752186c1f1e8cdd4621e9a93ca8429e498cdeaf9f5b98323c2c019af0d1a5e102e5f423a0dad9bac01e6dd42696a75bd90d616418aa801933e0894d7dfa1d489f4c9ebc5e255ffc6bce9a51f2f4b47802c81bf06ddd35d5b3d4febd75367f5f4ee880c03', '2017-11-10 12:46:11'),
(5, 1, '56ce3233a3f970111f427363f64e86d0302c0c88415d5b7f1feafefb9acaa1cc2055f72de9be6bb18e30241925674be36d339763870a70334d42895c97608517a74a20a81f4768af4bc6af592fec8798c0b6c6164db4c3c504ae80611e6736f56ece6679e52ef24c6d075cb8932a7878ee10a5cb668bd6b8f82975fb5c90acbc6b703b0dd37f1e858a2c52f678460a275098874096352d4cc2847f3a3168453d075a1077ff0493ab7a240ac1c2c950c8e6ed3f160a5eb42685f43f3dd5c5eddc97e60a8c849479efc3d8edca4c2b7b6efb1476bbb1b7cbb3e708b5ce50abc365ac56ee9c426c6da83f47d2400e2fe085da43af18e45f6a0401c8441183eac0de', '2017-11-10 12:46:47'),
(6, 1, 'e5634bed76d75a905a525ceb877f437650a13f89ab88dfab3ed333056b40a7501ee332bb496d08b8c536ce201ce1f03408dc9d9a05750d3c0eb5f851a8cae58180c92ba5829d5e7eb0c114fece54f2ee8c6c2e7961be316aeb92ebdf24ab182982e85cd779e1e3e8227ad5c15303617febb7f42eef238812c10ceac91aa1291b61678e135128af5501ad76babd7afb141bdd7275836c23184f7bddf6049822f910a6a51c519529dc3e23c4e7660de571054109cde71cd91c0775571251c48cfa34470a44361a91f5a248b7042649b6144a9b0d193c355dbc0e0ec1e5ef54c1ea5356ce45ccebee434335d8a8fcfd4989800e5a3332bbfe90bbdf2f6ff6dce080', '2017-11-10 12:47:35'),
(7, 1, 'f20e538a6109c609d4eff4845b0ef565edb43b9048213e1e4616c415c952f2c51a5a84375e4da54b11d1fd70296b1e9945496c7f1012ce9c639eb2800dc525f33aff537da6a3462c2505f621c5a2b58a639b13f7ed45cfccf374014a6e4afb0b156c85a70286fea6ea8c6f106b4b9c37fc71e9d6215405a8469aeced968eb9000532562bbac7622f9954a85221fb28d2721f5e3fdfa9e251593044a314120fd00c296e4c656af875498b79d730f2d73bbea99141821962da1779d9bc55b190432570170ae253247e4f29848d4621490fb5184a49a8fed42a0b8355b6cbd280e927513e8429b1a1b82b54e85e2c16344d832ea0e3391fb4b038da5e14eab276a3', '2017-11-10 13:02:03'),
(8, 1, '2cb7da0484786cb3e952064f9a9f49a03528be10c7084cf8732c326160afa8be4fe241c334a0c2f521eb4b410ad92e6ad658ea7bd413d6effc41b7cf11478b909b8313c34957da8be10f849a94c7055cfe3629f37c50c44ed1e71e803a392f96a2e8ec10161426d5fabe13df3333bbdba8b628847300776556d4aea1a6ba38a4c2f50a1132635b6202d8e0ee0ad5f3a95e4c649a4296059c8cf33b975c0d4f0f9da77cbe4d370e4af91607d63e204fc186dac996538439d71bb476069e8c875b13258a37f794ce7edb251d889461eb7758ea178f35dc5bd2013693173047b2727e244aefe0a6a9bb0a8bee7d1fe3590d9991188ba85d0a22cdfb337bc63ce7e2', '2017-11-15 10:13:55'),
(9, 1, 'c9a3631da7f79bcdfe751537eb89f79a9507daf8a7316a12e1ff78defa0ee0b707d0ee08137fc15da404486f8a919419d418f6146b8f4154f7edaedef187681c0799af3a48b4dea7e4e6dcda7121eac562d4cbb70220b76223487f6112f9a9a5ac84541c7d2bef20a25a007106a4de4e6d49a6b63e5a539e0e8e660b710ee3cb02671fc090cc13080f33d341954dfe1d4bc633dd814fd576776cd6e295eaf97cd3dd8230f975a099e81f44622c0cb8ca5332abfce0ff113fe6a30a2036395631249ba80711ec1e76d575c1fec97b6a794e0b4fd5c415a04856baaf69ceb5bab8e9ebeadff79e6cbbf4f5108b994fab7ef8743e3e1a4edeb913bb6af4b7bd5a22', '2017-11-15 10:59:20'),
(10, 1, '3fa096dd4d86710ddfaaa16a0cf3567d5a1c1e5e0d0a7eb0710d7dd9c2506f588da6276927cd8f11a89bd83421419f2ecdb7b6b0e10e24ee3a55f1bdc99e9b5db0284f8a86622b033108e5d3d193ee7dbe2987c54bd58496073c82bbcc7492e41ea37df5382cff4a61fde53c1a5966ae95f35db94575b084b79234154c9f3b784a0fcf90c1424cc62a65fc7078ebfeed50760ca042bb8099ac9b6eeeb8fd138d55d84fd5c3df061893ae00b13cc55277e3fb3325a244c2a85f10ceabcae1907d03772d14f7381e7cd1417c4a57e2284304f03a1a504983f725cce9008cc50e67213ff39474829f6e93f7225bb38d6fe5fd5efd55371f9fbab8362785181150b9', '2017-11-15 11:00:55'),
(11, 1, 'bf5ae3236b991783ba4fc7ca03e50506cbb5651709a2fc459bd14c2ee0f7567d2201549fe313ee6a4313655f109d5ad6dbb850ee63130e6d81430b0e0568e2325f1eba07aa0dcb46f1709fa049962465b6b10342ca3316111264971d5b1f9321d5efe231e84ff224d983384530228a35addadda842c4d5d89fad7a8008fd92960d8ed80945fa617c462d93105aa9a5b8c40c887013416d82e1c46c81a9d63a6b11051c929fd78fb0291b32848e5adb38e2a5089ad1441f4856eb6775b3d1084c703a2806be6fe33e7768501e485f05ac8883c3cb4b817f516f173a419182a4fdb176329f4b46314b66f6b9ff861d3c5d9338f09e966a098cad37edebc7274f4e', '2017-11-15 13:12:43'),
(12, 1, 'd696e13269d3b9b76101618f8ab01871c349efcf1f8be19d6d620f0c93e589c477a918c971de862adb23e72c322eae100941e453a0291f76f81bec5ca211b542f754b842f6d9ca53262c89a9f800f4bca6a7edb2c338fdf2d3e0ad73dc3cbdb1b4cddb588e525f95f7dab327519bac2be6915c6f4aee27061796aa572d69ffc8e443b4ec7d19dbd3c8e470e7c57fd80a151132af79c030a9b80f534dd4d2d4b305af7ee34d18c98e75b4ef21968d0156b80fab91bbf0a7fbd2b5e910ed61df6956286d850a179949c501cb6457405b42f917226c0890c4a4fc2400d01f3c9178f732d7feee32e08200ed3e399fecd18d8b3916c5043dcb92941f2df5598bd66f', '2017-11-15 14:07:51'),
(13, 1, '1e5480704290cfd8fd47c76e3b8fd19f3575e5cd070d7330e51d20e7040c847d29367c36aa6b8008aacc9fd750b4eeb2f72d3fa42d3716e9ab5c4522497382d7097dc76f38633ffa92601ad8f8d1bfcd93fc54d99da70b4c49447543579138a7a3764124410d84611588c25c38fbb969c55c2e64d24e9c495db7cbbecb55ece0291b635044babd1bb5ad37ea2a56b91bf84afc6935aa33693c54699bec08bbf93b89097fce7cb8c46b13a37d6cb5dda4b05e52a7b3e78d7fc47ac5fe076b41f647067a731c4e44d394015912ab1ea88f03a6974f4b421f1b2cd963d7a5d4f60aeb6c6b04e30dd650a94c8b881c8a1b1a845c87ae4fbb268ba03d0878b68d7f02', '2017-11-16 12:09:42'),
(14, 1, '302736adf307c5b096fb36afa3de69248fb15d4eed783f72384a7217e6e2fb1cd6cbe0c136d67617c8be143cd7090d26c1bfa21c14e0f10814b9c0a1885ee4e7bd015958fea749daf8a1972d0fd579cfabe97e87232438b28c60bfb97f2f6b1c1071800b782176516865bb5b190db92f8dba82329e248c509c79616fca1930bf2d7b37d555b5808223ed2f4da8522eb8d7c18dcb78211fe193cd9c1f462f390b44f16fa9d3a925846521eb28d6c4bb0e1201f5bc43689ef2dbef1b5801935a35ccc788a8fce4266bd04658ce1a5cc1b6273a8d1c61e3c298ddfa057e18bc8cda90e74093b23de08b801b5164611541caa9afbcd88ce738f9c93bd6315745c94a', '2017-11-16 12:13:11'),
(15, 1, 'a300c584936cf4882870e44cfb8685c5ea1ddd3d73700236b19cf665500bffe33bfbfd8fbc71cf941260ee9d77a460a4ec69cd393f9c2c45f6ee2235f8232c3850650360cbc691c800fa4373764f23fe41a04a3ef0202ce65050520193f23f5c94e2540401f0725224e72b62e227e0b0bd524c4d566b9518fe19f34c94c5a6a302e747694b6d6f5cec5caa6628f7b6aaa44a598671ed8579f3e5cc5c41624af00d93bd5a462dc493d867f3b0f8498efa9a0f6ddfdf3fd03ed5f98d2222616798ecce3c688219c7889201dbe9434cdca2fc945abafae2b5b43ede286f23e7562375bda4693f28f721e4d2cb1528dae35a3f09642f8cd8aff5276ebc98f4901736', '2017-11-16 12:14:08'),
(16, 1, '8e7cad211e8bed252376707e6cc3753c454c118f82596f380a9ff2b51e465abe5d9a08bc21289297daf4454c430e2bc785e1be48997d3f6d414dc933c5fd866c23f0040543eb09464a533df1ab88b8298a5e15de927fa503f94fee3eaad4acf6c8e22366eed6583fcf362d1caf3aeff3e4a1f1b1b608193b130f1fcfb75ddfe7f76eb9e4ffe2a7ec8e1f388b7ac2595b4e0b6e6a44672b0b2e19e6e866bff6ee874b533aac0bb66eda00c69c24ffcdd93ef8c244dddce0f4baf2e68011c4de3f682691f4e1532312d46d28cef508ce013127a6c49c0a9b69abe004b0679d4c3a8010bc7058f99694eed329a84bac7905169f060a58832b1831cf8a4feccd0d2e', '2017-11-16 12:53:17'),
(17, 1, '9a1f20cc258a5a704dec11bfe280f07ca6b52789a1660fad95b3551d35c01b26142d892bb718388c079ab42de65bf757610ba38058ad1051ae8b64613e374f0eca6c49a0e7d0f7226aee6131ec3ff99f35531944a005b0b8a8b98817bac8891ff4a36309d62961578badc0b560cae3e0f620fa19914d93ab99221893b1c285958f41b36094c20db101b149c7cecafb364f394b854d71a39ee5d440e0aae1e1d89f63b3ede861c58be1c1cb76d03a58f438368663fec0b83307c7634e2ca77720f82294df3d35918e11889ae5f50c6d4fa978f2a35d2466dfa0234af3bd1fd9e31237493b1a64ac2364215c80b811d071fe859d2613f85443a07682df02142e0a', '2017-11-16 13:56:15'),
(18, 1, '39fe2747800360b0cbf74fe9477889851a22c31c2d8de46bb543a012c010d2c7875d7e3e68edcc21afcd5f1b09eed0cd816dcb1b51433fe4b87fc059b68fe17f38a39042ead512a8c6d099be4e66578eca30dc4128c447eea37350f33369549ebc1b35f0f59610299169e4b431b48e3d048e0d157cdbd5abefb0024d5ee7c706fe76ca3157dbe998e6cfbe25a9b2941f062d21aa2d6073bdb90bb24dc5b2af6a67241803ad3a02c9241517c9763e3a26c909d5e69baacc226eb435391fe7a9a06f1d6c4414511d236ee17990591d9ead009c6f84b1701826f2b8ef503d10436198591cc671f7b3af683f0ae52e10c8e59b70abd9a2cda7b8b93c4de902618a79', '2017-11-16 14:23:38'),
(19, 1, '4273b2090ed42cd99c659ecb17c9d866de77a06d96d923ba7e6a4e06c23a786d2c745190066b21ca4f094dfb2e620be35fd4e86b655eb608ec6f09265c1edb665feae363bc1a3a894a41f5977de980bebbe5728ddaf6b5f1fe5819167a1e1c5e83c0d1806d959a1ad42346c20b075b7af4b80191c12ee37e663238f78e50e80754ebd1c9ac8a8b07487af8941637e15fafd15951cd9c4c0e475ba6dd027f3f09b577ab0c593d203981d46480fd437718ddaf7d2208299eeffa7f69842ca4e92973cb20154e898670ac49c401ac1fdcee396da07aae104823d4d529fff59524fea14cea0f3abef04d87be69bcb8d432ffe8df8cd36dc821fcbdcd9a9fdeb43e05', '2017-11-16 14:59:32');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `formular`
--

CREATE TABLE `formular` (
  `id` int(11) NOT NULL,
  `navn` varchar(25) NOT NULL,
  `email` varchar(35) NOT NULL,
  `besked` text NOT NULL,
  `oprettet` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `formular`
--

INSERT INTO `formular` (`id`, `navn`, `email`, `besked`, `oprettet`) VALUES
(1, '', '', 'hej', '2017-09-28 08:52:23'),
(2, 'nat', 'nat@gmail.com', 'hej', '2017-09-28 10:29:23'),
(3, 'nat', 'nallemuzen@gmail.com', 'hejas', '2017-09-28 14:00:23'),
(4, 'Nat', 'nallemuzen@gmail.com', 'GFYT', '2017-09-28 14:10:47'),
(5, 'er', 'nallemuzen@gmail.com', 'test igen', '2017-09-28 14:12:20'),
(6, 'Nat', 'nallemuzen@gmail.com', 'sdfe', '2017-09-28 14:19:44'),
(7, 'ewrrtw', 'nallemuzen@gmail.com', 'earfr', '2017-09-28 14:21:40'),
(8, 'nat', 'nallemuzen@gmail.com', 'wqe', '2017-09-28 14:26:25'),
(9, 'Emilia', 'nallemuzen@gmail.com', 'hej', '2017-09-28 14:29:40'),
(10, 'retaet', 'nallemuzen@gmail.com', 'attwqr', '2017-09-28 14:38:32'),
(11, 'nat', 'nallemuzen@gmail.com', 'khdfoih', '2017-09-28 14:40:30'),
(12, 'nat', 'nallemuzen@gmail.com', 'Morgen besked!', '2017-09-29 08:11:08'),
(13, 'nat', 'nallemuzen@gmail.com', 'Morgen tets to!', '2017-09-29 08:14:35'),
(23, 'Emilie', 'emilie@hej.dk', 'Det her er bare super cool!', '2017-09-29 12:09:56'),
(24, 'Natasja', 'nallemuzen@gmail.com', 'Morgen test mandag d. 2/10 - 2017', '2017-10-02 08:19:49'),
(25, 'Nat', 'nallemuzen@gmail.com', 'Morgen test tirsdag! ', '2017-10-03 08:14:53'),
(28, 'Natasja', 'natmuz@gmail.com', 'Testing efter CRUD virker...', '2017-10-03 09:55:12'),
(29, 'Natasja', 'natmuz@gmail.com', 'Morgen test fredag jaaaa!', '2017-10-06 08:22:04'),
(32, 'testing igen', 'nallemuzen@gmail.com', 'Hej', '2017-10-06 10:14:27'),
(33, 'Nat', 'nallemuzen@gmail.com', 'Virker det her mon? Mandag yay yay!', '2017-11-06 09:05:50'),
(34, 'Natasja', 'hej@gmail.com', '?', '2017-11-06 11:01:55'),
(35, 'erw', 'gggg@gmail.com', 'ff', '2017-11-06 12:41:28'),
(36, 'Natasja', 'skdhjkh@gmail.com', 'HEEEEEJ', '2017-11-06 13:02:30'),
(37, 'g', 'ggg@gmail.com', 'hhjh', '2017-11-07 10:45:32'),
(38, 'Natasja', 'nat@gmail.com', 'Test med update?', '2017-11-07 13:47:08'),
(39, 'Natasja', 'nat@gmail.com', 'HEj fredags test', '2017-11-10 09:17:10');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kategori`
--

CREATE TABLE `kategori` (
  `ID` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `kategori`
--

INSERT INTO `kategori` (`ID`, `kategori`) VALUES
(1, 'CD Afspillere'),
(2, 'DVD Afspillere'),
(3, 'Effektforstærkere'),
(4, 'Forforstærkere'),
(5, 'Højtalere'),
(6, 'Int. Forstærkere'),
(7, 'Pladespillere'),
(8, 'Rørforstærkere');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `producent`
--

CREATE TABLE `producent` (
  `ID` int(11) NOT NULL,
  `producent` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `producent`
--

INSERT INTO `producent` (`ID`, `producent`) VALUES
(1, 'Creek Audio Ltd'),
(2, 'Exposure'),
(3, 'Parasound'),
(4, 'Manley'),
(5, 'Pro-ject Audio Systems'),
(6, 'Bösendorfer'),
(7, 'Epos Ltd'),
(8, 'Harbeth Loudspeakers'),
(9, 'Jolida');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `produkter`
--

CREATE TABLE `produkter` (
  `id` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL,
  `pris` decimal(5,0) NOT NULL COMMENT 'Pris i kr',
  `beskrivelse` text NOT NULL,
  `fk_kategori_id` int(11) NOT NULL,
  `fk_producent` int(11) NOT NULL,
  `billede` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `produkter`
--

INSERT INTO `produkter` (`id`, `navn`, `pris`, `beskrivelse`, `fk_kategori_id`, `fk_producent`, `billede`) VALUES
(1, 'Creek Classic', '800', 'Der er kun et ord a sige om Creek Classic: Classic!', 1, 1, 'creek_classic_cd.jpg'),
(2, 'Creek Destiny', '600', 'Creek Destiny er god til en hver musik elsker', 1, 1, 'creek_Destiny_CD.jpg'),
(3, 'Creek Evo', '870', 'God performance', 1, 1, 'creek_evo_cd.jpg'),
(4, 'Exp 2010S', '1000', 'Vores dyreste CD afspiller, og den bedste', 1, 1, 'Exp_2010S_CD.gif'),
(5, 'Creek Classic DVD', '500', 'Træt af DVD afspilleren uden HD? Creek Classic DVD løser problemet, med understøttelse af 720 og 1080 kvalitet.', 2, 1, 'creek_classic.jpg'),
(6, 'Exposure 2010S', '500', 'God til den dedikeret person', 2, 2, 'exposure_2010S.jpg'),
(11, 'Parasound D200', '400', 'D200 er budgetvenlig og brugervenlig', 2, 3, 'parasound_d200.jpg'),
(12, 'Parasound Halo p3', '750', 'Parasound Halo p3 deler navn med radiokanalen p3 den deler også den gode kvalitet', 2, 3, 'parasound_halop3.jpg'),
(13, 'Manley Mahi', '1200', 'Mahi modellen er den nyeste model i serien og du kan få den for kune 1.200 kroner', 3, 4, 'manley_mahi.jpg'),
(14, 'Manley Neoclassic 300b', '900', 'Neoclassic 300b er værd for entusiasterne at overveje', 3, 4, 'manley_neoclassic300b.jpg'),
(15, 'Manley Snapper', '2000', 'Ikke nok med den har et fedt navn i form af "Snapper" så har den også en fed performance!', 3, 4, 'manley_snapper.jpg'),
(16, 'Parasound Haloa 23', '500', 'Parasound Haloa 23 er den første version i Halo model serien, værd at overveje', 3, 3, 'parasound_haloa23.jpg'),
(17, 'Creek OBH 22 Passive Preamp', '400', 'God pris', 4, 1, 'Creek_OBH_22_Passive_Preamp.jpg'),
(18, 'Parasound Classic 7100', '800', 'Parasound classic 7100 er en god ting at overveje for entusiasterne', 4, 3, 'parasound_classic7100.jpg'),
(19, 'Parasound Halo d3', '750', 'Vores Halo d3 model deler ikke kun navn med det fantastiske spil Halo den deler også vores vanvittigt gode produkter til gode priser', 4, 3, 'parasound_halod3.jpg'),
(20, 'Project Prebox', '630', 'Project Prebox er værd at overveje for en hvilken som helst HI-FI entusiast', 4, 5, 'Project_prebox.jpg'),
(21, 'Boesendorfer Vcs  Wall', '250', 'Væghøjtalerne ser elegante ud og har en elegant pris', 5, 6, 'boesendorfer_vcs_wall.gif'),
(22, 'Epos m5', '880', 'Epos = god performance', 5, 7, 'epos_m5.gif'),
(23, 'Harbeth Hl7es2', '900', 'God lyd, god pris', 5, 8, 'harbeth_hl7es2.jpg'),
(24, 'Harbeth Monitor30', '2000', 'Vores Harbeth monitor 30 model er god til store forsamlinger uanset om du bruger dem til karaoke eller radioen', 5, 8, 'harbeth_monitor30.jpg'),
(25, 'Harbeth P3es2', '600', 'Harbeth P3es2 er et sæt gode højtalere til musik entusiasten', 5, 8, 'harbeth_p3es2.jpg'),
(26, 'Creek A50I', '700', 'A50I modellen performer, altid', 6, 1, 'creek_a50I.jpg'),
(27, 'Creek Classic 5350SE', '925', 'Nogle vil mene 925 er dyrt men du får en hel del med i prisen, god performance, god kvalitet osv', 6, 1, 'creek_classic5350SE.jpg'),
(30, 'Creek Destiny  Amp', '300', 'Destiny Amp modellen er billig men bestemt værd at overveje', 6, 1, 'creek_Destiny_CD.jpg'),
(31, 'Manley Snapper int._forstaerkere', '600', 'Manley snapper har fremragende kvalitet', 6, 4, 'manley_neoclassic300b.jpg'),
(32, 'Manley Stingray', '500', 'Stingray modellen er vores nyeste, prøv den!', 6, 4, 'Manley_Stingray.jpg'),
(33, 'Pro Ject Debut 3 BL', '999', 'Vores Pro-ject pladespiller i den blå model er meget eksklusiv', 7, 5, 'Pro_ject_Debut_3_bl.jpg'),
(34, 'Pro ject Debut III red 1', '800', 'Den røde pladespiller model er fra vores "love is in the air" kampagne, begrænset antal', 7, 5, 'Pro_ject_Debut_III_red_1.jpg'),
(35, 'Pro ject Debut III yellow 1', '1000', 'Den gule pladespiller model er vores opgraderet model, den performer godt', 7, 5, 'Pro_ject_Debut_III_yellow_1.jpg'),
(36, 'Pro Ject rpm 5', '490', 'En stor performance til en lille pris', 7, 5, 'Pro_ject_rpm_5.jpg'),
(37, 'Pro Ject rpm10', '300', 'Hvis du vil have noget budgetvenligt så er denne model fantastisk!', 7, 5, 'Pro_ject_rpm10.jpg'),
(38, 'Jolida JD102b', '560', 'God performance', 8, 9, 'jolida_JD102b.jpg'),
(39, 'Jolida JD202a', '1200', 'Vores 202a model er en opgradering af vores 102 model, bedre kvalitet', 8, 9, 'jolida_JD202a.jpg'),
(40, 'Jolida JD300b', '1400', 'JD 300b er vores dyreste model men også den absolut bedst performende, den er prisen værd', 8, 9, 'jolida_JD300b.jpg'),
(41, 'Jolida JD302b', '400', 'JD302b er vores budgetvenlige model af JD 300b modellen, kan næsten matche den anden model', 8, 9, 'jolida_JD302b.jpg'),
(42, 'Jolida JD502b', '350', 'JD502 modellen er vores slim model, den er mindre og mere rejsevenlig', 8, 9, 'jolida_JD502b.jpg');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rolle` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `rolle`) VALUES
(1, 'Natasja', 'sha1$3d214d2d$1$747e32232c354579021173bbf29f284beee6829b', 0),
(2, 'admin', '123', 1);

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `accesstokens`
--
ALTER TABLE `accesstokens`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `formular`
--
ALTER TABLE `formular`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`);

--
-- Indeks for tabel `producent`
--
ALTER TABLE `producent`
  ADD PRIMARY KEY (`ID`);

--
-- Indeks for tabel `produkter`
--
ALTER TABLE `produkter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `navn` (`navn`),
  ADD KEY `fk_kategori_id` (`fk_kategori_id`),
  ADD KEY `fk_producent` (`fk_producent`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `accesstokens`
--
ALTER TABLE `accesstokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- Tilføj AUTO_INCREMENT i tabel `formular`
--
ALTER TABLE `formular`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- Tilføj AUTO_INCREMENT i tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Tilføj AUTO_INCREMENT i tabel `producent`
--
ALTER TABLE `producent`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Tilføj AUTO_INCREMENT i tabel `produkter`
--
ALTER TABLE `produkter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `produkter`
--
ALTER TABLE `produkter`
  ADD CONSTRAINT `produkter_ibfk_1` FOREIGN KEY (`fk_kategori_id`) REFERENCES `kategori` (`ID`),
  ADD CONSTRAINT `produkter_ibfk_2` FOREIGN KEY (`fk_producent`) REFERENCES `producent` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
