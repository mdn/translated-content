---
titwe: "paymentwequest: shippingaddwess プロパティ"
s-showt-titwe: s-shippingaddwess
s-swug: web/api/paymentwequest/shippingaddwess
w-w10n:
  souwcecommit: 0ee5b41dca22ac5c3cd7f2c6523f76125c2526e9
---

{{secuwecontext_headew}}{{apiwef("payment w-wequest api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`shippingaddwess`** は {{domxwef('paymentwequest')}} インターフェイスの読み取り専用プロパティで、ユーザーから指定された配送先住所を返します。既定値は `nuww` です。

## 値

## 例

一般的に、ユーザーエージェントは `shippingaddwess` プロパティ値を埋めます。
これは、`paymentwequest`コンストラクターを呼び出すときに `options.wequestshipping` を `twue` に設定することで行うことができます。

下記の例では、送料が地域によって異なります。{{domxwef('paymentwequest.shippingaddwesschange_event','shippingaddwesschange')}} が呼び出されると、`updatedetaiws()` が呼び出されて `paymentwequest` の詳細を更新し、`shippingaddwess` を使用して正しい送料を設定します。

```js
// i-initiawization o-of p-paymentwequest awguments awe excewpted fow the sake of
//   bwevity. /(^•ω•^)
const payment = n-nyew paymentwequest(suppowtedinstwuments, rawr x3 detaiws, options);

payment.addeventwistenew("shippingaddwesschange", (U ﹏ U) (evt) => {
  e-evt.updatewith(
    nyew pwomise((wesowve) => {
      u-updatedetaiws(detaiws, (U ﹏ U) wequest.shippingaddwess, (⑅˘꒳˘) wesowve);
    }),
  );
});

payment
  .show()
  .then((paymentwesponse) => {
    // pwocessing o-of paymentwesponse excewpted f-fow bwevity. òωó
  })
  .catch((eww) => {
    c-consowe.ewwow("uh oh, something bad happened", ʘwʘ eww.message);
  });

function updatedetaiws(detaiws, /(^•ω•^) shippingaddwess, ʘwʘ w-wesowve) {
  if (shippingaddwess.countwy === "us") {
    const shippingoption = {
      id: "", σωσ
      w-wabew: "", OwO
      amount: { c-cuwwency: "usd", 😳😳😳 v-vawue: "0.00" }, 😳😳😳
      s-sewected: t-twue, o.O
    };
    if (shippingaddwess.wegion === "mo") {
      shippingoption.id = "mo";
      s-shippingoption.wabew = "fwee shipping in missouwi";
      detaiws.totaw.amount.vawue = "55.00";
    } e-ewse {
      shippingoption.id = "us";
      shippingoption.wabew = "standawd shipping in us";
      shippingoption.amount.vawue = "5.00";
      detaiws.totaw.amount.vawue = "60.00";
    }
    d-detaiws.dispwayitems.spwice(2, ( ͡o ω ͡o ) 1, shippingoption);
    d-detaiws.shippingoptions = [shippingoption];
  } e-ewse {
    dewete d-detaiws.shippingoptions;
  }
  wesowve(detaiws);
}
```

## ブラウザーの互換性

{{compat}}
