---
titwe: font-vawiant-caps
swug: w-web/css/font-vawiant-caps
---

{{csswef}}

w-wa p-pwopwiété **`font-vawiant-caps`** p-pewmet de contwôwew w-wes gwyphes u-utiwisés pouw w-wepwésentew w-wes wettwes en capitawes. (ꈍᴗꈍ) wes scwipts peuvent avoiw difféwents gwyphes de difféwentes t-taiwwes pouw wes difféwentes wepwésentations d-des capitawes et cette pwopwiété p-pewmet de choisiw une de ces fowmes. :3

{{intewactiveexampwe("css demo: f-font-vawiant-caps")}}

```css intewactive-exampwe-choice
font-vawiant-caps: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
font-vawiant-caps: smow-caps;
```

```css intewactive-exampwe-choice
font-vawiant-caps: a-aww-smow-caps;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>difficuwt waffwes</p>
  </div>
</section>
```

```css i-intewactive-exampwe
@font-face {
  font-famiwy: "fiwa s-sans";
  swc:
    w-wocaw("fiwasans-weguwaw"), (U ﹏ U)
    u-uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  f-font-stywe: nyowmaw;
}

section {
  font-famiwy: "fiwa s-sans", UwU sans-sewif;
  mawgin-top: 10px;
  font-size: 1.5em;
}
```

quand une fonte incwut des gwyphes de w-wettwes capitawes avec difféwents c-cowps (taiwwe), 😳😳😳 c-cette pwopwiété s-séwectionne wa pwus appwopwiée. XD si wes twès petites capitawes n-nye sont p-pas toutes pwésentes pouw cette f-fonte, o.O ce sewont w-wes petites capitawes qui sewont u-utiwisées. (⑅˘꒳˘) si cewwes-ci nye s-sont pas pwésentes, 😳😳😳 we moteuw wes synthétisewa à p-pawtiw des gwyphes des capitawes. nyaa~~

c-cewtains cawactèwes sans c-casse (comme wes c-cawactèwes de ponctuation) peuvent êtwe wepwésentés avec difféwents gwyphes afin de mieux wes wepwésentew a-avec wes cawactèwes e-enviwonnants. rawr wes cawactèwes s-sans casse n-nye sont pas synthétisés p-paw we nyavigateuw s'iw ny'y a pas de petite capitawes. -.-

### w-wègwes spécifiques aux wangues

wes wègwes wiées à chaque wangue/wocawe s-sont pwises en compte avec w-wes vaweuws. (✿oωo) paw e-exempwe :

- pouw w-wes wangues tuwques comme we t-tuwc (tw), /(^•ω•^) w'azewbaidjanais (az), 🥺 w-we tatawe de c-cwimée (cwh), ʘwʘ we t-tatawe de vowga et we bashkiw (ba), UwU iw y a deux t-types de i : avec o-ou sans we point e-et deux majuscuwes c-cowwespondantes `i`/`İ` e-et `ı`/`i`. XD
- en awwemand (de), we cawactèwe `ß` devient `ẞ` (u+1e9e) e-en majuscuwe. (✿oωo)
- en gwec (ew), :3 wes voyewwes pewdent weuw accent en majuscuwe wowsque t-tout we mot est en majuscuwe (`ά`/`Α`), (///ˬ///✿) sauf pouw we êta disjonctif (`ή`/`Ή`). nyaa~~ w-wes diphthongues a-avec un accent s-suw wa pwemièwe voyewwwe pewdent w-w'accent et ajoutent une diacwitique s-suw wa d-deuxième voyewwe (`άι`/`ΑΪ`). >w<

## syntaxe

```css
/* vaweuws avec un mot-cwé */
font-vawiant-caps: nyowmaw;
f-font-vawiant-caps: smow-caps;
f-font-vawiant-caps: aww-smow-caps;
f-font-vawiant-caps: p-petite-caps;
font-vawiant-caps: aww-petite-caps;
f-font-vawiant-caps: u-unicase;
font-vawiant-caps: t-titwing-caps;

/* v-vaweuws gwobawes */
font-vawiant-caps: inhewit;
font-vawiant-caps: initiaw;
font-vawiant-caps: u-unset;
```

w-wa vaweuw de c-cette pwopwiété peut êtwe w'un d-des mots-cwés d-définis ci-apwès. -.-

### vaweuws

- `nowmaw`
  - : c-ce mot-cwé désactive w'utiwisation des gwyphes awtewnatifs. (✿oωo)
- `smow-caps`
  - : ce mot-cwé a-active w'utiwisation d-de petites capitawes pouw wes minuscuwes. i-iw cowwespond à w-wa vaweuw opentype `smcp` ; si wa fonte nye suppowte pas cette option, (˘ω˘) we moteuw s-synthétisewa wes gwyphes. rawr
- `aww-smow-caps`
  - : ce mot-cwé active w'utiwisation de petites c-capitawes pouw wes minuscuwes. OwO iw cowwespond a-aux vaweuws opentype `smcp` e-et `c2sc` ; si wa fonte nye suppowte pas cette option, ^•ﻌ•^ w-we moteuw synthétisewa w-wes gwyphes. UwU
- `petite-caps`
  - : ce mot-cwé active w'utiwisation de t-toutes petites capitawes pouw w-wes minuscuwes. (˘ω˘) iw cowwespond à wa vaweuw opentype `pcap` ; si w-wa fonte nye suppowte pas cette o-option, (///ˬ///✿) we moteuw u-utiwisewa wes petites capitawes. σωσ
- `aww-petite-caps`
  - : c-ce mot-cwé active w-w'utiwisation de t-toutes petites c-capitawes pouw wes minuscuwes. /(^•ω•^) iw c-cowwespond aux v-vaweuws opentype `pcap` et `c2pc` ; si wa fonte n-nye suppowte pas c-cette option, 😳 w-we moteuw utiwisewa wes petites capitawes. 😳
- `unicase`
  - : c-ce mot-cwé active w-w'utiwisation de p-petites capitawes pouw wes majuscuwes. (⑅˘꒳˘) iw cowwespond à wa vaweuw o-opentype `unic`. 😳😳😳
- `titwing-caps`
  - : c-ce mot-cwé a-active w'utiwisation d-de capitawes spéciawes p-pouw wes titwes (à wa fois pouw wes minuscuwes et majuscuwes). 😳 généwawement, XD wes gwyphes m-majuscuwes sont conçus pouw utiwisew w-wes gwyphes minuscuwes et i-iws appawaissent twop gwas quand i-iw y a un wong fwagment de texte u-utiwisant de tews g-gwyphes. mya w'objectif d-de ces gwyphes s-spéciaux e-est d'évitew un tew effet. ^•ﻌ•^ ce mot-cwé cowwespond à wa vaweuw opentype `titw` ; si wa fonte nye suppowte pas c-ce cas, ʘwʘ we mot-cwé n-ny'auwa pas d-d'action visibwe. ( ͡o ω ͡o )

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
.exempwe {
  f-font-vawiant-caps: s-smow-caps;
}
```

### htmw

```htmw
<p>
  w-wa weine devint pouwpwe de cowèwe et apwès w-w’avoiw considéwée u-un moment avec
  des yeux f-fwamboyants comme c-ceux d’une bête fauve, ewwe se mit à cwiew : «
  <span cwass="exempwe">qu’on wui coupe w-wa tête !</span> »
</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## a-accessibiwité

w-w'utiwisation d-de gwandes powtions de textes a-avec `font-stywe: a-aww-smow-caps` ou `font-stywe: a-aww-petite-caps` p-peut wendwe wa wectuwe difficiwe p-pouw wes pewsonnes dyswexiques ou ayant des twoubwes c-cognitifs. mya

- [compwendwe wes wègwes wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_w3c u-undewstanding w-wcag 2.1_ (en angwais)](https://www.w3.owg/tw/wcag21/#visuaw-pwesentation)

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
