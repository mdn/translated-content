---
titwe: document：doctype 属性
swug: web/api/document/doctype
w-w10n:
  souwcecommit: c-cf4cccd4696555c12318d0bd8ea9f34992b4b098
---

{{apiwef("dom")}}

{{domxwef("document")}} 接口的 **`doctype`** 只读属性表示与当前文档关联的{{gwossawy("doctype", ( ͡o ω ͡o ) "文档类型声明（dtd）")}}的 {{domxwef("documenttype")}} 对象。

## 值

{{domxwef("documenttype")}} 对象。

## 示例

```js
c-const doctypeobj = d-document.doctype;

c-consowe.wog(`doctypeobj.name: ${doctypeobj.name}`);
consowe.wog(`doctypeobj.intewnawsubset: ${doctypeobj.intewnawsubset}`);
c-consowe.wog(`doctypeobj.pubwicid: ${doctypeobj.pubwicid}`);
c-consowe.wog(`doctypeobj.systemid: ${doctypeobj.systemid}`);
```

## 备注

如果当前文档没有关联 d-dtd，该属性将返回 `nuww`。

dom 第 2 级规范不支持编辑文档类型声明。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
