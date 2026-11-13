---
title: FileSystemWritableFileStream
slug: Web/API/FileSystemWritableFileStream
l10n:
  sourceCommit: 5a6f98403115fb88a4a123caf35e85e06ac0e3ee
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref('File System Access API')}} の **`FileSystemWritableFileStream`** インターフェイスは、便利なメソッドが追加された {{domxref('WritableStream')}} オブジェクトで、ディスク上の単一のファイルを扱います。このインターフェイスには {{domxref('FileSystemFileHandle.createWritable()')}} メソッドを通じてアクセスします。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親の {{DOMxRef("WritableStream")}} からプロパティを継承します。_

## インスタンスメソッド

_親の {{DOMxRef("WritableStream")}} からメソッドを継承します。_

- {{domxref('FileSystemWritableFileStream.write')}}
  - : メソッドが呼ばれたファイルの現在のファイルカーソルオフセットにデータを書き込みます。
- {{domxref('FileSystemWritableFileStream.seek')}}
  - : 現在のファイルカーソルオフセットを指定の位置 (バイト単位) に移動します。
- {{domxref('FileSystemWritableFileStream.truncate')}}
  - : ストリームに対応するファイルのサイズを指定のバイト数にします。

## 例

この非同期関数は「Save File」ピッカーを開き、このピッカーはファイルが選択されると {{domxref('FileSystemFileHandle')}} を返します。そして、{{domxref('FileSystemFileHandle.createWritable()')}} メソッドを用いて、このハンドルから書き込み可能なストリームを作成します。

その後、ユーザーが指定した {{domxref('Blob')}} をストリームに書き込み、ストリームを閉じます。

```js
async function saveFile() {
  // 新しいハンドルを作成する
  const newHandle = await window.showSaveFilePicker();

  // 書き込み先の FileSystemWritableFileStream を作成する
  const writableStream = await newHandle.createWritable();

  // ファイルに書き込む
  await writableStream.write(imgBlob);

  // ファイルを閉じ、データをディスクに書き込む
  await writableStream.close();
}
```

以下では、`write()` メソッドに渡すことができる異なるオプションの例を示しています。

```js
// データだけを渡す (オプションなし)
writableStream.write(data);

// ストリームに指定の位置からデータを書き込む
writableStream.write({ type: "write", position, data });

// 現在のファイルカーソルオフセットを指定の位置に移動する
writableStream.write({ type: "seek", position });

// ファイルを size バイトにする
writableStream.write({ type: "truncate", size });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
