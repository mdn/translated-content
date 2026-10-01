---
title: FileSystemHandle
slug: Web/API/FileSystemHandle
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

**`FileSystemHandle`** は{{domxref('File System API', 'ファイルシステム API', '', 'nocode')}} のインターフェイスで、ファイルまたはディレクトリーの項目を表すオブジェクトです。複数のハンドルが同じ項目を表す可能性もあります。ほとんどの場面では、`FileSystemHandle` を直接扱う場面はほとんどなく、子インターフェイスの {{domxref('FileSystemFileHandle')}} や {{domxref('FileSystemDirectoryHandle')}} を扱います。

## FileSystemHandle がもととなるインターフェイス

以下が、`FileSystemHandle` インターフェイスがもととなっているインターフェイスの一覧です。

- {{domxref("FileSystemFileHandle")}}
  - : ファイル項目のハンドルを表します。
- {{domxref("FileSystemDirectoryHandle")}}
  - : ディレクトリー項目へのハンドルを提供します。

## インスタンスプロパティ

- {{domxref('FileSystemHandle.kind','kind')}} {{ReadOnlyInline}}
  - : 項目の種類を返します。対応する項目がファイルの時は `'file'`、そうでなければ `'directory'` です。
- {{domxref('FileSystemHandle.name', 'name')}} {{ReadOnlyInline}}
  - : 対応する項目の名前を返します。

## インスタンスメソッド

- {{domxref('FileSystemHandle.isSameEntry()', 'isSameEntry()')}}
  - : 2 つのハンドルを比較し、対応する項目 (ファイルまたはディレクトリー) が一致するかを調べます。
- {{domxref('FileSystemHandle.queryPermission()', 'queryPermission()')}} {{Experimental_Inline}}
  - : 現在のハンドルの現在の許可の状態を取得します。
- {{domxref('FileSystemHandle.remove', 'remove()')}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : 下層のファイルシステムからハンドルが表す項目を削除することを要求します。
- {{domxref('FileSystemHandle.requestPermission', 'requestPermission()')}} {{Experimental_Inline}}
  - : ファイルハンドルについて、読み取りまたは読み書きの許可を要求します。

## 例

### 種類を調べる

以下のコードでは、ユーザーにファイルピッカーでファイルを選択させ、返されたハンドルがファイルなのかディレクトリーなのかを調べます。

```js
// ファイルハンドルへの参照を保存する
let fileHandle;

async function getFile() {
  // ファイルピッカーを開く
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // ファイルの場合のコードを実行する
  } else if (fileHandle.kind === "directory") {
    // ディレクトリーの場合のコードを実行する
  }
}
```

### 許可を確認 / 要求する

以下の非同期関数は、ユーザーがファイルハンドルに読み取りまたは読み書きの許可を与えている場合 `true` を返します。許可が与えられていない場合、許可を要求します。

```js
// fileHandle は FileSystemFileHandle
// withWrite は書き込みなら true に設定される論理値

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // 既に許可が得られているかを確認し、許可が得られていれば true を返す
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // ファイル操作の許可を要求し、ユーザーが許可すれば true を返す
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // ユーザーが許可しなかったので、false を返す
  return false;
}
```

### 項目を比較する

以下の関数は、1 個の項目を項目の配列と比較し、一致する項目をすべて取り除いた新しい配列を返します。

```js
function removeMatches(fileEntry, entriesArr) {
  const newArr = entriesArr.filter((entry) => !fileEntry.isSameEntry(entry));

  return newArr;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
