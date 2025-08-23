---
title: "<html>: HTML 文書 / ルート要素"
slug: Web/HTML/Reference/Elements/html
original_slug: Web/HTML/Element/html
l10n:
  sourceCommit: 4a2b6cafbf9bc5b006eedbdf0e9fdf2c8626d5b6
---

{{HTMLSidebar}}

**`<html>`** は [HTML](/ja/docs/Web/HTML) 要素で、 HTML 文書においてルート (基点) となる要素 (最上位要素) であり、*ルート要素*とも呼ばれます。他のすべての要素は、この要素の子孫として配置しなければなりません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        ひとつの {{HTMLElement("head")}} 要素と、それに続くひとつの {{HTMLElement("body")}} 要素。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは、 <code>&#x3C;html></code> 要素内の最初のノードがコメントでない場合は省略可能です。<br>終了タグは、 <code>&#x3C;html></code> 要素の直後にコメントがない場合は省略可能です。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>なし。これは文書のルート要素です。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/Document_role"
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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `version` {{deprecated_inline}}
  - : 現在の文書を管理する HTML の{{glossary("Doctype", "文書型定義")}}のバージョンを指定します。文書型宣言のバージョン情報と重複しているため、この属性は必須ではありません。
- `xmlns`
  - : 文書の {{glossary("XML")}} {{glossary("Namespace", "名前空間")}}を指定します。既定値は `"http://www.w3.org/1999/xhtml"` です。これは XML {{glossary("parser", "パーサー")}}で解釈される文書では必須、 text/html の文書では任意です。

## 例

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</html>
```

## アクセシビリティの考慮

HTML では `<html>` 要素の開始タグと終了タグを指定する必要はありませんが、ウェブページの [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) を指定できるようにするために、作者はこれを指定することが重要です。 {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} に従った有効な言語タグを持つ `lang` 属性を `<html>` 要素に提供すれば、画面の内側へアナウンスするための適切な言語を決定するのに役立ちます。識別言語タグは、ページのコンテンツの大部分で使用されている言語を記述する必要があります。これがないと、画面の内側へ、通常、オペレーティングシステムの設定された言語が既定値として適用され、誤読が発生する可能性があります。

`<html>` 要素に妥当な `lang` を設定することで、ページで {{HTMLElement("head")}} に含まれる {{HTMLElement("title")}} などの重要なメタデータについても、正しくアナウンスすることができます。

- [MDN "WCAG を理解する ― ガイドライン 3.1 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- MathML の最上位要素: {{MathMLElement("math")}}
- SVG の最上位要素: {{SVGElement("svg")}}
