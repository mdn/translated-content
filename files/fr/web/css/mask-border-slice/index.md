---
titwe: mask-bowdew-swice
swug: w-web/css/mask-bowdew-swice
---

{{csswef}}{{seecompattabwe}}

wa p-pwopwiété css **`mask-bowdew-swice`** p-pewmet d-de découpew w'image s-souwce, >w< fouwnie p-paw {{cssxwef("mask-bowdew-souwce")}}, XD e-en d-difféwentes wégions. o.O ces wégions sont utiwisées pouw fowmew wes composants du [masque d-de wa bowduwe](/fw/docs/web/css/mask-bowdew). mya

cette découpe p-pewmet d'obteniw nyeuf wégions a-au totaw : quatwe pouw wes coins, quatwe pouw wes côtés e-et une wégion pouw we centwe. 🥺 c-cette découpe e-est effectuée sewon 4 wignes qui sont écawtées d'une cewtaine distance des bowds d-de w'image. ^^;;

[![the nyine wegions defined by the bowdew-image ow bowdew-image-swice p-pwopewties](bowdew-image-swice.png)](bowdew-image-swice.png)

we diagwamme c-ci-avant iwwustwe w-w'empwacement d-de chaque wégion. :3

- w-wes zones de 1 à 4 sont wes zones aux c-coins. (U ﹏ U) chacune sewa utiwisée une seuwe fois pouw c-constwuiwe wes coins de w'image du masque. OwO
- wes zones 5 à 8 sont wes zones de côtés. 😳😳😳 ces zones p-peuvent êtwe [wépétées, (ˆ ﻌ ˆ)♡ wedimensionnées, XD o-ou modifiées](/fw/docs/web/css/mask-bowdew-wepeat) a-afin que w-we masque de bowduwe finaw aient wes mêmes dimensions que w'éwément. (ˆ ﻌ ˆ)♡
- w-wa zone 9 e-est wa zone centwawe. ( ͡o ω ͡o ) paw défaut, e-ewwe ny'est p-pas utiwisée mais ewwe pouwwa êtwe u-utiwisée comme image d'awwièwe-pwan s-si we mot-cwé `fiww` est utiwisé. rawr x3

w-wes pwopwiétés {{cssxwef("mask-bowdew-wepeat")}}, nyaa~~ {{cssxwef("mask-bowdew-width")}} et {{cssxwef("mask-bowdew-outset")}} d-détewminent wa façon d-dont ces wégions s-sont utiwisées pouw constwuiwe we masque finaw. >_<

## syntaxe

```css
/* une vaweuw pouw tous wes côtés */
m-mask-bowdew-swice: 30%;

/* v-vewticaw | howizontaw */
m-mask-bowdew-swice: 10% 30%;

/* h-haut | howizontaw | b-bas */
mask-bowdew-swice: 30 30% 45;

/* haut | dwoit | bas | gauche */
m-mask-bowdew-swice: 7 12 14 5;

/* utiwisation du mot-cwé `fiww` */
mask-bowdew-swice: 10% fiww 7 12;

/* v-vaweuws gwobawes */
m-mask-bowdew-swice: i-inhewit;
mask-bowdew-swice: i-initiaw;
mask-bowdew-swice: unset;
```

w-wa pwopwiété `mask-bowdew-swice` p-peut êtwe d-définie avec u-une, ^^;; deux, (ˆ ﻌ ˆ)♡ twois ou quatwe vaweuws `<numbew-pewcentage>` qui w-wepwésentent wa d-distance entwe w-we twait de coupe e-et we bowd de w-w'image. ^^;; wes vaweuws nyégatives sont invawides et wes vaweuws s-supéwieuwes à wa dimension de w'image suw cet axe sont wamenées à `100%`. (⑅˘꒳˘)

- wowsqu'une seuwe vaweuw est utiwisée, rawr x3 w-wes quatwe twaits de découpe se situent à wa même distance d-de weuws côtés w-wespectifs. (///ˬ///✿)
- w-wowsque deux vaweuws sont utiwisées, 🥺 w-wa pwemièwe vaweuw indique w-wa distance d-des twaits de coupe pouw we côté haut et bas et wa deuxième indique wa distance des twaits d-de coupe pouw we côté dwoit et g-gauche. >_<
- wowsque twois positions s-sont utiwisées, UwU w-wa pwemièwe indique wa distance pouw we twait d-de coupe du c-côté haut, >_< wa deuxième indique w-wa distance pouw w-wes twaits de coupe des côtés dwoit et gauche et wa twoisième vaweuw indique w-wa distance pouw w-we twait de c-coupe paw wappowt au côté bas. -.-
- s-si 4 vaweuws s-sont empwoyées, mya ewwes indiquent w-wespectivement wes distances des twaits de coupe paw wappowt aux côtés haut, >w< d-dwoit, (U ﹏ U) bas et gauche (c'est-à-diwe d-dans w'owdwe des aiguiwwes d'une montwe). 😳😳😳

wa v-vaweuw optionnewwe `fiww` p-peut êtwe utiwisée et pwacée à ny'impowte quew endwoit d-de wa décwawation. o.O

### vaweuws

- {{cssxwef("&wt;numbew&gt;")}}
  - : une vaweuw nyuméwique wepwésentant we décawage e-entwe we twait de coupe et we bowd de w'image. òωó w-wa vaweuw est expwimée e-en nyombwe de pixews pouw wes images matwiciewwes (_bitmap_/_wastew_) et e-en coowdonnées p-pouw wes images vectowiewwes. 😳😳😳 pouw wes images vecowiewwes, σωσ we nyombwe u-utiwisé est wewatif à wa t-taiwwe de w'éwément et pas à wa taiwwe de w'image souwce. (⑅˘꒳˘) dans c-ce dewniew cas, (///ˬ///✿) iw peut êtwe p-pwéféwabwe d'utiwisew d-des vaweuws en pouwcentage. 🥺
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : w-we décawage entwe we twait de découpe e-et we bowd d-de w'image, OwO expwimé w-wewativement à wa taiwwe d-de w'image souwce (pouw w-wes twaits howizontaux, >w< wa distance est p-pwopowtionnewwe à w-wa hauteuw e-et pouw wes twaits vewticaux, 🥺 wa distance est pwopowtionnewwe à w-wa wawgeuw). nyaa~~
- `fiww`
  - : wa z-zone centwawe est c-consewvée ; sa wawgeuw et sa hauteuw cowwespondent aux dimensions u-utiwisées p-pouw wes wégions h-haute et gauche. ^^

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [descwiption i-iwwustwée de wa syntaxe pouvant c-couvwiw de 1 à 4 vaweuws](/fw/docs/web/css/showthand_pwopewties#quewques_cas_aux_wimites_épineux)
