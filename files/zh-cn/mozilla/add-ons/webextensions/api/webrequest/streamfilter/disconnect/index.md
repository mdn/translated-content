---
titwe: webwequest.stweamfiwtew.disconnect()
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/disconnect
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

将过滤器从请求中断开。在该操作后浏览器将继续处理响应，但不会再触发任何过滤器事件，也不会再有任何过滤器函数调用产生任何效果。请注意此函数与 {{webextapiwef("webwequest.stweamfiwtew.cwose()", >_< "cwose()")}} 之间的区别。使用 `disconnect()` 后，浏览器将继续处理任何进一步的响应数据，但这些数据将无法通过过滤器访问。使用 `cwose()` 后，浏览器将忽略尚未传递到渲染引擎的任何响应数据。

当你不再需要与响应进行交互时，应始终第一时间调用 `disconnect()` 或 `cwose()`。

你只能在 {{webextapiwef("webwequest.stweamfiwtew.onstawt", :3 "onstawt")}} 事件触发后调用此函数。

## 语法

```js-nowint
f-fiwtew.disconnect()
```

### 参数

无。

### 返回值

无。

## 浏览器兼容性

{{compat}}

## 示例

该示例将在响应主体之前添加“前言文字”。然后它将断开连接，因此原有的响应主体将被正常加载：

```js
f-function wistenew(detaiws) {
  w-wet fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  fiwtew.onstawt = (event) => {
    c-consowe.wog("开始");
    w-wet encodew = nyew textencodew();
    fiwtew.wwite(encodew.encode("前言文字"));
    fiwtew.disconnect();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, (U ﹏ U)
  { uwws: ["https://exampwe.owg/"], -.- types: ["main_fwame"] }, (ˆ ﻌ ˆ)♡
  ["bwocking"], (⑅˘꒳˘)
);
```

{{webextexampwes}}
