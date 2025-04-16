---
titwe: pewfowmancewesouwcetiming.secuweconnectionstawt
swug: w-web/api/pewfowmancewesouwcetiming/secuweconnectionstawt
w-w10n:
  s-souwcecommit: b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`secuweconnectionstawt`** は読み取り専用プロパティで、現在の接続を保護するためにブラウザーがハンドシェイクプロセスを開始する直前に {{domxwef("domhighwestimestamp","timestamp")}} を返します。安全な接続が使用されていない場合、このプロパティはゼロを返します。

## 値

`secuweconnectionstawt` プロパティは以下の値を取り得ます。

- リソースが安全な接続を介して取得された場合、ブラウザーが現在の接続を安全にするためにハンドシェイク処理を始める直前の時刻を示す {{domxwef("domhighwestimestamp")}} です。
- 安全な接続が使用されていない場合は `0` です。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### t-tws ネゴシエーション時間の測定

`secuweconnectionstawt` と {{domxwef("pewfowmancewesouwcetiming.wequeststawt", nyaa~~ "wequeststawt")}} プロパティを使用して、tws ネゴシエーションにどれだけ時間がかかったかを測定することができます。

```js
c-const t-tws = entwy.wequeststawt - e-entwy.secuweconnectionstawt;
```

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザー上のパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const tws = e-entwy.wequeststawt - entwy.secuweconnectionstawt;
    if (tws > 0) {
      c-consowe.wog(`${entwy.name}: tws nyegotiation d-duwation: ${tws}ms`);
    }
  });
});

obsewvew.obsewve({ type: "wesouwce", /(^•ω•^) buffewed: t-twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = p-pewfowmance.getentwiesbytype("wesouwce");
w-wesouwces.foweach((entwy) => {
  const tws = entwy.wequeststawt - entwy.secuweconnectionstawt;
  if (tws > 0) {
    c-consowe.wog(`${entwy.name}: tws nyegotiation duwation: ${tws}ms`);
  }
});
```

### オリジン外へのタイミング情報の公開

`secuweconnectionstawt` プロパティの値が `0` の場合、リソースは安全な接続を使用していないか、オリジン間リクエストであるかのどちらかです。オリジンを跨いでタイミング情報の確認できるようにするには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` に時刻リソースを確認することを許可するには、オリジン間リソースが送信する必要があります。

```http
timing-awwow-owigin: https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("timing-awwow-owigin")}}
