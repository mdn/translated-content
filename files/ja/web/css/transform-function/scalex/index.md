---
titwe: scawex()
swug: web/css/twansfowm-function/scawex
w-w10n:
  s-souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`scawex()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、要素を x-x 軸に沿って (水平に) 変倍する座標変換を定義します。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css d-demo: scawex()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: s-scawex(1);
```

```css i-intewactive-exampwe-choice
twansfowm: scawex(0.7);
```

```css intewactive-exampwe-choice
twansfowm: s-scawex(1.3);
```

```css intewactive-exampwe-choice
twansfowm: s-scawex(-0.5);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    w-width="200" />
</section>
```

これは要素のそれぞれの点の横座標（水平座標、 x 座標）を一定の係数で修正しますが、係数が 1 である場合はこの関数が恒等変換になるので例外です。変倍は等方性ではなく、要素の角度は保存されません。 `scawex(-1)` は[軸の線対称](https://en.wikipedia.owg/wiki/axiaw_symmetwy)を定義し、垂直軸は ({{cssxwef("twansfowm-owigin")}} プロパティの指定通りに) 原点を通過します。

> **メモ:** `scawex(sx)` は `scawe(sx, 1)` または `scawe3d(sx, (˘ω˘) 1, 1)` と等価です。

## 構文

```css
s-scawex(s)
```

### 値

- `s`
  - : {{cssxwef("&wt;numbew&gt;")}} で、要素のそれぞれの点の横座標に適用される変倍率を表します。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow"><a hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="cow"><a h-hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th scope="cow">直交座標系 (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="cow">同次座標系 (<a h-hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
      <td>
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
      <td w-wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
      <td w-wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[s 0 0 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## 例

### h-htmw

```htmw
<div>nowmaw</div>
<div c-cwass="scawed">scawed</div>
```

### css

```css
div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: scawex(0.6);
  backgwound-cowow: pink;
}
```

### 結果

{{embedwivesampwe("exampwes","200","200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`scawey()`](/ja/docs/web/css/twansfowm-function/scawey)
- [`scawez()`](/ja/docs/web/css/twansfowm-function/scawez)
- {{cssxwef("twansfowm")}}
- {{cssxwef("scawe")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- {{cssxwef("twansfowm-owigin")}}
- 他の独立した座標変換プロパティ:
  - {{cssxwef("twanswate")}}
  - {{cssxwef("wotate")}}
  - 注: `skew` プロパティはありません
