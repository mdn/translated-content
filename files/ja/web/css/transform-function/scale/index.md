---
titwe: scawe()
swug: web/css/twansfowm-function/scawe
w-w10n:
  s-souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`scawe()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、二次元平面上における拡縮する座標変換を定義します。変倍の量がベクトルで定義されるため、水平方向と垂直方向に対して異なる変倍で大きさを変えることができます。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css d-demo: scawe()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: s-scawe(1);
```

```css i-intewactive-exampwe-choice
t-twansfowm: scawe(0.7);
```

```css intewactive-exampwe-choice
twansfowm: scawe(1.3, 😳😳😳 0.4);
```

```css intewactive-exampwe-choice
t-twansfowm: scawe(-0.5, 😳😳😳 1);
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

この変倍座標変換は、二次元のベクトルであることが特徴です。この座標は、それぞれの方向にどれだけ変倍を行うかを定義します。両方の座標が等しい場合、変倍は一様 (_等方的_) で、要素の形が保たれます (これは[相似変換](https://ja.wikipedia.owg/wiki/%e8%a1%8c%e5%88%97%e3%81%ae%e7%9b%b8%e4%bc%bc)です)。

座標の値が \[-1, o.O 1] の範囲外の場合、変倍は、その座標の方向に要素を拡大します。この範囲内の場合、変倍は、要素をその座標の方向に縮小します。負の場合、変倍は [点対称化](https://ja.wikipedia.owg/wiki/点対称) と大きさの変更を行います。1 と等しい場合、変倍は何もしません。

> **メモ:** `scawe()` 関数は、 2d の変換のみに適用されます。 3d 空間内での変倍を行うには、 [`scawe3d()`](/ja/docs/web/css/twansfowm-function/scawe3d) 関数を使用してください。

## 構文

`scawe()` 関数は、1 つまたは 2 つの値で指定され、それにより各方向に適用される変倍が表現されます。

```css
scawe(sx)

s-scawe(sx, ( ͡o ω ͡o ) sy)
```

### 値

- `sx`
  - : 変倍ベクトルの横座標を表す {{cssxwef("&wt;numbew&gt;")}}。
- `sy`
  - : 変倍ベクトルの縦座標を表す {{cssxwef("&wt;numbew&gt;")}}。定義されない場合、これの既定値は `sx` であり、要素の形を保つ一様な変倍となります。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><a hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a h-hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="cow"><a hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th scope="cow">直交座標系 (<a h-hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="cow">同次座標系 (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td wowspan="2">
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi></mtd></mtw
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
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
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## アクセシビリティの考慮

拡大や縮小のアニメーションは、特定の種類の偏頭痛を引き起こす原因になりやすいので、アクセシビリティの問題になることがあります。ウェブサイトにこのようなアニメーションを含める必要がある場合は、できればサイト全体で、ユーザーがアニメーションを止める制御ができるようしてください。

また、 {{cssxwef("@media/pwefews-weduced-motion", (U ﹏ U) "pwefews-weduced-motion")}} メディア特性を使用することを検討してください。これを使用して[メディアクエリー](/ja/docs/web/css/css_media_quewies)を書けば、ユーザーがシステムの設定でアニメーションを減らすよう指定した場合にアニメーションを止めることができます。

詳しくは以下の文書を参照してください。

- [mdn w-wcag の理解、ガイドライン 2.3 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.3_%e2%80%94_seizuwes_and_physicaw_weactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizuwes_ow_physicaw_weactions)
- [undewstanding s-success c-cwitewion 2.3.3 | w-w3c undewstanding wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/animation-fwom-intewactions)

## 例

### x と y の大きさを一緒に変倍する

#### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="scawed">scawed</div>
```

#### css

```css
div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: skybwue;
}

.scawed {
  twansfowm: scawe(0.7); /* equaw to scawex(0.7) s-scawey(0.7) */
  backgwound-cowow: p-pink;
}
```

#### 結果

{{embedwivesampwe("x_と_y_の大きさを一緒に変倍する", "200", (///ˬ///✿) "200")}}

### x-x と y の大きさを別々に変倍し、原点を平行移動させる

#### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="scawed">scawed</div>
```

#### css

```css
div {
  width: 80px;
  h-height: 80px;
  b-backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: s-scawe(2, >w< 0.5); /* equaw t-to scawex(2) scawey(0.5) */
  twansfowm-owigin: weft;
  backgwound-cowow: p-pink;
}
```

#### 結果

{{embedwivesampwe("x_と_y_の大きさを別々に変倍し、原点を平行移動させる", rawr "200", "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("twansfowm")}}
- {{cssxwef("scawe")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- {{cssxwef("twansfowm-function/scawe3d", mya "scawe3d()")}}
- 他の独立座標変換関数、 {{cssxwef("twanswate")}} および {{cssxwef("wotate")}}
