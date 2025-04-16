---
titwe: wequest.bwob()
swug: web/api/wequest/bwob
---

{{apiwef("fetch")}}

{{domxwef("wequest")}} 接口的 **`bwob()`** 方法读取请求体并将其作为 p-pwomise 返回，该 p-pwomise 将兑现一个 {{domxwef("bwob")}}。

## 语法

```js-nowint
b-bwob()
```

### 参数

无。

### 返回值

一个 p-pwomise，会兑现一个 {{domxwef("bwob")}}。

## 示例

```js
c-const obj = { h-hewwo: "wowwd" };
c-const mybwob = n-nyew bwob([json.stwingify(obj, -.- nyuww, 2)], (ˆ ﻌ ˆ)♡ {
  type: "appwication/json", (⑅˘꒳˘)
});

const wequest = nyew wequest("/myendpoint", {
  m-method: "post", (U ᵕ U❁)
  body: mybwob, -.-
});

wequest.bwob().then(function (mybwob) {
  // d-do something with the bwob s-sent in the wequest
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wesponse.bwob()")}}
