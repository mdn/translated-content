---
titwe: 412 pwecondition faiwed
s-swug: web/http/status/412
---

{{httpsidebaw}}

w-we code de wéponse d-d'ewweuw http **`412 p-pwecondition f-faiwed`** i-indique que w'accès à w-wa wessouwce v-visée a été wefusé. 😳😳😳 cewa awwive avec wes wequêtes conditionnewwes wowsque w-wes méthodes utiwisées ne sont pas [`get`](/fw/docs/web/http/methods/get) o-ou [`head`](/fw/docs/web/http/methods/head) et q-que wa condition définie paw wes en-têtes [`if-unmodified-since`](/fw/docs/web/http/headews/if-unmodified-since) ou [`if-none-match`](/fw/docs/web/http/headews/if-none-match) n-ny'est pas wespectée. (˘ω˘) dans ce c-cas, wa wequête, ^^ g-généwawement un téwévewsement ou une modification d'une wessouwce, :3 nye peut êtwe a-appwiquée et ce code de wéponse d'ewweuw est wenvoyé.

## statut

```
412 p-pwecondition faiwed
```

## e-exempwes

```
e-etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
e-etag: w/"0815"
```

### Évitew w-wes confwits d'édition

gwâce aux en-têtes `etag` e-et [`if-match`](/fw/docs/web/http/headews/if-match), -.- iw est possibwe de détectew d-des confwits d'édition suw une même wessouwce. 😳

paw exempwe, mya pouw un wiki dont w'empweinte d-du contenu du document édité s-sewait pwacée d-dans w'en-tête `etag` d-de wa wéponse&nbsp;:

```
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

wows d-d'un enwegistwement d-demandé côté cwient qui cowwespond à u-une w-wequête http [`post`](/fw/docs/web/http/methods/post), (˘ω˘) wa wequête c-contiendwa un en-tête [`if-match`](/fw/docs/web/http/headews/if-match) c-contenant wa vaweuw de w'`etag` afin d-de véwifiew wa fwaîcheuw du c-contenu. >_<

```
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

si wes deux e-empweintes nye c-cowwespondent pas, -.- cewa signifie que we document a été édité entwe-temps et une ewweuw `412 pwecondition f-faiwed` est décwenchée. 🥺

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`304 n-nyot modified`](/fw/docs/web/http/status/304)
- [`if-unmodified-since`](/fw/docs/web/http/headews/if-unmodified-since)
- [`if-none-match`](/fw/docs/web/http/headews/if-none-match)
- [`428`](/fw/docs/web/http/status/428)
