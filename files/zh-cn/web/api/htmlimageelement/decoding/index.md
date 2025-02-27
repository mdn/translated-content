---
title: HTMLImageElement：decoding 属性
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef}}

{{domxref("HTMLImageElement")}} 接口的 **`decoding`** 属性用于告诉浏览器如何解析图像数据。具体来说，在渲染其他的内容更新前，是否应该等待图像解码完成。

## 值

表示解码方式的字符串。可选的值有：

- `"sync"`
  - : 同步解码图像，与其他内容一起原子化渲染。
- `"async"`
  - : 异步解码图像，允许在解码完成前渲染其他内容。
- `"auto"`
  - : 对解码模式没有偏好；让浏览器决定最适合用户的模式。这是默认值，但不同的浏览器拥有不同的默认行为：
    - Chromium 默认为 `"sync"`。
    - Firefox 默认为 `"async"`。
    - Safari 除少数情况外默认为 `"sync"`。

## 使用说明

`decoding` 属性提示浏览器是否应该在一个步骤中与其他任务一起执行图像解码（`"sync"`），或者允许在解码完成前渲染其他内容（`"async"`）。实际上，这两者之间的差异往往难以察觉，而存在差异的地方往往有更好的办法。

对于在视口内插入到 DOM 中的图像，`"async"` 可能导致无样式内容闪烁，而 `"sync"` 则可能导致一些[卡顿](/zh-CN/docs/Glossary/Jank)。使用 {{domxref("HTMLImageElement.decode()")}} 方法通常是实现原子渲染，同时不会耽误其他内容的更好的方法。

对于在视口外插入到 DOM 中的图像，现代浏览器通常会在图像滚动到可视范围之前对其进行解码，使用这两种值都不会有明显的区别。

## 示例

下面的示例中，当图像下载时，页面上可能会显示空图像。设置 `decoding` 无法避免这种情况。

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
document.body.appendChild(img);
```

图片下载后再插入时，`decoding` 属性才更有效：

```js
async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

const img = new Image();
await loadImage("img/logo.png", img);
// 使用 `sync` 可确保其他内容只随图片一起更新
img.decoding = "sync";
document.body.appendChild(img);
const p = document.createElement("p");
p.textContent = "图像已全部加载！";
document.body.appendChild(p);
```

然而，更好的解决方案是使用 {{domxref("HTMLImageElement.decode()")}} 方法。它提供了异步解码图片的方法，推迟直到图片完全下载并解码完成时才将图片插入 DOM，以此避免上述的空图片问题。当你需要将现有图片动态替换为新图片时，这特别有用，而且可以防止在解码图片的过程中代码以外的无关绘制被耽搁。

如果解码时间较长，使用 `img.decoding = "async"` 可以避免其他内容被耽搁。

```js
const img = new Image();
img.decoding = "async";
img.src = "img/logo.png";
document.body.appendChild(img);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLImageElement.decode()")}} 方法
- {{htmlelement("img")}} 元素的 `decoding` 属性
- [图像的 decoding 属性有什么作用？](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/)（2023 年，载于 tunetheweb.com）
