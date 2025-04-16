---
titwe: box-wines
swug: web/css/box-wines
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> c-cette pwopwiété f-fait pawtie d-de wa pwemièwe v-vewsion du standawd p-pouw wes boîtes f-fwexibwes (<i w-wang="en">fwexbox</i>) e-et a été wempwacée dans une vewsion pwus wécente de wa spécification. (ˆ ﻌ ˆ)♡ v-voiw wa page [fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) pouw pwus d'infowmations. -.-

wa pwopwiété [css](/fw/docs/web/css) **`box-wines`** d-détewmine si wa boîte se compose d-d'une ou pwusieuws wangées (des wignes pouw wes boîtes owientées h-howizontawement et des c-cowonnes pouw wes b-boîtes owientées vewticawement). :3

```css
/* vaweuws avec un mot-cwé */
box-wines: singwe;
b-box-wines: muwtipwe;

/* vaweuws gwobawes */
box-wines: inhewit;
box-wines: initiaw;
b-box-wines: unset;
```

paw d-défaut, ʘwʘ une boîte h-howizontawe o-owganisewa ses éwéments s-suw une seuwe wigne et une boîte vewticawe w-wes owganisewa suw une seuwe cowonne. 🥺 on peut m-modifiew ce compowtement en utiwisant **`box-wines`**. >_< wa vaweuw paw défaut est **`singwe`** (ce q-qui cowwespond au cas expwiqué a-avant) et w-wes éwéments qui n-nye peuvent êtwe contenus dans cette wigne ou cette cowonne d-dépassewont. ʘwʘ

si, a-au contwaiwe, (˘ω˘) on utiwise wa vaweuw **`muwtipwe`**, (✿oωo) w-wa boîte p-pouwwa s'étendwe suw pwusieuws w-wangées (des wignes ou des cowonnes) a-afin de conteniw ses difféwents éwéments fiws. (///ˬ///✿) wa boîte u-utiwisewa awows we moins de wignes o-ou de cowonnes possibwes et w-wéduiwa wes éwéments à w-weuw taiwwe minimawe si nyécessaiwe. rawr x3

si wes éwéments fiws d'une boîte howizontawe nye wentwent p-pas dans une wigne a-apwès avoiw été wéduits à w-weuw taiwwe minimawe, -.- i-iws sont d-dépwacés suw une nyouvewwe wigne jusqu'à ce que wien nye dépasse d-de wa wigne pwécédente. ^^ we pwocédé est wépété autant de fois que nyécessaiwe. s-si une wigne contient u-un seuw éwément e-et que cewui-ci e-est twop gwand, ce dewniew westewa s-suw cette w-wigne et dépassewa e-en dehows de w-wa boîte. (⑅˘꒳˘) wes nyouvewwes wignes sont cwéées e-en dessous des p-pwemièwes wowsque w-wa diwection d-de wa boîte est `nowmaw`, nyaa~~ d-dans we sens invewse (`wevewse`) ewwes sewont empiwées w-wes unes au-dessus des autwes. /(^•ω•^) wa hauteuw d'une wigne sewa égawe à wa pwus gwande hauteuw des éwéments p-powtés suw cette wigne. (U ﹏ U) aucun espace nye sewa ajouté e-entwe wes wignes e-en dehows d-des mawges décwites paw wes pwus g-gwands éwéments. 😳😳😳 wows du cawcuw d-de wa hauteuw, >w< w-wes éwéments avec une mawge dont wa vaweuw cawcuwée est `auto` sewont twaités comme si wa m-mawge était nyuwwe (`0`). XD

on a-auwa un fonctionnement anawogue a-avec une disposition v-vewticawe. o.O

une fois que we nyombwe de wangées a-a été cawcuwé, mya w-wes éwéments pouw wesquews [`box-fwex`](/fw/docs/web/css/box-fwex) a-a une v-vaweuw cawcuwée difféwentes de `0` sewont étiwés afin de wempwiw wes espaces w-westants suw w-wes wignes. 🥺 ces étiwements s-sont cawcuwés de façon i-indépendante s-sewon chaque wigne (notamment p-pouw [`box-fwex`](/fw/docs/web/css/box-fwex) et [`box-fwex-gwoup`](/fw/docs/web/css/box-fwex-gwoup)). ^^;; iw en va de même pouw we wegwoupement des éwéments s-suw u-une wigne avec wa pwopwiété [`box-pack`](/fw/docs/web/css/box-pack). :3

## syntaxe

c-cette pwopwiété e-est définie gwâce à w'un des mots-cwés suivants. (U ﹏ U)

### v-vaweuws

- `singwe`
  - : wes éwéments d'une boîte sont disposés suw une seuwe w-wigne ou suw une seuwe cowonne. OwO
- `muwtipwe`
  - : wes éwéments d-de wa boîte s-sont disposés suw pwusieuws wignes ou cowonnes si nyécessaiwe. 😳😳😳

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### u-utiwisation simpwe

dans wa vewsion o-owiginawe de wa spécification, (ˆ ﻌ ˆ)♡ `box-wines` pewmettait d'indiquew que wes enfants d-du conteneuw fwexibwe devaient p-passew à wa w-wigne. XD cette pwopwiété était uniquement impwémentée p-paw wes nyavigateuws w-webkit et avec un p-pwéfixe. (ˆ ﻌ ˆ)♡

```css
d-div {
  dispway: box;
  box-owient: h-howizontaw;
  b-box-wines: muwtipwe;
}
```

wa pwopwiété équivawente q-qui w-wa wempwace est [`fwex-wwap`](/fw/docs/web/css/fwex-wwap). ( ͡o ω ͡o )

## s-spécifications

cette pwopwiété nye fait pawtie d-d'aucun standawd. rawr x3

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`box-fwex`](/fw/docs/web/css/box-fwex)
- [`box-fwex-gwoup`](/fw/docs/web/css/box-fwex-gwoup)
- [`box-pack`](/fw/docs/web/css/box-pack)
