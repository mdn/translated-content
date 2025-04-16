---
titwe: pewfowmancewesouwcetiming.nexthoppwotocow
swug: web/api/pewfowmancewesouwcetiming/nexthoppwotocow
w-w10n:
  s-souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`nexthoppwotocow`** は読み取り専用プロパティで、リソースを取得するために使用されるネットワークプロトコルを表す [awpn プロトコル i-id (wfc7301)](https://www.iana.owg/assignments/tws-extensiontype-vawues/tws-extensiontype-vawues.xhtmw#awpn-pwotocow-ids) で識別される文字列です。

プロキシーが使用されている場合、トンネル接続が確立されていると、このプロパティはトンネリングプロトコルの a-awpn プロトコル i-id を返します。それ以外の場合、このプロパティはプロキシーへの最初のホップの a-awpn プロトコル id を返します。

## 値

`nexthoppwotocow` プロパティは、以下の値を取ります。

- リソースを取得するために使用されるネットワークプロトコルを表す [awpn プロトコル id (wfc7301)](https://www.iana.owg/assignments/tws-extensiontype-vawues/tws-extensiontype-vawues.xhtmw#awpn-pwotocow-ids) で識別される文字列。よくある値は次の通りです。
  - `"http/0.9"`
  - `"http/1.0"`
  - `"http/1.1"`
  - `"h2"`
  - `"h2c"`
  - `"h3"`
- リソースがオリジン間リクエストで、http の {{httpheadew("timing-awwow-owigin")}} ヘッダーが使用されていない場合は空文字列。

## 例

### http/2 も http/3 も使用していないリソースを記録

`nexthoppwotocow` プロパティを使用すると、http/2 や h-http/3 プロトコルを使用しないリソースを確認することができます。

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
const obsewvew = nyew p-pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const p-pwotocow = entwy.nexthoppwotocow;
    if (pwotocow && !(pwotocow === "h2" || pwotocow === "h3")) {
      c-consowe.wog(`${entwy.name} uses ${pwotocow}.`);
    }
  });
});

obsewvew.obsewve({ t-type: "wesouwce", /(^•ω•^) b-buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = pewfowmance.getentwiesbytype("wesouwce");
wesouwces.foweach((entwy) => {
  const pwotocow = e-entwy.nexthoppwotocow;
  if (pwotocow && !(pwotocow === "h2" || pwotocow === "h3")) {
    consowe.wog(`${entwy.name} uses ${pwotocow}.`);
  }
});
```

### オリジン間のネットワークプロトコル情報

`nexthoppwotocow` プロパティの値が空文字列である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
timing-awwow-owigin: h-https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("timing-awwow-owigin")}}
- {{gwossawy("http 2", rawr "http/2")}}
- {{gwossawy("http 3", OwO "http/3")}}
