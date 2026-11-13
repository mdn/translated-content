---
title: "Element: animate() メソッド"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Web Animations")}}

{{domxref("Element")}} インターフェイスの **`animate()`** メソッドは、新しい {{domxref("Animation")}} を生成し、この要素へ適用し、そしてアニメーションの再生を行うショートカットメソッドです。生成した {{domxref("Animation")}} オブジェクトのインスタンスを返します。

> [!NOTE]
> 要素には複数のアニメーションを適用することができます。{{domxref("Element.getAnimations()")}} を呼び出すと、要素に作用するアニメーションのリストを取得することができます。

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
        - 文字列で、`normal`（アニメーションの適用範囲に変更がないことを意味します）、オフセットを表す CSS の {{cssxref("length-percentage")}}、`<timeline-range-name>`、`<timeline-range-name>` のいずれかと、それに続く `<length-percentage>` です。例えば、`"normal"`、`"entry"`、`"cover 100%"` などです。

          利用できる値の詳細については {{cssxref("animation-range")}} を参照してください。また、[View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) も確認してください。このツールでは、様々な値の意味を分かりやすく視覚的に確認できます。

        - 前の箇所で記述されている `<timeline-range-name>` と `<length-percentage>` を表す `rangeName`（文字列）と `offset` ({{domxref("CSSNumericValue")}}) プロパティを格納したオブジェクト。例えば、`{ rangeName: "entry", offset: CSS.percent("100") }` です。

        - オフセットを表す {{domxref("CSSNumericValue")}}。例えば、`CSS.percent("100")` です。

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

[Down the Rabbit Hole (with the Web Animation API)](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#javascript_への移行) のデモでは、上に向かって永遠に流れ続けるアニメーションが `#tunnel` 要素に施されています。ここでは、アニメーションを素早く作成して再生できる `animate()` メソッドが用いられています。キーフレームとして渡されているオブジェクト配列と、タイミングオプションとして渡されているオブジェクトに注目してください。

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

ブラウザーは現在の状態を使用して、アニメーションの開始状態や終了状態を推測できます。デフォルトでは、単一のキーフレームを指定すると、それは終了状態として扱われ、開始状態は要素の現在の計算済みスタイルから推測されます。ただし、`offset` を指定して、指定したキーフレームをアニメーションのタイムライン上のどこに配置するかを示すことができます。

```html hidden
<div>
  <img
    id="logo"
    src="/shared-assets/images/examples/firefox-logo.svg"
    alt="Firefox のロゴ" />
</div>
<button id="run">アニメーション - 現在の状態を開始状態として使用</button>
<button id="run2">アニメーション - 現在の状態を終了状態として使用</button>
<button id="run3">アニメーション - 現在の状態を両方の状態として使用</button>
```

```css hidden
div {
  width: 100%;
}

#logo {
  width: 200px;
  height: 200px;
}
```

```js
const logo = document.getElementById("logo");
document.getElementById("run").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)" }, 1000);
});
document.getElementById("run2").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)", offset: 0 }, 1000);
});
document.getElementById("run3").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)", offset: 0.5 }, 1000);
});
```

タイムライン内で単一のフレームを指定しました。完全なアニメーションを作成するために、開始状態や終了状態を補完できます。

{{EmbedLiveSample("Implicit to/from keyframes", "", 300)}}

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
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
