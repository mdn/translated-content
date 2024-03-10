---
title: "AnimationEffect: updateTiming() メソッド"
short-title: updateTiming()
slug: Web/API/AnimationEffect/updateTiming
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

`updateTiming()` は {{domxref("AnimationEffect")}} インターフェイスのメソッドで、アニメーション効果の指定した時刻プロパティを更新します。

## 構文

```js-nolint
updateTiming(timing)
```

### 引数

- `timing` {{optional_inline}}
  - : 更新するタイミングプロパティを表す、{{domxref("AnimationEffect.getTiming()")}} の返値に含まれるプロパティを 0 個以上格納したオブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : タイミングプロパティのいずれかに不正な値が指定された場合に発生します。

### 例

#### 副作用

`updateTiming()` は、関連する {{domxref("Animation")}} の再生を開始または停止させることがあります。例えば、実行するアニメーションの効果が短くなり、その終了時刻が {{domxref("Animation.currentTime")}} より前になる場合や、完成例のアニメーションの効果が長くなり、その終了時刻が {{domxref("Animation.currentTime")}} より後になる場合です。

```js
const animation = document.body.animate([], { duration: 1000 });
animation.finish();
console.log(animation.playState); // finished
animation.effect.updateTiming({ duration: 2000 });
console.log(animation.playState); // running
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
- {{domxref("AnimationEffect.getTiming()")}}
- {{domxref("AnimationEffect.getComputedTiming()")}}
