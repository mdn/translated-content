---
title: FileSystemDirectoryHandle.removeEntry()
slug: Web/API/FileSystemDirectoryHandle/removeEntry
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemDirectoryHandle")}} インターフェイスの **`removeEntry()`** メソッドは、指定の名前のファイルまたはディレクトリーがディレクトリーハンドル内に存在する場合、エントリーを削除しようとします。

## 構文

```js-nolint
removeEntry(name)
removeEntry(name, options)
```

### 引数

- `name`
  - : 削除したいエントリーの {{domxref('FileSystemHandle.name')}} を表す文字列です。
- `options` {{optional_inline}}

  - : オプションを持つオブジェクトで、省略可能です。以下のオプションがあります。

    - `recursive`
      - : {{jsxref("boolean")}} 値で、デフォルトは `false` です。`true` に設定すると、エントリーが再帰的に削除されます。

### 返値

`undefined` で解決する {{jsxref('Promise')}} を返します。

### 例外

- {{jsxref("TypeError")}}
  - : 名前が有効な文字列ではないか、ファイルシステムで許可されていない文字を含むとき投げられます。
- `NotAllowedError` {{domxref("DOMException")}}
  - : {{domxref('PermissionStatus')}} が `'granted'` でないとき投げられます。
- `InvalidModificationError` {{domxref("DOMException")}}
  - : `recursive` が `false` に設定されており、削除するエントリーが子を持つとき投げられます。
- `NotFoundError` {{domxref("DOMException")}}
  - : エントリー名が見つからないか一致しないとき投げられます。

## 例

以下の例では、ディレクトリーハンドル内のエントリーを削除します。

```js
const entryName = "entryToRemove";

// ディレクトリーハンドル 'currentDirHandle' があると仮定
currentDirHandle.removeEntry(entryName).then(() => {
  // 削除に成功したとき実行するコード
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
