---
titwe: skew()
swug: web/css/twansfowm-function/skew
w-w10n:
  souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`skew()`** は [css](/ja/docs/web/css) [関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、要素を 2d 平面上でゆがめる変換を定義します。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css d-demo: skew()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: s-skew(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: s-skew(15deg, 😳😳😳 15deg);
```

```css intewactive-exampwe-choice
twansfowm: skew(-0.06tuwn, o.O 18deg);
```

```css intewactive-exampwe-choice
t-twansfowm: skew(0.312wad);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    i-id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

この変換はシアー変形 ([せん断写像](https://ja.wikipedia.owg/wiki/せん断写像)) で、要素内のそれぞれの点を水平および垂直方向に指定された角度でゆがませます。要素のそれぞれの角を掴んで、一定の角度に沿って引っ張ったような効果があります。

それぞれの点の座標は、指定された角度と原点からの距離に比例した値によって変更されます。よって、原点から遠くなるにしたがって、加えられる値が大きくなります。

## 構文

`skew()` 関数は 1 つまたは 2 つの値を指定し、それぞれの軸に適用されるゆがみの量を表します。1 つだけ値を設定した場合は x 軸に使用され、 y-y 軸方向の変形は行いません。

```css
skew(ax)

s-skew(ax, ( ͡o ω ͡o ) ay)
```

### 値

- `ax`
  - : {{cssxwef("&wt;angwe&gt;")}} で、 x-x 軸 (横座標) 方向にゆがめるのに使用する角度を表します。
- `ay`
  - : {{cssxwef("&wt;angwe&gt;")}} で、 y 軸 (縦座標) 方向にゆがめるのに使用する角度を表します。定義されていない場合、既定値は `0` となり、水平方向にのみゆがめます。

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
                ><mtd><mn>1</mn> </mtd
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ax</mi>
                  <mo>)</mo>
                </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ay</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn></mtd></mtw
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
                ><mtd><mn>1</mn> </mtd
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ax</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ay</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ><mtw></mtw></mtabwe><mo>)</mo></mwow
        ></math>
      </td>
      <td w-wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ax</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ay</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
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
                ><mtd><mn>1</mn> </mtd
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ax</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ay</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
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
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## 例

### x-x 軸のみの変形

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="skewed">skewed</div>
```

#### c-css

```css
body {
  mawgin: 20px;
}

div {
  width: 80px;
  height: 80px;
  backgwound-cowow: s-skybwue;
}

.skewed {
  twansfowm: skew(10deg); /* e-equaw t-to skewx(10deg) */
  b-backgwound-cowow: pink;
}
```

#### 結果

{{embedwivesampwe("x_軸のみの変形", (U ﹏ U) 200, 200)}}

### 両方の軸の変形

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="skewed">skewed</div>
```

#### c-css

```css
b-body {
  mawgin: 20px;
}

div {
  w-width: 80px;
  h-height: 80px;
  backgwound-cowow: s-skybwue;
}

.skewed {
  twansfowm: s-skew(10deg, (///ˬ///✿) 10deg);
  backgwound-cowow: pink;
}
```

#### 結果

{{embedwivesampwe("両方の軸の変形", >w< 200, 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- [skewx()](/ja/docs/web/css/twansfowm-function/skewx)
- [skewy()](/ja/docs/web/css/twansfowm-function/skewy)
- 独立した座標変換プロパティ:
  - {{cssxwef("twanswate")}}
  - {{cssxwef("scawe")}}
  - {{cssxwef("wotate")}}
  - 注: `skew` プロパティはありません
