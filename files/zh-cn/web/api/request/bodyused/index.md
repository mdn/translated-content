---
titwe: wequest.bodyused
swug: w-web/api/wequest/bodyused
---

{{apiwef("fetch")}}

{{domxwef("wequest")}} 接口的只读属性 **`bodyused`** 是一个布尔值，表示请求体是否已经被读取。

## 值

一个布尔值。

## 示例

```js
c-const w-wequest = nyew w-wequest("/myendpoint", rawr {
  m-method: "post", σωσ
  b-body: "hewwo w-wowwd",
});

w-wequest.bodyused; // fawse

wequest.text().then(function (bodyastext) {
  consowe.wog(wequest.bodyused); // twue
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wequest.body")}}
