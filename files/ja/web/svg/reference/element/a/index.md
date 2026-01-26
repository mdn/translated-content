---
title: <a>
slug: Web/SVG/Reference/Element/a
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

**`<a>`** は [SVG](/ja/docs/Web/SVG) の要素で、他のウェブページ、ファイル、同じページ内の場所、メールアドレス、その他の URL へのハイパーリンクを生成します。 HTML の {{htmlelement("a")}} 要素ととても良く似ています。

SVG の `<a>` 要素はコンテナーですので、（HTML のような）テキストを囲むものだけでなく、図形を囲むリンクを生成することもできます。

## 例

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
  <a href="/docs/Web/SVG/Reference/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- テキストを囲むリンク -->
  <a href="/docs/Web/SVG/Reference/Element/text">
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

> [!WARNING]
> この要素は [HTML の `<a>` 要素](/ja/docs/Web/HTML/Reference/Elements/a)と同じタグ名なので、 `a` を CSS や {{domxref("Document.querySelector", "querySelector")}} で選択すると、誤った種類の要素に適用してしまう可能性があります。 [`@namespace` ルール](/ja/docs/Web/CSS/Reference/At-rules/@namespace)で二つを区別してみてください。

## 属性

- [`download`](/ja/docs/Web/HTML/Reference/Elements/a#download)
  - : 移動するのではなく {{Glossary("URL")}} をダウンロードするようブラウザーに指示しますので、ユーザーにローカルファイルとして保存するよう促します。
    _値の型_: **\<string>** ; _既定値_: _none_; _アニメーション_: **不可**
- {{SVGAttr("href")}}
  - : ハイパーリンクが指す先の {{Glossary("URL")}} または URL フラグメントです。
    _値の型_: **[\<URL>](/ja/docs/Web/SVG/Guides/Content_type#url)** ; _既定値_: _none_; _アニメーション_: **可**
- [`hreflang`](/ja/docs/Web/HTML/Reference/Elements/a#hreflang)
  - : ハイパーリンクが指す先の URL または URL フラグメントにおける人間の言語です。
    _値の型_: **\<string>** ; _既定値_: _none_; _アニメーション_: **不可**
- [`ping`](/ja/docs/Web/HTML/Reference/Elements/a#ping) {{experimental_inline}}
  - : 空白区切りの URL のリストで、ハイパーリンクをたどる際に、 {{HTTPMethod("POST")}} リクエストで本文が `PING` であるものがブラウザーから（バックグラウンドで）送信されます。通常はトラッキングのために使用されます。同じ用途でもっと広く対応されている機能として、 {{domxref("Navigator.sendBeacon()")}} を参照してください。
    _値の型_: **[\<list-of-URLs>](/ja/docs/Web/SVG/Guides/Content_type#list-of-ts)**; _既定値_: _none_; _アニメーション_: **不可**
- [`referrerpolicy`](/ja/docs/Web/HTML/Reference/Elements/a#referrerpolicy) {{experimental_inline}}
  - : どの[リファラー](/ja/docs/Web/HTTP/Reference/Headers/Referer)をアクセス先の {{Glossary("URL")}} に送信するかです。
    _値の型_: `no-referrer` | `no-referrer-when-downgrade` | `same-origin` | `origin` | `strict-origin` | `origin-when-cross-origin` | `strict-origin-when-cross-origin` | `unsafe-url`; _既定値_: _none_; _アニメーション_: **不可**
- [`rel`](/ja/docs/Web/HTML/Reference/Elements/a#rel)
  - : 対象のオブジェクトとリンクしているオブジェクトの関係です。
    _値の型_: **[\<list-of-Link-Types>](/ja/docs/Web/HTML/Reference/Attributes/rel)**; _既定値_: _none_; _アニメーション_: **可**
- {{SVGAttr("target")}}
  - : リンクされた {{Glossary("URL")}} の表示先です。
    _値の型_: `_self` | `_parent` | `_top` | `_blank` | **\<name>**; _既定値_: `_self`; _アニメーション_: **可**
- [`type`](/ja/docs/Web/HTML/Reference/Elements/a#type)
  - : リンク先の URL の {{Glossary("MIME type", "MIME タイプ")}}です。
    _値の型_: **\<string>** ; _既定値_: _none_; _アニメーション_: **可**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : ハイパーリンクがさす先の URL または URL フラグメントです。古いブラウザー向けの後方互換性のために必要な場合があります。
    _値の型_: **[\<URL>](/ja/docs/Web/SVG/Guides/Content_type#url)**; _既定値_: _none_; _アニメーション_: **可**

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("xlink:title")}} 属性
- HTML の {{HTMLElement("a")}} 要素
