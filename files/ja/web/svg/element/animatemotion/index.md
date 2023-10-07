---
title: animateMotion
slug: Web/SVG/Element/animateMotion
---

{{SVGRef}}

SVG の **`<animateMotion>`** 要素は、ある要素がモーションパスに沿って移動する方法を定義します。

> **メモ:** 既存のパスを再利用するには、 `<animateMotion>` 要素内の {{SVGElement("mpath")}} 要素を {{SVGAttr("path")}} 属性の代わりに使用する必要があります。

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="red">
    <animateMotion
      dur="10s"
      repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## 使用場面

{{svginfo}}

## 属性

- {{SVGAttr("keyPoints")}}
  - : この属性は \[0,1] の範囲で、それぞれの {{SVGAttr("keyTimes")}} に関連付けられた値に対して、パスに沿ってオブジェクトがどのくらいの距離にあるかを示します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#Number)\*; _Default value_: none; _Animatable_: **no**
- {{SVGAttr("path")}}
  - : この属性は、 {{SVGAttr('d')}} 属性と同じ構文を使用して、モーションパスを定義します。
    _値の型_: **\<string>**; _Default value_: none; _Animatable_: **no**
- {{SVGAttr("rotate")}}
  - : この属性は、パスに沿ってアニメーションされた要素に適用される回転を定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Content_type#Number)|`auto`|`auto-reverse`; _Default value_: `0`; _Animatable_: **no**

> **メモ:** `<animateMotion>` においては、 {{SVGAttr("calcMode")}} 属性の既定値は `paced` です。

### アニメーション属性

- [アニメーションタイミング属性](/ja/docs/Web/SVG/Attribute#Animation_Timing_Attributes)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [アニメーション値属性](/ja/docs/Web/SVG/Attribute#Animation_Value_Attributes)
  - : {{SVGAttr("calcMode")}}, {{SVGAttr("values")}}, {{SVGAttr("keyTimes")}}, {{SVGAttr("keySplines")}}, {{SVGAttr("from")}}, {{SVGAttr("to")}}, {{SVGAttr("by")}}
- [他のアニメーション属性](/ja/docs/Web/SVG/Attribute#Animation_Attributes)
  - : 特に重要なもの: {{SVGAttr("attributeName")}}, {{SVGAttr("additive")}}, {{SVGAttr("accumulate")}}
- [アニメーションイベント属性](/ja/docs/Web/SVG/Attribute/Events#Animation_Event_Attributes)
  - : 特に重要なもの: {{SVGAttr("onbegin")}}, {{SVGAttr("onend")}}, {{SVGAttr("onrepeat")}}

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 特に重要なもの: {{SVGAttr('id')}}
- [スタイル付け属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [文書要素イベント属性](/ja/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes)

## 使用上の注意

この要素は {{domxref("SVGAnimateMotionElement")}} インターフェイスを実装しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.elements.animateMotion")}}

## 関連情報

- {{SVGElement("mpath")}}
