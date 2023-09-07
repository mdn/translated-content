---
title: <a>
slug: Web/SVG/Element/a
---

{{SVGRef}}

**\<a>** は SVG の要素で、他のウェブページ、ファイル、同じページ内の場所、メールアドレス、その他の URL へのハイパーリンクを生成します。 HTML の {{htmlelement("a")}} 要素ととても良く似ています。

SVG の `<a>` 要素はコンテナーですので、 (HTML のような) テキストを囲むものだけでなく、図形を囲むリンクを生成することもできます。

```css hidden
@namespace svg url(http://www.w3.org/2000/svg);
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 図形を囲むリンク -->
  <a href="/ja/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- テキストを囲むリンク -->
  <a href="/ja/docs/Web/SVG/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* SVG ではリンクに既定の視覚スタイルがないので、
   何かを追加するのがいいでしょう */

@namespace svg url(http://www.w3.org/2000/svg);
/* SVG の <a> 要素のみを選択し、 HTML を除外するために必要。
   下記の警告を参照 */

svg|a:link,
svg|a:visited {
  cursor: pointer;
}

svg|a text,
text svg|a {
  fill: blue; /* テキストであっても、 SVG は塗りつぶし色を使用する */
  text-decoration: underline;
}

svg|a:hover,
svg|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

> **警告:** この要素は [HTML の `<a>` 要素](/ja/docs/Web/HTML/Element/a)と同じタグ名なので、 `a` を CSS や {{domxref("Document.querySelector", "querySelector")}} で選択すると、誤った種類の要素に適用してしまう可能性があります。 [`@namespace` 規則](/ja/docs/Web/CSS/@namespace)で二つを区別してみてください。

## 属性

- [`download`](/ja/docs/Web/HTML/Element/a#download) {{experimental_inline}}
  - : 移動するのではなく {{Glossary("URL")}} をダウンロードするようブラウザーに指示しますので、ユーザーにローカルファイルとして保存するよう促します。
    _値種別_: **\<string>** ; _既定値_: _none_; _アニメーション_: **no**
- {{SVGAttr("href")}}
  - : ハイパーリンクが指す先の {{Glossary("URL")}} または URL フラグメントです。
    _値種別_: **[\<URL>](/ja/docs/Web/SVG/Content_type#URL)** ; _既定値_: _none_; _アニメーション_: **yes**
- [`hreflang`](/ja/docs/Web/HTML/Element/a#hreflang)
  - : ハイパーリンクが指す先の URL または URL フラグメントにおける人間の言語です。
    _値種別_: **\<string>** ; _既定値_: _none_; _アニメーション_: **yes**
- [`ping`](/ja/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : 空白区切りの URL のリストで、ハイパーリンクをたどるとき、 {{HTTPMethod("POST")}} リクエストで本文が `PING` であるものがブラウザーから (バックグラウンドで) 送信されます。通常はトラッキングのために使用されます。同じ用途でもっと広く対応されている機能として、 {{domxref("Navigator.sendBeacon()")}} を参照してください。
    _値種別_: **[\<list-of-URLs>](/ja/docs/Web/SVG/Content_type#List-of-Ts)** ; _既定値_: _none_; _アニメーション_: **no**
- [`referrerpolicy`](/ja/docs/Web/HTML/Element/a#referrerpolicy) {{experimental_inline}}
  - : どの[リファラー](/ja/docs/Web/HTTP/Headers/Referer)をアクセス先の {{Glossary("URL")}} に送信するかです。
    _値種別_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _既定値_: _none_; _アニメーション_: **no**
- [`rel`](/ja/docs/Web/HTML/Element/a#rel) {{experimental_inline}}
  - : 対象のオブジェクトとリンクしているオブジェクトの関係です。
    _値種別_: **[\<list-of-Link-Types>](/ja/docs/Web/HTML/Link_types)** ; _既定値_: _none_; _アニメーション_: **yes**
- {{SVGAttr("target")}}
  - : リンクされた {{Glossary("URL")}} の表示先です。
    _値種別_: `_self`|`_parent`|`_top`|`_blank`|**\<name>** ; _既定値_: `_self`; _アニメーション_: **yes**
- [`type`](/ja/docs/Web/HTML/Element/a#type)
  - : リンク先の URL の {{Glossary("MIME type", "MIME タイプ")}}です。
    _値種別_: **\<string>** ; _既定値_: _none_; _アニメーション_: **yes**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : ハイパーリンクがさす先の URL または URL フラグメントです。古いブラウザー向けの後方互換性のために必要な場合があります。
    _値種別_: **[\<URL>](/ja/docs/Web/SVG/Content_type#URL)** ; _既定値_: _none_; _アニメーション_: **yes**

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 主なもの: {{SVGAttr('id')}}, {{SVGAttr('lang')}}, {{SVGAttr('tabindex')}}
- [スタイル属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [条件付き処理属性](/ja/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 主なもの: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [文書要素イベント属性](/ja/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes), [グラフィックイベント属性](/ja/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute/Presentation)
  - : 主なもの: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- XLink 属性
  - : 主なもの: {{SVGAttr("xlink:title")}}
- ARIA 属性
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## 使用上の注意

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.elements.a")}}
