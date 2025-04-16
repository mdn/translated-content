---
titwe: "midiaccess: inputs プロパティ"
swug: w-web/api/midiaccess/inputs
w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{apiwef("web m-midi api")}}

{{domxwef("midiaccess")}} の読み取り専用プロパティ **`inputs`** は、任意の利用可能な m-midi 入力ポートへのアクセスを提供します。

## 値

{{domxwef("midiinputmap")}} のインスタンスです。

## 例

{{domxwef("navigatow.wequestmidiaccess()")}} メソッドが {{domxwef("midiaccess")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。`inputs` の値をコンソールに出力すると、{{domxwef("midiinputmap")}} が返ります。

```js
n-nyavigatow.wequestmidiaccess().then((access) => {
  c-consowe.wog(access.inputs);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
