---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

画像をクリップボードにコピーします。イメージはクリップボードに書き込まれる前に再エンコードされます。画像が無効な場合、クリップボードは修正されません。

画像はエンコードされた画像を格納した [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) として指定されます。 JPEG と PNG 形式に対応しています。

この API は Chrome の [`clipboard.setImageData()`](https://developer.chrome.com/docs/apps/reference/clipboard) API をベースにしていますが、いくつかの違いがあります。

- Chrome API はアプリ専用で、拡張機能用ではありません。
- この API では `"clipboardWrite"` 権限のみが要求されますが、 Chrome 版では `"clipboard"` 権限も要求されます。
- Chrome の API はコールバックを使用しており、この API はプロミスのみに対応しています。
- この API は `additionalItems` 引数には対応していません。

これは [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 書式

```js-nolint
browser.clipboard.setImageData(imageData, imageType)
```

### 引数

- `imageData`
  - : クリップボードにコピーするエンコードされた画像データを格納した [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) です。
- `imageType`
  - : `imageData` に格納した画像の型を示す文字列、 `"png"` または `"jpeg"` です。

### 返値

[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) で、操作が成功した場合は引数なしで解決され、エラー（例えば、データが有効な画像を表していないなど）があった場合は拒否されます。

## ブラウザーの互換性

{{Compat}}

## 例

リモートの画像をコピーします。

```js
// requires:
// * the host permission for "https://mdn.github.io/*"
// * the API permission "clipboardWrite"

fetch("https://mdn.github.io/shared-assets/images/examples/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

拡張機能にバンドルされている画像をコピーします。

```js
// requires the API permission "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API をベースにしています。
