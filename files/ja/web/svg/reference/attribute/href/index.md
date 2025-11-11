---
title: href
slug: Web/SVG/Reference/Attribute/href
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`href`** 属性は、リソースへのリンクを参照 [URL](/ja/docs/Web/SVG/Guides/Content_type#url) として定義します。そのリンクの正確な意味は、使用しているそれぞれの要素のコンテキストによって変わります。

> [!NOTE]
> SVG 2 以前の仕様では、{{SVGAttr("xlink:href")}} 属性が定義されていましたが、現在は `href` 属性に置き換えられて廃止されました。古いバージョンのブラウザーの対応が必要な場合、フォールバックとして非推奨となった `xlink:href` 属性を `href` 属性に加えて指定することができます。例えば、`<use href="some-id" xlink:href="some-id" x="5" y="5" />` のように記述します。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feImage")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
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
  <a href="https://developer.mozilla.org/">
    <text x="10" y="25">MDN Web Docs</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "320", "100")}}

## SVG の場合

### a

{{SVGElement("a")}} における `href` は参照されるオブジェクトの場所を、URL 参照として定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### animate, animateMotion, animateTransform, set

{{SVGElement("animate")}}、{{SVGElement("animateMotion")}}、{{SVGElement("animateTransform")}}、{{SVGElement("set")}} における `href` は、このアニメーション要素の対象となる要素を指す URL を定義します。したがって、この要素は時間の経過とともに変化します。

URL は、指定されたアニメーション要素の対象となり得るターゲット要素を正確に 1 つ指す必要があります。URL が複数のターゲット要素を指している場合、指定されたターゲット要素が指定されたアニメーション要素の対象となり得ない場合、指定されたターゲット要素が現在の文書の一部でない場合、アニメーション要素はどのターゲット要素にも影響を与えません。ただし、アニメーション要素はタイミングプロパティに関して通常通り動作します。具体的には、TimeEvent が配信され、アニメーション要素は、URL が有効なターゲット要素を指す場合と同様の方法で同期ベースとして使用することができます。

`href` 属性または非推奨の {{SVGAttr("xlink:href")}} 属性が指定されていない場合、ターゲット要素は現在のアニメーション要素の直上の親要素となります。`xlink:href` と `href` の両方が指定されている場合、後者の属性の値が使用されます。

どの種類の要素がどの種類のアニメーションの対象となるかについての制限事項については、それぞれのアニメーション要素の説明を参照して確認してください。

この仕様で明示的に言及されている SVG 固有の規則を除き、この属性の規範的な定義は {{Glossary("SMIL")}} アニメーション仕様書によります。特に、 [SMIL Animation: Specifying the animation target](https://www.w3.org/TR/smil-animation/#SpecifyingAnimationTarget) を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

### feImage

{{SVGElement("feImage")}} における `href` は、画像リソースまたは要素を参照する URL を定義します。{{SVGAttr("xlink:href")}} と `href` 属性の両方が指定された場合、後者が前者を上書きします。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### image

{{SVGElement("image")}} における `href` は、表示する画像を参照する URL を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <image href="fxlogo.png" x="0" y="0" height="100" width="100" />
</svg>
```

{{EmbedLiveSample("image", 200, 250)}}

### linearGradient/radialGradient

{{SVGElement("linearGradient")}} または {{SVGElement("radialGradient")}} における `href` は、テンプレートグラデーション要素を参照する URL を定義します。有効であるためには、参照先は別の `<linearGradient>` または `<radialGradient>` 要素でなければなりません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### mpath

{{SVGElement("mpath")}} における `href` は、モーションパスを定義する {{SVGElement("path")}} 要素または[基本シェイプ](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)を参照する URL を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

### pattern

{{SVGElement("pattern")}} における `href` は、現在の SVG 文書内の別の `<pattern>` 要素を参照する URL を定義する。参照された要素に定義されているが、この要素に定義されていない属性は、すべてこの要素に継承される。この要素に子要素がなく、参照された要素に子要素がある場合（参照された要素自身の `href` 属性による可能性がある）、この要素は参照された要素の子要素を継承する。継承は任意のレベルまで間接的に行われる可能性がある。したがって、参照された要素が自身の `href` 属性によって属性や子要素を継承している場合、現在の要素はそれらの属性や子要素を継承できる。{{SVGElement("pattern")}} 要素では、`href` 属性はアニメーション可能である。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

### script

{{SVGElement("script")}} における `href` は、スクリプトのコードを含む外部リソースを参照する URL を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

### textPath

{{SVGElement("textPath")}} における `href` 属性は、{{SVGElement("path")}} 要素または[基本シェイプ](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)を参照する URL を定義し、{{SVGAttr("path")}} 属性が指定されていない場合にテキストがレンダリングされる対象となる。{{SVGElement("textPath")}} 要素における `href` 属性はアニメーション可能です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### use

{{SVGElement("use")}} における `href` は、複製対象となる SVG 文書内の要素またはフラグメントを参照する URL を定義します。

`<use>` 要素は、フラグメントなしの `href` 値を指定することで、SVG 文書全体を参照することができます。このような参照は、参照先の文書のルート要素を指すものとみなされます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#url">&#x3C;url></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("xlink:href")}}
