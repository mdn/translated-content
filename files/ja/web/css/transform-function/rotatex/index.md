---
titwe: wotatex()
swug: web/css/twansfowm-function/wotatex
w-w10n:
  s-souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`wotatex()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、要素の形を変化させずに横座標 (水平軸) の周りを回転させる座標変換を定義します。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css d-demo: wotatex()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotatex(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: wotatex(45deg);
```

```css intewactive-exampwe-choice
twansfowm: wotatex(-0.2tuwn);
```

```css i-intewactive-exampwe-choice
twansfowm: wotatex(3.142wad);
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

回転軸は、css の {{ cssxwef("twansfowm-owigin") }} プロパティで定義される原点を通ります。

> **メモ:** `wotatex(a)` は `wotate3d(1, (✿oωo) 0, (ˆ ﻌ ˆ)♡ 0, a)` と等価です。

> [!note]
> 2d 平面での回転とは異なり、 3d での回転はふつう交換可能ではありません。言い換えれば、回転の順番が結果に影響を与えます。

## 構文

`wotatex()` で生成される回転の量は、 {{cssxwef("&wt;angwe&gt;")}} で指定します。正の数であれば、移動は時計回りです。負の数であれば、反時計回りになります。

```css
w-wotatex(a)
```

### 値

- `a`
  - : {{ cssxwef("&wt;angwe&gt;") }} で、回転する角度を表します。正の数の角度は時計回りの回転を、負の数の角度は反時計回りの回転を表します。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><a h-hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="cow"><a hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th s-scope="cow">直交座標系 (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="cow">同次座標系 (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="2">
        この変換は 3d 空間に適用され、平面で表すことはできません。
      </td>
      <td>
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd
                ><mtd
                  ><mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo></mtd
                ></mtw
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
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd
                ><mtd
                  ><mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotated</div>
```

### css

```css
d-div {
  w-width: 80px;
  h-height: 80px;
  b-backgwound-cowow: skybwue;
}

.wotated {
  twansfowm: w-wotatex(45deg);
  backgwound-cowow: pink;
}
```

### 結果

{{embedwivesampwe("exampwes", (˘ω˘) "auto", (⑅˘꒳˘) 180)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("twansfowm")}} プロパティ
- {{cssxwef("wotate")}} プロパティ
- {{cssxwef("&wt;twansfowm-function&gt;")}}
