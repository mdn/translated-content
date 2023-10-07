---
title: animation-name
slug: Web/CSS/animation-name
---

{{CSSRef}}

**`animation-name`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素に適用される 1 つまたは複数のアニメーションを記述する {{cssxref("@keyframes")}} アットルールの名前を指定します。

{{EmbedInteractiveExample("pages/css/animation-name.html")}}

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* 単一のアニメーション */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* 複数のアニメーション */
animation-name: test1, animation4;
animation-name:
  none,
  -moz-specific,
  sliding;

/* グローバル値 */
animation-name: initial;
animation-name: inherit;
animation-name: revert;
animation-name: unset;
```

### 値

- `none`
  - : キーフレームがないことを示す特別なキーワード。他の識別子の順序を変更せずにアニメーションを非アクティブにする、またはカスケードからのアニメーションを非アクティブにするために使用できます。
- {{cssxref("&lt;custom-ident&gt;")}}
  - : アニメーションを識別する名前です。識別子は大文字小文字の区別がない英文字 `a` から `z`、 数字 `0` から `9`、 アンダースコア (`_`)、 ダッシュ (`-`) から成ります。最初のダッシュ以外の文字は英文字でなければなりません。また、二重ダッシュは識別子の先頭では禁止されています。さらに、識別子は `none`, `unset`, `initial`, `inherit` であってはなりません。

> **メモ:** `animation-*` プロパティにコンマ区切りで複数の値を指定した場合、 {{cssxref("animation-name")}} プロパティで指定したアニメーションに割り当てられますが、いくつあるかによって異なる方法で割り当てられます。詳しくは、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values)を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### animation-name が rotate であるアニメーション

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

例については[CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
