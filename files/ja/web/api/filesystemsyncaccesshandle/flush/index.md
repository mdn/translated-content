---
title: "FileSystemSyncAccessHandle: flush() メソッド"
short-title: flush()
slug: Web/API/FileSystemSyncAccessHandle/flush
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

**`flush()`** は {{domxref("FileSystemSyncAccessHandle")}} インターフェイスのメソッドで、ハンドルに対応するファイルに {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} メソッドにより行われたすべての変更をディスクに保存します。

このメソッドを呼び出す必要があるのは、変更を特定のタイミングでディスクに反映させる必要がある場合だけです。そうでなければ、ほとんどの場合、下層のオペレーティングシステムが適切なタイミングで処理するよう任せておけば問題ありません。

> [!NOTE]
> 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、`flush()`、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}、{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は誤って非同期メソッドとして規定されていました。一部のブラウザーの古いバージョンでは、これらのメソッドがそのように実装されています。しかし、これらのメソッドに対応する現行のブラウザーでは、すべて同期メソッドとして実装されています。

## 構文

```js-nolint
flush()
```

### 引数

なし。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 関連するアクセスハンドルがすでに閉じられている場合に発生します。

## 例

以下の非同期のイベントハンドラーは、ウェブワーカーの中にあります。メインスレッドからのメッセージを受信すると、以下の動作をします。

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
