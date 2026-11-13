---
title: よく使われるマクロ
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

このページでは、MDN のビルドシステムである [rari](https://github.com/mdn/rari) が MDN で使うために提供している汎用マクロの多くを紹介します。
MDN コンテンツでの一般的な使い方については、[マクロの使い方](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros)を参照してください。

## リンク

MDN では、用語集やリファレンスページなどへのリンクを簡単に作成するためのリンクマクロを多数提供しています。

リンクマクロは、簡潔で翻訳に適しているため、通常の Markdown リンクよりも推奨されます。
例えば、マクロを使って作成された用語集やリファレンスへのリンクは翻訳する必要がありません。他のロケールでは、自動的に適切なファイルにリンクされます。

これらのマクロについては、[リンクマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Links)のページでも詳しく説明しています。

### 用語集の用語へのリンク

[`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) マクロは、[MDN 用語集](/ja/docs/Glossary)にある指定した用語のページへのリンクを作成します。
このマクロは、必須の引数を 1 つと、任意の引数を 1 つ受け付けます。

- 用語は必須の引数です。例えば、"HTML" の用語集ページへリンクするには `\{{Glossary("HTML")}}` と記述し、リンク {{Glossary("HTML")}} を生成します。
- 表示テキストは任意の引数です。例えば、前の例のリンクを `\{{Glossary("HTML", "HyperText Markup Language")}}` と記述すると、リンク {{Glossary("HTML", "HyperText Markup Language")}} が生成されます。

### リファレンスページへのリンク

MDN の特定のリファレンス領域（HTML、CSS、JavaScript、SVG、HTTP など）のページに、ロケールに依存しないリンクを張るためのマクロが用意されています。

マクロの使い方は簡単です。
第一引数にリンク先の項目名を指定するだけです。
用語集マクロと同様に、ほとんどのリファレンスマクロでは第 2 引数で表示テキストを変更できます。

詳しくは、次の表の最初の列にあるリンク先のソースファイルを参照してください。

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
        <code>\{{CSSxRef("cursor")}}</code> は {{CSSxRef("cursor")}} となります。<br />
        <code>\{{CSSxRef(":hover")}}</code> は {{CSSxRef(":hover")}} となります。<br />
        <code>\{{CSSxRef("@media")}}</code> は {{CSSxRef("@media")}} となります。<br />
        <code>\{{CSSxRef("pow")}}</code> は {{CSSxRef("pow")}} となります。<br /><br />
        詳しくは、<a href="/ja/docs/MDN/Writing_guidelines/Page_structures/Links">CSS リファレンスでの <code>CSSxRef</code> の使用</a>を参照してください。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/ja/docs/Web/API">DOM リファレンス</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("document")}}</code> は {{DOMxRef("Document")}} になります。<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> は {{DOMxRef("document.getElementsByName()")}} になります。<br />
        <code>\{{DOMxRef("Node")}}</code> は {{DOMxRef("Node")}} になります。<br />
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements">HTML 要素リファレンス</a> (/Web/HTML/Reference/Elements)
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
        <a href="/ja/docs/Web/SVG/Reference/Attribute">SVG の属性リファレンス</a> (/Web/SVG/Reference/Attribute)
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
        <a href="/ja/docs/Web/SVG/Reference/Element">SVG 要素リファレンス</a> (/Web/SVG/Reference/Element)
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
        <a href="/ja/docs/Web/HTTP/Reference/Headers">HTTP ヘッダー</a> (/Web/HTTP/Reference/Headers)
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> は {{HTTPHeader("ACCEPT")}} になります。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td>
        <a href="/ja/docs/Web/HTTP/Reference/Methods">HTTP リクエストメソッド</a> (/Web/HTTP/Reference/Methods)
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
        <a href="/ja/docs/Web/HTTP/Reference/Status">HTTP レスポンスステータスコード</a> (/Web/HTTP/Reference/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> は {{HTTPStatus("404")}} になります。
      </td>
    </tr>
  </tbody>
</table>

### 複数ページのガイドにナビゲーション補助を追加

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs)、[`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs)、[`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) は、一連の記事の中でのナビゲーションコントロールを提供します。
一方向用のマクロでは、前または次の記事のスラッグを 1 つだけ引数に指定します。
[`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) マクロは 2 つの引数を取り、最初の引数に前の記事のスラッグ、2 つ目の引数に次の記事のスラッグを指定します。

## コードサンプルの生成

### ライブサンプル

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) はコードサンプルの出力をページに埋め込むのに使います。解説は[ライブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Live_samples)のページにあります。
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) はコードサンプルの出力を含むページへのリンクを作成します。解説は[ライブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Live_samples)のページにあります。
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) を使うと、GitHub ページからライブサンプルを埋め込むことができます。
  詳しい情報は [GitHub ライブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples)にあります。

## 汎用的な書式を追加

### API ドキュメントにインラインインジケーターを追加

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) と [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) は API 文書の中で通常、オブジェクトのプロパティまたは関数の引数のリストを記述するのに使われます。

用法: `\{{Optional_Inline}}` または `\{{ReadOnlyInline}}` です。
例:

- `isCustomObject` {{ReadOnlyInline}}
  - : `true` の場合、オブジェクトはカスタムオブジェクトであることを示します。
- `parameterX` {{optional_inline}}
  - : …を示します。

## 状態と互換性のインジケーターを追加

### 追加引数のないインラインインジケーター

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

### 技術を指定できるインラインインジケーターを追加

#### 非推奨のもの

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) はインラインの非推奨 (deprecated) マークを付け、その API が公式には非推奨（または削除済み）であり、使用を控えるべきであることを示します。
**deprecated** の定義の詳細については、[実験的、非推奨、廃止](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)の記事を参照してください。

##### 構文

`\{{Deprecated_Inline}}`

##### 例

- アイコン: {{Deprecated_Inline}}

### ページまたはセクションのヘッダーを示すインジケーター

これらのテンプレートは、前述の対応するインラインマークと同じ意味を持ちます。
テンプレートはリファレンスページのメインタイトル（パンくずリストがある場合はその下）の直下に置きます。
ページ内のセクションをマークアップすることもできます。

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) は[実験的な機能](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)のドキュメントのページに使用してください。
  例: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  インターフェイスページ、API 概要ページ、API エントリーポイント（例: `navigator.xyz`）などのメインページで使用します。通常、メソッドやプロパティページなどのサブページでは使用しません。
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

## ブラウザーの互換性と仕様書へのリンク

以下のマクロはすべてのリファレンスページに記載されていますが、すべてのページ型でも対応しています。

- `\{{Compat}}`
  - : フロントマターの `browser-compat` で定義された機能の[互換性一覧表](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)を生成します。

- `\{{Specifications}}`
  - : フロントマターに `spec-urls` がある場合はそこに定義された機能の[仕様書一覧表](/ja/docs/MDN/Writing_guidelines/Page_structures/Specification_tables)を挿入します。ない場合は、フロントマターの `browser-compat` で定義されたブラウザー互換性データに掲載されている仕様書を使います。

## 関連情報

- [リンクマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Links)
- [サイドバーマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [機能状態マクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [その他のマクロ](/ja/docs/MDN/Writing_guidelines/Page_structures/Macros/Other)（使用頻度の低いマクロや非推奨のマクロ）
- [ページのテンプレート](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types#ページテンプレート)
- [ページの構成要素](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#ページの構成要素)
