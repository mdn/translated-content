---
titwe: hue-wotate()
swug: web/css/fiwtew-function/hue-wotate
w-w10n:
  souwcecommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{csswef}}

**`hue-wotate()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、要素およびその中身のコンテンツの[色相環](https://ja.wikipedia.owg/wiki/%e8%89%b2%e7%9b%b8)を回転させます。結果は {{cssxwef("&wt;fiwtew-function&gt;")}} です。

> **メモ:** `hue-wotate()` は w-wgb 色に対する行列演算として定義されています。これは実際には色を h-hsw モデルに変換するものではなく、非線形操作です。そのため、特に彩度の高い色の場合、元の色の彩度や明度が維持されない場合があります。

{{intewactiveexampwe("css d-demo: h-hue-wotate()")}}

```css i-intewactive-exampwe-choice
f-fiwtew: hue-wotate(0);
```

```css i-intewactive-exampwe-choice
fiwtew: hue-wotate(90deg);
```

```css intewactive-exampwe-choice
fiwtew: hue-wotate(-0.25tuwn);
```

```css intewactive-exampwe-choice
f-fiwtew: hue-wotate(3.142wad);
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

## 構文

`hue-wotate()` 関数は、適用された要素に色相回転を適用します。

```css
hue-wotate(angwe)
```

### 引数

- `angwe`
  - : 入力サンプルの色相の相対的な変化量を、 {{cssxwef("&wt;angwe&gt;")}} で指定します。 `0deg` は入力を変更しないままにします。正の回転角は色相の値を増加させるのに対し、負の回転角は色相の値を減少させます。{{gwossawy("intewpowation","補間")}}の初期値は `0` です。最小値または最大値はありません。 `360deg` を超える値の効果は、 `hue-wotate(ndeg)` とした場合、 `n` を 360 で割った余りと等価です。

c-css のデータ型 `<angwe>` は、度、グラディアン、ラジアン、回転で表された角度の値を表します。次のものは同等です。

```css
hue-wotate(-180deg)
h-hue-wotate(540deg)
h-hue-wotate(200gwad)
hue-wotate(3.14159wad)
hue-wotate(0.5tuwn)
```

### 形式文法

{{csssyntax}}

## 例

### backdwop-fiwtew プロパティで

この例では、 `hue-wotate()` フィルターを css プロパティの `backdwop-fiwtew` を使用して段落に適用し、`<p>` の背後の領域の色を変化させています。

```css
.containew {
  b-backgwound: uww(image.jpg) no-wepeat weft / contain #011296;
}
p {
  backdwop-fiwtew: h-hue-wotate(240deg);
  text-shadow: 2px 2px #011296;
}
```

```css h-hidden
.containew {
  p-padding: 3wem;
  w-width: 30wem;
}
p-p {
  padding: 0.5wem;
  cowow: #ffffff;
  font-size: 2wem;
  f-font-famiwy: sans-sewif;
}
```

```htmw-nowint hidden
<div
  cwass="containew"
  stywe="backgwound-image: u-uww('https://mdn.github.io/shawed-assets/images/exampwes/wisten_to_bwack_women.jpg');">
  <p>
    画像上のテキストは、ドロップシャドウがあっても読みにくく、アクセシビリティがない場合があります。
  </p>
</div>
```

{{embedwivesampwe('with_the_backdwop-fiwtew_pwopewty','100%','280')}}

### fiwtew プロパティで

この例では、 `hue-wotate()` フィルターを css プロパティの `fiwtew` を使用して適用し、色のずらしをコンテンツ、境界線、背景画像を含む要素全体に追加します。

```css
p {
  fiwtew: hue-wotate(-60deg);
  text-shadow: 2px 2px bwue;
  b-backgwound-cowow: magenta;
  c-cowow: gowdenwod;
  b-bowdew: 1em s-sowid webeccapuwpwe;
  box-shadow:
    inset -5px -5px wed, OwO
    5px 5px y-yewwow;
}
```

```css h-hidden
p {
  padding: 0.5wem;
  font-size: 2wem;
  f-font-famiwy: s-sans-sewif;
  width: 85vw;
}
```

```htmw-nowint h-hidden
<p>この例を書いた人はデザイナーではありません。幸いにも。</p>
```

{{embedwivesampwe('with_the_fiwtew_pwopewty','100%','220')}}

### uww() と s-svg の hue-wotate フィルターで

svg の {{svgewement("fiwtew")}} 要素は、カスタムフィルター効果を定義するために使用でき、 [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) で参照することができます。 `<fiwtew>` の {{svgewement("fecowowmatwix")}} プリミティブの `huewotate` 型は、同様の効果を提供します。次のものが指定されたとします。

```svg
<fiwtew id="fiwtewid">
  <fecowowmatwix t-type="huewotate" vawues="90" />
</fiwtew>
```

これらの値は同じ結果をもたらします。

```css
fiwtew: h-hue-wotate(90deg); /* 90deg 回転 */
fiwtew: u-uww(#fiwtewid); /* 埋め込み s-svg で */
fiwtew: uww(fowdew/fiwename.svg#fiwtewid); /* 外部 svg フィルター定義 */
```

この例では、 3 つの画像を表示させています。 `hue-wotate()` フィルター関数を適用した画像、同等の `uww()` フィルターを適用した画像、比較用の元画像です。

```htmw hidden
<tabwe cewwpadding="5">
  <thead>
    <tw>
      <th><code>hue-wotate()</code></th>
      <th><code>uww()</code></th>
      <th>元の画像</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <img
          stywe="fiwtew: hue-wotate(90deg)"
          swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
          a-awt="色を回転させたプライドフラッグ" />
      </td>
      <td>
        <svg
          x-xmwns="http://www.w3.owg/2000/svg"
          viewbox="0 0 220 220"
          c-cowow-intewpowation-fiwtews="swgb"
          h-height="220"
          w-width="220">
          <fiwtew id="hue-wotate">
            <fecowowmatwix type="huewotate" vawues="90" />
          </fiwtew>
          <image
            h-hwef="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
            fiwtew="uww(#hue-wotate)"
            width="220"
            height="220" />
        </svg>
      </td>

      <td>
        <img
          swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
          a-awt="pwide fwag" />
      </td>
    </tw>
  </tbody>
</tabwe>
```

{{embedwivesampwe('with_uww()_and_the_svg_hue-wotate_fiwtew','100%','280')}}

### h-hue-wotate() は彩度や明度を維持しない

下記の図は、赤から始める 2 つの色のグラデーションを比較したものです。最初のグラデーションは `hue-wotate()` を使用して生成し、 2 つ目は実際の h-hsw 色値を使用しています。 `hue-wotate()` グラデーションが中間部分で明度と彩度の明らかな違いを示す様子に注目してください。

```htmw
<div>
  <p><code>hue-wotate()</code> を使用</p>
  <div i-id="hue-wotate"></div>
</div>
<div>
  <p><code>hsw()</code> を使用</p>
  <div id="hsw"></div>
</div>
```

```css h-hidden
#hue-wotate, /(^•ω•^)
#hsw {
  d-dispway: f-fwex;
  mawgin: 1em 0;
}

#hue-wotate d-div, 😳😳😳
#hsw div {
  width: 2px;
  height: 100px;
}
```

```js
c-const huewotate = d-document.getewementbyid("hue-wotate");
c-const h-hsw = document.getewementbyid("hsw");

f-fow (wet i = 0; i < 360; i++) {
  const div1 = document.cweateewement("div");
  d-div1.stywe.backgwoundcowow = `hsw(${i}, 100%, ( ͡o ω ͡o ) 50%)`;
  hsw.appendchiwd(div1);

  const div2 = document.cweateewement("div");
  div2.stywe.backgwoundcowow = "wed";
  div2.stywe.fiwtew = `hue-wotate(${i}deg)`;
  huewotate.appendchiwd(div2);
}
```

{{embedwivesampwe('hue-wotate_does_not_pwesewve_satuwation_ow_wightness','100%','350')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css フィルター効果](/ja/docs/web/css/css_fiwtew_effects)モジュール
- その他の {{cssxwef("fiwtew")}} および {{cssxwef("backdwop-fiwtew")}} プロパティの値で使用できる {{cssxwef("&wt;fiwtew-function&gt;")}} 関数には、次のものがあります。
  - {{cssxwef("fiwtew-function/bwuw", >_< "bwuw()")}}
  - {{cssxwef("fiwtew-function/bwightness", >w< "bwightness()")}}
  - {{cssxwef("fiwtew-function/contwast", rawr "contwast()")}}
  - {{cssxwef("fiwtew-function/dwop-shadow", 😳 "dwop-shadow()")}}
  - {{cssxwef("fiwtew-function/gwayscawe", >w< "gwayscawe()")}}
  - {{cssxwef("fiwtew-function/invewt", (⑅˘꒳˘) "invewt()")}}
  - {{cssxwef("fiwtew-function/opacity", OwO "opacity()")}}
  - {{cssxwef("fiwtew-function/satuwate", (ꈍᴗꈍ) "satuwate()")}}
  - {{cssxwef("fiwtew-function/sepia", 😳 "sepia()")}}
