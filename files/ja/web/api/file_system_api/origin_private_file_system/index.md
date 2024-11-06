---
title: オリジンプライベートファイルシステム
slug: Web/API/File_System_API/Origin_private_file_system
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}

オリジンプライベートファイルシステム (OPFS) は、[ファイルシステム API](/ja/docs/Web/API/File_System_API) の一部として提供されるストレージエンドポイントです。これは、パフォーマンスのために高度に最適化され、その内容へのその場での書き込みアクセスを提供する特別な種類のファイルへのアクセスを提供します。

## ファイルシステムアクセス API を使用したファイルでの作業

[ファイルシステムアクセス API](https://wicg.github.io/file-system-access/) は、[ファイルシステム API](/ja/docs/Web/API/File_System_API) を拡張したもので、は、ピッカーメソッドを使ったファイルへのアクセスを提供します。例えば、

1. {{domxref("Window.showOpenFilePicker()")}} では、ユーザーがアクセスするファイルを選択することができ、その結果、 {{domxref("FileSystemFileHandle")}} オブジェクトが返されます。
2. {{domxref("FileSystemFileHandle.getFile()")}} を呼び出してファイルの内容にアクセスし、 {{domxref("FileSystemFileHandle.createWritable()")}} / {{domxref("FileSystemWritableFileStream.write()")}} を使用して内容を変更します。
3. {{domxref("FileSystemHandle.requestPermission()", "FileSystemHandle.requestPermission({mode:'readwrite'})")}} は、変更を保存する許可をユーザーにリクエストするために使用されます。
4. ユーザーが許可リクエストを受け入れると、変更は元のファイルに保存されます。

これは機能しますが、いくつかの制限があります。これらの変更はユーザーから見えるファイルシステムに対して行われるため、悪意のあるコンテンツがファイルシステムに書き込まれないように、多くのセキュリティチェックが行われています（例えば、 Chrome の[セーフブラウジング](https://developers.google.com/safe-browsing)）。これらの書き込みはその場で行われるのではなく、一時ファイルを使用します。すべてのセキュリティチェックに合格しない限り、元のファイルは変更されません。

その結果、これらの操作はかなり遅くなります。小さなテキストを更新するときにはそれほど気になりませんが、 [SQLite](https://www.sqlite.org/wasm) データベースの変更など、より重要で大規模なファイルを更新するときにはパフォーマンスが低下します。

## OPFS はそのような問題をどのように解決するのか

OPFSは低レベルのバイト単位のファイルアクセスを提供し、ページのオリジンには非公開でユーザーには見えません。そのため、一連のセキュリティチェックや 権限付与を必要とせず、ファイルシステムアクセス API を呼び出すよりも高速です。また、メインスレッドをブロックしないようにウェブワーカーの中だけで実行できる一連の同期呼び出しも利用できます（他のファイルシステム API 呼び出しは非同期です）。

OPFS がユーザーから見えるファイルシステムと異なる点をまとめると、次のようになります。

- OPFS は、他のオリジン分割されたストレージメカニズム（{{domxref("IndexedDB API", "IndexedDB API", "", "nocode")}} など）と同様に、[ブラウザーストレージ容量制限](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)の対象となります。 OPFS が使用しているストレージ空間の大きさは {{domxref("StorageManager.estimate()", "navigator.storage.estimate()")}} で知ることができます。
- サイトのストレージデータをクリアすると、 OPFS が削除されます。
- OPFS のファイルにアクセスするために、その許可のプロンプトやセキュリティチェックは要求されません。
- ブラウザーは OPFS の内容をディスクのどこかに保持しますが、作成したファイルを 1 対 1 で照合して探すことはできません。 OPFS はユーザーから見えることを意図していません。

## OPFS にはどのようにアクセスするのか

最初の OPFS にアクセスするには、 {{domxref("StorageManager.getDirectory()", "navigator.storage.getDirectory()")}} メソッドを呼び出します。これは、 OPFS のルートを表す {{domxref("FileSystemDirectoryHandle")}} オブジェクトへの参照を返します。

## メインスレッドからの OPFS の操作

メインスレッドから OPFS にアクセスする場合は、非同期の {{jsxref("Promise")}} ベースの API を使用します。ファイル（{{domxref("FileSystemFileHandle")}}）とディレクトリー（{{domxref("FileSystemDirectoryHandle")}}）のハンドルにアクセスするには、 {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} と {{domxref("FileSystemDirectoryHandle.getDirectoryHandle()")}} をそれぞれ、 OPFS ルート（および作成された子ディレクトリー）を表す {{domxref("FileSystemDirectoryHandle")}} オブジェクト上で呼び出します。

> [!NOTE]
> 上記のメソッドに `{ create: true }` を渡すと、ファイルやフォルダー内が存在しない場合に作成されます。

```js
// ファイルとフォルダー内の階層を作成
const fileHandle = await opfsRoot.getFileHandle("my first file", {
  create: true,
});
const directoryHandle = await opfsRoot.getDirectoryHandle("my first folder", {
  create: true,
});
const nestedFileHandle = await directoryHandle.getFileHandle(
  "my first nested file",
  { create: true },
);
const nestedDirectoryHandle = await directoryHandle.getDirectoryHandle(
  "my first nested folder",
  { create: true },
);

// 既存のファイル名やフォルダー内にアクセス
const existingFileHandle = await opfsRoot.getFileHandle("my first file");
const existingDirectoryHandle =
  await opfsRoot.getDirectoryHandle("my first folder");
```

### ファイルの読み取り

1. {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} を呼び出すと {{domxref("FileSystemFileHandle")}} オブジェクトが返ります。
2. {{domxref("FileSystemFileHandle.getFile()")}} を呼び出すと {{domxref("File")}} オブジェクトが返ります。これは {{domxref("Blob")}} の特化した型なので、他の `Blob` と同じように操作できます。例えば、 {{domxref("Blob.text()")}} で直接テキストコンテンツにアクセスすることができます。

### ファイルへの書き込み

1. {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} を呼び出すと {{domxref("FileSystemFileHandle")}} オブジェクトが返ります。
2. {{domxref("FileSystemFileHandle.createWritable()")}} を呼び出すと {{domxref("FileSystemWritableFileStream")}} オブジェクトが返ります。これは {{domxref("WritableStream")}} の特化した型です。
3. {{domxref("FileSystemWritableFilestream.write()")}} を呼び出して内容を書き込みます。
4. {{domxref("WritableStream.close()")}} を使用してストリームを閉じます。

### ファイルまたはフォルダーの削除

親ディレクトリーで {{domxref("FileSystemDirectoryHandle.removeEntry()")}} を呼び出して、削除したい項目の名前を渡します。

```js
directoryHandle.removeEntry("my first nested file");
```

また、 {{domxref("FileSystemHandle.remove()")}} を {{domxref("FileSystemFileHandle")}} または {{domxref("FileSystemDirectoryHandle")}} で呼び出すこともできます。すべてのサブフォルダーを含めてフォルダー内を削除するには、 `{ recursive: true }` オプションを渡してください。

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

以下は、 OPFS 全体をクリアする簡単な方法です：

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### フォルダーの内容の一覧出力

{{domxref("FileSystemDirectoryHandle")}} は[非同期イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)です。そのため、 [`for await…of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループや、[`entries()`](/ja/docs/Web/API/FileSystemDirectoryHandle/entries), [`values()`](/ja/docs/Web/API/FileSystemDirectoryHandle/entries), [`keys()`](/ja/docs/Web/API/FileSystemDirectoryHandle/entries) などの標準メソッドで反復処理することができます。

例えば次のようにします。

```js
for await (let [name, handle] of directoryHandle) {
}
for await (let [name, handle] of directoryHandle.entries()) {
}
for await (let handle of directoryHandle.values()) {
}
for await (let name of directoryHandle.keys()) {
}
```

## ウェブワーカーにおける OPFS の操作

ウェブ ワーカーはメインスレッドをブロックしないので、このコンテキストで同期ファイル アクセス API を使用することができます。同期 API はプロミスを扱う必要がないため、より高速です。

同期的にファイルにアクセスするには、 {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}} を通常の {{domxref("FileSystemFileHandle")}} に対して呼び出します。

> [!NOTE]
> 名前に "Sync" とあるにもかかわらず、`createSyncAccessHandle()` メソッド自体は非同期です。

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("my highspeed file.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

返される {{domxref("FileSystemSyncAccessHandle")}} で利用できる同期メソッドがいくつかあります。

- {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}: ファイルのサイズをバイト数で返します。
- {{domxref("FileSystemSyncAccessHandle.write", "write()")}}: バッファーの内容を指定されたオフセットを指定してファイルに書き込み、書き込んだバイト数を返します。返された書き込みバイト数を調べることで、呼び出し側はエラーや部分的な書き込みを検出して処理することができます。
- {{domxref("FileSystemSyncAccessHandle.read", "read()")}}: オプションで指定されたオフセットで、ファイルの内容をバッファーに読み込みます。
- {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}}: 指定されたサイズにファイルをリサイズします。
- {{domxref("FileSystemSyncAccessHandle.flush", "flush()")}}: `write()` によって行われたすべての変更がファイルの内容に格納されていることを保証します。
- {{domxref("FileSystemSyncAccessHandle.close", "close()")}}: アクセスハンドルを閉じます。

この例では、上記のメソッドをすべて使用しています。

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("fast", { create: true });
const accessHandle = await fileHandle.createSyncAccessHandle();

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

// ファイルのサイズのための変数の初期化
let size;
// ファイルの現在のサイズ。初期値は `0`。
size = accessHandle.getSize();
// ファイルに書き込むためにコンテンツをエンコード
const content = textEncoder.encode("Some text");
// ファイルの先頭にコンテンツを書き込む
accessHandle.write(content, { at: size });
// 変更をフラッシュする
accessHandle.flush();
// ファイルの現在のサイズ、これで `9`（"Some text" の長さ）
size = accessHandle.getSize();

// ファイルに書き込むために、さらにコンテンツをエンコード
const moreContent = textEncoder.encode("More content");
// ファイルの最後にコンテンツを書き込む
accessHandle.write(moreContent, { at: size });
// 変更をフラッシュする
accessHandle.flush();
// これで現在のファイルサイズは `21`（"Some textMore content" の長さ）となる
size = accessHandle.getSize();

// ファイルの長さのデータビューを準備
const dataView = new DataView(new ArrayBuffer(size));

// ファイル全体をデータビューに読み込む
accessHandle.read(dataView);
// `"Some textMore content"` とログ出力
console.log(textDecoder.decode(dataView));

// オフセット 9 から始め、データビューに読み込む。
accessHandle.read(dataView, { at: 9 });
// `"More content"` とログ出力
console.log(textDecoder.decode(dataView));

// ファイルを 4 バイトで切り捨てる。
accessHandle.truncate(4);
```

## 関連情報

- [The origin private file system](https://web.dev/articles/origin-private-file-system) (web.dev)
