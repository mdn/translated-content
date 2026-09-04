---
title: Source map（ソースマップ）
slug: Glossary/Source_map
l10n:
  sourceCommit: 7d4f930455a349e3c73836500add3d4840c76f5d
---

**ソースマップ** は、ブラウザーが受信した縮小または変換されたコードと元の変更されていない形式をマッピングする {{Glossary("JSON")}} ファイル形式です。これにより、デバッグ時に元のコードを再構築して使用できるようになります。

ブラウザで実行されるコードは、開発者が作成した元のソースコードから何らかの形で変換されることがよくあります。これにはいくつかの理由があります。

- ソースファイルを結合および縮小することで、サーバーからのコード配信をより効率的にするため。
- 最新の機能を古いバージョンの同等の機能に変換することで、古いブラウザをサポートするため。
- {{Glossary("TypeScript")}} や [Sass](https://sass-lang.com/) など、ブラウザがサポートしていない言語を使用するため。

このような状況では、ブラウザがダウンロードした変換後の状態のソースよりも、元のソースをデバッグする方が直感的です。
ブラウザは、リソースの {{HTTPHeader("SourceMap")}} HTTP ヘッダー、または生成されたコード内の `sourceMappingURL` アノテーションを介してソースマップを検出します。

## 例

たとえば、Sass の次の SCSS 構文を考えてみましょう。

```scss
ul {
  list-style: none;
  li {
    display: inline;
  }
}
```

ビルドプロセス中に、 SCSS は CSS に変換されます。
ソースマップファイル `index.css.map` が生成され、末尾のコメントで CSS からリンクされます。

```css
ul {
  list-style: none;
}
ul li {
  display: inline;
}

/*# sourceMappingURL=index.css.map */
```

このマップファイルには、元の SCSS と生成された CSS のマッピングだけでなく、エンコードされた元の SCSS ソースコードも含まれています。ブラウザの CSS パーサーでは無視されますが、ブラウザの DevTools では使用されます。

```json
{
  "version": 3,
  "sourceRoot": "",
  "sources": ["index.scss"],
  "names": [],
  "mappings": "AAAA;EACC;;AACA;EACC",
  "file": "index.css"
}
```

ソースマップを使用すると、ブラウザの DevTools で元の SCSS ファイル内の特定の行にリンクし、ソースコードを表示できます。

![Firefox DevTools focused on the li element in the DOM inspector. The style panel shows transformed CSS without nesting and a link to the third line of the index.scss file.](inspector.png)

![Firefox DevTools with the index.scss file opened in the style editor. The editor is focused on the source code's third line in SCSS format with nesting.](style-editor.png)

## 関連情報

- [ソースマップ形式の仕様](https://tc39.es/ecma426/2024/)
- HTTP {{HTTPHeader("SourceMap")}} レスポンスヘッダー
- [Firefox 開発ツール: ソースマップの使用](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
