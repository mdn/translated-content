---
title: "FileSystemSyncAccessHandle: close() メソッド"
short-title: close()
slug: Web/API/FileSystemSyncAccessHandle/close
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

**`close()`** は {{domxref("FileSystemSyncAccessHandle")}} インターフェイスのメソッドで、開かれている同期式ファイルハンドルを閉じます。これ以降操作はできなくなり、ファイルハンドルに対応するファイルにかけた排他的ロックを解除します。

> [!NOTE]
> 仕様書の以前のバージョンでは、`close()`、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}、{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は誤って非同期メソッドとして規定されていました。一部のブラウザーの古いバージョンでは、これらのメソッドがそのように実装されています。しかし、これらのメソッドに対応する現行のブラウザーでは、すべて同期メソッドとして実装されています。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

なし。

## 例

以下の非同期のイベントハンドラー関数は、ウェブワーカーの中にあります。メインスレッドからメッセージを受信すると、以下の動作をします。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access) <sup>(英語)</sup>
