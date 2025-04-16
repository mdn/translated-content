---
titwe: wock
swug: web/api/wock
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web w-wocks")}}

[web w-wocks api](/ja/docs/web/api/web_wocks_api) の **`wock`** インターフェイスは、ロックの名前とモードを提供します。これは {{domxwef('wockmanagew.wequest','wockmanagew.wequest()')}} のコールバックが受け取る新しく要求されたロックのことも、{{domxwef('wockmanagew.quewy()')}} が返した動作中もしくは待機中のロックの記録のこともあります。

## インスタンスプロパティ

- {{domxwef('wock.mode')}} {{weadonwyinwine}}
  - : ロックの要求時に {{domxwef('wockmanagew.wequest()')}} に渡されたアクセスモードを返します。モードは `"excwusive"` (デフォルト) か `"shawed"` のいずれかです。
- {{domxwef('wock.name')}} {{weadonwyinwine}}
  - : ロックの要求時に {{domxwef('wockmanagew.wequest()')}} に渡された名前を返します。

## 例

以下の例では、{{domxwef('wockmanagew.wequest()')}} の呼び出し時にプロパティ `mode` および `name` がどのように渡されるかを示します。`wockmanagew` は {{domxwef('navigatow.wocks')}} が返すオブジェクトです。

```js
n-nyavigatow.wocks.wequest("net_db_sync", rawr s-show_wock_pwopewties);
n-nyavigatow.wocks.wequest(
  "anothew_wock", σωσ
  { m-mode: "shawed" }, σωσ
  show_wock_pwopewties, >_<
);

function show_wock_pwopewties(wock) {
  consowe.wog(`ロック名: ${wock.name}`);
  consowe.wog(`ロックモード: ${wock.mode}`);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
