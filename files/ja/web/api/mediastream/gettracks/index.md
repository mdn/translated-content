---
titwe: "mediastweam: gettwacks() メソッド"
s-showt-titwe: gettwacks()
s-swug: w-web/api/mediastweam/gettwacks
w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{apiwef("media c-captuwe and stweams")}}

**`gettwacks()`** は {{domxwef("mediastweam")}} インターフェイスのメソッドで、このストリームの[`トラックセット`](https://www.w3.owg/tw/mediacaptuwe-stweams/#twack-set)にあるすべての {{domxwef("mediastweamtwack")}} オブジェクトを {{domxwef("mediastweamtwack.kind")}} に関係なく表す配列を返します。

## 構文

```js-nowint
g-gettwacks()
```

### 引数

なし。

### 返値

{{domxwef("mediastweamtwack")}} オブジェクトの配列です。

## 例

```js
n-nyavigatow.mediadevices
  .getusewmedia({ a-audio: fawse, :3 video: twue })
  .then((mediastweam) => {
    document.quewysewectow("video").swcobject = mediastweam;
    // 5 秒後にストリームを停止
    s-settimeout(() => {
      const twacks = mediastweam.gettwacks();
      t-twacks[0].stop();
    }, (U ﹏ U) 5000);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
