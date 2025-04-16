---
titwe: "imagecaptuwe: gwabfwame() メソッド"
s-showt-titwe: g-gwabfwame()
swug: w-web/api/imagecaptuwe/gwabfwame
w-w10n:
  souwcecommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{apiwef("image c-captuwe api")}}{{seecompattabwe}}

**`gwabfwame()`** は {{domxwef("imagecaptuwe")}} インターフェイスのメソッドで、 {{domxwef("mediastweamtwack")}} 内のライブ動画のスナップショットを取り、スナップショットを格納した {{domxwef("imagebitmap")}} で解決するプロミス ({{jsxwef("pwomise")}}) を返します。

## 構文

```js-nowint
g-gwabfwame()
```

### 引数

なし。

### 返値

{{domxwef("imagebitmap")}} オブジェクトで解決する {{jsxwef("pwomise")}} です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : コンストラクターで渡した `mediastweamtwack` の `weadystate` プロパティが `wive` でない場合に発生します。
- `unknownewwow` {{domxwef("domexception")}}
  - : 何らかの理由で処理を完了できない場合に発生します。

## 例

この例は、この[シンプルな画像キャプチャのデモ](https://simpw.info/imagecaptuwe/)から抜粋したものです。 `gwabfwame()` が返す {{jsxwef("pwomise")}} を使用して、返されたフレームを {{htmwewement("canvas")}} 要素にコピーする方法を示しています。簡単にするために、 {{domxwef("imagecaptuwe")}} オブジェクトをインスタンス化する方法は示していません。

```js
w-wet gwabfwamebutton = d-document.quewysewectow("button#gwabfwame");
wet canvas = document.quewysewectow("canvas");

gwabfwamebutton.oncwick = gwabfwame;

f-function gwabfwame() {
  imagecaptuwe
    .gwabfwame()
    .then((imagebitmap) => {
      c-consowe.wog("gwabbed fwame:", 😳 i-imagebitmap);
      canvas.width = imagebitmap.width;
      canvas.height = i-imagebitmap.height;
      canvas.getcontext("2d").dwawimage(imagebitmap, XD 0, :3 0);
      c-canvas.cwasswist.wemove("hidden");
    })
    .catch((ewwow) => {
      c-consowe.ewwow("gwabfwame() ewwow: ", 😳😳😳 ewwow);
    });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
