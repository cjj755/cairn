---
title: 'html'
---

## 1、内元素和块级元素的区别

**行内元素：** 不会独立出现在一行，单独使用的时候后面不会有换行符的元素。eg：***span, strong, img, a*** 等。这些元素，默认的高宽，是其内容撑开的高宽。并且，margin和padding值，只有左右有效。      
**块级元素：** 独立在占一行的元素，他们后面会自动带有换行符。eg：***div , p ,form , ul , li , ol , dl*** 等。它们的出现，往往独自占领一行。在没有设置宽度的情况下，默认宽度总是其父元素的宽度。   
**相互转换：** 行内元素转换成块元素，设置 ***display:block;*** 。块元素转换成行内元素，设置  ***display:inline;*** 。

* 行内元素有：a b span img input select   
* 块级元素有：div p ul ol li dl dt dd h1-h6   
* 常见的空元素：br-换行，hr-水平分割线   



## 2、Doctype的作用

<!DOCTYPE>告诉浏览器使用哪个版本的html规范来渲染文档。DOCTYPE不存在或形式不正确会导致html文档以混杂模式呈现。
**标准模式与混杂模式区分：**
标准模式（Standards mode）以浏览器支持的最高标准运行；混杂模式（Quirks mode）中页面是一种比较宽松的向后兼容的方式显示。


## 3、引入样式时，link和@import的区别
链接样式时，link只能在HTML页面中引入外部样式

导入样式表时，@import 既可以在HTML页面中导入外部样式，也可以在css样式文件中导入外部css样式。


## 4、html5有哪些新特性
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。   
* 绘画 canvas;
* 用于媒介回放的 video 和 audio 元素;
* 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
* sessionStorage 的数据在浏览器关闭后自动删除;
* 语意化更好的内容元素，比如 article、footer、header、nav、section;
* 表单控件，calendar、date、time、email、url、search;
* 新的技术webworker, websocket, Geolocation;

IE8/IE7/IE6支持通过document.createElement方法产生的标签，可以利用这一特性让这些浏览器支持HTML5新标签，浏览器支持新标签后，还需要添加标签默认的样式。当然也可以直接使用成熟的框架、比如html5shim

移除的元素：   
纯表现的元素：basefont big center font s strike tt u   
性能较差元素：frame frameset noframes   
**区分：** DOCTYPE声明的方式是区分重要因素，根据新增加的结构、功能来区分

## 5、对浏览器内核的理解

主要分成两部分：渲染引擎(Layout Engine或Rendering Engine)和js引擎。   
渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。   
js引擎：解析和执行JavaScript来实现网页的动态效果。   

最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

常见的浏览器内核：   
谷歌（Chrome）、Safari、火狐（Firefox）、IE、Edge、Opera等。   
[浏览器内核详解](https://blog.51cto.com/u_15693888/6161871)  


## 6、对HTML语义化的理解

**解释：**   

HTML语义化是在确保页面结构正确的前提下，尽可能使用最恰当的HTML标签来组织文档结构，以达到更好地表达和传递信息的目的。也就是说，HTML语义化是一种设计和开发网页的方法，通过搭建易于理解和维护的文档结构，帮助搜索引擎和开发者更好地理解网页内容和结构。 

**为什么语义化：**    
1. 提高可读性和可访问性   
2. 提高可读性和可访问性  
3. 减少代码量，增加代码的可维护性和重用性   

**实现：**  

1. 使用恰当的HTML标签
2. 采用合理的标签嵌套顺序
3. 使用有意义的class和id名称
4. 网页布局采用DIV+CSS方式实现


## 7、label标签和for、id属性的配套使用

你点击label标签的时候，焦点会自动聚焦到input框

```
<Label FOR="InputBox">姓名</Label><input ID="InputBox" type="text">
```

## 8、video标签的属性方法  

* src：视频的URL 
* poster：视频封面，没有播放时显示的图片 
* preload：预加载 
* autoplay：自动播放 
* loop：循环播放 
* controls：浏览器自带的控制条 
* width：视频宽度 
* height：视频高度

## 9、a标签中 如何禁用href 跳转页面 或 定位链接   
 
> e.preventDefault();
> href="javascript:void(0); 


## 10、a标签中 active hover link visited 正确的设置顺序是什么? 

**正确顺序：** a:link、a:visited、a:hover、a:active; 后面的样式会覆盖前面的样式；
* link：链接平常的状态
* visited：链接被访问过后
* hover：鼠标放到连接上的时候
* active：链接被按下的时候


## 11、px、em、rem 理解   
* **px：** 绝对单位。像素px是相对于显示器屏幕分辨率而言的，不会因为其他元素的尺寸变化而变化 。
* **em：** 相对单位，相对于父元素而言的。通常16px（浏览器默认字体大小）=1em，则12px=0.75em，10px=0.625em。
为简化font-size的换算，需要在css中的body选择器中声明font-size=62.5%，这就使em的值变为16px*62.5%=10px，这样12px=1.2em，10px=1em，也就是将原来的px值除以10，换上em做单位就可以了。
* **rem：** 是CSS3新增的一个相对单位。相对的是HTML根元素。


## 23、meta标签的name属性值？


## 13、浏览器页面有哪三层构成，分别是什么，作用是什么?       
## 14、div+css的布局有什么优点？          
## 15、网页制作会用到的图片格式有哪些？          
## 16、简述一下src与href的区别            
## 17、从浏览器地址栏输入url到显示页面的步骤            
## 18、HTML全局属性(global attribute)有哪些              
## 19、Canvas是什么？怎样写Canvas？             
## 20、你能列出HTML5中新的输入类型属性吗？               
## 21、简述几个css hack?               
## 22、viewport 所有属性 ？              
              
          
            
          
          
          

[来源于](https://mp.weixin.qq.com/s?__biz=MjM5MDA2MTI1MA==&mid=2649112520&idx=3&sn=f41d0edaf539f19f19ea9c742ce8d50f&chksm=be581865892f9173345c4f386a88a3371dd361d2c89409c6abcd8de821c19bb8c0f7e3ac4cb4&scene=27)