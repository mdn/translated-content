---
title: FileSystemFileHandle
slug: Web/API/FileSystemFileHandle
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

**`FileSystemFileHandle`** は{{domxref("File System API", "ファイルシステム API", "", "nocode")}} のインターフェイスは、ファイルシステムの項目のハンドルを表します。このインターフェイスには、{{domxref('window.showOpenFilePicker()')}} メソッドを通じてアクセスします。

注意するべき点として、読み書きの操作にはファイルアクセスの許可が必要ですが、この許可は同じオリジンの他のタブが開かれていない場合、ページを再読み込みすると消滅します。{{domxref("FileSystemHandle")}} インターフェイスの {{domxref("FileSystemHandle.queryPermission()", "queryPermission")}} メソッドを用いると、ファイルにアクセスする前に許可の状態を確かめることができます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親の {{DOMxRef("FileSystemHandle")}} からプロパティを継承します。_

## インスタンスメソッド

_親の {{DOMxRef("FileSystemHandle")}} からメソッドを継承します。_

- {{domxref('FileSystemFileHandle.getFile', 'getFile()')}}
  - : ハンドルが表すエントリーのディスク上での状態を表す {{domxref('File')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。
- {{domxref('FileSystemFileHandle.createSyncAccessHandle', 'createSyncAccessHandle()')}}
  - : ファイルを同期式で読み書きすることができる {{domxref('FileSystemSyncAccessHandle')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。
    このメソッドは同期式であるという性質によりパフォーマンス上有利ですが、それ用の [Web Workers](/ja/docs/Web/API/Web_Workers_API) の中でしか用いることができません。
- {{domxref('FileSystemFileHandle.createWritable', 'createWritable()')}}
  - : ファイルに書き込むことができる新しく作成された {{domxref('FileSystemWritableFileStream')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。

## 例

### ファイルを読み込む

以下の非同期関数は、ファイルピッカーを表示し、ファイルが選択されると `getFile()` メソッドを用いて内容を取得します。

```js
async function getTheFile() {
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

  // ファイルピッカーを開く
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  // ファイルの内容を得る
  const fileData = await fileHandle.getFile();
  return fileData;
}
```

### ファイルに書き込む

以下の非同期関数は、与えられた内容をファイルハンドルに書き込むことにより、ディスクに書き込みます。

```js
async function writeFile(fileHandle, contents) {
  // 書き込み先の FileSystemWritableFileStream を作成する
  const writable = await fileHandle.createWritable();

  // ファイルの内容をストリームに書き込む
  await writable.write(contents);

  // ファイルを閉じ、内容をディスクに書き込む
  await writable.close();
}
```

### 同期式でファイルを読み書きする

以下の非同期のイベントハンドラーは、Web Worker 内にあります。メインスレッドからのメッセージを受信すると、以下の動作をします。

- 同期式のファイルアクセスハンドルを作成します。
- ファイルのサイズを取得し、格納用の {{jsxref("ArrayBuffer")}} を作成します。
- ファイルの内容をそのバッファーに読み込みます。
- メッセージをエンコードし、ファイルの終端に書き込みます。
- 変更をディスクに保存し、アクセスハンドルを閉じます。

```js
onmessage = async (e) => {
  // メインスレッドからの処理対象のメッセージを取得する
  const message = e.data;

  // draft ファイルへのハンドルを取得する
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

  // 変更をディスクに保存する
  accessHandle.flush();

  // 完了したら、いつも FileSystemSyncAccessHandle を閉じる
  accessHandle.close();
};
```

> [!NOTE]
> 仕様書の以前のバージョンでは、{{domxref("FileSystemSyncAccessHandle.close()", "close()")}}・{{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}・{{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}・{{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} は誤って非同期メソッドとされていました。また、一部のブラウザーの古いバージョンでは、この方法で実装されています。しかし、これらのメソッドに対応する現在のブラウザーではすべて、同期メソッドとして実装されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
