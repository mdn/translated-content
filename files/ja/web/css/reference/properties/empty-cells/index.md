---
title: empty-cells
slug: Web/CSS/Reference/Properties/empty-cells
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

**`empty-cells`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{htmlelement("table", "表")}}のセルが目に見えるコンテンツを持たない場合に、周囲の境界と背景を描画するかどうかを指定します。

このプロパティは、 {{cssxref("border-collapse")}} プロパティが `separate` であった場合のみ効果があります。

{{InteractiveExample("CSS デモ: empty-cells")}}

```css interactive-example-choice
empty-cells: show;
```

```css interactive-example-choice
empty-cells: hide;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tbody>
      <tr>
        <th>顧客名</th>
        <th>年齢</th>
      </tr>
      <tr>
        <td></td>
        <td>25</td>
      </tr>
      <tr>
        <td>Louise Q.</td>
        <td></td>
      </tr>
      <tr>
        <td>Owen B.</td>
        <td></td>
      </tr>
      <tr>
        <td>Stan L.</td>
        <td>71</td>
      </tr>
    </tbody>
  </table>
</section>
```

```css interactive-example
th,
td {
  border: 2px solid #aa1199;
  padding: 0.25rem 0.5rem;
}
```

## 構文

```css
/* キーワード値 */
empty-cells: show;
empty-cells: hide;

/* グローバル値 */
empty-cells: inherit;
empty-cells: initial;
empty-cells: revert;
empty-cells: revert-layer;
empty-cells: unset;
```

`empty-cells` プロパティは、以下のキーワード値のうちの一つで指定します。

### 値

- `show`
  - : 通常のセルのように、境界や背景を描くことを示すキーワードです。
- `hide`
  - : 境界や背景を描かないことを示すキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 表の空のセルの表示・非表示

#### HTML

```html
<table class="table_1">
  <tbody>
    <tr>
      <td>Moe</td>
      <td>Larry</td>
    </tr>
    <tr>
      <td>Curly</td>
      <td></td>
    </tr>
  </tbody>
</table>
<br />
<table class="table_2">
  <tbody>
    <tr>
      <td>Moe</td>
      <td>Larry</td>
    </tr>
    <tr>
      <td>Curly</td>
      <td></td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.table_1 {
  empty-cells: show;
}

.table_2 {
  empty-cells: hide;
}

td,
th {
  border: 1px solid gray;
  padding: 0.5rem;
}
```

#### 結果

{{ EmbedLiveSample('表の空のセルの表示・非表示', '100%', '200') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border-collapse")}}
- [学習: 表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)
- [CSS 表](/ja/docs/Web/CSS/Guides/Table)モジュール
