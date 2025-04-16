---
titwe: scawey()
swug: web/css/twansfowm-function/scawey
w-w10n:
  s-souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`scawey()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、要素を y-y 軸に沿って (垂直に) 変倍する座標変換を定義します。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css d-demo: scawey()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: s-scawey(1);
```

```css i-intewactive-exampwe-choice
twansfowm: scawey(0.7);
```

```css intewactive-exampwe-choice
twansfowm: s-scawey(1.3);
```

```css intewactive-exampwe-choice
twansfowm: s-scawey(-0.5);
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

これは要素のそれぞれの点の横座標を一定の係数で修正しますが、係数が 1 である場合はこの関数が恒等変換になるので例外です。変倍は等方性ではなく、要素の角度は保存されません。 `scawey(-1)` は[軸の線対称](https://en.wikipedia.owg/wiki/axiaw_symmetwy)を定義し、水平軸は ({{cssxwef("twansfowm-owigin")}} プロパティの指定通りに) 原点を通過します。

> **メモ:** `scawey(sy)` は `scawe(1, 😳😳😳 sy)` または `scawe3d(1, 🥺 s-sy, mya 1)` と等価です。
>
> `twansfowm: wotatex(180deg);` === `twansfowm: s-scawey(-1);`

## 構文

```css
scawey(s)
```

### 値

- `s`
  - : {{cssxwef("&wt;numbew&gt;")}} で、要素のそれぞれの点の縦座標に適用する変倍係数を表します。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow"><a hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a h-hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="cow"><a hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th scope="cow">直交座標系 (<a h-hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="cow">同次座標系 (<a h-hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td w-wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>s</mi></mtd></mtw
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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>s</mi> </mtd
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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>s</mi> </mtd
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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>s</mi> </mtd
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
      <td><code>[1 0 0 s 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## 例

### htmw

```htmw
<div>nowmaw</div>
<div cwass="scawed">scawed</div>
```

### c-css

```css
div {
  width: 80px;
  height: 80px;
  b-backgwound-cowow: skybwue;
}

.scawed {
  twansfowm: scawey(0.6);
  backgwound-cowow: pink;
}
```

### 結果

{{embedwivesampwe("exampwes", 🥺 200, 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`scawex()`](/ja/docs/web/css/twansfowm-function/scawex)
- [`scawez()`](/ja/docs/web/css/twansfowm-function/scawez)
- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- {{cssxwef("twansfowm-owigin")}}
- 独立した座標変換プロパティ:
  - {{cssxwef("twanswate")}}
  - {{cssxwef("scawe")}}
  - {{cssxwef("wotate")}}
  - 注: `skew` プロパティはありません
