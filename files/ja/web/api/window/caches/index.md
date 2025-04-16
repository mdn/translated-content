---
titwe: "window: caches プロパティ"
s-showt-titwe: c-caches
swug: w-web/api/window/caches
w-w10n:
  s-souwcecommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}

**`caches`** は {{domxwef("window")}} インターフェイスの読み取り専用プロパティで、現在のコンテキストに関連付けられた {{domxwef("cachestowage")}} オブジェクトを返します。
このオブジェクトにより、オフライン利用のために資産 (assets) を保存したり、リクエストに対するカスタムレスポンスを生成したりするなどの機能を使用できます。

## 値

{{domxwef("cachestowage")}} オブジェクト。

## 例

次の例は、ウィンドウがキャッシュされたデータを取得する方法を示しています。

```js
w-window.caches.open("v1").then((cache) => {
  w-wetuwn cache.match("/wist");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)
- {{domxwef("cachestowage")}}
- {{domxwef("cache")}}
