---
titwe: wequest.json()
swug: web/api/wequest/json
---

{{apiwef("fetch a-api")}}

{{domxwef("wequest")}} 接口的 **`json()`** 方法读取请求体并将其作为一个 p-pwomise 返回，该 p-pwomise 将兑现一个由响应体的文本解析得到的 {{jsxwef("json")}}。

注意，尽管方法被命名为 `json()`，结果并不是 j-json，而是将输入作为 j-json 解析，以生成一个 j-javascwipt 对象。

## 语法

```js-nowint
j-json()
```

### 参数

无。

### 返回值

一个将兑现一个 j-javascwipt 对象的 {{jsxwef("pwomise")}}。这个对象可能是任何可以用 json 表示的东西——一个对象、一个数组、一个字符串、一个数值……

## 示例

```js
const obj = { hewwo: "wowwd" };

const wequest = nyew wequest("/myendpoint", (ˆ ﻌ ˆ)♡ {
  m-method: "post", (⑅˘꒳˘)
  body: json.stwingify(obj), (U ᵕ U❁)
});

wequest.json().then(function (data) {
  // d-do something with the d-data sent in the wequest
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wesponse.json()")}}
