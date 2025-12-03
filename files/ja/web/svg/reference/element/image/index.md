---
title: <image>
slug: Web/SVG/Reference/Element/image
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

The **`<image>`** は [SVG](/ja/docs/Web/SVG) の要素で、 SVG 文書内に画像を含めます。これは{{glossary("raster image", "ラスター画像")}}ファイルや他の SVG ファイルを表示することができます。

SVG ソフトウェアが対応する必要がある画像形式は {{glossary("JPEG")}}, {{glossary("PNG")}}, および他の SVG ファイルです。アニメーション {{glossary("GIF")}} の動作は未定義です。

`<image>` で表示される SVG ファイルは[画像として扱われます](/ja/docs/Web/SVG/Guides/SVG_as_an_image)。外部リソースは読み込まれず、 {{cssxref(":visited")}} のスタイルは[適用されず](/ja/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)、ユーザーと対話することはできません。動的な SVG 要素を埋め込みたいのであれば、 {{SVGElement("use")}} を外部 URL で使用してください。 SVG ファイルを含めてその中でスクリプトを実行するのであれば、 {{HTMLElement("object")}} を {{SVGElement("foreignObject")}} の中で使用してください。

> [!NOTE]
> HTML 仕様書は、解釈時に `<image>` を {{HTMLElement("img")}} の別名として定義しています。この仕様書の要素とその動作は SVG 文書またはインライン SVG 内のみのものです。

## 使用場所

{{svginfo}}

## 属性

- {{SVGAttr("x")}}
  - : 原点から見た画像の水平位置です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("y")}}
  - : 原点から見た画像の垂直位置です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `0`; _アニメーション_: **可**
- {{SVGAttr("width")}}
  - : 画像が描画される幅です。 HTML の `<img>` とは異なり、この属性は必須です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("height")}}
  - : 画像が描画される高さです。 HTML の `<img>` とは異なり、この属性は必須です。
    _値の型_: [**\<length>**](/ja/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/ja/docs/Web/SVG/Guides/Content_type#percentage); _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("href")}}
  - : 画像ファイルの URL を指します。
    _値の型_: **[\<URL>](/ja/docs/Web/SVG/Guides/Content_type#url)**; _既定値_: _none_; _アニメーション_: **不可**
- {{SVGAttr("preserveAspectRatio")}}
  - : 画像の拡大縮小方法を制御します。
    _値の型_: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; _既定値_: `xMidYMid meet`; _アニメーション_: **可**
- {{SVGAttr("crossorigin")}}
  - : CORS リクエストの資格情報フラグの値を定義します。
    _値の型_: [ `anonymous` | `use-credentials` ]?; _既定値_: None; _アニメーション_: **可**
- {{SVGAttr("decoding")}}
  - : 画像を同期的にデコードするか非同期的にデコードするかをブラウザーに指示します。
    _値の型_: `async | sync | auto`; _既定値_: `auto`; _アニメーション_: **可**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : Provides a hint of the relative priority to use when fetching an external image.
    Allowed values:
    - `high`
      - : この外部画像を他の外部リソースと比較して、高い優先度で取得します。
    - `low`
      - : この外部画像を他の外部リソースと比較して、低い優先度で取得します。
    - `auto`
      - : 取得の優先度について、指定を行いません。
        これは値がない場合や不正な値が設定されたときに使用されます。
        これが既定値です。
- {{SVGAttr("xlink:href")}}{{deprecated_inline}}
  - : 画像ファイルの URL を指定します。
    _値の型_: **[\<URL>](/ja/docs/Web/SVG/Guides/Content_type#url)**; _既定値_: _none_; _アニメーション_: **不可**

## DOM インターフェイス

この要素は {{domxref("SVGImageElement")}} インターフェイスを実装しています。

## 例

SVG 内における PNG 画像の基本的な描画:

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image href="mdn_logo_only_color.png" height="200" width="200" />
</svg>
```

### 結果

{{EmbedLiveSample("Example", 250, 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("fetchpriority")}} 属性
