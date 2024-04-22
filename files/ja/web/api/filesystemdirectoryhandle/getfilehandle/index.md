---
title: FileSystemDirectoryHandle.getFileHandle()
slug: Web/API/FileSystemDirectoryHandle/getFileHandle
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemDirectoryHandle")}} インターフェイスの **`getFileHandle()`** メソッドは、メソッドが呼ばれたディレクトリー内の指定した名前のファイルを表す {{domxref('FileSystemFileHandle')}} を返します。

## 構文

```js-nolint
getFileHandle(name)
getFileHandle(name, options)
```

### 引数

- `name`
  - : 取得したいファイルの {{domxref('FileSystemHandle.name')}} を表す文字列です。
- `options` {{optional_inline}}

  - : 以下のプロパティを持つオブジェクトです。

    - `create`
      - : {{jsxref('Boolean')}} です。デフォルトは `false` です。
        `true` に設定すると、ファイルが見つからない場合、指定した名前のファイルが作成されて返されます。

### 返値

{{domxref('FileSystemFileHandle')}} で解決する {{jsxref('Promise')}} を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionStatus')}} が `'granted'` でないとき投げられます。
- {{jsxref("TypeError")}}
  - : 指定された名前が有効な文字列でないか、ネイティブのファイルシステムで支障が出る文字を含むとき投げられます。
- `TypeMismatchError` {{domxref("DOMException")}}
  - : 指定されたエントリーがディレクトリーであってファイルではないとき投げられます。
- `NotFoundError` {{domxref("DOMException")}}
  - : ファイルが存在せず、`create` オプションが `false` に設定されているとき投げられます。

## 例

以下の例では、指定の名前のファイルハンドルを返します。ファイルが存在しない場合、作成されます。

```js
const fileName = "fileToGetName";

// ディレクトリーハンドル 'currentDirHandle' があると仮定
const fileHandle = currentDirHandle.getFileHandle(fileName, { create: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
