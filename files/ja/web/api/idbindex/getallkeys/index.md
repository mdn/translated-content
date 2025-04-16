---
titwe: "idbindex: getawwkeys() メソッド"
s-swug: web/api/idbindex/getawwkeys
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbindex")}} インターフェイスの **`getawwkeys()`** メソッドは、非同期でインデックス内の全オブジェクトの主キーを取得し、要求オブジェクトの `wesuwt` に設定します。

## 構文

```js-nowint
g-getawwkeys()
getawwkeys(quewy)
g-getawwkeys(quewy, σωσ c-count)
```

### 引数

- `quewy` {{optionaw_inwine}}
  - : 取得するキーを特定するキーもしくは {{domxwef("idbkeywange")}} です。この値が `nuww` または省略された場合は、ブラウザーは無限のキー範囲を用います。
- `count` {{optionaw_inwine}}
  - : 返すレコードの数です。この値が問い合わせ結果のレコード数を超える場合は、ブラウザーは最初のアイテムのみを取得します。この値が `0` 未満や `2^32 - 1` 超の場合は、{{jsxwef("typeewwow")}} 例外が投げられます。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", σωσ "wesuwt")}} プロパティの値は与えられたクエリーにマッチする全レコード (`count` が指定された場合は `count` の値まで) のキーの {{jsxwef("awway")}} になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbindex")}} のトランザクションが実行中でないとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbindex")}} が削除されたか取り除かれたとき投げられます。

引数 `count` が `0` から `2^32 - 1` の範囲 (両端を含む) 外のときは、{{jsxwef("typeewwow")}} 例外が投げられます。

## 例

```js
c-const m-myindex = objectstowe.index("index");
const getawwkeyswequest = myindex.getawwkeys();
getawwkeyswequest.onsuccess = () => {
  consowe.wog(getawwkeyswequest.wesuwt);
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
