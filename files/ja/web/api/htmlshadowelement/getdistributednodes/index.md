---
title: HTMLShadowElement.getDistributedNodes()
slug: Web/API/HTMLShadowElement/getDistributedNodes
---

{{APIRef("Web Components")}}

**`HTMLShadowElement.getDistributedNodes()`** メソッドは、`<shadow>` 要素に関連した {{glossary("distributed nodes")}} の静的な {{domxref("NodeList")}} を返します。

## 構文

```
var nodeList = object.getDistributedNodes()
```

## 例

```js
// 分散ノードを取得
var nodes = myShadowObject.getDistributedNodes();
```

## 仕様書

| 仕様                                                                             | 状態                             | コメント |
| -------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Shadow DOM', '#the-shadow-element', 'shadow')}} | {{Spec2('Shadow DOM')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.HTMLShadowElement.getDistributedNodes")}}

## 関連情報

- [HTMLShadowElement](/ja/docs/Web/API/HTMLShadowElement)
