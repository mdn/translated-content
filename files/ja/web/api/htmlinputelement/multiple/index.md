---
title: HTMLInputElement.multiple
slug: Web/API/HTMLInputElement/multiple
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - NeedsMarkupWork
  - NeedsSpecTable
  - プロパティ
  - リファレンス
browser-compat: api.HTMLInputElement.multiple
translation_of: Web/API/HTMLInputElement/multiple
---
{{ APIRef("HTML DOM") }}

**`HTMLInputElement.multiple`** プロパティは、入力フィールドが複数の値を持つことができるかどうかを示します。 Firefox では、 `multiple` は `<input type="file">` でのみ対応しています。

## 例

```js
// fileInput は <input type=file multiple> です
let fileInput = document.getElementById('myfileinput');

if (fileInput.multiple == true) {

  for (let i = 0; i < fileInput.files.length; i++) {
    // Loop fileInput.files
  }

// 一つのファイルのみが有効な場合
} else {
  let file = fileInput.files.item(0);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FileList](/ja/docs/Web/API/FileList)
- [Bug 523771](https://bugzilla.mozilla.org/show_bug.cgi?id=523771) - \<input type=file multiple> への対応
