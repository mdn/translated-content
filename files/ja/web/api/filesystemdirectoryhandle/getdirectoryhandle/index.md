---
title: FileSystemDirectoryHandle.getDirectoryHandle()
slug: Web/API/FileSystemDirectoryHandle/getDirectoryHandle
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemDirectoryHandle")}} インターフェイスの **`getDirectoryHandle()`** メソッドは、このメソッドが呼ばれたディレクトリーハンドル内の指定した名前のサブディレクトリーを表す {{domxref('FileSystemDirectoryHandle')}} を返します。

## 構文

```js-nolint
getDirectoryHandle(name)
getDirectoryHandle(name, options)
```

### 引数

- `name`
  - : 取得したいサブディレクトリーの {{domxref('FileSystemHandle.name')}} を表す文字列です。
- `options` {{optional_inline}}
  - : 取得するサブディレクトリーに関するオプションを持つオブジェクトで、省略可能です。以下のオプションがあります。
    - `create`
      - : {{jsxref("boolean")}} 値で、デフォルトは `false` です。`true` に設定すると、ディレクトリーが見つからない場合、指定した名前のディレクトリーが作成されて返されます。

### 返値

{{domxref('FileSystemDirectoryHandle')}} で解決する {{jsxref('Promise')}} を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionStatus')}} が `'granted'` でないとき投げられます。
- `TypeMismatchError` {{domxref("DOMException")}}
  - : 返されるエントリーがファイルで、ディレクトリーではないとき投げられます。
- `NotFoundError` {{domxref("DOMException")}}
  - : ディレクトリーが存在せず、`create` オプションが `false` に設定されているとき投げられます。

## 例

以下の例では、指定した名前のディレクトリーハンドルを返します。ディレクトリーが存在しない場合、作成されます。

```js
const dirName = "directoryToGetName";

// ディレクトリーハンドル 'currentDirHandle' があると仮定
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
