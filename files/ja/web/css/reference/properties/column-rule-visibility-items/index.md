---
title: CSS `column-rule-visibility-items` プロパティ
short-title: column-rule-visibility-items
slug: Web/CSS/Reference/Properties/column-rule-visibility-items
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{SeeCompatTable}}

**`column-rule-visibility-items`** は [CSS](/ja/docs/Web/CSS) のプロパティで、空の領域に隣接する隙間に、列・段間の罫線の区間を描画するかどうかを定義します。

{{InteractiveExample("CSS Demo: column-rule-visibility-items")}}

```css interactive-example-choice
column-rule-visibility-items: all;
```

```css interactive-example-choice
column-rule-visibility-items: around;
```

```css interactive-example-choice
column-rule-visibility-items: between;
```

```css interactive-example-choice
column-rule-visibility-items: normal;
```

```html interactive-example
<section id="default-example">
  <section id="example-element">
    <p>One fish</p>
    <p>Two fish</p>
    <p>Red fish</p>
    <p>Blue fish</p>
    <cite>-- Dr. Seuss</cite>
  </section>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  column-rule: solid 5px red;
  gap: 10px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
cite {
  grid-row: 3;
  grid-column: 3;
}
```

## 構文

```css
/* キーワード */
column-rule-visibility-items: all;
column-rule-visibility-items: around;
column-rule-visibility-items: between;
column-rule-visibility-items: normal;

/* グローバル値 */
column-rule-visibility-items: inherit;
column-rule-visibility-items: initial;
column-rule-visibility-items: revert;
column-rule-visibility-items: revert-layer;
column-rule-visibility-items: unset;
```

### 値

- `all`
  - : 隣接する領域にアイテムが含まれているかどうかに関わらず、すべての隙間の区間に列・段間の罫線を引きます。

- `around`
  - : 隣接する 2 つの領域のうち、少なくとも 1 つがアイテムで占められている場合、その隙間の区間には列・段間の罫線を引きます。

- `between`
  - : 隣接する 2 つの領域が両方ともアイテムで占められている場合のみ、その間の区間には列・段間の罫線を引きます。

- `normal`
  - : グリッドコンテナーの場合、`all` と同じ動作をします。段組みレイアウトの場合は、`between` と同じ動作をします。これがデフォルトの設定です。

## 解説

`column-rule-visibility-items` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)および[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)コンテナーで複数の列がある場合、空の領域に隣接する列の隙間に列・段間罫線の区間を描画するかどうかを定義します。

`column-rule-visibility-items` と {{cssxref("row-rule-visibility-items")}} プロパティの両方を {{cssxref("rule-visibility-items")}} 一括指定を使用して設定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、隣接するグリッド領域のうち少なくとも 1 つにグリッドアイテムが含まれている場合、2 つのグリッド領域の間に罫線が描画されるよう列間罫線を定義します。

#### HTML

ここでは、ダイナミックなスポーツ・デュオの一覧を記載しています。

```html
<ol>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ol>
```

#### CSS

順序付きリスト ({{htmlelement("ol")}}) をグリッドコンテナーとして定義し、{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} プロパティの両方を `repeat(4, 1fr)` に設定して 4 列 4 行のグリッドを生成し、{{cssxref("grid-column")}} および {{cssxref("grid-row")}} プロパティを使用して、最後のアイテムを右下のグリッド領域に移動させます。{{cssxref("gap")}} を `20px` に指定し、`5px` の破線の罫線が収まるよう、列間に十分な空間を提供します。

最後に、`column-rule-visibility-items` を `between` に設定しました。これにより、隣接する両方のグリッド領域にグリッドアイテムが含まれている場合にのみ、列間に罫線が描画されるようになります。

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  column-rule: dashed 5px blue;
  column-rule-visibility-items: between;
}
li:last-child {
  grid-row: 4;
  grid-column: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (column-rule-visibility-items: around) {
    body::before {
      content: "このブラウザーは column-rule-visibility-items プロパティに対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "230")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("rule-visibility-items")}} 一括指定
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("column-rule")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
