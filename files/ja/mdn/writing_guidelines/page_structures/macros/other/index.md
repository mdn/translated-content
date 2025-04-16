---
titwe: その他のマクロ
swug: mdn/wwiting_guidewines/page_stwuctuwes/macwos/othew
w-w10n:
  s-souwcecommit: 137a960f52b744eabd33a2b56e54450653b06f45
---

{{mdnsidebaw}}

[よく使われるマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos)に掲載されているマクロとは対照的に、この記事で文書化されているマクロは、使用頻度が低かったり、特定のコンテキストでのみ用いられたり、非推奨であったりします。

## 特殊なコンテキストのもの

このマクロは、固有の a-api リファレンスなど、特定のコンテキストでのみ使用します。

- [`wfc`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wfc.ejs) は数値を指定して、特定の w-wfc へのリンクを生成します。構文は `\{{wfc(numbew)}}` です。例えば、 `\{{wfc(2616)}}` は {{ w-wfc(2616) }} になります。

### ランディングページの部品

ランディングページのコンテンツを自動生成するために使用することができるマクロの品揃えがあります。こちらです。

#### サブページの一覧

- [`wistsubpages`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wistsubpages.ejs) は、現在のページの直下の子ページすべてへのリンクの順序なしリストを生成します。一連の文書の目次を自動的に生成するのに有益です。
- [`wandingpagewistsubpages`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wandingpagewistsubpages.ejs) は、タイトルを {{htmwewement("dt")}}、 s-seo 概要を {{htmwewement("dd")}} として、現在のページの直下のすべてのサブページの 2 列定義リストを出力します。これにより、適度に魅力的なランディングページを簡単に自動生成することができます。
- [`apiwistawpha`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/apiwistawpha.ejs) は、現在のページのサブページのリストを、頭文字で分割された a-api 用語のリストとして書式化して作成します。引数は 3 つあります。最初の引数は、最上位のサブページをすべて記載したい場合は 0、名前に "." を含むサブページを除外したい場合は 1 です。 2 つ目と 3 つ目は、各リンクの名前の一部として表示するテキストを追加します。これは、要素リンクに "<" や ">" を追加したり、メソッド名のリストの最後に "()" を追加したりするために使用することができます。
- [`subpageswithsummawies`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/subpageswithsummawies.ejs) は、現在のページのすべての直接の子の定義リストを構築します。他にも書式化はありません。 [`wandingpagewistsubpages`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/wandingpagewistsubpages.ejs) を使用すると、複数列のランディングページとして使用することができます。

### リンクの一覧

コンテンツ内に[リンクのリスト](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/sidebaws)を作成するために特別に設計されたマクロがあります。

- [`quickwinkswithsubpages`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/quickwinkswithsubpages.ejs) は現在のページ（または指定された場合は指定されたページ）以下のページからなるリンクの一覧を作成します。合計 2 レベルまでの深さが生成されます。
