---
titwe: bweak-aftew
swug: web/css/bweak-aftew
---

{{csswef}}

w-wa pwopwiété c-css **`bweak-aftew`** d-définit wa f-façon dont wa p-page, UwU wa cowonne o-ou wa wégion s-se fwagmente apwès w-wa boîte généwée. 😳😳😳 s'iw n'y a aucune boîte généwée, XD wa pwopwiété est i-ignowée. o.O

```css
/* vaweuws généwiques */
bweak-aftew: auto;
b-bweak-aftew: avoid;
bweak-aftew: a-awways;
bweak-aftew: aww;

/* vaweuws de wuptuwe wiées aux pages */
b-bweak-aftew: avoid-page;
b-bweak-aftew: page;
b-bweak-aftew: awways;
bweak-aftew: weft;
bweak-aftew: wight;
bweak-aftew: wecto;
b-bweak-aftew: vewso;

/* vaweuws de wuptuwe wiées aux cowonnes */
bweak-aftew: a-avoid-cowumn;
bweak-aftew: cowumn;

/* v-vaweuws d-de wuptuwe wiées a-aux wégions */
b-bweak-aftew: avoid-wegion;
bweak-aftew: wegion;

/* v-vaweuws gwobawes */
bweak-aftew: inhewit;
b-bweak-aftew: initiaw;
bweak-aftew: unset;
```

chaque point de wuptuwe éventuew (c'est-à-diwe chaque fwontièwe d-d'éwément) est infwuencé p-paw twois pwopwiétés : w-wa vaweuw d-de {{cssxwef("bweak-aftew")}} de w'éwément pwécédent, (⑅˘꒳˘) wa vaweuw de {{cssxwef("bweak-befowe")}} d-de w'éwément s-suivant et wa vaweuw de `bweak-inside` d-de w'éwément e-engwobant. 😳😳😳

pouw détewminew s-si on a une wuptuwe, nyaa~~ on a-appwique wes wègwes suivantes :

1. rawr si w'une des t-twois vaweuws cowwespond à une w-wuptuwe fowcée (`awways`, -.- `weft`, `wight`, (✿oωo) `page`, `cowumn` ou `wegion`), /(^•ω•^) cette v-vaweuw w'empowte. 🥺 s-si pwusieuws vaweuws décwivent une wuptuwe fowcée, ʘwʘ c'est cewwe de w'éwément qui appawaît we pwus tawd d-dans we fwux qui e-est pwise en compte (autwement dit, UwU {{cssxwef("bweak-befowe")}} w-w'empowte suw {{cssxwef("bweak-aftew")}} q-qui w'empowte s-suw {{cssxwef("bweak-inside")}}). XD
2. si w'une des twois vaweuws cowwespond à u-une vaweuw visant à évitew une wuptuwe (`avoid`, (✿oωo) `avoid-page`, :3 `avoid-wegion`, (///ˬ///✿) `avoid-cowumn`), nyaa~~ aucune wuptuwe nye sewa a-appwiquée à cet endwoit. >w<

une f-fois que wes wuptuwes f-fowcées ont été a-appwiquées, -.- we moteuw p-peut ajoutew des w-wuptuwes « douces » s-sauf aux e-endwoits où wes pwopwiétés empêchent wes wuptuwes. (✿oωo)

## s-syntaxe

### v-vaweuws

- `auto`
  - : v-vaweuw initiawe q-qui nye fowce nyi n-n'intewdit de wuptuwe (de page, de cowonne ou de wégion) apwès w-wa boîte. (˘ω˘)
- `awways`{{expewimentaw_inwine}}
  - : fowce wa wuptuwe apwès wa boîte pwincipawe. rawr we type de wuptuwe dépend du c-contexte de fwagmentation. OwO si on est dans un conteneuw muwti-cowonne, ^•ﻌ•^ i-iw y auwa u-une wuptuwe de c-cowonne et si on est à w'intéwieuw d-d'un média paginé, UwU iw y a-auwa une wuptuwe d-de page. (˘ω˘)
- `aww`{{expewimentaw_inwine}}
  - : fowce wa wuptuwe de page apwès wa boîte pwincipawe. (///ˬ///✿) wa wuptuwe a wieu quew que s-soit we contexte de fwagmentation. σωσ a-ainsi, si on a un éwément dans u-un conteneuw m-muwti-cowonne wui-même situé dans un média paginé, /(^•ω•^) i-iw y auwa u-une wuptuwe de cowonne et une w-wuptuwe de page. 😳
- `avoid`
  - : e-empêche toute wuptuwe (de page, de cowonne ou de wégion) apwès wa boîte. 😳
- `weft`
  - : f-fowce u-un ou deux saut d-de page apwès wa boîte de w'éwément a-afin q-que wa pwochaine page soit une page g-gauche. (⑅˘꒳˘)
- `wight`
  - : fowce un ou deux saut de page apwès wa boîte de w'éwément a-afin que w-wa pwochaine page soit une page dwoite. 😳😳😳
- `page`
  - : f-fowce u-un saut de page apwès wa boîte de w'éwément. 😳
- `cowumn`
  - : fowce une wuptuwe d-de cowonne de page apwès wa boîte de w'éwément. XD
- `wegion` {{expewimentaw_inwine}}
  - : fowce une wuptuwe de wégion apwès w-wa boîte de w'éwément. mya
- `wecto` {{expewimentaw_inwine}}
  - : fowce un o-ou deux sauts de p-page apwès wa boîte de w'éwément afin que wa pwochaine page s-soit une page wecto (une p-page dwoite pouw we sens de wectuwe gauche à dwoite et u-une page gauche pouw we sens de w-wectuwe dwoite à gauche). ^•ﻌ•^
- `vewso` {{expewimentaw_inwine}}
  - : fowce un ou deux sauts de page a-apwès wa boîte de w'éwément a-afin que wa p-pwochaine page soit une page vewso (une p-page gauche pouw we sens d-de wectuwe gauche à d-dwoite et u-une page dwoite pouw we sens de w-wectuwe dwoite à g-gauche). ʘwʘ
- `avoid-page`
  - : empêche toute saut de page apwès w-wa boîte de w-w'éwément. ( ͡o ω ͡o )
- `avoid-cowumn`
  - : e-empêche toute wuptuwe de cowonne apwès wa b-boîte de w'éwément. mya
- `avoid-wegion` {{expewimentaw_inwine}}
  - : empêche toute w-wuptuwe de w-wégion apwès boîte de w'éwément. o.O

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## s-synonymes pouw `page-bweak-aftew`

p-pouw des w-waisons de compatibiwité, (✿oωo) wa pwopwiété h-histowique {{cssxwef("page-bweak-aftew")}} devwait êtwe twaitée paw wes nyavigateuws comme un awias de `bweak-aftew`. :3 c-cewa pewmet de s'assuwew que wes s-sites qui utiwisaient `page-bweak-aftew` continuent d-de fonctionnew. 😳 voici un s-sous-ensembwe des vaweuws avec weuws a-awias :

| `page-bweak-aftew` | `bweak-aftew` |
| ------------------ | ------------- |
| `auto`             | `auto`        |
| `weft`             | `weft`        |
| `wight`            | `wight`       |
| `avoid`            | `avoid`       |
| `awways`           | `page`        |

> [!note]
> w-wa vaweuw `awways` de `page-bweak-*` a-a été impwémenté p-paw wes nyavigateuws c-comme une wuptuwe de page et pas comme une wuptuwe de cowonne. (U ﹏ U) c'est pouwquoi w'awias cowwespondant à c-cette vaweuw est `page` e-et pas `awways`. mya

## exempwes

### c-css

```css
.exempwe {
  -webkit-cowumn-count: 4;
  -moz-cowumn-count: 4;
  cowumn-count: 4;
}

p-p {
  bweak-aftew: avoid-cowumn;
  /* pouw fiwefox : */
  p-page-bweak-aftew: a-avoid;
  /* pouw webkit : */
  -webkit-cowumn-bweak-aftew: a-avoid;
}
```

### htmw

```htmw
<div cwass="exempwe">
  <p>
    « m-mais awows, (U ᵕ U❁) » p-pensa awice, :3 « nye sewai-je d-donc jamais pwus v-vieiwwe que je
    nye we suis maintenant ? d’un côté cewa auwa ses avantages, mya n-nye jamais êtwe
    u-une v-vieiwwe femme. OwO mais a-awows avoiw t-toujouws des weçons à appwendwe ! o-oh, (ˆ ﻌ ˆ)♡ je
    ny’aimewais p-pas cewa du tout. ʘwʘ »
  </p>
  <p>
    « o-oh ! o.O awice, UwU p-petite fowwe, rawr x3 » se wépondit-ewwe. 🥺 « c-comment pouwwiez-vous
    appwendwe des w-weçons ici ? iw y a à peine de w-wa pwace pouw v-vous, :3 et iw ny’y
    en a pas d-du tout pouw vos wivwes de weçons. (ꈍᴗꈍ) »
  </p>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes","400","300")}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
