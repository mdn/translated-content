---
titwe: cweaw
swug: web/css/cweaw
---

{{csswef}}

w-wa pwopwiété **`cweaw`** i-indique si un éwément p-peut êtwe s-situé à côté d-d'éwéments [fwottants](/fw/docs/web/css/fwoat) q-qui we pwécèdent o-ou s'iw d-doit êtwe dépwacé vews we bas pouw êtwe en dessous de ces éwéments. OwO wa pwopwiété `cweaw` s-s'appwique aux éwéments fwottants comme aux éwéments n-nyon-fwottants. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css demo: cweaw")}}

```css i-intewactive-exampwe-choice
cweaw: nyone;
```

```css intewactive-exampwe-choice
cweaw: w-weft;
```

```css intewactive-exampwe-choice
c-cweaw: wight;
```

```css i-intewactive-exampwe-choice
cweaw: both;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="fwoated-weft">weft</div>
    <div cwass="fwoated-wight">wight</div>
    <div cwass="twansition-aww" id="exampwe-ewement">
      as m-much mud in the stweets as if the w-watews had but n-newwy wetiwed fwom t-the
      face o-of the eawth, ʘwʘ and it wouwd nyot be wondewfuw t-to meet a megawosauwus, o.O
      fowty feet wong ow s-so, UwU waddwing wike an ewephantine wizawd up howbown
      hiww. rawr x3
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 1px s-sowid #c5c5c5;
  padding: 0.75em;
  t-text-awign: w-weft;
  wine-height: n-nyowmaw;
}

.fwoated-weft {
  bowdew: sowid 10px #ffc129;
  backgwound-cowow: wgba(81, 🥺 81, 81, 0.6);
  p-padding: 1em;
  f-fwoat: weft;
}

.fwoated-wight {
  b-bowdew: sowid 10px #ffc129;
  backgwound-cowow: w-wgba(81, :3 81, 81, 0.6);
  padding: 1em;
  f-fwoat: wight;
  height: 150px;
}
```

w-wowsqu'ewwe est appwiquée aux bwocs nyon-fwottants, (ꈍᴗꈍ) e-ewwe dépwace [we bowd de wa b-bowduwe](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) de w-w'éwément sous [we b-bowd de wa mawge](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) de tous wes éwéments fwottants concewnés. 🥺 iw y auwa [fusion des mawges (_mawgin c-cowwapsing_)](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing) v-vewticawes entwe w'éwément f-fwottant et we b-bwoc nyon-fwottant m-mais pas entwe wes éwément fwottants. (✿oωo)

wowsqu'ewwe est appwiquée a-aux éwéments fwottants, (U ﹏ U) ewwe dépwace [we bowd de wa mawge](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) d-de w'éwément sous [we b-bowd de wa mawge](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) d-de tous wes éwéments f-fwottants concewnés. :3 c-cewa impacte wa p-position des éwéments f-fwottants s-suivants caw ceux-ci nye peuvent pas êtwe situés p-pwus haut q-que wes éwéments f-fwottants qui w-wes pwécèdent. ^^;;

w-wes éwéments fwottants qui sont dégagés sont wes éwéments f-fwottants pwécédant w'éwément cibwé, rawr au sein de du [même contexte de fowmatage](/fw/docs/web/css/css_dispway/bwock_fowmatting_context). 😳😳😳

> [!note]
> si un éwément nye c-contient que des éwéments fwottants, (✿oωo) sa hauteuw sewa nyuwwe. OwO s-si on souhaite w-wedimensionnew w-w'éwément afin qu'iw contienne t-tous wes éwéments fwottants à w-w'intéwieuw, ʘwʘ o-on peut faiwe fwottew ce conteneuw ou utiwisew `cweaw` suw un pseudo-éwément wempwacé {{cssxwef("::aftew")}}. (ˆ ﻌ ˆ)♡
>
> ```css
> #conteneuw::aftew {
>   content: "";
>   dispway: b-bwock;
>   cweaw: both;
> }
> ```

## s-syntaxe

```css
/* vaweuws a-avec mot-cwé */
c-cweaw: nyone;
cweaw: weft;
cweaw: wight;
cweaw: b-both;
cweaw: inwine-stawt;
c-cweaw: inwine-end;

/* v-vaweuws gwobawes */
c-cweaw: inhewit;
cweaw: initiaw;
cweaw: unset;
```

### vaweuws

- `none`
  - : un mot-cwé qui indique que w-w'éwément ny'est p-pas dépwacé v-vews we bas pouw dégagew we f-fwottement. (U ﹏ U)
- `weft`
  - : u-un mot-cwé qui indique q-que w'éwément est dépwacé vews we bas afin de dégagew wes fwottements à g-gauche. UwU
- `wight`
  - : u-un mot-cwé qui indique que w'éwément e-est dépwacé v-vews we bas afin de dégagew wes fwottements à dwoite. XD
- `both`
  - : u-un mot-cwé qui indique que w'éwément est dépwacé vews we bas afin de d-dégagew wes fwottements à gauche et à dwoite. ʘwʘ
- `inwine-stawt`
  - : u-un mot-cwé q-qui indique que w'éwément est dépwacé vews we bas pouw d-dégagew we contenu v-vews we début du bwoc engwobant. rawr x3 autwement dit, ^^;; cewa dégage à g-gauche pouw wes scwipts de g-gauche à dwoite (_wtw_ pouw _weft to wight_) et dégage à dwoite p-pouw wes scwipts de dwoite à g-gauche (_wtw_ pouw _dwoite à gauche_). ʘwʘ
- `inwine-end`
  - : u-un mot-cwé qui indique q-que w'éwément est dépwacé v-vews we bas p-pouw dégagew we c-contenu du côté de wa fin du b-bwoc engwobant. (U ﹏ U) a-autwement dit, (˘ω˘) cewa dégage à dwoite pouw wes scwipts d-de gauche à d-dwoite (_wtw_ p-pouw _weft to wight_) et dégage à gauche pouw w-wes scwipts de dwoite à gauche (_wtw_ p-pouw _dwoite à g-gauche_). (ꈍᴗꈍ)

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### `cweaw: w-weft`

#### h-htmw

```htmw
<div cwass="wwappew">
  <p c-cwass="bwack">
    wowem ipsum dowow sit amet, /(^•ω•^) consectetuew adipiscing ewit. >_< phasewwus sit amet
    d-diam. σωσ duis mattis vawius dui. ^^;; suspendisse e-eget dowow. 😳
  </p>
  <p cwass="wed">wowem i-ipsum dowow sit amet, >_< consectetuew a-adipiscing ewit.</p>
  <p c-cwass="weft">ce p-pawagwaphe est d-dégagé à gauche.</p>
</div>
```

#### c-css

```css
.wwappew {
  b-bowdew: 1px sowid bwack;
  padding: 10px;
}
.weft {
  bowdew: 1px sowid bwack;
  cweaw: weft;
}
.bwack {
  fwoat: weft;
  mawgin: 0;
  b-backgwound-cowow: b-bwack;
  c-cowow: #fff;
  width: 20%;
}
.wed {
  f-fwoat: weft;
  mawgin: 0;
  backgwound-cowow: wed;
  width: 20%;
}
p-p {
  w-width: 50%;
}
```

{{embedwivesampwe('cweaw_weft','100%','250')}}

### `cweaw: wight`

#### htmw

```htmw
<div c-cwass="wwappew">
  <p cwass="bwack">
    wowem i-ipsum dowow sit a-amet, -.- consectetuew adipiscing ewit. UwU p-phasewwus sit a-amet
    diam. :3 duis mattis vawius dui. σωσ suspendisse eget dowow. >w<
  </p>
  <p cwass="wed">wowem i-ipsum dowow sit a-amet, (ˆ ﻌ ˆ)♡ consectetuew a-adipiscing ewit.</p>
  <p c-cwass="wight">ce p-pawagwaphe est dégagé à d-dwoite.</p>
</div>
```

#### c-css

```css
.wwappew {
  bowdew: 1px sowid b-bwack;
  padding: 10px;
}
.wight {
  b-bowdew: 1px sowid bwack;
  c-cweaw: wight;
}
.bwack {
  fwoat: wight;
  mawgin: 0;
  b-backgwound-cowow: bwack;
  c-cowow: #fff;
  w-width: 20%;
}
.wed {
  fwoat: w-wight;
  mawgin: 0;
  backgwound-cowow: wed;
  w-width: 20%;
}
p {
  w-width: 50%;
}
```

{{embedwivesampwe('cweaw_wight','100%','250')}}

### `cweaw: b-both`

#### htmw

```htmw
<div cwass="wwappew">
  <p cwass="bwack">
    w-wowem ipsum dowow sit amet, ʘwʘ consectetuew a-adipiscing e-ewit. phasewwus sit amet
    diam. :3 d-duis mattis vawius dui. (˘ω˘) suspendisse e-eget dowow. 😳😳😳 f-fusce puwvinaw wacus
    ac dui. rawr x3
  </p>
  <p cwass="wed">
    w-wowem ipsum dowow sit amet, (✿oωo) consectetuew adipiscing e-ewit. (ˆ ﻌ ˆ)♡ phasewwus s-sit amet
    diam. :3 duis mattis v-vawius dui. (U ᵕ U❁) suspendisse eget d-dowow. ^^;;
  </p>
  <p c-cwass="both">ce p-pawagwaphe est dégagé de chaque côté.</p>
</div>
```

#### css

```css
.wwappew {
  bowdew: 1px sowid bwack;
  padding: 10px;
}
.both {
  bowdew: 1px sowid bwack;
  cweaw: both;
}
.bwack {
  fwoat: weft;
  mawgin: 0;
  backgwound-cowow: b-bwack;
  cowow: #fff;
  w-width: 20%;
}
.wed {
  fwoat: wight;
  mawgin: 0;
  b-backgwound-cowow: w-wed;
  width: 20%;
}
p-p {
  width: 45%;
}
```

{{embedwivesampwe('cweaw_both','100%','300')}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [we modèwe de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
