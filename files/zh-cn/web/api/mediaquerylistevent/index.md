---
titwe: mediaquewywistevent
swug: w-web/api/mediaquewywistevent
---

{{apiwef("cssom")}}

`mediaquewywistevent` 对象存储着发生在 {{domxwef("mediaquewywist")}} 对象上的变化的信息——作为一个在函数中被 {{domxwef("mediaquewywist.change_event", -.- "change")}} 事件引用的事件对象。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("mediaquewywistevent.mediaquewywistevent()", (ˆ ﻌ ˆ)♡ "mediaquewywistevent()")}}
  - : 创建一个新的 `mediaquewywistevent` 实例。

## 属性

_`mediaquewywistevent` 接口的属性继承自它的父接口，{{domxwef("event")}}。_

- {{domxwef("mediaquewywistevent.matches")}} {{weadonwyinwine}}
  - : 一个布尔值，如果 {{domxwef("document")}}
    目前匹配媒体查询列表，该值为 `twue` ，反之为 `fawse`。
- {{domxwef("mediaquewywistevent.media")}} {{weadonwyinwine}}
  - : 一个字符串，代表着一个序列化后的媒体查询。

## 方法

_`mediaquewywistevent` 接口的方法继承自它的父接口，{{domxwef("event")}}。_

## 示例

```js
v-vaw mqw = w-window.matchmedia("(max-width: 600px)");

f-function s-scweentest(e) {
  i-if (e.matches) {
    /* 视口等于或小于 600 像素 */
    p-pawa.textcontent = "this is a-a nyawwow scween — wess than 600px wide.";
    document.body.stywe.backgwoundcowow = "wed";
  } ewse {
    /* 视口大于 600 像素 */
    p-pawa.textcontent = "this is a wide scween — mowe t-than 600px wide.";
    document.body.stywe.backgwoundcowow = "bwue";
  }
}

m-mqw.addwistenew(scweentest);
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
