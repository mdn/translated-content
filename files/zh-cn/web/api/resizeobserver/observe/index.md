---
title: ResizeObserver.observe()
slug: Web/API/ResizeObserver/observe
---

{{APIRef("Resize Observer API")}}

{{domxref("ResizeObserver")}} 接口的 **`observe()`** 方法用于监听指定的 {{domxref('Element')}} 或 {{domxref('SVGElement')}}。

## 语法

```js-nolint
observe(target)
observe(target, options)
```

### 参数

- `target`
  - : 对要监听的 {{domxref('Element')}} 或 {{domxref('SVGElement')}} 的引用。
- `options` {{optional_inline}}

  - : 一个可选的对象，允许你为监听的对象设置参数。目前，这只有一个参数：

    - `box`

      - : 设置 observer 将监听的盒模型。可能的值是：

        - `content-box`（默认）
          - : CSS 中定义的内容区域的大小。
        - `border-box`
          - : CSS 中定义的边框区域的大小。
        - `device-pixel-content-box`
          - : 在对元素或其祖先应用任何 CSS 转换之前，CSS 中定义的内容区域的大小，以设备像素为单位。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

无。

## 示例

以下片段取自 [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)（[见源码](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)）示例：

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // Checking for chrome as using a non-standard array
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

带有一个可选的对象的 `observe()` 看起来像这样：

```js
resizeObserver.observe(divElem, { box: "border-box" });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
