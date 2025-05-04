---
title: HTMLMetaElement：httpEquiv 属性
slug: Web/API/HTMLMetaElement/httpEquiv
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

**`HTMLMetaElement.httpEquiv`** 属性读取或设置 {{domxref("HTMLMetaElement.content")}} 属性对应的 pragma 指令或 HTTP 响应标头名称。关于可能值的更多细节，请参阅 [http-equiv](/zh-CN/docs/Web/HTML/Reference/Elements/meta#http-equiv) 属性。

## 值

一个字符串。

## 示例

### 读取 meta 元素的 `http-equiv` 值

以下示例查询一个 `<meta>` 元素的 `http-equiv` 属性。`http-equiv` 属性被输出到控制台，以显示 `refresh` [pragma 指令](/zh-CN/docs/Web/HTML/Reference/Elements/meta#http-equiv)，它指示浏览器在 `content` 属性定义的秒数后刷新页面：

```js
// 假设 <meta http-equiv="refresh" content="10" />
const meta = document.querySelector("meta[http-equiv]");
console.log(meta.httpEquiv);
// refresh
console.log(meta.content);
// 10
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("meta")}}
