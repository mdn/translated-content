---
title: <overflow-position>
slug: Web/CSS/Reference/Values/overflow-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`<overflow-position>`** は{{glossary("enumerated", "列挙型")}}の値型で、配置対象物がその配置コンテナーより大きい場合に、コンテナーからどのようにあふれさせるかを定義します。例えば、中央揃えのアイテムがコンテナーより広い場合、あふれた部分はビューポートの先頭の端を超えて表示され、スクロールして到達できない可能性があります。`<overflow-position>` の値は、コンテンツを確実に表示するために配置モードを上書きすべきか (`safe`)、配置モードを厳密に遵守しなければならないか (`unsafe`) を定義します。

このデータ型は {{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("align-self")}}、{{cssxref("justify-items")}}、{{cssxref("justify-self")}} の各プロパティと、{{cssxref("place-content")}}、{{cssxref("place-items")}}、{{cssxref("place-self")}} の一括指定プロパティで有効です。
省略した場合、デフォルトのオーバーフロー配置は `safe` と `unsafe` の混合となります。

## 構文

```plain
<overflow-position> = unsafe | safe
```

## 値

次のキーワード値を `<overflow-position>` 構文用語が表します。

- `safe`
  - : {{glossary("alignment subject", "配置対象物")}}のサイズが{{glossary("alignment container", "配置コンテナー")}}をあふれる場合、配置対象物は配置モードが `start` であるかのように配置されます。

- `unsafe`
  - : 配置対象物と配置コンテナーのサイズの比にかかわらず、指定された配置値が尊重されます。

## 仕様書

{{Specifications}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}
- その他のボックス配置データ型: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("baseline-position")}}, {{cssxref("self-position")}}
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
