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

## Example

For example, consider this SCSS syntax of Sass:

```scss
ul {
  list-style: none;
  li {
    display: inline;
  }
}
```

During the build process, the SCSS is transformed into CSS.
A source map file `index.css.map` is generated and linked to from the CSS in a comment at the end:

```css
ul {
  list-style: none;
}
ul li {
  display: inline;
}

/*# sourceMappingURL=index.css.map */
```

This map file contains not only mappings between the original SCSS and the generated CSS but also the original SCSS source code in encoded form. It's ignored by the browser's CSS parser but used by browser's DevTools:

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

The source map allows the browser's DevTools to link to specific lines in the original SCSS file and display the source code:

![Firefox DevTools focused on the li element in the DOM inspector. The style panel shows transformed CSS without nesting and a link to the third line of the index.scss file.](inspector.png)

![Firefox DevTools with the index.scss file opened in the style editor. The editor is focused on the source code's third line in SCSS format with nesting.](style-editor.png)

## See also

- [Source map format specification](https://tc39.es/ecma426/2024/)
- HTTP {{HTTPHeader("SourceMap")}} response header
- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
