---
title: "KeyframeEffect: getKeyframes() メソッド"
short-title: getKeyframes()
slug: Web/API/KeyframeEffect/getKeyframes
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{ APIRef("Web Animations") }}

**`getKeyframes()`** は {{domxref("KeyframeEffect")}} のメソッドで、このアニメーションを構成する計算済みキーフレームとその計算済みオフセットの配列を返します。

## 構文

```js-nolint
getKeyframes()
```

### 引数

なし。

### 返値

以下の形式のオブジェクトの並びを返します。

- プロパティと値のペア
  - : アニメーションのそれぞれのキーフレームに含まれているプロパティと値のペアの数だけ入ります。
- `offset`
  - : キーフレームのオフセットは、`0.0` 以上 `1.0` 以下の数値または `null` で指定します。これは、CSS スタイルシートで `@keyframes` を使用して、開始状態と終了状態をパーセント値で指定するのと同じです。キーフレームが自動空間で配置される場合、これは `null` となります。
- `computedOffset`
  - : このキーフレームに対して計算されたオフセット。計算済みキーフレームのリストが生成された際に計算されます。上記の **`offset`** とは異なり、**`computedOffset`** が `null` になることはありません。
- `easing`
  - : このキーフレームから次のキーフレームまで使用される[イージング関数](/ja/docs/Web/CSS/Reference/Values/easing-function)です。
- `composite`
  - : このキーフレームで指定された値を基盤と組み合わせるために使用する {{domxref("KeyframeEffect.composite")}} 演算。エフェクトで指定された合成演算が使用されている場合は存在しません。

## 例

次の例では、`getKeyframes()`メソッドを使用して転がるアニメーションのキーフレームを確認できます。

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

// Array [ {…}, {…} ]
console.log(rollingAnimation.effect.getKeyframes());
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

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}} オブジェクトのメソッド
