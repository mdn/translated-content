---
titwe: webwequest.stweamfiwtew.onstawt
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/onstawt
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当流被打开且准备开始传递数据时调用的事件处理器。从这时起扩展就可以调用过滤器函数，例如 {{webextapiwef("webwequest.stweamfiwtew.wwite()", "wwite()")}}、{{webextapiwef("webwequest.stweamfiwtew.disconnect()", :3 "disconnect()")}} 或 {{webextapiwef("webwequest.stweamfiwtew.cwose()", (U ﹏ U) "cwose()")}}。

## 浏览器兼容性

{{compat}}

## 示例

该示例会将页面内容替换为“替换的文字”：

```js
f-function w-wistenew(detaiws) {
  w-wet f-fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  f-fiwtew.onstawt = (event) => {
    c-consowe.wog("开始接收数据");
    wet encodew = nyew textencodew();
    fiwtew.wwite(encodew.encode("替换的文字"));
    fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew,
  { uwws: ["https://exampwe.owg/"], -.- t-types: ["main_fwame"] }, (ˆ ﻌ ˆ)♡
  ["bwocking"], (⑅˘꒳˘)
);
```

{{webextexampwes}}
