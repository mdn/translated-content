---
title: "FileSystemSyncAccessHandle: read() メソッド"
short-title: read()
slug: Web/API/FileSystemSyncAccessHandle/read
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

**`read()`** は {{domxref("FileSystemSyncAccessHandle")}} インターフェイスのメソッドで、ハンドルに対応するファイルの内容を指定のバッファーに読み込みます。オフセットを指定することもできます。

## 構文

```js-nolint
read(buffer, options)
```

### 引数

- `buffer`
  - : ファイルの内容を読み込むバッファーを表す {{jsxref("ArrayBuffer")}} または（{{jsxref("DataView")}} などの）`ArrayBufferView` です。`ArrayBuffer` の内容を直接操作することはできないことに注意してください。かわりに、バッファーを特定のフォーマットで表す {{jsxref("Int8Array")}} などの型付き配列のうちの一つ、もしくは {{jsxref("DataView")}} のオブジェクトを作成し、それを用いてバッファーの内容を読み書きします。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオプションオブジェクトです。
    - `at`
      - : ファイルをどこから読み込むかのバイト単位のオフセットを表す数値です。

### 返値

ファイルから読み込んだバイト数を表す数値です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 対応するアクセスハンドルがすでに閉じられている場合に発生します。
- {{jsxref("TypeError")}}
  - : 基盤となるファイルシステムが、指定したファイルオフセットからの読み込みに対応していない場合に発生します。

## 例

以下の非同期のイベントハンドラー関数は、ウェブワーカーの中にあります。メインスレッドからメッセージを受信すると、以下の動作をします。

- 同期式アクセスハンドルを作成します。
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

> [!NOTE]
> 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}、{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}、{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}、{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は誤って非同期メソッドとして規定されていました。一部のブラウザーの古いバージョンでは、これらのメソッドがそのように実装されています。しかし、これらのメソッドに対応する現行のブラウザーでは、すべて同期メソッドとして実装されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access) <sup>(英語)</sup>
