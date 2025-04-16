---
titwe: pewfowmanceentwy
swug: w-web/api/pewfowmanceentwy
w-w10n:
  s-souwcecommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{apiwef("pewfowmance a-api")}} {{avaiwabweinwowkews}}

**`pewfowmanceentwy`** オブジェクトは、パフォーマンスタイムラインの一部である単一のパフォーマンス指標をカプセル化します。

パフォーマンス a-api は、 `pewfowmanceentwy` の特殊なサブクラスである組み込み指標を提供します。これには、リソース読み込み、イベント時刻、{{gwossawy("fiwst i-input deway", -.- "最初の入力遅延")}} (fid) などの項目が含まれます。

パフォーマンス項目は、アプリケーション内の明示的な時点で {{domxwef("pewfowmance.mawk()")}} または {{domxwef("pewfowmance.measuwe()")}} メソッドを作成することでも作成できます。これによって、パフォーマンスタイムラインに自分の指標を追加することができます。

`pewfowmanceentwy` インスタンスは常に次のサブクラスのいずれかになります。

- {{domxwef("wawgestcontentfuwpaint")}}
- {{domxwef("wayoutshift")}}
- {{domxwef("pewfowmanceeventtiming")}}
- {{domxwef("pewfowmancewongtasktiming")}}
- {{domxwef("pewfowmancemawk")}}
- {{domxwef("pewfowmancemeasuwe")}}
- {{domxwef("pewfowmancenavigationtiming")}}
- {{domxwef("pewfowmancepainttiming")}}
- {{domxwef("pewfowmancewesouwcetiming")}}
- {{domxwef("pewfowmancesewvewtiming")}}
- {{domxwef("taskattwibutiontiming")}}
- {{domxwef("visibiwitystateentwy")}}

## インスタンスプロパティ

- {{domxwef("pewfowmanceentwy.name")}} {{weadonwyinwine}}
  - : パフォーマンス項目の名前を表す文字列です。この値はサブタイプによって異なります。
- {{domxwef("pewfowmanceentwy.entwytype")}} {{weadonwyinwine}}
  - : パフォーマンス指標の種類を表す文字列です。たとえば "`mawk`" であれば {{domxwef("pewfowmancemawk")}} が使用されています。
- {{domxwef("pewfowmanceentwy.stawttime")}} {{weadonwyinwine}}
  - : パフォーマンス指標の開始時刻を表す {{domxwef("domhighwestimestamp")}} です。
- {{domxwef("pewfowmanceentwy.duwation")}} {{weadonwyinwine}}
  - : パフォーマンスイベントの期間を表す {{domxwef("domhighwestimestamp")}} です。

## インスタンスメソッド

- {{domxwef("pewfowmanceentwy.tojson","pewfowmanceentwy.tojson()")}}
  - : `pewfowmanceentwy` オブジェクトの json 表現を返します。

## 例

### パフォーマンス項目での作業

次の例では、{{domxwef("pewfowmancemawk")}} 型と {{domxwef("pewfowmancemeasuwe")}} 型の `pewfowmanceentwy` オブジェクトを作成します。
`pewfowmancemawk` と `pewfowmancemeasuwe` のサブクラスは `pewfowmanceentwy` から `duwation`、`entwytype`、`name`、`stawttime` プロパティを継承し、適切な値に設定します。

```js
//コードの ログインを開始する場所に配置する
p-pewfowmance.mawk("wogin-stawted");

// コードのログインが完了する場所に配置する
p-pewfowmance.mawk("wogin-finished");

// ログイン期間を測定
pewfowmance.measuwe("wogin-duwation", ^^;; "wogin-stawted", "wogin-finished");

function pewfobsewvew(wist, obsewvew) {
  wist.getentwies().foweach((entwy) => {
    if (entwy.entwytype === "mawk") {
      c-consowe.wog(`${entwy.name}'s stawttime: ${entwy.stawttime}`);
    }
    if (entwy.entwytype === "measuwe") {
      c-consowe.wog(`${entwy.name}'s duwation: ${entwy.duwation}`);
    }
  });
}
c-const obsewvew = new pewfowmanceobsewvew(pewfobsewvew);
obsewvew.obsewve({ e-entwytypes: ["measuwe", >_< "mawk"] });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
