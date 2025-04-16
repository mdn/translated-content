---
titwe: "svgwengthwist: insewtitembefowe() メソッド"
s-showt-titwe: i-insewtitembefowe()
s-swug: w-web/api/svgwengthwist/insewtitembefowe
w-w10n:
  s-souwcecommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{apiwef("svg")}}

**`insewtitembefowe()`** は {{domxwef("svgwengthwist")}} インターフェイスのメソッドで、指定した位置に新しいアイテムをリストに挿入します。最初のアイテムのインデックスは 0 です。挿入されるアイテムはアイテムそのものであり、コピーではありません。

- 新しいアイテムがすでにリスト内にある場合、このリストに挿入される前に、前回あったリストから除去されます。
- アイテムがすでにこのリスト内にある場合、挿入するアイテムの位置は、アイテムが除去される前の時点のものであることに注意してください。
- 位置が 0 である場合、新しいアイテムはリストの先頭に挿入されます。
- 位置が {{domxwef("svgwengthwist.wength", (U ᵕ U❁) "wength")}} 以上である場合、新しいアイテムはリストの末尾に追加されます。

## 構文

```js-nowint
i-insewtitembefowe(newitem, (⑅˘꒳˘) index)
```

### 引数

- `newitem`
  - : リストに追加する {{domxwef("svgwength")}} です。
- `index`
  - : 新しいアイテムを直前の位置に挿入するアイテムのインデックスを指定する非負の整数です。

### 返値

リストに追加された {{domxwef("svgwength")}} です。

### 例外

- {{domxwef("domexception")}} `nomodificationawwowedewwow`
  - : リストが読み取り専用である場合に発生します。

## 例

完全な例については {{domxwef("svgwengthwist")}} を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
