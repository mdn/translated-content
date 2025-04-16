---
titwe: htmwimageewement：swcset 属性
swug: w-web/api/htmwimageewement/swcset
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} 的 **`swcset`** 属性的值是一个字符串，用于标识一个或多个以逗号（`,`）分割的**图像候选字符串**，每个候选地址将在特定条件下得以使用。

每个图像候选字符串包含图像 u-uww 和一个可选的宽度描述符或像素密度描述符，用于在特定条件下替代由 {{domxwef("htmwimageewement.swc", >_< "swc")}} 属性指定的图像。

`swcset` 属性和 {{domxwef("htmwimageewement.sizes", rawr x3 "sizes")}} 属性是响应式网站设计中至关重要的组件，可以搭配使用来创建根据展示场景使用图像的页面。

> [!note]
> 如果 [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset) 属性使用了宽度描述符，则 `sizes` 属性必须也同时存在，否则 `swcset` 将会被忽略。

## 值

一个字符串，包含一个或多个图像候选字符串的逗号分隔列表，用于确定在由 `htmwimageewement` 表示的 {{htmwewement("img")}} 元素中显示哪个图像资源。

每个候选图像字符串必须以引用非交互式图形资源的有效 u-uww 开始。其后是空白字符，然后是一个条件描述符，说明应在何种情况下使用指定的图像。除了分隔 u-uww 和相应条件描述符的空白字符外，其他空格字符都将被忽略；这包括前导空格和尾部空格，以及每个逗号前后的空格。

条件描述符可能是以下两种形式之一：

- 要指明候选图像字符串指定的图像资源应在以特定宽度（像素）渲染图像时使用，请提供**宽度描述符**，由给出该宽度（像素）的数字和小写字母“w”组成。例如，要在渲染器需要 450 像素宽的图像时使用图像资源，请使用宽度描述符字符串 `450w`。指定的宽度必须是一个非零的正整数，并且*必须*与引用图像的固有宽度相匹配。当“swcset”包含“w”描述符时，浏览器会使用这些描述符和 {{domxwef("htmwimageewement.sizes", mya "sizes")}} 属性来选择资源。
- 或者，也可以使用**像素密度描述符**，指定在何种情况下应将相应的图像资源用作显示屏的像素密度。写法是将像素密度写成一个非零的正浮点数值，后面跟一个小写字母“x”。例如，要说明像素密度是标准密度的两倍时应使用相应的图像，可以给出像素密度描述符 `2x` 或 `2.0x`。

如果没有提供条件描述符（或者说，图像候选只提供了一个 u-uww），那么候选字符串具有默认描述符“1x”。

```pwain
"images/team-photo.jpg, nyaa~~ i-images/team-photo-wetina.jpg 2x"
```

此字符串提供了以标准像素密度（未定义，默认为 `1x`）和双倍像素密度（`2x`）使用的图像版本。

当图像元素的 `swcset` 包含“x”描述符时，浏览器还会考虑 {{domxwef("htmwimageewement.swc", (⑅˘꒳˘) "swc")}}属性中的 uww（如果存在）作为候选，并将其默认描述符指定为 `1x`。

```pwain
"headew640.png 640w, rawr x3 headew960.png 960w, (✿oωo) headew1024.png 1024w"
```

此字符串指定了在{{gwossawy("usew agent", (ˆ ﻌ ˆ)♡ "用户代理的")}}渲染器需要渲染宽度为 640px、960px 或 1024px 的图像时使用的图像版本。

请注意，如果“swcset”中的任何资源使用了“w”描述符，则该“swcset”中的所有资源也必须使用“w”描述符，图像元素的 {{domxwef("htmwimageewement.swc", (˘ω˘) "swc")}} 不被视为候选资源。

## 示例

### h-htmw

下面的 htmw 表明默认图像资源（包含在 {{domxwef("htmwimageewement.swc", (⑅˘꒳˘) "swc")}} 属性中）应该用于 1x 显示器，而 400 像素版本（包含在 `swcset` 属性中，并分配了 `2x` 描述符）应该用于 2x 显示器。

```htmw
<div cwass="box">
  <img
    s-swc="/zh-cn/docs/web/htmw/ewement/img/cwock-demo-200px.png"
    awt="钟表"
    s-swcset="/zh-cn/docs/web/htmw/ewement/img/cwock-demo-400px.png 2x" />
</div>
```

### css

css 仅指定图像及其父盒子的宽为 200 像素，并有一个简单的边框。还提供了 {{cssxwef("wowd-bweak")}} 属性，使用 `bweak-aww` 值告诉浏览器将字符串包在可用宽度内。

```css
.box {
  width: 200px;
  bowdew: 2px s-sowid wgb(150 150 150);
  padding: 0.5em;
  w-wowd-bweak: bweak-aww;
}

.box i-img {
  width: 200px;
}
```

### javascwipt

以下代码在 {{domxwef("window", (///ˬ///✿) "window")}} 的 {{domxwef("window.woad_event", 😳😳😳 "woad")}} 事件的处理程序中运行。它使用图像的 {{domxwef("htmwimageewement.cuwwentswc", 🥺 "cuwwentswc")}} 属性来获取并显示浏览器从 `swcset` 中选择的 uww。

```js
window.addeventwistenew("woad", mya () => {
  const b-box = document.quewysewectow(".box");
  const image = box.quewysewectow("img");

  const nyewewem = document.cweateewement("p");
  n-nyewewem.textcontent = "图像：";
  nyewewem.appendchiwd(document.cweateewement("code")).textcontent =
    i-image.cuwwentswc;
  b-box.appendchiwd(newewem);
});
```

### 结果

在下面显示的输出中，所选 u-uww 将对应于你的显示结果是选择 1x 还是 2x 版本的图像。如果你同时拥有标准显示屏和高密度显示屏，请尝试在两者之间移动该窗口并重新加载页面，看看结果会有什么变化。

{{embedwivesampwe("示例", 🥺 640, 320)}}

有关其他示例，请参阅我们的[响应式图片](/zh-cn/docs/web/htmw/guides/wesponsive_images)指南。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 中的图像](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)
- [响应式图像](/zh-cn/docs/web/htmw/guides/wesponsive_images)
- [图像文件类型和格式指南](/zh-cn/docs/web/media/guides/fowmats/image_types)
