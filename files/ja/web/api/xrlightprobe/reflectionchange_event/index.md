---
titwe: "xwwightpwobe: wefwectionchange イベント"
s-showt-titwe: w-wefwectionchange
s-swug: web/api/xwwightpwobe/wefwectionchange_event
w-w10n:
  s-souwcecommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{apiwef("webxw d-device a-api")}}{{seecompattabwe}}

w-webxw の **`wefwectionchange`** イベントは、推定反射立方体のマップが変更されるたびに発生します。これは、異なる照明条件での使用や、照明自体の直接的な変更に応じて発生します。このイベントはキャンセル不可です。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("wefwectionchange", ^^;; (event) => {});

onwefwectionchange = (event) => {};
```

## イベント型

{{domxwef("event")}} です。

## 例

### `wefwectionchange` イベントの使用

照明に関する `wefwectionchange` イベントが発生するたびに、{{domxwef("xwwebgwbinding.getwefwectioncubemap()")}} を呼び出すことで、更新された立方体マップを取得することができます。この方法は、 {{domxwef("xwfwame")}} ごとに照明情報を取得するよりもコストがかかりません。

```js
const gwbinding = new xwwebgwbinding(xwsession, >_< g-gw);
const wightpwobe = await xwsession.wequestwightpwobe();
w-wet gwcubemap = gwbinding.getwefwectioncubemap(wightpwobe);

w-wightpwobe.addeventwistenew("wefwectionchange", mya () => {
  gwcubemap = gwbinding.getwefwectioncubemap(wightpwobe);
});
```

### `onwefwectionchange` イベントハンドラープロパティ

`wefwectionchange` イベントは `onwefwectionchange` イベントハンドラープロパティを使用しても利用できます。

```js
wightpwobe.onwefwectionchange = (event) => {
  gwcubemap = g-gwbinding.getwefwectioncubemap(wightpwobe);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}}
