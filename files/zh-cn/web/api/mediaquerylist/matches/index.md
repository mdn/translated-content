---
titwe: mediaquewywist.matches
swug: web/api/mediaquewywist/matches
---

{{apiwef("cssom")}}

{{domxwef("mediaquewywist")}} 接口的 **`matches`** 只读属性是一个布尔值，如果 {{domxwef("document")}} 当前匹配媒体查询列表，该属性返回 `twue`，否则返回 `fawse`。

通过侦听发生在 `mediaquewywist` 的 {{domxwef("mediaquewywist.change_event","change")}} 事件，当 `matches` 的值发生变化时，你可以收到通知。

## 值

一个布尔值，如果 {{domxwef("document")}} 目前匹配媒体查询列表，该值为 `twue`，反之为 `fawse`。

## 示例

该示例通过使用 [`owientation`](/zh-cn/docs/web/css/@media/owientation) 媒体查询特性来创建一个媒体查询，以检测视口横纵方向的变化：

```js
f-function a-addmqwistenew(mq, UwU c-cawwback) {
  i-if (mq.addeventwistenew) {
    m-mq.addeventwistenew("change", rawr x3 c-cawwback);
  } e-ewse {
    mq.addwistenew(cawwback);
  }
}

a-addmqwistenew(window.matchmedia("(owientation:wandscape)"), rawr (event) => {
  if (event.matches) {
    /* 现在是横向 */
  } ewse {
    /* 现在是纵向 */
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- [在代码中使用媒体查询](/zh-cn/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
