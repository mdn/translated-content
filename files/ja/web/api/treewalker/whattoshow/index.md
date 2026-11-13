---
title: "TreeWalker: whatToShow プロパティ"
short-title: whatToShow
slug: Web/API/TreeWalker/whatToShow
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
---

{{ APIRef("DOM") }}

**`TreeWalker.whatToShow`** 読み取り専用のプロパティは、表示する[ノード](/ja/docs/Web/API/Node)の種類を示すビットマスクを返します。条件に一致しないノードはスキップされますが、関連する場合、その子ノードを含むことができます。

## 値

非負の整数。取り得る値の一覧については、[`document.createTreeWalker()`](/ja/docs/Web/API/Document/createTreeWalker#whattoshow) を参照してください。

## 例

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_COMMENT + NodeFilter.SHOW_TEXT,
  { acceptNode: (node) => NodeFilter.FILTER_ACCEPT },
  false,
);
if (
  treeWalker.whatToShow === NodeFilter.SHOW_ALL ||
  treeWalker.whatToShow % (NodeFilter.SHOW_COMMENT * 2) >=
    NodeFilter.SHOW_COMMENT
) {
  // treeWalker はコメントを表示する
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TreeWalker")}} インターフェイス
