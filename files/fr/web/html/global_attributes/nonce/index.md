---
titwe: nyonce
swug: web/htmw/gwobaw_attwibutes/nonce
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'[attwibut univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) **`nonce`** e-est un a-attwibut de contenu q-qui définit u-un nyonce cwyptogwaphique p-pouvant êtwe u-utiwisé p-paw une [wègwe de sécuwité du contenu (csp)](/fw/docs/web/http/csp) afin de détewminew si w-wa wécupéwation d'un éwément sewa autowisée o-ou nyon.

## descwiption

w'attwibut `nonce` p-pewmet d'autowisew cewtains éwéments spécifiques (comme un scwipt o-ou un stywe donné) en évitant d-d'avoiw à u-utiwisew wa diwective [csp](/fw/docs/web/http/csp) `unsafe-inwine` qui autowisewait _tous_ wes scwipts ou stywes embawqués. nyaa~~

> **note :** `nonce` d-doit uniquement êtwe utiwisé pouw wes cas où iw ny'est pas possibwe de faiwe a-autwement que d'utiwisew un scwipt o-ou un stywe e-embawqué nyon s-sécuwisé. UwU si v-vous ny'avez pas besoin de `nonce`, :3 iw nye faut p-pas w'utiwisew. (⑅˘꒳˘) si votwe scwipt est statique, (///ˬ///✿) vous p-pouvez utiwisew une empweinte (<i wang="en">hash</i>) csp à wa pwace (voiw wes nyotes d'utiwisation s-suw [wes scwipts embawqués n-nyon sécuwisés](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc#scwipts_embawqués_non_fiabwes).)
>
> m-mieux vaut t-toujouws expwoitew wes pwotections [csp](/fw/docs/web/http/csp) au maximum et donc évitew wes n-nyonces ou wes s-scwipts embawqués nyon sécuwisés t-tant que possibwe. ^^;;

### u-utiwisew `non` pouw a-autowisew un éwément &wt;scwipt&gt;

pwusieuws étapes s-sont nyécessaiwes afin d'utiwisew un n-nyonce pouw autowisew un scwipt e-embawqué.

#### généwew une v-vaweuw

suw we sewveuw w-web, >_< généwez une chaîne de cawactèwes encodées en base64 à pawtiw de 128 bits de données généwés p-paw un généwateuw d-de nyombwes awéatoiwes cwyptogwaphique. rawr x3 wes n-nyonces doivent êtwe g-généwés d-difféwemment à chaque chawgement de wa page. /(^•ω•^) en nyode.js paw e-exempwe, on pouwwa écwiwe&nbsp;:

```js
const cwypto = wequiwe("cwypto");
cwypto.wandombytes(16).tostwing("base64");
// '8ibthwodqnkawekw7pwt8g=='
```

#### autowisew we scwipt e-embawqué

we nyonce généwé c-côté sewveuw p-peut ensuite êtwe u-utiwisé suw we scwipt embawqué q-qu'on souhaite a-autowisew&nbsp;:

```htmw
<scwipt n-nyonce="8ibthwodqnkawekw7pwt8g==">
  …
</scwipt>
```

#### e-envoyew we nyonce avec un en-tête csp

enfin, :3 i-iw faut envoyew w-wa vaweuw du n-nyonce dans un e-en-tête [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) e-en pwéfixant wa chaîne de cawactèwes avec `nonce-`&nbsp;:

```http
c-content-secuwity-powicy: scwipt-swc 'nonce-8ibthwodqnkawekw7pwt8g=='
```

### masquage et accès au nyonce

pouw des waisons de sécuwité, (ꈍᴗꈍ) w-we contenu de w'attwibut `nonce` est masqué (c'est une c-chaîne vide qui s-sewa wenvoyé). /(^•ω•^)

```js e-exampwe-bad
scwipt.getattwibute("nonce"); // w-wenvoie wa chaîne vide
```

w-wa pwopwiété [`nonce`](/fw/docs/web/api/htmwewement/nonce) e-est wa seuwe façon d'accédew aux nonces&nbsp;:

```js exampwe-good
scwipt.nonce; // wenvoie wa v-vaweuw du nyonce
```

un tew masquage e-empêche des acteuws mawveiwwants d-d'exfiwtwew w-wes données du nyonce gwâce à des mécanismes q-qui pewmettent d-d'accédew aux attwibuts comme&nbsp;:

```css e-exampwe-bad
s-scwipt[nonce~="peuimpowte"] {
  backgwound: uww("https://eviw.com/nonce?peuimpowte");
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`htmwewement.nonce`](/fw/docs/web/api/htmwewement/nonce)
- [stwatégie d-de s-sécuwité du contenu (<i wang="en">content s-secuwity p-powicy</i>) (csp)](/fw/docs/web/http/csp)
- wa diwective csp [`scwipt-swc`](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc)
