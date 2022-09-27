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

## 范例

#### 使用 {{domxref("Window.crypto")}} 来访问[getRandomValues()](/zh-CN/docs/Web/API/RandomSource/getRandomValues) 方法。

### JavaScript

```js
genRandomNumbers = function getRandomNumbers() {
  var array = new Uint32Array(10);
  window.crypto.getRandomValues(array);

  var randText = document.getElementById("myRandText");
  randText.innerHTML = "The random numbers are: "
  for (var i = 0; i < array.length; i++) {
    randText.innerHTML += array[i] + " ";
  }
}
```

### HTML

```html
<p id="myRandText">随机数字：</p>
<button type="button" onClick='genRandomNumbers()'>生成 10 个随机数字</button>
```

### 结果

{{ EmbedLiveSample('Example') }}

## 规范

{{Specifications}}

## 浏览器支持

{{Compat}}

## 另见

- The {{domxref("Window")}} global object
