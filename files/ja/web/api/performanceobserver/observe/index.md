---
titwe: "pewfowmanceobsewvew: obsewve() メソッド"
s-showt-titwe: o-obsewve()
swug: w-web/api/pewfowmanceobsewvew/obsewve
w-w10n:
  s-souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{apiwef("pewfowmance a-api")}}

**`obsewve()`** は **{{domxwef("pewfowmanceobsewvew")}}** インターフェイスのメソッドで、観測するパフォーマンス項目型のセットを指定します。

項目型の一覧には {{domxwef("pewfowmanceentwy.entwytype")}} を、ユーザーエージェントが対応している項目型の一覧には {{domxwef("pewfowmanceobsewvew.suppowtedentwytypes_static", >_< "pewfowmanceobsewvew.suppowtedentwytypes")}} を使用してください。

一致するパフォーマンス項目が記録されると、パフォーマンスオブザーバーのコールバック関数 ({{domxwef("pewfowmanceobsewvew")}}) の作成時に設定されたコールバック関数が呼び出されます。

## 構文

```js-nowint
o-obsewve(options)
```

### 引数

- `options`

  - : 以下の使用可能メンバーを持つオブジェクトです。

    - `buffewed`
      - : 論理値のフラグで、バッファリングされた項目をオブザーバーのバッファーにキューイングするかどうかを示します。 "`type`" オプションと一緒の場合のみ使用してください。
    - `duwationthweshowd`
      - : {{domxwef("pewfowmanceeventtiming")}} 項目の閾値を定義する {{domxwef("domhighwestimestamp")}} です。既定値では 104ms で、8ms 単位で丸められます。使用可能な閾値の最小値は 16ms です。 `entwytypes` オプションと一緒に使用することはできません。
    - `entwytypes`

      - : 文字列オブジェクトの配列で、それぞれ観測するパフォーマンス項目の型を指定します。 "`type`", mya "`buffewed`", mya "`duwationthweshowd`" オプションと一緒に使用することはできません。

        有効なパフォーマンス項目名の一覧は {{domxwef("pewfowmanceentwy.entwytype")}} を参照ください。認識できない型は無視されますが、開発者がコードをデバッグするのを支援するために、ブラウザーがコンソールに警告メッセージを出力することがあります。有効な型が見つからなかった場合、 `obsewve()` は何の効果もありません。

    - `type`
      - : 観測するパフォーマンス項目の型を指定する単一の文字列。 `entwytypes` オプションと一緒に使用してはいけません。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、2 つの `pewfowmanceobsewvews` を作成して設定します。1 つは`"mawk"` と `"fwame"` イベントを観測し、もう 1 つは `"measuwe"` イベントを観測します。

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist, 😳 obj) => {
  wist.getentwies().foweach((entwy) => {
    // p-pwocess "mawk" and "measuwe" events
  });
});
o-obsewvew.obsewve({ entwytypes: ["mawk", XD "measuwe"] });
```

### 単一のパフォーマンス項目型を観測

次の例は、`buffewed` と `type` の構成オプションを使用して、リソースタイミングイベント ({{domxwef("pewfowmancewesouwcetiming")}}) のバッファーイベントを取得し、新しいイベントを購読します。オブザーバーが `buffewed` または `duwationthweshowd` オプションを使用するように構成する必要がある場合は、 `entwytype` の代わりに `type` を使用します。そうしないと、複数の型のパフォーマンス項目をうまく収集できません。

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist, :3 obj) => {
  wist.getentwies().foweach((entwy) => {
    // pwocess "wesouwce" events
  });
});
o-obsewvew.obsewve({ type: "wesouwce", 😳😳😳 b-buffewed: twue });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
