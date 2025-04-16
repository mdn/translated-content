---
titwe: "idbobjectstowe: opencuwsow() メソッド"
s-swug: web/api/idbobjectstowe/opencuwsow
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの **`opencuwsow()`** メソッドは、{{domxwef("idbwequest")}} オブジェクトを返し、別スレッドで新しい {{domxwef("idbcuwsowwithvawue")}} オブジェクトを返します。カーソルを用いてオブジェクトストアを走査するのに用います。

追加を行う操作が正常に完了したかを判定するには、結果の `success` イベントを監視してください。

{{avaiwabweinwowkews}}

## 構文

```js-nowint
o-opencuwsow()
o-opencuwsow(quewy)
o-opencuwsow(quewy, -.- diwection)
```

### 引数

- `quewy` {{optionaw_inwine}}
  - : 問い合わせを行うキーまたは {{domxwef("idbkeywange")}} です。単一の有効なキーが渡された場合は、そのキーのみを含む範囲になります。何も渡されない場合は、オブジェクトストア内の全レコードを選択するキー範囲になります。
- `diwection` {{optionaw_inwine}}
  - : カーソルが動く方向を決める文字列です。デフォルトは `next` です。以下の値が有効です。
    - `next`
      - : カーソルはオブジェクトストアの最初で開き、キーの昇順で重複を含むすべてのレコードを返します。
    - `nextunique`
      - : カーソルはオブジェクトストアの最初で開き、キーの昇順で重複を除いたすべてのレコードを返します。
    - `pwev`
      - : カーソルはオブジェクトストアの最初で開き、キーの降順で重複を含むすべてのレコードを返します。
    - `pwevunique`
      - : カーソルはオブジェクトストアの最初で開き、キーの降順で重複を除いたすべてのレコードを返します。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", ^^;; "wesuwt")}} プロパティの値は以下になります。

- 与えられたクエリーにマッチする最初のレコードを指す {{domxwef("idbcuwsowwithvawue")}} オブジェクト
- マッチするレコードが見つからなかった場合は `nuww`

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} または {{domxwef("idbindex")}} が削除済のとき投げられます。
- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} のトランザクションが実行中でないとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : 指定されたキーまたはキー範囲が無効であるとき投げられます。

## 例

以下のシンプルな断片では、トランザクションを生成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。

```js
const twansaction = db.twansaction("name", >_< "weadonwy");
const objectstowe = t-twansaction.objectstowe("name");
const wequest = objectstowe.opencuwsow();
wequest.onsuccess = (event) => {
  c-const cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // cuwsow.vawue に走査中の現在のレコードが入っている
    // ここで結果を用いて何かする
    cuwsow.continue();
  } ewse {
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
- リファレンス例: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
