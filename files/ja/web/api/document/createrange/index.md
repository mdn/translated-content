---
title: Document.createRange()
slug: Web/API/Document/createRange
---

{{APIRef("DOM")}}

**`Document.createRange()`** メソッドは、新しい {{domxref("Range")}} オブジェクトを返します。

## 構文

```
range = document.createRange();
```

_range_ は生成された {{domxref("Range")}} オブジェクトです。

## 例

```js
let range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## 注

`Range` を生成したあと、大部分のメソッドを使用するには境界を設定する必要があります。

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('DOM WHATWG', '#dom-document-createrange', 'document.createRange')}} | {{Spec2('DOM WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}
