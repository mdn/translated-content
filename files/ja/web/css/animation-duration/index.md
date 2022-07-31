---
title: animation-duration
slug: Web/CSS/animation-duration
tags:
  - アニメーション
  - CSS
  - CSS アニメーション
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.animation-duration
translation_of: Web/CSS/animation-duration
---
{{CSSRef}}

**`animation-duration`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 1 回のアニメーション周期が完了するまでの所要時間を設定します。

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-duration: 6s;
animation-duration: 120ms;

/* 複数のアニメーション */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;

/* グローバル値 */
animation-duration: inherit;
animation-duration: initial;
animation-duration: revert;
animation-duration: unset;
```

### 値

- `{{cssxref("&lt;time&gt;")}}`
  - : 1 回のアニメーションの周期にかかる時間。この値は、秒 (`s`) またはミリ秒 (`ms`) で指定することができます。値は正の数か 0 でなければならず、単位は必須です。 `0s` の値は、既定値ですが、アニメーションを実行しないことを意味します。

> **Note:** 負の数は無効であり、宣言が無視されます。一部、初期の接頭辞付きの実装は `0s` と等価に解釈するかもしれません。

> **Note:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### animation-duration が 0.7 秒のアニメーション

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

[CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
