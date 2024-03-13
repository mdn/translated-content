---
title: animation
slug: Web/CSS/animation
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{CSSRef}}

**`animation`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、スタイルの間のアニメーションを適用します。これは {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} の一括指定です。

{{EmbedInteractiveExample("pages/css/animation.html")}}

## 構成要素のプロパティ

このプロパティは以下のプロパティの一括指定です。

- [`animation-delay`](/ja/docs/Web/CSS/animation-delay)
- [`animation-direction`](/ja/docs/Web/CSS/animation-direction)
- [`animation-duration`](/ja/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/ja/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/ja/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/ja/docs/Web/CSS/animation-name)
- [`animation-play-state`](/ja/docs/Web/CSS/animation-play-state)
- [`animation-timeline`](/ja/docs/Web/CSS/animation-timeline)
- [`animation-timing-function`](/ja/docs/Web/CSS/animation-timing-function)

## 構文

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slidein;

/* 2 つのアニメーション */
animation:
  3s linear slidein,
  3s ease-out 5s slideout;
```

`animation` プロパティは 1 つまたはカンマで区切った複数のアニメーションとして指定します。

それぞれ個別のアニメーションは以下のように定義されます。

- 0 ～ 2 個の {{cssxref("&lt;time&gt;")}} の値

- 以下の値は 0 ～ 1 回出現します。

  - {{cssxref("animation", "&lt;single-easing-function&gt;", "#single-easing-function")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#single-animation-iteration-count")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#single-animation-direction")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#single-animation-fill-mode")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#single-animation-play-state")}}

- アニメーションの名前は任意で、 `none`, {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} のいずれかになります。

> **メモ:** {{cssxref("animation-timeline")}}、{{cssxref("animation-range-start")}}、{{cssxref("animation-range-end")}} は、現在の実装ではリセットのみであるため、現在のところこのリストには掲載されていません。つまり、 `animation` があると、それ以前に宣言した `animation-timeline` の値は `auto` に、それ以前に宣言した `animation-range-start` と `animation-range-end` の値は `normal` にリセットされますが、これらのプロパティを `animation` で設定することはできません。 [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations) を作成する場合、 `animation` の一括指定を宣言した後に、これらのプロパティを宣言しなければ効果を得ることはできません。

### 値

- `<single-easing-function>`
  - : 推移の形式を決定します。値は {{cssxref("easing-function")}} で利用できる値のいずれかでなければなりません。
- `<single-animation-iteration-count>`
  - : アニメーションが実行される回数です。 {{cssxref("animation-iteration-count")}} で利用できる値の一つでなければなりません。
- `<single-animation-direction>`
  - : アニメーションが実行される方向です。 {{cssxref("animation-direction")}} で利用できる値の一つでなければなりません。
- `<single-animation-fill-mode>`
  - : アニメーションの実行の前後にどのようにスタイルが適用されるかを定めます。 {{cssxref("animation-fill-mode")}} で利用できる値の一つでなければなりません。
- `<single-animation-play-state>`
  - : アニメーションが実行中かどうかを定めます。 {{cssxref("animation-play-state")}} で利用できる値の一つでなければなりません。

## 解説

それぞれのアニメーションの定義の中での順序は重要です。 {{cssxref("&lt;time&gt;")}} として解釈される最初の値は {{cssxref("animation-duration")}} に、そして 2 番目の値は、{{cssxref("animation-delay")}} に割り当てられます。

それぞれのアニメーション定義内の他の値の順序も、 {{cssxref("animation-name")}} 値と他の値を判別するために重要です。もし `animation` の一括指定の値が `animation-name` 以外のアニメーションプロパティの値として解釈できる場合、その値は最初のプロパティに適用され、 `animation-name` には適用されません。このため、 `animation` 一括指定を使用する場合は、値のリストの最後の値として `animation-name` の値を指定することをお勧めします。これは、`animation` 一括指定を使用してカンマで区切られた複数のアニメーションを指定する場合でも同様です。

アニメーションを適用するにはアニメーション名を設定する必要がありますが、`animation` 一括指定の値はすべてオプションで、それぞれの個別指定の `animation` 成分の既定値が設定されます。 `animation-name` の初期値は `none` です。つまり、`animation` 一括指定のプロパティで `animation-name` の値が宣言されていない場合、どのプロパティにもアニメーションは適用されません。

`animation-duration` 値が `animation` 一括指定プロパティにおいて除外された場合、このプロパティの値は `0s` が既定値となります。この場合、アニメーションは発生しますが（[`animationStart`](/ja/docs/Web/API/Element/animationstart_event) と [`animationEnd`](/ja/docs/Web/API/Element/animationend_event) イベントは発行されますが）、アニメーションは表示されません。

## アクセシビリティの考慮

点滅を伴うアニメーションは、注意欠陥障害 (ADHD) のような認知障害を持つ人々に問題を起こす可能性があります。加えて、特定の種類の動きが、前庭障害、てんかん、片頭痛、痙攣感受性などの引き金になることもあります。

アニメーションを停止したり無効にしたりする仕組みを、できれば[動きを縮小するメディアクエリー](/ja/docs/Web/CSS/@media/prefers-reduced-motion)を使用して、アニメーションを削減した操作の設定を表明したユーザーの希望を叶えるように作成することができます。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN WCAG を理解する、ガイドライン 2.2 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

> **メモ:** [CSS ボックスモデル](/ja/docs/Web/CSS/CSS_box_model) プロパティのアニメーションは推奨されません。ボックスモデルのプロパティをアニメーションさせると、本質的に CPU に負荷がかかります。

### 日の出

ここでは、水色の空を昇る黄色い太陽をアニメーション化しています。太陽は
ビューポートの中心まで上昇してから、下落して見えなくなります。

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden; /* 地平線下の部分の太陽を隠す */
  background-color: lightblue;
  display: flex;
  justify-content: center; /* 太陽を背景の中心に配置する */
}

.sun {
  background-color: yellow;
  border-radius: 50%; /* 丸い背景を作成 */
  height: 100vh; /* 太陽をビューポートの大きさにする */
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate sun-rise;
}

@keyframes sun-rise {
  from {
    /* ビューポートを通過して太陽を下に押し下げる */
    transform: translateY(110vh);
  }
  to {
    /* 太陽を既定の位置に戻す */
    transform: translateY(0);
  }
}
```

{{EmbedLiveSample('Sun_Rise')}}

### 複数のプロパティのアニメーション

前回の例の太陽のアニメーションに追加して、太陽が昇ったり沈んだりするときの色を変える 2 つ目のアニメーションを追加します。太陽が地平線の下にあるときは暗い赤色から始まり、上に近づくにつれて明るいオレンジ色に変わります。

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate animating-multiple-properties;
}

/* 単一のアニメーションで複数のプロパティをアニメーションさせることができる */
@keyframes animating-multiple-properties {
  from {
    transform: translateY(110vh);
    background-color: red;
    filter: brightness(75%);
  }
  to {
    transform: translateY(0);
    background-color: orange;
    /* 設定されていないプロパティ、つまり 'filter' は既定値に戻る */
  }
}
```

{{EmbedLiveSample('Animating Multiple Properties')}}

### 複数のアニメーションの適用

水色の背景に昇ったり沈んだりする太陽。太陽は徐々に虹色に回転します。太陽の位置と色のタイミングは独立しています。

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /* 複数のアニメーションをカンマで区切り、各アニメーションの引数を個別に設定 */
  animation:
    4s linear 0s infinite alternate rise,
    24s linear 0s infinite psychedelic;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

{{EmbedLiveSample('Applying Multiple Animations')}}

### 複数のアニメーションのカスケード

ここでは、水色の背景に黄色の太陽があります。太陽はビューポートの左側と右側の間で跳ね返ります。上昇アニメーションを定義しても、太陽はビューポートに残ります。上昇アニメーションの座標変換プロパティは、跳ね返るアニメーションによって「上書き」されます。

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /*
    カスケードの後半で宣言されたアニメーションは、
    それ以前に宣言されたアニメーションのプロパティを上書きする
  */
  /* 跳ね返りは上昇の座標変換を「上書き」するため、太陽は水平方向にしか移動しない */
  animation:
    4s linear 0s infinite alternate rise,
    4s linear 0s infinite alternate bounce;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

{{EmbedLiveSample('Cascading Multiple Animations')}}

これ以外の例は [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
