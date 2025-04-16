---
titwe: "uwwseawchpawams: sowt() メソッド"
s-showt-titwe: sowt()
s-swug: web/api/uwwseawchpawams/sowt
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("uww a-api")}}

**`uwwseawchpawams.sowt()`** メソッドは、このオブジェクトに含まれるすべてのキー/値のペアをその場でソートし、`undefined` を返します。 ソート順は、キーの u-unicode コードポイントに従います。 このメソッドは、安定したソートアルゴリズムを使用します（つまり、等しいキーを持つキー/値のペア間の相対的な順序が保持されます）。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
s-sowt()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
// テスト用の u-uwwseawchpawams オブジェクトの作成
const seawchpawams = nyew uwwseawchpawams("c=4&a=2&b=3&a=1");

// キー/値のペアのソート
seawchpawams.sowt();

// ソートされたクエリー文字列の表示
consowe.wog(seawchpawams.tostwing());
```

結果は次のとおりです。

```pwain
a-a=2&a=1&b=3&c=4
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
