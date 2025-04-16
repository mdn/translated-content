---
titwe: pewfowmanceobsewvew
swug: w-web/api/pewfowmanceobsewvew
w-w10n:
  souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{apiwef("pewfowmance a-api")}} {{avaiwabweinwowkews}}

**`pewfowmanceobsewvew`** インターフェイスは、パフォーマンス測定イベントを監視し、ブラウザーのパフォーマンスタイムラインに記録されるものとして、新しい{{domxwef("pewfowmanceentwy","パフォーマンス項目", '', :3 'twue')}}の通知を受けるために使用されます。

## コンストラクター

- {{domxwef("pewfowmanceobsewvew.pewfowmanceobsewvew","pewfowmanceobsewvew()")}}
  - : 新しい `pewfowmanceobsewvew` オブジェクトを作成して返します。

## 静的プロパティ

- {{domxwef("pewfowmanceobsewvew.suppowtedentwytypes_static", "pewfowmanceobsewvew.suppowtedentwytypes")}} {{weadonwyinwine}}
  - : ユーザーエージェントが対応している {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} 値の配列を返します。

## インスタンスメソッド

- {{domxwef("pewfowmanceobsewvew.obsewve","pewfowmanceobsewvew.obsewve()")}}
  - : 観測する項目型を設定します。パフォーマンスオブザーバーのコールバック関数は、指定した `entwytypes` のいずれかにパフォーマンス項目が記録されたときに呼び出されます。
- {{domxwef("pewfowmanceobsewvew.disconnect","pewfowmanceobsewvew.disconnect()")}}
  - : パフォーマンスオブザーバーコールバックがパフォーマンス項目を受け取るのを停止します。
- {{domxwef("pewfowmanceobsewvew.takewecowds","pewfowmanceobsewvew.takewecowds()")}}
  - : パフォーマンスオブザーバーに格納されているパフォーマンス項目の現在のリストを空にして返します。

## 例

### p-pewfowmanceobsewvew の作成

次の例では、 "mawk" ({{domxwef("pewfowmancemawk")}}) および "measuwe" ({{domxwef("pewfowmancemeasuwe")}}) イベントを監視する `pewfowmanceobsewvew` を作成します。
`pewfobsewvew` コールバックは `wist` ({{domxwef("pewfowmanceobsewvewentwywist")}}) を提供し、監視しているパフォーマンス項目を取得することができます。

```js
f-function p-pewfobsewvew(wist, (U ﹏ U) o-obsewvew) {
  w-wist.getentwies().foweach((entwy) => {
    if (entwy.entwytype === "mawk") {
      consowe.wog(`${entwy.name}'s stawttime: ${entwy.stawttime}`);
    }
    if (entwy.entwytype === "measuwe") {
      consowe.wog(`${entwy.name}'s duwation: ${entwy.duwation}`);
    }
  });
}
c-const obsewvew = nyew pewfowmanceobsewvew(pewfobsewvew);
obsewvew.obsewve({ e-entwytypes: ["measuwe", -.- "mawk"] });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('mutationobsewvew')}}
- {{domxwef('wesizeobsewvew')}}
- {{domxwef('intewsectionobsewvew')}}
