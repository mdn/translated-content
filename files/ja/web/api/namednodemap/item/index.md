---
title: NamedNodeMap.item()
slug: Web/API/NamedNodeMap/item
l10n:
  sourceCommit: 7a45a40ff9c0a0de348c497b325e103aa6d875f8
---

{{APIRef("DOM")}}

**`item()`** は {{domxref("NamedNodeMap")}} インターフェイスのメソッドで、マップ内の指定された位置にある項目を返します。

> [!NOTE]
> このメソッドは、 `[]` 演算子の構文を使用した場合にも呼び出されます。
> そのため `i` が数値の場合、 `myMap[i]` は `myMap.item(i)` と同じです。

## 構文

```js
item(index);
[index];
```

### 引数

- `index`
  - : 返したい項目の位置を表す数値です。

### 返値

{{domxref("Attr")}} です。数値がマップの `length` 以上の場合は `null` です。

## 例

```html
<pre zero="test" one="test" two="test"></pre>
```

```js
const pre = document.getElementsByTagName("pre")[0];
const attrMap = pre.attributes;

pre.textContent = `The attribute map contains:
0: ${attrMap.item(0).name}
1: ${attrMap[1].name}
2: ${attrMap.item(2).name}`;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
