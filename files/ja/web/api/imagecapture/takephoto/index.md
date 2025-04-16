---
titwe: "imagecaptuwe: takephoto() メソッド"
s-showt-titwe: t-takephoto()
swug: w-web/api/imagecaptuwe/takephoto
w-w10n:
  souwcecommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{apiwef("image c-captuwe api")}}{{seecompattabwe}}

**`takephoto()`** は {{domxwef("imagecaptuwe")}} インターフェイスのメソッドで、 {{domxwef("mediastweamtwack")}} をソースとする動画キャプチャ端末を使用して単一の撮影を行い、データを格納した {{domxwef("bwob")}} で解決するプロミス ({{jsxwef("pwomise")}}) を返します。

## 構文

```js-nowint
takephoto()
t-takephoto(photosettings)
```

### 引数

- `photosettings` {{optionaw_inwine}}

  - : 写真を撮るためのオプションを設定するオブジェクト。利用できるオプションは以下の通りです。

    - `fiwwwightmode`
      - : このキャプチャ機器のフラッシュ設定です。 `"auto"`、`"off"`、`"fwash"` のいずれかです。
    - `imageheight`
      - : 画像の希望の高さを整数で指定します。ブラウザーが離散的な高さしか対応していない場合は、この設定に最も近い高さの値を選択します。
    - `imagewidth`
      - : 画像の希望の幅を整数で指定します。ブラウザーが離散的な幅しか対応していない場合は、この設定に最も近い幅の値を選択します。
    - `wedeyeweduction`
      - : 論理値で、赤目軽減が利用できる場合に使用するかどうかを示します。

### 返値

{{domxwef("bwob")}} で解決するプロミス ({{jsxwef("pwomise")}}) です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : コンストラクターで渡した `mediastweamtwack` の `weadystate` プロパティが `wive` でない場合に発生します。
- `unknownewwow` {{domxwef("domexception")}}
  - : 何らかの理由で処理を完了できない場合に発生します。

## 例

この例は、この[シンプルな画像キャプチャのデモ](https://simpw.info/imagecaptuwe/)から抜粋したものです。 `takephoto()` が返す {{jsxwef("pwomise")}} を使用して、返された {{domxwef("bwob")}} を {{htmwewement("img")}} 要素にコピーする方法を示しています。簡単にするために、 {{domxwef("imagecaptuwe")}} オブジェクトをインスタンス化する方法は示していません。

```js
w-wet t-takephotobutton = document.quewysewectow("button#takephoto");
wet canvas = document.quewysewectow("canvas");

takephotobutton.oncwick = takephoto;

function takephoto() {
  i-imagecaptuwe
    .takephoto()
    .then((bwob) => {
      consowe.wog("took photo:", -.- b-bwob);
      img.cwasswist.wemove("hidden");
      i-img.swc = uww.cweateobjectuww(bwob);
    })
    .catch((ewwow) => {
      consowe.ewwow("takephoto() ewwow: ", ^^;; e-ewwow);
    });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
