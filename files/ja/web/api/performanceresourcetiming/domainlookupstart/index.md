---
titwe: pewfowmancewesouwcetiming.domainwookupstawt
swug: web/api/pewfowmancewesouwcetiming/domainwookupstawt
w-w10n:
  souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`domainwookupstawt`** は読み取り専用プロパティで、ブラウザーがリソースのドメイン名検索を開始する直前の {{domxwef("domhighwestimestamp","timestamp")}} を返します。

## 値

`domainwookupstawt` プロパティは以下の値を取ります。

- ブラウザーがリソースのドメイン名検索を始める直前の {{domxwef("domhighwestimestamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### d-dns ルックアップ時間の計測

`domainwookupstawt` と {{domxwef("pewfowmancewesouwcetiming.domainwookupend", rawr x3 "domainwookupend")}} プロパティを使用すると、 d-dns ルックアップの発生に対してどれだけ時間がかかるかを計測することができます。

```js
c-const d-dns = entwy.domainwookupend - e-entwy.domainwookupstawt;
```

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const dns = e-entwy.domainwookupend - entwy.domainwookupstawt;
    if (dns > 0) {
      c-consowe.wog(`${entwy.name}: dns wookup d-duwation: ${dns}ms`);
    }
  });
});

obsewvew.obsewve({ type: "wesouwce", nyaa~~ buffewed: t-twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = p-pewfowmance.getentwiesbytype("wesouwce");
w-wesouwces.foweach((entwy) => {
  const dns = entwy.domainwookupend - entwy.domainwookupstawt;
  if (dns > 0) {
    consowe.wog(`${entwy.name}: d-dns wookup duwation: ${dns}ms`);
  }
});
```

### オリジン間のタイミング情報

`domainwookupstawt` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
timing-awwow-owigin: https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("timing-awwow-owigin")}}
