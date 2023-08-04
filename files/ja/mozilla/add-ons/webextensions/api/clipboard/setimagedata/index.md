---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
---

{{AddonSidebar()}}

イメージをクリップボードにコピーします。イメージはクリップボードに書き込まれる前に再エンコードされます。イメージが無効な場合、クリップボードは修正されません。

The image is provided as an [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the encoded image. JPEG and PNG formats are supported.

Although this API is based on Chrome's [`clipboard.setImageData()`](https://developer.chrome.com/apps/clipboard) API, there are some differences:

- The Chrome API is only for apps, not extensions.
- This API requires only the `"clipboardWrite"` permission, while the Chrome version also requires the `"clipboard"` permission.
- Chrome's API uses callbacks, and this API only supports promises.
- This API does not support the `additionalItems` parameter.

これは[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)を返す非同期関数です。

## 書式

```js
browser.clipboard.setImageData(imageData, imageType);
```

### パラメータ

- `imageData`
  - : An [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the encoded image data to copy to the clipboard.
- `imageType`
  - : A {{domxref("DOMString")}} indicating the type of image contained in `imageData`: `"png"` or `"jpeg"`.

### 返り値

A [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved with no arguments if the operation succeeded, or rejected if there was an error (for example, because the data did not represent a valid image).

## ブラウザーの互換性

{{Compat("webextensions.api.clipboard.setImageData", 10)}}

## 例

Copy a remote image:

```js
// requires:
// * the host permission for "https://cdn.mdn.mozilla.net/*"
// * the API permission "clipboardWrite"

fetch("https://cdn.mdn.mozilla.net/static/img/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

Copy an image that was bundled with the extension:

```js
// requires the API permission "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

> **メモ:** This API is based on Chromium's [`chrome.clipboard`](https://developer.chrome.com/apps/clipboard) API.
