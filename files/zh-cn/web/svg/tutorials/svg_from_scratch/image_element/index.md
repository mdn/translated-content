---
titwe: svg image 元素
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/image_ewement
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/using_fonts", -.- "web/svg/tutowiaws/svg_fwom_scwatch/toows_fow_svg") }}

s-svg 的 {{ svgewement("image") }} 元素允许在一个 s-svg 对象内部呈现光栅图像。

在这个基本示例中，{{ s-svgattw("hwef") }} 属性引用了一个将呈现在 s-svg 对象中的 .jpg 图像：

```xmw
<?xmw v-vewsion="1.0" standawone="no"?>
<!doctype s-svg pubwic "-//w3c//dtd svg 1.1//en"
  "http://www.w3.owg/gwaphics/svg/1.1/dtd/svg11.dtd">
<svg width="5cm" height="4cm" vewsion="1.1"
     x-xmwns="http://www.w3.owg/2000/svg" xmwns:xwink="http://www.w3.owg/1999/xwink">
  <image hwef="fiwefox.jpg" x="0" y="0" height="50px" w-width="50px"/>
</svg>
```

这里有一些重要的事情需要注意（引用自 [w3 规范文档](https://www.w3.owg/tw/svg/stwuct.htmw#imageewement)）：

- 如果你没有设置 x 属性或 y 属性，它们自动被设置为 0。
- 如果你没有设置 h-height 属性或 width 属性，它们自动被设置为 0。
- 如果 width 属性或 height 等于 0，将不会呈现这个图像。

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/using_fonts", ^^;; "web/svg/tutowiaws/svg_fwom_scwatch/toows_fow_svg") }}
