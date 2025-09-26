---
title: FileSystemDirectoryHandle.resolve()
slug: Web/API/FileSystemDirectoryHandle/resolve
l10n:
  sourceCommit: 8d965687d4c38365ac355d693e0692b9d628cc05
---

{{securecontext_header}}{{APIRef("File System Access API")}}

{{domxref("FileSystemDirectoryHandle")}} インターフェイスの **`resolve()`** メソッドは、親ハンドルから指定の子エントリーへのディレクトリー名の {{jsxref('Array')}} を返します。指定された子エントリーが配列の最後の要素になります。

## 構文

```js-nolint
resolve(possibleDescendant)
```

### 引数

- `possibleDescendant`
  - : 相対パスを返す {{domxref('FileSystemHandle')}} です。

### 返値

文字列の {{jsxref('Array')}}、または `possibleDescendant` がこの {{domxref('FileSystemDirectoryHandle')}} の子孫でないときは `null` で解決する {{jsxref('Promise')}} を返します。

### 例外

例外は投げられません。

## 例

以下の非同期関数は、`resolve()` を用いて、選択されたファイルの指定のディレクトリーハンドルを基準とする相対パスを取得します。

```js
async function returnPathDirectories(directoryHandle) {
  // ファイルピッカーを開き、ファイルハンドルを得る
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // ユーザーがキャンセルしたか、ファイルを開くのに失敗した
    return;
  }

  // ハンドルがディレクトリーハンドル内に存在するかを確認する
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // ディレクトリーハンドル内に存在しない
  } else {
    // relativePath は相対パスを表す名前の配列
    for (const name of relativePaths) {
      // 各エントリーを記録する
      console.log(name);
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [File System Access API](/ja/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
