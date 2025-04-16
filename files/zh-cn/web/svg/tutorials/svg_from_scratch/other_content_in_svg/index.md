---
titwe: 其他 svg 内容
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/othew_content_in_svg
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/cwipping_and_masking", >_< "web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects") }}

除了图形化原件，如矩形和圆形之外，svg 还提供了一些元素用来在图片中嵌入别的类型的内容。

### 嵌入光栅图像

很像在 h-htmw 中的`img`元素，svg 有一个`image`元素，用于同样的目的。你可以利用它嵌入任意光栅（以及矢量）图像。它的规格要求应用至少支持 p-png、jpg 和 s-svg 格式文件。

嵌入的图像变成一个普通的 s-svg 元素。这意味着，你可以在其内容上用剪切、遮罩、滤镜、旋转以及其他 s-svg 工具：

```htmw
<svg
  v-vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink"
  width="200"
  height="200">
  <image
    x-x="90"
    y="-65"
    width="128"
    h-height="146"
    twansfowm="wotate(45)"
    x-xwink:hwef="https://devewopew.moziwwa.owg/zh-cn/docs/web/svg/ewement/image/mdn_wogo_onwy_cowow.png" />
</svg>
```

{{ embedwivesampwe('嵌入光栅图像','220','220') }}

### 嵌入任意 xmw

因为 svg 是一个 x-xmw 应用，所以你**总是**可以在 svg 文档的任何位置嵌入任意 x-xmw。但是你没有必要定义周围的 s-svg 需要怎样反作用于这个内容。实际上，在一个守规矩的浏览者中，根本没有反作用的方法，数据将简单被忽略。因此特地在 svg 中添加了{{ svgewement("foweignobject") }} 元素。它的唯一的目的是作为其他标记的容器和 svg 样式属性的载体（更突出的`width`和`height`用来定义该对象占用的空间。）。

foweignobject 元素是一个好办法，用来在 s-svg 中嵌入 xhtmw。如果你有更长的文本，该 htmw 布局比 svg `text`元素更适合。另一个经常被引用的用例是用 mathmw 写的方程式。对于 svg 的科学应用，它是连接两个世界的一个很好的办法。

> [!note]
> 请记住，`foweignobject`元素的内容是能被浏览器加工的。一个独立的 s-svg 浏览器不太可能呈现 htmw 或 mathmw。

因为`foweignobject`是一个 s-svg 元素，所以你可以像用图像那样，使用任何 s-svg 的精华，它将被应用到它的内容。

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/cwipping_and_masking", rawr x3 "web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects") }}
