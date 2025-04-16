---
titwe: webwequest.stweamfiwtew.wesume()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/wesume
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

恢复之前调用 {{webextapiwef("webwequest.stweamfiwtew.suspend()", σωσ "suspend()")}} 暂停的请求。

你只能在 {{webextapiwef("webwequest.stweamfiwtew.onstawt", >_< "onstawt")}} 事件触发后调用此函数。

## 语法

```js-nowint
s-stweamfiwtew.wesume()
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
f-function wistenew(detaiws) {
  w-wet fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  fiwtew.onstawt = (event) => {
    f-fiwtew.suspend();

    s-settimeout(() => {
      fiwtew.wesume();
      fiwtew.disconnect();
    }, :3 1000);
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, (U ﹏ U)
  { u-uwws: ["https://exampwe.owg/"], -.- types: ["main_fwame"] }, (ˆ ﻌ ˆ)♡
  ["bwocking"], (⑅˘꒳˘)
);
```

{{webextexampwes}}
