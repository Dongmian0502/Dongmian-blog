module.exports = {
    //这里是将config.js中的社交信息部分单独提取出来，方便配置
    socials: [

        {
            aHref: "https://www.instagram.com/dongmian_0502/",
            showImgSrc: "/fb-icon.png",
            isHome: false,
            show: true,
            sidebar: true,
            symbol: '#icon-instagram'
        },
        {
            aHref: "https://scontent.ftpe9-1.fna.fbcdn.net/v/t1.15752-9/279780478_1210189106052934_7551750453872184881_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=ae9488&_nc_ohc=lZkVG4r1quQAX8UDYxO&_nc_ht=scontent.ftpe9-1.fna&oh=03_AVKS6DvGkZcCRFKHvvfheSN6_2_-vEc2l2TCekhO2nNOng&oe=629DCA10",
            //imgSrc: /assets/img/ico/wechat.svg,
            showImgSrc: "/wechat.jpg",
            isHome: false,
            show: true,
            symbol: '#icon-wechat',
            sidebar: true
        },

        {
            aHref: "mailto:sio0607sio8@gmail.com",
            isHome: false,
            show: true,
            sidebar: true,
            symbol: '#icon-email'
        },
        {
            //社交链接
            aHref: "https://www.facebook.com/profile.php?id=100010915951504",
            // imgSrc: "https://ooszy.cco.vin/img/ico/qq.svg", 从v1.3.2开始久移除次配置，以前版本用于社交ico图标配置

            //true为在首页显示，反之
            isHome: false,

            //是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示
            show: true,

            //是否在侧边栏显示
            sidebar: true,

            //使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看
            symbol: '#icon-facebookfacebook51',

            //鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友
            // showImgSrc: "/aurora/wechat.jpg",
        },
    ]
}