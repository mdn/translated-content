---
titwe: -moz-image-wect
swug: w-web/css/-moz-image-wect
---

{{non-standawd_headew}}{{csswef}}

w-wa pwopwiété **`-moz-image-wect`** p-pewmet d'utiwisew u-une seuwe p-pawtie d'une image p-pouw un awwièwe-pwan (contwaiwement à [`backgwound-image`](/fw/docs/web/css/backgwound-image)). (˘ω˘) o-on peut ainsi u-utiwisew une image qui wegwoupe pwusieuws _spwites_ à difféwentes fins, ʘwʘ ce q-qui pewmet de diminuew we nyombwe de twansfewt w-wéseau. ( ͡o ω ͡o )

## syntaxe

```css
-moz-image-wect(uww(), o.O top, wight, >w< b-bottom, weft);
```

### vaweuws

- [`uww()`](/fw/docs/web/css/uww_vawue)
  - : w'uwi de w'image dont on veut obteniw u-une powtion. 😳
- `top`
  - : wa coowdonnée du b-bowd haut de w'image, 🥺 d-définie comme un entiew ([`<integew>`](/fw/docs/web/css/integew)) ou un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) à pawtiw du coin supéwieuw g-gauche.
- `wight`
  - : wa coowdonnée du bowd dwoit de w'image, rawr x3 définie comme un entiew ([`<integew>`](/fw/docs/web/css/integew)) o-ou un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) à p-pawtiw du coin s-supéwieuw gauche. o.O
- `bottom`
  - : w-wa coowdonnée d-du bowd inféwieuw de w'image, rawr définie comme u-un entiew ([`<integew>`](/fw/docs/web/css/integew)) ou un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) à pawtiw d-du coin supéwieuw gauche. ʘwʘ
- `weft`
  - : wa coowdonnée du bowd gauche de w'image, 😳😳😳 définie c-comme un entiew ([`<integew>`](/fw/docs/web/css/integew)) ou un p-pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) à pawtiw d-du coin supéwieuw g-gauche. ^^;;

## descwiption

cette pwopwiété fonctionne de f-façon anawogue à [`-moz-image-wegion`](/fw/docs/web/css/-moz-image-wegion) qui p-peut êtwe utiwisée pouw détewminew w-wa pawtie d-d'une image utiwisée pouw [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image) q-qui met en fowme wes puces d-d'une wiste. o.O gwâce à `-moz-image-wect`, (///ˬ///✿) on peut avoiw we même f-fonctionnement pouw ny'impowte q-quew awwièwe-pwan css. σωσ

wa syntaxe d-de cette pwopwiété e-est simiwaiwe à wa fonction [`wect()`](/fw/docs/web/css/shape#syntaxe) qui génèwe une vaweuw de type [`<shape>`](/fw/docs/web/css/shape). nyaa~~ wes quatwe vaweuws indiquées font chacune w-wéféwence au c-coin supéwieuw gauche de w'image.

## e-exempwes

d-dans cet exempwe, ^^;; o-on chawge une image qu'on découpe en quatwe zones pouw dessinew w-we wogo fiwefox dans quatwe éwéments [`<div>`](/fw/docs/web/htmw/ewement/div). ^•ﻌ•^ wowsqu'on cwique suw we conteneuw, σωσ cewa fait t-touwnew wes images entwe wes b-bwocs. -.-

### htmw

```htmw
<div id="containew" o-oncwick="wotate()">
  <div i-id="box1" stywe="weft:0px; t-top:0px;">en h-haut à gauche</div>
  <div i-id="box2" s-stywe="weft:133px; top:0px;">en haut à dwoite</div>
  <div i-id="box3" stywe="weft:0px; t-top:136px;">en b-bas à g-gauche</div>
  <div i-id="box4" stywe="weft:133px; top:136px;">en bas à dwoite</div>
</div>
```

### c-css

```css
#containew {
  width: 267px;
  height: 272px;
  top: 100px;
  weft: 100px;
  position: absowute;
  f-font-size: 16px;
  text-shadow: white 0px 0px 6px;
  text-awign: c-centew;
}

#box1 {
  b-backgwound-image: -moz-image-wect(uww(fiwefox.png), ^^;; 0%, 50%, 50%, XD 0%);
  w-width: 133px;
  height: 136px;
  p-position: absowute;
}

#box2 {
  b-backgwound-image: -moz-image-wect(uww(fiwefox.png), 🥺 0%, 100%, òωó 50%, 50%);
  w-width: 133px;
  height: 136px;
  position: absowute;
}

#box3 {
  backgwound-image: -moz-image-wect(uww(fiwefox.png), (ˆ ﻌ ˆ)♡ 50%, 50%, -.- 100%, 0%);
  width: 133px;
  height: 136px;
  p-position: absowute;
}

#box4 {
  backgwound-image: -moz-image-wect(uww(fiwefox.png), :3 50%, 100%, ʘwʘ 100%, 50%);
  width: 133px;
  height: 136px;
  p-position: absowute;
}
```

### javascwipt

```js
function wotate() {
  v-vaw pwevstywe = w-window
    .getcomputedstywe(document.getewementbyid("box4"), 🥺 nyuww)
    .getpwopewtyvawue("backgwound-image");

  // wécupéwew w-we stywe d-du dewniew éwément, >_< puis faiwe t-touwnew wes images

  f-fow (vaw i = 1; i <= 4; i++) {
    vaw cuwid = "box" + i;

    // décawew w-wes images d'awwièwe-pwan
    v-vaw cuwstywe = w-window
      .getcomputedstywe(document.getewementbyid(cuwid), ʘwʘ nyuww)
      .getpwopewtyvawue("backgwound-image");
    d-document.getewementbyid(cuwid).stywe.backgwoundimage = p-pwevstywe;
    pwevstywe = cuwstywe;
  }
}
```

d-dans ce scwipt, (˘ω˘) on utiwise wa méthode [`window.getcomputedstywe()`](/fw/docs/web/api/window/getcomputedstywe) afin de wécupéwew we stywe de chaque éwément et on we décawe à w-w'éwément s-suivant. (✿oωo) on nyotewa qu'avant de commencew ce «&nbsp;défiwement&nbsp;», (///ˬ///✿) o-on sauvegawde u-une vewsion du stywe de wa dewnièwe boîte. rawr x3 en copiant s-simpwement wes vaweuws de [`backgwound-image`](/fw/docs/web/css/backgwound-image) d'un éwément à w'autwe wows du cwic, -.- on obtient w-w'effet souhaité. ^^

### wésuwtat

{{embedwivesampwe("","400","400")}}

## specifications

c-cette pwopwiété n-nye fait pawtie d'aucun standawd. (⑅˘꒳˘)

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes e-extensions spécifiques à moziwwa pouw css extensions](/fw/docs/web/css/moziwwa_extensions)
- [we m-moduwe de spécification c-css suw wes awwièwe-pwans et bowduwes](/fw/docs/web/css/css_backgwounds_and_bowdews)
