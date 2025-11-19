---
title: animation-play-state
slug: Web/CSS/Reference/Properties/animation-play-state
original_slug: Web/CSS/animation-play-state
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`animation-play-state`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーションが実行中か停止中かを設定します。

{{InteractiveExample("CSS デモ: animation-play-state")}}

```css interactive-example-choice
animation-play-state: paused;
```

```css interactive-example-choice
animation-play-state: running;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

停止したアニメーションを再開すると、アニメーションの流れの最初からではなく、停止した位置からアニメーションが始まります。

## 構文

```css
/* 単一のアニメーション */
animation-play-state: running;
animation-play-state: paused;

/* 複数のアニメーション */
animation-play-state: paused, running, running;

/* グローバル値 */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: revert;
animation-play-state: revert-layer;
animation-play-state: unset;
```

### 値

- `running`
  - : **アニメーション**が現在**実行中**です。
- `paused`
  - : **アニメーション**が現在**停止中**です。

> [!NOTE]
> `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/Guides/Animations/Using#複数のアニメーションプロパティ値の設定) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーションの停止

このアニメーションは停止していますが、ポインターを当てると実行されます。

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
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-play-state: paused;
}

.box:hover {
  animation-play-state: running;
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

{{EmbedLiveSample("Pausing an animation","100%","250")}}

例については [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- JavaScript {{domxref("AnimationEvent")}} API
- その他のアニメーション関連プロパティ: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
