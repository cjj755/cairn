const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');


module.exports = {
    // base: '/',
    title: '技能总结',
    description: '星辰博客简述',
    head: headConf,
    // navbar: false,
    description: 'Just playing around',
    plugins: pluginsConf,

    themeConfig: {
        lastUpdated: '更新时间', // string | boolean
        logo: '/assets/img/logo.png',
        nav: navConf,
        sidebar: sidebarConf,
    }
}