---
title: <set>
slug: Web/SVG/Reference/Element/set
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<set>`** は [SVG](/ja/docs/Web/SVG) の要素で、指定した時間だけ属性の値を設定するという単純な意味を提供します。

文字列や論理値など、合理的に補間できないものも含めて、すべての属性型に対応しています。合理的に補間できる属性については、通常は {{SVGElement('animate')}} を推奨します。

> [!NOTE]
> `<set>` 要素は非加算です。{{SVGAttr('additive')}} と {{SVGAttr('accumulate')}} 属性は指定することができず、指定されても無視されます。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect {
      cursor: pointer;
    }
    .round {
      rx: 5px;
      fill: green;
    }
  </style>

  <rect id="me" width="10" height="10">
    <set attributeName="class" to="round" begin="me.click" dur="2s" />
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 属性

- {{SVGAttr("to")}}
  - : この属性は、アニメーションの再生時間の間、対象とする属性に適用する値を定義します。値は、対象とする属性の要求と一致しなければなりません。
    _値の型_: [**\<anything>**](/ja/docs/Web/SVG/Guides/Content_type#anything); _既定値_: none; _アニメーション_: **不可**

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("attributeName")}} 属性
- [アニメーションタイミング属性](/ja/docs/Web/SVG/Reference/Attribute#アニメーションタイミング属性): {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- {{SVGElement("animate")}}
