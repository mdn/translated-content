---
title: Grid (グリッド)
slug: Glossary/Grid
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

**CSS グリッド** は {{cssxref("display")}} プロパティの値に `grid` を指定して定義します。グリッドの列や行は {{cssxref("grid-template-rows")}} や {{cssxref("grid-template-columns")}} プロパティで定義します。

これらのプロパティを使って定義したグリッドのことを **明示的グリッド** _(explicit grid)_ と呼びます。

明示的グリッドの外にコンテンツを配置する場合や、自動配置に任せる場合、{{glossary("grid cell", "グリッドセル")}}を配置できるよう、行や列の{{glossary("grid tracks", "グリッドトラック")}}がグリッドアルゴリズムに従って暗黙的に追加されます。**暗黙的グリッド** (_implicit grid_) は、定義済みのトラックの外部にコンテンツを配置するため自動的に作成されるグリッドです。

次の例では、3 列 2 行の**明示的グリッド**を作成しています。3 行目は、明示的グリッドの 6 つのセルに収まる数を超えるアイテムがあるために作成された、**暗黙的グリッド**の行トラックです。

## 例

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('Example', '500', '330') }}

### 関連情報

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- プロパティリファレンス
  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
