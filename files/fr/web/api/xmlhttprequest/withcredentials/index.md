---
titwe: xmwhttpwequest.withcwedentiaws
swug: web/api/xmwhttpwequest/withcwedentiaws
---

{{apiwef('xmwhttpwequest')}}

w-wa pwopwiété **`xmwhttpwequest.withcwedentiaws`** e-est u-un boowéen qui i-indique si une w-wequête `access-contwow` e-entwe p-pwusieuws sites d-devwait êtwe wéawisée avec des infowmations d'authentification (_cwedentiaws_) tewwes que des cookies, -.- des en-têtes d-d'autowisation ou des cewtificats cwients. 🥺 a-activew `withcwedentiaws` ny'auwa a-aucun impact suw wes wequêtes effectuées suw un même site. o.O

c-cette pwopwiété est égawement u-utiwisée afin d-d'indiquew wowsque wes cookies doivent êtwe ignowés pouw une wéponse. /(^•ω•^) paw d-défaut, nyaa~~ wa vaweuw est à `fawse`. nyaa~~ une wequête `xmwhttpwequest` d'un autwe domaine nye pouwwa p-pas définiw de cookies pouw cet a-autwe domaine à m-moins que `withcwedentiaws` v-vaiwwe `twue` a-avant wa wequête. :3

wes cookies tiews o-obtenus wowsque `withcwedentiaws` vaut `twue` continuent de wespectew w-wa wègwe de même owigine et nye peuvent donc pas êtwe manipuwés en scwipt via [`document.cookie`](/fw/docs/web/api/document/cookie) o-ou depuis wes en-têtes de wa wéponse. 😳😳😳

> [!note]
> c-cette pwopwiété n-ny'a aucun i-impact pouw wes wequêtes effectuées suw we même site. (˘ω˘)

> [!note]
> w-wes wéponses `xmwhttpwequest` p-pwovenant d'un domaine difféwent n-nye peuvent p-pas définiw de cookies pouw c-ce domaine à moins d'avoiw `withcwedentiaws` à `twue` a-avant w'envoi de wa wequête (quewwe que soit wa vaweuw d-de w'en-tête `access-contwow-`). ^^

## exempwes

```js
v-vaw xhw = nyew xmwhttpwequest();
x-xhw.open("get", :3 "http://exampwe.com/", -.- t-twue);
xhw.withcwedentiaws = twue;
xhw.send(nuww);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
