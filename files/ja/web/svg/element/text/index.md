---
title: <text>
slug: Web/SVG/Element/text
---

{{SVGRef}}

SVG **`<text>`** 要素は、テキストからなるグラフィクス要素を定義します。`<text>` には、他の SVG グラフィクス要素と同じように、グラデーション、パターン、クリッピングパス、マスク、またはフィルターを適用することができます。

SVG 内でテキストが `<text>` 要素内以外で組み込まれた場合、レンダリングされません。これはデフォルトで隠されるのとは違い、[ディスプレイプロパティ](/ja/docs/Web/SVG/Attribute/display) を変更してもテキストは表示されません。

## 使用可能な場所

{{svginfo}}

## 属性

### グローバル属性

- [条件処理属性](/ja/docs/Web/SVG/Attribute#Conditional_processing_attributes) »
- [コア属性](/ja/docs/Web/SVG/Attribute#Core_attributes) »
- [グラフィカルイベント属性](/ja/docs/Web/SVG/Attribute#Graphical_event_attributes) »
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#Presentation_attributes) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### 専用属性

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("dx")}}
- {{SVGAttr("dy")}}
- {{SVGAttr("text-anchor")}}
- {{SVGAttr("rotate")}}
- {{SVGAttr("textLength")}}
- {{SVGAttr("lengthAdjust")}}

## DOM インターフェイス

この要素は {{domxref("SVGTextElement")}} インターフェイスを実装します。

## 例

### 基本的なテキストの使用例

#### SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="500"
  height="40"
  viewBox="0 0 500 40">
  <text x="0" y="35" font-family="Verdana" font-size="35">
    Hello, out there
  </text>
</svg>
```

#### 結果

{{EmbedLiveSample("Basic_text_usage", 500, 60)}}

### 回転テキスト

SVG テキストは回転することができます。

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="120">
  <text x="0" y="20" transform="rotate(30 20,40)">
    SVG Text Rotation example
  </text>
</svg>
```

#### 結果

{{EmbedLiveSample("Rotated_text", 180, 120)}}

### 着色テキスト

SVG テキストは着色することができます。

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="30">
  <text x="10" y="20" stroke="none" fill="red">SVG Colored Text</text>
</svg>
```

#### 結果

{{EmbedLiveSample("Colored_text", 200, 30)}}

### CSS を用いたテキストのスタイリング

SVG テキストは HTML テキストのようにスタイリングできます。

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="60">
  <text
    x="10"
    y="40"
    style="font-family: Times New Roman;
             font-size: 44px;
             stroke: #00ff00;
             fill: #0000ff;">
    SVG text styling
  </text>
</svg>
```

#### 結果

{{EmbedLiveSample("Styling_text_via_CSS", 400, 60)}}

## 仕様

{{Specifications}}

## ブラウザー互換性

{{Compat("svg.elements.text")}}

## 関連情報

- {{SVGElement("tspan")}}
- {{SVGElement("tref")}}
- {{SVGElement("altGlyph")}}
