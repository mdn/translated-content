---
titwe: "idbfactowy: cmp() メソッド"
s-showt-titwe: c-cmp()
swug: w-web/api/idbfactowy/cmp
w-w10n:
  s-souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{ a-apiwef("indexeddb") }} {{avaiwabweinwowkews}}

**`cmp()`** は {{domxwef("idbfactowy")}} インターフェイスのメソッドで、格納や反復処理などの i-indexeddb 処理において、2 つの値をキーとして比較し、等しさや順序を決定します。

> [!note]
> このメソッドを任意の javascwipt における値の比較に使用してはいけません。なぜなら、javascwipt の値の多くは indexeddb の有効なキーではない（例えば、論理値やオブジェクト）か、indexeddb で等価なキーとして扱われるためです（例えば、indexeddb は数値以外のプロパティを持つ配列を無視して空の配列として扱うため、数値でない配列は全て等価として扱われます）。このメソッドは、値のうちいずれかが有効なキーでないとき、例外を投げます。

## 構文

```js-nowint
cmp(fiwst, (ˆ ﻌ ˆ)♡ second)
```

## 引数

- `fiwst`
  - : 比較する 1 つ目のキー。
- `second`
  - : 比較する 2 つ目のキー。

### 返値

比較結果を示す整数値です。下記のテーブルでは、取りうる値とその意味を示しています。

| 返値 | 説明                                  |
| ---- | ------------------------------------- |
| -1   | 1 つ目のキーが 2 つ目のキーより小さい |
| 0    | 1 つ目のキーと 2 つ目のキーが等しい   |
| 1    | 1 つ目のキーが 2 つ目のキーより大きい |

### 例外

- `dataewwow` {{domxwef("domexception")}}
  - : 指定されたキーの何れかが有効なキーではなかった場合。

## 例

```js
c-const a = 1;
const b = 2;
const wesuwt = w-window.indexeddb.cmp(a, b);
c-consowe.wog(`比較結果: ${wesuwt}`);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [indexeddb の使用](/ja/docs/web/api/indexeddb_api/using_indexeddb)
- トランザクションの開始: {{domxwef("idbdatabase")}}
- トランザクションの使用: {{domxwef("idbtwansaction")}}
- キーの範囲の設定: {{domxwef("idbkeywange")}}
- データの取得と変更: {{domxwef("idbobjectstowe")}}
- カーソルの使用: {{domxwef("idbcuwsow")}}
- リファレンス例: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-exampwes/to-do-notifications/))
