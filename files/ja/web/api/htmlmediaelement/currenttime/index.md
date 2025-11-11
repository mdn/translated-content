---
title: "HTMLMediaElement: currentTime プロパティ"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} インターフェイスの **`currentTime`** プロパティは、現在の再生時間を秒単位で示します。

この値を変更すると、メディアは新しい時刻にシークされます。

## 値

現在の再生時刻を秒単位で示す倍精度浮動小数点値です。

メディアがまだ再生されていない場合、 `currentTime` の値は {{domxref("HTMLMediaElement.play", "play()")}} メソッドが呼ばれたときに再生が開始されるメディア内の時刻位置を示しています。

`currentTime`に新しい値を設定すると、メディアが利用可能であれば、指定された時刻にシークします。

ライブストリーミングされたメディアなど、再生時間が不明なメディアでは、ブラウザーがメディアバッファーから時間切れのメディア部分を取得できない可能性があります。また、タイムラインが 0 秒で始まらないメディアは、そのタイムラインの最も早い時刻より前にシークすることはできません。

秒単位のメディアの長さは、 {{domxref("HTMLMediaElement.duration", "duration")}}プロパティを用いて決定することができます。

## 例

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## 使用上の注意

### ## 時間精度の低下

タイミング攻撃や[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)から保護するために、`video.currentTime` の精度はブラウザー設定によっては丸められている可能性があります。Firefox では、`privacy.reduceTimerPrecision` 環境設定は既定で有効になっており、既定では 2ms になっています。`privacy.resistFingerprinting` を有効にすることもでき、その場合精度は 100ms または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` の値のどちらか大きい方になります。

例えば、時刻精度が低下した場合、`video.currentTime` の結果は常に 0.002 の倍数になり、`privacy.resistFingerprinting` が有効な場合は 0.1 の倍数（または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）になります。

```js
// Firefox 60 における 時間制度の低下 (2ms)
video.currentTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// `privacy.resistFingerprinting` が有効な場合の時間制度の低下
video.currentTime;
// Might be:
// 49.8
// 50.6
// 51.7
// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.currentTime` プロパティを定義しているインターフェイス
- {{domxref("HTMLMediaElement.fastSeek()")}}: 時刻をセットする他の方法
- {{domxref("HTMLMediaElement.duration")}}: 秒単位のメディアの再生時間
