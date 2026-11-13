---
title: FileSystemSyncAccessHandle
slug: Web/API/FileSystemSyncAccessHandle
l10n:
  sourceCommit: d65517535ae067fa876d5fae83626dff838e9796
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

**`FileSystemSyncAccessHandle`** は{{domxref("File System API", "ファイルシステム API", "", "nocode")}} のインターフェイスで、ファイルシステムの項目を同期的に操作するハンドルを表します。

このクラスには、専用[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)内からのみアクセスできます。これは、このクラスのメソッドがメインスレッドの実行をブロックしないようにするためです。対象となるのは、エンドユーザーには見えない[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_API/Origin_private_file_system)内のファイルです。

その結果、これらのメソッドは、ユーザーに表示されるファイルシステム内のファイルを操作するメソッドと同じセキュリティチェックの対象にならず、パフォーマンスが大幅に向上します。そのため、[SQLite](https://sqlite.org/wasm) <sup>(英語)</sup> データベースの変更など、大規模なファイル更新に適しています。

このインターフェイスは {{domxref('FileSystemFileHandle.createSyncAccessHandle()')}} メソッド経由でアクセスされます。

> [!NOTE]
> 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}、{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は誤って非同期メソッドとして規定されていました。一部のブラウザーの古いバージョンでは、これらのメソッドがそのように実装されています。しかし、これらのメソッドに対応する現行のブラウザーでは、すべて同期メソッドとして実装されています。

## インスタンスプロパティ

なし。

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

  // 下書きファイルのハンドルを取得する
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access) <sup>(英語)</sup>
