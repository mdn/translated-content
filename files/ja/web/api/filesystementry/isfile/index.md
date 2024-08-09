---
title: "FileSystemEntry: isFile プロパティ"
short-title: isFile
slug: Web/API/FileSystemEntry/isFile
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("File and Directory Entries API")}}

**`isFile`** は {{domxref("FileSystemEntry")}} インターフェイスの読み取り専用プロパティで、項目がファイルを表している場合は `true`（{{domxref("FileSystemFileEntry")}} であることを意味しています）、表していない場合は `false` です。

また、{{domxref("FileSystemEntry.isDirectory", "isDirectory")}} を使用して、項目がディレクトリーであるかどうかを判断することもできます。

> [!WARNING]
> ファイルでない項目はディレクトリーであると想定してはいけません。
> 多くのオペレーティングシステムには他にもファイル記述子の型があります。必要に応じて `isDirectory` と `isFile` の両方を使用して、その項目が確実に作業する方法を知っているものであることを確認してください。

## 値

論理値で、{{domxref("FileSystemEntry")}} がファイルであるかどうかを示します。

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
- {{domxref("FileSystemEntry.isDirectory")}}
- {{domxref("FileSystemFileEntry")}}
