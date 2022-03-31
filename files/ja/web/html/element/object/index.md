---
title: '<object>: 外部オブジェクト要素'
slug: Web/HTML/Element/object
tags:
  - 要素
  - HTML
  - HTML 埋め込みコンテンツ
  - リファレンス
  - ウェブ
browser-compat: html.elements.object
translation_of: Web/HTML/Element/object
---

{{HTMLRef}}

**`<object>`** は [HTML](/en-US/docs/Web/HTML) の要素で、画像、内部の閲覧コンテキスト、プラグインによって扱われるリソースなどのように扱われる外部リソースを表します。

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>、<a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>、<a href="/ja/docs/Web/Guide/HTML/Content_categories#embedded_content">埋め込みコンテンツ</a>、知覚可能コンテンツ、要素が {{htmlattrxref("usemap","object")}} 属性を持つ場合は <a href="/ja/docs/Web/Guide/HTML/Content_categories#interactive_content">対話型コンテンツ</a>、<a href="/ja/docs/Web/Guide/HTML/Content_categories#form_listed">リスト化</a>/<a href="/ja/docs/Web/Guide/HTML/Content_categories#form_submittable">送信可能</a> な <a href="/ja/docs/Web/Guide/HTML/Content_categories#form-associated_content">フォーム関連要素</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        0 個以上の {{HTMLElement("param")}} 要素とそれに続く <a href="/ja/docs/Web/Guide/HTML/Content_categories#transparent_content_model">透過的コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#embedded_content">埋め込みコンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>{{ARIARole("application")}}, {{ARIARole("document")}}, {{ARIARole("image")}}</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLObjectElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持っています。

- {{HTMLAttrDef("archive")}} {{deprecated_inline}}
  - : オブジェクトのリソースの URI 群を、半角スペースで区切って指定。
- {{HTMLAttrDef("border")}} {{deprecated_inline}}
  - : コントロールの境界線のピクセル幅。※指定時に px などの単位は不要。
- {{HTMLAttrDef("classid")}} {{deprecated_inline}}
  - : オブジェクトの実装の URI。 **data** 属性とともに、または **data** 属性の代替として用いることができます。
- {{HTMLAttrDef("codebase")}} {{deprecated_inline}}
  - : **classid** 属性、**data** 属性、**archive** 属性で指定された相対 URI を解決するための基準パス。指定しない場合、既定値は現在の文書のベース URI となります。
- {{HTMLAttrDef("codetype")}} {{deprecated_inline}}
  - : **classid** によって指定されたデータのコンテンツ型。
- {{HTMLAttrDef("data")}}
  - : リソースのアドレスを有効な URL で指定。**data** 属性と **type** 属性のうち、少なくとも1つは定義しておく必要があります。
- {{HTMLAttrDef("declare")}} {{deprecated_inline}}
  - : この論理属性は属性名を指定するだけで有効になります。オブジェクトは、後続する `<object>` 要素でインスタンス化しなければなりません。HTML5 ではリソースを再利用するごとに、完全な形の \<object> 要素を繰り返し配置します。
- {{HTMLAttrDef("form")}}
  - : このオブジェクト要素がフォームに関連付けられていれば、そのフォーム要素 (_フォームオーナー_)。属性値は、同一文書内の {{HTMLElement("form")}} 要素の ID でなければなりません。
- {{HTMLAttrDef("height")}}
  - : 表示されるリソースの高さを [CSS ピクセル数](https://drafts.csswg.org/css-values/#px) で指定。(絶対値に限ります。[パーセント値は不可](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
- {{HTMLAttrDef("name")}}
  - : 有効な閲覧コンテキストの名前 (HTML5) またはコントロールの名前 (HTML 4)。
- {{HTMLAttrDef("standby")}} {{deprecated_inline}}
  - : オブジェクトの実装とデータの読み込み中にブラウザーに表示することができるメッセージ。
- {{HTMLAttrDef("type")}}
  - : **data** 属性によって指定されたリソースの [content type](/ja/docs/Glossary/MIME_type)。**data** 属性と **type** 属性のうち、少なくとも 1 つは定義しておく必要があります。
- {{HTMLAttrDef("usemap")}}
  - : {{HTMLElement("map")}} 要素を参照するハッシュ名。 '#' の後に map 要素の {{htmlattrxref("name", "map")}} 属性を繋げた文字列を属性値として記述します。
- {{HTMLAttrDef("width")}}
  - : 表示されるリソースの幅を [CSS ピクセル数](https://drafts.csswg.org/css-values/#px) で指定。(絶対値に限ります。[パーセンテージは不可](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))

## 例

### Flash 動画を埋め込む

```html
<!-- 埋め込み Flash 動画 -->
<object data="movie.swf"
  type="application/x-shockwave-flash"></object>

<!-- 引数付き埋め込み Flash 動画 -->
<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar">
</object>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("applet")}} {{deprecated_inline}}
- {{HTMLElement("embed")}}
- {{HTMLElement("param")}}
