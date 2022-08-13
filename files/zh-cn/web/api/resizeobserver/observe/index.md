---
title: ResizeObserver.observe()
slug: Web/API/ResizeObserver/observe
---
{{APIRef("Resize Observer API")}}{{SeeCompatTable}}

The **`observe()`** method of the {{domxref("ResizeObserver")}} interface initiates observing of a specified {{domxref('Element')}} or {{domxref('SVGElement')}}.
{{domxref("ResizeObserver")}} 接口的 **`observe()` **方法用于观察一个指定{{domxref('Element')}} 或 {{domxref('SVGElement')}}。

## 语法

```plain
resizeObserver.observe(target);
```

### 参数

- target
  - : 被观察的 {{domxref('Element')}} 或 {{domxref('SVGElement')}} 引用。
- options {{optional_inline}}

  - : 一个指定观察设置的可选参数对象。目前只有一个可设置的选项：

    - `box`
      - : 设置观察者将以哪种盒子模型来观察变动。可以设置的值为
        `content-box` (默认值)，`border-box`，和
        `device-pixel-content-box`。

### 返回值

{{jsxref('undefined')}}

### 异常

无

## 示例

以下示例通过观察 box 的尺寸变化从而改变其边框圆角半径。

```js
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.style.borderRadius = Math.max(0, 250 - entry.contentRect.width) + 'px';
  }
});
resizeObserver.observe(document.querySelector('.box:nth-child(2)'));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.ResizeObserver.observe")}}
