---
title: "FileSystemEntry: getParent() メソッド"
short-title: getParent()
slug: Web/API/FileSystemEntry/getParent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("File and Directory Entries API")}}

{{domxref("FileSystemEntry")}} は **`getParent()`** インターフェイスのメソッドで、{{domxref("FileSystemDirectoryEntry")}} を取得します。

## 構文

```js-nolint
getParent(successCallback, errorCallback)
getParent(successCallback)
```

### 引数

- `successCallback`
  - : 親ディレクトリーの項目が取得されたときに呼び出される関数です。コールバックは単一の引数として、親ディレクトリーを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクトを受け取ります。ルートディレクトリーの親は、ルートディレクトリーそのものとみなされます。
- `errorCallback` {{optional_inline}}
  - : オプションのコールバックで、エラーが発生した場合に実行されます。引数は単一の {{domxref("DOMException")}} で、何が間違っていたのかを説明します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `FileError.INVALID_STATE_ERR`
  - : ファイルシステムの状態が許可していないため、処理を実行できませんでした。この例は、例えば、ファイルシステムのキャッシュ状態と実際の状態が異なる場合に発生する可能性があります。
- `FileError.NOT_FOUND_ERR`
  - : 指定したパスが得られませんでした。
- `FileError.SECURITY_ERR`
  - : セキュリティ上の制限により、親ディレクトリーの情報を取得することができません。

## 例

この例では、変数 `fileEntry` で指定したファイルの名前を `"newname.html"` に変更します。

```js
fileEntry.getParent(
  (parent) => {
    fileEntry.moveTo(parent, "newname.html", (updatedEntry) => {
      console.log(
        `ファイル ${fileEntry.name} は newname.html に改名されました。`,
      );
    });
  },
  (error) => {
    console.error(
      `エラーが発生: ${fileEntry.name} を newname.html に改名できませんでした。`,
    );
  },
);
```

これは、ファイルが現在置かれているディレクトリーを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクトを最初に取得することで実現します。次に、{{domxref("FileSystemEntry.moveTo", "moveTo()")}} を使用して、そのディレクトリー内のファイル名を変更します。

## プロミスの使用

現在のところ、このメソッドの {{jsxref("Promise")}} ベースのバージョンはありません。しかし、単純なヘルパー関数を作成して、このように適応させることはできます。

```js
function getParentPromise(entry) {
  return new Promise((resolve, reject) => {
    entry.getParent(resolve, reject);
  });
}
```

同様の手法は、ファイルとディレクトリー項目 API の他の場所でも見ることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
