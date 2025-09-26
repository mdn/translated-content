---
title: "Animation: playbackRate プロパティ"
short-title: playbackRate
slug: Web/API/Animation/playbackRate
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

**`Animation.playbackRate`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) で、アニメーションの再生レートを返すしたり設定したりします。

アニメーションには**再生時間**があり、アニメーションの {{domxref("DocumentTimeline", "timeline")}} 時刻の変化率からアニメーションの現在時刻への変倍率を指定します。再生レートは初期値で `1` です。

## 値

0、負、正の値を取ります。負の値ではアニメーションが反転します。この値は変倍率で、例えば 2 の値を指定すると再生速度が 2 倍になります。

> [!NOTE]
> アニメーションの `playbackRate` を `0` に設定すると、アニメーションは一時停止します（ただし、{{domxref("Animation.playstate", "playstate")}} は必ずしも `paused` にはなりません）。

## 例

[アリスの成長/縮小ゲーム](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) の例では、ボトルをクリックしたりタップしたりすると、アリスの成長アニメーション (`aliceChange`) が反転し、アリスが縮みます。

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

// タップまたはクリックすると、アリスは縮小する
bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

反対に、ケーキをクリックすると、彼女は「成長」し、 `aliceChange` を再び前方に再生します。

```js
const growAlice = () => {
  aliceChange.playbackRate = 1;
  aliceChange.play();
};

// タップまたはクリックすると、アリスが成長する
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

別の例として、[赤の女王のレースゲーム](https://codepen.io/rachelnabors/pen/PNGGaV?editors=0010)では、アリスと赤の女王は常に減速しています。

```js
setInterval(() => {
  // 再生レートが 0.4 を下回らないことを確認

  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

しかし、それらをクリックしたりタップしたりすると、 `playbackRate` が倍増してスピードアップします。

```js
const goFaster = () => {
  redQueen_alice.playbackRate *= 1.1;
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
