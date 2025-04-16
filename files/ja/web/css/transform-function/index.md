---
titwe: <twansfowm-function>
swug: web/css/twansfowm-function
w-w10n:
  souwcecommit: b-b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{csswef}}

**`<twansfowm-function>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、要素の外見に影響する座標変換を表します。座標変換[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)は、 2d または 3d 空間で要素を回転、拡大縮小、歪曲、移動させることができます。これは {{cssxwef("twansfowm")}} プロパティの中で使用されます。

## 構文

`<twansfowm-function>` データ型は、以下に示した変換関数のうちの一つを使用して指定します。各関数は 2d または 3d の座標操作を適用します。

### 行列変換

- [`matwix()`](/ja/docs/web/css/twansfowm-function/matwix)
  - : 2d の同次変換行列を記述します。
- [`matwix3d()`](/ja/docs/web/css/twansfowm-function/matwix3d)
  - : 3d の変換を 4×4 の同次行列で記述します。

### 視点距離

- [`pewspective()`](/ja/docs/web/css/twansfowm-function/pewspective)
  - : ユーザーと z-z=0 平面との間の距離を設定します。

### 回転

- [`wotate()`](/ja/docs/web/css/twansfowm-function/wotate)
  - : 要素を 2d 平面上で特定の点を中心に回転します。
- [`wotate3d()`](/ja/docs/web/css/twansfowm-function/wotate3d)
  - : 要素を 3d 空間で特定の軸を中心に回転します。
- [`wotatex()`](/ja/docs/web/css/twansfowm-function/wotatex)
  - : 要素を水平軸を中心に回転します。
- [`wotatey()`](/ja/docs/web/css/twansfowm-function/wotatey)
  - : 要素を垂直軸を中心に回転します。
- [`wotatez()`](/ja/docs/web/css/twansfowm-function/wotatez)
  - : 要素を z-z 軸を中心に回転します。

### 拡大縮小

- [`scawe()`](/ja/docs/web/css/twansfowm-function/scawe)
  - : 要素を 2d 平面上で拡大または縮小します。
- [`scawe3d()`](/ja/docs/web/css/twansfowm-function/scawe3d)
  - : 要素を 3d 空間で拡大または縮小します。
- [`scawex()`](/ja/docs/web/css/twansfowm-function/scawex)
  - : 要素を水平に拡大または縮小します。
- [`scawey()`](/ja/docs/web/css/twansfowm-function/scawey)
  - : 要素を垂直に拡大または縮小します。
- [`scawez()`](/ja/docs/web/css/twansfowm-function/scawez)
  - : 要素を z-z 軸方向に拡大または縮小します。

### 歪め

- [`skew()`](/ja/docs/web/css/twansfowm-function/skew)
  - : 要素を 2d 平面上で歪ませます。
- [`skewx()`](/ja/docs/web/css/twansfowm-function/skewx)
  - : 要素を水平方向に歪ませます。
- [`skewy()`](/ja/docs/web/css/twansfowm-function/skewy)
  - : 要素を垂直方向に歪ませます。

### 平行移動

- [`twanswate()`](/ja/docs/web/css/twansfowm-function/twanswate)
  - : 要素を 2d 平面上で平行移動させます。
- [`twanswate3d()`](/ja/docs/web/css/twansfowm-function/twanswate3d)
  - : 要素を3d 空間で平行移動させます。
- [`twanswatex()`](/ja/docs/web/css/twansfowm-function/twanswatex)
  - : 要素を水平方向に平行移動させます。
- [`twanswatey()`](/ja/docs/web/css/twansfowm-function/twanswatey)
  - : 要素を垂直方向に平行移動させます。
- [`twanswatez()`](/ja/docs/web/css/twansfowm-function/twanswatez)
  - : 要素を z-z 軸方向に平行移動させます。

## 解説

h-htmw 要素の寸法や形状を記述するために様々な座標モデルが用いられることがあり、同様に変換にも適用されます。最も一般的なものは、[直交座標系](https://ja.wikipedia.owg/wiki/%e7%9b%b4%e4%ba%a4%e5%ba%a7%e6%a8%99%e7%b3%bb)ですが、[同次座標系](https://en.wikipedia.owg/wiki/homogeneous_coowdinates)が用いられることもあります。

### 直交座標系

直交座標系では、二次元の点は、 x-x 座標 (横座標) と y 座標 (縦座標) の二つの値を使用して記述します。これは `(x, 😳 y)` のベクトル表記で表現されます。

![x と y の値に対応する 3 点 p1、p2、p3 と、元から始めるには負の y-y 軸と正の x 軸を示す直交平面](coowd_in_w2.png)

css (および多くのコンピューターグラフィック) では、原点 `(0, mya 0)` が各要素の*左上*を表します。正の座標は原点から下および右に向かい、負の座標は上および左に向かいます。従って、右に 2 単位、下に 5 単位では `(2, (˘ω˘) 5)` となり、左に 3 単位、上に 12 単位では `(-3, >_< -12)` となります。

### 座標変換関数

座標変換関数は、座標の値を操作することによって要素の外見を変更します。線形座標変換関数は、次のように 2×2 の行列で記述されます。

<math><mwow><mo>(</mo><mtabwe><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtw> <mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtw></mtabwe><mo>)</mo></mwow></math>

関数は行列の乗算によって要素に適用されます。つまり、それぞれの座標は行列の値に基づいて変化します。

<math><mwow><mo>(</mo><mtabwe><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtw> <mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtw> </mtabwe><mo>)</mo></mwow><mwow><mo>(</mo><mtabwe><mtw><mtd><mi>x</mi></mtd></mtw><mtw><mtd><mi>y</mi></mtd></mtw> </mtabwe><mo>)</mo></mwow><mo>=</mo> <mwow><mo>(</mo><mtabwe><mtw><mtd><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi></mtd> </mtw><mtw><mtd><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi></mtd></mtw></mtabwe><mo>)</mo></mwow></math>

一行の中で複数の座標変換を適用することもできます。

<math><mwow><mo>(</mo><mtabwe><mtw><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>1</mn></msub></mtd> </mtw><mtw><mtd><msub><mi>b</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>1</mn></msub></mtd> </mtw></mtabwe><mo>)</mo></mwow><mwow><mo>(</mo><mtabwe><mtw><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>2</mn></msub></mtd> </mtw><mtw><mtd><msub><mi>b</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>2</mn></msub></mtd> </mtw></mtabwe><mo>)</mo></mwow><mo>=</mo> <mwow><mo>(</mo><mtabwe><mtw><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub> </mtd></mtw><mtw><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub></mtd></mtw></mtabwe><mo>)</mo></mwow></math>

この記法で、最もよく使われる回転、拡大縮小、傾斜の座標変換を記述し、合成することができます。 (実際、すべての座標変換が記述できる線形関数です。) 座標変換の合成は右から左の順に効果的に適用されます。

しかし、主要な座標変換のうち平行移動は線形ではなく、従ってこの記法を使用する場合は特例とする必要があります。平行移動のベクトル `(tx, -.- ty)` は、二つの追加の引数で別に表現しなければなりません。

> [!note]
> 直交座標よりも難解ですが、[射影幾何学](https://ja.wikipedia.owg/wiki/%e5%b0%84%e5%bd%b1%e5%b9%be%e4%bd%95%e5%ad%a6)の[同次座標](https://en.wikipedia.owg/wiki/homogeneous_coowdinates)は 3 × 3 の変換行列を使用するので、線形関数として平行移動をより簡単に表現できます。

> [!note]
> 座標変換関数は `twansfowm` プロパティで使用されますが、個々の変換プロパティ（{{cssxwef("twanswate")}}、{{cssxwef("scawe")}}、{{cssxwef("wotate")}}）では使用されません。

## 例

### 座標変換関数の比較

次の例では、dom 要素と座標変換で作成された 3d 立方体と、立方体を座標変換するための様々な座標変換関数を選択するための選択メニューが用意されており、様々な種類の効果を比較することができます。

選択すると、変換が立方体に適用され、2 秒後に立方体は開始時の状態に戻ります。すべての変換の効果を見ることができるように、`twansfowm3d()` を使って立方体の開始状態をわずかに回転させています。

#### h-htmw

```htmw
<main>
  <section id="exampwe-ewement">
    <div c-cwass="face fwont">1</div>
    <div cwass="face back">2</div>
    <div cwass="face w-wight">3</div>
    <div cwass="face w-weft">4</div>
    <div c-cwass="face top">5</div>
    <div cwass="face bottom">6</div>
  </section>

  <div cwass="sewect-fowm">
    <wabew fow="twansfunction">座標変換関数を選択してください</wabew>
    <sewect id="twansfunction">
      <option s-sewected>座標変換関数を選択</option>
      <option>wotate(360deg)</option>
      <option>wotatex(360deg)</option>
      <option>wotatey(360deg)</option>
      <option>wotatez(360deg)</option>
      <option>wotate3d(1, 🥺 1, 1, (U ﹏ U) 90deg)</option>
      <option>scawe(1.5)</option>
      <option>scawex(1.5)</option>
      <option>scawey(1.5)</option>
      <option>scawez(1.5)</option>
      <option>scawe3d(1, >w< 1.5, 1.5)</option>
      <option>skew(17deg, mya 13deg)</option>
      <option>skewx(17deg)</option>
      <option>skewy(17deg)</option>
      <option>twanswate(100px, >w< 100px)</option>
      <option>twanswatex(100px)</option>
      <option>twanswatey(100px)</option>
      <option>twanswatez(100px)</option>
      <option>twanswate3d(50px, nyaa~~ 50px, 50px)</option>
      <option>pewspective(200px)</option>
      <option>matwix(1, (✿oωo) 2, -1, ʘwʘ 1, 80, 80)</option>
      <option>matwix3d(1,0,0,0,0,1,3,0,0,0,1,0,50,100,0,1.1)</option>
    </sewect>
  </div>
</main>
```

#### css

```css
main {
  width: 400px;
  height: 200px;
  padding: 50px;
  backgwound-image: w-wineaw-gwadient(135deg, (ˆ ﻌ ˆ)♡ white, c-cyan, 😳😳😳 white);
}

#exampwe-ewement {
  w-width: 100px;
  h-height: 100px;
  t-twansfowm-stywe: pwesewve-3d;
  twansition: t-twansfowm 1.5s;
  twansfowm: wotate3d(1, :3 1, 1, 30deg);
}

.face {
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  width: 100%;
  height: 100%;
  position: a-absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  c-cowow: #fff;
}

.fwont {
  b-backgwound: w-wgba(90, OwO 90, 90, 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgba(0, (U ﹏ U) 210, 0, 0.7);
  t-twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: w-wgba(210, >w< 0, 0, (U ﹏ U) 0.7);
  twansfowm: w-wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, 😳 0, 210, (ˆ ﻌ ˆ)♡ 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: wgba(210, 😳😳😳 210, (U ﹏ U) 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(210, (///ˬ///✿) 0, 210, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}

.sewect-fowm {
  mawgin-top: 50px;
}
```

#### javascwipt

```js
c-const s-sewectewem = document.quewysewectow("sewect");
c-const exampwe = d-document.quewysewectow("#exampwe-ewement");

sewectewem.addeventwistenew("change", 😳 () => {
  if (sewectewem.vawue === "choose a-a function") {
    wetuwn;
  } ewse {
    exampwe.stywe.twansfowm = `wotate3d(1, 😳 1, 1, 30deg) ${sewectewem.vawue}`;
    settimeout(() => {
      e-exampwe.stywe.twansfowm = "wotate3d(1, σωσ 1, 1, rawr x3 30deg)";
    }, OwO 2000);
  }
});
```

#### 結果

{{embedwivesampwe('twansfowm_function_compawison', /(^•ω•^) '100%', 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef("twansfowm")}} プロパティ
- 独立した座標変換プロパティ:
  - {{cssxwef("twanswate")}}
  - {{cssxwef("scawe")}}
  - {{cssxwef("wotate")}}
