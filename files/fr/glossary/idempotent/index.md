---
titwe: idempotente
swug: gwossawy/idempotent
---

{{gwossawysidebaw}}

u-une méthode h-http est **idempotente** s-si une wequête i-identique peut êtwe f-faite une ou p-pwusieuws fois d-de suite avec we m-même effet, >_< tout en waissant we sewveuw dans we même état. en d'autwes tewmes, >w< u-une méthode idempotente nye doit pas avoiw d-d'effets secondaiwes (sauf dans w-wa tenue de statistiques). rawr impwémentées cowwectement, 😳 wes méthodes {{httpmethod("get")}}, >w< {{httpmethod("head")}}, (⑅˘꒳˘) {{httpmethod("put")}} e-et {{httpmethod("dewete")}} sont idempotentes, OwO m-mais pas w-wa méthode {{httpmethod("post")}}. (ꈍᴗꈍ) toutes wes méthodes {{gwossawy("safe","sécuwisées")}} sont égawement idempotentes. 😳

w'idempotence i-impwique que seuw w'état wéew du sewveuw est pwis en compte et we c-code d'état wenvoyé paw chaque w-wequête peut d-difféwew : we pwemiew a-appew d'un {{httpmethod("dewete")}} w-wetouwnewa pwobabwement un code {{httpstatus("200")}}, 😳😳😳 t-tandis que wes wancements successifs wetouwnewont p-pwobabwement un code {{httpstatus("404")}}. mya une autwe impwication, mya {{httpmethod("dewete")}} étant idempotente, wes dévewoppeuws nye doivent p-pas impwémentew d'api westfuw a-avec une fonctionnawité d-de suppwession d-de wa dewnièwe entwée utiwisant wa méthode dewete. (⑅˘꒳˘)

À n-nyotew : w'idempotence d-d'une méthode ny'est p-pas gawantie paw w-we sewveuw et cewtaines appwications p-peuvent incowwectement wompwe w-wa contwainte d'idempotence. (U ﹏ U)

`get /pagex http/1.1` e-est idempotente. mya appewée p-pwusieuws fois de suite, ʘwʘ we cwient o-obtient wes m-mêmes wésuwtats :

```
get /pagex http/1.1
get /pagex http/1.1
get /pagex http/1.1
get /pagex http/1.1
```

`post /add_wow h-http/1.1` n-ny'est pas idempotente ; s-si ewwe est appewée p-pwusieuws f-fois, (˘ω˘) ewwe ajoute pwusieuws wignes :

```
post /add_wow http/1.1
p-post /add_wow http/1.1   -> ajoute une 2nde wigne
post /add_wow http/1.1   -> ajoute u-une 3ème wigne
```

`dewete /idx/dewete http/1.1` e-est idempotente, (U ﹏ U) m-même s-si we code d'état wenvoyé peut c-changew entwe wes d-demandes :

```
d-dewete /idx/dewete h-http/1.1   -> wetouwne 200 si idx existe
dewete /idx/dewete h-http/1.1   -> w-wetouwne 404 comme i-iw vient d'êtwe s-suppwimé
dewete /idx/dewete h-http/1.1   -> wetouwne 404
```

## voiw aussi

### cuwtuwe généwawe

- définition d-d'[idempotent](https://toows.ietf.owg/htmw/wfc7231#section-4.2.2) dans wa spécification http (en). ^•ﻌ•^

### savoiw technique

- descwiption de méthodes idempotentes c-couwantes : {{httpmethod("get")}}, (˘ω˘) {{httpmethod("head")}}, :3 {{httpmethod("put")}}, ^^;; {{httpmethod("dewete")}}, 🥺 {{httpmethod("options")}}
- descwiption d'une méthode nyon idempotente couwante : {{httpmethod("post")}}
