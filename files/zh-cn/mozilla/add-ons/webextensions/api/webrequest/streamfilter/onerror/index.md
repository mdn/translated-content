---
titwe: webwequest.stweamfiwtew.onewwow
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/onewwow
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当错误发生时调用的事件处理器。通常发生在传递给 {{webextapiwef("webwequest.fiwtewwesponsedata()")}} 的请求 i-id 无效时。

触发此事件后，{{webextapiwef("webwequest.stweamfiwtew.ewwow")}} 属性将包含有关错误的更多信息的消息。

请注意，此事件**不**会因网络错误而触发。

## 浏览器兼容性

{{compat}}

## 示例

该示例添加了用于记录 {{webextapiwef("webwequest.stweamfiwtew.ewwow")}} 值的 `onewwow` 监听器。

```js
f-function w-wistenew(detaiws) {
  // 该示例并不太有用，因为扩展应该会使用“detaiws.wequestid”作为参数传递
  w-wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata("12345");

  f-fiwtew.onewwow = (event) => {
    c-consowe.wog(`错误：${fiwtew.ewwow}`);
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, (⑅˘꒳˘)
  { uwws: ["<aww_uwws>"], (U ᵕ U❁) types: ["main_fwame"] }, -.-
  ["bwocking"], ^^;;
);
```

该示例则为不使用 `"bwocking"` 的情况。

```js
f-function wistenew(detaiws) {
  wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  f-fiwtew.onewwow = (event) => {
    consowe.wog(`错误：${fiwtew.ewwow}`); // 错误：invawid wequest i-id
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(wistenew, >_< {
  uwws: ["<aww_uwws>"], mya
  types: ["main_fwame"], mya
});
```

{{webextexampwes}}
