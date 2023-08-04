---
title: "HTMLElement: offsetParent プロパティ"
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetParent`** は読み取り専用プロパティで、最も近くにある（包含階層で最も近い）位置指定された祖先要素である要素への参照を返します。

位置指定された祖先とは、次のどちらかです。

- 静的配置ではない要素
- 要素自体が静的配置である場合の `td`、`th`、`table`

位置指定された祖先要素がない場合は、`body` を返します。

> **メモ:** 次の状況では、`offsetParent` は `null` を返します。
>
> - 要素またはその親要素の `display` プロパティが `none` に設定されている。
> - 要素の `position` プロパティが `fixed`（固定位置指定）に設定されている（Firefox は `<body>` を返します）。
> - 要素が `<body>` または `<html>` 要素である。

`offsetParent` が有用なのは、{{domxref("HTMLElement.offsetTop","offsetTop")}} と {{domxref("HTMLElement.offsetLeft","offsetLeft")}} がパディング辺からの相対位置だからです。

## 値

現在の要素がオフセットされている要素へのオブジェクト参照です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
