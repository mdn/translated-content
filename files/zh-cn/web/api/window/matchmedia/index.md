---
title: Window.matchMedia()
slug: Web/API/Window/matchMedia
---

{{APIRef}}

{{domxref("Window")}} 的 **`matchMedia()`** 方法返回一个新的 {{domxref("MediaQueryList")}} 对象，表示指定的[媒体查询](/zh-CN/docs/CSS/Media_queries)字符串解析后的结果。返回的 `MediaQueryList` 可被用于判定 {{domxref("Document")}} 是否匹配媒体查询，或者监控一个 `document` 来判定它匹配了或者停止匹配了此媒体查询。

## 语法

```
mqList = window.matchMedia(mediaQueryString)
```

### 参数

- `mediaQueryString`
  - : 一个被用于媒体查询解析的字符串。

### 返回值

一个用来媒体查询的新的{{domxref("MediaQueryList")}}对象

## 使用说明

您可以使用返回的媒体查询来执行即时检查和事件驱动检查，以查看文档是否与媒体查询匹配。

要执行一次瞬时检查以查看文档是否与媒体查询匹配，请查看{{domxref("MediaQueryList.matches", "matches")}}属性的值，当 document 满足媒体查询条件的时候将会返回`true`。

如果您需要始终了解 document 是否与媒体查询匹配，则可以查看将要传递给对象的{{domxref("MediaQueryList.change_event", "change")}} 事件。{{domxref("Window.devicePixelRatio")}}上的文章中有一个很好的例子。

## 示例

此示例运行媒体查询`(max-width: 600px)`并在{{HTMLElement("span")}};中显示`MediaQueryList`的`matches`属性值。如果视口的宽度小于或等于 600 像素，则输出将为 true，而如果窗口的宽度大于此宽度，则将输出 false。

### JavaScript

```
let mql = window.matchMedia('(max-width: 600px)');

document.querySelector(".mq-value").innerText = mql.matches;
```

JavaScript 代码只需将要匹配的媒体查询字符串传递到{{domxref("Window.matchMedia", "matchMedia()")}}进行编译，然后设置`<span>`的{{domxref("HTMLElement.innerText", "innerText")}}为{{domxref("MediaQueryList.media", "matches")}}属性结果的值，以便它表明此 document 在此刻页面加载完成时是否与媒体查询所匹配。

### HTML

```html
<span class="mq-value"></span>
```

一个简单的 `<span>` 来接收输出。

```css hidden
.mq-value {
  font:
    18px arial,
    sans-serif;
  font-weight: bold;
  color: #88f;
  padding: 0.4em;
  border: 1px solid #dde;
}
```

### 结果

{{EmbedLiveSample("示例", "100%", "60")}}

参考更多的例子来 [通过代码使用媒体查询](/zh-CN/docs/DOM/Using_media_queries_from_code) 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [媒体查询](/zh-CN/docs/CSS/Media_queries)
- [通过代码使用媒体查询](/zh-CN/docs/DOM/Using_media_queries_from_code)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
