---
title: animation-delay
slug: Web/CSS/animation-delay
tags:
  - CSS
  - CSS アニメーション
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.animation-delay
translation_of: Web/CSS/animation-delay
---
{{CSSRef}}

**`animation-delay`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーションをいつ開始するかを指定します。アニメーションは未来のある時点から、直ちに最初から、または直ちにアニメーション周期の途中から始めることができます。

{{EmbedInteractiveExample("pages/css/animation-delay.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* 複数のアニメーション */
animation-delay: 2.1s, 480ms;

/* グローバル値 */
animation-delay: inherit;
animation-delay: initial;
animation-delay: revert;
animation-delay: unset;
```

### 値

- `{{cssxref("&lt;time&gt;")}}`

  - : アニメーションが要素に適用され、アニメーションが始まる瞬間からのオフセット時間。これは秒 (`s`) またはミリ秒 (`ms`) のどちらかで指定できます。単位は必須です。

    正の数が指定された場合は、アニメーションが始まる経過時間を示します。 `0s` （既定値）の場合は、アニメーションは適用されたらすぐに始まります。

    負の数が指定された場合は、アニメーションは直ちに始まりますが、アニメーション周期の途中からになります。例えば、 `-1s` を遅延時間に指定すると、アニメーションは直ちに始まりますが、アニメーションが始まって1秒の時点から始まります。アニメーションの遅延時間に負の値を指定しても、暗黙的に開始値が指定されている場合、開始値はアニメーションが要素に適用された瞬間から取得されます。

> **Note:** `animation-*` プロパティにコンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### delay が 2 秒であるアニメーション

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
  animation-delay: 2s;
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
