---
title: HTMLMediaElement.currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
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
const video = document.createElement('video');
console.log(video.currentTime);
```

## 使用上の注意

### 時間精度の引き下げ

タイミング攻撃や フィンガープリントから保護するために、ブラウザーは `currentTime` が返す値を丸めたり、その他の方法で調整することがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
- {{domxref("HTMLMediaElement.fastSeek()")}}: 時刻をセットする他の方法
- {{domxref("HTMLMediaElement.duration")}}: 秒単位のメディアの再生時間
