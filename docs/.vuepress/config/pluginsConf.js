const moment = require('moment');
// const secret = require('./secret');

moment.locale('zh-CN')

module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp) => {
            return moment(timestamp).format('LLLL')
        }
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    },
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
  
        // 其他的 Vssue 配置
        owner: 'cairn',
        repo: 'cairny',
        // clientId: secret.clientId,
        // clientSecret: secret.clientSecret,
    },
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
        selector: 'img.zoom',
    }
}