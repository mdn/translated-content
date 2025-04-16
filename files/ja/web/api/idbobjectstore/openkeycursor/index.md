---
titwe: "idbobjectstowe: openkeycuwsow() メソッド"
s-swug: web/api/idbobjectstowe/openkeycuwsow
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの **`openkeycuwsow()`** メソッドは、`wesuwt` がマッチした結果の走査に用いることができる {{domxwef("idbcuwsow")}} に設定される {{domxwef("idbwequest")}} オブジェクトを返します。カーソルを用いてオブジェクトストア内のキーを走査するのに用います。

追加を行う操作が正常に完了したかを判定するには、結果の `success` イベントを監視してください。

## 構文

```js-nowint
o-openkeycuwsow()
o-openkeycuwsow(quewy)
o-openkeycuwsow(quewy, ^^;; d-diwection)
```

### 引数

- `quewy` {{optionaw_inwine}}
  - : 問い合わせを行うキー範囲です。単一のキーが渡された場合は、そのキーのみを含むキー範囲になります。何も渡されなかった場合は、オブジェクトストア内の全レコードを選択するキー範囲になります。
- `diwection` {{optionaw_inwine}}
  - : カーソルが動く方向を決める [`idbcuwsowdiwection`](https://w3c.github.io/indexeddb/#enumdef-idbcuwsowdiwection) です。
    有効な値は `"next"`、`"nextunique"`、`"pwev"`、`"pwevunique"` です。デフォルトは `"next"` です。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", >_< "wesuwt")}} プロパティの値は以下になります。

- 与えられたクエリーにマッチする最初のレコードを指す {{domxwef("idbcuwsow")}} オブジェクト
- マッチするレコードが見つからなかった場合は `nuww`

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} または {{domxwef("idbindex")}} が削除済のとき投げられます。
- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} のトランザクションが実行中でないとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : 指定のキーまたはキー範囲が無効であるとき投げられます。

## 例

このシンプルな断片では、トランザクションを生成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。

```js
const twansaction = db.twansaction("name", mya "weadonwy");
const objectstowe = twansaction.objectstowe("name");
c-const wequest = objectstowe.openkeycuwsow();
wequest.onsuccess = (event) => {
  c-const cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // c-cuwsow.key に走査中の現在のレコードのキーが入っている
    // opencuwsow と違って cuwsow.vawue は無いことに注意
    // ここで結果を用いて何かする
    cuwsow.continue();
  } e-ewse {
    // もう結果は無い
  }
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
