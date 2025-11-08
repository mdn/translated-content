---
title: CSS モーションパス
slug: Web/CSS/Guides/Motion_path
original_slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: 3dce7daa89de9290c5ca04b6289756cd3c39d247
---

**CSS モーションパス** (CSS motion path) モジュールは、任意のグラフィックオブジェクトを独自の経路に沿って動作させるためのものです。

この概念は、ある経路に従って動作する要素をアニメーションさせたい場合、以前は裁量権がアニメーションの推移や位置などしかなかったのですが、これは理想的はなく、単純な動作しかできませんでした。 {{cssxref("offset-path")}} によって、任意の形状の特定の経路を定義することができます。そして、 {{cssxref("offset-distance")}} により経路に沿って動かすことができ、 {{cssxref("offset-rotate")}} を用いて任意の位置での向きを選択することができます。

## 基本的な例

```html
<div id="motion-demo"></div>
```

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('Basic_example', '100%', 150)}}

## リファレンス

### プロパティ

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

### 関数

- {{cssxref("ray")}}

## 仕様書

{{Specifications}}
