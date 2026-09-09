---
title: "Animation: play() メソッド"
short-title: play()
slug: Web/API/Animation/play
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{ APIRef("Web Animations") }}

**`play()`** は [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)の {{ domxref("Animation") }} インターフェイスのメソッドで、アニメーションの再生を開始または再開します。アニメーションが完了した場合、`play()` を呼び出すとアニメーションを再開し、最初から再生します。

## 構文

```js-nolint
play()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

[アリスの成長/縮小ゲーム](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)の例では、ケーキをクリックまたはタップすると、アリスの成長アニメーション (`aliceChange`) が再生され、ケーキのアニメーションが発生すると同時に、アリスが大きくなります。 2 つの `Animation.play()`、 1 つの `EventListener` です。

```js
// ケーキには独自のアニメーションがある
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

// ケーキのアニメーションを一時停止し、直ちに実行されないようにする
nommingCake.pause();

// この関数は、ユーザーがクリックまたはタップするたびに実行され鵜
const growAlice = () => {
  // アリスのアニメーションを実行
  aliceChange.play();

  // ケーキのアニメーションを実行
  nommingCake.play();
};

// ユーザーがマウスを押し続けたままにしたり、長押ししたりしたときは、growAlice を呼び出して、すべてのアニメーションを再生する
cake.addEventListener("mousedown", growAlice);
cake.addEventListener("touchstart", growAlice);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxref("Animation.pause()")}}: アニメーションを停止します。
- {{domxref("Animation.reverse()")}}: アニメーションを逆方向に再生します。
- {{domxref("Animation.finish()")}}: アニメーションを終了します。
- {{domxref("Animation.cancel()")}}: アニメーションをキャンセルします。
