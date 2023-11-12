---
title: EyeDropper
slug: Web/API/EyeDropper
---

{{securecontext_header}}{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

**`EyeDropper`** 接口表示一个拾色器工具的实例，用户可以打开并使用它从屏幕上选择颜色。

## 构造函数

- {{DOMxRef("EyeDropper.EyeDropper", "EyeDropper()")}} {{Experimental_Inline}}
  - : 返回一个新的 `EyeDropper` 实例。

## 实例方法

_`EyeDropper` 接口不继承任何方法_。

- {{DOMxRef("EyeDropper.open()")}} {{Experimental_Inline}}
  - : 返回一个 Promise，该 Promise 会兑现一个可以访问所选颜色的对象。

## 示例

### 打开拾色器工具并进行颜色采样

以下示例演示如何打开拾色器工具，并等待用户选择屏幕上的像素，或按下 <kbd>Escape</kbd> 键取消拾色器模式。

#### HTML

```html
<button id="start-button">打开拾色器</button> <span id="result"></span>
```

#### JavaScript

```js
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent = "你的浏览器不支持 EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });
});
```

#### 结果

{{EmbedLiveSample("打开拾色器工具并进行颜色采样")}}

### 中止拾色器模式

以下示例演示如何打开拾色器工具，并等待用户选择屏幕上的像素或按下 <kbd>Escape</kbd> 键来取消拾色器模式。

#### HTML

```html
<button id="start-button">打开拾色器</button> <span id="result"></span>
```

#### JavaScript

```js
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent = "你的浏览器不支持 EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });

  setTimeout(() => {
    abortController.abort();
  }, 2000);
});
```

#### 结果

{{EmbedLiveSample("中止拾色器模式")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
