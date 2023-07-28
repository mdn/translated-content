---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
l10n:
  sourceCommit: a122e87245c624ba56197641b4d7b21b643a6021
---

{{APIRef("File API")}}

`readAsDataURL` メソッドは、指定された{{domxref("Blob")}} または {{domxref("File")}} の内容を読み込むために使用されます。読み込み操作が終了すると、{{domxref("FileReader.readyState", "readyState")}} が `DONE` となり、{{domxref("FileReader/loadend_event", "loadend")}} が発生します。このとき、{{domxref("FileReader.result", "result")}} 属性には、ファイルのデータを表す、base64 エンコーディングされた [data: URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) の文字列が格納されます。

> **メモ:** blob の {{domxref("FileReader.result","result")}} は、先に Base64 でエンコードされたデータの前にある Data-URL の宣言を削除しておかないと、直接 Base64 としてデコードすることができません。 Base64 でエンコードされた文字列のみを受け取る場合は、先に結果から `data:*/*;base64,` を削除しておく必要があります。

## 構文

```js-nolint
readAsDataURL(blob)
```

### 引数

- `blob`
  - : メソッドで読み込む {{domxref("Blob")}} または {{domxref("File")}} オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<img src="" height="200" alt="画像のプレビュー" />
```

### JavaScript

```js
function previewFile() {
  const preview = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // 画像ファイルを base64 文字列に変換します
      preview.src = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

### ライブ結果

{{EmbedLiveSample("Examples", "100%", 240)}}

## 複数ファイルを読み取る例

### HTML

```html
<input id="browse" type="file" onchange="previewFiles()" multiple />
<div id="preview"></div>
```

### JavaScript

```js
function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // `file.name` が拡張子の基準と一致していることを確認します。
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}
```

> **メモ:** Internet Explorer 10 以前では [`FileReader()`](/ja/docs/Web/API/FileReader) コンストラクターに対応していません。十分な互換性が必要とされるときは、[画像プレビューのクロスブラウザー対応ソリューション](https://mdn.dev/archives/media/attachments/2012/07/09/3699/2c8cb1e94f0ee05b22c1c30a3790c70d/crossbrowser_image_preview.html)または[もっと強力な例](https://mdn.dev/archives/media/attachments/2012/07/09/3698/391aef19653595a663cc601c42a67116/image_upload_preview.html)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL()")}}
