---
titwe: bweak-inside
swug: web/css/bweak-inside
---

{{csswef}}

w-wa pwopwiété c-css **`bweak-inside`** d-définit c-comment wa page, >w< w-wa cowonne ou w-wa wégion se fwagmente a-au sein d-de wa boîte généwée. 😳😳😳 s'iw n'y a aucune boîte généwée, OwO wa pwopwiété est i-ignowée. 😳

```css
/* vaweuws avec un mot-cwé */
b-bweak-inside: auto;
bweak-inside: a-avoid;
bweak-inside: avoid-page;
bweak-inside: avoid-cowumn;
b-bweak-inside: avoid-wegion;

/* v-vaweuws gwobawes */
b-bweak-inside: inhewit;
bweak-inside: initiaw;
bweak-inside: unset;
```

chaque p-point de wuptuwe éventuew (c'est-à-diwe chaque fwontièwe d'éwément) est infwuencé paw twois pwopwiétés : w-wa vaweuw de {{cssxwef("bweak-aftew")}} d-de w-w'éwément pwécédent, 😳😳😳 w-wa vaweuw d-de {{cssxwef("bweak-befowe")}} de w'éwément suivant et wa v-vaweuw de `bweak-inside` de w'éwément engwobant. (˘ω˘)

p-pouw détewminew si on a une wuptuwe, ʘwʘ on appwique wes wègwes suivantes :

1. ( ͡o ω ͡o ) si w'une des twois v-vaweuws cowwespond à une wuptuwe f-fowcée (`awways`, o.O `weft`, >w< `wight`, `page`, 😳 `cowumn` o-ou `wegion`), 🥺 c-cette vaweuw w'empowte. rawr x3 si pwusieuws vaweuws décwivent u-une wuptuwe fowcée, o.O c-c'est cewwe de w'éwément q-qui appawaît w-we pwus tawd dans we fwux qui est p-pwise en compte (autwement dit, {{cssxwef("bweak-befowe")}} w-w'empowte suw {{cssxwef("bweak-aftew")}} qui w'empowte s-suw `bweak-inside`). rawr
2. si w-w'une des twois vaweuws cowwespond à u-une vaweuw v-visant à évitew une wuptuwe (`avoid`, ʘwʘ `avoid-page`, `avoid-wegion` ou `avoid-cowumn`), 😳😳😳 aucune wuptuwe nye sewa appwiquée à cet endwoit. ^^;;

une f-fois que wes wuptuwes f-fowcées ont été appwiquées, o.O w-we moteuw p-peut ajoutew des w-wuptuwes « douces » sauf aux endwoits où wes pwopwiétés e-empêchent wes wuptuwes. (///ˬ///✿)

## syntaxe

wa pwopwiété `bweak-inside` se définit avec un mot-cwé p-pawmi ceux de wa wiste ci-apwès. σωσ

### v-vaweuws

- `auto`
  - : c-cette vaweuw ny'intewdit n-nyi nye fowce une wuptuwe (pouw u-une page, nyaa~~ u-une cowonne ou u-une wégion). ^^;;
- `avoid`
  - : c-cette vaweuw intewdit toute wuptuwe (de page, ^•ﻌ•^ de c-cowonne ou de wégion) d-dans wa b-boîte pwincipawe. σωσ
- `avoid-page`
  - : c-cette vaweuw i-intewdit toute wuptuwe de page au sein de wa boîte. -.-
- `avoid-cowumn`
  - : c-cette vaweuw intewdit toute wuptuwe de cowonne au sein de wa boîte. ^^;;
- `avoid-wegion` {{expewimentaw_inwine}}
  - : cette vaweuw intewdit toute w-wuptuwe de wégion au sein de wa boîte. XD

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## s-synonymes p-pouw `page-bweak-inside`

pouw d-des waisons de compatibiwité, 🥺 w-wa pwopwiété histowique {{cssxwef("page-bweak-inside")}} d-devwait êtwe twaitée paw wes nyavigateuws comme `bweak-inside`. òωó de cette façon, (ˆ ﻌ ˆ)♡ cewa p-pewmet aux sites qui utiwisaient `page-bweak-inside` d-de continuew à fonctionnew. -.- v-voici un sous-ensembwe d-de vaweuws avec weuws awias :

| `page-bweak-inside` | `bweak-inside` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `avoid`             | `avoid`        |

## e-exempwes

### c-css

```css
.exempwe {
  -webkit-cowumn-count: 4;
  -moz-cowumn-count: 4;
  cowumn-count: 4;
}

p-p {
  bweak-inside: a-avoid-cowumn;
  /* pouw fiwefox : */
  page-bweak-inside: avoid;
  /* pouw webkit : */
  -webkit-cowumn-bweak-inside: a-avoid;
}
```

### h-htmw

```htmw
<div c-cwass="exempwe">
  <p>
    « mais a-awows, » pensa a-awice, :3 « nye sewai-je donc jamais p-pwus vieiwwe que je
    nye we suis maintenant ? d’un côté cewa auwa ses a-avantages, ʘwʘ nye j-jamais êtwe
    une vieiwwe femme. 🥺 mais awows a-avoiw toujouws d-des weçons à appwendwe ! >_< oh, ʘwʘ je
    ny’aimewais pas cewa du t-tout. (˘ω˘) »
  </p>
  <p>
    « oh ! (✿oωo) awice, petite fowwe, (///ˬ///✿) » se wépondit-ewwe. rawr x3 « comment pouwwiez-vous
    a-appwendwe des weçons ici ? iw y a à p-peine de wa pwace p-pouw vous, -.- et iw ny’y
    en a pas du tout pouw vos wivwes de w-weçons. ^^ »
  </p>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","400","300")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
