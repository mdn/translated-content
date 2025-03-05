---
title: "FileSystemEntry: toURL() メソッド"
short-title: toURL()
slug: Web/API/FileSystemEntry/toURL
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{APIRef("File and Directory Entry API")}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("FileSystemEntry")}} インターフェイスの **`toURL()`** メソッドは、ファイルシステム項目を識別するために使用することができる URL を格納した文字列を作成して返します。
これは `src` 属性や `href` 属性の値として使用することができる新しい URL スキーム `filesystem:` を公開することで行われます。

## 構文

```js-nolint
toURL()
toURL(mimeType)
```

### 引数

- `mimeType` {{optional_inline}}
  - : オプションの文字列で、ファイルを解釈するときに使用する MIME タイプを指定します。これは、ユーザーエージェントが自動的に認識しない型を持つファイルに対処するために使用することができます。この引数が省略された場合、ユーザーエージェントは標準アルゴリズムを使用してファイルを識別します。

### 返値

HTML コンテンツ内の文書参照として使用することができる URL を含む文字列、または URL を生成できない場合は空文字列（ファイルシステムの実装が `toURL()` をサポートしていない場合など）。

## 例

ウェブサイトやアプリで利用できるファイルシステムに画像ファイルに対応する {{domxref("FileSystemFileEntry")}} がある場合、`toURL()` を呼び出すと HTML の中で使用することができます。自分のサイトが `http://my-awesome-website.woot` にあり、一時ファイルシステムに `awesomesauce.jpg` という名前の画像ファイルがある場合、`toURL()` が返す URL は（ブラウザー実装によっては）`"filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg"` のようなものになるかもしれません。

これを使用するコードは次のようになるでしょう。

```js
let img = document.createElement("img");

img.src = imageFileEntry.toURL();
document.body.appendChild(img);
```

コードの前に述べたシナリオを想定すると、結果は次のような HTML が文書の終わりに追加されることになります。

```html
<img
  src="filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg" />
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ファイルとディレクトリー項目 API](/ja/docs/Web/API/File_and_Directory_Entries_API)
- [ファイルとディレクトリー項目 API の紹介](/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry.removeRecursively()")}}
