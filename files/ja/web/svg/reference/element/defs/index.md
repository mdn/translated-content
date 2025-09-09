---
title: <defs>
slug: Web/SVG/Reference/Element/defs
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<defs>`** は [SVG](/ja/docs/Web/SVG) の要素で、後で使用するグラフィックオブジェクトを格納するために使われます。 `<defs>` 要素内に作成されたオブジェクトは直接レンダリングされません。オブジェクトを表示するには（例えば {{SVGElement("use")}} 要素で）参照する必要があります。

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

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
