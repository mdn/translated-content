---
title: "AnimationEffect: getTiming() メソッド"
short-title: getTiming()
slug: Web/API/AnimationEffect/getTiming
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

`AnimationEffect.getTiming()` は {{domxref("AnimationEffect")}} メソッドのインターフェイスで、アニメーション効果のタイミングプロパティを格納したオブジェクトを返します。

> **メモ:** `getTiming()` が返すタイミングプロパティのいくつかは、プレースホルダー値 `"auto"` を取ることがあります。タイミング計算で使用するために解決された値を取得するには、代わりに {{domxref("AnimationEffect.getComputedTiming()")}} を使用してください。
>
> 将来的には、より多くのタイミングプロパティの型に `"auto"` や同様の値が追加され、{{domxref("AnimationEffect")}}の新しい型では `"auto"` が異なる値に解決されるかもしれません。

## 構文

```js-nolint
getTiming()
```

### 引数

なし。

### 返値

以下のプロパティを格納するオブジェクトです。

- `delay`

  - : 効果が始まる前のディレイをミリ秒で表す `number` です。

    （{{cssxref("animation-delay")}} も参照してください。）

- `direction`

  - : `"normal"`, `"reverse"`, `"alternate"`, `"alternate-reverse"` のいずれかです。

    効果が順方向に実行されるか (`"normal"`)、逆方向に実行されるか (`"reverse"`)、反復処理ごとに方向が切り替わるか (`"alternate"`)、逆方向に実行され反復処理ごとに方向が切り替わるか (`"alternate-reverse"`) を示します。

    （{{cssxref("animation-direction")}} も参照してください。）

- `duration`

  - : ミリ秒単位の数値または `"auto"` の文字列です。

    アニメーションの 1 回の反復処理にかかる時間を示します。

    `"auto"` の意味は効果の種類によって異なります。{{domxref("KeyframeEffect")}} の場合、`"auto"` は `0` と同じです。

    （{{cssxref("animation-duration")}} も参照してください。）

- `easing`

  - : 時間の経過に伴う効果の変化率を表す {{cssxref("easing-function")}} を表す文字列です。

    （{{cssxref("animation-timing-function")}} も参照してください。）

- `endDelay`

  - : 数値で、効果の終わった後のディレイのミリ秒数です。

    これは主に、別のアニメーションの終了時刻に基づいてアニメーションをシーケンスする場合に使用します。

- `fill`

  - : `"none"`, `"forwards"`, `"backwards"`, "`both`", `"auto"` のいずれかです。

    効果を再生前に対象に反映させるか (`"backwards"`)、効果の完了後に反映させるか (`"forwards"`)、両方反映させるか (`"both"`)、どちらも反映させないか (`"none"`) を示します。

    `"auto"` の意味は効果の種類によって異なります。 {{domxref("KeyframeEffect")}} の場合、 `"auto"` は `"none"` と同じです。

    （{{cssxref("animation-fill-mode")}} も参照してください。）

- `iterations`

  - : 効果が繰り返される回数を数値で指定します。 {{jsxref("Infinity")}} の値は、効果が無限に繰り返されることを示します。

    （{{cssxref("animation-iteration-count")}} も参照してください。）

- `iterationStart`
  - : 効果が反復処理のどの点から始まるかを示す数値です。例えば、 `iterationStart` が 0.5 で `iterations` が 2 のエフェクトは、最初の反復処理の途中から始まり、 3 つ目の反復処理の途中で終わります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
