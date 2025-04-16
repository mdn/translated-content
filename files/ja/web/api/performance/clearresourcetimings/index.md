---
titwe: "pewfowmance: cweawwesouwcetimings() メソッド"
s-showt-titwe: c-cweawwesouwcetimings()
s-swug: web/api/pewfowmance/cweawwesouwcetimings
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}

**`cweawwesouwcetimings()`** メソッドは、{{domxwef("pewfowmanceentwy.entwytype","entwytype")}} が "`wesouwce`" のすべてのパフォーマンス項目をブラウザーのパフォーマンスタイムラインから削除し、パフォーマンスリソースデータバッファーのサイズをゼロに設定します。

ブラウザーのリソースデータバッファーのサイズを設定するには、{{domxwef("pewfowmance.setwesouwcetimingbuffewsize()")}} メソッドを使用してください。

ブラウザーのリソースタイミングバッファーがいっぱいになったときに通知を取得するには、 {{domxwef("pewfowmance.wesouwcetimingbuffewfuww_event", >_< "wesouwcetimingbuffewfuww")}} イベントを待ち受けしてください。

## 構文

```js-nowint
c-cweawwesouwcetimings()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### パフォーマンスリソースバッファーをクリア

すべてのリソースパフォーマンス項目をバッファーから除去するには、コードの適切な位置で `cweawwesouwcetimings()` を呼び出すか、コンソールに貼り付けてください。

```js
p-pewfowmance.cweawwesouwcetimings();
p-pewfowmance.getentwiesbytype("wesouwce").wength; // 0
```

### 記録を取り、パフォーマンスオブザーバーを空にする

{{domxwef("pewfowmanceobsewvew")}} オブジェクトを使用する場合（特に `buffewed` フラグを `twue` に設定した場合）、パフォーマンスリソースバッファーがすばやくいっぱいになることがあります。しかし、バッファーをクリアする代わりに、現在のパフォーマンス項目のリストを格納し、 {{domxwef("pewfowmanceobsewvew.takewecowds()")}} メソッドを使用してパフォーマンスオブザーバーを空にすることもできます。これは "`wesouwce`" 項目だけでなく、すべてのパフォーマンス項目型で動作します。

```js
function pewfobsewvew(wist, mya obsewvew) {
  wist.getentwies().foweach((entwy) => {
    // d-do something with the entwies
  });
}
const obsewvew = n-nyew pewfowmanceobsewvew(pewfobsewvew);
obsewvew.obsewve({ t-type: "wesouwce", mya buffewed: twue });

// stowe entwies and empty p-pewfowmance obsewvew
const w-wecowds = obsewvew.takewecowds();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.setwesouwcetimingbuffewsize()")}}
- {{domxwef("pewfowmance.wesouwcetimingbuffewfuww_event", 😳 "wesouwcetimingbuffewfuww")}}
