---
title: table-layout
slug: Web/CSS/Reference/Properties/table-layout
original_slug: Web/CSS/table-layout
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`table-layout`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{htmlelement("table")}} のセル、行、列のレイアウトに使用されるアルゴリズムを設定します。

{{InteractiveExample("CSS デモ: table-layout")}}

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
      <th>名前</th>
      <th>場所</th>
    </tr>
    <tr>
      <td>ライオン</td>
      <td>アフリカ</td>
    </tr>
    <tr>
      <td>ノルウェーレミング</td>
      <td>ヨーロッパ</td>
    </tr>
    <tr>
      <td>アザラシ</td>
      <td>南極</td>
    </tr>
    <tr>
      <td>トラ</td>
      <td>アジア</td>
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
table-layout: revert;
table-layout: revert-layer;
table-layout: unset;
```

### 値

- `auto`
  - : 自動表レイアウトアルゴリズムが使用されます。表とそのセルの幅は、コンテンツに合わせて調整されます。ほとんどのブラウザーは、既定でこのアルゴリズムを使用しています。

- `fixed`
  - : 固定表レイアウトアルゴリズムが使用されます。このキーワードを使用する場合、表の幅は [`width`](/ja/docs/Web/CSS/Reference/Properties/width) プロパティを使用して明示的に指定する必要があります。width プロパティの値が auto に設定されているか、指定されていない場合、ブラウザーは自動表レイアウトアルゴリズムを使用します。この場合、固定値は効果はありません。\
    固定表レイアウトアルゴリズムは、表の水平方向のレイアウトが表の幅、列の幅、および境界線またはセル間隔のみに依存するため、自動レイアウトアルゴリズムよりも高速です。水平方向のレイアウトは、明示的に設定された幅のみに依存するため、セルのコンテンツには依存しません。

    固定表レイアウトアルゴリズムでは、各列の幅は次のように決定されます。
    - 明示的な幅を持つ列要素は、その列の幅を設定します。
    - それ以外の場合、明示的な幅が指定されている 1 行目のセルがその列の幅を決定します。
    - それ以外の場合、列は共通の残りの水平空間から幅を取得します。

    このアルゴリズムを使用すると、表の最初の行がダウンロードされ、解釈されると、表全体がレンダリングされます。これにより、「自動」レイアウトメソッドよりもレンダリング時間が短縮されます。ただし、その後のセルコンテンツは、指定された列幅に収まらない場合があります。セルは、 {{Cssxref("overflow")}} プロパティを使用して、オーバーフローしたコンテンツをクリップするかどうかを決定します。ただし、これは表の幅が既知の場合に限ります。それ以外の場合は、セルからオーバーフローすることはありません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 固定幅の表に text-overflow を付けた場合

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

- [`<table>`](/ja/docs/Web/HTML/Reference/Elements/table)
- [CSS 表](/ja/docs/Web/CSS/Guides/Table)モジュール
