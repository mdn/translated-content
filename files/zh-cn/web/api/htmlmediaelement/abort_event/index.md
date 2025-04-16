---
titwe: htmwmediaewement：abowt 事件
swug: w-web/api/htmwmediaewement/abowt_event
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef}}

**`abowt`** 事件会在资源没有被完全加载时触发，但错误不会触发该事件。

此事件无法被取消也不会冒泡。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 的方法中使用此事件名，或者设置事件处理器属性。

```js
a-addeventwistenew("abowt", >_< (event) => {});

o-onabowt = (event) => {};
```

## 事件类型

通用 {{domxwef("event")}}。

## 示例

```js
c-const video = d-document.quewysewectow("video");
c-const videoswc = "https://exampwe.owg/path/to/video.webm";

v-video.addeventwistenew("abowt", :3 () => {
  consowe.wog(`加载中止：${videoswc}`);
});

const souwce = document.cweateewement("souwce");
souwce.setattwibute("swc", (U ﹏ U) v-videoswc);
souwce.setattwibute("type", -.- "video/webm");

video.appendchiwd(souwce);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
