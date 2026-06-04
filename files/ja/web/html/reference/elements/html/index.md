---
title: HTML `<html>` 文書ルート要素
short-title: <html>
slug: Web/HTML/Reference/Elements/html
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<html>`** は [HTML](/ja/docs/Web/HTML) 要素で、 HTML 文書においてルート (基点) となる要素 (最上位要素) であり、ルート要素とも呼ばれます。他のすべての要素は、この要素の子孫として配置しなければなりません。文書内には、`<html>` 要素を 1 つしか置くことはできません。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `version` {{deprecated_inline}}
  - : 現在の文書を管理する HTML の{{glossary("Doctype", "文書型定義")}}のバージョンを指定します。文書型宣言のバージョン情報と冗長になるため、この属性は必要ではありません。
- `xmlns`
  - : 文書の {{glossary("XML")}} {{glossary("Namespace", "名前空間")}}を指定します。デフォルト値は `"http://www.w3.org/1999/xhtml"` です。これは XML {{glossary("parser", "パーサー")}}で解釈される文書では必須、 text/html の文書では任意です。

## アクセシビリティ

HTML では、作成者が `<html>` 要素の開始タグと終了タグを指定することが要求されてはいませんが、ウェブページの [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) を指定することができるため、作成者にとって指定するのが重要です。 `lang` 属性に有効な {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}を指定して`<html>` 要素に記載することで、スクリーンリーダーが読み上げる適切な言語を判断するのに役立ちます。この識別用言語タグは、ページのコンテンツの大部分で使用されている言語を記述する必要があります。これを指定しない場合、スクリーンリーダーは通常、オペレーティングシステムで設定されている言語をデフォルトとして使用するため、発音が不正確になる可能性があります。

有効な `lang` を `<html>` 要素に設定することで、ページで {{HTMLElement("head")}} に含まれる {{HTMLElement("title")}} などの重要なメタデータについても、正しくアナウンスすることができます。

- [MDN "WCAG を理解する ― ガイドライン 3.1 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

## 例

```html
<!doctype html>
<html lang="ja">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</html>
```

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        1 つの {{HTMLElement("head")}} 要素と、それに続く 1 つの {{HTMLElement("body")}} 要素。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは、<code>&#x3C;html></code> 要素内の最初のノードがコメントでない場合は省略可能です。<br>
        終了タグは、<code>&#x3C;html></code> 要素の直後にコメントがない場合は省略可能です。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>なし。これは文書のルート要素です。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"
          >document</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLHtmlElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- MathML の最上位要素: {{MathMLElement("math")}}
- SVG の最上位要素: {{SVGElement("svg")}}
