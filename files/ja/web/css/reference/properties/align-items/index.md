---
title: align-items
slug: Web/CSS/Reference/Properties/align-items
original_slug: Web/CSS/align-items
l10n:
  sourceCommit: a731cff4afe1132e84c29c3044c9ac4a58888f46
---

[CSS](/ja/docs/Web/CSS) の **`align-items`** プロパティは、すべての直接の子要素に集合として {{cssxref("align-self")}} の値を設定します。フレックスボックスでは{{glossary("cross axis", "交差軸")}}方向のアイテムの配置を制御します。グリッドレイアウトでは、{{glossary("grid areas", "グリッド領域")}}におけるアイテムのブロック軸方向の配置を制御します。

{{InteractiveExample("CSS デモ: align-items")}}

```css interactive-example-choice
align-items: stretch;
```

```css interactive-example-choice
align-items: center;
```

```css interactive-example-choice
align-items: start;
```

```css interactive-example-choice
align-items: end;
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
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

このデモは、グリッドレイアウトを使用して `align-items` のいくつかの値の動作を示しています。

## 構文

```css
/* 基本キーワード */
align-items: normal;
align-items: stretch;

/* 位置による配置 */
/* align-items は左と右の値を取らない */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;
align-items: anchor-center;

/* ベースラインに配置する */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* オーバーフロー配置 (位置指定要素のみ) */
align-items: safe center;
align-items: unsafe center;

/* グローバル値 */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### 値

- `normal`
  - : このキーワードの効果は現在のレイアウトモードに依存します。
    - 絶対位置指定レイアウトでは、このキーワードは置換絶対位置指定ボックスにおける `start` のように動作し、他のすべての絶対位置指定ボックスでは `stretch` として動作します。
    - 絶対位置指定レイアウトの静的位置では、キーワードは `stretch` として動作します。
    - フレックスアイテムについては、このキーワードは `stretch` として動作します。
    - グリッドアイテムについては、このキーワードは `stretch` の一つと似た動作をしますが、ボックスに{{glossary("aspect ratio","アスペクト比")}}や内在的な寸法がある場合は、 `start` のように動作します。
    - このプロパティはブロックレベルボックスや、表のセルには適用されません。

- `center`
  - : フレックスアイテムのマージンボックスは、交差軸上の中央に配置されます。アイテムの交差軸のサイズがフレックスコンテナーより大きい場合は、両方向へ均等にはみ出します。

- `start`
  - : そのアイテムは、互いにその軸の配置コンテナーの先頭側の端に寄せられます。

- `end`
  - : そのアイテムは、互いにその軸の配置コンテナーの末尾側の端に寄せられます。

- `self-start`
  - : そのアイテムは、その軸の配置コンテナーで、そのアイテムの先頭側の端に寄せられます。

- `self-end`
  - : そのアイテムは、その軸の配置コンテナーで、そのアイテムの末尾側の端に寄せられます。

- `baseline`, `first baseline`, `last baseline`
  - : すべてのフレックスアイテムは、[フレックスコンテナーのベースライン](https://drafts.csswg.org/css-flexbox-1/#flex-baselines)に沿って配置されます。交差軸の先頭側マージンの端とベースラインの間の距離が最大のアイテムが、行の交差軸の先頭側の端に寄せられます。

- `stretch`
  - : アイテムが配置コンテナーより小さい場合、自動サイズのアイテムは、アイテムの幅と高さの制限を尊重しながら、コンテナーを埋めるために均等に拡大されます。

- `anchor-center`
  - : [アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)要素の場合、関連付けられたアンカー要素のブロック方向の中心にアイテムを配置します。 [`anchor-center` を使用してアンカーの中央に配置](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#anchor-center_を使用してアンカーの中央に配置)を参照してください。

- `safe`
  - : 配置キーワードと共に使用します。選択されたキーワードによって、アイテムが配置コンテナーをあふれてデータの損失が発生する場合、アイテムは配置モードが `start` であったかのように配置されます。

- `unsafe`
  - : 配置キーワードと共に使用します。アイテムの寸法と配置コンテナーとの関係、あふれることによってデータの損失が発生するかどうかにかかわらず、指定された値を尊重します。

また、フレックスボックスのために定義された 2 つの値があります。これらは[フレックスモデルの軸](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox#フレックスモデル)の概念に基づいており、グリッドレイアウトでも同様に動作します。

- `flex-start`
  - : フレックスレイアウトでのみ用いられ、フレックスアイテムを、フレックスコンテナーの主軸の先頭側または交差軸の先頭側の端に寄せて配置します。フレックス整形コンテキスト以外で使用する場合、この値は `start` として動作します。

- `flex-end`
  - : フレックスレイアウトでのみ用いられ、フレックスアイテムを、フレックスコンテナーの主軸の末尾側または交差軸の末尾側の端に寄せて配置します。フレックス整形コンテキスト以外で使用する場合、この値は `end` として動作します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

この例では、6 つの子要素を持つコンテナーを持っています。 {{htmlelement("select")}} ドロップダウンメニューで、コンテナーの {{cssxref("display")}} を `grid` と `flex` の間で切り替えることができます。 2 つ目のメニューでは、コンテナーの `align-items` プロパティの値を変更できます。

### CSS

コンテナーとアイテムに対して、確実に 2 行または 1 列、またはアイテムを保有しているようにスタイル設定します。 `.flex` および `.grid` クラスを定義し、 JavaScript でコンテナーに適用します。これらはコンテナーの {{cssxref("display")}} 値を設定し、背景色と境界線を変更することで、レイアウトが変更されたことを示す追加のインジケーターを提供します。 6 つのフレックスアイテムの背景色はそれぞれ異なり、 4 番目のアイテムは 2 行に、 6 番目のアイテムはフォントが拡大されています。

```css
.flex,
.grid {
  height: 200px;
  width: 500px;
  align-items: initial; /* ライブサンプルでこの値を変更 */
  border: solid 5px transparent;
  gap: 3px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  background-color: #8c8c9f;
  border-color: magenta;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  background-color: #9f8c8c;
  border-color: slateblue;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
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
  font-size: 30px;
}
```

```css hidden
select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}

div > div {
  box-sizing: border-box;
  border: 2px solid #fff;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### HTML

コンテナーの {{htmlelement("div")}} とその中に `<div>` を 6 つ設置します。フォームの HTML とコンテナーのクラスを変更する JavaScript は、簡潔にするために隠してあります。

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4<br />2 行目</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>
```

```html hidden
<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const display = document.getElementById("display");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### 結果

{{EmbedLiveSample("Examples", "260", "290")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("align-self")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-items")}} 一括指定
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスコンテナー内のアイテムの配置](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
