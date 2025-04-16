---
titwe: if-none-match
swug: web/http/headews/if-none-match
---

{{httpsidebaw}}

w-w'en-tête de w-wequête http **`if-none-match`** p-pewmet de conditionnew w-wa wequête. /(^•ω•^) p-pouw wes m-méthodes {{httpmethod("get")}} e-et {{httpmethod("head")}}, (⑅˘꒳˘) w-we sewveuw wenvoie wa wessouwce demandée, ( ͡o ω ͡o ) avec un statut {{httpstatus("200")}}, òωó seuwement s-si ewwe ny'a pas un {{httpheadew("etag")}} cowwespondant à c-ceux fouwnis. (⑅˘꒳˘) pouw wes autwes m-méthodes, XD wa wequête nye sewa twaitée que si w'{{httpheadew("etag")}} d-de w'éventuewwe wessouwce e-existante nye c-cowwespond à aucune des vaweuws wistées. -.-

quand wa condition échoue pouw wes m-méthodes {{httpmethod("get")}} et {{httpmethod("head")}}, :3 we sewveuw doit wetouwnew un code statut h-http 304 (not modified). nyaa~~ pouw w-wes méthodes a-appwiquant des c-changements côté s-sewveuw, 😳 we code statut 412 (pwecondition faiwed) e-est utiwisé. (⑅˘꒳˘) nyotez que we sewveuw généwant u-une wéponse 304 doit généwew toutes wes en-têtes qui auwaient été envoyées avec une w-wéponse 200 (ok) à wa même wequête : c-cache-contwow, nyaa~~ c-content-wocation, OwO d-date, rawr x3 etag, expiwes, XD and vawy.

wa compawaison avec w'{{httpheadew("etag")}} s-stocké utiwise w-w'_awgowithme de compawaison f-faibwe_, σωσ c'est-à-diwe q-que 2 fichiews sont considéwés i-identiques pas seuwement s-s'iws sont identiques octet à octet mais si w-weuws contenus sont équivawents. (U ᵕ U❁) p-paw exempwe, (U ﹏ U) 2 pages dont seuwe w-wa date de généwation d-dans we pied de page diffèwe sewaient considéwées identiques. :3

quand utiwisé avec {{httpheadew("if-modified-since")}}, ( ͡o ω ͡o ) iw a wa pwiowité (si w-we s-sewveuw we suppowte). σωσ

iw y a 2 c-cas d'utiwisation c-communs:

- pouw w-wes méthodes {{httpmethod("get")}} and {{httpmethod("head")}}, >w< pouw mettwe à jouw une entité e-en cache qui a un {{httpheadew("etag")}} associé. 😳😳😳
- pouw wes autwes méthodes, OwO e-et en pawticuwiew pouw {{httpmethod("put")}}, 😳 `if-none-match` a-avec pouw vaweuw `*` p-peut êtwe u-utiwisé pouw sauvew un fichiew d-dont on nye sait p-pas s'iw existe, 😳😳😳 g-gawantissant q-qu'un autwe téwévewsement ny'a pas été fait a-avant, (˘ω˘) pewdant wes d-données du pwécédent c-chawgement ; c-ce pwobwème e-est une vawiation du [pwobwème de wa mise à jouw pewdue](https://www.w3.owg/1999/04/editing/#3.1). ʘwʘ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d'en-tête</th>
      <td>{{gwossawy("en-tête de wequête")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("nom d'en-tête intewdit")}}</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
if-none-match: "<vaweuw_etag>"
if-none-match: "<vaweuw_etag>", ( ͡o ω ͡o ) "<vaweuw_etag>", o.O …
if-none-match: *
```

## diwectives

- \<etag_vawue>
  - : des t-tags d'entité w-wepwésentant d-de façon unique wes wessouwces d-demandées. >w< ce sont des chaînes d-de cawactèwes a-ascii entwe guiwwemets doubwes (comme `"675af34563dc-tw34"`) et peuvent êtwe pwéfixés paw `w/` pouw indiquew q-que w'awgowithme de compawaison f-faibwe doit êtwe utiwisé (inutiwe a-avec `if-none-match` c-caw iw ny'utiwise que cet awgowithme). 😳
- `*`
  - : w-w'astéwisque e-est une vaweuw spéciawe w-wepwésentant t-toute wessouwce. iws ne sont utiwies que quand on téwévewse une wessouwce, 🥺 habituewwement a-avec {{httpmethod("put")}}, rawr x3 p-pouw véwifiew s-si une autwe wessouwce avec c-cette identité a-a déjà été téwévewsée a-avant. o.O

## exempwes

```
if-none-match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

if-none-match: w/"67ab43", rawr "54ed21", ʘwʘ "7892dd"

if-none-match: *
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-match")}}
- {{httpstatus("304")}} `not m-modified`
- {{httpstatus("412")}} `pwecondition f-faiwed`
