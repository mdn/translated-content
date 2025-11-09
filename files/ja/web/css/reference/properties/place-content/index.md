---
title: place-content
slug: Web/CSS/Reference/Properties/place-content
original_slug: Web/CSS/place-content
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

**`place-content`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、ブロック方向とインライン方向の内容物の配置 (すなわち {{CSSxRef("align-content")}} および {{CSSxRef("justify-content")}}) を、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)や[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)などのレイアウトシステムにおいて、一度に指定することができます。

{{InteractiveExample("CSS デモ: place-content")}}

```css interactive-example-choice
place-content: end space-between;
```

```css interactive-example-choice
place-content: space-around start;
```

```css interactive-example-choice
place-content: start space-evenly;
```

```css interactive-example-choice
place-content: end center;
```

```css interactive-example-choice
place-content: end;
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
  grid-template-columns: 60px 60px;
  grid-auto-rows: 40px;
  height: 180px;
  width: 220px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`align-content`](/ja/docs/Web/CSS/Reference/Properties/align-content)
- [`justify-content`](/ja/docs/Web/CSS/Reference/Properties/justify-content)

## 構文

```css
/* 位置による配置 */
/* align-content は left および right の値を取りません */
place-content: center start;
place-content: start center;
place-content: end left;
place-content: flex-start center;
place-content: flex-end center;

/* ベースラインによる配置 */
/* justify-content は baseline の値を取りません */
place-content: baseline center;
place-content: first baseline space-evenly;
place-content: last baseline right;

/* 均等配置 */
place-content: space-between space-evenly;
place-content: space-around space-evenly;
place-content: space-evenly stretch;
place-content: stretch space-evenly;

/* グローバル値 */
place-content: inherit;
place-content: initial;
place-content: revert;
place-content: revert-layer;
place-content: unset;
```

最初の値は {{CSSxRef("align-content")}} プロパティの値で、2 番目の値は {{CSSxRef("justify-content")}} の値です。

> [!NOTE]
> 2 番目の値がない場合、最初の値に両方に有効な値が設定されていれば、両方に使用されます。どちらかに無効な値であれば、値自体が無効になります。

### 値

- `start`
  - : 各アイテムは、適切な軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。
- `end`
  - : 各アイテムは、適切な軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。
- `flex-start`
  - : 各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `start` のように扱われます。
- `flex-end`
  - : 各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。
    これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は `end` のように扱われます。
- `center`
  - : 各アイテムは、配置コンテナーの中央に向けて互いに寄せて配置されます。
- `left`
  - : 各アイテムは、適切な軸方向で配置コンテナーの左側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `start` のように動作します。
- `right`
  - : 各アイテムは、適切な軸方向で配置コンテナーの右側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は `start` のように動作します。
- `space-between`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。
- `baseline`, `first baseline`, `last baseline`
  - : first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。
    `first baseline` の代替配置は `start`、`last baseline` の代替配置は `end` です。
- `space-around`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。
- `space-evenly`
  - : 各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔、最初のアイテムの前の余白、最後のアイテムの後の余白は、まったく同じ幅になります。
- `stretch`
  - : 各アイテムの寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が `auto` のアイテムは、 {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、寸法の合計が配置コンテナーを満たすようになります。
- `safe`
  - : 配置キーワードと並べて使用します。選択されたキーワードが、アイテムが配置コンテナーをオーバーフローしてデータ損失を引き起こす場合には、アイテムは代わりに、配置モードが `start` であるかのように配置されます。
- `unsafe`
  - : 配置キーワードと並べて使用します。アイテムと配置コンテナーの相対サイズに関係なく、またデータ損失の原因となるオーバーフローが発生するかどうかに関係なく、指定された配置値が優先されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスコンテナーのコンテンツの配置

#### HTML

```html
<div id="container">
  <div class="small">Lorem</div>
  <div class="small">Lorem<br />ipsum</div>
  <div class="large">Lorem</div>
  <div class="large">Lorem<br />ipsum</div>
  <div class="large"></div>
  <div class="large"></div>
</div>
```

```html hidden
<code>writing-mode:</code
><select id="writingMode">
  <option value="horizontal-tb" selected>horizontal-tb</option>
  <option value="vertical-rl">vertical-rl</option>
  <option value="vertical-lr">vertical-lr</option>
  <option value="sideways-rl">sideways-rl</option>
  <option value="sideways-lr">sideways-lr</option></select
><code>;</code><br />

<code>direction:</code
><select id="direction">
  <option value="ltr" selected>ltr</option>
  <option value="rtl">rtl</option></select
><code>;</code><br />

<code>place-content:</code
><select id="alignContentAlignment">
  <option value="normal">normal</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="baseline">baseline</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly" selected>space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center">center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option>
</select>
<select id="justifyContentAlignment">
  <option value="normal">normal</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center" selected>center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option></select
><code>;</code>
```

```js hidden
function update() {
  document.getElementById("container").style.placeContent =
    `${document.getElementById("alignContentAlignment").value} ` +
    `${document.getElementById("justifyContentAlignment").value}`;
}

const alignContentAlignment = document.getElementById("alignContentAlignment");
alignContentAlignment.addEventListener("change", update);

const justifyContentAlignment = document.getElementById(
  "justifyContentAlignment",
);
justifyContentAlignment.addEventListener("change", update);

const writingM = document.getElementById("writingMode");
writingM.addEventListener("change", (evt) => {
  document.getElementById("container").style.writingMode = evt.target.value;
});

const direction = document.getElementById("direction");
direction.addEventListener("change", (evt) => {
  document.getElementById("container").style.direction = evt.target.value;
});
```

#### CSS

```css
#container {
  display: flex;
  height: 240px;
  width: 240px;
  flex-wrap: wrap;
  background-color: #8c8c8c;
  writing-mode: horizontal-tb; /* Can be changed in the live sample */
  direction: ltr; /* Can be changed in the live sample */
  place-content: flex-end center; /* Can be changed in the live sample */
}

div > div {
  border: 2px solid #8c8c8c;
  width: 50px;
  background-color: #a0c8ff;
}

.small {
  font-size: 12px;
  height: 40px;
}

.large {
  font-size: 14px;
  height: 50px;
}
```

#### 結果

{{EmbedLiveSample("Placing_content_in_a_flex_container", "370", "300")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("align-content")}}
- {{cssxref("justify-content")}}
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
