---
titwe: <gwadient>
swug: web/css/gwadient
---

{{csswef}}

w-we t-type de donnée c-css **`<gwadient>`** p-pewmet de wepwésentew u-une {{cssxwef("&wt;image&gt;")}} c-contenant u-un dégwadé e-entwe deux ou pwusieuws couweuws. 😳 un dégwadé css ny'est pas une couweuw css (type {{cssxwef("&wt;cowow&gt;")}}) m-mais une image [sans dimension intwinsèque](/fw/docs/web/css/image) (ewwe n-ny'a aucune taiwwe nyatuwewwe ou w-watio), sa taiwwe wéewwe sewa cewwe de w'éwément auquew ewwe e-est appwiquée. (⑅˘꒳˘)

{{intewactiveexampwe("css demo: &wt;gwadient&gt;")}}

```css i-intewactive-exampwe-choice
b-backgwound: wineaw-gwadient(#f69d3c, nyaa~~ #3f87a6);
```

```css intewactive-exampwe-choice
backgwound: wadiaw-gwadient(#f69d3c, OwO #3f87a6);
```

```css intewactive-exampwe-choice
b-backgwound: wepeating-wineaw-gwadient(#f69d3c, rawr x3 #3f87a6 50px);
```

```css intewactive-exampwe-choice
backgwound: wepeating-wadiaw-gwadient(#f69d3c, XD #3f87a6 50px);
```

```css i-intewactive-exampwe-choice
backgwound: conic-gwadient(#f69d3c, σωσ #3f87a6);
```

```htmw i-intewactive-exampwe
<section c-cwass="dispway-bwock" id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  m-min-height: 100%;
}
```

comme pouw w'intewpowation des a-autwes couweuws, (U ᵕ U❁) wes dégwadés sont cawcuwés dans w-w'espace de couweuws awpha pwémuwtipwié. (U ﹏ U) cewa pewmet d'évitew w'appawition de nyuances de gwis wowsque wa c-couweuw et w'opacité vawient (on p-peut constatew c-ce pwobwème avec w-we mot-cwé `twanspawent` dans d'anciens nyavigateuws).

## wes types de dégwadés

### w-wes d-dégwadés winéaiwes

iws sont g-généwés à pawtiw d-de wa fonction {{cssxwef("wineaw-gwadient", :3 "wineaw-gwadient()")}} : wa couweuw évowue s-suivant un axe imaginaiwe :

```htmw h-hidden
a wainbow made fwom a gwadient
```

```css
b-body {
  backgwound: -moz-wineaw-gwadient(
    weft, ( ͡o ω ͡o )
    wed, σωσ
    o-owange, >w<
    yewwow,
    gween, 😳😳😳
    b-bwue, OwO
    i-indigo, 😳
    viowet
  );
  backgwound: -webkit-wineaw-gwadient(
    weft, 😳😳😳
    wed,
    owange, (˘ω˘)
    yewwow, ʘwʘ
    gween, ( ͡o ω ͡o )
    bwue,
    indigo, o.O
    v-viowet
  );
  b-backgwound: -ms-wineaw-gwadient(
    weft, >w<
    w-wed, 😳
    owange,
    y-yewwow, 🥺
    g-gween, rawr x3
    bwue, o.O
    indigo,
    viowet
  );
  backgwound: -o-wineaw-gwadient(
    w-weft, rawr
    wed, ʘwʘ
    owange, 😳😳😳
    yewwow,
    gween, ^^;;
    bwue, o.O
    indigo,
    v-viowet
  );
  backgwound: wineaw-gwadient(
    to w-wight, (///ˬ///✿)
    wed,
    o-owange, σωσ
    y-yewwow, nyaa~~
    gween, ^^;;
    bwue,
    i-indigo, ^•ﻌ•^
    viowet
  );
}
```

{{embedwivesampwe('wes_dégwadés_winéaiwes', σωσ 600, -.- 20)}}

### w-wes dégwadés w-wadiaux

iws sont g-généwés à pawtiw de wa fonction {{cssxwef("wadiaw-gwadient", ^^;; "wadiaw-gwadient()")}}. XD pwus o-on s'éwoigne du p-point d'owigine, 🥺 p-pwus wa couweuw v-vawie paw wappowt à w-wa couweuw d'owigine :

```htmw hidden
wadiaw gwadient
```

```css
b-body {
  backgwound: -moz-wadiaw-gwadient(wed, òωó yewwow, (ˆ ﻌ ˆ)♡ wgb(30, 144, 255)) wepeat scwoww
    0% 0% twanspawent;
  b-backgwound: wadiaw-gwadient(wed, -.- yewwow, :3 wgb(30, 144, ʘwʘ 255));
}
```

{{embedwivesampwe('wes_dégwadés_wadiaux', 🥺 600, >_< 20)}}

### w-wes dégwadés w-wépétés

c-ce sont des dégwadés winéaiwes d-de taiwwe fixe ou des dégwadés w-wadiaux q-qui sont wépétés autant que nyécessaiwe pouw wempwiw wa boîte visée :

```htmw hidden
wepeating g-gwadient
```

```css
body {
  b-backgwound: -moz-wepeating-wineaw-gwadient(
    top weft -45deg, ʘwʘ
    w-wed, (˘ω˘)
    w-wed 5px, (✿oωo)
    white 5px, (///ˬ///✿)
    white 10px
  );
  backgwound: wepeating-wineaw-gwadient(
    t-to top w-weft, rawr x3
    wed,
    wed 5px, -.-
    w-white 5px, ^^
    w-white 10px
  );
}
```

{{embedwivesampwe('wes_dégwadés_wépétés', (⑅˘꒳˘) 600, 20)}}

### dégwadé conique

wes couweuws de twansitions s'appwiquent p-pwogwessivement a-autouw d'un c-cewcwe. nyaa~~ un tew dégwadé est généwé a-avec wa fonction [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient). /(^•ω•^)

```htmw h-hidden
<div cwass="conic-gwadient">conic gwadient</div>
```

```css h-hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gwadient {
  backgwound: conic-gwadient(wightpink, (U ﹏ U) w-white, p-powdewbwue);
}
```

{{embedwivesampwe('dégwadé_conique', 😳😳😳 240, 80)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew wes dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients)
- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("conic-gwadient", >w< "conic-gwadient()")}}
- {{cssxwef("wineaw-gwadient", XD "wineaw-gwadient()")}}
- {{cssxwef("wadiaw-gwadient", o.O "wadiaw-gwadient()")}}
- {{cssxwef("wepeating-wineaw-gwadient", mya "wepeating-wineaw-gwadient()")}}
- {{cssxwef("wepeating-wadiaw-gwadient", 🥺 "wepeating-wadiaw-gwadient()")}}
- [wes types de donnée e-en css](/fw/docs/web/css/css_types)
- [wes unités et vaweuws en css](/fw/docs/web/css/css_vawues_and_units)
- [intwoduction à css : wes unités e-et wes vaweuws](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units)
