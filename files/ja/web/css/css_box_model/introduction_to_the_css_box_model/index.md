---
title: CSS 基本ボックスモデル入門
slug: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
tags:
  - CSS
  - CSS ボックスモデル
  - ガイド
  - リファレンス
translation_of: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
---
{{CSSRef}}

ブラウザーのレンダリングエンジンは文書をレイアウトする際に、それぞれの要素を標準的な **CSS 基本ボックスモデル**に基づいた長方形のボックスとして表現します。 CSS はこれらのボックスの寸法、位置、プロパティ（色、背景、境界の幅など）を決定します。

それぞれのボックスは 4 つの部品 (または*領域*) から構成され、それぞれの縁について*コンテンツの縁 (content edge)*、*パディングの縁 (padding edge)*、*境界の縁 (border edge)*、*マージンの縁 (margin edge)* が定義されています。

![CSS ボックスモデル](<boxmodel-(3).png>)

## コンテンツ領域

**コンテンツ領域**は、コンテンツの縁に囲まれた領域で、文字列、画像、動画プレイヤー等の「実際の」コンテンツを含みます。領域の寸法は*コンテンツ幅*（または*コンテンツボックスの幅*）と*コンテンツの高さ*（または*コンテンツボックスの高さ）*です。背景色や背景画像を持っていることがあります。

{{cssxref("box-sizing")}} プロパティが `content-box` (既定値) に設定されており、要素がブロック要素である場合は、コンテンツ領域の寸法は {{cssxref("width")}}、{{cssxref("min-width")}}、{{cssxref("max-width")}}、{{cssxref("height")}}、{{cssxref("min-height")}}、{{cssxref("max-height")}} の各プロパティによって正確に定義することができます。

## パディング領域

**パディング領域**は、パディングの縁に囲まれた領域で、コンテンツ領域に要素のパディングを含めた広がりです。この領域の寸法は、*パディングボックスの幅*と*パディングボックスの高さ*です。

パディングの幅は、 {{cssxref("padding-top")}}、{{cssxref("padding-right")}}、{{cssxref("padding-bottom")}}、{{cssxref("padding-left")}} の各プロパティおよび一括指定プロパティの {{cssxref("padding")}} で決定されます。

## 境界領域

**境界領域**は、境界の縁に囲まれた領域で、パディング領域に要素の境界を含めた広がりです。この領域の寸法は、*境界ボックスの幅*と*境界ボックスの高さ* になります。

境界の幅は、 {{cssxref("border-width")}} および一括指定プロパティの {{cssxref("border")}} で決定されます。 {{cssxref("box-sizing")}} プロパティが `border-box` に設定されていた場合、境界領域の寸法は {{cssxref("width")}}、{{cssxref("min-width")}}、{{cssxref("max-width")}}、{{ cssxref("height") }}、{{cssxref("min-height")}}、{{cssxref("max-height")}} の各プロパティで正確に定義することができます。ボックスに背景（{{cssxref("background-color")}} または {{cssxref("background-image")}}）が設定されている場合、背景は境界の縁の外枠まで拡張されます（つまり、 Z 順で境界の下にまで拡張されます）。これは既定の振る舞いで、 CSS の {{cssxref("background-clip")}} プロパティで変更することができます。

## マージン領域

**マージン領域**は、マージン境界に囲まれた領域で、境界領域に、隣の要素と分離するために使用する空の領域を含めて拡張したものです。この領域の寸法は、*マージンボックスの幅*と*マージンボックスの高さ*になります。

マージン領域の寸法は、 {{cssxref("margin-top")}}、{{cssxref("margin-right")}}、{{cssxref("margin-bottom")}}、{{cssxref("margin-left")}} の各プロパティおよび一括指定プロパティである {{cssxref("margin")}} で決定されます。[マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)が発生したときは、マージンがボックス間で共有されるため、マージン領域が明確に定義されません。

置換要素ではないインライン要素については、空間の大きさは {{cssxref('line-height')}} プロパティによって決定され、行の高さに寄与します。この場合も境界とパディングは、コンテンツの周囲に視覚的に現れます。

## 関連情報

- [レイアウトと包含ブロック](/ja/docs/Web/CSS/Containing_block)
- [CSS カスケードの紹介](/ja/docs/Web/CSS/Cascade)
- [カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

## 仕様書

| 仕様書                                            | 状態                  | 備考                                             |
| ------------------------------------------------- | --------------------- | ------------------------------------------------ |
| {{SpecName('CSS3 Box', '#intro')}}                | {{Spec2('CSS3 Box')}} |                                                  |
| {{ SpecName("CSS2.1","box.html#box-dimensions")}} | {{ Spec2('CSS2.1') }} | 言葉遣いをより正確にしたが、有意な変更点はなし。 |
| {{ SpecName("CSS1","#formatting-model")}}         | {{ Spec2('CSS1') }}   | 初回定義                                         |

## 関連情報

- {{css_key_concepts}}
