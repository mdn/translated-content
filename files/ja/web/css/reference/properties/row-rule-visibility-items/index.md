---
title: CSS `row-rule-visibility-items` プロパティ
short-title: row-rule-visibility-items
slug: Web/CSS/Reference/Properties/row-rule-visibility-items
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{SeeCompatTable}}

**`row-rule-visibility-items`** は [CSS](/ja/docs/Web/CSS) のプロパティで、空の領域に隣接する隙間に、行・段間の罫線の区間を描画するかどうかを定義します。

{{InteractiveExample("CSS Demo: row-rule-visibility-items")}}

```css interactive-example-choice
row-rule-visibility-items: all;
```

```css interactive-example-choice
row-rule-visibility-items: around;
```

```css interactive-example-choice
row-rule-visibility-items: between;
```

```css interactive-example-choice
row-rule-visibility-items: normal;
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
  row-rule: solid 5px red;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
cite {
  grid-column: 3;
  grid-row: 3;
}
```

## 構文

```css
/* キーワード */
row-rule-visibility-items: all;
row-rule-visibility-items: around;
row-rule-visibility-items: between;
row-rule-visibility-items: normal;

/* グローバル値 */
row-rule-visibility-items: inherit;
row-rule-visibility-items: initial;
row-rule-visibility-items: revert;
row-rule-visibility-items: revert-layer;
row-rule-visibility-items: unset;
```

### 値

- `all`
  - : 隣接する領域にアイテムが含まれているかどうかに関わらず、すべての隙間の区間に行・段間の罫線を引きます。

- `around`
  - : 隣接する 2 つの領域のうち、少なくとも 1 つがアイテムで占められている場合、その隙間の区間には行・段間の罫線を引きます。

- `between`
  - : 隣接する 2 つの領域が両方ともアイテムで占められている場合のみ、その間の区間には行・段間の罫線を引きます。

- `normal`
  - : `all` と同じ動作をします。これがデフォルトの設定です。

## 解説

`row-rule-visibility-items` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout) および [グリッド](/ja/docs/Web/CSS/Guides/Grid_layout) コンテナー内で、複数の行があり、隣接する領域のいずれか一方または両方が空の場合、それらの領域間の隙間に行・段間罫線の区間を描画するかどうかを定義します。

`row-rule-visibility-items` と {{cssxref("column-rule-visibility-items")}} プロパティの両方を {{cssxref("rule-visibility-items")}} 一括指定を使用して同じ値に設定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、隣接するグリッド領域のうち少なくとも 1 つにグリッドアイテムが含まれている場合、2 つのグリッド領域の間に罫線が描画されるよう行間罫線を定義します。

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

順序付きリスト ({{htmlelement("ol")}}) をグリッドコンテナーとして定義し、{{cssxref("grid-template-rows")}} および {{cssxref("grid-template-columns")}} プロパティの両方を `repeat(4, 1fr)` に設定して 4 行 4 列のグリッドを生成し、{{cssxref("grid-row")}} および {{cssxref("grid-column")}} プロパティを使用して、最後のアイテムを右下のグリッド領域に移動させます。{{cssxref("gap")}} を `20px` に指定し、`5px` の破線の罫線が収まるよう、行間に十分な空間を提供します。

最後に、`row-rule-visibility-items` を `around` に設定しました。これにより、隣接するグリッド領域のいずれか一方、あるいは両方にグリッドアイテムが含まれている場合にのみ、行間罫線が描画されるようになります。

```css
ol {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;

  row-rule: dashed 5px blue;
  row-rule-visibility-items: around;
}
li:last-child {
  grid-column: 4;
  grid-row: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (row-rule-visibility-items: around) {
    body::before {
      content: "このブラウザーは row-rule-visibility-items プロパティに対応していません。";
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
- {{cssxref("column-rule-visibility-items")}}
- {{cssxref("row-rule")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
