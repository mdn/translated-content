---
title: File System Access API
slug: Web/API/File_System_API
---

{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

File System Access API により、ファイルの読み込み、書き込み、管理ができます。

## 概念と使用法

この API を用いると、ユーザーのローカルデバイス上のファイルや、ユーザーがアクセス可能なネットワークファイルシステムを操作することができます。この API の基本機能として、ファイルの読み込み、ファイルの書き込み (保存)、ディレクトリー構造へのアクセスがあります。

ファイルやディレクトリーの操作のほとんどは、ハンドルを介して行います。親クラスの {{domxref('FileSystemHandle')}} の補助により {{domxref('FileSystemFileHandle')}} および {{domxref('FileSystemDirectoryHandle')}} の 2 個の子クラスが定義されており、それぞれファイルおよびディレクトリーの操作に用います。

ハンドルは、ユーザーのシステム上のファイルやディレクトリーを表します。まず、{{domxref('window.showOpenFilePicker()')}} や {{domxref('window.showDirectoryPicker()')}} などのメソッドを用いてユーザーにファイルピッカーまたはディレクトリーピッカーを表示し、ファイルやディレクトリーへのアクセス権を得ることができます。これらのメソッドが呼ばれると、ファイルピッカーが現れ、ユーザーがファイルまたはディレクトリーを選択します。この流れがうまくいくと、ハンドルが返されます。

以下の方法によりファイルハンドルへのアクセス権を得ることもできます。

- {{domxref('HTML Drag and Drop API', 'HTML Drag and Drop API', '', 'nocode')}} の {{domxref('DataTransferItem.getAsFileSystemHandle()')}} メソッド
- [File Handling API](https://developer.chrome.com/en/articles/file-handling/)

それぞれのハンドルが自身の機能を提供し、どっちを使っているかによって少し違いがあります。(詳細は、[インターフェイス](#%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9)の節を参照してください) ファイルのデータや、選択されたディレクトリーの情報 (子を含む) にアクセスできます。この API により、ウェブに欠けていた潜在的な機能への道が開きます。それでも、セキュリティは API の設計時に最大限考慮するべきことであり、ファイルやディレクトリーのデータへのアクセスはユーザーが特に許可しない限り禁止されています。

> **メモ:** API の機能を使う際に投げられる可能性がある例外は、仕様書での定義に沿って関連するページに一覧が載っています。しかし、API と下層のオペレーティングシステムの相互作用により、状況はより複雑になります。[仕様書でエラーの対応関係を一覧にする](https://github.com/whatwg/fs/issues/57)ための提案がなされており、ここに有用な関連情報があります。

> **メモ:** {{domxref("FileSystemHandle")}} をベースとするオブジェクトは、{{domxref("IndexedDB API", "IndexedDB", "", "nocode")}} のデータベースのインスタンスにシリアライズしたり、{{domxref("window.postMessage", "postMessage()")}} を介して転送したりできます。

### オリジンプライベートファイルシステム

[オリジンプライベートファイルシステム (OPFS)](https://fs.spec.whatwg.org/#origin-private-file-system) は、ページのオリジン固有のストレージのエンドポイントであり、パフォーマンスに高度に最適化された特別な種類のファイルへのアクセスを選択可能です。例えば、ファイルの内容を in-place で排他的に書き換えることができます。

OPFS へのファイルの保存は、({{domxref("IndexedDB API", "IndexedDB API", "", "nocode")}} などの) ブラウザーが提供する他のページのオリジンに固有のデータを保存する仕組みに似ています。すなわち、OPFS 内のファイルは、ピッカーを用いて選択されたファイルとは以下の点で異なります。

- OPFS 内のファイルへのアクセスには、許可の要求は必要ありません。
- サイトのデータを消去すると、OPFS も消去されます。
- OPFS は、ブラウザーが使う容量の制限の対象になります。

OPFS 内のファイルは、以下の 3 ステップで操作できます。

1. (ワーカーやメインスレッドで [`navigator.storage.getDirectory()`](/ja/docs/Web/API/Navigator/storage) で得られる) {{domxref("StorageManager.getDirectory()")}} メソッドを呼び、ディレクトリーとその中身にアクセスするための {{domxref("FileSystemDirectoryHandle")}} オブジェクトへの参照を得ます。これは、OPFS のルートを表します。
2. {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} メソッドを呼び、ディレクトリ内の特定のファイルのハンドルを表す {{domxref('FileSystemFileHandle')}} オブジェクトを得ます。
3. そのファイルハンドルで {{domxref('FileSystemFileHandle.createSyncAccessHandle', 'createSyncAccessHandle()')}} メソッドを呼び、ファイルの読み書きに利用できる {{domxref('FileSystemSyncAccessHandle')}} オブジェクトを得ます。これは、_同期式の_ 読み書き操作を行うための高効率なハンドルです。(他のハンドルの種類では非同期です) このクラスの同期式であるという性質は、([WebAssembly](/ja/docs/WebAssembly) などの) 非同期の操作が大きなオーバーヘッドに繋がる状況での使用を意図した、パフォーマンスの優位性をもたらします。なお、これはそれ用の [Web Workers](/ja/docs/Web/API/Web_Workers_API) 内でのみ使用可能です。

ブラウザーは通常 OPFS の内容をディスク上のどこかに保存して永続化することで実装しますが、これは内容にユーザーが簡単にアクセスできるようにすることを意図したものではありません。ブラウザーはファイルがあるように見せるかもしれない一方、データベースや他の任意のデータ構造に保存されているかも知れません。作成したファイルがハードディスク上のどこかに 1 対 1 対応で置かれていることを期待することはできません。

> **メモ:** {{domxref('FileSystemSyncAccessHandle.write()')}} による書き込みは in-place で行われます。すなわち、変更は writer に書き込まれると同時に実際の対応するファイルに書き込まれます。これは ({{domxref('FileSystemFileHandle.createWritable()')}} などの) この API で利用可能な書き込みのための他の仕組みでは成り立たず、書き込みストリームが閉じられるまで変更はディスクに書き込まれません。

### ファイルの保存

「保存」の機能があります。

- 非同期ハンドルでは、{{domxref('FileSystemWritableFileStream')}} インターフェイスを使います。保存したいデータを {{domxref('Blob')}}、{{jsxref("String")}} オブエクト、文字列リテラル、{{jsxref('ArrayBuffer', 'buffer')}} のいずれかの形式にしたら、ストリームを開いてデータをファイルに保存できます。既存のファイルも新しいファイルも保存先にできます。
- 同期式の {{domxref('FileSystemSyncAccessHandle')}} では、{{domxref('FileSystemSyncAccessHandle.write', 'write()')}} メソッドを用いて変更をファイルに書き込みます。特定のタイミングで変更をディスクに書き込みたい場合は、{{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}} を呼ぶことができます。(これを呼ばない場合、下層のオペレーティングシステムに任せて都合のいいときに処理させることができ、ほとんどの場合はこれでいいでしょう)

## インターフェイス

- {{domxref("FileSystemHandle")}}
  - : **`FileSystemHandle`** インターフェイスは、エントリーを表すオブジェクトです。複数のハンドルが同じエントリーを表すことがあります。ほとんどの場面では、`FileSystemHandle` を直接扱うことはなく、子インターフェイスの {{domxref('FileSystemFileHandle')}} や {{domxref('FileSystemDirectoryHandle')}} を扱うことになるでしょう。
- {{domxref("FileSystemFileHandle")}}
  - : ファイルシステムのエントリーを表すハンドルを提供します。
- {{domxref("FileSystemDirectoryHandle")}}
  - : ファイルシステムのディレクトリーを表すハンドルを提供します。
- {{domxref("FileSystemSyncAccessHandle")}}
  - : ディスク上の単一のファイルを in-place で操作する、ファイルシステムのエントリーへの同期式のハンドルを提供します。このファイルの読み書きを同期式で行える性質は、[WebAssembly](/ja/docs/WebAssembly) などの非同期操作が大きなオーバーヘッドに繋がる場面における重要なメソッドで処理効率を高めることを可能にします。このクラスは、それ用の [Web Workers](/ja/docs/Web/API/Web_Workers_API) 内で[オリジンプライベートファイルシステム](#%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%B3%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)内のファイルを扱う場合のみ使用可能です。
- {{domxref("FileSystemWritableFileStream")}}
  - : ディスク上の単一のファイルを操作する便利な関数が追加された {{domxref('WritableStream')}} です。

## 例

### ファイルにアクセスする

以下のコードで、ユーザーにファイルピッカーでファイルを選ばせることができます。

```js
async function getFile() {
  // ファイルピッカーを開き、結果を分解して最初のハンドルを取り出す
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

以下の非同期関数は、ファイルピッカーを開き、ファイルが選ばれたら `getFile()` メソッドを用いて内容を取得します。

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

async function getTheFile() {
  // ファイルピッカーを開き、結果を分解して最初のハンドルを取り出す
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // ファイルの内容を得る
  const fileData = await fileHandle.getFile();
}
```

### ディレクトリーにアクセスする

以下の例では、名前を指定したディレクトリーハンドルを返します。指定のディレクトリーが存在しない場合は、作成されます。

```js
const dirName = "directoryToGetName";

// 'currentDirHandle' というディレクトリーハンドルがあると仮定している
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

以下の非同期関数は、`resolve()` を用いて選ばれたファイルの指定のディレクトリーからの相対パスを求めます。

```js
async function returnPathDirectories(directoryHandle) {
  // ファイルピッカーを開き、ファイルハンドルを得る
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // ユーザーがキャンセルしたか、ファイルを開くのに失敗した
    return;
  }

  // ハンドルが手元のディレクトリーハンドルが表すディレクトリー内にあるかをチェックする
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // ディレクトリーハンドル内に無い
  } else {
    // relativePaths は、相対パスを表す名前の配列

    for (const name of relativePaths) {
      // 各エントリーを記録する
      console.log(name);
    }
  }
}
```

### ファイルに書き込む

以下の非同期関数は保存用のファイルピッカーを開き、これはファイルが選択されると {{domxref('FileSystemFileHandle')}} を返します。その後、{{domxref('FileSystemFileHandle.createWritable()')}} メソッドにより書き込み可能なストリームを生成します。

そして、ユーザー定義の {{domxref('Blob')}} をストリームに書き込み、続いてストリームを閉じます。

```js
async function saveFile() {
  // 新しいハンドルを生成する
  const newHandle = await window.showSaveFilePicker();

  // 書き込み先となる FileSystemWritableFileStream を生成する
  const writableStream = await newHandle.createWritable();

  // ファイルを書き込む
  await writableStream.write(imgBlob);

  // ファイルを閉じ、内容をディスクに書き込む
  await writableStream.close();
}
```

以下は、`write()` メソッドに渡すことができるオプションの異なる例です。

```js
// データのみを渡す (オプションなし)
writableStream.write(data);

// ストリームに指定の位置からデータを書き込む
writableStream.write({ type: "write", position, data });

// 現在のファイルカーソルの位置を指定の位置に更新する
writableStream.write({ type: "seek", position });

// ファイルを size バイトにリサイズする
writableStream.write({ type: "truncate", size });
```

### OPFS 内のファイルを同期式で読み書きする

この例では、[オリジンプライベートファイルシステム](#%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%B3%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0) 内のファイルを同期式で読み書きします。

以下の非同期のイベントハンドラー関数は、ウェブワーカー内にあります。メインスレッドからメッセージを受信した時、以下の処理をします。

- 同期式のファイルアクセスハンドルを生成する
- ファイルのサイズを取得し、格納するための {{jsxref("ArrayBuffer")}} を生成する
- ファイルの内容をバッファーに読み込む
- メッセージをエンコードし、ファイルの最後に書き込む
- 変更内容をデイスクに保存し、アクセスハンドルを閉じる

```js
onmessage = async (e) => {
  // メインスレッドから送られた処理対象のメッセージを取得する
  const message = e.data;

  // OPFS 内の draft ファイルのハンドルを得る
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 同期式のアクセスハンドルを得る
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // ファイルのサイズを得る
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

  // 完了したら、いつも FileSystemSyncAccessHandle を閉じる
  accessHandle.close();
};
```

> **メモ:** 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}・{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}・{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}・{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は人間工学に反して非同期メソッドとされていました。これは現在では[変更されています](https://github.com/whatwg/fs/issues/7)が、まだ非同期バージョンをサポートしているブラウザーもあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
