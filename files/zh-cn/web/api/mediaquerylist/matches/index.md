---
title: MediaQueryList.matches
slug: Web/API/MediaQueryList/matches
---

{{APIRef("CSSOM")}}

{{DOMxRef("MediaQueryList")}} 接口的 **`matches`** 只读属性是一个布尔值，如果 {{DOMxRef("document")}} 当前匹配媒体查询列表，该属性返回 `true`，否则返回 `false`。

通过侦听发生在 `MediaQueryList` 的 {{domxref("MediaQueryList.change_event","change")}} 事件，当 `matches` 的值发生变化时，你可以收到通知。

## 值

一个布尔值，如果 {{DOMxRef("document")}} 目前匹配媒体查询列表，该值为 `true`，反之为 `false`。

## 示例

该示例通过使用 [`orientation`](/zh-CN/docs/Web/CSS/@media/orientation) 媒体查询特性来创建一个媒体查询，以检测视口横纵方向的变化：

```js
function addMQListener(mq, callback) {
  if (mq.addEventListener) {
    mq.addEventListener("change", callback);
  } else {
    mq.addListener(callback);
  }
}

addMQListener(window.matchMedia("(orientation:landscape)"), (event) => {
  if (event.matches) {
    /* 现在是横向 */
  } else {
    /* 现在是纵向 */
  }
});
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
