---
title: "HTMLInputElement: files プロパティ"
short-title: files
slug: Web/API/HTMLInputElement/files
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}

**`HTMLInputElement.files`** プロパティを通じて、[`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file) 要素で選択された {{domxref("FileList")}} にアクセスできます。

## 値

選択されているファイルがあれば、それをリストする {{domxref("FileList")}} オブジェクトです。**`HTMLInputElement`** が `type="file"` でない場合は、`null` が返ります。

## 例

以下の例は、**`HTMLInputElement.files`** プロパティにアクセスして、ユーザーが選択したそれぞれのファイルの名前、更新日時、サイズ、種類を出力する方法を示します。

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

**`HTMLInputElement.files`** は、ファイルが選択されていなくても {{domxref("FileList")}} を返すことに注意してください。
この性質があるため、ファイルが選択されているかをチェックせずに {{JSxref("Statements/for...of", "for...of")}} で走査しても安全です。

```js
const fileInput = document.getElementById("files");

console.log(fileInput.files instanceof FileList); // 空でも true となる

for (const file of fileInput.files) {
  console.log(file.name); // ファイル名を表示
  let fileDate = new Date(file.lastModified);
  console.log(fileDate.toLocaleDateString()); // 日付を表示
  console.log(
    file.size < 1000 ? file.size : Math.round(file.size / 1000) + "KB",
  );
  console.log(file.type); // MIME タイプを表示
}
```

## 仕様書

{{ Specifications }}

## ブラウザーの互換性

{{ Compat }}

## 関連情報

- {{domxref("DataTransfer.files")}}
