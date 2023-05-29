---
title: dx
slug: Web/SVG/Attribute/dx
---

« [SVG Attribute reference home](/ja/docs/Web/SVG/Attribute)

`dx` 属性は、要素またはその中身の位置についての、x 軸に沿ったずれを表します。まさしくずらされるものは、この属性が設定される要素によります。

{{SVGElement("feOffset")}} 要素の場合は、入力グラフィックをずらす量を表す [\<number>](/ja/docs/Web/SVG/Content_type#Number) です。この量は、 {{SVGElement("filter")}} 要素上に {{SVGAttr("primitiveUnits")}} 属性で確立した座標系で表されます。

{{SVGElement("glyphRef")}} 要素の場合は, このグリフについてのフォント座標系内での相対的 X 座標を表す [\<number>](/ja/docs/Web/SVG/Content_type#Number) です。

{{SVGElement("text")}} 要素、 {{SVGElement("tspan")}} 要素、 {{SVGElement("tref")}} 要素、{{SVGElement("altGlyph")}} 要素の場合は、[\<list-of-length>](/ja/docs/Web/SVG/Content_type#List-of-Ts) を受け取るせいで、物事が少し複雑になります。

一つの [\<length>](/ja/docs/Web/SVG/Content_type#Length) が与えられた場合、この値は、この要素またはその子孫のうちのいずれかの内部における最初の文字についての現在テキスト位置の新たな相対的 X 座標です。 現在テキスト位置は 、最初の文字が描画される前に、現在のユーザ座標系の x 軸に沿って、 [\<length>](/ja/docs/Web/SVG/Content_type#Length) だけずらされます。

カンマまたはスペースで区切られた n 個の [\<length>](/ja/docs/Web/SVG/Content_type#Length) のリストが与えられた場合、これらの値は、この要素またはその子孫のうちのいずれかの内部における最初の n 文字についての現在テキスト位置の、x 軸に沿ったインクリメンタルなずれを表します。よって、現在の {{SVGElement("text")}} 要素内部の文字を描いた結果として得られる現在テキスト位置が、現在のユーザ座標系の X 軸に沿って、 [\<length>](/ja/docs/Web/SVG/Content_type#Length) だけずらされます。

[\<length>](/ja/docs/Web/SVG/Content_type#Length) よりも多数の文字が存在する場合は、これらの余分な文字の各々について、以下のようにします。

- 先祖の {{SVGElement("text")}} 要素または {{SVGElement("tspan")}} 要素が、その与えられた文字について、 `dx` 属性を通じて相対 X 座標を指定している場合には、その量の分だけ、現在のユーザ座標系の x 軸に沿って、現在テキスト位置がずらされます (もっとも近い先祖が優先されます)。
- それ以外の場合は、x 軸に沿った更なるずれは起こりません。

## Usage context

| Categories         | None                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Value              | [\<number>](/ja/docs/Web/SVG/Content_type#Number) \| [\<list-of-length>](/ja/docs/Web/SVG/Content_type#List-of-<var>T<.2Fvar>s)                                                                                                                                                                                                                                                                                                                                                                                                      |
| Animatable         | Yes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Normative document | [SVG 1.1 (2nd Edition): altGlyph element](http://www.w3.org/TR/SVG11/text.html#AltGlyphElementDXAttribute) [SVG 1.1 (2nd Edition): feOffset element](http://www.w3.org/TR/SVG11/filters.html#feOffsetDxAttribute) [SVG 1.1 (2nd Edition): glyphRef element](http://www.w3.org/TR/SVG11/text.html#GlyphRefElementDXAttribute) [SVG 1.1 (2nd Edition): text element](http://www.w3.org/TR/SVG11/text.html#TextElementDXAttribute) [SVG 1.1 (2nd Edition): tspan element](http://www.w3.org/TR/SVG11/text.html#TSpanElementDXAttribute) |

## Elements

以下の要素が `dx` 属性を使えます。

- {{ SVGElement("altGlyph") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("text") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("tspan") }}
