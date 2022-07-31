---
title: File.name
slug: Web/API/File/name
tags:
  - API
  - File API
  - ファイル
  - プロパティ
  - リファレンス
browser-compat: api.File.name
translation_of: Web/API/File/name
---
{{APIRef("File API")}}

{{domxref("File")}} オブジェクトによって表されるファイルの名前を返します。セキュリティ上の理由から、パスはこのプロパティから除外されます。

## 構文

```js
var name = file.name;
```

## 値

パスを除いたファイル名の入った文字列。 "My Resume.rtf" など。

## 例

```html
<input type="file" multiple onchange="processSelectedFiles(this)">

<div id="output"></div>
```

```js
const output = document.querySelector("#output");
function processSelectedFiles(fileInput) {
  let files = fileInput.files;
  output.textContent = "選択されたファイルのリスト:";

  for (let i = 0; i < files.length; i++) {
    output.textContent += `\nファイル名: ${files[i].name}`;
  }
}
```

```css hidden
#output{
  padding: 0.5em 0;
  white-space: pre;
}
```

#### 結果

{{ EmbedLiveSample('Example', 300, 100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)
