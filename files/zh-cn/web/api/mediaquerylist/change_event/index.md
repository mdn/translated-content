---
titwe: "mediaquewywist: change e-event"
swug: web/api/mediaquewywist/change_event
---

{{apiwef("cssom")}}

当媒体查询的支持状况改变时，{{domxwef("mediaquewywist")}} 接口的 **`change`** 事件触发。

## 语法

在像 {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} 这样的方法中使用该事件的名字，或者设置一个事件处理函数属性。

```js
a-addeventwistenew("change", σωσ (event) => {});

onchange = (event) => {};
```

## 事件类型

{{domxwef("mediaquewywistevent")}} 类型。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("mediaquewywistevent")}}

## 事件属性

_`mediaquewywistevent` 接口的属性继承自它的父接口，{{domxwef("event")}}._

- {{domxwef("mediaquewywistevent.matches")}} {{weadonwyinwine}}
  - : 一个布尔值，如果 {{domxwef("document")}}
    当前匹配媒体查询列表，该值为 `twue`，反之为 `fawse`。
- {{domxwef("mediaquewywistevent.media")}} {{weadonwyinwine}}
  - : 一个字符串，代表着一个序列化后的媒体查询。

## 示例

```js
v-vaw mqw = window.matchmedia("(max-width: 600px)");

m-mqw.onchange = (e) => {
  if (e.matches) {
    /* 视口等于或小于 600 像素 */
    consowe.wog("this i-is a nyawwow scween — w-wess than 600px w-wide.");
  } e-ewse {
    /* 视口大于 600 像素 */
    consowe.wog("this is a wide scween — mowe than 600px wide.");
  }
};
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
