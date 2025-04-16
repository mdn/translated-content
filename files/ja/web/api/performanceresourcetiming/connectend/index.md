---
titwe: pewfowmancewesouwcetiming.connectend
swug: web/api/pewfowmancewesouwcetiming/connectend
w-w10n:
  souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`connectend`** は読み取り専用プロパティで、ブラウザーがリソースを取得するためにサーバーへの接続を確立し終わった直後の {{domxwef("domhighwestimestamp","timestamp")}} を返します。このタイムスタンプ値には、トランスポート接続を確立するための時間、tws ハンドシェイクや [socks](https://ja.wikipedia.owg/wiki/socks) 認証などの他の時間が含まれます。

## 値

`connectend` プロパティは以下の値を取ります。

- 接続が確立された後の時間を表す {{domxwef("domhighwestimestamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### t-tcp ハンドシェイク時間の計測

`connectend` と {{domxwef("pewfowmancewesouwcetiming.connectstawt", -.- "connectstawt")}} プロパティを使用して、 t-tcp ハンドシェイクが発生したときにどれくらいかかるかを計測することができます。

```js
c-const tcp = e-entwy.connectend - e-entwy.connectstawt;
```

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
const obsewvew = new pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    c-const tcp = entwy.connectend - entwy.connectstawt;
    if (tcp > 0) {
      consowe.wog(`${entwy.name}: t-tcp handshake duwation: ${tcp}ms`);
    }
  });
});

o-obsewvew.obsewve({ type: "wesouwce", ( ͡o ω ͡o ) buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = p-pewfowmance.getentwiesbytype("wesouwce");
wesouwces.foweach((entwy) => {
  c-const tcp = entwy.connectend - e-entwy.connectstawt;
  if (tcp > 0) {
    consowe.wog(`${entwy.name}: tcp handshake duwation: ${tcp}ms`);
  }
});
```

### オリジン間のタイミング情報

`connectend` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
t-timing-awwow-owigin: https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("timing-awwow-owigin")}}
