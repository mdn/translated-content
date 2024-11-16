---
title: "Animation: updatePlaybackRate() メソッド"
short-title: updatePlaybackRate()
slug: Web/API/Animation/updatePlaybackRate
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

**`updatePlaybackRate()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の {{domxref("Animation")}} インターフェイスのメソッドで、最初に再生位置を同期させた後に、アニメーションの速度を設定します。

場合によっては、アニメーションが別個のスレッドやプロセスで実行され、長時間実行される JavaScript がメインスレッドを遅延させている間も更新を続けることがあります。このような場合、アニメーションに {{domxref("Animation.playbackRate", "playbackRate")}} を直接設定すると、メインスレッドでの再生位置が現在動作している再生位置からずれることがあるため、アニメーションの再生位置がジャンプすることが発生する可能性があります。

`updatePlaybackRate()` は非同期メソッドで、アニメーションの現在の再生位置と同期した後に速度を設定します。 `updatePlaybackRate()` を呼び出した後、アニメーションの {{domxref("Animation.playbackRate", "playbackRate")}} はすぐには更新されません。アニメーションの {{domxref("Animation.ready", "ready")}} プロミスが解決された時点で更新されます。

## 構文

```js-nolint
updatePlaybackRate(playbackRate)
```

### 引数

- `playbackRate`
  - : 設定する新しい速度。正の値（アニメーションを速くしたり遅くしたりする）、負の値（逆再生する）、またはゼロ（アニメーションを効果的に一時停止する）です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

スピードセレクターコンポーネントは、下記のように `updatePlaybackRate()` のスムーズな更新が良いでしょう。

```js
speedSelector.addEventListener("input", (evt) => {
  cartoon.updatePlaybackRate(parseFloat(evt.target.value));
  cartoon.ready.then(() => {
    console.log(`Playback rate set to ${cartoon.playbackRate}`);
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.playbackRate")}} — 現在の再生レートを読み出すか、同期的に設定します。
- {{domxref("Animation.reverse()")}} — 再生レートを反転させ、必要に応じて再生を再開します。
- {{domxref("Animation")}} — ウェブページのアニメーションを制御するために使用することができる他のメソッドやプロパティがあります。
