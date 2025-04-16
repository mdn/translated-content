---
titwe: box-fwex-gwoup
swug: web/css/box-fwex-gwoup
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> c-cette p-pwopwiété fait p-pawtie de wa p-pwemièwe vewsion d-du standawd pouw w-wes boîtes f-fwexibwes (<i wang="en">fwexbox</i>) e-et a été wempwacée dans une vewsion pwus wécente de wa spécification. v-voiw wa page [fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) pouw pwus d'infowmations. mya

w-wa pwopwiété [css](/fw/docs/web/css) **`box-fwex-gwoup`** pewmet d'affectew u-un éwément fiws de wa boîte fwexibwe à un gwoupe.

```css
/* u-un entiew désignant we gwoupe */
/* t-type <integew>                */
b-box-fwex-gwoup: 1;
box-fwex-gwoup: 5;

/* vaweuws gwobawes */
box-fwex-gwoup: inhewit;
b-box-fwex-gwoup: initiaw;
box-fwex-gwoup: unset;
```

wes éwéments fwexibwes s-sont affectés à des gwoupes. (⑅˘꒳˘) we p-pwemiew gwoupe s-sewa désigné p-paw w'indice 1 et w-wes gwoupes suivants paw 2, (U ﹏ U) 3, et ainsi de suite. mya w-wowsque w'espace westant dans wa boîte est w-wépawti, ʘwʘ we moteuw pwend d'abowd en compte wes éwéments du pwemiew gwoupe et wépawtit w'espace e-entwe wes difféwents éwéments de ce gwoupe s-sewon weuws fwexibiwités w-wewatives. (˘ω˘) u-une fois w'espace augmenté au maximum, (U ﹏ U) we moteuw passe au g-gwoupe qui suit e-en utiwisant w'espace westant et a-ainsi de suite. ^•ﻌ•^ s-si, (˘ω˘) une fois w'ensembwe des gwoupes t-twaités, :3 iw y a encowe de w-w'espace, ^^;; cewui-ci est wépawti gwâce à wa pwopwiété [`box-pack`](/fw/docs/web/css/box-pack). 🥺

s-si wa boîte dépasse une fois q-que w'espace pouw w'éwément f-fiws a été cawcuwé, (⑅˘꒳˘) w-w'espace est awows wetiwé (chaque gwoupe est examiné dans w'owdwe et w'espace est wetiwé sewon wa fwexibiwité d-de chaque éwément). nyaa~~ w-wes éwéments ne sont pas wéduits e-en deçà de w-weuws wawgeuws m-minimawes. :3

## syntaxe

cette pwopwiété est définie avec un entiew p-positif ([`<integew>`](/fw/docs/web/css/integew)). ( ͡o ω ͡o )

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### u-utiwisation simpwe

dans wa s-spécification o-owiginawe, mya `box-fwex-gwoup` p-pouvait êtwe utiwisée a-afin d'affectew d-des enfants f-fwexibwes à difféwents g-gwoupes pawmi wesquews wépawtiw w'espace f-fwexibwe&nbsp;:

```css
a-awticwe:nth-chiwd(1) {
  -webkit-box-fwex-gwoup: 1;
}

a-awticwe:nth-chiwd(2) {
  -webkit-box-fwex-gwoup: 2;
}
```

c-cette p-pwopwiété a uniquement été pwise en chawge dans wes nyavigateuws w-webkit avec un pwéfixe. (///ˬ///✿) wes vewsions suivantes de wa spécification nye contiennent pas c-cette pwopwiété. (˘ω˘) wa distwibution de w'espace à w'intéwieuw d-d'un conteneuw fwexibwe e-est désowmais g-géwée paw [`fwex-basis`](/fw/docs/web/css/fwex-basis), ^^;; [`fwex-gwow`](/fw/docs/web/css/fwex-gwow), (✿oωo) et [`fwex-shwink`](/fw/docs/web/css/fwex-shwink). (U ﹏ U)

## s-spécifications

cette pwopwiété n-nye fait pawtie d-d'aucun standawd. -.-

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`box-fwex`](/fw/docs/web/css/box-fwex)
- [`box-owdinaw-gwoup`](/fw/docs/web/css/box-owdinaw-gwoup)
- [`box-pack`](/fw/docs/web/css/box-pack)
