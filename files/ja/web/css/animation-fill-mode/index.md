---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
---

{{CSSRef}}

**`animation-fill-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 CSS アニメーションの実行の前後にどう対象にスタイルを適用するかを設定します。

{{EmbedInteractiveExample("pages/css/animation-fill-mode.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} を使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* 複数のアニメーション */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;

/* グローバル値 */
animation-fill-mode: inherit;
animation-fill-mode: initial;
animation-fill-mode: revert;
animation-fill-mode: unset;
```

### 値

- `none`
  - : アニメーションが実行されていない時は、対象にスタイルを適用しません。要素は適用されているその他の CSS 規則を使用して表示されます。これが既定値です。
- `forwards`

  - : 対象は実行の最後の[キーフレーム](/ja/docs/Web/CSS/@keyframes)で設定された計算値を保持します。最後のキーフレームは {{cssxref("animation-direction")}} と {{cssxref("animation-iteration-count")}} の値によって変わります。

    | `animation-direction` | `animation-iteration-count` | 最後のキーフレーム |
    | --------------------- | --------------------------- | ------------------ |
    | `normal`              | 偶数または奇数              | `100%` または `to` |
    | `reverse`             | 偶数または奇数              | `0%` または `from` |
    | `alternate`           | 偶数                        | `0%` または `from` |
    | `alternate`           | 奇数                        | `100%` または `to` |
    | `alternate-reverse`   | 偶数                        | `100%` または `to` |
    | `alternate-reverse`   | 奇数                        | `0%` または `from` |

- `backwards`

  - : アニメーションは最初の適切な[キーフレーム](/ja/docs/Web/CSS/@keyframes)で定義された値を対象に適用されると同時に適用し、 {{cssxref("animation-delay")}} の期間これを保持します。最初の適切なキーフレームは、 {{cssxref("animation-direction")}} の値によって変わります。

    | `animation-direction`                | 最初の適切なキーフレーム |
    | ------------------------------------ | ------------------------ |
    | `normal` または `alternate`          | `0%` または `from`       |
    | `reverse` または `alternate-reverse` | `100%` または `to`       |

- `both`
  - : アニメーションは forwards と backwards の両方の既定に従います。よって、アニメーションの設定は実行前と実行後の両方に適用されます。

> **メモ:** `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

以下の例で `animation-fill-mode` の効果を見ることができます。これは無限に繰り返されるアニメーションが、元の状態に戻るのではなく最後の状態を維持するようにすることができます（既定の状態）。

### HTML

```html
<p>マウスを灰色のボックスの上に乗せてください！</p>
<div class="demo">
  <div class="growsandstays">これは大きくなって大きいままになります。</div>
  <div class="grows">これは大きくなるだけです。</div>
</div>
```

### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
}

@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

### 結果

{{EmbedLiveSample('Examples',700,300)}}

これ以外の例は [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
