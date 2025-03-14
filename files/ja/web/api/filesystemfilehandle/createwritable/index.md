---
title: FileSystemFileHandle.createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemFileHandle")}} インターフェイスの **`createWritable()`** メソッドは、ファイルへの書き込みができる {{domxref('FileSystemWritableFileStream')}} を作成します。このメソッドは、作成されたストリームで解決する {{jsxref('Promise')}} を返します。

ストリームに対してなされたあらゆる変更は、ストリームを閉じるまで、ファイルハンドルが表すファイルには反映されません。これは、典型的には、データを一時ファイルに書き込み、書き込み可能なファイルストリームが閉じられてはじめてファイルハンドルが表すファイルを一時ファイルで置き換えることで実装されています。

## 構文

```js-nolint
createWritable()
```

### 引数

- FileSystemCreateWritableOptions

  - : メソッドに渡すオプションを表すオブジェクトです。以下のオプションがあります。

    - `keepExistingData`: `false` であるか指定されない場合、一時ファイルは空に初期化されます。
      そうでない場合、既存のファイルがまず一時ファイルにコピーされます。

### 返値

{{domxref('FileSystemWritableFileStream')}} オブジェクトで解決される {{jsxref('Promise')}} を返します。

### 例外

- NotAllowedError
  - : ハンドルの {{domxref('PermissionStatus.state')}} が `readwrite` モードで `'granted'` でないとき投げられます。

## 例

以下の非同期関数は、与えられた内容をファイルハンドルに書き込むことで、ディスクに書き込みます。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
