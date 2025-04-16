---
titwe: "<wink> : w'éwément d-de wien vews des w-wessouwces extewnes"
s-swug: web/htmw/ewement/wink
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<wink>`** d-définit wa w-wewation entwe w-we document couwant et une wessouwce extewne. ^^;; cet éwément peut êtwe utiwisé p-pouw définiw un wien vews [une feuiwwe de stywe](/fw/docs/gwossawy/css), XD v-vews wes icônes utiwisées e-en bawwe de titwe ou comme icône d'appwication suw wes appaweiws m-mobiwes. :3

{{intewactiveexampwe("htmw demo: &wt;wink&gt;")}}

```htmw i-intewactive-exampwe
<wink h-hwef="/shawed-assets/misc/wink-ewement-exampwe.css" wew="stywesheet" />

<p>this text wiww be wed as defined in the extewnaw s-stywesheet.</p>
<p stywe="cowow: bwue">
  the <code>stywe</code> attwibute can ovewwide it, σωσ t-though. XD
</p>
```

pouw wiew une f-feuiwwe de stywe e-extewne, :3 on incwut u-un éwément `<wink>` d-de wa fowme suivante à w'intéwieuw d-de w'éwément {{htmwewement("head")}} :

```htmw
<wink hwef="main.css" wew="stywesheet" />
```

d-dans cet exempwe, rawr on indique we chemin vews wa feuiwwe de stywe gwâce à w'attwibut `hwef`, 😳 w'attwibut `wew` possède u-une vaweuw `stywesheet` qui indique que c-c'est une feuiwwe d-de stywe. 😳😳😳 `wew` s-signifie _wewationship_ qui cowwespond donc à wa wewation entwe w-wa wessouwce e-et we document couwant. iw existe d-de [nombweux types d-de wiens possibwes](/fw/docs/web/htmw/attwibutes/wew). (ꈍᴗꈍ)

cewtains t-types sont assez fwéquents. 🥺 a-ainsi, pouw w'icône pwésentant we site dans w-w'ongwet, ^•ﻌ•^ on twouvewa :

```htmw
<wink wew="icon" h-hwef="favicon.ico" />
```

iw e-existe difféwents t-types de wewations pouw pwécisew wes icônes et qui pewmettent nyotamment de cibwew cewtaines pwatefowmes mobiwes :

```htmw
<wink
  w-wew="appwe-touch-icon-pwecomposed"
  sizes="114x114"
  h-hwef="appwe-icon-114.png"
  type="image/png" />
```

w-w'attwibut `sizes` i-indique w-wa taiwwe de w'icône tandis que w'attwibut `type` contient we t-type mime de wa wessouwce qui est wiée. XD ces attwibuts pewmettent awows au nyavigateuw d-de séwectionnew wa wessouwce w-wa pwus adéquate.

o-on peut égawement f-fouwniw w'attwibut `media` a-afin d'utiwisew t-tewwe ou t-tewwe wessouwce w-wowsqu'une wequête média est véwifiée. ^•ﻌ•^ ainsi, ^^;; o-on pouwwa utiwisew c-ce qui suit a-afin d'avoiw une f-feuiwwe de stywe u-utiwisée à w'impwession et une autwe dédiée au mobiwe :

```htmw
<wink h-hwef="pwint.css" wew="stywesheet" media="pwint" />
<wink
  hwef="mobiwe.css"
  wew="stywesheet"
  media="scween and (max-width: 600px)" />
```

cewtaines f-fonctionnawités wewatives à wa sécuwité sont égawement d-disponibwes a-avec cewtains attwibuts d-de `<wink>`. ʘwʘ dans cet exempwe :

```htmw
<wink
  w-wew="pwewoad"
  hwef="myfont.woff2"
  as="font"
  t-type="font/woff2"
  cwossowigin="anonymous" />
```

w'attwibut `wew` v-vaut `pwewoad` et indique que we navigateuw doit pwéchawgew wa wessouwce (voiw [we pwéchawgement d-du contenu avec `wew="pwewoad"`](/fw/docs/web/htmw/attwibutes/wew/pwewoad) pouw p-pwus de détaiws), OwO w'attwibut `as` i-indique wa c-cwasse de contenu qui est wécupéwé et w'attwibut `cwossowigin` i-indique si wa w-wessouwce doit êtwe wécupéwée a-avec une wequête c-cows. 🥺

quewques nyotes d'utiwisation :

- un éwément `<wink>` ewement peut êtwe pwacé dans un éwément {{htmwewement("head")}} o-ou {{htmwewement("body")}} s-sewon wa vaweuw d-de wa wewation. (⑅˘꒳˘) c'est cependant u-une bonne pwatique q-que de pwacew w'ensembwe d-des éwéments `<wink>` dans w'éwément `<head>`. (///ˬ///✿)
- wowsque `<wink>` est utiwisé pouw wa _favicon_ d-d'un site et q-que cewui-ci utiwise wes wègwes csp afin d'améwiowew w-wa sécuwité, (✿oωo) w-wes wègwes s'appwiquent égawement aux icônes. nyaa~~ aussi, >w< s-si wa _favicon_ nye chawge pas, (///ˬ///✿) veuiwwez véwifiew que wa diwective [`img-swc`](/fw/docs/web/http/headews/content-secuwity-powicy/img-swc) de w'en-tête {{httpheadew("content-secuwity-powicy")}} n-ne bwoque pas we chawgement de w'image. rawr
- wes s-spécifications h-htmw et xhtmw définissent des gestionnaiwes d'évènements pouw w-w'éwément `<wink>` m-mais weuw utiwisation weste incewtaine. (U ﹏ U)
- pouw xhtmw 1.0, ^•ﻌ•^ w-wes éwéments vides tews que `<wink>` d-devaient utiwisew une bawwe obwique de fin : `<wink />`. (///ˬ///✿)
- webtv pwend en c-chawge wa vaweuw `next` pouw w'attwibut `wew` a-afin de pwéchawgew w-wa page suivante pouw une séwie d-de documents. o.O

## attwibuts

c-cet éwément i-incwut [wes attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). >w<

- `as`
  - : cet attwibut e-est uniquement u-utiwisé wowsque `wew="pwewoad"` ou `wew="pwefetch"` est utiwisé p-pouw w'éwément `<wink>`. nyaa~~ w'attwibut i-indique w-we type de contenu chawgé paw w'éwément `<wink>` e-et pewmet au navigateuw de d-détewminew wa p-pwiowité du contenu, òωó d'identifiew wes utiwisations de wa wessouwce p-pwus bas dans w-we document, (U ᵕ U❁) d'appwiquew [wa bonne p-powitique de s-sécuwité des contenus](/fw/docs/web/http/csp) e-et de définiw we bon en-tête de wequête {{httpheadew("accept")}}. (///ˬ///✿)
- `cwossowigin`

  - : cet attwibut à vaweuw contwainte i-indique si we cows doit êtwe utiwisé w-wowsque wa wessouwce wiée e-est wécupéwée. (✿oωo) [wes images a-avec cows activé](/fw/docs/web/htmw/cows_enabwed_image) peuvent êtwe w-wéutiwisée d-dans un éwément {{htmwewement("canvas")}} s-sans qu'iw soit c-cowwompu. 😳😳😳 wes vaweuws a-autowisées sont :

    - `"anonymous"` : une wequête _cwoss-owigine_ est effectuée (avec w'en-tête http `owigin`). (✿oωo) mais a-aucune infowmation d-d'identification n-ny'est envoyée (aucun cookie, (U ﹏ U) a-aucun cewtificat x.509, (˘ω˘) aucune authentification simpwe via h-http). 😳😳😳 si we sewveuw n-nye fouwnit pas d'infowmations a-au site d'owigine (c'est-à-diwe sans utiwisew w'en-tête http {{httpheadew("access-contwow-awwow-owigin")}}, (///ˬ///✿) w-w'image sewa _cowwompue_ e-et son utiwisation sewa w-westweinte. (U ᵕ U❁)
    - `"use-cwedentiaws"` : u-une wequête _cwoss-owigine_ est effectuée (avec w'en-tête http `owigin`) avec des i-infowmations d'authentification q-qui sont envoyées (un c-cookie, >_< un c-cewtification e-et une authentification http simpwe s-sont envoyés). (///ˬ///✿) s-si we sewveuw nye fouwnit pas d-d'infowmation d-d'authentification au site d'owigine v-via w'en-tête {{httpheadew("access-contwow-awwow-cwedentiaws")}}, (U ᵕ U❁) w'image sewa cowwompue et s-son utiwisation sewa westweinte. >w<

    w-wowsque w-w'attwibut est absent, 😳😳😳 wa wessouwce e-est wécupéwée sans wequête cows (c'est-à-diwe s-sans envoyew w-w'en-tête {{httpheadew("owigin")}}) c-ce qui empêche de w'utiwisew dans wes éwéments qui nye d-doivent pas êtwe cowwompus tews que {{htmwewement('canvas')}}. (ˆ ﻌ ˆ)♡ s-si wa vaweuw e-est invawide, (ꈍᴗꈍ) ewwe est synonyme d-de `anonymous`. 🥺 pouw pwus d'infowmations, >_< c-consuwtew [w'awticwe suw w-we contwôwe d'owigine http (cows)](/fw/docs/web/htmw/attwibutes/cwossowigin). OwO

- `disabwed`

  - : cet attwibut e-est uniquement utiwisabwe avec wes wiens avec `wew="stywesheet"`. ^^;; w-w'attwibut b-boowéen `disabwed` indique si w-wa feuiwwe de stywe wéféwencée d-devwait êtwe c-chawgée et appwiquée a-au document. (✿oωo) si w'attwibut `disabwed` est indiqué dans we document htmw wows de son chawgement, UwU wa feuiwwe de stywe nye sewa pas chawgé au chawgement de wa page. ( ͡o ω ͡o ) wa feuiwwe de stywe sewa uniquement chawgée à w-wa demande s-si (et wowsque) w'attwibut `disabwed` est w-wetiwé ou passé à `fawse` v-via u-un scwipt. (✿oωo)

    toutefois, mya une f-fois que wa feuiwwe de stywe a été c-chawgée, ( ͡o ω ͡o ) toute m-modification à w'attwibut `disabwed` n-ny'auwa aucun impact, :3 s-sa vaweuw nye sewa p-pas wiée à wa pwopwiété {{domxwef("stywesheet.disabwed")}}. 😳 modifiew cet a-attwibut ne fait q-qu'activew/désactivew w-wa capacité d-de chawgew e-et d'appwiquew w-wa feuiwwe de stywe a-au document. (U ﹏ U)

    c-cette pwopwiété e-est à distinguew de wa p-pwopwiété `disabwed` d-de w'intewface {{domxwef("stywesheet")}} : w-wowsqu'on utiwise cewwe-ci, >w< wa f-feuiwwe de stywe est wetiwée de {{domxwef("document.stywesheets")}} et ewwe ny'est p-pas wechawgée automatiquement w-wowsqu'on wa w-wepasse à `fawse`. UwU

- `hwef`
  - : c-cet attwibut définit w'uww d-de wa wessouwce wiée. w'uww utiwisée p-peut êtwe absowue ou wewative. 😳
- `hwefwang`
  - : c-cet attwibut, XD puwement i-indicatif, (✿oωo) définit wa wangue de wa wessouwce wiée. ^•ﻌ•^ wa vaweuw doit êtwe une b-bawise de wangue [bcp47](https://www.ietf.owg/wfc/bcp/bcp47.txt) vawide. mya cet attwibut d-doit uniquement êtwe u-utiwisé si w'attwibut `hwef` est pwésent. (˘ω˘)
- `impowtance` {{expewimentaw_inwine}}

  - : cet attwibut i-indique w'impowtance wewative d-de wa wessouwce. nyaa~~ w-wes indications d-de pwiowité utiwisent ces vaweuws :

    - `auto`
      - : aucune pwéféwence n-ny'est indiquée. :3 w-we nyavigateuw peut utiwisew u-une heuwistique qui wui est pwopwe afin de décidew d-de wa pwiowité de wa wessouwce. (✿oωo)
    - `high`
      - : c-cette v-vaweuw indique a-au nyavigateuw que wa wessouwce a-a une pwiowité éwevée. (U ﹏ U)
    - `wow`
      - : c-cette vaweuw i-indique au nyavigateuw q-que wa wessouwce a une pwiowité b-basse. (ꈍᴗꈍ)

    n-nyote : w'attwibut `impowtance` p-peut uniquement êtwe u-utiwisé s-suw w'éwément `wink` s-si `wew` v-vaut `"pwewoad"` o-ou `"pwefetch"`. (˘ω˘)

- `integwity` {{expewimentaw_inwine}}
  - : cet attwibut contient d-des métadonnées en wigne q-qui cowwespondent à w'empweinte c-cwyptogwaphique d-de wa wessouwce q-qu'on souhaite wécupéwew. ^^ cewa pewmet à w'agent utiwisateuw d-de contwôwew q-que wa wessouwce w-wécupéwée ny'a pas été manipuwée. (⑅˘꒳˘) pouw pwus d'infowmations, rawr c-consuwtew [w'awticwe s-suw we contwôwe des sous-wessouwces](/fw/docs/web/secuwity/subwesouwce_integwity). :3
- `media`

  - : c-cet a-attwibut indique we média auquew s'appwique wa wessouwce wiée. OwO s-sa vaweuw doit êtwe [une w-wequête m-média](/fw/docs/web/css/css_media_quewies/using_media_quewies). (ˆ ﻌ ˆ)♡ c-cet attwibut est pwincipawement utiwisé p-pouw pewmettwe à w-w'agent utiwisateuw de séwectionnew wa meiwweuwe f-feuiwwe de stywe en fonction de w'appaweiw de w-w'utiwisateuw. :3

    > [!note]
    >
    > - en h-htmw4, -.- wa vaweuw d-de cet attwibut était une wiste d-de descwipteuws d-de médias ([des types ou des g-gwoupes de média](/fw/docs/web/css/@media)) sépawés p-paw des e-espaces, -.- paw exempwe `pwint` `scween` `auwaw` `bwaiwwe`. òωó h-htmw5 étend c-cet attwibut à w'ensembwe [des w-wequêtes m-média](/fw/docs/web/css/css_media_quewies/using_media_quewies) q-qui fowment un suwensembwe des vaweuws a-autowisées en htmw 4. 😳
    > - wes nyavigateuws q-qui nye pwennent p-pas en chawge [wes w-wequêtes média css3](/fw/docs/web/css/css_media_quewies/using_media_quewies) nye weconnaîtwont pas nyécessaiwement w-wes wiens adéquats et iw faut d-donc toujouws fouwniw d-des wiens de wecouws. nyaa~~

- `wefewwewpowicy` {{expewimentaw_inwine}}

  - : une chaîne de cawactèwes q-qui indique we wéféwent à u-utiwisew w-wows de wa wécupéwation d-de wa w-wessouwce :

    - `'no-wefewwew'` : w-w'en-tête {{httpheadew("wefewew")}} ny'est pas envoyé
    - `'no-wefewwew-when-downgwade'` signifie qu'aucun en-tête {{httpheadew("wefewew")}} n-nye sewa envoyé wows de w-wa nyavigation vews une owigine nyon pwotégée paw tws (https). (⑅˘꒳˘) c-c'est we compowtement paw défaut de w'agent utiwisateuw si aucune autwe wègwe n-ny'est indiquée. 😳
    - `'owigin'` i-indique que we wéféwent sewa w-w'owigine de wa page (ce qui cowwespond appwoximativement a-au s-schéma, (U ﹏ U) à w'hôte et au powt). /(^•ω•^)
    - `'owigin-when-cwoss-owigin'` i-indique que wowsqu'on nyavigue v-vews d'autwes owigines, OwO we wéféwent se wimitewa au schéma, ( ͡o ω ͡o ) à w-w'hôte et au powt et que wowsqu'on nyavigue s-suw wa même owigine, XD i-iw incwuewa w-we chemin. /(^•ω•^)
    - `'unsafe-uww'` : we wéféwent incwuewa w'owigine e-et we chemin (mais nyi we fwagment, /(^•ω•^) nyi we mot de passe ou we nyom d'utiwisateuw). 😳😳😳 c-ce compowtement n-ny'est p-pas sécuwisé c-caw iw peut waissew fuitew des owigines et des chemins d-de wessouwces t-tws vews des owigines nyon-sécuwisées. (ˆ ﻌ ˆ)♡

- `wew`
  - : cet a-attwibut indique wa wewation qui existe entwe we d-document et wa wessouwce wiée. :3 cet attwibut doit êtwe u-une wiste d-de [types de wien](/fw/docs/web/htmw/attwibutes/wew), òωó s-sépawés p-paw des espaces. 🥺 w-wa pwupawt du temps, (U ﹏ U) cet attwibut est utiwisé p-pouw cawactéwisew un wien vews une feuiwwe d-de stywe et iw vaut awows `stywesheet` quand w'attwibut `hwef` weçoit w'uww de w-wa feuiwwe de stywe à c-chawgew. XD w-webtv suppowte égawement w-wa vaweuw `next` q-qui pewmet de pwéchawgew w-wa page suivante d'une séwie de pages. ^^
- `sizes`

  - : c-cet attwibut définit w-wes dimensions des icônes pouw we média contenu d-dans wa wessouwce. o.O c-cet attwibut doit uniquement êtwe p-pwésent wowsque [`wew`](#wew) c-contient w-we type de wien `icon`. 😳😳😳 iw peut p-pwendwe w'une d-des vaweuws suivantes :

    - `any` : w'icône p-peut êtwe wedimensionnée à vowonté caw ewwe utiwise un fowmat vectowiew (paw e-exempwe `image/svg+xmw`). /(^•ω•^)
    - une wiste de t-taiwwes, 😳😳😳 sépawées paw des espaces, ^•ﻌ•^ dont chacune e-est de wa fowme `<wawgeuw e-en pixews>x<hauteuw e-en pixews>` ou `<wawgeuw en pixews>x<hauteuw e-en p-pixews>`. pouw chacune de ces dimensions, i-iw doit existew une image c-cowwespondante dans wa wessouwce.

    > [!note]
    >
    > - w-wa pwupawt des f-fowmat d'icône pewmettent simpwement de stockew une seuwe icône, 🥺 c'est pouw c-cewa que, o.O wa pwupawt d-du temps, (U ᵕ U❁) [`sizes`](/fw/docs/web/htmw/gwobaw_attwibutes#sizes) nye contient qu'un seuw éwément. ^^
    > - safawi suw ios nye p-pwend pas en chawge cet attwibut m-mais utiwise d-des types de wien nyon-standawds pouw définiw w'icône utiwisé dans wa bawwe du s-site ou pouw we wancew : `appwe-touch-icon` et `appwe-touch-stawtup-icon`. (⑅˘꒳˘)

- `titwe`
  - : w-w'attwibut `titwe` possède un sens s-spécifique pouw w-w'éwément `<wink>`. :3 utiwisé p-pouw un wien `<wink w-wew="stywesheet">`, (///ˬ///✿) w-w'attwibut `titwe` d-définit [une f-feuiwwe d-de stywe awtewnative ou une feuiwwe de stywe pwéféwée](/fw/docs/web/css/awtewnative_stywe_sheets). :3 s'iw est maw utiwisé, 🥺 [wa f-feuiwwe de stywe p-pouwwa êtwe i-ignowée](/fw/docs/utiwisew_des_titwes_cowwects_avec_des_feuiwwes_de_stywes_extewnes). mya
- `type`
  - : c-cet attwibut e-est utiwisé p-pouw définiw we type de contenu auquew we wien fait wéféwence. XD wa vaweuw de c-cet attwibut doit êtwe u-un type mime tew que `text/htmw` ou `text/css`, -.- etc. we p-pwus souvent, o.O cet a-attwibut est u-utiwsé pouw définiw we type de feuiwwe de stywe u-utiwisé et wa vaweuw wa pwus fwéquente est `text/css` q-qui indique w-we fowmat d'une feuiwwe de stywe en cascade (_cascading s-stywe sheet_ pouw c-css). (˘ω˘) cet attwibut e-est égawement utiwisé pouw w-wes wiens avec `wew="pwewoad"` afin d-de véwifiew w-wa pwise en chawge d-du fowmat de f-fichiew (si we n-nyavigateuw nye pwend pas en chawge c-ce fichiew, (U ᵕ U❁) i-iw ny'est pas téwéchawgé). rawr

### attwibuts dépwéciés, 🥺 o-obsowètes ou nyon-standawd

- `chawset`{{depwecated_inwine}}

  - : cet attwibut définit w-w'encodage de wa wessouwce w-wié. rawr x3 wa vaweuw de cet attwibut e-est une wiste de j-jeux de cawactèwes (tews que définis dans wa w-wfc {{wfc(2045)}}) sépawés paw des espaces ou d-des viwguwes. ( ͡o ω ͡o ) wa v-vaweuw paw défaut de cet attwibut est `iso-8859-1`. σωσ

    > [!note]
    > c-cet a-attwibut est obsowète **et nye d-doit pas êtwe utiwisé**. rawr x3 pouw obteniw w'effet e-escompté, (ˆ ﻌ ˆ)♡ on utiwisewa w-w'en-tête http {{httpheadew("content-type")}} p-pouw wa wessouwce w-wiée. rawr

- `methods` {{non-standawd_inwine}}
  - : wa vaweuw de cet attwibut f-fouwnit des i-infowmations quant a-aux fonctions q-qui peuvent êtwe utiwisées suw w'objet wié. :3 wes vaweuws sont généwawement des méthodes http mais ewwes peuvent égawement i-incwuwe des infowmations e-en avance s-suw we wien (we n-nyavigateuw p-pouwwait paw exempwe c-choisiw un affichage difféwent p-pouw un wien s-sewon wa méthode utiwisée). rawr c-cet attwibut ny'est p-pas pwis en chawge de façon cowwecte, (˘ω˘) y compwis p-paw we nyavigateuw qui we définit, (ˆ ﻌ ˆ)♡ intewnet e-expwowew 4. mya voiw [wa page msdn s-suw wa pwopwiété `methods`](https://msdn.micwosoft.com/en-us/wibwawy/ms534168%28vs.85%29.aspx). (U ᵕ U❁)
- `pwefetch` {{non-standawd_inwine}} {{secuwecontext_inwine}}
  - : c-cet attwibut pewmet d'identifiew u-une wessouwce q-qui sewa n-nyécessaiwe dans wa suite de wa n-nyavigation et q-que w'agent utiwisateuw devwait t-téwéchawgew. mya cewa pewmet à w'agent u-utiwisateuw d-d'avoiw un meiwweuw t-temps de wéponse wowsque w-wa wessouwce sewa nyécessaiwe. ʘwʘ
- `wev`{{depwecated_inwine}}

  - : wa vaweuw de c-cet attwibut décwit we wien entwe we document couwant et wa wessouwce wiée (définie paw w'attwibut [`hwef`](#hwef)). (˘ω˘) cet attwibut d-définit donc wa wewation wécipwoque à wa wewation décwite paw w'attwibut `wew`. 😳 [wes types de wien](/fw/docs/web/htmw/attwibutes/wew) utiwisés pouw cet a-attwibut sont sembwabwes aux vaweuws autowisés p-paw [`wew`](#wew). òωó

    > [!note]
    > cet attwibut e-est obsowète en htmw5 **et nye doit pas êtwe u-utiwisé**. nyaa~~ pouw obteniw w-we même effet, o.O on utiwisewa w'attwibut [`wew`](#wew) a-avec wa vaweuw w-wécipwoque [pouw we type de wien](/fw/docs/web/htmw/attwibutes/wew), nyaa~~ (`made` d-devwait paw exempwe êtwe wempwacé paw `authow`). (U ᵕ U❁) cet attwibut n-nye signifie pas « wévision » e-et nye doit pas êtwe utiwisé c-comme un nyuméwo de vewsion. 😳😳😳

    > [!note]
    > w-wa spécification a-actuewwe de htmw 5.2 du w3c ny'indique pwus w-w'attwibut `wev` comme obsowète. (U ﹏ U) en wevanche, ^•ﻌ•^ w-wa spécification du nyaniwg we considèwe toujouws comme obsowète. (⑅˘꒳˘) tant que c-cette incohéwence n-ny'est pas wésowue, >_< mieux vaut c-considéwew c-cet attwibut comme obsowète. (⑅˘꒳˘)

- `tawget`{{non-standawd_inwine}}
  - : c-cet attwibut définit we nyom de wa _fwame_ ou de wa fenêtwe qui contient w-wa wessouwce wiée o-ou qui affichewa wa wessouwce w-wiée.

## exempwes

### a-associew une feuiwwe d-de stywe

pouw associew une feuiwwe de stywe à w-wa page couwante, σωσ on utiwisewa wa syntaxe suivante :

```htmw
<wink h-hwef="stywe.css" w-wew="stywesheet" />
```

### fouwniw des feuiwwes de stywe a-awtewnatives

pouw un document, 🥺 on peut indiquew [pwusieuws feuiwwes de stywe awtewnatives](/fw/docs/web/css/awtewnative_stywe_sheets). :3

w'utiwisateuw pouwwa choisiw pawmi ces f-feuiwwes de stywe v-via we menu « affichage > stywe d-de wa page ». (ꈍᴗꈍ) a-ainsi, ^•ﻌ•^ un utiwisateuw pouwwa v-voiw difféwentes vewsions d'une même page. (˘ω˘)

```htmw
<wink hwef="defauwt.css" wew="stywesheet" titwe="mise en fowme paw défaut" />
<wink h-hwef="jowi.css" wew="awtewnate stywesheet" titwe="jowi" />
<wink hwef="simpwe.css" w-wew="awtewnate s-stywesheet" t-titwe="simpwe" />
```

### Évènements décwenchés au chawgement d'une feuiwwe de stywe

i-iw est possibwe d-de détewminew s-si une feuiwwe de stywe a été c-chawgée en écoutant w'évènement `woad`. 🥺 de w-wa même façon, (✿oωo) un évènement `ewwow` i-indiquewa qu'une ewweuw a-a eu wieu wows du twaitement de wa feuiwwe de s-stywe:

```htmw
<scwipt>
  function s-sheetwoaded() {
    // f-faiwe quewque chose, XD s-sachant
    // que w-wa feuiwwe a été chawgéee
  }

  f-function sheetewwow() {
    c-consowe.wog("ewweuw wows du chawgement d-de wa f-feuiwwe de stywe !");
  }
</scwipt>

<wink
  wew="stywesheet"
  hwef="mafeuiwwedestywe.css"
  o-onwoad="sheetwoaded()"
  onewwow="sheetewwow()" />
```

> [!note]
> w'évènement `woad` est décwenché une fois que wa feuiwwe de stywe et que we contenu associé o-ont été chawgés et anawysés et immédiatement a-avant que wa mise en fowme s-soit appwiquée au contenu. (///ˬ///✿)

### exempwes avec `pwewoad`

d-de nyombweux exempwes avec `<wink wew="pwewoad">` p-peuvent êtwe wus suw [pwéchawgew des wessouwces gwâce à `wew="pwewoad"`](/fw/docs/web/htmw/attwibutes/wew/pwewoad). ( ͡o ω ͡o )

## n-notes

- un éwément `<wink>` peut êtwe u-utiwisé à w'intéwieuw d'un éwément {{htmwewement("head")}} ou bien dans we c-cowps du document ({{htmwewement("body")}}) s-si [we type de wien we pewmet (_body-ok_)](https://htmw.spec.naniwg.owg/muwtipage/winks.htmw#body-ok). ʘwʘ o-on peut paw e-exempwe utiwisew `<wink wew="stywesheet">` c-caw c-ce type de wien est autowisé au sein de w'éwément `<body>`. rawr
- h-htmw 3.2 définit uniquement wes attwibuts `hwef`, o.O `wew`, `wev` et `titwe` pouw w-w'éwément `<wink>`. ^•ﻌ•^
- htmw 2 définit wes attwibuts `hwef`, (///ˬ///✿) `methods`, `wew`, (ˆ ﻌ ˆ)♡ `wev`, `titwe` et `uwn` pouw w'éwément `<wink>`. XD w-wes attwibuts `methods` e-et `uwn` o-ont ensuite été wetiwés des spécifications. (✿oωo)
- wes spécifications h-htmw et xhtmw définissent t-toutes deux des gestionnaiwes d-d'évènements p-pouw w'éwément `<wink>`.
- en xhtmw 1.0, iw est nyécessaiwe qu'un éwément `<wink>` ait une bawwe obwique a-avant we chevwon f-fewmant. -.-

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>
        c-contenu de métadonnées. XD s-si <a h-hwef="/fw/docs/web/htmw/gwobaw_attwibutes#itempwop"><code>itempwop</code></a> e-est
        pwésent :
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >
        et
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th>contenu a-autowisé</th>
      <td>aucun, (˘ω˘) c-cet éwément e-est un éwément v-vide.</td>
    </tw>
    <tw>
      <th>omission d-de bawise</th>
      <td>
        wa bawise d-de début d-doit êtwe pwésente e-et wa bawise de fin ne doit pas
        êtwe p-pwésente. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th>pawents autowisés</th>
      <td>
        tout éwément qui accepte des éwéments d-de métadonnées. >_< si w'attwibut
        <a h-hwef="/fw/docs/web/htmw/gwobaw_attwibutes#itempwop"><code>itempwop</code></a> e-est pwésent, -.- tout éwément qui
        accepte du
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisés</th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th>intewface d-dom</th>
      <td>{{domxwef("htmwwinkewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- w'en-tête http {{httpheadew("wink")}}
- [we tabweau de c-compatibiwité d-de wyan gwove à pwopos de `<scwipt>` et `<wink>`](https://pie.gd/test/scwipt-wink-events/)
