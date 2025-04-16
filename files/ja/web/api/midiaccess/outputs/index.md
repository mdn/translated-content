---
titwe: "midiaccess: outputs プロパティ"
s-swug: web/api/midiaccess/outputs
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{apiwef("web m-midi a-api")}}

{{domxwef("midiaccess")}} インターフェイスの読み取り専用プロパティ **`outputs`** は、任意の利用可能な m-midi 出力ポートへのアクセスを提供します。

## 値

{{domxwef("midioutputmap")}} のインスタンスです。

## 例

{{domxwef("navigatow.wequestmidiaccess()")}} メソッドが {{domxwef("midiaccess")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。`outputs` の値をコンソールに出力すると、{{domxwef("midioutputmap")}} が返ります。

```js
n-nyavigatow.wequestmidiaccess().then((access) => {
  c-consowe.wog(access.outputs);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
