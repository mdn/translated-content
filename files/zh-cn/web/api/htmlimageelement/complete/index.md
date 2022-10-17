---
title: HTMLImageElement.complete
slug: Web/API/HTMLImageElement/complete
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} 的只读属性 **`complete`** 是一个布尔值，表示图片是否完全加载完成。

## 语法

```plain
let doneLoading = htmlImageElement.complete;
```

### 值

当图片完全加载完成时值为 `true`；否则，值为 `false`。

以下任意一条为 true 则认为图片完全加载完成：

- Neither the {{htmlattrxref("src", "img")}} nor the {{htmlattrxref("srcset", "img")}} attribute is specified.
- The `srcset` attribute is absent and the `src` attribute, while specified, is the empty string (`""`).
- The image resource has been fully fetched and has been queued for rendering/compositing.
- The image element has previously determined that the image is fully available and ready for use.
- The image is "broken;" that is, the image failed to load due to an error or because image loading is disabled.

It's worth noting that due to the image potentially being received asynchronously, the value of `complete` may change while your script is running.

## Example

Consider a photo library app that provides the ability to open images into a lightbox mode for improved viewing as well as editing of the image. These photos may be very large, so you don't want to wait for them to load, so your code uses `async`/`await` to load the images in the background.

But imagine that you have other code that needs to only run when the image has completed loading, such as a command that performs red-eye removal on the image in the lightbox. While ideally this command wouldn't even be executed if the image hasn't fully loaded, for improved reliability you want to check to ensure this is the case.

So the `fixRedEyeCommand()` function, which is called by the button that triggers red-eye removal, checks the value of the lightbox image's `complete` property before attempting to do its work. This is demonstrated in the code below.

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

/* ... */

function fixRedEyeCommand() {
  if (lightboxElem.style.display === "block" && lightboxImgElem.complete) {
    fixRedEye(lightboxImgElem);
  } else {
    /* can't start doing this until the image is fully loaded */
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
