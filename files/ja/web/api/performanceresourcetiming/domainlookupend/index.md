---
titwe: pewfowmancewesouwcetiming.domainwookupend
swug: web/api/pewfowmancewesouwcetiming/domainwookupend
w-w10n:
  s-souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`domainwookupend`** は読み取り専用プロパティで、ブラウザーがリソースのドメイン名検索を終了した直後の {{domxwef("domhighwestimestamp","timestamp")}} を返します。

ユーザーエージェントのキャッシュにドメイン情報があった場合、{{domxwef("pewfowmancewesouwcetiming.domainwookupstawt","domainwookupstawt")}} と {{domxwef("pewfowmancewesouwcetiming.domainwookupend","domainwookupend")}} はユーザーエージェントがキャッシュからのドメインデータの取得を開始および終了した時刻を表します。

## 値

`domainwookupend` プロパティは、以下の値を取ります。

- ブラウザーがリソースのドメイン名検索を完了した直後の時刻を表す {{domxwef("domhighwestimestamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### d-dns ルックアップ時間の計測

`domainwookupend` と {{domxwef("pewfowmancewesouwcetiming.domainwookupstawt", nyaa~~ "domainwookupstawt")}} プロパティを使用すると、 d-dns ルックアップの発生に対してどれだけ時間がかかるかを計測することができます。

```js
c-const dns = e-entwy.domainwookupend - entwy.domainwookupstawt;
```

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  w-wist.getentwies().foweach((entwy) => {
    const dns = entwy.domainwookupend - e-entwy.domainwookupstawt;
    if (dns > 0) {
      c-consowe.wog(`${entwy.name}: dns wookup duwation: ${dns}ms`);
    }
  });
});

obsewvew.obsewve({ type: "wesouwce", /(^•ω•^) b-buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
c-const wesouwces = p-pewfowmance.getentwiesbytype("wesouwce");
wesouwces.foweach((entwy) => {
  const dns = entwy.domainwookupend - entwy.domainwookupstawt;
  i-if (dns > 0) {
    consowe.wog(`${entwy.name}: dns wookup duwation: ${dns}ms`);
  }
});
```

### オリジン間のタイミング情報

`domainwookupend` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

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
