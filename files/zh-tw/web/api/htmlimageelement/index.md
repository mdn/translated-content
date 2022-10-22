---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
---

{{APIRef("HTML DOM")}}

**`HTMLImageElement`** 介面提供了特殊的屬性及方法以用來操作 {{HTMLElement("img")}} 元素的畫面佈局與外觀呈現。

{{InheritanceDiagram(600,120)}}

## 屬性

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.align")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} indicating the alignment of the image with respect to the surrounding context.
- {{domxref("HTMLImageElement.alt")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("alt", "img")}} HTML attribute, thus indicating fallback context for the image.
- {{domxref("HTMLImageElement.border")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} that is responsible for the width of the border surrounding the image. This is now deprecated and the CSS {{cssxref("border")}} property should be used instead.
- {{domxref("HTMLImageElement.complete")}} {{readonlyInline}}
  - : Returns a {{domxref("Boolean")}} that is `true` if the browser has finished fetching the image, whether successful or not. It also shows true, if the image has no {{domxref("HTMLImageElement.src", "src")}} value.
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : Is a {{domxref("DOMString")}} representing the CORS setting for this image element. See [CORS settings attributes](/zh-TW/docs/HTML/CORS_settings_attributes) for further details.
- {{domxref("HTMLImageElement.currentSrc")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a {{domxref("DOMString")}} representing the URL to the currently displayed image (which may change, for example in response to media queries).
- {{domxref("HTMLImageElement.height")}}
  - : 一個反映了 HTML `img` 元素之 {{htmlattrxref("height", "img")}} 屬性的無符號（`unsigned`）整數，表示圖片經渲染後的高度（CSS pixels）。
- {{domxref("HTMLImageElement.hspace")}} {{Deprecated_Inline}}
  - : Is a `long` representing the space on either side of the image.
- {{domxref("HTMLImageElement.isMap")}}
  - : Is a {{domxref("Boolean")}} that reflects the {{htmlattrxref("ismap", "img")}} HTML attribute, indicating that the image is part of a server-side image map.
- {{domxref("HTMLImageElement.longDesc")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} representing the URI of a long description of the image.
- {{domxref("HTMLImageElement.lowSrc")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} that refers to a low-quality (but faster to load) copy of the image.
- {{domxref("HTMLImageElement.name")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} representing the name of the element.
- {{domxref("HTMLImageElement.naturalHeight")}} {{readonlyInline}}
  - : 回傳一個代表圖片固有高度（CSS pixels）的無符號（`unsigned`）整數，如果無法取得則回傳 `0`。
- {{domxref("HTMLImageElement.naturalWidth")}} {{readonlyInline}}
  - : 回傳一個代表圖片固有寬度（CSS pixels）的無符號（`unsigned`）整數，如果無法取得則回傳 `0`。
- {{domxref("HTMLImageElement.referrerPolicy")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("referrerpolicy", "img")}} HTML attribute indicating which referrer to use in order to fetch the image.
- {{domxref("HTMLImageElement.src")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("src", "img")}} HTML attribute, containing the full URL of the image including base URI.
- {{domxref("HTMLImageElement.sizes")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} reflecting the {{htmlattrxref("sizes", "img")}} HTML attribute.
- {{domxref("HTMLImageElement.srcset")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} reflecting the {{htmlattrxref("srcset", "img")}} HTML attribute, containing a list of candidate images, separated by a comma (`',', U+002C COMMA`). A candidate image is a URL followed by a `'w'` with the width of the images, or an `'x'` followed by the pixel density.
- {{domxref("HTMLImageElement.useMap")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("usemap", "img")}} HTML attribute, containing a partial URL of a map element.
- {{domxref("HTMLImageElement.vspace")}} {{Deprecated_Inline}}
  - : Is a `long` representing the space above and below the image.
- {{domxref("HTMLImageElement.width")}}
  - : 一個反映了 HTML `img` 元素之 {{htmlattrxref("width", "img")}} 屬性的無符號（`unsigned`）整數，表示圖片經渲染後的寬度（CSS pixels）。
- {{domxref("HTMLImageElement.x")}} {{readonlyInline}}{{experimental_inline}}
  - : Returns a `long` representing the horizontal offset from the nearest layer. This property mimics an old Netscape 4 behavior.
- {{domxref("HTMLImageElement.y")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns a `long` representing the vertical offset from the nearest layer. This property is also similar to behavior of an old Netscape 4.

## 方法

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.Image()", "Image()")}}
  - : The `Image()` constructor, taking two optional `unsigned` `long`, which are the width and the height of the resource, creates an instance of `HTMLImageElement` , not inserted in a DOM tree.

## Errors

If an error occurs while trying to load or render the image, and an {{htmlattrxref("onerror")}} event handler has been configured to handle the {{event("error")}} event, that event handler will get called. This can happen in a number of situations, including:

- The {{htmlattrxref("src", "img")}} attribute is empty or `null`.
- The specified `src` URL is the same as the URL of the page the user is currently on.
- The specified image is corrupted in some way that prevents it from being loaded.
- The specified image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, and no dimensions were specified in the `<img>` element's attributes.
- The specified image is in a format not supported by the {{Glossary("user agent")}}.

## 範例

```js
var img1 = new Image(); // HTML5 Constructor
img1.src = 'image1.png';
img1.alt = 'alt';
document.body.appendChild(img1);

var img2 = document.createElement('img'); // use DOM HTMLImageElement
img2.src = 'image2.jpg';
img2.alt = 'alt text';
document.body.appendChild(img2);

// using first image in the document
alert(document.images[0].src);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("img")}}
