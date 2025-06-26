---
title: 技術の調査方法
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: 5fc1783bd6216c274bd3a93e5a42820572ff7b18
---

{{MDNSidebar}}

> [!CALLOUT]
> 訳注:
> MDN Web Docs では、日本語版の記事を最初から作成するのではなく、まず英語版の記事を作成してから日本語訳するようにしてください。

この記事では、技術を文書化する手法についての便利な情報を提供します。

## 準備作業

MDN Web Docs で文書化や更新を始めるには、実際に書き始める前に準備しておくべきこと、計画しておくべきことがあります。

このガイドを読む前に、次のことについてそれなりの知識があることを想定しています。

- HTML、CSS、JavaScript のようなウェブ技術。
- ウェブ技術の仕様書を読むこと。 API を文書化する際に、これらをよく見ていくことになるでしょう。

それ以外のことは、その過程で学ぶことができます。

### リソースを調べる

あらゆる文書化のために有用なリソースには、次のようなものがあります。

1. MDN Web Docs の [How-to ガイド](/ja/docs/MDN/Writing_guidelines/Howto): あなたはすでにここにいますが、すべての記事に目を通して、私たちの書くスタイル、さまざまなページの種類とそこに含まれる章、ページのさまざまな部分 (仕様書やブラウザー互換性など) を記載する方法に慣れることは良いことです。
2. 最新の仕様書: MDN Web Docs で文書化されている技術については、さまざまな標準化団体が仕様書を作成しています。例えば、 JavaScript は [TC39](https://tc39.es/)、 HTML は [WHATWG](https://whatwg.org/)、CSS や XML、一部の Web API は [W3C](https://www.w3.org/) です。仕様書は MDN Web Docs のリファレンスページからリンクされています（「仕様書」の節を調べてください）。また、ウェブで検索することもできます。常に最新の仕様書から作業してください。
3. 最新の現行ブラウザー： [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly)、[Chrome Canary](https://www.google.com/intl/en/chrome/canary/)、[Safari Technology Preview](https://webkit.org/downloads/) など、あなたが文書化しようとしている機能に対応している可能性が高い、実験的/アルファビルドが必要です。これは、特に「近日公開予定」の機能を文書化する場合に適切です。
4. デモ/ブログ記事/その他の情報: できるだけ多くの情報を探しましょう。ある技術が変わったために更新する場合、使用するリソースが古くなっていないことを確認してください。これが、最初の 2 点が重要な理由です。

また、質問に答えてくれる人を探すのも賢い方法です。これは仕様の作成者であったり、ブラウザー機能を実装するエンジニアであったりします。

### 仕様書を読む

最初は少し異質に感じるかもしれませんが、やればやるほど使用することができるようになります。始めるのには以下のリンクが参考になります。

- [How to read W3C specs](https://alistapart.com/article/readspec/) (J. David Eisenberg on A List Apart)
- [Understanding the CSS specifications](https://www.w3.org/Style/CSS/read) (w3c)
- [How to read web specs part I – or: WebVR, how do you work?](https://surma.dev/things/reading-specs/) は WebVR 仕様書固有の読み方について書かれていますが、 Web API 仕様書を読むための素晴らしい入門書です。
- [How to read web specs part IIa – or: ECMAScript Symbols](https://surma.dev/things/reading-specs-2/) 上記リンクの第 2 章には、 JavaScript 言語のアウトラインである ECMAScript 仕様を理解するための情報が含まれています。

さらに、 [WebIDL ファイルに含まれる情報](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file)ガイドもあり、 Web API 仕様書を読む際に実に役立ちます。

## 機能を探索

ある技術を文書化する過程で、何度もサンプルコードを書いたりデモを作ったりすることになるでしょうが、まずその技術がどのように動作するのかに親しむことから始めるのはとても有益です。これは実に有益な練習です。なぜなら、用途（開発者がこの技術を使う理由）をよく理解し、同時にサンプルコードを開発するのに役立つからです。

> [!NOTE]
> 仕様書が最近更新され、たとえば、ある手法が定義されなくなったが、古い手法がまださまざまなブラウザーで動作する、というような場合、古い手法と新しい手法をカバーするために、両方を同じ場所に文書に配置しなければならないことが多いでしょう。
> 助けが必要な場合は、入手したデモを参照するか、技術連絡先に依頼してください。

## 執筆または更新するページのリストを作成

一から書いたり更新したりする必要のあるページは、書く技術によって異なります。[ページの種類](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types)と、あなたが文書化しようとしている技術に関連する節を調べてください。ほとんどの場合、既存の文書も更新する必要があるでしょうから、 MDN Web Docs であなたが書こうとしていることに関連のあるページを検索してください。

### サイドバー

書くページのサイドバーも定義したり更新したりする必要がある可能性があります。サイドバーが必要かどうか、またその方法を調べるには、[サイドバーガイド](/ja/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)を調べてください。

### サンプルコード

MDN Web Docs のサンプルコードの一部は別個のリポジトリーにあります。最も顕著なものは、リファレンスページの「試してみましょう」の節に現れる対話的な例と、ガイドに必要な大規模なデモコードです。これらのリポジトリーに追加したり修正したりする必要がある場合は、リストにメモしておくとよい考えです。

[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)の記事では、 MDN Web Docs で使用するサンプルコードの種類について記述しています。

### 例

新しい Web API を文書化するとして、最初に文書化する節のリストはこのようになるでしょう。

1. 概要ページ
2. インターフェイスページ
3. コンストラクターページ
4. メソッドページ
5. プロパティページ
6. イベントページ
7. 概要/ガイドページ
8. サンプルコード
9. サイドバー

その後、それぞれのインターフェイスとそのメンバーを追加して、さらに詳細を展開させることができます。例えば、ウェブオーディオ API を文書化する場合、リストは以下のようになるでしょう。

- Web_Audio_API
- AudioContext
  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode
  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Events (update list)
  - start
  - end
  - …

## issue を開く

この時点で、`mdn/content` リポジトリーで追跡[課題](https://github.com/mdn/content/issues)を開き、 to-do （チェックボックス）リストとしてページを掲載しておくとよいでしょう。これによって、あなただけでなく、文書化作業をしている他の人たちも公に状況を把握できるようになります。また、あなたのプルリクエストをこの課題にリンクすることで、みんなにコンテキストを与えることができます。

## ページを作成

これで必要なページを作成します。新しいページを作成するには、[ページを作成、移動、削除、編集するには](/ja/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)ガイドの説明を参照してください。[ページの種類](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types)ガイドで有益なページテンプレートを調べてください。
