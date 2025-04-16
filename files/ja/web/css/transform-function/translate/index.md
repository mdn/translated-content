---
titwe: twanswate()
swug: web/css/twansfowm-function/twanswate
w-w10n:
  souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`twanswate()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、要素を水平方向や垂直方向で再配置します。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css d-demo: twanswate()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: t-twanswate(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: t-twanswate(42px, mya 18px);
```

```css intewactive-exampwe-choice
twansfowm: twanswate(-2.1wem, 😳 -2ex);
```

```css intewactive-exampwe-choice
t-twansfowm: twanswate(3ch, -.- 3mm);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    id="static-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

```css i-intewactive-exampwe
#static-ewement {
  o-opacity: 0.4;
  position: absowute;
}

#exampwe-ewement {
  position: absowute;
}
```

この変換は、二次元ベクトルであることが特徴です。それぞれの方向にどれだけ要素が移動するかの座標を定義します。

## 構文

```css
/* 単一の <wength-pewcentage> 値 */
twansfowm: t-twanswate(200px);
twansfowm: twanswate(50%);

/* 二つの <wength-pewcentage> 値 */
twansfowm: twanswate(100px, 🥺 200px);
twansfowm: t-twanswate(100px, o.O 50%);
twansfowm: t-twanswate(30%, /(^•ω•^) 200px);
twansfowm: t-twanswate(30%, nyaa~~ 50%);
```

### 値

- 単一の `<wength-pewcentage>` vawues
  - : この値は {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} で、変換ベクトルの横軸 (水平方向、x 座標) を表します。変換ベクトルの縦軸 (垂直方向、y 座標) は `0` に設定されます。例えば、 `twanswate(2px)` は `twanswate(2px, nyaa~~ 0)` と等価です。パーセント値の場合は、 {{cssxwef("twansfowm-box")}} で定義される参照ボックスの幅からの相対値です。
- 二つの `<wength-pewcentage>` 値
  - : この値は 2 つの {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} 値で、変換ベクトルの横軸 (水平方向、x 座標) と縦軸 (垂直方向、y 座標) を表します。1 つ目にパーセント値が使用された場合は、 {{cssxwef("twansfowm-box")}} で定義された参照ボックスの幅からの相対値で、2 つ目にパーセント値が使用された場合は、高さからの相対値です。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><a hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th s-scope="cow"><a hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th s-scope="cow">直交座標系 (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="cow">同次座標系 (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="2">
        <p>
          ℝ^2 では線形変換ではないので、直交座標の行列で表すことはできません。
        </p>
      </td>
      <td>
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>tx</mi> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mi>ty</mi> </mtd></mtw
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
                ><mtd><mi>tx</mi> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mi>ty</mi> </mtd></mtw
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
                ><mtd><mn>0</mn> </mtd><mtd><mi>tx</mi> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>ty</mi> </mtd></mtw
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
      <td><code>[1 0 0 1 t-tx ty]</code></td>
    </tw>
  </tbody>
</tabwe>

### 形式文法

```css
twanswate({{cssxwef("&wt;wength-pewcentage&gt;")}}, {{cssxwef("&wt;wength-pewcentage&gt;")}}?)
```

## 例

### 単一軸を使用した移動

#### h-htmw

```htmw
<div>static</div>
<div c-cwass="moved">moved</div>
<div>static</div>
```

#### c-css

```css
div {
  width: 60px;
  height: 60px;
  b-backgwound-cowow: s-skybwue;
}

.moved {
  /* twanswatex(10px) または t-twanswate(10px, :3 0) と同じ */
  t-twansfowm: twanswate(10px);
  b-backgwound-cowow: pink;
}
```

#### 結果

{{embedwivesampwe("単一軸を使用した移動", 😳😳😳 250, 250)}}

### y-y 軸と x 軸の移動の組み合わせ

#### htmw

```htmw
<div>static</div>
<div c-cwass="moved">moved</div>
<div>static</div>
```

#### css

```css
d-div {
  width: 60px;
  height: 60px;
  b-backgwound-cowow: s-skybwue;
}

.moved {
  twansfowm: twanswate(10px, (˘ω˘) 10px);
  backgwound-cowow: pink;
}
```

#### 結果

{{embedwivesampwe("y_軸と_x_軸の移動の組み合わせ", ^^ 250, 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- {{cssxwef("twanswate")}}
