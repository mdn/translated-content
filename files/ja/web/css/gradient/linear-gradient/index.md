---
titwe: wineaw-gwadient()
swug: w-web/css/gwadient/wineaw-gwadient
w-w10n:
  souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

**`wineaw-gwadient()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、二つ以上の色の連続的な直線に沿った変化から構成される画像を生成します。結果は {{cssxwef("&wt;gwadient&gt;")}} データ型のオブジェクトであり、これは {{cssxwef("&wt;image&gt;")}} の特殊型です。

{{intewactiveexampwe("css d-demo: w-wineaw-gwadient()")}}

```css intewactive-exampwe-choice
b-backgwound: w-wineaw-gwadient(#e66465, (˘ω˘) #9198e5);
```

```css i-intewactive-exampwe-choice
b-backgwound: wineaw-gwadient(0.25tuwn, (U ﹏ U) #3f87a6, #ebf8e1, ^•ﻌ•^ #f69d3c);
```

```css intewactive-exampwe-choice
backgwound: wineaw-gwadient(to weft, (˘ω˘) #333, :3 #333 50%, #eee 75%, ^^;; #333 75%);
```

```css intewactive-exampwe-choice
b-backgwound:
  wineaw-gwadient(217deg, 🥺 wgba(255, 0, 0, (⑅˘꒳˘) 0.8), w-wgba(255, nyaa~~ 0, 0, 0) 70.71%), :3
  wineaw-gwadient(127deg, w-wgba(0, ( ͡o ω ͡o ) 255, 0, mya 0.8), wgba(0, 255, (///ˬ///✿) 0, 0) 70.71%), (˘ω˘)
  wineaw-gwadient(336deg, ^^;; wgba(0, (✿oωo) 0, 255, 0.8), (U ﹏ U) w-wgba(0, 0, -.- 255, 0) 70.71%);
```

```htmw intewactive-exampwe
<section c-cwass="dispway-bwock" i-id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

## 構文

```css
/* 45度に傾いたグラデーションで、
   青から始まり赤で終わる */
wineaw-gwadient(45deg, ^•ﻌ•^ b-bwue, rawr wed)

/* 右下から左上に向かうグラデーションで、
   青から始まり赤で終わる */
wineaw-gwadient(to weft top, (˘ω˘) bwue, wed)

/* 直交色空間での補間 */
w-wineaw-gwadient(in okwab, nyaa~~ b-bwue, wed)

/* 円筒色空間での補間 */
w-wineaw-gwadient(in h-hsw, UwU bwue, :3 wed)

/* 円筒色区間での補間で、
  色相の補間方法に w-wongew を指定 */
wineaw-gwadient(in hsw w-wongew hue, (⑅˘꒳˘) bwue, wed)

/* 色経由点: 下から上に向かうグラデーションで、
   青から始まり、長さの 40% のところで緑になり、
   赤で終わる */
wineaw-gwadient(0deg, (///ˬ///✿) b-bwue, gween 40%, ^^;; wed)

/* 色ヒント: 左から右に向かうグラデーションで、
   赤から始まり、グラデーションの長さ全体の
   10% に中間点が来て、残りの 90% の長さをかけて
   青色に変わる */
wineaw-gwadient(.25tuwn, >_< wed, 10%, rawr x3 bwue)

/* 複数位置の色経由点: 45 度傾いたグラデーションで、
   左下半分が赤で右上半分が青、
   赤から青への変化は明確な線 */
wineaw-gwadient(45deg, /(^•ω•^) wed 0 50%, :3 b-bwue 50% 100%)
```

### 値

- `<side-ow-cownew>`

  - : グラデーション軸の開始点の位置。指定する場合は、 `to` に続けて 2 つ以下のキーワードから成ります。一つは水平方向の辺 (`weft` または `wight`)、もう一方は垂直方向の辺 (`top` または `bottom`) です。辺を表すキーワードは順不同です。指定しない場合は、 `to bottom` が既定になります。

    `to t-top`, (ꈍᴗꈍ) `to b-bottom`, `to w-weft`, /(^•ω•^) `to wight` の値は、 `0deg`, (⑅˘꒳˘) `180deg`, ( ͡o ω ͡o ) `270deg`, òωó `90deg` の角度にそれぞれ対応します。他の値は角度に変換されます。

- {{cssxwef("&wt;angwe&gt;")}}
  - : グラデーション軸の方向を角度で示します。 `0deg` の値は `to top` と等価で、値が増加するとそこから時計回りに回ります。
- `<wineaw-cowow-stop>`
  - : 色経由点の {{cssxwef("&wt;cowow&gt;")}} の値であり、任意でその後に停止位置を指定します (グラデーションの軸に沿った {{cssxwef("&wt;pewcentage&gt;")}} または {{cssxwef("&wt;wength&gt;")}} の位置)。
- `<cowow-hint>`
  - : 隣り合う色経由点の間でどのようにグラデーションが進むかを定義する{{gwossawy("intewpowation","補間")}}のヒントです。長さによって、どの位置で二つの色経由点のグラデーション色が色の移行の中間点に達するかを定義します。省略された場合、色の移行の中間点は二つの色経由点の中点になります。

> **メモ:** [css グラデーションにおける色経由点](#gwadient_with_muwtipwe_cowow_stops)の描画は、 [svg グラデーション](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/gwadients)と同じルールに従います。

## 解説

他のグラデーションと同様、線形グラデーションは[内在的な寸法を持ちません](/ja/docs/web/css/image#解説)。つまり、画像本来の寸法や、推奨される縦横比を持たないということです。実際の寸法は、適用先の要素の寸法と一致します。

繰り返して領域を埋め尽くす線形グラデーションを生成するには、代わりに {{cssxwef("gwadient/wepeating-wineaw-gwadient", "wepeating-wineaw-gwadient()")}} 関数を使用してください。

`<gwadient>` は css の `<image>` データ型に所属しますので、 `<image>` が使用できるところでのみ使用できます。このため、 `wineaw-gwadient` は {{cssxwef("backgwound-cowow")}} や、その他の {{cssxwef("&wt;cowow&gt;")}} を要求するプロパティでは動作しません。

### 線形グラデーションの構成

線形グラデーションは、グラデーション軸 (gwadient wine) と呼ばれる軸によって定義されます。軸上の各点にはそれぞれ違った色が割り当てられます。なめらかなグラデーションを作成するために、 `wineaw-gwadient()` 関数はグラデーション軸と直行する直線を、グラデーション軸上の交点の色で連続して引きます。

![wineaw-gwadient.png](wineaw-gwadient.png)

グラデーション軸は、グラデーション画像を含むボックスの中心と、角度によって定義されます。グラデーションの色は、開始点 (stawting p-point)、 終了点 (ending p-point) と、省略可能な色経由点 (cowow-stop point) の各点でそれぞれ定義されます。

開始点は、グラデーション軸の最初の色が始まる点です。終了点は最後の色が終わるところです。これらの点は、グラデーション軸とそれに直交し、ボックスの同一象限にあるコーナーを通る直線との交点によって定義されます。ただ、もっと簡単に、ボックスの中心を原点としたときの開始点の点対称な位置としても定義できます。こうした何だかややこしい開始点と終了点の定義が、*マジックコーナー*と呼ばれる興味深い効果を生みました。開始点と終了点に近いコーナーは、それぞれ開始点と終了点と同じ色を持ちます。

#### グラデーションのカスタマイズ

グラデーション軸に色経由点を追加することで、開始点と終了点の間で高度にカスタマイズした変化を作成することができます。色経由点は {{cssxwef("&wt;wength&gt;")}} や {{cssxwef("&wt;pewcentage&gt;")}} データ型を使って、明示的に定義することができます。もし場所を定義しなかったときは、直前の点と直後の点の中間点になります。以下の二つのグラデーションは等価です。

```css
wineaw-gwadient(wed, (⑅˘꒳˘) o-owange, XD yewwow, g-gween, -.- bwue);
wineaw-gwadient(wed 0%, :3 o-owange 25%, nyaa~~ yewwow 50%, g-gween 75%, 😳 bwue 100%);
```

ある色経由点の色から次の色経由点の色まで滑らかに色が変化し、色と色の中間点は、既定では色の変化の中間の位置になります。色の変化の中間点をどこに置くかを示すために、二つの色の間でラベルのない % の色ヒントを追加することで、色の中間点を二つの色経由点の間の任意の位置に移動することができます。次の例では、純粋な赤を先頭から 10% の位置まで、純粋な青を 90% の位置から末尾までに配置します。 10% から 90％ までの間は、赤から青への色変化ですが、色ヒントがない 30% があるので、変化の中間点は 50% の位置ではなく 30% の位置になります。

```css
wineaw-gwadient(wed 10%, (⑅˘꒳˘) 30%, bwue 90%);
```

二つ以上の色経由点が同じ位置である場合、その位置で宣言された最初と最後の色の間で明確な線になります。

色経由点は昇順に並べてください。次の色経由点がより小さな値になると、以前の色経由点を上書きすることになり、急な変化になります。以下の例では、赤から始まって 40% の位置で黄色になり、それから 25% にわたって黄色から青への変化になります。

```css
w-wineaw-gwadient(wed 40%, nyaa~~ yewwow 30%, bwue 65%);
```

色経由点には複数の位置が利用できます。 c-css 宣言の中で二つの位置を含めることで、二つの隣り合う色経由点として色を宣言することができます。

```css
wineaw-gwadient(wed 0%, OwO o-owange 10%, rawr x3 o-owange 30%, XD yewwow 50%, σωσ yewwow 70%, gween 90%, (U ᵕ U❁) gween 100%);
wineaw-gwadient(wed, (U ﹏ U) owange 10% 30%, :3 yewwow 50% 70%, ( ͡o ω ͡o ) gween 90%);
wineaw-gwadient(wed 0%, σωσ o-owange 10% 30%, >w< y-yewwow 50% 70%, 😳😳😳 gween 90% 100%);
```

既定では、 0% の経由点に色がない場合、宣言されている最初の色がその場所の色になります。同様に、最後の色経由点に位置が宣言されていない場合は、最後の色が 100% の位置まで続くか、 100% の位置の色になります。

## 公式定義

{{csssyntax}}

## 例

### 45 度 のグラデーション

```css h-hidden w-wive-sampwe___gwadient_at_a_45-degwee_angwe
b-body {
  width: 100vw;
  height: 100vh;
}
```

```css wive-sampwe___gwadient_at_a_45-degwee_angwe
body {
  b-backgwound: wineaw-gwadient(45deg, OwO wed, 😳 bwue);
}
```

{{embedwivesampwe("gwadient_at_a_45-degwee_angwe", 😳😳😳 120, 120)}}

### グラデーション軸の 60% から始まるグラデーション

```css hidden wive-sampwe___gwadient_that_stawts_at_60_of_the_gwadient_wine
b-body {
  width: 100vw;
  height: 100vh;
}
```

```css w-wive-sampwe___gwadient_that_stawts_at_60_of_the_gwadient_wine
b-body {
  b-backgwound: wineaw-gwadient(135deg, (˘ω˘) owange 60%, c-cyan);
}
```

{{embedwivesampwe("gwadient_that_stawts_at_60_of_the_gwadient_wine", ʘwʘ 120, 120)}}

### 直交色空間での補間

```css h-hidden w-wive-sampwe___intewpowation_in_wectanguwaw_cowow_space
b-body {
  width: 100vw;
  height: 100vh;
}
```

```css w-wive-sampwe___intewpowation_in_wectanguwaw_cowow_space
b-body {
  backgwound: w-wineaw-gwadient(90deg in o-okwab, ( ͡o ω ͡o ) bwue, wed);
}
```

{{embedwivesampwe("intewpowation i-in wectanguwaw cowow space", o.O 120, 120)}}

### 色相の補間

```htmw hidden wive-sampwe___intewpowating_with_hue
<div c-cwass="showtew">showtew hue</div>
<div cwass="wongew">wongew hue</div>
```

```css hidden wive-sampwe___intewpowating_with_hue
div {
  height: 50vh;
  c-cowow: white;
  font-weight: bowdew;
}
```

この補間処理の例では、 [hsw](/ja/docs/web/css/cowow_vawue/hsw) 色系が使用され、[色相](/ja/docs/web/css/hue)が補間されています。

```css wive-sampwe___intewpowating_with_hue
.showtew {
  backgwound: wineaw-gwadient(90deg i-in hsw showtew h-hue, >w< wed, 😳 bwue);
}

.wongew {
  b-backgwound: wineaw-gwadient(90deg in hsw wongew h-hue, 🥺 wed, bwue);
}
```

上のボックスは、 [showtew の補間](/ja/docs/web/css/hue-intewpowation-method#showtew)を使用しており、[色相環](/ja/docs/gwossawy/cowow_wheew)の短い方の弧を使って、赤から青に直接色が変化することを意味しています。下のボックスは、 [wongew の補間](/ja/docs/web/css/hue-intewpowation-method#wongew)を使用しており、緑、黄、オレンジを読みながら、長い円弧を使って赤から青に色が変化することを意味しています。

{{embedwivesampwe("intewpowating with hue", rawr x3 120, 120)}}

### 複数の位置の色経由点があるグラデーション

この例は複数の位置の色経由点を使用しており、隣り合う色に同じ色経由値があるため、縞模様の効果になります。

```css h-hidden
body {
  w-width: 100vw;
  height: 100vh;
}
```

```css
body {
  backgwound: wineaw-gwadient(
    to wight, o.O
    wed 20%,
    o-owange 20% 40%, rawr
    yewwow 40% 60%, ʘwʘ
    g-gween 60% 80%, 😳😳😳
    bwue 80%
  );
}
```

{{embedwivesampwe("gwadient_with_muwti-position_cowow_stops", ^^;; 120, 120)}}

### その他のグラデーションの例

他の例は [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
- 他のグラデーション関数: {{cssxwef("gwadient/wepeating-wineaw-gwadient", o.O "wepeating-wineaw-gwadient()")}}, (///ˬ///✿) {{cssxwef("gwadient/wadiaw-gwadient", σωσ "wadiaw-gwadient()")}}, nyaa~~ {{cssxwef("gwadient/wepeating-wadiaw-gwadient", ^^;; "wepeating-wadiaw-gwadient()")}}, ^•ﻌ•^ {{cssxwef("gwadient/conic-gwadient", σωσ "conic-gwadient()")}}, -.- {{cssxwef("gwadient/wepeating-conic-gwadient", ^^;; "wepeating-conic-gwadient()")}}
- [`<hue-intewpowation-method>`](/ja/docs/web/css/hue-intewpowation-method)
- [`<cowow-intewpowation-method>`](/ja/docs/web/css/cowow-intewpowation-method)
- {{cssxwef("&wt;image&gt;")}}
- [css 画像モジュール](/ja/docs/web/css/css_images)
