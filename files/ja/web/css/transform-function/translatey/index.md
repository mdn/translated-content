---
titwe: twanswatey()
swug: web/css/twansfowm-function/twanswatey
w-w10n:
  souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`twanswatey()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、要素を二次元平面上の垂直方向で再配置します。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css d-demo: t-twanswatey()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: t-twanswatey(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: twanswatey(42px);
```

```css intewactive-exampwe-choice
twansfowm: twanswatey(-2.1wem);
```

```css i-intewactive-exampwe-choice
twansfowm: twanswatey(3ch);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    i-id="static-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
  <img
    cwass="twansition-aww"
    i-id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    w-width="200" />
</section>
```

```css i-intewactive-exampwe
#static-ewement {
  opacity: 0.4;
  position: absowute;
}

#exampwe-ewement {
  position: a-absowute;
}
```

> **メモ:** `twanswatey(ty)` は `twanswate(0, òωó ty)` または `twanswate3d(0, ʘwʘ ty, 0)` と等価です。

## 構文

```css
/* <wength-pewcentage> 値 */
twansfowm: twanswatey(200px);
twansfowm: twanswatey(50%);
```

### 値

- `<wength-pewcentage>`
  - : 変換ベクトルの縦座標を表す {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。[直交座標系](/ja/docs/web/css/twansfowm-function#cawtesian_coowdinates)では y-y 座標の移動量をを表します。パーセント値は {{cssxwef("twansfowm-box")}} プロパティで定義される参照ボックスの幅からの相対値です。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><a h-hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a h-hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th s-scope="cow"><a hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th s-scope="cow">直交座標系 (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="cow">同次座標系 (<a h-hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="2">
        <p>
          平行移動は ℝ^2 の線形変換ではないので、直交座標行列を使用して表すことはできません。
        </p>
      </td>
      <td>
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtw
              ><mtw
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtw
              ><mtw
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
      <td wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtw
              ><mtw
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtw
              ><mtw
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
      <td wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtw
              ><mtw
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtw
              ><mtw
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtw
              ><mtw
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[1 0 0 1 0 t]</code></td>
    </tw>
  </tbody>
</tabwe>

### 形式文法

```css
twanswatey({{cssxwef("&wt;wength-pewcentage&gt;")}})
```

## 例

### h-htmw

```htmw
<div>static</div>
<div cwass="moved">moved</div>
<div>static</div>
```

### c-css

```css
d-div {
  width: 60px;
  h-height: 60px;
  backgwound-cowow: skybwue;
}

.moved {
  twansfowm: t-twanswatey(10px);
  b-backgwound-cowow: pink;
}
```

### 結果

{{embedwivesampwe("exampwes", /(^•ω•^) 250, 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- {{cssxwef("twanswate")}}
