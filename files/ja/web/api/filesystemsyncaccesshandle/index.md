---
title: FileSystemSyncAccessHandle
slug: Web/API/FileSystemSyncAccessHandle
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("File System Access API", "File System Access API", "", "nocode")}} の **`FileSystemSyncAccessHandle`** インターフェイスは、ファイルシステムのエントリーを扱う同期式のハンドルを表します。ファイルの読み書きにおける同期式であるという性質は、[WebAssembly](/ja/docs/WebAssembly) などの非同期操作が高いオーバーヘッドに繋がる状況における重要なメソッドのパフォーマンスを高めることができます。

このクラスは、それ用の [Web Workers](/ja/docs/Web/API/Web_Workers_API) 内で[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_Access_API#%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%B3%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)にあるファイルを操作するときのみアクセスできます。

このインターフェイスは {{domxref('FileSystemFileHandle.createSyncAccessHandle()')}} メソッド経由でアクセスされます。

{{InheritanceDiagram}}

## インスタンスプロパティ

なし

## インスタンスメソッド

- {{domxref('FileSystemSyncAccessHandle.close', 'close()')}}
  - : 開かれている同期式ファイルハンドルを閉じます。これ以降操作をできなくし、ファイルハンドルに対応するファイルにかけた排他的ロックを解除します。
- {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}}
  - : ハンドルに対応するファイルに対し {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} メソッドにより行われたすべての変更をディスクに保存します。
- {{domxref('FileSystemSyncAccessHandle.getSize', 'getSize()')}}
  - : ハンドルに対応するファイルのサイズをバイト単位で返します。
- {{domxref('FileSystemSyncAccessHandle.read', 'read()')}}
  - : ハンドルに対応するファイルの内容を指定のバッファーに読み込みます。オフセットを指定することもできます。
- {{domxref('FileSystemSyncAccessHandle.truncate', 'truncate()')}}
  - : ハンドルに対応するファイルのサイズを指定のバイト数にします。
- {{domxref('FileSystemSyncAccessHandle.write', 'write()')}}
  - : 指定のバッファーの内容をハンドルに対応するファイルに書き込みます。オフセットを指定することもできます。

## 例

以下の非同期のイベントハンドラー関数は、Web Worker の中にあります。メインスレッドからメッセージを受信すると、以下の動作をします。

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

  // ファイルのサイズを得る
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
> 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}・{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}・{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}・{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は誤って非同期のメソッドとされていました。これは現在は[変更されています](https://github.com/whatwg/fs/issues/7)が、まだ非同期バージョンをサポートしているブラウザーもあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
