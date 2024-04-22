---
title: "Range: deleteContents() メソッド"
short-title: deleteContents()
slug: Web/API/Range/deleteContents
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.deleteContents()`** メソッドは {{ domxref("Range") }} のコンテンツを {{ domxref("Document") }} から取り除きます。

{{ domxref("Range.extractContents()") }} とは異なり、このメソッドは削除されたコンテンツを含む {{domxref("DocumentFragment")}} を返しません。

## 構文

```js-nolint
deleteContents()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
range.deleteContents();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
