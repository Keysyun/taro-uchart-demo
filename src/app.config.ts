export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/profile/index',
    'pages/message/index',
    'pages/maintain/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#6f737b',
    selectedColor: '#07c989',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: 'static/images/navbar/energy.png',
        selectedIconPath: 'static/images/navbar/energy-active.png',
        text: '能源',
      },
      {
        pagePath: 'pages/maintain/index',
        iconPath: 'static/images/navbar/maintain.png',
        selectedIconPath: 'static/images/navbar/maintain-active.png',
        text: '运维',
      },
      {
        pagePath: 'pages/message/index',
        iconPath: 'static/images/navbar/message.png',
        selectedIconPath: 'static/images/navbar/message-active.png',
        text: '消息',
      },
      {
        pagePath: 'pages/profile/index',
        iconPath: 'static/images/navbar/profile.png',
        selectedIconPath: 'static/images/navbar/profile-active.png',
        text: '我的',
      },
    ],
  },
})
