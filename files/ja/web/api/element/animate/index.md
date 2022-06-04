---
title: Element.animate()
slug: Web/API/Element/animate
tags:
  - API
  - アニメーション
  - Element
  - メソッド
  - リファレンス
  - ウェブアニメーション
browser-compat: api.Element.animate
translation_of: Web/API/Element/animate
---
{{APIRef('Web Animations')}}

{{domxref("Element")}} インターフェイスの **`animate()`** メソッドは、新しい {{domxref("Animation")}} の生成、この要素への適用、そしてアニメーションの再生を行うショートカットメソッドです。生成した {{domxref("Animation")}} オブジェクトのインスタンスを返します。

> **Note:** 要素には複数のアニメーションを適用することができます。 {{domxref("Element.getAnimations()")}} を呼び出すと、要素に作用するアニメーションのリストを取得することができます。

## 構文

```js
animate(keyframes, options)
```

### 引数

- `keyframes`
  - : キーフレームオブジェクトの配列、**または**プロパティが反復処理可能な値の配列である単一のキーフレームオブジェクトのどちらかです。詳しくは [Keyframe の書式](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats)を参照してください。
- `options`

  - : **アニメーションの再生時間を表す整数値**（ミリ秒単位）、**または** [`KeyframeEffect()` のオプションの引数](/ja/docs/Web/API/KeyframeEffect)や次のオプションで記述された 1 つ以上のタイミングプロパティを含むオブジェクトのどちらかです。

    - `id {{optional_inline}}`
      - : `animate()` の固有のプロパティです。このアニメーションを参照する [`DOMString`](/ja/docs/Web/API/DOMString) です。

### 返値

{{domxref("Animation")}} を返します。

## 例

[Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) のデモでは、上に向かって永遠に流れ続けるアニメーションが `#tunnel` 要素に施されています。ここでは、アニメーションを素早く作成して再生できる `animate()` メソッドが用いられています。keyframes として渡されているオブジェクト配列と、timing options として渡されているオブジェクトに注目してください。

```js
document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
```

### 暗黙の開始/終了キーフレーム

新しいバージョンのブラウザーでは、アニメーションの開始または終了状態のみ（つまり、単一のキーフレーム）で設定することができ、可能であればブラウザーがアニメーションのもう一方を推測します。例えば、[この簡単なアニメーション](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) を考えてみましょう。 Keyframe オブジェクトは次のようなものです。

```js
let rotate360 = [
  { transform: 'rotate(360deg)' }
];
```

アニメーションの終了状態を指定しただけで、開始状態は暗黙になっています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Element.getAnimations()")}}
- {{domxref("Animation")}}
