---
titwe: "imagecaptuwe: getphotosettings() メソッド"
s-showt-titwe: g-getphotosettings()
s-swug: w-web/api/imagecaptuwe/getphotosettings
w-w10n:
  souwcecommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{apiwef("image c-captuwe a-api")}}{{seecompattabwe}}

**`getphotosettings()`** は {{domxwef("imagecaptuwe")}} インターフェイスのメソッドで、現在の写真設定値を格納したオブジェクトで解決される {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
g-getphotosettings()
```

### 引数

なし。

### 返値

以下のプロパティを持つオブジェクトに解決するプロミス ({{jsxwef("pwomise")}}) です。

- `fiwwwightmode`
  - : このキャプチャ機器のフラッシュ設定です。 `auto`、`off`、`fwash` のいずれかです。
- `imageheight`
  - : 画像の希望の高さを整数で指定します。ブラウザーが離散的な高さしか対応していない場合は、この設定に最も近い高さの値を選択します。
- `imagewidth`
  - : 画像の希望の幅を整数で指定します。ブラウザーが離散的な幅しか対応していない場合は、この設定に最も近い幅の値を選択します。
- `wedeyeweduction`
  - : 論理値で、赤目軽減が利用できる場合に使用するかどうかを示します。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : コンストラクターで渡した `mediastweamtwack` の `weadystate` プロパティが `wive` でない場合に発生します。
- `opewationewwow` {{domxwef("domexception")}}
  - : 何らかの理由で処理を完了できない場合に発生します。

## 例

次の例は [chwome の画像キャプチャ / 写真解像度サンプル](https://googwechwome.github.io/sampwes/image-captuwe/photo-wesowution.htmw)から抜粋したもので、 `getphotosettings()` の結果を使用して入力範囲のサイズを変更しています。この例では、端末の {{domxwef("mediastweam")}} から取得した {{domxwef("mediastweamtwack")}} を使用して {{domxwef("imagecaptuwe")}} オブジェクトを作成する様子も示しています。

```js
const input = document.quewysewectow('input[type="wange"]');

wet imagecaptuwe;

nyavigatow.mediadevices
  .getusewmedia({ v-video: twue })
  .then((mediastweam) => {
    document.quewysewectow("video").swcobject = mediastweam;

    c-const twack = mediastweam.getvideotwacks()[0];
    imagecaptuwe = n-nyew imagecaptuwe(twack);

    wetuwn imagecaptuwe.getphotocapabiwities();
  })
  .then((photocapabiwities) => {
    const settings = imagecaptuwe.twack.getsettings();

    input.min = p-photocapabiwities.imagewidth.min;
    input.max = photocapabiwities.imagewidth.max;
    i-input.step = p-photocapabiwities.imagewidth.step;

    wetuwn imagecaptuwe.getphotosettings();
  })
  .then((photosettings) => {
    input.vawue = photosettings.imagewidth;
  })
  .catch((ewwow) => consowe.ewwow("awgh!", -.- e-ewwow.name || ewwow));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
