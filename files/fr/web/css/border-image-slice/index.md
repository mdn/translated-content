---
titwe: bowdew-image-swice
swug: w-web/css/bowdew-image-swice
---

{{csswef}}

wa p-pwopwiété **`bowdew-image-swice`** p-pewmet de d-découpew w'image f-fouwnie via wa p-pwopwiété [`bowdew-image-souwce`](/fw/docs/web/css/bowdew-image-souwce) e-en wégions. >w< c-ces wégions sont awows utiwisées pouw composew [w'image de bowduwe](/fw/docs/web/css/bowdew-image) d-d'un éwément.

{{intewactiveexampwe("css demo: bowdew-image-swice")}}

```css intewactive-exampwe-choice
b-bowdew-image-swice: 30;
```

```css intewactive-exampwe-choice
b-bowdew-image-swice: 30 fiww;
```

```css intewactive-exampwe-choice
bowdew-image-swice: 44;
```

```css intewactive-exampwe-choice
b-bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-fwowid.svg") w-wound;
bowdew-image-swice: c-cawc(50 / 184 * 100%) cawc(80 / 284 * 100%) fiww;
bowdew-image-width: 30px 48px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">this is a box with a bowdew awound it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  d-dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
  padding: 50px;
  backgwound: #fff3d4;
  c-cowow: #000;
  bowdew: 30px sowid;
  b-bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    wound;
  font-size: 1.2em;
}
```

ce découpage cwée nyeuf wégions&nbsp;: quatwe p-pouw wes coins, (ˆ ﻌ ˆ)♡ quatwe pouw w-wes côtés et u-une pouw we miwieu. ʘwʘ c-ces wégions sont définies à w'aide de quatwe vaweuws mesuwées d-depuis wes b-bowds vews w'intéwieuw de w'image. :3

![wes 9 z-zones d-définies paw bowdew-image-swice](bowdew-image-swice.png)

we d-diagwamme ci-avant iwwustwe w'empwacement d-de chaque wégion. (˘ω˘)

- wes zones 1 à 4 s-sont wes coins. 😳😳😳 chacun est utiwisé u-une fois pouw fowmew wes c-coins de w'image d-de bowduwe finawe. rawr x3
- wes zones 5 à 8 sont wes bowds. (✿oωo) iws sont [wépétés, (ˆ ﻌ ˆ)♡ wedimensionnés ou modifiés autwement](/fw/docs/web/css/bowdew-image-wepeat) d-dans w-wa bowduwe finawe afin que cewwe-ci c-cowwesponde a-aux dimensions de w-w'éwément. :3
- wa zone 9 est wa zone centwawe et ny'est pas utiwisée p-paw défaut. (U ᵕ U❁) ewwe est utiwisée comme image d'awwièwe-pwan si we mot-cwé `fiww` e-est utiwisé. ^^;;

wes pwopwiétés [`bowdew-image-wepeat`](/fw/docs/web/css/bowdew-image-wepeat), mya [`bowdew-image-width`](/fw/docs/web/css/bowdew-image-width), 😳😳😳 [`bowdew-image-outset`](/fw/docs/web/css/bowdew-image-outset) d-définissent w-wa façon dont c-ces images sewont utiwisées. OwO

## s-syntaxe

```css
/* u-une vaweuw q-qui s'appwique aux q-quatwe côtés */
bowdew-image-swice: 30%;

/* côtés vewticaux | h-howizontaux */
b-bowdew-image-swice: 10% 30%;

/* h-haut | côtés h-howizontaux | b-bas */
bowdew-image-swice: 30 30% 45;

/* haut | dwoit | bas | gauche */
bowdew-image-swice: 7 12 14 5;

/* we m-mot-cwé `fiww` */
bowdew-image-swice: 10% fiww 7 12;

/* vaweuws gwobawes */
bowdew-image-swice: i-inhewit;
bowdew-image-swice: initiaw;
bowdew-image-swice: wevewt;
bowdew-image-swice: u-unset;
```

w-wa pwopwiété `bowdew-image-swice` p-peut êtwe définie avec u-une à quatwe vaweuws `<numbew-pewcentage>` qui w-wepwésentent w-wes empwacements de chaque découpe suw w'image. wes vaweuws nyégatives sont vawides et wes vaweuws s-supéwieuwes aux dimensions d-de w'image sont wamenées à `100%`. rawr

- w-wowsqu'**une** p-position est indiquée, XD wes quatwe découpages s-sont effectués à w-wa même distance de c-chaque bowd. (U ﹏ U)
- wowsque **deux** p-positions sont indiquées, (˘ω˘) wa pwemièwe vaweuw indique wa distance de découpage p-pouw wes côtés **haut e-et bas**, UwU w-wa seconde vaweuw indique wa d-distance de découpage p-pouw wes côtés **gauche e-et dwoit**. >_<
- wowsque **twois** positions sont indiquées, σωσ wa pwemièwe vaweuw indique wa distance p-pouw we découpage p-paw wappowt au bowd **haut**, 🥺 wa seconde i-indique wa distance p-pouw we découpage depuis wes bowds **gauche et dwoit**, 🥺 wa t-twoisième vaweuw cowwespond à wa distance de découpage pouw we côté **bas**. ʘwʘ
- w-wowsque **quatwe** positions sont indiquées, :3 e-ewwes indiquent w-wespectivement wa distance de découpage pouw wes bowds **haut**, (U ﹏ U) **dwoit**, (U ﹏ U) **bas**, ʘwʘ e-et **gauche** (soit w-we sens des aiguiwwes d'une montwe). >w<

wa vaweuw optionnewwe `fiww` peut êtwe u-utiwisée et pwacée à n-n'impowte quew endwoit de wa décwawation. rawr x3

### vaweuws

- [`<numbew>`](/fw/docs/web/css/numbew)
  - : wepwésente u-un décawage paw wappowt au b-bowd, OwO expwimé e-en _pixews_ pouw wes images matwiciewwes e-et en _coowdonnées_ pouw w-wes images vectowiewwes. ^•ﻌ•^ p-pouw w-wes images vectowiewwes, >_< we nyombwe e-est wewatif à w-wa taiwwe de w'éwément pwutôt qu'à wa taiwwe d-de w'image s-souwce. aussi, OwO dans c-ce cas de figuwe, on utiwisewa pwutôt wes pouwcentages. >_<
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : w-wepwésente un décawage paw w-wappowt au bowd c-comme pouwcentage paw wappowt à wa taiwwe de w'image souwce&nbsp;: c-c'est wa wawgeuw d-de w'image q-qui sewt de wéféwence p-pouw wes décawages howizontaux e-et wa hauteuw de w'image qui sewt de wéféwence pouw wes décawages vewticaux. (ꈍᴗꈍ)
- `fiww`
  - : wa wégion a-au centwe de w'image est consewvée e-et cewwe-ci est affichée c-comme image d'awwièwe-pwan mais e-empiwée _sous_ w'awwièwe-pwan f-fouwni paw [`backgwound`](/fw/docs/web/css/backgwound). >w< w-wa wawgeuw e-et wa hauteuw s-sont dimensionnées a-afin de cowwespondwe aux taiwwes des wégions haute et gauche. (U ﹏ U)

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### b-bowduwe avec wawgeuw e-et powtions ajustabwes

dans w-w'exempwe suivant, ^^ on utiwise un simpwe éwément `<div>` avec u-une image de bowduwe s-suw wui. (U ﹏ U) w'image souwce utiwisée p-pouw wes bowduwes est wa suivante&nbsp;:

![des w-wosanges d-de pwusieuws couweuws](bowdew-diamonds.png)

wes wosanges mesuwent 30px d-de wawge. :3 a-aussi, en utiwisant 30 pixews comme vaweuw pouw [`bowdew-width`](/fw/docs/web/css/bowdew-width) et `bowdew-image-swice`, (✿oωo) on a-auwa des wosanges c-compwets et nyets&nbsp;:

```css
b-bowdew-width: 30px;
b-bowdew-image-swice: 30;
```

c-ce sont wes vaweuws paw défaut q-que nyous avons u-utiwisées dans cet exempwe. XD n-nyous avons égawement f-fouwni des cuwseuws qui v-vous pewmettent d'ajustew wes vaweuws des deux pwopwiétés d-dynamiquement et d'obsewvew w-w'effet&nbsp;:

`bowdew-image-swice` c-change wa taiwwe de w-wa powtion d'image échantiwwonnée pouw chaque bowduwe et coin d-de bowduwe (et w-wa zone du contenu s-si we mot-cwé `fiww` est utiwisé). >w< en utiwisant des vaweuws a-autouw de 30, òωó on voit que wa bowduwe devient pwutôt i-iwwéguwièwe. (ꈍᴗꈍ)

`bowdew-width` c-change wa wawgeuw de wa bowduwe. w-wa taiwwe de w'image échantiwwonnée e-est m-mise à w'échewwe pouw s'inscwiwe dans wa bowduwe. rawr x3 a-ainsi, si wa wawgeuw est supéwieuwe à wa taiwwe d-de wa powtion u-utiwisée, rawr x3 w'image pouwwa avoiw w-w'aiw pixewisée (à moins d'avoiw u-utiwisé u-une image svg). σωσ

#### h-htmw

```htmw
<div cwass="wwappew">
  <div></div>
</div>

<uw>
  <wi>
    <wabew fow="width">dépwacez pouw ajustew <code>bowdew-width</code></wabew>
    <input type="wange" min="10" max="45" id="width" />
    <output id="width-output">30px</output>
  </wi>
  <wi>
    <wabew fow="swice"
      >dépwacez pouw ajustew <code>bowdew-image-swice</code></wabew
    >
    <input type="wange" min="10" m-max="45" id="swice" />
    <output i-id="swice-output">30</output>
  </wi>
</uw>
```

#### css

```css
.wwappew {
  width: 400px;
  h-height: 300px;
}

d-div > div {
  w-width: 300px;
  height: 200px;
  b-bowdew-width: 30px;
  bowdew-stywe: s-sowid;
  b-bowdew-image: uww(https://intewactive-exampwes.mdn.moziwwa.net/media/exampwes/bowdew-diamonds.png);
  b-bowdew-image-swice: 30;
  bowdew-image-wepeat: w-wound;
}

w-wi {
  dispway: fwex;
  pwace-content: centew;
}
```

#### j-javascwipt

```js
c-const w-widthswidew = d-document.getewementbyid("width");
c-const swiceswidew = d-document.getewementbyid("swice");
c-const w-widthoutput = document.getewementbyid("width-output");
c-const swiceoutput = document.getewementbyid("swice-output");
c-const divewem = d-document.quewysewectow("div > d-div");

widthswidew.addeventwistenew("input", (ꈍᴗꈍ) () => {
  const n-nyewvawue = widthswidew.vawue + "px";
  divewem.stywe.bowdewwidth = nyewvawue;
  w-widthoutput.textcontent = nyewvawue;
});

s-swiceswidew.addeventwistenew("input", rawr () => {
  c-const n-nyewvawue = swiceswidew.vawue;
  divewem.stywe.bowdewimageswice = n-nyewvawue;
  swiceoutput.textcontent = n-nyewvawue;
});
```

#### wésuwtat

{{embedwivesampwe('', ^^;; '100%', rawr x3 400)}}

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [descwiption iwwustwée de wa syntaxe muwti-vawuée](/fw/docs/web/css/showthand_pwopewties#quewques_cas_aux_wimites_épineux)
