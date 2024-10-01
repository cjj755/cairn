---
title: 'css'
---

## 1、什么是 CSS 盒模型

CSS 盒模型定义了元素在网页上的呈现方式。它由内容、内边距、边框和边距组成。内容代表实际的元素内容，而填充则在内容和边框之间添加空间。边框提供可见的边界，边距在元素周围创建空间。


## 2、解释 CSS 特异性的概念以及它如何影响样式应用

## 3、使元素水平和垂直居中的不同方法有哪些
* 弹性盒模型
```
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
* CSS网格方法
```
.container {
    display: grid;
    place-items: center;
}
```
* 变换方法
```
.container {
    position: relative;
}

.centered-element {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
## 4、如何创建在滚动时保持固定的粘性标题


[来源于](https://mp.weixin.qq.com/s?__biz=MjM5MDA2MTI1MA==&mid=2649139527&idx=2&sn=94209ba18649dd6a2a2766ff5207bb67&chksm=be588eea892f07fc05c442b38e5b43f5c10b8b44315d6f647c343e6d63c5212f4c034f4363cd&scene=27)