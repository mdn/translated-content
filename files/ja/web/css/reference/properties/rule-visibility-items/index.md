---
title: CSS `rule-visibility-items` プロパティ
short-title: rule-visibility-items
slug: Web/CSS/Reference/Properties/rule-visibility-items
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

**`rule-visibility-items`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、空の領域に隣接する隙間に、行間罫、列間罫、段間罫の線分を描画するかどうかを定義します。

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("column-rule-visibility-items")}}
- {{cssxref("row-rule-visibility-items")}}

{{InteractiveExample("CSS デモ: rule-visibility-items")}}

```css interactive-example-choice
rule-visibility-items: all;
```

```css interactive-example-choice
rule-visibility-items: around;
```

```css interactive-example-choice
rule-visibility-items: between;
```

```css interactive-example-choice
rule-visibility-items: normal;
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
  rule: solid 5px red;
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
rule-visibility-items: all;
rule-visibility-items: around;
rule-visibility-items: between;
rule-visibility-items: normal;

/* グローバル値 */
rule-visibility-items: inherit;
rule-visibility-items: initial;
rule-visibility-items: revert;
rule-visibility-items: revert-layer;
rule-visibility-items: unset;
```

### 値

このプロパティは、以下のキーワード値のいずれかで指定します。

- `all`
  - : 隣接する領域にアイテムが含まれているかどうかに関わらず、すべての隙間の区間に罫線を引きます。

- `around`
  - : 隣接する 2 つの領域のうち、少なくとも 1 つがアイテムで占められている場合、その隙間の区間には罫線を引きます。

- `between`
  - : 隣接する 2 つの領域が両方ともアイテムで占められている場合のみ、その間の区間には罫線を引きます。

- `normal`
  - : グリッドコンテナーの場合、`all` と同じ動作をします。段組みレイアウトの場合は、`between` と同じ動作をします。これがデフォルトの設定です。

## 解説

`rule-visibility-items` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)および[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout) コンテナーに複数の行、列、段がある場合、空の領域に隣接する行・列・段の間に罫線の区間を描画するかどうかを定義します。

この値は、{{cssxref("column-rule-visibility-items")}} プロパティと {{cssxref("row-rule-visibility-items")}} プロパティの両方に同じ値を設定する単一のキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、隣接するグリッド領域のうち少なくとも 1 つにグリッドアイテムが含まれている場合、2 つのグリッド領域の間に罫線が描画されるよう罫線を定義します。

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

順序付きリスト ({{htmlelement("ol")}}) をグリッドコンテナーとして定義し、{{cssxref("grid-template-columns")}} および {{cssxref("grid-template-rows")}} プロパティの両方を `repeat(4, 1fr)` に設定して 4 列 4 行のグリッドを生成し、{{cssxref("grid-column")}} および {{cssxref("grid-row")}} プロパティを使用して、最後のアイテムを右下のグリッド領域に移動させます。{{cssxref("gap")}} を `20px` に指定し、`5px` の破線の罫線が収まるよう、列間に十分な空間を提供します。列の罫線を `dashed` に、行の罫線を `solid` に設定しました。

最後に、`rule-visibility-items` を `between` に設定しました。これにより、隣接する両方のグリッド領域にグリッドアイテムが含まれている場合にのみ、行間罫と列間罫が描画されるようになります。

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  column-rule: dashed 5px blue;
  row-rule: solid 5px red;

  rule-visibility-items: around;
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
  @supports not (rule-visibility-items: around) {
    body::before {
      content: "このブラウザーは rule-visibility-items 一括指定に対応していません。";
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

- {{cssxref("column-rule-visibility-items")}} 一括指定
- {{cssxref("row-rule-visibility-items")}}
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
