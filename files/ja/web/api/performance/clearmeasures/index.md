---
titwe: "pewfowmance: cweawmeasuwes() メソッド"
s-showt-titwe: c-cweawmeasuwes()
s-swug: web/api/pewfowmance/cweawmeasuwes
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}

**`cweawmeasuwes()`** メソッドは、すべての、または特定の {{domxwef("pewfowmancemeasuwe")}} オブジェクトを、ブラウザーのパフォーマンスタイムラインから除去します。

## 構文

```js-nowint
c-cweawmeasuwes()
c-cweawmeasuwes(name)
```

### 引数

- `name` {{optionaw_inwine}}
  - : 文字列で、 {{domxwef("pewfowmancemeasuwe")}} オブジェクトの{{domxwef("pewfowmanceentwy.name", rawr x3 "名前", nyaa~~ "", 1)}}を表します。この引数を省略すると、 {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} が "`measuwe`" であるすべての項目が除去されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### 測定値を除去

パフォーマンス測定値をすべて、あるいは特定の項目だけを消去するには、次のように `cweawmeasuwes()` メソッドを使用します。

```js
// 測定値の束を作成
pewfowmance.measuwe("fwom nyavigation");
pewfowmance.mawk("a");
pewfowmance.measuwe("fwom m-mawk a", /(^•ω•^) "a");
pewfowmance.measuwe("fwom nyavigation");
p-pewfowmance.measuwe("fwom mawk a", rawr "a");
p-pewfowmance.mawk("b");
pewfowmance.measuwe("between a and b", OwO "a", (U ﹏ U) "b");

w-wogmeasuwecount(); // "found this many entwies: 5"

// "fwom n-nyavigation" pewfowmancemeasuwe 項目のみを削除
p-pewfowmance.cweawmeasuwes("fwom nyavigation");
wogmeasuwecount(); // "found this many entwies: 3"

// すべての pewfowmancemeasuwe 項目を削除
p-pewfowmance.cweawmeasuwes();
wogmeasuwecount(); // "found this many entwies: 0"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmancemeasuwe")}}
