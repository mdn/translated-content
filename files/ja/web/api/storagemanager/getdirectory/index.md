---
title: "StorageManager: getDirectory() メソッド"
short-title: getDirectory()
slug: Web/API/StorageManager/getDirectory
l10n:
  sourceCommit: 7fad2348ff4e117859918bf1b7a16c10f041f3a5
---

{{securecontext_header}}{{APIRef("File System API")}} {{AvailableInWorkers}}

**`getDirectory()`** は {{domxref("StorageManager")}} インターフェイスのメソッドで、[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) に保存されたディレクトリーとその中身へのアクセスを可能にする {{domxref("FileSystemDirectoryHandle")}} オブジェクトへの参照を取得するために使用されます。

## 構文

```js-nolint
getDirectory()
```

### 引数

なし。

### 返値

{{domxref("FileSystemDirectoryHandle")}} のオブジェクトで解決される {{jsxref('Promise')}} を返します。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : ストレージやメモリーの制約などの理由で、ブラウザーがリクエストされたディレクトリーをローカル OPFS に対応づけできない場合に発生します。また、一部のブラウザーでは、プライベートブラウジングモードで `getDirectory()` が呼び出された場合にも発生します。
- `UnknownError` {{domxref("DOMException")}}
  - : プライベートブラウジングモードで `getDirectory()` が呼び出されると、一部のブラウザーでこのエラーが発生することがあります。

## 例

以下の非同期イベントハンドラー関数は、ウェブワーカーの中にあります。メインスレッドからメッセージを受信すると、以下の動作をします。

1. `getDirectory()` を用いて OPFS のルートを表す {{domxref("FileSystemDirectoryHandle")}} を取得し、変数 `root` に保存します。
2. {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} を用いてファイルハンドルを取得します。
3. {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}} を用いて同期式ファイルアクセスハンドルを作成します。
4. ファイルのサイズを取得し、格納するための {{jsxref("ArrayBuffer")}} を作成します。
5. ファイルの読み書きをします。
6. 変更をディスクに保存し、同期式アクセスハンドルを閉じます。

```js
onmessage = async (e) => {
  // メインスクリプトから送られた、処理対象のメッセージを取得する
  const message = e.data;

  // ファイル draft のハンドルを取得する
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 同期式アクセスハンドルを取得する
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // ファイルのサイズを取得する
  const fileSize = accessHandle.getSize();
  // ファイルの内容をバッファーに読み込む
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // メッセージをファイルの最後に書き込む
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // 変更をディスクに保存する
  accessHandle.flush();

  // 完了したら、常に FileSystemSyncAccessHandle を閉じる
  accessHandle.close();
};
```

> [!NOTE]
> 仕様の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}・{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}・{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}・{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は、誤って非同期メソッドとして指定されており、一部のブラウザーの旧バージョンではこの方法で実装されています。しかし、これらのメソッドに対応している現在のすべてのブラウザーでは、同期メソッドとして実装されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("StorageManager")}}
- {{domxref("Navigator.storage")}}
- {{domxref("WorkerNavigator.storage")}}
- {{domxref("FileSystemDirectoryHandle")}}
