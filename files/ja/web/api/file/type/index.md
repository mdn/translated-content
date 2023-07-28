---
title: "File: type プロパティ"
short-title: type
slug: Web/API/File/type
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File API")}}

{{domxref("File")}} オブジェクトによって表されるファイルのメディアタイプ ([MIME](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) を返します。

## 値

ファイルのタイプを示すメディアタイプ (MIME) を含む文字列。たとえば、 PNG 画像の場合は "image/png" です。

## 例

### HTML

```html
<input type="file" id="filepicker" name="fileList" multiple />
<output id="output"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
  const files = event.target.files;
  output.textContent = "";

  for (const file of files) {
    output.textContent += `${file.name}: ${file.type || "unknown"}\n`;
  }
});
```

### 結果

{{EmbedLiveSample('Examples')}}

> **メモ:** 現在の実装に基づくと、ブラウザーは実際にファイルのバイトストリームを読み取ってメディアタイプを判断している訳ではありません。ファイルの拡張子に基づいて推測します。 PNG 画像ファイルを .txt に改名すると "_text/plain_" となり、"_image/png_" とはなりません。さらに `file.type` は一般的に、画像、 HTML 文書、音声、動画などの一般的なファイルタイプに対してのみ信頼できます。一般的ではないファイルの拡張子に対しては、空の文字列を返します。クライアントの構成 (Windows レジストリーなど) によっては、一般的なタイプの場合でも予期しない値が発生することがあります。**開発者は、このプロパティを唯一の検証方法として信頼しないことをお勧めします。**

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- ブログ記事: [Be skeptical of client-reported MIME types](https://textslashplain.com/2018/07/26/be-skeptical-of-client-reported-mime-content-types/)
