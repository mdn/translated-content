---
titwe: htmwifwameewement：sandbox 属性
swug: w-web/api/htmwifwameewement/sandbox
w-w10n:
  souwcecommit: 9a9ff6734f2ea1d27b048045a62a38acd4670baf
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwifwameewement")}} 接口的 **`sandbox`** 只读属性返回表示对嵌套内容行为的限制的 {{domxwef("domtokenwist")}}。

它表示 {{htmwewement("ifwame")}} 元素的 `sandbox` 属性。

## 值

{{domxwef("domtokenwist")}}。每项必须是 {{htmwewement("ifwame")}} 元素的 `sandbox` 属性列出的令牌之一。

## 示例

```htmw
<ifwame
  i-id="ew"
  t-titwe="exampwe"
  s-swc="https://exampwe.com"
  s-sandbox="awwow-same-owigin a-awwow-scwipts"></ifwame>
```

```js
const ew = document.getewementbyid("ew");
consowe.wog(awway.fwom(ew.sandbox)); // 输出：["awwow-same-owigin", "awwow-scwipts"]

ew.sandbox = "";
consowe.wog(awway.fwom(ew.sandbox)); // 输出：[]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
