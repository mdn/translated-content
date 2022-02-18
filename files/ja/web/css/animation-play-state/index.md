---
title: animation-play-state
slug: Web/CSS/animation-play-state
tags:
  - CSS
  - CSS アニメーション
  - CSS プロパティ
  - リファレンス
translation_of: Web/CSS/animation-play-state
---
{{CSSRef}}

**`animation-play-state`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーションが実行中か停止中かを設定します。

{{EmbedInteractiveExample("pages/css/animation-play-state.html")}}

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
animation-play-state: unset;
```

### 値

- `running`
  - : **アニメーション**が現在**実行中**です。
- `paused`
  - : **アニメーション**が現在**停止中**です。

> **Note:** `animation-*` プロパティにコンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 停止中のアニメーション

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
  animation-play-state: paused;
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

{{EmbedLiveSample("Examples","100%","250")}}

例は [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
