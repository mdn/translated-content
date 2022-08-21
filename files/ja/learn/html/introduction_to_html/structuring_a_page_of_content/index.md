---
title: コンテンツページを構造化する
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
tags:
  - Beginner
  - CodingScripting
  - HTML
  - セマンティクス
  - デザイン
  - レイアウト
  - 学習
  - 構造
  - 評価
translation_of: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
---
{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

CSS を使用してレイアウトできるようにコンテンツのページを構成することは、習得が非常に重要なスキルです。そのためこの評価では、ページがどのように表示されるのかを検討し、適切な構造セマンティクスを選択してその上にレイアウトを構築する能力についてテストします。

| 前提条件: | この評価を試みる前に、「[ドキュメントと Web サイトの構造](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)」に特に重点を置いて、コースの残りの部分を通してすでに学習していること。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | Web ページ構造の知識、および将来のレイアウト設計をマークアップで表現する方法をテストする。                                                                                                                 |

## スタートポイント

この評価を開始するには、[すべての開始アセットを含む zip ファイル](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip?raw=true)を入手してください。 zip ファイルには以下が含まれています。

- 構造的マークアップを追加する必要がある HTML
- マークアップをスタイルするための CSS
- ページで使用されている画像

ローカルコンピュータで例を作成するか、あるいは [JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) などのサイトを使用して評価を行います。

## プロジェクト概要

このプロジェクトでは、あなたの仕事は、バードウォッチング Web サイトのホームページのコンテンツを取得し、それにページレイアウトを適用できるように構造要素を追加することです。持っている必要があるものは：

- ページのメインタイトル、サイトのロゴ、およびナビゲーションメニューを含む、サイトの全幅にわたるヘッダ。スタイル設定が適用されるとタイトルとロゴが並べて表示され、ナビゲーションがそれら 2 つの項目の下に表示されます。
- ウェルカムテキストを含むメインブロックと、画像のサムネイルを含むサイドバーの 2 つの列を含むメインコンテンツ領域。
- 著作権情報とクレジットを含むフッター。

以下に適したラッパーを追加する必要があります。

- ヘッダー
- ナビゲーションメニュー
- メインコンテンツ
- ウェルカムテキスト
- 画像サイドバー
- フッター

また、する必要があることは：

- 開始時に提供された既存の CSS のすぐ下に別の{{htmlelement("link")}} 要素を追加して、提供された CSS をページに適用します。

## ヒント

- [W3C Nu HTML Checker](https://validator.w3.org/nu/) を使用して HTML、CSS、および SVG の意図しないミス — 他の方法では見逃している可能性のあるミス — を修正できるようにします。
- この評価をするために CSS を知る必要はありません。 提供された CSS を HTML 要素の中に入れるだけです。
- 提供されている CSS は、正しい構造要素がマークアップに追加されると、レンダリングされたページでそれらが緑色に見えるように設計されています。
- 行き詰って、どんな要素をどこに置くべきか想像できないならば、ページレイアウトの簡単なブロック図を描き、各ブロックを折り返すべきだと思う要素を書き留めることがしばしば役立ちます。

## 例

次のスクリーンショットは、マークアップされた後のホームページの外観の例を示しています。

![The finished example for the assessment; a simple webpage about birdwatching, including a heading of "Birdwatching", bird photos, and a welcome message](example-page.png)

## 評価

あなたが組織的コースの一環としてこの評価に従っている場合、採点のために作品を教師/メンターに渡すことができるはずです。もしあなたが自己学習しているのであれば、[この練習問題についてのディスカッションスレッド](https://discourse.mozilla.org/t/structuring-a-page-of-content-assignment/24678)、または [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで尋ねることで、非常に簡単にマーキングガイドを入手することができます。最初にエクササイズをしてみてください — 不正をすることによって得られるものは何もありません！

{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

## このモジュール

- [Getting started with HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [What’s in the head? Metadata in HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML text fundamentals](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [Creating hyperlinks](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [Advanced text formatting](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [Document and website structure](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Debugging HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Marking up a letter](/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [Structuring a page of content](/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
