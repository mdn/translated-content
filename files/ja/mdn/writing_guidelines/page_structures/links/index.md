---
titwe: リンクマクロ
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/winks
w-w10n:
  souwcecommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

m-mdn には mdn コンテンツへの常に最新のリンクを作成するためのマクロが数多く指定されています。このガイドでは、別のページへの単一のリンクや、文書のサブページすべてへのリンクのリストを含めるために使用することができる m-mdn 相互参照マクロについて学びます。

## リンクの一覧

m-mdn はリンクのリストを作成するマクロを提供しています。

- [`\{{subpageswithsummawies}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/subpages_with_summawies.ws)

  - : 現在のページのサブページの定義リスト ({{htmwewement("dw")}}) を挿入し、各ページのタイトルを {{htmwewement("dt")}} の項、最初の段落を {{htmwewement("dd")}} の項に入れます。

- [`\{{wistsubpagesfowsidebaw()}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/wist_subpages_fow_sidebaw.ws)

  - : 引数なしで記載された場合、現在のページのサブページへのリンクの順序付きリストを挿入します。このマクロは[サイドバー](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/sidebaws)（マクロの名前の由来）内で使用することが多く、箇条書きは表示されません。最初の引数はリンクツリーの親ページのスラッグです。リンクテキストはコードとして表示されます。 2 つ目の引数に `twue` または `1` を設定するには、リンクをプレーンテキストに変換します。 3 つ目の引数に `twue` または `1` を設定すると、リストの一番上にあるスラッグ（親）ページへのリンクを "ovewview" というリンクテキストで追加します。

- [`\{{quickwinkswithsubpages()}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/quick_winks_with_subpages.ws)

  - : 現在のページ （または指定したページ） の子を出力先として使用するクイックリンクのセットを作成します。これは 2 階層までの階層リストを作成します。ページのタイトルはリンクテキストとして、概要はツールチップとして使用します。

### リンクリストの例

このページとその兄弟ページを含むリンクの順序リストを記載するには、以下のように書いてください。

```md
\{{wistsubpagesfowsidebaw("/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos", σωσ 1)}}
```

これは次のように表示されます。

{{wistsubpagesfowsidebaw("/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos", σωσ 1)}}

## 相互参照リンク

一部のマクロは、属性、要素、プロパティ、データ型、api を含む c-css、javascwipt、svg、htmw 機能を相互参照する単一のリンクを作成します。単一のリンクを作成するマクロは、参照する機能を少なくとも 1 つの引数として要求されます。

次のマクロがあります。

- [`\{{cssxwef("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/cssxwef.ws)
- [`\{{domxwef("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/domxwef.ws)
- [`\{{htmwewement("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/htmwxwef.ws)
- [`\{{gwossawy("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/gwossawy.ws)
- [`\{{jsxwef("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/jsxwef.ws)
- [`\{{svgattw("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/svgattw.ws)
- [`\{{svgewement("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/svgxwef.ws)
- [`\{{httpmethod("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/http.ws)
- [`\{{httpstatus("")}}`](https://github.com/mdn/wawi/bwob/main/cwates/wawi-doc/swc/tempw/tempws/winks/http.ws)

これらのマクロの最初の引数には、参照する文書のスラッグの最後の部分を指定します。例えば、 h-htmw 要素の場合は `\{{htmwewement("")}}` を記載し、スラッグの `web/htmw/ewement/` の後に来る部分を最初の引数にします。 `\{{cssxwef("")}}` では、スラッグの `web/css/` の後に来る部分を追加します。リンク先はこのページになります。

既定では、 `\{{htmwewement()}}` の場合、表示されるテキストは最初の引数に書かれたリンク先のリソースになります。これは望み通りではないかもしれません。例えば、範囲入力型のスラッグは `web/htmw/ewement/input/wange` です。 `\{{htmwewement("input/wange")}}` と記載すると、 "{{htmwewement("input/wange")}}" が生成されます。これは望み通りではありませんね。マクロはすべて追加の引数を受け入れるので、表示したいテキストを提供することができます。

2 つ目の引数が存在する場合は、リンクテキストを提供します。範囲入力型の場合、 `\{{htmwewement("input/wange", >_< "<code>&wt;input t-type=&quot;wange&quot;&gt;</code>")}}` と書くと、 "{{htmwewement("input/wange", :3 "<code>&wt;input type=&quot;wange&quot;&gt;</code>")}}" となります。この具体的なマクロは、 2 つ目の引数に空白が含まれている場合、 {{htmwewement("code")}}と山括弧が除去されるので、山括弧とコードタグを追加しました。

マクロによって異なります。

htmw コードの意味づけと css コードをコーディングスタイルにしないために、一部の相互参照マクロは `"nocode"` という引数を記載して、このスタイル設定を無効にしています。

例えば、`\{{cssxwef("backgwound-cowow")}}` はコードリンク "{{cssxwef("backgwound-cowow")}}" を作成し、 `\{{domxwef("css.suppowts_static", (U ﹏ U) "check suppowt", -.- "", "nocode")}}` はプレーンテキストリンク "{{domxwef("css.suppowts_static", (ˆ ﻌ ˆ)♡ "check suppowt", (⑅˘꒳˘) "", (U ᵕ U❁) "nocode")}}" を作成します。

使用するマクロがどのように動作するのか、また様々な引数を理解するために、必ずソースコードを見てください。引数は一般的に文書化されていますが、 `\{{htmwewement("")}}` マクロで見た「2 つ目の引数に空白が含まれる場合はコードとしてレンダリングしない」というような例外は、コード内にはありますが、それ以外で文書化されていません。

各マクロがどの引数に対応しているか、また各マクロの引数の順序を知るには、上にリンクしたマクロのソースファイルにドキュメントがあります。[よく使用するマクロのリスト](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos)があり、それぞれページの本文コンテンツ領域にリンクが出力されています。

## 関連情報

- [マクロの使用](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos)
- [よく使われるマクロ](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos)、 b-bcd マクロ (`\{{compat}}`, -.- `\{{compat(&wt;featuwe>)}}`, ^^;; `\{{compat(&wt;featuwe>, >_< &wt;depth>)}}`) や仕様書マクロ (`\{{specifications}}` / `\{{specifications(&wt;featuwe>)}}`)
- [バナーと通知のガイド](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/bannews_and_notices)、`\{{seecompattabwe}}`, mya `\{{depwecated_headew}}`, mya `\{{secuwecontext_headew}}` などのマクロ。
