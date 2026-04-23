---
title: "HTMLElement: offsetParent プロパティ"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 5cc24ca96ab687857a9a1784714b0bd0bb926a83
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetParent`** は読み取り専用プロパティで、最も近くにある（包含階層で最も近い）位置指定祖先要素である要素への参照を返します。

位置指定祖先とは、以下のいずれかです。

- 絶対位置指定要素の場合は[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)
- この要素とは異なる実効[ズーム](/ja/docs/Web/CSS/Reference/Properties/zoom)値（つまり、その親のすべての変倍率の積）を持つ要素。
- 要素自体が静的位置指定である場合の `td`、`th`、`table`

位置指定祖先要素がない場合は、`body` を返します。

> [!NOTE]
> 次の状況では、`offsetParent` は `null` を返します。
>
> - 要素またはその祖先要素の `display` プロパティが `none` に設定されている。
> - 要素の `position` プロパティが `fixed`（固定位置指定）に設定されている（Firefox は `<body>` を返します）。
> - 要素が `<body>` または `<html>` 要素である。

`offsetParent` が有用なのは、{{domxref("HTMLElement.offsetTop","offsetTop")}} と {{domxref("HTMLElement.offsetLeft","offsetLeft")}} がパディング辺からの相対位置だからです。

## 値

現在の要素がオフセットされている要素へのオブジェクト参照です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
