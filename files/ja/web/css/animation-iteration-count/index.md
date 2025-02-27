---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{CSSRef}}

**`animation-iteration-count`** は [CSS](/ja/docs/Web/CSS) のプロパティで、停止するまでにアニメーション周期が再生される回数を指定します。

{{EmbedInteractiveExample("pages/css/animation-iteration-count.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* キーワード値 */
animation-iteration-count: infinite;

/* <number> 値 */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* 複数の値 */
animation-iteration-count: 2, 0, infinite;

/* グローバル値 */
animation-iteration-count: inherit;
animation-iteration-count: initial;
animation-iteration-count: revert;
animation-iteration-count: revert-layer;
animation-iteration-count: unset;
```

**`animation-iteration-count`** プロパティは 1 つ以上のカンマで区切られた値で指定します。

### 値

- `infinite`
  - : アニメーションは無制限に繰り返されます。
- `{{cssxref("&lt;number&gt;")}}`
  - : アニメーションが繰り返される回数です。既定値は `1` です。アニメーション周期の一部を再生したい場合は、非整数の値を指定できます。例えば、 `0.5` はアニメーション周期の半分を再生します。負の数は無効です。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations#複数のアニメーションプロパティ値の設定) を参照してください。

> **メモ:** [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)を作成するとき、 `animation-iteration-count` を指定すると、進行タイムラインの進行に伴ってその回数だけアニメーションが繰り返されます。もし `animation-iteration-count` が指定されなかった場合、アニメーションは一度しか発生しません。 `infinite` はスクロール駆動のアニメーションには有効な値ですが、アニメーションはうまく動作しません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 繰り返し回数を設定

10 回実行されるアニメーション

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-iteration-count: 10;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### 結果

矩形にポインターを当てるとアニメーションが始まります。

{{EmbedLiveSample("Setting iteration count","100%","250")}}

[CSS アニメーション](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
- その他のアニメーション関連プロパティ: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
