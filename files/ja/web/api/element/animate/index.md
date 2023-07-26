---
title: "Element: animate() メソッド"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef('Web Animations')}}

{{domxref("Element")}} インターフェイスの **`animate()`** メソッドは、新しい {{domxref("Animation")}} を生成し、この要素へ適用し、そしてアニメーションの再生を行うショートカットメソッドです。生成した {{domxref("Animation")}} オブジェクトのインスタンスを返します。

> **メモ:** 要素には複数のアニメーションを適用することができます。{{domxref("Element.getAnimations()")}} を呼び出すと、要素に作用するアニメーションのリストを取得することができます。

## 構文

```js-nolint
animate(keyframes, options)
```

### 引数

- `keyframes`
  - : キーフレームオブジェクトの配列、**または**プロパティが反復処理可能な値の配列である単一のキーフレームオブジェクトのどちらかです。詳しくは [Keyframe の書式](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats)を参照してください。
- `options`

  - : **アニメーションの再生時間を表す整数値**（ミリ秒単位）、**または** [`KeyframeEffect()` のオプションの引数](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#引数)や以下のオプションで記述された 1 つ以上のタイミングプロパティを含むオブジェクトのどちらかです。

    - `id` {{optional_inline}}
      - : `animate()` の固有のプロパティです。このアニメーションを参照する文字列です。
    - `rangeEnd` {{optional_inline}}

      - : タイムラインに沿ったアニメーションの適用範囲の終わり、つまりタイムラインのどこでアニメーションが終わるかを指定します。CSS の {{cssxref("animation-range-end")}} プロパティに相当します。`rangeEnd` は以下のように、様々な値を取ることができます。

        - 文字列で、`normal`（アニメーションの範囲に変更がないことを意味します）、オフセットを表す CSS の {{cssxref("length-percentage")}}、`<timeline-range-name>`、`<timeline-range-name>` のいずれかと、それに続く `<length-percentage>` です。例えば次のようになります。

          ```
          "normal"
          "entry"
          "cover 100%"
          ```

          利用できる値の詳細については [`animation-range`](/ja/docs/Web/CSS/animation-range) を参照してください。また、[View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) も調べてみてください。様々な値が意味していることを、視覚的な形式で簡単に示すことができます。

        - 前の箇所で記述されている `<timeline-range-name>` と `<length-percentage>` を表す `rangeName`（文字列）と `offset` ({{domxref("CSSNumericValue")}}) プロパティを格納したオブジェクト。例えば、次のようなものです。

          ```js
          {
            rangeName: 'entry',
            offset: CSS.percent('100'),
          }
          ```

        - {{domxref("CSSNumericValue")}} で、オフセットを表すもの。例えば、次のようなものです。

          ```js
          CSS.percent("100");
          ```

    - `rangeStart` {{optional_inline}}
      - : タイムラインに沿ったアニメーションの適用範囲、つまりタイムラインのどこからアニメーションが始まるかを指定します。CSS の {{cssxref("animation-range-start")}} プロパティに相当します。`rangeStart` は `rangeEnd` と同じ種類の値を取ります。
    - `timeline` {{optional_inline}}
      - : `animate()` に固有のプロパティです。アニメーションに関連付ける{{domxref("AnimationTimeline")}} です。既定値は {{domxref("Document.timeline")}} です。CSS の {{cssxref("animation-timeline")}} プロパティに相当します。

### 返値

{{domxref("Animation")}} を返します。

## 例

### 回転と拡大縮小

この例では、`animate()` メソッドを使用して要素の回転と拡大縮小を行っています。

#### HTML

```html
<div class="newspaper">Spinning newspaper<br />causes dizziness</div>
```

#### CSS

```css
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.newspaper {
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  background-color: white;
  cursor: pointer;
}
```

#### JavaScript

```js
const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});
```

#### 結果

{{EmbedLiveSample("Rotating and scaling")}}

### ウサギの穴を下るデモ

[Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) のデモでは、上に向かって永遠に流れ続けるアニメーションが `#tunnel` 要素に施されています。ここでは、アニメーションを素早く作成して再生できる `animate()` メソッドが用いられています。キーフレームとして渡されているオブジェクト配列と、タイミングオプションとして渡されているオブジェクトに注目してください。

```js
document.getElementById("tunnel").animate(
  [
    // キーフレーム
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // タイミングオプション
    duration: 1000,
    iterations: Infinity,
  },
);
```

### 暗黙の開始/終了キーフレーム

新しいバージョンのブラウザーでは、アニメーションの開始または終了状態のみ（つまり、単一のキーフレーム）で設定することができ、可能であればブラウザーがアニメーションのもう一方を推測します。例えば、[この簡単なアニメーション](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) を考えてみましょう。 Keyframe オブジェクトは次のようなものです。

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

アニメーションの終了状態を指定しただけで、開始状態は暗黙になっています。

### timeline, rangeStart, rangeEnd

`timeline`, `rangeStart`, `rangeEnd` の各プロパティの典型的な使用例は次の通りです。

```js
const img = document.querySelector("img");

const timeline = new ViewTimeline({
  subject: img,
  axis: "block",
});

img.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    duration: 1,
    timeline,
    rangeStart: "cover 0%",
    rangeEnd: "cover 100%",
  },
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Animation")}}
- {{domxref("Element.getAnimations()")}}
- {{cssxref("animation-range-end")}}, {{cssxref("animation-range-start")}}, {{cssxref("animation-timeline")}}
- [CSS スクロール駆動型アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
