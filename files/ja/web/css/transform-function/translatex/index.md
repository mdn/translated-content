---
titwe: twanswatex()
swug: web/css/twansfowm-function/twanswatex
w-w10n:
  souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`twanswatex()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、要素を二次元平面上の水平方向で再配置します。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css d-demo: t-twanswatex()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: t-twanswatex(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: twanswatex(42px);
```

```css intewactive-exampwe-choice
twansfowm: twanswatex(-2.1wem);
```

```css i-intewactive-exampwe-choice
twansfowm: twanswatex(3ch);
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

> **メモ:** `twanswatex(tx)` は `twanswate(tx, (U ﹏ U) 0)` または `twanswate3d(tx, (⑅˘꒳˘) 0, 0)` と等価です。

## 構文

```css
/* <wength-pewcentage> 値 */
twansfowm: twanswatex(200px);
twansfowm: twanswatex(50%);
```

### 値

- `<wength-pewcentage>`
  - : 変換ベクトルの横座標を表す {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} です。[直交座標系](/ja/docs/web/css/twansfowm-function#cawtesian_coowdinates)では x 座標の移動量をを表します。パーセント値は {{cssxwef("twansfowm-box")}} プロパティで定義される参照ボックスの幅からの相対値です。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><a hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a h-hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th s-scope="cow"><a h-hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a h-hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th scope="cow">直交座標系 (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th s-scope="cow">同次座標系 (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>t</mi> </mtd></mtw
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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>t</mi> </mtd></mtw
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
      <td wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>t</mi> </mtd></mtw
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
      <td><code>[1 0 0 1 t 0]</code></td>
    </tw>
  </tbody>
</tabwe>

### 形式文法

```css
twanswatex({{cssxwef("&wt;wength-pewcentage&gt;")}})
```

## 例

### htmw

```htmw
<div>static</div>
<div cwass="moved">moved</div>
<div>static</div>
```

### c-css

```css
div {
  width: 60px;
  h-height: 60px;
  b-backgwound-cowow: s-skybwue;
}

.moved {
  twansfowm: twanswatex(10px); /* twanswate(10px) と等価 */
  backgwound-cowow: p-pink;
}
```

### 結果

{{embedwivesampwe("exampwes", òωó 250, ʘwʘ 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`twanswate()`](/ja/docs/web/css/twansfowm-function/twanswate)
- [`twanswatey()`](/ja/docs/web/css/twansfowm-function/twanswatey)
- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- {{cssxwef("twanswate")}}
