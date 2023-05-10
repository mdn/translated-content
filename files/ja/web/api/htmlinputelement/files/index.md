---
title: HTMLInputElement.files
slug: Web/API/HTMLInputElement/files
l10n:
  sourceCommit: a36633398f827c87eb593f9647ed00bf33fd5b34
---

{{APIRef("File and Directory Entries API")}}

**`HTMLInputElement.files`** プロパティを通じて、[`<input type="file">`](/ja/docs/Web/HTML/Element/input/file) 要素で選択された {{domxref("FileList")}} にアクセスできます。

## 値

{{domxref("FileList")}} のインスタンスが返ります。**`HTMLInputElement`** が `type="file"` でない場合は、`null` が返ります。

## 例

以下の例は、**`HTMLInputElement.files`** プロパティにアクセスしてユーザーが選択したファイルの名前を出力する方法を示します。

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

**`HTMLInputElement.files`** は、ファイルが選択されていなくても {{domxref("FileList")}} を返すことに注意してください。
この性質があるため、ファイルが選択されているかをチェックせずに {{JSxref("Statements/for...of", "for...of")}} で走査しても安全です。

```js
const fileInput = document.getElementById("files");

console.log(fileInput.files instanceof FileList); // true

for (const file of fileInput.files) {
  console.log(file.name); // ファイル名を出力します
}
```

## 仕様書

{{ Specifications }}

## ブラウザーの互換性

{{ Compat }}
