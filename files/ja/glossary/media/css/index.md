---
title: Media (CSS)
slug: Glossary/Media/CSS
---

{{Glossary("CSS")}} (Cascading Style Sheets) の文脈において、**_メディア_**という用語は{{Glossary("rendering engine", "レンダリングエンジン")}}によって描画される文書の出力先を参照します。これはふつうは端末の画面ですが、プリンターや読み上げ装置、点字ディスプレイ、あるいはそのほかの装置の可能性もあります。

CSS には、閲覧者の端末のメディアの**種類** (画面や印刷など) やメディアの**能力** (幅、解像度、その他の値など) に応じて、文書のスタイルを微調整したり、異なるスタイルを提供したりすることができる機能がいくつかあります。

## 関連項目

### 一般知識

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)

### 技術リファレンス

- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries)
  - : メディアクエリの中括弧内で指定された CSS スタイルを適用する条件となる特性または引数のセットを定義します。例えば、768 ピクセル以下の端末のみに特定の CSS スタイルを適用する、などです。
- {{cssxref("@media")}} [アット規則](/ja/docs/Web/CSS/At-rule)
  - : メディアクエリの結果に基づいて、[スタイルシート](/ja/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works#How_to_apply_your_CSS_to_your_HTML)の一部を条件付きで適用します。
- {{domxref("Window.matchMedia()")}}
  - : 表示装置に対するメディアクエリをテストします。
