---
title: offset-distance
slug: Web/CSS/Reference/Properties/offset-distance
original_slug: Web/CSS/offset-distance
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`offset-distance`** は CSS プロパティで、 {{CSSxRef("offset-path")}} 上の要素を配置する位置を指定します。

{{InteractiveExample("CSS デモ: offset-distance")}}

```css interactive-example-choice
offset-distance: 0%;
```

```css interactive-example-choice
offset-distance: 80%;
```

```css interactive-example-choice
offset-distance: 50px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
}

/* Provides a reference image of what path the element is following */
#default-example {
  background-position: calc(50% - 12px) calc(50% + 14px);
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-75 -45 150 140" width="150" height="140"><path d="M-70,-40 C-70,70 70,70 70,-40" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
}
```

## 構文

```css
/* 既定値 */
offset-distance: 0;

/* offset-path の途中 */
offset-distance: 50%;

/* パス上の固定距離の位置 */
offset-distance: 40px;

/* グローバル値 */
offset-distance: inherit;
offset-distance: initial;
offset-distance: revert;
offset-distance: revert-layer;
offset-distance: unset;
```

- {{cssxref('&lt;length-percentage&gt;')}}
  - : 要素が（{{cssxref('offset-path')}} で定義された）パス上のどのくらいの距離にあるかを指定する長さです。

    100% はパスの全長を表します。（`offset-path` が基本シェイプまたは `path()` として定義されている場合）。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーション内での offset-distance の使用

CSS モーションパスのモーションアスペクトは、一般に `offset-distance` プロパティのアニメーションから来ています。要素をパス全体の上でアニメーションさせたい場合は、その {{cssxref('offset-path')}} を定義し、 `offset-distance` に `0%` から `100%` までを取るアニメーションを設定してください。

#### HTML

```html
<div id="motion-demo"></div>
```

#### CSS

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

#### 結果

{{EmbedLiveSample('Using_offset-distance_in_an_animation', '100%', 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
