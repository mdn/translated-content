---
title: よく使われるマクロ
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

このページには MDN で使うために作られた汎用のマクロの大部分が掲載されています。
これらのマクロの使い方については、[マクロの使い方](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros)を参照してください。

[その他のマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Other)には、めったに使われないマクロ、特殊な文脈でのみ使われるマクロ、使用が推奨されないマクロについての情報が書かれています。

## リンク

MDN では、リファレンスページや用語集などへのリンクを簡単に作成するためのリンクマクロを多数提供しています。

リンクマクロは、簡潔で翻訳に適しているため、通常の Markdown リンクよりも推奨されます。
例えば、マクロを使って作成された用語集やリファレンスのリンクは、翻訳する必要がありません。 他のロケールでは、自動的に正しいバージョンのファイルへリンクされます。

### 用語集へのリンク

[`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) マクロは、 MDN の[用語集](/ja/docs/Glossary)の中の指定した用語の項目へのリンクを作成するのに使います。
このマクロは、 1 つの必須の引数または 2 つの任意の引数を受け付けます。

1. 用語の名前（"HTML" など）: `\{{Glossary("HTML")}}` は {{Glossary("HTML")}} となります。
2. オプション: 記事内で用語名の代わりに表示するテキスト: `\{{Glossary("CSS", "Cascading Style Sheets")}}` は {{Glossary("CSS", "Cascading Style Sheets")}} となります。

### リファレンスのページへのリンク

MDN の特定の参照領域（JavaScript、CSS、HTML 要素、SVG など）のページに、ロケールに依存しないリンクを張るためのマクロが用意されています。

マクロの使い方は簡単です。
必要なのは、第一引数にリンクするアイテムの名前を指定することだけです。
ほとんどのマクロは、第二引数で表示テキストを変更することができます（ドキュメントは、以下の左端のコラムのリンクから参照できます）。

<table class="standard-table">
  <thead>
    <tr>
      <th>マクロ</th>
      <th>リンク先のページ</th>
      <th>例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef</a>
      </td>
      <td>
        <a href="/ja/docs/Web/CSS/Reference">CSS リファレンス</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> は {{CSSxRef("cursor")}} となります。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/ja/docs/Web/API">DOM リファレンス</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> または <code>\{{DOMxRef("Document")}}</code> は {{DOMxRef("Document")}} になります。<br />
        <code>\{{DOMxRef("Document.getElementsByName()")}}</code> は {{DOMxRef("Document.getElementsByName()")}} になります。<br />
        <code>\{{DOMxRef("Node")}}</code> は {{DOMxRef("Node")}} になります。<br />
        第 2 引数を使用して表示するテキストを変更することができます。<code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> は {{DOMxRef("Document.getElementsByName()","getElementsByName()")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Element">HTML 要素リファレンス</a> (/Web/HTML/Element)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> は {{HTMLElement("select")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef</a>
      </td>
      <td>
        <a href="/ja/docs/Web/JavaScript/Reference">JavaScript リファレンス</a> (/Web/JavaScript/Reference)
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> は {{JSxRef("Promise")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td>
        <a href="/ja/docs/Web/SVG/Reference/Attribute">SVG の属性リファレンス</a> (/Web/SVG/Attribute)
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> は {{SVGAttr("d")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement</a>
      </td>
      <td>
        <a href="/ja/docs/Web/SVG/Reference/Attribute">SVG 要素リファレンス</a> (/Web/SVG/Element)
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> は {{SVGElement("view")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTTP/Reference/Headers">HTTP ヘッダー</a> (/Web/HTTP/Headers)
      </td>
      <td>
        <code>\{{HTTPHeader("Accept")}}</code> は {{HTTPHeader("Accept")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td>
        <a href="/ja/docs/Web/HTTP/Reference/Methods">HTTP リクエストメソッド</a> (/Web/HTTP/Methods)
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> は {{HTTPMethod("HEAD")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPStatus</a>
      </td>
      <td>
        <a href="/ja/docs/Web/HTTP/Reference/Status">HTTP レスポンスステータスコード</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> は {{HTTPStatus("404")}} になります。
      </td>
    </tr>
  </tbody>
</table>

### 複数のページからなるガイドのためのナビゲーション補助

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs)、[`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs)、[`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) は、一連の記事の中でのナビゲーションコントロールを提供します。
一方向用のテンプレートでは、 前の または 次の 記事の Wiki 位置を指す 1 つの引数が必要です。
[`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) については、前の記事、次の記事を指す 2 つの引数を取ります。
最初の引数が前の記事を指し、2 番めの引数が次の記事を指します。

## コードのサンプル

### ライブサンプル

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) はコードサンプルの出力をページに埋め込むのに使います。解説は[ライブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Live_samples)のページにあります。
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) はコードサンプルの出力を含むページへのリンクを作成します。解説は[ライブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Live_samples)のページにあります。
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) は GitHub ページからライブサンプルを埋め込むことができます。
  詳しい情報は [GitHub ライブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples)にあります。

## 汎用的な書式化

### API ドキュメントのためのインラインインジケーター

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) と [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) は API 文書の中で通常、オブジェクトのプロパティまたは関数の引数のリストを記述するのに使われます。

用法: `\{{Optional_Inline}}` または `\{{ReadOnlyInline}}` です。
例:

- `isCustomObject` {{ReadOnlyInline}}
  - : `true` の場合、オブジェクトはカスタムオブジェクトであることを示します。
- `parameterX` {{optional_inline}}
  - : ごにょごにょごにょ...

## 状態と互換性についての表示

### インラインインジケーター (追加引数なし)

#### 標準外のもの

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) は、その API が標準化されておらず、また標準化の予定もないことを示すインラインマークを付けます。

##### 構文

`\{{Non-standard_Inline}}`

##### 例

- アイコン: {{Non-standard_Inline}}

#### 実験的なもの

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) は、その API が広く実装されておらず、また将来変更される可能性があることを示すインラインマークを付けます。
**experimental** の定義の詳細については、[実験的、非推奨、廃止](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)の記事を参照してください。

##### 構文

`\{{Experimental_Inline}}`

##### 例

- アイコン: {{Experimental_Inline}}

### 特定の技術の対応状況を表すインラインインジケーター

#### 非推奨のもの

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) はインラインの非推奨 (deprecated) マークを付け、その API が公式には非推奨であり、使用を控えるべきであることを示します。
**deprecated** の定義の詳細については、[実験的、非推奨、廃止](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)の記事を参照してください。

##### 構文

`\{{Deprecated_Inline}}`

##### 例

- アイコン: {{Deprecated_Inline}}

### ページまたはセクションのヘッダーを示すインジケーター

これらのテンプレートが示すのは、上記の対応するインラインマークと同じものです。テンプレートはリファレンスページのメインページタイトルの (または、パンくずリストがあるならばその) 直下に置きます。
ページ内のセクションをマークアップすることもできます。

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) は[実験的な機能](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)のドキュメントのページに使用してください。
  例: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  インターフェイスページ、 API 概要ページ、 API エントリーポイント（例: `navigator.xyz`）などのメインページで使用が、通常メソッドやプロパティページなどのサブページでは使用するべきではありません。
  例: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### ウェブワーカーで使用できる機能であることを示す

[`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) マクロは、その機能が[ワーカーコンテキスト](/ja/docs/Web/API/Web_Workers_API)で有効であることを示すためのローカライズされた注釈ボックスを挿入するのに使われます。
また、指定したワーカーコンテキストで機能が動作することを示す引数を渡すこともできます。

##### 構文

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### 例

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## ブラウザーの互換性と仕様書のマクロ

以下のマクロはすべてのリファレンスページに記載されていますが、すべてのページ型でも対応しています。

- `\{{Compat}}` / `\{{Compat(&lt;feature>)}}` / `\{{Compat(&lt;feature>, &lt;depth>)}}`
  - : 引数として渡した機能の [互換性一覧表](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) を生成します。引数が指定されていない場合、フロントマターで `browser-compat` によって定義された機能が既定で指定されます。オプションの depth 引数は、どの程度の深さのサブ機能を表に追加するかを設定します。省略した場合は、既定で 1 となり、BCD から最初のレベルのサブ機能のデータのみが掲載されるという意味になります。

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : 引数で指定した機能の仕様を掲載します。引数が渡されなかった場合、掲載される仕様書は、フロントマターに `spec-urls` の値が存在する場合はその値によって定義され、存在しない場合はフロントマターの `browser-compat` によって定義されたブラウザー互換性データに掲載されている仕様によって定義されます。仕様書は外部リンクとしてレンダリングされます。

## 関連情報

- [サイドバーマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [ページテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types#ページテンプレート)
- [ページコンポーネント](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#ページの構成要素)
- [機能状態マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
