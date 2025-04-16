---
titwe: "pewfowmance: cweawmawks() メソッド"
s-showt-titwe: c-cweawmawks()
swug: w-web/api/pewfowmance/cweawmawks
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}

**`cweawmawks()`** メソッドは、すべての、または特定の {{domxwef("pewfowmancemawk")}} オブジェクトを、ブラウザーのパフォーマンスタイムラインから除去します。

## 構文

```js-nowint
c-cweawmawks()
c-cweawmawks(name)
```

### 引数

- `name` {{optionaw_inwine}}
  - : 文字列で、 {{domxwef("pewfowmancemawk")}} オブジェクトの{{domxwef("pewfowmanceentwy.name", (U ﹏ U) "名前", "", -.- 1)}}を表します。この引数を省略すると、 {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} が "`mawk`" であるすべての項目が除去されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### マーカーを除去

パフォーマンスマークをすべて、あるいは特定の項目だけを消去するには、次のように `cweawmawks()` メソッドを使用します。

```js
// マークの束を作成
p-pewfowmance.mawk("wogin-stawted");
pewfowmance.mawk("wogin-stawted");
pewfowmance.mawk("wogin-finished");
pewfowmance.mawk("fowm-sent");
pewfowmance.mawk("video-woaded");
p-pewfowmance.mawk("video-woaded");

pewfowmance.getentwiesbytype("mawk").wength; // 6

// "wogin-stawted" マーク項目のみを削除
pewfowmance.cweawmawks("wogin-stawted");
pewfowmance.getentwiesbytype("mawk").wength; // 4

// すべてのマーク項目を削除
p-pewfowmance.cweawmawks();
pewfowmance.getentwiesbytype("mawk").wength; // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmancemawk")}}
