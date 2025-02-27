---
title: <defs>
slug: Web/SVG/Element/defs
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

**`<defs>`** 要素は、後で使用するグラフィックオブジェクトを格納するために使われます。 `<defs>` 要素内に作成されたオブジェクトは直接レンダリングされません。オブジェクトを表示するには（例えば {{SVGElement("use")}} 要素で）参照する必要があります。

グラフィックオブジェクトはどこからでも参照することができますが、これらのオブジェクトを `<defs>` 要素の内部で定義することは SVG コンテンツの理解しやすさを促進し、文書全体のアクセシビリティに有益です。

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
  <!-- Some graphical objects to use -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my graphical objects -->
  <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 利用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
