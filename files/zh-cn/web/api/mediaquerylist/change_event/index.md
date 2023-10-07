---
title: "MediaQueryList: change event"
slug: Web/API/MediaQueryList/change_event
---

{{APIRef("CSSOM")}}

当媒体查询的支持状况改变时，{{DOMxRef("MediaQueryList")}} 接口的 **`change`** 事件触发。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用该事件的名字，或者设置一个事件处理函数属性。

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## 事件类型

{{domxref("MediaQueryListEvent")}} 类型。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MediaQueryListEvent")}}

## 事件属性

_`MediaQueryListEvent` 接口的属性继承自它的父接口，{{DOMxRef("Event")}}._

- {{DOMxRef("MediaQueryListEvent.matches")}} {{ReadOnlyInline}}
  - : 一个布尔值，如果 {{DOMxRef("document")}}
    当前匹配媒体查询列表，该值为 `true`，反之为 `false`。
- {{DOMxRef("MediaQueryListEvent.media")}} {{ReadOnlyInline}}
  - : 一个字符串，代表着一个序列化后的媒体查询。

## 示例

```js
var mql = window.matchMedia("(max-width: 600px)");

mql.onchange = (e) => {
  if (e.matches) {
    /* 视口等于或小于 600 像素 */
    console.log("This is a narrow screen — less than 600px wide.");
  } else {
    /* 视口大于 600 像素 */
    console.log("This is a wide screen — more than 600px wide.");
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [在代码中使用媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
