---
title: <animate>
slug: Web/SVG/Reference/Element/animate
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<animate>`** は [SVG](/ja/docs/Web/SVG) の要素で、時間の経過に応じて要素の属性を変化させる方法を提供します。

## 使用コンテキスト

{{svginfo}}

## 属性

この要素にはグローバル属性のみがあります。

## DOM インターフェイス

この要素は {{domxref("SVGAnimateElement")}} インターフェイスを実装しています。

## 例

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

{{EmbedLiveSample('Example', 150, '100%')}}

## アクセシビリティの考慮

点滅や発光のアニメーションは、注意欠陥障碍 (ADHD) のような認知障碍を持つ人にとって問題になることがあります。加えて、このような動きは、前庭障害、てんかん、偏頭痛、光感受性障害の引き金になる可能性があります。

アニメーションを一時停止したり無効にしたりする仕組みを提供したり、[動き軽減メディアクエリー](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)または同様の[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints)である {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} を使用して、アニメーションなしの利用を設定したユーザーに適した利用方法を作成するようにすることを検討してください。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN WCAG を理解する、ガイドライン 2.2 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
