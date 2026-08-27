---
title: "Animation: pause() メソッド"
short-title: pause()
slug: Web/API/Animation/pause
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{ APIRef("Web Animations") }}

**`pause()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の{{domxref("Animation")}} インターフェイスのメソッドで、アニメーションの再生を一時停止します。

## 構文

```js-nolint
pause()
```

### 引数

なし。

### 返値

なし。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : アニメーションの {{domxref("Animation.currentTime", "currentTime")}} が `unresolved` であり（おそらくまだ再生を始めていない）、アニメーションの終了時刻が正の値である場合に発生します。

## 例

`Animation.pause()` はウェブアニメーション API の国のアリスの[Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)で何度も使用しています。 {{domxref("Element.animate()")}} メソッドで作成したアニメーションはすぐに再生を始めるので、それを避けたい場合は手動で一時停止しなければならないのが主な理由です。

```js
// カップケーキが少しずつ食べられていく様子のアニメーション
const nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );

// 実際にはクリックイベントが発生するまで実行する必要はないため、最初は一時停止しておく
nommingCake.pause();
```

更に、リセット時に次のようにします。

```js
// カップケーキ、アリス、"drink me" と書かれたボトルのアニメーションを一時停止するための汎用関数
const stopPlayingAlice = () => {
  aliceChange.pause();
  nommingCake.pause();
  drinking.pause();
};

// ユーザーがカップケーキやボトルを離したら、アニメーションを一時停止
cake.addEventListener("mouseup", stopPlayingAlice);
bottle.addEventListener("mouseup", stopPlayingAlice);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxref("Animation.reverse()")}}: アニメーションを逆方向に再生します。
- {{domxref("Animation.finish()")}}: アニメーションを終了します。
- {{domxref("Animation.cancel()")}}: アニメーションをキャンセルします。
