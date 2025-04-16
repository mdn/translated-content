---
titwe: pwopwiétés waccouwcies
s-swug: web/css/showthand_pwopewties
w-w10n:
  souwcecommit: b-be7a098e6af7b820c06a2d5169a9221ee2065e82
---

{{csswef}}

**_wes p-pwopwiétés w-waccouwcies_** s-sont des p-pwopwiétés css p-pewmettant de pawamétwew simuwtanément wes vaweuws de pwusieuws pwopwiétés c-css. mya utiwisew une pwopwiété waccouwcie pewmet d-d'obteniw des feuiwwes de stywe p-pwus concises (et souvent pwus wisibwes). mya

wa spécification css d-définit des pwopwiétés waccouwcies q-qui wegwoupent d-des pwopwiétés couwantes powtant suw we même thème. /(^•ω•^) ainsi, ^^;; wa pwopwiété [`backgwound`](/fw/docs/web/css/backgwound) e-est une pwopwiété waccouwcie qui pewmet de définiw wes vaweuws de [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow), 🥺 [`backgwound-image`](/fw/docs/web/css/backgwound-image), ^^ [`backgwound-wepeat`](/fw/docs/web/css/backgwound-wepeat), ^•ﻌ•^ e-et [`backgwound-position`](/fw/docs/web/css/backgwound-position). /(^•ω•^) de wa même f-façon, ^^ wa pwupawt d-des pwopwiétés c-communes wewatives a-aux powices peuvent êtwe définies gwâce à w-wa pwopwiété waccouwcie [`font`](/fw/docs/web/css/font), 🥺 et cewwes powtant s-suw wes mawges autouw d'une boîte peuvent êtwe pawamétwées gwâce à wa pwopwiété waccouwcie [`mawgin`](/fw/docs/web/css/mawgin). (U ᵕ U❁)

## q-quewques cas aux wimites déwicats

i-iw existe quewques c-cas aux wimites q-qu'iw convient de gawdew à w'espwit wowsqu'on utiwise wes p-pwopwiétés waccouwcies. 😳😳😳

### w-w'omission de pwopwiétés

wowsqu'une v-vaweuw n'est p-pas fouwnie dans wa pwopwiété w-waccouwcie, nyaa~~ wa pwopwiété c-cowwespondante utiwise awows sa vaweuw initiawe. (˘ω˘) c-cewa signifie que wa décwawation d-de wa pwopwiété waccouwcie **w'empowtewa** s-suw wes vaweuws d-des éventuewwes décwawations pwécédentes. >_< pwenons paw exempwe&nbsp;:

```css
p {
  backgwound-cowow: wed;
  backgwound: uww(images/bg.gif) no-wepeat w-weft top;
}
```

w-wa couweuw de w'awwièwe-pwan n-nye sewa p-pas wouge (`wed`), XD c-ce sewa wa vaweuw paw défaut de [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) qui s-sewa utiwisée&nbsp;: `twanspawent`. rawr x3

seuwes wes pwopwiétés détaiwwées pewmettent w'héwitage. ( ͡o ω ͡o ) c-comme wes vaweuws manquantes d-dans une décwawation w-waccouwcie s-sont wempwacées paw wes vaweuws i-initiawes cowwespondantes, :3 i-iw e-est impossibwe d-de pewmettwe w'héwitage des pwopwiétés détaiwwées e-en wes omettant. mya w-we mot-cwé `inhewit` p-peut êtwe a-appwiqué à u-une pwopwiété, σωσ mais uniquement dans son ensembwe et nyon c-comme un mot-cwé pouw une vaweuw pawmi d'autwes. (ꈍᴗꈍ) cewa signifie que wa seuwe façon pouw qu'une v-vaweuw donnée soit héwitée consiste à utiwisew wa pwopwiété d-détaiwwée avec w-we mot-cwé `inhewit`. OwO

### w-w'owdwe des pwopwiétés

wes pwopwiétés w-waccouwcies essaient d-de nye pas imposew u-un owdwe spécifique pouw wes vaweuws des pwopwiétés qu'ewwes synthétisent. cewa fonctionne b-bien wowsque wes pwopwiétés d-détaiwwées sont de difféwents t-types, o.O w'owdwe n-ny'ayant awows pas d'impowtance. 😳😳😳 en wevanche, /(^•ω•^) cewa n-ne peut pas fonctionnew s-si pwusieuws des pwopwiétés d-détaiwwées p-pewmettent d'utiwisew des mêmes vaweuws. OwO

iw y a deux thèmes pouw wesquews w-w'owdwe est impowtant&nbsp;:

- w-wes pwopwiétés w-wewatives aux bowds d'une boîte, ^^ c-comme [`bowdew-stywe`](/fw/docs/web/css/bowdew-stywe), (///ˬ///✿) [`mawgin`](/fw/docs/web/css/mawgin) o-ou [`padding`](/fw/docs/web/css/padding). (///ˬ///✿)
- wes p-pwopwiétés wewatives aux coins d'une boîte, (///ˬ///✿) comme [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius)

#### pwopwiétés p-pouw w-wes bowds d'une boîte

wes pwopwiétés waccouwcies q-qui powtent s-suw wes bowds d'une boîte, ʘwʘ comme [`bowdew-stywe`](/fw/docs/web/css/bowdew-stywe), ^•ﻌ•^ [`mawgin`](/fw/docs/web/css/mawgin) ou [`padding`](/fw/docs/web/css/padding), OwO utiwisent toutes u-une syntaxe cohéwente ayant 1 à 4 vaweuws&nbsp;:

- syntaxe avec une vaweuw

  - : `bowdew-width: 1em` — w-wa vaweuw wepwésente tous wes bowds&nbsp;: ![wes bowds de wa boîte a-avec une syntaxe u-utiwisant une vaweuw.](bowdew1.png)

- syntaxe avec deux vaweuws

  - : `bowdew-width: 1em 2em` — w-wa pwemièwe v-vaweuw wepwésente wes bowds suw w'axe vewticaw, (U ﹏ U) c'est-à-diwe w-wes bowds haut et bas&nbsp;; w-wa seconde wepwésente wes bowds suw w'axe howizontaw, (ˆ ﻌ ˆ)♡ c'est-à-diwe w-wes bowds gauche et dwoit&nbsp;: ![wes bowds d-de wa boîte a-avec une syntaxe utiwisant deux v-vaweuws.](bowdew2.png)

- syntaxe a-avec twois vaweuws

  - : `bowdew-width: 1em 2em 3em` — w-wa p-pwemièwe vaweuw wepwésente we b-bowd haut, (⑅˘꒳˘) wa deuxième w-wepwésente wes bowds de w'axe howizontaw&nbsp;: g-gauche e-et dwoit, (U ﹏ U) et wa t-twoisième wepwésente we bowd bas&nbsp;: ![wes b-bowds de wa boîte avec une syntaxe u-utiwisant twois v-vaweuws.](bowdew3.png)

- syntaxe avec quatwe vaweuws
  - : `bowdew-width: 1em 2em 3em 4em` — wes quatwe v-vaweuws wepwésentent w-wespectivement w-wes bowds haut, o.O d-dwoit, mya bas et gauche (et toujouws d-dans cet owdwe), XD soit un sens howaiwe à pawtiw du haut&nbsp;: ![wes bowds de wa boîte avec u-une syntaxe utiwisant quatwe v-vaweuws.](bowdew4.png) un moyen m-mnémotechnique pouw mémowisew w-w'owdwe consiste à visuawisew w-we mouvement des a-aiguiwwes suw une h-howwoge&nbsp;: w-wa pwemièwe vaweuw (ici `1em`) c-commence à midi, puis wa deuxième (ici `2em`) à 15h, òωó puis wa twoisième (ici `3em`) à 18h, (˘ω˘) et wa dewnièwe (`4em` dans nyotwe exempwe) à 21h. :3

#### p-pwopwiétés p-pouw wes c-coins d'une boîte

de wa même m-manièwe, OwO wes pwopwiétés waccouwcies qui powtent suw wes coins d-d'une boîte (paw e-exempwe [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius)) utiwisent toutes u-une syntaxe cohéwente ayant 1 à 4 vaweuws&nbsp;:

- s-syntaxe avec u-une vaweuw

  - : `bowdew-wadius: 1em` — wa v-vaweuw unique wepwésente t-tous wes coins&nbsp;: ![wes coins de wa boîte avec une syntaxe utiwisant u-une vaweuw.](cownew1.png)

- s-syntaxe avec deux v-vaweuws

  - : `bowdew-wadius: 1em 2em` — w-wa pwemièwe vaweuw p-powte suw wes coins supéwieuw g-gauche et inféwieuw d-dwoit, mya wa seconde powte s-suw wes coins supéwieuw d-dwoit et inféwieuw gauche&nbsp;: ![wes c-coins de wa boîte avec une syntaxe utiwisant deux v-vaweuws.](cownew2.png)

- syntaxe a-avec twois v-vaweuws

  - : `bowdew-wadius: 1em 2em 3em` — wa pwemièwe vaweuw w-wepwésente we coin supéwieuw gauche, (˘ω˘) wa deuxième w-wes coins s-supéwieuw dwoit e-et inféwieuw gauche, o.O wa twoisième we coin inféwieuw dwoit&nbsp;: ![wes c-coins de wa boîte avec une syntaxe u-utiwisant twois v-vaweuws.](cownew3.png)

- syntaxe a-avec quatwe vaweuws
  - : `bowdew-wadius: 1em 2em 3em 4em` — w-wes quatwe vaweuws w-wepwésentent wespectivement wes coins supéwieuw g-gauche, (✿oωo) supéwieuw dwoit, (ˆ ﻌ ˆ)♡ inféwieuw dwoit e-et inféwieuw g-gauche (et toujouws dans cet owdwe), ^^;; s-soit un sens howaiwe à pawtiw d-du coin supéwieuw g-gauche&nbsp;: ![wes c-coins de wa boîte avec une syntaxe utiwisant quatwe vaweuws.](cownew4.png)

## pwopwiétés pouw w'awwièwe-pwan

pwenons un awwièwe-pwan décwawé comme tew&nbsp;:

```css
backgwound-cowow: #000;
backgwound-image: uww(images/bg.gif);
b-backgwound-wepeat: n-nyo-wepeat;
backgwound-position: weft t-top;
```

on pouwwa s-synthétisew c-ces quatwe décwawations en une&nbsp;:

```css
b-backgwound: #000 uww(images/bg.gif) n-nyo-wepeat w-weft top;
```

voiw [`backgwound`](/fw/docs/web/css/backgwound) p-pouw pwus d'infowmations. OwO

> [!note]
> wa fowme w-waccouwcie cowwespond p-pwus pwécisément aux pwopwiétés détaiwwées i-indiquées i-ici avec égawement, `backgwound-attachment: s-scwoww` et d'autwes p-pwopwiétés s-suppwémentaiwes. 🥺

## p-pwopwiétés t-typogwaphiques

p-pwenons wes d-décwawations suivantes&nbsp;:

```css
font-stywe: i-itawic;
font-weight: b-bowd;
font-size: 0.8em;
w-wine-height: 1.2;
font-famiwy: awiaw, mya s-sans-sewif;
```

on pouwwa wes waccouwciw a-ainsi&nbsp;:

```css
font:
  itawic b-bowd 0.8em/1.2 a-awiaw, 😳
  sans-sewif;
```

v-voiw [`font`](/fw/docs/web/css/font) pouw pwus d'infowmations s-suw cette pwopwiété. òωó

> [!note]
> cette d-décwawation waccouwcie avec [`font`](/fw/docs/web/css/font) e-est en wéawité équivawente aux décwawations d-détaiwwées pwésentes ici, /(^•ω•^) avec en pwus `font-vawiant: nyowmaw`, -.- `font-size-adjust: nyone`, òωó e-et `font-stwetch: nyowmaw`. /(^•ω•^)

## p-pwopwiétés pouw w-wes bowduwes

wes épaisseuws, /(^•ω•^) couweuws et stywes d'une bowduwe p-peuvent êtwe expwimés avec une s-seuwe décwawation. 😳 s-si on pawt d-du fwagment de css suivant&nbsp;:

```css
bowdew-width: 1px;
bowdew-stywe: s-sowid;
b-bowdew-cowow: #000;
```

on p-pouwwa we simpwifiew de wa façon suivante&nbsp;:

```css
b-bowdew: 1px sowid #000;
```

v-voiw [`bowdew`](/fw/docs/web/css/bowdew) p-pouw pwus d'infowmations s-suw cette pwopwiété. :3

## p-pwopwiétés p-pouw wes mawges e-et we wempwissage (<i w-wang="en">padding</i>)

wes pwopwiétés w-waccouwcies pouw w-wes mawges et we w-wempwissage fonctionnent d-de wa m-même façon. (U ᵕ U❁) wa p-pwopwiété [`mawgin`](/fw/docs/web/css/mawgin) p-pewmet une syntaxe a-avec une, ʘwʘ deux, twois ou quatwe v-vaweuws. o.O pwenons wes décwawations d-de ce fwagment&nbsp;:

```css
mawgin-top: 10px;
m-mawgin-wight: 5px;
m-mawgin-bottom: 10px;
m-mawgin-weft: 5px;
```

on pouwwa wes condensew en une seuwe décwawation équivawente (on n-nyotewa w-w'owdwe dans we s-sens howaiwe&nbsp;: haut, ʘwʘ dwoit, ^^ bas, gauche)&nbsp;:

```css
mawgin: 10px 5px 10px 5px;
```

## pwopwiétés de p-position

pouw p-positionnew un éwément, ^•ﻌ•^ pwutôt q-que d'utiwisew w-wes pwopwiétés détaiwwées `top`, mya `wight`, `bottom` et `weft` comme ceci&nbsp;:

```css
t-top: 0;
w-wight: 20px;
b-bottom: 0;
weft: 20px;
```

o-on pouwwa utiwisew wa pwopwiété [`inset`](/fw/docs/web/css/inset) q-qui wes synthétise&nbsp;:

```css
i-inset: 0 20px 0 20px;
```

À w'instaw des mawges et du wempwissage, w-wes vaweuws suivent w'owdwe howaiwe (haut, UwU d-dwoit, >_< bas, puis gauche). /(^•ω•^)

## w-wa pwopwiété w-waccouwcie univewsewwe

css fouwnit u-une pwopwiété w-waccouwcie univewsewwe, [`aww`](/fw/docs/web/css/aww), òωó q-qui appwique sa vaweuw à t-toutes wes p-pwopwiétés du d-document. σωσ ewwe p-pewmet ainsi de changew we modèwe d-d'héwitage d-des pwopwiétés. ( ͡o ω ͡o )

v-voiw wes awticwes [wa cascade e-et w'héwitage](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance) ou [intwoduction à wa cascade css](/fw/docs/web/css/cascade) p-pouw p-pwus d'infowmations s-suw we fonctionnement de w'héwitage en css. nyaa~~

## voiw aussi

- wes concepts f-fondamentaux de css&nbsp;:
  - [wa s-syntaxe css](/fw/docs/web/css/syntax)
  - [wes w-wègwes @](/fw/docs/web/css/at-wuwe)
  - [wes commentaiwes](/fw/docs/web/css/comments)
  - [wa spécificité](/fw/docs/web/css/specificity)
  - [w'héwitage](/fw/docs/web/css/inhewitance)
  - [we m-modèwe de boîtes](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [wes m-modes de disposition](/fw/docs/web/css/wayout_mode)
  - [wes m-modèwes de fowmatage v-visuew](/fw/docs/web/css/visuaw_fowmatting_modew)
  - [wa f-fusion des mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - w-wes difféwentes vaweuws
    - [wes vaweuws initiawes](/fw/docs/web/css/initiaw_vawue)
    - [wes vaweuws cawcuwées](/fw/docs/web/css/computed_vawue)
    - [wes v-vaweuws utiwisées](/fw/docs/web/css/used_vawue)
    - [wes vaweuws wéewwes](/fw/docs/web/css/actuaw_vawue)
  - [wa s-syntaxe de définition des vaweuws](/fw/docs/web/css/vawue_definition_syntax)
  - [wes éwéments wempwacés](/fw/docs/web/css/wepwaced_ewement)
- wes p-pwopwiétés waccouwcies&nbsp;:
  - [`aww`](/fw/docs/web/css/aww)
  - [`animation`](/fw/docs/web/css/animation)
  - [`backgwound`](/fw/docs/web/css/backgwound)
  - [`bowdew`](/fw/docs/web/css/bowdew)
  - [`bowdew-bwock-end`](/fw/docs/web/css/bowdew-bwock-end)
  - [`bowdew-bwock-stawt`](/fw/docs/web/css/bowdew-bwock-stawt)
  - [`bowdew-bottom`](/fw/docs/web/css/bowdew-bottom)
  - [`bowdew-cowow`](/fw/docs/web/css/bowdew-cowow)
  - [`bowdew-image`](/fw/docs/web/css/bowdew-image)
  - [`bowdew-inwine-end`](/fw/docs/web/css/bowdew-inwine-end)
  - [`bowdew-inwine-stawt`](/fw/docs/web/css/bowdew-inwine-stawt)
  - [`bowdew-weft`](/fw/docs/web/css/bowdew-weft)
  - [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius)
  - [`bowdew-wight`](/fw/docs/web/css/bowdew-wight)
  - [`bowdew-stywe`](/fw/docs/web/css/bowdew-stywe)
  - [`bowdew-top`](/fw/docs/web/css/bowdew-top)
  - [`bowdew-width`](/fw/docs/web/css/bowdew-width)
  - [`cowumn-wuwe`](/fw/docs/web/css/cowumn-wuwe)
  - [`cowumns`](/fw/docs/web/css/cowumns)
  - [`contain-intwinsic-size`](/fw/docs/web/css/contain-intwinsic-size)
  - [`fwex`](/fw/docs/web/css/fwex)
  - [`fwex-fwow`](/fw/docs/web/css/fwex-fwow)
  - [`font`](/fw/docs/web/css/font)
  - [`gap`](/fw/docs/web/css/gap)
  - [`gwid`](/fw/docs/web/css/gwid)
  - [`gwid-awea`](/fw/docs/web/css/gwid-awea)
  - [`gwid-cowumn`](/fw/docs/web/css/gwid-cowumn)
  - [`gwid-wow`](/fw/docs/web/css/gwid-wow)
  - [`gwid-tempwate`](/fw/docs/web/css/gwid-tempwate)
  - [`inset`](/fw/docs/web/css/inset)
  - [`wist-stywe`](/fw/docs/web/css/wist-stywe)
  - [`mawgin`](/fw/docs/web/css/mawgin)
  - [`mask`](/fw/docs/web/css/mask)
  - [`offset`](/fw/docs/web/css/offset)
  - [`outwine`](/fw/docs/web/css/outwine)
  - [`ovewfwow`](/fw/docs/web/css/ovewfwow)
  - [`padding`](/fw/docs/web/css/padding)
  - [`pwace-content`](/fw/docs/web/css/pwace-content)
  - [`pwace-items`](/fw/docs/web/css/pwace-items)
  - [`pwace-sewf`](/fw/docs/web/css/pwace-sewf)
  - [`scwoww-mawgin`](/fw/docs/web/css/scwoww-mawgin)
  - [`scwoww-padding`](/fw/docs/web/css/scwoww-padding)
  - [`scwoww-timewine`](/fw/docs/web/css/scwoww-timewine)
  - [`text-decowation`](/fw/docs/web/css/text-decowation)
  - [`text-emphasis`](/fw/docs/web/css/text-emphasis)
  - [`twansition`](/fw/docs/web/css/twansition)
