const vouchers = [
    {
        link: 'https://shope.ee/7f3wdSeLrw',
        type: 'discount',
        title: 'Giảm 50%',
        description: 'Tối đa ₫50k',
        date: 'Sắp hết hạn: Còn'
    },
    {
        link: 'https://shope.ee/AUNtBYXFFk',
        type: 'ship',
        title: 'Giảm tối đa ₫15k',
        description: 'Đơn tối thiểu ₫50k',
        date: 'Sắp hết hạn: Còn'
    },
    {
        link: 'https://shope.ee/7f3wdSeLrw',
        type: 'discount',
        title: 'Giảm 10%',
        description: 'Giảm tối đa ₫70k',
        date: 'Sắp hết hạn: Còn'
    },
    {
        link: 'https://shope.ee/4pjshbx9Rw',
        type: 'discount',
        title: 'Giảm 10%',
        description: 'Đơn tối thiểu ₫500k. Giảm tối đa ₫70k',
        date: 'Sắp hết hạn: Còn'
    },
]
//1 do meo ban
//2 Váy,set bộ
//3 đồ ngủ
//4 áo thun, croptop
//5 sweater hoodie jacket
//6 cardigan 
//7 giày
//8 phụ kiện, balo
//9 mỹ phẩm

//20/5
//do meo ban---------------------------------------------------------------------------------------------------------------------------
const panel1 = [
    //tạm thời ---------------------------------------------TẠM THỜI--------------------------------------------------------
    {
        "img": "https://down-vn.img.susercontent.com/file/3864cdbfb210ff56968bd2a0cedb11f8",
        "text": "Áo len xù dài tay cổ lượn viền xám tingoan TIFFANY TOP/GR vải mới nhất t5.2023",
        "link": "https://shope.ee/7pOGoVNMZt"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/cdd8b84ea10f548c815d6e5d6f7021e9",
        "text": "Áo sơ mi vải nhung tăm tay dài nam nữ dáng rộng cao cấp DAVUBA SM007",
        "link": "https://shope.ee/1q7Ao6m21c"
    }, {
        "img": "https://down-vn.img.susercontent.com/file/3f639e1fb44ab79f2883083120b25e18",
        "text": "Dây chuyền bạc nữ Miuu Silver, vòng cổ bạc đính 1 viên đá nhỏ xinh Elisie Necklace",
        "link": "https://shope.ee/qEI1xunb1"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/8395e5b8ab0a157fe0fa7055dbdbc2e0",
        "text": "Dây chuyền bạc Miuu Silver, vòng cổ nữ hình cái nơ đính đá xinh xắn, sang trọng",
        "link": "https://shope.ee/7UlBy8FuQC"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgm26vj394xefe",
        "text": "GWEN SENTINIALS BABY TEE áo thun form baby tee",
        "link": "https://shope.ee/2ffwDQlObb"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-p5iejwuinenv5c",
        "text": "Chân váy nữ STELLA chân váy ngắn chữ A chất kaki co giãn túi trước phong cách basic Jem Closet Studio 3416",
        "link": "https://shope.ee/3fY1j8GQb2"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfs2cjxscqjucf",
        "text": "Áo Phông Nữ Dập Chữ Cá Tính JEM CLOSET Chất Cotton Form Rộng Siêu Thoải Mái LANEN 10457",
        "link": "https://shope.ee/AUOLrT0C5h"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf41667100uva7",
        "text": "TEE LOGO SENTINIALS áo thun tay ngắn",
        "link": "https://shope.ee/4V72JxeVxg"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-8ikp68yyyvova4",
        "text": "LONGSLEEVE ILLUSION SENTINIALS áo tay dài",
        "link": "https://shope.ee/6fAiMyjCgD"
    },
    //tạm thời ------------------------------------------------TẠM THỜI-----------------------------------------------------
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-4x27qiebh9nv83",
        "text": "Gọng kính cận nam nữ Lilyeyewear chất liệu kim loại mắt đa giác thanh mảnh 2808",
        "link": "https://shope.ee/5pbPn35gVk"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-vncet2wch9nvb5",
        "text": "Gọng kính nam nữ Lilyeyewear kim loại càng nhựa, mắt tròn, nhiều màu 6214",
        "link": "https://shope.ee/5UyYzgsucS"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134201-23030-ncgcvffhygov4e",
        "text": "Lắc chân bạc nữ mèo chuông Miu Miu chất liệu bạc S925 thời trang phụ kiện trang sức nữ Viễn Chí Bảo L500079",
        "link": "https://shope.ee/20OYsPHBKq"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-2nw05latg6kv0f",
        "text": "Dây chuyền thiên nga CDE Crystal Swan Necklace Silver CDE6042SV - Dây chuyền bạc nữ",
        "link": "https://shope.ee/8Ubs8QeJ9c"
    },
    {
        "img": "https://cf.shopee.vn/file/496464140a11455b3f46770bd9edb203_tn",
        "text": "SENTINIALS HEAVY HOODIEZIP áo khoác dây kéo",
        "link": "https://shope.ee/1VRtivjdti"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/AA4B73A3-06FA-4A2D-B607-135EABF23AA4.jpeg",
        "text": "WINDBREAKER @sentinials JACKET áo khoác dù",
        "link": "https://shope.ee/8zXkxLI2RE"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/B3A321DD-C4DC-425F-A7B2-89B17A6B5D17.jpeg",
        "text": "SWEATER HOLIDAY'S SENTINIALS áo tay dài ",
        "link": "https://shope.ee/8Ube3m6XhZ"
    },
    {
        "img": "https://cf.shopee.vn/file/b94dafe3b6c8d93b214bddc21bbad321_tn",
        "text": "HIGHNECK DENIM JACKET áo khoác denim",
        "link": "https://shope.ee/AwW8RKex6"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/tdn3vXJV6agLGycQgOogrMlga7mXH1A6qbVGhRLq.jpeg",
        "text": "HOODIE ROGUE OLD-SCHOOL",
        "link": "https://shope.ee/3VCpEoVawy"
    },
    {
        "img": "https://cf.shopee.vn/file/392ca349822bc6476f29fe8b69371e50_tn",
        "text": "BASSBALL “09” JACKET áo khoác bóng chày",
        "link": "https://shope.ee/501ltHuGfZ"
    },
    {
        "img": "https://cf.shopee.vn/file/d27bca8251619874966bb884b646b123_tn",
        "text": "SWEATER SENTINIALS WINTER’S VIBE",
        "link": "https://shope.ee/6zmqGwrSRE"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-er5hy1236tkv90_tn",
        "text": "WINDBREAKER @sentinials JACKET áo khoác dù chính hãng",
        "link": "https://shope.ee/2fdr6xm9Zp"
    },
    {
        "img": "https://cf.shopee.vn/file/d52b38e6a93237d026f46164b954f696_tn",
        "text": "HOODIE ROGUE OLDSCHOOL áo hoodie màu Đỏ",
        "link": "https://shope.ee/6KX9Tf99d3"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/E63D2909-932A-4283-9100-59F28CEEE0A0.jpeg",
        "text": "CARDIGAN SENTINIALS",
        "link": "https://shope.ee/4piLgsbjw8"
    },
    {
        "img": "https://cf.shopee.vn/file/be4500077fefdbff1f1a358ffb5ed9a6_tn",
        "text": "STRIPES JACKET áo khoác dù",
        "link": "https://shope.ee/1L8TWQG42K"
    },
    {
        "img": "https://cf.shopee.vn/file/f24c477c517ca487c6f2053f4b36193f_tn",
        "text": "HOODIE ROGUE OLDSCHOOL 4 MÀU MỚI áo hoodie",
        "link": "https://shope.ee/4fOtJ86vcw"
    },
    {
        "img": "https://cf.shopee.vn/file/8591307f2d4600b9733e4bd209f4a17c_tn",
        "text": "HOODIE SENTINIALS PINK BASIC áo hoodie",
        "link": "https://shope.ee/5ALC5PP5Lq"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/Einai5rQbIb9LVU8aep8prkP2SU9mF4xcRMwgnib.jpeg",
        "text": "HOODIE ROGUE OLDSCHOOL áo hoodie 5 MÀU MỚI",
        "link": "https://shope.ee/VZMWmuqjB"
    },
    {
        "img": "https://cf.shopee.vn/file/7733f01668ca734076fb478f0ea0acc6_tn",
        "text": "HOODIE SENTINIALS WINTER’S VIBE (áo hoodie)",
        "link": "https://shope.ee/89ynelHhi5"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/eayvAxebwW70JlDhwCpl4XfoCJdrvM8JjvwcBSiD.jpeg",
        "text": "LONG SLEEVE R. SENTINIALS",
        "link": "https://shope.ee/89ynelHhi5"
    },
    {
        "img": "https://cf.shopee.vn/file/f24c477c517ca487c6f2053f4b36193f_tn",
        "text": "HOODIE ROGUE OLDSCHOOL 4 MÀU MỚI áo hoodie",
        "link": "https://shope.ee/4fOtJ86vcw"
    },
    {
        "img": "https://cf.shopee.vn/file/7312a92d6cdb7c21298f1ecd8af04141_tn",
        "text": "POLO “09” SWEATSHIRT (áo polo)",
        "link": "https://shope.ee/5fHSg8jlWm"
    },
    {
        "img": "https://cf.shopee.vn/file/61d56eb5dd87bb9dd466e351ace030c7_tn",
        "text": "POLO “09” SWEATSHIRT",
        "link": "https://shope.ee/7f2X3ntbXs"
    },
    {
        "img": "https://cf.shopee.vn/file/5685aaa8119a965b4ff2437df002914b_tn",
        "text": "POLO ZIPPER MULTICOLOR",
        "link": "https://shope.ee/3VCy68RTAu"
    },
    {
        "img": "https://cf.shopee.vn/file/3ff41e2331ba0b32e1167556cf10a787_tn",
        "text": "POLO ZIPPER MULTICOLOR",
        "link": "https://shope.ee/9enbRSHb3T"
    },
    {
        "img": "https://cf.shopee.vn/file/632dece4d1f17e50f42f2652e22c804c_tn",
        "text": "POLO “09” SWEATSHIRT áo polo",
        "link": "https://shope.ee/6f9zrvPISC"
    },
    {
        "img": "https://cf.shopee.vn/file/fdcce4cb1dfb0fb59ade7e5a98ab980a_tn",
        "text": "SWEATER SENTINIALS WINTER VIBE",
        "link": "https://shope.ee/5KecHSUmCh"
    },
    {
        "img": "https://cf.shopee.vn/file/7c8202562634e3dc3a3e38d75fa1a407_tn",
        "text": "BASEBALL “09” JACKET áo khoác bóng chày",
        "link": "https://shope.ee/30GhV9rC4G"
    },
    {
        "img": "https://cf.shopee.vn/file/80f0f6fa07f39a698f483a559f6ac159_tn",
        "text": "BASEBALL “09” DENIM JACKET",
        "link": "https://shope.ee/409Egyweub"
    },
    {
        "img": "https://cf.shopee.vn/file/4d3514208185fdb5b70a4c04410fbcbe_tn",
        "text": "BASEBALL “09” JACKET áo khoác bóng chày",
        "link": "https://shope.ee/6pTQ4AD0gT"
    },
    {
        "img": "https://cf.shopee.vn/file/16549e673b2e85c06972421b91af8038_tn",
        "text": "CARDIGAN CORDUROY áo cardigan",
        "link": "https://shope.ee/5fHSgrnRtw"
    },
    {
        "img": "https://cf.shopee.vn/file/079835c807221e29c9318e28cbeabb29_tn",
        "text": "R. SENTINIALS HOODIE áo",
        "link": "https://shope.ee/9enbRBOsO8"
    },
    {
        "img": "https://cf.shopee.vn/file/dfc42edde275f02c35b5aad72b926e81_tn",
        "text": "POLO “09” SWEATSHIRT",
        "link": "https://shope.ee/AwViEUWQ5"
    }
]
// vay------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//
//                                                                         VÁY
//
//
//
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// {
//     "img": "",
//     "text": "",
//     "link": ""
// },
const panel2 = [
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-wsdzmxs25klv99",
        "text": "Áo Khoác Dù Cổ Bẻ 2 Sọc Phản Quang- Áo dù 2 lớp dày dặn Brand Calem.Club ",
        "link": "https://shope.ee/99tu9cKHRM"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/4b68f9dd89d3fbabad29ac284ba32e8f",
        "text": "Áo Thun in Charm chữ Calem.Club - Áo phông tay lỡ form unisex brand Calem chính hãng ",
        "link": "https://shope.ee/8zaTxJKumL"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/IMG_1719.png",
        "text": "Áo Baby Tee Raplan in chữ Calem.Club chất liệu 100% cotton - Áo Thun form nữ brand Calem.Club chính hãng ",
        "link": "https://shope.ee/8pH3l0LY7K"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-7qukw-lh73vutlanuac7",
        "text": "Áo Thun LocalBrand Cemmery POWER TEE # 3 Color",
        "link": "https://shope.ee/8exdYhMBSJ"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-7qukw-lgaczib8icc757",
        "text": "Áo Baby Polo LocalBrand Cemmery WING BABY POLO # 3 COLOR",
        "link": "https://shope.ee/9p9awqHk5Y"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-7qukw-lhjcmahlhyf995",
        "text": "Váy nữ tay bồng bo chun eo dáng xòe hai tầng tiểu thư thanh lịch,thiết kế đi làm đi chơi",
        "link": "https://shope.ee/9eqAkXINQX"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-7qukw-lhjcmahlkrk5d0",
        "text": "Váy nữ trễ vai dáng xòe chất voan tơ mềm mại,thiết kế nhún bồng tiểu thư",
        "link": "https://shope.ee/9UWkYEJ0lW"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-7qukw-lhls5oyicux1b8",
        "text": "Áo hoa cúp ngực hoa nhún bồng kiểu bí ngô,áo kiểu nữ cúp ngực bồng xoè",
        "link": "https://shope.ee/9KDKLvJe6V"
    }
    ,
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-4nh8bu06vxovae",
        "text": "Sét Áo Khoét Vai Kiểu Bèo Phối Quần Đùi Kiểu Dáng Xinh Xắn + Quần Sọt Phom Rộng Siêu Xinh",
        "link": "https://shope.ee/5pdLsq19RX"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-hai2lomaf4nv47",
        "text": "Sét Áo Quần Tiểu Thư + Quần Đùi Xòe Năng Động",
        "link": "https://shope.ee/5fJvgX1mmU"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-zcgbnz3j9ykv5e",
        "text": "Váy Sơ Mi Kiểu Hàn Quốc-Váy Sơ Mi Sang Chảnh Tôn Dáng",
        "link": "https://shope.ee/5V0VUE2Q7R"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgjk1x9uuzuf7d",
        "text": "Aó Yếm Hai Dây Thắt Nơ Xinh Xắn Dáng Xòe Tiểu Thơ+ Chân Váy Xòe Dáng Ngắn( Có Kèm Lót Quần )",
        "link": "https://shope.ee/5Kh5Hv33SO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgklgbj0qwhj4d",
        "text": "ĐẦM DÂY XOÈ XẾP LI NGỰC ĐÍNH NƠ",
        "link": "https://shope.ee/3VFR6wDOvY"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lghpe4n9rwmv20",
        "text": "ĐẦM DOLL XỐP DÂY CỔ YẾM NƠ NGỰC",
        "link": "https://shope.ee/8exXGVaBLq"
    },
    //------------------
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgqe81edw0s375",
        "text": "GILL BABY | Đầm váy phối corset tay dài trễ vai xoè trendy năng động đi chơi cafe sống ảo hẹn hò (FUTURE DRESS)",
        "link": "https://shope.ee/10Y4cbywl6"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh8v7jifmm2a2b",
        "text": "GILLBABY | Chân váy dù dài xẻ tà rút dây hot trend năng động cá tính trendy (ACTIVE SKIRT)",
        "link": "https://shope.ee/1ArUouyJQ9"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgf4h2y8dsh6bc",
        "text": "GILL BABY | Bodysuit cổ cao chất thun lạnh trendy sexy đi chơi đi quẩy đi du lịch (GB SUIT)",
        "link": "https://shope.ee/fvEE00DR4"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh3op44kmzaqb1",
        "text": "GILL BABY | Chân váy y2k douyin túi hộp chất kaki dày hot trend đi chơi đi quẩy đi du lịch (CYBER SKIRT)",
        "link": "https://shope.ee/qEeQIza67"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/7e4110dadbda194ad4c283863f44fc54",
        "text": "GILL BABY | Áo ống croptop corset chiết eo trendy sexy năng động đi cafe sống ảo hẹn hò (LOUIS TOP)",
        "link": "https://shope.ee/LINpO1U72"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-rab90c36wtovac",
        "text": "Đầm lệch vai [Belle dress] váy công chúa nơ vai cúp ngực vải tafta cao cấp dáng xoè chiết eo đi tiệc,đi chơi Tiệm Nhà Cá",
        "link": "https://shope.ee/7f4xma3ixj"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-xgt5iaqz3xov50",
        "text": "set áo gân xám + chân váy chữ A",
        "link": "https://shope.ee/7pONyt35ck"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg0l8bdyj42ycb",
        "text": "SET ÁO ỐNG DENIM ĐAN EO CHOCKER CỔ + CHÂN Váy 🎶🎶",
        "link": "https://shope.ee/7KS7Ny4zdd"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg5gai8krncn08",
        "text": "SET ÁO ỐNG REN HOA TRẮNG ĐÍNH NƠ NGỰC + CHÂN VÁY ĐEN",
        "link": "https://shope.ee/7UlXaH4MIe"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf2n7856842225",
        "text": "Đầm Len Tiểu Thư Dáng Đuôi Cá Phối Dây Thắt Lưng Sang Chảnh beechan store FREESHIP50K",
        "link": "https://shope.ee/6zpGzM6GJX"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf2nf7fxvjh3dd",
        "text": "Set Áo Croptop 2 Dây Bản Lớn Phối Nơ Kèm Chân Váy Tennis Xếp ly Cạp Cao Xinh Xắn beechan store FREESHIP50K",
        "link": "https://shope.ee/7A8hBf5cyY"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgiybw01kjxz7b",
        "text": "Đầm yếm dài hở lưng nhún ngực La Boutique đi biển, dịu dàng, nữ tính",
        "link": "https://shope.ee/8pGv9IiAfP"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf7qc830dglz03",
        "text": "Đầm hai dây hở lưng đan dây vải xô La Boutique nữ tính bánh bèo",
        "link": "https://shope.ee/8exUwzio0M"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgiybw01x71zc1",
        "text": "[Mã TOPMAY giảm đến 25k đơn 150k] Áo trễ vai tay dài thắt dây nhún ngực La Boutique đi biển",
        "link": "https://shope.ee/99tlXugtzR"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgiybw025mgncf",
        "text": "Chân váy dài vải tơ nhún La Boutique nàng thơ, đi biển",
        "link": "https://shope.ee/8zaLLbhXKO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/0a52e0b36a0fe13cc38b8f8086b2eb9d",
        "text": "Áo Croptop Hai Dây Babydoll - Lapin",
        "link": "https://shope.ee/8A1EM4ki1D"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/2b7a4b5fc3a42c972ec7313100fbc628",
        "text": "Váy Vintage Babydoll Blapink Cổ Vuông Nàng Ther Dịu Dàng",
        "link": "https://shope.ee/7zho9llLMA"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/6be5fd29f2a671f6cc7ec7c9696dcbbf",
        "text": "Váy Hoa Nhí Cổ Yếm Hở Lưng Chất Lụa Siêu Đẹp - JUHEE DRESS T235",
        "link": "https://shope.ee/8Ue4kgjRLF"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lghob3ea85t6e5",
        "text": "ĐẦM MIDI YẾM",
        "link": "https://shope.ee/3VF1fjHjxS"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lghosytun33ed1",
        "text": "SET TÚI HỘP KAKI ÁO CROP 3M",
        "link": "https://shope.ee/4AUiT20KLa"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgm00bcmdr1ua4",
        "text": "Set quần dù- áo ống, quần túi hộp douyin hot chất vải gió hạt cao cấp ELWYN EL26",
        "link": "https://shope.ee/5V07cjjUCw"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgxdw64w5j5e5d",
        "text": "Váy yếm giả bò tôn dáng chất vải không nhăn cao cấp VAVASA V104",
        "link": "https://shope.ee/A9lxBMZJAl"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgho5yb95ieidd",
        "text": "SET JUMP ĐEN VIỀN 2S KÈM SƠ MI TRẮNG",
        "link": "https://shope.ee/2VMSTe5IbA"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lghp01lftl2veb",
        "text": "SET YẾM XÔ REN VIỀN TẦNG + SHORT TRẮNG",
        "link": "https://shope.ee/5KgdqxrknY"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgneu2uwz5tee3",
        "text": "Set áo bèo + quần - Chitchitstore",
        "link": "https://shope.ee/funCASen3"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leqxz5n8a3eb4c",
        "text": "Set áo 2 dây thêu + quần - Chitchitstore",
        "link": "https://shope.ee/9UWBiB4sUK"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/edad9ed5d842642ce83137c84b59fbe6",
        "text": "Đầm yếm hoa xanh + khoác - Chitchitstore",
        "link": "https://shope.ee/6KZ9wWLy52"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgm449zxfto375",
        "text": "Set áo crop nút gỗ chân váy dài xòe Ảnh thật/Sẵn",
        "link": "https://shope.ee/6UsZKXvJ8z"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgd7sjy1hfqvb0",
        "text": "Đầm cúp ngực kèm dây buộc cổ Ảnh thật/Sẵn",
        "link": "https://shope.ee/f5amkotT"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgu9p99nw8xef3",
        "text": "Set đồ đi biển",
        "link": "https://shope.ee/7pO2O28JHx"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-lhmm1bixhhnv41",
        "text": "Đầm hoa nổi tay dài nude - Chitchitstire",
        "link": "https://shope.ee/VbReXsELJ"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn72us6z01fb2",
        "text": "Set áo 3 món vàng hồng - Chitchitstore",
        "link": "https://shope.ee/3Kvd1jQO2B"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfntrrrx3j3p65",
        "text": "Set áo yếm nude hoa nổi + quần trắng - Chitchitstore",
        "link": "https://shope.ee/3Kvd1iZrgy"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-ley7ledrsw3u56",
        "text": "ĐẦM GẤM HOA CỔ V NƠ TRẮNG",
        "link": "https://shope.ee/8A0smaHSM4"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfse8w54shuy87",
        "text": "Đầm váy lụa công chúa trễ vai form baby doll dễ thương sang chảnh đính đá đi tiệc đi chơi hẹn hò Helen Dress",
        "link": "https://shope.ee/6fC4zoRyEE"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-hosw53x6jsov14",
        "text": "Đầm ,áo babydoll dáng rộng tay bồng tiểu thư quảng châu 2 chi tiết",
        "link": "https://shope.ee/9p96lc7vqy"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-hqi59h50l1nva3",
        "text": "Set dạ tiểu thư 2 chi tiết quảng châu cao cấp",
        "link": "https://shope.ee/3prtcZdZ48"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lentmzau4aerd2_tn",
        "text": "Set váy tiểu thư có khoá sang chảnh mix áo quây kèm quần sooc thiết kế ELWYN EL04",
        "link": "https://shope.ee/7A8Lafo1cI"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-cg7nysiq2gov7b",
        "text": "Chân váy cạp cao hot trend phối vải vạt chất liệu cao cấp không nhăn-kèm đai VAVASA CV32",
        "link": "https://shope.ee/3AcCpJ7qlw"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-o01kjvidxgov48",
        "text": "Áo sơ mi nữ thiết kế khóa kéo hot trend độc đáo chất vải cao cấp không nhăn VAVASA SM43",
        "link": "https://shope.ee/fB3T6yN0"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-hqi59h50l1nva3",
        "text": "Set dạ tiểu thư 2 chi tiết quảng châu cao cấp",
        "link": "https://shope.ee/A9lxA7igka"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-xmqwasyqx6nv64",
        "text": "Đầm xoè hoa nhí tay phồng dáng ngắn tiểu thư quảng châu loại 1",
        "link": "https://shope.ee/5zwOCOeATJ"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfp76k03u0dxb2_tn",
        "text": "[EMMA SET] Set váy xinh tháo rời Tafta vân hoa cao cấp lalacrush",
        "link": "https://shope.ee/7UlBz883Cj"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-s7l0ln1qjejva9",
        "text": "Đầm xoè tay phồng trễ vai tiểu thư Stella Dress - MIDSUMMER",
        "link": "https://shope.ee/AUOnYcoZuS"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfcg4nnp9zes55",
        "text": "Đầm trắng 2 tầng dáng xoè Gwen Dress - MIDSUMMER",
        "link": "https://shope.ee/8A0smJ6rVg"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf6m571c779mf6",
        "text": "Liberty Dress - Váy trắng tay dài cổ nơ",
        "link": "https://shope.ee/5fJG93PuYV"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfgedu98xto5fb",
        "text": "Empire Dress - Váy bèo trễ vai dài công chúa",
        "link": "https://shope.ee/9UVyi43KJ0"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgddz3y4kqy273",
        "text": "Sweet Tango Dress - Váy tơ dài tay bèo ngực",
        "link": "https://shope.ee/7zhAvFfnJW"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfoyrqdv14lge8",
        "text": "[Yelly Dress] Váy cổ yếm đính đá 2 tầng xoè công chúa chụp kỷ yếu, đi chơi, đi du lịch, đi tiệc LalaCrush",
        "link": "https://shope.ee/1q6XZr9M38"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/bc71141bf95f408502d230f306578daa",
        "text": "Váy trễ vai bèo váy xoè 2 tầng dáng ngắn công chúa đi biển, đi tiệc, kỷ yếu tiệm của Miêu lalacrush",
        "link": "https://shope.ee/fuZcJy2uO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfga7mzxuhdhbf_tn",
        "text": "Set áo tay phồng hoa nhí buộc nơ sau lưng phối với quần ngắn tiểu thư nữ tính",
        "link": "https://shope.ee/5pcgKEwIRW"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfga7mzy2ws53f",
        "text": "Set áo hai dây hoa nhí buộc nơ sau lưng phối với quần ngắn tiểu thư nữ tính Ella set Fairy&Co",
        "link": "https://shope.ee/5Uzpvc2AA5"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lepgfk0ng81f72",
        "text": "Váy cổ bèo cúc ngọc tiểu thư, sang chảnh baziz closet",
        "link": "https://shope.ee/AK55gTSZGb"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfy7t1k2hqay39",
        "text": "Set áo nơ chân váy xếp li nữ xinh, mặc đi chơi đi làm lịch sự",
        "link": "https://shope.ee/7pNkhrcLrN"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-vd9q7nezfuov9d",
        "text": "Set tiểu thư cổ bèo kèm nơ ngực baziz closet",
        "link": "https://shope.ee/fuaAfUqBd"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/9fd2d4a0b413e5acffac47c6fab76b64",
        "text": "Set váy hoa nhí cổ yếm dáng dài kèm áo khoác cardigan croptop Ulzzang HABII V02",
        "link": "https://shope.ee/4KnsXODIaA"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf4yzee3g6mi7a",
        "text": "Set áo cổ yếm quần ống rộng SE16",
        "link": "https://shope.ee/9p8p5RtVII"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/fe1cf80163faa411d25c51b8603a685b",
        "text": "Set váy thời trang nữ vest( k kèm nơ)+ váy 2 dây tiểu thư",
        "link": "https://shope.ee/3AbpXKWm3d"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/3e1f63ab939f6725bcd123cde3193f89_tn",
        "text": "Set cánh tiên trễ vai ( chân váy có quần trong)",
        "link": "https://shope.ee/8ewm5PYdto"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-lggl9qtjawjvc4",
        "text": "Váy ren thiết kế tiểu thư 2 lớp cổ vuông tay bồng ( hàng loại 1)",
        "link": "https://shope.ee/4V7D7fqWZv"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg1lubs1y2nr16",
        "text": "Swan Dress - Váy đính lông thiết kế cao cấp DTM",
        "link": "https://shope.ee/2AjFy89UR8"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfvdrg0hq2qy04",
        "text": "REMY Top - Áo quây phối voan DTM kèm choker",
        "link": "https://shope.ee/1fmzMXNklN"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfvdrfznpw16a2",
        "text": "Myra Top - Áo quây xếp ly ngực DTM",
        "link": "https://shope.ee/5fJ87vu7AI"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-z2zt05ewapov17",
        "text": "Remis Top - Áo gấm trễ vai ôm ngực DTM",
        "link": "https://shope.ee/LHg6HdQxs"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfvdscaig7av48",
        "text": "Myla Top - Áo tay bồng đính cúc hoa DTM",
        "link": "https://shope.ee/4pk18Sr8Mu"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfvdscaix1t66b",
        "text": "Tini Set - Set áo blazer và chân váy xếp ly hoạ tiết kẻ DTM",
        "link": "https://shope.ee/9p8h5dLIv3"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3psy1gwkc7ef",
        "text": "Tini skirt - chân váy kẻ thiết kế DTM ( 2 form ngắn dài)",
        "link": "https://shope.ee/2L2o99QFdv"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg0wwk76vlnu83",
        "text": "Aó trễ vai tay bồng babydoll , áo kiểu hai dây sang chảnh",
        "link": "https://shope.ee/1VTYsWALqd"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfeudbkgh4dx0a",
        "text": "[CÓ BIGSIZE] Đầm Maxi FREESIZEhai dây thắt nơ dáng babydoll nhiều màu phong cách Hàn Quốc mùa hè đi biển",
        "link": "https://shope.ee/1VTYsSTqCm"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfzor6k8025z4a",
        "text": "Váy hoa nhí cúp ngực tay bồng tiểu thư thiết kế sang trọng Rio wonmen's",
        "link": "https://shope.ee/4pk5RJMKmF"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfjogs48eyydd5",
        "text": "Set áo 2s dài xẻ tà+ quần suông jean 2 màu",
        "link": "https://shope.ee/7zgutooBPV"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-tnsr8hrvu6nv00",
        "text": "hion store - set áo xẻ kèm short nâu hot",
        "link": "https://shope.ee/1LA0xdXwfZ"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfsfvsnxnwtz73",
        "text": "Đầm dạo phố quyến rũ",
        "link": "https://shope.ee/4V725qXBwo"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-jaqmev64fxnvd6",
        "text": "Set áo sơ mi cách điệu mix chân váy xẻ tà dập li chảnh xỉu (Ảnh thật của sản phẩm)",
        "link": "https://shope.ee/3Abcr4QrxI"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-9ozr3i2qcfnv2d",
        "text": "Set tiêu thư 3 món áo sơ mi tay bồng kèm set đen (Ảnh thật shop chụp",
        "link": "https://shope.ee/6AFEQxS1E9"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-x7d1gwnpaqnv3d",
        "text": "Váy tơ lông cổ yếm dáng xoè (Ảnh thật shop chụp)",
        "link": "https://shope.ee/Ay3AcRqsN"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf891e00uqa25c",
        "text": "Đầm Corset 2 Dây Thắt Nơ Rút Eo Phối Bèo Dáng Xoè",
        "link": "https://shope.ee/10X6sG5JAr"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-8v15gljxegovb3",
        "text": "Đầm Voan Hoa Bẹt Vai Dáng Ngắn Xoè Nhiều Tầng",
        "link": "https://shope.ee/9UVeztPbn9"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lern8wfni5qid4",
        "text": "Đầm Midi 2 Dây Dạng Corset Phối Váy Voan Bóng Dáng Xoè",
        "link": "https://shope.ee/qDgfs8Emf"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfxmxvyn0t87c2",
        "text": "Váy cánh tiên cổ tàu dáng bồng xoè đính ngọc (Ảnh thật shop chụp)",
        "link": "https://shope.ee/2Aj444b6WG"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf2yt1zifdl601",
        "text": "Váy tơ dây ngọc dáng bồng có tay tách rời (Ảnh thật shop chụp)",
        "link": "https://shope.ee/7UkaQFguiO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-4wfp7lnb13mv85",
        "text": "Váy ren hai dây trễ vai phối bèo be LeeGi Design phong cách tiểu thư sang chảnh",
        "link": "https://shope.ee/1L9ubVrq08"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-c6z3rzgshxmv34",
        "text": "Váy cúp ngực ba tầng LeeGi Design chất liệu tơ mềm cao cấp phong cách thanh lịch sang trọng",
        "link": "https://shope.ee/7pNOLPd6Vk"
    },
    {
        "img": "https://image.passio.eco/passio-prod/512x512/builder/62dd56294a305458b75bb367/IMG_0185.jpeg",
        "text": "Váy body ba lỗ tôn dáng sexy đầm hai dây bảng to ôm sát nách cổ xẻ V gợi cảm vải thun gân dày xịn Lch",
        "link": "https://shope.ee/6fBPQnBxn6"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-a9fdk0481vmv62",
        "text": "GILL BABY | Đầm váy body cutout phối khuy gài đi chơi hẹn hò cafe cà phê (OBSESS DRESS)",
        "link": "https://shope.ee/3VELTxM51E"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfn99qjzxmr99c",
        "text": "[Sẵn mút]Đầm ren hoa 2 dây công chúa tiểu thư đính đá cao cấp mềm mát đi chơi du lịch hẹn hò đi biển BYBYPIL",
        "link": "https://shope.ee/3KuuEwNub3"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf4yzeczas9621",
        "text": "Set đồ nữ sang chảnh áo croptop tay bồng phối chân váy xòe SE15",
        "link": "https://shope.ee/1q65rJT6bB"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-bn1lolb24qov84",
        "text": "Váy gấm hoa nổi tay bèo tiểu thư dáng suông V06",
        "link": "https://shope.ee/5AMXpKbBad"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfhvmdf6vc04a0",
        "text": "Chloe Set - Set áo lai tim cổ vuông + chân váy chữ A mini - Morri Club",
        "link": "https://shope.ee/6pUkbSbMEA"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-6oxtldx00snvd4",
        "text": "Set áo ống đen nơ trắng + quần - Chitchitstore",
        "link": "https://shope.ee/1VTB5cdtkw"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-gd4du65mmtiv64",
        "text": "Áo dạ + áo ren + váy đen - Chitchitstore",
        "link": "https://shope.ee/1fmbY1AAXT"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-jqad6ufbvunv3e",
        "text": "Set 3 món đen - Chitchitstore",
        "link": "https://shope.ee/6fBHVGxuCo"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-tdwtcxr7wtov73",
        "text": "Váy cổ yếm trễ vai [Lily Dress] tafta cao cấp cực xinh - Đầm yếm tay bồng tafta hai màu kiều nữ 2 lớp babydoll",
        "link": "https://shope.ee/5pc9k6opBx"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-6aqoe5mnksov4b",
        "text": "ĐẦM XỐP NỔI LOANG HỒNG PHỐI TAY 🥰🥰✨",
        "link": "https://shope.ee/99sWwzISN9"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-f70g8w03feov75",
        "text": "ĐẦM ỐNG HỒNG TAY VOAN BỒNG BỀNH",
        "link": "https://shope.ee/7UkIyGP7NS"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-nkyzna4pwqovad",
        "text": "Set chân váy maxi áo crotop màu hồng đi biển, Chân váy dài áo quây cotton crepe Bliz V10",
        "link": "https://shope.ee/AxffD5woh"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-dfvbx2k9psnv2b",
        "text": "Set áo sơ mi nữ và chân váy ngắn vải đũi trắng Summer ST03",
        "link": "https://shope.ee/8UcnaekBrl"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-aiay28bhjqlva5",
        "text": "🌿 ĐẦM - VÁY TRẮNG TIỂU THƯ * BOO * mặc sinh nhật, kỷ yếu, đi tiệc",
        "link": "https://shope.ee/502tv9ASNb"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-disvtz7009mvb4",
        "text": "V791 Cateline dress Váy hai dây cột nơ hở lưng",
        "link": "https://shope.ee/8pFcUFyEdI"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-bsyi1pc02znv81",
        "text": "Áo Váy Cổ Yếm Lông Tay Bồng Siêu Xinh, Áo Váy Cổ Yếm Dáng Giấu Quần Chất Vải Lông Phong Cách Tiểu Thư",
        "link": "https://shope.ee/4pjTivhzhj"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lewqw08bl0lz53",
        "text": "Set áo ô xanh + quần trắng - Chitchitstore",
        "link": "https://shope.ee/1q5l4JrBdf"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-loii95fr16mv52",
        "text": "Đầm trắng đan dây lưng siêu đẹp - Chitchitstore",
        "link": "https://shope.ee/4pjMdwdDHj"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-o5hij4tly2lv08",
        "text": "Đầm gấm đỏ - Chitchitstore",
        "link": "https://shope.ee/8Ucf0iJyi7"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-zyvvh0vc77nv1c",
        "text": "Váy trắng trễ vai nơ đính nút ngọc *Gloria* dáng bồng tiểu thư mặc kỷ yếu, dự tiệc, tết",
        "link": "https://shope.ee/2fepO8T6J6"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-wnutf8zrawmvc0",
        "text": "ĐẦM-VÁY TRẮNG TAY HẠT NGỰC XẾP NHIỀU TẦNG CÔNG CHÚA MẶC KỶ YẾU, TIỆC CƯỚI, DU LỊCH",
        "link": "https://shope.ee/7Uk59I4FJC"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ler4oegv3cei21",
        "text": "Set dạ nhung *JISOO* phối cúc cổ bẻ sơ mi kèm chân váy mặc dự tiệc, prom, kỷ yếu",
        "link": "https://shope.ee/5Uz0ldtB69"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-leub1x67eo9j82",
        "text": "Đầm trắng babydoll xoè phối choker cổ",
        "link": "https://shope.ee/4pjIXyt6Ou"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-442db45r6xov36",
        "text": "SET ÁO ỐNG TÀ LỆCH + QUẦN SUÔNG",
        "link": "https://shope.ee/8pFRJNPfaX"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-leparm0jkywif0",
        "text": "SET ÁO TRẮNG BÈO TAY LOE XẺ TÀ + QUẦN NGẮN",
        "link": "https://shope.ee/8ew175pxGT"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-n0ftlfqzslnv1b",
        "text": "DE JOLIE DRESS đầm trễ vai bèo Ebublio",
        "link": "https://shope.ee/8evzUrb3ii"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-2degkq9a87nv00",
        "text": "ADELIA TOP áo rút ngực cánh tiên Ebublio",
        "link": "https://shope.ee/LGrZc99ev"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-fzunssezfjnv7e",
        "text": "CAROLYN DRESS đầm ngắn cổ lá sen Ebublio",
        "link": "https://shope.ee/6pULJaJCgW"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-llxnjn4gmqnvbf",
        "text": "SET VEST CROPTOP PHỐI CHÂN VÁY XẾP LI KÈM ÁO SƠ MI NGẮN TAY DÀI",
        "link": "https://shope.ee/8UcYU9WUwj"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-x3m5q9ziapnvc5",
        "text": "SET 3 MÓN ÁO SƠ MI TIỂU THƯ KÈM GILE VÀ CHÂN VÁY XẾP LI",
        "link": "https://shope.ee/10WXYVR1rE"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-lpkwoosnmqnv55",
        "text": "ÁO CROPTOP CỔ TRÒN TIỂU THƯ VIỀN ZICZAC 2 LỚP CHẤT DÀY KÈM NƠ CÀI",
        "link": "https://shope.ee/3fXIjRSr8I"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-ay14cgusg4lvb7",
        "text": "🌿 ĐẦM - VÁY TRẮNG TIỂU THƯ DÀI TAY * MISO * mặc sinh nhật, đi tiệc, kỷ yếu",
        "link": "https://shope.ee/VaG31orjf"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-mnw0k3dn0fkv4c",
        "text": "💐 VÁY ĐẦM TRẮNG TRỄ VAI CÔNG CHÚA * JASMINE ĐÍNH NGỌC TRẮNG * mặc sinh nhật, kỷ yếu, đi tiệc",
        "link": "https://shope.ee/4V6OoUk0ee"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/95827dd6aed0bbc50ecc648ccc41a796",
        "text": "❌ ĐẦM VÁY TRẮNG ĐÍNH HẠT VỎ SÒ DỰ TIỆC * FLOWER *",
        "link": "https://shope.ee/89zhBHUloe"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-lkygg3z3aelvbd",
        "text": "GILL BABY | Set áo chân váy basic đính nút vạt chéo chất bo gân mặc hằng ngày đi chơi (MUST HAVE SET)",
        "link": "https://shope.ee/6fAs5ncQK5"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/ae52020fc8e0e46be3c0697e191b0dbf",
        "text": "GILL BABY | Áo croptop tay phồng nhún ngực thắt dây đi chơi hẹn hò (ROSIE TOP)",
        "link": "https://shope.ee/2L1svwud6s"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/459b434151c10f60adb4b80672d0a61c",
        "text": "GILL BABY | Chân váy tầng xoè xếp ly 2 tầng có quần bảo hộ (HIGHTEEN SKIRT)",
        "link": "https://shope.ee/8KJ651fEq8"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-m35k7pr54tlva7",
        "text": "GILL BABY | Áo croptop cutout khuy cài độc đáo trendy đi chơi đi cafe sống ảo (OBSESS TOP)",
        "link": "https://shope.ee/30HZjFlfkY"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-wj0wcw4wsjkvce",
        "text": "GILL BABY | Chân váy dài gấp nếp bên hông đi chơi đi học đi làm sexy trendy basic (HOT CHICK SKIRT)",
        "link": "https://shope.ee/6UrRtMbtEj"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/d8f3ceb3effaedfffe741041644d68f3",
        "text": "SET ĐẦM DẠ ỐNG PHỐI VOAN TẦNG KÈM KHOÁC CROP DẠ (NƠ VOAN CỔ CHOCKER)",
        "link": "https://shope.ee/7A76tZDRiB"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-4flg303l71jvba",
        "text": "SET CROP ĐEN VIỀN CƯỜM KHOÉT NGỰC + CHÂN VÁY 🖤",
        "link": "https://shope.ee/4KmvWQ9Pw1"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/b534c6c2ce5d81550e0c7a3b97d47af9",
        "text": "LENA DRESS - Váy trễ vai phối dây đính đá",
        "link": "https://shope.ee/8UcJXJRtsO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/e44c0fe420d52d13e87b4130b6ffc818_tn",
        "text": "ELY TOP & ELY SKIRT - Áo bồng trễ vai và chân váy quần",
        "link": "https://shope.ee/1ApifV4fg1"
    },
    //------------------------------------------
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lettt6ywdax66f",
        "text": "Đầm Thiết Kế Rớt Vai Nơ TuongVy",
        "link": "https://shope.ee/qCyi7hG0f"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lewtrjsoqqmv72",
        "text": "Đầm Dự Tiệc Tacta trễ vai xoè",
        "link": "https://shope.ee/6znc3Gp5zY"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/e44c0fe420d52d13e87b4130b6ffc818",
        "text": "ELY TOP & ELY SKIRT - Áo bồng trễ vai và chân váy quần",
        "link": "https://shope.ee/1ApifV4fg1"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/b534c6c2ce5d81550e0c7a3b97d47af9",
        "text": "LENA DRESS - Váy trễ vai phối dây đính đá",
        "link": "https://shope.ee/8UcJXJRtsO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-qd0ixtm8p9mvb9",
        "text": "Đầm hoa xanh rời - Chitchitstore",
        "link": "https://shope.ee/5pbUkyt5uK"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/f16650b75442c9b6c9634769c71a3628",
        "text": "Set quần ngắn + áo trắng trễ vai - Chitchitstore",
        "link": "https://shope.ee/4KmgyAMQ2i"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-5s1or556gylv34",
        "text": "Set áo ren trắng - Chitchitstore",
        "link": "https://shope.ee/ftObMtnZx"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-d40i4y739mnvd6",
        "text": "Đầm nữ thiết kế dáng ôm chất ren phối hoa đầm body sang trọng - lUX",
        "link": "https://shope.ee/9eoBqCQ82z"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23010-s287i231yxmv88",
        "text": "Đầm dự tiệc phối nơ vai đầm dạo phố dáng xòe xinh xắn - Dress moniss",
        "link": "https://shope.ee/1VSU7AM55c"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23020-borexx5xtlnvad",
        "text": "Đầm dự tiệc hở lưng dài tay phối lông vũ chất umi co giản",
        "link": "https://shope.ee/3fWyh4Kb0t"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-tpd8vqulwvovce_tn",
        "text": "Chân váy ngắn hoa nhí MONÁ - LALA",
        "link": "https://shope.ee/1VSQE17cqw"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-trzjdo395inv7d",
        "text": "Áo sơ mi cardigan MONÁ - MILIM ĐEN",
        "link": "https://shope.ee/502MHujQH8"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-1b0okb0bj4mv7f",
        "text": "Maiaofficial- Set học sinh hàn áo crop chân váy đính kèm nơ tháo rời🎒",
        "link": "https://shope.ee/4piucbb06e"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-8o2fwr0i19nve2",
        "text": "Maiaofficial-Set áo tay phồng quần lưng cao túi áo đính hoa Black Swan Set🦢",
        "link": "https://shope.ee/4piucbb06e"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23020-xat77x3bivnv2a",
        "text": "Đầm midi hoa tay bồng cổ vuông dáng xòe chất hoa thêu đầm nữ dạo phố xinh xắn",
        "link": "https://shope.ee/5ALcuRHvGQ"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-n0rm5ykvz6nv28",
        "text": "Váy trắng dạo phố rút dây eo dáng xoè hoạ tiết hoa dập nổi xinh xắn",
        "link": "https://shope.ee/502Ci61lYn"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23020-69161eq9tlnv3a",
        "text": "Đầm nữ midi dáng dài xếp ly ngực chất gấm hoa Đầm nữ hàng thiết kế",
        "link": "https://shope.ee/2L1RMOMymg"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-48uis9vw3vjv4e",
        "text": "đầm ống voan xoè viền đá",
        "link": "https://shope.ee/4AT0giNQox"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-9my1b5dy54lv32",
        "text": "SET ÁO CỔ YẾM BÈO + QUẦN NGẮN",
        "link": "https://shope.ee/1q55uRIiA6"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23020-17b4a5s7khnv62",
        "text": "SET ỐNG TRẮNG TÀ XÉO TƯA CHÂN VÁY KAKI✨",
        "link": "https://shope.ee/2feCtwKXYZ"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-ho8tl2sgfmlv2a",
        "text": "Đầm Natalia Dress",
        "link": "https://shope.ee/7zfjXS5XgP"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-puyd0flsaflv8e",
        "text": "Đầm Rosa Dress",
        "link": "https://shope.ee/1VSFu3KH5s"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-oqmqtq6ffflvce",
        "text": "Almira Dress",
        "link": "https://shope.ee/5pbExKLtWk"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-23030-zmaftisbtaov71",
        "text": "Set hai dây trễ vai babydoll màu kem, có lớp lót mút ngực",
        "link": "https://shope.ee/7zfi3rBhse"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-23030-h7ybeleaxaovfc",
        "text": "Set quần yếm đen áo sơmi tiểu thư",
        "link": "https://shope.ee/5fHnKdEItc"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-23030-04z5sjbevaovd8",
        "text": "Set yếm nhung đen tiêu thư, kèm áo sơmi có thắt nơ",
        "link": "https://shope.ee/30H29iGsvx"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-9my1b5dy54lv32",
        "text": "SET ÁO CỔ YẾM BÈO + QUẦN NGẮN",
        "link": "https://shope.ee/1q55uRIiA6"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-mdvfy8vw3vjv01",
        "text": "đầm ống voan xoè viền đá",
        "link": "https://shope.ee/4AT0giNQox"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23020-17b4a5s7khnv62",
        "text": "SET ỐNG TRẮNG TÀ XÉO TƯA CHÂN VÁY KAKI✨",
        "link": "https://shope.ee/2feCtwKXYZ"
    },
    {
        "img": "https://cf.shopee.vn/file/21a617bbaa1a9d2749f8f65a399dbf97",
        "text": "SET ÁO TRẮNG 2 DÂY VIỀN REN CỔ YẾM + QUẦN SUÔNG DẬP LY",
        "link": "https://shope.ee/5UyC0xTB0C"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-rxsgh08ckxmv67",
        "text": "SET ĐẦM2 DÂY HOA NHÍ VÀNG KEM XOÈ + KHOÁC CROP TRẮNG",
        "link": "https://shope.ee/9p7BB6uUnj"
    },
    {
        "img": "https://cf.shopee.vn/file/1f46dce4ecad6b10e65f9e95e7f0e9cd",
        "text": "SET ÁO REN + QUẦN SUÔNG TRẮNG",
        "link": "https://shope.ee/6UqjD1WZNp"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134201-23020-2lc1gesm6inv94",
        "text": "Chân váy ngắn xẻ tà MONÁv- MANDA ĐEN",
        "link": "https://shope.ee/8pEcDppOsK"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134201-23020-fjqpixmwz2nvbf_tn",
        "text": "Đầm công chúa tiểu thư sang chảnh cúp ngực phối ren siêu tôn dáng đi tiệc hẹn hò đi chơi quyến rũ Donna Dress",
        "link": "https://shope.ee/LG2UVsZQe"
    },
    {
        "img": "https://cf.shopee.vn/file/bd04078d1f4c7b4fdf422701bc7c16b9_tn",
        "text": "Đầm nữ hai dây dáng dài cột nơ lưng đầm maxi dáng dài thời trang cho nữ",
        "link": "https://shope.ee/4ASeUuQIz2"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-23020-94b88huinbnv4b_tn",
        "text": "Đầm dự tiệc hai dây xẻ ngực chất cotton thái có lót dày dặn đầm dạo phố xinh xắn - xẻ ngực",
        "link": "https://shope.ee/3Aa7J6TNBY"
    },
    {
        "img": "https://cf.shopee.vn/file/c3ad3ddd9f37f948b3fcb8cb86b0f55f_tn",
        "text": "Đầm nữ hai dây khoét eo chất lụa lami mềm mại đầm dạo phố xinh xắn",
        "link": "https://shope.ee/2Aha7AMP8S"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22120-zu1k87kowjkv79_tn",
        "text": "Áo sơ mi croptop buộc dây phong cách đơn giản, áo kiểu nữ ngắn tay",
        "link": "https://shope.ee/fshs1fz17"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-bmbfe2wzd8iva7_tn",
        "text": "Chân váy dài chữ a dáng xòe, chân váy thô eo chun co giãn nhiều màu AE275",
        "link": "https://shope.ee/3VCtFIpr3A"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/89461866-DF53-4A03-92A0-54F696D258EB.jpeg",
        "text": "Đầm lệch vai hồng cánh sen",
        "link": "https://shope.ee/3KtW0vm79c"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/D483241F-DF21-4094-9B99-4C3CE373865F.jpeg",
        "text": "Đầm cổ yếm cột nơ lưng CAPHENY hồng",
        "link": "https://shope.ee/5Uy0aq6USz"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/3c021cba-558b-46a6-b190-925f04265db7A3B8E7ED-9DEE-4771-8055-718849E0C6BB.jpeg",
        "text": "Đầm xoè 2 dây LILIANA màu trắng hoạ tiết hoa xanh",
        "link": "https://shope.ee/9UU9M3yTui"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/86A1E477-8D45-4099-BA3A-2C0DD166A26E.jpeg",
        "text": "Váy Xoè tiểu thư ",
        "link": "https://shope.ee/4ASgTv342T"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/2D6158FF-EF0C-4137-A71E-910DC8B71710.jpeg",
        "text": "￼ĐẦM BABY DOLL ĐEN PHỒNG CỔ VUÔNG 🖤",
        "link": "https://shope.ee/6zmjgzjtuk"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/BD367CBC-23C4-42B8-BA4F-AAF52281C25C.jpeg",
        "text": "￼ĐẦM TRẮNG HOA NỔI NƠ NHÍU NGỰC TAY BO PHỒNG",
        "link": "https://shope.ee/3Aa9I7S3tJ"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/75c07712-e723-4467-938f-f8fceaf926f557926D37-49AA-4684-9967-51230776E48A.jpeg",
        "text": "￼SET BABYDOLL HOA NỔI 2 DÂY CỘT VAI + QUẦN NGẮN",
        "link": "https://shope.ee/A9jtd0Vwe0"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-18uk1ryxejlve8",
        "text": "SET ÁO ỐNG NUDE PHỒNG NƠ LƯNG XẺ TÀ + QUẦN NGẮN ( t6 về hàng , kịp trc Tết ) ",
        "link": "https://shope.ee/8ev5qGfigq"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/bb36c9c0-be5e-45fb-8800-7f5950ce83bd4082EEB3-D084-401D-9119-BC64D97287C1.jpeg",
        "text": "￼SET ÁO TRẮNG XÔ BÈO NHÚN ❤️",
        "link": "https://shope.ee/9p73EQevkO"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-jroq8wimzmlv53",
        "text": "Đầm thun ôm body đen đính cổ đá dáng ngắn Black Swan by Sois Fier ",
        "link": "https://shope.ee/1Ap4uWTOT7"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/D6526A70-8382-4CFB-A181-3B01F9716AF5.jpeg",
        "text": "Set váy quây kèm quần sooc - Hình thật Chính chủ",
        "link": "https://shope.ee/8KIFRjIcuw"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/5EFB320C-96D7-472D-8899-38F6B9F042C2.jpeg",
        "text": "Sét áo hai dây chân váy tầng- hình thật 100% ",
        "link": "https://shope.ee/9end2CzGj2"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/432a1227-806a-4519-9db2-efc7e214f56d90497982-F3E8-4A3D-B3C3-6F4297ECA962.jpeg",
        "text": "MONÁ - Đầm hoa nhí  - MOCHI DRESS",
        "link": "https://shope.ee/6UqbGRNviy"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-09doh4ywn7lv3c",
        "text": "Váy dạ tex nhung cổ sơ mi hở vai kèm nơ ngọc tiểu thư có sẵn ",
        "link": "https://shope.ee/7A6I3gyAnR"
    },
    {
        "img": "https://cf.shopee.vn/file/65e8b37db3460ce19e128656ac3d749a_tn",
        "text": "Váy trắng cổ vuông chiết eo dáng xoè chất kate nhật váy trắng dự tiệc",
        "link": "https://shope.ee/qCEWCnRiq"
    },
    {
        "img": "https://cf.shopee.vn/file/29e9ce93f591ca493e9a5596ed82876a",
        "text": "Đầm dự tiệc cổ yếm ren ngực chất voan hoa đầm dạo phố xinh xắn ",
        "link": "https://shope.ee/AK3Jpg8Gpn"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/f7bb72be-cf0d-40a6-9f67-1074f7633c2b7FAA0695-830C-47A6-9519-244C6F5D1C5D.jpeg",
        "text": "Đầm dự tiệc khoét vai chiết eo dáng xòe chất phi tapta đầm dạo phố xinh xắn - demon dress ",
        "link": "https://shope.ee/A9jtdNrB2n"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-yopqytzovijvb3_tn",
        "text": "TIELA Đầm váy hoa tay dài -Suly Dress",
        "link": "https://shope.ee/5Uy44orDO6"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22120-zvo8w9skfglvdf_tn",
        "text": "Set dạ tweed phối tay bồng tơ voan (Ảnh thật) ",
        "link": "https://shope.ee/4V5WszuLK5"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-s68ql6di1klvb9",
        "text": "Váy tơ tay bồng măng séc dáng xoè cúc ngọc kèm nơ đá xinh xỉu (Ảnh thật) ",
        "link": "https://shope.ee/5pauTSWzOT"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-fjhlfke4yxlv77",
        "text": "Đầm cổ yếm hở lưng đính đá tiểu thư công chúa sang trọng hẹn hò đi tiệc đi chơi Martha Dress ",
        "link": "https://shope.ee/1q4li7dQTS"
    },
    {
        "img": "https://cf.shopee.vn/file/0b35e8990544c124310138db655db834",
        "text": "ĐẦM CỔ YẾM TẦNG XOÈ KHOÉT EO ",
        "link": "https://shope.ee/1VRvJWw1lB"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/15A22D6D-764E-4DE0-8953-976C6C0A7913.jpeg",
        "text": "SET YẾM VẢI LÔNG VŨ",
        "link": "https://shope.ee/5ALDgHh7B2"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-gh46fxubzymve1",
        "text": "SET ÁO HỒNG BẸT VAI BÈO + QUẦN TRẮNG ",
        "link": "https://shope.ee/4Km6glk5bs"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/7f0d95c3-bc17-4851-bf5a-fc34044a13532FA25D4B-E552-4F55-9C5D-B3D5308657F7.jpeg",
        "text": "Camila Dress - Đầm dây thun maxi dài Remmus cho nữ",
        "link": "https://shope.ee/501hYAyVW5"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/04FEFEF5-5BD6-4687-89BB-5DDEED642498.jpeg",
        "text": "ÁO DÀI TẾT - BELLY AODAI - ÁO DÀI CÁCH TÂN NHUNG TRƠN TAY LOE",
        "link": "https://shope.ee/5zuKfsBvc0"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-23010-5awv19efr5lved",
        "text": "Đầm tacta trễ vai ",
        "link": "https://shope.ee/8zXwFOrvH7"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-60kuwhazhwlvc1",
        "text": "Đầm Chéo Trước Tay Bồng ",
        "link": "https://shope.ee/501nU4Anom"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-23010-147m682od0lv28",
        "text": "Đầm Cổ Vuông Tacta ",
        "link": "https://shope.ee/VZO7oaGCw"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22120-ur89754u0ukv5d_tn",
        "text": "Set áo dài tay kéo zip và chân váy ngắn LAMUSE thiết kế (Vera Set) ",
        "link": "https://shope.ee/7Uj8ShILpp"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-ohr1nm8ztclvf3",
        "text": "ĐẦM NHUNG ĐỎ RỚT TAY NƠ NGỰC ĐÍNH ĐÁ 💔 ",
        "link": "https://shope.ee/7A6A0Ogy5h"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-xwhaqafcsdlva7",
        "text": "SET ÁO DOLL XÔ REN HOA + QUẦN SHORT TRẮNG ",
        "link": "https://shope.ee/3Aa1DlfuvA"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-g5vc0sgzlflv87",
        "text": "SET CROP ĐỎ CỔ SƠ MI XẾP LY THÂN CHÂN VÁY ❤️ ",
        "link": "https://shope.ee/6fA1TFb6Qr"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/C0A7CD2E-98DF-4C86-92A0-520E420C9759.jpeg",
        "text": "Đầm yếm phối tay rời - Chitchitstore",
        "link": "https://shope.ee/4V5WtHeY4z"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-e5s3e8vtt1lv00",
        "text": "Set đầm 2 dây+ áo cột nơ đỏ (CÓ SẴN)- Chitchitstore ",
        "link": "https://shope.ee/99rMRsHhei"
    },
    {
        "img": "https://cf.shopee.vn/file/8ac4c36419af2974dc0fdd422ed21afb_tn",
        "text": "Set áo xanh dây vai đan - Chitchitstore",
        "link": "https://shope.ee/5zuKg4bsYK"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-gi35ybsb62lv7d",
        "text": "set Mèo Thần tài chân váy lụa Tết 2023- hình thật 100% ",
        "link": "https://shope.ee/7f2Yf9Mk8R"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-vrioeiab72lva3",
        "text": "váy trễ vai dáng xoè công chúa- hình thật 100% ",
        "link": "https://shope.ee/8zXwFcdGIS"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-cfmzznpu7vlve5",
        "text": "Đầm xoè công chúa tiểu thư 2 dây hồng ngọt ngào đi tiệc hẹn hò cao cấp cut eo Candy Dress ",
        "link": "https://shope.ee/8UbfeiR9LU"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-qqlyw79zcajvd8",
        "text": "set áo dài tơ thuê ",
        "link": "https://shope.ee/6zmrryX0RV"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-8r8jrzavmvlv91",
        "text": "set áo dài cổ yếm nhung đỏ xếp ly ",
        "link": "https://shope.ee/6fA1TO2KEz"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-qjdcnpatteiv92",
        "text": "💐 ĐẦM - VÁY TRẮNG ĐÍNH HOA * SAM DRESS * mặc kỷ yếu, sinh nhật, đi tiệc ",
        "link": "https://shope.ee/7f2YfFJuIC"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-7becfi78teivd5",
        "text": "💐 ĐẦM - VÁY TRẮNG CÔNG CHÚA ĐÍNH HOA ĐÁ * SUZY * sang chảnh, mặc đi chơi, kỷ yếu, sinh nhật ",
        "link": "https://shope.ee/1L8V7dLD8t"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-wh6qmg1az7kv3b",
        "text": "🌿 ĐẦM - VÁY CHOCKER NƠ LƯNG TIỂU THƯ ",
        "link": "https://shope.ee/5zuKgFGO1p"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-i6o0uhecxyiv64",
        "text": "set áo dài nơ kem + quần suông ",
        "link": "https://shope.ee/1L8V7gOOn4"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22120-9oiyowcd4glvc5_tn",
        "text": "Áo dài lụa trơn thắt nơ vintage, set áo dài lụa dài tay kèm quần trắng freesize form suông nhiều màu ",
        "link": "https://shope.ee/501nUQxO3V"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-773huv6kjqlv74",
        "text": "Váy 2 dây trễ vai đính ngọc *Monica* dáng ngắn mặc dự tiệc, kỷ yếu, sinh nhật ",
        "link": "https://shope.ee/5fHUHflImY"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-01y2iob49xkv3e",
        "text": "Váy trễ vai tag cài nơ *LILI DRESS* dáng bồng tiểu thư mặc Tết, kỷ yếu, dự tiệc ",
        "link": "https://shope.ee/10Vej6u4Qc"
    },
    {
        "img": "https://cf.shopee.vn/file/d7de6f79e534e8ca0c3b0e19dd228141",
        "text": "ĐẦM - VÁY TRẮNG TAY HẠT CÔNG CHÚA *ROF* 🌷 ",
        "link": "https://shope.ee/3fWPu1S7d9"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-bulwsitw26jv83",
        "text": "Set áo dài cách tân lụa khuy kèm mấn Miho house ",
        "link": "https://shope.ee/99rMS922KX"
    },
    {
        "img": "https://cf.shopee.vn/file/f579541045b210eed3ec73df58031c36",
        "text": "Chân Váy LABEL Xếp Ly Tennis Lưng Cao JEM CLOSET Có Quần Trong 3398 ",
        "link": "https://shope.ee/9end34vKUL"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22120-cl6aymsg9blvc9_tn",
        "text": "SET MAI ĐÀO Tết gồm áo yếm kèm quần lụa Ebublio ",
        "link": "https://shope.ee/2VKSVvHoCe"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/78FE7808-5E6A-4D76-8518-D5FFB3D880F1.jpeg",
        "text": "Set Hoa Mộng ",
        "link": "https://shope.ee/4piNIFCege"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/123BEEFF-45D3-4098-8663-C32052703E02.jpeg",
        "text": "Áo dài Châu Hoa ",
        "link": "https://shope.ee/d7XNzRvW"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-anh0kxh19fkve0_tn",
        "text": "Áo dài đỏ + váy trắng - Chitchitstore",
        "link": "https://shope.ee/9KAmeYh74a"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-l6gzxaox9fkv1d_tn",
        "text": "Áo dài đỏ cổ yếm - Chitchitstore",
        "link": "https://shope.ee/4ASgV4zxwH"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/4B25EEEB-8673-4A6F-ABA0-A10D29DABFE8.jpeg",
        "text": "Set áo dài Tết nhung tăm hoa nhí nhiều màu dây đan chéo freesize ",
        "link": "https://shope.ee/9p73FVrbJh"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22110-ypjv030pl9jvc2_tn",
        "text": "Set áo dài nhung cách tân màu đỏ cổ viền phối chân váy mặc Tết, đám cưới, tiệc ",
        "link": "https://shope.ee/6zmrsKJAZt"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22110-8zgmja6ll9jv6f_tn",
        "text": "[Full set] Áo dài Tết màu trắng hoa nổi dáng bồng phối chân váy ",
        "link": "https://shope.ee/2fdsiOUSV2"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22120-ff49w17xrvkv3b_tn",
        "text": "Set áo dài gấm hoa nổi tay bồng đính ngọc kèm quần lụa trắng AD09121 ",
        "link": "https://shope.ee/20OBvF5CIC"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22110-4pbh2o8a5fkvdd_tn",
        "text": "Set áo dài nhung tay lỡ cổ bèo kèm tubal Tết 2022 AD28111 ",
        "link": "https://shope.ee/fsoKoN02T"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/235166BC-7446-4FE1-AAE6-1CAB400C34FB.jpeg",
        "text": "Camel The96s_byt",
        "link": "https://www.instagram.com/p/ClbUPyJPxZ6/?igshid=YmMyMTA2M2Y="
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22110-f6wz55xvyzjv05_tn",
        "text": "Đầm Đan Chéo Nơ Trước Chữ A  Ngực Tay Bồng Tafta Ánh Kim Gemme KC1412 ",
        "link": "https://shope.ee/30Gj7DkYVu"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22100-w2s70xsqu6ivcf_tn",
        "text": "Đầm Xoè Tafta Nơ Eo PHALE (ĐEN) KC1456 ",
        "link": "https://shope.ee/4ASgVNxJEO"
    },
    {
        "img": "https://cf.shopee.vn/file/7d10d35e2e9603427f1fd8e79ae1a8df_tn",
        "text": "Đầm Xoè Đan Dây Ngực Khoét Eo Cao Cấp  KC1414",
        "link": "https://shope.ee/1Ap4vsz78T"
    },
    {
        "img": "https://cf.shopee.vn/file/a6b099a6af5d19222ef4f3f56d39d0a3_tn",
        "text": "Đầm Cúp Ngực Dáng Phồng Xoè Công Chúa, Đầm váy thiết kế Hotgirl đi tiệc dạo phố KC1377",
        "link": "https://shope.ee/VZO8g12em"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22110-xxds644rwsjv0a_tn",
        "text": "Đầm Tafta Ánh Nhũ BLING KC1462 ",
        "link": "https://shope.ee/AUMk34TWCZ"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/AA5B2ADF-5419-477F-AC47-A440AFDB2D13.jpeg",
        "text": "set áo croptop cúp tay phồng + quần trắng ",
        "link": "https://shope.ee/6ADkt8A0e8"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22110-otfiqkinrvjv1e_tn",
        "text": "set áo xám ống cúp ngực + chân váy đen xoè ",
        "link": "https://shope.ee/4V5Wu5K0S9"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22120-49mw2qsltnlv66_tn",
        "text": "set áo bố 2 túi + chân váy chữ A ",
        "link": "https://shope.ee/99rMSgfQyu"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22100-c38a05ceu8hvd5_tn",
        "text": "Set Áo Croptop Và Quần Đùi JEM CLOSET Chất Liệu Linen Mềm Mịn Lên Form Tone Dáng Siêu Xinh GEBNI 8137 ",
        "link": "https://shope.ee/9zQTSEg3F2"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22100-eai1lalpeniv2a_tn",
        "text": "Đầm cúp ngực phối nơ eo đính cườm chất phi tapta  đầm dự tiệc sang trong - cườm eo ",
        "link": "https://shope.ee/VZO8oTE8X"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/fd664edbfebf2e0fe5edb71bfdf781c9_tn",
        "text": "Đầm dạo phố hai dây dáng xoè chất phi cao cấp đầm dự tiệc nữ sang trọng quý phái ",
        "link": "https://shope.ee/8ev5rpxWjb"
    },
    {
        "img": "https://cf.shopee.vn/file/1baf1115d39afe1f79fc45be4f89aa1f_tn",
        "text": "[ Kèm áo] Sét váy hai dây dáng xòe kèm áo khoác croptop chất bố mịn sét vest thanh lịch",
        "link": "https://shope.ee/3fWPufFkGI"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-1wjr6xurjpkv97_tn",
        "text": "Áo dài tết FM Style chất nhung đỏ thiết kế khoét ngực kèm quần thời trang truyền thống 210280035",
        "link": "https://shope.ee/20OBvc8h2P"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/60793E48-A50A-411A-830A-189AA9A19733.jpeg",
        "text": "Set váy cổ tàu đầm 2 dây dáng dài xoè voan thêu hao",
        "link": "https://shope.ee/9KAmf7KAwU"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/DFFE6B9A-4BDE-461F-AB97-3439DE470788.jpeg",
        "text": "Váy xoè [Cloudy dress] đầm tiểu thư voan xoè",
        "link": "https://shope.ee/8KIFTIWEy1"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-3so1scwrnekv77_tn",
        "text": "Váy công chúa tay bồng đầm babydoll đan dây dáng lỡ đi tiệc, đi chơi, kỷ yếu",
        "link": "https://shope.ee/9zQTSNcgt6"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/55E5353D-4BA2-48D5-9226-2080418E4B34.jpeg",
        "text": "Váy trễ vai dài tay chiết eo có cúc (Ảnh thật)",
        "link": "https://shope.ee/5zuKh3VSJa"
    },
    {
        "img": "https://cf.shopee.vn/file/d8b6875441050f920c387ee4af1d2cc0_tn",
        "text": "Bộ áo sơ mi croptop và chân váy ngắn LAMUSE thiết kế (Dani Set)",
        "link": "https://shope.ee/AUMk3LDImH"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/E737D024-1CE1-4FA1-90CA-194F579129E5.jpeg",
        "text": "￼[kèm chân váy] Áo dài cách tân áo dài tết 4 tà chất voan tơ",
        "link": "https://shope.ee/AUMk3MLhIW"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/94171C60-5395-4EAF-B02F-BDEBD251DE4A.jpeg",
        "text": "￼ ￼[kèm quần] Áo dài tết bốn tà tay bồng cổ yếm chất xốp voan",
        "link": "https://shope.ee/qCEXcDgzw"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/7D6B09D3-C61D-4FA9-B674-53BBCE3DD49F.jpeg",
        "text": "Set áo ống đỏ nhung CHUPPI cúp ngực xếp li kèm quần short trắng",
        "link": "https://shope.ee/5KeduIHXH6"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/54568C5A-29F3-4B37-900A-71DF7B7AE39F.jpeg",
        "text": "Đầm công chúa Chuppi dáng xoè tiểu thư cúp ngực",
        "link": "https://shope.ee/2VKSX6AfA0"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/9ACF8938-9B23-496C-9572-D1F4F5DB5296.jpeg",
        "text": "Đầm babydoll chất dạ 2s xích bọc nút siu xinh",
        "link": "https://shope.ee/3Aa9KL2uPI"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/DB0AAC49-C18B-413E-9FB2-93524EF11184.jpeg",
        "text": "Đầm tiểu thư hở vai nhún organza lấp lánh BYBYPIL",
        "link": "https://shope.ee/9enUIT2vuD"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-bb1fl15sgnjvef_tn",
        "text": "LENA DRESS - VÁY CÚP NGỰC XÒE TAY BỒNG NHÚN",
        "link": "https://shope.ee/2fdsjSD0gT"
    },
    {
        "img": "https://cf.shopee.vn/file/e767d3fb0b7d39b7f08088cdf03e0d35_tn",
        "text": "Set áo dài cách tân nữ thêu tay HABII AD03 [Đủ Size]",
        "link": "https://shope.ee/AUMk3sZNLc"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/f2ec1a46-4f13-43f5-987e-bc0fe8b84c44product_image",
        "text": "Set áo tay phồng mix quần đen ",
        "link": "https://shope.ee/3fWPvLcNQO"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/1E335608-ABBE-4EF9-B269-71CDE506B071.jpeg",
        "text": "Áo đang bbdoll vai trễ tay bồng",
        "link": "https://shope.ee/qCEY9iMLY"
    },
    {
        "img": "https://cf.shopee.vn/file/5231f10d9f29c54a260aa0410f1d5df9_tn",
        "text": "Váy tơ cổ yếm tay dài bồng (Ảnh thật shop chụp)",
        "link": "https://shope.ee/6ADktyX08v"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/D8C32A42-CC5B-4D37-AA47-F4FF23D6A9A5.jpeg",
        "text": "Set áo crt + chân váy nhung xoè ",
        "link": "https://shope.ee/3ppq7hWgGe"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/9E45F639-7FAE-4144-AAEC-B66DCB4843E9.jpeg",
        "text": "Đầm caro đỏ viền phối trắng kèm nơ ",
        "link": "https://shope.ee/LFxxHWOye"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/86606C47-F547-4BAF-B20B-0CF385036E10.jpeg",
        "text": "Set yếm những kèm áo sơ mi tay bồng phong cách hàn quốc ",
        "link": "https://shope.ee/3Aa9KVBrWL"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-xdyq715klyjvd2_tn",
        "text": "Đầm rớt vai cánh tiên váy dự tiệc vải tafta cao cấp dáng ngắn tay bồng đính nơ đi chơi, chụp hình, kỉ yếu",
        "link": "https://shope.ee/409GK48V6G"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/999e253f-6023-499d-bb37-cb33c614f56aC58E975E-1394-440C-9C32-9A1CCCD5D4A3.jpeg",
        "text": "Áo dài cách tân cúc bọc, áo dài Tết tay lửng form suông nhiều màu",
        "link": "https://shope.ee/89ypHjadTG"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/09E85501-7660-49D5-8354-54488E1D184D.jpeg",
        "text": "SET ÁO DÀI ĐỎ TAY BỒNG PHỐI VOAN TRẮNG+QUẦN SUÔNG",
        "link": "https://shope.ee/LFxxM8FJg"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/D472F449-AC48-4FB3-8081-168AF1D80AF5.jpeg",
        "text": "Set áo dài ren cổ yếm + quần suông kem",
        "link": "https://shope.ee/5Uy46sRlpY"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/4BBFE187-5B08-415C-970C-61FFC11399D5.jpeg",
        "text": "set áo dài ren + chân váy dập ly",
        "link": "https://shope.ee/7zfP5UUqH2"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-6r3persnwxiv4f_tn",
        "text": "Set Babydoll 3 màu có ánh nhũ, mặc được hai kiểu có sẵn mút ngực",
        "link": "https://shope.ee/6UqbIkWA40"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/336E251C-A8D0-44F7-915E-28889C3C556D.jpeg",
        "text": "Váy Trắng Cổ Yếm Nơ Đen",
        "link": "https://shope.ee/7f2YguztYK"
    },
    {
        "img": "https://cf.shopee.vn/file/49a4fbdea20d2eed2158bdc35138b2a9_tn",
        "text": "Váy babydoll xếp ô vuông tay phồng, màu xanh rêu",
        "link": "https://shope.ee/1flLXxLKKm"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/76815CE2-F2AC-432D-8094-54AF9B2C1C6F.jpeg",
        "text": "Set 3 Món Khoác Sơ Mi Kèm Áo Crt + Chân Váy",
        "link": "https://shope.ee/1VRvLfLctE"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/1240E50F-F4E0-4841-B36D-C6FE9D4F4688.jpeg",
        "text": "Đầm ôm body đen đính ngọc",
        "link": "https://shope.ee/6ADkuGPjKz"
    },
    {
        "img": "https://cf.shopee.vn/file/0b55d92c1c13e8ae326d618028dbe385_tn",
        "text": "set sơmi trắng  kèm áo croptop + quần short",
        "link": "https://shope.ee/6ADkuI2NEs"
    },
    {
        "img": "https://cf.shopee.vn/file/72f3908f99203d8cb7ae7dbe5acc1f3b_tn",
        "text": "YURI DRESS đầm dây nơ ngực Ebublio",
        "link": "https://shope.ee/3Aa0YYrgH8"
    },
    {
        "img": "https://cf.shopee.vn/file/eaed66264b789a6da4d8128eb6c670ce_tn",
        "text": "KEILA DRESS đầm trễ vai xốp nổi Ebublio",
        "link": "https://shope.ee/6fA1VHcj8V"
    },
    {
        "img": "https://cf.shopee.vn/file/3ca45f483a743a8e5fbbe53597678f0f_tn",
        "text": "AILY TOP áo kiểu yếm Ebublio",
        "link": "https://shope.ee/6KXB6gUiwK"
    },
    {
        "img": "https://cf.shopee.vn/file/cc73d2e2e4855a47d63a31bb04c7b8bb_tn",
        "text": "SET DEXA, SET CARDIGAN VÀ ĐẦM HAI DÂY XÒE",
        "link": "https://shope.ee/4ASgWicZI8"
    },
    {
        "img": "https://cf.shopee.vn/file/dc854fc8d466c8e938594e3713c4cfa7_tn",
        "text": "(CLIP THẬT) Đầm trễ vai bèo trắng dáng dài ASU",
        "link": "https://shope.ee/A9jtfmO3u6"
    },
    {
        "img": "https://cf.shopee.vn/file/7b8816f4ab6b090e940111d49312f5c2_tn",
        "text": "(CLIP THẬT) Đầm babydoll voan cổ yếm",
        "link": "https://shope.ee/5ALDibowTJ"
    },
    {
        "img": "https://cf.shopee.vn/file/bfae9423c227b59e35875789b97b0a4a_tn",
        "text": "Quần short nữ cạp cao, quần short tây trơn lưng chun co giãn, quần xếp ly có dây buộc eo",
        "link": "https://shope.ee/6pTRhh4OkC"
    },
    {
        "img": "https://cf.shopee.vn/file/9ef3b8ff5bc1aa7ac88042548bdc3f41_tn",
        "text": "Chân váy thun xếp ly, chân váy kèm quần eo chun co giãn nhiều màu",
        "link": "https://shope.ee/1Ap4xNnwfY"
    },
    {
        "img": "https://cf.shopee.vn/file/3ec6c7aa9127c32709d28e0f694e851f_tn",
        "text": "Set yếm dài rút eo kèm áo sơ mi tay phồng, váy yếm kaki babydoll",
        "link": "https://shope.ee/5ALDil2uCP"
    },
    {
        "img": "https://cf.shopee.vn/file/bc05c01ad41ed3fb220656dac2278650_tn",
        "text": "Áo len dài tay nữ form rộng, len xốp cổ v phong cách Hàn Quốc",
        "link": "https://shope.ee/89ypIIqg1Q"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/a3b3ba0a-b534-48cf-aa05-a3d1f60894f6product_image",
        "text": "Váy sơ mi ngắn tay kẻ sọc kèm hai dây bên trong, váy thô basic freesize form rộng",
        "link": "https://shope.ee/3ppq8MgAoj"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/cfb6385d-8bff-46b9-9aee-2beefa5d8d7aproduct_image",
        "text": "Đầm sơ mi ngắn tay kaki, đầm sơ mi kaki form rộng nhiều màu",
        "link": "https://shope.ee/3Aa9L9mhuK"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/750f847a-1098-4473-8aa5-7ed3ca89fe74product_image",
        "text": "Đầm sơ mi nhung tăm khuy gỗ, sơ mi tay ngắn vạt bèo form rộng nhiều màu",
        "link": "https://shope.ee/9zQTTkD5O5"
    },
    {
        "img": "https://cf.shopee.vn/file/38747c33878eed0efbf21370c7b967e4_tn",
        "text": "đầm đen rớt vai đính nơ",
        "link": "https://shope.ee/7zfP6676aA"
    },
    {
        "img": "https://cf.shopee.vn/file/99b13bed23aee16d48cde225ef5c3c4f_tn",
        "text": "đầm 2 dây đen viền ngực cườm",
        "link": "https://shope.ee/VZOAKudJA"
    },
    {
        "img": "https://cf.shopee.vn/file/38a436fee21c3d7884e9f2ecf7c800fd_tn",
        "text": "set áo croptop gấm hoa nổi nơ lưng + quần ngắn",
        "link": "https://shope.ee/4piNKJe92n"
    },
    {
        "img": "https://cf.shopee.vn/file/845c744673104e7f51da2459d02699cd_tn",
        "text": "Đầm Váy Đen Cổ Chéo Trắng Túi Nắp Đầm Váy Chữ A",
        "link": "https://shope.ee/A9jtg8O2kK"
    },
    {
        "img": "https://cf.shopee.vn/file/232fc851cf97c5a1a164ac69bb19d5ef_tn",
        "text": "Váy babydoll cổ tàu cột nơ 💐(có sẵn)",
        "link": "https://shope.ee/10VelJ0jIW"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-ob8t7gcdfaiv1f_tn",
        "text": "váy cổ yếm hở lưng dáng xoè",
        "link": "https://shope.ee/4V5WvkzmvQ"
    },
    {
        "img": "https://cf.shopee.vn/file/28cf698ccd68faf2e6cac3116c4f2265_tn",
        "text": "đầm 2 dây baby doll vải gấm phối nơ",
        "link": "https://shope.ee/d7ZVh7Ue"
    },
    {
        "img": "https://cf.shopee.vn/file/4cb40ef1733c77ab11050dc013f94c4f_tn",
        "text": "Váy tơ bo cổ babydoll ✌🏻",
        "link": "https://shope.ee/501nWjA4uW"
    },
    {
        "img": "https://cf.shopee.vn/file/ae0939c29a3d3b775f501a66193e9230_tn",
        "text": "Váy babydoll cổ tàu size S/M (có sẵn) 🍂",
        "link": "https://shope.ee/5KedvNYoPg"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/zJ6tKp1cyfTik3xeHnzWNGIhPst3xHY0dPjlOjlL.jpeg",
        "text": "Váy babydoll tơ óng cao cấp 3 màu dây nơ chun [June Dress]  - TOFU FASHION",
        "link": "https://shope.ee/fsoMp7ZBJ"
    },
    {
        "img": "https://cf.shopee.vn/file/f773e47ab4765fb8b8390c112047b568_tn",
        "text": "SAND áo croptop kẻ sọc tay dài cổ áo chéo cách điệu - S-STRIPPED CROPTOP",
        "link": "https://shope.ee/2L12Lu50ka"
    },
    {
        "img": "https://cf.shopee.vn/file/0a2ac7650428ecb42b38470986fc3603_tn",
        "text": "Đầm trễ vai,  Đầm xoè tay dài trễ vai sunday dress, váy tiểu thư",
        "link": "https://shope.ee/5fHUK453YY"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/QFl9RrDwiZdAffxv1zzghdoCIrXiPwsDXEpRIbzN.jpeg",
        "text": "Chân váy ngắn màu trắng họa tiết trơn | SOFIA SKIRT - CLÉLIE",
        "link": "https://shope.ee/7A6I6qkzlR"
    },
    {
        "img": "https://cf.shopee.vn/file/cf2340607920cdbd7ffc8feca2f3560a_tn",
        "text": "Áo corset tay phồng xoè dài | MALI TOP - CLÉLIE",
        "link": "https://shope.ee/99rMUYcuvY"
    },
    {
        "img": "https://cf.shopee.vn/file/01bdaae597ff365bc85b840cb2f15567_tn",
        "text": "Set áo croptop tay bồng và chân váy xếp ly | YEYE SET - CLÉLIE",
        "link": "https://shope.ee/AwXm2SRXQ"
    },
    {
        "img": "https://cf.shopee.vn/file/630438a039fd94d074de455bb1e3729d_tn",
        "text": "Đầm 2 Dây Đen Xòe Bồng Dây Chéo Lưng Kèm Mút Lót + Tăng Đơ Điều Chỉnh",
        "link": "https://shope.ee/1Ap4xuS1Pl"
    },
    {
        "img": "https://cf.shopee.vn/file/c74002698dfa2e71f0572fe41af89fd6_tn",
        "text": "Set Áo Croptop Cúp Ngực 2 Dây Denim Trắng Kèm QUần Short Ống Xòe Giả Váy",
        "link": "https://shope.ee/409GL9GI3E"
    },
    {
        "img": "https://cf.shopee.vn/file/8820c0eb8be966ebc32f3bc8f9fc9adc_tn",
        "text": "Chân váy jean lưng cao phối túi thời trang xinh xắn cho nữ",
        "link": "https://shope.ee/d7ZomiFl"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/YMIekrHnN1q0eCTfVu3SfE4MW95ArtkKVV7JRFoB.jpeg",
        "text": "WELI DRESS - ĐẦM TRỄ VAI CỘT CỔ TAY RỜI CỰC ĐẸP",
        "link": "https://shope.ee/1VRvMcSjFh"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/EUueyTngKVpr37ou3plswvt7GMUaJeffGhjHsCzY.jpeg",
        "text": "SABY DRESS (Kèm video) - ĐẦM TRỄ VAI BÈO BỒNG CAO CẤP",
        "link": "https://shope.ee/6pTRiSyPjP"
    },
    {
        "img": "https://cf.shopee.vn/file/1618a74624ddde0de0d12bf50611aed3_tn",
        "text": "(CÓ SẴN) LANA DRESS - ĐẦM CỔ YẾM HỞ LƯNG HÀNG THIẾT KẾ CỰC ĐẸP",
        "link": "https://shope.ee/8zXwIYeKfa"
    },
    {
        "img": "https://cf.shopee.vn/file/3d7eb3e2689b1b2eedbca3767f8707e9_tn",
        "text": "❌ ÁO SƠ MI TINGOAN *",
        "link": "https://shope.ee/30Gj9Z5B6u"
    },
    {
        "img": "https://cf.shopee.vn/file/d82b403307b0ba3471baf8c8c52ef88f_tn",
        "text": "ĐẦM - VÁY TRỄ BÈO VAI GẤM TIỂU THƯ * Miu * Mặc sinh nhật, kỷ yếu, đi chơi",
        "link": "https://shope.ee/1Ap4yQsYV6"
    },
    {
        "img": "https://cf.shopee.vn/file/701ac16f9a7b3a8f7b06bc5021739026_tn",
        "text": "SET - ĐẦM TIỂU THƯ NƠ NGỰC",
        "link": "https://shope.ee/2L12MbES5y"
    },
    {
        "img": "https://cf.shopee.vn/file/444790251bfca7818dce59ef573ff350_tn",
        "text": "SAND set áo tay dài form rộng oversize nữ cổ chữ V - V-SHIRT SET",
        "link": "https://shope.ee/3fWPx4mMbI"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/MhNxu3VnCC8A0PFVntcKqDuYYxjCHiHXOvZGzqEg.jpeg",
        "text": "SAND áo gile unisex form rộng nam nữ phong cách Hàn Quốc - S-BASIC GILE",
        "link": "https://shope.ee/7f2YiRffWr"
    },
    {
        "img": "https://cf.shopee.vn/file/9eb32403d8d4441ca3172e6849f510dc_tn",
        "text": "[ CLAY ] Stella Set - Bộ áo khoác kèm chân váy kẻ mùa đông kẻ sọc",
        "link": "https://shope.ee/5zuKjOq0eG"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/nWbfWTAWaKjDYmv9w2KOzA1fuIWFr0lNCBW5lUMh.jpeg",
        "text": "Đầm 2 dây rớt vai tay phồng",
        "link": "https://shope.ee/501nXZp574"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/1aAKMs7BEQMzMhAGmXceEsUB35Xl6iQbmWUuEKRj.jpeg",
        "text": "set đầm 2 dây trắng xốp đan dây ngực kèm áo khoác",
        "link": "https://shope.ee/5ALDju1Aoc"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/JDcvMPQOFnZFRin9qYVZcgO2gfqzLzkgtMk0yeRB.jpeg",
        "text": "set áo cổ tim nơ + quần ngắn viền",
        "link": "https://shope.ee/9p73IVVGNs"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/nWrgUCh2nwsdvYqvMLfYalSMEmJ6ZeZ7qSwzyhaX.jpeg",
        "text": "Váy tiểu thư",
        "link": "https://shope.ee/1Ap4ybEukS"
    },
    {
        "img": "https://cf.shopee.vn/file/a650bc33642fe60864b515636866b1b8_tn",
        "text": "Set áo ống quần thun nữ ngày hè chất co dãn, mát mẻ",
        "link": "https://shope.ee/1Ap4ybEukS"
    },
    {
        "img": "https://cf.shopee.vn/file/80bee30d1fc86466ba24af210f686e82_tn",
        "text": "Váy cổ yếm đen có nơ trắng",
        "link": "https://shope.ee/7Uj8WHTwA4"
    },
    {
        "img": "https://cf.shopee.vn/file/5dac71607d1b963b1330cba18c9ae107_tn",
        "text": "Váy yếm khoét vai siêu xinh 🥰",
        "link": "https://shope.ee/5zuKjXdZgG"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/SNKQijN3WEfQW0RJgooyyyi56GGCIXi6K4HtKRuz.jpeg",
        "text": "Váy Cổ Yếm Yeris",
        "link": "https://shope.ee/4V5WwnrXii"
    },
    {
        "img": "https://cf.shopee.vn/file/5c665f38fa1cbd82f56541779fd6289f_tn",
        "text": "Chân Váy Nữ Lưng Cao Xếp Ly Thời Trang",
        "link": "https://shope.ee/AwXmr7dT9"
    },
    {
        "img": "https://vn-test-11.slatic.net/p/d6ee082d9c0a1648a8789efc382fe876.jpg",
        "text": "Quần Short Jean Giả Váy Dáng Chữ A Lưng Cao Thời Trang Xuân Hè Màu Hồng Phong Cách Mới Dành Cho Bạn Nữ",
        "link": "https://www.lazada.vn/products/weber0-hang-co-san-quan-short-jean-gia-vay-dang-chu-a-lung-cao-thoi-trang-xuan-he-mau-hong-phong-cach-moi-danh-cho-ban-nu-i1940037369-s8898739756.html?dsource=share&laz_share_info=106563418_100_100_200081550460_103259963_null&laz_token=cfdf6194e3d4431c850652db23d40d28&exlaz=e_LD%2BWs5ElHhXGip8qo24MCXRib2ph7O2ICC6FqKlh%2FLXCXvTKdNAtBZQY0KVTPT6FRzGUIFPICwrE7WLYoHefSZ23n24RbgrfD3WnASIas1Y%3D&sub_aff_id=social_share&sub_id2=106563418&sub_id3=200081550460&sub_id6=CPI_EXLAZ"
    },
    {
        "img": "https://cf.shopee.vn/file/7f1a51a181f42c6383f61440a1f3b28e_tn",
        "text": "Đầm công chúa [mặc nhiều kiểu] váy trễ vai voan tơ ý tay tháo rời cúp ngực đi chơi, đi tiệc, đi du lịch",
        "link": "https://shope.ee/7A6I7nNZhJ"
    },
    {
        "img": "https://cf.shopee.vn/file/25d14b910a3e826aeb3be8390fa9e103_tn",
        "text": "SET 3 MÓN:  KHOÁC TRẮNG TD + CROP 2S  + CHÂN VÁY TRẮNG - Hàng Có Sẵn - Kèm ảnh thật",
        "link": "https://shope.ee/d7aejRa4"
    },
    {
        "img": "https://cf.shopee.vn/file/ba0cf6c95da5209b6ecde5318cf6c8ee_tn",
        "text": "🍃SET ÁO ĐEN GẤM HOA NỔI RỚT VAI PHỒNG + SHORT",
        "link": "https://shope.ee/A9jthMFGzq"
    },
    {
        "img": "https://cf.shopee.vn/file/eb9efa00b5c7ec8cb3adb76f8d863a5e_tn",
        "text": "ĐẦM RỚT VAI BỒNG - Hàng Có Sẵn - Kèm ảnh thật",
        "link": "https://shope.ee/9KAmhqDMoM"
    },
    {
        "img": "https://cf.shopee.vn/file/3a68f3bce7145dc872de13f0487c7985_tn",
        "text": "Chân váy chữ A",
        "link": "https://shope.ee/6UqbKeJLjW"
    },
    {
        "img": "https://cf.shopee.vn/file/511dd1c77484162a5943fc4c1066489e_tn",
        "text": "Áo Sơ Mi Nữ form rộng Lụa hàn Kiểu Màu Trắng đẹp dài tay phong cách ulzzang vintage hàn quốc cao cấp trơn  kozoda SM31",
        "link": "https://shope.ee/AwXn27nXt"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/EKqlSkJD75OyauBRSTC1zC3lKVkiQ4vVjsOUvGJx.jpeg",
        "text": "Áo Sơ Mi nữ form rộng Ngắn Tay Công Sở Chất Xốp Kẻ Sọc dễ mặc 4 màu phong cách Hàn Quốc Kozoda SM41",
        "link": "https://shope.ee/2pxIxzIMeS"
    },
    {
        "img": "https://cf.shopee.vn/file/b7e3b6fc8d6cd92d7102265ecfb70bc5_tn",
        "text": "Váy đầm sơ mi thô mềm dáng xoè dài thanh lịch lưng chun sau 4 màu Kozoda D48",
        "link": "https://shope.ee/3VCzlEODon"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/S7WvOFMrcuq7bnrqocTcvH2Yp7Q2UhyBFDaXf5Zn.jpeg",
        "text": "Đầm Babydoll Váy Trắng sơ mi ulzzang công chúa đi biển dài xếp ly suông đẹp nữ dài qua gối thiết kế đuôi cá Kozoda D8",
        "link": "https://shope.ee/6KXB8SCgiH"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/Dsk34UkclXw0YCblLzYRS8wCS1JSADCCcm8Zippr.jpeg",
        "text": "Váy GẤM trễ vai lệch thắt nơ tay bồng dáng A chuzme",
        "link": "https://shope.ee/4V5Wx6AG2K"
    },
    {
        "img": "https://cf.shopee.vn/file/c252494fc4972ec8b06b96d70964131a_tn",
        "text": "Đầm  babydoll trễ vai hoa nổi MINI HEART buộc dây cổ tiểu thư dự tiệc",
        "link": "https://shope.ee/3Aa9MfJXGb"
    },
    {
        "img": "https://cf.shopee.vn/file/f4019936743eb5c6f76f5715d7cf51e5_tn",
        "text": "[𝐃𝐨𝐥𝐥𝐲 𝐒𝐞𝐭 ]Set áo khoác dạ mix chân váy xếp ly tiệm của mieuu",
        "link": "https://shope.ee/89ypJsMAFd"
    },
    {
        "img": "https://cf.shopee.vn/file/2c0a39dbca7bd57f88c9b935101454ed_tn",
        "text": "Quần tây nữ lưng cao ống loe công sở đi học đẹp bigsize VAVASA QT04",
        "link": "https://shope.ee/2VKSZTqPJo"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/do9HMQ4iOBSuhZcLnJzCeuMKe4tOnesKMFZKtiCE.jpeg",
        "text": "SAND set áo tay dài form rộng oversize nữ cổ chữ V - V-SHIRT SET",
        "link": "https://shope.ee/3fWPx4mMbI"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/jHuSun0UvddasTmmkG78EXdKaOlneOD14SEP9jA9.jpeg",
        "text": "Áo sơ mi nữ lụa hàn form rộng kiểu buộc nơ eo dài tay màu trắng xanh be trơn xu hướng hàn quốc vintage 2022 Kozoda SM68",
        "link": "https://shope.ee/10VemmU6UM"
    }
]
//do ngu---------------------------------------------------------------------------------------------------------------------------
const panel3 = [
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-7qukw-lhfxsayizidd57",
        "text": "Set đồ ngủ nữ cổ yếm Uri Studio bộ đồ ngủ mặc nhà/đi biển Ignis",
        "link": "https://shope.ee/A9mRKwGXo2"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-7qukw-lgueuck0nsoj58",
        "text": "Set đồ ngủ nữ 2 dây đẹp Uri Stdio, set đồ ngủ 2 món mặc nhà đẹp Krixi",
        "link": "https://shope.ee/9zT18dHB91"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134207-7qukw-lfqnxxhrnmgla4",
        "text": "Set bộ SWEETIE xuyên thấu xinh iu nàng therrr ( áo 2 lớp)",
        "link": "https://shope.ee/9p9awKHoU0"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/10E63553-EE6A-499B-B143-F5A9DAC4EC98.jpeg",
        "text": "Set bộ SPRING hoạ tiết caro trendy, chất liệu cotton xốp phối ren mềm mại",
        "link": "https://shope.ee/9eqAk1IRoz"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/C20E2743-BDA4-4531-A626-F1923EBA24B5.jpeg",
        "text": "Set bộ SPRING 2 dây phối ren, chất liệu voan 2 lớp mềm mịn nàng thơ",
        "link": "https://shope.ee/9UWkXiJ59y"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/9C370888-6B41-4B19-8DD7-8D97C07F5953.jpeg",
        "text": "Đầm ngủ Lily hoa nhí kem (voan phối ren mềm mịn)",
        "link": "https://shope.ee/9KDKLPJiUx"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/IMG_1091.png",
        "text": "￼Bộ ngủ cánh tiên bèo in hình siêu dễ thương chất đũi xốp nhăn mặt mát thoải mái",
        "link": "https://shope.ee/99tu96KLpw"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/IMG_1090.png",
        "text": "￼Bộ Ngủ 2 Dây Bèo Quần Đùi - Set mặc nhà hình cute mặc mát thoải mái dễ thương",
        "link": "https://shope.ee/8zaTwnKzAv"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/694FC9AC-E362-460A-90D5-92AE32AAA5BD.jpeg",
        "text": "Emily set - set thiết kế hai dây chất thun cotton phối ren ",
        "link": "https://shope.ee/8pH3kULcVu"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/IMG_0886.png",
        "text": "Set đồ mặc nhà, đồ ngủ hai dây thiết kế - Princess set",
        "link": "https://shope.ee/8exdYBMFqt"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/IMG_0884.png",
        "text": "Set ngủ Jolie - đồ ngủ, đồ mặc nhà chất lụa mango thoáng mát",
        "link": "https://shope.ee/8UeDLsMtBs"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lep7fba336wic9",
        "text": "Đồ bộ mặc nhà pyjama xô muslin hoạ tiết quả đào nền hồng Dabi",
        "link": "https://shope.ee/1AqELxcSoL"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lep7i3dim0tv82",
        "text": "Đồ bộ mặc nhà pyjama xô muslin hoạ tiết hoa tulip nền trắng kem Dabi",
        "link": "https://shope.ee/qDNxCTkyF"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfkrkh0kwtbpec",
        "text": "Set đồ ngủ nữ pyjama đẹp mặc nhà hoa trắng Lila, bộ ngủ nữ sexy vải voan hoa nhí Uri Studio",
        "link": "https://shope.ee/7A7PmDRrA9"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfkrkh0kzmglcb",
        "text": "Set đồ ngủ nữ pyjama đẹp mặc nhà Lila, bộ ngủ nữ sexy vải voan hoa nhí Uri Studio",
        "link": "https://shope.ee/8ewDZ2304X"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-bqg3jp6tbvov9a",
        "text": "Set đồ ngủ nữ mặc nhà mùa hè đẹp Alice, set đồ ngủ nữ 2 dây cute Uri Studio",
        "link": "https://shope.ee/4KnEP9HPNY"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-8s9zv4uop6nv50",
        "text": "EL01 - Set Áo Quần Thun Nhún Bèo Cổ Trụ",
        "link": "https://shope.ee/9p7wWVJLgf"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-dj3z4lo9s9nv54",
        "text": "EL02 - Set Áo Dây Phối Ren Thun Cotton Elastic",
        "link": "https://shope.ee/502hClZo0Z"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-bx5wux0r5dovcf",
        "text": "LT34 - Set Áo Dây Đắp Lưng Bèo",
        "link": "https://shope.ee/6pUKwpUkkc"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/bb4b4a0069341e8780a8eafd148af024",
        "text": "BỘ ĐÙI 2 DÂY LỤA REN HỒNG CAM",
        "link": "https://shope.ee/3KuSkRrQVK"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23020-pkrx4qbxl2nv0c",
        "text": "Bộ đồ ngủ nữ mặc nhà pijama cộc tay chất đũi gân cao cấp siêu mát CĐ1",
        "link": "https://shope.ee/5zv6C1rk5h"
    }, {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-0pszd1zpwsovab",
        "text": "Đồ bộ pijama nữ tay ngắn mặc nhà lụa xước cao cấp siêu cute dễ thương CĐ2",
        "link": "https://shope.ee/4KmsD1ADD6"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-zatxeepr17nva3",
        "text": "Đồ bộ nữ mặc nhà 2 dây chất mango cao cấp họa tiết đẹp siêu mát DĐ3",
        "link": "https://shope.ee/6pUDBdDLuq"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-tfu3jsqkowkv11",
        "text": "Đầm ngủ 2 dây nhún bèo đũi xốp hoạ tiết xinh xắn. Váy ngủ hoạ tiết gấu nhiều màu đáng yêu",
        "link": "https://shope.ee/7f3IqLL7W0"
    }, {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-q33np4hd80jvbb",
        "text": "Set Đồ Ngủ Quần Dài JEM CLOSET Bộ Nữ Pijama Form Rộng Thoải Mái Nhiều Màu Cực Xinh CARABA 8150",
        "link": "https://shope.ee/502KZGjULy"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/570eba6f-400b-47b3-9503-57c274021f3a9CCAC5F7-A18B-4E15-8135-982A0B68E8E4.jpeg",
        "text": "￼Lacy Dress - đầm ngủ ren hoa nhí thiết kế Pretty Me",
        "link": "https://shope.ee/9KAmjn41B3"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/B331A843-E265-43A0-87A9-1B9BB3CBEE50.jpeg",
        "text": "￼Barbie set - bộ mặc nhà caro freesize",
        "link": "https://shope.ee/5zuKlitA6y"
    },
    {
        "img": "https://cf.shopee.vn/file/8e1555d60fbd5be8d898dca1527bd757_tn",
        "text": "Rita set - set ngủ hai dây chất thun co giãn thoải mái",
        "link": "https://shope.ee/2L12P0Jdo0"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-i3vh3a3vvgkvaa",
        "text": "Set đồ ngủ nữ pyjama đẹp mặc nhà Lila, bộ ngủ nữ sexy vải voan hoa nhí Uri Studio ",
        "link": "https://shope.ee/7f2YkpCke9"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-83h9k3x7vgkv4e",
        "text": "Set đồ ngủ nữ pyjama đẹp mặc nhà hoa trắng Lila, bộ ngủ nữ sexy vải voan hoa nhí Uri Studio ",
        "link": "https://shope.ee/3ppqBp87ac"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/694FC9AC-E362-460A-90D5-92AE32AAA5BD.jpeg",
        "text": "Emily set - set thiết kế hai dây chất thun cotton phối ren ",
        "link": "https://shope.ee/AK3JvozyBF"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/42504351-7E26-4AD3-A55D-CC37AC904019.jpeg",
        "text": "Lisa set - bộ mặc nhà, bộ ngủ hai dây chất thun cotton Pretty Me ",
        "link": "https://shope.ee/5KedyfI3iD"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/02E8C75D-A846-4E87-A5E1-4400072EEDA4.jpeg",
        "text": "Daisy set - set bộ mặc nhà",
        "link": "https://shope.ee/1flLbxdjZy"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/9C370888-6B41-4B19-8DD7-8D97C07F5953.jpeg",
        "text": "Đầm ngủ Lily hoa nhí kem (voan phối ren mềm mịn)",
        "link": "https://shope.ee/1Ap514RuCn"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/10E63553-EE6A-499B-B143-F5A9DAC4EC98.jpeg",
        "text": "Set bộ SPRING hoạ tiết caro trendy, chất liệu cotton xốp phối ren mềm mại",
        "link": "https://shope.ee/5Uy4B36XK4"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/C20E2743-BDA4-4531-A626-F1923EBA24B5.jpeg",
        "text": "Set bộ SPRING 2 dây phối ren, chất liệu voan 2 lớp mềm mịn nàng thơ",
        "link": "https://shope.ee/9UUCwQqIKc"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/1226e961-411b-43de-962c-d53222ac8f87product_image",
        "text": "Set Bộ Nữ Kẻ Caro JEM CLOSET Set Đồ Nữ Đi Chơi GUAR Chất Mịn Form Rộng Thoải Mái Phong Cách Teen Style Hàn Quốc 8131",
        "link": "https://shope.ee/VZODuFYlk"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/68a17809-3a0c-437c-b695-4436b66fae85product_image",
        "text": "Set Đồ Bộ Nữ Kẻ Caro JEM CLOSET Áo Sơ Mi Tay Ngắn Form Rộng Kèm Quần Short Cạp Chun 3 Màu Cam Hồng Vàng OWW 8132",
        "link": "https://shope.ee/10Veoq4evo"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/NpsruO6s3WS7nK6btifFvBeqXFt3LofmYnE76F6j.jpeg",
        "text": "Bộ mặc nhà , set pijama chất đũi lạnh mền mát",
        "link": "https://shope.ee/5fHUNUBGPA"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22090-1gb3be1j7yhv2f_tn",
        "text": "Bộ mặc nhà dễ thương, pijama đùi chất đũi cao cấp",
        "link": "https://shope.ee/6UqbN1q5XW"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/IMsbLP63x7IXv9AhHEpUu5nneBcjk7KG9cnY5ge9.jpeg",
        "text": "Bộ đồ ngủ 5 màu",
        "link": "https://shope.ee/2pxJ0Ii3ay"
    }
]
//ao thun, croptop---------------------------------------------------------------------------------------------------------------------------
const panel4 = [
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgm26vj394xefe",
        "text": "GWEN SENTINIALS BABY TEE áo thun form baby tee",
        "link": "https://shope.ee/2ffwDQlObb"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfl5frs5dbic6f",
        "text": "Áo thun baby tee phối sọc vải cotton 2 chiều cao cấp thêu logo Anis",
        "link": "https://shope.ee/6KYn9jvbgO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lggon8tjh6nr25",
        "text": "Chân váy y2k chất vải cotton có quần lưng thấp Anis",
        "link": "https://shope.ee/6KYn9jvbgO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfl401svu7hx5e",
        "text": "Áo thun baby tee fit dáng chất vải thun 2 chiều không co rút in Anis",
        "link": "https://shope.ee/5KgFxmxlyq"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-p5iejwuinenv5c",
        "text": "Chân váy nữ STELLA chân váy ngắn chữ A chất kaki co giãn túi trước phong cách basic Jem Closet Studio 3416",
        "link": "https://shope.ee/3fY1j8GQb2"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfs2cjxscqjucf",
        "text": "Áo Phông Nữ Dập Chữ Cá Tính JEM CLOSET Chất Cotton Form Rộng Siêu Thoải Mái LANEN 10457",
        "link": "https://shope.ee/AUOLrT0C5h"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf41667100uva7",
        "text": "TEE LOGO SENTINIALS áo thun tay ngắn",
        "link": "https://shope.ee/4V72JxeVxg"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lez6jiiq8rreb8",
        "text": "Áo croptop 2 dây bản to thiết kế dây đan sau lưng gợi cảm áo thun kiểu cổ vuông sexy tôn dáng có mút ngực LCH",
        "link": "https://shope.ee/3KuxSnuPfU"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-les3k6jsjgbba5",
        "text": "Áo thun baby tee cổ tròn thêu chữ Sobasic form body sexy áo phông nữ dáng dài tay raglan phối màu tôn dáng LCH",
        "link": "https://shope.ee/6KYZ2FxfaE"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/ac2a5cd3fb6057f27f1db5e9c030226f",
        "text": "GILLBABY | Áo croptop đắp chéo cột dây quyến rũ năng động dễ thương mặc được 4 kiểu (ELINA TOP)",
        "link": "https://shope.ee/2L2O5yi8Xa"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-wj0wcw4wsjkvce",
        "text": "GILL BABY | Chân váy dài gấp nếp bên hông đi chơi đi học đi làm sexy trendy basic (HOT CHICK SKIRT)",
        "link": "https://shope.ee/6fBNFxwNUY"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22100-2o6qlk09adiv2e",
        "text": "GILL BABY | Áo croptop trễ vai cutout tay dài cuốn biên đi chơi hẹn hò đi biển (GIRL CRUSH TOP)",
        "link": "https://shope.ee/5AMZT8yxcX"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/459b434151c10f60adb4b80672d0a61c",
        "text": "GILL BABY | Chân váy tầng xoè xếp ly 2 tầng có quần bảo hộ (HIGHTEEN SKIRT)",
        "link": "https://shope.ee/1q67V2KODS"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf188yeiq447eb",
        "text": "Aither Studio Áo thun BASIC BUBBLE TEE Black/Beige/Pink/White",
        "link": "https://shope.ee/4fQ5wTvzCV"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfap0q3sdtvuda",
        "text": "Aither Studio Áo thun SUMMER SCENT TEE Black/Beige",
        "link": "https://shope.ee/9UVLhJenWi"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leqor8d8ln0300",
        "text": "Aither Studio Áo thun BE MY BEAR Black/Beige",
        "link": "https://shope.ee/8pFeu10Xf6"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-uht6pz1968kved",
        "text": "Áo thun local brand GHOST TRICK POPCORN màu đen & đỏ vải dày 250gsm - Hàng chính hãng",
        "link": "https://shope.ee/7f3H7tpoMm"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-cpvkyrq5y5mv11",
        "text": "LOVE TEE SENTINIALS",
        "link": "https://shope.ee/8pFCwsumQO"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-zc31qzg1yvovb0",
        "text": "RAGLAN TEE SENTINIALS áo thun raglan",
        "link": "https://shope.ee/LGep8yxik"
    },
    {
        "img": "https://cf.shopee.vn/file/vn-11134201-23020-bkgn0uvsu3nve7",
        "text": "Áo Thun Hoạ Tiết Cô Gái",
        "link": "https://shope.ee/3fWZPlAmfL"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-971peton9oiv1a_tn",
        "text": "Áo thun baby tee MONÁ - TERRA",
        "link": "https://shope.ee/9p79Pl0thi"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/2DB54C1D-C911-4529-B620-B908452B65D3.jpeg",
        "text": "MONÁ - Quần dài nỉ đóng logo ống rộng - BOBBI PANTS VÀNG/XÁM/XÁM CHÌ/HỒNG ĐẬM",
        "link": "https://shope.ee/3fWQ02Uoy0"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-w64251h8p9iv99_tn",
        "text": "MONÁ - FLEUR TEE X HEART LOGO - Áo thun baby tee in hoa - TRẮNG",
        "link": "https://shope.ee/5Uy4BQArDM"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-34raa0ilwulvf5",
        "text": "AITHER STUDIO Áo thun Kids Heart unisex form rộng ",
        "link": "https://shope.ee/89ypMKdxXF"
    },
    {
        "img": "https://cf.shopee.vn/file/2ed927f0bd46e4dadd8bd8d5eeac8c78_tn",
        "text": "MONÁ - Set áo cardigan ngọc bích tay dài ống loe - PEA SET",
        "link": "https://shope.ee/d7dKrBSK"
    },
    {
        "img": "https://cf.shopee.vn/file/5848d2b75d7ed7ff144dcbc658320a24_tn",
        "text": "MONÁ - Chân váy ngắn đen xẻ tà - MANDA SKIRT",
        "link": "https://shope.ee/5paua4Cpv6"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/D2D19509-8DE1-424A-9DC8-B536293B2BDB.jpeg",
        "text": "￼Quần ống rộng nữ lưng cao nỉ tăm cạp cao",
        "link": "https://shope.ee/LFo93Jxq4"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/27B4CCB6-EAAD-408B-8C9A-BC214F5B0939.jpeg",
        "text": "￼Quần ống rộng nữ cạp cao nỉ tăm lưng cao Hàn Quốc",
        "link": "https://shope.ee/7zfPA6Xtom"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/D9261125-BEF7-4CF2-ADBC-7A5B3F2A0DA2.jpeg",
        "text": "￼Áo sơ mi tay dài nam nữ form rộng chất liệu kaki thêu chữ",
        "link": "https://shope.ee/6ADkykrwtG"
    },
    {
        "img": "https://cf.shopee.vn/file/b17b4fa451b191b5f703a2f97d68ca69_tn",
        "text": "MONÁ - Áo thun croptop nhấn eo rút dây - AKI TOP ĐEN/HỒNG",
        "link": "https://shope.ee/AK3JwQKMJE"
    },
    {
        "img": "https://cf.shopee.vn/file/a9b347e7ee172702cdad74a2709f101d_tn",
        "text": "MONÁ - Áo croptop thun cotton 4 chiều - LISA CROPTOP",
        "link": "https://shope.ee/8pEWBAfMqO"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/A6115180-FC43-4726-8BA3-8D609B4426BE.jpeg",
        "text": "MONÁ - Quần dài nỉ đóng logo ống rộng - BOBBI PANTS",
        "link": "https://shope.ee/3VCzpO332p"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22100-e73dzkt3f3iv16_tn",
        "text": "Áo Len Crotop Kẻ Theday",
        "link": "https://shope.ee/6zmryJEhaS"
    },
    {
        "img": "https://cf.shopee.vn/file/177d54e0e0860dc405c089c886e049ca_tn",
        "text": "Áo thun in hình LNI 025, Thun 100% COTTON - form rộng UNISEX.",
        "link": "https://shope.ee/3VCzntJEeW"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/3788a8bf-9ac9-46ef-9fa2-9fa20a36d9dfproduct_image",
        "text": "Quần jeans ống đứng cắt gấu tôn dáng",
        "link": "https://shope.ee/1L8VDv0TWS"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/b3459ad1-6909-4129-af06-c468875827dfproduct_image",
        "text": "Áo phông trơn áo thun basic chất cotton tổ ong (có sẵn)",
        "link": "https://shope.ee/4fOxC3VzN2"
    },
    {
        "img": "https://cf.shopee.vn/file/ee6ce9173b7059d28ec43e67dfc88216_tn",
        "text": "Áo Snoopdogg x Thuốc Lào - Ghost Trick local brand",
        "link": "https://shope.ee/3ppqCXCPnE"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/cAs86JAqF6fERdIWFIH97n5H4emVxvzY0FwL2zyB.jpeg",
        "text": "ClownZ skull T-shirt  (xương tím) form rộng, chất cotton",
        "link": "https://shope.ee/2VKSc64EPw"
    },
    {
        "img": "https://cf.shopee.vn/file/a7504d53e4e957d914a5fbc8da037275_tn",
        "text": "SAND áo Thun Unisex Form Rộng Tay lỡ cut-out thêu mặt cười - SMILE TEE",
        "link": "https://shope.ee/1flLcaBOqW"
    },
    {
        "img": "https://cf.shopee.vn/file/d4e8d3efbcaedf037fb3535789aede17_tn",
        "text": "Áo thun Unisex Daygers Inhuman Universe - Áo phông nam nữ cotton 2 chiều dày dặn - Local brand chính hãng",
        "link": "https://shope.ee/30Gdo8pPDF"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/KNh0Ke2sODChQLhz2aBuitjfr5vgdWUazh0IRWWc.jpeg",
        "text": "TEE ROGUE OLDSCHOOL áo phông tay ngắn",
        "link": "https://shope.ee/1VRvQItDOP"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/u5y32kojvCKX6GtA7PEW5XPEwmPDbMM0tGXV0WAn.jpeg",
        "text": "Áo thun XXME họa tiết Hate monday cao cấp màu xanh - BLACK / WHITE / DARKGREEN",
        "link": "https://shope.ee/AUMk8r3MWm"
    },
    {
        "img": "https://cf.shopee.vn/file/e3a9a5effa6e1ac80d84a51613192001_tn",
        "text": "Áo Thun Tay Lỡ THECHOICE 100% Cotton, Áo Phông Form Rộng Mẫu Mới 2022 𝘽𝙮.𝘾𝙖𝙢𝙘𝙖𝙢",
        "link": "https://shope.ee/5pauaKNyKo"
    },
    {
        "img": "https://cf.shopee.vn/file/964ad6416e25cff5e929e0acd66c4d16_tn",
        "text": "Áo Thun Sober Embossed Tee Form Rộng",
        "link": "https://shope.ee/409GOyUp3g"
    },
    {
        "img": "https://cf.shopee.vn/file/c4686663b74f8dd5b017f559ef6d2179_tn",
        "text": "ÁO THUN BASIC SCATTUS FORM RỘNG UNISEX",
        "link": "https://shope.ee/409GOyUp3g"
    },
    {
        "img": "https://cf.shopee.vn/file/39dbc881cbfc1efa3bd732383d7910e0_tn",
        "text": "ÁO THUN SCATTUS COLOR TEE UNISEX",
        "link": "https://shope.ee/1q4lp0yjaK"
    },
    {
        "img": "https://cf.shopee.vn/file/7cd6f62e9881eb50ada66787a7615c2e_tn",
        "text": "ÁO THUN BASIC SCATTUS FORM RỘNG UNISEX",
        "link": "https://shope.ee/3fWQ0OZPNY"
    },
    {
        "img": "https://cf.shopee.vn/file/6bfcf333a2bf6277bead39fdcf7e187a_tn",
        "text": "Aither Studio - Áo thun basic tee cao cấp Unisex Form Rộng",
        "link": "https://shope.ee/6pTRmEEQOO"
    },
    {
        "img": "https://cf.shopee.vn/file/d631c60d414da66f45466d163988f8fe_tn",
        "text": "AITHER STUDIO Áo thun Fille A Papa cao cấp Unisex form rộng",
        "link": "https://shope.ee/5Uy4Bo59Ll"
    },
    {
        "img": "https://cf.shopee.vn/file/66f3fae11d20bc6ddfd53d60d3ba809d_tn",
        "text": "Áo thun XXME Weeé Oops Tee",
        "link": "https://shope.ee/VZOEdJiym"
    },
    {
        "img": "https://cf.shopee.vn/file/735a844a4a63822f49402cc3fd219fbf_tn",
        "text": " Áo thun polo nữ tay ngắn thời trang Hàn Quốc",
        "link": "https://shope.ee/9KAhLfm8NU"
    },
    {
        "img": "https://cf.shopee.vn/file/e523690228fc6be909ed2e738633361a_tn",
        "text": "Áo croptop Poni",
        "link": "https://shope.ee/501navbSKG"
    },
    {
        "img": "https://cf.shopee.vn/file/7dea3d934f1c50b9fb42a03aca6cb887_tn",
        "text": "Áo Thun Dáng Ôm Màu Trơn Thời Trang 2022 Dành Cho Nữ",
        "link": "https://shope.ee/9KAmktyUJV"
    },
    {
        "img": "https://cf.shopee.vn/file/84737dbf678b87384352966ae2f817d0_tn",
        "text": "Áo thun tay lỡ WISEN WS in nổi unisex nam nữ cotton oversize form rộng",
        "link": "https://shope.ee/6ADkz5o8mX"
    },
    {
        "img": "https://cf.shopee.vn/file/f62cf609485e26294886c178fb716c77_tn",
        "text": "Áo croptop SS1 AITHER form ôm ( CROPTOP SS1 )",
        "link": "https://shope.ee/10Vepbh4n0"
    }
]
//Sweater, Hoodie, Jacket---------------------------------------------------------------------------------------------------------------------------
const panel5 = [
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-23030-8ikp68yyyvova4",
        "text": "LONGSLEEVE ILLUSION SENTINIALS áo tay dài",
        "link": "https://shope.ee/6fAiMyjCgD"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-u6oggewh7klv22",
        "text": "AITHER STUDIO Áo Hoodie Zip Unisex form rộng (HÀNG CHÍNH HÃNG)",
        "link": "https://shope.ee/3Ku9Ttz636"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/6aa3b73aa1f1b723f8d65ebfe0744783",
        "text": "AITHER STUDIO Áo khoác MONO CARDIGAN in họa tiết thương hiệu màu Kem",
        "link": "https://shope.ee/2feSgZ8rUw"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-22120-tpjxhyhrsqlvca",
        "text": "AITHER STUDIO - Áo nỉ SIGNATURE SWEATER FORM RỘNG",
        "link": "https://shope.ee/2feSgetAcT"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/0db04ebb-a994-4526-9305-5e2fcb3ba3f31EF09661-F7A1-44FE-8094-A734859ECEB0.jpeg",
        "text": "Áo Khoác Hoodie Nỉ bông siêu to khủng lồ hai lớp mũ siêu ấm",
        "link": "https://shope.ee/8UbfnV9nWq"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/0E5E3E9F-C307-4BA6-B0C8-EB2A40400F8B.jpeg",
        "text": "Áo Sweater Nữ JEM CLOSET Form Rộng Phong Cách Unisex Hàn Quốc Mẫu Mới Hot Trend EKTA  10428 ",
        "link": "https://shope.ee/3fWQ2dNX28"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-q88b31ooksjv98",
        "text": "Áo Sweater Kẻ Ngang Tay Dài JEM CLOSET ",
        "link": "https://shope.ee/4fOxEU1RmT"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22120-3ng2f5r82xkv56_tn",
        "text": "AITHER STUDIO Áo Gile Unisex form rộng ",
        "link": "https://shope.ee/fsoT93Pof"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/715DA6AF-27AF-472D-A632-ED73CE7BEF89.jpeg",
        "text": "Áo nỉ HOODIE TXR // THOXRI ",
        "link": "https://shope.ee/9UUCzOHlvV"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/EFF017A9-FA34-4123-A6E7-92D7BF72D43D.jpeg",
        "text": "￼ÁO SWEATER NỈ BÔNG MOTIVATION MINT",
        "link": "https://shope.ee/3Aa9RlO5OC"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/09A9B6C6-43BD-482C-A0CF-7126991B850C.jpeg",
        "text": "SWEATER NỈ TRẮNG ĐEN EXPLORER FORM RỘNG TAY BỒNG",
        "link": "https://shope.ee/5KeV6aRyF6"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/3D619D28-2BE8-465E-A980-87ED65832045.jpeg",
        "text": " SWEATER TRẮNG HOA FORM RỘNG TAY BỒNG",
        "link": "https://shope.ee/2VKJjHW6e8"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/1b193df5-7e2a-4e6c-9645-899d57dc1e48product_image",
        "text": "Áo phao",
        "link": "https://shope.ee/2fdsqspRU9"
    },
    {
        "img": "https://cf.shopee.vn/file/b6a3f3fb8c67dc32506418c6ad280d73_tn",
        "text": "HODDI ABNORMAL - HADES",
        "link": "https://shope.ee/2L12SHm2rK"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22090-f6oxt56znwhv72_tn",
        "text": "Áo Hoodie IM NOT SAD THOXRI",
        "link": "https://shope.ee/5paucjU7iS"
    },
    {
        "img": "https://cf.shopee.vn/file/3a1491e65c9694bd1cc95916d0722b69_tn",
        "text": "ÁO HOODIE ANGEL ( ĐEN , XÁM , XANH COBAN )",
        "link": "https://shope.ee/1Ap54APUEC"
    },
    {
        "img": "https://cf.shopee.vn/file/5ca38ae44295f030a097c06b04ac45ba_tn",
        "text": "Áo Hoodie Baby Blue của 5AM",
        "link": "https://shope.ee/10VersYW5Q"
    },
    {
        "img": "https://cf.shopee.vn/file/5ba63a284d3b7eaf1bc2cf416e135f92_tn",
        "text": "Áo Hoodie Cinder Academy, Áo Khoác Hoodie Zip Nam Nữ Form Rộng Thêu Cao Cấp, Local Brand Chính Hãng",
        "link": "https://shope.ee/5Uy4E9qVxA"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/fb1f1eaa-567b-4cfa-829d-f310bff4cead984BCCC3-A28E-439A-9A12-FB5C35A1257F.jpeg",
        "text": "Áo Hoodie Màu Xám Kill System",
        "link": "https://shope.ee/8KIFbNNaVP"
    },
    {
        "img": "https://cf.shopee.vn/file/217b8d2443d9fa0b64e708a29c1b14d5_tn",
        "text": "Áo Len Form Rộng 🍊 [Tiệm Vải Xinh] 🍊 Áo Len Form Rộng Kẻ Đen Trắng - Hàng Quảng Châu",
        "link": "https://shope.ee/qC4joQE0O"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/07DFE9AE-917A-42C8-8D2E-5325E112EBCC.jpeg",
        "text": "AITHER STUDIO - Áo nỉ SIGNATURE SWEATER FROM RỘNG",
        "link": "https://shope.ee/3KtPIELQn4"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/8eef1e4d-15bb-4773-82d9-aadfe74f3ae6A2CA88EE-17D6-4C71-B7BF-A81120573C2A.jpeg",
        "text": "Áo Sweater Tay Dài Cổ Tròn Hình Gấu Và Dâu Tây",
        "link": "https://shope.ee/7pLz0UxkAK"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/5acc688d-8e90-4ba9-a16d-d9ae36358d1bproduct_image",
        "text": "Áo Hoodie Zip CINDER Nam Nữ, Áo Hoodie khoác Nỉ Form Rộng Local Brand Unisex Đẹp (Zip HD Basic)",
        "link": "https://shope.ee/AK3Jz6WMRU"
    },
    {
        "img": "https://cf.shopee.vn/file/2f13f79c90ee1712cdd19a5bb26f3790_tn",
        "text": "Áo Khoác Nam Nữ Local Brand Chính Hãng Cinder Jacket Enjoy, Áo Khoác Dù Form Rộng Unisex Thêu Cao Cấp",
        "link": "https://shope.ee/1L8VGZqoWz"
    },
    {
        "img": "https://cf.shopee.vn/file/65e938204cbb5ab18c7dfbff87a57ed4_tn",
        "text": "Hoodie zip CALEM.CLUB - Áo khoác nỉ dây kéo nhiều màu chất nỉ dày dặn form rộng unisex",
        "link": "https://shope.ee/5zuKpAQG1I"
    },
    {
        "img": "https://cf.shopee.vn/file/3909e33afe8845e26c80b1cf97c94c4d_tn",
        "text": "Áo SWEATER tổ ong trơn form rộng trơn xinh thời trang Miho house",
        "link": "https://shope.ee/3KtZeHRCoy"
    },
    {
        "img": "https://cf.shopee.vn/file/389ec466bd2141c0babd8d0e11212412_tn",
        "text": "[Mượn tạm ảnh shop khác] Set áo khoác nỉ bông kéo khoá kèm quần short sporty - 29feb.closet - S31",
        "link": "https://shope.ee/VZOH5O2ro"
    },
    {
        "img": "https://cf.shopee.vn/file/903c5fabedc4d152dc88383afb210a88_tn",
        "text": "Áo Khoác MBC Corduroy Exclusive Jacket - Hồng/Đen",
        "link": "https://shope.ee/2L12SSuO8m"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/p2wIcVewLDvsTBpbz0q3W4Cyt3Xc3y6l7zFeTUiy.jpeg",
        "text": "HOODIE ZIP SYMBOL",
        "link": "https://shope.ee/9zQTaZVP6o"
    },
    {
        "img": "https://cf.shopee.vn/file/027de074dc3764fc444be62d34378e78_tn",
        "text": "AITHER STUDIO Áo khoác Jacket Dù Unisex form rộng",
        "link": "https://shope.ee/6ADl1XRziC"
    },
    {
        "img": "https://cf.shopee.vn/file/4c4b283b8274b52be92d2881cbcab9a1_tn",
        "text": "AITHER STUDIO Áo nỉ Sweater Basic Unisex form rộng",
        "link": "https://shope.ee/4Km6qB8ExG"
    },
    {
        "img": "https://cf.shopee.vn/file/e1ecb1958faf89bb950cd0150066f224_tn",
        "text": "AITHERSTUDIO-Áo nỉ Sweater Bear Donut form rộng Unisex",
        "link": "https://shope.ee/4V5X2UuLXH"
    },
    {
        "img": "https://cf.shopee.vn/file/01c72e05b9d06de0767c624a6ca2c922_tn",
        "text": "ÁO KHOÁC KHAKI DIAMOND MONOGRAM DENIM BLUE",
        "link": "https://shope.ee/4Km6qCgxuL"
    },
    {
        "img": "https://cf.shopee.vn/file/0ff2502e57f421a4dd5f9d74e5e966d7_tn",
        "text": "AITHER STUDIO Áo Hoodie Zip Unisex form rộng",
        "link": "https://shope.ee/LFy4reBqi"
    }
]
//Cardigan---------------------------------------------------------------------------------------------------------------------------
const panel6 = [
    {
        "img": "https://down-vn.img.susercontent.com/file/1a067bf0ddade87f4153e5de041d577e",
        "text": "CARDIGAN SENTINIALS STRIPES áo cardigan",
        "link": "https://shope.ee/1L9T1RFrIA"
    },
    {
        "img": "https://cf.shopee.vn/file/082244b1a9aa5f3b6cf603714f8dca12_tn",
        "text": "Áo khoác len Cardigan kẻ sọc tay màu be phong cách Hàn quốc",
        "link": "https://shope.ee/1q4lqUEMKW"
    },
    {
        "img": "https://cf.shopee.vn/file/686cc71bda590568b6fb19246f05d2a1_tn",
        "text": "Áo khoác cardigan len huy hiệu xám freesize 🎉",
        "link": "https://shope.ee/6ADl0Sg49K"
    },
    {
        "img": "https://cf.shopee.vn/file/522495658cf5d88f4008661d80ad490e_tn",
        "text": "Áo khoác len cardigan trơn basic len QC siêu dày dặn freesize",
        "link": "https://shope.ee/AUMkAQylcG"
    },
    {
        "img": "https://cf.shopee.vn/file/598a71bbd1059bd8d5f30ef2129ea00a_tn",
        "text": "AITHER STUDIO Áo khoác Mono Cardigan in họa tiết thương hiệu màu Đen",
        "link": "https://shope.ee/5ALDoe0vjs"
    },
    {
        "img": "https://cf.shopee.vn/file/4ef913b346c1a18ad2c47eb11be9cb5c_tn",
        "text": "AITHERSTUDIO- Áo Cardigan Bear thêu Logo Xù Form rộng",
        "link": "https://shope.ee/AK3Jy9cnjs"
    },
    {
        "img": "https://cf.shopee.vn/file/6aa3b73aa1f1b723f8d65ebfe0744783_tn",
        "text": "AITHER STUDIO Áo khoác Mono Cardigan Bear in họa tiết thương hiệu màu Kem",
        "link": "https://shope.ee/89ypOBgFJA"
    },
    {
        "img": "https://cf.shopee.vn/file/ac65f07ddf7bccbec37de07af43d1d40_tn",
        "text": "💐 ÁO CARDIGAN LEN NỮ KẺ Ô TRÁM HUY HIỆU SCHOOL",
        "link": "https://shope.ee/2pxJ2OZkOH"
    },
    {
        "img": "https://cf.shopee.vn/file/d560fd7ce347508d0c9bd58fe818614b_tn",
        "text": "💐 ÁO CARDIGAN LEN NỮ TAY KẺ NGANG MÀU LÔNG CHUỘT",
        "link": "https://shope.ee/2AhcFBJwG1"
    },
    {
        "img": "https://cf.shopee.vn/file/ef89f6620f1bf7de2da53d508c488a77_tn",
        "text": "💐 ÁO CARDIGAN LEN TRƠN FORM DÀI RỘNG *THESWEET *SIÊU ĐẸP",
        "link": "https://shope.ee/7pLyzbbxnk"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/3f1Bel42DXic1SfzoHyV8FRaXvgxEI2bso8b3a0e.jpeg",
        "text": "Áo khoác cardigan oversize thêu chữ P, mặc đôi nam nữ chất dày dặn",
        "link": "https://shope.ee/5paubwRuzo"
    }
]
//Giày---------------------------------------------------------------------------------------------------------------------------
const panel7 = [
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-my1q0gyh6wkv66",
        "text": "Giày Thể Thao Nữ Ngô Thắng MIB Liner Trắng Đế Cao",
        "link": "https://shope.ee/1q4xnU0oBL"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22110-8njkm2cplckv70",
        "text": "[Ảnh Thật+Fullbox+Bill] Giày Thể Thao SB Nâu ",
        "link": "https://shope.ee/4piNLuHkkD"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-22120-jaa3djtvgykv00",
        "text": "[Ảnh Thật+Fullbox+Bill] Giày Thể Thao Js Paris ",
        "link": "https://shope.ee/VZOBxpa9A"
    },
    {
        "img": "https://cf.shopee.vn/file/https://cf.shopee.vn/file/sg-11134201-22110-an0q0l92ddjvc5_tn",
        "text": "[Ảnh Thật+Fullbox+Bill] Giày Thể Thao SB Nâu Cao Cấp ",
        "link": "https://shope.ee/4Km6l1f3Mu"
    }
]
// Ba lô, Phụ kiện, Giày---------------------------------------------------------------------------------------------------------------------------
const panel8 = [
    {
        "img": "https://down-vn.img.susercontent.com/file/3f639e1fb44ab79f2883083120b25e18",
        "text": "Dây chuyền bạc nữ Miuu Silver, vòng cổ bạc đính 1 viên đá nhỏ xinh Elisie Necklace",
        "link": "https://shope.ee/qEI1xunb1"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/8395e5b8ab0a157fe0fa7055dbdbc2e0",
        "text": "Dây chuyền bạc Miuu Silver, vòng cổ nữ hình cái nơ đính đá xinh xắn, sang trọng",
        "link": "https://shope.ee/7UlBy8FuQC"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-pq8nssmw6xov64",
        "text": "Tinh dầu nước hoa CODEDECO Hanoi 29 Glamor 10ml Nhẹ Nhàng, Thanh Lịch, Tinh Tế",
        "link": "https://shope.ee/2VKyXg1omd"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/b467abb17bdf754081789a5e6f8159e5",
        "text": "Shop đồng hồ Meo bận",
        "link": "https://shope.ee/7UjYxkIm1J"
    },
    {
        "img": "https://cf.shopee.vn/file/dcd37b6e9151969c642b1eb5917aec0c_tn",
        "text": "giày M.L.B NY đen, giày thể thao nam nữ [FULLBOX]",
        "link": "https://shope.ee/9zQTZiml0a"
    },
    {
        "img": "https://passio-prod.s3-ap-southeast-1.amazonaws.com/passio-prod/builder/62dd56294a305458b75bb367/21af4525-5ca8-4e5e-b8d9-6d230d0d70d49E06804F-5772-43D9-BB7B-6F618123F337.png",
        "text": "Shop giày tui mua",
        "link": "https://shope.ee/9zQTZiml0a"
    },
    {
        "img": "https://cf.shopee.vn/file/77ffc72904094065f68c7fab2bdb0851_tn",
        "text": "DAYPACK ANGEL ( Balo ver 1)",
        "link": "https://shope.ee/1q4lqj8dyC"
    },
    {
        "img": "https://cf.shopee.vn/file/25e0d60268d59c1a07f0cd6535c506db_tn",
        "text": "Mũ len giữ ấm tai mèo thoáng khí thời trang MIHAN1 cho nữ\n",
        "link": "https://shope.ee/6UqbPJdH6m"
    },
    {
        "img": "https://cf.shopee.vn/file/79cbce55c27e5fc089aa452b2644103b",
        "text": "Giày cao gót Erosska thời trang phối dây gót nhọn kiểu dáng xỏ ngón cao 7cm màu trắng _ BM004",
        "link": "https://shope.ee/89ypOP1BdQ"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/ezy3RCsTaMMz0dP6GkNFAeMRbURwJ9Zah9AInAGh.jpeg",
        "text": "Đèn Cây Đứng Dáng Cao Trang Trí Phòng Khách Phòng Ngủ Phong Cách Bắc Âu - Tặng Kèm Đèn LED [CMART GIA DỤNG TIỆN ÍCH]",
        "link": "https://shope.ee/6fA1bft61o"
    },
    {
        "img": "https://cf.shopee.vn/file/2cb82a1081411c1509d8b683d1098b9d",
        "text": "Bộ Nhả Kem Đánh Răng Tự Động, Kệ Để Đồ Phòng Tắm Cao Cấp",
        "link": "https://shope.ee/3ppqETysAC"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/uLFV5J8pvebIk9IlWlfzStMVrKN6RfCiNgNQoXI6.jpeg",
        "text": "Ghế sofa lười tatami giường đôi nhỏ căn hộ nhỏ ban công phòng ngủ ghế sofa thư giãn",
        "link": "https://shope.ee/3fWQ2Byxvs"
    },
    {
        "img": "https://cf.shopee.vn/file/67a18c64379b680235b008092407a3bc_tn",
        "text": "Mắt ếch gắn trang trí mũ bảo hiểm, phụ kiện gắn mũ bảo hiểm độc lạ hottrend Soc Store Vietnam",
        "link": "https://shope.ee/AwXrlqA7s"
    },
    {
        "img": "https://cf.shopee.vn/file/b6d1cc0fbfc8b2e99052ac87a1f68783_tn",
        "text": "Mũ bảo hiểm nửa đầu chính hãng Sóc Store Vietnam nhiều màu kèm kính UV, kính phi công, nón bảo hiểm 1 phần 2 freesize",
        "link": "https://shope.ee/2fdsqO2JBQ"
    },
    {
        "img": "https://cf.shopee.vn/file/ed886b15059184c693413fc90a1bf1b9_tn",
        "text": "Balo basic thời trang đi học du lịch dễ thương vải kaki mềm size lớn (KAKI BASIC 45CM)",
        "link": "https://shope.ee/VZOGQ1Hhw"
    },
    {
        "img": "https://cf.shopee.vn/file/66c1419172ee3d5ed7497ac8662e9ebc_tn",
        "text": "Balo nhiều ngăn khoá dọc (NNI BACKPACK 🖤)",
        "link": "https://shope.ee/VZOGQZvs0"
    },
    {
        "img": "https://cf.shopee.vn/file/491f5b76f452154f57647a9b7c4d8f7c_tn",
        "text": "Balo vải oxford mềm form nhỏ tặng kèm móc khoá gấu dễ thương (ZIIM BACKPACK❤️)",
        "link": "https://shope.ee/7f2YncCv7A"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/elorXsdXcbrRqegN8gkrGywlT1QsXhCEne0IOVEL.jpeg",
        "text": "Shop giày puma",
        "link": "https://shope.ee/7f2YncCv7A"
    },
    {
        "img": "https://i.ecomobi.com/ssp/images/MiX9qkMENOU4rFO2fjVg7nnn5Lcy4X6EH1M983gS.jpeg",
        "text": "Giày thể thao M.L.B đẹp full box",
        "link": "https://shope.ee/7f2YncCv7A"
    },
    {
        "img": "https://cf.shopee.vn/file/0ac9f350f53f6b316a206597998301c0_tn",
        "text": "Túi mini đeo chéo nữ dây xích, túi xách mini size 13-18cm dáng ví nhiều ngăn thời trang dạo phố hàn quốc",
        "link": "https://shope.ee/7f2YncCv7A"
    }
]
// Mỹ Phẩm---------------------------------------------------------------------------------------------------------------------------
const panel9 = [
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfplzg2oi35w42",
        "text": "Combo sữa dưỡng thể, sữa tắm dưỡng trắng Niacinamide 500ml",
        "link": "https://shope.ee/8pFgUhOAuV"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/sg-11134201-23020-90iuynt7gbnvce",
        "text": "Tẩy Tế Bào Chết Body Cà Phê Hữu Cơ 500g Hella Beauty Cho Mọi Loại Da Giúp Dưỡng Trắng Da Toàn Thân, Giảm Mụn Mờ Thâm",
        "link": "https://shope.ee/5fIKqfSBZi"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lewfeahqrl1zc0",
        "text": "Son Kem Black Rouge Double Layer Over Velvet Ver.2 31.6g",
        "link": "https://shope.ee/4Kmqs7itaS"
    },
    {
        "img": "https://down-vn.img.susercontent.com/file/vn-11134201-23030-pq8nssmw6xov64",
        "text": "Tinh dầu nước hoa CODEDECO Hanoi 29 Glamor 10ml Nhẹ Nhàng, Thanh Lịch, Tinh Tế",
        "link": "https://shope.ee/2VKyXg1omd"
    },
    {
        "img": "https://cf.shopee.vn/file/sg-11134201-23010-97tmtbuvfwlvc9",
        "text": "Kem Dưỡng Ẩm Trắng Da Body Yogurt Hella Beauty Hương Moringa Island Dưỡng Da Trắng Sáng Mịn Màng Phù Hợp Da Nhạy Cảm",
        "link": "https://shope.ee/A9jzRT9nM1"
    },
    {
        "img": "https://cf.shopee.vn/file/6bb17569fb0dd3112e84f397f43edf2c_tn",
        "text": "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
        "link": "https://shope.ee/4ASgdLiCgK"
    },
    {
        "img": "https://cf.shopee.vn/file/6289b070ceddc3cb3188c90de9862d1d_tn",
        "text": "Cọ Trang Điểm 3CE Tone Hồng Xinh Xắn Siêu Mềm 1 Cọ",
        "link": "https://shope.ee/9zQTa4iGo5"
    },
    {
        "img": "https://cf.shopee.vn/file/718756c78dd2603e45395da38e5bcf0b_tn",
        "text": "Nature Republic Kem chống nắng California Aloe Daily Sun Block SPF50+PA++++ 57ml, nâng tone tự nhiên",
        "link": "https://shope.ee/7f2Ynp7bGr"
    },
    {
        "img": "https://cf.shopee.vn/file/4a9b4ad860e287d19c9e4dbfc2d04bce_tn",
        "text": "[Mã COSDAY giảm 8% đơn 150K] SON TINT BÓNG ROMAND MÀU 20 NÂU ĐẤT (Romand Juicy Lasting Tint 20)",
        "link": "https://shope.ee/5fHUQ9okts"
    },
    {
        "img": "https://cf.shopee.vn/file/5bf8725d70839ced044e65dcc22e83ae_tn",
        "text": "Son Bbia 25 màu đỏ nâu đất",
        "link": "https://shope.ee/6KXBDOTs3s"
    }
]

// const a = linktext.split(" ")
// console.log(a.length);
// panel5.map((item, i)=> {
//     item.link = a[i]
//     console.log(a[i]);
// }) 
const arrLabel = ["one", "two", "three", "four", "five", "six", "seven", "eight", "night"]
const listPn = [panel1, panel2, panel3, panel4, panel5, panel6, panel7, panel8, panel9]
for (let i = 0; i < arrLabel.length; i++) {
    const labelTmp = document.querySelector("#" + arrLabel[i] + "-tab");
    const textTmp = labelTmp.textContent
    labelTmp.textContent = textTmp + " (" + listPn[i].length + ") "
}

function genItem(parent) {
    const oneItem = document.createElement("a");
    oneItem.setAttribute("href", item.link)
    const image = document.createElement("img");
    image.setAttribute("src", item.img)
    image.setAttribute("alt", item.text)
    image.setAttribute("width", "100%")
    image.classList.add("img-item")
    const description = document.createElement("div");
    description.textContent = item.text;
    description.classList.add("des-item");
    oneItem.classList.add("grid-item");
    oneItem.appendChild(image)
    oneItem.appendChild(description)
    parent.appendChild(oneItem);
}

function genVoucher(parent) {
    const oneItem = document.createElement("a");
    oneItem.classList.add("voucher")
    oneItem.setAttribute("href", item.link)

    const slch = document.createElement("div");
    slch.textContent = "Số luợng có hạn";
    slch.classList.add("vctag");

    const image = document.createElement("img");
    if (item.type === 'discount') {
        image.setAttribute("src", "./vcsp.png");
    } else {
        image.setAttribute("src", "./fssp.png");
    }
    image.setAttribute("alt", "voucher")

    const info = document.createElement("div");
    info.classList.add("info")

    const text = document.createElement("div");
    text.classList.add("text")

    const titleVc = document.createElement("div");
    titleVc.classList.add("title-vc")
    titleVc.textContent = item.title

    const desVC = document.createElement("div");
    desVC.classList.add("des-vc")
    desVC.textContent = item.description

    const dateVC = document.createElement("div");
    dateVC.classList.add("date")
    dateVC.textContent = item.date + " " + getTimeRe()

    text.appendChild(titleVc);
    text.appendChild(desVC);
    text.appendChild(dateVC);

    const btn = document.createElement("div");
    btn.classList.add("btn")

    const btnSave = document.createElement("div");
    btnSave.classList.add("btn-save")
    btnSave.textContent = "Lưu"

    const cond = document.createElement("div");
    cond.classList.add("cond-vc")
    cond.textContent = "Điều kiện"

    btn.appendChild(btnSave);
    btn.appendChild(cond);

    info.appendChild(text)
    info.appendChild(btn)

    oneItem.appendChild(slch)
    oneItem.appendChild(image)
    oneItem.appendChild(info)

    parent.appendChild(oneItem);
}

for (item of vouchers) {
    const itemsList = document.querySelector("#voucher-list");
    genVoucher(itemsList)
}

for (item of panel1) {
    const itemsList = document.querySelector("#one-panel-list");
    genItem(itemsList)
}

for (item of panel2) {
    const itemsList = document.querySelector("#two-panel-list");
    genItem(itemsList)
}


for (item of panel3) {
    const itemsList = document.querySelector("#three-panel-list");
    genItem(itemsList)
}

for (item of panel4) {
    const itemsList = document.querySelector("#four-panel-list");
    genItem(itemsList)
}

for (item of panel5) {
    const itemsList = document.querySelector("#five-panel-list");
    genItem(itemsList)
}

for (item of panel6) {
    const itemsList = document.querySelector("#six-panel-list");
    genItem(itemsList)
}

for (item of panel7) {
    const itemsList = document.querySelector("#seven-panel-list");
    genItem(itemsList)
}

for (item of panel8) {
    const itemsList = document.querySelector("#eight-panel-list");
    genItem(itemsList)
}

for (item of panel9) {
    const itemsList = document.querySelector("#night-panel-list");
    genItem(itemsList)
}

const allItems = [].concat(panel1, panel2, panel3, panel4, panel5, panel6, panel7, panel8, panel9);

function removeAllItemSearch() {
    const itemsList = document.querySelector("#search-panel-list");
    while (itemsList.lastElementChild) {
        itemsList.removeChild(itemsList.lastElementChild);
    }
}

function searchFunc() {
    removeAllItemSearch();
    let input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    const searchImg = document.getElementById("searchDM");
    const nors = document.getElementById("nors");
    if (filter != "") {
        searchImg.classList.add("hidden")
        let rs = allItems.filter(item => item.text.toLowerCase().includes(filter))
        if (rs.length) {
            for (item of rs) {
                const itemsList = document.querySelector("#search-panel-list");
                genItem(itemsList)
            }
            rs = []
            nors.classList.add("hidden")
        } else {
            removeAllItemSearch()
            nors.classList.remove("hidden")
        }
    } else {
        removeAllItemSearch();
        searchImg.classList.remove("hidden")
        nors.classList.add("hidden")
    }
}

function getTimeRe() {
    const d = new Date();
    let hour = d.getHours();
    let h = 23 - hour;
    if (h > 0) return h + " giờ";
    let minutes = d.getMinutes();
    let m = 60 - minutes;
    return m + " phút";
}
