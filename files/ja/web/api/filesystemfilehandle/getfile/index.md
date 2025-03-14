---
title: FileSystemFileHandle.getFile()
slug: Web/API/FileSystemFileHandle/getFile
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemFileHandle")}} インターフェイスの **`getFile()`** メソッドは、ハンドルが表すエントリーのディスク上の状態を表す {{domxref('File')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。

このメソッドが呼び出されたあと、ディスク上のファイルが変更されたり削除されたりすると、返された {{domxref('File')}} オブジェクトはおそらく読み込めなくなるでしょう。

## 構文

```js-nolint
getFile()
```

### 引数

なし

### 返値

{{domxref('File')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。

### 例

- NotAllowedError
  - : 読み込みモードの {{domxref('PermissionStatus.state')}} が `granted` でないとき投げられます。

## 例

以下の非同期関数は、ファイルピッカーを開き、ファイルが選択されると `getFile()` メソッドを用いて中身を取得します。

```js
async function getTheFile() {
  // ファイルピッカーを開く
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // ファイルの中身を取得する
  const fileData = await fileHandle.getFile();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
