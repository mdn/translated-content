---
title: 手紙のマークアップ
slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
l10n:
  sourceCommit: 358158b18ad8c2b90b83fe4dc03bdd7fd2e423da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

私たちはみんな遅かれ早かれ手紙を書くことを学びます。テキストの書式設定のスキルを試すのも便利な例です。この課題では手紙をマークアップして、ハイパーリンクや HTML の `<head>` 要素の適切な使用と同様に、 HTML テキスト整形のスキルをテストしてみます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        この評価課題をやってみる前に、
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML を始めよう</a
        >、
        <a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
          >ヘッド部には何が入る? HTML のメタデータ</a
        >、
        <a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML テキストの基礎</a
        >、
        <a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >ハイパーリンクの作成</a
        >、
        <a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting"
          >高度なテキスト整形</a
        >を既に終えているのが望ましい。
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        基本的な HTML テキストの書式設定とハイパーリンクのスキル、および HTML の &#x3C;head> に関する知識をテストします。
      </td>
    </tr>
  </tbody>
</table>

## 開始地点

この課題を開始するには、[マークアップする必要がある生のテキスト](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt)と、HTML に[含める必要がある CSS](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt) を入手します。テキストエディターを使用して新しい `.html` ファイルを作成し、作業を行います（または、 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) などのサイトを使用して課題を行います）。

> **メモ:** もし行き詰まったら、私たちに助けを求めてください。このページの下にある[評価またはさらなるヘルプ](#評価またはさらなるヘルプ)の節をご覧ください。

## 簡単なプロジェクト

このプロジェクトでは、あなたのタスクは、大学のイントラネットでホストする必要がある手紙をマークアップすることです。この手紙は、大学への申請に関して、研究員から博士課程の学生候補に返信するものです。

### ブロック/構造的な意味づけ

- 文書全体を文書型定義、{{htmlelement("html")}}、{{htmlelement("head")}}、{{htmlelement("body")}} 要素を含む適切な構造で構成する必要があります。
- 一般的な手紙は、以下の点を除いて、段落と見出しの構造でマークアップしてください。最上位の見出し（"Re:" の行）が 1 つと、第 2 レベルの見出しが 3 つあります。
- 学期の開始日、研究科目、そしてエキゾチックな踊りは適切なリストタイプを使ってマークアップしてください。
- 2 つの住所は {{htmlelement("address")}} 要素に入れてください。住所のそれぞれの行は個別の行にしますが、新しい段落にはしないでください。

### インラインの意味づけ

- 送信者と受信者の名前（および "Tel" と "Email"）は、とても重要なものとしてマークアップしてください。
- 文書内の 4 つの日付には、機械が読める日付を含む適切な要素を指定する必要があります。
- 手紙の最初のアドレスと最初の日付には、"sender-column" のクラス属性値を指定する必要があります。後で追加する CSS では、従来の手紙のレイアウトの場合と同様に、これらが正しく配置されます。
- 文字の本文中の 5 つの頭字語/略語は、それぞれの頭字語/略語を拡張するためにマークアップする必要があります。
- 6 つの下付き/上付き文字は適切にマークアップする必要があります — 化学式、および 103 と 104 の数字 (それぞれ 10 のべき乗または 3 と 4 にする必要があります)。
- テキストの中で少なくとも 2 つの適切な単語に強い重要性と強調を設定するようにしてください。
- ハイパーリンクを追加する場所は 2 か所あります。タイトル付きの適切なリンクを追加してください。リンクが指す場所には `http://example.com` を使用してください。
- 大学のモットーのクォートと引用は適切な要素でマークアップするべきです。

### 文書のヘッド部

- 適切なメタタグを使用して、文書の文字コードを utf-8 として指定する必要があります。
- 手紙の作者は適切なメタタグで指定してください。
- 提供された CSS は適切なタグの中に置いてください。

## ヒントとコツ

- HTML を検証するために [W3C HTML validator](https://validator.w3.org/) を使用してください。検証すればボーナスポイントを得られるでしょう。
- この課題をするために CSS を知る必要はありません。 提供された CSS を HTML 要素の中に入れるだけです。

## 例

次のスクリーンショットは、マークアップ後の文字の表示例を示しています。

![例](letter-update.png)

## 評価またはさらなるヘルプ

この作品を評価してほしい、行き詰っているので相談に乗ってほしいという方。

1. 作品をオンラインの共有可能なエディター、例えば [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) に置いてください。
2. [MDN Discourse forum 学習カテゴリー](https://discourse.mozilla.org/c/mdn/learn/250)に評価や助けを依頼する記事を書いてください。投稿には以下を記載してください。

    - 「手紙のマークアップのための評価希望」のようなわかりやすいタイトル。
    - すでに持っている内容や、私たちに望むことの詳細。例えば、行き詰まって助けが必要な場合や、評価を希望する場合などを指示してください。
    - 評価やヘルプが必要な例へのリンクを、オンライン共有エディターで示してください（上記のステップ 1 で述べたとおり）。コードを見ることができなければ、コーディングの問題で誰かを助けることはとても難しいのです。
    - 実際の課題または評価ページへのリンク。あなたが助けを求めている問題を探すことができます。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

## このモジュール内

- [HTML を始めよう](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [ヘッド部には何が入る? HTML のメタデータ](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [ハイパーリンクの作成](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [高度なテキスト整形](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [文書とウェブサイトの構造](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [HTML のデバッグ](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [手紙のマークアップ](/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [コンテンツのページの構造化](/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
