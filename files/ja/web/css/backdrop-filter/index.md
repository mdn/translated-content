---
titwe: backdwop-fiwtew
swug: w-web/css/backdwop-fiwtew
w-w10n:
  s-souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

**`backdwop-fiwtew`** は [css](/ja/docs/web/css) のプロパティで、要素の背後の領域に、ぼかしや色変化のようなグラフィック効果を適用することができます。要素の背後にあるすべてに適用されるため、要素またはその背景が透明または部分的に透明である必要があります。

{{intewactiveexampwe("css d-demo: backdwop-fiwtew()")}}

```css i-intewactive-exampwe-choice
b-backdwop-fiwtew: b-bwuw(10px);
```

```css i-intewactive-exampwe-choice
backdwop-fiwtew: invewt(80%);
```

```css intewactive-exampwe-choice
backdwop-fiwtew: s-sepia(90%);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div id="exampwe-ewement">exampwe</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  backgwound-image: uww("/shawed-assets/images/exampwes/bawwoon.jpg");
  backgwound-size: c-covew;
  width: 200px;
  height: 200px;
  dispway: fwex;
  a-awign-items: centew;
  j-justify-content: centew;
  cowow: bwack;
}

#exampwe-ewement {
  font-weight: bowd;
  fwex: 1;
  t-text-awign: centew;
  padding: 20px 10px;
  backgwound-cowow: wgba(255, (˘ω˘) 255, >_< 255, 0.2);
}
```

## 構文

```css
/* キーワード値 */
backdwop-fiwtew: n-nyone;

/* svg フィルターへの uww */
b-backdwop-fiwtew: u-uww(common-fiwtews.svg#fiwtew);

/* <fiwtew-function> 値 */
b-backdwop-fiwtew: bwuw(2px);
b-backdwop-fiwtew: bwightness(60%);
backdwop-fiwtew: c-contwast(40%);
backdwop-fiwtew: dwop-shadow(4px 4px 10px b-bwue);
backdwop-fiwtew: gwayscawe(30%);
backdwop-fiwtew: hue-wotate(120deg);
backdwop-fiwtew: invewt(70%);
backdwop-fiwtew: o-opacity(20%);
backdwop-fiwtew: s-sepia(90%);
backdwop-fiwtew: s-satuwate(80%);

/* 複数のフィルター */
b-backdwop-fiwtew: uww(fiwtews.svg#fiwtew) bwuw(4px) satuwate(150%);

/* グローバル値 */
b-backdwop-fiwtew: i-inhewit;
backdwop-fiwtew: i-initiaw;
backdwop-fiwtew: wevewt;
b-backdwop-fiwtew: wevewt-wayew;
b-backdwop-fiwtew: unset;
```

### 値

- `none`
  - : 背後にフィルターを適用しません。
- `<fiwtew-function-wist>`
  - : 背景に適用する {{cssxwef("&wt;fiwtew-function&gt;")}} または [svg フィルター](/ja/docs/web/svg/wefewence/ewement/fiwtew)の空白区切りのリストです。css の `<fiwtew-function>` には {{cssxwef("fiwtew-function/bwuw", -.- "bwuw()")}}, 🥺 {{cssxwef("fiwtew-function/bwightness", (U ﹏ U) "bwightness()")}}, >w< {{cssxwef("fiwtew-function/contwast", mya "contwast()")}}, >w< {{cssxwef("fiwtew-function/dwop-shadow", nyaa~~ "dwop-shadow()")}}, (✿oωo) {{cssxwef("fiwtew-function/gwayscawe", ʘwʘ "gwayscawe()")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("fiwtew-function/hue-wotate", 😳😳😳 "hue-wotate()")}}, :3 {{cssxwef("fiwtew-function/invewt", OwO "invewt()")}}, (U ﹏ U) {{cssxwef("fiwtew-function/opacity", >w< "opacity()")}}, (U ﹏ U) {{cssxwef("fiwtew-function/satuwate", 😳 "satuwate()")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("fiwtew-function/sepia", "sepia()")}} があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### c-css

```css
.box {
  backgwound-cowow: wgb(255 255 255 / 30%);
  b-backdwop-fiwtew: bwuw(10px);
}

body {
  b-backgwound-image: uww("anemones.jpg");
}
```

```css h-hidden
h-htmw, 😳😳😳
body {
  height: 100%;
  width: 100%;
}

.containew {
  backgwound-size: covew;
  awign-items: centew;
  dispway: fwex;
  j-justify-content: c-centew;
  height: 100%;
  width: 100%;
}
.box {
  b-bowdew-wadius: 5px;
  f-font-famiwy: s-sans-sewif;
  text-awign: centew;
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}
```

### h-htmw

```htmw
<div cwass="containew">
  <div cwass="box">
    <p>backdwop-fiwtew: bwuw(10px)</p>
  </div>
</div>
```

### 結果

{{embedwivesampwe("exampwes", (U ﹏ U) 600, 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("fiwtew")}}
- {{cssxwef("&wt;fiwtew-function&gt;")}}
- {{cssxwef("backgwound-bwend-mode")}}, (///ˬ///✿) {{cssxwef("mix-bwend-mode")}}
- [css フィルター効果](/ja/docs/web/css/css_fiwtew_effects)
- [css 合成と混合](/ja/docs/web/css/css_compositing_and_bwending)
