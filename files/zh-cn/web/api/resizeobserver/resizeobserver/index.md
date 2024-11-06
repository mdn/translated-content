---
title: ResizeObserver()
slug: Web/API/ResizeObserver/ResizeObserver
---

{{APIRef("Resize Observer API")}}

**`ResizeObserver`** 构造函数创建一个新的 {{domxref("ResizeObserver")}} 对象，它可以用于监听 {{domxref('Element')}} 内容盒或边框盒或者 {{domxref('SVGElement')}} 边界尺寸的大小。

## 语法

```js-nolint
new ResizeObserver(callback)
```

### 参数

- `callback`

  - : 每当观测的元素调整大小时，调用该函数。该函数接收两个参数：

    - `entries`
      - : 一个 {{domxref('ResizeObserverEntry')}} 对象数组，可以用于获取每个元素改变后的新尺寸。
    - `observer`
      - : 对 `ResizeObserver` 自身的引用，因此需要它的时候，你要从回调函数的内部访问。例如，这可用于在达到特定的情况时，自动取消对观察者的监听，但如果你不需要它，可以省略它。

    回调通常遵循以下模式：

    ```js
    function callback(entries, observer) {
      for (const entry of entries) {
        // Do something to each entry
        // and possibly something to the observer itself
      }
    }
    ```

## 示例

以下片段取自 [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)（[见源码](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)）示例：

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize = `${Math.max(
          1.5,
          entry.contentBoxSize[0].inlineSize / 200,
        )}rem`;
        pElem.style.fontSize = `${Math.max(
          1,
          entry.contentBoxSize[0].inlineSize / 600,
        )}rem`;
      } else {
        // legacy path
        h1Elem.style.fontSize = `${Math.max(
          1.5,
          entry.contentBoxSize.inlineSize / 200,
        )}rem`;
        pElem.style.fontSize = `${Math.max(
          1,
          entry.contentBoxSize.inlineSize / 600,
        )}rem`;
      }
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }
  console.log("Size changed");
});

resizeObserver.observe(divElem);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
