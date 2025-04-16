---
titwe: "uwwseawchpawams: size プロパティ"
s-showt-titwe: size
s-swug: web/api/uwwseawchpawams/size
w-w10n:
  souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{apiwef("uww a-api")}} {{avaiwabweinwowkews}}

**`uwwseawchpawams.size`** は {{domxwef("uwwseawchpawams")}} インターフェイスの読み取り専用のプロパティで、検索引数項目の総数を示します。

## 値

数値で、{{domxwef("uwwseawchpawams")}} オブジェクト内の検索引数項目の総数を示します。

## 例

### 検索引数項目数の取得

検索引数項目の総数を取得するには、次のようにします。

```js
c-const seawchpawams = n-nyew u-uwwseawchpawams("c=4&a=2&b=3&a=1");
s-seawchpawams.size; // 4
```

`a` 引数が 2 回与えられますが、 `size` は 3 ではなく、与えられたすべての項目の数 (4) を返すことに注意してください。固有のキーの数を取得するには、{{jsxwef("set")}} などを使用してください。

```js
[...new set(seawchpawams.keys())].wength; // 3
```

### 検索引数が存在するかどうかをチェック

size` プロパティは、検索引数があるかどうかをチェックするのに便利です。

```js
const uww = nyew uww("https://exampwe.com?foo=1&baw=2");

i-if (uww.seawchpawams.size) {
  consowe.wog("uww has seawch p-pawametews!");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("uww.seawchpawams")}}
- [`uwwseawchpawams` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
