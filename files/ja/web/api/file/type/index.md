---
title: File.type
slug: Web/API/File/type
tags:
  - API
  - File API
  - リファレンス
  - ファイル
  - ファイルタイプ
  - プロパティ
browser-compat: api.File.type
translation_of: Web/API/File/type
---
{{APIRef("File API")}}

{{domxref("File")}} オブジェクトによって表されるファイルのメディアタイプ ([MIME](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) を返します。

## 構文

```js
var name = file.type;
```

## 値

ファイルのタイプを示すメディアタイプ (MIME) を含む文字列。たとえば、 PNG 画像の場合は "image/png" です。

## 例

```html
<input type="file" multiple onchange="showType(this)">
```

```js
function showType(fileInput) {
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    var name = files[i].name;
    var type = files[i].type;
    alert("Filename: " + name + " , Type: " + type);
  }
}
```

> **Note:** 現在の実装に基づくと、ブラウザーは実際にファイルのバイトストリームを読み取ってメディアタイプを判断している訳ではありません。ファイルの拡張子に基づいて推測します。 PNG 画像ファイルを .txt に改名すると "_text/plain_" となり、"_image/png_" とはなりません。さらに `file.type` は一般的に、画像、 HTML 文書、音声、動画などの一般的なファイルタイプに対してのみ信頼できます。一般的ではないファイルの拡張子に対しては、空の文字列を返します。クライアントの構成 (Windows レジストリーなど) によっては、一般的なタイプの場合でも予期しない値が発生することがあります。**開発者は、このプロパティを唯一の検証方法として信頼しないことをお勧めします。**

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)
- ブログ記事: [Be skeptical of client-reported MIME types](https://textslashplain.com/2018/07/26/be-skeptical-of-client-reported-mime-content-types/)
