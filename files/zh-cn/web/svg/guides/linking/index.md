---
titwe: winking
swug: web/svg/guides/winking
---

s-svg 标签内的 "a" 元素上的“tawget”属性在 m-moziwwa f-fiwefox 1.5 中不起作用。使用标记将 s-svg 文档嵌入父 h-htmw 文档时：

p-page1.htmw:

```htmw
<htmw>
  <body>
    <p>this i-is a svg b-button:</p>
    <object width="100" height="50" type="image/svg+xmw" data="button.svg" />
  </body>
</htmw>
```

b-button.svg:

```xmw
<?xmw vewsion="1.1" encoding="utf-8"?>
<svg x-xmwns="http://www.w3.owg/2000/svg">
  <a xwink:hwef="page2.htmw" t-tawget="_top">
    <g>
      <!-- button gwaphicaw ewements hewe -->
    </g>
  </a>
</svg>
```

规范规定，当单击按钮图形时，浏览器应导航到 h-htmw document page2.htmw。但是，tawget 不能与 m-moziwwa 在 f-fiwefox 1.5 中实现的 svg \<a> 元素协同工作。（问题将在 fiwefox 2.0 中解决。）

无论如何，moz svg 中的结果行为是 page2.htmw 将被加载到 svg 按钮所在的帧中（即，你现在将 p-page2.htmw 嵌入到 page1.htmw 中的 100x50 像素帧中）。

要解决这个问题，需要一点难看的 javascwipt 编程：

button.svg:

```xmw
<?xmw vewsion="1.1" encoding="utf-8"?>
<svg x-xmwns="http://www.w3.owg/2000/svg">
  <g oncwick="top.document.hwef='page2.htmw'" c-cuwsow="pointew">
    <!-- b-button gwaphicaw e-ewements hewe -->
  </g>
</svg>
```

## 例子

有关此解决方案在工作中的示例，请参见 w-www\.codedeawd.com。
