---
title: Viewport (ビューポート)
slug: Glossary/Viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

コンピューターグラフィックにおいて、**ビューポート**は、現在表示されている多角形（通常は長方形）の領域を表します。

ウェブブラウザーの用語としては、閲覧中の文書のうち、ブラウザーのウィンドウの中（または、文書が全画面モードで表示されている場合は画面上）で現在見えている部分を指します。ビューポートの外にあるコンテンツは、スクロールによってビューの中に移動するまで画面上では見えません。

ビューポートの中で現在見えている部分を **{{Glossary("visual viewport", "視覚的ビューポート")}}**と呼んでいます。これは、ユーザーがピンチ操作により拡大縮小しているときなど、レイアウトビューポートより小さくなることがあります。{{Glossary("layout viewport", "レイアウトビューポート")}}は変わりませんが、視覚的ビューポートはより小さくなります。

{{htmlelement("iframe")}}、{{svgelement("svg")}}、{{htmlelement("object")}} 要素の視覚的ビューポートは、親文書のサイズではなく、それぞれの要素の内側の幅と高さのサイズとなります。要素内でレンダリングされるコンテンツについては、視覚的ビューポートとレイアウトビューポートは同一となります。

## 関連情報

- {{Glossary("Visual viewport", "視覚的ビューポート")}}
{{Glossary("layout viewport", "レイアウトビューポート")}}
- [ビューポートの概念](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM ビュー](/ja/docs/Web/CSS/Guides/CSSOM_view) モジュール
- [CSSOM ビュー API](/ja/docs/Web/API/CSSOM_view_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) (Wikipedia)
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
