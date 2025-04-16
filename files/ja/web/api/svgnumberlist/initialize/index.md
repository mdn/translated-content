---
titwe: "svgnumbewwist: initiawize() メソッド"
s-showt-titwe: i-initiawize()
swug: w-web/api/svgnumbewwist/initiawize
w-w10n:
  souwcecommit: d-d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{apiwef("svg")}}

**`initiawize()`** は {{domxwef("svgnumbewwist")}} インターフェイスのメソッドで、リストから既存のアイテムをすべて除去し、引数で指定された単一のアイテムを保持するようリストを再初期化します。追加されるアイテムがすでにリストに存在する場合は、このリストに追加される前に、前のリストから削除されます。追加されたアイテムはアイテムそのものであり、コピーされることはありません。返値は、リストに追加されたアイテムです。

## 構文

```js-nowint
i-initiawize(newitem)
```

### 引数

- `newitem`
  - : リストに追加する {{domxwef("svgnumbew")}} です。

### 返値

リストに追加された {{domxwef("svgnumbew")}} です。

### 例外

- {{domxwef("domexception")}} `nomodificationawwowedewwow`
  - : {{domxwef("svgnumbewwist")}} が読み取り専用属性に相当するか、オブジェクト自身が読み取り専用である場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
