---
title: Window.crypto
slug: Web/API/crypto_property
---

{{APIRef}}

Window\.crypto 只读属性返回与全局对象关联的 {{domxref("Crypto")}}对象。此对象允许网页访问某些加密相关服务。

## 语法

```plain
var cryptoObj = window.crypto || window.msCrypto; // for IE 11
```

## 示例

使用 `crypto` 属性来访问 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} 方法。

### JavaScript

```js
globalThis.genRandomNumbers = () => {
  const array = new Uint32Array(10);
  crypto.getRandomValues(array);

  const randText = document.getElementById("myRandText");
  randText.textContent = `The random numbers are: ${array.join(" ")}`;
};
```

### HTML

```html
<p id="myRandText">随机数字：</p>
<button type="button" onClick="genRandomNumbers()">
  生成 10 个随机数字
</button>
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{domxref("Window")}} global object
