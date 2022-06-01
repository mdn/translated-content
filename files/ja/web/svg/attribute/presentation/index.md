---
title: SVG プレゼンテーション属性
slug: Web/SVG/Attribute/Presentation
tags:
  - 属性
  - 初心者
  - 草稿
  - リファレンス
  - SVG
browser-compat: svg.attributes.presentation
---
SVG プレゼンテーション属性は、SVG 要素の属性として使用される CSS プロパティです。

*   [alignment-baseline](#attr-alignment-baseline)
*   [baseline-shift](#attr-baseline-shift)
*   [clip](#attr-clip)
*   [clip-path](#attr-clip-path)
*   [clip-rule](#attr-clip-rule)
*   [color](#attr-color)
*   [color-interpolation](#attr-color-interpolation)
*   [color-interpolation-filters](#attr-color-interpolation-filters)
*   [color-profile](#attr-color-profile)
*   [color-rendering](#attr-color-rendering)
*   [cursor](#attr-cursor)
*   [d](#attr-d)
*   [direction](#attr-direction)
*   [display](#attr-display)
*   [dominant-baseline](#attr-dominant-baseline)
*   [enable-background](#attr-enable-background)
*   [fill](#attr-fill)
*   [fill-opacity](#attr-fill-opacity)
*   [fill-rule](#attr-fill-rule)
*   [filter](#attr-filter)
*   [flood-color](#attr-flood-color)
*   [flood-opacity](#attr-flood-opacity)
*   [font-family](#attr-font-family)
*   [font-size](#attr-font-size)
*   [font-size-adjust](#attr-font-size-adjust)
*   [font-stretch](#attr-font-stretch)
*   [font-style](#attr-font-style)
*   [font-variant](#attr-font-variant)
*   [font-weight](#attr-font-weight)
*   [glyph-orientation-horizontal](#attr-glyph-orientation-horizontal)
*   [glyph-orientation-vertical](#attr-glyph-orientation-vertical)
*   [image-rendering](#attr-image-rendering)
*   [kerning](#attr-kerning)
*   [letter-spacing](#attr-letter-spacing)
*   [lighting-color](#attr-lighting-color)
*   [marker-end](#attr-marker-end)
*   [marker-mid](#attr-marker-mid)
*   [marker-start](#attr-marker-start)
*   [mask](#attr-mask)
*   [opacity](#attr-opacity)
*   [overflow](#attr-overflow)
*   [pointer-events](#attr-pointer-events)
*   [shape-rendering](#attr-shape-rendering)
*   [solid-color](#attr-solid-color)
*   [solid-opacity](#attr-solid-opacity)
*   [stop-color](#attr-stop-color)
*   [stop-opacity](#attr-stop-opacity)
*   [stroke](#attr-stroke)
*   [stroke-dasharray](#attr-stroke-dasharray)
*   [stroke-dashoffset](#attr-stroke-dashoffset)
*   [stroke-linecap](#attr-stroke-linecap)
*   [stroke-linejoin](#attr-stroke-linejoin)
*   [stroke-miterlimit](#attr-stroke-miterlimit)
*   [stroke-opacity](#attr-stroke-opacity)
*   [stroke-width](#attr-stroke-width)
*   [text-anchor](#attr-text-anchor)
*   [text-decoration](#attr-text-decoration)
*   [text-rendering](#attr-text-rendering)
*   [transform](#attr-transform)
*   [unicode-bidi](#attr-unicode-bidi)
*   [vector-effect](#attr-vector-effect)
*   [visibility](#attr-visibility)
*   [word-spacing](#attr-word-spacing)
*   [writing-mode](#attr-writing-mode)

## 属性

*   {{SVGAttr('alignment-baseline')}}
    *   : これは、オブジェクトが親に対してフォントのベースラインに沿ってどのように配置されるかを指定するものです。
        *値*: **`auto`**|`baseline`|`before-edge`|`text-before-edge`|`middle`|`central`|`after-edge`|`text-after-edge`|`ideographic`|`alphabetic`|`hanging`|`mathematical`|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('baseline-shift')}}
    *   : これにより、親テキストコンテンツ要素のドミナントベースラインに対するドミナントベースラインの相対的な位置を変更することができます。
        *値*: **`auto`**|`baseline`|`super`|`sub`|[\<percentage>](/ja/docs/Web/SVG/Content_type#percentage)|[\<length>](/ja/docs/Web/SVG/Content_type#length)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('clip')}} {{deprecated_inline}}
    *   : 要素のどの部分が見えるかを定義します。
        *値*: **`auto`**|{{cssxref("shape")}}|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('clip-path')}}
    *   : 適用された要素を指定された {{SVGElement('clipPath')}} 要素に結びつけます。
        *値*: **`none`**|[\<FuncIRI>](/ja/docs/Web/SVG/Content_type#funciri)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('clip-rule')}}
    *   : {{SVGElement('clipPath')}} が対象を切り取る方法を知るために、パスのどの辺がシェイプの内側にあるかを判断する方法を指定します。
        *値*: **`nonezero`**|`evenodd`|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('color')}}
    *   : 間接的な値の候補 (`currentcolor`) を `fill`, `stroke`, `stop-color`, `flood-color`, `lighting-color` の各属性に与えるために使用します。
        *値*: [\<color>](/ja/docs/Web/SVG/Content_type#color)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('color-interpolation')}}
    *   : グラデーションの補間、色のアニメーション、アルファ合成で使用する色空間を指定します。
        *値*: `auto`|**`sRGB`**|`linearRGB`|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('color-interpolation-filters')}}
    *   : フィルター効果を通して行われる画像演算で使用する色空間を指定します。
        *値*: `auto`|`sRGB`|**`linearRGB`**|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('color-profile')}} {{deprecated_inline}}
    *   : {{SVGElement('image')}} 要素を通して取り込まれるラスター画像に使用すべきカラープロファイルを定義します。
        *値*: `auto`|`sRGB`|`linearRGB`|[\<name>](/ja/docs/Web/SVG/Content_type#name)|[\<IRI>](/ja/docs/Web/SVG/Content_type#iri)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('color-rendering')}}
    *   : これは、色の補間や合成の操作を最適化するためのヒントをブラウザーに与えます。
        *値*: **`auto`**|`optimizeSpeed`|`optimizeQuality`|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('cursor')}}
    *   : マウスポインターが要素上に来た場合に表示されるマウスカーソルを指定します。
        *値*: [\<FuncIRI>](/ja/docs/Web/SVG/Content_type#funciri)|[\<keywords>](/ja/docs/Web/CSS/cursor#values)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('d')}}
    *   : 描画するパスを定義します。
        *値*: [path()](/ja/docs/Web/CSS/path\(\))|`none`
*   {{SVGAttr('direction')}}
    *   : テキストの基本的な書字方向を指定します。
        *値*: **`ltr`**|`rtl`|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('display')}}
    *   : グラフィックやコンテナー要素の表示を制御することができます。
        *値*: CSS の{{cssxref('display')}}、*アニメーション*: **可**
*   {{SVGAttr('dominant-baseline')}}
    *   : ボックスのテキストやインラインレベルのコンテンツを配置するために使用されるベースラインを定義します。
        *値*: `auto`|`text-bottom`|`alphabetic`|`ideographic`|`middle`|`central`| `mathematical`|`hanging`|`text-top`、*アニメーション*: **可**
*   {{SVGAttr('enable-background')}} {{deprecated_inline}}
    *   : 背景画像の蓄積をどのように管理するかをブラウザーに伝えます。
        *値*: **`accumulate`**|`new`|`inherit`; *アニメーション*: **不可**
*   {{SVGAttr('fill')}}
    *   : 適用されるグラフィック要素の内側の色を定義します。
        *値*: [\<paint>](/ja/docs/Web/SVG/Content_type#paint)、*アニメーション*: **可**
*   {{SVGAttr('fill-opacity')}}
    *   : 現在のオブジェクトが塗りつぶされる色やコンテンツの不透明度を指定します。
        *値*: [\<number>](/ja/docs/Web/SVG/Content_type#number)|[\<percentage>](/ja/docs/Web/SVG/Content_type#percentage)、*アニメーション*: **可**
*   {{SVGAttr('fill-rule')}}
    *   : パスのどの辺がシェイプの内側にあるかを判断する方法を示します。
        *値*: **`nonzero`**|`evenodd`|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('filter')}}
    *   : {{SVGElement('filter')}} 要素で定義されたフィルター効果を、その要素に適用することを定義します。
        *値*: [\<FuncIRI>](/ja/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('flood-color')}}
    *   : {{SVGElement('feFlood')}} または {{SVGElement('feDropShadow')}} 要素で定義された現在のフィルタープリミティブの部分領域を塗りつぶすために使用する色を示します。
        *値*: [\<color>](/ja/docs/Web/SVG/Content_type#color)、*アニメーション*: **可**
*   {{SVGAttr('flood-opacity')}}
    *   : {{SVGElement('feFlood')}} または {{SVGElement('feDropShadow')}} 要素で定義された現在のフィルタープリミティブの部分領域で使用する不透明度の値を示します。
        *値*: [\<number>](/ja/docs/Web/SVG/Content_type#number)|[\<percentage>](/ja/docs/Web/SVG/Content_type#percentage)、*アニメーション*: **可**
*   {{SVGAttr('font-family')}}
    *   : 要素のテキストを描画するためにどのフォントファミリーが使用されるかを示します。
        *値*: CSS の{{cssxref('font-family')}} を参照、*アニメーション*: **可**
*   {{SVGAttr('font-size')}}
    *   : フォントの大きさを指定します。
        *値*: CSS の{{cssxref('font-size')}} を参照、*アニメーション*: **可**
*   {{SVGAttr('font-size-adjust')}}
    *   : 大文字の高さではなく、小文字の高さに基づいてフォントの大きさを選択することを指定します。
        *値*: [\<number>](/ja/docs/Web/SVG/Content_type#number)|**`none`**|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('font-stretch')}}
    *   : フォントのフェイスを normal, condensed, expanded から選択します。
        *値*: CSS の {{cssxref('font-stretch')}} を参照、*アニメーション*: **可**
*   {{SVGAttr('font-style')}}
    *   : これは、フォントの {{SVGAttr('font-family')}} から、通常、イタリック体、斜体のいずれのスタイルにするかを指定します。
        *値*: **`normal`**|`italic`|`oblique`、*アニメーション*: **可**
*   {{SVGAttr('font-variant')}}
    *   : スモールキャップや合字など、フォントのバリエーションの一部を使用するかどうかを指定します。
        *値*: CSS の{{cssxref('font-variant')}}、*アニメーション*: **可**
*   {{SVGAttr('font-weight')}}
    *   : フォントの太さを指定します。
        *値*: **`normal`**|`bold`|`lighter`|`bolder`|`100`|`200`|`300`|`400`|`500`|`600`|`700`|`800`|`900`、*アニメーション*: **可**
*   {{SVGAttr('glyph-orientation-horizontal')}} {{deprecated_inline}}
    *   : inline-progression-direction が horizontal の場合の字体の向きを制御します。
        *値*: [\<angle>](/ja/docs/Web/SVG/Content_type#angle)|`inherit`; *アニメーション*: **不可**
*   {{SVGAttr('glyph-orientation-vertical')}} {{deprecated_inline}}
    *   : inline-progression-direction が vertical の場合の字体の向きを制御します。
        *値*: **`auto`**|[\<angle>](/ja/docs/Web/SVG/Content_type#angle)|`inherit`; *アニメーション*: **不可**
*   {{SVGAttr('image-rendering')}}
    *   : 画像処理を行う際に、速度と品質のどちらを重視するかのヒントをブラウザーに与えます。
        *値*: **`auto`**|`optimizeQuality`|`optimizeSpeed`、*アニメーション*: **可**
*   {{SVGAttr('kerning')}} {{deprecated_inline}}
    *   : ブラウザーが字間を調整するかどうかを示します。
        *値*: **`auto`**|[\<length>](/ja/docs/Web/SVG/Content_type#length)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('letter-spacing')}}
    *   : テキスト文字の間の字間を制御します。
        *値*: **`normal`**|[\<length>](/ja/docs/Web/SVG/Content_type#length)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('lighting-color')}}
    *   : フィルタープリミティブ要素 {{SVGElement('feDiffuseLighting')}} および {{SVGElement('feSpecularLighting')}} のための光源のの色を定義します。
        *値*: [\<color>](/ja/docs/Web/SVG/Content_type#color)、*アニメーション*: **可**
*   {{SVGAttr('marker-end')}}
    *   : これは、与えられた {{SVGElement('path')}} 要素や基本図形の最後の頂点に描かれる矢尻やポリマーカーを定義します。
        *値*: [\<FuncIRI>](/ja/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('marker-mid')}}
    *   : これは、与えられた {{SVGElement('path')}} 要素や基本図形の最初と最後を除いた頂点に描かれる矢尻やポリマーカーを定義します。
        *値*: [\<FuncIRI>](/ja/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('marker-start')}}
    *   : これは、与えられた {{SVGElement('path')}} 要素や基本図形の最初の頂点に描かれる矢尻やポリマーカーを定義します。
        *値*: [\<FuncIRI>](/ja/docs/Web/SVG/Content_type#funciri)|**`none`**|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('mask')}}
    *   : 特定の位置で画像をマスクしたり切り取ったりすることで、要素の可視性を変更します。
        *値*: CSS の{{cssxref('mask')}}、*アニメーション*: **可**
*   {{SVGAttr('opacity')}}
    *   : 単一のオブジェクトまたはオブジェクトのグループの透過性を指定します。
        *値*: [\<opacity-value>](/ja/docs/Web/SVG/Content_type#opacity_value)、*アニメーション*: **可**
*   {{SVGAttr('overflow')}}
    *   : ブロックレベル要素のコンテンツが要素のボックスからはみ出したときに切り取るかどうかを指定します。
        *値*: **`visible`**|`hidden|scroll`|`auto`|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('pointer-events')}}
    *   : 要素がマウスイベントのターゲットになれるかどうか、いつなるかを定義します。
        *値*: `bounding-box`|**`visiblePainted`**|`visibleFil`|`visibleStroke`|`visible` |`painted`|`fill`|`stroke`|`all`|`none`、*アニメーション*: **可**
*   {{SVGAttr('shape-rendering')}}
    *   : ブラウザーが {{SVGElement('path')}} 要素や基本的な図形を描画する際に、どのようなトレードオフを行うかについてのヒントです。
        *値*: **`auto`**|`optimizeSpeed`|`crispEdges`|`geometricPrecision` |`inherit`、*アニメーション*: **可**
*   {{SVGAttr('solid-color')}}
    *   : -
        *値*:; *Animatable*: **-**
*   {{SVGAttr('solid-opacity')}}
    *   : -
        *値*:; *Animatable*: **-**
*   {{SVGAttr('stop-color')}}
    *   : グラデーションの色停止点で使用する色を示します。
        *値*: `currentcolor`|[\<color>](/ja/docs/Web/SVG/Content_type#color)|[\<icccolor>](/ja/docs/Web/SVG/Content_type#icccolor)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('stop-opacity')}}
    *   : グラデーションの色停止点の(不)透明度を定義します。
        *値*: [\<opacity-value>](/ja/docs/Web/SVG/Content_type#opacity_value)|`inherit`、*アニメーション*: **可**
*   {{SVGAttr('stroke')}}
    *   : 図形の輪郭を描くのに使用する色を定義します。
        *値*: [\<paint>](/ja/docs/Web/SVG/Content_type#paint)、*アニメーション*: **可**
*   {{SVGAttr('stroke-dasharray')}}
    *   : 図形の輪郭を描くのに使用する破線と隙間のパターンを定義します。
        *値*: `none`|`<dasharray>`、*アニメーション*: **可**
*   {{SVGAttr('stroke-dashoffset')}}
    *   : 関連するダッシュ配列を描画する際のオフセットを定義します。
        *値*: [\<percentage>](/ja/docs/Web/SVG/Content_type#percentage)|[\<length>](/ja/docs/Web/SVG/Content_type#length)、*アニメーション*: **可**
*   **{{SVGAttr('stroke-linecap')}}**
    *   : 開いたサブパスを描いたときに、その端点に使用する形状を定義します。
        *値*: **`butt`**|`round`|`square`、*アニメーション*: **可**
*   **{{SVGAttr('stroke-linejoin')}}**
    *   : パスの角を描いたときに使用する形状を定義します。
        *値*: `arcs`|`bevel`|**`miter`**|`miter-clip`|`round`、*アニメーション*: **可**
*   **{{SVGAttr('stroke-miterlimit')}}**
    *   : マイター結合の描画に使用される {{ SVGAttr("stroke-width") }} に対するマイターの長さの比率の制限を定義します。
        *値*: [\<number>](/ja/docs/Web/SVG/Content_type#number)、*アニメーション*: **可**
*   **{{SVGAttr('stroke-opacity')}}**
    *   : 図形の線の(不)透明度を定義します。
        *値*: [\<opacity-value>](/ja/docs/Web/SVG/Content_type#opacity_value)|[\<percentage>](/ja/docs/Web/SVG/Content_type#paint)、*アニメーション*: **可**
*   **{{SVGAttr('stroke-width')}}**
    *   : 図形に適用される線の太さを定義します。
        *値*: [\<length>](/ja/docs/Web/SVG/Content_type#length)|[\<percentage>](/ja/docs/Web/SVG/Content_type#percentage)、*アニメーション*: **可**
*   **{{SVGAttr('text-anchor')}}**
    *   : テキストの文字列の垂直方向の配置を定義します。
        *値*: `start`|`middle`|`end`|**`inherit`**、*アニメーション*: **可**
*   **{{SVGAttr('text-decoration')}}**
    *   : テキストの装飾線の外見を設定します。
        *値*: `none`|`underline`|`overline`|`line-through`|`blink`|**`inherit`**、*アニメーション*: **可**
*   **{{SVGAttr('text-rendering')}}**
    *   : ブラウザーでテキストを描画する際に何をトレードオフにするかについてのヒントです。
        *値*: **`auto`**|`optimizeSpeed`|`optimizeLegibility`|`geometricPrecision`|`inherit`、*アニメーション*: **可**
*   **{{SVGAttr('transform')}}**
    *   : 要素と要素の子に適用される座標変換定義のリストを定義します。
        *値*: [\<transform-list>](/ja/docs/Web/SVG/Content_type#transform-list)、*アニメーション*: **可**
*   **{{SVGAttr('unicode-bidi')}}**
    *   : -
        *値*:; *Animatable*: **-**
*   **{{SVGAttr('vector-effect')}}**
    *   : オブジェクトを描画する際に使用するベクター効果を指定します。
        *値*: `default`|`non-scaling-stroke`|`inherit`|`<uri>`、*アニメーション*: **可**
*   **{{SVGAttr('visibility')}}**
    *   : グラフィック要素の可視性を制御することができます。
        *値*: **`visible`**|`hidden`|`collapse`|`inherit`、*アニメーション*: **可**
*   **{{SVGAttr('word-spacing')}}**
    *   : 単語間の空白の動作を指定します。
        *値*: [\<length>](/ja/docs/Web/SVG/Content_type#length)|**`inherit`**、*アニメーション*: **可**
*   **{{SVGAttr('writing-mode')}}**
    *   : {{SVGElement('text')}} 要素の最初のインライン進行方向を、左から右、右から左、上から下のどれにするかを指定します。
        *値*: **`lr-tb`**|`rl-tb`|`tb-rl`|`lr`|`rl`|`tb`|`inherit`、*アニメーション*: **可**

## ブラウザーの互換性

{{Compat}}
