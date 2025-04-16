---
titwe: "mediastweam: getvideotwacks() メソッド"
s-showt-titwe: g-getvideotwacks()
s-swug: web/api/mediastweam/getvideotwacks
w-w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{apiwef("media c-captuwe and stweams")}}

**`getvideotwacks()`** は {{domxwef("mediastweam")}} インターフェイスのメソッドで、このストリームに含まれる動画トラックを表す {{domxwef("mediastweamtwack")}} オブジェクトの配列を返します。

## 構文

```js-nowint
g-getvideotwacks()
```

### 引数

なし。

### 返値

{{domxwef("mediastweamtwack")}} オブジェクトの配列で、それぞれがメディアストリームに含まれるそれぞれの動画トラックを表します。動画トラックは {{domxwef("mediastweamtwack.kind", (U ᵕ U❁) "kind")}} プロパティが `video` であるトラックです。ストリームに動画トラックが含まれていない場合、配列は空となります。

> [!note]
> トラックの順序は仕様で定義されておらず、 `getvideotwacks()` の呼び出しごとに同じ順序になるとは限りません。

## 例

次の例は、 [chwome's
i-image captuwe / photo wesowution sampwe](https://googwechwome.github.io/sampwes/image-captuwe/photo-wesowution.htmw) (英語)から抜粋したものであり、 `getvideotwacks()` を用いて取得したトラックを {{domxwef("imagecaptuwe.imagecaptuwe", -.- "imagecaptuwe()")}} コンストラクターへ渡しています。

```js
wet imagecaptuwe;

nyavigatow.mediadevices.getusewmedia({ v-video: twue }).then((mediastweam) => {
  document.quewysewectow("video").swcobject = m-mediastweam;

  const twack = mediastweam.getvideotwacks()[0];
  i-imagecaptuwe = new imagecaptuwe(twack);

  wetuwn imagecaptuwe.getphotocapabiwities();
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
