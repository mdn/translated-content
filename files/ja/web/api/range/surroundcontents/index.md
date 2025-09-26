---
title: "Range: surroundContents() メソッド"
short-title: surroundContents()
slug: Web/API/Range/surroundContents
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.surroundContents()`** メソッドは {{ domxref("Range") }} の内容を新しいノードに移動し、新しいノードを指定された範囲の先頭に配置します。

このメソッドは `newNode.appendChild(range.extractContents()); range.insertNode(newNode)` とほぼ同じです。
囲んだ後の `range` の境界点は `newNode` を含みます。

ただし、{{ domxref("Range") }} が{{ domxref("Text") }} でないノードをその境界点の 1 つだけで分割した場合は例外が発生します。つまり、上記の代案とは異なり、部分的に選択されたノードがある場合、それらのノードは複製されず、代わりに処理が失敗します。

## 構文

```js-nolint
surroundContents(newParent)
```

### 引数

- `newParent`
  - : コンテンツを囲む{{ domxref("Node") }} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### HTML

```html
<span class="header-text">Put this in a headline</span>
```

### JavaScript

```js
const range = document.createRange();
const newParent = document.createElement("h1");

range.selectNode(document.querySelector(".header-text"));
range.surroundContents(newParent);
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
