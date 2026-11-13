---
title: <baseline-position>
slug: Web/CSS/Reference/Values/baseline-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`<baseline-position>`** は{{glossary("enumerated", "列挙型")}}の値型で、`baseline` キーワード値と `first` および `last` の修飾子を表し、{{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("align-self")}}、{{cssxref("justify-items")}}、{{cssxref("justify-self")}} の各プロパティと、{{cssxref("place-content")}}、{{cssxref("place-items")}}、{{cssxref("place-self")}} の一括指定プロパティで使用されます。

`first` と `last` の値はボックスにベースライン配置の設定を指定します。修飾子が省略された場合、デフォルトは `first` です。

## 構文

```plain
<baseline-position> = [ first | last ]? && baseline
```

## 値

`<baseline-position>` 列挙型の値型は、オプションの `first` または `last` 修飾子と共に `baseline` 値を使用して指定されます。ボックスが共有配置コンテキストに属していない場合、代替配置が使用されます。代替配置は、その{{glossary("alignment container", "配置コンテナー")}}内のベースライン共有グループを揃えるためにも使用されます。

- `baseline`
  - : 以下で定義されている `first baseline` が計算値となります。

- `first baseline`
  - : ボックスの最初のベースラインセットのベースライン配置を、ベースライン共有グループの対応するベースラインに合わせて配置します。代替配置は、自己配置の場合は `safe self-start`、コンテンツ分配の場合は `safe start` です。

- `last baseline`
  - : ボックスの最後のベースラインセットのベースライン配置を、ベースライン共有グループの対応するベースラインに合わせて配置します。代替配置は、自己配置の場合は `safe self-end`、コンテンツ分配の場合は `safe end` です。

## 仕様書

{{Specifications}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}
- その他のボックス配置データ型: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, {{cssxref("self-position")}}
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
