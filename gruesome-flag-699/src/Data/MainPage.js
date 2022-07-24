let slidingImages = [
    'https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Topbanner_ExclusivelyatSephoradesktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/JuiceBeauty_Topbanner_KateHudsonmaskdesktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/14-june-2022/se/Ikoo_HomepageBanner_1desktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/04-june-2022/Caudalie_TopBanner_CaudalieVinousourcedesktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/01-june-2022/se/MUFE_Topbanner_Ultrasettingpowderlaunch_Desktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_HomepageBannerdesktop.jpg']

// // Small product sliding window
let productDataOne = [
    // 1
    {
        image: 'https://cdn18.nnnow.com/web-images/medium/styles/E4PUAGOMU8E/1653375921600/1.jpg',
        title: "MOROCCANOIL",
        description: "All in One Leave In Conditioner",
        price: "1125",
    },
    // 2
    {
        image: 'https://cdn05.nnnow.com/web-images/medium/styles/OPW5DA9Z5DM/1652252637841/1.jpg',
        title: "OUAI",
        description: "Medium Hair Shampoo",
        price: "2300",
    },
    // 3
    {
        image: 'https://cdn16.nnnow.com/web-images/medium/styles/7C1N04O5PPK/1655201666947/1.jpg',
        title: "HUDA BEAUTY",
        description: "Easy Bake Loose Setting Powder Mini-Banana Bread",
        price: "1650",
    },
    // 4
    {
        image: 'https://cdn14.nnnow.com/web-images/medium/styles/QDDLQP0BVOX/1652252637877/1.jpg',
        title: "OUAI",
        description: "Medium Hair Conditioner",
        price: "2300",
    },
    // 5
    {
        image: 'https://cdn11.nnnow.com/web-images/medium/styles/KR54NI5C40N/1652252614163/1.jpg',
        title: "OUAI",
        description: "Detox Shampoo",
        price: "3200",
    },
    // 6
    {
        image: 'https://cdn05.nnnow.com/web-images/medium/styles/TOX8U3Y7S9M/1652252643784/1.jpg',
        title: "OUAI",
        description: "Fine Hair Shampoo",
        price: "2300",
    },
]

// // Big product sliding window
let bigProductDataOne = [
    // 1
    {
        image: 'https://cdn09.nnnow.com/web-images/medium/styles/NAG35MWAZB5/1603956012732/1.jpg',
        title: "OLAPLEX",
        description: "N3 Bond Maintenance Shampoo",
        price: "2950",
    },
    // 2
    {
        image: 'https://cdn00.nnnow.com/web-images/medium/styles/RB2GD0T4W14/1603859985717/1.jpg',
        title: "OLAPLEX",
        description: "N5 Bond Maintenance Conditioner",
        price: "2950",
    },
    // 3
    {
        image: 'https://cdn15.nnnow.com/web-images/medium/styles/KHFROVPTCI2/1599046960541/1.jpg',
        title: "OLAPLEX",
        description: "No. 7 Bonding Oil",
        price: "2950",
    },
    // 4
    {
        image: 'https://cdn12.nnnow.com/web-images/medium/styles/SKSJOH1S5KM/1605594563751/1.jpg',
        title: "OLAPLEX",
        description: "N3 Hair Perfector Treatment",
        price: "2950",
    },
    // 5
    {
        image: 'https://cdn19.nnnow.com/web-images/medium/styles/R77AWKVN9TK/1633928854562/1.jpg',
        title: "OLAPLEX",
        description: "N8 Bond Intense Moisture Mask",
        price: "2950",
    },
    // 6
    {
        image: 'https://cdn09.nnnow.com/web-images/medium/styles/626PU93RNYO/1652252610567/1.jpg',
        title: "OUAL",
        description: "Leave In Conditioner",
        price: "2200",
    },
]
let bigProductDataTwo = [
    // 1
    {
        image: 'https://cdn09.nnnow.com/web-images/medium/styles/626PU93RNYO/1652252610567/1.jpg',
        title: "OUAL",
        description: "Leave In Conditioner",
        price: "2200",
    },
    // 2
    {
        image: 'https://cdn19.nnnow.com/web-images/medium/styles/R77AWKVN9TK/1633928854562/1.jpg',
        title: "OLAPLEX",
        description: "N8 Bond Intense Moisture Mask",
        price: "2950",
    },
    // 3
    {
        image: 'https://cdn12.nnnow.com/web-images/medium/styles/SKSJOH1S5KM/1605594563751/1.jpg',
        title: "OLAPLEX",
        description: "N3 Hair Perfector Treatment",
        price: "2950",
    },
    // 4
    {
        image: 'https://cdn15.nnnow.com/web-images/medium/styles/KHFROVPTCI2/1599046960541/1.jpg',
        title: "OLAPLEX",
        description: "No. 7 Bonding Oil",
        price: "2950",
    },
    // 5
    {
        image: 'https://cdn00.nnnow.com/web-images/medium/styles/RB2GD0T4W14/1603859985717/1.jpg',
        title: "OLAPLEX",
        description: "N5 Bond Maintenance Conditioner",
        price: "2950",
    },
    // 6
    {
        image: 'https://cdn09.nnnow.com/web-images/medium/styles/NAG35MWAZB5/1603956012732/1.jpg',
        title: "OLAPLEX",
        description: "N3 Bond Maintenance Shampoo",
        price: "2950",
    },
]