---
title: その他のマクロ
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

[よく使われるマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)に掲載されているマクロとは異なり、この記事で文書化されているマクロは、使用頻度が低かったり、特定のコンテキストでのみ用いられたり、非推奨であったりします。

## 特殊なコンテキストのもの

このマクロは、固有の API リファレンスなど、特定のコンテキストでのみ使用します。

- [`RFC`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/rfc.rs) は数値を指定して、特定の RFC へのリンクを生成します。構文は `\{{RFC(数値)}}` です。例えば、 `\{{RFC(2616)}}` は {{ RFC(2616) }} になります。

### ランディングページの部品

ランディングページのコンテンツを自動生成するために使用することができるマクロの品揃えがあります。こちらです。

#### サブページの一覧

- [`ListSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/listsubpages.rs) は、現在のページの直下の子ページすべてへのリンクの順序なしリストを生成します。一連の文書の目次を自動的に生成するのに有益です。
- [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) は、タイトルを {{HTMLElement("dt")}}、 SEO 概要を {{HTMLElement("dd")}} として、現在のページの直下のすべてのサブページの定義リストを構築します。これにより、適度に魅力的なランディングページを簡単に自動生成することができます。
- [`APIListAlpha`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_alpha.rs) は、現在のページのサブページのリストを、頭文字で分割された API 用語のリストとして書式化して作成します。引数は 3 つあります。最初の引数は、最上位のサブページをすべて記載したい場合は 0、名前に "." を含むサブページを除外したい場合は 1 です。 2 つ目と 3 つ目は、各リンクの名前の一部として表示するテキストを追加します。これは、要素リンクに "<" や ">" を追加したり、メソッド名のリストの最後に "()" を追加したりするために使用することができます。

### リンクの一覧

コンテンツ内に[リンクの一覧](/ja/docs/MDN/Writing_guidelines/Page_structures/Sidebars)を作成するために特別に設計されたマクロがあります。

- [`QuickLinksWithSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs) は現在のページ（または指定された場合は指定されたページ）以下のページからなるリンクの一覧を作成します。合計 2 レベルまでの深さが生成されます。
