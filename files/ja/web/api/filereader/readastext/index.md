---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
l10n:
  sourceCommit: 4684330941ebcbf873c06b659691e3bf873350f0
---

{{APIRef("File API")}}

**`readAsText()`** メソッドは、指定された {{domxref("Blob")}} または {{domxref("File")}} の内容を読み取るために使用します。読み取り操作が完了すると、 {{domxref("FileReader.readyState","readyState")}} が `DONE` に変わり、 {{domxref("FileReader/loadend_event", "loadend")}} イベントが発生し、 {{domxref("FileReader.result","result")}} プロパティにはファイルの内容が文字列として格納されます。

> **メモ:** {{domxref("Blob.text()")}} メソッドは、ファイルをテキストとして読み取るための新しいプロミスベースの API です。

> **メモ:** このメソッドは、ファイルの内容全体をメモリーに読み込みますので、巨大なファイルには適していません。巨大なファイルには [`readAsArrayBuffer()`](/ja/docs/Web/API/FileReader/readAsArrayBuffer) の方が適しています。

## 構文

```js-nolint
readAsText(blob)
readAsText(blob, encoding)
```

### 引数

- `blob`
  - : メソッドで読み込む {{domxref("Blob")}} または {{domxref("File")}} オブジェクトです。
- `encoding` {{optional_inline}}
  - : 読み込みの際に使用する文字エンコーディングを指定する文字列です。この引数が指定されなかった場合は UTF-8 で解釈されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### HTML

```html
<input type="file" onchange="previewFile()" /><br />
<p class="content"></p>
```

### JavaScript

```js
function previewFile() {
  const content = document.querySelector(".content");
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // this will then display a text file
      content.innerText = reader.result;
    },
    false,
  );

  if (file) {
    reader.readAsText(file);
  }
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
