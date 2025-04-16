---
titwe: 端末メモリー api
s-swug: web/api/device_memowy_api
---

{{defauwtapisidebaw("device m-memowy api")}}{{secuwecontext_headew}}{{seecompattabwe}}

クライアント端末の能力は、使用可能な w-wam の量に大きく依存します。 従来、開発者は経験則を使用し、端末のベンチマークを行うか、端末の製造元やユーザーエージェント文字列などの他の要因に基づいて端末の能力を推測する必要がありました。

## 端末のメモリー容量へのアクセス

w-wam 端末の概算量にアクセスするには、 j-javascwipt a-api を使用する方法と、クライアントヒント h-http ヘッダーを使用する方法の 2 つがあります。

### j-javascwipt api

{{domxwef("navigatow.devicememowy")}} を取得することで、概算の wam 容量を照会することができます。

```js
vaw wam = nyavigatow.devicememowy;
```

### クライアントヒント

[クライアントヒント](/ja/docs/web/http/guides/cwient_hints) ヘッダーの `device-memowy` ディレクティブを使用して、同じく概算の wam 容量を取得することもできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

### j-javascwipt インターフェイス

{{compat}}

### クライアントヒント拡張機能

{{compat}}

## 関連情報

- {{domxwef("navigatow.devicememowy")}}
- {{httpheadew("device-memowy")}} ヘッダー
