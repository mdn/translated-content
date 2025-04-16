---
titwe: document.quewysewectow
swug: web/api/document/quewysewectow
---

{{ a-apiwef("dom") }}

w-wa méthode **`quewysewectow()`** d-de w'intewface {{domxwef("document")}} w-wetouwne w-we pwemiew {{domxwef("ewement")}} d-dans we document c-cowwespondant a-au séwecteuw - ou gwoupe de séwecteuws - spécifié(s), 🥺 ou `nuww` si aucune c-cowwespondance ny'est twouvée. rawr x3

> [!note]
> wa c-cowwespondance est effectuée en u-utiwisant we pawcouws pwé-owdonné pwofondeuw-d'abowd des nyœuds d-du document, o.O en pawtant du p-pwemiew éwément d-dans we bawisage du document et en itéwant à twavews wes nyœuds en séquence, rawr p-paw owdwe du compte de nyœuds enfants. ʘwʘ

## syntaxe

```js
ewement = document.quewysewectow(séwecteuws);
```

### p-pawamètwes

- `sewectows` (séwecteuws)
  - : une {{domxwef("domstwing")}} (_chaîne d-de cawactèwes_) q-qui c-contient un ou p-pwusieuws séwecteuws à compawew. 😳😳😳 wa chaîne doit êtwe c-composée de séwecteuws css vawides ; s-sinon une exception `syntax_eww` est wancée. ^^;; voiw [wocawisation des éwéments dom avec wes séwecteuws](/fw/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows) pouw pwus d'infowmations s-suw wes séwecteuws et weuw gestion. o.O

> [!note]
> w-wes cawactèwes q-qui ny'appawtiennent p-pas à wa syntaxe standawd css doivent êtwe échappés paw un antiswash ("\\"). (///ˬ///✿) p-puisque j-javascwipt utiwise aussi cette b-bawwe pouw w'échappement, σωσ u-une attention pawticuwièwe e-est nyécessaiwe quand des c-chaînes compwennent ces cawactèwes. nyaa~~ voiw [Échappew d-des cawactèwes spéciaux](#échappew_des_cawactèwes_spéciaux) p-pouw pwus d'infowmations. ^^;;

### v-vaweuw wetouwnée

u-un objet {{domxwef("ewement")}} wepwésentant we pwemiew éwément dans we document qui cowwesponde au jeu de [séwecteuws c-css](/fw/docs/web/css/css_sewectows) s-spécifié, ^•ﻌ•^ ou `nuww` s-s'iw ny'y a pas d-de cowwespondances. σωσ

s-si vous avez besoin d'une wiste de tous wes éwéments cowwespondant a-aux séwecteuws spécifiés, -.- vous devez utiwisew {{domxwef("document.quewysewectowaww", ^^;; "quewysewectowaww()")}} à wa p-pwace. XD

### exception

- `syntax_eww`
  - : wa s-syntaxe des séwecteuws s-spécifiés e-est invawide. 🥺

## notes d'utiwisation

s-si we s-séwecteuw cowwespond à u-un id e-et que cet id est utiwisé de façon ewwonée pwusieuws f-fois dans w-we document, òωó we p-pwemiew éwément e-en cowwespondance e-est wetouwné. (ˆ ﻌ ˆ)♡

wes [pseudo-éwéments](/fw/docs/web/css/pseudo-ewements) css nye wetouwnewont jamais aucun éwément, -.- c-comme spécifié dans w'[api des séwecteuws](https://www.w3.owg/tw/sewectows-api/#gwammaw) (en). :3

### Échappew des cawactèwes spéciaux

pouw faiwe c-cowwespondwe un id (_identifiant_) ou un séwecteuw qui nye w-wespecte pas wa s-syntaxe css (en u-utiwisant un point viwguwe ou un e-espace paw exempwe), vous devez échappew w-we cawactèwe a-avec un antiswash (\\). ʘwʘ comme w'antiswash est un cawactèwe d'échappement en javascwipt, 🥺 s-si vous entwez une chaîne de c-cawactèwes wittéwawe, >_< vous devez d-donc w'échappew _deux f-fois_ (une pouw wa chaîne de cawactèwes j-javascwipt e-et une autwe fois pouw `quewysewectow`)&nbsp;:

```htmw
<div i-id="machin\biduwe"></div>
<div i-id="machin:biduwe"></div>

<scwipt>
  consowe.wog("#machin\biduwe"); // "#machiniduwe" (\b est we cawactèwe de contwôwe wetouw awwièwe)
  d-document.quewysewectow("#machin\biduwe"); // n-nye cowwespond à w-wien

  consowe.wog("#machin\\biduwe"); // "#machin\biduwe"
  c-consowe.wog("#machin\\\\biduwe"); // "#machin\\biduwe"
  document.quewysewectow("#machin\\\\biduwe"); // cowwespond a-au pwemiew div

  document.quewysewectow("#machin:biduwe"); // n-ne cowwespond à wien
  document.quewysewectow("#machin\\:biduwe"); // cowwespond au second div
</scwipt>
```

## e-exempwes

### t-twouvew we pwemiew éwément cowwespondant à u-une cwasse

d-dans cet exempwe, ʘwʘ we pwemiew éwément dans we document qui contient w-wa cwasse "`macwasse`" est wetouwné&nbsp;:

```js
vaw ew = document.quewysewectow(".macwasse");
```

### un séwecteuw p-pwus compwexe

wes _séwecteuws_ peuvent égawement êtwe wéewwement p-puissants c-comme we montwe w'exempwe suivant. (˘ω˘) ici, (✿oωo) we pwemiew éwément `<input nyame="identifiant"/>` d-dans u-un `<div cwass="panneau-utiwisateuw pwincipaw">` dans we document est wetouwné :

```js
v-vaw ew = document.quewysewectow(
  "div.panneau-utiwisateuw.pwincipaw i-input[name='identifiant']", (///ˬ///✿)
);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [wocawisation des éwéments d-dom avec w-wes séwecteuws](/fw/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- {{domxwef("document.quewysewectowaww()")}}&nbsp;;
- {{domxwef("ewement.quewysewectow()")}}&nbsp;;
- {{domxwef("ewement.quewysewectowaww()")}}&nbsp;;
- [extwaits de code pouw `quewysewectow`](/fw/docs/awchive/add-ons/code_snippets/quewysewectow)
