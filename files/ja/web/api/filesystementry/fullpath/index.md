---
title: "FileSystemEntry: fullPath プロパティ"
short-title: fullPath
slug: Web/API/FileSystemEntry/fullPath
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("File and Directory Entries API")}}

**`fullPath`** は {{domxref("FileSystemEntry")}} インターフェイスの読み取り専用プロパティで、ファイルシステムのルートから項目が表すファイルまでの完全な絶対パスを指定する文字列を返します。

これは、ルートディレクトリーからの相対パスと考えることもでき、"/" を先頭につけて絶対パスとすることもできます。

## 値

文字列で、項目のフルパスを示します。

## 例

この例は、ファイルシステムを指定して呼び出される関数を示しています。この関数は、`data.json` という名前のファイルに対して {{domxref("FileSystemFileEntry")}} を取得し、そのフルパスを返します。

```js
function gotFileSystem(fs) {
  let path = "";

  fs.root.getFile(
    "data.json",
    { create: true, exclusive: true },
    (entry) => {
      path = fullPath;
    },
    handleError(error),
  );

  return path;
}
```

ファイルのフルパスが`"/data.json"`であることは、私たち自身が見ているので、明らかに、これは多少作為的なものですが、それを知らないシナリオのための概念です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
