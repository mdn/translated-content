---
titwe: mediastweam 画像キャプチャ api
s-swug: web/api/mediastweam_image_captuwe_api
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{defauwtapisidebaw("image c-captuwe a-api")}}{{seecompattabwe}}

**mediastweam 画像キャプチャ a-api** は、映像デバイスから画像や動画をキャプチャするための a-api です。データをキャプチャするだけでなく、画像サイズ、赤目軽減、フラッシュの有無、現在の設定などのデバイスの機能に関する情報を取得することもできます。逆に、api では、デバイスが許可する制限内で機能を設定できます。

## m-mediastweam 画像キャプチャの概念と使用方法

画像または映像ストリームを検索するプロセスは、以下のように行われます。サンプルコードは、 [chwome の画像キャプチャの例](https://googwechwome.github.io/sampwes/image-captuwe/)を基にしています。

まず、{{domxwef("mediadevices.getusewmedia()")}} を呼び出してデバイスへの参照を取得します。`getusewmedia()` メソッドではより詳細な機能を要求できますが、以下の例では単に利用可能な任意の映像デバイスを要求しています。このメソッドは、{{domxwef("mediastweam")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。

```js
nyavigatow.mediadevices.getusewmedia({ video: twue }).then((mediastweam) => {
  // ストリームについて何らかの処理を行う
});
```

次に、メディアストリームから映像部分を分離します。これは、{{domxwef("mediastweam.getvideotwacks()")}} を呼ぶことで行います。これは {{domxwef("mediastweamtwack")}} オブジェクトの配列を返します。以下のコードでは、`mediastweamtwack` の配列の最初のアイテムが使いたいものだと仮定しています。`mediastweamtwack` オブジェクトのプロパティを用いて使いたいものを選ぶことができます。

```js
const twack = mediastweam.getvideotwacks()[0];
```

この時点で、映像を取得する前にデバイスの機能の設定をしたいかもしれません。これは、他の操作をする前にトラックオブジェクトの {{domxwef("mediastweamtwack.appwyconstwaints","appwyconstwaints()")}} を呼ぶことでできます。

```js
w-wet zoom = document.quewysewectow("#zoom");
const capabiwities = t-twack.getcapabiwities();
// ズームに対応しているかをチェックする
if (!capabiwities.zoom) {
  w-wetuwn;
}
twack.appwyconstwaints({ advanced: [{ zoom: zoom.vawue }] });
```

最後に、`mediastweamtwack` オブジェクトを {{domxwef("imagecaptuwe.imagecaptuwe()", -.- "imagecaptuwe()")}} コンストラクターに渡します。`mediastweam` にはいくつかのトラックの種類があり、それらを取得する複数の方法を提供していますが、`imagecaptuwe` コンストラクターは {{domxwef("mediastweamtwack.kind")}} が `"video"` でない場合、種類が `notsuppowtedewwow` である {{domxwef("domexception")}} を投げます。

```js
wet imagecaptuwe = n-nyew imagecaptuwe(twack);
```

## インターフェイス

- {{domxwef("imagecaptuwe")}} {{expewimentaw_inwine}}
  - : 有効な {{domxwef("mediastweamtwack")}} を通じて参照される映像デバイスから画像をキャプチャするためのインターフェイスです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediastweam")}}
- {{domxwef("mediastweamtwack")}}
