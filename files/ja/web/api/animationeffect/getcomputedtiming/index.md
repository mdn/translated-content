---
title: "AnimationEffect: getComputedTiming() メソッド"
short-title: getComputedTiming()
slug: Web/API/AnimationEffect/getComputedTiming
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

`getComputedTiming()` は {{domxref("AnimationEffect")}} インターフェイスのメソッドで、このアニメーション効果のタイミングのプロパティの計算値を返します。

> [!NOTE]
> これらの値は、 `window.getComputedStyle(elem)` を使用して返される要素のスタイルの計算値と同等です。

## 構文

```js-nolint
getComputedTiming()
```

### 引数

なし。

### 返値

以下のものを含むオブジェクトです。

- {{domxref("AnimationEffect.getTiming()")}} が返すオブジェクトのすべてのプロパティ。ただし、 `"auto"` 値は {{domxref("AnimationEffect")}} の種類に依存する計算値で置き換えられます。
- さらに以下のプロパティがあります。
  - `endTime`
    - : 効果の開始時点からの終了時刻をミリ秒単位で示す `number` です。これは `activeDuration` に `delay` と `endDelay` を足した値になります。
  - `activeDuration`
    - : 効果のすべての反復処理の合計時間をミリ秒単位で示す `number` です。これは `duration` に `iterations` を掛けたものです（その積が {{jsxref("NaN")}} となる場合はゼロ）。
  - `localTime`
    - : `number` または `null` です。

      その効果が実行される時間をミリ秒単位で示します。これは関連するアニメーションの {{domxref("Animation.currentTime","currentTime")}} と等しく、効果がアニメーションに関連付けられていない場合は `null` となります。

  - `progress`
    - : `null` または `number` で、 `0` 以上 `1` 未満です。

      効果の現在の反復処理の進行状況を示します。 `activeDuration` の開始時点では、`iterationStart` の小数部と等しくなります。

      例えば、効果が `delay` または `endDelay` の期間中であったり、効果が完了していたり、 `localTime` が `null` であるなど、反復処理の途中でない場合に `null` を返します。

  - `currentIteration`
    - : `null` または整数の `number` です。

      現在の反復処理のインデックスを示します。 `activeDuration` の開始時点では、 `iterationStart` の整数部と等しくなります。

      `progress` が `null` ならば常に `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
