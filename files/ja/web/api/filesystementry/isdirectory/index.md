---
title: "FileSystemEntry: isDirectory プロパティ"
short-title: isDirectory
slug: Web/API/FileSystemEntry/isDirectory
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

**`isDirectory`** は {{domxref("FileSystemEntry")}} インターフェイスの読み取り専用プロパティで、項目がディレクトリーを表している場合は `true`（{{domxref("FileSystemDirectoryEntry")}} であることを意味しています）、表していない場合は `false` です。

また、{{domxref("FileSystemEntry.isFile", "isFile")}} を使用して、項目がファイルであるかどうかを判断することもできます。

> [!WARNING]
> ディレクトリーでない項目はファイルであると想定してはいけません。
> 多くのオペレーティングシステムには他にもファイル記述子の型があります。必要に応じて `isDirectory` と `isFile` の両方を使用して、その項目が確実に作業する方法を知っているものであることを確認してください。

## 値

論理値で、{{domxref("FileSystemEntry")}} がディレクトリーであるかどうかを示します。

## 例

この例では、このプロパティを使用して、項目をディレクトリーとして処理するか、ファイルとして処理するかを決定する方法を示します。どちらの項目でもない場合は、適切なメッセージとともにエラーハンドラーが呼び出されます。

```js
if (entry.isDirectory) {
  processSubdirectory(entry);
} else if (entry.isFile) {
  processFile(entry);
} else {
  displayErrorMessage("対応していないファイルシステム項目が指定されました。");
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
- {{domxref("FileSystemEntry.isFile")}}
- {{domxref("FileSystemDirectoryEntry")}}
