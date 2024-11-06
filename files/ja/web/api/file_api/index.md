---
title: ファイル API
slug: Web/API/File_API
l10n:
  sourceCommit: a122e87245c624ba56197641b4d7b21b643a6021
---

{{DefaultAPISidebar("File API")}}

## 概念と使い方

ファイル API は、ウェブアプリケーションがファイルとそのコンテンツにアクセスできるようにするためのものです。

ウェブアプリケーションは、ユーザーがファイルを利用可能にしたとき、すなわち [file 型の `<input>` 要素](/ja/docs/Web/HTML/Element/input/file)を使用するか、[ドラッグ＆ドロップを介する](/ja/docs/Web/API/DataTransfer/files)かのどちらかでファイルにアクセスすることができるようになります。

このようにして利用可能になった一連のファイルは {{domxref("FileList")}} オブジェクトとして表され、ウェブアプリケーションが個々の {{domxref("File")}} オブジェクトを取得することができるようになっています。そして、 {{domxref("File")}} オブジェクトから、ファイル名、サイズ、型、最終更新日時などのメタデータにアクセスすることができます。

{{domxref("File")}} オブジェクトを {{domxref("FileReader")}} オブジェクトに渡すことで、ファイルの内容にアクセスすることができます。 {{domxref("FileReader")}} インターフェイスは非同期ですが、[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)でのみ利用できる同期バージョンが {{domxref("FileReaderSync")}} インターフェイスで提供されています。

## インターフェイス

- {{domxref("Blob")}}
  - : "Binary Large Object" を表し、不変の生データを持つファイルのようなオブジェクトを意味します。 {{domxref("Blob")}} はテキストまたはバイナリーデータとして読み込むことができ、そのメソッドを使用してデータを処理できるように {{domxref("ReadableStream")}} に変換されることがあります。
- {{domxref("File")}}
  - : ファイルに関する情報を提供し、ウェブページ内の JavaScript がそのコンテンツにアクセスできるようにします。
- {{domxref("FileList")}}
  - : HTML の {{HTMLElement("input")}} 要素の `files` プロパティが返す値です。これにより、 `<input type="file">` 要素で選択されたファイルのリストにアクセスすることができます。また、ドラッグ & ドロップ API を用いてウェブコンテンツにドロップされたファイルのリストにも使用されます。この使用方法の詳細については、 {{domxref("DataTransfer")}} オブジェクトを参照してください。
- {{domxref("FileReader")}}
  - : ウェブアプリケーションが、ユーザーのコンピューターに保存されているファイル（または生データバッファー）の内容を、 {{domxref("File")}} または {{domxref("Blob")}} オブジェクトを使って非同期に読み込むことができるようにするもので、ファイルまたはデータを指定して読み込みます。
- {{domxref("FileReaderSync")}}
  - : ウェブアプリケーションが、ユーザーのコンピューターに保存されているファイル（または生データバッファー）の内容を、 {{domxref("File")}} または {{domxref("Blob")}} オブジェクトを使って同期的に読み込むことができるようにするもので、ファイルまたはデータを指定して読み込みます。

### 他のインターフェイスの拡張

- {{domxref("URL.createObjectURL()")}}
  - : {{domxref("File")}} または {{domxref("Blob")}} オブジェクトを取得するために使用できる URL を作成します。
- {{domxref("URL.revokeObjectURL()")}}
  - : {{domxref("URL.createObjectURL()")}} を呼び出して作成された既存のオブジェクト URL を解放します。

## 例

### ファイルの読み取り

この例では、 [file 型の `<input>` 要素](/ja/docs/Web/HTML/Element/input/file)を用意しており、ユーザーがファイルを選択すると、最初に選択したファイルの内容をテキストとして読み込み、結果を {{HTMLElement("div")}} で表示します。

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const [file] = fileInput.files;
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      output.innerText = reader.result;
    });
    reader.readAsText(file);
  }
});
```

### 結果

{{EmbedLiveSample("Reading a file", "", "300")}}

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="file">`](/ja/docs/Web/HTML/Element/input/file): file 型の入力要素
- {{domxref("DataTransfer")}} インターフェイス
