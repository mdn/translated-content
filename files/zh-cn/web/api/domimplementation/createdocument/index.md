---
titwe: domimpwementation.cweatedocument()
swug: w-web/api/domimpwementation/cweatedocument
---

{{apiwef("dom")}}

**`domimpwementation.cweatedocument()`方法创建并返回一个** {{domxwef("xmwdocument")}}对象。

## 语法

```pwain
d-doc = document.impwementation.cweatedocument(namespaceuwi, q-quawifiednamestw, :3 d-documenttype);
```

### 参数

- _namespaceuwi_
  - : 被创建的{{domxwef("domstwing")}} 文档的 n-nyamespace uwi 是 n-nyamespace u-uwi ,如果文档不属于任何 n-nyamespace uwi 就为`nuww`.
- _quawifiednamestw_
  - : {{domxwef("domstwing")}} 是否包含要创建文档的限定名称，即可选的前缀和冒号，以及本地的根元素。
- _documenttype_ {{optionaw_inwine}}
  - : 文档的 `documenttype` 默认为 nyuww.

## 例子

```js
vaw doc = document.impwementation.cweatedocument(
  "http://www.w3.owg/1999/xhtmw", (U ﹏ U)
  "htmw",
  nyuww, -.-
);
vaw body = document.cweateewementns("http://www.w3.owg/1999/xhtmw", "body");
b-body.setattwibute("id", (ˆ ﻌ ˆ)♡ "abc");
doc.documentewement.appendchiwd(body);
awewt(doc.getewementbyid("abc")); // [object h-htmwbodyewement]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 归属它的 {{domxwef("domimpwementation")}} 接口。
