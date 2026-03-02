---
title: "KeyframeEffect: KeyframeEffect() コンストラクター"
short-title: KeyframeEffect()
slug: Web/API/KeyframeEffect/KeyframeEffect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Animations") }}

**`KeyframeEffect()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のコンストラクターで、新しい {{domxref("KeyframeEffect")}} オブジェクトインスタンスを返し、また既存のキーフレーム効果オブジェクトインスタンスを複製することもできます。

## 構文

```js-nolint
new KeyframeEffect(target, keyframes)
new KeyframeEffect(target, keyframes, options)
new KeyframeEffect(sourceKeyFrames)
```

### 引数

複数の引数を持つコンストラクター（上記参照）は、完全に新しい {{domxref("KeyframeEffect")}} オブジェクトインスタンスを生成します。その引数は以下の通りです。

- `target`
  - : アニメーションする DOM 要素、または `null` です。
- `keyframes`
  - : [キーフレームオブジェクト](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats) または `null` です。
- `options` {{optional_inline}}
  - : アニメーションの再生時間（ミリ秒）を表す整数、または次のいずれか一つ以上が含まれているオブジェクトです。
    - `delay` {{optional_inline}}
      - : アニメーションが始まるのを待つミリ秒単位の数値。デフォルトは 0 です。
    - `direction` {{optional_inline}}
      - : アニメーションが順方向に実行されるか (`normal`)、逆方向に実行されるか (`reverse`)、それぞれの反復処理後に方向が切り替わるか (`alternate`)、または逆方向に実行され、それぞれの反復処理後に方向が切り替わるか (`alternate-reverse`)。デフォルトは `"normal"` です。
    - `duration` {{optional_inline}}
      - : アニメーションのそれぞれの反復が完了するまでのミリ秒数。デフォルト値は 0 です。技術的にはオプションですが、この値が 0 である場合、アニメーションは実行されないことに注意してください。
    - `easing` {{optional_inline}}
      - : アニメーションの時間経過に伴う変化率。 `"linear"`, `"ease-in"`, `"step-end"`, `"cubic-bezier(0.42, 0, 0.58, 1)"` などの {{cssxref("easing-function")}} を受け入れます。デフォルトは `"linear"` です。
    - `endDelay` {{optional_inline}}
      - : アニメーション終了後（ミリ秒単位）の待ち時間を指定します。この値は、別のアニメーションの終了時間に基づいてアニメーションをシーケンスする場合に主に使用されます。デフォルト値は 0 です。
    - `fill` {{optional_inline}}
      - : アニメーションの効果を、再生前に要素にを反映するか (`"backwards"`)、再生完了後も保持するか (`"forwards"`)、あるいは両方 (`both`) であるかを指定します。デフォルトは `"none"` です。
    - `iterationStart` {{optional_inline}}
      - : 反復のどの時点でアニメーションを開始するかを記述します。例えば 0.5 はまず反復処理の中間から開始することを示し、この値を設定した場合、2 回の反復を持つアニメーションは 3 回目の反復の中間で終了します。デフォルトは 0.0 です。
    - `iterations` {{optional_inline}}
      - : アニメーションが繰り返される回数です。デフォルトは `1` で、要素が存在する限り繰り返し続ける場合は同時に {{jsxref("Infinity")}} を指定することも可能です。
    - `composite` {{optional_inline}}
      - : このアニメーションと、自分自身で合成演算を指定していない別個のアニメーションとの間で、値がどのように組み合わされるかを決定します。デフォルトは `replace` です。
        - `add` は加算効果を指定し、それぞれの反復処理が前の処理を基に積み重ねられます。例えば `transform` において、`translateX(-200px)` は先行する `rotate(20deg)` 値を上書きせず、`translateX(-200px) rotate(20deg)` という結果になります。
        - `accumulate` は似ていますが、少し賢いものです。`blur(2)` と `blur(5)` は `blur(7)` になり、`blur(2) blur(5)` にはなりません。
        - `replace` は、前の値を新しい値で上書きします。

    - `iterationComposite` {{optional_inline}}
      - : このアニメーションにおいて、反復処理ごとに値がどのように構築されるかを決定します。`accumulate` または `replace` に設定することができます（上記参照）。デフォルトは `replace` です。
    - `pseudoElement` {{optional_inline}}
      - : {{cssxref("pseudo-elements","擬似要素")}}セレクター、例えば `"::before"` などを含む文字列です。存在する場合、効果は `target` 自体ではなく、`target` の選択された擬似要素に適用されます。

単一引数のコンストラクター（上記参照）は、既存の {{domxref("KeyframeEffect")}} オブジェクトインスタンスの複製を生成します。引数は次の通りです。

- `sourceKeyFrames`
  - : 複製する {{domxref("KeyframeEffect")}} オブジェクトです。

## 例

次の例では、KeyframeEffect コンストラクターを使用して、絵文字が床の上を転がる方法を決定する一連のキーフレームを生成します。

```js
const emoji = document.querySelector("div"); // アニメーションする要素

const rollingKeyframes = new KeyframeEffect(
  emoji,
  [
    { transform: "translateX(0) rotate(0)" }, // キーフレーム
    { transform: "translateX(200px) rotate(1.3turn)" }, // キーフレーム
  ],
  {
    // キーフレームオプション
    duration: 2000,
    direction: "alternate",
    easing: "ease-in-out",
    iterations: "Infinity",
  },
);

const rollingAnimation = new Animation(rollingKeyframes, document.timeline);
rollingAnimation.play();
```

```html
<div>🤣</div>
```

```css hidden
body {
  box-shadow: 0 5px 5px pink;
}

div {
  width: fit-content;
  margin-left: calc(50% - 132px);
  font-size: 64px;
  user-select: none;
  margin-top: 1rem;
}
```

{{ EmbedLiveSample("Examples", "100%", "120") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [KeyframeEffect インターフェイス](/ja/docs/Web/API/KeyframeEffect)
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
