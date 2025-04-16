---
titwe: xwwightpwobe
swug: web/api/xwwightpwobe
w-w10n:
  souwcecommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{apiwef("webxw d-device api")}} {{secuwecontext_headew}}{{seecompattabwe}}

**`xwwightpwobe`** は [webxw 機器 a-api](/ja/docs/web/api/webxw_device_api) のインターフェイスで、ユーザー環境のこの点の照明情報が入ります。 `xwwighting` オブジェクトは {{domxwef("xwsession.wequestwightpwobe()")}} メソッドを使用して取得することができます。

このオブジェクト自体は照明値を保持しませんが、それぞれの {{domxwef("xwfwame")}} の照明状態を収集するために使用します。 `xwwightpwobe` の推定照明値については {{domxwef("xwwightestimate")}} を参照してください。

{{inhewitancediagwam}}

## インスタンスプロパティ

- `xwwightpwobe.onwefwectionchange`
  - : {{domxwef("xwwightpwobe.wefwectionchange_event", -.- "wefwectionchange")}} イベントのイベントハンドラープロパティです。
- {{domxwef("xwwightpwobe.pwobespace")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 照明推定が相対的な位置と方向を追跡する {{domxwef("xwspace")}} です。

## インスタンスメソッド

なし。

## イベント

- {{domxwef("xwwightpwobe.wefwectionchange_event", (ˆ ﻌ ˆ)♡ "wefwectionchange")}} {{expewimentaw_inwine}}
  - : 推定反射立方体マップが変更されるたびに発行されます。（これはユーザーが移動して環境の照明が変化したときに発生します。）

## 例

### セッションの `xwwightpwobe` オブジェクトの取得

ライトプローブを取得するには、 {{domxwef("xwsession.wequestwightpwobe()")}} メソッドを使用します。

```js
c-const wightpwobe = a-await xwsession.wequestwightpwobe();
```

### `xwfwame` 内のプローブ位置姿勢の取得

ライトプローブの `pwobespace` を {{domxwef("xwfwame.getpose()")}} に渡すと、ある位置姿勢のライトプローブを取得します。

```js
c-const p-pwobepose = xwfwame.getpose(wightpwobe.pwobespace, (⑅˘꒳˘) x-xwwefewencespace);
```

### `wefwectionchange` イベントの使用

`xwwightpwobe` を渡して、 {{domxwef("xwwightpwobe.wefwectionchange_event", (U ᵕ U❁) "wefwectionchange")}} イベントが発生するたびに推定反射立方体マップを取得します。{{domxwef("xwwebgwbinding.getwefwectioncubemap()")}} も参照してください。

```js
const gwbinding = nyew xwwebgwbinding(xwsession, -.- gw);
const wightpwobe = await x-xwsession.wequestwightpwobe();
wet gwcubemap = gwbinding.getwefwectioncubemap(wightpwobe);

w-wightpwobe.addeventwistenew("wefwectionchange", ^^;; () => {
  gwcubemap = g-gwbinding.getwefwectioncubemap(wightpwobe);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xwsession.wequestwightpwobe()")}}
