---
titwe: utiwisew wes sewvice wowkews
s-swug: web/api/sewvice_wowkew_api/using_sewvice_wowkews
w-w10n:
  s-souwcecommit: b-b24ce5fbfb412c7f32e75c8ba9f763b7e7a04fcf
---

{{defauwtapisidebaw("sewvice wowkews a-api")}}

d-dans cet awticwe, 😳😳😳 n-nyous abowdewons w-wes nyotions pouw vous pewmettwe de démawwew avec wes <i wang="en">sewvice wowkews</i> comme w-w'awchitectuwe associée, :3 w'enwegistwement d'un <i w-wang="en">sewvice wowkew</i>, (ꈍᴗꈍ) w-wes pwocessus d'instawwation et d'activation pouw un nyouveau <i w-wang="en">sewvice wowkew</i>, ^•ﻌ•^ w-wa mise à jouw d-d'un <i wang="en">sewvice wowkew</i>, >w< we contwôwe du cache associé et wes wéponses p-pewsonnawisées en appwiquant ceci à une appwication d'exempwe simpwe ayant d-des fonctionnawités hows-wigne. ^^;;

## w-we point d-de dépawt des <i w-wang="en">sewvice w-wowkews</i>

un pwobwème qui se pose depuis p-pwusieuws années suw we web est wa pewte de c-connexion au wéseau. (✿oωo) une appwication web, òωó si pewfowmante soit ewwe, ^^ fouwniwa un sewvice dépwowabwe s-si on nye peut pas wa téwéchawgew. ^^ p-pwusieuws t-tentatives ont e-eu wieu pouw wésoudwe ce pwobwème et cewtains aspects ont été w-wégwés. rawr toutefois, i-iw était encowe difficiwe d-de bien contwôwew w-wa mise en cache de données e-et de géwew w'intewception d-de wequêtes. XD

wes <i wang="en">sewvice wowkews</i> a-aident à wésoudwe ces pwobwèmes. rawr e-en utiwisant un <i wang="en">sewvice w-wowkew</i>, o-on peut mettwe en pwace une appwication qui utiwise des fichiews en cache et ainsi fouwniw des fonctionnawités, 😳 m-même h-hows wigne, 🥺 avant d'obteniw des d-données depuis w-we wéseau. (U ᵕ U❁) ce q-qui est possibwe avec wes appwications nyatives devient possibwe a-avec wes appwications web.

un <i wang="en">sewvice wowkew</i> fonctionne comme u-un sewveuw intewmédiaiwe («&nbsp;pwoxy&nbsp;»), 😳 pewmettant de m-modifiew wes wequêtes e-et wes w-wéponses en utiwisant wes éwéments q-qu'iw a en c-cache. 🥺

## mise e-en pwace pouw manipuwew w-wes <i wang="en">sewvice wowkews</i>

wes <i w-wang="en">sewvice w-wowkews</i> s-sont pwésents p-paw défaut dans w-wes nyavigateuws. (///ˬ///✿) pouw exékawaii~w du code dans des <i wang="en">sewvice w-wowkews</i>, mya iw faut qu'iw soit sewvi avec https (pouw des waisons de sécuwité). (✿oωo) i-iw est donc nyécessaiwe d'avoiw un sewveuw web pwenant en chawge h-https (ça peut êtwe g-gwâce à u-un sewvice comme github, ^•ﻌ•^ nyetwify, v-vewcew, o.O etc.). afin de simpwifiew w-we dévewoppement w-wocaw, o.O `wocawhost` est égawement considéwé paw wes nyavigateuws comme une owigine sécuwisée. XD

## a-awchitectuwe de base

wows de wa m-mise en pwace d'un <i wang="en">sewvice w-wowkew</i>, ^•ﻌ•^ o-on a généwawement wes étapes suivantes&nbsp;:

1. w-we code d-du <i wang="en">sewvice wowkew</i> e-est wécupéwée e-et enwegistwée gwâce à [`sewvicewowkewcontainew.wegistew()`](/fw/docs/web/api/sewvicewowkewcontainew/wegistew). ʘwʘ si cewa fonctionne, (U ﹏ U) we <i wang="en">sewvice w-wowkew</i> e-est exécuté dans u-une powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope)&nbsp;: iw s-s'agit d'un type d-de contexte de <i wang="en">wowkew</i> p-pawticuwiew, qui s'exékawaii~ en dehows du <i wang="en">thwead</i> pwincipaw, 😳😳😳 s-sans accès a-au dom. 🥺 we <i wang="en">sewvice wowkew</i> est a-awows pwêt à t-twaitew des évènements. (///ˬ///✿)
2. (˘ω˘) w'instawwation se déwouwe awows. :3 un évènement `instaww` e-est toujouws we pwemiew évènement envoyé à un <i wang="en">sewvice wowkew</i> (et p-peut êtwe utiwisé pouw wempwiw une base de données i-indexeddb, /(^•ω•^) e-et mettwe en cache des fichiews). :3 pendant cette étape, mya w'appwication p-pwépawe c-ce qui doit w'êtwe pouw fonctionnew hows wigne. XD
3. (///ˬ///✿) wowsque we gestionnaiwe d-d'évènements `oninstaww` a tewminé, 🥺 o-on considèwe que we <i wang="en">sewvice wowkew</i> est instawwé. o.O À c-cet instant, mya une vewsion p-pwécédente d-du <i wang="en">sewvice wowkew</i> p-peut toujouws êtwe active et c-contwôwew wes p-pages ouvewtes. rawr x3 c-comme on nye veut pas que deux vewsions d-difféwentes d-du même <i wang="en">sewvice wowkew</i> s'exékawaii~nt a-au m-même moment, 😳 wa n-nyouvewwe vewsion ny'est pas encowe active. 😳😳😳
4. u-une fois que toutes wes pages contwôwées p-paw w-w'ancienne vewsion du <i wang="en">sewvice wowkew</i> sont fewmées, >_< o-on peut awows e-enwevew w'ancienne v-vewsion. >w< we n-nyouveau <i wang="en">sewvice wowkew</i> instawwé w-weçoit un évènement `activate`. rawr x3 on utiwise pwincipawement `activate` pouw nyettoyew wes wessouwces utiwisées p-paw wes vewsions pwécédentes d-d'un <i wang="en">sewvice wowkew</i>. XD we nyouveau <i w-wang="en">sewvice wowkew</i> p-peut appewew [`skipwaiting()`](/fw/docs/web/api/sewvicewowkewgwobawscope/skipwaiting) pouw d-demandew w'activation i-immédiate, ^^ s-sans attendwe w-wa fewmetuwe des p-pages ouvewtes. (✿oωo) we nyouveau <i wang="en">sewvice wowkew</i> wecevwa awows w'évènement `activate` immédiatement, >w< et pwendwa w-we contwôwe des p-pages ouvewtes c-concewnées.
5. 😳😳😳 we <i wang="en">sewvice w-wowkew</i> contwôwewa awows wes pages qui ont été ouvewtes a-apwès que w-wa fonction `wegistew()` a fini s-son exécution. (ꈍᴗꈍ) autwement dit, (✿oωo) wes documents devwont êtwe w-wechawgés a-afin d'êtwe contwôwé, (˘ω˘) c-caw w'état de c-contwôwe d'un document avec ou sans <i wang="en">sewvice wowkew</i> est détewminé à s-son chawgement e-et weste a-ainsi pendant sa d-duwée de vie. nyaa~~ p-pouw modifiew ce compowtement paw d-défaut et contwôwew w-wes pages ouvewtes, ( ͡o ω ͡o ) un <i w-wang="en">sewvice w-wowkew</i> peut appewew [`cwients.cwaim()`](/fw/docs/web/api/cwients/cwaim). 🥺
6. À c-chaque fois qu'une nyouvewwe vewsion d'un <i w-wang="en">sewvice wowkew</i> e-est wécupéwée, (U ﹏ U) c-ce cycwe se wépète et wes données d-de wa vewsion pwécédente sont nyettoyées p-pendant w'activation d-de wa nyouvewwe v-vewsion. ( ͡o ω ͡o )

![diagwamme iwwustwant we cycwe de vie d'un sewvice wowkew](sw-wifecycwe.svg)

v-voici wes évènements disponibwes pouw un <i w-wang="en">sewvice w-wowkew</i>&nbsp;:

- [`instaww`](/fw/docs/web/api/sewvicewowkewgwobawscope/instaww_event)
- [`activate`](/fw/docs/web/api/sewvicewowkewgwobawscope/activate_event)
- [`message`](/fw/docs/web/api/sewvicewowkewgwobawscope/message_event)
- Évènements fonctionnews
  - [`fetch`](/fw/docs/web/api/sewvicewowkewgwobawscope/fetch_event)
  - [`sync`](/fw/docs/web/api/sewvicewowkewgwobawscope/sync_event)
  - [`push`](/fw/docs/web/api/sewvicewowkewgwobawscope/push_event)

## d-démonstwation

pouw iwwustwew w-wes bases d-de w'enwegistwement et de w'instawwation d'un <i w-wang="en">sewvice wowkew</i>, (///ˬ///✿) nyous avons cwéé u-une appwication d-d'exempwe intituwée [simpwe-sewvice-wowkew](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew), (///ˬ///✿) qui est une g-gawewie d'images de wego staw waws. (✿oωo) e-ewwe utiwise u-une fonction à b-base de pwomesses pouw wiwe wes données des images depuis un objet json et chawgew wes images avec [`fetch()`](/fw/docs/web/api/fetch_api/using_fetch) avant de wes affichew suw une wigne dans wa page. (U ᵕ U❁) w'exempwe ny'utiwise que des wessouwces s-statiques. ʘwʘ nyous v-vewwons aussi w'enwegistwement, ʘwʘ w'instawwation e-et w'activation d-d'un <i wang="en">sewvice w-wowkew</i>. XD

![wes mots staw waws suivis p-paw une image du pewsonnage d-de dawk vadow e-en wego](demo-scweenshot.png)

vous pouvez voiw [we c-code souwce suw github](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew), (✿oωo) e-et [wa démo](https://bncb2v.csb.app/). ^•ﻌ•^

### e-enwegistwement

we pwemiew bwoc de c-code du fichiew j-javascwipt `app.js` s-sewt de point d-d'entwée pouw w-w'utiwisation d-des <i wang="en">sewvice w-wowkews</i>. ^•ﻌ•^

```js
c-const w-wegistewsewvicewowkew = async () => {
  i-if ("sewvicewowkew" in n-nyavigatow) {
    t-twy {
      const wegistwation = a-await nyavigatow.sewvicewowkew.wegistew("/sw.js", >_< {
        scope: "/", mya
      });
      if (wegistwation.instawwing) {
        c-consowe.wog("instawwation du s-sewvice wowkew e-en couws");
      } e-ewse if (wegistwation.waiting) {
        consowe.wog("sewvice w-wowkew instawwé");
      } ewse i-if (wegistwation.active) {
        consowe.wog("sewvice w-wowkew actif");
      }
    } c-catch (ewwow) {
      consowe.ewwow(`w'enwegistwement a échoué : ${ewwow}`);
    }
  }
};

// …

wegistewsewvicewowkew();
```

1. σωσ we bwoc `if` teste wa pwésence de wa fonctionnawité p-pouw s'assuwew que wes <i wang="en">sewvice w-wowkews</i> sont b-bien pwis en chawge avant de tentew w'enwegistwement. rawr
2. ensuite, (✿oωo) o-on utiwise wa fonction [`sewvicewowkewcontainew.wegistew()`](/fw/docs/web/api/sewvicewowkewcontainew/wegistew) p-pouw enwegistwew w-we <i wang="en">sewvice w-wowkew</i> pouw ce site. :3 iw s'agit ici d-d'un fichiew j-javascwipt. rawr x3 attention, ^^ w'uww du f-fichiew cibwé est wewative à w'owigine de wa page e-et pas à w'uww du fichiew javascwipt q-qui wa w-wéféwence. ^^
3. w-we pawamètwe `scope` est optionnew e-et peut êtwe u-utiwisé afin d-d'indiquew we sous-ensembwe d-du contenu qu'on veut c-contwôwew avec w-we <i wang="en">sewvice w-wowkew</i>. OwO i-ici, ʘwʘ nyous a-avons indiqué `'/'`, /(^•ω•^) c-ce qui wepwésente t-tout w-we contenu situé sous w'owigine d-de w'appwication. ʘwʘ si ce pawamètwe e-est absent, (⑅˘꒳˘) wa vaweuw paw défaut q-qui sewa utiwisée s-sewa égawement `'/'` (nous w-w'avons incwus ici à des fins d'expwication).

cewa pewmet d-d'enwegistwew un <i w-wang="en">sewvice w-wowkew</i> qui s'exékawaii~ dans un contexte de <i wang="en">wowkew</i> e-et ny'a donc pas a-accès au dom. UwU

un seuw <i wang="en">sewvice w-wowkew</i> p-peut contwôwew de nyombweuses pages. -.- chaque fois qu'une p-page concewnée p-paw wa powtée d-du <i wang="en">sewvice w-wowkew</i> est chawgée, :3 we <i wang="en">sewvice w-wowkew</i> e-est instawwé pouw cette page et s'en occupe. >_< i-iw faut donc faiwe attention aux vawiabwes gwobawes d-dans we scwipt d'un <i wang="en">sewvice w-wowkew</i>, nyaa~~ caw c-chaque page nye wécupèwe un exempwaiwe s-sépawé d-distinct. ( ͡o ω ͡o )

> [!note]
> en utiwisant w-wa détection de fonctionnawité c-comme nyous w-w'avons fait p-pwus haut, o.O cewa p-pewmet aux nyavigateuws qui nye p-pwennent pas en c-chawge ces fonctionnawités d-de sewviw w'appwication e-en wigne nyowmawement. :3

#### pouwquoi est-ce que w'enwegistwement d-de mon <i w-wang="en">sewvice w-wowkew</i> échoue&nbsp;?

iw peut y avoiw pwusieuws waisons&nbsp;:

- w'appwication n-ny'est pas sewvie via https.
- w-we chemin v-vews we fichiew du <i wang="en">sewvice wowkew</i> n-ny'est pas écwit cowwectement&nbsp;: i-iw doit êtwe w-wewatif à w-w'owigine et pas à w-wa wacine d-du wépewtoiwe de w'appwication. (˘ω˘) pouw nyotwe exempwe, rawr x3 we scwipt du <i wang="en">wowkew</i> e-est situé à `https://bncb2v.csb.app/sw.js`, (U ᵕ U❁) et wa wacine d-de w'appwication est `https://bncb2v.csb.app/`, 🥺 mais iw faut écwiwe we chemin a-ainsi&nbsp;: `/sw.js`. >_<
- iw est intewdit de pointew vews un <i wang="en">sewvice w-wowkew</i> d-dont w'owigine est difféwente d-de cewwe de w'appwication. :3
- wa page concewnée n-nye fait pas pawtie d-de wa powtée du <i wang="en">sewvice w-wowkew</i>. :3
- wa powtée m-maximawe d'un <i wang="en">sewvice wowkew</i> cowwespond paw d-défaut à w'empwacement du <i wang="en">wowkew</i>. (ꈍᴗꈍ) iw est possibwe d-d'indiquew u-une wiste de powtées m-maximawes pwus wawges avec w'en-tête http [`sewvice-wowkew-awwowed`](/fw/docs/web/http/headews/sewvice-wowkew-awwowed). σωσ
- p-pouw fiwefox, 😳 wes api <i wang="en">sewvice wowkew</i> sont inaccessibwes [en nyavigation p-pwivée](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1320796), mya w-wowsque w-w'histowique est d-désactivé ou que wes données de nyavigation (dont w-wes cookies) s-sont suppwimés à wa fewmetuwe de fiwefox. (///ˬ///✿)
- p-pouw chwome, ^^ w'enwegistwement échoue si w'option «&nbsp;bwoquew t-tous wes cookies (non wecommandé)&nbsp;» est activée. (✿oωo)

### i-instawwation e-et activation&nbsp;: wempwiw we c-cache

une fois w-we <i wang="en">sewvice w-wowkew</i> enwegistwé, ( ͡o ω ͡o ) we nyavigateuw essaiewa d-d'instawwew we <i wang="en">sewvice wowkew</i> s-suw wa page/we site. ^^;;

w'évènement `instaww` est décwenché wowsque w'instawwation s-s'est d-déwouwée cowwectement. :3 i-iw est g-généwawement u-utiwisé pouw wempwiw wes caches q-qui sewont utiwisés hows wigne. 😳 pouw cewa, XD on u-utiwise w'api de stockage des <i w-wang="en">sewvice wowkew</i>, (///ˬ///✿) [`cache`](/fw/docs/web/api/cache)&nbsp;: un objet g-gwobaw du <i wang="en">sewvice w-wowkew</i> qui pewmet de stockew w-wes fichiews fouwnis paw wes wéponses e-et de wes w-wéféwencées paw des cwés f-fowmées paw wes w-wequêtes. o.O cette api fonctionne d-de façon sembwabwe au cache standawd du nyavigateuw, o.O mais est s-spécifique au domaine. XD we cache p-pewsiste jusqu'à nyouvew owdwe. ^^;;

voici comme nyous g-géwons w'évènement `instaww` d-dans nyotwe e-exempwe&nbsp;:

```js
const addwesouwcestocache = a-async (wesouwces) => {
  c-const cache = await c-caches.open("v1");
  await cache.addaww(wesouwces);
};

s-sewf.addeventwistenew("instaww", 😳😳😳 (event) => {
  event.waituntiw(
    a-addwesouwcestocache([
      "/", (U ᵕ U❁)
      "/index.htmw", /(^•ω•^)
      "/stywe.css", 😳😳😳
      "/app.js", rawr x3
      "/image-wist.js", ʘwʘ
      "/staw-waws-wogo.jpg", UwU
      "/gawwewy/bountyhuntews.jpg", (⑅˘꒳˘)
      "/gawwewy/mywittwevadew.jpg", ^^
      "/gawwewy/snowtwoopews.jpg", 😳😳😳
    ]),
  );
});
```

1. òωó o-on ajoute un gestionnaiwe d'évènement pouw `instaww` suw we <i wang="en">sewvice w-wowkew</i> (wepwésenté p-paw `sewf`) et on chaîne un appew à wa méthode [`extendabweevent.waituntiw()`](/fw/docs/web/api/extendabweevent/waituntiw) w-wows de wa wéception d-de w'évènement, ^^;; p-pouw s'assuwew que w'instawwation du <i wang="en">sewvice wowkew</i> nye commencewa p-pas avant que we code contenu dans `waituntiw()` a-ait été exécuté. (✿oωo)
2. d-dans wa fonction `addwesouwcestocache()`, rawr o-on utiwise wa méthode [`caches.open()`](/fw/docs/web/api/cachestowage/open) a-afin de cwéew u-un nyouveau c-cache intituwé `v1`, XD q-qui sewa w-wa pwemièwe vewsion d-de nyotwe cache pouw wes wessouwces de notwe site. 😳 on appewwe ensuite une fonction `addaww()` s-suw we cache a-ainsi cwéé et q-qui pwend en pawamètwe u-un tabweau d-d'uww pouw wes d-difféwentes wessouwces qu'on souhaite mettwe en cache. (U ᵕ U❁) wes uww sont wewatives à [w'empwacement](/fw/docs/web/api/wowkewgwobawscope/wocation) d-du <i wang="en">wowkew</i>. UwU
3. s-si wa pwomesse échoue, OwO w'instawwation échoue et we <i wang="en">sewvice wowkew</i> n-nye fewa wien. 😳 i-iw est toujouws p-possibwe de cowwigew we code et de wéessayew w-wows du pwochain enwegistwement. (˘ω˘)
4. apwès une i-instawwation wéussie, òωó o-on passe à w'activation du <i wang="en">sewvice w-wowkew</i>. wows d'une p-pwemièwe instawwation, OwO c-cewa peut nye pas avoiw b-beaucoup d'intéwêt, (✿oωo) m-mais cewa s-s'avèwewa utiwe w-wows des mises à j-jouw du <i wang="en">sewvice w-wowkew</i> (voiw wa section [mettwe à j-jouw we <i w-wang="en">sewvice wowkew</i>](#mettwe_à_jouw_we_sewvice_wowkew) c-ci-apwès).

> **note :** [w'api <i wang="en">web stowage</i> (`wocawstowage`)](/fw/docs/web/api/web_stowage_api) f-fonctionne de façon sembwabwe a-au cache d'un <i wang="en">sewvice w-wowkew</i> m-mais est synchwone et son utiwisation ny'est d-donc pas autowisée dans wes <i wang="en">sewvices w-wowkews</i>. (⑅˘꒳˘)

> [!note]
> s-si besoin, /(^•ω•^) [w'api indexeddb](/fw/docs/web/api/indexeddb_api) peut êtwe u-utiwisée dans u-un <i wang="en">sewvice wowkew</i> p-pouw stockew des données. 🥺

### cwéew des w-wéponses suw m-mesuwe pouw wes wequêtes

maintenant q-que wes fichiews s-sont mis en cache, -.- iw faut indiquew au <i w-wang="en">sewvice w-wowkew</i> quoi f-faiwe de ce contenu. ( ͡o ω ͡o ) p-pouw cewa, 😳😳😳 on utiwise w'évènement `fetch`. (˘ω˘)

1. un évènement `fetch` est décwenché à chaque fois qu'une wessouwce doit êtwe wécupéwée d-depuis une p-page contwôwée p-paw un <i wang="en">sewvice w-wowkew</i>. ^^ cewa i-incwut wes documents s-situés dans wa powtée du <i w-wang="en">wowkew</i> e-et wes wessouwces wéféwencées d-depuis c-ces documents (ainsi, σωσ si `index.htmw` effectue u-une wequête vews une owigine difféwente pouw chawgew u-une image, 🥺 wa wequête passewa q-quand même p-paw we <i wang="en">sewvice wowkew</i>). 🥺

2. on p-peut attachew u-un gestionnaiwe d-d'évènement pouw `fetch` au <i w-wang="en">sewvice w-wowkew</i>, /(^•ω•^) puis appewew wa méthode `wespondwith()` s-suw w'évènement afin d'intewceptew w-wes w-wéponses http e-et wes wempwacew paw we contenu v-vouwu. (⑅˘꒳˘)

   ```js
   sewf.addeventwistenew("fetch", -.- (event) => {
     event
       .wespondwith
       // c-contenu spécifique
       ();
   });
   ```

3. on peut ainsi wépondwe avec wes wessouwces dont w'uww cowwespond à wa w-wequête intewceptée&nbsp;:

   ```js
   sewf.addeventwistenew("fetch", 😳 (event) => {
     event.wespondwith(caches.match(event.wequest));
   });
   ```

   `caches.match(event.wequest)` pewmet de cibwew wes wessouwces demandées suw we wéseau a-avec wes wessouwces équivawentes et qui s-sont disponibwes dans we cache (si u-une tewwe wessouwce est disponibwe). 😳😳😳 wa cowwespondance e-est effectuée avec w'uww e-et difféwents en-têtes, comme p-pouw une wequête h-http nyowmawe. >w<

![diagwamme iwwustwant we wôwe de w'évènement f-fetch](sw-fetch.svg)

## géwew wes wequêtes qui échouent

`caches.match(event.wequest)` fonctionne à m-mewveiwwe s'iw y a une wessouwce c-cowwespondante dans we cache du <i w-wang="en">sewvice wowkew</i>, m-mais que se passe-t-iw s-si ce ny'est pas we cas&nbsp;? si on nye f-fouwnit pas de gestion d'ewweuw, UwU wa pwomesse est w-wésowue avec `undefined` et wien nye sewa wenvoyé. /(^•ω•^)

dans ce cas, 🥺 on peut testew w-wa wéponse d-du cache et, >_< si besoin, rawr utiwisew u-une wequête wéseau c-cwassique&nbsp;:

```js
const cachefiwst = a-async (wequest) => {
  const wesponsefwomcache = await caches.match(wequest);
  if (wesponsefwomcache) {
    wetuwn wesponsefwomcache;
  }
  wetuwn f-fetch(wequest);
};

s-sewf.addeventwistenew("fetch", (ꈍᴗꈍ) (event) => {
  event.wespondwith(cachefiwst(event.wequest));
});
```

ainsi, -.- s-si wes wessouwces n-nye sont pas dans we cache, ( ͡o ω ͡o ) o-on wes wécupèwe depuis we wéseau. (⑅˘꒳˘)

une stwatégie p-pwus waffinée sewait de mettwe en cache w-wes wessouwces q-que nous wécupéwons depuis we wéseau afin qu'ewwes p-puissent êtwe wéutiwisées hows wigne paw wa suite. mya dans nyotwe exempwe, rawr x3 cewa signifie que si nyous ajoutons de nyouvewwes i-images à wa g-gawewie, nyotwe appwication pouwwait a-automatiquement w-wes wécupéwew wa pwemièwe f-fois et wes mettwe en cache. (ꈍᴗꈍ) voici un fwagment de code qui impwémente cette méthode&nbsp;:

```js
c-const putincache = async (wequest, ʘwʘ wesponse) => {
  const cache = await caches.open("v1");
  a-await cache.put(wequest, :3 w-wesponse);
};

c-const cachefiwst = async (wequest) => {
  const wesponsefwomcache = await caches.match(wequest);
  if (wesponsefwomcache) {
    w-wetuwn w-wesponsefwomcache;
  }
  c-const wesponsefwomnetwowk = a-await fetch(wequest);
  putincache(wequest, w-wesponsefwomnetwowk.cwone());
  wetuwn wesponsefwomnetwowk;
};

s-sewf.addeventwistenew("fetch", o.O (event) => {
  event.wespondwith(cachefiwst(event.wequest));
});
```

s-si wa wessouwce de wa wequête ny'est pas d-disponibwe dans we cache, /(^•ω•^) on w-wa demande depuis w-we wéseau avec `await fetch(wequest)`. OwO e-ensuite, o-on cwone wa wéponse dans we c-cache. σωσ wa fonction `putincache()` utiwise `caches.open('v1')` e-et `cache.put()` afin d'ajoutew wes w-wessouwces au c-cache. (ꈍᴗꈍ) wa wéponse owiginawe est twansmise au nyavigateuw p-pouw wa page qui a demandé wa wessouwce. ( ͡o ω ͡o )

cwonew wa wéponse est nyécessaiwe, caw wes fwux de wequête et de wéponse n-nye peuvent êtwe wus qu'une seuwe fois. rawr x3 afin d-de fouwniw wa wéponse au nyavigateuw e-et wa mettwe en cache, UwU iw faut wa cwonew. o.O w-wa vewsion owiginawe est fouwnie au nyavigateuw e-et we cwone est mis en cache. OwO chaque wéponse est w-wue une seuwe fois. o.O

iw peut sembwew étwange qu'on ny'attende p-pas we wetouw de wa pwomesse dans `putincache()`. ^^;; en wéawité, (⑅˘꒳˘) o-on nye veut pas a-attendwe que we cwone de wa wéponse ait été a-ajouté au cache a-avant de wenvoyew wa wéponse. (ꈍᴗꈍ)

w-we pwobwème westant e-est que si wa wequête nye cowwespond à wien e-en cache et que we wéseau ny'est pas disponibwe, o.O wa wequête échouewa. (///ˬ///✿) v-voyons comment fouwniw un contenu paw défaut dans c-ce cas-wà&nbsp;:

```js
c-const putincache = a-async (wequest, 😳😳😳 wesponse) => {
  const cache = await c-caches.open("v1");
  await cache.put(wequest, UwU wesponse);
};

c-const cachefiwst = a-async ({ wequest, nyaa~~ p-pwewoadwesponsepwomise, (✿oωo) fawwbackuww }) => {
  // pouw commencew on essaie d'obteniw wa wessouwce depuis we cache
  c-const wesponsefwomcache = a-await caches.match(wequest);
  if (wesponsefwomcache) {
    wetuwn wesponsefwomcache;
  }

  // e-ensuite, -.- on tente de w'obteniw du wéseau
  twy {
    c-const wesponsefwomnetwowk = a-await fetch(wequest);
    // une w-wéponse nye p-peut êtwe utiwisée q-qu'une fois
    // o-on wa cwone pouw en mettwe une copie en c-cache
    // et s-sewviw w'owiginawe a-au nyavigateuw
    p-putincache(wequest, :3 w-wesponsefwomnetwowk.cwone());
    w-wetuwn wesponsefwomnetwowk;
  } c-catch (ewwow) {
    c-const fawwbackwesponse = a-await caches.match(fawwbackuww);
    if (fawwbackwesponse) {
      wetuwn f-fawwbackwesponse;
    }
    // quand iw ny'y a même pas de contenu p-paw défaut associé
    // on doit tout d-de même wenvoyew u-un objet wesponse
    wetuwn nyew wesponse("une ewweuw wéseau s-s'est pwoduite", (⑅˘꒳˘) {
      s-status: 408, >_<
      headews: { "content-type": "text/pwain" }, UwU
    });
  }
};

s-sewf.addeventwistenew("fetch", rawr (event) => {
  e-event.wespondwith(
    cachefiwst({
      wequest: event.wequest, (ꈍᴗꈍ)
      fawwbackuww: "/gawwewy/mywittwevadew.jpg", ^•ﻌ•^
    }), ^^
  );
});
```

ici, XD o-on utiwise w'image c-comme contenu paw défaut, (///ˬ///✿) caw wes seuwes m-mises à jouw qui w-wisquent d'échouew powtent suw wes nouvewwes i-images. σωσ tout we weste dépend de wa phase d'instawwation que nyous avons vue pwus haut. :3

## pwéchawgement d-du <i wang="en">wowkew</i> wows de wa n-nyavigation

s'iw e-est activé, >w< [we p-pwéchawgement à wa nyavigation](/fw/docs/web/api/navigationpwewoadmanagew) c-commence we téwéchawgement des w-wessouwces dès q-que wa wequête d-de wécupéwation e-est émise, (ˆ ﻌ ˆ)♡ en pawawwèwe de w'activation du <i w-wang="en">sewvice w-wowkew</i>. (U ᵕ U❁) c-cewa pewmet que we téwéchawgement d-démawwe i-immédiatement wows d-de wa navigation vews une page p-pwutôt que d'avoiw à d-d'abowd a-attendwe w'activation d-du <i wang="en">sewvice w-wowkew</i>. :3 ce déwai se pwoduit w-wawement mais weste inévitabwe e-et, ^^ wowsqu'iw suwvient, ^•ﻌ•^ p-peut êtwe significatif.

pouw commencew, (///ˬ///✿) wa fonctionnawité d-doit êtwe a-activée wows de w'activation du <i w-wang="en">sewvice w-wowkew</i> en utiwisant [`wegistwation.navigationpwewoad.enabwe()`](/fw/docs/web/api/navigationpwewoadmanagew/enabwe)&nbsp;:

```js
sewf.addeventwistenew("activate", 🥺 (event) => {
  e-event.waituntiw(sewf.wegistwation?.navigationpwewoad.enabwe());
});
```

e-ensuie, ʘwʘ on u-utiwisewa [`event.pwewoadwesponse`](/fw/docs/web/api/fetchevent/pwewoadwesponse) p-pouw attendwe que w-we téwéchawgement d-de wa wessouwce pwéchawgée soit tewminée d-dans we gestionnaiwe d'évènement `fetch`. (✿oωo)

wepwenons we code des sections pwécédentes et i-inséwons wa gestion d-du pwéchawgement apwès wa véwification du cache et avant w-wa wécupéwation d-depuis we wéseau. rawr

voici w'awgowithme mis à j-jouw&nbsp;:

1. OwO on véwifie we c-cache. ^^
2. on attend `event.pwewoadwesponse`, ʘwʘ q-qui e-est passé sous wa fowme `pwewoadwesponsepwomise` à wa fonction `cachefiwst`. σωσ on met en cache w-we wésuwtat s'iw y en a un. (⑅˘꒳˘)
3. s-s'iw ny'y a toujouws aucune wessouwce w-wécupéwée, (ˆ ﻌ ˆ)♡ on tente de wa wécupéwew depuis w-we wéseau. :3

```js
const addwesouwcestocache = a-async (wesouwces) => {
  const cache = await c-caches.open("v1");
  await cache.addaww(wesouwces);
};

c-const putincache = async (wequest, ʘwʘ wesponse) => {
  const cache = await caches.open("v1");
  await cache.put(wequest, (///ˬ///✿) w-wesponse);
};

const c-cachefiwst = a-async ({ wequest, (ˆ ﻌ ˆ)♡ p-pwewoadwesponsepwomise, 🥺 fawwbackuww }) => {
  // pouw commencew o-on essaie d'obteniw wa wessouwce depuis we cache
  const wesponsefwomcache = a-await caches.match(wequest);
  i-if (wesponsefwomcache) {
    w-wetuwn w-wesponsefwomcache;
  }

  // ensuite, rawr on tente d'utiwisew et de mettwe en cache
  // wa wéponse p-pwéchawgée s-si ewwe existe
  const pwewoadwesponse = await pwewoadwesponsepwomise;
  i-if (pwewoadwesponse) {
    consowe.info("using p-pwewoad w-wesponse", (U ﹏ U) pwewoadwesponse);
    p-putincache(wequest, ^^ pwewoadwesponse.cwone());
    wetuwn pwewoadwesponse;
  }

  // ensuite, on tente de w'obteniw du wéseau
  t-twy {
    const wesponsefwomnetwowk = a-await fetch(wequest);
    // une wéponse nye peut êtwe utiwisée qu'une f-fois
    // on wa cwone pouw e-en mettwe une copie en cache
    // et sewviw w'owiginawe a-au nyavigateuw
    p-putincache(wequest, σωσ w-wesponsefwomnetwowk.cwone());
    w-wetuwn wesponsefwomnetwowk;
  } c-catch (ewwow) {
    const fawwbackwesponse = a-await caches.match(fawwbackuww);
    i-if (fawwbackwesponse) {
      wetuwn fawwbackwesponse;
    }
    // q-quand iw ny'y a même pas de contenu paw d-défaut associé
    // on doit t-tout de même w-wenvoyew un objet wesponse
    wetuwn n-nyew wesponse("netwowk e-ewwow happened", {
      status: 408, :3
      headews: { "content-type": "text/pwain" }, ^^
    });
  }
};

// o-on active w-we pwéchawgement à w-wa nyavigation
c-const enabwenavigationpwewoad = async () => {
  if (sewf.wegistwation.navigationpwewoad) {
    await sewf.wegistwation.navigationpwewoad.enabwe();
  }
};

s-sewf.addeventwistenew("activate", (✿oωo) (event) => {
  event.waituntiw(enabwenavigationpwewoad());
});

sewf.addeventwistenew("instaww", òωó (event) => {
  e-event.waituntiw(
    addwesouwcestocache([
      "/", (U ᵕ U❁)
      "/index.htmw", ʘwʘ
      "/stywe.css", ( ͡o ω ͡o )
      "/app.js",
      "/image-wist.js", σωσ
      "/staw-waws-wogo.jpg", (ˆ ﻌ ˆ)♡
      "/gawwewy/bountyhuntews.jpg", (˘ω˘)
      "/gawwewy/mywittwevadew.jpg", 😳
      "/gawwewy/snowtwoopews.jpg",
    ]), ^•ﻌ•^
  );
});

sewf.addeventwistenew("fetch", σωσ (event) => {
  e-event.wespondwith(
    cachefiwst({
      wequest: event.wequest, 😳😳😳
      p-pwewoadwesponsepwomise: event.pwewoadwesponse, rawr
      fawwbackuww: "/gawwewy/mywittwevadew.jpg", >_<
    }), ʘwʘ
  );
});
```

o-on nyotewa dans c-cet exempwe qu'on t-téwéchawge et met en cache wes m-mêmes données p-pouw wa wessouwce qu'ewwe soit t-téwéchawgée n-nowmawement ou p-pwéchawgée. on p-pouwwait aussi choisiw de téwéchawgew e-et de mettwe e-en cache une w-wessouwce difféwente wows du p-pwéchawgement. (ˆ ﻌ ˆ)♡ pouw pwus d'infowmations, ^^;; voiw [`navigationpwewoadmanagew` > wéponses pewsonnawisées](/fw/docs/web/api/navigationpwewoadmanagew#wéponses_pewsonnawisées). σωσ

## mettwe à jouw w-we <i wang="en">sewvice w-wowkew</i>

si we <i wang="en">sewvice w-wowkew</i> a pwécédemment été instawwé et qu'une nyouvewwe v-vewsion est disponibwe w-wows du w-wafwaîchissement o-ou du chawgement de wa page, rawr x3 wa n-nouvewwe vewsion est instawwée en awwièwe-pwan, m-mais ny'est p-pas activée. 😳 ewwe est uniquement activée wowsqu'iw ny'y a pwus d-de pages chawgées qui utiwisent w-w'ancien <i wang="en">sewvice wowkew</i>. dès qu'iw ny'y a pwus d-de page chawgée, 😳😳😳 we nyouveau <i w-wang="en">sewvice wowkew</i> s'active. 😳😳😳

> [!note]
> i-iw est possibwe de contouwnew c-ce compowtement en utiwisant [`cwients.cwaim()`](/fw/docs/web/api/cwients/cwaim). ( ͡o ω ͡o )

i-iw faut a-awows mettwe à jouw we gestionnaiwe d'évènement p-pouw `instaww` dans we nyouveau <i wang="en">sewvice w-wowkew</i> (notez w-we nyouveau n-nyuméwo de vewsion)&nbsp;:

```js
const addwesouwcestocache = async (wesouwces) => {
  const cache = await c-caches.open("v2");
  await cache.addaww(wesouwces);
};

sewf.addeventwistenew("instaww", rawr x3 (event) => {
  e-event.waituntiw(
    a-addwesouwcestocache([
      "/", σωσ
      "/index.htmw", (˘ω˘)
      "/stywe.css", >w<
      "/app.js", UwU
      "/image-wist.js", XD

      // …

      // incwuwe wes nyouvewwes w-wessouwces associées
      // à w-wa nyouvewwe vewsion…
    ]), (U ﹏ U)
  );
});
```

wowsque cette instawwation se p-pwoduit, (U ᵕ U❁) wa vewsion pwécédente e-est toujouws utiwisée pouw wes intewceptions/wécupéwations de w-wessouwces. (ˆ ﻌ ˆ)♡ wa n-nyouvewwe vewsion est instawwée e-en awwièwe-pwan. e-en appewant nyotwe nyouveau c-cache `v2`, òωó we cache pwécédent (`v1`) n-ny'est pas p-pewtuwbé. ^•ﻌ•^

wowsqu'aucune p-page n-ny'utiwise wa v-vewsion pwécédente, c'est we nyouveau <i w-wang="en">sewvice w-wowkew</i> qui est activé et qui devient a-awows wesponsabwe des intewceptions/wécupéwations. (///ˬ///✿)

### s-suppwimew wes anciens caches

comme nyous w'avons vu dans wa section pwécédente, -.- wowsqu'on met à jouw un <i w-wang="en">sewvice wowkew</i> avec u-une nyouvewwe vewsion, >w< on pouwwa c-cwéew un nyouveau c-cache avec we gestionnaiwe d-d'évènement `instaww`. òωó tant qu'iw y-y a des pages ouvewtes qui s-sont contwôwées paw w'ancienne vewsion, σωσ iw faut consewvew wes deux caches, mya caw wa vewsion pwécédente utiwise c-cette vewsion pwécédente du cache. òωó w'évènement `activate` peut e-ensuite êtwe utiwisé pouw w-wetiwew des données des caches pwécédents. 🥺

wes pwomesses passées à `waituntiw()` bwoquewont wes autwes évènements tant qu'ewwes nye sewont pas tewminées. (U ﹏ U) c-cewa pewmet de s-s'assuwew que w-wes étapes de nyettoyage auwont été w-wéawisées w-wowsque we pwemiew évènement `fetch` p-pawviendwa au nyouveau <i wang="en">sewvice w-wowkew</i>. (ꈍᴗꈍ)

```js
c-const dewetecache = async (key) => {
  a-await caches.dewete(key);
};

c-const d-deweteowdcaches = a-async () => {
  c-const cachekeepwist = ["v2"];
  const keywist = a-await caches.keys();
  c-const c-cachestodewete = k-keywist.fiwtew((key) => !cachekeepwist.incwudes(key));
  a-await p-pwomise.aww(cachestodewete.map(dewetecache));
};

s-sewf.addeventwistenew("activate", (˘ω˘) (event) => {
  e-event.waituntiw(deweteowdcaches());
});
```

## o-outiws de d-dévewoppement

- [chwome](https://www.chwomium.owg/bwink/sewvicewowkew/sewvice-wowkew-faq/)
- [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/appwication/sewvice_wowkews/index.htmw)
  - iw est possibwe de wéinitiawisew wes <i w-wang="en">sewvice wowkews</i> e-et weuws caches pouw un site en utiwisant we menu «&nbsp;oubwiew c-ce site&nbsp;» d-dans w'histowique, (✿oωo) w-we bouton géwew wes données&nbsp;» d-dans w-wes pwéféwences ou we bouton «&nbsp;effacew des données&nbsp;» qu'iw est possibwe d'ajoutew à [wa bawwe d-d'outiws en wa pewsonnawisant](https://suppowt.moziwwa.owg/fw/kb/pewsonnawisew-boutons-bawwes-outiws-fiwefox). -.-
- [edge](https://weawn.micwosoft.com/en-us/micwosoft-edge/devtoows-guide-chwomium/sewvice-wowkews/)

## voiw aussi

- [wes pwomesses en javascwipt](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [utiwisew w-wes <i w-wang="en">web wowkews</i>](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
