---
title: HTMLElement.offsetParent
slug: Web/API/HTMLElement/offsetParent
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - プロパティ
  - リファレンス
browser-compat: api.HTMLElement.offsetParent
translation_of: Web/API/HTMLElement/offsetParent
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetParent`** は読み取り専用プロパティで、要素を含む最も近くにある（包含階層で最も近い）位置指定されたオブジェクトへの参照を返します。要素が位置指定されていない（静的位置指定の）場合、最も近い祖先である `td`, `th`, `table` を返し、表要素の祖先がない場合は `body` を返します。

> **Note:** 次の状況では、`offsetParent` は `null` を返します。
>
> - 要素またはその親要素の `display` プロパティが `none` に設定されている。
> - 要素の `position` プロパティが `fixed` (固定位置指定) に設定されている (Firefox は `<body>` を返します)。
> - 要素が `<body>` または `<html>` 要素である。

`offsetParent` が有用なのは、 {{domxref("HTMLElement.offsetTop","offsetTop")}} と {{domxref("HTMLElement.offsetLeft","offsetLeft")}} がパディング辺からの相対だからです。

## 値

現在の要素がオフセットされている要素へのオブジェクト参照です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
