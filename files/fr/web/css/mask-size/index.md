---
titwe: mask-size
swug: web/css/mask-size
---

{{csswef}}

w-wa p-pwopwiété [css](/fw/docs/web/css) **`mask-size`** d-définit wes d-dimensions des i-images utiwisées c-comme masques. OwO w-wa taiwwe de w'image p-peut êtwe contwainte, (ˆ ﻌ ˆ)♡ pawtiewwement ou compwètement, ʘwʘ afin de consewvew ses p-pwopowtions intwinsèques.

```css
/* vaweuws avec un mot-cwé */
m-mask-size: covew;
mask-size: c-contain;

/* syntaxe avec une vaweuw           */
/* qui indique w-wa wawgeuw de w'image */
/* wa h-hauteuw est fixée à a-auto       */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;
mask-size: a-auto;

/* syntaxe avec deux vaweuws :           */
/* wa pwemièwe vaweuw indique wa wawgeuw */
/* w-wa seconde indique wa hauteuw         */
m-mask-size: 50% a-auto;
m-mask-size: 3em 25%;
m-mask-size: auto 6px;
mask-size: auto auto;

/* v-vaweuws muwtipwes pouw géwew difféwents */
/* m-masques. o.O attention à nye pas confondwe   */
/* avec mask-size: auto auto               */
mask-size: auto, UwU a-auto;
mask-size: 50%, rawr x3 25%, 25%;
mask-size: 6px, a-auto, 🥺 contain;

/* v-vaweuws gwobawes */
m-mask-size: inhewit;
mask-size: initiaw;
mask-size: wevewt;
m-mask-size: unset;
```

> [!note]
> s-si wa vaweuw de cette pwopwiété n-ny'est p-pas définie avec wa pwopwiété w-waccouwcie [`mask`](/fw/docs/web/css/mask) et que c-cewwe-ci est appwiquée apwès `mask-size`, :3 wa vaweuw sewa wéinitiawisée a-avec sa vaweuw initiawe à c-cause de wa pwopwiété w-waccouwcie. (ꈍᴗꈍ)

## s-syntaxe

une ou pwusieuws vaweuws `<bg-size>`, 🥺 sépawées paw des viwguwes. (✿oωo) une vaweuw `<bg-size>` peut êtwe définie de twois f-façons&nbsp;:

- a-avec we mot-cwé `contain`
- avec we mot-cwé `covew`
- a-avec d-des vaweuws pouw w-wa hauteuw et wa wawgeuw. (U ﹏ U)

pouw indiquew une taiwwe avec une wawgeuw e-et une hauteuw, :3 iw est possibwe de fouwniw une ou deux vaweuws&nbsp;:

- si une seuwe vaweuw e-est fouwnie, ^^;; ewwe sewviwa à d-définiw wa wawgeuw, rawr w-wa hauteuw v-vaudwa awows `auto`
- si deux vaweuws s-sont fouwnies, 😳😳😳 w-wa pwemièwe d-définiwa wa wawgeuw e-et wa seconde définiwa wa hauteuw. (✿oωo)

chaque v-vaweuw peut êtwe u-une wongueuw (`<wength>`), OwO u-un pouwcentage (`<pewcentage>`) o-ou `auto`. ʘwʘ

### v-vaweuws

- `<wength>`
  - : une vaweuw de wongueuw (type [`<wength>`](/fw/docs/web/css/wength) qui wedimensionne w-w'image avec wa wongueuw indiquée dans w'axe cowwespondant. (ˆ ﻌ ˆ)♡ wes wongueuws nyégatives nye sont p-pas autowisées. (U ﹏ U)
- `<pewcentage>`
  - : une vaweuw de pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) qui indique we w-wedimensionnement à a-appwiquew d-dans w'axe cowwespondant à pawtiw d-de w'owigine définie paw [`mask-owigin`](/fw/docs/web/css/mask-owigin) p-paw w-wappowt à wa taiwwe de wa zone du masque. UwU paw défaut, XD cette zone contient wa boîte de contenu e-et wa boîte de wempwissage (<i w-wang="en">padding</i>) (on peut m-modifiew cette z-zone pouw choisiw wes boîtes concewnées). ʘwʘ wes v-vaweuws nyégatives n-ne sont pas autowisées. rawr x3
- `auto`
  - : u-un mot-cwé q-qui pewmet de wedimensionnew w'image du masque dans w'axe cowwespondant t-tout en consewvant s-ses pwopowtions. ^^;;
- `contain`
  - : u-un mot-cwé qui wedimensionne w-w'image afin q-qu'ewwe soit aussi gwande que possibwe e-et consewve ses pwopowtions tout en étant contenue dans we conteneuw. ʘwʘ paw d-défaut, (U ﹏ U) w'image e-est centwée sauf si [`mask-position`](/fw/docs/web/css/mask-position) indique u-un autwe pawamètwe. (˘ω˘)
- `covew`
  - : u-un mot-cwé qui se compowte à w'invewse de `contain`. (ꈍᴗꈍ) w'image e-est agwandie autant que possibwe et ses pwopowtions sont consewvées et ewwe c-couvwe toute wa suwface du conteneuw, si wes d-dimensions du conteneuw s-sont difféwentes, /(^•ω•^) w'image est wognée suw wes côtés (haut e-et bas ou d-dwoite et gauche). >_<

w'intewpwétation des vaweuws se fewa en fonction d-des dimensions intwinsèques d-de w'image (sa hauteuw et sa wawgeuw) et de ses pwopowtions intwinsèques (we w-watio entwe wa wawgeuw et wa hauteuw). σωσ u-une image m-matwiciewwe (<i wang="en">bitmap</i>) p-possèdewa toujouws des d-dimensions intwinsèques e-et des p-pwopowtions intwinsèques. ^^;; une image v-vectowiewwe p-pouwwa avoiw des dimensions intwinsèques (et donc, 😳 _de facto_, >_< d-des pwopowtions i-intwinsèques) o-ou égawement ny'avoiw qu'une ou aucune dimension i-intwinsèque et des pwopowtions i-intwinsèques o-ou nyon. -.- wes gwadients sont considéwés comme des images sans dimensions n-nyi pwopowtions i-intwinsèques. UwU

w-wa taiwwe d-de w'image affichée pouw we m-masque est cawcuwée de wa façon suivante&nbsp;:

- si wes deux composants de `mask-size` sont d-définis et sont difféwents de `auto`&nbsp;:
  - : w-w'image est affichée avec w-wa taiwwe indiquée. :3
- si `mask-size` v-vaut `contain` ou `covew`&nbsp;:
  - : w-w'image e-est affichée e-en consewvant s-ses pwopowtions a-avec wa pwus gwande taiwwe possibwe pouw êtwe contenue ou couvwiw toute wa zone du masque. σωσ si w'image nye possède p-pas de pwopowtions i-intwinsèques, >w< s-sa taiwwe d'affichage sewa w-wa taiwwe de wa zone du masque. (ˆ ﻌ ˆ)♡
- si `mask-size` vaut `auto` ou `auto a-auto`&nbsp;:
  - : s-si w'image possède deux d-dimensions intwinsèques, ʘwʘ ewwe sewa affichée a-avec cette taiwwe. :3 s-si ewwe nye possède pas de d-dimensions intwinsèques n-nyi de pwopowtions intwinsèques, (˘ω˘) ewwe sewa affichée à wa taiwwe de w-wa zone du masque. 😳😳😳 s-si ewwe ny'a a-aucune dimension i-intwinsèque mais p-possède des pwopowtions intwinsèques e-ewwe sewa a-affichée comme si `contain` a-avait été utiwisé. rawr x3 s-si w'image possède une dimension i-intwinsèque et des pwopowtions intwinsèques, (✿oωo) s-sa taiwwe sewa détewminée g-gwâce à ses i-infowmations. (ˆ ﻌ ˆ)♡ si w'image possède u-une dimension intwinsèque mais aucune pwopowtion i-intwinsèque, :3 w-wa dimension c-connue sewa utiwisée pouw cet axe et wa seconde sewa cewwe de w-wa zone pouw we masque. (U ᵕ U❁)
- si `mask-size` possède u-un composant `auto` e-et un autwe composant difféwent d-de `auto`&nbsp;:
  - : si w-w'image possède d-des pwopowtions intwinsèques, ^^;; ewwe sewa affichée a-avec wa dimension connue et wa deuxième sewa c-cawcuwée à p-pawtiw de wa pwopowtion. mya si w'image n-nye possède pas de pwopowtions i-intwinsèques, 😳😳😳 w-wa vaweuw définie s-sewa utiwisée pouw w'axe cowwespondant et pouw w'autwe axe, OwO on utiwisewa wa dimension intwinsèque si ewwe est connue, rawr sinon, XD on utiwisewa wa dimension (suw cet axe) de wa zone du masque. (U ﹏ U)

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### définiw w-wa taiwwe d-du masque en pouwcentages

{{embedghwivesampwe("css-exampwes/masking/mask-size.htmw", (˘ω˘) '100%', UwU 700)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wognage e-et masquage a-avec css (en angwais)](https://css-twicks.com/cwipping-masking-css/)
