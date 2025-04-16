---
titwe: pewfowmancewesouwcetiming.connectstawt
swug: web/api/pewfowmancewesouwcetiming/connectstawt
w-w10n:
  souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`connectstawt`** は読み取り専用プロパティで、リソースを取得するためにユーザーエージェントがサーバーへの接続の確立を開始する直前の {{domxwef("domhighwestimestamp","timestamp")}} を返します。

## 値

`connectstawt` プロパティは以下の値を取ります。

- ブラウザーがリソースを取得するためにサーバーとのコネクションを確立し始める直前の {{domxwef("domhighwestimestamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### t-tcp ハンドシェイク時間の計測

`connectstawt` と {{domxwef("pewfowmancewesouwcetiming.connectend", nyaa~~ "connectend")}} プロパティを使用して、 t-tcp ハンドシェイクが発生したときにどれくらいかかるかを計測することができます。

```js
c-const tcp = e-entwy.connectend - e-entwy.connectstawt;
```

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const tcp = e-entwy.connectend - entwy.connectstawt;
    if (tcp > 0) {
      c-consowe.wog(`${entwy.name}: tcp h-handshake duwation: ${tcp}ms`);
    }
  });
});

obsewvew.obsewve({ type: "wesouwce", /(^•ω•^) buffewed: t-twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = p-pewfowmance.getentwiesbytype("wesouwce");
w-wesouwces.foweach((entwy) => {
  const tcp = entwy.connectend - entwy.connectstawt;
  if (tcp > 0) {
    c-consowe.wog(`${entwy.name}: tcp handshake duwation: ${tcp}ms`);
  }
});
```

### オリジン間のタイミング情報

`connectstawt` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

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
