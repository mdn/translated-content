---
title: NamedNodeMap.getNamedItem()
slug: Web/API/NamedNodeMap/getNamedItem
l10n:
  sourceCommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{APIRef("DOM")}}

**`getNamedItem()`** は {{domxref("NamedNodeMap")}} インターフェイスのメソッドで、指定された名前に対応する {{domxref("Attr")}} を返します。対応する属性がない場合は `null` を返します。

> **メモ:** このメソッドは、 `[]` 演算子の構文を使用した場合にも呼び出されます。
> そのため `str` が文字列の場合、 `myMap[str]` は `myMap.getNamedItem(str)` と同じです。

## 構文

```js
getNamedItem(name);
[name];
```

### 引数

- `name`
  - : 文字列で、希望する属性の名前です。

### 返値

引数で指定された `name` に対応する {{domxref("Attr")}} です。見つからない場合は `null` です。

## 例

```html
<pre test="test"></pre>
```

```js
const pre = document.getElementsByTagName("pre")[0];
const attrMap = pre.attributes;

let result = `The 'test' attribute contains ${
  attrMap.getNamedItem("test").value
}\n`;
if (attrMap["boum"]) {
  result += "And 'boum' has been found.";
} else {
  result += "And 'boum' has not been found.";
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 80)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
