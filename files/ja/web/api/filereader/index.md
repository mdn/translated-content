---
title: FileReader
slug: Web/API/FileReader
---

{{APIRef("File API")}}

**`FileReader`** オブジェクトを使用すると、ウェブアプリケーションは、ユーザーのコンピュータに保存されているファイル (または生データ バッファ) の内容を非同期に読み取ることができます。{{domxref("File")}} または {{domxref("Blob")}} オブジェクトを使用して、読み込むファイルまたはデータを指定します。

File オブジェクトは、{{HTMLElement("input")}} 要素を使用してファイルを選択した結果として返される {{domxref("FileList")}} オブジェクト、ドラッグ＆ドロップ操作の {{domxref("DataTransfer")}} オブジェクトから取得することができます。

`FileReader` は、ユーザーが HTML の `<input type="file">` 要素を使って、あるいはドラッグ＆ドロップで明示的に選択したファイルのコンテンツにのみアクセスすることができます。ユーザーのファイルシステムからパス名でファイルを読み込むために使用することはできません。クライアントのファイルシステム上のファイルをパス名で読み込むには、[ファイルシステムアクセス API](/ja/docs/Web/API/File_System_Access_API) を使用してください。サーバー側のファイルを読み込むには、標準的な Ajax ソリューションを使用し、クロスドメインで読み込む場合は CORS 許可を取得してください。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : 新しく作成された `FileReader` を返します。

詳細や例については[ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)を参照してください。

## プロパティ

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : ファイルの読み込み中に発生したエラーを表す {{domxref("DOMException")}}。
- {{domxref("FileReader.readyState")}} {{readonlyinline}}

  - : `FileReader` の状態を示す数値。以下のいずれかになります。

    | 名前      | 値 | 説明                                 |
    | --------- | ----- | ------------------------------------------- |
    | `EMPTY`   | `0`   | まだデータは読み込まれていません。          |
    | `LOADING` | `1`   | データは現在読み込み中です。                |
    | `DONE`    | `2`   | 読み込みリクエストがすべて終了しました。    |

- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : ファイルの内容。このプロパティは読み込み操作が完了した後にのみ有効であり、データのフォーマットは、どのメソッドが読み込み操作を開始するのに使用されたかに依存します。

## メソッド

- {{domxref("FileReader.abort()")}}
  - : 読み込み処理を中断します。結果として `readyState` は `DONE` に変わります。
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : 指定された {{domxref("Blob")}} の内容の読み込みを開始し、終了すると、`result` 属性にファイルのデータを表す {{jsxref("ArrayBuffer")}} が格納されます。
- {{domxref("FileReader.readAsBinaryString()")}}
  - : 指定された {{domxref("Blob")}} の内容の読み込みを開始し、終了すると、`result` 属性にはファイルからの生のバイナリデータが文字列として格納されます。
- {{domxref("FileReader.readAsDataURL()")}}
  - : 指定された {{domxref("Blob")}} の内容の読み込みを開始し、終了すると、`result` 属性にはファイルのデータを表す `data:` の URL が格納されます。
- {{domxref("FileReader.readAsText()")}}
  - : 指定された {{domxref("Blob")}} の内容の読み込みを開始し、終了すると `result` 属性にファイルの内容がテキスト文字列として格納されます。オプションでエンコーディング名を指定することができます。

## イベント

これらのイベントを待ち受けるには、 {{domxref("EventTarget/addEventListener", "addEventListener()")}} を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを代入するかしてください。 `FileReader` が使用されなくなったら、メモリリークを防ぐために {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} でイベントリスナーを取り外してください。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
- {{domxref("FileReaderSync")}}
