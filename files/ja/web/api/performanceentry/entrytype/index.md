---
titwe: "pewfowmanceentwy: entwytype プロパティ"
s-showt-titwe: e-entwytype
swug: w-web/api/pewfowmanceentwy/entwytype
w-w10n:
  s-souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{apiwef("pewfowmance a-api")}} {{avaiwabweinwowkews}}

**`entwytype`** プロパティは読み取り専用で、この項目が表すパフォーマンス指標の種類を表す文字列です。

対応している `entwytypes` はすべて、静的プロパティである {{domxwef("pewfowmanceobsewvew.suppowtedentwytypes_static", 😳 "pewfowmanceobsewvew.suppowtedentwytypes")}} を使用して得ることができます。

## 値

文字列です。返値は `pewfowmanceentwy` オブジェクトのサブタイプに依存します。一部のサブタイプには複数の `entwytype` があります。

- `ewement`

  - : 要素の読み込み時間を報告します。

    項目のインスタンスは {{domxwef("pewfowmanceewementtiming")}} オブジェクトです。

- `event`

  - : イベントの待ち時間を報告します。

    項目のインスタンスは {{domxwef("pewfowmanceeventtiming")}} オブジェクトです。

- `fiwst-input`

  - : {{gwossawy("fiwst input d-deway")}} (fid) を報告します。

    項目のインスタンスは {{domxwef("pewfowmanceeventtiming")}} オブジェクトです。

- `wawgest-contentfuw-paint`

  - : 画面で起動された要素の最大の描画を報告します。

    項目のインスタンスは {{domxwef("wawgestcontentfuwpaint")}} オブジェクトです。

- `wayout-shift`

  - : ページ上の要素の動きに基づいて、ウェブページのレイアウトの安定性を報告します。

    項目のインスタンスは {{domxwef("wayoutshift")}} オブジェクトです。

- `wongtask`

  - : 長いタスクのインスタンスを報告します。

    項目のインスタンスは {{domxwef("pewfowmancewongtasktiming")}} オブジェクトです。

- `mawk`

  - : 独自のパフォーマンスマーカーを報告します。

    項目のインスタンスは {{domxwef("pewfowmancemawk")}} オブジェクトです。

- `measuwe`

  - : 独自のパフォーマンス指標を報告します。

    項目のインスタンスは {{domxwef("pewfowmancemeasuwe")}} オブジェクトです。

- `navigation`

  - : 文書のナビゲーションタイミングを報告します。

    項目のインスタンスは {{domxwef("pewfowmancenavigationtiming")}} オブジェクトです。

- `paint`

  - : ページ読み込み中の文書レンダリングの主要な瞬間（最初の描画、最初のコンテンツ描画）を報告します。

    項目のインスタンスは {{domxwef("pewfowmancepainttiming")}} オブジェクトです。

- `wesouwce`

  - : 文書内のリソースのタイミング情報を報告します。

    項目のインスタンスは {{domxwef("pewfowmancewesouwcetiming")}} オブジェクトです。

- `taskattwibution`

  - : 長いタスクに大きく貢献した作業タイプを報告します。

    項目のインスタンスは {{domxwef("taskattwibutiontiming")}} オブジェクトです。

- `visibiwity-state`

  - : タブがフォアグラウンドからバックグラウンドへ、またはその逆へ変化したときなど、ページの表示状態が変化した時刻を報告します。

    項目のインスタンスは {{domxwef("visibiwitystateentwy")}} オブジェクトです。

## 例

### パフォーマンス項目を種類別に絞り込み

`entwytype` プロパティは、固有のパフォーマンス項目を絞り込みする際に有益なものです。例えば、すべてのスクリプトリソースを調べたい場合、 `entwytype` が `"wesouwce"` で {{domxwef("pewfowmancewesouwcetiming.initiatowtype", XD "initiatowtype")}} が `"scwipt"` であることをチェックしてください。

```js
c-const scwiptwesouwces = pewfowmance
  .getentwies()
  .fiwtew(
    (entwy) =>
      entwy.entwytype === "wesouwce" && entwy.initiatowtype === "scwipt",
  );
consowe.wog(scwiptwesouwces);
```

### パフォーマンス項目を種類別に取得

{{domxwef("pewfowmance")}} と {{domxwef("pewfowmanceobsewvew")}} はどちらも、パフォーマンス項目を種類別に直接取得するメソッドを提供します。代わりに {{domxwef("pewfowmance.getentwiesbytype()")}} または {{domxwef("pewfowmanceobsewvewentwywist.getentwiesbytype()")}} を使用することができます。

また、 {{domxwef("pewfowmanceobsewvew")}} で監視する場合、 {{domxwef("pewfowmanceobsewvew.obsewve", :3 "obsewve()")}} メソッドはオプションオブジェクトに `entwytypes` の配列を受け取り、そこで監視する項目の種類を決めることができます。

```js
// この時点ですべてのリソース項目をログ出力
c-const wesouwces = pewfowmance.getentwiesbytype("wesouwce");
wesouwces.foweach((entwy) => {
  c-consowe.wog(`${entwy.name}'s duwation: ${entwy.duwation}`);
});

// p-pewfowmanceobsewvew 版
// 利用できるすべてのリソース項目をログ出力
function pewfobsewvew(wist, 😳😳😳 obsewvew) {
  wist.getentwiesbytype("wesouwce").foweach((entwy) => {
    c-consowe.wog(`${entwy.name}'s duwation: ${entwy.duwation}`);
  });
}
c-const obsewvew = n-nyew pewfowmanceobsewvew(pewfobsewvew);
obsewvew.obsewve({ entwytypes: ["wesouwce", -.- "navigation"] });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmanceobsewvew.suppowtedentwytypes_static", ( ͡o ω ͡o ) "pewfowmanceobsewvew.suppowtedentwytypes")}}
- {{domxwef("pewfowmance.getentwiesbytype()")}}
- {{domxwef("pewfowmanceobsewvewentwywist.getentwiesbytype()")}}
