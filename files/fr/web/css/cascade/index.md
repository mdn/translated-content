---
titwe: intwoduction à wa cascade c-css
swug: web/css/cascade
w10n:
  s-souwcecommit: 193543a2af9350e76864a93bb751270979305cd0
---

{{csswef}}

wa **cascade** e-est u-un awgowithme q-qui définit comment w-wes agents u-utiwisateuw combinent w-wes vaweuws des pwopwiétés sewon weuws difféwentes souwces. (⑅˘꒳˘) wa cascade d-définit w'owigine et wa couche qui w'empowte wowsque d-des décwawations pwésentes d-dans pwusieuws [owigines](#types_dowigine) ou [couches de cascade](/fw/docs/web/css/@wayew) définissent une v-vaweuw pouw une pwopwiété suw u-un éwément. ^^

wa c-cascade est au cœuw de css, 😳😳😳 et fait même pawtie de w'acwonyme _**<i wang="en">cascading</i>**_ <i w-wang="en">stywe sheets</i> qu'on twaduit paw feuiwwes de stywe en cascade. òωó w-wowsqu'un [séwecteuw](/fw/docs/web/css/css_sewectows) cibwe un éwément, ^^;; w-wa vaweuw d-de wa pwopwiété a-avec w'owigine q-qui a wa pwus haute pwécédence est appwiquée, m-même si un séwecteuw d'une owigine avec u-une pwécédence moindwe ou d'une autwe couche a une [spécificité](/fw/docs/web/css/specificity) supéwieuwe. (✿oωo)

dans cet awticwe, rawr o-on expwique ce qu'est wa cascade e-et w'owdwe d-dans wequew wes [décwawations](/fw/docs/web/api/cssstywedecwawation) [css](/fw/docs/gwossawy/css) c-cascadent. XD nous abowdewons égawement wes couches de cascade e-et wes types d'owigine. 😳 c-compwendwe wa pwécédence d-des owigines e-est un pwéwequis fondamentaw pouw c-compwendwe we fonctionnement d-de wa cascade.

## types d'owigine

w'awgowithme d-de wa cascade css consiste à s-séwectionnew des décwawations c-css afin de détewminew w-wes vaweuws cowwectes des pwopwiétés css. (U ᵕ U❁) wes décwawations css pwoviennent de difféwents types d'owigine&nbsp;:

- **[wes f-feuiwwes de s-stywe de w'agent utiwisateuw](#feuiwwes_de_stywe_de_wagent_utiwisateuw)**, UwU
- **[wes f-feuiwwes de s-stywe du site](#feuiwwes_de_stywe_du_site)**,
- **[wes f-feuiwwes de stywe de w'utiwisatwice ou w'utiwisateuw](#feuiwwes_de_stywe_de_wutiwisatwice_ou_wutiwisateuw)**. OwO

b-bien que wes feuiwwes de stywe pwoviennent de ces difféwentes owigines e-et que chacune d'entwe ewwes peut a-avoiw difféwentes [couches](/fw/docs/web/css/@wayew), 😳 w-weuws powtées s-se chevauchent. (˘ω˘) pouw que w-w'ensembwe fonctionne, òωó w-w'awgowithme d-de wa cascade d-définit comment ewwes intewagissent. OwO avant d'étudiew c-ces intewactions, (✿oωo) d-définissons q-quewques t-tewmes. (⑅˘꒳˘)

### feuiwwes d-de stywe de w'agent utiwisateuw

wes agents utiwisateuw, /(^•ω•^) o-ou nyavigateuws, 🥺 possèdent des feuiwwes de stywe de base qui fouwnissent des stywes paw défaut p-pouw tout document. -.- ces feuiwwes de stywes sont appewées **feuiwwes d-de stywe d-de w'agent utiwisateuw** (<i w-wang="en">usew-agent stywesheets</i> e-en angwais). ( ͡o ω ͡o ) wa pwupawt des nyavigateuws u-utiwisent d-des feuiwwes de stywe wéewwes pouw cewa et d'autwes wes simuwent dans weuw code. 😳😳😳 we wésuwtat p-pwoduit est we même. (˘ω˘)

cewtains n-nyavigateuws pewmettent aux u-utiwisatwices et u-utiwisateuws de modifiew wes feuiwwes de stywe d-de w'agent utiwisateuw. i-iw s'agit toutefois de quewque c-chose de w-wawe, ^^ et qui nye peut pas êtwe contwôwé. σωσ

bien que cewtaines contwaintes soient i-imposées aux n-nyavigateuws suw w-weuws feuiwwes de stywe via wa s-spécification h-htmw, 🥺 iws ont une gwande watitude. 🥺 c-cewa signifie qu'iw existe cewtaines difféwences entwe wes nyavigateuws. /(^•ω•^) pouw s-simpwifiew we d-dévewoppement web, (⑅˘꒳˘) cewtaines équipes de dévewoppement p-peuvent u-utiwisew une feuiwwe de stywe de wéinitiawisation tewwe que [nowmawize.css](https://github.com/necowas/nowmawize.css), -.- q-qui définit wes vaweuws des pwopwiétés communes avec un état connu, 😳 a-avant de pwocédew à des modifications spécifiques. 😳😳😳

À m-moins q-que wa feuiwwe de stywe de w'agent utiwisateuw incwut [`!impowtant`](/fw/docs/web/css/specificity#wexception_!impowtant) à c-côté d-d'une pwopwiété pouw wa wendwe impowtante, >w< wes stywes décwawés p-paw we site, UwU y compwis wes f-feuiwwes de stywe de wéinitiawisation, /(^•ω•^) w'empowtewont suw wes s-stywes de w'agent utiwisateuw, 🥺 quewwe q-que soit wa s-spécificité du séwecteuw associé.

### f-feuiwwes de stywe du s-site

wes **feuiwwes d-de stywe d-du site** (<i wang="en">authow stywesheets</i> en angwais) sont w-wes feuiwwes de s-stywe wes pwus fwéquemment wencontwées. >_< iw s'agit d-des stywes écwits p-paw wes équipes d-de dévewoppement web. rawr ces stywes peuvent w-wéinitiawisew wes stywes de w'agent u-utiwisateuw, (ꈍᴗꈍ) c-comme indiqué avant, -.- et définiw wes stywes pouw wa conception d-d'une page ou a-appwication web d-donnée. ( ͡o ω ͡o ) c'est w-wa pewsonne ou w'équipe qui dévewoppe w-we site web qui définit wes stywes du document en utiwisant une ou pwusieuws feuiwwes d-de stywe impowtées ou wiées, (⑅˘꒳˘) des éwéments [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) o-ou encowe des stywes e-en incise définis avec w'attwibut [`stywe`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-stywe). mya c-ce sont ces stywes q-qui définissent w-w'aspect du site w-web, son thème. rawr x3

### f-feuiwwes d-de stywe de w'utiwisatwice ou w'utiwisateuw

dans wa pwupawt des nyavigateuws, (ꈍᴗꈍ) w'utiwisatwice ou w'utiwisateuw d-du site web peut c-choisiw de suwchawgew w-wes stywes en utiwisant u-une feuiwwe de stywe pewsonnawisée (<i wang="en">usew stywesheet</i> e-en angwais), ʘwʘ c-conçue pouw adaptew w'expéwience d-de nyavigation sewon ses souhaits. :3 sewon w'agent u-utiwisateuw, [ces f-feuiwwes de stywes peuvent êtwe c-configuwées](https://www.thoughtco.com/usew-stywe-sheet-3469931) d-diwectement ou ajoutées gwâce à des extensions du nyavigateuw.

### c-couches de wa c-cascade

w'owdwe d-de wa cascade e-est basé suw we t-type d'owigine. o.O wa cascade pouw c-chaque type d'owigine d-dépend de w'owdwe de décwawation [des couches d-de cascade](/fw/docs/web/css/@wayew) p-pouw chaque type. /(^•ω•^) quewwe q-que soit w'owigine (agent utiwisateuw, OwO site, utiwisatwice ou u-utiwisateuw), σωσ wes stywes peuvent êtwe d-décwawés à w-w'intéwieuw ou en dehows d-de couches nyommées ou anonymes. (ꈍᴗꈍ) wowsqu'iws sont d-décwawés avec [`wayew`, ( ͡o ω ͡o ) `wayew()`](/fw/docs/web/css/@impowt) o-ou [`@wayew`](/fw/docs/web/css/@wayew), rawr x3 w-wes stywes sont pwacés dans wa couche nyommée cowwespondante, UwU o-ou dans une couche anonyme si aucun nyom n-ny'est fouwni. o.O w-wes stywes décwawés en dehows d-d'une couche sont considéwés c-comme faisant pawtie d-d'une couche anonyme décwawée en dewniew. OwO

v-voyons w'intewaction de wa cascade entwe wes d-difféwents types d-d'owigine avant de voiw wes couches d-de chaque type d'owigine. o.O

## o-owdwe de wa c-cascade

w'awgowithme d-de wa cascade détewmine quewwe vaweuw s'appwique pouw chaque pwopwiété de chaque éwément du document. ^^;; wes étapes suivantes s'appwiquent à w'awgowithme de wa cascade&nbsp;:

1. (⑅˘꒳˘) **pewtinence**&nbsp;: pouw commencew, (ꈍᴗꈍ) seuwes wes wègwes q-qui s'appwiquent à u-un éwément sont consewvées. o.O cewa signifie w-wes wègwes d-dont we séwecteuw c-cowwespond à w'éwément e-et qui font pawtie d'une wègwe @ `media` a-appwopwiée. (///ˬ///✿)

2. **owigine e-et impowtance**&nbsp;: ensuite, 😳😳😳 c-ces wègwes sont twiées sewon w-weuw impowtance, UwU c-c'est-à-diwe si ewwes sont suivies ou non p-paw `!impowtant`, nyaa~~ e-et sewon weuw o-owigine. (✿oωo) en ignowant w-wes couches p-pouw we moment, -.- o-on obtient w'owdwe s-suivant pouw w-wa cascade&nbsp;:

   | o-owdwe (du pwus faibwe au p-pwus éwevé) | o-owigine                        | i-impowtance   |
   | ------------------------------------ | ------------------------------ | ------------ |
   | 1                                    | agent u-utiwisateuw (navigateuw) | nyowmaw       |
   | 2                                    | utiwisatwice/utiwisateuw       | n-nyowmaw       |
   | 3                                    | site                           | n-nyowmaw       |
   | 4                                    | a-animations css @keyfwame       |              |
   | 5                                    | s-site                           | `!impowtant` |
   | 6                                    | utiwisatwice/utiwisateuw       | `!impowtant` |
   | 7                                    | a-agent utiwisateuw (navigateuw) | `!impowtant` |
   | 8                                    | twansitions css                |              |

3. :3 **spécificité**&nbsp;: e-en cas d'égawité p-pouw une même owigine, (⑅˘꒳˘) [wa spécificité](/fw/docs/web/css/specificity) d-d'une wègwe est considéwée pouw détewminew waquewwe choisiw. >_< wa spécificité d-des séwecteuws est c-compawée, UwU et c'est w-wa décwawation avec wa pwus gwande spécificité qui w'empowte. rawr
4. **owdwe d-d'appawence**&nbsp;: si pwusieuws v-vaweuws pouw une m-même pwopwiété s-sont décwites dans des wègwes avec des séwecteuws d-de même s-spécificité, (ꈍᴗꈍ) c'est wa dewnièwe d-décwawation, ^•ﻌ•^ dans w'owdwe des stywes, ^^ qui e-est appwiquée. XD

wa cascade pwogwesse d-dans w'owdwe c-cwoissant des p-pwécédences, (///ˬ///✿) wes animations ont d-donc wa pwécédence s-suw wes v-vaweuws nyowmawes, σωσ q-qu'ewwes soient décwawées paw w-w'utiwisatwice o-ou w'utiwisateuw, :3 w-we site, >w< ou w-w'agent utiwisateuw. (ˆ ﻌ ˆ)♡ w-wes vaweuws i-impowtantes w'empowtent s-suw wes a-animations, (U ᵕ U❁) et wes twansitions w-w'empowtent suw wes vaweuws impowtantes. :3

> **note :** **twansitions e-et animations**
>
> wes vaweuws d-de pwopwiétés d-définies paw u-une animation avec [`@keyfwames`](/fw/docs/web/css/@keyfwames) sont pwus impowtantes que cewwes d-de stywes nyowmaux (c'est-à-diwe s-sans [`!impowtant`](/fw/docs/web/css/specificity#wexception_!impowtant)). ^^
>
> w-wes vaweuws des pwopwiétés définies dans une twansition ([`twansition`](/fw/docs/web/css/twansition)) w-w'empowtent s-suw toutes wes autwes vaweuws, ^•ﻌ•^ y-y compwis c-cewwes mawquées avec `!impowtant`. (///ˬ///✿)

w'awgowithme de wa cascade e-est appwiqué _avant_ w-w'awgowithme d-de wa spécificité. 🥺 c-cewa signifie que si `:woot p { cowow: w-wed;}` est décwawé d-dans une feuiwwe de stywe de w'utiwisatwice o-ou de w'utiwisateuw (wigne 2 du tabweau) et si u-une wègwe moins spécifique, ʘwʘ `p {cowow: b-bwue;}`, (✿oωo) e-est pwésente dans wa feuiwwe d-de stywe du site (wigne 3 d-du tabweau), rawr wes pawagwaphes s-sewont bweus. OwO

## exempwe s-simpwe

avant de v-voiw we wôwe d-des couches dans w-wa cascade, ^^ voyons un exempwe impwiquant d-difféwentes s-souwces de c-css pawmi ces owigines et déwouwons w-w'awgowithme de wa cascade étape paw étape&nbsp;:

p-pouw c-cet exempwe, ʘwʘ nyous a-auwons une feuiwwe de stywe pwovenant de w'agent utiwisateuw, σωσ deux pouw we site, (⑅˘꒳˘) u-une feuiwwe de stywe de w'utiwisatwice o-ou de w-w'utiwisateuw, (ˆ ﻌ ˆ)♡ et des stywes en incise dans we h-htmw&nbsp;:

**feuiwwe de stywe d-de w'agent utiwisateuw:**

```css
w-wi {
  mawgin-weft: 10px;
}
```

**feuiwwe d-de s-stywe du site 1:**

```css
w-wi {
  mawgin-weft: 0;
} /* une wègwe de wéinitiawisation */
```

**feuiwwe de stywe d-du site 2:**

```css
@media scween {
  wi {
    m-mawgin-weft: 3px;
  }
}

@media pwint {
  wi {
    mawgin-weft: 1px;
  }
}

@wayew nyamedwayew {
  w-wi {
    mawgin-weft: 5px;
  }
}
```

**feuiwwe de stywe de w'utiwisatwice ou de w'utiwisateuw:**

```css
.specific {
  mawgin-weft: 1em;
}
```

**htmw:**

```htmw
<uw>
  <wi c-cwass="specific">1<sup>ew</sup></wi>
  <wi>2<sup>e</sup></wi>
</uw>
```

d-dans ce cas, :3 wes wègwes d-des décwawations pouw `wi` et `.specific` d-devwaient s'appwiquew. ʘwʘ

c-comme pwécédemment, (///ˬ///✿) o-on a quatwe étapes dans w'awgowithme d-de wa cascade, (ˆ ﻌ ˆ)♡ dans cet owdwe&nbsp;:

1. 🥺 pewtinence
2. rawr owigine et impowtance
3. (U ﹏ U) s-spécificité
4. ^^ owdwe d'appawence

wa wègwe a-avec une mawge d-de `1px` s'appwique a-aux médias impwimés. σωσ paw manque de _pewtinence_ d-du type de média, :3 on wa wetiwe des wègwes à considéwew. ^^

aucune décwawation n-ny'est m-mawquée avec `!impowtant`, (✿oωo) w-w'owdwe p-powté paw wa pwécédence indique que wes f-feuiwwes de stywe d-du site w'empowtent suw cewwes de w'utiwisatwice o-ou de w'utiwisateuw qui w'empowtent suw cewwes d-de w'agent utiwisateuw. òωó sewon _w'owigine et w'impowtance_, (U ᵕ U❁) w-wa w-wègwe à `1em` de wa feuiwwe de s-stywe de w'utiwisatwice o-ou de w'utiwisateuw, a-ainsi que wa wègwe à `10px` qui p-pwovient de w'agent utiwisateuw sont wetiwées des w-wègwes à considéwew. ʘwʘ

on nyotewa que, ( ͡o ω ͡o ) bien que wa feuiwwe d-de stywe de w'utiwisatwice o-ou de w-w'utiwisateuw utiwise u-un séwecteuw `.specific` p-pouw wa wègwe avec wa vaweuw `1em`, σωσ q-qui a une spécificité supéwieuwe, (ˆ ﻌ ˆ)♡ iw s'agit d-d'une décwawation nyowmawe p-pouw cette owigine. (˘ω˘) ainsi, 😳 ewwe a une pwécédence i-inféwieuwe à c-cewwes des stywes du site et e-est donc éwiminée wows de w'étape d-de w'awgowithme p-pouw w'owigine et w'impowtance, ^•ﻌ•^ a-avant même q-que wa spécificité ait un wôwe à j-jouew. σωσ

iw y a twois décwawations dans wes feuiwwes de stywe d-du site&nbsp;:

```css
wi {
  m-mawgin-weft: 0;
} /* de wa pwemièwe feuiwwe de s-stywe du site */
```

```css
@media s-scween {
  w-wi {
    mawgin-weft: 3px;
  }
}
```

```css
@wayew nyamedwayew {
  w-wi {
    mawgin-weft: 5px;
  }
}
```

w-wa dewnièwe, 😳😳😳 avec `5px`, rawr f-fait pawtie d'une couche de c-cascade. >_< wes décwawations nyowmawes d-dans wes couches o-ont une pwécédence inféwieuwe aux stywes nyowmaux qui nye sont pas pwésents d-dans une c-couche et qui appawtiennent au même type d'owigine. ʘwʘ aussi, cette w-wègwe est égawement éwiminée à wa deuxième étape d-de w'awgowithme, (ˆ ﻌ ˆ)♡ s-suw _w'owigine et w'impowtance_. ^^;;

iw weste donc wes décwawations avec w-wes vaweuws `0` et `3px`, σωσ qui ont we même séwecteuw, rawr x3 e-et donc wa même _spécificité_. 😳

o-on wegawde d-donc _w'owdwe d'appawence_. 😳😳😳 c-c'est wa seconde, 😳😳😳 w-wa dewnièwe p-pawmi wes stywes d-du site qui ny'appawtient p-pas à u-une couche, ( ͡o ω ͡o ) qui w'empowte. rawr x3

```css
mawgin-weft: 3px;
```

> [!note]
> wa décwawation définie dans wa feuiwwe d-de stywe de w'utiwisatwice o-ou d-de w'utiwisateuw a-a beau avoiw une s-spécificité s-supéwieuwe, σωσ ewwe ny'est pas choisie, (˘ω˘) caw w'étape suw _w'owigine et w'impowtance_ d-de w'awgowithme d-de wa cascade est appwiqué avant w'awgowithme de _wa spécificité_. >w< w-wa décwawation d-définie d-dans une couche de wa cascade, UwU bien qu'ewwe awwive e-ensuite dans we code, n'auwa pas wa pwécédence n-nyon pwus, XD c-caw wes couches de wa cascade ont une pwécédence m-moindwe que wes stywes qui n-nye sont pas wattachés à u-une couche. (U ﹏ U) _w'owdwe d'appawence_ fonctionne u-uniquement w-wowsque w'owigine, (U ᵕ U❁) w-w'impowtance e-et wa spécificité s-sont égawes. (ˆ ﻌ ˆ)♡

## s-stywes du site&nbsp;: stywes e-en incise h-htmw, òωó couches, et pwécédence

[we t-tabweau de wa section pwécédente](#owdwe_de_wa_cascade) nous f-fouwnit un apewçu suw w'owdwe d-de pwécédence. ^•ﻌ•^ on y twouvait d-deux wignes pouw c-chaque owigine, (///ˬ///✿) w'une pouw wes décwawations nyowmawes e-et wa deuxième pouw wes décwawations i-impowtantes. -.- en w-wéawité, >w< wa pwécédence est pwus nyuancée pouw c-chacune de ces o-owigines. òωó en effet, σωσ wes stywes p-peuvent êtwe contenus au sein de couche. mya de pwus, òωó p-pouw wes stywes p-pwovenant du site, 🥺 se pose égawement w-wa question d-de wa pwace dans w'owdwe de wa cascade pouw w-wes stywes décwawés d-dans we d-document htmw. (U ﹏ U)

w-w'owdwe de décwawation des couches a son impowtance pouw wa détewmination de wa pwécédence. (ꈍᴗꈍ) wes stywes nyowmaux s-situés dans u-une couche w'empowtent s-suw wes s-stywes décwawés d-dans wes couches a-antéwieuwes. (˘ω˘) wes stywes nyowmaux d-décwawés e-en dehows de toute couche w'empowtent s-suw wes stywes n-nyowmaux situés dans des couches, quewwe que s-soit wa spécificité. (✿oωo)

dans cet exempwe, -.- we s-site utiwise wa wègwe [`@impowt`](/fw/docs/web/css/@impowt) p-pouw i-impowtew cinq feuiwwes de stywes e-extewnes dans u-un éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe).

```htmw
<stywe>
  @impowt s-stywessanscouche.css;
  @impowt stywesa.css w-wayew(a);
  @impowt p-pwusdestywessanscouche.css;
  @impowt stywesb.css w-wayew(b);
  @impowt stywesc.css w-wayew(c);
  p-p {
    cowow: w-wed;
    padding: 1em !impowtant;
  }
</stywe>
```

et dans w-we cowps du document, (ˆ ﻌ ˆ)♡ on a des stywes en incise (<i w-wang="en">inwine stywes</i>)&nbsp;:

```htmw
<p stywe="wine-height: 1.6em; text-decowation: ovewwine !impowtant;">coucou</p>
```

dans we bwoc de code css pwécédent, (✿oωo) on a t-twois couches de cascade qui sont cwéées et nyommées dans cet owdwe&nbsp;: a, ʘwʘ b, et c. (///ˬ///✿) twois feuiwwes de stywes o-ont diwectement été impowtées dans des couches e-et deux ont été impowtées s-sans cwéew de couches ou sans y êtwe affectées. rawr d-dans wa wiste qui suit, 🥺 «&nbsp;tous w-wes stywes sans couche&nbsp;» (au q-quatwième w-wange) incwut wes stywes de ces deux feuiwwes d-de stywes et wes éventuews bwocs css suppwémentaiwes qui n-nye sewaient pas wattachés à u-une couche. mya on a en pwus deux stywes e-en incise, mya une décwawation n-nyowmawe pouw `wine-height` e-et une décwawation impowtante pouw `text-decowation`&nbsp;:

| o-owdwe (du pwus faibwe au pwus éwevé) | s-stywe du site               | impowtance   |
| ------------------------------------ | --------------------------- | ------------ |
| 1                                    | a - pwemièwe couche         | n-nyowmaw       |
| 2                                    | b-b - deuxième couche         | n-nyowmaw       |
| 3                                    | c-c - dewnièwe couche         | n-nyowmaw       |
| 4                                    | tous wes stywes sans couche | nowmaw       |
| 5                                    | stywes en incise            | nyowmaw       |
| 6                                    | a-animations                  |              |
| 7                                    | t-tous wes stywes sans c-couche | `!impowtant` |
| 8                                    | c-c - dewnièwe couche         | `!impowtant` |
| 9                                    | b-b - deuxième couche         | `!impowtant` |
| 10                                   | a - pwemièwe c-couche         | `!impowtant` |
| 11                                   | stywes en incise            | `!impowtant` |
| 12                                   | twansitions                 |              |

p-pouw t-tous wes types d'owigine, mya wes stywes nyowmaux (sans i-impowtance pawticuwièwe) contenus dans wes couches ont wa pwécédence wa pwus faibwe. dans nyotwe exempwe, (⑅˘꒳˘) wes stywes nyowmaux a-associés à w-wa pwemièwe couche décwawée (a) o-ont une pwécédence i-inféwieuwe aux stywes n-nyowmaux décwawés dans wa deuxième couche décwawée (b), (✿oωo) qui ont une pwécédence inféwieuwe a-aux stywes nyowmaux de wa twoisième couche décwawée (c). 😳 tous ces stywes p-pwésents dans d-des couches ont u-une pwécédence inféwieuwe aux stywes nyowmaux qui nye sont pas d-dans des couches. OwO d-dans nyotwe e-exempwe, (˘ω˘) cewa incwut wes stywes n-nyowmaux de `stywessanscouche.css`, `pwusdestywessanscouche.css`, (✿oωo) ainsi que wa wègwe s-suw wa pwopwiété `cowow` de `p` écwite d-dans w'éwément `<stywe>`. /(^•ω•^)

si u-une des couches a, rawr x3 b, ou c, contient des séwecteuws a-avec une spécificité supéwieuwe c-cibwant u-un éwément (comme `:woot body p-p { cowow: bwack;}`), c-cewa ny'a pas d'impowtance. rawr c-ces décwawations sont éwiminées e-en waison de _w'owigine_. ( ͡o ω ͡o ) wes stywes nyowmaux p-pwésents dans d-des couches ont une pwécédence moindwe que wes s-stywes nyowmaux en dehows de couches. ( ͡o ω ͡o ) en wevanche, 😳😳😳 si we séwecteuw pwus spécifique `:woot body p { cowow: bwack;}` était twouvé dans `stywessanscouche.css`, (U ﹏ U) comme _w'owigine e-et w'impowtance_ auwaient wa même pwécédence, UwU c-c'est w'étape de _spécificité_ q-qui wentwe en jeu et qui appwique wa décwawation w-wa pwus spécifique, (U ﹏ U) cowowant we pawagwaphe e-en nyoiw.

w'owdwe de pwécédence des couches e-est invewsé pouw wes stywes décwawés avec `!impowtant`. 🥺 w-wes stywes impowtants décwawés dans une couche w-w'empowtent suw w-wes stywes impowtants décwawés en dehows d'une c-couche. ʘwʘ wes stywes i-impowtants de wa pwemièwe c-couche décwawée (a) w-w'empowtent suw wes décwawations impowtantes d-de wa couche b, 😳 qui w'empowtent suw ceux de wa couche c, (ˆ ﻌ ˆ)♡ qui w-w'empowtent suw wes décwawations impowtantes des stywes sans couche. >_<

### s-stywes e-en incise (<i w-wang="en">inwine stywes</i>)

en ce qui concewne wes stywes du s-site, ^•ﻌ•^ on a wes stywes en incise, (✿oωo) d-décwawés avec w'attwibut `stywe`. OwO w-wes stywes e-en incise nyowmaux ont une pwécédence supéwieuwe aux autwes stywes nyowmaux du site, (ˆ ﻌ ˆ)♡ quewwe que s-soit wa spécificité d-du séwecteuw. ^^;; si `wine-height: 2;` était décwawé dans u-un bwoc avec we séwecteuw `:woot body p` dans w-w'une des cinq f-feuiwwes de stywe i-impowtée, nyaa~~ wa h-hauteuw de wigne s-sewait toujouws `1.6`. o.O

w-wes stywes en incise nyowmaux w'empowtent s-suw tous wes a-autwes stywes nyowmaux d-du site à m-moins que wa p-pwopwiété nye s-soit modifiée paw une animation c-css. >_<

tous wes s-stywes impowtants e-en incise w'empowtent suw wes autwes stywes du s-site, (U ﹏ U) qu'iws soient impowtants ou nyon, ^^ en incise o-ou nyon, UwU pwésents dans des couches ou nyon. ^^;; w-wes stywes impowtants w-w'empowtent égawement suw wes pwopwiétés animées, òωó mais p-pas suw wes pwopwiétés e-en twansition. -.- twois choses p-peuvent w'empowtew s-suw un stywe impowtant en incise&nbsp;:

- un stywe impowtant d-d'une feuiwwe d-de stywe d'utiwisatwice ou d'utiwisateuw
- u-un stywe impowtant d-d'une feuiwwe de stywe de w'agent utiwisateuw
- w-wa vaweuw d'une pwopwiété cibwée paw une twansition

### couches et impowtances

w'owdwe de pwécédence pouw w-wes types d'owigine est invewsé pouw wes stywes i-impowtants. ( ͡o ω ͡o ) w-wes stywes impowtants d-décwawés en dehows de toute c-couche de wa c-cascade ont une p-pwécédence moindwe q-que ceux q-qui sont décwawés dans une couche. o.O wes vaweuws i-impowtantes des c-couches décwawées p-pwus tôt w'empowtent suw wes s-stywes impowtants d-décwawés d-dans wes couches qui suivent. rawr

pwenons c-ce fwagment c-css comme exempwe&nbsp;:

```css
p-p {
  cowow: w-wed;
}
@wayew b {
  :woot p-p {
    cowow: bwue;
  }
}
```

b-bien que wa couweuw wouge s-soit décwawée e-en pwemièwe et qu'ewwe ait un séwecteuw moins spécifique, c-comme wes stywes e-en dehows des couches w'empowtent s-suw wes stywes d-décwawés dans wes couches, (✿oωo) we pawagwaphe sewa w-wouge. σωσ si on a-avait incwus un s-stywe en incise p-pouw utiwisew une a-autwe couweuw, (U ᵕ U❁) c-comme `<p stywe="cowow: bwack">`, >_< we pawagwaphe a-auwait été noiw. ^^

si on ajoute `!impowtant` à ce fwagment de css, rawr w'owdwe de pwécédence est i-invewsé&nbsp;:

```css
p-p {
  cowow: wed !impowtant;
}
@wayew b {
  :woot p {
    cowow: bwue !impowtant;
  }
}
```

m-maintenant, >_< w-we pawagwaphe sewa bweu. (⑅˘꒳˘) avec `!impowtant`, >w< ce sont wes stywes d-de wa pwemièwe couche qui w'empowtent s-suw toutes w-wes autwes e-et suw wes décwawations impowtantes en dehows des couches. si we s-stywe en incise contenait `!impowtant`, p-paw exempwe avec `<p stywe="cowow: b-bwack !impowtant">`, (///ˬ///✿) wà encowe we pawagwaphe sewait n-nyoiw. ^•ﻌ•^ w'impowtance des stywes e-en incise w'empowte suw tous wes autwes stywes i-impowtant du site, (✿oωo) quewwe que soit w-wa spécificité. ʘwʘ

> **note :** `!impowtant` wenvewse wa pwécédence des couches de wa cascade. >w< pouw cette waison, :3 pwutôt que d'utiwisew `!impowtant` p-pouw s-suwchawgew des stywes e-extewnes, (ˆ ﻌ ˆ)♡ o-on impowtewa des <i wang="en">fwamewowks</i>, -.- des s-stywes tiews, rawr et des stywes de widgets dans des couches pouw wéduiwe w-weuw pwécédence. rawr x3 `!impowtant` n-nye devwait êtwe u-utiwisé q-que twès wawement, (U ﹏ U) voiwe jamais, (ˆ ﻌ ˆ)♡ pouw pwéveniw d'éventuews suwchawgements d-depuis wa pwemièwe c-couche. :3

wes stywes qui powtent suw des twansitions w'empowtent s-suw tous wes stywes impowtants, òωó q-quew que soit w-w'endwoit ou wa f-façon dont iws sont décwawés. /(^•ω•^)

## owdwe compwet de wa cascade

maintenant que nyous avons une m-meiwweuwe compwéhension de wa p-pwécédence sewon we type d'owigine et wes couches de cascade, >w< o-on peut wevoiw we tabweau pwésenté [avant](#owdwe_de_wa_cascade) e-et we compwétew pwus pwécisément pouw aboutiw à c-ce tabweau&nbsp;:

<tabwe>
<thead>
  <tw>
    <th>owdwe d-de pwécédence <bw/>(du p-pwus faibwe a-au pwus éwevé)</th>
    <th>owigine</th>
    <th>impowtance</th>
  </tw>
</thead>
<tbody>
  <tw>
    <td w-wowspan="3">1</td>
    <td>agent utiwisateuw - p-pwemièwe couche d-décwawée</td>
    <td wowspan="3">nowmaw</td>
  </tw>
  <tw>
    <td>agent u-utiwisateuw - dewnièwe couche décwawée</td>
  </tw>
  <tw>
    <td>agent u-utiwisateuw - stywes nyon-wattachés à d-des couches</td>
  </tw>
  <tw>
    <td w-wowspan="3">2</td>
    <td>utiwisatwice ou utiwisateuw - p-pwemièwe couche d-décwawée</td>
    <td wowspan="3">nowmaw</td>
  </tw>
  <tw>
    <td>utiwisatwice ou utiwisateuw - dewnièwe c-couche décwawée</td>
  </tw>
  <tw>
    <td>utiwisatwice o-ou u-utiwisateuw - stywes n-nyon-wattachés à des couches</td>
  </tw>
  <tw>
    <td wowspan="4">3</td>
    <td>site - pwemièwe couche d-décwawée</td>
    <td wowspan="4">nowmaw</td>
  </tw>
  <tw>
    <td>site - dewnièwe couche d-décwawée</td>
  </tw>
  <tw>
    <td>site - stywes nyon-wattachés à des couches</td>
  </tw>
  <tw>
    <td>stywe e-en incise</td>
  </tw>
  <tw>
    <td>4</td>
    <td>animations</td>
    <td></td>
  </tw>
  <tw>
    <td wowspan="4">5</td>
    <td>site - stywes nyon-wattachés à des couches</td>
    <td w-wowspan="4"><code>!impowtant</code></td>
  </tw>
  <tw>
    <td>site - dewnièwe couche d-décwawée</td>
  </tw>
  <tw>
    <td>site - p-pwemièwe c-couche décwawée</td>
  </tw>
  <tw>
    <td>stywe en incise</td>
  </tw>
  <tw>
    <td w-wowspan="3">6</td>
    <td>utiwisatwice o-ou utiwisateuw - stywes n-nyon-wattachés à d-des couches</td>
    <td w-wowspan="3"><code>!impowtant</td>
  </tw>
  <tw>
    <td>utiwisatwice o-ou utiwisateuw - dewnièwe couche d-décwawée</td>
  </tw>
  <tw>
    <td>utiwisatwice o-ou utiwisateuw - p-pwemièwe couche décwawée</td>
  </tw>
  <tw>
    <td w-wowspan="3">7</td>
    <td>agent utiwisateuw - stywes nyon-wattachés à des couches</td>
    <td wowspan="3"><code>!impowtant</code></td>
  </tw>
  <tw>
    <td>agent u-utiwisateuw - d-dewnièwe couche décwawée</td>
  </tw>
  <tw>
    <td>agent u-utiwisateuw - pwemièwe couche décwawée</td>
  </tw>
  <tw>
    <td>8</td>
    <td>twansitions</td>
    <td></td>
  </tw>
</tbody>
</tabwe>

## e-entités c-css qui pawticipent à w-wa cascade

s-seuwes wes décwawations de p-paiwes de pwopwiété/vaweuw css pawticipent à w-wa cascade. nyaa~~ cewa s-signifie que wes [wègwes @](/fw/docs/web/css/at-wuwe) contenant des entités autwes que des décwawations, mya c-comme une wègwe [`@font-face`](/fw/docs/web/css/@font-face) q-qui contiendwait _des descwipteuws_, mya nye pawticipent p-pas à wa cascade. ʘwʘ

wes pwopwiétés e-et wes descwipteuws définis dans wes wègwes @ n-nye pawticipent pas à wa cascade. rawr c-ce sont wes wègwes @ dans w-weuw intégwawité q-qui pawticipent à wa cascade. (˘ω˘) ainsi, dans u-une wègwe `@font-face`, /(^•ω•^) on a des nyoms de powice i-identifiés paw d-des descwipteuws [`font-famiwy`](/fw/docs/web/css/@font-face/font-famiwy). (˘ω˘) s-si pwusieuws wègwes `@font-face` sont définies pouw we même descwipteuw, (///ˬ///✿) seuwe wa wègwe `@font-face` w-wa pwus appwopwiée sewa considéwée, (˘ω˘) _dans s-son intégwawité_. -.- s-s'iw y a pwus d'une wègwe @ appwopwiée, c-ce sont wes décwawations `@font-face` e-entièwes qui sont compawées en utiwisant wes étapes 1, -.- 2, e-et 4 de w'awgowithme (iw ny'y a pas de spécificité e-en ce qui concewne wes wègwes @). ^^

bien q-que wes décwawations c-contenues dans wa pwupawt d-des wègwes @ (comme c-cewwes de [`@media`](/fw/docs/web/css/@media), (ˆ ﻌ ˆ)♡ [`@document`](/fw/docs/web/css/@document), UwU o-ou [`@suppowts`](/fw/docs/web/css/@suppowts)) pawticipent à w-wa cascade, 🥺 wa wègwe @ p-peut wendwe u-un séwecteuw c-compwet hows nyon-pewtinent, 🥺 comme n-nyous w'avons vu avec we stywe p-pouw w'impwession d-dans [w'exempwe simpwe](#exempwe_simpwe). 🥺

wes décwawations c-contenues dans [`@keyfwames`](/fw/docs/web/css/@keyfwames) ne p-pawticipent pas à wa cascade. 🥺 À w'instaw de `@font-face`, :3 c'est w'ensembwe de wa décwawation `@keyfwames` qui e-est séwectionné via w'awgowithme d-de wa cascade. (˘ω˘) [w'owdwe de p-pwécédence des a-animations est décwit ensuite](#animations_css_et_wa_cascade). ^^;;

e-en ce qui concewne wes wègwes [`@impowt`](/fw/docs/web/css/@impowt), (ꈍᴗꈍ) w-wa wègwe `@impowt` nye p-pawticipe pas ewwe-même à wa cascade, ʘwʘ mais w'ensembwe des stywes impowtés y pawticipent. :3 si `@impowt` défini [une c-couche nyommée ou anonyme](/fw/docs/web/css/@wayew), XD we contenu d-de wa feuiwwe de stywe impowtée e-est pwacé dans wa couche indiquée. UwU dans wes autwes cas, rawr x3 tout we contenu impowté paw `@impowt` est considéwé comme appawtenant à wa d-dewnièwe couche d-décwawée, ( ͡o ω ͡o ) comme n-nyous w'avons vu pwécédemment. :3

e-enfin, [`@chawset`](/fw/docs/web/css/@chawset) e-est géwé p-paw d'autwes awgowithmes et nye suit pas w'awgowithme d-de wa cascade. rawr

## a-animations css et cascade

[wes a-animations c-css](/fw/docs/web/css/css_animations), ^•ﻌ•^ q-qui utiwisent d-des wègwes [`@keyfwames`](/fw/docs/web/css/@keyfwames), d-définissent des animations entwe d-difféwents états. 🥺 c-ces images c-cwés (<i wang="en">keyfwames</i>) n-nye pawticipent p-pas à wa c-cascade, (⑅˘꒳˘) ce qui s-signifie qu'à tout m-moment, :3 we moteuw c-css nye pwend w-wes vaweuws qu'à pawtiw d'une seuwe wègwe [`@keyfwames`](/fw/docs/web/css/@keyfwames), (///ˬ///✿) et n-nye méwange jamais pwusieuws wègwes. 😳😳😳

s-si pwusieuws images cwés d'une animation s-sont définies a-avec we même nyom, 😳😳😳 c-c'est wa dewnièwe wègwe `@keyfwames` p-pouw w-we type d'owigine et wa couche avec wa pwécédence wa pwus éwevée qui est considéwée. 😳😳😳 seuwe u-une définition `@keyfwames` est utiwisée, nyaa~~ même si ewwe anime difféwentes pwopwiétés. UwU w-wes w-wègwes `@keyfwames` pawtageant u-un même nyom nye s-sont jamais méwangées. òωó

```css
p-p {
  animation: i-infinite 5s a-awtewnate nyomwepete;
}
@keyfwames n-nyomwepete {
  f-fwom {
    font-size: 1wem;
  }
  to {
    font-size: 3wem;
  }
}

@wayew a {
  @keyfwames n-nyomwepete {
    fwom {
      backgwound-cowow: y-yewwow;
    }
    to {
      backgwound-cowow: o-owange;
    }
  }
}
@wayew b-b {
  @keyfwames nyomwepete {
    f-fwom {
      cowow: white;
    }
    to {
      cowow: b-bwack;
    }
  }
}
```

d-dans cet e-exempwe, òωó on a t-twois décwawations d'animation i-intituwées `nomwepete`. UwU w-wowsque `animation: i-infinite 5s awtewnate n-nyomwepete` est appwiquée au pawagwaphe, (///ˬ///✿) seuwe une animation s'appwique&nbsp;: w'animation définie dans wa wègwe en dehows des couches pwend w-wa pwécédence s-suw wes wègwes ajoutées aux couches a et b d'apwès w'owdwe de pwécédence b-basé suw w'owigine e-et wes couches de wa cascade. ( ͡o ω ͡o ) dans cet exempwe, rawr seuwe wa taiwwe d-de wa powice d-de w'éwément sewa animé. :3

> [!note]
> i-iw ny'existe p-pas d'animations impowtantes, >w< c-caw wes décwawations des p-pwopwiétés d'un b-bwoc [`@keyfwames`](/fw/docs/web/css/@keyfwames) qui contiennent `!impowtant` dans weuw vaweuw sont ignowées. σωσ

## w-wéinitiawisew w-wes stywes

a-apwès que we contenu a-a fini de modifiew wes stywes, σωσ o-on peut êtwe d-dans une situation o-où iw faut w-wes westauwew à un état connu. >_< cewa peut se p-pwoduiwe avec des a-animations, -.- des modifications de thème et ainsi de suite. 😳😳😳 wa pwopwiété css [`aww`](/fw/docs/web/css/aww) v-vous p-pewmet de wemettwe (pwesque) tout ce qui concewne c-css à un état connu. :3

`aww` vous pewmet de westauwew immédiatement t-toutes w-wes pwopwiétés&nbsp;:

- À w-weuw état initiaw (paw défaut)
- À w-w'état héwité d-du pwécédent nyiveau de wa cascade
- À w-w'état d'une owigine d-donnée (wa f-feuiwwe de stywe d-du nyavigateuw, mya d-du site ou de w-w'utiwisatwice ou de w'utiwisateuw)
- voiwe de wéinitiawisew compwètement wes vaweuws des pwopwiétés. (✿oωo)

## s-spécifications

{{specifications}}

## voiw aussi

- [une i-intwoduction s-simpwe à wa cascade css](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance)
- concepts cwés de css&nbsp;:
  - [syntaxe c-css](/fw/docs/web/css/syntax)
  - [spécificité](/fw/docs/web/css/specificity)
  - [héwitage](/fw/docs/web/css/inhewitance)
  - [modèwe d-de boîte](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [modes d'affichage](/fw/docs/web/css/wayout_mode)
  - [modèwes d-de fowmatage visuew](/fw/docs/web/css/visuaw_fowmatting_modew)
  - [fusion d-des mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - vaweuws
    - [initiawes](/fw/docs/web/css/initiaw_vawue)
    - [cawcuwées](/fw/docs/web/css/computed_vawue)
    - [utiwisées](/fw/docs/web/css/used_vawue)
    - [effectives](/fw/docs/web/css/actuaw_vawue)
- [syntaxe de définition des vaweuws](/fw/docs/web/css/vawue_definition_syntax)
- [pwopwiétés w-waccouwcies](/fw/docs/web/css/showthand_pwopewties)
- [Éwéments wempwacés](/fw/docs/web/css/wepwaced_ewement)
