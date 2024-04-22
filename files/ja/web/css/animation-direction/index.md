---
title: animation-direction
slug: Web/CSS/animation-direction
l10n:
  sourceCommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{CSSRef}}

**`animation-direction`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーション再生の向きを順方向、逆方向、前後反転のいずれにするかを設定します。

{{EmbedInteractiveExample("pages/css/animation-direction.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* 複数のアニメーション */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* グローバル値 */
animation-direction: inherit;
animation-direction: initial;
animation-direction: revert;
animation-direction: revert-layer;
animation-direction: unset;
```

### 値

- `normal`
  - : アニメーションを毎回<em>順方向</em>に再生します。言い換えれば、アニメーション周期ごとに、アニメーションを最初の状態にリセットしてそこからまた始めます。これが既定値です。
- `reverse`
  - : アニメーションを毎回<em>逆方向</em>に再生します。言い換えれば、アニメーション周期ごとに、アニメーションを最後の状態にリセットしてそこからまた始めます。アニメーションを逆方向に実行し、イージング関数も逆になります。例えば、イージング関数の `ease-in` が `ease-out` になります。
- `alternate`
  - : アニメーションを毎回反転させ、初回は<em>順方向</em>になります。周期が偶数か奇数かを特定する回数は1から始まります。
- `alternate-reverse`
  - : アニメーションを毎回反転させ、初回は<em>逆方向</em>になります。周期が偶数か奇数かを特定する回数は1から始まります。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations#複数のアニメーションプロパティ値の設定) を参照してください。

> **メモ:** [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations) を作成するとき、 `animation-direction` を指定すると期待通りに動作します。例えば、`reverse` を指定すると、タイムラインの進行の過程でアニメーションが逆に実行されます。alternate`の値（{{cssxref("animation-iteration-count")}}と結合子）を指定すると、タイムラインの進行に合わせてアニメーションを前後に実行させます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 逆方向に実行されるアニメーション

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
  animation-direction: reverse;
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

{{EmbedLiveSample("逆方向に実行されるアニメーション","100%","250")}}

例については [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
- その他のアニメーション関連プロパティ: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
