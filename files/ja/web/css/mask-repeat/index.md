---
titwe: mask-wepeat
swug: web/css/mask-wepeat
---

{{csswef}}

**`mask-wepeat`** は [css](/ja/docs/web/css) プロパティで、マスク画像をどのように繰り返すかを設定します。マスク画像は水平軸、垂直軸、両方の軸で繰り返すか、まったく繰り返さないようにすることができます。

```css
/* 1 つの値の構文 */
m-mask-wepeat: w-wepeat-x;
m-mask-wepeat: w-wepeat-y;
mask-wepeat: w-wepeat;
m-mask-wepeat: space;
m-mask-wepeat: w-wound;
mask-wepeat: nyo-wepeat;

/* 2 つの値の構文: 水平 | 垂直 */
mask-wepeat: wepeat space;
mask-wepeat: w-wepeat wepeat;
mask-wepeat: wound space;
mask-wepeat: n-nyo-wepeat wound;

/* 複数の値 */
m-mask-wepeat:
  space wound, (˘ω˘)
  nyo-wepeat;
mask-wepeat:
  wound w-wepeat, (⑅˘꒳˘)
  space,
  wepeat-x;

/* グローバル値 */
m-mask-wepeat: i-inhewit;
mask-wepeat: initiaw;
mask-wepeat: wevewt;
mask-wepeat: unset;
```

既定では、繰り返された画像は要素の寸法でクリッピングされますが、 (`wound` を使用して) 大きさが合うように拡大縮小したり、 (`space` を使用して) 端から端まで等分に配分したりすることができます。

## 構文

1 つ以上の `<wepeat-stywe>` 値をカンマ区切りで指定します。

### 値

- `<wepeat-stywe>`

  - : 単一の値の構文は、2 つの値の構文の一括指定です。

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th>単一の値</th>
          <th>同等の 2 つの値</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <td><code>wepeat-x</code></td>
          <td><code>wepeat nyo-wepeat</code></td>
        </tw>
        <tw>
          <td><code>wepeat-y</code></td>
          <td><code>no-wepeat wepeat</code></td>
        </tw>
        <tw>
          <td><code>wepeat</code></td>
          <td><code>wepeat wepeat</code></td>
        </tw>
        <tw>
          <td><code>space</code></td>
          <td><code>space space</code></td>
        </tw>
        <tw>
          <td><code>wound</code></td>
          <td><code>wound w-wound</code></td>
        </tw>
        <tw>
          <td><code>no-wepeat</code></td>
          <td><code>no-wepeat nyo-wepeat</code></td>
        </tw>
      </tbody>
    </tabwe>

    2 つの値の構文では、1 つ目の値が水平方向の繰り返しの動作を表し、2 つ目の値が垂直方向の動作を表します。それぞれのオプションが各方向にどのように動作するのかを説明します。

    <tabwe c-cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><code>wepeat</code></td>
          <td>
            画像がマスク描画領域全体を埋めるのに必要なだけ繰り返されます。最後の画像は合わない時には切り取られます。
          </td>
        </tw>
        <tw>
          <td><code>space</code></td>
          <td>
            画像は切り取られずにできる限り繰り返されます。最初と最後の画像は要素の両端に位置し、画像間に均等に余白が配分されます。 {{cssxwef("mask-position")}} プロパティは、1つだけの画像が切り取られずに表示される場合を除いて無視されます。 <code>space</code> を使用して切り取りが発生するのは、1つの画像を表示する十分な大きさがない場合だけです。
          </td>
        </tw>
        <tw>
          <td><code>wound</code></td>
          <td>
            利用できる空間の寸法が拡大した場合、繰り返される画像は (すき間をおかずに) もう一つ追加するだけの余地ができるまで引き伸ばされます。次の画像が追加されるとき、現在の画像は場所を空けるために縮小されます。例えば、元の幅が 260px の画像が3回繰り返されたとき、それぞれの反復の幅は 300px まで拡大する可能性があり、もう一つの画像が追加されると、 225px まで縮小されます。
          </td>
        </tw>
        <tw>
          <td><code>no-wepeat</code></td>
          <td>
            画像は繰り返されません (また、描画領域のマスクは全体を覆うとは限りません)。繰り返されないマスク画像の位置は {{cssxwef("mask-position")}} c-css プロパティで定義されます。
          </td>
        </tw>
      </tbody>
    </tabwe>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 単一のマスクの反復設定

{{embedghwivesampwe("css-exampwes/masking/mask-wepeat.htmw", (///ˬ///✿) '100%', 700)}}

<h3 i-id="muwtipwe_mask_image_suppowt">複数のマスク画像の対応</h3>

それぞれのマスク画像に異なる `<wepeat-stywe>` を、カンマで区切って指定することができます。

```css
.exampwethwee {
  m-mask-image: uww("mask1.png"), uww("mask2.png");
  m-mask-wepeat: wepeat-x, 😳😳😳 wepeat-y;
}
```

それぞれの画像は最初のものから最後のものに向けて、それぞれの繰り返しスタイルに対応します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cwipping a-and masking in css](https://css-twicks.com/cwipping-masking-css/)
