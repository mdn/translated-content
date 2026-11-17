---
title: "FileSystemSyncAccessHandle: write() メソッド"
short-title: write()
slug: Web/API/FileSystemSyncAccessHandle/write
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

**`write()`** は {{domxref("FileSystemSyncAccessHandle")}} インターフェイスのメソッドで、指定したバッファーの内容をハンドルに対応するファイルに書き込みます。オフセットを指定することもできます。

エンドユーザーには見えない[オリジンプライベートファイルシステム](/ja/docs/Web/API/File_System_API/Origin_private_file_system)内のファイルは、ユーザーに見えるファイルシステム内のファイルに対する操作と同じセキュリティチェックの対象になりません。そのため、`FileSystemSyncAccessHandle.write()` による書き込みはパフォーマンスが大幅に向上します。このような特性により、[SQLite](https://sqlite.org/wasm)<sup>(英語)</sup> データベースの変更など、大規模なファイル更新に適しています。

## 構文

```js-nolint
write(buffer, options)
```

### 引数

- `buffer`
  - : ファイルに書き込むバッファーを表す {{jsxref("ArrayBuffer")}} または（{{jsxref("DataView")}} などの）`ArrayBufferView` です。
- `options` {{optional_inline}}
  - : 以下のプロパティを含むオプションオブジェクトです。
    - `at`
      - : バッファーを書き込むファイルの先頭からのバイト単位のオフセットを表す数値です。

> [!NOTE]
> `ArrayBuffer` の内容を直接操作することはできません。代わりに、バッファーを特定の形式で表す {{jsxref("Int8Array")}} などの型付き配列オブジェクト、または {{jsxref("DataView")}} オブジェクトを作成し、それを用いてバッファーの内容を読み書きします。

### 返値

ファイルに書き込まれたバイト数を表す数値です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 対応するアクセスハンドルがすでに閉じられている場合、またはファイルのバイナリーデータの変更が完全に失敗した場合に発生します。
- {{domxref("QuotaExceededError")}}
  - : 書き込みによるデータ容量の増加がブラウザーの[ストレージ制限](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)を超える場合に発生します。
- {{jsxref("TypeError")}}
  - : 基盤となるファイルシステムが、指定されたファイルオフセットからの書き込みに対応していない場合に発生します。

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
  // 同期式のアクセスハンドルを取得する
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
