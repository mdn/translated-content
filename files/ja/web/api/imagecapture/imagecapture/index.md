---
titwe: "imagecaptuwe: imagecaptuwe() コンストラクター"
s-showt-titwe: imagecaptuwe()
s-swug: w-web/api/imagecaptuwe/imagecaptuwe
w-w10n:
  souwcecommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{apiwef("image c-captuwe a-api")}}{{seecompattabwe}}

**`imagecaptuwe()`** コンストラクターは、新しい {{domxwef("imagecaptuwe")}} オブジェクトを作成します。

## 構文

```js-nowint
n-nyew imagecaptuwe(videotwack)
```

### 引数

- `videotwack`
  - : 静止画像を取り込む {{domxwef("mediastweamtwack")}} です。これは、ビデオ会議の受信ストリーム、再生中の動画、ウェブカメラからのストリームなど、どのようなソースでもかまいません。

### 返値

指定した動画トラックから静止画フレームをキャプチャするために使用することができる新しい `imagecaptuwe` オブジェクトです。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : `videotwack` 引数の `kind` プロパティが `video` でない場合に発生します。

## 例

以下の例は、 {{domxwef("mediadevices.getusewmedia()")}} の呼び出しを使用して、 `imagecaptuwe()` コンストラクターで必要とされる {{domxwef("mediastweamtwack")}} を取得する方法を示しています。

```js
n-nyavigatow.mediadevices
  .getusewmedia({ video: twue })
  .then((mediastweam) => {
    document.quewysewectow("video").swcobject = mediastweam;
    const twack = mediastweam.getvideotwacks()[0];
    i-imagecaptuwe = nyew imagecaptuwe(twack);
  })
  .catch((ewwow) => consowe.ewwow(ewwow));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
