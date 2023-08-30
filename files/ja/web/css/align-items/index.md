---
title: align-items
slug: Web/CSS/align-items
---

[CSS](/ja/docs/Web/CSS) の **`align-items`** プロパティは、すべての直接の子要素に集合として {{cssxref("align-self")}} の値を設定します。フレックスボックスでは{{glossary("Cross Axis", "交差軸")}}方向のアイテムの配置を制御します。グリッドレイアウトでは、{{glossary("Grid Areas", "グリッド領域")}}におけるアイテムのブロック軸方向の配置を制御します。

以下のデモは、グリッドレイアウトを使用して `align-items` のいくつかの値の動作を示しています。

{{EmbedInteractiveExample("pages/css/align-items.html")}}

## 構文

```css
/* 基本キーワード */
align-items: normal;
align-items: stretch;

/* 位置による配置 */
/* align-items は左と右の値を取らない */
align-items: center; /* アイテムを中央付近にまとめる */
align-items: start; /* アイテムを先頭にまとめる */
align-items: end; /* アイテムを末尾にまとめる */
align-items: flex-start; /* フレックスアイテムを先頭にまとめる */
align-items: flex-end; /* フレックスアイテムを末尾にまとめる */

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
align-items: unset;
```

### 値

- `normal`

  - : このキーワードの効果は現在のレイアウトモードに依存します。

    - 絶対位置指定レイアウトでは、このキーワードは*置換*絶対位置指定ボックスにおける `start` のように動作し、*他のすべての*絶対位置指定ボックスでは `stretch` として動作します。
    - 絶対位置指定レイアウトの静的位置では、キーワードは `stretch` として動作します。
    - フレックスアイテムについては、このキーワードは `stretch` として動作します。
    - グリッドアイテムについては、このキーワードは `stretch` の一つと似た動作をしますが、ボックスにアスペクト比や内部寸法がある場合は `start` のように動作します。
    - このプロパティはブロックレベルボックスや、表のセルには適用されません。

- `flex-start`
  - : フレックスアイテムの cross-start 側マージンの端は、ラインの cross-start の端に寄せられます。
- `flex-end`
  - : フレックスアイテムの cross-end 側マージンの端は、ラインの cross-end の端に寄せられます。
- `center`
  - : フレックスアイテムのマージンボックスは、交差軸上の中央に配置されます。アイテムの cross-size がフレックスコンテナより大きい場合は、両方向へ均等にはみ出します。
- `start`
  - : そのアイテムは、互いにその軸の配置コンテナーの先頭側の端に寄せられます。
- `end`
  - : そのアイテムは、互いにその軸の配置コンテナーの末尾側の端に寄せられます。
- `self-start`
  - : そのアイテムは、その軸の配置コンテナーで、そのアイテムの先頭側の端に寄せられます。
- `self-end`
  - : そのアイテムは、その軸の配置コンテナーで、そのアイテムの末尾側の端に寄せられます。
- `baseline`, `first baseline`, `last baseline`
  - : すべてのフレックスアイテムは、[フレックスコンテナーのベースライン](https://drafts.csswg.org/css-flexbox-1/#flex-baselines)に沿って配置されます。 cross-start 側マージンの端とベースラインの間の距離が最大のアイテムが、ラインの cross-start の端に寄せられます。
- `stretch`
  - : アイテムのマージンボックスの cross-size が、幅や高さの制約の範囲内でラインと同じになるように拡張されます。
- `safe`
  - : 配置キーワードと共に使用します。選択されたキーワードによって、アイテムが配置コンテナーをあふれてデータの損失が発生する場合、アイテムは配置モードが `start` であったかのように配置されます。
- `unsafe`
  - : 配置キーワードと共に使用します。アイテムの寸法と配置コンテナーとの関係、あふれることによってデータの損失が発生するかどうかにかかわらず、指定された値を尊重します。

## 公式定義

{{CSSInfo}}

## 関連情報

{{csssyntax}}

<h2 id="Examples">例</h2>

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-items: center; /* ライブサンプルで変更可能 */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

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

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

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
    <option value="left">left</option>
    <option value="right">right</option>

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
var values = document.getElementById("values");
var display = document.getElementById("display");
var container = document.getElementById("container");

values.addEventListener("change", function (evt) {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", function (evt) {
  container.className = evt.target.value;
});
```

### 結果

{{EmbedLiveSample("Examples", "260px", "290px")}}

## 仕様書

{{Specifications("css.properties.align-items.grid_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[フレックスコンテナーにおけるアイテムの配置](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS グリッドガイド: _[CSS グリッドレイアウトにおけるボックスの配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
- {{cssxref("align-self")}} プロパティ

{{CSSRef}}
