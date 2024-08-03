---
title: "FileSystemEntry: name プロパティ"
short-title: name
slug: Web/API/FileSystemEntry/name
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("File and Directory Entries API")}}

**`name`** は {{domxref("FileSystemEntry")}} インターフェイスの読み取り専用プロパティで、この項目の名前を指定する文字列を返します。これは、親ディレクトリー内の項目（{{domxref("FileSystemEntry.fullPath", "fullPath")}} プロパティが示すパスの最後の部品）です。

## 値

項目の名前を示す文字列。

## 例

この例では `isFileWithExtension()` という関数を示しています。この関数は、指定した {{domxref("FileSystemEntry")}} がファイルであり、かつそのファイル名が指定された拡張子で終わっている場合に true を返します。

```js
function isFileWithExtension(entry, extension) {
  return entry.isFile && entry.name.endsWith(`.${extension}`);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemEntry.fullPath")}}
