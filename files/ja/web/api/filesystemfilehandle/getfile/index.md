---
title: "FileSystemFileHandle: getFile() メソッド"
short-title: getFile()
slug: Web/API/FileSystemFileHandle/getFile
l10n:
  sourceCommit: e97f7ef524c21300c65b5089139de89a42bd79e2
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

**`getFile()`** は {{domxref("FileSystemFileHandle")}} インターフェイスのメソッドで、ハンドルが表す項目のディスク上の状態を表す {{domxref('File')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。

このメソッドが呼び出されたあと、ディスク上のファイルが変更されたり削除されたりすると、返された {{domxref('File')}} オブジェクトはおそらく読み込めなくなるでしょう。

## 構文

```js-nolint
getFile()
```

### 引数

なし。

### 返値

{{domxref('File')}} オブジェクトで解決する {{jsxref('Promise')}} を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : `read` モードの {{domxref('PermissionStatus.state')}} が `granted` でないとき発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : ファイルが見つからない場合に発生します。

## 例

以下の非同期関数は、ファイルピッカーを開き、ファイルが選択されると `getFile()` メソッドを用いて中身を取得します。

```js
async function getTheFile() {
  // ファイルピッカーを開く
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // ファイルの中身を取得する
  const fileData = await fileHandle.getFile();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
