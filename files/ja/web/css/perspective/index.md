---
title: perspective
slug: Web/CSS/perspective
---

{{CSSRef}}

**`perspective`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 z=0 の平面とユーザーとの間の距離を定めて三次元に配置された要素に遠近感を与えます。

{{EmbedInteractiveExample("pages/css/perspective.html")}}

## 構文

```css
/* キーワード値 */
perspective: none;

/* <length> 値 */
perspective: 20px;
perspective: 3.5em;

/* グローバル値 */
perspective: inherit;
perspective: initial;
perspecive: revert;
perspective: unset;
```

### 値

- `none`
  - : 立体的な座標変換を一切適用しないことを示すキーワードです。
- `<length>`
  - : ユーザーと z=0 平面間の距離を表す {{cssxref("&lt;length&gt;")}} です。立体的な座標変換を要素とその内容に適用するときに使います。 `0` や負の値ならば、立体的な座標変換は適用されません。

## 解説

z>0 である三次元要素はより大きく、 z<0 である三次元要素はより小さくなります。効果の強度はこのプロパティの値から決められます。

ユーザーの背後にある 3D 要素の部品、つまり z 軸座標が CSS の `perspective` プロパティの値より大きい要素は描画されません。

*消失点*は既定で要素の中心に置かれますが、この位置は {{cssxref("perspective-origin")}} プロパティで変更できます。

このプロパティを `0` と `none` 以外の値で使用すると、新たな[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)を生成します。また、その場合、オブジェクトはそれを含む `position: fixed` の要素の包含ブロックとして動作します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_perspective">視点の設定</h3>

この例は様々な位置に視点が設定された立方体を表示します。どのように立方体が早く縮まるかは、 {{ cssxref("perspective") }} プロパティで定義されます。小さい値ほど、視点は近くなります。

#### HTML

以下の HTML は、４つの同じボックスのコピーを、様々な値の視点を設定して作成します。

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code></th>
      <th><code>perspective: 350px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers250">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers350">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th><code>perspective: 500px;</code></th>
      <th><code>perspective: 650px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers500">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers650">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

様々な距離の遠近法を設定するために使用することができる CSS のクラスです。コンテナーボックスや立方体自身、それぞれの面のためのクラスも含みます。

```css
/* さまざまな perspective の値のためのショートハンドクラス */
.pers250 {
  perspective: 250px;
}

.pers350 {
  perspective: 350px;
}

.pers500 {
  perspective: 500px;
}

.pers650 {
  perspective: 650px;
}

/* コンテナーの div、立方体の div、面の一般的な設定 */
.container {
  width: 200px;
  height: 200px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
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
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

#### 結果

{{EmbedLiveSample('Setting_perspective', 660, 700)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
