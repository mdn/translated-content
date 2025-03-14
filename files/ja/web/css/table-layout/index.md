---
title: table-layout
slug: Web/CSS/table-layout
---

{{CSSRef}}

**`table-layout`** は CSS のプロパティで、{{htmlelement("table")}} のセル、行、列のレイアウトに使用されるアルゴリズムを設定します。

{{InteractiveExample("CSS Demo: table-layout")}}

```css interactive-example-choice
table-layout: auto;
width: 150px;
```

```css interactive-example-choice
table-layout: fixed;
width: 150px;
```

```css interactive-example-choice
table-layout: auto;
width: 100%;
```

```css interactive-example-choice
table-layout: fixed;
width: 100%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tr>
      <th>Name</th>
      <th>Location</th>
    </tr>
    <tr>
      <td>Lion</td>
      <td>Africa</td>
    </tr>
    <tr>
      <td>Norwegian Lemming</td>
      <td>Europe</td>
    </tr>
    <tr>
      <td>Seal</td>
      <td>Antarctica</td>
    </tr>
    <tr>
      <td>Tiger</td>
      <td>Asia</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  border: 1px solid #139;
}

th,
td {
  border: 2px solid #a19;
  padding: 0.25rem 0.5rem;
}
```

## 構文

```css
/* キーワード値 */
table-layout: auto;
table-layout: fixed;

/* グローバル値 */
table-layout: inherit;
table-layout: initial;
table-layout: unset;
```

### 値

- `auto`
  - : 既定値で、ほとんどのブラウザーが表の自動レイアウトアルゴリズムを使用します。表とセルの幅は中身に合うように調整されます。
- `fixed`

  - : 表と列の幅は `table` 要素と `col` 要素の幅によって、または最初の行のセルの幅によって設定されます。後続する行のセルは列の幅に影響しません。

    「固定」("fixed") レイアウト方式においては、表の 1 行目がダウンロードされ解析された時点で表全体がレンダリングできるようになります。これは「自動」レイアウト方式よりもレンダリング時間を高速にすることができますが、後続するセルのコンテンツが列の幅に合わなくなる可能性があります。各セルでは表の幅が分かっている場合、{{Cssxref("overflow")}} プロパティを使用して、はみ出すコンテンツを切り取るかどうかを決めます。それ以外の場合、セルからはみ出すことはありません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Fixed-width_tables_with_text-overflow">固定幅の表に text-overflow を付けた場合</h3>

この例は表の固定レイアウトを使用し、{{cssxref("width")}} プロパティとの組み合わせで、表の幅を制限しています。{{cssxref("text-overflow")}} プロパティを使用して、語が長すぎる場合は省略記号を使用するようにしています。表のレイアウトが `auto` である場合、表は指定された `width` よりも内容に合わせて広がります。

#### HTML

```html
<table>
  <tr>
    <td>Ed</td>
    <td>Wood</td>
  </tr>
  <tr>
    <td>Albert</td>
    <td>Schweitzer</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Fonda</td>
  </tr>
  <tr>
    <td>William</td>
    <td>Shakespeare</td>
  </tr>
</table>
```

#### CSS

```css
table {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

#### 結果

{{EmbedLiveSample('Fixed-width_tables_with_text-overflow')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<table>`](/ja/docs/Web/HTML/Element/table)
