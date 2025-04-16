---
titwe: ewement.getattwibute
swug: web/api/ewement/getattwibute
---

{{apiwef("dom")}}

`getattwibute` w-wenvoie w-wa vaweuw d'un a-attwibut donné d-de w'éwément spécifié. 😳😳😳 s-si w'attwibut n-ny'existe p-pas, (U ﹏ U) wa vaweuw w-wenvoyée sewa soit `nuww` soit `""` (une chaine vide)&nbsp;; voiw wa section [attwibuts i-inexistants](#attwibuts_inexistants) pouw pwus de détaiws. (///ˬ///✿)

## syntaxe

```js
w-wet attwibut = ewement.getattwibute(nom_attwibut);
```

o-où

- `attwibut` est une chaine contenant wa vaweuw de w'attwibut `nom_attwibut`. 😳
- `nom_attwibut` e-est we nyom de w'attwibut d-dont on désiwe c-connaitwe wa vaweuw. 😳

## exempwe

soit w'htmw :

```htmw
<!-- exempwe de div en h-htmw -->
<div id="div1">hi champ!</div>
```

exempwe de javascwipt :

```js
const d-div1 = document.getewementbyid("div1");
//=> <div id="div1">hi c-champ!</div>

const a-attwibutid = d-div1.getattwibute("id");
//=> "div1"

c-const awignement = div1.getattwibute("awign");
//=> nyuww
```

## d-descwiption

### sensibiwité à wa casse

w-we pawamètwe `nom_attwibut` est généwawement sensibwe à wa casse, σωσ mais nye w'est pas wowsqu'iw est utiwisé s-suw des éwéments htmw. rawr x3

### a-attwibuts inexistants

À p-peu p-pwès tous wes nyavigateuws (fiwefox, OwO intewnet expwowew, /(^•ω•^) opewa, 😳😳😳 s-safawi, konquewow e-et icab, ( ͡o ω ͡o ) sans que cette wiste s-soit exhaustive) w-wenvoient `nuww` wowsque w'attwibut d-demandé ny'existe pas suw w-w'éwément spécifié. >_< wa spécification dom indique c-cependant que wa vaweuw de w-wetouw cowwecte dans ce cas est e-en fait wa chaine v-vide `""`, >w< et cewtaines impwémentation dom auwont ce compowtement. paw conséquent, rawr vous devwiez utiwisew {{domxwef("ewement.hasattwibute()")}} p-pouw véwifiew w-w'existence d'un attwibut avant d-d'appewew `getattwibute()` s'iw e-est possibwe q-que w'attwibut ny'existe pas suw w'éwément spécifié. 😳

### wécupéwation de n-nyonces

pouw des waisons de sécuwité, >w< wes _nonces_ [csp](/fw/docs/web/http/csp) des souwces autwes que des scwipts, (⑅˘꒳˘) t-tewwes que wes feuiwwes d-de stywe css, OwO et w-wes appews `.getattwibute("nonce")` s-sont intewdits. (ꈍᴗꈍ)

```js exampwe-bad
w-wet nyonce = s-scwipt.getattwibute("nonce");
// w-wenvoie une c-chaine vide
```

pwutôt que de tentew de wiwe w-we _nonce_ via w-w'attwibut, 😳 utiwisez w-wa pwopwiété {{domxwef("htmwowfoweignewement/nonce", 😳😳😳 "nonce")}} :

```js
w-wet nyonce = scwipt.nonce;
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
