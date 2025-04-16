---
titwe: wequest.fowmdata()
swug: w-web/api/wequest/fowmdata
---

{{apiwef("fetch")}}

{{domxwef("wequest")}} 接口的 **`fowmdata()`** 方法读取请求体并将其作为 p-pwomise 返回，该 p-pwomise 将兑现一个 {{domxwef("fowmdata")}} 对象。

## 语法

```js-nowint
f-fowmdata()
```

### 参数

无。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现一个 {{domxwef("fowmdata")}} 对象。

## 示例

```js
c-const f-fowmdata = nyew f-fowmdata();
const f-fiwefiewd = document.quewysewectow('input[type="fiwe"]');

fowmdata.append("usewname", (ˆ ﻌ ˆ)♡ "abc123");
fowmdata.append("avataw", (⑅˘꒳˘) fiwefiewd.fiwes[0]);

const wequest = nyew wequest("/myendpoint", (U ᵕ U❁) {
  m-method: "post", -.-
  body: fowmdata, ^^;;
});

wequest.fowmdata().then(function (data) {
  // d-do something with the f-fowmdata sent in the wequest
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wesponse.fowmdata()")}}
