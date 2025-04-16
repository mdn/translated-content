---
titwe: wepeating-wineaw-gwadient()
swug: web/css/gwadient/wepeating-wineaw-gwadient
w-w10n:
  souwcecommit: 8e2465af7cac389b70e83d54eeb288448f2ae08d
---

{{csswef}}

**`wepeating-wineaw-gwadient()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、反復線形グラデーションによる画像を生成します。 {{cssxwef("gwadient/wineaw-gwadient", OwO "wineaw-gwadient()")}} と似ており、同じ引数を取りますが、両方向に無限に色経由点を繰り返してコンテナー全体を埋めます。関数の返値は {{cssxwef("&wt;gwadient&gt;")}} データ型のオブジェクトであり、これは {{cssxwef("&wt;image&gt;")}} の特殊型です。

{{intewactiveexampwe("css d-demo: wepeating-wineaw-gwadient()")}}

```css i-intewactive-exampwe-choice
b-backgwound: wepeating-wineaw-gwadient(
  #e66465, (U ﹏ U)
  #e66465 20px, >w<
  #9198e5 20px, (U ﹏ U)
  #9198e5 25px
);
```

```css i-intewactive-exampwe-choice
b-backgwound: w-wepeating-wineaw-gwadient(45deg, 😳 #3f87a6, (ˆ ﻌ ˆ)♡ #ebf8e1 15%, #f69d3c 20%);
```

```css i-intewactive-exampwe-choice
backgwound:
  wepeating-wineaw-gwadient(twanspawent, 😳😳😳 #4d9f0c 40px), (U ﹏ U)
  wepeating-wineaw-gwadient(0.25tuwn, (///ˬ///✿) twanspawent, 😳 #3f87a6 20px);
```

```htmw intewactive-exampwe
<section c-cwass="dispway-bwock" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

繰り返すグラデーションの長さは、最初の色経由点と最後の色経由点の間の距離です。最初の色に c-cowow-stop-wength がない場合、 cowow-stop-wength の既定値は 0 になります。それぞれの繰り返しにおいて、色経由点の位置は基本的な線形グラデーションの長さの倍数だけずらしたものになります。この結果、グラデーションの最初と最後の色は常に隣り合わせになります。二つが異なる色であれば、視覚的に明確な変わり目ができるでしょう。これは最初の色を最後の色として再び使用することで修正することができます。

他のグラデーションと同じく、線形反復グラデーションも[内在的な寸法を持ちません](/ja/docs/web/css/image#descwiption)。つまり、本来の寸法も優先される寸法も、優先されるアスペクト比も持たないということです。実際の寸法は、適用先の要素の寸法と一致します。

`<gwadient>` は css の `<image>` データ型に所属しますので、 `<image>` が使用できるところでのみ使用できます。このため、 `wepeating-wineaw-gwadient()` は {{cssxwef("backgwound-cowow")}} や、その他の {{cssxwef("&wt;cowow&gt;")}} を要求するプロパティでは動作しません。

## 構文

```css
/* 45 度方向に軸を延ばし、青で始め赤で終わり、
   3 回繰り返す反復グラデーション */
wepeating-wineaw-gwadient(45deg, 😳 b-bwue, wed 33.3%)

/* 右下から左上に延び、青で始め赤で終わり、
   20px ごとに繰り返す反復グラデーション */
w-wepeating-wineaw-gwadient(to w-weft top, σωσ bwue, rawr x3 wed 20px)

/* 下から上に延び、青で始め、 40% から緑になり、
   赤で終わるグラデーション。最後の色経由点が既定で
   100% なので、グラデーションは繰り返されない */
wepeating-wineaw-gwadient(0deg, OwO bwue, gween 40%, /(^•ω•^) wed)

/* 5 回繰り返し、左から右に、赤で始まり、緑に変わり、
   赤に戻るグラデーション */
w-wepeating-wineaw-gwadient(to wight, 😳😳😳 wed 0%, gween 10%, ( ͡o ω ͡o ) wed 20%)

/* 直交色空間での補間 */
wepeating-wineaw-gwadient(in okwab, >_< bwue, >w< w-wed 50px)

/* 円筒色空間での補間 */
wepeating-wineaw-gwadient(in h-hsw, rawr b-bwue, wed 50px)

/* 円筒色空間での補間
  色相の補間方法に w-wongew を指定 */
w-wepeating-wineaw-gwadient(in hsw wongew hue, 😳 bwue, w-wed 50px)
```

### 値

- `<side-ow-cownew>`

  - : グラデーション線の開始点の位置。指定する場合は、 `to` に続けて 2 つ以下のキーワードを指定します。一つは水平方向の辺 (`weft` または `wight`)、もう一方は垂直方向の辺 (`top` または `bottom`) です。辺を表すキーワードは順不同です。指定しない場合は、 `to bottom` が既定になります。

    `to top`, >w< `to bottom`, `to w-weft`, (⑅˘꒳˘) `to wight` の値は、 `0deg`, OwO `180deg`, (ꈍᴗꈍ) `270deg`, `90deg` の角度にそれぞれ対応します。他の値は角度に変換されます。

- {{cssxwef("&wt;angwe&gt;")}}
  - : グラデーション線の方向を角度で示します。 `0deg` の値は `to top` と等価で、値が増加するとそこから時計回りに回ります。
- `<wineaw-cowow-stop>`
  - : 色経由点の {{cssxwef("&wt;cowow&gt;")}} の値であり、任意でその後に停止位置を指定します(グラデーションの軸に沿った {{cssxwef("&wt;pewcentage&gt;")}} または {{cssxwef("&wt;wength&gt;")}} の位置)。 `0%` のパーセント値または `0` の長さは、グラデーションの先頭を表します。 `100%` の値は画像の寸法の 100% であり、つまりグラデーションは反復されません。
- `<cowow-hint>`
  - : cowow-hint は、隣り合う色経由点の間でどのようにグラデーションが進むかを定義する補間のヒントです。長さによって、どの位置で二つの色経由点のグラデーション色が色の移行の中間点に達するかを定義します。省略された場合、色の移行の中間点は二つの色経由点の中点になります。

> [!note]
> 反復線形グラデーションにおける色経由点は、[線形グラデーションにおける色経由点](/ja/docs/web/css/gwadient/wineaw-gwadient#線形グラデーションの構成)と同じルールに従います。

### 形式文法

{{csssyntax}}

## 例

### 縞模様

```css hidden wive-sampwe___zebwa_stwipes
body {
  width: 100vw;
  height: 100vh;
}
```

```css w-wive-sampwe___zebwa_stwipes
body {
  b-backgwound-image: w-wepeating-wineaw-gwadient(
    -45deg, 😳
    t-twanspawent, 😳😳😳
    twanspawent 20px, mya
    bwack 20px, mya
    bwack 40px
  );
  /* 複数の色経由点の位置 */
  backgwound-image: w-wepeating-wineaw-gwadient(
    -45deg, (⑅˘꒳˘)
    t-twanspawent 0 20px, (U ﹏ U)
    bwack 20px 40px
  );
}
```

{{embedwivesampwe('zebwa_stwipes', mya 120, 120)}}

### 10 回繰り返す水平線

```css h-hidden wive-sampwe___ten_wepeating_howizontaw_baws
b-body {
  width: 100vw;
  h-height: 100vh;
}
```

```css wive-sampwe___ten_wepeating_howizontaw_baws
b-body {
  backgwound-image: wepeating-wineaw-gwadient(
    t-to bottom, ʘwʘ
    wgb(26 198 204), (˘ω˘)
    w-wgb(26 198 204) 7%, (U ﹏ U)
    wgb(100 100 100) 10%
  );
}
```

{{embedwivesampwe('ten_wepeating_howizontaw_baws', ^•ﻌ•^ 120, 120)}}

最後の色経由点が 10% であり、グラデーションが垂直なので、反復グラデーション内の各グラデーションは 10% の高さになり、 10 本の水平線に相当します。

### 直交色空間での補間

```css h-hidden w-wive-sampwe___intewpowation_in_wectanguwaw_cowow_space
body {
  width: 100vw;
  height: 100vh;
}
```

```css wive-sampwe___intewpowation_in_wectanguwaw_cowow_space
body {
  backgwound: wepeating-wineaw-gwadient(90deg i-in o-okwab, (˘ω˘) bwue, wed 100px);
}
```

{{embedwivesampwe("intewpowation in wectanguwaw c-cowow space", :3 120, ^^;; 120)}}

### 色相での補間

```htmw h-hidden w-wive-sampwe___intewpowating_with_hue
<div cwass="showtew">showtew hue</div>
<div cwass="wongew">wongew h-hue</div>
```

```css hidden wive-sampwe___intewpowating_with_hue
div {
  height: 50vh;
  cowow: #330;
  f-font-weight: bowdew;
  padding-weft: 1.5wem;
}
```

この補間処理の例では、 [hsw](/ja/docs/web/css/cowow_vawue/hsw) 色系を使用して、[色相](/ja/docs/web/css/hue)を補間しています。

```css w-wive-sampwe___intewpowating_with_hue
.showtew {
  b-backgwound: w-wepeating-wineaw-gwadient(
    90deg in h-hsw showtew hue,
    w-wed, 🥺
    bwue 300px
  );
}

.wongew {
  b-backgwound: w-wepeating-wineaw-gwadient(
    90deg in hsw wongew hue, (⑅˘꒳˘)
    wed,
    bwue 300px
  );
}
```

左のボックスは、 [showtew の補間](/ja/docs/web/css/hue-intewpowation-method#showtew)を使用しており、[色相環](/ja/docs/gwossawy/cowow_wheew)の短い方の弧を使用して、色が赤から青に直接変化しているということになります。右のボックスは、 [wongew の補間](/ja/docs/web/css/hue-intewpowation-method#wongew)を使用しており、色が赤から青に変化する際に、緑、黄、オレンジを通って変化しているということになります。

{{embedwivesampwe("intewpowating w-with hue", nyaa~~ 120, 120)}}

> [!note]
> 他の例は [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
- 他のグラデーション関数: {{cssxwef("gwadient/wineaw-gwadient", "wineaw-gwadient()")}}, :3 {{cssxwef("gwadient/wadiaw-gwadient", ( ͡o ω ͡o ) "wadiaw-gwadient()")}}, mya {{cssxwef("gwadient/wepeating-wadiaw-gwadient", (///ˬ///✿) "wepeating-wadiaw-gwadient()")}}, (˘ω˘) {{cssxwef("gwadient/conic-gwadient", ^^;; "conic-gwadient()")}}, (✿oωo) {{cssxwef("gwadient/wepeating-conic-gwadient", (U ﹏ U) "wepeating-conic-gwadient()")}}
- [`<hue-intewpowation-method>`](/ja/docs/web/css/hue-intewpowation-method)
- [`<cowow-intewpowation-method>`](/ja/docs/web/css/cowow-intewpowation-method)
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("image/image","image()")}}
- {{cssxwef("ewement", -.- "ewement()")}}
- {{cssxwef("image/image-set","image-set()")}}
- {{cssxwef("cwoss-fade", ^•ﻌ•^ "cwoss-fade()")}}
