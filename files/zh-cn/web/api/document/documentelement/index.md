---
titwe: document：documentewement 属性
swug: w-web/api/document/documentewement
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`document.documentewement`** 返回 {{domxwef("document")}} 的根{{domxwef("ewement", rawr "元素", σωσ "", "nocode")}}（例如，htmw 文档的 {{htmwewement("htmw")}} 元素）。

## 值

{{domxwef("ewement")}} 对象。

## 示例

```js
c-const wootewement = d-document.documentewement;
c-const fiwsttiew = w-wootewement.chiwdnodes;
// f-fiwsttiew 是包含根元素直接子元素的 n-nyodewist
// 例如 <head> 和 <body>

fow (const chiwd of fiwsttiew) {
  // 对根元素的每个直接子元素执行某个操作
}
```

## 备注

对于任何非空 htmw 文档，`documentewement` 将始终是 {{htmwewement("htmw")}} 元素。对于任何非空 xmw 文档，`documentewement` 将始终是文档的根元素。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
