---
title: FileReader
slug: Web/API/FileReader
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`FileReader`** オブジェクトを使用すると、ウェブアプリケーションは、ユーザーのコンピューターに保存されているファイル（または生のデータバッファー）の内容を非同期に読み取ることができます。{{domxref("File")}} または {{domxref("Blob")}} オブジェクトを使用して、読み込むファイルまたはデータを指定します。

File オブジェクトは、`<input type="file">` 要素を使用してファイルを選択した結果として返される {{domxref("FileList")}} オブジェクト、またはドラッグ & ドロップ操作の {{domxref("DataTransfer")}} オブジェクトから取得することができます。`FileReader` は、ユーザーが明示的に選択したファイルのコンテンツにのみアクセスできます。ユーザーのファイルシステムからパス名でファイルを読み込むために使用することはできません。クライアントのファイルシステム上のファイルをパス名で読み込むには、[ファイルシステムアクセス API](/ja/docs/Web/API/File_System_API) を使用してください。サーバー側のファイルを読み込むには、{{domxref("Window/fetch", "fetch()")}} を使用してください。オリジン間で読み取る場合は [CORS](/ja/docs/Web/HTTP/Guides/CORS) 権限も必要です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : 新しい `FileReader` オブジェクトを返します。

詳細や例については[ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)を参照してください。

## インスタンスプロパティ

- {{domxref("FileReader.error")}} {{ReadOnlyInline}}
  - : ファイルの読み込み中に発生したエラーを表す {{domxref("DOMException")}} です。
- {{domxref("FileReader.readyState")}} {{ReadOnlyInline}}
  - : `FileReader` の状態を示す数値。以下のいずれかになります。

    | 名前      | 値  | 説明                                     |
    | --------- | --- | ---------------------------------------- |
    | `EMPTY`   | `0` | まだデータは読み込まれていません。       |
    | `LOADING` | `1` | データは現在読み込み中です。             |
    | `DONE`    | `2` | 読み込みリクエストがすべて終了しました。 |

- {{domxref("FileReader.result")}} {{ReadOnlyInline}}
  - : ファイルの内容。このプロパティは読み込み操作が完了した後にのみ有効であり、データの形式は、どのメソッドが読み込み操作を開始するのに使用されたかに依存します。

## インスタンスメソッド

- {{domxref("FileReader.abort()")}}
  - : 読み込み処理を中断します。結果として `readyState` は `DONE` に変わります。
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : 指定された {{domxref("Blob")}} の内容の読み込みを開始し、終了すると、`result` 属性にファイルのデータを表す {{jsxref("ArrayBuffer")}} が格納されます。
- {{domxref("FileReader.readAsBinaryString()")}} {{deprecated_inline}}
  - : 指定された {{domxref("Blob")}} の内容の読み込みを開始し、終了すると、`result` 属性にはファイルからの生のバイナリーデータが文字列として格納されます。
- {{domxref("FileReader.readAsDataURL()")}}
  - : 指定された {{domxref("Blob")}} の内容の読み込みを開始し、終了すると、`result` 属性にはファイルのデータを表す `data:` の URL が格納されます。
- {{domxref("FileReader.readAsText()")}}
  - : 指定された {{domxref("Blob")}} の内容の読み込みを開始し、終了すると `result` 属性にファイルの内容がテキスト文字列として格納されます。オプションでエンコーディング名を指定することができます。

## イベント

これらのイベントを待ち受けるには、 {{domxref("EventTarget/addEventListener", "addEventListener()")}} を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを代入するかしてください。 `FileReader` が使用されなくなったら、メモリーリークを防ぐために {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} でイベントリスナーを取り外してください。

- {{domxref("FileReader/abort_event", "abort")}}
  - : プログラムが {{domxref("FileReader.abort()")}} を呼び出したなどの原因で、読み取り操作が中断されたときに発生します。
- {{domxref("FileReader/error_event", "error")}}
  - : エラーのために読み取りが失敗したときに発生します。
- {{domxref("FileReader/load_event", "load")}}
  - : 読み取りが正常に完了したときに発生します。
- {{domxref("FileReader/loadend_event", "loadend")}}
  - : 正常かどうかにかかわらず、読み取りが完了したときに発生します。
- {{domxref("FileReader/loadstart_event", "loadstart")}}
  - : 読み取りが開始されたときに発生します。
- {{domxref("FileReader/progress_event", "progress")}}
  - : データの読み取り時に定期的に発生します。

## 例

### FileReader の使用

この例では、テキストファイルの内容を直接読み込み、ブラウザー上に表示させます。

#### HTML

```html
<h1>ファイルリーダー</h1>
<input type="file" id="file-input" />
<div id="message"></div>
<pre id="file-content"></pre>
```

#### JavaScript

```js-nolint
const fileInput = document.getElementById("file-input");
const fileContentDisplay = document.getElementById("file-content");
const messageDisplay = document.getElementById("message");

fileInput.addEventListener("change", handleFileSelection);

function handleFileSelection(event) {
  const file = event.target.files[0];
  fileContentDisplay.textContent = ""; // 以前のファイルコンテンツをクリア
  messageDisplay.textContent = ""; // 以前のメッセージをクリア

  // ファイルの存在と形式を検証
  if (!file) {
    showMessage("ファイルが選択されていません。選択してください。", "error");
    return;
  }

  if (!file.type.startsWith("text")) {
    showMessage("未対応のファイル形式です。テキストファイルを選択してください。", "error");
    return;
  }

  // ファイルを読み取る
  const reader = new FileReader();
  reader.onload = () => {
    fileContentDisplay.textContent = reader.result;
  };
  reader.onerror = () => {
    showMessage("ファイルの読み取り中にエラーが発生しました。やり直してください。", "error");
  };
  reader.readAsText(file);
}

// ユーザーのメッセージを表示
function showMessage(message, type) {
  messageDisplay.textContent = message;
  messageDisplay.style.color = type === "error" ? "red" : "green";
}
```

### 結果

{{EmbedLiveSample("Using FileReader", 640, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
- {{domxref("FileReaderSync")}}
