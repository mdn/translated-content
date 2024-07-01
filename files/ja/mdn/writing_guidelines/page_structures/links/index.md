---
title: リンクマクロ
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

MDN には MDN コンテンツへの常に最新のリンクを作成するためのマクロが数多く指定されています。このガイドでは、別のページへの単一のリンクや、文書のサブページすべてへのリンクのリストを含めるために使用することができる MDN 相互参照マクロについて学びます。

## リンクの一覧

MDN はリンクのリストを作成するマクロを提供しています。

- [`\{{LandingPageListSubPages}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs)

  - : 現在のページのサブページの定義リスト ({{HTMLElement("dl")}}) を挿入し、各ページのタイトルを {{HTMLElement("dt")}} の項、最初の段落を {{HTMLElement("dd")}} の項に入れます。

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpagesForSidebar.ejs)

  - : 引数なしで記載された場合、現在のページのサブページへのリンクの順序付きリストを挿入します。このマクロは[サイドバー](/ja/docs/MDN/Writing_guidelines/Page_structures/Sidebars#sidebars_adding_additional_content)（マクロの名前の由来）内で使用することが多く、箇条書きは表示されません。最初の引数はリンクツリーの親ページのスラッグです。リンクテキストはコードとして表示されます。 2 つ目の引数に `true` または `1` を設定するには、リンクをプレーンテキストに変換します。 3 つ目の引数に `true` または `1` を設定すると、リストの一番上にあるスラッグ（親）ページへのリンクを "Overview" というリンクテキストで追加します。

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)

  - : 現在のページ （または指定したページ） の子を出力先として使用するクイックリンクのセットを作成します。これは 2 階層までの階層リストを作成します。ページのタイトルはリンクテキストとして、概要はツールチップとして使用します。

### リンクリストの例

このページとその兄弟ページを含むリンクの順序リストを記載するには、以下のように書いてください。

```md
\{{ListSubpagesForSidebar("/ja/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

これは次のように表示されます。

{{ListSubpagesForSidebar("/ja/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}

## 相互参照リンク

一部のマクロは、属性、要素、プロパティ、データ型、API を含む CSS、JavaScript、SVG、HTML 機能を相互参照する単一のリンクを作成します。単一のリンクを作成するマクロは、参照する機能を少なくとも 1 つの引数として要求されます。

次のマクロがあります。

- [`\{{CSSxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/cssxref.ejs)
- [`\{{DOMxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/DOMxRef.ejs)
- [`\{{HTMLElement("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs)
- [`\{{glossary("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs)
- [`\{{JSxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/jsxref.ejs)
- [`\{{SVGAttr("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/SVGAttr.ejs)
- [`\{{SVGElement("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/SVGElement.ejs)
- [`\{{HTTPMethod("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTTPMethod.ejs)
- [`\{{HTTPStatus("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTTPStatus.ejs)

これらのマクロの最初の引数には、参照する文書のスラッグの最後の部分を指定します。例えば、 HTML 要素の場合は `\{{HTMLElement("")}}` を記載し、スラッグの `Web/HTML/Element/` の後に来る部分を最初の引数にします。 `\{{CSSxRef("")}}` では、スラッグの `Web/CSS/` の後に来る部分を追加します。リンク先はこのページになります。

既定では、 `\{{HTMLElement()}}` の場合、表示されるテキストは最初の引数に書かれたリンク先のリソースになります。これは望み通りではないかもしれません。例えば、範囲入力型のスラッグは `Web/HTML/Element/input/range` です。 `\{{HTMLElement("input/range")}}` と記載すると、 "{{HTMLElement("input/range")}}" が生成されます。これは望み通りではありませんね。マクロはすべて追加の引数を受け入れるので、表示したいテキストを提供することができます。

2 つ目の引数が存在する場合は、リンクテキストを提供します。範囲入力型の場合、 `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` と書くと、 "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" となります。この具体的なマクロは、 2 つ目の引数に空白が含まれている場合、 {{htmlelement("code")}}と山括弧が除去されるので、山括弧とコードタグを追加しました。

マクロによって異なります。

HTML コードの意味づけと CSS コードをコーディングスタイルにしないために、一部の相互参照マクロは `"nocode"` という引数を記載して、このスタイル設定を無効にしています。

例えば、`\{{CSSxRef("background-color")}}` はコードリンク "{{CSSxRef("background-color")}}" を作成し、 `\{{domxref("CSS.supports_static", "check support", "nocode")}}` はプレーンテキストリンク "{{domxref("CSS.supports_static", "check support", "nocode")}}" を作成します。

使用するマクロがどのように動作するのか、また様々な引数を理解するために、必ずソースコードを見てください。引数は一般的に文書化されていますが、 `\{{HTMLElement("")}}` マクロで見た「2 つ目の引数に空白が含まれる場合はコードとしてレンダリングしない」というような例外は、コード内にはありますが、それ以外で文書化されていません。

各マクロがどの引数に対応しているか、また各マクロの引数の順序を知るには、上にリンクしたマクロのソースファイルにドキュメントがあります。[よく使用するマクロのリスト](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)があり、それぞれページの本文コンテンツ領域にリンクが出力されています。

## 関連情報

- [マクロの使用](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros](https://github.com/mdn/yari/tree/main/kumascript/macros) (Github)
- [よく使われるマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)、 BCD マクロ (`\{{Compat}}`, `\{{Compat(&lt;feature>)}}`, `\{{Compat(&lt;feature>, &lt;depth>)}}`) や仕様書マクロ (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [バナーと通知のガイド](/ja/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)、`\{{SeeCompatTable}}`, `\{{Deprecated_Header}}`, `\{{SecureContext_Header}}` などのマクロ。
