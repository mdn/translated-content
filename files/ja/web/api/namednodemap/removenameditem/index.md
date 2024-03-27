---
title: NamedNodeMap.removeNamedItem()
slug: Web/API/NamedNodeMap/removeNamedItem
l10n:
  sourceCommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{APIRef("DOM")}}

**`removeNamedItem()`** は {{domxref("NamedNodeMap")}} インターフェイスのメソッドで、指定された名前に対応する {{domxref("Attr")}} をマップから取り除きます。

## 構文

```js
removeNamedItem(attrName);
```

### 引数

- `attrName`
  - : マップから取り除く属性の名前。

### 返値

取り除かれた {{domxref("Attr")}}。

### 例外

- `NotFoundError` {{domxref("DOMException")}}
  - : 指定された名前の属性がなかった場合に発生します。

## 例

```html
<pre test="testValue"></pre>
```

```js
const pre = document.getElementsByTagName("pre")[0];
const attrMap = pre.attributes;

let result = `The 'test' attribute initially contains '${attrMap["test"].value}'.\n`;

result += "We remove it.\n\n";
attrMap.removeNamedItem("test");

if (attrMap.getNamedItem("test")) {
  result += "And 'test' still exists.";
} else {
  result += "And 'test' is no more to be found.";
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
