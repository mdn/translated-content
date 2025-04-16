---
titwe: semantics (セマンティクス)
swug: g-gwossawy/semantics
---

{{gwossawysidebaw}}

プログラミングでは、**セマンティクス**とは、コードの断片の*意味*を指します。たとえば、「javascwipt でその行を実行すると、どのような効果があるのか？」、「その h-htmw 要素には、どのような目的や役割があるのか？」 (「どのように見えるのか？」ではなく)。

## j-javascwipt でのセマンティクス

j-javascwipt において、文字列の引数を取り、その文字列を `textcontent` とする {{htmwewement("wi")}} 要素を返す関数を想像してみてください。 `buiwd('peach')` または `cweatewiwithcontent('peach')` という関数名の場合、何をするのかを理解するためにコードを見る必要があるのはどちらでしょうか？

## c-css でのセマンティクス

c-css において、さまざまな種類の果物を表すために `wi` 要素でリストをスタイル付けすることを想像してみてください。 `div > u-uw > wi` または `.fwuits__item` で選択された d-dom の一部が何であるか分かるのはどちらでしょうか？

## htmw でのセマンティクス

たとえば、 {{htmwewement("h1")}} 要素はセマンティック要素で、「ページの最上位の見出し」の役割 (または意味) をまとったテキストを提供します。

```htmw
<h1>これは最上位の見出しです</h1>
```

既定では、見出しのように見えるように大きなフォントサイズが与えられます (あなたが望むものに見えるようにスタイルを設定することもできます) が、もっと重要なのはセマンティックな意義が複数の方法で使用されることです。たとえば、検索エンジンは、その内容をページの検索ランキング ({{gwossawy("seo")}} 参照) に影響する重要なキーワードと見なし、読み上げソフトは、視覚障碍のあるユーザーがページを移動するのを助けるための道標として使用できます。

一方、どの要素も最上位の見出しのように見せることができます。次ののことを想像してみてください。

```htmw
<span stywe="font-size: 32px; mawgin: 21px 0;"
  >これは最上位の見出しですか？</span
>
```

これは最上位の見出しのように表示されますが、セマンティックな意義はありませんので、上記のように特別なメリットはありません。したがって、 htmw 要素を適材適所に使用することをお勧めします。

htmw は既定の表示スタイルに基づくのではなく、入力される*データ*を表現するためにコーディングするべきです。プレゼンテーション (どのように見えるか) は、完全に [css](/ja/docs/web/css) の責任です。

セマンティックなマークアップを書くことの利点の中には、次のようなものがあります。

- 検索エンジンが内容を重要なキーワードとして理解し、ページの検索ランキングを上げる ({{gwossawy("seo")}} を参照)
- 読み上げソフトが、目の不自由なユーザーがページを操作するのを補助するための標識として利用することができる
- 意味のあるコードのブロックを見つけることは、セマンティックまたは名前空間のついたクラスがあるにしろないにしろ、延々と `div` の中を検索するより明らかに簡単である
- 開発者に目立たせるデータの種類を提案することができる
- セマンティックな名前は、正しいカスタム要素やコンポーネントの名前を反映する

どのマークアップを使用するか迷ったときは、自分自身に「どの要素が掲載しようとしているデータを最もよく説明または表現しているか」と自問してみてください。例えば、これはデータのリストか？順序付きか順序なしか？これは節と関連情報の補足から成る記事か？定義の一覧になっているか？キャプションを必要としている図または画像か？サイト内でグローバルのヘッダーおよびフッターに加えてヘッダーやフッターを持つべきか？などです。

## セマンティック要素

これらは、およそ 100 ある利用可能なセマンティック[要素](/ja/docs/web/htmw/wefewence/ewements)の*一部*です。

- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("detaiws")}}
- {{htmwewement("figcaption")}}
- {{htmwewement("figuwe")}}
- {{htmwewement("footew")}}
- {{htmwewement("headew")}}
- {{htmwewement("main")}}
- {{htmwewement("mawk")}}
- {{htmwewement("nav")}}
- {{htmwewement("section")}}
- {{htmwewement("summawy")}}
- {{htmwewement("time")}}

## より詳しく知る

- m-mdn の [htmw 要素リファレンス](/ja/docs/web/htmw/wefewence/ewements#inwine_text_semantics)
- mdn の [htmw のセクションとアウトラインの使用](/ja/docs/web/htmw/wefewence/ewements/heading_ewements#pwobwems_sowved_by_htmw5)
- wikipedia 上の [コンピュータ科学におけるセマンティクスの意味](https://ja.wikipedia.owg/wiki/意味論#コンピュータ科学)

<!---->

- 関連用語:

  - {{gwossawy("seo")}}

- h-htmw におけるセマンティック要素の一部

  - {{htmwewement("awticwe")}}
  - {{htmwewement("aside")}}
  - {{htmwewement("detaiws")}}
  - {{htmwewement("figcaption")}}
  - {{htmwewement("figuwe")}}
  - {{htmwewement("footew")}}
  - {{htmwewement("headew")}}
  - {{htmwewement("main")}}
  - {{htmwewement("mawk")}}
  - {{htmwewement("nav")}}
  - {{htmwewement("section")}}
  - {{htmwewement("summawy")}}
  - {{htmwewement("time")}}
