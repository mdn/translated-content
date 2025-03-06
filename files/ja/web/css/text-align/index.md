---
title: text-align
slug: Web/CSS/text-align
l10n:
  sourceCommit: 199b1ab9210af2da7306f2a034c70980c5b873b5
---

{{CSSRef}}

**`text-align`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ブロック要素または表のセルボックス内におけるインラインレベルコンテンツの水平方向の配置を設定します。つまり、 {{cssxref("vertical-align")}} と同じように機能しますが、水平方向に機能します。

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## 構文

```css
/* キーワード値 */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: match-parent;

/* ブロック配置の値 (標準外の構文) */
text-align: -moz-center;
text-align: -webkit-center;

/* グローバル値 */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

`text-align` プロパティは、以下のいずれかの方法で指定します。

### 値

- `start`
  - : 書字方向が左から右の場合は `left`、右から左の場合は `right` と同じです。
- `end`
  - : 書字方向が左から右の場合は `right`、右から左の場合は `left` と同じです。
- `left`
  - : インラインコンテンツはラインボックスの左辺に寄せられます。
- `right`
  - : インラインコンテンツはラインボックスの右辺に寄せられます。
- `center`
  - : インラインコンテンツはラインボックス内で中央に寄せられます。
- `justify`
  - : インラインコンテンツは両端揃えになります。テキストは最終行を除いて、その左右の端がラインボックスの左右の端に揃うように間隔が空けられます。
- `match-parent`
  - : `inherit` と似ていますが、`start` と `end` の値は親要素の {{cssxref("direction")}} に従って計算されて、適切な `left` もしくは `right` の値で置き換えられます。

## アクセシビリティ

両端揃えによって生じる単語間の一貫性のない間隔は、ディスレクシアなどの認知的な懸念を持つ人々にとって問題となる可能性があります。

- [MDN WCAG を理解する - ガイドライン 1.4 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 先頭へ配置

#### HTML

```html live-sample___start_alignment
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css live-sample___start_alignment
.example {
  text-align: start;
  border: solid;
}
```

#### 結果

{{EmbedLiveSample("Start_alignment","100%","100%")}}

### 中央揃え

#### HTML

```html live-sample___centered_text
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css live-sample___centered_text
.example {
  text-align: center;
  border: solid;
}
```

#### 結果

{{EmbedLiveSample("Centered_text", "100%", "100%")}}

### "justify" を使用した例

#### HTML

```html live-sample___example_using_justify
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css live-sample___example_using_justify
.example {
  text-align: justify;
  border: solid;
}
```

#### 結果

{{EmbedLiveSample('Example using "justify"',"100%","100%")}}

### 表の配置

この例は、 `text-align` を {{htmlelement("table")}} 要素に使用したデモです。

- {{htmlelement("caption")}} は右揃えに設定されています。
- 最初の 2 つの {{htmlelement("th")}} 要素は、 {{htmlelement("thead")}} に設定された `text-align: left` から左揃えを継承していますが、3 番目は右揃えに設定されています。
- {{htmlelement("tbody")}} 要素の中では、最初の行は右揃えに設定されており、 2 行目は中央ぞろえ、 3 行目は既定値（左揃え）を設定しています。
- それぞれの行の中で、一部のセル (c12, c31) は行による配置をオーバーライドしています。

#### HTML

```html-nolint live-sample___table_alignment
<table>
  <caption>
    表の例
  </caption>
  <thead>
    <tr>
      <th>列 1</th>
      <th>列 2</th>
      <th class="right">列 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="right">
      <td>11</td>
      <td class="center">12</td>
      <td>13</td>
    </tr>
    <tr class="center">
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr id="r3">
      <td class="right">31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css live-sample___table_alignment
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}

thead {
  text-align: left;
}

td,
th {
  border: solid 1px black;
}

.center {
  text-align: center;
}

.right,
caption {
  text-align: right;
}
```

#### 結果

{{EmbedLiveSample('Table alignment', "100%", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
