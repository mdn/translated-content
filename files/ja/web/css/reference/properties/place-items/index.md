---
title: place-items
slug: Web/CSS/Reference/Properties/place-items
original_slug: Web/CSS/place-items
l10n:
  sourceCommit: 484d4b26862be446f4c3a3d034e6de448bf4f659
---

[CSS](/ja/docs/Web/CSS) の **`place-items`** は[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、アイテムをブロック方向とインライン方向の両方に一度に配置します。これは {{CSSxRef("align-items")}} および {{CSSxRef("justify-items")}} プロパティの値を設定します。 2 つ目の値が設定されていない場合、1 つ目の値が使用されます。

{{InteractiveExample("CSS デモ: place-items")}}

```css interactive-example-choice
place-items: center stretch;
```

```css interactive-example-choice
place-items: center start;
```

```css interactive-example-choice
place-items: start end;
```

```css interactive-example-choice
place-items: end center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`align-items`](/ja/docs/Web/CSS/Reference/Properties/align-items)
- [`justify-items`](/ja/docs/Web/CSS/Reference/Properties/justify-items)

## 構文

```css
/* キーワード値 */
place-items: center;
place-items: normal start;
place-items: center normal;
place-items: start legacy;
place-items: end normal;
place-items: self-start legacy;
place-items: self-end normal;
place-items: flex-start legacy;
place-items: flex-end normal;
place-items: anchor-center;

/* ベースラインによる配置 */
place-items: baseline normal;
place-items: first baseline legacy;
place-items: last baseline normal;
place-items: stretch legacy;

/* グローバル値 */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: revert-layer;
place-items: unset;
```

### 値

以下の形のいずれかです。

- 単一の {{cssxref("align-items")}} 値で、ブロック方向とインライン方向の両方の配置を設定するために使用します。
- ブロック方向の配置を設定する {{cssxref("align-items")}} 値に、インライン方向の配置を設定する {{cssxref("justify-items")}} 値が続きます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスコンテナー内でのアイテムの配置

フレックスボックスでは、主軸のアイテムがグループとして扱われるため、{{cssxref("justify-self")}} や {{cssxref("justify-items")}} したがって、2 番目の値は無視されます。

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  font-size: 2em;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="container">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
</div>

<div class="row">
  <label for="values">place-items: </label>
  <select id="values">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#container {
  height: 200px;
  width: 240px;
  place-items: stretch; /* リストの選択肢を変更することで、この値を変更できます */
  background-color: #8c8c8c;
  display: flex;
}
```

#### 結果

{{EmbedLiveSample("Placing_items_in_a_flex_container", 260, 290)}}

### グリッドコンテナーでのアイテムの配置

以下のグリッドコンテナーのアイテムは、配置されるグリッド領域よりも小さいため、`place-items` はブロック方向とインライン方向にアイテムを移動します。

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  font-size: 2em;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="grid-container">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
</div>

<div class="row">
  <label for="grid-values">place-items: </label>
  <select id="grid-values">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("grid-values");
const container = document.getElementById("grid-container");

values.addEventListener("change", (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#grid-container {
  height: 200px;
  width: 240px;
  place-items: stretch; /* リストの選択肢を変更することで、この値を変更できます */
  background-color: #8c8c8c;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#grid-container > div {
  width: 50px;
}
```

#### 結果

{{EmbedLiveSample("Placing_items_in_a_grid_container", 260, 290)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("justify-items")}}
- {{CSSxRef("justify-self")}}
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
