---
title: backface-visibility
slug: Web/CSS/backface-visibility
---

{{CSSRef}}

**`backface-visibility`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がユーザーに対して裏側を向いたときに、裏面を可視にするかどうかを設定します。

{{EmbedInteractiveExample("pages/css/backface-visibility.html")}}

要素の裏面は表面の鏡像です。裏面は二次元では可視ではありませんが、三次元空間で要素に回転変換が行われたときに、背面を見ることができます。 (このプロパティは、視点を持たない二次元の座標変換では効果がありません。)

## 構文

```css
/* キーワード値 */
backface-visibility: visible;
backface-visibility: hidden;

/* グローバル値 */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: revert;
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

<h3 id="Cube_with_transparent_and_opaque_faces">透明な面と不透明な面を持った立方体</h3>

この例は、透明な面と不透明な面を持つ立方体を表示します。

<h4 id="HTML">HTML</h4>

#### HTML

```html
<table>
  <tr>
    <th><code>backface-visibility: visible;</code></th>
    <th><code>backface-visibility: hidden;</code></th>
  </tr>
  <tr>
    <td>
      <div class="container">
        <div class="cube showbf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>
        すべての面が透明であり、 裏面 (2, 4, 5) が 表面 (1, 3, 6)
        を通して表示されます。
      </p>
    </td>
    <td>
      <div class="container">
        <div class="cube hidebf">
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
</table>
```

#### CSS

```css
/* 「立方体」の 3 つの背面を表示または非表示にするクラス */
.showbf div {
  backface-visibility: visible;
}

.hidebf div {
  backface-visibility: hidden;
}

/* コンテナ div、立方体 div、面の一般的な設定 */
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
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
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

- [CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
