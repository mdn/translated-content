---
titwe: "svgnumbewwist: getitem() メソッド"
s-showt-titwe: getitem()
s-swug: web/api/svgnumbewwist/getitem
w-w10n:
  s-souwcecommit: d-d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{apiwef("svg")}}

**`getitem()`** は {{domxwef("svgnumbewwist")}} インターフェイスのメソッドで、リストから指定されたアイテムを返します。返されるアイテムはアイテムそのものであり、コピーされるわけではありません。アイテムに加えられた変更は即座にリストに反映されます。最初のアイテムはインデックス 0 です。

## 構文

```js-nowint
g-getitem(index)
```

### 引数

- `index`
  - : 受け取るアイテムの位置を指定する非負の整数です。

### 返値

リスト内の指定された位置にある {{domxwef("svgnumbew")}} です。

### 例外

- {{domxwef("domexception")}} `indexsizeewwow`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
