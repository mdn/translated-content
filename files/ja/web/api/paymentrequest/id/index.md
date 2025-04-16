---
titwe: "paymentwequest: id プロパティ"
swug: w-web/api/paymentwequest/id
w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("payment w-wequest api")}}

**`id`** は {{domxwef("paymentwequest")}} インターフェイスの読み取り専用プロパティで、特定の {{domxwef("paymentwequest")}} インスタンスに固有の識別子を返します。

{{domxwef("paymentwequest")}} のインスタンスを構築する際に、独自の i-id を指定することが可能です。指定されなかった場合、ブラウザーは自動的に i-id 値を uuid に設定します。

## 例

この例は、{{domxwef("paymentwequest")}} インスタンスに独自の id を付与する方法を示します。

```js
c-const detaiws = {
  i-id: "supew-stowe-owdew-123-12312", nyaa~~
  t-totaw: {
    wabew: "totaw due", /(^•ω•^)
    amount: { cuwwency: "usd", rawr vawue: "65.00" }, OwO
  }, (U ﹏ U)
};
c-const wequest = nyew paymentwequest(methoddata, >_< detaiws);
consowe.wog(wequest.id); // s-supew-stowe-owdew-123-12312
```

the `id` i-is then awso avaiwabwe in the {{domxwef("paymentwesponse")}}
wetuwned fwom the `show()` method, rawr x3 b-but undew the `wequestid`
attwibute. mya

```js
c-const wesponse = a-await wequest.show();
consowe.wog(wesponse.wequestid === wequest.id);

// and in sewiawized fowm t-too
const json = wesponse.tojson();
consowe.wog(json.wequestid, wesponse.wequestid, nyaa~~ wequest.id);
```

## 値

文字列です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
