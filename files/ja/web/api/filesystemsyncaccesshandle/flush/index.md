---
title: FileSystemSyncAccessHandle.flush()
slug: Web/API/FileSystemSyncAccessHandle/flush
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemSyncAccessHandle")}} インターフェイスの **`flush()`** メソッドは、ハンドルに対応するファイルに {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} メソッドにより行われたすべての変更をディスクに保存します。

心に留めておくべきこととして、このメソッドを呼ぶ必要があるのは変更のディスクへの書き込みを特定のタイミングで行う必要があるときのみです。そうでなければ、下層の OS に任せて都合のいいときに処理させることができ、ほとんどの場合はこれでいいでしょう。

## 構文

```js-nolint
flush()
```

### 引数

なし

### 返値

`undefined` で解決する {{jsxref('Promise')}} を返します。

### 例外

なし

## 例

以下の非同期のイベントハンドラーは、Web Worker の中にあります。メインスレッドからのメッセージを受信すると、以下の動作をします。

- 同期式ファイルアクセスハンドルを作成します。
- ファイルのサイズを取得し、格納用の {{jsxref("ArrayBuffer")}} を作成します。
- ファイルの内容をバッファーに読み込みます。
- メッセージをエンコードし、ファイルの終端に書き込みます。
- 変更をディスクに書き込み、アクセスハンドルを閉じます。

```js
onmessage = async (e) => {
  // メインスクリプトからの処理対象のメッセージを取得する
  const message = e.data;

  // draft ファイルのハンドルを取得する
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 同期式アクセスハンドルを取得する
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // ファイルのサイズを取得する
  const fileSize = accessHandle.getSize();
  // ファイルの内容をバッファーに読み込む
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // メッセージをファイルの終端に書き込む
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // 変更をディスクに書き込む
  accessHandle.flush();

  // 完了したら、常に FileSystemSyncAccessHandle を閉じる
  accessHandle.close();
};
```

> [!NOTE]
> 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}・`flush()`・{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}・{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は誤って非同期メソッドとされていました。これは現在では[変更されています](https://github.com/whatwg/fs/issues/7)が、まだ非同期バージョンをサポートしているブラウザーもあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
