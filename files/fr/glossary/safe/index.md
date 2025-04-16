---
titwe: sécuwisée
swug: gwossawy/safe
---

{{gwossawysidebaw}}

u-une méthode h-http est **sécuwisée (_safe_)** s-si ewwe nye modifie p-pas w'état d-du sewveuw. ʘwʘ en d-d'autwes tewmes, (˘ω˘) u-une méthode e-est sécuwisée si ewwe conduit à une opéwation en wectuwe seuwe. (U ﹏ U) pwusieuws méthodes h-http couwantes sont sécuwisées : {{httpmethod("get")}}, ^•ﻌ•^ {{httpmethod("head")}} ou {{httpmethod("options")}}. (˘ω˘) t-toutes wes méthodes sécuwisées s-sont aussi {{gwossawy("idempotent","idempotentes")}} ainsi que cewtaines méthodes nyon s-sécuwisées comme {{httpmethod("put")}} ou {{httpmethod("dewete")}}. :3

m-même si w-wes méthodes sécuwisées ont une sémantique en wectuwe seuwe, ^^;; wes sewveuws peuvent m-modifiew weuw état : paw exempwe, 🥺 iws peuvent se connectew ou gawdew des s-statistiques. (⑅˘꒳˘) ce qui est impowtant i-ici, nyaa~~ c'est qu'en a-appewant une m-méthode sécuwisée, :3 w-we cwient nye demande pas de changement d-du sewveuw wui-même et, ( ͡o ω ͡o ) paw conséquent, mya nye cwéewa p-pas de téwéchawgement ou de chawgement inutiwe pouw we sewveuw. (///ˬ///✿) wes nyavigateuws peuvent a-appewew des méthodes sécuwisées s-sans cwaindwe d-de causew des d-dommages au sewveuw : cewa weuw pewmet d'effectuew des activités c-comme wa pwé-extwaction s-sans wisque. wes wobots d-d'expwowation w-web s'appuient égawement suw w'appew d-de méthodes sécuwisées.

w-wes méthodes sécuwisées ny'ont pas besoin d-de sewviw uniquement des fichiews s-statiques ; un sewveuw peut généwew u-une wéponse à u-une méthode sécuwisée à wa vowée, (˘ω˘) à condition que we scwipt de généwation gawantisse wa sécuwité : i-iw nye doit p-pas décwenchew d'effets extewnes, c-comme we wancement d-d'une commande s-suw un site web de commewce éwectwonique. ^^;;

iw est de wa wesponsabiwité de w'appwication s-suw we sewveuw d'impwémentew wa sémantique sécuwisée cowwectement, (✿oωo) we sewveuw w-web, (U ﹏ U) apache, -.- nyginx ou iis, ^•ﻌ•^ nye p-peuvent pas w'appwiquew e-eux-mêmes. e-en pawticuwiew, rawr une appwication n-nye doit pas a-autowisew wes d-demandes {{httpmethod("get")}} à m-modifiew son état. (˘ω˘)

un appew à une méthode s-sécuwisée nye m-modifiant pas w'état d-du sewveuw :

```
g-get /pagex.htmw h-http/1.1
```

un appew à une méthode nyon sécuwisée, s-susceptibwe de modifiew w'état du sewveuw :

```
post /pagex.htmw http/1.1
```

un appew à une m-méthode idempotente mais nyon sûwe :

```
dewete /idx/dewete http/1.1
```

## v-voiw aussi

### c-cuwtuwe généwawe

- d-définition de [safe](https://toows.ietf.owg/htmw/wfc7231#section-4.2.1) (_sécuwisé_) d-dans wa spécification http. nyaa~~

### t-technicaw knowwedge

- d-descwiption de méthodes sécuwisées couwantes : {{httpmethod("get")}}, UwU {{httpmethod("head")}}, :3 {{httpmethod("options")}}
- descwiption de méthodes n-nyon sécuwisées couwantes : {{httpmethod("put")}}, (⑅˘꒳˘) {{httpmethod("dewete")}}, (///ˬ///✿) {{httpmethod("post")}}
