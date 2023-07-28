---
title: FileSystemFileEntry.createWriter()
slug: Web/API/FileSystemFileEntry/createWriter
---

{{APIRef("File and Directories Entries API")}}{{deprecated_header}}{{Non-standard_header}}

{{domxref("FileSystemFileEntry")}} インターフェイスの **`createWriter()`** メソッドは、ディレクトリー項目によって表現されるファイルにデータを書き込むために使用します。

## 構文

```js
createWriter(successCallback);
createWriter(successCallback, errorCallback);
```

### 引数

- `successCallback`
  - : {{domxref("FileWriter")}} が正常に作成されたときに呼び出されるコールバック関数です。 `FileWriter` はコールバック関数の唯一の引数として渡されます。
- `errorCallback` {{optional_inline}}
  - : 指定する場合は {{domxref("FileWriter")}} を作成しようとしたときにエラーが発生したときに呼び出されるメソッドでなければなりません。このコールバック関数は、エラーを記述した {{domxref("FileError")}} オブジェクトを入力として受け取ります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、渡されたディレクトリー項目に対応するファイルに文字列を出力する `writeToFileEntry()` メソッドを用意しています。

```js
function writeToFileEntry(entry, text) {
  entry.createWriter(
    function (fileWriter) {
      let data = Blob([text], { type: "text/plain" });

      fileWriter.write(data);
    },
    function (fileError) {
      /* do whatever to handle the error */
    },
  );
}
```

`createWriter()` の呼び出しの成功コールバック関数は、渡されたテキストを受け取り、渡されたテキストを含む新しい {{domxref("Blob")}} オブジェクトを `text/plain` 型で作成します。この Blob は、ファイルに書き込むために {{domxref("FileWriter")}} オブジェクトに出力されます。

## 仕様書

この機能はもうどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
