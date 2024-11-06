---
title: NamedNodeMap.removeNamedItemNS()
slug: Web/API/NamedNodeMap/removeNamedItemNS
l10n:
  sourceCommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{APIRef("DOM")}}

**`removedNamedItemNS()`** は {{domxref("NamedNodeMap")}} インターフェイスのメソッドで、指定された名前空間とローカル名に対応する {{domxref("Attr")}} をこのマップから取り除きます。

## 構文

```js
removeNamedItem(namespace, localName);
```

### 引数

- `namespace`

  - : このマップから取り除く属性の名前空間です。
    > **警告:** `namespace` は名前空間の URI であり、接頭辞ではありません。

- `localName`
  - : このマップから取り除く属性のローカル名です。

### 返値

取り除かれた {{domxref("Attr")}} です。

### 例外

- `NotFoundError` {{domxref("DOMException")}}
  - : 指定された名前空間とローカル名の属性がなかった場合に発生します。

## 例

```html hidden
<pre></pre>
```

```js
const parser = new DOMParser();
const xmlString =
  '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Beware!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const pre = document.getElementsByTagName("pre")[0];
const warning = doc.getElementsByTagName("warning")[0];
const attrMap = warning.attributes;

let result = `The 'ob:one' attribute initially contains '${attrMap["ob:one"].value}'.\n`;

result += "We remove it.\n\n";
attrMap.removeNamedItemNS("http://www.example.com/ob", "one");

if (attrMap["ob:one"]) {
  result += "And 'ob:one' still exists.";
} else {
  result += "And 'ob:one' is no more to be found.";
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
