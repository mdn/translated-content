---
title: "FileReader: readAsDataURL() メソッド"
short-title: readAsDataURL()
slug: Web/API/FileReader/readAsDataURL
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`readAsDataURL()`** は {{domxref("FileReader")}} インターフェイスのメソッドで、指定された{{domxref("Blob")}} または {{domxref("File")}} の内容を読み込むために使用されます。読み込み操作が終了すると、{{domxref("FileReader.readyState", "readyState")}} プロパティが `DONE` となり、{{domxref("FileReader/loadend_event", "loadend")}} イベントが発生します。このとき、{{domxref("FileReader.result","result")}} プロパティには、ファイルのデータを表す、base64 エンコーディングされた [data: URL](/ja/docs/Web/URI/Reference/Schemes/data) の文字列が格納されます。

> [!NOTE]
> blob の {{domxref("FileReader.result","result")}} は、先に Base64 でエンコードされたデータの前にある Data-URL の宣言を削除しておかないと、直接 Base64 としてデコードすることができません。
> Base64 でエンコードされた文字列のみを受け取る場合は、先に結果から `data:*/*;base64,` を削除しておく必要があります。

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

### 単一のファイルの読み取り

#### HTML

```html
<input type="file" /><br />
<img src="" height="200" alt="画像のプレビュー" />
```

#### JavaScript

```js
const preview = document.querySelector("img");
const fileInput = document.querySelector("input[type=file]");

fileInput.addEventListener("change", previewFile);

function previewFile() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // 画像ファイルを base64 文字列に変換します
    preview.src = reader.result;
  });

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

#### 結果

{{EmbedLiveSample("Reading a single file", "100%", 240)}}

### 複数ファイルを読み取る

#### HTML

```html
<input id="browse" type="file" multiple />
<div id="preview"></div>
```

#### JavaScript

```js
function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // `file.name` が拡張子の基準と一致していることを確認します。
    if (/\.(?:jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = reader.result;
        preview.appendChild(image);
      });

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const picker = document.querySelector("#browse");
picker.addEventListener("change", previewFiles);
```

#### 結果

{{EmbedLiveSample("Reading multiple files", "100%", 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
