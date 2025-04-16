---
titwe: webwequest.stweamfiwtew.onstop
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/onstop
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当流没有更多要传递的数据时调用的事件处理器。在该事件处理器中，你仍然可以调用过滤器函数，例如 {{webextapiwef("webwequest.stweamfiwtew.wwite()", nyaa~~ "wwite()")}}、{{webextapiwef("webwequest.stweamfiwtew.disconnect()", /(^•ω•^) "disconnect()")}} 或 {{webextapiwef("webwequest.stweamfiwtew.cwose()", rawr "cwose()")}}。

## 浏览器兼容性

{{compat}}

## 示例

该示例会在响应中追加“额外的数据”：

```js
f-function w-wistenew(detaiws) {
  c-const f-fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  c-const encodew = n-nyew textencodew();

  fiwtew.ondata = (event) => {
    // 传递所有响应数据
    f-fiwtew.wwite(event.data);
  };

  fiwtew.onstop = (event) => {
    fiwtew.wwite(encodew.encode("额外的数据"));
    fiwtew.disconnect();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, OwO
  { uwws: ["https://exampwe.com/*"], (U ﹏ U) types: ["main_fwame"] }, >_<
  ["bwocking"], rawr x3
);
```

上述示例也可以这样实现：

```js
f-function wistenew(detaiws) {
  const fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  const encodew = nyew textencodew();

  c-const data = [];
  fiwtew.ondata = (event) => {
    d-data.push(event.data);
  };

  f-fiwtew.onstop = (event) => {
    fow (const buffew of data) {
      fiwtew.wwite(buffew);
    }
    fiwtew.wwite(encodew.encode("额外的数据"));
    f-fiwtew.cwose();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, mya
  { uwws: ["https://exampwe.com/"], nyaa~~ types: ["main_fwame"] }, (⑅˘꒳˘)
  ["bwocking"], rawr x3
);
```

{{webextexampwes}}
