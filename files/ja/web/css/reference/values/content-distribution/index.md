---
title: <content-distribution>
slug: Web/CSS/Reference/Values/content-distribution
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

The **`<content-distribution>`** は{{glossary("enumerated", "列挙型")}}の値型で、{{cssxref("justify-content")}} および {{cssxref("align-content")}} プロパティ、それに {{cssxref("place-content")}} 一括指定で使用され、コンテナーの{{glossary("alignment subject", "配置対象物")}}の間の余白を分配するために使用されます。

## 構文

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## 値

次のキーワード値を `<content-distribution>` 構文用語が表します。

- `space-between`
  - : {{glossary("alignment subject", "配置対象物")}}を{{glossary("alignment container", "配置コンテナー")}}内で均等に分散配置します。最初のアイテムは配置コンテナーの先頭の端にぴったりと配置され、最後のアイテムは配置コンテナーの末尾の端にぴったりと配置され、残りのアイテムは均等に分散されるため、隣接する任意の 2 つのアイテム同士の空間は同じになります。`space-between` のデフォルトの代替配置は、フレックスレイアウトでは `safe flex-start`、それ以外の場合は `start` です。アイテムが 1 つのみである場合、そのアイテムは先頭の端に揃えられます。

- `space-around`
  - : アイテムはコンテナー内で均等に配置され、両端に半分の大きさの空間が確保されます。隣接する 2 つのアイテム同士の間隔は均一で、最初のアイテムの前と最後のアイテムの後の間隔は、それ以外の間隔の半分の大きさになります。`space-around` のデフォルトの代替配置は `safe center` です。コンテナーに子要素が 1 つしかない場合、アイテムは中央に配置されます。

- `space-evenly`
  - : アイテムはコンテナー内で均等に配置され、両端には同じサイズの空間が確保されます。 隣接する 2 つのアイテム間、最初のアイテムの 前、最後のアイテムの後の間隔はすべて同じです。 `space-evenly` のデフォルトの代替配置は `safe center` です。 コンテナーに子要素が 1 つしかない場合、アイテムは中央に配置されます。

- `stretch`
  - : アイテムの合計サイズがコンテナーのサイズより小さい場合、伸長できるアイテムは {{cssxref("max-height")}}、{{cssxref("max-width")}}、または同等の機能によって課された制約を遵守しつつ、等間隔（比例ではなく）にサイズが拡大され、アイテムの合計サイズがコンテナーを正確に埋めるように調整されます。`stretch` のデフォルトの代替配置は、フレックスボックスでは `flex-start`、それ以外のレイアウトモードでは `start` です。アイテムが 1 つだけで、そのアイテムが伸長可能な場合、コンテナーを埋めるまで伸長されます。

## 仕様書

{{Specifications}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- その他のボックス配置データ型: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, and {{cssxref("self-position")}}
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
