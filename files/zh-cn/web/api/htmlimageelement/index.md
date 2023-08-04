---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
---

{{ APIRef("HTML DOM") }}

**`HTMLImageElement`** 接口提供了特别的属性和方法 (在常规的 {{domxref("HTMLElement")}}之外，它也能通过继承使用) 来操纵 {{HTMLElement("img")}} 元素的布局和图像。

{{InheritanceDiagram(600, 120)}}

## Constructor

- {{domxref("HTMLImageElement.Image()", "Image()")}}
  - : `Image()` 构造器，带有两个可选的参数，分别表示资源的宽度和高度，创建了一个尚未被插入 DOM 树中的 `HTMLImageElement` 实例。When called without parameters, `new Image()` is equivalent to calling {{DOMxRef("Document.createElement()", 'document.createElement("img")')}}.

## 属性

_从它的父元素 {{domxref("HTMLElement")}} 继承的属性。_

- {{domxref("HTMLImageElement.alt")}}
  - : 一个 {{domxref("DOMString")}} 表示 HTML 属性 [`alt`](/zh-CN/docs/Web/HTML/Element/img#alt)，表明图像的后备描述内容，会在图像无法加载时显示。
- {{domxref("HTMLImageElement.complete")}} {{readonlyInline}}
  - : 返回一个 {{domxref("Boolean")}} 如果浏览器已经下载完毕，并且图像是[受支持的图片类型](/zh-CN/docs/HTML/Element/Img#Image_Format)、解码的过程中没有发生错误，则返回 `true`。That means this value is also `true` if the image has no {{domxref("HTMLImageElement.src", "src")}} value indicating an image to load.
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : 一个 {{domxref("DOMString")}} 表示这个 img 元素的 CORS 设置。参考 [CORS settings attributes](/zh-CN/docs/HTML/CORS_settings_attributes)。This may be `null` if CORS is not used.
- {{domxref("HTMLImageElement.currentSrc")}} {{readonlyInline}}
  - : 返回一个 {{domxref("DOMString")}} 表示加载当前显示的图像的 URL。
    这可能会改变，因为图像是调整，由于不断变化的条件，由任何 [media queries](/zh-CN/docs/Web/CSS/CSS_media_queries) 的地方。
- {{domxref("HTMLImageElement.decoding")}}
  - : An optional {{domxref("DOMString")}} representing a hint given to the browser on how it should decode the image. If this value is provided, it must be one of the possible permitted values: `sync` to decode the image synchronously, `async` to decode it asynchronously, or `auto` to indicate no preference (which is the default). Read the {{domxref("HTMLImageElement.decoding", "decoding")}} page for details on the implications of this property's values.
- {{domxref("HTMLImageElement.height")}}
  - : 一个整数，表示 HTML 属性 [`height`](/zh-CN/docs/Web/HTML/Element/img#height)，说明了图像在 CSS 像素中渲染的高度。
- {{domxref("HTMLImageElement.isMap")}}
  - : 一个 {{domxref("Boolean")}} 表示 HTML 属性 [`ismap`](/zh-CN/docs/Web/HTML/Element/img#ismap)，说明了图像是某个服务器端图像映射的一部分。This is different from a client-side image map, specified using an `<img>` element and a corresponding {{HTMLElement("map")}} which contains {{HTMLElement("area")}} elements indicating the clickable areas in the image. The image _must_ be contained within an {{HTMLElement("a")}} element; see the `ismap` page for details.
- {{domxref("HTMLImageElement.naturalHeight")}} {{readonlyInline}}
  - : 返回一个整数，如果可用的话，表明图像在 CSS 中固有的高度，单位为像素；否则返回 `0`。如果图片是以其原来的大小渲染，则此值等于图片的高度。
- {{domxref("HTMLImageElement.naturalWidth")}} {{readonlyInline}}
  - : 返回一个整数，如果可用的话，表明图像在 CSS 中固有的宽度，单位为像素；否则返回 `0`。如果图片是以其原来的大小渲染，则此值等于图片的宽度。
- {{domxref("HTMLImageElement.referrerPolicy")}}
  - : A {{domxref("DOMString")}} that reflects the [`referrerpolicy`](/zh-CN/docs/Web/HTML/Element/img#referrerpolicy) HTML attribute, which tells the {{Glossary("user agent")}} how to decide which referrer to use in order to fetch the image. Read this article for details on the possible values of this string.
- {{domxref("HTMLImageElement.sizes")}} {{experimental_inline}}
  - : A {{domxref("DOMString")}} reflecting the [`sizes`](/zh-CN/docs/Web/HTML/Element/img#sizes) HTML attribute. This string specifies a list of comma-separated conditional sizes for the image; that is, for a given viewport size, a particular image size is to be used. Read the documentation on the {{domxref("HTMLImageElement.sizes", "sizes")}} page for details on the format of this string.
- {{domxref("HTMLImageElement.src")}}
  - : 一个 {{domxref("DOMString")}} 表示 HTML 属性 [`src`](/zh-CN/docs/Web/HTML/Element/img#src)，包含图像的完整的 URL，包含图像的基础 URL。
- {{domxref("HTMLImageElement.srcset")}} {{experimental_inline}}
  - : 一个 {{domxref("DOMString")}} 表示 HTML 属性 [`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset)，包含了候选图像列表，用逗号分隔（`',', U+002C COMMA`）。一个候选的图像是一个 URL 跟着一个 `'w'` 表示图像的宽度，或者一个 `'x'` 表示像素密度。
- {{domxref("HTMLImageElement.useMap")}}
  - : 一个 {{domxref("DOMString")}} 表示 HTML 属性 [`usemap`](/zh-CN/docs/Web/HTML/Element/img#usemap)，包含一个 {{HTMLElement("map")}} 元素的页面本地 URL。The page-local URL is a pound (hash) symbol (`#`) followed by the ID of the `<map>` element, such as `#my-map-element`. The `<map>` in turn contains {{HTMLElement("area")}} elements indicating the clickable areas in the image.
- {{domxref("HTMLImageElement.width")}}
  - : 一个整数，表示 HTML 属性 [`width`](/zh-CN/docs/Web/HTML/Element/img#width)，说明图像在 CSS 像素中渲染的宽度。
- {{domxref("HTMLImageElement.x")}} {{readonlyInline}}{{experimental_inline}}
  - : An integer indicating the horizontal offset of the left border edge of the image's CSS layout box relative to the origin of the {{HTMLElement("html")}} element's containing block.
- {{domxref("HTMLImageElement.y")}} {{readonlyInline}} {{experimental_inline}}
  - : The integer vertical offset of the top border edge of the image's CSS layout box relative to the origin of the {{HTMLElement("html")}} element's containing block.

## 已废弃的属性

- {{domxref("HTMLImageElement.align")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}}，表示图像如何与它周围的内容对齐。The possible values are `"left"`, `"right"`, `"justify"`, and `"center"`. This is obsolete; you should instead use CSS (such as {{cssxref("text-align")}}, which works with images despite its name) to specify the alignment.
- {{domxref("HTMLImageElement.border")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}}，表示图像边框的宽度。此属性已被弃用，应该用 CSS {{cssxref("border")}} 属性来代替它。
- {{domxref("HTMLImageElement.hspace")}} {{Deprecated_Inline}}
  - : 一个整数值，指定图像左右的留白，单位为像素。
- {{domxref("HTMLImageElement.longDesc")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("USVString")}}，specifying the URL at which a long description of the image's contents may be found. This is used to turn the image into a hyperlink automatically. Modern HTML should instead simply place an `<img>` inside an {{HTMLElement("a")}} element defining the hyperlink.
- {{domxref("HTMLImageElement.lowSrc")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("USVString")}}，specifying the URL of a low-quality (but faster to load) version of the same image. This was once used by browsers under constrained network conditions or on slow devices.
- {{domxref("HTMLImageElement.name")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}}，representing the name of the element.
- {{domxref("HTMLImageElement.vspace")}} {{Deprecated_Inline}}
  - : 一个整数值，指定图像上下的留白，单位为像素。

## 方法

_从它的父元素 {{domxref("HTMLElement")}} 继承的方法。_

- {{domxref("HTMLImageElement.decode()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the image is decoded and it's safe to append the image to the DOM. This prevents rendering of the next frame from having to pause to decode the image, as would happen if an undecoded image were added to the DOM.

## 错误

- The [`src`](/zh-CN/docs/Web/HTML/Element/img#src) attribute is empty or `null`.
- The specified `src` URL is the same as the URL of the page the user is currently on.
- The specified image is corrupted in some way that prevents it from being loaded.
- The specified image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, and no dimensions were specified in the `<img>` element's attributes.
- The specified image is in a format not supported by the {{Glossary("user agent")}}.

If an error occurs while trying to load or render the image, and an [`onerror`](/zh-CN/docs/Web/HTML/Global_attributes#onerror) event handler has been configured to handle the [`error`](/zh-CN/docs/Web/API/Element/error_event) event, that event handler will get called. This can happen in a number of situations, including:

## 例子

```js
var img1 = new Image(); // Image 构造器
img1.src = "image1.png";
img1.alt = "alt";
document.body.appendChild(img1);

var img2 = document.createElement("img"); // 使用 DOM HTMLImageElement
img2.src = "image2.jpg";
img2.alt = "alt text";
document.body.appendChild(img2);

// 使用文档中的第一个 img
alert(document.images[0].src);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现了这个接口的 HTML 元素：{{HTMLElement("img")}}
