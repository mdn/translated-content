---
title: ファイル API
slug: Web/API/File_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

## 概念と使い方

ファイル API は、ウェブアプリケーションがファイルとそのコンテンツにアクセスできるようにするためのものです。

ウェブアプリケーションは、ユーザーがファイルを利用可能にしたとき、すなわち [file 型の `<input>` 要素](/ja/docs/Web/HTML/Reference/Elements/input/file)を使用するか、[ドラッグ＆ドロップを介する](/ja/docs/Web/API/DataTransfer/files)かのどちらかでファイルにアクセスすることができるようになります。

このようにして利用可能になった一連のファイルは {{domxref("FileList")}} オブジェクトとして表され、ウェブアプリケーションが個々の {{domxref("File")}} オブジェクトを取得することができるようになっています。そして、 {{domxref("File")}} オブジェクトから、ファイル名、サイズ、型、最終更新日時などのメタデータにアクセスすることができます。

{{domxref("File")}} オブジェクトを {{domxref("FileReader")}} オブジェクトに渡すことで、ファイルの内容にアクセスすることができます。 {{domxref("FileReader")}} インターフェイスは非同期ですが、[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)でのみ利用できる同期バージョンが {{domxref("FileReaderSync")}} インターフェイスで提供されています。

## 他のファイル関連 API との関係

ファイルを扱う主要な API は他にも 2 つあります。[ファイルとディレクトリー項目API](/ja/docs/Web/API/File_and_Directory_Entries_API) と[ファイルシステム API](/ja/docs/Web/API/File_System_API) です。

ファイル API は最も基本的な API です。ユーザーがフォーム要素の入力やドラッグ＆ドロップ操作という形で明示的に指定したファイルデータの読み取りと処理に対応しています。また、Blob を介してバイナリーデータを処理することもできます。

ファイルとディレクトリー項目 API は、ファイル API と同様に、ユーザーがフォーム入力やドラッグ＆ドロップ操作で提供するファイルを扱います。ただし、入力要素では単一のファイルではなく、ディレクトリーまたは複数のファイルの選択が可能になりました。この API は、ディレクトリーやファイルを処理する手段を提供します。これは主に Chrome 独自の発明です。他インターフェイスへの拡張はすべて `webkit` で始まる接頭辞が付与されていることがわかります。[ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API#歴史) には、その実装と標準化に関するより完全な経緯が記載されています。当初は完全な仮想ファイルシステムに対応するためのものでしたが、現在はユーザーが提供するデータに対する読み取り操作のみに対応しています。

ファイルシステム API は、ウェブアプリケーション向けに仮想ファイルシステムを提供します。これにより、アプリケーションは文書のオリジンに固有の仮想システム（[オリジンプライベートファイルシステム (OPFS)](/ja/docs/Web/API/File_System_API/Origin_private_file_system) と呼ばれる）にデータを永続的に格納することが可能です。ファイルシステムアクセス API は、ファイルシステムAPIをさらに拡張し、ユーザーの同意を得た上でウェブサイトがユーザーファイルの読み書きをすることができるようにします。ファイル API やファイルとディレクトリー項目 API とは異なり、ファイルシステム API は純粋な JavaScript で実装され、フォーム入力の処理は行いません。

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

- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
  - : {{domxref("File")}} または {{domxref("Blob")}} オブジェクトを取得するために使用できる URL を作成します。
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
  - : {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} を呼び出して作成された既存のオブジェクト URL を解放します。

## 例

### ファイルの読み取り

この例では、 [file 型の `<input>` 要素](/ja/docs/Web/HTML/Reference/Elements/input/file)を用意しており、ユーザーがファイルを選択すると、最初に選択したファイルの内容をテキストとして読み込み、結果を {{HTMLElement("div")}} で表示します。

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

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    output.innerText = await file.text();
  }
});
```

### 結果

{{EmbedLiveSample("Reading a file", "", "300")}}

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="file">`](/ja/docs/Web/HTML/Reference/Elements/input/file): file 型の入力要素
- {{domxref("Blob.text()")}}
- {{domxref("DataTransfer")}} インターフェイス
