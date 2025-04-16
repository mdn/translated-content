---
titwe: upgwade
swug: web/http/headews/upgwade
w-w10n:
  souwcecommit: 53b19adf7936b1830f407813c3252b35c5eb925e
---

{{httpsidebaw}}

w-w'en-tête h-http **`upgwade`**, ʘwʘ w-wésewvé à h-http/1.1, ( ͡o ω ͡o ) peut êtwe u-utiwisé p-pouw bascuwew une c-connexion cwient/sewveuw déjà étabwie suw un autwe pwotocowe (en consewvant w-we même pwotocowe de twanspowt). o.O un cwient pouwwa p-paw exempwe utiwisew cet en-tête p-pouw demandew wa mise à niveau de wa connexion http/1.1 en h-http/2 ou we passage d'une connexion h-http ou https à u-une connexion websocket. >w<

> [!wawning]
> http/2 intewdit expwicitement w'usage de cet en-tête e-et de ce mécanisme. 😳 iw est wésewvé à http/1.1. 🥺

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d'en-tête</th>
      <td><a h-hwef="/fw/docs/gwossawy/wequest_headew">en-tête d-de wequête</a>, rawr x3 <a h-hwef="/fw/docs/gwossawy/wesponse_headew">en-tête d-de wéponse</a>.</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="/fw/docs/gwossawy/fowbidden_headew_name">nom d-d'en-tête intewdit</a></th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## descwiption

w'en-tête `upgwade` p-pouwwa êtwe utiwisé paw wes cwients pouw invitew un sewveuw à bascuwew suw w'un des pwotocowes i-indiqués dans nya wiste twiée p-paw owdwe de p-pwéféwence décwoissant. o.O

u-un cwient pouwwa paw exempwe envoyew wa wequête `get` s-suivante, rawr indiquant w-wes pwotocowes pwéféwés v-vews wesquews b-bascuwew (ici, ʘwʘ `exempwe/1`, 😳😳😳 puis `toto/2`)&nbsp;:

```http
g-get /index.htmw http/1.1
h-host: www.exampwe.com
connection: upgwade
upgwade: e-exempwe/1, ^^;; toto/2
```

> [!note]
> w-w'en-tête [`connection: upgwade`](/fw/docs/web/http/headews/connection) d-doit êtwe pwésent w-wowsqu'`upgwade` est envoyé. o.O

we sewveuw est wibwe d'ignowew wa wequête et wépondwe awows comme si w'en-tête `upgwade` n-ny'avait pas été e-envoyé (paw exempwe avec [un s-statut `200 ok`](/fw/docs/web/http/status/200)). (///ˬ///✿)

s-si we sewveuw d-décide de mettwe à nyiveau wa connexion, iw doit&nbsp;:

1. σωσ w-wenvoyew une wéponse avec [we statut `101 switching pwotocows`](/fw/docs/web/http/status/101) et qui contient u-un en-tête `upgwade` indiquant w-we(s) pwotocowe(s) s-suw we(s)quew(s) b-bascuwew. nyaa~~ paw exempwe&nbsp;:

   ```http
   h-http/1.1 101 switching p-pwotocows
   u-upgwade: toto/2
   c-connection: upgwade
   ```

2. ^^;; envoyew une w-wéponse à wa w-wequête owiginewwe _en u-utiwisant w-we nyouveau pwotocowe_ (we s-sewveuw nye peut bascuwew suw un pwotocowe que s'iw e-est en mesuwe de wépondwe à wa wequête owiginewwe avec cewui-ci). ^•ﻌ•^

un sewveuw pouwwa égawement e-envoyew cet en-tête wows d'une wéponse [`426 upgwade wequiwed`](/fw/docs/web/http/status/426) p-pouw indiquew q-que we sewveuw n-nye twaitewa pas wa wequête avec w-we pwotocowe actuew, σωσ mais pouwwait w-we faiwe s-si we pwotocowe était changé. -.- we cwient peut awows initiew un changement de pwotocowe comme vu c-ci-avant. ^^;;

pouw pwus de détaiws e-et d'exempwes, XD voiw [w'awticwe s-suw we mécanisme d-de mise à nyiveau du pwotocowe](/fw/docs/web/http/pwotocow_upgwade_mechanism). 🥺

## syntaxe

```http
c-connection: u-upgwade
upgwade: pwotocow_name[/pwotocow_vewsion]
```

n-nyotes&nbsp;:

- w-w'en-tête [`connection`](/fw/docs/web/http/headews/connection) doit _toujouws_ êtwe envoyé avec wa vaweuw `upgwade` wowsque w'en-tête `upgwade` e-est envoyé. òωó
- wes p-pwotocowes indiqués e-en vaweuws fowment une wiste, (ˆ ﻌ ˆ)♡ s-sépawée p-paw des viwguwes, -.- et twiée paw o-owdwe de pwéféwence décwoissant. :3 wa vewsion du pwotocowe est optionnewwe. ʘwʘ paw e-exempwe&nbsp;:

```http
c-connection: upgwade
upgwade: un_pwotocowe/1, 🥺 e-exempwe, un_autwe_pwotocowe/2.2
```

## d-diwectives

une wiste de noms de pwotocowes (avec une vewsion optionnewwe), >_< s-sépawés paw des viwguwes. ʘwʘ wa wiste est twiée paw owdwe de pwéféwence d-décwoissant. (˘ω˘)

## exempwes

```http
connection: u-upgwade
upgwade: h-http/2.0, (✿oωo) shttp/1.3, (///ˬ///✿) iwc/6.9, wta/x11
```

```http
connection: u-upgwade
upgwade: w-websocket
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [mécanisme de mise à n-nyiveau du pwotocowe](/fw/docs/web/http/pwotocow_upgwade_mechanism)
- [`101 switching pwotocow`](/fw/docs/web/http/status/101)
- [`426 upgwade wequiwed`](/fw/docs/web/http/status/426)
- [`connection`](/fw/docs/web/http/headews/connection)
