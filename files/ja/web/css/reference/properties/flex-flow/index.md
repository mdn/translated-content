---
title: "`flex-flow` プロパティ (CSS)"
short-title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

**`flex-flow`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、フレックスコンテナーの向きと折り返しの動作を同時に指定します。

{{InteractiveExample("CSS デモ: flex-flow")}}

```css interactive-example-choice
flex-flow: row wrap;
```

```css interactive-example-choice
flex-flow: row-reverse nowrap;
```

```css interactive-example-choice
flex-flow: row wrap balance;
```

```css interactive-example-choice
flex-flow: column wrap-reverse;
```

```css interactive-example-choice
flex-flow: column wrap;
```

```css interactive-example-choice
flex-flow: column balance wrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
    <div>Item Seven</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 5px 10px;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("flex-direction")}}
- {{cssxref("flex-wrap")}}

## 構文

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;
flex-flow: wrap balance;
flex-flow: balance wrap-reverse;

/* flex-flow: <'flex-direction'> および <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;
flex-flow: row-reverse balance wrap

/* グローバル値 */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### 値

このプロパティは、以下の型のキーワードを空白区切りで並べたリストとして指定します。

- {{cssxref("flex-direction")}}
  - : フレックスコンテナー内でフレックスアイテムを配置する際の主軸と方向を指定するキーワードです。
- {{cssxref("flex-wrap")}}
  - : フレックスアイテムが複数行にまたがるかどうかを指定する 1 つまたは 2 つのキーワード。また、改行を許可することができる場合、行の積み重ね方向や、行のバランスを取るかどうかを設定します。

## 解説

`flex-flow` 一括指定プロパティは、{{cssxref("flex-direction")}} および {{cssxref("flex-wrap")}} プロパティを指定し、フレックスコンテナーの方向とその折り返し動作を定義します。また、折り返しが許可されている場合に、フレックスアイテムを均等に配置するように定義することも可能です。

例えば、`column-reverse wrap` を指定すると、主軸がブロック方向に設定され、主軸の先頭と主軸の末尾の順序が逆転します。これにより、フレックスアイテムは改行をすることができるので、必要があれば新しい行を生成します。

```css
.container {
  flex-flow: column-reverse wrap;
}
```

フレックスアイテムをそれぞれのフレックスラインに均等に配置するには、`wrap`に加えて、`flex-wrap` キーワードの [`balance`](/ja/docs/Web/CSS/Reference/Properties/flex-wrap#balance) を含めることができます。

```css
.container {
  flex-flow: column-reverse wrap balance;
}
```

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、フレックスコンテナー内で `flex-flow` 一括指定を使用することで、アイテムが複数の行にまたがって逆順に配置される様子を示しています。

#### HTML

以下に、アルファベット順に並べた単語の一覧を記載します。

```html
<ul>
  <li>Alphabet</li>
  <li>Banana</li>
  <li>Crayons</li>
  <li>Dinosaurs</li>
  <li>Eggplant</li>
  <li>Foundation</li>
  <li>Ghosts</li>
  <li>Happy</li>
  <li>Igloo</li>
  <li>Janitors</li>
  <li>Kittens</li>
  <li>Lasso</li>
  <li>Magic 8-ball</li>
  <li>Nincompoop</li>
  <li>Orange</li>
  <li>Petunia</li>
  <li>Quality</li>
  <li>Rancid</li>
  <li>Shoelace</li>
  <li>Terydactyl</li>
  <li>Umbrella</li>
  <li>Valentine</li>
  <li>Westward</li>
  <li>Xylophone</li>
</ul>
```

#### CSS

{{HTMLElement("ul")}} がフレックスコンテナーになるように {{cssxref("display")}} プロパティを設定し、{{cssxref("width")}} を定義し、フレックスアイテムとフレックス行の間に若干の余地があるように {{cssxref("gap")}} を追加し、さらに `flex-flow` を設定してアイテムが逆順で折り返されるようにします。簡潔にするため、追加の CSS は省略しています。

```css
ul {
  display: flex;
  width: 31em;
  gap: 1em;

  flex-flow: row-reverse wrap-reverse;
}
```

```css hidden
ul {
  list-style: none;
  border: 1px solid;
  font-family: sans-serif;
}
li {
  font-size: 1.25rem;
  padding: 5px;
  border: 1px solid;
  background-color: lightpink;
}
li:nth-of-type(even) {
  background-color: lightgreen;
}
```

#### 結果

{{EmbedLiveSample("Basic usage","",310)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスアイテムの順序](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
