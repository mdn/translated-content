---
title: mask-repeat
slug: Web/CSS/mask-repeat
tags:
  - CSS
  - CSS プロパティ
  - CSS マスク
  - Experimental
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-repeat
translation_of: Web/CSS/mask-repeat
---
{{CSSRef}}

**`mask-repeat`** は [CSS](/ja/docs/Web/CSS) プロパティで、マスク画像をどのように繰り返すかを設定します。マスク画像は水平軸、垂直軸、両方の軸で繰り返すか、まったく繰り返さないようにすることができます。

```css
/* 1 つの値の構文 */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* 2 つの値の構文: 水平 | 垂直 */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* 複数の値 */
mask-repeat: space round, no-repeat;
mask-repeat: round repeat, space, repeat-x;

/* グローバル値 */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: unset;
```

既定では、繰り返された画像は要素の寸法でクリッピングされますが、 (`round` を使用して) 大きさが合うように拡大縮小したり、 (`space` を使用して) 端から端まで等分に配分したりすることができます。

## 構文

1 つ以上の `<repeat-style>` 値をカンマ区切りで指定します。

### 値

- `<repeat-style>`

  - : 単一の値の構文は、2 つの値の構文の一括指定です。

    <table class="standard-table">
      <thead>
        <tr>
          <th>単一の値</th>
          <th>同等の 2 つの値</th>
        </tr>
      </thead>
      <tbody>
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

    2 つの値の構文では、1 つ目の値が水平方向の繰り返しの動作を表し、2 つ目の値が垂直方向の動作を表します。それぞれのオプションが各方向にどのように動作するのかを説明します。

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            画像がマスク描画領域全体を埋めるのに必要なだけ繰り返されます。最後の画像は合わない時には切り取られます。
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            画像は切り取られずにできる限り繰り返されます。最初と最後の画像は要素の両端に位置し、画像間に均等に余白が配分されます。 {{cssxref("mask-position")}} プロパティは、1つだけの画像が切り取られずに表示される場合を除いて無視されます。 <code>space</code> を使用して切り取りが発生するのは、1つの画像を表示する十分な大きさがない場合だけです。
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            利用できる空間の寸法が拡大した場合、繰り返される画像は (すき間をおかずに) もう一つ追加するだけの余地ができるまで引き伸ばされます。次の画像が追加されるとき、現在の画像は場所を空けるために縮小されます。例えば、元の幅が 260px の画像が3回繰り返されたとき、それぞれの反復の幅は 300px まで拡大する可能性があり、もう一つの画像が追加されると、 225px まで縮小されます。
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            画像は繰り返されません (また、描画領域のマスクは全体を覆うとは限りません)。繰り返されないマスク画像の位置は {{cssxref("mask-position")}} CSS プロパティで定義されます。
          </td>
        </tr>
      </tbody>
    </table>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 単一のマスクの反復設定

{{EmbedGHLiveSample("css-examples/masking/mask-repeat.html", '100%', 700)}}

<h3 id="Multiple_mask_image_support">複数のマスク画像の対応</h3>

それぞれのマスク画像に異なる `<repeat-style>` を、カンマで区切って指定することができます。

```css
.examplethree {
  mask-image: url('mask1.png'), url('mask2.png');
  mask-repeat: repeat-x, repeat-y;
}
```

それぞれの画像は最初のものから最後のものに向けて、それぞれの繰り返しスタイルに対応します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
