---
title: SVG In HTML Introduction
slug: Web/SVG/Guides/SVG_in_HTML
---

本文及其相关示例展示了如何使用内联的 [SVG](/zh-CN/docs/Web/SVG) 给一个表单提供背景图片，它展示了如何按照编写常规 XHTML 代码相同的方式来通过 [JavaScript](/zh-CN/docs/Web/JavaScript) 和 [CSS](/zh-CN/docs/Web/CSS) 操作图片。注意，该示例仅在支持 XHTML（非 HTML）并集成了 SVG 的浏览器中正常工作。

## 源码

源码如下： [查看示例](https://mdn.dev/archives/media/presentations/xtech2005/svg-canvas/SVGDemo.xml)

```plain
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>XTech SVG Demo</title>
<style>
  stop.begin { stop-color:yellow; }
  stop.end { stop-color:green; }
  body.invalid stop.end { stop-color:red; }
  #err { display:none; }
  body.invalid #err { display:inline; }
</style>
<script>
  function signalError() {
    document.getElementById('body').setAttribute("class", "invalid");
  }
</script>
</head>
<body id="body"
  style="position:absolute; z-index:0; border:1px solid black; left:5%; top:5%; width:90%; height:90%;">
<form>
  <fieldset>
    <legend>HTML Form</legend>
    <p><label>Enter something:</label>
    <input type="text"/>
    <span id="err">Incorrect value!</span></p>
    <p><input type="button" value="Activate!" onclick="signalError();" /></p>
  </fieldset>
</form>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
  style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;">
  <linearGradient id="gradient">
    <stop class="begin" offset="0%"/>
    <stop class="end" offset="100%"/>
  </linearGradient>
  <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
  <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
</svg>
</body>
</html>
```

## 讨论

该页面主要是常规的 XHTML、CSS 和 JavaScript，唯一有趣的部分就是包含了 \<svg> 元素。该元素及其子元素都被声明在 SVG 的命名空间内。它包含一个渐变和两个渐变填充的形状。该渐变颜色的终值颜色由 CSS 设置，当用户在表单中输入了错误信息，脚本会给 \<body> 设置一个 `invalid` 属性，样式规则将渐变颜色的`end-stop`颜色设置为红色（另一个样式规则用于展示错误提示信息）

该方法有如下几点需要注意：

- 我们单独举出了一个可能存在的网站构成部分——表单，并为其添加了吸引人的、交互性的背景
- 该方法通过不展示背景图片的方式，向后兼容了不支持 SVG 的浏览器
- 它非常简单且运行良好
- 这个图片能够智能的自动适应其需要的大小
- 我们可以给 HTML 和 SVG 都显式声明样式规则
- 相同的脚本同时操作了 HTML 和 SVG
- 该文档完全符合标准

> [!NOTE]
> 如果需要给一个内嵌的 SVG 元素通过 DOM 方法添加一个有外链的图片，我们需要使用 `setAttributeNS` 来设置外链地址 `href`. 示例如下：
>
> ```js
> var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
> img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "move.png");
> ```

## 细节

viewBox 属性创建了一个与 SVG 图片坐标系相关联的逻辑坐标系，通过这种方式我们的图片被放置到了一个 100x100 的视觉系中。

`preserveAspectRatio` 属性指定了需要预设的数据，即指定了再有效大小内图片的居中、适配图片最大宽高，并裁切掉了多余部分。

样式属性指定了 SVG 在 form 背景中的位置。

## 参见

- Another SVG in XHTML example: [A swarm of motes](/zh-CN/docs/Web/SVG/Guides/Namespaces_crash_course/Example)
- [Working example](https://jwatt.org/svg/demos/xhtml-with-inline-svg.xhtml) 可以同时工作在安装有 Adobe SVG Viwer 的 Mozilla 和 IE 浏览器中。 （对于同时工作在 Firefox 和 IE 浏览器中得内联 SVG，需要为每个浏览器的服务文档设置不同的 Cotent-type。因为当你基于一个代理服务器获取页面的时候，如果在第二个浏览器中加载该案例将会失败，因其会获取错误的 Content-Type）
