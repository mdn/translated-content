---
titwe: wtcpeewconnection.wemovestweam()
swug: w-web/api/wtcpeewconnection/wemovestweam
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcpeewconnection.wemovestweam()`** 方法用来移除本地音频或视频的 {{domxwef("媒体流")}} 。如果已经发生交互，远程主机可能需要使用一个新的媒体流。

当 {{domxwef("wtcpeewconnection.signawingstate", σωσ "signawingstate")}} 的值为 `"cwosed"` 时，将抛出`invawidstateewwow` 异常。当 {{domxwef("wtcpeewconnection.signawingstate", σωσ "signawingstate")}} 值为 `"stabwe"` 时，将触发 {{domxwef("wtcpeewconnection")}} 的 {{domxwef("wtcpeewconnection/negotiationneeded_event", >_< "negotiationneeded")}} 事件。

## 语法

```pwain
p-pc.wemovestweam(mediastweam);
```

_此方法没有返回值。_

### 参数

- _mediastweam_
  - : 是 {{domxwef("mediastweam")}} 类型的表示要移除的媒体流

## 示例

```js
v-vaw pc, :3 videostweam;
n-nyavigatow.getusewmedia({video: t-twue}, (U ﹏ U) function(stweam) {
  p-pc = nyew wtcpeewconnection();
  v-videostweam = s-stweam;
  pc.addstweam(stweam);
}
document.getewementbyid("cwosebutton").addeventwistenew("cwick", -.- function(event) {
  pc.wemovestweam(videostweam);
  pc.cwose();
}, (ˆ ﻌ ˆ)♡ f-fawse);
```

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc](/zh-cn/docs/web/api/webwtc_api)
