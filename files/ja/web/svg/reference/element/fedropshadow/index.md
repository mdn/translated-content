---
title: <feDropShadow>
slug: Web/SVG/Reference/Element/feDropShadow
original_slug: Web/SVG/Element/feDropShadow
---

{{SVGRef}}

SVG の **`<feDropShadow>`** フィルタープリミティブは、入力画像のドロップシャドウを生成します。これは {{SVGElement('filter')}} 要素の中でのみ使用できます。

> [!NOTE]
> ドロップシャドウの色や不透明度は、 {{SVGAttr('flood-color')}} や {{SVGAttr('flood-opacity')}} の各プレゼンテーション属性を使用することで変更できます。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
    </filter>
    <filter id="shadow2">
      <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
    </filter>
    <filter id="shadow3">
      <feDropShadow
        dx="-0.8"
        dy="-0.8"
        stdDeviation="0"
        flood-color="pink"
        flood-opacity="0.5" />
    </filter>
  </defs>

  <circle cx="5" cy="50%" r="4" style="fill:pink; filter:url(#shadow);" />

  <circle cx="15" cy="50%" r="4" style="fill:pink; filter:url(#shadow2);" />

  <circle cx="25" cy="50%" r="4" style="fill:pink; filter:url(#shadow3);" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 属性

- {{SVGAttr("dx")}}
  - : この属性は、ドロップシャドウの X 方向のオフセットを定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: `2`; _Animatable_: **yes**
- {{SVGAttr("dy")}}
  - : この属性は、ドロップシャドウの Y 方向のオフセットを定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: `2`; _Animatable_: **yes**
- {{SVGAttr("stdDeviation")}}
  - : この属性は、ドロップシャドウのぼかし操作の標準偏差を定義します。
    _値の型_: [**\<number>**](/ja/docs/Web/SVG/Guides/Content_type#number); _既定値_: `2`; _Animatable_: **yes**

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Reference/Attribute)
  - : 特に: {{SVGAttr('id')}}
- [スタイル属性](/ja/docs/Web/SVG/Reference/Attribute)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#filters_attributes)
  - : {{SVGAttr('height')}}, {{SVGAttr('in')}}, {{SVGAttr('result')}}, {{SVGAttr('x')}}, {{SVGAttr('y')}}, {{SVGAttr('width')}}
- [プレゼンテーション属性](/ja/docs/Web/SVG/Reference/Attribute)
  - : 特に: {{SVGAttr('flood-color')}}, {{SVGAttr('flood-opacity')}}

## 使用上の注意

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
