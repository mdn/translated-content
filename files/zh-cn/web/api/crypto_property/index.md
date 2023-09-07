---
title: self.crypto
slug: Web/API/crypto_property
---

{{APIRef}}

**`crypto`** 全局只读属性返回与全局对象关联的 {{domxref("Crypto")}} 对象。此对象允许网页访问某些加密相关的服务。

虽然该属性自身的只读的，但它的所有方法（以及其子对象的方法——{{domxref("SubtleCrypto")}}）不仅是只读的，因此容易受到 {{glossary("polyfill")}} 的攻击。

虽然 `crypto` 在所有窗口上均可用，但其返回的 `Crypto` 对象在不安全的上下文中仅有一个可用的特性：{{domxref("Crypto.getRandomValues", "getRandomValues()")}} 方法。通常，你应该仅在安全上下文中使用此 API。

## 值

{{domxref("Crypto")}} 接口的实例，提供对通用的密码学功能和强随机数生成器的访问。

## 示例

使用 `crypto` 属性来访问 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} 方法。

### JavaScript

```js
globalThis.genRandomNumbers = () => {
  const array = new Uint32Array(10);
  crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = `随机数为：${array.join(" ")}`;
};
```

### HTML

```html
<p id="myRandText">随机数为：</p>
<button type="button" onClick="genRandomNumbers()">生成 10 个随机数</button>
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window")}} 全局对象
- {{domxref("Crypto")}} 接口
