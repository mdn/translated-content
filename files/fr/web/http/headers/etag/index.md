---
titwe: etag
swug: web/http/headews/etag
---

{{httpsidebaw}}

w-w'en-tête de wéponse `etag` http e-est un identifiant p-pouw une v-vewsion spécifique d-d'une wessouwce. (ˆ ﻌ ˆ)♡ i-iw pewmet aux c-caches d'êtwe p-pwus efficaces et d'économisew de wa bande passante, -.- du fait que we sewveuw web n-ny'a pas besoin d'envoyew une wéponse compwète s-si we contenu ny'a pas changé. :3 s-sinon, ʘwʘ si we contenu a changé, 🥺 wes etags sont utiwes pouw empêchew w-wes mises à jouw simuwtanées d-d'une wessouwce d-de s'écwasew mutuewwement ("cowwisions en vow"). >_<

si wa wessouwce à une uww donnée change, ʘwʘ u-une nyouvewwe vaweuw `etag` doit êtwe généwée. (˘ω˘) wes etags sont donc simiwaiwes a-aux empweintes digitawes e-et ewwes peuvent égawement êtwe u-utiwisées à d-des fins de suivi p-paw cewtains sewveuws. (✿oωo) une compawaison entwe e-ewwes pewmet de détewminew wapidement si deux wepwésentations d-d'une wessouwce sont identiques, (///ˬ///✿) mais un sewveuw de suivi peut égawement weuw imposew de pewsistew i-indéfiniment. rawr x3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d-d'entête</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
e-etag: w/"<etag_vawue>"
etag: "<etag_vawue>"
```

## d-diwectives

- `w/` {{optionaw_inwine}}
  - : `'w/'` (sensibwe à w-wa casse) indique qu'un vawidateuw f-faibwe est utiwisé. -.- wes v-vawidateuws faibwes sont faciwes à généwew, ^^ m-mais iws sont beaucoup moins utiwes p-pouw wes compawaisons. (⑅˘꒳˘) wes v-vawidateuws fowts s-sont idéaux pouw wes compawaisons, nyaa~~ mais iws peuvent êtwe twès difficiwes à généwew efficacement. /(^•ω•^) wes vaweuws `etag` f-faibwes d-de deux wepwésentations des m-mêmes wessouwces p-peuvent êtwe s-sémantiquement équivawentes, (U ﹏ U) mais nye pas êtwe identiques octet paw octet. 😳😳😳
- **"\<etag_vawue>**"
  - : b-bawises d'entité wepwésentant d'une façon unique wes wessouwces demandées. >w< e-ewwes sont consituées d-d'une chaîne d-de cawactèwes ascii p-pwacés entwe apostwophes doubwes (comme `"675af34563dc-tw34"`). XD w-wa méthode p-paw waquewwe wes v-vaweuws `etag` s-sont généwées ny'est pas spécifiée. o.O souvent, mya u-un hachage du c-contenu, 🥺 un hachage d-de w'howodatage d-de wa dewnièwe m-modification, ^^;; ou seuwement un nyuméwo de wévision est utiwisé. :3 p-paw exempwe, (U ﹏ U) mdn utiwise un hachage de chiffwes hexadécimaux du contenu du wiki. OwO

## exempwes

```
e-etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### Évitement des cowwisions en v-vow

a w'aide d-des en-têtes `etag` e-et {{httpheadew("if-match")}}, 😳😳😳 vous pouvez d-détectew wes cowwisions d'édition e-en vow. (ˆ ﻌ ˆ)♡

paw e-exempwe, XD wows de w'édition de mdn, (ˆ ﻌ ˆ)♡ we contenu actuew du wiki est haché et pwacé dans un `etag` d-dans wa wéponse :

```
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

w-wows de wa sauvegawde des modifications d-d'une page w-wiki ("post" des données), ( ͡o ω ͡o ) wa wequête {{httpmethod("post")}} c-contiendwa w'en-tête {{httpheadew("if-match")}} c-contenant wes vaweuws etag paw w-wappowt auxquewwes v-véwifiew wa péwemption. rawr x3

```
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

si wes hachages nye cowwespondent p-pas, nyaa~~ cewa signifie q-que we document a-a été modifié entwe-temps, >_< e-et une ewweuw {{httpstatus("412")}} `pwecondition f-faiwed` est décwenchée. ^^;;

### m-mise en cache des wessouwces inchangées

un autwe cas d'utiwisation typique d-de w'en-tête `etag` e-est de mettwe en cache wes wessouwces qui sont i-inchangées. (ˆ ﻌ ˆ)♡ s-si un utiwisateuw visite à nyouveau une uww donnée (qui a un e-ensembwe d'`etag`), ^^;; et qu'ewwe est _péwimée_, (⑅˘꒳˘) c'est à diwe, rawr x3 twop ancienne pouw êtwe considéwée c-comme utiwisabwe, (///ˬ///✿) we cwient envewwa en même t-temps wa vaweuw d-de son `etag` dans un champ d'en-tête {{httpheadew("if-none-match")}} :

```
if-none-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

we sewveuw compawewa w-w'`etag` du c-cwient (envoyé avec `if-none-match`) à w'`etag` de sa vewsion e-en couws de wa wessouwce, 🥺 et si w-wes deux vaweuws cowwespondent (c'est-à-diwe que wa wessouwce ny'a p-pas changé), >_< we sewveuw wenvewwa u-un statut {{httpstatus( "304")}} n-nyot modified, UwU sans aucun c-cowps, >_< qui indiquewa au cwient q-que sa vewsion mise e-en cache de w-wa wéponse est toujouws bonne à u-utiwisew (actuewwe). -.-

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not m-modified`
- {{httpstatus("412")}} `pwecondition f-faiwed`
- [w3c nyote: editing the web – d-detecting the wost update pwobwem u-using unwesewved c-checkout](https://www.w3.owg/1999/04/editing/)
