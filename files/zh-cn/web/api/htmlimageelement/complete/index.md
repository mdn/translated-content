---
title: HTMLImageElement：complete 属性
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} 接口的 **`complete`** 只读属性是一个布尔值，用于指示图像是否已完全加载。

## 值

一个布尔值，如果图像加载完成，则为 `true`；否则，值为 `false`。

如果满足以下任何一个条件，则认为图像已经加载完毕：

- 没有指定 [`src`](/zh-CN/docs/Web/HTML/Element/img#src) 和 [`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset) 属性。
- `srcset` 属性不存在且 `src` 属性被指定为空字符串（`""`）时。
- 图片资源已经完全获取，并且已经排队等待渲染/合成。
- 图像元素已预先确定，图像已完全可用并准备好使用。
- 图像“损坏”，即由于错误或图像加载被禁用导致图像加载失败。

值得注意的是，由于图像可能是异步接收的，因此 `complete` 的值可能在脚本运行时发生变化。

## 示例

假设有这么一个图库应用程序，它能够以灯箱模式打开图像，以便更好地查看和编辑图像。这些照片可能非常大，所以你不想等待它们加载，因此你在代码中使用 `async`/`await` 在后台加载图像。

但是想象一下，你还有其他一些仅需要在图像完成加载后运行的代码，例如对灯箱中的图像执行红眼消除的命令。理想情况下，如果图像尚未完全加载，则不会执行此命令，但为了提高可靠性，你需要检查以确保情况确实如此。

因此，触发红眼移除按钮会在调用 `fixRedEyeCommand()` 函数之前，先检查灯箱图像的 `complete` 属性的值，如下面的代码所示。

```js
let lightboxElem = document.querySelector("#lightbox");
let lightboxImgElem = lightboxElem.querySelector("img");
let lightboxControlsElem = lightboxElem.querySelector(".toolbar");

async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

async function lightBox(url) {
  lightboxElem.style.display = "block";
  await loadImage("https://somesite.net/huge-image.jpg", lightboxImgElem);
  lightboxControlsElem.disabled = false;
}

// …

function fixRedEyeCommand() {
  if (lightboxElem.style.display === "block" && lightboxImgElem.complete) {
    fixRedEye(lightboxImgElem);
  } else {
    /* 在图片完全加载之前不能开始这样做 */
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
