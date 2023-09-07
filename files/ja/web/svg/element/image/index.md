---
title: <image>
slug: Web/SVG/Element/image
---

{{SVGRef}}

The **`<image>`** は SVG の要素で、 SVG 文書内に画像を含めます。これは{{glossary("raster image", "ラスター画像")}}ファイルや他の SVG ファイルを表示することができます。

SVG ソフトウェアが対応する必要がある画像形式は {{glossary("JPEG")}}, {{glossary("PNG")}}, および他の SVG ファイルです。アニメーション {{glossary("GIF")}} の動作は未定義です。

`<image>` で表示される SVG ファイルは[画像として扱われます](/ja/docs/Web/SVG/SVG_as_an_Image)。外部リソースは読み込まれず、 {{cssxref(":visited")}} のスタイルは[適用されず](/ja/docs/Web/CSS/Privacy_and_the_:visited_selector)、ユーザーと対話することはできません。動的な SVG 要素を埋め込みたいのであれば、 {{SVGElement("use")}} を外部 URL で使用してください。 SVG ファイルを含めてその中でスクリプトを実行するのであれば、 {{HTMLElement("object")}} を {{SVGElement("foreignObject")}} の中で使用してください。

> **メモ:** HTML 仕様書は、解釈時に `<image>` を {{HTMLElement("img")}} の別名として定義しています。この仕様書の要素とその動作は SVG 文書または[インライン SVG](/ja/docs/SVG_In_HTML_Introduction) 内のみのものです。

## 使用場所

{{svginfo}}

## 属性

### グローバル属性

- [条件処理属性](/ja/docs/Web/SVG/Attribute#Conditional_processing_attributes)
- [コア属性](/ja/docs/Web/SVG/Attribute#Core_attributes)
- [グラフィカルイベント属性](/ja/docs/Web/SVG/Attribute#Graphical_event_attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#Presentation_attributes)
- [Xlink 属性](/ja/docs/Web/SVG/Attribute#Xlink_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### 固有の属性

- {{SVGAttr("x")}}: 原点から見た画像の水平位置です。
- {{SVGAttr("y")}}: 原点から見た画像の垂直位置です。
- {{SVGAttr("width")}}: 画像が描画される幅です。 HTML の `<img>` とは異なり、この属性は必須です。
- {{SVGAttr("height")}}: 画像が描画される高さです。 HTML の `<img>` とは異なり、この属性は必須です。
- {{SVGAttr("href")}} および {{SVGAttr("xlink:href")}}: 画像ファイルの URL を指します。
- {{SVGAttr("preserveAspectRatio")}}: 画像の拡大縮小方法を制御します。

## DOM インターフェイス

`<image>` は {{domxref("SVGImageElement")}} インターフェイスを実装しています。

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

{{Compat("svg.elements.image")}}
