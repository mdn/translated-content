---
title: Semantics (セマンティクス)
slug: Glossary/Semantics
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

プログラミングでは、**セマンティクス** (semantics) とは、コードの断片の*意味*を指します。たとえば、「JavaScript でその行を実行すると、どのような効果があるのか？」、「その HTML 要素には、どのような目的や役割があるのか？」 (「どのように見えるのか？」ではなく)。

## JavaScript でのセマンティクス

JavaScript において、文字列の引数を取り、その文字列を `textContent` とする {{htmlelement("li")}} 要素を返す関数を想像してみてください。何をするのかを理解するためにコードを見る必要があるのは、関数名が `build('Peach')` と `createLiWithContent('Peach')` のどちらの場合でしょうか。

## CSS でのセマンティクス

CSS において、さまざまな種類の果物を表すために `li` 要素でリストをスタイル付けすることを想像してみてください。 `div > ul > li` または `.fruits__item` で選択された DOM の一部が何であるか分かるのはどちらでしょうか。

## HTML でのセマンティクス

たとえば、{{htmlelement("Heading_Elements", "h1")}} 要素はセマンティック要素で、「ページの最上位の見出し」の役割 (または意味) をまとったテキストを提供します。

```html
<h1>これは最上位の見出しです</h1>
```

デフォルトで、ほとんどのブラウザーの[ユーザーエージェントスタイルシート](/ja/docs/Web/CSS/Guides/Cascade/Introduction#ユーザーエージェントスタイルシート)は、{{htmlelement("Heading_Elements", "h1")}} に対して大きなフォントサイズを適用し、見出しのように見えるようにします（とはいえ、お好みで自由にスタイル設定を変更することも可能ですが）。

一方、どの要素も最上位の見出しのように見せることができます。次ののことを想像してみてください。

```html
<span style="font-size: 32px; margin: 21px 0;"
  >これは最上位の見出しですか？</span
>
```

これは最上位の見出しのように表示されますが、セマンティックな意義はありませんので、上記のように特別なメリットはありません。したがって、HTML 要素を適材適所に使用することをお勧めします。

HTML はデフォルトの表示スタイルに基づくのではなく、入力される「データ」を表現するためにコーディングするべきです。プレゼンテーション (どのように見えるか) は、完全に [CSS](/ja/docs/Web/CSS) の責任です。

セマンティックなマークアップを書くことの利点の中には、次のようなものがあります。

- 検索エンジンが内容を重要なキーワードとして理解し、ページの検索ランキングを上げる ({{glossary("SEO")}} を参照)
- スクリーンリーダーが、目の不自由なユーザーがページを操作するのを補助するための標識として利用することができる
- 意味のあるコードのブロックを見つけることは、セマンティックまたは名前空間のついたクラスがあるにしろないにしろ、延々と `div` の中を検索するより明らかに簡単である
- 開発者に目立たせるデータの種類を提案することができる
- セマンティックな名前は、正しいカスタム要素やコンポーネントの名前を反映する

どのマークアップを使用するか迷ったときは、自分自身に「どの要素が掲載しようとしているデータを最もよく説明または表現しているか」と自問してみてください。例えば、これはデータのリストか？順序付きか順序なしか？これは節と関連情報の補足から成る記事か？定義の一覧になっているか？キャプションを必要としている図または画像か？サイト内でグローバルのヘッダーおよびフッターに加えてヘッダーやフッターを持つべきか？などです。

## セマンティック要素

これらは、およそ 100 ある利用可能なセマンティック[要素](/ja/docs/Web/HTML/Reference/Elements)の*一部*です。

- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("details")}}
- {{htmlelement("figcaption")}}
- {{htmlelement("figure")}}
- {{htmlelement("footer")}}
- {{htmlelement("form")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("mark")}}
- {{htmlelement("nav")}}
- {{htmlelement("section")}}
- {{htmlelement("summary")}}
- {{htmlelement("time")}}

## 関連情報

- [HTML 要素リファレンス](/ja/docs/Web/HTML/Reference/Elements#インラインテキスト意味付け) - MDN
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements#使用上の注意) - MDN
- [コンピュータ科学におけるセマンティクスの意味](https://ja.wikipedia.org/wiki/意味論#コンピュータ科学) - ウィキペディア
- 関連用語:
  - {{Glossary("SEO")}}
