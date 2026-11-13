---
title: リンクマクロ
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: abc914f085fb9913c41c4cd4453da432e9d4e761
---

MDN には MDN コンテンツへの常に最新のリンクを作成するためのマクロが数多く指定されています。このガイドでは、別のページへの単一のリンクや、文書のサブページすべてへのリンクのリストを含めるために使用することができる MDN 相互参照マクロについて学びます。

## リンクの一覧

MDN はリンクのリストを作成するマクロを提供しています。

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : 現在のページのサブページの定義リスト ({{HTMLElement("dl")}}) を挿入し、各ページのタイトルを {{HTMLElement("dt")}} の項、最初の段落を {{HTMLElement("dd")}} の項に入れます。

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : 引数なしで記載された場合、現在のページのサブページへのリンクの順序付きリストを挿入します。最初の引数はリンクツリーの親ページのスラッグです。リンクテキストはコードとして表示されます。2 つ目の引数に `true` または `1` を設定すると、リンクをプレーンテキストに変換します。3 つ目の引数に `true` または `1` を設定すると、リストの一番上にスラッグ（親）ページへのリンクを追加し、リンクテキストを "Overview" にします。

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : 現在のページ （または指定したページ） の子を出力先として使用するクイックリンクのセットを作成します。これは 2 階層までの階層リストを作成します。ページのタイトルはリンクテキストとして、概要はツールチップとして使用します。

例えば、このページとその兄弟ページを含むリンクの順序付きリストを挿入するには、以下のように記述します。

```md
\{{ListSubpagesForSidebar("/ja/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## 相互参照リンク

一部のマクロは、属性、要素、プロパティ、データ型、API を含む CSS、JavaScript、SVG、HTML 機能を相互参照する単一のリンクを作成します。単一のリンクを作成するマクロは、参照する機能を少なくとも 1 つの引数として要求されます。

次のマクロがあります。

- [`\{{CSSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs)
- [`\{{DOMxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs)
- [`\{{HTMLElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)
- [`\{{glossary("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)
- [`\{{JSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs)
- [`\{{SVGAttr("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs)
- [`\{{SVGElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs)
- [`\{{HTTPMethod("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)
- [`\{{HTTPStatus("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)

### 基本的な使い方

最初の必須引数には、リンク先文書のスラッグの末尾部分から機能名を取り出して指定します。
例えば、スラッグが `Web/HTML/Reference/Elements/select` の `<select>` 要素のページへリンクするには、マクロを `\{{HTMLElement("select")}}` と記述します。
これにより、コード書式と山括弧が付いたリンク "{{HTMLElement("select")}}" が生成されます。
これは、マクロが機能の種類に応じた書式をリンクテキストに追加するためです。
そのため、マクロを使うときに指定するのは機能名だけで済みます。
これが、マクロを使ったリンクの追加が簡単な理由です。

### 表示テキストのカスタマイズ

デフォルトでは、リンクの表示テキストにマクロの最初の引数が使われます。別のテキストを表示するには、2 つ目の引数を使います。例えば、`\{{JSxRef("Array")}}` は {{JSxRef("Array")}} を生成します。このテキストを変えるには、`\{{JSxRef("Array", "JavaScript arrays")}}` と記述し、{{JSxRef("Array", "JavaScript arrays")}} を生成します。マクロのデフォルトの動作により、生成されたリンクにはコード書式が適用されていることがわかります。コード書式を無効にする方法については、[コード書式の無効化](#コード書式の無効化)を参照してください。

### 入れ子になったページへのリンク

参照対象の機能によっては、関連機能のページが入れ子になっています。例えば、HTML の `<input>` 要素には、入力型ごとに複数の入れ子ページがあり、範囲入力型のページのスラッグは `Web/HTML/Reference/Elements/input/range` です。

`\{{HTMLElement("input/range")}}` のように最初の引数にパス情報を渡すと、リンク "{{HTMLElement("input/range")}}" が生成されますが、これは望ましい表示ではありません。2 つ目の引数を使って別のリンクテキストを指定します。範囲入力型へのリンクには、`\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` と記述し、"{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}" を生成します。（2 つ目の引数に `input` と `type` の間のような空白が含まれていると、このマクロはコード書式を除去します。そのため、ここでは {{HTMLElement("code")}} タグを明示的に追加しています。）

### CSS リファレンスでの `CSSxRef` の使用

マクロごとに動作は少しずつ異なります。

`CSSxRef` マクロは、最初の引数に指定した機能名から適切なパスを自動的に判断します。機能がプロパティ、セレクター、アットルール、関数、データ型のどれに該当するかを検出し、`Web/CSS/Reference/` 以下の適切な文書にリンクします。

例えば、次のようになります。

- `\{{CSSxRef("cursor")}}` は、`Web/CSS/Reference/Properties/cursor` のプロパティページにリンクします。
- `\{{CSSxRef(":hover")}}` は、`Web/CSS/Reference/Selectors/:hover` の擬似クラスページにリンクします。
- `\{{CSSxRef("@media")}}` は、`Web/CSS/Reference/At-rules/@media` のアットルールページにリンクします。
- `\{{CSSxRef("pow")}}` は、`Web/CSS/Reference/Values/pow` の関数ページにリンクします。
- `\{{CSSxRef("<color>")}}` は、`Web/CSS/Reference/Values/color_value` のデータ型ページにリンクします。

`HTMLElement` マクロと同様に、`CSSxRef` マクロは機能の種類に応じてリンクテキストに適切な書式を追加します。例えば、`\{{CSSxRef("acos")}}` は {{CSSxRef("acos")}} のように、生成されるリンクテキストに括弧を追加します。

`CSSxRef` マクロには、ほかにも次のような動作があります。

- 入れ子になったページは自動的に処理されます。例えば、次のとおりです。
  - `\{{CSSxRef("basic-shape/circle")}}` は、`Web/CSS/Reference/Values/basic-shape/circle` の文書にリンクし、リンクテキストは {{CSSxRef("basic-shape/circle")}} になります。
  - `\{{CSSxRef("animation-timeline/scroll")}}` は、`Web/CSS/Reference/Properties/animation-timeline/scroll` の文書にリンクし、リンクテキストは {{CSSxRef("animation-timeline/scroll")}} になります。
- CSS 機能には同じ名前のものがあります。ディレクトリーの場所に加えて、スラッグには種類を示す接尾辞が含まれます。例えば、`position` プロパティのスラッグは `Web/CSS/Reference/Properties/position` である一方、`<position>` データ型のスラッグは `Web/CSS/Reference/Values/position_value` です。

  `CSSxRef` マクロは、このような同名の機能を自動的に処理します。`\{{CSSxRef("position")}}` は {{CSSxRef("position")}} のようにプロパティページにリンクし、`\{{CSSxRef("<position>")}}` は {{CSSxRef("&lt;position&gt;")}} のようにデータ型ページにリンクします。

  同じ名前を持つほかの機能には、次のものがあります。
  - `color` プロパティ (`Web/CSS/Reference/Properties/color`) と `<color>` データ型 (`Web/CSS/Reference/Values/color_value`)

    **マクロ**: `\{{CSSxRef("color")}}` と `\{{CSSxRef("<color>")}}`

  - `fit-content()` 関数 (`Web/CSS/Reference/Values/fit-content_function`) と `fit-content` キーワード (`Web/CSS/Reference/Values/fit-content`)

    **マクロ**: `\{{CSSxRef("fit-content()")}}` と `\{{CSSxRef("fit-content")}}`

  - `flex` プロパティ (`Web/CSS/Reference/Properties/flex`) と `<flex>` データ型 (`Web/CSS/Reference/Values/flex_value`)

    **マクロ**: `\{{CSSxRef("flex")}}` と `\{{CSSxRef("<flex>")}}`

  - `:host` 擬似クラス (`Web/CSS/Reference/Selectors/:host`) と `:host()` 擬似クラス関数 (`Web/CSS/Reference/Values/:host_function`)

    **マクロ**: `\{{CSSxRef(":host")}}` と `\{{CSSxRef(":host()")}}`

  - `overflow` プロパティ (`Web/CSS/Reference/Properties/overflow`) と `<overflow>` データ型 (`Web/CSS/Reference/Values/overflow_value`)

    **マクロ**: `\{{CSSxRef("overflow")}}` と `\{{CSSxRef("<overflow>")}}`

  - `url()` 関数 (`Web/CSS/Reference/Values/url_function`) と `<url>` データ型 (`Web/CSS/Reference/Values/url_value`)

    **マクロ**: `\{{CSSxRef("url()")}}` と `\{{CSSxRef("<url>")}}`

### コード書式の無効化

相互参照マクロは、デフォルトでリンクテキストにコード書式を適用します。
マクロによって適用される HTML コードの意味づけや CSS コードのスタイルを避けるには、`"nocode"` 引数を使います。

例えば、`\{{CSSxRef("background-color")}}` はコード書式のリンク "{{CSSxRef("background-color")}}" を生成し、一方 `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` はプレーンテキストのリンク "{{domxref("CSS.supports_static", "check support", "", "nocode")}}" を生成します。同様に、JavaScript の配列へのリンクにコード書式を適用しない場合は、`\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}` と記述して "{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}" を生成します。

## 関連情報

- [マクロの使用](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [よく使われるマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)。BCD マクロ (`\{{Compat}}`) や仕様書マクロ (`\{{Specifications}}`) などがあります。
- [バナーと通知のガイド](/ja/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)。`\{{SeeCompatTable}}` や `\{{SecureContext_Header}}` などのマクロがあります。
