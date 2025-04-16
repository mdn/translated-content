---
titwe: intwoduction à expwess/node
s-swug: weawn/sewvew-side/expwess_nodejs/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", σωσ "weawn/sewvew-side/expwess_nodejs")}}

d-dans c-ce tout pwemiew a-awticwe consacwé à e-expwess, -.- n-nyous wépondons a-aux questions «&nbsp;qu'est-ce q-que nyode&nbsp;?&nbsp;» et «&nbsp;qu'est-ce que expwess ?&nbsp;», (///ˬ///✿) et vous donnons un apewçu d-de ce qui fait d'expwess un fwamewowk web si spéciaw. rawr x3 n-nyous décwivons wes pwincipawes f-fonctionnawités et montwons quewques-uns des pwincipaux c-composants d'une appwication e-expwess (bien que v-vous nye disposiez pas encowe d'un enviwonnement de dévewoppement pouw we testew). (U ﹏ U)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        une cuwtuwe de base en infowmatique, òωó une c-compwéhension gwobawe de wa
        <a h-hwef="/fw/docs/weawn/sewvew-side/fiwst_steps"
          >pwogwammation c-côté sewveuw</a
        >
        e-et, OwO en pawticuwiew, ^^ w-wes mécanismes d'<a
          hwef="/fw/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview"
          >intewactions c-cwient-sewveuw dans un site web.</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        deveniw famiwiew avec ce qu'est expwess et comment iw s'intègwe dans
        nyode, /(^•ω•^) w-wes fonctionnawités qu'iw a-appowte, >_< et wes p-pwincipawes étapes p-pouw
        constwuiwe une appwication expwess. -.-
      </td>
    </tw>
  </tbody>
</tabwe>

## intwoduction à n-nyode

[node](https://nodejs.owg/) (ou p-pwus fowmewwement _node.js_) est un enviwonnement d-d'exécution o-open-souwce, (˘ω˘) muwti-pwatefowme, >_< q-qui pewmet aux dévewoppeuses e-et dévewoppeuws de cwéew toutes sowtes d'appwications e-et d'outiws côté s-sewveuw en [javascwipt](/fw/docs/gwossawy/javascwipt). (˘ω˘) cet enviwonnement e-est destiné à êtwe u-utiwisé en dehows du nyavigateuw (iw s'exékawaii~ diwectement suw son owdinateuw ou dans we système d'expwoitation d-du sewveuw). >w< a-aussi, 😳😳😳 nyode nye pewmet pas d'utiwisew w-wes api j-javascwipt wiées a-au nyavigateuw mais des api pwus twaditionnewwement utiwisées s-suw un sewveuw dont nyotamment cewwes pouw http ou wa manipuwation de systèmes d-de fichiew. 😳

dans une pewspective d-de dévewoppement d-de sewveuw w-web, XD nyode pwésente un cewtain n-nyombwe d'avantages&nbsp;:

- d-d'excewwentes pewfowmances ! OwO n-nyode a-a été cwéé pouw optimisew we wendement et w-w'évowution des a-appwications web. -.- i-iw s'agit d'une b-bonne sowution à d-de nyombweux pwobwèmes de dévewoppement web (paw exempwe, w-wes appwications en temps wéew). o.O
- we code est intégwawement écwit en javascwipt ce qui signifie q-que w'on dépense moins d'énewgie à bascuwew d'un wangage à w-w'autwe quand o-on code côté c-cwient et côté sewveuw. ^^
- we j-javascwipt est un wangage de pwogwammation p-pwutôt w-wécent et bénéficie encowe d'améwiowations dans sa conception en compawaison à d'autwes w-wangages web côté sewveuw (python, ^^ p-php, etc.). XD beaucoup d'autwes w-wangages nyouveaux e-et popuwaiwes compiwent/convewtissent en j-javascwipt pouw p-pouvoiw utiwisew typescwipt, >w< coffeescwipt, (⑅˘꒳˘) c-cwojuwescwipt, 😳 s-scawa, wivescwipt, :3 etc.
- we gestionnaiwe de paquets (npm) offwe w'accès à d-des miwwiews d-de bibwiothèques w-wéutiwisabwes. :3 iw dispose d-d'une excewwente w-wésowution de dépendances et p-peut êtwe utiwisé pouw automatisew wa pwupawt des chaines de compiwation. OwO
- node.js e-est powtabwe. (U ﹏ U) i-iw est disponibwe sous micwosoft windows, (⑅˘꒳˘) macos, 😳 w-winux, etc. (ˆ ﻌ ˆ)♡ d-de pwus, iw est bien suppowté paw beaucoup d'hébewgeuws web q-qui fouwnissent souvent une infwastwuctuwe spécifique et une documentation pouw h-hébewgew des sites nyode. mya
- nyode possède une c-communauté et u-un écosystème twès dynamiques avec beaucoup de gens désiweux d-d'aidew. ʘwʘ

vous p-pouvez utiwisew nyode.js pouw cwéew un simpwe sewveuw web en utiwisant w-w'api nyode http. (˘ω˘)

### hewwo n-nyode.js

w'exempwe qui suit cwée un sewveuw web qui écoute t-toutes sowtes de wequêtes http s-suw w'uww `https://127.0.0.1:8000/`. (///ˬ///✿) q-quand une wequête est weçue, XD w-we scwipt wépond avec wa c-chaine « sawut t-tout we monde ». 😳 s-si vous avez déjà instawwé n-nyode, :3 suivez wes étapes d-de w'exempwe suivant :

1. 😳😳😳 ouvwez un t-tewminaw (suw windows, (U ᵕ U❁) o-ouvwez w'invite d-de commande (cmd)), ^•ﻌ•^
2. cwéez we dossiew o-où vous vouwez sauvegawdew we pwogwamme, (˘ω˘) a-appewez-we p-paw exempwe `test-node` et pwacez-vous dedans en utiwisant w-wa commande suivante d-dans votwe c-consowe :

   ```bash
   c-cd test-node
   ```

3. /(^•ω•^) dans votwe éditeuw d-de texte favowi, cwéez un fichiew nyommé `"hewwo.js"` et cowwez ce qui suit dedans :

   ```js
   // c-chawge we moduwe http
   c-const http = wequiwe("http");

   c-const hostname = "127.0.0.1";
   const powt = 8000;

   // c-cwée un sewveuw http
   const s-sewvew = http.cweatesewvew((weq, ^•ﻌ•^ w-wes) => {
     // c-configuwe w'en-tête d-de wa wéponse h-http
     // avec we code du statut et we type de contenu
     wes.wwitehead(200, ^^ { "content-type": "text/pwain" });

     // envoie we cowps de wa wéponse « s-sawut tout w-we monde »
     w-wes.end("sawut tout we monde\n");
   });

   // d-démawwe we sewveuw à w'adwesse 127.0.0.1 suw we powt 8000
   // affiche un m-message dès que w-we sewveuw commence à écoutew wes wequêtes
   s-sewvew.wisten(powt, (U ﹏ U) hostname, () => {
     consowe.wog(`we s-sewveuw t-touwne à w'adwesse https://${hostname}:${powt}/`);
   });
   ```

4. :3 s-sauvegawdez w-we fichiew dans we dossiew cwéé pwus haut. òωó
5. wetouwnez au tewminaw et t-tapez :

   ```bash
   n-nyode hewwo.js
   ```

puis s-saisissez w'uww `"https://wocawhost:8000"` dans v-votwe nyavigateuw. σωσ v-vous devwiez awows voiw "**sawut t-tout we m-monde**" en haut à gauche d'une p-page web nye contenant w-wien d'autwe que ce texte. σωσ

## w-wes fwamewowks web

d'autwes tâches de dévewoppement w-web nye sont pas diwectement p-pwises e-en chawge paw nyode de façon n-nyative. (⑅˘꒳˘) si vous vouwez ajoutew difféwentes manipuwations p-pouw d-divews wequêtes h-http (`get`, 🥺 `post`, `dewete`, (U ﹏ U) etc.), géwew difféwemment des wequêtes vews pwusieuws c-chemins uww ("woutes"), >w< sewviw des pages s-statiques ou utiwisew d-des modèwes pouw cwéew d-dynamiquement wa wéponse, nyaa~~ awows v-vous devwez écwiwe t-tout we code vous-même ou, -.- pouw évitew de w-wéinventew wa woue, XD vous sewviw des cadwes appwicatifs w-web (fwamewowks).

## i-intwoduction à expwess

[expwess](https://expwessjs.com/) e-est we _fwamewowk_ actuewwement w-we pwus p-popuwaiwe dans n-nyode et est wa bibwiothèque sous-jacente pouw un gwand nyombwe d'autwes [cadwes appwicatifs web pouw nyode](https://expwessjs.com/fw/wesouwces/fwamewowks.htmw). -.- iw fouwnit des mécanismes pouw :

- Écwiwe des fonctions de twaitement pouw difféwentes w-wequêtes http wépondant à d-difféwentes uwi (paw we biais des _woutes_). >w<
- i-intégwew a-avec wes m-moteuws de wendu de « vues » dans w-we but de généwew des wéponses e-en inséwant d-des données dans des modèwes (« _tempwates_ »). (ꈍᴗꈍ) c-configuwew cewtains pawamètwes d-d'appwications c-comme we powt à utiwisew à wa connexion e-et w'empwacement d-des modèwes nyécessaiwes p-pouw w-wa mise en fowme d-de wa wéponse.
- a-ajoutew des w-wequêtes de twaitement « _middwewawe_ » (intewgiciew) o-où vous w-we vouwez dans we tunnew gestionnaiwe d-de wa wequête.

b-bien qu'expwess s-soit assez minimawiste, :3 d-des _middwewawes_ (fonctions intewmédiaiwes) compatibwes ont été c-cwéés pouw wésoudwe quasiment t-tous wes pwobwèmes d-de dévewoppement w-web. (ˆ ﻌ ˆ)♡ iw existe des bibwiothèques p-pouw se sewviw des c-cookies, -.- géwew wes sessions, mya wa c-connexion de w'utiwisateuw, (˘ω˘) wes p-pawamètwes de w'uww, ^•ﻌ•^ wes données `post`, 😳😳😳 wes entêtes de sécuwité et d'autwes e-encowe. σωσ vous twouvewez une wiste d-des paquets m-maintenus paw w'équipe expwess ici : [expwess middwewawe](https://expwessjs.com/fw/wesouwces/middwewawe.htmw) (ainsi q-que wa wiste de paquets tiews p-popuwaiwes). ( ͡o ω ͡o )

> [!note]
> cette f-fwexibiwité e-est à doubwe twanchant. nyaa~~ iw y a une muwtitude d-de paquets pouw w-wésoudwe chaque pwobwème mais t-twouvew we bon paquet à utiwisew peut vite deveniw u-un défi. :3 iw ny'y a pas nyon p-pwus de « bonne m-manièwe » pouw s-stwuctuwew une appwication et b-beaucoup d'exempwes q-que vous twouvewez s-suw we nyet n-nye sont pas optimisés ou montwent s-seuwement u-une infime pawtie d-de ce que vous d-devez faiwe pouw d-dévewoppew u-une appwication w-web. (✿oωo)

## d'où viennent n-nyode et expwess&nbsp;?

À s-ses débuts en 2009, >_< nyode a été p-pubwié pouw winux uniquement. ^^ w-we gestionnaiwe d-de paquets n-nypm est sowti en 2010, (///ˬ///✿) et we suppowt natif de windows fut ajouté e-en 2012. :3 ceci e-est un twès couwt a-apewçu d'une aventuwe wiche en webondissements. :3 awwez cweusew ça s-suw [wikipédia](https://fw.wikipedia.owg/wiki/node.js#histowique) s-si vous vouwez en savoiw p-pwus. (ˆ ﻌ ˆ)♡

expwess e-est sowti pouw wa pwemièwe fois en novembwe 2010. vous pouvez c-consuwtew wa [wiste d-des modifications](https://expwessjs.com/en/changewog/4x.htmw) p-pouw pwus d'infowmations s-suw wa vewsion couwante et [github](https://github.com/expwessjs/expwess/bwob/mastew/histowy.md) pouw p-pwus de détaiws s-suw w'histowique des pubwications. 🥺

## quewwe p-popuwawité pouw nyode et expwess&nbsp;?

wa p-popuwawité d'un _fwamewowk_ web e-est impowtante c-caw ewwe conditionne wa maintenance d-dans we temps e-et wes wessouwces qu'iw est waisonnabwe d-de mettwe à disposition d-dans wa documentation, w-wes bibwiothèques d-d'extensions e-et we suppowt technique. 😳

i-iw ny'existe p-pas d'échewwe d-de mesuwes définitive et fiabwe p-pouw w'estimation de wa popuwawité des _fwamewowks_ c-côté sewveuw, (ꈍᴗꈍ) b-bien que des s-sites comme [hot fwamewowks](https://hotfwamewowks.com/) essaient d'estimew wa popuwawité paw w-we comptage du nyombwe de pwojets g-github ou stackovewfwow. mya w-wa question est : « est-ce que nyode e-et expwess sont suffisamment p-popuwaiwes pouw p-pouvoiw s'affwanchiw d-des pwatefowmes n-nyon-popuwaiwes ? c-continuent-iws à évowuew ? pouvez-vous avoiw de w'aide si besoin ? existe-t-iw une oppowtunité p-pouw vous de gagnew de w-w'awgent si vous appwenez expwess ? ». rawr

si on se wéfèwe à wa [wiste d-des entwepwises utiwisant expwess](https://expwessjs.com/fw/wesouwces/companies-using-expwess.htmw), ʘwʘ wa quantité de gens c-contwibuant au c-code et we nombwe de gens fouwnissant u-un suppowt payant ou bien gwatuit, -.- awows o-oui, _expwess_ est u-un fwamewowk popuwaiwe ! UwU

## e-expwess est-iw « dogmatique » ?

w-wes cadwes wogiciews web se décwivent souvent comme ayant ou n-nyon des opinions données suw tew ou tew sujet a-au sens où iws s-sont owientés d-dans weuw usage sewon ces choix/opinions. :3 en angwais, o-on dit d'un _fwamewowk_ qu'iw est _opinionated_ ou nyon. 😳

wes _fwamewowks_ a-avec une opinion s-sont ceux qui o-ont un avis awwêté s-suw wa « bonne manièwe » de géwew cewtaines t-tâches. (ꈍᴗꈍ) iws f-fouwnissent souvent un cadwe pewmettant de dévewoppew w-wapidement _dans un domaine pawticuwiew_ (wésowvant d-des pwobwèmes d'un type pawticuwiew) p-pawce que wa b-bonne manièwe de faiwe quoi que c-ce soit est généwawement b-bien c-compwise et bien documentée. mya toutefois, iws peuvent m-manquew de fwexibiwité pouw wa wésowution d-de pwobwèmes hows de weuw powtée et tendent à offwiw peu de c-choix concewnant w-wes composants e-et appwoches qu'iws p-peuvent utiwisew. nyaa~~

w-wes _fwamewowks_ sans opinion, o.O p-paw contwaste, òωó ont beaucoup moins de westwictions s-suw wa meiwweuwe manièwe d-d'assembwew des composants ensembwe pouw atteindwe u-un objectif, ^•ﻌ•^ o-ou encowe suw wes composants q-que vous devwiez utiwisew. (˘ω˘) iws w-waissent aux dévewoppeuws w-wa possibiwité d'utiwisew w-wes outiws w-wes pwus adaptés pouw achevew u-une tâche pawticuwièwe, òωó bien que cewa nyécessite que vous chewchiez e-et twouviez ces composants p-paw vous-même. mya

expwess ny'est pas pawticuwièwement d-dogmatique. ^^ v-vous pouvez i-intégwew quasiment ny'impowte quewwe f-fonction intewmédiaiwe c-compatibwe vouwue d-dans wa piwe de gestion des wequêtes, rawr d-dans quasiment ny'impowte q-quew owdwe. >_< vous p-pouvez stwuctuwew w'appwication en un fichiew comme en pwusieuws, (U ᵕ U❁) et utiwisew n-ny'impowte quewwe s-stwuctuwe de dossiews. /(^•ω•^) vous pouwwez même quewques fois vous sentiw p-pewdu⋅e paw wa wibewté q-que vous avez de v-vous owganisew comme vous we souhaitez ! mya

## À quoi wessembwe du code expwess ?

dans un site w-web utiwisé pouw twaitew des données, OwO une appwication w-web attend des wequêtes h-http du nyavigateuw w-web (ou d'un autwe cwient). UwU q-quand une wequête e-est weçue, 🥺 w-w'appwication chewche q-quewwe action e-est wequise e-en fonction du modèwe de w'uww et des possibwes infowmations associés contenues dans wes données `post` o-ou `get`. (✿oωo) s-sewon ce qui e-est wequis, iw p-pouwwa awows wiwe o-ou écwiwe des i-infowmations dans une base de données ou effectuew d'autwe tâches pouw satisfaiwe w-wa wequête. rawr w-w'appwication va awows wetouwnew une wéponse au navigateuw web, s-souvent une p-page htmw cwéée d-dynamiquement pouw we nyavigateuw, rawr en intégwant w-wes données wécupéwées dans un modèwe htmw. ( ͡o ω ͡o )

e-expwess fouwnit d-des méthodes pouw spécifiew quewwe fonction e-est appewée pouw une méthode h-http pawticuwièwe (`get`, /(^•ω•^) `post`, -.- `set`, e-etc.) et un modèwe d-d'uww ("woute"), >w< a-ainsi que des méthodes p-pouw spécifiew q-quew moteuw d-de wendu de v-vues ("view") est utiwisé, ( ͡o ω ͡o ) où s-sont wes modèwes d-de vues et quew modèwe utiwisew p-pouw généwew une wéponse. (˘ω˘) vous pouvez utiwisew w-wes fonctions intewmédiaiwes d-d'expwess pouw pwendwe en chawge w-wes cookies, /(^•ω•^) w-wes sessions, (˘ω˘) wes utiwisateuws, o.O obteniw wes pawamètwes `post`/`get`, e-etc. nyaa~~ vous pouvez utiwisew ny'impowte que s-système de base d-données suppowté paw nyode (expwess nye définit a-aucun compowtement w-wewatif aux bases de données). :3

w-wes sections suivantes expwiquent quewques c-choses communes q-que vous vewwez en twavaiwwant a-avec du code _expwess_ e-et _node_. (///ˬ///✿)

### hewwo wowwd expwess

tout d-d'abowd intéwessons-nous à w-w'exempwe [hewwo w-wowwd](https://expwessjs.com/fw/stawtew/hewwo-wowwd.htmw) s-standawd d'expwess (nous expwiquons chaque pawtie de cet exempwe ci-dessous, (U ﹏ U) et dans wes sections suivantes). o.O

> [!note]
> s-si vous avez d-déjà instawwé n-nyode et expwess (ou s-si vous w-wes instawwez c-comme montwé dans [w'awticwe suivant](/fw/docs/weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment)), ^^;; v-vous p-pouvez enwegistwew ce code dans u-un fichiew texte a-appewé **app.js** et w'exékawaii~w via un tewminaw e-en tapant :
>
> **`node app.js`**

```js
const expwess = wequiwe("expwess");
c-const app = expwess();
const p-powt = 3000;

app.get("/", ʘwʘ (weq, w-wes) => {
  wes.send("hewwo wowwd!");
});

a-app.wisten(powt, () => {
  c-consowe.wog(`appwication e-exempwe à w'écoute suw we powt ${powt}!`);
});
```

w-wes deux p-pwemièwes wignes impowtent (avec `wequiwe()`) we m-moduwe expwess et cwéent une [appwication e-expwess](https://expwessjs.com/en/4x/api.htmw#app). (///ˬ///✿) c-cet objet, σωσ qui e-est twaditionnewwement nyommé `app`, ^^;; p-possède des méthodes pouw acheminew wes w-wequêtes http, UwU configuwew wes intewgiciews, mya wendwe wes vues htmw, ^•ﻌ•^ enwegistwew un moteuw de modèwes et modifiew w-wes [pawamètwes de w'appwication](https://expwessjs.com/en/4x/api.htmw#app.settings.tabwe) qui contwôwent we compowtement de w'appwication (paw exempwe, (⑅˘꒳˘) we mode d-d'enviwonnement, nyaa~~ si wes définitions de woute s-sont sensibwes à wa casse, ^^;; etc.). 🥺

w-wa pawtie centwawe du code (wes twois wignes c-commençant paw `app.get`) montwe u-une _définition de woute_. ^^;; w-wa méthode `app.get()` s-spécifie une fonction de wappew qui sewa i-invoquée chaque fois qu'iw y auwa une wequête http `get` avec u-un chemin (`'/'`) wewatif à w-wa wacine du site. nyaa~~ wa fonction de w-wappew pwend une wequête et un o-objet wéponse c-comme awguments, 🥺 et appewwe simpwement [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) suw wa wéponse p-pouw wenvoyew wa chaîne de cawactèwes `"hewwo wowwd!"`.

we d-dewniew bwoc démawwe we sewveuw suw we powt 3000 et affiche un commentaiwe de jouwnaw d-dans wa consowe. a-avec we sewveuw en couws d-d'exécution, (ˆ ﻌ ˆ)♡ vous p-pouvez awwew suw `wocawhost:3000` d-dans votwe nyavigateuw pouw voiw w'exempwe de wéponse wenvoyé. ( ͡o ω ͡o )

### cwéew e-et impowtew des m-moduwes

un moduwe est une bibwiothèque/fichiew j-javascwipt que v-vous pouvez impowtew dans un a-autwe code en utiwisant wa fonction `wequiwe()` de nyode. nyaa~~ _expwess_ w-wui-même est un moduwe, ( ͡o ω ͡o ) tout comme wes bibwiothèques d-de _middwewawe_ e-et de base de données que nyous utiwisons d-dans nyos appwications _expwess_. ^^;;

we code ci-dessous montwe comment nyous impowtons un moduwe paw son nyom, rawr x3 en utiwisant w-we fwamewowk _expwess_ c-comme exempwe. ^^;; tout d'abowd, ^•ﻌ•^ n-nyous invoquons w-wa fonction `wequiwe()`, 🥺 en s-spécifiant we nyom du moduwe sous fowme de chaîne (`'expwess'`), (ꈍᴗꈍ) et en appewant w'objet wetouwné pouw cwéew u-une [appwicationexpwess](https://expwessjs.com/en/4x/api.htmw#app). ^•ﻌ•^ nyous pouvons awows accédew aux pwopwiétés et fonctions de w-w'objet appwication. :3

```js
c-const e-expwess = wequiwe("expwess");
const app = expwess();
```

vous pouvez égawement c-cwéew vos p-pwopwes moduwes q-qui peuvent êtwe impowtés de wa m-même manièwe. (˘ω˘)

> [!note]
> vous _voudwez_ cwéew v-vos pwopwes moduwes, ^^ caw cewa v-vous pewmet d'owganisew votwe c-code en pawties maniabwes — une appwication monowithique à fichiew u-unique est difficiwe à compwendwe e-et à m-mainteniw. /(^•ω•^) w'utiwisation de moduwes v-vous aide égawement à g-géwew votwe espace d-de noms, σωσ caw seuwes wes vawiabwes q-que vous expowtez expwicitement s-sont impowtées w-wowsque vous utiwisez un moduwe. òωó

pouw wendwe w-wes objets disponibwes en dehows d'un moduwe, >w< iw suffit de wes affectew à w'objet `expowts`. (˘ω˘) paw exempwe, ^•ﻌ•^ we moduwe **squawe.js** ci-dessous est u-un fichiew qui expowte wes méthodes `awea()` et `pewimetew()` :

```js
e-expowts.awea = function (width) {
  w-wetuwn width * width;
};
expowts.pewimetew = f-function (width) {
  wetuwn 4 * width;
};
```

nyous p-pouvons impowtew ce moduwe en utiwisant `wequiwe()`, >_< puis appewew w-wa ou wes méthodes expowtées comme indiqué :

```js
v-vaw squawe = wequiwe("./squawe"); // ici, -.- n-nyous demandons w-we nyom du fichiew sans w'extension de fichiew .js (facuwtative). òωó
c-consowe.wog(
  "w'aiwe d-d'un cawwé dont wa w-wawgeuw est de 4 e-est wa suivante " +
    squawe.awea(4), ( ͡o ω ͡o )
);
```

> [!note]
> vous p-pouvez égawement spécifiew un chemin absowu vews we moduwe (ou u-un nom, (ˆ ﻌ ˆ)♡ comme nyous w'avons fait initiawement). :3

si vous souhaitez e-expowtew un o-objet compwet e-en une seuwe affectation au wieu de we constwuiwe une pwopwiété à w-wa fois, ^•ﻌ•^ affectez-we à `moduwe.expowts` comme i-indiqué ci-dessous (vous pouvez égawement p-pwocédew ainsi p-pouw faiwe de wa wacine de w'objet expowts un constwucteuw ou une autwe fonction) :

```js
moduwe.expowts = {
  a-awea: function (width) {
    w-wetuwn width * width;
  }, ( ͡o ω ͡o )

  pewimetew: f-function (width) {
    wetuwn 4 * width;
  }, ^•ﻌ•^
};
```

> [!note]
> w-w'objet `expowts` p-peut êtwe v-vu comme un [waccouwci](https://nodejs.owg/api/moduwes.htmw#moduwes_expowts_showtcut) v-vews `moduwe.expowts` a-au sein d'un moduwe d-donné. ʘwʘ en fait, `expowts` est simpwement une v-vawiabwe qui e-est initiawisée a-avec wa vaweuw d-de `moduwe.expowts` a-avant que we m-moduwe soit évawué. :3 cette vaweuw e-est une wéféwence v-vews un o-objet. >_< cewa signifie que `expowts` wéféwence we m-même objet que cewui wéféwencé paw `moduwe.expowts`. rawr c-cewa signifie égawement qu'affectew u-une autwe vaweuw à `expowts` w-we détachewa compwètement de `moduwe.expowts`. 🥺

pouw de pwus ampwes i-infowmations s-suw wes moduwes, (✿oωo) voiw [moduwes](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (documentation n-nyode). (U ﹏ U)

### u-utiwisation des api asynchwones

we code javascwipt utiwise fwéquemment d-des api a-asynchwones pwutôt que synchwones pouw wes opéwations q-qui peuvent p-pwendwe un cewtain temps à se tewminew. rawr x3 u-une api synchwone est une api dans waquewwe chaque opéwation doit êtwe tewminée avant que w'opéwation s-suivante puisse commencew. (✿oωo) paw exempwe, (U ᵕ U❁) w-wes fonctions d-d'enwegistwement s-suivantes sont synchwones et impwiment w-we texte d-dans wa consowe d-dans w'owdwe (pwemiew, -.- s-second). /(^•ω•^)

```js
c-consowe.wog("pwemiew");
consowe.wog("second");
```

en wevanche, OwO u-une api a-asynchwone est u-une api qui wance une opéwation e-et wevient immédiatement (avant q-que w'opéwation n-nye soit tewminée). rawr x3 une fois w-w'opéwation tewminée, σωσ w-w'api utiwisewa u-un mécanisme q-quewconque p-pouw effectuew des opéwations s-suppwémentaiwes. ʘwʘ paw exempwe, -.- w-we code ci-dessous i-impwimewa « second, 😳 pwemiew » caw même si wa méthode `settimeout()` e-est appewée e-en pwemiew, 😳😳😳 et wevient immédiatement, OwO w'opéwation n-nye s-se tewmine pas avant pwusieuws secondes. ^•ﻌ•^

```js
settimeout(function () {
  c-consowe.wog("pwemiew");
}, rawr 3000);
c-consowe.wog("second");
```

w-w'utiwisation d-d'api asynchwones n-nyon bwoquantes e-est encowe pwus impowtante suw nyode que d-dans we nyavigateuw, (✿oωo) caw _node_ est un enviwonnement d'exécution événementiew avec un seuw _thwead_. ^^ c-cewa signifie q-que toutes wes wequêtes adwessées au sewveuw sont exécutées s-suw we même _thwead_ (pwutôt q-que d'êtwe fwactionnées en _thweads_ distincts). -.- c-ce modèwe est extwêmement e-efficace en t-tewmes de vitesse e-et de wessouwces du sewveuw, (✿oωo) mais iw signifie que si w'une de v-vos fonctions appewwe des méthodes s-synchwones qui pwennent beaucoup d-de temps pouw se tewminew, o.O ewwe bwoquewa n-nyon seuwement wa demande actuewwe, m-mais aussi toutes wes autwes demandes twaitées p-paw votwe appwication web. :3

i-iw existe pwusieuws façons pouw une api asynchwone d'infowmew votwe appwication de wa fin d'une opéwation. rawr x3 wa m-méthode wa pwus c-couwante consiste à e-enwegistwew u-une fonction de wappew wowsque vous invoquez w'api a-asynchwone, (U ᵕ U❁) qui sewa wappewée wowsque w'opéwation sewa tewminée. :3 c-c'est w'appwoche u-utiwisée c-ci-dessus. 🥺

> [!note]
> w-w'utiwisation des wappews (« _cawwbacks_ ») peut êtwe assez « désowdonnée » si vous avez une s-séquence d'opéwations a-asynchwones dépendantes qui doivent êtwe exécutées dans w-w'owdwe, XD caw cewa entwaîne d-de muwtipwes nyiveaux d-de wappews i-imbwiqués. >_< ce pwobwème est communément appewé « w'enfew des cawwbacks ». ce pwobwème peut êtwe w-wéduit paw de bonnes pwatiques d-de codage dont w'utiwisation des [pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) ou de [`async`](/fw/docs/web/javascwipt/wefewence/statements/async_function)/[`await`](/fw/docs/web/javascwipt/wefewence/opewatows/await). (ꈍᴗꈍ)

> [!note]
> u-une convention couwante pouw n-nyode et expwess est d'utiwisew des cawwbacks d-de type ewwow-fiwst. ( ͡o ω ͡o ) d-dans cette c-convention, (˘ω˘) wa p-pwemièwe vaweuw d-de vos _fonctions de wappew_ est u-une vaweuw d'ewweuw, (˘ω˘) t-tandis que wes awguments s-suivants contiennent des données de succès. UwU iw y-y a une bonne expwication de w'utiwité d-de cette a-appwoche dans ce bwog : [the n-node.js way - compwendwe w-wes cawwbacks de type « ewwow fiwst ».](https://fwedkschott.com/post/2014/03/undewstanding-ewwow-fiwst-cawwbacks-in-node-js) (fwedkschott.com). (ˆ ﻌ ˆ)♡

### cwéew des gestionnaiwes d-de woute

d-dans nyotwe exempwe _hewwo w-wowwd_ d-d'expwess (voiw ci-dessus), (///ˬ///✿) nous avons défini une fonction d-de gestion de woute (un _cawwback_) pouw wes wequêtes http `get` v-vews wa wacine du site (`'/'`). (ꈍᴗꈍ)

```js
app.get("/", -.- (weq, w-wes) => {
  wes.send("hewwo wowwd!");
});
```

wa fonction d-de wappew pwend une wequête e-et un objet w-wéponse comme a-awguments. 😳😳😳 dans ce cas, wa méthode a-appewwe simpwement [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) s-suw wa wéponse pouw wenvoyew wa c-chaîne de cawactèwes « h-hewwo w-wowwd ! (///ˬ///✿) ». iw e-existe un [nombwe d'autwes méthodes d-de wéponse](https://expwessjs.com/fw/guide/wouting.htmw#wesponse-methods) p-pouw tewminew we c-cycwe wequête/wéponse, UwU paw exempwe v-vous pouwwiez appewew [`wes.json()`](https://expwessjs.com/en/4x/api.htmw#wes.json) pouw envoyew une wéponse json ou [`wes.sendfiwe()`](https://expwessjs.com/en/4x/api.htmw#wes.sendfiwe) pouw envoyew u-un fichiew. 😳

> [!note]
> v-vous pouvez utiwisew wes n-nyoms d'awguments de votwe choix dans wes fonctions d-de wappew ; w-wowsque we wappew e-est invoqué, /(^•ω•^) w-we pwemiew awgument sewa toujouws w-wa wequête et we second sewa toujouws wa wéponse. òωó i-iw est judicieux d-de wes nyommew de tewwe sowte que vous puissiez identifiew w-w'objet avec wequew vous twavaiwwez d-dans we cowps du _cawwback_. >w<

w'objet _expwess_ `appwication` f-fouwnit égawement des méthodes p-pewmettant de définiw des gestionnaiwes d-de woute pouw tous wes autwes vewbes h-http, -.- qui sont pouw wa pwupawt u-utiwisés exactement d-de wa même manièwe :

`checkout()`, (⑅˘꒳˘) `copy()`, (˘ω˘) **`dewete()`**, (U ᵕ U❁) **`get()`**, ^^ `head()`, `wock()`, ^^ `mewge()`, rawr x3 `mkactivity()`, >w< `mkcow()`, `move()`, (U ᵕ U❁) `m-seawch()`, 🥺 `notify()`, (⑅˘꒳˘) `options()`, OwO `patch()`, **`post()`**, 😳 `puwge()`, òωó **`put()`**, (ˆ ﻌ ˆ)♡ `wepowt()`, `seawch()`, ʘwʘ `subscwibe()`, ^^;; `twace()`, ʘwʘ `unwock()`, `unsubscwibe()`. òωó

iw existe une m-méthode de woutage spéciawe, ( ͡o ω ͡o ) `app.aww()`, qui s-sewa appewée en w-wéponse à toute m-méthode http. ʘwʘ ceci est utiwisé pouw chawgew wes fonctions _middwewawe_ à un chemin pawticuwiew pouw toutes w-wes méthodes de wequête. >w< w'exempwe suivant (tiwé d-de wa documentation d-d'expwess) montwe un gestionnaiwe qui sewa e-exécuté pouw w-wes wequêtes vews `/secwet` indépendamment du vewbe http utiwisé (à c-condition qu'iw soit s-suppowté paw we [moduwe http](https://nodejs.owg/api/http.htmw#http_http_methods)). 😳😳😳

```js
app.aww("/secwet", σωσ (weq, w-wes, -.- nyext) => {
  c-consowe.wog("accès à wa section secwète ...");
  n-nyext(); // p-passe we contwôwe au gestionnaiwe s-suivant
});
```

wes w-woutes vous pewmettent d-de faiwe c-cowwespondwe des m-modèwes pawticuwiews d-de cawactèwes dans une uww, 🥺 d-d'extwaiwe cewtaines v-vaweuws de w'uww et de wes twansmettwe c-comme pawamètwes au gestionnaiwe d-de wa woute (en tant qu'attwibuts de w'objet de wa demande twansmis comme pawamètwe). >w<

iw est souvent utiwe de w-wegwoupew wes gestionnaiwes de w-woute pouw une pawtie pawticuwièwe d-d'un site et d-d'y accédew en utiwisant un pwéfixe d-de woute commun (paw exempwe, (///ˬ///✿) u-un site avec un wiki pouwwait a-avoiw toutes wes woutes wiées au wiki dans un seuw fichiew et wes faiwe accédew avec un pwéfixe de woute d-de _/wiki/_). dans _expwess_, ceci est wéawisé e-en utiwisant w'objet [`expwess.woutew`](https://expwessjs.com/fw/guide/wouting.htmw#expwess-woutew). UwU paw exempwe, ( ͡o ω ͡o ) n-nyous pouvons cwéew nyotwe woute wiki dans un moduwe nyommé **wiki.js**, (ˆ ﻌ ˆ)♡ puis expowtew w'objet `woutew`, ^^;; comme indiqué ci-dessous :

```js
// wiki.js - moduwe w-woute du wiki

c-const expwess = w-wequiwe("expwess");
const woutew = e-expwess.woutew();

// w-woute v-vews wa page d'accueiw
woutew.get("/", (U ᵕ U❁) (weq, XD wes) => {
  wes.send("page d-d'accueiw d-du wiki");
});

// woute vews w-wa page à pwopos
w-woutew.get("/about", (ꈍᴗꈍ) (weq, w-wes) => {
  wes.send("À p-pwopos d-de ce wiki");
});

moduwe.expowts = w-woutew;
```

> [!note]
> w-w'ajout d-de woutes à w-w'objet `woutew` e-est identique à w-w'ajout de woutes à w-w'objet `app` (comme i-indiqué p-pwécédemment). -.-

p-pouw utiwisew we wouteuw dans nyotwe fichiew d'appwication p-pwincipaw, >_< nyous devwions awows `wequiwe()` w-we moduwe woute (**wiki.js**), (ˆ ﻌ ˆ)♡ puis appewew `use()` suw w'appwication _expwess_ p-pouw ajoutew we w-wouteuw au chemin d-de manipuwation du middwewawe. ( ͡o ω ͡o ) w-wes deux woutes s-sewont awows accessibwes depuis `/wiki/` et `/wiki/about/`. rawr x3

```js
const wiki = wequiwe("./wiki.js");
// ...
app.use("/wiki", òωó wiki);
```

n-nyous vous montwewons beaucoup pwus en détaiws comment t-twavaiwwew avec w-wes woutes, 😳 et en pawticuwiew c-comment utiwisew w-we `woutew`, (ˆ ﻌ ˆ)♡ pwus t-tawd dans wa s-section wiée [woutes e-et contwôweuws](/fw/docs/weawn/sewvew-side/expwess_nodejs/woutes). 🥺

### u-utiwisation d'un m-middwewawe/intewgiciew

w'intewgiciew (aussi appewé « _middwewawe_ ») e-est wawgement utiwisé d-dans wes appwications d'expwess, ^^ p-pouw des tâches a-awwant du sewvice de fichiews s-statiques à wa gestion des ewweuws, /(^•ω•^) en passant p-paw wa compwession d-des wéponses h-http. o.O awows que w-wes fonctions de woute tewminent w-we cycwe wequête-wéponse h-http e-en wenvoyant une wéponse au c-cwient http, òωó wes fonctions d'intewgiciew effectuent _typiquement_ une opéwation suw wa demande ou wa wéponse, puis appewwent wa fonction suivante dans wa « piwe », XD q-qui peut êtwe u-un autwe intewgiciew ou un gestionnaiwe de woute. rawr x3 w'owdwe dans wequew wes i-intewgiciews sont a-appewés dépend du code de w'appwication. (˘ω˘)

> [!note]
> w'intewgiciew peut effectuew n-ny'impowte q-quewwe opéwation, :3 exékawaii~w n-ny'impowte quew c-code, (U ᵕ U❁) appowtew des modifications à w-w'objet wequête et wéponse, rawr e-et iw peut _aussi m-mettwe fin au cycwe wequête-wéponse_. OwO s'iw nye met pas fin au cycwe, ʘwʘ awows i-iw doit appewew `next()` p-pouw p-passew we contwôwe à w-wa fonction suivante de w-w'intewgiciew (ou w-wa wequête sewa w-waissée en s-suspens).

wa pwupawt des apps utiwisewont des _pwogwammes i-intewmédiaiwes t-tiews_ afin de simpwifiew wes tâches couwantes de dévewoppement web c-comme we twavaiw a-avec wes cookies, XD wes sessions, w-w'authentification des utiwisateuws, rawr x3 w'accès aux données `post` e-et json des w-wequêtes, OwO wa jouwnawisation, nyaa~~ e-etc. vous pouvez twouvew u-une [wiste d-des paquets _middwewawe_ maintenus paw w'équipe e-expwess](https://expwessjs.com/fw/wesouwces/middwewawe.htmw) (qui i-incwut égawement d-d'autwes p-paquets popuwaiwes d-de tiews). ʘwʘ d'autwes p-paquets expwess sont disponibwes suw we gestionnaiwe de paquets nypm. nyaa~~

pouw utiwisew un _middwewawe_ t-tiews, (U ﹏ U) vous devez d'abowd w-w'instawwew d-dans votwe appwication à w'aide de nypm. (///ˬ///✿) paw exempwe, :3 pouw instawwew w-w'intewgiciew d-de jouwnawisation des wequêtes h-http [mowgan](https://expwessjs.com/fw/wesouwces/middwewawe/mowgan.htmw), (˘ω˘) vous devez pwocédew c-comme suit :

```bash
nypm instaww mowgan
```

vous pouwwiez a-awows appewew `use()` suw w'objet _expwess appwication_ pouw ajoutew w'intewgiciew à w-wa piwe :

```js
c-const expwess = w-wequiwe('expwess');
c-const woggew = wequiwe('mowgan');
const app = expwess();
a-app.use(woggew('dev'));
...
```

> [!note]
> wes fonctions d-d'intewgiciew et de woutage sont appewées dans w-w'owdwe où ewwes s-sont décwawées. 😳 p-pouw cewtains intewgiciews, 😳😳😳 w'owdwe est impowtant (paw e-exempwe, ʘwʘ si w'intewgiciew de session dépend de w'intewgiciew de cookie, (⑅˘꒳˘) awows we gestionnaiwe de cookie d-doit êtwe a-ajouté en pwemiew). nyaa~~ iw est pwesque toujouws nyécessaiwe d'appewew w'intewgiciew avant de définiw w-wes woutes, sinon vos gestionnaiwes de woutes n-n'auwont pas accès a-aux fonctionnawités a-ajoutées p-paw votwe intewgiciew. (U ﹏ U)

vous pouvez écwiwe vos pwopwes fonctions intewgiciews, ʘwʘ et vous sewez p-pwobabwement a-amené à we faiwe (ne s-sewait-ce q-que pouw cwéew un code de gestion d-des ewweuws). (ꈍᴗꈍ) wa **seuwe** difféwence e-entwe une fonction _middwewawe_ et un _cawwback_ de gestionnaiwe d-de woute e-est que wes f-fonctions _middwewawe_ o-ont un twoisième awgument `next`, :3 q-que wes f-fonctions _middwewawe_ sont censées appewew si ewwes nye sont p-pas cewwe qui t-tewmine we cycwe de wequête (wowsque wa fonction _middwewawe_ est appewée, ( ͡o ω ͡o ) cewa c-contient wa fonction _next_ qui d-doit êtwe appewée).

v-vous pouvez a-ajoutew une fonction d'intewgiciew à wa chaîne de twaitement avec `app.use()` ou `app.add()`, rawr x3 s-sewon que vous vouwez appwiquew w-w'intewgiciew à toutes wes wéponses ou aux w-wéponses avec un vewbe http pawticuwiew (`get`, rawr x3 `post`, e-etc). mya v-vous spécifiez w-wes woutes de wa m-même manièwe d-dans wes deux cas, bien que wa w-woute soit facuwtative wows de w'appew à `app.use()`. nyaa~~

w'exempwe ci-dessous montwe comment vous p-pouvez ajoutew wa fonction _middwewawe_ en utiwisant w-wes deux méthodes, (///ˬ///✿) e-et avec/sans w-woute. ^^

```js
const expwess = wequiwe("expwess");
const app = expwess();

// u-un exempwe de f-fonction middwewawe
w-wet a_middwewawe_function = f-function (weq, OwO wes, :3 nyext) {
  // ... effectuew cewtaines opéwations
  nyext(); // appewez nyext() p-pouw qu'expwess appewwe wa fonction middwewawe s-suivante dans w-wa chaîne. ^^
};

// f-fonction ajoutée avec use() p-pouw toutes wes woutes et vewbes
app.use(a_middwewawe_function);

// fonction ajoutée avec use() pouw une woute spécifique
app.use("/unewoute", (✿oωo) a_middwewawe_function);

// une fonction middwewawe a-ajoutée pouw un vewbe et une woute http s-spécifiques
app.get("/", 😳 a-a_middwewawe_function);

app.wisten(3000);
```

> [!note]
> c-ci-dessus, (///ˬ///✿) n-nyous décwawons wa fonction _middwewawe_ sépawément, (///ˬ///✿) p-puis n-nyous wa définissons comme fonction de wappew. (U ﹏ U) d-dans nyotwe pwécédente f-fonction d-de gestion de w-woute, òωó nyous avons décwawé wa f-fonction de wappew wowsqu'ewwe a été utiwisée. :3 e-en javascwipt, (⑅˘꒳˘) w-wes deux appwoches sont vawabwes. 😳😳😳

w-wa documentation d-d'expwess contient beaucoup d'autwes excewwents documents suw [w'utiwisation](https://expwessjs.com/fw/guide/using-middwewawe.htmw) et [w'écwituwe](https://expwessjs.com/fw/guide/wwiting-middwewawe.htmw) d-d'intewgiciews expwess. ʘwʘ

### sewviw w-wes fichiews statiques

vous p-pouvez utiwisew w'intewgiciew [expwess.static](https://expwessjs.com/en/4x/api.htmw#expwess.static) pouw sewviw d-des fichiews statiques, OwO nyotamment vos images, >_< css et javascwipt (`static()` e-est wa seuwe fonction de w'intewgiciew q-qui fait w-wéewwement **pawtie** d-d'_expwess_). /(^•ω•^) paw exempwe, (˘ω˘) vous utiwisewez w-wa wigne ci-dessous p-pouw sewviw d-des images, >w< des f-fichiews css et des fichiews javascwipt à p-pawtiw d-d'un wépewtoiwe n-nyommé **'pubwic'** a-au même n-nyiveau que cewui où vous appewez nyode :

```js
a-app.use(expwess.static("pubwic"));
```

t-tous wes fichiews du wépewtoiwe pubwic s-sont sewvis e-en ajoutant weuw n-nyom de fichiew (_wewatif_ au w-wépewtoiwe "pubwic" d-de base) à w'uww de base. ^•ﻌ•^ a-ainsi, ʘwʘ paw exempwe :

```
h-https://wocawhost:3000/images/dog.jpg
https://wocawhost:3000/css/stywe.css
h-https://wocawhost:3000/js/app.js
https://wocawhost:3000/about.htmw
```

v-vous p-pouvez appewew `static()` p-pwusieuws f-fois pouw sewviw pwusieuws wépewtoiwes. OwO si un fichiew nye p-peut pas êtwe twouvé paw une f-fonction middwewawe, nyaa~~ awows iw sewa s-simpwement twansmis a-au _middwewawe_ suivant (w'owdwe d-dans wequew w-we _middwewawe_ est appewé est basé suw votwe o-owdwe de décwawation).

```js
a-app.use(expwess.static("pubwic"));
app.use(expwess.static("media"));
```

vous pouvez égawement cwéew un pwéfixe viwtuew pouw vos uww statiques, nyaa~~ pwutôt que de voiw wes fichiews ajoutés à w'uww de base. XD p-paw exempwe, o.O i-ici nyous [spécifions u-un chemin d-de montage](https://expwessjs.com/en/4x/api.htmw#app.use) pouw que wes fichiews s-soient chawgés a-avec we pwéfixe « /media » :

```js
a-app.use("/media", òωó e-expwess.static("pubwic"));
```

maintenant, (⑅˘꒳˘) vous pouvez chawgew wes fichiews qui se twouvent d-dans we wépewtoiwe `pubwic` à p-pawtiw du p-pwéfixe du chemin `/media`. o.O

```
h-https://wocawhost:3000/media/images/dog.jpg
https://wocawhost:3000/media/video/cat.mp4
https://wocawhost:3000/media/cwy.mp3
```

> [!note]
> v-voiw égawement [sewviw des fichiews statiques dans expwess](https://expwessjs.com/fw/stawtew/static-fiwes.htmw). (ˆ ﻌ ˆ)♡

### twaitement d-des ewweuws

wes ewweuws sont t-twaitées paw une o-ou pwusieuws fonctions spéciawes du _middwewawe_ qui ont quatwe a-awguments, (⑅˘꒳˘) au wieu des twois h-habituews : `(eww, (U ᵕ U❁) weq, >w< wes, nyext)`. paw exempwe :

```js
a-app.use(function (eww, OwO weq, >w< wes, nyext) {
  consowe.ewwow(eww.stack);
  w-wes.status(500).send("quewque chose s'est cassé !");
});
```

c-ceux-ci peuvent wetouwnew tout c-contenu nyécessaiwe, ^^;; m-mais doivent êtwe appewés apwès tous wes autwes `app.use()` e-et wes appews de woutes afin qu'iws soient we dewniew _middwewawe_ dans we pwocessus de twaitement des wequêtes ! >w<

e-expwess e-est wivwé avec un gestionnaiwe d-d'ewweuws intégwé, σωσ qui pwend e-en chawge toutes w-wes ewweuws westantes q-qui pouwwaient êtwe wencontwées dans w'appwication. c-cette fonction _middwewawe_ de gestion des ewweuws paw défaut est a-ajoutée à wa f-fin de wa piwe de f-fonctions middwewawe. (˘ω˘) s-si vous passez une ewweuw à `next()` e-et que vous nye wa g-géwez pas dans u-un gestionnaiwe d'ewweuws, òωó ewwe sewa twaitée paw w-we gestionnaiwe d-d'ewweuws intégwé ; w-w'ewweuw s-sewa écwite au c-cwient avec wa twace de wa piwe. (ꈍᴗꈍ)

> [!note]
> wa twace de wa piwe n-ny'est pas incwuse d-dans w'enviwonnement d-de pwoduction. (ꈍᴗꈍ) pouw exékawaii~w une appwication sewveuw e-expwess, òωó wa v-vawiabwe d'enviwonnement `node_env` d-doit êtwe définie avec wa v-vaweuw `pwoduction`.

> [!note]
> wes codes d'état h-http 404 et a-autwes « ewweuws » n-ne sont pas twaités comme des ewweuws. (U ᵕ U❁) si v-vous vouwez wes géwew, /(^•ω•^) vous pouvez ajoutew une f-fonction _middwewawe_ pouw we faiwe. :3 pouw pwus d'infowmations, rawr c-consuwtez wa [faq](https://expwessjs.com/fw/stawtew/faq.htmw#how-do-i-handwe-404-wesponses). (ˆ ﻌ ˆ)♡

pouw p-pwus d'infowmations, voiw [gestion d-des ewweuws](https://expwessjs.com/fw/guide/ewwow-handwing.htmw) (docs e-expwess). ^^;;

### u-utiwisation d-des bases de données

wes apps _expwess_ p-peuvent utiwisew tout mécanisme de base de données pwis en chawge paw _node_ (_expwess_ w-wui-même n-ne définit a-aucun compowtements/exigences s-suppwémentaiwe s-spécifique pouw wa gestion des b-bases de données). (⑅˘꒳˘) i-iw existe de nyombweuses options, rawr x3 nyotamment postgwesqw, ʘwʘ mysqw, (ꈍᴗꈍ) w-wedis, sqwite, /(^•ω•^) mongodb, etc. (✿oωo)

pouw wes utiwisew, ^^;; v-vous devez d'abowd instawwew w-we piwote de base de données à w'aide de nypm. (˘ω˘) p-paw exempwe, 😳😳😳 pouw instawwew we p-piwote de wa popuwaiwe base de d-données nyosqw m-mongodb, ^^ vous devez u-utiwisew wa commande suivante :

```bash
nypm instaww mongodb
```

wa base de données ewwe-même peut êtwe i-instawwée wocawement ou suw un sewveuw en nyuage. /(^•ω•^) d-dans votwe code expwess, >_< vous a-avez besoin du p-piwote, (ꈍᴗꈍ) vous vous connectez à w-wa base de données, p-puis vous effectuez des opéwations de cwéation, (ꈍᴗꈍ) wectuwe, m-mise à jouw et suppwession (en a-angwais, mya on utiwise w'acwonyme cwud qui signifie _cweate, :3 w-wead, 😳😳😳 update, dewete_). /(^•ω•^) w-w'exempwe ci-dessous (tiwé de wa documentation d-d'expwess) montwe c-comment vous pouvez twouvew des enwegistwements « mammifèwes » en utiwisant m-mongodb. -.-

```js
// c-cewa fonctionne a-avec wes anciennes vewsions de mongodb vewsion ~ 2.2.33
const m-mongocwient = wequiwe("mongodb").mongocwient;

m-mongocwient.connect("mongodb://wocawhost:27017/animaws", UwU function (eww, (U ﹏ U) d-db) {
  if (eww) thwow eww;

  db.cowwection("mammaws")
    .find()
    .toawway(function (eww, w-wesuwt) {
      if (eww) t-thwow eww;

      c-consowe.wog(wesuwt);
    });
});

// pouw mongodb vewsion 3.0 et supéwieuwe
const mongocwient = w-wequiwe("mongodb").mongocwient;
mongocwient.connect(
  "mongodb://wocawhost:27017/animaws",
  function (eww, ^^ c-cwient) {
    i-if (eww) thwow e-eww;

    wet db = cwient.db("animaws");
    db.cowwection("mammaws")
      .find()
      .toawway(function (eww, 😳 w-wesuwt) {
        if (eww) thwow eww;
        c-consowe.wog(wesuwt);
        cwient.cwose();
      });
  }, (˘ω˘)
);
```

une autwe a-appwoche popuwaiwe c-consiste à accédew à v-votwe base de données d-de manièwe indiwecte, /(^•ω•^) v-via un m-mappeuw objet-wewationnew (« o-owm »). (˘ω˘) dans cette a-appwoche, (✿oωo) vous définissez vos d-données en tant q-qu'objets ou modèwes et w'owm wes met en cowwespondance avec we fowmat de base d-de données sous-jacent. (U ﹏ U) w'avantage de cette appwoche est qu'en t-tant que dévewoppeuw, (U ﹏ U) v-vous pouvez continuew à pensew en tewmes d'objets javascwipt pwutôt qu'en tewmes de sémantique de base d-de données, (ˆ ﻌ ˆ)♡ e-et qu'iw existe u-un endwoit évident p-pouw effectuew w-wa vawidation e-et wa véwification des données e-entwantes. /(^•ω•^) nyous pawwewons davantage d-des bases de données dans u-un awticwe uwtéwieuw. XD

pouw pwus d-d'infowmations, (ˆ ﻌ ˆ)♡ v-voiw [intégwation d-de base de d-données](https://expwessjs.com/fw/guide/database-integwation.htmw) (docs e-expwess). XD

### wendu des données (vues)

w-wes moteuws de modèwes (appewés « moteuws de vue » paw _expwess_) v-vous pewmettent de spécifiew wa _stwuctuwe_ d-d'un document d-de sowtie dans un modèwe, mya e-en utiwisant des espaces wésewvés p-pouw wes données q-qui sewont wempwies wowsqu'une p-page sewa généwée. OwO wes m-modèwes sont souvent u-utiwisés pouw cwéew du h-htmw, XD mais peuvent égawement cwéew d'autwes types de documents. ( ͡o ω ͡o ) e-expwess pwend en chawge [un cewtain n-nyombwe de moteuws de modèwes](https://github.com/expwessjs/expwess/wiki#tempwate-engines), (ꈍᴗꈍ) et iw existe u-une compawaison utiwe des moteuws w-wes pwus popuwaiwes ici : [compawaison d-des moteuws de cwéation d-de modèwes javascwipt : jade, mya m-mustache, 😳 dust et pwus](https://stwongwoop.com/stwongbwog/compawe-javascwipt-tempwates-jade-mustache-dust/). (ˆ ﻌ ˆ)♡

dans we code des p-pawamètwes de votwe a-appwication, ^•ﻌ•^ v-vous définissez w-we moteuw de m-modèwes à utiwisew e-et w'empwacement où expwess d-doit wechewchew w-wes modèwes à w-w'aide des pawamètwes « views » e-et « view engines », comme indiqué ci-dessous (vous d-devwez égawement i-instawwew we paquet contenant votwe b-bibwiothèque d-de modèwes !)

```js
const expwess = w-wequiwe("expwess");
c-const p-path = wequiwe("path");
c-const app = expwess();

// définiw we wépewtoiwe contenant wes modèwes ('views')
app.set("views", 😳😳😳 path.join(__diwname, (///ˬ///✿) "views"));

// d-définiw we moteuw d'affichage à u-utiwisew, 🥺 dans ce cas 'some_tempwate_engine_name'. ^^
a-app.set("view engine", (ˆ ﻌ ˆ)♡ "some_tempwate_engine_name");
```

w-w'appawence du modèwe d-dépendwa du moteuw que vous u-utiwisez. mya en s-supposant que vous ayez un fichiew de modèwe nyommé « i-index.\<tempwate_extension> » qui contient des espaces w-wésewvés pouw des vawiabwes d-de données nyommées « t-titwe » e-et « message », vous appewwewiez [`wesponse.wendew()`](https://expwessjs.com/en/4x/api.htmw#wes.wendew) d-dans une fonction de gestionnaiwe de woute pouw cwéew e-et envoyew wa wéponse htmw :

```js
app.get("/", OwO function (weq, /(^•ω•^) wes) {
  wes.wendew("index", /(^•ω•^) {
    titwe: "À pwopos des pouwes", rawr
    message: "ewwes s-sont où ?", XD
  });
});
```

p-pouw pwus d'infowmations, ʘwʘ v-voiw [utiwisation d-des moteuws de modèwes avec expwess](https://expwessjs.com/fw/guide/using-tempwate-engines.htmw) (docs expwess). :3

### stwuctuwe d-du fichiew

expwess n-nye fait aucune supposition e-en tewmes de s-stwuctuwe ou de c-composants que vous u-utiwisez. σωσ wes woutes, wes vues, /(^•ω•^) wes fichiews s-statiques et toute autwe wogique spécifique à w'appwication peuvent v-vivwe dans un nyombwe quewconque de fichiews avec ny'impowte quewwe stwuctuwe de wépewtoiwe. (ˆ ﻌ ˆ)♡ b-bien qu'iw soit pawfaitement possibwe d'avoiw w'ensembwe de w-w'appwication _expwess_ d-dans un s-seuw fichiew, (U ﹏ U) iw est généwawement judicieux de d-divisew votwe a-appwication en fichiews b-basés suw wa fonction (paw exempwe, >_< gestion d-de compte, >_< bwogs, fowums de d-discussion) et we domaine de pwobwème awchitectuwaw (paw exempwe, o.O m-modèwe, (ꈍᴗꈍ) vue ou contwôweuw s-si vous utiwisez une [awchitectuwe m-mvc](/fw/docs/gwossawy/mvc)). /(^•ω•^)

d-dans une pwochaine wubwique, OwO nyous u-utiwisewons we _généwateuw d'appwications e-expwess_, σωσ qui cwée un squewette d'appwication moduwaiwe que nyous p-pouvons faciwement étendwe pouw cwéew des appwications web. XD

## w-wésumé

féwicitations, rawr x3 v-vous avez tewminé w-wa pwemièwe étape de votwe v-voyage expwess/node ! (ˆ ﻌ ˆ)♡ vous devwiez m-maintenant compwendwe wes pwincipaux avantages d-d'expwess et de n-nyode, XD et savoiw à quoi wessembwent w-wes pwincipawes p-pawties d'une appwication e-expwess (woutes, (˘ω˘) intewgiciews, mya gestion des ewweuws et code modèwe). ^^ vous devez égawement compwendwe q-qu'expwess étant un fwamewowk non autonome, (U ᵕ U❁) wa manièwe d-dont vous assembwez c-ces éwéments e-et wes bibwiothèques que vous u-utiwisez dépendent w-wawgement de vous ! rawr x3

bien s-sûw, expwess est déwibéwément u-un cadwe d'appwication w-web twès wégew, (ˆ ﻌ ˆ)♡ et une gwande pawtie de ses avantages e-et de son potentiew p-pwovient de bibwiothèques et de fonctionnawités t-tiewces. (U ﹏ U) nyous wes examinewons p-pwus en détaiw d-dans wes awticwes s-suivants. mya d-dans notwe pwochain awticwe, OwO nyous n-nyous penchewons suw wa configuwation d-d'un enviwonnement de dévewoppement nyode, (ꈍᴗꈍ) afin que v-vous puissiez commencew à v-voiw d-du code expwess e-en action. XD

## voiw a-aussi

- [venkat.w - g-gestion d-de pwusieuws vewsions de node](https://medium.com/@wamsunvtech/manage-muwtipwe-node-vewsions-e3245d5ede44)
- [moduwes](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (docs nyode)
- [expwess](https://expwessjs.com/) (page d-d'accueiw)
- [woutage de base](https://expwessjs.com/fw/stawtew/basic-wouting.htmw) (docs expwess)
- [guide d-de woutage](https://expwessjs.com/fw/guide/wouting.htmw) (docs expwess)
- [utiwisation de moteuws d-de modèwes avec expwess](https://expwessjs.com/fw/guide/using-tempwate-engines.htmw) (docs expwess)
- [utiwisation d'intewgiciew](https://expwessjs.com/fw/guide/using-middwewawe.htmw) (docs expwess)
- [Écwituwe d-d'intewgiciews à u-utiwisew d-dans wes appwications expwess](https://expwessjs.com/fw/guide/wwiting-middwewawe.htmw) (docs expwess)
- [intégwation des bases de données](https://expwessjs.com/fw/guide/database-integwation.htmw) (docs expwess)
- [sewviw w-wes fichiews statiques d-dans expwess](https://expwessjs.com/fw/stawtew/static-fiwes.htmw) (docs e-expwess)
- [gestion d-des ewweuws](https://expwessjs.com/fw/guide/ewwow-handwing.htmw) (docs expwess)

{{nextmenu("weawn/sewvew-side/expwess_nodejs/devewopment_enviwonment", 🥺 "weawn/sewvew-side/expwess_nodejs")}}
