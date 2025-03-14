---
title: xlink:href
slug: Web/SVG/Attribute/xlink:href
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{SVGRef}}{{Deprecated_Header}}

**`xlink:href`** 属性は、リソースを参照する [IRI](/ja/docs/Web/SVG/Content_type#iri) として参照先を定義します。そのリンクが正確に意味している内容は、そのリンクを使用している各要素のコンテキストによって異なります。

> [!NOTE]
> SVG 2 では、 `xlink` 名前空間は除去されたため、 `xlink:href` の代わりに {{SVGAttr("href")}} を使用してください。以前のバージョンのブラウザーに対応する必要がある場合は、非推奨の `xlink:href` 属性を `href` 属性に加えて予備として使用することができます。例えば、 `<use href="some-id" xlink:href="some-id" x="5" y="5" />` のようにしますです。

この属性は、次の SVG 要素に従うことで使用することができます。

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("cursor")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("font-face-uri")}}
- {{SVGElement("glyphRef")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("use")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a xlink:href="https://developer.mozilla.org/">
    <text x="10" y="25">MDN Web Docs</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "320", "100")}}

## a

{{SVGElement("a")}} では、 `xlink:href` は参照先のオブジェクトの場所を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## animate, animateMotion, animateTransform, set

{{SVGElement("animate")}}、{{SVGElement("animateMotion")}}、{{SVGElement("animateTransform")}}、{{SVGElement("set")}} の場合、 `xlink:href` は、このアニメーションの対象となり、時間を経て変化する要素への参照を定義します。

対象要素は、現在の SVG 文書フラグメントの一部でなければなりません。

この値は、指定されたアニメーションの対象となりうる要素を正確に 1 つだけ指す必要があります。

`xlink:href` 属性が指定されていない場合、対象要素は現在のアニメーションする要素の直接の親要素となります。

具体的なアニメーションの対象要素の種類に関する制限については、個々のアニメーション要素の説明を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## cursor

{{SVGElement("cursor")}} では、 `xlink:href` はカーソルの画像を提供するファイルまたは要素の参照を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#funciri"
            >&#x3C;FuncIRI></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## feImage

{{SVGElement("feImage")}} では、 `xlink:href` は画像ソースの参照を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## filter

{{SVGElement("filter")}} では、 `xlink:href` は現在の SVG 文書フラグメント内の別の `<filter>` 要素への参照を定義します。参照先の `<filter>` 要素で定義されていて、この要素では定義されていない属性はすべて、この要素に継承されます。この要素がフィルターノードを保有しておらず、参照先の要素がフィルターノードを定義している場合（おそらく、自分自身で `xlink:href` 属性を定義しているため）、この要素は参照先の `<filter>` 要素で定義されているフィルターノードを継承します。継承は任意のレベルまで間接的に行うことができます。したがって、参照する `<filter>` 要素が自分自身で `xlink:href` 属性を指定して、その属性やフィルターノード仕様を継承している場合、現在の要素はそれらの属性やフィルターノード仕様を継承することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## font-face-uri

{{SVGElement("font-face-uri")}} では、 `xlink:href` は参照するフォントの場所を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## glyphRef

{{SVGElement("glyphRef")}} では、 `xlink:href` は SVG 文書フラグメントの {{SVGElement("glyph")}} 要素を定義します。参照される `<glyph>` は別な字形として描画されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## image

{{SVGElement("image")}} では、 `xlink:href` は参照される画像の場所を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## linearGradient

{{SVGElement("linearGradient")}} では、`xlink:href` は現在の SVG 文書フラグメント内の別の `<linearGradient>` または {{SVGElement("radialGradient")}} 要素への参照を定義します。参照先の要素で定義されているが、参照元の要素では定義されていない `<linearGradient>` 属性は、参照元の要素に継承されます。この要素がグラデーションの色経由点を定義しておらず、参照先の要素が定義している場合（おそらく、自分自身で `xlink:href` 属性を指定しているため）、この要素は参照先の要素からグラデーションの色経由点を継承します。継承は任意のレベルまで間接的に行うことができます。したがって、参照先の要素が自分自身で `xlink:href` 属性を指定しているために属性またはグラデーションの色経由点を継承している場合、現在の要素はそれらの属性またはグラデーションの色経由点を継承することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## mpath

{{SVGElement("mpath")}} では、 `xlink:href` はモーションパスを定義する {{SVGElement("path")}} 要素への参照を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## pattern

{{SVGElement("pattern")}} では、 `xlink:href` は現在のSVG文書フラグメント内の別の `<pattern>` 要素への参照を定義します。参照先の要素で定義されているが、この要素では定義されていない属性は、すべてこの要素に継承されます。この要素が子要素を持たず、参照先の要素が子要素を持つ場合（おそらく参照先の要素自身の `xlink:href` 属性によるもの）、この要素は参照先の要素の子要素を継承します。継承は任意のレベルまで間接的に行われることがあります。したがって、参照先の要素が自分自身で `xlink:href` 属性を設定しているために属性や子要素を継承している場合、現在の要素はそれらの属性や子要素を継承することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## radialGradient

{{SVGElement("radialGradient")}} では、 `xlink:href` は現在の SVG 文書フラグメントにある別の {{SVGElement("linearGradient")}} または `<radialGradient>` への参照を定義します。参照先の要素で定義されていて、この要素では定義されていない `<radialGradient>` 属性はすべて、この要素に継承されます。この要素がグラデーションの色経由点を定義しておらず、参照先の要素が定義している場合（おそらくは自分自身で `xlink:href` 属性を定義しているため）、この要素は参照先の要素からグラデーションの色経由点を継承します。継承は任意のレベルまで間接的に行うことができます。したがって、参照先の要素が自分自身で `xlink:href` 属性を定義しているために属性やグラデーションの色経由点を継承している場合、現在の要素はそれらの属性やグラデーションの色経由点を継承することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## script

{{SVGElement("script")}} では、 `xlink:href` は、スクリプトコードの入った外部リソースへの参照を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## textPath

{{SVGElement("textPath")}} では、 `xlink:href` は文字が描画される {{SVGElement("path")}} 要素への参照を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## use

{{SVGElement("use")}} では、 `xlink:href` は参照先のオブジェクトの場所を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## tref

{{SVGElement("tref")}} では、 `xlink:href` は、文字データコンテンツをこの `<tref>` 要素の文字データとして使用する要素への参照を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("href")}}
