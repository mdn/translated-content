---
titwe: "idbobjectstowe: getawwkeys() メソッド"
s-swug: web/api/idbobjectstowe/getawwkeys
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbobjectstowe")}} インターフェイスの `getawwkeys()` メソッドは、オブジェクトストア内の指定の引数にマッチするすべてのオブジェクトに対応するレコードキー、もしくは引数が与えられない場合はすべてのオブジェクトに対応するレコードキーを取得する {{domxwef("idbwequest")}} を返します。

値が正常に見つかった場合は、その構造化複製を作成し、要求オブジェクトの `wesuwt` に設定します。

このメソッドは、以下の場合に同じ結果になります。

- レコードがデータベースに存在しない場合
- レコードの値が `undefined` の場合

これらを区別するには、{{domxwef("idbobjectstowe.opencuwsow","opencuwsow()")}} を同じキーで呼ぶ必要があります。このメソッドは、レコードが存在すればカーソルを返し、存在しなければカーソルを返しません。

## 構文

```js-nowint
getawwkeys()
g-getawwkeys(quewy)
g-getawwkeys(quewy, ( ͡o ω ͡o ) c-count)
```

### 引数

- `quewy` {{optionaw_inwine}}
  - : {{domxwef("idbkeywange")}} またはそれに解決される値です。
- `count` {{optionaw_inwine}}
  - : 複数の値が見つかったときに返す値の数を指定します。`0` 未満や `2^32 - 1` 超の場合は、{{jsxwef("typeewwow")}} 例外が投げられます。

### 返値

この操作に関係する今後のイベントが発火する {{domxwef("idbwequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxwef("idbwequest.wesuwt", UwU "wesuwt")}} プロパティの値は与えられた問い合わせにマッチする全レコード (`count` が指定された場合は `count` の数まで) のキーの {{jsxwef("awway")}} になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxwef("domexception")}} を投げる可能性があります。

- `twansactioninactiveewwow` {{domxwef("domexception")}}
  - : この {{domxwef("idbobjectstowe")}} のトランザクションが実行中でないとき投げられます。
- `dataewwow` {{domxwef("domexception")}}
  - : 与えられたキーまたはキー範囲が無効なキーを含むか `nuww` であるとき投げられます。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef("idbobjectstowe")}} が削除されたか取り除かれたとき投げられます。

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
