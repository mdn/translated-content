---
title: "HTMLInputElement: multiple プロパティ"
short-title: multiple
slug: Web/API/HTMLInputElement/multiple
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement.multiple`** プロパティは、入力フィールドが複数の値を持つことができるかどうかを示します。 Firefox では、 `multiple` は `<input type="file">` でのみ対応しています。

## 値

論理値です。

## 例

```js
// fileInput は <input type=file multiple> です
let fileInput = document.getElementById("myfileinput");

if (fileInput.multiple) {
  // fileInput.files を反復処理
  for (const file of fileInput.files) {
    // ファイルの一つに対してアクションを実行
  }
  // 一つのファイルのみが有効な場合
} else {
  let [file] = fileInput.files;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FileList](/ja/docs/Web/API/FileList)
- [Bug 523771](https://bugzil.la/523771) - \<input type=file multiple> への対応
