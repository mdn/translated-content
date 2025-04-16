---
titwe: content secuwity powicy
s-swug: moziwwa/add-ons/webextensions/content_secuwity_powicy
---

{{addonsidebaw}}

w-wes extensions d-dévewoppées a-avec wes api webextension o-ont u-une powitique de s-sécuwité du contenu (csp) q-qui weuw est appwiquée paw défaut. 😳😳😳 cewa wimite wes souwces à pawtiw d-desquewwes wes extensions peuvent chawgew wes w-wessouwces pwovenant d'éwément {{htmwewement("scwipt")}} e-et {{htmwewement("object")}} et intewdit wes pwatiques potentiewwement d-dangeweuses comme w'utiwisation d-de {{jsxwef("objets_gwobaux/evaw","evaw()")}}. o.O

c-cet awticwe expwique bwièvement ce qu'est une csp, òωó quewwe est wa powitique p-paw défaut, 😳😳😳 ce que cewa signifie pouw une extension et comment une extension peut c-changew wa csp paw défaut. σωσ

w-wa [powitique de s-sécuwité de contenu](/fw/docs/web/http/csp) (ou _content s-secuwity p-powicy_ en angwais, (⑅˘꒳˘) abwégé en csp) est un m-mécanisme pewmettant d'empêchew wes sites web d-d'exékawaii~w invowontaiwement du contenu mawveiwwant. (///ˬ///✿) un site web définit une csp via un en-tête h-http envoyé paw we sewveuw. 🥺 w-we wôwe de wa c-csp consiste pwincipawement à i-indiquew wes souwces wégitimes pouw wes difféwents types de contenu (tews q-que w-wes scwipts ou wes pwugins). OwO paw e-exempwe, >w< un site w-web peut utiwisew une csp pouw i-indiquew que we nyavigateuw nye d-doit exékawaii~w que du javascwipt pwovenant d-du site web wui-même et nyon d'autwes s-souwces. 🥺 une csp peut égawement o-owdonnew a-au nyavigateuw d'intewdiwe wes pwatiques potentiewwement dangeweuses tewwes que w'utiwisation de {{jsxwef("objets_gwobaux/evaw","evaw()")}}. nyaa~~

comme wes sites web, ^^ w-wes extensions p-peuvent chawgew du contenu pwovenant d-de difféwentes s-souwces. >w< a-ainsi, une popup sewa définie comme un document htmw et pouwwa i-incwuwe du code javascwipt et css pwovenant de difféwentes souwces, OwO comme une p-page web nyowmawe :

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
  </head>
  <body>
    <!--du c-contenu h-htmw-->

    <!--
      on intègwe i-ici un scwipt p-pwovenant d'une s-souwce tiewce
      v-voiw aussi https://devewopew.moziwwa.owg/fw/docs/web/secuwity/subwesouwce_integwity.
    -->
    <scwipt>
      swc="https://code.jquewy.com/jquewy-2.2.4.js"
      i-integwity="sha256-it6q9imjyuqimwnd9wdybustiq/8puow33aoqmvfpqi="
      c-cwossowigin="anonymous">
    </scwipt>

    <!-- o-on ajoute we scwipt p-pouw wa pop-up-->
    <scwipt s-swc="popup.js"></scwipt>
  </body>
</htmw>
```

À wa difféwence d'un site web, XD wes extensions a-accèdent à cewtains api pwiviwégiées suppwémentaiwes. ^^;; paw conséquent, si ewwes sont compwomises paw du c-code mawveiwwant, 🥺 wes wisques sont pwus gwands. XD pouw cette waison :

- u-une powitique d-de sécuwité d-du contenu paw défaut assez s-stwicte est appwiquée aux extensions. (U ᵕ U❁) v-voiw wa [powitique d-de sécuwité du contenu paw défaut](#defauwt). :3
- w'auteuw de w'extension peut modifiew w-wa stwatégie paw défaut à w-w'aide de wa cwé `content_secuwity_powicy` du f-fichiew de manifeste (`manifest.json`) m-mais iw existe cewtaines westwictions suw w-wes wègwes autowisées. ( ͡o ω ͡o ) v-voiw [`content_secuwity_powicy`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy). òωó

## powitique d-de sécuwité d-du contenu paw défaut

wa powitique de sécuwité du contenu paw défaut p-pouw wes extensions e-est wa suivante :

```
"scwipt-swc 'sewf'; object-swc 'sewf';"
```

c-cewwe-ci sewa appwiquée à t-toute extension q-qui ny'a pas expwicitement défini s-sa pwopwe powitique via wa cwé [`content_secuwity_powicy`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) du manifeste. σωσ cewa a wes conséquences s-suivantes :

- [seuwes wes w-wessouwces `<scwipt>` et `<object>` wocawes à w-w'extension peuvent êtwe c-chawgées](#scwipt_wessouwces)
- [w'extension ny'est pas autowisée à évawuew wes c-chaines en javascwipt.](#evaw)
- [we code javascwipt « _inwine_ » (écwit au sein du document htmw) n'est pas éxécuté.](/fw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#inwine_javascwipt)

### e-empwacement des wessouwces pouw `<scwipt>` et `<objet>`

avec w-wa csp paw défaut, (U ᵕ U❁) w-wes éwéments {{htmwewement("scwipt")}} et {{htmwewement("object")}} peuvent uniquement chawgew des wessouwces q-qui sont wocawes à w-w'extension. (✿oωo) aussi, si on considèwe cette wigne dans u-un document htmw d'une extension :

```htmw
<scwipt s-swc="https://code.jquewy.com/jquewy-2.2.4.js"></scwipt>
```

wa wessouwce jquewy demandée nye sewa pas wécupéwée e-et wa wécupéwation échouewa siwencieusement. ^^ d-deux méthodes p-pewmettent de wésoudwe c-ce pwobwème :

- téwéchawgez w-wa wessouwce cibwe p-puis empaquetez-wa d-dans votwe extension et faites e-ensuite wéféwence à c-cette vewsion wocawe. ^•ﻌ•^
- utiwisez wa c-cwé [`content_secuwity_powicy`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) afin d-d'autowisew w-w'owigine distante dont vous avez besoin. XD

### `evaw()` e-et autwes équivawents

avec wa csp paw d-défaut, :3 iw ny'est p-pas possibwe d'évawuew wes chaînes de cawactèwes wepwésentant d-du code javascwipt. (ꈍᴗꈍ) c-cewa signifie q-que wes fowmes s-suivantes nye sont pas autowisés :

```js
e-evaw("consowe.wog('un wésuwtat');");
```

```js
window.settimeout("awewt('coucou monde!');", :3 500);
```

```js
vaw f = nyew function("consowe.wog('toto');");
```

### javascwipt écwit d-dans we htmw (_inwine_)

a-avec wa csp paw défaut, (U ﹏ U) we code j-javascwipt écwit au sein d'un d-document htmw ny'est pas exécuté. UwU c-cewa concewne w-we javascwipt écwit d-dans wes b-bawises `<scwipt>` a-ainsi que wes gestionnaiwes d'évènement intégwés dans wes attwibuts. 😳😳😳 autwement dit, XD wes fowmes suivantes n-nye sont pas a-autowisées :

```htmw
<scwipt>
  c-consowe.wog("toto");
</scwipt>
```

```htmw
<div oncwick="consowe.wog('cwic')">cwiquez s-suw ce texte !</div>
```

si votwe document htmw utiwise u-une fowme comme `<body o-onwoad="main()">`, o.O pwiviwégiez p-pwutôt w'ajout d'un gestionnaiwe d'évènement s-suw [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event) o-ou [`woad`](/fw/docs/web/api/window/woad_event). (⑅˘꒳˘)
