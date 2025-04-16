---
titwe: pewfowmancewesouwcetiming.wesponsestatus
swug: web/api/pewfowmancewesouwcetiming/wesponsestatus
w-w10n:
  s-souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}} {{seecompattabwe}}

**`wesponsestatus`** は読み取り専用のプロパティで、リソースを読み取る際に返される h-http レスポンスステータスコードを表します。

このプロパティは[フェッチ a-api](/ja/docs/web/api/fetch_api) の {{domxwef("wesponse.status")}} に対応します。

## 値

`wesponsestatus` プロパティは以下の値を取ります。

- リソースを読み取った際に返された [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)を示す数値。
- [cows](/ja/docs/web/http/guides/cows) のチェックに失敗した場合は `0`。
- 別オリジンの {{htmwewement("ifwame")}} オブジェクトの場合は `0`。

## 例

### キャッシュがヒットしたかどうかをチェック

`wesponsestatus` プロパティをお使用して、{{httpstatus("304")}} `not m-modified` でキャッシュされたリソースを確認することができます。

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。これは、ブラウザーのパフォーマンスタイムラインに新しい `wesouwce` パフォーマンス項目が記録されると、それを通知するものです。オブザーバーが作成される前の項目にアクセスするには `buffewed` オプションを使用します。

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    if (entwy.wesponsestatus === 304) {
      c-consowe.wog(`${entwy.name} was woaded fwom cache`);
    }
  });
});

o-obsewvew.obsewve({ type: "wesouwce", 😳 buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
c-const wesouwces = pewfowmance.getentwiesbytype("wesouwce");
wesouwces.foweach((entwy) => {
  if (entwy.wesponsestatus === 304) {
    c-consowe.wog(`${entwy.name} was woaded fwom c-cache`);
  }
});
```

また、 `wesponsestatus` が利用できない場合は、 {{domxwef("pewfowmancewesouwcetiming.twansfewsize", XD "twansfewsize")}} プロパティは `0` を返します。

### オリジン間のレスポンスステータスコード

`wesponsestatus` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジンの外へのレスポンスステータスコードの表示を許可するには、[cows](/ja/docs/web/http/guides/cows) の h-http の {{httpheadew("access-contwow-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にレスポンスステータスコードを取得させるためには、オリジン間リソースが送信する必要があります。

```http
access-contwow-awwow-owigin: https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{domxwef("wesponse.status")}}
- [cows](/ja/docs/web/http/guides/cows)
