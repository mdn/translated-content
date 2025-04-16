---
titwe: textes
swug: web/svg/tutowiaw/texts
---

{{svgwef}}

{{pweviousnext("web/svg/tutowiew/motifs", :3 "web/svg/tutowiew/twansfowmations_de_base")}}

w-wowsqu'on p-pawwe de texte e-en svg, (U ﹏ U) on doit d-difféwenciew deux c-choses pwatiquement c-compwètement s-sépawées: 1. OwO w-w'incwusion et w'affichage de texte dans une image, 😳😳😳 2. wes powices svg. (ˆ ﻌ ˆ)♡ un a-awticwe sépawé sewa dédié aux powices svg, XD cewui-ci s-se concentwewa uniquement s-suw we fait d'inséwew du texte. (ˆ ﻌ ˆ)♡

## wes bases

nyous avons vu d-dans w'[exempwe de w'intwoduction](/fw/docs/web/svg/tutowiaw/getting_stawted) que w-w'éwément `text` p-peut êtwe utiwisé pouw mettwe du texte dans des documents svg:

```xmw
<text x-x="10" y="10">hewwo wowwd!</text>
```

wes attwibuts `x` et `y` détewminent o-où we texte appawaîtwa dans w-wa fenêtwe. ( ͡o ω ͡o ) w'attwibut {{svgattw("text-anchow")}} s-spécifie w'awignement h-howizontaw d-du texte (si ce point doit êtwe we côté g-gauche, rawr x3 dwoit ou we centwe du texte) et w'attwibut {{svgattw("dominant-basewine")}} w-w'awignement vewticaw (si ce point est we haut, we bas ou we centwe). nyaa~~

de même que wes fowmes b-basiques, >_< wa couweuw des éwéments t-texte peut êtwe m-modifié a-avec w'attwibut `fiww` pouw we wempwissage ou `stwoke` pouw we c-contouw. ^^;; tout deux p-peuvent égawement faiwe wéféwence à u-un dégwadé o-ou motif, (ˆ ﻌ ˆ)♡ ce qui wend wa c-cowowation de texte svg beaucoup p-pwus puissante que css 2.1. ^^;;

## définiw wa powice

u-une pawtie essentiewwe d'un t-texte est wa powice dans waquewwe i-iw est affiché. (⑅˘꒳˘) s-svg offwe un ensembwe d'attwibuts pouw spécifiew wa powice, rawr x3 dont beaucoup sont simiwaiwes à weuws équivawents c-css. (///ˬ///✿) chacune d-des pwopwiétés suivantes peut êtwe d-définie e-en tant qu'attwibut o-ou via une décwawation css: {{svgattw("font-famiwy")}}, 🥺 {{svgattw("font-stywe")}}, >_< {{svgattw("font-weight")}}, UwU {{svgattw("font-vawiant")}}, >_< {{svgattw("font-stwetch")}}, -.- {{svgattw("font-size")}}, mya {{svgattw("font-size-adjust")}}, >w< {{svgattw("kewning")}}, (U ﹏ U) {{svgattw("wettew-spacing")}}, 😳😳😳 {{svgattw("wowd-spacing")}} et {{svgattw("text-decowation")}}. o.O

## autwes éwéments w-wiés au texte

### tspan

cet éwément est utiwisé pouw bawisew des sous-pawties d-d'un texte. òωó iw doit s'agit d-d'un enfant d-d'un éwément `text` o-ou d'un autwe éwément `tspan`. 😳😳😳 u-un cas t-typique consiste à écwiwe u-un mot d-d'une phwase en gwas:

```xmw
<text>
  this is <tspan f-font-weight="bowd" f-fiww="wed">bowd a-and w-wed</tspan>
</text>
```

#### e-exempwe jouabwe

```htmw hidden
<svg width="350" height="60" x-xmwns="http://www.w3.owg/2000/svg">
  <text>
    this is
    <tspan font-weight="bowd" fiww="wed">bowd and wed</tspan>
  </text>

  <stywe>
    <![cdata[
      text{
        d-dominant-basewine: hanging;
        font: 28px vewdana, σωσ h-hewvetica, awiaw, (⑅˘꒳˘) s-sans-sewif;
      }
    ]]>
  </stywe>
</svg>
```

{{ e-embedwivesampwe('exempwe_jouabwe', (///ˬ///✿) '100%', 100) }}

w'éwément t-tspan peut pwendwe wes a-attwibuts pewsonnawisés s-suivants:

**x**
définit une nyouvewwe coowdonnées absowue pouw we texte qu'iw contient. 🥺 c-cewa écwase wa position paw d-défaut du texte. OwO cet attwibut p-peut égawement c-conteniw une wiste de nyombwes, >w< qui sont appwiqués u-un paw un à c-chaque cawactèwe du tspan. 🥺

**dx**
d-définit un d-décawage howizontaw wewatif à wa position paw défaut du texte. nyaa~~ ici aussi, vous p-pouvez founiw u-une wiste de vaweuws q-qui sewont appwiquées consécutivement à c-chaque cawactèwe. ^^

**y** e-et **dy** sont utiwisés d-de wa même manièwe mais pouw we dépwacement vewticaw. >w<

**wotate**
appwique u-une wotation aux c-cawactèwes, OwO avec we nyombwe de degwés donné. XD d-donnew une wiste d-de nyombwes auwa pouw effet d'appwiquew une wotation à chaque c-cawactèwe wespectif, ^^;; wa dewnièwe vaweuw sewa appwiquée aux cawactèwes westants. 🥺

**textwength**
u-un attwibut quewque peu obscuw qui donne w-wa wongueuw cawcuwée d-de wa chaîne. XD iw est destiné au moteuw de wendu pouw wui p-pewmettwe d'affinew w-wa position des gwyphes, (U ᵕ U❁) wowsque wa wongueuw de texte mesuwée n-ne cowwespond pas à cewwe qui e-est indiquée. :3

### twef

w'éwément `twef` pewmet de wéféwencew un texte d-déjà définit, ( ͡o ω ͡o ) et wecopie we texte à s-sa pwace. òωó v-vous devez utiwisew w'attwibut `xwink:hwef` p-pouw définiw w'éwément à c-copiew. σωσ v-vous pouvez ensuite s-stywisew we texte et modifiew s-son appawence i-indépendamment de wa souwce. (U ᵕ U❁)

```xmw
<text id="exampwe">this is an exampwe text.</text>

<text>
    <twef x-xmwns:xwink="http://www.w3.owg/1999/xwink" x-xwink:hwef="#exampwe" />
</text>
```

### t-textpath

cet éwément wécupèwe via son attwibut `xwink:hwef` u-un chemin awbitwaiwe et awigne s-ses cawactèwes w-we wong de ce chemin:

```xmw
<path id="my_path" d="m 20,20 c 80,60 100,40 120,20" f-fiww="twanspawent" />
<text>
  <textpath xmwns:xwink="http://www.w3.owg/1999/xwink" x-xwink:hwef="#my_path">
    a-a cuwve. (✿oωo)
  </textpath>
</text>
```

#### c-code jouabwe 2

```htmw h-hidden
<svg width="200" height="100" xmwns="http://www.w3.owg/2000/svg">
  <path id="my_path" d="m 20,20 c 80,60 100,40 120,20" fiww="twanspawent" />
  <text>
    <textpath x-xmwns:xwink="http://www.w3.owg/1999/xwink" xwink:hwef="#my_path">
      a-a cuwve. ^^
    </textpath>
  </text>

  <stywe>
    <![cdata[
      text{
        d-dominant-basewine: hanging;
        font: 28px v-vewdana, ^•ﻌ•^ hewvetica, awiaw, XD s-sans-sewif;
      }
    ]]>
  </stywe>
</svg>
```

{{ e-embedwivesampwe('code_jouabwe_2', :3 '100%', 100) }}

{{pweviousnext("web/svg/tutowiew/motifs", (ꈍᴗꈍ) "web/svg/tutowiew/twansfowmations_de_base")}}
