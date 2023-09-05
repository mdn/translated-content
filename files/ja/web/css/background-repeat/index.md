---
title: background-repeat
slug: Web/CSS/background-repeat
---

{{CSSRef}}

**`background-repeat`** は [CSS](/ja/docs/Web/CSS) のプロパティで、背景画像をどのように繰り返すかを設定します。背景画像は水平軸方向と垂直軸方向に繰り返したり、まったく繰り返さないようにしたりすることができます。

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

既定では、繰り返された画像が要素の大きさで切り取られます。他にも、背景画像の拡縮を伴う方法 (`round` を使用) や、背景画像間に余白を挿入する方法 (`space` を使用) など、別の敷き詰め方法を選択することも可能です。

## 構文

```css
/* キーワード値 */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* 値2つの構文: 水平方向 | 垂直方向 */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* グローバル値 */
background-repeat: inherit;
background-repeat: initial;
background-repeat: revert;
background-repeat: unset;
```

### 値

- `<repeat-style>`

  - : 値 1 つの構文は完全な値 2 つの構文に対する一括指定です。

    <table class="standard-table">
      <tbody>
        <tr>
          <td><strong>単一の値</strong></td>
          <td><strong>対応するペアの値</strong></td>
        </tr>
        <tr>
          <td><code>repeat-x</code></td>
          <td><code>repeat no-repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat-y</code></td>
          <td><code>no-repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat</code></td>
          <td><code>repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td><code>space space</code></td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td><code>round round</code></td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td><code>no-repeat no-repeat</code></td>
        </tr>
      </tbody>
    </table>

    値 2 つの構文では、最初の値は水平方向の繰り返しの振る舞いを表し、2 つ目の値は垂直方向の振る舞いを表します。以下は各値が各方向にどう働くかの説明です。

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            画像は描画領域全体を覆うのに必要な回数だけ、繰り返し描画されます。最後の背景画像が領域に収まりきらない場合は切り取られます。
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            画像は指定された方向に切り抜きなしで敷き詰められる回数だけ繰り返されます。最初の画像と最後の画像は領域の両端にそれぞれ接触するように描画され、余白が画像同士の間に均一に分配されます。{{cssxref("background-position")}} プロパティは、画像を 1 つしか切り抜きなしで敷き詰められない場合を除き、無視されます。`space` を使用していて背景画像が切り抜かれるのは、領域幅を超える背景画像が指定された場合のみです。
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            利用できる空間が広がるにつれ、繰り返し描画された画像は、画像をもう1つ追加するだけの余裕 (残りの空間 ≧ 画像の幅の半分) ができるまで、 (隙間を空けずに) 伸長されます。次の画像が追加されると、描画されたすべての画像が収まるように縮小されます。例えば、元々の幅が 260px の画像が3回繰り返されているとき、それぞれが幅 300px になるまで伸長され、それから画像がもう1つ追加されます。そのときそれぞれは 225px に縮小されます。
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            画像は繰り返し描画されません (したがって背景画像描画領域が完全に埋め尽くされるとは限りません)。背景画像の位置は {{cssxref("background-position")}} CSS プロパティで定義されます。
          </td>
        </tr>
      </tbody>
    </table>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_background-repeat">background-repeat の設定</h3>

#### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="one"></div>
  </li>
  <li>
    repeat
    <div class="two"></div>
  </li>
  <li>
    repeat-x
    <div class="three"></div>
  </li>
  <li>
    repeat-y
    <div class="four"></div>
  </li>
  <li>
    space
    <div class="five"></div>
  </li>
  <li>
    round
    <div class="six"></div>
  </li>
  <li>
    repeat-x, repeat-y (multiple images)
    <div class="seven"></div>
  </li>
</ol>
```

#### CSS

```css
/* 例のすべての div で共通 */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url(starsolid.gif);
  width: 160px;
  height: 70px;
}

/* 背景の繰り返し */
.one {
  background-repeat: no-repeat;
}
.two {
  background-repeat: repeat;
}
.three {
  background-repeat: repeat-x;
}
.four {
  background-repeat: repeat-y;
}
.five {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* 複数の画像 */
.seven {
  background-image: url(starsolid.gif),
    url(https://developer.mozilla.org/static/img/favicon32.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

#### 結果

この例では、リストの各要素に `background-repeat` の異なる値が対応付けられています。

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS での複数の背景の利用方法](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
