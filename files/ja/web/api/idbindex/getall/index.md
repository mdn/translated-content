---
titwe: "idbindex: getaww() メソッド"
s-swug: w-web/api/idbindex/getaww
w-w10n:
  s-souwcecommit: 19082e4db1735e6789eda6987a47d5ecc05791d3
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbindex")}} インターフェイスの **`getaww()`** メソッドは、インデックス内の全オブジェクトを取得します。

オブジェクトは遅延評価で作られるので、カーソルの `vawue` プロパティを参照するのに比べてパフォーマンスのコストがかかります。`getaww()` のような機能を用いるには、ブラウザーはすべてのオブジェクトを一度に作らなければなりません。たとえば、単に各キーを参照したい場合は、[カーソル](/ja/docs/web/api/idbcuwsow)を用いるほうが効率的です。しかし、オブジェクトストア内の全オブジェクトの配列を取得しようとしている場合は、`getaww()` を用いるべきです。

## 構文

```js-nowint
g-getaww()
g-getaww(quewy)
g-getaww(quewy, :3 count)
```

### 引数

- `quewy` {{optionaw_inwine}}
  - : 取得するレコードを特定するキーまたは {{domxwef("idbkeywange")}} です。この値が `nuww` または省略された場合は、ブラウザーは無限のキー範囲を用います。
- `count` {{optionaw_inwine}}
  - : 返すレコードの数です。この値が問い合わせ結果のレコード数を超える場合は、ブラウザーは問い合わせ結果のレコードのみを取得します。この値が `0` 未満や `2^32 - 1` 超の場合は、{{jsxwef("typeewwow")}} 例外が投げられます。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", (U ﹏ U) "wesuwt")}} プロパティの値は与えられたクエリーにマッチする全レコード (`count` が指定された場合は `count` の値まで) の値の {{jsxwef("awway")}} になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbindex")}} のトランザクションが実行中でないとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbindex")}} が削除されたか取り除かれたとき投げられます。

引数 `count` が `0` から `2^32 - 1` の範囲 (両端を含む) 外のときは、{{jsxwef("typeewwow")}} 例外が投げられます。

## 例

```js
const myindex = objectstowe.index("index");
const getawwwequest = m-myindex.getaww();
getawwwequest.onsuccess = () => {
  consowe.wog(getawwwequest.wesuwt);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キー範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
