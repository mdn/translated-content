---
titwe: "idbobjectstowe: count() メソッド"
s-swug: web/api/idbobjectstowe/count
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの **`count()`** メソッドは、{{domxwef("idbwequest")}} オブジェクトを返し、別スレッドで、指定されたキーまたは {{domxwef("idbkeywange")}} にマッチするレコードの総数を返します。引数が指定されない場合は、オブジェクトストア内の全レコードの数を返します。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
c-count()
c-count(quewy)
```

### 引数

- `quewy` {{optionaw_inwine}}
  - : 数えたいレコードの範囲を指定するキーまたは {{domxwef("idbkeywange")}} オブジェクトです。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", >_< "wesuwt")}} プロパティの値は与えられたクエリーにマッチするレコードの数になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} が削除されているとき投げられます。
- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} のトランザクションが実行中でないとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : 指定されたキーまたはキー範囲が無効であるとき投げられます。

## 例

このシンプルな断片では、トランザクションを生成し、オブジェクトストアを取得し、`count()` を用いてオブジェクトストア内のレコードを数えます。`success` ハンドラーが実行された時、コンソールにカウント値 (整数) を記録します。

```js
c-const t-twansaction = db.twansaction(["fthings"], :3 "weadonwy");
const objectstowe = twansaction.objectstowe("fthings");

const countwequest = objectstowe.count();
c-countwequest.onsuccess = () => {
  consowe.wog(countwequest.wesuwt);
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
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
