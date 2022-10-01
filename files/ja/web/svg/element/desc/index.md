---
title: desc
slug: Web/SVG/Element/desc
---

{{SVGRef}}

SVG 描画における各コンテナ要素またはグラフィック要素は、説明がテキストのみの **`<desc>`** 要素を用いる説明を供給することができます。

現在の SVG ドキュメントが視覚メディア上で SVG としてレンダリングされるとき、`<desc>` 要素はグラフィックとしてレンダリングされません。 代替プレゼンテーションは、`<desc>` 要素を表示するが {{SVGElement("path")}} 要素または他のグラフィックス要素を表示しない、視覚と聴覚の両方が可能です。`<desc>` 要素は一般に SVG ドキュメントのアクセシビリティを向上させます。

## 使用可能な場所

{{svginfo}}

## 属性

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute#Core_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### 専用属性

_なし_

## DOM インターフェイス

この要素は {{domxref("SVGDescElement")}} インターフェイスを実装します。

## 仕様

| 仕様                                                                                                         | 状態                     | コメント   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | ---------- |
| {{SpecName('SVG2', 'struct.html#DescriptionAndTitleElements', '&lt;desc&gt;')}}     | {{Spec2('SVG2')}} |            |
| {{SpecName('SVG1.1', 'struct.html#DescriptionAndTitleElements', '&lt;desc&gt;')}} | {{Spec2('SVG1.1')}} | 初期の定義 |

## ブラウザー互換性

{{Compat("svg.elements.desc")}}

## 関連情報

- {{SVGElement("title")}}
