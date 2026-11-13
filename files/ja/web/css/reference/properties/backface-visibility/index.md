---
title: backface-visibility
slug: Web/CSS/Reference/Properties/backface-visibility
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`backface-visibility`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がユーザーに対して裏側を向いたときに、裏面を可視にするかどうかを設定します。

{{InteractiveExample("CSS デモ: backface-visibility")}}

```css interactive-example-choice
backface-visibility: visible;
```

```css interactive-example-choice
backface-visibility: hidden;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  perspective-origin: 220% 220%;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  background: rgb(0 0 0 / 0.4);
  font-size: 60px;
  color: white;
}

.front {
  transform: translateZ(50px);
}

.back {
  background: rgb(230 0 0);
  color: white;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(0 0 0 / 0.6);
  transform: rotateY(90deg) translateZ(50px);
}

.bottom {
  background: rgb(0 0 0 / 0.6);
  transform: rotateX(-90deg) translateZ(50px);
}
```

要素の裏面は表面の鏡像です。裏面は 2 次元では可視ではありませんが、3 次元空間で要素に回転変換が行われたときに、背面を見ることができます。（このプロパティは、視点を持たない 2 次元の座標変換では効果がありません。）

## 構文

```css
/* キーワード値 */
backface-visibility: visible;
backface-visibility: hidden;

/* グローバル値 */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: revert;
backface-visibility: revert-layer;
backface-visibility: unset;
```

`backface-visibility` プロパティは、以下に挙げたキーワードのうちの一つで指定します。

### 値

- `visible`
  - : ユーザーに対して裏を向いたとき、背面が可視になります。
- `hidden`
  - : 背面が非表示になり、要素がユーザーに対して反対を向いたときに不可視にするのに便利です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 透明な面と不透明な面を持った立方体

この例は、透明な面と不透明な面を持つ立方体を表示します。

#### HTML

```html-nolint
<table>
  <thead>
    <tr>
      <th><code>backface-visibility: visible;</code></th>
      <th><code>backface-visibility: hidden;</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="container">
          <div class="cube show-bf">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
        <p>
          すべての面が透明であり、裏面 (2, 4, 5) が表面 (1, 3, 6) を通して表示されます。
        </p>
      </td>
      <td>
        <div class="container">
          <div class="cube hide-bf">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
        <p>背後の3面 (2, 4, 5) は非表示です。</p>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
/* 「立方体」の 3 つの背面を表示または非表示にするクラス */
.show-bf div {
  backface-visibility: visible;
}

.hide-bf div {
  backface-visibility: hidden;
}

/* コンテナー div、立方体 div、面の一般的な設定 */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* 方向に基づいてそれぞれの面を設定 */
.front {
  background: rgb(0 0 0 / 30%);
  transform: translateZ(50px);
}

.back {
  background: lime;
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(196 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 196 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(196 196 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(196 0 196 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

/* テーブルの見栄えをよくする */
th,
p,
td {
  background-color: #eeeeee;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

#### 結果

{{EmbedLiveSample('Cube_with_transparent_and_opaque_faces', '100%', 360)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
