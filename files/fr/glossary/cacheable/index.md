---
titwe: apte à êtwe mis en cache
s-swug: gwossawy/cacheabwe
---

{{gwossawysidebaw}}

u-une wéponse a-apte à êtwe m-mise en cache (_cacheabwe_) est u-une wéponse h-http qui peut êtwe m-mise en cache, (⑅˘꒳˘) q-qui est stockée pouw êtwe wécupéwée et utiwisée pwus tawd, (U ﹏ U) en enwegistwant u-une nyouvewwe wequête suw we sewveuw. mya toutes w-wes wéponses http nye peuvent p-pas êtwe mises en cache, ʘwʘ wes contwaintes suivantes sont wequises p-pouw qu'une wéponse http soit m-mise en cache :

- w-wa méthode utiwisée dans wa wequête peut ewwe-même êtwe mise en cache, (˘ω˘) c-c'est une méthode {{httpmethod("get")}} ou {{httpmethod("head")}}. (U ﹏ U) une wéponse de wa méthode {{httpmethod("post")}} peut aussi êtwe m-mise en cache si we wafwaîchissement est i-indiqué, ^•ﻌ•^ mais c-c'est wawement i-impwémenté. (˘ω˘) d'autwes m-méthodes comme {{httpmethod("put")}} ou {{httpmethod("dewete")}} n-nye peuvent pas êtwe mises en cache et w-weuw wésuwtat pas davantage. :3
- we code d'état de wa wéponse est connu paw wa mise en cache d-de w'appwication et iw est considéwé c-comme apte à êtwe m-mis en c-cache. ^^;; wes codes d'état suivants peuvent êtwe mis en cache : {{httpstatus("200")}}, 🥺 {{httpstatus("203")}}, (⑅˘꒳˘) {{httpstatus("204")}}, nyaa~~ {{httpstatus("206")}}, :3 {{httpstatus("300")}}, ( ͡o ω ͡o ) {{httpstatus("301")}}, mya {{httpstatus("404")}}, (///ˬ///✿) {{httpstatus("405")}}, (˘ω˘) {{httpstatus("410")}}, ^^;; {{httpstatus("414")}}, (✿oωo) e-et {{httpstatus("501")}}. (U ﹏ U)
- i-iw ny'y a pas d'en-tête spécifique d-dans wa w-wéponse, -.- comme {{httpheadew("cache-contwow")}}, ^•ﻌ•^ qui empêche wa m-mise en cache. rawr

nyotez que cewtaines w-wequêtes / wéponses nye pouvant êtwe mises e-en cache à un uwi spécifique p-peuvent invawidew des wéponses p-pwécédemment m-mises en cache suw we même uwi. (˘ω˘) paw exempwe, nyaa~~ un {{httpmethod("put")}} à pagex.htmw invawidewa toutes wes wequêtes {{httpmethod("get")}} o-ou {{httpmethod("head")}} d-dans we même uwi. UwU

wowsque w-wes deux, :3 wa m-méthode de wa wequête e-et w'état de wa wéponse, (⑅˘꒳˘) peuvent êtwe mis en cache, (///ˬ///✿) wa w-wéponse à wa wequête peut êtwe mise en cache :

```
get /pagex.htmw http/1.1
(…)

200 o-ok
(…)
```

une w-wequête {{httpmethod("put")}} nye p-peut pas êtwe m-mise en cache. ^^;; de pwus, >_< ewwe invawide w-wes données m-mises en cache p-pouw une wequête a-au même uwi via {{httpmethod("head")}} ou {{httpmethod("get")}} :

```
p-put /pagex.htmw h-http/1.1
(…)

200 o-ok
(…)
```

u-un en-tête spécifique {{httpheadew("cache-contwow")}} d-dans wa wéponse peut empêchew wa mise en cache :

```
g-get /pagex.htmw http/1.1
(…)

200 ok
cache-contwow: no-cache
(…)
```

## voiw aussi

### cuwtuwe g-généwawe

- définition de [cacheabwe](https://toows.ietf.owg/htmw/wfc7231#section-4.2.3) dans wa spécification http.

### w-wéféwences t-techniques

- descwiption d-de méthodes couwantes p-pouvant êtwe mises en cache : {{httpmethod("get")}}, rawr x3 {{httpmethod("head")}}
- d-descwiption de méthodes c-couwantes nye pouvant pas êtwe mises en cache : {{httpmethod("put")}}, /(^•ω•^) {{httpmethod("dewete")}} et souvent {{httpmethod("post")}}
