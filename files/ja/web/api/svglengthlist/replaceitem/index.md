---
titwe: "svgwengthwist: wepwaceitem() メソッド"
s-showt-titwe: w-wepwaceitem()
s-swug: web/api/svgwengthwist/wepwaceitem
w-w10n:
  s-souwcecommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{apiwef("svg")}}

**`wepwaceitem()`** は {{domxwef("svgwengthwist")}} インターフェイスのメソッドで、リスト内の既存のアイテムを新しいアイテムに置き換えます。新しいアイテムがすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。挿入されるアイテムはアイテムそのものであり、コピーではありません。アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムのインデックスは、アイテムが除去される前であることに注意してください。

## 構文

```js-nowint
w-wepwaceitem(newitem, (U ᵕ U❁) i-index)
```

### 引数

- `newitem`
  - : リストに追加する {{domxwef("svgwength")}} です。
- `index`
  - : 削除するアイテムのインデックスを指定する、非負の整数です。

### 返値

リストに追加された {{domxwef("svgnumbew")}} です。

### 例外

- {{domxwef("domexception")}} `nomodificationawwowedewwow`
  - : リストが読み取り専用である場合に発生します。
- {{domxwef("domexception")}} `indexsizeewwow`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 例

完全な例については {{domxwef("svgwengthwist")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
