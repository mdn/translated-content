---
title: FileSystemHandle
slug: Web/API/FileSystemHandle
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref('File System Access API')}} の **`FileSystemHandle`** インターフェイスは、ファイルまたはディレクトリーのエントリーを表すオブジェクトです。複数のハンドルが同じエントリーを表す可能性もあります。`FileSystemHandle` を直接扱う場面はほとんどなく、子インターフェイスの {{domxref('FileSystemFileHandle')}} や {{domxref('FileSystemDirectoryHandle')}} を扱うでしょう。

## FileSystemHandle がもととなるインターフェイス

以下が、`FileSystemHandle` インターフェイスがもととなっているインターフェイスの一覧です。

- {{domxref("FileSystemFileHandle")}}
  - : ファイルエントリーのハンドルを表します。
- {{domxref("FileSystemDirectoryHandle")}}
  - : ディレクトリーエントリーへのハンドルを提供します。

## インスタンスプロパティ

- {{domxref('FileSystemHandle.kind','kind')}} {{ReadOnlyInline}}
  - : エントリーの種類を返します。`'file'` (対応するエントリーがファイルのとき) または `'directory'` です。
- {{domxref('FileSystemHandle.name', 'name')}} {{ReadOnlyInline}}
  - : 対応するエントリーの名前を返します。

## インスタンスメソッド

- {{domxref('FileSystemHandle.isSameEntry()', 'isSameEntry()')}}
  - : 2 個の{{domxref("FileSystemHandle", "ハンドル")}}を比較し、対応するエントリー (ファイルまたはディレクトリー) が一致するかを調べます。
- {{domxref('FileSystemHandle.queryPermission()', 'queryPermission()')}} {{Experimental_Inline}}
  - : 現在のハンドルの現在の許可の状態を取得します。
- {{domxref('FileSystemHandle.remove', 'remove()')}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : 下層のファイルシステムからハンドルが表すエントリーを除去することを要求します。
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
// withWrite は書き込みなら true に設定される boolean

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

### エントリーを比較する

以下の関数は、1 個のエントリーをエントリーの配列と比較し、一致するエントリーをすべて取り除いた新しい配列を返します。

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

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
