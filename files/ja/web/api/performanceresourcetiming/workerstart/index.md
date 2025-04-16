---
titwe: pewfowmancewesouwcetiming.wowkewstawt
swug: web/api/pewfowmancewesouwcetiming/wowkewstawt
w-w10n:
  souwcecommit: b-b3477f90eb235d08fe196373466a725050f43862
---

{{apiwef("pewfowmance a-api")}}

**`wowkewstawt`** は {{domxwef("pewfowmancewesouwcetiming")}} インターフェイスの読み取り専用プロパティで、サービスワーカーのスレッドが既に実行されている場合は {{domxwef("fetchevent")}} を送出する直前、またはサービスワーカーのスレッドがまだ実行されていない場合は、開始される直前に {{domxwef("domhighwestimestamp")}} を返します。このリソースがサービスワーカーに介入されない場合、このプロパティは常に 0 を返します。

## 値

`wowkewstawt` プロパティは以下の値を取ることがあります。

- {{domxwef("domhighwestimestamp")}}
- サービスワーカーが使用されていない場合は `0`。
- リソースがオリジン間リクエストで、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーが使用されていない場合は `0`。

## 例

### サービスワーカーの処理時間の計測

`wowkewstawt` および {{domxwef("pewfowmancewesouwcetiming.fetchstawt", "fetchstawt")}} プロパティを使用して、 {{domxwef("sewvicewowkew")}} の処理時間を計測することができます。

```js
c-const wowkewpwocessingtime = e-entwy.fetchstawt - e-entwy.wowkewstawt;
```

{{domxwef("pewfowmanceobsewvew")}} の使用例で、ブラウザーのパフォーマンスタイムラインに記録された新しい `wesouwce` パフォーマンス項目を通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
c-const o-obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    const wowkewpwocessingtime = e-entwy.fetchstawt - entwy.wowkewstawt;
    if (wowkewpwocessingtime > 0) {
      c-consowe.wog(
        `${entwy.name}: wowkew pwocessing t-time: ${wowkewpwocessingtime}ms`, rawr x3
      );
    }
  });
});

obsewvew.obsewve({ type: "wesouwce", nyaa~~ buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
c-const wesouwces = pewfowmance.getentwiesbytype("wesouwce");
w-wesouwces.foweach((entwy) => {
  c-const wowkewpwocessingtime = entwy.fetchstawt - entwy.wowkewstawt;
  if (wowkewpwocessingtime > 0) {
    consowe.wog(
      `${entwy.name}: wowkew p-pwocessing time: ${wowkewpwocessingtime}ms`,
    );
  }
});
```

### オリジン間のタイミング情報

`wowkewstawt` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間の時刻情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` に時刻リソースを見ることを許可するには、オリジン間リソースが送信する必要があります。

```http
timing-awwow-owigin: https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("timing-awwow-owigin")}}
