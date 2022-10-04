---
title: title
slug: Web/SVG/Element/title
---

{{SVGRef}}

SVG における各コンテナ要素またはグラフィックス要素の描画は、説明がテキストのみの文字列を含む **`<title>`** 要素を供給することができます。文書フラグメントが SVG 視覚メディアとしてレンダリングされるとき、`<title>` 要素は、グラフィックスの一部としてはレンダリングされません。しかし、一部のユーザーエージェントは、例えば、ツールチップとして `<title>`要素を表示するかもしれません。 `<title>` 要素を表示するが `path` 要素または他のグラフィックス要素を表示しない、視覚と聴覚の両方の代替プレゼンテーションが可能です。`<title>` 要素は一般に SVG 文書のアクセシビリティを向上させます。

一般に、`<title>` 要素は その `<title>` 要素の親の最初の子にするべきです。 `<title>`が実際にその `<title>` の親の最初の子要素である場合、ツールチップを表示するためにタイトルを使用する実装のみが表示することに注意してください。

## 利用可能な場所

{{svginfo}}

## 属性

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute#Core_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### 専用属性

_この要素には専用属性はありません。_

## DOM インターフェイス

この要素は {{domxref("SVGTitleElement")}} インターフェイスを実装します。

## 例

```xml
<svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
  <g>
    <title>SVG Title Demo example</title>
    <rect x="10" y="10" width="200" height="50"
    style="fill:none; stroke:blue; stroke-width:1px"/>
  </g>
</svg>
```

## 仕様

| 仕様                                                                                                         | 状態                     | コメント   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | ---------- |
| {{SpecName('SVG2', 'struct.html#TitleElement', '&lt;title&gt;')}}                     | {{Spec2('SVG2')}} |            |
| {{SpecName('SVG1.1', 'struct.html#DescriptionAndTitleElements', '&lt;title&gt;')}} | {{Spec2('SVG1.1')}} | 初期の定義 |

## ブラウザー互換性

{{Compat("svg.elements.title")}}

## 関連情報

- {{SVGElement("desc")}}
