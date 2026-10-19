---
title: "`animation` プロパティ (CSS)"
short-title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 84058a6d6c891f39718617e98db2a6db1387096b
---

**`animation`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、スタイル間のアニメーションを適用します。これは {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} の一括指定です。

{{InteractiveExample("CSS デモ: animation")}}

```css interactive-example-choice
animation: 3s ease-in 1s infinite reverse both running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite alternate slide-in;
```

```css interactive-example-choice
animation: 0.5s linear 1s infinite alternate slide-in;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  margin: 20px;
  border: 5px solid #333333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

@keyframes slide-in {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
```

## 構成要素のプロパティ

このプロパティは以下のプロパティの一括指定です。

- {{cssxref("animation-name")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}

## 構文

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slide-in;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slide-in;

/* 2 つのアニメーション */
animation:
  3s linear slide-in,
  3s ease-out 5s slide-out;
```

### 値

このプロパティは、`<animation>` 値のカンマ区切りリストとして指定し、それぞれの値は以下の値の空白区切りリストとなります。

- `<keyframes-name>` または `none`
  - : 要素に適用するアニメーションを指定する {{cssxref("@keyframes")}} アットルールの名前です。{{cssxref("animation-name")}} の初期値は `none` です。
- `<animation-duration>`
  - : アニメーションが1サイクル分を完了するまでの時間を指定します。値は、{{cssxref("animation-duration")}} で利用できる値のいずれかでなければなりません。初期値は `0s` です。
- `<easing-function>`
  - : 推移の種類を決定します。値は {{cssxref("animation-timing-function")}} で利用できる値のいずれかでなければなりません。初期値は `ease` です。
- `<animation-delay>`
  - : 要素にアニメーションを適用してから、そのアニメーションの実行が始まるまでの待機時間を指定します。値は、{{cssxref("animation-delay")}} で利用できる値のいずれかでなければなりません。初期値は `0s` です。
- `<single-animation-direction>`
  - : アニメーションが実行される方向です。{{cssxref("animation-direction")}} で利用できる値のいずれかでなければなりません。{{cssxref("animation-direction")}} の初期値は `normal` です。
- `<single-animation-iteration-count>`
  - : アニメーションが実行される回数です。{{cssxref("animation-iteration-count")}} で利用できる値のいずれかでなければなりません。{{cssxref("animation-iteration-count")}} の初期値は `1` です。
- `<single-animation-fill-mode>`
  - : アニメーションの実行の前後にどのようにスタイルが適用されるかを定めます。 {{cssxref("animation-fill-mode")}} で利用できる値のいずれかでなければなりません。
- `<single-animation-play-state>`
  - : アニメーションが実行中かどうかを定めます。 {{cssxref("animation-play-state")}} で利用できる値のいずれかでなければなりません。{{cssxref("animation-play-state")}} の初期値は `running` です。
- `<single-animation-timeline>`
  - : アニメーションの進行を制御するために使用するタイムラインを指定します。この値は、{{cssxref("animation-timeline")}} で利用できる値のいずれかでなければなりません。初期値は `auto` です。

## 解説

`animation` プロパティは、カンマで区切られた 1 つ以上の単一のアニメーションとして指定されます。カンマ区切りのアニメーションリストに含まれるそれぞれの `animation` は、{{cssxref("animation-name")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-timing-function")}}、{{cssxref("animation-delay")}}、 {{cssxref("animation-iteration-count")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timeline")}} を設定します。いずれかの要素が `animation` 宣言に含まれていない場合、その要素の値は初期値に設定されます。

### animation-name

それぞれのアニメーションの `<animation-name>` 成分は、アニメーションの名前であり、`none`、{{cssxref("&lt;custom-ident&gt;")}}、{{cssxref("&lt;string&gt;")}} のいずれかになります。`animation-name` の初期値は `none` です。つまり、`animation` 一括指定プロパティで `animation-name` の値が宣言されていない場合、どのプロパティに対してもアニメーションは適用されません。

アニメーション定義内のその他の値の順序は、{{cssxref("animation-name")}} の値を他の値から区別する上で重要です。`animation` 一括指定内にある値が、`animation-name` 以外のアニメーションプロパティの値として解釈される場合、その値は `animation-name` ではなく、そのプロパティにまず適用されます。このため、`animation` 一括指定を使用する際は、`animation-name` の値を値リストの最後に指定することを推奨します。これは、`animation` 一括指定を使用してカンマ区切りで複数のアニメーションを指定する場合でも同様です。

### 時間値

アニメーションごとに、{{cssxref("&lt;time&gt;")}} の値を 0 回、1 回、または 2 回含めることができます。それぞれのアニメーション定義内での時間値の順序は重要です。{{cssxref("&lt;time&gt;")}} として構文解析可能な 1 つ目の値は {{cssxref("animation-duration")}} に、2 つ目となる値は {{cssxref("animation-delay")}} に代入されます。

`animation-duration` 値が `animation` 一括指定プロパティにおいて除外された場合、このプロパティの値は `0s` が既定値となります。この場合、アニメーションは発生しますが（[`animationStart`](/ja/docs/Web/API/Element/animationstart_event) と [`animationEnd`](/ja/docs/Web/API/Element/animationend_event) イベントは発行されますが）、アニメーションは表示されません。

### animation-timeline

`<animation-timeline>` が `animation` 一括指定に含まれていない場合、その一括指定の宣言によって、以前に宣言された `animation-timeline` の値はすべて `auto` にリセットされます。これにより、タイムラインはデフォルトの {{domxref("documentTimeline")}} に設定されます。

`<animation-timeline>` の値が含まれているものの、ユーザーエージェントが一括指定内の `<animation-timeline>` の値に対応していない場合、`animation` 宣言全体が無効とみなされ、無視されます。このため、[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成する場合、 `animation` 一括指定の後で `animation-timeline` プロパティを宣言しなければ効果を得ることはできません。

あるいは、`<animation-timeline>` を `animation` 一括指定内で設定するものを CSS の {{cssxref("@supports")}} ブロック内で宣言することも可能です。例えば、次のようにします。

```css
@supports (animation: view()) {
  /* `animation` 一括指定内の <animation-timeline> に対応しているブラウザー向けの CSS */
}
```

### animation-fill-mode と新しい重ね合わせコンテキスト

`animation-fill-mode` の値が [forwards](/ja/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) の場合、アニメーションするプロパティは、設定された {{cssxref("will-change")}} プロパティの値に記載されているかのように動作します。アニメーション中に新しい重ね合わせコンテキストが作成された場合、アニメーションの完了後も、対象要素は重ね合わせコンテキストを保持します。

## アクセシビリティ

点滅を伴うアニメーションは、注意欠陥障害 (ADHD) のような認知障害を持つ人々に問題を起こす可能性があります。加えて、特定の種類の動きが、前庭障害、てんかん、片頭痛、痙攣感受性などの引き金になることもあります。

アニメーションを停止したり無効にしたりする仕組みを、できれば[動きを縮小するメディアクエリー](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)を使用して、アニメーションを削減した操作の設定を表明したユーザーの希望を叶えるように作成することができます。

- [Designing Safer Web Animation For Motion Sensitivity](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) via A List Apart (2015)
- [An Introduction to the Reduced Motion Media Query](https://css-tricks.com/introduction-reduced-motion-media-query/) via CSS-Tricks (2017)
- [Responsive Design for Motion](https://webkit.org/blog/7551/responsive-design-for-motion/) via WebKit (2017)
- [MDN WCAG を理解する、ガイドライン 2.2 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.2_—_十分な時間_コンテンツを読んで使用するのに十分な時間をユーザーに提供する)
- [Understanding WCAG Success Criterion 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) via W3C (2026)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

> [!NOTE]
> [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model) プロパティのアニメーションは推奨されません。ボックスモデルのプロパティをアニメーションさせると、本質的に CPU に負荷がかかります。代わりに [transform](/ja/docs/Web/CSS/Reference/Properties/transform) プロパティのアニメーションを検討してください。

### 基本的な使い方: 日の出

この例では、`animation` 一括指定の使い方として、水色の空を横切る黄色い太陽のアニメーションを例に挙げます。太陽はビューポートの中央まで昇り、その後、画面から消えていきます。

#### HTML

太陽を表すために、単一の {{htmlelement("div")}} 要素を記載します。

```html
<div class="sun"></div>
```

#### CSS

まず、太陽と空を作成します。空は HTML 文書の {{cssxref(":root")}} です。 {{cssxref("overflow")}} を hidden に設定することで、ビューポートの外側にあるコンテンツ、この場合は太陽の地平線より下にある部分を非表示にします。同時に、{{cssxref("justify-content")}} プロパティを使用して、太陽を背景の中央に配置します。太陽の色を黄色にし、{{cssxref("height")}} をビューポートの高さ (`100vh`) に設定し、{{cssxref("aspect-ratio")}} を `1` に設定して幅を高さと等しくします。さらに、{{cssxref("border-radius")}} プロパティを使用して、正方形の `<div>` を円に変えます。

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
  aspect-ratio: 1;
  animation: 4s linear 0s infinite alternate sunrise;
}
```

次に、適用された要素をビューポートの下まで押し下げ、その後 [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)を使用して、その要素をデフォルトの位置に戻すアニメーション {{cssxref("@keyframes")}} を定義します。

```css
@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

最後のステップは、アニメーションを適用することです。`animation` 一括指定プロパティを使用して、`sunrise` キーフレームアニメーションを `.sun` の `<div>` に適用します。アニメーションは無限に繰り返し再生されるように設定されており、それぞれの再生時間は 4 秒です。また、アニメーションの方向は繰り返しごとに交互に変わります。

```css
.sun {
  animation: 4s linear 0s infinite alternate sunrise;
}
```

#### 結果

{{EmbedLiveSample('Basic usage: a sunrise')}}

### 複数のプロパティのアニメーション

この例では、単一の要素に複数のアニメーションを適用する方法を示します。水色の背景の上で太陽が昇ったり沈んだりする前回の例をさらに発展させ、ここでは太陽の色を徐々に変化させて虹色を巡回させていきます。太陽の位置と色の変化のタイミングは互いに独立しています。

```html hidden
<div class="sun"></div>
```

```css hidden
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
}

@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

前回の例と同じ HTML と CSS を記載し、2 つ目のアニメーション `@keyframes` として、[`hue-rotate()`](/ja/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) フィルター関数を使用して、色相をすべての可能な値にわたって巡回させる {{cssxref("filter")}} を適用するものを追加します。

```css
@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

次に、これらの2つのアニメーションを太陽に適用します。複数のアニメーションをカンマで区切り、それぞれのアニメーションの引数は別個に設定します。

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    24s linear 0s infinite psychedelic;
}
```

#### 結果

{{EmbedLiveSample('Applying multiple animations')}}

### 複数のアニメーションのカスケード

この例では、複数のアニメーションが同じプロパティの値を定義した場合に何が起こるかを示しています。この例は、[基本的な使い方](#基本的な使い方_日の出)の例をさらに発展させたもので、どちらも {{cssxref("transform")}} の値を設定する 2 つのアニメーションを適用しています。

```html hidden
<div class="sun"></div>
```

```css hidden
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
}
```

最初の例と同じ HTML と CSS を使用します。これには、元の `sunrise` アニメーションに加え、`bounce` という名前付きの 2 つ目のアニメーションも含まれます。これら 2 つのアニメーションは、同じプロパティの値を宣言しています。

```css
@keyframes sunrise {
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

両方のアニメーションを太陽に適用します。2つのアニメーションが同じプロパティに異なる値を適用する場合、カスケードにおいて後に宣言されたアニメーションが、以前に宣言されたアニメーションを上書きします。この場合、`transform` 値については `bounce` アニメーションの[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction#css_アニメーションとカスケード)において優先され、`sunrise` で設定された transform を上書きするため、太陽は水平方向のみに移動することになります。

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    4s linear 0s infinite alternate bounce;
}
```

#### 結果

{{EmbedLiveSample('Cascading Multiple Animations')}}

太陽がビューポートの左側と右側の間を行き来しています。`sunrise` アニメーションが定義されているにもかかわらず、太陽はビューポート内に留まったままです。`sunrise` アニメーションの transform プロパティは、この跳ね返りアニメーションによって上書きされています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- JavaScript の {{domxref("AnimationEvent")}} API
