---
title: FileSystemWritableFileStream.write()
slug: Web/API/FileSystemWritableFileStream/write
l10n:
  sourceCommit: 5a6f98403115fb88a4a123caf35e85e06ac0e3ee
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemWritableFileStream")}} インターフェイスの **`write()`** メソッドは、このメソッドが呼ばれたファイルの現在のファイルカーソルオフセットにデータを書き込みます。

ストリームを閉じるまで、変更は実際のファイルには一切書き込まれません。
通常、変更はかわりに一時ファイルに書き込まれます。このメソッドは、ストリーム内で書き込む位置を移動したり、ファイルを切り詰めてファイル全体のバイト数を変更したりすることにも使用できます。

## 構文

```js-nolint
write(data)
```

### 引数

- `data`

  - : ファイルに書き込むデータを表す {{jsxref("ArrayBuffer")}}・{{jsxref("TypedArray")}}・
    {{jsxref("DataView")}}・{{domxref('Blob')}}・{{jsxref("String")}} オブジェクト・文字列リテラルのいずれかです。
    もしくは、以下のプロパティを持つオブジェクトです。

    - `type`
      - : `"write"`・`"seek"`・`"truncate"` のいずれかの文字列です。
    - `data`
      - : ファイルに書き込むデータです。{{jsxref("ArrayBuffer")}}・{{jsxref("TypedArray")}}・{{jsxref("DataView")}}・
        {{domxref('Blob')}}・{{jsxref("String")}} オブジェクト・文字列リテラルのいずれかです。
        `type` が `write` に設定されているときは必須です。
    - `position`
      - : `type` が `seek` のとき、現在のファイルカーソルの移動先のバイト位置を表します。
        `type` が `write` のときにも設定することができ、この場合は書き込みの開始位置を表します。
    - `size`
      - : ストリームが保持するべきバイト数を表す `unsigned long` 値です。
        `type` が `truncate` に設定されているときは必須です。

### 返値

`undefined` で解決する {{jsxref('Promise')}} を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionStatus')}} が `granted` でないとき返されます。
- {{jsxref("TypeError")}}
  - : `data` が `undefined` であるか、`position` または `size` が無効な値のとき返されます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : `position` が存在するバイト数より大きい値に設定されているとき返されます。

## 例

この非同期関数は「Save File」ピッカーを開きます。このピッカーは、ファイルが選択されると {{domxref('FileSystemFileHandle')}} を返します。
このハンドルから、{{domxref('FileSystemFileHandle.createWritable()')}} メソッドを用いて書き込み可能なストリームを作成します。

そして、ユーザーが指定した {{domxref('Blob')}} がストリームに書き込まれ、ストリームが閉じられます。

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

以下では、`write()` メソッドに渡すことができる異なるオプションの例を示します。

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

- [File System Access API](/ja/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
