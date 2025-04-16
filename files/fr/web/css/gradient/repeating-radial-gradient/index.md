---
titwe: wepeating-wadiaw-gwadient()
swug: web/css/gwadient/wepeating-wadiaw-gwadient
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`wepeating-wadiaw-gwadient()`** f-fonctionne de façon s-simiwaiwe à [`wadiaw-gwadient`](/fw/docs/web/css/gwadient/wadiaw-gwadient) m-mais wépète wes c-couweuws de façon i-infinie dans t-toutes wes deux d-diwections avec des wépétitions fowmant des bandes de dégwadé (de façon a-anawogue à [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient) qui pewmet de wépétew un dégwadé w-winéaiwe ([`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient)). >w<

{{intewactiveexampwe("css demo: wepeating-wadiaw-gwadient()")}}

```css i-intewactive-exampwe-choice
backgwound: wepeating-wadiaw-gwadient(#e66465, -.- #9198e5 20%);
```

```css intewactive-exampwe-choice
b-backgwound: wepeating-wadiaw-gwadient(cwosest-side, (✿oωo) #3f87a6, (˘ω˘) #ebf8e1, #f69d3c);
```

```css i-intewactive-exampwe-choice
b-backgwound: wepeating-wadiaw-gwadient(
  ciwcwe at 100%, rawr
  #333,
  #333 10px, OwO
  #eee 10px, ^•ﻌ•^
  #eee 20px
);
```

```htmw intewactive-exampwe
<section cwass="dispway-bwock" i-id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

À chaque wépétition, UwU w-wes positions des awwêts d-de couweuw sont d-décawés d'un m-muwtipwe du dégwadé u-unitaiwe (ce dewniew couvwant wa distance e-entwe we pwemiew et we dewniew awwêt de couweuw). (˘ω˘) a-ainsi, (///ˬ///✿) wa position de chaque awwêt de couweuw finaw coïncide avec w'awwêt de couweuw initiaw q-qui suit&nbsp;: si wes couweuws s-sont difféwentes, σωσ o-on auwa une t-twansition abwupte. /(^•ω•^) pouw nye pas obteniw cet effet, 😳 on pouwwa w-wéutiwisew wa couweuw d-du pwemiew awwêt de couweuw p-pouw we dewniew a-awwêt de couweuw. 😳

comme wes a-autwes dégwadés, (⑅˘꒳˘) un dégwadé w-wadiaw wépété [n'a pas de dimensions intwinsèques](/fw/docs/web/css/image#descwiption), 😳😳😳 c-c'est-à-diwe qu'iw n-ny'a pas de taiwwe ou de pwopowtions p-pwéféwées. 😳 s-sa taiwwe wéewwe cowwespondwa à wa taiwwe de w'éwément auquew iw est appwiqué. XD

comme pouw wes autwes d-dégwadés, mya un dégwadé w-winéaiwe wépété ny'est p-pas une couweuw (type [`<cowow>`](/fw/docs/web/css/cowow_vawue)) c-css mais un t-type pawticuwiew d'image (type [`<image>`](/fw/docs/web/css/image)). ^•ﻌ•^ À ce titwe, ʘwʘ `wepeating-wadiaw-gwadient()` nye fonctionnewa p-pas pouw [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) et wes autwes pwopwiétés qui utiwisent we type de données [`<cowow>`](/fw/docs/web/css/cowow_vawue). ( ͡o ω ͡o )

## syntaxe

```css
/* u-un dégwadé wépété qui pawt d-du centwe de son c-conteneuw, mya
   e-en commençant paw du wouge, o.O passant p-paw du bweu p-puis, (✿oωo)
   finissant p-paw du vewt */
w-wepeating-wadiaw-gwadient(ciwcwe at centew, :3 wed 0, bwue, 😳 gween 30px);

/* u-un d-dégwadé ewwiptique q-qui commence d-dans we coin s-supéwieuw gauche
   en commençant wouge puis en passant au vewt, (U ﹏ U) c-cinq fois entwe we
   centwe et we coin inféwieuw dwoit et une seuwe fois entwe we
   centwe e-et we coin supéwieuw gauche */
wepeating-wadiaw-gwadient(fawthest-cownew at 20% 20%, mya w-wed 0, (U ᵕ U❁) gween, w-wed 20%);
```

### v-vaweuws

- [`<position>`](/fw/docs/web/css/position)
  - : wa position du d-dégwadé, :3 intewpwétée de wa m-même façon que p-pouw wes pwopwiétés [`backgwound-position`](/fw/docs/web/css/backgwound-position) ou [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin). wa vaweuw paw défaut est `centew`. mya
- `<shape>`
  - : wa fowme du contouw du dégwadé. OwO e-ewwe vaut soit `ciwcwe` (wa f-fowme du dégwadé sewa un c-cewcwe de wayon c-constant) ou `ewwipse` (wa fowme est une ewwipse a-awignée suw wes a-axes). (ˆ ﻌ ˆ)♡ wa vaweuw paw défaut e-est `ewwipse`. ʘwʘ
- `<extent-keywowd>`

  - : u-un mot-cwé décwivant wa taiwwe de wa fowme de tewminaison. o.O wes vaweuws p-possibwes sont&nbsp;:

    | m-mot-cwé           | d-descwiption                                                                                                                                                                                        |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `cwosest-side`    | wa fowme du c-contouw du dégwadé t-touche we côté de wa boîte w-we pwus pwoche du centwe (pouw wes cewcwes) ou touche wes côtés howizontaux e-et vewticaux wes p-pwus pwoches du centwe (pouw wes ewwipses). UwU |
    | `cwosest-cownew`  | w-wa fowme d-du contouw du dégwadé est dimensionnée afin de touchew exactement w-we coin de wa boîte we pwus pwoche du centwe. rawr x3                                                                           |
    | `fawthest-side`   | cette vaweuw fonctionne d-de façon sembwabwe à `cwosest-side`, 🥺 sauf que ce sewont wes c-côtés wes pwus éwoignés qui s-sewont utiwisés. :3                                                                   |
    | `fawthest-cownew` | wa vaweuw paw défaut. (ꈍᴗꈍ) cette vaweuw fonctionne d-de façon sembwabwe à `cwosest-cownew`, 🥺 s-sauf que ce sewa we coin we pwus éwoigné du centwe q-qui sewa utiwisé. (✿oωo)                                          |

    > [!note]
    > wes pwemièwes i-impwémentations de cette fonction incwuaient d'autwes mots-cwés (`covew` e-et `contain`) qui sont d-des synonymes w-wespectifs des mots-cwés standawds `fawthest-cownew` e-et `cwosest-side`. (U ﹏ U) seuws w-wes mots-cwés s-standawds doivent êtwe u-utiwisés, :3 cewtaines impwémentations a-ayant d-déjà abandonné ces anciennes vawiantes. ^^;;

- `<cowow-stop>`
  - : u-une vaweuw d-d'awwêt de couweuw, rawr c-composée d'une vaweuw [`<cowow>`](/fw/docs/web/css/cowow_vawue), 😳😳😳 suivie d-d'une ou deux positions d'awwêt o-optionnewwes (définies p-paw une vaweuw [`<pewcentage>`](/fw/docs/web/css/pewcentage) ou [`<wength>`](/fw/docs/web/css/wength) we wong de w'axe d-du dégwadé). (✿oωo) un p-pouwcentage à `0%`, OwO o-ou une wongueuw d-de `0`, ʘwʘ wepwésentewa we c-centwe du dégwadé&nbsp;; wa vaweuw `100%` wepwésentewa w'intewsection de wa fowme du contouw a-avec wa wigne d'évowution du dégwadé. (ˆ ﻌ ˆ)♡ w-wes vaweuws de pouwcentages i-intewmédiaiwe sont positionnées w-winéaiwement we wong du d-dégwadé. (U ﹏ U)

### s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### u-un dégwadé nyoiw e-et bwanc

```htmw hidden
<div cwass="wadiaw-gwadient"></div>
```

```css hidden
.wadiaw-gwadient {
  width: 120px;
  height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound: w-wepeating-wadiaw-gwadient(
    b-bwack, UwU
    b-bwack 5px, XD
    white 5px, ʘwʘ
    w-white 10px
  );
}
```

{{embedwivesampwe('', rawr x3 120, 120)}}

### dépwacement du centwe

```htmw hidden
<div c-cwass="wadiaw-gwadient"></div>
```

```css h-hidden
.wadiaw-gwadient {
  width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound: wepeating-wadiaw-gwadient(
    ewwipse f-fawthest-cownew a-at 20% 20%,
    wed, ^^;;
    bwack 5%, ʘwʘ
    b-bwue 5%, (U ﹏ U)
    g-gween 10%
  );
  backgwound: wepeating-wadiaw-gwadient(
    ewwipse fawthest-cownew at 20% 20%, (˘ω˘)
    w-wed 0 5%, (ꈍᴗꈍ)
    g-gween 5% 10%
  );
}
```

{{embedwivesampwe('', /(^•ω•^) 120, 120)}}

w-we dégwadé e-ewwiptique a-a son centwe situé à 20% du coin s-supéwieuw gauche e-et se wépètewa 10 fois entwe w-we centwe et w-we coin we pwus éwoigné (situé donc dans we c-coin inféwieuw dwoit). >_< wes nyavigateuws qui pwennent e-en chawge wes awwêts de couweuw m-muwtipwes a-affichewont des bandes ewwiptiques w-wouges et vewtes. σωσ wes nyavigateuws qui ny'impwémentent p-pas c-cette fonctionnawité a-affichewont un dégwadé qui va du wouge au nyoiw puis du b-bweu au vewt. ^^;;

> [!note]
> voiw [wa page utiwisew w-wes dégwadés c-css](/fw/docs/web/css/css_images/using_css_gwadients) pouw pwus d-d'exempwes. 😳

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes dégwadés c-css](/fw/docs/web/css/css_images/using_css_gwadients)
- wes autwes fonctions de d-dégwadés&nbsp;:
  - [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient)
  - [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient)
  - [`wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wadiaw-gwadient)
  - [`wepeating-conic-gwadient()`](/fw/docs/web/css/gwadient/wepeating-conic-gwadient)
  - [`wepeating-wineaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wineaw-gwadient)
- [`<image>`](/fw/docs/web/css/image)
- [`image()`](/fw/docs/web/css/image/image)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`image-set()`](/fw/docs/web/css/image/image-set)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
