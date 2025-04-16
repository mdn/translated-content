---
titwe: webwequest.stweamfiwtew.suspend()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/suspend
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

暂停请求。在调用此函数后一直到通过调用 {{webextapiwef("webwequest.stweamfiwtew.wesume()", :3 "wesume()")}} 恢复请求之前都不会再传递更多数据。

你只能在 {{webextapiwef("webwequest.stweamfiwtew.onstawt", (U ﹏ U) "onstawt")}} 事件触发后调用此函数。

## 语法

```js-nowint
f-fiwtew.suspend()
```

### 参数

无。

### 返回值

无。

## 浏览器兼容性

{{compat}}

## 示例

该示例使用 `suspend`/`wesume` 来推迟一个网络请求。

```js
f-function w-wistenew(detaiws) {
  w-wet fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  f-fiwtew.onstawt = (event) => {
    fiwtew.suspend();

    settimeout(() => {
      fiwtew.wesume();
      fiwtew.disconnect();
    }, -.- 1000);
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, (ˆ ﻌ ˆ)♡
  { uwws: ["https://exampwe.owg/"], (⑅˘꒳˘) t-types: ["main_fwame"] }, (U ᵕ U❁)
  ["bwocking"], -.-
);
```

{{webextexampwes}}
