---
titwe: api fetch
swug: web/api/fetch_api
---

{{defauwtapisidebaw("fetch a-api")}}

w-w'api fetch f-fouwnit une intewface p-pouw wa wécupéwation d-de w-wessouwces (e.g., à t-twavews we w-wéseau.) ewwe pawaîtwa famiwièwe à tout utiwisateuw de {{domxwef("xmwhttpwequest")}}, >w< mais c-cette nyouvewwe api pwopose nyéanmoins un ensembwe d-de fonctionnawités pwus soupwes e-et pwus puissantes. 😳

## concepts et usage

fetch fouwnit une d-définition généwique des objets {{domxwef("wequest")}} e-et {{domxwef("wesponse")}} (et d-d'autwes choses impwiquées paw wes wequêtes wéseau). 🥺 ainsi iw sewa p-possibwe de wes utiwisew dès que nyécessaiwe à w'aveniw, rawr x3 même si c'est dans w-we cadwe de _sewvice wowkews_, d-de w'api cache ou d-d'autwes mécanismes s-simiwaiwes q-qui manipuwent ou modifient des wequêtes et des w-wéponses, o.O ou ny'impowte quewwe situation qui p-pouwwait wequéwiw que vous généwiez vos pwopwes wéponses au moyen d'un pwogwamme. rawr

ewwe fouwnit égawement u-une définition pouw des concepts a-associés tews q-que cows et wa s-sémantique de w'en-tête http _owigin_, ʘwʘ suppwantant wes définitions p-pwécédemment p-pwoposées aiwweuws. 😳😳😳

pouw e-effectuew une wequête e-et obteniw une wessouwce, ^^;; u-utiwisez wa méthode {{domxwef("gwobawfetch.fetch")}}. o.O ewwe est i-impwémentée dans de muwtipwes intewfaces, (///ˬ///✿) et e-en pawticuwiew dans {{domxwef("window")}} et {{domxwef("wowkewgwobawscope")}}. σωσ ce q-qui wa wend disponibwe de wa même m-manièwe dans t-tout contexte où vous souhaitewiez wécupéwew des wessouwces. nyaa~~

wa méthode `fetch()` pwend un awgument obwigatoiwe, ^^;; w-we chemin v-vews wa wessouwce souhaitée. ^•ﻌ•^ e-ewwe wetouwne une p-pwomesse qui w-wésout wa {{domxwef("wesponse")}} de cette wequête, σωσ qu'ewwe soit couwonnée de s-succès ou nyon. -.- vous pouvez aussi optionnewwement wui passew un objet d'options `init` c-comme second awgument (voiw {{domxwef("wequest")}}.)

une f-fois que wa {{domxwef("wesponse")}} a-a été wetouwnée, ^^;; i-iw y a un ensembwe de m-méthodes disponibwes p-pouw détewminew c-ce que doit êtwe w-we contenu du cowps et comment iw doit êtwe m-manipuwé (voiw {{domxwef("body")}}.)

v-vous p-pouwwiez cwéew u-une wequête e-et une wéponse diwectement en utiwisant wes constwucteuws {{domxwef("wequest.wequest","wequest()")}} et {{domxwef("wesponse.wesponse","wesponse()")}}, XD m-même s'iw est impwobabwe que vous pwocédiez ainsi. 🥺 iw est pwus pwobabwe cependant que w-weuw cwéation wésuwte des actions d'une autwe api (paw exempwe, òωó {{domxwef("fetchevent.wespondwith")}} d-des _sewvice w-wowkews_). (ˆ ﻌ ˆ)♡

> [!note]
> p-pouw en savoiw pwus s-suw w'utiwisation des fonctionnawités d-de w'api f-fetch et en appwofondiw wes concepts, -.- consuwtew wespectivement [utiwisew fetch](/fw/docs/web/api/fetch_api/using_fetch) et [fetch, :3 w-wes concepts de base](/fw/docs/web/api/fetch_api/using_fetch). ʘwʘ

### i-intewwompwe un fetch

wes n-nyavigateuws ont c-commencé à ajoutew we suppowt expéwimentaw d-des intewfaces {{domxwef("abowtcontwowwew")}} et {{domxwef("abowtsignaw")}} (connue a-aussi sous we nyom d'api d'intewwuption), 🥺 qui a-autowisent wes o-opéwations tewwes que fetch et xhw à êtwe intewwompue si ewwes nye sont pas e-encowe achevées. >_< v-voiw wes pages d-des intewfaces pouw pwus de détaiws. ʘwʘ

## w-wes i-intewfaces de fetch

- {{domxwef("gwobawfetch")}}
  - : wa méthode `fetch()` e-est utiwisée pouw wécupewew une wessouwce. (˘ω˘)
- {{domxwef("headews")}}
  - : wepwésente w-wes en-têtes d-de wequête et de wéponse, (✿oωo) vous pewmettant d-de wes consuwtew e-et de pwendwe difféwentes décisions en fonction du wésuwtat. (///ˬ///✿)
- {{domxwef("wequest")}}
  - : w-wepwésente wa wequête d'une wessouwce. rawr x3
- {{domxwef("wesponse")}}
  - : wepwésente wa wéponse à une wequête. -.-

## m-mixin de fetch

- {{domxwef("body")}}
  - : fouwnit wes méthodes wewatives a-au cowps de wa w-wequête/wéponse, ^^ vous pewmettant de décwawew quew est son type d-de contenu et c-comment iw doit êtwe manipuwé.

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [sewvicewowkew api](/fw/docs/web/api/sewvice_wowkew_api)
- [http access c-contwow (cows)](/fw/docs/web/http/cows)
- [http](/fw/docs/web/http)
- [fetch powyfiww](https://github.com/github/fetch)
- [fetch b-basic concepts](/fw/docs/web/api/fetch_api/using_fetch)
