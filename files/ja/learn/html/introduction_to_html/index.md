---
title: HTML 入門
slug: Learn/HTML/Introduction_to_HTML
tags:
  - CodingScripting
  - HTML
  - Introduction to HTML
  - Landing
  - Links
  - Structure
  - Text
  - head
  - semantics
translation_of: Learn/HTML/Introduction_to_HTML
---
{{LearnSidebar}}

本来、{{glossary("HTML")}} は、要素で構成される極めてシンプルな言語です。HTML は、テキストの断片に、文書における他とは異なる意味 (段落なのか、箇条書きなのか、表の一部なのか) を与え、文書を論理的なセクションに構成し (ヘッダを持つのか、コンテンツを 3 段組にするのか、ナビゲーションメニューを持つのか) 、ページに画像や動画のようなコンテンツを貼り付けるために使うことができます。このモジュールでは、これらのうち最初の 2 つについて紹介し、 HTML を理解する上で知る必要がある基本的な概念や文法について紹介します。

> **Callout:** #### フロントエンドのウェブ開発者を目指している方へゴールに向かって頑張るために必要な情報をまとめたコースをご用意しました。[**始めましょう**](/ja/docs/Learn/Front-end_web_developer)

## 前提条件

このモジュールを始めるにあたり、 HTML の知識は一切必要ありません。しかし、最低でもコンピューターを利用したり、ウェブを受動的に利用する (つまり、ただ見てコンテンツを消費する) ための基本的な知識を持っている必要があります。[基本的なソフトウェアをインストールする](/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software)に挙がっている基本的な作業環境を整えておき、[ファイルを扱う](/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)にあるような、ファイルを作成して管理する方法についても理解するべきです。これらの記事は両方共に、完全な初心者用のモジュール「[Web 入門](/ja/docs/Learn/Getting_started_with_the_web)」の一部です。

> **Note:** 自分自身でファイルを作れない環境 (タブレットやその他の端末) で作業する場合、(ほとんどの) コードサンプルは [JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) のようなオンラインコーディングプログラムで試すことが可能です。

## ガイド

このモジュールには、以下の記事が含まれています。これらの記事では、 HTML の基本的な理論をすべて説明し、いくつかのスキルを試すための十分な機会を提供しています。

- [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
  - : 始めに、 HTML の絶対的な基本を網羅します。 — 要素、属性、その他の重要な用語を定義し、それらが言語のどこに当てはまるかを示しています。また、典型的な HTML ページがどのように構成されているか、 HTML 要素がどのように構成されているかを示し、その他の重要な基本的言語機能を説明します。また、 HTML に興味を持ってもらうために、いくつかの HTML で遊んでみましょう。
- [Head とは? HTML のメタデータ](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
  - : HTML 文書の {{Glossary("Head","head")}} は、ページが読み込まれたときにウェブブラウザーに表示されない部分です。ここには、ページのタイトル ({{htmlelement("title")}})、 {{glossary("CSS")}} へのリンク (HTML コンテンツを CSS でスタイル付けしたい場合)、独自のファビコンへのリンク、メタデータ (誰が書いたか、文書を説明する重要なキーワードなど、 HTML に関するデータ) などの情報が含まれています。
- [HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
  - : HTML の主な役割の 1 つは、テキストの意味付け (**セマンティクス**としても知られます) で、それによってブラウザーは正しくテキストを表示する方法がわかります。この記事では HTML を使ってテキストブロックを見出しとパラグラフに分けたり、単語を強調/重要にしたり、リストを作成したりする方法を見て行きます。
- [ハイパーリンクを作成する](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
  - : ハイパーリンクは本当に重要です — これはウェブをウェブにしているものです。この記事ではリンクを作成するのに必要な文法を表して、リンクの最も良いやり方を考察します。
- [上級のテキスト整形](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
  - : HTML ではテキスト整形用として、[HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) の記事で扱ってきてない多くの要素があります。ここでの要素はあまり知られてないですが、知っておくと役立ちます。ここでは引用や、説明リストや、コンピューターのコードや関連するテキスト、下付き上付きや、連絡先情報などのマークアップを学習します。
- [文書とウェブサイトの構造](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
  - : ページの個々の部分 (例えば「段落」や「画像」) を定義するのと同様に、ウェブサイトの領域 (例えば「ヘッダー」、「ナビゲーションメニュー」、「本文のカラム」) も HTML で定義されます。この記事では基本的なウェブサイトの構造を計画する方法と、構造を表現する HTML を書く方法を見て行きます。
- [HTML をデバッグする](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
  - : HTML を書くのは良いですが、うまくいかなくて、コードのエラーが収まらない場合はどうでしょうか？この記事では手助けとなるいくつかのツールを紹介します。

## 評価

以下の評価で、上記のガイドにある HTML 基礎の理解度をテストすることができます。

- [手紙をマークアップする](/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
  - : 早かれ遅かれ、手紙を書くことを学びます。これはテキストフォーマットの技術をテストするのにも役立ちます！この評価ではマークアップすべき手紙が与えられます。
- [コンテンツページを構造化する](/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
  - : この評価では、ヘッダー・フッター・ナビゲーションメニュー・メインコンテンツ・サイドバーを含む、簡単なコンテンツページを構造化する HTML の能力をテストします。

> **Note:** #### フィードバック今回のようなガイドやチュートリアルの改善のために、[こちらのアンケート](https://www.surveygizmo.com/s3/4871248/MDN-Guides-Survey)にご協力ください。
