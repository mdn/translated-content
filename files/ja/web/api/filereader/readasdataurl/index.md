---
title: FileReader.readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
---

`readAsDataURL` メソッドは、指定された{{domxref("Blob")}} または {{domxref("File")}} の内容を読み込むために使用されます。読み込み操作が終了すると、{{domxref("FileReader.readyState", "readyState")}} が `DONE` となり、{{event("loadend")}} が発生します。このとき、{{domxref("FileReader.result", "result")}} 属性には、ファイルのデータを表す、base64 エンコーディングされた [data: URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) の文字列が格納されます。

> **メモ:** blob の {{domxref("FileReader.result","result")}} は、先に Base64 でエンコードされたデータの前にある Data-URL の宣言を削除しておかないと、直接 Base64 としてデコードすることができません。 Base64 でエンコードされた文字列のみを受け取る場合は、先に結果から `data:*/*;base64,` を削除しておく必要があります。

## 構文

```
instanceOfFileReader.readAsDataURL(blob);
```

### 引数

- `blob`
  - : メソッドで読み込む {{domxref("Blob")}} または {{domxref("File")}} オブジェクトです。

## 例

### HTML

```html
<input type="file" onchange="previewFile()"><br>
<img src="" height="200" alt="画像のプレビュー...">
```

### JavaScript

```js
function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // 画像ファイルを base64 文字列に変換します
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

### ライブ結果

{{EmbedLiveSample("Example", "100%", 240)}}

## 複数ファイルを読み取る例

### HTML

```html
<input id="browse" type="file" onchange="previewFiles()" multiple>
<div id="preview"></div>
```

### JavaScript

```js
function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // `file.name` が拡張子の基準と一致していることを確認します。
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}
```

> **メモ:** Internet Explorer 10 以前では [`FileReader()`](/ja/docs/Web/API/FileReader) コンストラクターに対応していません。十分な互換性が必要とされるときは [crossbrowser possible solution for image preview](https://mdn.mozillademos.org/files/3699/crossbrowser_image_preview.html) または [this more powerful example](https://mdn.mozillademos.org/files/3698/image_upload_preview.html) を参照してください。

## 仕様

| 仕様書                                                                               | 状態                         | 備考     |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("File API", "#FileReader-interface", "FileReader")}} | {{Spec2("File API")}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.FileReader.readAsDataURL")}}

## あわせて参照

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL()")}}

{{APIRef("File API")}}
