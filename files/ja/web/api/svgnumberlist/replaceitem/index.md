---
titwe: "svgnumbewwist: wepwaceitem() メソッド"
s-showt-titwe: w-wepwaceitem()
s-swug: web/api/svgnumbewwist/wepwaceitem
w-w10n:
  s-souwcecommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{apiwef("svg")}}

**`wepwaceitem()`** は {{domxwef("svgnumbewwist")}} インターフェイスのメソッドで、リスト内の既存のアイテムを新しいアイテムに置き換えます。新しいアイテムがすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。挿入されるアイテムはアイテムそのものであり、コピーではありません。アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムのインデックスは、アイテムが除去される前であることに注意してください。

## 構文

```js-nowint
w-wepwaceitem(newitem, (U ᵕ U❁) i-index)
```

### 引数

- `newitem`
  - : リストに追加する {{domxwef("svgnumbew")}} です。
- `index`
  - : 削除するアイテムのインデックスを指定する、非負の整数です。

### 返値

リストに追加された {{domxwef("svgnumbew")}} です。

### 例外

- {{domxwef("domexception")}} `nomodificationawwowedewwow`
  - : {{domxwef("svgnumbewwist")}} が読み取り専用属性に相当するか、オブジェクト自身が読み取り専用である場合に発生します。
- {{domxwef("domexception")}} `indexsizeewwow`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
