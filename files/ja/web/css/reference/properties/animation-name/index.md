---
title: animation-name
slug: Web/CSS/Reference/Properties/animation-name
original_slug: Web/CSS/animation-name
l10n:
  sourceCommit: dfd18cb9ee7c6195d07cd937d206b53246f7507e
---

**`animation-name`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素に適用されるアニメーションを記述する 1 つまたは複数の {{cssxref("@keyframes")}} アットルールの名前を指定します。複数の `@keyframes` アットルールをカンマ区切りの文字列で指定します。指定した名前がどの `@keyframes` アットルールにも一致しない場合、プロパティはアニメーションしません。

{{InteractiveExample("CSS デモ: animation-name")}}

```css interactive-example-choice
animation-name: none;
```

```css interactive-example-choice
animation-name: slide;
```

```css interactive-example-choice
animation-name: bounce;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  animation-direction: alternate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333;
  color: white;
  height: 150px;
  margin: auto;
  margin-left: 0;
  width: 150px;
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

@keyframes bounce {
  from {
    background-color: orange;
    color: black;
    margin-top: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-top: 40%;
  }
}
```

アニメーションのプロパティすべてを一度に設定するには、一括指定プロパティである {{cssxref("animation")}} プロパティを使用すると便利です。

## 構文

```css
/* アニメーションなし */
animation-name: none;

/* 単一のアニメーション */
animation-name: test_05;
animation-name: -specific;
animation-name: "sliding-vertically";

/* 複数のアニメーション */
animation-name: test1, animation4;
animation-name:
  none,
  -moz-specific,
  sliding;

/* グローバル値 */
animation-name: inherit;
animation-name: initial;
animation-name: revert;
animation-name: revert-layer;
animation-name: unset;
```

### 値

- `none`
  - : キーフレームがないことを示す特別なキーワード。他の識別子の順序を変更せずにアニメーションを非アクティブにする、またはカスケードからのアニメーションを非アクティブにするために使用できます。
- {{cssxref("&lt;custom-ident&gt;")}}
  - : アニメーションを識別する、引用符で囲まれていない名前です。識別子は大文字小文字の区別がない英文字 `a` から `z`、 数字 `0` から `9`、 アンダースコア (`_`)、 ダッシュ (`-`) から成ります。最初のダッシュ以外の文字は英文字でなければなりません。また、二重ダッシュは識別子の先頭では禁止されています。さらに、識別子は `none`, `unset`, `initial`, `inherit` であってはなりません。
- {{cssxref("&lt;string&gt;")}}
  - : 上記で記述されているカスタム識別子と同じ規則に従う一連の文字で、二重引用符 (") または単一引用符 (') で囲まれている点が異なります。 `animation-name` と対応する {{cssxref("@keyframes")}} アットルールの名前の両方に引用符で囲まれた文字列を使用する場合、`none`、グローバルキーワード、アンダースコアまたは二重ダッシュで始まる名前は有効ですが、使用は推奨されません。

> [!NOTE]
> `animation-*` プロパティにカンマ区切りで複数の値を指定した場合、 `animation-name` に現れる順にアニメーションに適用されます。アニメーションの数と `animation-*` プロパティの値が一致しない場合は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/Guides/Animations/Using#複数のアニメーションプロパティ値の設定) を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### アニメーションに名前を付ける

このアニメーションは `animation-name` を `rotate` としています。

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

{{EmbedLiveSample("Naming an animation","100%","250")}}

例については [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- JavaScript {{domxref("AnimationEvent")}} API
- その他のアニメーション関連プロパティ: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
