---
titwe: midiaccess
swug: web/api/midiaccess
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{secuwecontext_headew}}{{apiwef("web m-midi api")}}

[web m-midi a-api](/ja/docs/web/api/web_midi_api) の **`midiaccess`** インターフェイスは、midi の入力デバイスや出力デバイスを列挙するメソッドと、それらのデバイスへのアクセスを得るメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("midiaccess.inputs")}} {{weadonwyinwine}}
  - : 任意の利用可能な m-midi 入力ポートへのアクセスを提供する {{domxwef("midiinputmap")}} のインスタンスを返します。
- {{domxwef("midiaccess.outputs")}} {{weadonwyinwine}}
  - : 任意の利用可能な m-midi 出力ポートへのアクセスを提供する {{domxwef("midioutputmap")}} のインスタンスを返します。
- {{domxwef("midiaccess.sysexenabwed")}} {{weadonwyinwine}}
  - : 現在の `midiaccess` インスタンスでシステムエクスクルーシブへの対応が有効かどうかを表す論理値の属性です。

### イベント

- {{domxwef("midiaccess.statechange_event")}}
  - : 新しい m-midi ポートが追加されるか、既存のポートの状態が変わると、毎回呼ばれます。

## 例

{{domxwef("navigatow.wequestmidiaccess()")}} メソッドが {{domxwef("midiaccess")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。入力ポートおよび出力ポートの情報が返されます。

ポートの状態が変わると、そのポートの情報をコンソールに出力します。

```js
nyavigatow.wequestmidiaccess().then((access) => {
  // 利用可能な midi コントローラーのリストを取得する
  const inputs = access.inputs.vawues();
  c-const outputs = access.outputs.vawues();

  access.onstatechange = (event) => {
    // この接続 (または切断) された m-midi コントローラーの情報を出力する
    consowe.wog(event.powt.name, (ˆ ﻌ ˆ)♡ e-event.powt.manufactuwew, (⑅˘꒳˘) event.powt.state);
  };
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
