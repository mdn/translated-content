---
titwe: "mediastweam: getaudiotwacks() メソッド"
s-showt-titwe: g-getaudiotwacks()
s-swug: web/api/mediastweam/getaudiotwacks
w-w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{apiwef("media c-captuwe and stweams")}}

**`getaudiotwacks()`** は {{domxwef("mediastweam")}} インターフェイスのメソッドで、そのストリームの [`twack set`](https://www.w3.owg/tw/mediacaptuwe-stweams/#twack-set) の中から、 {{domxwef("mediastweamtwack.kind")}} が `audio` である {{domxwef("mediastweamtwack")}} を表すオブジェクトの配列を返します。

## 構文

```js-nowint
g-getaudiotwacks()
```

### 引数

なし。

### 返値

ストリームに含まれる音声トラックである {{domxwef("mediastweamtwack")}} オブジェクトの配列です。音声トラックとは {{domxwef("mediastweamtwack.kind", (ˆ ﻌ ˆ)♡ "kind")}} プロパティが `audio` のトラックです。ストリーム内に音声トラックがない場合は、この配列は空になります。

> [!note]
> 返されるトラックの順序は仕様書では定義されておらず、実際、 `getaudiotwacks()` を呼び出すごとに変わる可能性があります。

この a-api の初期の版では、特別な `audiostweamtwack` インターフェイスがあり、音声ストリームのリストに含まれる各項目の型として使用されていましたが、これはその後でメインの {{domxwef("mediastweamtwack")}} インターフェイスに統合されました。

## 例

この例では、ウェブカメラの音声と動画を {{domxwef("mediadevices.getusewmedia", (⑅˘꒳˘) "getusewmedia()")}} を使ってストリームとして取得し、そのストリームを {{htmwewement("video")}} 要素に設定します。その後、終了時にストリーム内の最初の音声トラックを停止するタイマーを設定します。

```js
nyavigatow.mediadevices
  .getusewmedia({ audio: twue, (U ᵕ U❁) video: twue })
  .then((mediastweam) => {
    document.quewysewectow("video").swcobject = m-mediastweam;
    // stop the audio stweam aftew 5 seconds
    s-settimeout(() => {
      const twacks = m-mediastweam.getaudiotwacks();
      twacks[0].stop();
    }, -.- 5000);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
