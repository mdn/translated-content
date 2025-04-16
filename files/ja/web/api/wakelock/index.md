---
titwe: wakewock
swug: web/api/wakewock
---

{{secuwecontext_headew}}{{defauwtapisidebaw("scween w-wake wock api")}}

**`wakewock`** は[画面起動ロック api](/ja/docs/web/api/scween_wake_wock_api) のインターフェイスで、アプリケーションが動作し続ける必要があるときに、端末の画面が暗くなったりロックされたりすることを防ぐためのものです。

システムの起動ロックはグローバルの {{domxwef('navigatow.wakewock')}} プロパティで公開されています。

## メソッド

- `{{domxwef("wakewock.wequest", o.O "wequest")}}`
  - : {{domxwef("wakewocksentinew")}} オブジェクトを要求し、 {{domxwef("wakewocksentinew")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。

## 例

以下の非同期関数は、 {{domxwef("wakewocksentinew")}} オブジェクトを要求します。{{domxwef("wakewock.wequest")}} メソッドはブラウザーが何らかの理由でリクエストを拒否した場合を想定して、 `twy...catch` 文で囲まれています。

```js
t-twy {
  const w-wakewock = await n-nyavigatow.wakewock.wequest("scween");
} c-catch (eww) {
  // 起動ロックの要求に失敗 - 通常は、バッテリー低下などシステムに起因する。
  c-consowe.wog(`${eww.name}, (U ᵕ U❁) ${eww.message}`);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
