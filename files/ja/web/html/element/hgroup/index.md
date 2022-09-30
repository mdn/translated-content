---
title: <hgroup>
slug: Web/HTML/Element/hgroup
---

{{HTMLRef}}

> **警告:** `<hgroup>` は支援技術にサポートされていないため、使用すべきではありません。使用すると、中にある見出し要素の認識に悪影響を与えます。
>
> 詳細については、以下の[使用上の注意](#usage_notes)を参照してください。

**HTML の `<hgroup>` 要素**は、文書のセクションの、複数レベルの見出しを表します。これは [`<h1>–<h6>`](/ja/docs/Web/HTML/Element/Heading_Elements) 要素のセットをグループ化します。

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリ</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >, 見出しコンテンツ, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        1個以上の {{HTMLElement("h1")}}, {{HTMLElement("h2")}},
        {{HTMLElement("h3")}},{{HTMLElement("h4")}},
        {{HTMLElement("h5")}},{{HTMLElement("h6")}}
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

> **メモ:** `<hgroup>` 要素は HTML5 (W3C) 仕様から削除されましたが、 WHATWG 版の HTML には依然として含まれています。ほとんどのブラウザーで部分的に実装されており、実装が削除される可能性は低くなっています。
> ただし、`<hgroup>` 要素の主要な目的は [HTML 仕様書で定義されたアウトラインのアルゴリズム](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#the_html5_outline_algorithm)によって見出しをどのように表示するかに作用することですが、**どのブラウザーでもアウトラインのアルゴリズムは実装されていないため**、 `<hgroup>` のセマンティクスは実際のところ、理論上のものになっています。
> HTML5 (W3C) 仕様書では、`<hgroup>`を使用せずに[副見出し、サブタイトル、代替タイトル、スローガン](https://www.w3.org/TR/html52/common-idioms-without-dedicated-elements.html#common-idioms-without-dedicated-elements)をマークアップする方法についてアドバイスを提供しています。

`<hgroup>` 要素は、*複数レベル*の見出しを構成するために文書のセクションの主見出しと副次的な見出し（副見出しや副題など）をグループ化することが可能です。

言い換えると、 `<hgroup>` 要素は副次的な子の [`<h1>–<h6>`](/ja/docs/Web/HTML/Element/Heading_Elements) がアウトライン内で独自のセクションを生成することを妨げます。これらの [`<h1>–<h6>`](/ja/docs/Web/HTML/Element/Heading_Elements) 要素は `<hgroup>` の子でなければ通常どおりです。

よって [HTML 仕様書で定義されているアウトラインのアルゴリズム](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#the_html5_outline_algorithm)で生成される理論的なアウトラインでは、`<hgroup>` は全体としてひとつの論理的な見出しを構成します。そして `<hgroup>` の子である [`<h1>–<h6>`](/ja/docs/Web/HTML/Element/Heading_Elements) とともに、理論的なアウトライン内でひとつの論理的な見出しを構成するために*複数レベル*のユニットとしてのアウトラインになります。

このようなアウトラインの (理論的ではない) *描画*ビューを生成するために、マルチレベルの性質を伝えるため `<hgroup>` の見出しをどのように描画するかについて、レンダリングツールのデザインでいくつかの選択が必要です。例えば以下のように、描画されたアウトラインで `<hgroup>` を表示するさまざまな方法が考えられます:

- 主見出しの後および最初の副次的な見出しの前にコロンと空白 (": ") または同様の句読点を置く形で (および同じまたは同様の句読点を、他の副次的な見出しの前に置いて) `<hgroup>` を描画されたアウトラインで表示する
- 主見出しの後に、括弧でくくった副次的な見出しを置く形で、`<hgroup>` を描画されたアウトラインで表示する

以下の HTML 文書で考えてみましょう。

```html
<!DOCTYPE html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML</h1>
    <h2>Living Standard — Last Updated 12 August 2016</h2>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id=toc>...</ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

この文書のアウトラインを描画すると、以下のようになるでしょう。

![](outline-colon.png)

ここでは主見出し「_HTML_」の後にコロンと空白を置いて、副次的な見出し「_Living Standard — Last Updated 12 August 2016_」が続きます。

あるいは、以下のようにアウトラインを描画することもできるでしょう。

![\<hgroup> 要素を含む描画されたアウトライン、第二の見出しの周りに括弧がある](outline-paren.png)

ここでは主見出し「_HTML_」の後に、括弧でくくった副次的な見出し「 _(Living Standard — Last Updated 12 August 2016)_」があります。

## 例

```html
<hgroup id="document-title">
  <h1>HTML</h1>
  <h2>Living Standard — Last Updated 12 August 2016</h2>
</hgroup>
```

## 仕様書

| 仕様書                                                                                                       | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-hgroup-element', '&lt;hgroup&gt;')}} | {{Spec2('HTML WHATWG')}} |      |

## アクセシビリティの考慮

`hgroup` が存在すると、見出しグループの小見出し部分について支援技術に報告された情報を削除する可能性があります。

## ブラウザーの互換性

{{Compat("html.elements.hgroup")}}

## 関連情報

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML5 文書のセクションとアウトライン](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
