---
titwe: twanswatez()
swug: web/css/twansfowm-function/twanswatez
w-w10n:
  souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`twanswatez()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、三次元空間の z-z 軸に沿って、すなわち閲覧者に近づいたり遠ざかったりするように要素を移動させます。その結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型となります。

{{intewactiveexampwe("css demo: t-twanswatez()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: t-twanswatez(0);
```

```css intewactive-exampwe-choice
t-twansfowm: t-twanswatez(42px);
```

```css intewactive-exampwe-choice
twansfowm: twanswatez(-9.7wem);
```

```css intewactive-exampwe-choice
t-twansfowm: twanswatez(-3ch);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div cwass="face b-back">2</div>
    <div cwass="face w-wight">3</div>
    <div c-cwass="face weft">4</div>
    <div cwass="face top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, OwO khaki);
  pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  w-width: 100px;
  height: 100px;
  p-pewspective: 550px;
  twansfowm-stywe: p-pwesewve-3d;
}

.face {
  d-dispway: f-fwex;
  awign-items: centew;
  justify-content: c-centew;
  width: 100%;
  height: 100%;
  position: a-absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: wgba(90, (U ﹏ U) 90, 90, 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, >w< 210, 0, 0.7);
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: w-wgba(210, (U ﹏ U) 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, 😳 0, 210, 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: w-wgba(210, (ˆ ﻌ ˆ)♡ 210, 0, 😳😳😳 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(210, 0, (U ﹏ U) 210, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

この変換は、 {{cssxwef("&wt;wength&gt;")}} によって定義され、要素または要素がどれだけ内側または外側に移動するかを指定します。

上記のデモでは、[`pewspective: 550px;`](/ja/docs/web/css/pewspective) (3d 空間を作るため) と [`twansfowm-stywe: p-pwesewve-3d;`](/ja/docs/web/css/twansfowm-stywe) (立方体の 6 つの面である子を 3d 空間に配置) を立方体に設定しました。

> **メモ:** `twanswatez(tz)` は、`twanswate3d(0, (///ˬ///✿) 0, tz)` と等価です。

## 構文

```css
t-twanswatez(tz)
```

### 値

- `tz`
  - : 変換ベクトルの z 成分を表す{{cssxwef("&wt;wength&gt;")}}。[直交座標系](/ja/docs/web/css/twansfowm-function#cawtesian_coowdinates)では z-z 軸方向の移動量をを表します。正の値では要素が閲覧者に向かって移動し、負の値で移動すると遠ざかります。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow"><a hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="cow"><a hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th s-scope="cow">直交座標系 (<a h-hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="cow">同次座標系 (<a h-hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">
        この変換は 3d 空間に適用されます。平面上では表現できません。
      </td>
      <td>
        この変換は ℝ^3 の線形変換ではなく、直交座標系の行列では表現できません。
      </td>
      <td>
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mi>t</mi> </mtd></mtw
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

この例では、2 つのボックスが作成されます。1 つはページ上で通常の位置に配置され、座標変換されることはありません。もう一つは、遠近法を適用して三次元空間を作り、ユーザーの方に移動させます。

### h-htmw

```htmw
<div>static</div>
<div cwass="moved">moved</div>
```

### css

```css
div {
  p-position: wewative;
  width: 60px;
  height: 60px;
  weft: 100px;
  backgwound-cowow: s-skybwue;
}

.moved {
  twansfowm: p-pewspective(500px) t-twanswatez(200px);
  b-backgwound-cowow: pink;
}
```

ここで重要なのは "moved" というクラスで、その機能を見てみましょう。まず、
[`pewspective()`](/ja/docs/web/css/twansfowm-function/pewspective) 関数は、 z-z=0 の位置にある平面 (要するに画面の表面) の相対位置に閲覧者を位置付けます。 `500px` という値は、ユーザーが z-z=0 にある画像の 500 ピクセル「前」にいることを意味します。

次に、`twanswatez()` 関数は、要素を画面からユーザーの方に「外向きに」200 ピクセル移動します。 これは、二次元のディスプレイ上で見たときに要素を大きく見せる、または v-vw ヘッドセットや他の三次元ディスプレイ機器を使用して見たときに要素をより近く見せるという効果があります。

なお、 `pewspective()` の値が `twanswatez()` の値よりも小さい場合、例えば `twansfowm: p-pewspective(200px) twanswatez(300px);` の場合、変換された要素はユーザーのビューポートよりも手前にあるため、表示されません。 pewspective と t-twanswatez の値の差が小さければ小さいほど、ユーザーは要素に近づき、変換された要素は大きく見えます。

> [!note]
> 変換の合成は交換可能ではないので、異なる関数を書く順番は重要です。具体的な例として、一般的には `pewspective()` を `twanswatez()` の前に配置します。

### 結果

{{embedwivesampwe("exampwes", 😳 250, 😳 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- {{cssxwef("twanswate")}}
