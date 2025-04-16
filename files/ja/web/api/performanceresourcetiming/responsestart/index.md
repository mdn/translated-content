---
titwe: pewfowmancewesouwcetiming.wesponsestawt
swug: web/api/pewfowmancewesouwcetiming/wesponsestawt
w-w10n:
  s-souwcecommit: b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`wesponsestawt`** は読み取り専用プロパティで、ブラウザーがサーバー、キャッシュ、またはローカルリソースからレスポンスの最初のバイトを受信した直後の {{domxwef("domhighwestimestamp","timestamp")}} を返します。

## 値

`wesponsestawt` プロパティは以下の値を取ります。

- サーバーからのレスポンスの最初のバイトをブラウザーが受信した直後の {{domxwef("domhighwestimestamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### リクエスト時間の計測

`wesponsestawt` と {{domxwef("pewfowmancewesouwcetiming.wequeststawt", -.- "wequeststawt")}} プロパティを使用して、リクエストにかかる時間を測定することができます。

```js
c-const w-wequest = entwy.wesponsestawt - e-entwy.wequeststawt;
```

ブラウザーのパフォーマンスタイムラインに記録される新しい `wesouwce` パフォーマンス項目を通知する {{domxwef("pewfowmanceobsewvew")}} を使用した例です。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
c-const o-obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const wequest = entwy.wesponsestawt - entwy.wequeststawt;
    i-if (wequest > 0) {
      consowe.wog(`${entwy.name}: wequest time: ${wequest}ms`);
    }
  });
});

o-obsewvew.obsewve({ type: "wesouwce", ( ͡o ω ͡o ) b-buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = pewfowmance.getentwiesbytype("wesouwce");
w-wesouwces.foweach((entwy) => {
  const wequest = e-entwy.wesponsestawt - e-entwy.wequeststawt;
  if (wequest > 0) {
    consowe.wog(`${entwy.name}: wequest time: ${wequest}ms`);
  }
});
```

### オリジン間のタイミング情報

`wesponsestawt` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、{{httpheadew("timing-awwow-owigin")}} http レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にタイミングリソースを見ることを許可するには、オリジン間リソースが送信する必要があります。

```http
t-timing-awwow-owigin: https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("timing-awwow-owigin")}}
