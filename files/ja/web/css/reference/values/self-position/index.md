---
title: <self-position>
slug: Web/CSS/Reference/Values/self-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

The **`<self-position>`** は{{glossary("enumerated", "列挙型")}}の値データ型で、{{cssxref("justify-content")}} および {{cssxref("align-content")}} プロパティ、それに {{cssxref("place-self")}} 一括指定で使用され、ボックスのコンテンツを配置コンテナーの中に配置するために使用されます。これは {{cssxref("justify-items")}} および {{cssxref("align-items")}} プロパティや、 {{cssxref("place-items")}} 一括指定からも、デフォルト値を `justify-self` および `align-self` のデフォルト値を指定するために使用されます。

## 構文

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## 値

以下のキーワード値が `<self-position>` 文法用語で表されます。

- `center`
  - : {{glossary("alignment subject", "配置対象物")}}を{{glossary("alignment container", "配置コンテナー")}}内で中央揃えします。
- `start`
  - : 配置対象物を配置コンテナーの先頭の端に寄せて配置します。
- `end`
  - : 配置対象物を配置コンテナーの末尾の端に寄せて配置します。
- `self-start`
  - : 配置対象物を、配置対象物の先頭側に対応する配置コンテナーの端に寄せて配置します。
- `self-end`
  - : 配置対象物を、配置対象物の末尾側に対応する配置コンテナーの端に寄せて配置します。
- `flex-start`
  - : フレックスレイアウトでは、配置対象物を、フレックスコンテナーの主軸の先頭側 (main-start) または交差軸の先頭側 (cross-start) の適切な方に対応する配置コンテナーの端に寄せて配置します。フレックスレイアウト以外のレイアウトモードでは、`start` と同一です。
- `flex-end`
  - : フレックスレイアウトでは、配置対象物を、フレックスコンテナーの主軸の末尾側 (main-end) または交差軸の末尾側 (cross-end) の適切な方に対応する配置コンテナーの端に寄せて配置します。フレックスレイアウト以外のレイアウトモードでは、`end` と同一です。

> [!NOTE]
> `left` および `right` キーワードは、`<self-position>` から除外されています。これらは `justify-*` プロパティ ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, {{cssxref("justify-items")}}) の有効な位置の配置値であるものの、`align-*` プロパティ ({{cssxref("align-content")}}, {{cssxref("align-self")}}, {{cssxref("align-items")}}) では使用が許可されていないためです。代わりに、これらは `justify-*` プロパティの文法に明示的に含まれています。

## 仕様書

{{Specifications}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- その他のボックス配置データ型: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, {{cssxref("content-position")}}
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
