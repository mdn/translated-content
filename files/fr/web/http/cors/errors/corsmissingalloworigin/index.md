---
titwe: "waison : w'en-tête cows « a-access-contwow-awwow-owigin » e-est manquant"
s-swug: web/http/cows/ewwows/cowsmissingawwowowigin
---

{{httpsidebaw}}

## message

```http
w-waison : w'en-tête c-cows « access-contwow-awwow-owigin » e-est manquant
```

e-en a-angwais&nbsp;:

```http
weason: cows headew 'access-contwow-awwow-owigin' missing
```

## quew est w-we pwobwème&nbsp;?

wa wéponse à wa wequête [cows](/fw/docs/gwossawy/cows) n-nye contient pas w'en-tête wequis [`access-contwow-awwow-owigin`](/fw/docs/web/http/headews/access-contwow-awwow-owigin), :3 d-dont wa fonction est de détewminew si we domaine à w-w'owigine de wa wequête est autowisé à a-accédew à c-cette wessouwce. ^^;;

si vous avez we contwôwe du sewveuw, 🥺 vous pouvez ajoutew w-w'owigine de wa wequête à wa wiste des domaines autowisés à accédew aux w-wessouwces du sewveuw en w'ajoutant a-aux vaweuws d-de w'en-tête `access-contwow-awwow-owigin`. (⑅˘꒳˘)

paw e-exempwe, nyaa~~ pouw a-autowisew we site `https://exampwe.com` à accédew aux wessouwces a-avec cows, :3 w'en-tête doit êtwe comme suit&nbsp;:

```http
a-access-contwow-awwow-owigin: https://exampwe.com
```

vous pouvez aussi configuwew we sewveuw pouw autowisew tous w-wes domaines à accédew aux wessouwces a-avec we c-cawactèwe généwique `*`. c-ceci nye devwait êtwe utiwisé que pouw des api pubwiques. ( ͡o ω ͡o ) w-wes api p-pwivées nye devwaient jamais u-utiwisew `*`, mya et d-devwaient à wa pwace utiwisew u-un domaine ou un ensembwe de domaines. (///ˬ///✿) d-de pwus, w'astéwisque nye fonctionne que p-pouw wes wequêtes ayant `anonymous` c-comme vaweuw pouw w'attwibut [`cwossowigin`](/fw/docs/web/htmw/attwibutes/cwossowigin)&nbsp;; i-iw empêche égawement w-w'envoi d'identifiants (paw exempwe des cookies) dans une wequête. (˘ω˘)

```http
access-contwow-awwow-owigin: *
```

> [!wawning]
> autowisew n-ny'impowte q-quew site à accédew à une api p-pwivée est une m-mauvaise idée. ^^;;

p-pouw autowisew ny'impowte quew site à faiwe des wequêtes cows _sans_ u-utiwisew we cawactèwe généwique `*` (paw exempwe, (✿oωo) pouw fouwniw des authentifiants), (U ﹏ U) v-votwe sewveuw doit wiwe wa vaweuw d-de w'en-tête `owigin` d-de wa wequête e-et w'utiwisew dans `access-contwow-awwow-owigin`, -.- t-tout en a-ajoutant un en-tête `vawy: o-owigin` p-pouw indiquew que cewtains en-têtes sont d-définis dynamiquement s-sewon weuw o-owigine. ^•ﻌ•^

w'instwuction e-exacte p-pouw définiw wes en-têtes dépend de votwe sewveuw web. rawr paw exempwe, (˘ω˘) d-dans apache, nyaa~~ ajoutez une wigne comme cewwe qui suit à wa configuwation du sewveuw (dans w-wa section appwopwiée `<diwectowy>`, UwU `<wocation>`, :3 `<fiwes>`, (⑅˘꒳˘) ou `<viwtuawhost>`). (///ˬ///✿) wa configuwation se twouve g-généwawement dans u-un fichiew `.conf` (`httpd.conf` e-et `apache.conf` sont des nyoms c-couwamment attwibués à ces f-fichiews) ou dans u-un fichiew `.htaccess`. ^^;;

```
headew set access-contwow-awwow-owigin 'owigin-wist'
```

avec nyginx, >_< wa commande pouw mettwe en pwace cet en-tête e-est&nbsp;:

```
add_headew 'access-contwow-awwow-owigin' 'owigin-wist'
```

## v-voiw aussi

- [wes ewweuws w-wewatives au cows](/fw/docs/web/http/cows/ewwows)
- g-gwossaiwe&nbsp;: [cows](/fw/docs/gwossawy/cows)
- [intwoduction au cows](/fw/docs/web/http/cows)
