---
title: FileSystemFileEntry.file()
slug: Web/API/FileSystemFileEntry/file
---

{{APIRef("File and Directory Entries API")}}

{{domxref("FileSystemFileEntry")}} インターフェイスの **`file()`** メソッドは、子のディレクトリー項目が表現しているファイルからデータを読むために使用できる {{domxref("File")}} オブジェクトを返します。

## 構文

```js
file(successCallback);
file(successCallback, errorCallback);
```

### 引数

- `successCallback`
  - : コールバック関数で、 {{domxref("File")}} が正常に作成されたときに呼び出されます。コールバックには、唯一の引数として `File` が渡されます。
- `errorCallback` {{optional_inline}}
  - : 指定された場合、 {{domxref("File")}} を作成しようとしてエラーが発生したときに呼び出されるメソッドである必要があります。このコールバックは、エラーを記述した {{domxref("DOMException")}} オブジェクトを入力として受け取ります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例ではメソッド `readFile()` を作成し、テキストファイルを読み込み、読み込みが完了すると、指定されたコールバック関数を受け取ったテキスト（文字列）つきで呼び出します。エラーが発生した場合は、指定された（オプションの）エラーコールバック関数が呼び出されます。

```js
function readFile(entry, successCallback, errorCallback) {
  entry.file(function (file) {
    let reader = new FileReader();

    reader.onload = function () {
      successCallback(reader.result);
    };

    reader.onerror = function () {
      errorCallback(reader.error);
    };

    reader.readAsText(file);
  }, errorCallback);
}
```

この関数は `file()` を呼び出し、その成功コールバックとして {{domxref("FileReader")}} を使ってファイルをテキストとして読み込むメソッドを指定します。 FileReader の {{domxref("FileReader/load_event", "load")}} イベントハンドラーは、読み込んだ文字列を `readFile()` メソッドが呼ばれたときに指定した `successCallback` に渡すようにセットアップされています。同様に、{{domxref("FileReader/error_event", "error")}} ハンドラーは、指定された `errorCallback` を呼び出すようにセットアップされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
