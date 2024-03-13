---
title: DOMException()：DOMException() 构造函数
slug: Web/API/DOMException/DOMException
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

**`DOMException()`** 构造函数返回一个包含指定消息和名称的 {{domxref("DOMException")}} 对象。

## 语法

```js-nolint
new DOMException()
new DOMException(message)
new DOMException(message, name)
```

### 参数

- `message` {{optional_inline}}
  - : 对异常的描述。如果不存在，使用空字符串 `''`。
- `name` {{optional_inline}}
  - : 一个字符串。如果指定的名称是[标准的错误名称](/zh-CN/docs/Web/API/DOMException#错误名称)之一，那么获取 `DOMException` 对象的 [`code`](/zh-CN/docs/Web/API/DOMException/code) 属性将返回与指定名称对应的代码编号。

### 返回值

一个新创建的 {{domxref("DOMException")}} 对象。

## 示例

在本例中，按下按钮会导致抛出自定义的 `DOMException` 异常，然后会捕获该异常并在警报中显示自定义的错误信息。

### HTML

```html
<button>触发 DOM 异常</button>

<p id="output"></p>
```

### JavaScript

```js
const button = document.querySelector("button");

button.onclick = () => {
  try {
    throw new DOMException("已触发自定义 DOM 异常。");
  } catch (error) {
    document.querySelector("#output").textContent =
      `错误信息：${error.message}`;
  }
};
```

### 结果

{{ EmbedLiveSample('示例', '100%', 100) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 中一个可用的 [`DOMException` 构造函数的 polyfill](https://github.com/zloirock/core-js#domexception)
