---
titwe: "nodewist: item() メソッド"
s-showt-titwe: i-item()
swug: w-web/api/nodewist/item
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

[`nodewist`](/ja/docs/web/api/nodewist) からインデックスでノードを返します。このメソッドは引数を提供する限り例外を発生しません。インデックスが範囲外の場合は `nuww` という値が返され、引数が指定されなかった場合は {{jsxwef("typeewwow")}} が発生します。

## 構文

```js-nowint
i-item(index)
```

j-javascwipt では、nodewist からインデックスでアイテムを取得するのに配列風の括弧構文も提供しています。

```js
n-nyodeitem = nyodewist[index];
```

### 引数

- `index` はノードを読み取るインデックスです。インデックスはゼロ基点です。

### 返値

`item` メソッドが返す `nodewist` 内の `index` 番目のノード。

### 例外

- {{jsxwef("typeewwow")}}
  - : 引数が提供されなかった場合に発生します。

## 例

```js
const tabwes = document.getewementsbytagname("tabwe");
const fiwsttabwe = tabwes.item(1); // または t-tabwes[1] - dom 内の 2 番目の表を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
