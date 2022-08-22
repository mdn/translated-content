---
title: 手紙をマークアップする
slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
tags:
  - Beginner
  - CodingScripting
  - HTML
  - head
  - テキスト
  - リンク
  - 評価
translation_of: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}私たちはみんな遅かれ早かれ手紙を書くことを学びます。

テキストの書式設定のスキルを試すのも便利な例です。この課題では、ハイパーリンクを含む基本的な HTML テキストフォーマットスキルと高度な HTML テキストフォーマットスキルをテストするためにマークアップするための文字が与えられます。さらに HTML `<head>` コンテンツに対するあなたの慣れをテストします。

| 前提条件: | このアセスメントを試みる前に、「[HTML を始めよう](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)」、「[head には何が入る? HTML のメタデータ](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)」、「[HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)」、「[ハイパーリンクの作成](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)」、および「[高度なテキスト処理](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)」をすでに読んでおく必要があります。 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | 基本的な HTML テキストの書式設定とハイパーリンクのスキル、および HTML \<head> の内容に関する知識をテストします。                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## スタートポイント

この課題を開始するには、[マークアップする必要がある生のテキスト](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt)と、HTML に[含める必要がある CSS](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/css.txt) を入手します。テキストエディタを使用して新しい `.html` ファイルを作成し、作業を行います (または、[JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) などのサイトを使用して課題を行います)。

## 簡単なプロジェクト

このプロジェクトの場合、あなたの仕事は大学のイントラネットでホストされる必要がある手紙をマークアップすることです。手紙は、大学で働くことへの申し込みに関する研究フェローから博士課程の学生への返事です。

ブロック/構造セマンティクス

- ドキュメント全体を doctype、{{htmlelement("html")}}、{{htmlelement("head")}}、{{htmlelement("body")}} 要素を含む適切な構造で構成する必要があります。
- 一般的な手紙は、以下の点を除いて、段落と見出しの構造でマークアップされるべきです。トップレベルの見出し ("Re:" 行) が 1 つと、セカンドレベルの見出しが 3 つあります。
- 学期の開始日、研究科目、そしてエキゾチックな踊りは適切なリストタイプを使ってマークアップされるべきです。
- 2 つのアドレスは段落の中に入れることができます。{{htmlelement("address")}} 要素はそれらには適していません — その理由を考えてください。さらに、アドレスの各行は新しい行の上に配置する必要がありますが、新しい段落には配置しないでください。

インラインセマンティクス:

- 送信者と受信者の名前 (および "Tel" と "Email") は、非常に重要なものとしてマークアップする必要があります。
- 文書内の 4 つの日付には、機械が読める日付を含む適切な要素を指定する必要があります。
- 手紙の最初のアドレスと最初の日付には、"sender-column" のクラス属性値を指定する必要があります。後で追加する CSS では、従来の手紙のレイアウトの場合と同様に、これらが正しく配置されます。
- 文字の本文中の 5 つの頭字語/略語は、それぞれの頭字語/略語を拡張するためにマークアップする必要があります。
- 6 つの下付き/上付き文字は適切にマークアップする必要があります — 化学式、および 103 と 104 の数字 (それぞれ 10 のべき乗または 3 と 4 にする必要があります)。
- テキストの中で少なくとも 2 つの適切な単語に強い重要性と強調を設定するようにしてください。
- ハイパーリンクを追加する場所は 2 か所あります。タイトル付きの適切なリンクを追加してください。リンクが指す場所には http\://example.com を使用してください。
- 大学のモットーのクォートと引用は適切な要素でマークアップされるべきです。

ドキュメントの head:

- 適切なメタタグを使用して、ドキュメントの文字コードを utf-8 として指定する必要があります。
- 手紙の作者は適切なメタタグで指定されるべきです。
- 提供された CSS は適切なタグの中に含まれるべきです。

## ヒントとコツ

- HTML を検証するために [W3C HTML validator](https://validator.w3.org/) を使用してください。検証すればボーナスポイントを得られるでしょう。
- この課題をするために CSS を知る必要はありません。 提供された CSS を HTML 要素の中に入れるだけです。

## 例

次のスクリーンショットは、マークアップ後の文字の表示例を示しています。

![Example](Letter%20screengrab%202.png)

## 評価

組織的コースの一環としてこの評価に従っている場合、採点のために作品を教師/メンターに渡すことができるはずです。もし自己学習しているのであれば、[この練習問題についてのディスカッションスレッド](https://discourse.mozilla.org/t/marking-up-a-letter-assignment/24676)、または [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで尋ねることで、非常に簡単にマーキングガイドを入手することができます。最初にエクササイズをしてみてください - 不正をすることによって得られるものは何もありません！

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

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
