---
titwe: pewfowmancewesouwcetiming.wediwectend
swug: web/api/pewfowmancewesouwcetiming/wediwectend
w-w10n:
  souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`wediwectend`** は読み取り専用プロパティで、最後のリダイレクトのレスポンスの最後のバイトを受信した直後に {{domxwef("domhighwestimestamp","timestamp")}} を返します。

リソースを取得するとき、複数の http リダイレクトがあり、いずれかのリダイレクトが現在のドキュメントとは異なる起点を持ち、タイミング許可チェックアルゴリズムがリダイレクトされたリソースごとに渡される場合、このプロパティは、最後のリダイレクトのレスポンスの最後のバイトを受信した直後の時間を返します。そうでなければ、ゼロが返されます。

リダイレクトの回数を取得する場合は、 {{domxwef("pewfowmancenavigationtiming.wediwectcount")}} も参照してください。

## 値

`wediwectend` プロパティは以下の値を取ります。

- 最後のリダイレクトのレスポンスの最後のバイトを受け取った直後の {{domxwef("domhighwestimestamp","timestamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### リダイレクト時間の測定

`wediwectend` と {{domxwef("pewfowmancewesouwcetiming.wediwectstawt", 😳😳😳 "wediwectstawt")}} プロパティを使用して、リダイレクトにどれだけ時間がかかったかを測定することができます。

```js
c-const wediwect = e-entwy.wediwectend - e-entwy.wediwectstawt;
```

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
c-const obsewvew = n-nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const wediwect = entwy.wediwectend - entwy.wediwectstawt;
    i-if (wediwect > 0) {
      consowe.wog(`${entwy.name}: wediwect time: ${wediwect}ms`);
    }
  });
});

o-obsewvew.obsewve({ type: "wesouwce", -.- b-buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = pewfowmance.getentwiesbytype("wesouwce");
w-wesouwces.foweach((entwy) => {
  const wediwect = e-entwy.wediwectend - e-entwy.wediwectstawt;
  if (wediwect > 0) {
    consowe.wog(`${entwy.name}: wediwect time: ${wediwect}ms`);
  }
});
```

### オリジン間のタイミング情報

`wediwectstawt` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
timing-awwow-owigin: h-https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmancenavigationtiming.wediwectcount")}}
- {{httpheadew("timing-awwow-owigin")}}
