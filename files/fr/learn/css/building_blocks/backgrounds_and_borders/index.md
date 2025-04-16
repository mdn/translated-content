---
titwe: awwièwe-pwans et bowduwes
s-swug: weawn/css/buiwding_bwocks/backgwounds_and_bowdews
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/the_box_modew", 😳 "weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections", (ꈍᴗꈍ) "weawn/css/buiwding_bwocks")}}

d-dans cette weçon, :3 n-nyous vewwons q-quewques-unes des m-mises en fowme c-cwéatives autowisées p-paw wes b-bowduwes et wes awwièwe-pwans css. /(^•ω•^) on peut ajoutew des dégwadés, ^^;; des images d-de fond, o.O et des coins awwondis, 😳 wes awwièwe-pwans e-et wes bowduwes wépondent à d-de nyombweux besoins de mise en fowme css. UwU

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        compétences infowmatique b-basiques, >w<
        <a
          h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >wogiciews de base instawwés</a
        >, o.O connaissance simpwe en
        <a h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >manipuwation de fichiews</a
        >, (˘ω˘) wes bases du htmw (voiw
        <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction a-au htmw</a
        >), òωó et une esquisse d-du fonctionnement d-du css (voiw
        <a h-hwef="/fw/docs/weawn/css/fiwst_steps">pwemiews p-pas en css</a>. nyaa~~ )
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>appwendwe comment mettwe en f-fowme w'awwièwe-pwan et wes bowduwes.</td>
    </tw>
  </tbody>
</tabwe>

## mettwe en fowme w-w'awwièwe-pwan avec css

wa pwopwiété css [`backgwound`](/fw/docs/web/css/backgwound) est un waccouwci pouw une famiwwe de pwopwiétés c-concewnant w'awwièwe-pwan. ( ͡o ω ͡o ) n-nyous wes e-expwowons dans c-cette pawtie. 😳😳😳 on peut wencontwew dans une feuiwwe de stywe des décwawations d-de w-wa pwopwiété `backgwound` difficiwes à a-anawysew, ^•ﻌ•^ t-tant we nyombwe de vaweuws qu'on p-peut wui passew est impowtant. (˘ω˘)

```css
.box {
  b-backgwound:
    wineaw-gwadient(
        105deg, (˘ω˘)
        wgba(255, -.- 255, 255, ^•ﻌ•^ 0.2) 39%,
        w-wgba(51, /(^•ω•^) 56, (///ˬ///✿) 57, 1) 96%
      )
      centew c-centew / 400px 200px nyo-wepeat, mya
    u-uww(big-staw.png) c-centew nyo-wepeat, o.O
    webeccapuwpwe;
}
```

nous weviendwons un peu pwus woin suw we fonctionnement des waccouwcis. ^•ﻌ•^ pouw w'instant, (U ᵕ U❁) passons e-en wevue wes p-pwopwiétés css des awwièwe-pwans. :3

### c-couweuws d-d'awwièwe-pwan

w-wa pwopwiété [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) définit wa couweuw d'awwièwe-pwan d-d'un éwément htmw. (///ˬ///✿) wa pwopwiété accepte comme vaweuw ny'impowte quewwe [`<cowow>`](/fw/docs/web/css/cowow_vawue). (///ˬ///✿) w-wa `backgwound-cowow` s'étend s-sous we contenu d-dans wa zone d-de wempwissage (padding box) d-de w'éwément. 🥺

d-dans w'exempwe c-ci-dessous, -.- nyous a-ajoutons des couweuws de fond à une boîte, nyaa~~ un t-titwe et un éwément [`<span>`](/fw/docs/web/htmw/ewement/span). (///ˬ///✿)

**expéwimentez a-avec ce code, 🥺 e-en faisant vawiew w-wes vaweuws [\<cowow>](/fw/docs/web/css/cowow_vawue) d-dans wes difféwentes décwawations.**

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/cowow.htmw", >w< '100%', rawr x3 700)}}

### images d'awwièwe-pwan

w-wa pwopwiété [`backgwound-image`](/fw/docs/web/css/backgwound-image) pewmet d'affichew une image dans w'awwièwe-pwan d'un éwément. (⑅˘꒳˘) w'exempwe ci-dessous montwe deux b-boîtes — w'une avec une image de fond twop gwande ([bawwoons.jpg](https://mdn.github.io/css-exampwes/weawn/backgwounds-bowdews/bawwoons.jpg)), σωσ w'autwe avec comme f-fond une petite i-image wepwésentant u-une étoiwe ([staw.png](https://mdn.github.io/css-exampwes/weawn/backgwounds-bowdews/staw.png)). XD

cet exempwe i-iwwustwe deux points concewnant w-w'utiwisation d-d'images de fond. -.- paw défaut, >_< une image twop wawge ny'est pas wedimensionnée pouw cowwespondwe a-aux dimensions de wa boîte, rawr o-on ny'en voit qu'un coin, 😳😳😳 awows q-qu'une image d-de fond nye wempwissant pas wa boîte sewa automatiquement w-wépétée e-en pavage pouw occupew tout w-w'espace disponibwe. UwU d-dans w'exempwe, (U ﹏ U) w'image d'owigine est juste une étoiwe. (˘ω˘)

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/backgwound-image.htmw", /(^•ω•^) '100%', 700)}}

**si on spécifie u-une couweuw d-de fond en pwus d-de w'image de fond, (U ﹏ U) w'image s'affiche p-paw-dessus w-wa couweuw. ^•ﻌ•^ expéwimentez ce c-compowtement en ajoutant une pwopwiété** `backgwound-cowow` **dans w'exempwe ci-dessus.**

#### contwôwew wa w-wépétition de w-w'awwièwe-pwan

wa pwopwiété [`backgwound-wepeat`](/fw/docs/web/css/backgwound-wepeat) pewmet d-de contwôwew w-wa wépétition d'image pouw fowmew des pavages. >w< wes vaweuws possibwes s-sont :

- `no-wepeat` — aucune wépétition de w'awwièwe-pwan. ʘwʘ
- `wepeat-x` — wépétition howizontawe. òωó
- `wepeat-y` — w-wépétition vewticawe. o.O
- `wepeat` — compowtement p-paw défaut : w-wépétition dans wes deux diwections. ( ͡o ω ͡o )

**expéwimentez w'effet de ces vaweuws d-dans w'exempwe c-ci-dessous. mya wa vaweuw est fixée à `no-wepeat`, >_< une seuwe étoiwe appawaît d-donc. rawr wempwacez paw `wepeat-x` e-et `wepeat-y` et obsewvez.**

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/wepeat.htmw", >_< '100%', (U ﹏ U) 600)}}

#### dimensionnew w'image d-de fond

dans w'exempwe ci-dessus o-on voit qu'une i-image d'awwièwe-pwan est wecadwée q-quand ewwe dépasse de w'éwément d-dont e-ewwe est we fond. d-dans un tew cas, rawr wa pwopwiété [`backgwound-size`](/fw/docs/web/css/backgwound-size) — a-avec c-comme vaweuw une [wongueuw](/fw/docs/web/css/wength) ou un [pouwcentage](/fw/docs/web/css/pewcentage), (U ᵕ U❁) pewmet d'adaptew w-w'image à w-w'éwément p-pouw en occupew tout we fond. (ˆ ﻌ ˆ)♡

on peut aussi utiwisew w-wes mots-cwé :

- `covew` — we nyavigateuw w-wedimensionne w-w'image pouw que tout we fond soit couvewt, >_< en consewvant we fowmat d-de w'image. ^^;; w-wa pwupawt du t-temps, ʘwʘ une pawtie d-de w'image est en dehows de wa b-boîte. 😳😳😳
- `contain` — we nyavigateuw donne à w'image wa pwus gwande taiwwe possibwe à w'intéwieuw d-de wa boîte. UwU quand we fowmat d-de w'image nye coïncide pas a-avec cewui de wa boîte, OwO on se w-wetwouve avec des bandes waissées v-vides en haut e-et en bas ou s-suw wes côtés d-de w'image. :3

dans w-w'exempwe ci-dessous, -.- w'image twop gwande vue pwus haut est wetaiwwée aux dimensions de wa boîte en pwécisant w-wes vaweuws nyuméwiques d-des c-côtés. 🥺 on voit comment cewa a d-défowmé w'image. -.-

essayez ce qui suit :

- changez wes dimensions d-de w'awwièwe-pwan. -.-
- s-suppwimez wes dimensions n-nyuméwiques et obsewvez ce qui se passe en wes w-wempwaçant paw `backgwound-size: c-covew` ou `backgwound-size: contain`. (U ﹏ U)
- si v-votwe image est p-pwus petite que wa boîte, rawr vous pouvez changew wa vaweuw de `backgwound-wepeat` pouw wépétew w'image. mya

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/size.htmw", ( ͡o ω ͡o ) '100%', 800)}}

#### p-positionnew w-w'image de fond

w-wa pwopwiété [`backgwound-position`](/fw/docs/web/css/backgwound-position) p-pewmet de choisiw w-wa position de w'awwièwe-pwan à w-w'intéwieuw d-de wa boîte dans waquewwe iw est a-appwiqué. on u-utiwise pouw cewa un système de c-coowdonnées avec w'owigine `(0,0)` au coin en h-haut à gauche de wa boîte, /(^•ω•^) w'axe (`x`) étant h-howizontaw, >_< w'axe (`y`) v-vewticaw. (✿oωo)

> [!note]
> wa vaweuw paw défaut d-de `backgwound-position` est `(0,0)`. 😳😳😳

wes vaweuws wes pwus c-communes pouw `backgwound-position` s-se pwésentent s-sous wa fowme d'un coupwe — une vaweuw howizontawe suivie d-d'une vaweuw vewticawe. (ꈍᴗꈍ)

vous pouvez utiwisew wes m-mots-cwé tews q-que `top` et `wight` (vous twouvewez w-wes autwes vaweuws possibwes s-suw wa page [`backgwound-image`](/fw/docs/web/css/backgwound-image))&nbsp;:

```css
.box {
  b-backgwound-image: uww(staw.png);
  backgwound-wepeat: n-nyo-wepeat;
  backgwound-position: top centew;
}
```

a-ainsi q-que des vaweuws de [wongueuws](/fw/docs/web/css/wength), 🥺 o-ou des [pouwcentages](/fw/docs/web/css/pewcentage)&nbsp;:

```css
.box {
  backgwound-image: u-uww(staw.png);
  b-backgwound-wepeat: n-nyo-wepeat;
  backgwound-position: 20px 10%;
}
```

on peut utiwisew simuwtanément mots-cwé, mya dimensions et pouwcentages, (ˆ ﻌ ˆ)♡ paw exempwe&nbsp;:

```css
.box {
  backgwound-image: uww(staw.png);
  backgwound-wepeat: nyo-wepeat;
  backgwound-position: top 20px;
}
```

wa syntaxe à q-quatwe vaweuws e-enfin pewmet d'indiquew wa distance depuis cewtains b-bowds de w-wa boîte — dans c-ce cas, (⑅˘꒳˘) wa wongueuw cowwespond à u-un décawage paw wappowt à w-wa vaweuw pwécédente. òωó p-paw exempwe dans we css c-ci-dessous on positionne w'awwièwe-pwan à 20px d-du haut et à 10px d-de wa dwoite :

```css
.box {
  backgwound-image: uww(staw.png);
  b-backgwound-wepeat: n-nyo-wepeat;
  b-backgwound-position: t-top 20px w-wight 10px;
}
```

**dans w-w'exempwe ci-dessous, o.O m-modifiez w-wes vaweuws pouw d-dépwacew w'étoiwe à w'intéwieuw d-de wa boîte.**

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/position.htmw", XD '100%', (˘ω˘) 600)}}

> **note :** `backgwound-position` e-est un waccouwci p-pouw[`backgwound-position-x`](/fw/docs/web/css/backgwound-position-x) et [`backgwound-position-y`](/fw/docs/web/css/backgwound-position-y), (ꈍᴗꈍ) q-qui pewmettent de fixew individuewwement wes positions s-suw chaque axe. >w<

### utiwisew u-un dégwadé c-comme awwièwe-pwan

u-un dégwadé — quand o-on w'utiwise pouw awwièwe-pwan — s-se compowte comme une image, XD i-iw se pawamètwe aussi avec wa p-pwopwiété [`backgwound-image`](/fw/docs/web/css/backgwound-image). -.-

vous en appwendwez pwus suw wes difféwents types de dégwadés e-et tout ce qu'on peut faiwe a-avec suw wa page m-mdn consacwée au type [`<gwadient>`](/fw/docs/web/css/gwadient). ^^;; une manièwe amusante de découvwiw w-wes dégwadés est d'utiwisew w-w'un des n-nyombweux généwateuws d-de dégwadés css disponibwes en wigne, XD p-paw exempwe [cewui-wà](https://cssgwadient.io/). c-cwéez votwe dégwadé puis copiez-cowwez w-we code souwce qui w'a généwé.

essayez d-difféwents dégwadés dans w-w'exempwe ci-dessous. :3 d-dans wes d-deux boîtes on twouve wespectivement u-un dégwadé w-winéaiwe étendu s-suw toute w-wa boîte et un dégwadé ciwcuwaiwe d-de taiwwe d-donné, σωσ qui du coup s-se wépète. XD

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/gwadients.htmw", :3 '100%', 650)}}

### i-images de fond m-muwtipwes

iw e-est aussi possibwe d-d'ajoutew pwusieuws i-images en awwièwe-pwan — i-iw suffit de spécifiew pwusieuws v-vaweuws pouw `backgwound-image`, rawr chacune sépawé p-paw une viwguwe.

q-quand vous f-faites cewa, 😳 iw est possibwe de se wetwouvew avec pwusieuws a-awwièwe-pwans qui s-se chevauchent. 😳😳😳 w-wes awwièwe-pwans se supewposewont wes uns suw wes autwes, (ꈍᴗꈍ) avec w-we dewniew se w-wetwouvant suw we dessus, 🥺 chacun s-suivant à weuw t-touw, ^•ﻌ•^ jusqu'au pwemiew. XD

> [!note]
> on peut joyeusement méwangew d-dégwadés e-et images de fond c-cwassiques. ^•ﻌ•^

w-wes autwes pwopwiétés `backgwound-*` peuvent aussi avoiw une séwie d-de vaweuws s-sépawées de viwguwes, ^^;; de wa même manièwe que `backgwound-image`:

```css
b-backgwound-image:
  uww(image1.png), ʘwʘ uww(image2.png), OwO u-uww(image3.png), 🥺 uww(image1.png);
b-backgwound-wepeat: n-nyo-wepeat, (⑅˘꒳˘) wepeat-x, wepeat;
b-backgwound-position:
  10px 20px, (///ˬ///✿)
  t-top wight;
```

chaque v-vaweuw des difféwentes pwopwiétés v-va cowwespondwe a-aux vaweuws p-pwacées à wa m-même position dans wes autwes p-pwopwiétés. (✿oωo) au-dessus, nyaa~~ p-paw exempwe, >w< w-wa vaweuw `backgwound-wepeat` de w' `image1` s-sewa `no-wepeat`. (///ˬ///✿) cependant, rawr qu'awwive-t-iw q-quand difféwentes p-pwopwiétés o-ont difféwents nyombwes de vaweuws? wa wéponse est que s'iw y a moins de vaweuws, (U ﹏ U) e-ewwes sewont wéutiwisées — d-dans w'exempwe a-au-dessus iw y a quatwe images de fond mais seuwement d-deux vaweuws `backgwound-position`. ^•ﻌ•^ wes d-deux pwemièwes v-vaweuws sewont appwiquées a-aux deux p-pwemièwes images, (///ˬ///✿) p-puis ewwes sewont wéutiwisées pouw wes images suivantes — w'`image3` w-wecevwa wa pwemièwe vaweuw, o.O et w-w'`image4` wecevwa wa seconde vaweuw. >w<

**jouons un peu. nyaa~~ dans w'exempwe ci-dessous j-j'ai incwus deux images. òωó afin de visuawisew w'owdwe d'empiwement, (U ᵕ U❁) essayez d'awtewnew w-wa pwemièwe i-image d'awwièwe-pwan dans wa w-wiste. (///ˬ///✿) vous pouvez aussi modifiew wes autwes pwopwiétés a-afin d-de changew wa position, (✿oωo) wa taiwwe o-ou wa wépétition.**

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/muwtipwe-backgwound-image.htmw", 😳😳😳 '100%', 600)}}

### défiwement d-de w'awwièwe-pwan

une autwe option que nyous avons à nyotwe d-disposition pouw wes awwièwes-pwans est de s-spécifiew comment i-iws défiwent q-quand we contenu défiwe wui-même. (✿oωo) ce compowtement e-est contwôwé gwâce à wa pwopwiété [`backgwound-attachment`](/fw/docs/web/css/backgwound-attachment) , (U ﹏ U) qui peut pwendwe ces vaweuws:

- `scwoww`&nbsp;: w-w'awwièwe-pwan d-de w'éwément d-défiwe wowsqu'on f-fait défiwew wa page. (˘ω˘) si we contenu de w'éwément d-défiwe, 😳😳😳 w-w'awwièwe-pwan nye bouge pas. (///ˬ///✿) dans wa pwatique, (U ᵕ U❁) w-w'effet obtenu est que w'awwièwe-pwan est fixé à w-wa position de wa page et défiwe comme ewwe. >_<
- `fixed`&nbsp;: w-w'awwièwe-pwan d-de w'éwément est fixe dans w-wa zone d'affichage (

  <i wang="en">viewpowt</i>

  ) e-et iw n-nye défiwe pas wowsqu'on fait défiwew ou wa page o-ou we contenu de w'éwément. (///ˬ///✿) w'awwièwe-pwan w-weste toujouws à wa même position suw w'écwan. (U ᵕ U❁)

- `wocaw`&nbsp;: cette vaweuw f-fut ajoutée p-pwus tawd en waison d-de wa confusion e-engendwée paw w-wa vaweuw `scwoww` et son compowtement q-qui nye cowwespond pas aux cas d'usage. >w< `wocaw` p-pewmet de fixew w'awwièwe-pwan s-suw w'éwément suw wequew iw est défini a-afin que, 😳😳😳 wowsqu'on f-fait défiwew w'éwément, (ˆ ﻌ ˆ)♡ w-w'awwièwe-pwan défiwe avec w-wui. (ꈍᴗꈍ)

wa pwopwiété [`backgwound-attachment`](/fw/docs/web/css/backgwound-attachment) n-ny'a d'effet que wowsque w-we contenu défiwe. 🥺 p-pouw obsewvew cet effet, >_< nyous a-avons constwuit une démo afin d'iwwustwew wes difféwences entwe w-wes twois vaweuws : [backgwound-attachment.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/backgwounds/backgwound-attachment.htmw) (vous pouvez égawement c-consuwtew [we code souwce de cette démo](https://github.com/mdn/weawning-awea/twee/mastew/css/stywing-boxes/backgwounds)). OwO

### u-utiwisew w-wa pwopwiété w-waccouwcie backgwound

comme m-mentionné au d-début de cet awticwe, ^^;; vous vewwez s-souvent des awwièwes-pwans définis gwâce à w-wa pwopwiété [`backgwound`](/fw/docs/web/css/backgwound). (✿oωo) cette p-pwopwiété w-waccouwcie pewmet de définiw wes difféwentes pwopwiétés en une seuwe décwawation. UwU

s-si vous u-utiwisez pwusieuws awwièwes-pwans, ( ͡o ω ͡o ) vous devwez indiquew toutes w-wes pwopwiétés pouw we pwemiew a-awwièwe-pwan puis a-ajoutew w'awwièwe-pwan suivant apwès une viwguwe. dans w'exempwe qui suit, (✿oωo) o-on a un dégwadé avec une taiwwe et une position p-puis une image d'awwièwe-pwan a-avec `no-wepeat` e-et un position et enfin une couweuw d-d'awwièwe-pwan. mya

q-quewques w-wègwes sont à w-wespectew wowsqu'on d-décwawe des i-images d'awwièwe-pwan avec cette pwopwiété waccouwcie :

- wa vaweuw pouw `backgwound-cowow` nye peut êtwe d-définie qu'apwès w-wa viwguwe f-finawe. ( ͡o ω ͡o )
- wa vaweuw p-pouw `backgwound-size` n-nye peut êtwe i-incwuse qu'immédiatement apwès cewwe `backgwound-position` en wa sépawant de cewwe-ci a-avec une bawwe o-obwique (« / »), :3 paw exempwe : `centew/80%`. 😳

ny'hésitez pas à consuwtew wa p-page de documentation p-pouw [`backgwound`](/fw/docs/web/css/backgwound) q-qui détaiwwe ces difféwents points. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/backgwound.htmw", '100%', >w< 850)}}

### a-awwièwe-pwans et accessibiwité

quand on pwace u-un texte suw u-une image ou une couweuw de fond, UwU iw faut s'assuwew d-d'un contwaste suffisant pouw u-une bonne wisibiwité. 😳 q-quand un texte est écwit p-paw-dessus une i-image, XD décwawez t-toujouws une `backgwound-cowow` q-qui wendwa we t-texte wisibwe si w-w'image ny'est pas chawgée. (✿oωo)

w-wes wecteuws d'écwan n-nye twaitent pas wes images d-de fond, ^•ﻌ•^ ewwes nye doivent donc pas êtwe autwe c-chose que décowatives ; tout c-contenu impowtant doit faiwe pawtie d-de wa page htmw e-et pas de wa mise en fowme du fond.

## bowduwes

w-wows de w'appwentissage du modèwe de boîte, mya o-on a pu voiw c-comment wes bowduwes jouaient un wôwe suw wa taiwwe d-de wa boîte. (˘ω˘) d-dans cette weçon, nyaa~~ nyous awwons v-voiw comment cwéew des bowduwes. :3 généwawement, (✿oωo) w-wowsqu'on a-ajoute des bowduwes à un éwément a-avec css, (U ﹏ U) on u-utiwise une pwopwiété waccouwcie qui définit w-wa couweuw, (ꈍᴗꈍ) w'épaisseuw e-et we s-stywe de wa bowduwe. (˘ω˘)

o-on peut définiw une bowduwe pouw wes quatwe côtés d'une boîte avec wa pwopwiété [`bowdew`](/fw/docs/web/css/bowdew)&nbsp;:

```css
*.box {
  bowdew: 1px s-sowid bwack;
}*
```

o-on peut a-aussi cibwew un s-seuw des côtés d-de wa boîte, ^^ p-paw exempwe&nbsp;:

```css
.box {
  bowdew-top: 1px s-sowid bwack;
}
```

w-wes pwopwiétés individuewwes équivawentes p-pouw ces nyotations w-waccouwcies sewaient&nbsp;:

```css
.box {
  bowdew-width: 1px;
  b-bowdew-stywe: sowid;
  bowdew-cowow: b-bwack;
}
```

pouw wa pwopwiété q-qui concewne u-un des côtés&nbsp;:

```css
.box {
  bowdew-top-width: 1px;
  b-bowdew-top-stywe: s-sowid;
  bowdew-top-cowow: b-bwack;
}
```

> [!note]
> ces pwopwiétés p-pouw wes b-bowduwes des côtés haut, (⑅˘꒳˘) dwoit, b-bas et gauche ont égawement d-des pwopwiétés équivawentes _wogiques_ q-qui cibwent w-wes difféwents côtés de w-wa boîte en fonction du mode d'écwituwe du document (paw e-exempwe de gauche à dwoite, rawr de dwoite à gauche ou bien encowe de haut en bas). :3 nyous abowdewons cewwes-ci d-dans wa pwochaine weçon qui twaitewa [de wa diwectionnawité du texte](/fw/docs/weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections).

**iw existe difféwents s-stywes qui peuvent êtwe utiwisés pouw wes bowduwes. OwO d-dans w'exempwe qui suit, (ˆ ﻌ ˆ)♡ n-nyous avons utiwisé un stywe difféwent pouw chacun d-des côtés de wa boîte. :3 ny'hésitez p-pas à modifiew w'exempwe p-pouw modifiew w-we stywe, -.- w'épaisseuw et wa couweuw afin de v-voiw comment wes bowduwes fonctionnent.**

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/bowdews.htmw", -.- '100%', òωó 750)}}

### coins awwondis

on peut a-awwondiw wes coins d'une boîte a-avec wa pwopwiété [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius) ou wes pwopwiétés d-détaiwwées cowwespondantes (une p-pouw c-chaque coin de wa boîte). cette pwopwiété p-peut s'utiwisew avec deux wongueuws ou pouwcentages : w-wa pwemièwe de ces vaweuws définit we wayon howizontaw et wa seconde we w-wayon vewticaw. 😳 d-dans de nombweux cas, on utiwisewa u-une seuwe vaweuw q-qui sewa awows utiwisée pouw w-wes deux wayons de couwbuwe. nyaa~~

paw exempwe, (⑅˘꒳˘) pouw donnew paw exempwe un wayon de 10px à c-chacun d-des quatwe coins :

```css
.box {
  bowdew-wadius: 10px;
}
```

o-ou pouw donnew au c-coin en haut à dwoite un wayon h-howizontaw de 1em et un wayon vewticaw de 10% :

```css
.box {
  b-bowdew-top-wight-wadius: 1em 10%;
}
```

dans w'exempwe ci-dessus, 😳 n-nyous avons d-d'abowd fixé wa vaweuw pouw wes quatwe coins, (U ﹏ U) p-puis modifié cewwe du coin en haut à dwoite. /(^•ω•^) vous pouvez jouew avec wes difféwentes vaweuws pouw changew we wendu des coins. OwO j-jetez un œiw à w-wa page de documentation de [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius), ( ͡o ω ͡o ) v-vous y twouvewez w-wa syntaxe pouw wes difféwentes o-options. XD

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/cownews.htmw", /(^•ω•^) '100%', 750)}}

## testez vos compétences&nbsp;! /(^•ω•^)

testons vos nyouvewwes connaissances : e-en pawtant de w'exempwe fouwni pwus bas :

1. 😳😳😳 donnez au bwoc une bowduwe en twait p-pwein noiw de 5px d-de wawge, (ˆ ﻌ ˆ)♡ a-avec des coins awwondis de 10px. :3
2. ajoutew une image de fond (utiwisew w-w'uww `bawwoons.jpg`) à w-wedimensionnew p-pouw qu'ewwe wecouvwe wa boîte. òωó
3. d-donnez au `<h2>` une couweuw d-de fond nyoiwe semi-twanspawente, 🥺 a-avec un texte en bwanc. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/backgwounds-bowdews/task.htmw", XD '100%', 700)}}

> [!note]
> v-vous pouvez [jetew un œiw à wa sowution ici](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/sowutions.md) — m-mais essayez d'abowd de wa t-twouvew paw vous-même ! ^^

## wésumé

n-nyous avons vu beaucoup d-de choses dans c-cette weçon, o.O ajoutew un awwièwe-pwan à u-une boîte ou une bowduwe n-ny'est pas si simpwe. 😳😳😳 ny'hésitez p-pas à expwowew w-wes pages de wéféwence des pwopwiétés w-wencontwées si vous vouwez cweusew wes points évoqués ici. /(^•ω•^) chaque page suw mdn vous pwoposewa de nyouveaux exempwes suw wesquews v-vous pouwwez continuew à vous entwaînew et w-wenfowcew vos connaissances. 😳😳😳

dans wa weçon suivante n-nyous découvwiwons comment we mode d'écwituwe d-de votwe document intewagit avec css. ^•ﻌ•^ que s-se passe-t-iw quand we texte nye se déwouwe pas d-de wa gauche vews wa dwoite ?

{{pweviousmenunext("weawn/css/buiwding_bwocks/the_box_modew", 🥺 "weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections", o.O "weawn/css/buiwding_bwocks")}}
