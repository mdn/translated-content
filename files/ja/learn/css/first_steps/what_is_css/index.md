---
title: CSSとは何か？
slug: Learn/CSS/First_steps/What_is_CSS
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**{{Glossary("CSS")}}** (Cascading Style Sheets；カスケーティングスタイルシート) は見栄えのよいページを作ることができますが、内部ではどう働くのでしょうか？この記事では簡単な構文の例とともに CSS とは何かについて説明し、この言語の重要な用語についても触れます。

| 前提条件: | 基本的なコンピューターリテラシー、 [基本的なソフトウェアがインストールされていること](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)、[ファイルの操作方法](/ja/Learn/Getting_started_with_the_web/Dealing_with_files)についての基本的な知識、HTML の基本 ([HTML 概論](/ja/docs/Learn/HTML/Introduction_to_HTML)を学習のこと)。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | CSS とは何かを学ぶ。                                                                                                                                                                                                                                                                                                                              |

[HTML 概論](/ja/docs/Learn/HTML/Introduction_to_HTML) では HTML について触れ、文書をどのようにマークアップするかを学びました。この文書はウェブブラウザーで読むことができます。見出しは普通のテキストより大きく見え、段落はあたらしい行に分けられ、それらの間には空白が入ります。リンクはほかのテキストと区別するために色付きで下線が引かれています。これらはブラウザーによるデフォルトのスタイリングです。ページの作者がスタイリングしていなくても読みやすくなるようにブラウザーが HTML に適用するとても基本的なスタイルです。

![The default styles used by a browser](html-example.png)

しかし、ウェブサイトみんながこのような見た目では退屈でしょう。CSS をつかうとブラウザー内で HTML 要素をどう見せるかはっきりと制御できるようになり、マークアップを好きなように表現できます。

## CSS の目的

前述のように、CSS は文書を（スタイルやレイアウトを）どのように表現するか指定する言語です。

**文書** は普通、マークアップ言語をつかって構造化されたテキストファイルです。{{Glossary("HTML")}} がもっとも一般的な マークアップ言語ですが、{{Glossary("SVG")}} や {{Glossary("XML")}}も出会うことがあります。

文書を **表現する** とは、それを使いやすいフォームに変換することを意味します。{{Glossary("Mozilla Firefox","Firefox")}}, {{Glossary("Google Chrome","Chrome")}}, あるいは {{Glossary("Microsoft Edge","Edge")}} といった{{Glossary("ブラウザー","ブラウザー")}} はコンピューター画面やプロジェクター、あるいはプリンタで印刷される文書が視覚的に表現されるよう設計されています。

> **メモ:** ブラウザーは時に{{Glossary("User agent","user agent ユーザーエージェント")}} と呼ばれますが、基本的に人に似せたコンピュータープログラムを意味します。CSS について語る時、ブラウザーは代表的なユーザーエージェントですが、それだけではありません。HTML と CSS 文書を印刷できる PDF に変換するようなユーザーエージェントもあります。

CSS は、例えば見出しやリンクの [色](/ja/docs/Web/CSS/color_value) や [フォントサイズ](/ja/docs/Web/CSS/font-size)の変更といったごく基本的なテキストのスタイリングでもつかえます。例えば、[一列のテキストをレイアウトして](/ja/docs/Web/CSS/Layout_cookbook/Column_layouts)メインコンテンツ領域と関連情報のためのサイドバーに分けるといった、レイアウト作成に使うこともできます。[アニメーション](/ja/docs/Web/CSS/CSS_Animations)のような効果も使えます。それぞれの例はこの段落のリンクをご覧ください。

## CSS の構文

CSS はルールベースの言語です。ウェブページ上の特定の要素かグループに適用するスタイリングのルールを定義します。例えば、「ページ上の `<h1>` 要素の文字を大きく、赤くしたい」といったようにです。

これを実現するコードはとても簡単な CSS ルールです:

```css
h1 {
    color: red;
    font-size: 5em;
}
```

ルールは {{Glossary("CSS Selector", "セレクタ")}} から始まります。ここにはこれからスタイリングしようとする HTML 要素を選びます。この例では {{htmlelement("h1")}} を選んでいます。

つぎに波カッコ `{ }` を書き、この中に**プロパティ**と**プロパティ値** のペアで作られた **宣言** を 1 つ以上置きます。それぞれのペアは選んだ要素のプロパティとそれに与えたいプロパティ値を特定します。

コロン `:` の前にプロパティを書き、コロンの後にプロパティ値を書きます。CSS {{Glossary("property/CSS","プロパティ")}} は特定されたプロパティによって異なる許容値を持ちます。例えば、`color` プロパティは様々な [color 値](/ja/docs/Learn/CSS/Building_blocks/Values_and_units#Color)を持っています。`font-size` プロパティもあります。このプロパティは値として様々な [size 単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units#Numbers_lengths_and_percentages) を持っています。

CSS スタイルシートはたくさんのルールを含みます。

```css
h1 {
    color: red;
    font-size: 5em;
}

p {
    color: black;
}
```

ほかにどんな値があるか調べる必要があることに気づくでしょう。 MDN のプロパティのページをつかえば、忘れた時やほかにどんな値が使えるか知りたいときにすばやく調べられます。

> **メモ:** [CSS リファレンス](/ja/docs/Web/CSS/Reference)にすべての CSS プロパティのリストがあります。CSS の機能についてもっとたくさんの情報を見つける必要があるときには、検索エンジンで "mdn _css-feature-name_" と調べることに慣れても良いでしょう。 例えば、"mdn color" や "mdn font-size" を試してみてください!

## CSS モジュール

CSS を使ってスタイリングできることがたくさんあるので、CSS は **モジュール** にまとめられています。 MDN を探せばこれらモジュールのリファレンスが見つかるでしょうし、多くのページは特定のモジュールで編集されていることがわかります。例えば、その目的やプロパティと機能の違いを見つけるために[背景と境界](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders) モジュールを見ることができます。（後述で） CSS 技術を定義する仕様へのリンクもあります。

CSS がどのように作られているか、ここではあまり心配する必要はありませんが、もし例えば、特定のプロパティが似たものの中で見つかる可能性があることを知っていれば、情報は見つけやすくなります。

たとえば、背景と境界モジュールに戻ってみましょう。[`background-color`](/ja/docs/Web/CSS/background-color) と [`border-color`](/ja/docs/Web/CSS/border-color) プロパティがこのモジュール内で定義されているのは理にかなっていると思うかもしれませんし、実際そうなっています。

### CSS の仕様

(HTML, CSS, JavaScript といった) ウェブの標準技術はすべて、仕様 (または単に 「スペック」)とよばれる文書で定義されており、({{glossary("W3C")}}, {{glossary("WHATWG")}}, {{glossary("ECMA")}}, or {{glossary("Khronos")}} といった) 標準化組織によって発行され、技術がどう働くか定義しています。

CSS は W3C 内の [CSS Working Group](https://www.w3.org/Style/CSS/) と呼ばれるグループにより開発されました。このグループは、CSS に関心のあるブラウザーベンダーやその他の企業の代表者で構成されています。またメンバー組織とつながらず、独立した声として行動する _invited experts_ もいます。

新しい CSS の機能は、CSS ワーキンググループにより開発され、仕様化されています。 特定のブラウザーが実験的に機能を実装させることもありますし、ウェブデザイナーやデベロッパーが要望することもありますし、ワーキンググループ自体が要件を固めることもあります。CSS は絶えず開発されており、新しい機能が利用可能になります。しかし重要なのは、古いウェブサイトが決して壊れてしまわないように、全員が努力していることです。2000 年に作られたウェブサイトは限られた CSS 機能しか使えませんが、最新のブラウザーでも見えるようになっているべきなのです。

CSS の初心者としては、CSS 仕様が圧倒的であることに気付くでしょう。これらは、ウェブ開発者が CSS を理解するために読むのではなく、エンジニアがユーザーエージェント機能のサポートを実装するために使用するのを想定しています。経験豊富な開発者の多くは、MDN ドキュメントや他のチュートリアルを参照します。ただし、それらが存在することを知り、使っている CSS やブラウザーによるサポート（以下を参照）、および仕様間の関係を理解することは価値があります。

## ブラウザーサポート

一度 CSS が指定されると、1 つ以上のブラウザーが CSS を実装している場合にのみウェブページの開発に役立ちます。これはコードが CSS ファイルの命令を画面に表示できるように記述されることを意味します。これは [CSS がどう働くか](/ja/docs/Learn/CSS/First_steps/How_CSS_works)のレッスンで見ることになるでしょう。すべてのブラウザーで同時にある機能が実装されることは通常はありませんし、それゆえ通常、一部のブラウザーでは CSS の一部を使用でき、他のブラウザーでは使用できないというギャップがあります。こういったわけで、どういった機能が実装されているか確認できることは有益です。MDN のそれぞれのページでは、関心のあるプロパティの状態が確認できるので、ウェブサイト上でそれが使えるか見極めることができます。

以下は CSS の [`font-family`](/ja/docs/Web/CSS/font-family) プロパティについての互換データです。

{{Compat("css.properties.font-family")}}

## 次のステップ

CSS とは何かについていくらか理解したと思いますので、[CSS 入門](/ja/docs/Learn/CSS/First_steps/Getting_started) に進みましょう。ここでは自分で CSS を書き始められます。

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

## このモジュール内

1. [What is CSS?](/ja/docs/Learn/CSS/First_steps/What_is_CSS)
2. [Getting started with CSS](/ja/docs/Learn/CSS/First_steps/Getting_started)
3. [How CSS is structured](/ja/docs/Learn/CSS/First_steps/How_CSS_is_structured)
4. [How CSS works](/ja/docs/Learn/CSS/First_steps/How_CSS_works)
5. [Using your new knowledge](/ja/docs/Learn/CSS/First_steps/Using_your_new_knowledge)
