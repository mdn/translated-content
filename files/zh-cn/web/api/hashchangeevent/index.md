---
title: HashChangeEvent
slug: Web/API/HashChangeEvent
---

{{APIRef("HTML DOM")}}

**`HashChangeEvent`** 接口表示一个变化事件，当 URL 中的片段标识符发生改变时，会触发此事件。

片段标识符指 URL 中 `#` 号和它以后的部分。

{{InheritanceDiagram}}

## 属性

_这个接口也从 {{domxref("Event")}} 中继承属性。_

- {{domxref("HashChangeEvent.newURL")}} {{readonlyInline}}
  - : window 即将导航到达的新 URL。
- {{domxref("HashChangeEvent.oldURL")}} {{readonlyInline}}
  - : window 此前导航到达过的 URL。

## 方法

_这个接口没有自己的方法，但从 {{domxref("Event")}} 中继承方法_

## 示例

### 井号内容变化的语法选择

你可以选择使用下述的任一方法监听 [`hashchange`](/zh-CN/docs/Web/API/Window/hashchange_event) 事件。

```js
window.onhashchange = funcRef;
```

**或**

```html
<body onhashchange="funcRef();"></body>
```

**或**

```js
window.addEventListener("hashchange", funcRef, false);
```

### 基本示例

```js
function locationHashChanged() {
  if (location.hash === "#somecoolfeature") {
    somecoolfeature();
  }
}

window.addEventListener("hashchange", locationHashChanged);
```

## 回落方法（Polyfill）

在 [Modernizr GitHub page](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills) 中列出了几种回落（fallback）脚本。基本上，这些脚本每隔一段时间检查以此 {{domxref("HTMLHyperlinkElementUtils.hash", "location.hash")}}。这里是其中一个版本，其仅允许一个处理程序（handler）绑定在 {{domxref("Window/hashchange_event", "onhashchange")}} 属性上：

```js
(function (window) {
  // 如果浏览器已经实现了此事件，则退出函数
  if ("onhashchange" in window.document.body) return;

  var location = window.location,
    oldURL = location.href,
    oldHash = location.hash;

  // 每隔 100 毫秒，检查一次片段标识符
  setInterval(function () {
    var newURL = location.href,
      newHash = location.hash;

    // 如果片段标识符有变化，且处理程序存在
    if (newHash != oldHash && typeof window.onhashchange === "function") {
      // 执行处理程序
      window.onhashchange({
        type: "hashchange",
        oldURL: oldURL,
        newURL: newURL,
      });

      oldURL = newURL;
      oldHash = newHash;
    }
  }, 100);
})(window);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- [`hashchange`](/zh-CN/docs/Web/API/Window/hashchange_event)
- [`popstate`](/zh-CN/docs/Web/API/Window/popstate_event)
