---
title: <animate>
slug: Web/SVG/Element/animate
---

{{SVGRef}}

SVG の **`<animate>`** 要素は、時間の経過に応じて要素の属性を変化させる方法を提供します。

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## 属性

### アニメーション属性

- [アニメーションタイミング属性](/ja/docs/Web/SVG/Attribute#Animation_Timing_Attributes)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [アニメーション値属性](/ja/docs/Web/SVG/Attribute#Animation_Value_Attributes)
  - : {{SVGAttr("calcMode")}}, {{SVGAttr("values")}}, {{SVGAttr("keyTimes")}}, {{SVGAttr("keySplines")}}, {{SVGAttr("from")}}, {{SVGAttr("to")}}, {{SVGAttr("by")}}
- [その他のアニメーション属性](/ja/docs/Web/SVG/Attribute#Animation_Attributes)
  - : 特に重要なもの: {{SVGAttr("attributeName")}}, {{SVGAttr("additive")}}, {{SVGAttr("accumulate")}}
- [アニメーションイベント属性](/ja/docs/Web/SVG/Attribute/Events#Animation_Event_Attributes)
  - : 特に重要なもの: {{SVGAttr("onbegin")}}, {{SVGAttr("onend")}}, {{SVGAttr("onrepeat")}}

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute/Core)
  - : 特に重要なもの: {{SVGAttr('id')}}
- [スタイル属性](/ja/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- イベント属性
  - : [グローバルイベント属性](/ja/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [文書要素イベント属性](/ja/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes)

## 使用上の注意

この要素は {{domxref("SVGAnimateElement")}} インターフェイスを実装しています。

## アクセシビリティの考慮事項

点滅や発光のアニメーションは、注意欠陥障碍 (ADHD) のような認知障碍を持つ人にとって問題になることがあります。加えて、このような動きは、前庭障害、てんかん、偏頭痛、光感受性障害の引き金になる可能性があります。

アニメーションを一時停止したり無効にしたりする仕組みを提供したり、 [Reduced Motion Media Query](/ja/docs/Web/CSS/@media/prefers-reduced-motion) を使用して、アニメーションなしの利用を設定したユーザーに適した利用方法を作成するようにすることを検討してください。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.elements.animate")}}
