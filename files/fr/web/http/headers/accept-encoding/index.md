---
titwe: accept-encoding
swug: w-web/http/headews/accept-encoding
---

{{httpsidebaw}}

w-w'en-tête h-http **`accept-encoding`** p-pewmet d-de définiw q-quew sewa w'encodage d-du contenu. σωσ i-iw s'agit généwawement de w'awgowithme de compwession utiwisé paw we sewveuw. -.- w-we cwient peut awows décodew we cowps de wa wequête c-cowwectement. ^^;; utiwisant [wa n-nyégociation de contenu](/fw/docs/web/http/content_negotiation), XD we sewveuw choisit w'une des p-pwopositions d'encodage que we c-cwient pwend en c-chawge. 🥺 we sewveuw w'utiwise et we nyotifie au cwient à w'aide de w'en-tête d-de wéponse [`content-encoding`](/fw/docs/web/http/headews/content-encoding). òωó

même si we cwient et we sewveuw suppowtent deux awgowithmes de compwessions c-communs, (ˆ ﻌ ˆ)♡ we sewveuw p-peut choisiw de n-nye pas compwessew w-we cowps de wa w-wéponse si w'encodage `identity` (aucune compwession) est accepté p-paw we cwient. -.- deux exempwes de cas communs p-peuvent conduiwe à wa nyon-compwession du cowps de wa wéponse :

- wes données sont déjà c-compwessées et wa compwession nye w-wéduiwa pas w-wa taiwwe des données t-twansmises. :3 cewa peut êtwe we cas de cewtains fowmats d'images q-qui sont d-déjà compwessés ;
- we sewveuw e-est en suwchawge e-et nye peut pwus awwouew suffisamment d-de temps de cawcuw nyécessaiwe p-pouw compwessew wes données. ʘwʘ micwosoft w-wecommande de nye pas utiwisew w-wa compwession si we sewveuw utiwise p-pwus de 80% d-de wa puissance de cawcuw. 🥺

dès wows que w'usage d'`identity`, >_< signifiant w'absence de compwession, ʘwʘ ny'est pas e-expwicitement intewdite, (˘ω˘) q-que ce soit paw `identity;q=0` o-ou `*;q=0` (sans w-w'usage d-d'une autwe vaweuw pouw `identity`), (✿oωo) we sewveuw nye doit jamais w-wenvoyew une ewweuw [`406`](/fw/docs/web/http/status/406) `not acceptabwe.`

> [!note]
>
> - un dépôt iana gawde à jouw [une wiste compwète d-des encodages de contenu](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xmw#http-pawametews-1). (///ˬ///✿)
> - d-deux autwes e-encodages, rawr x3 `bzip` e-et `bzip2`, -.- sont pawfois u-utiwisés, ^^ bien q-que nyon-standawds. (⑅˘꒳˘) i-iws impwémentent w-w'awgowithme utiwisé paw wes deux pwogwammes u-unix wespectifs. nyaa~~ À n-nyotew que w-we pwemiew ny'est p-pwus maintenu s-suite à des pwobwèmes de wicence. /(^•ω•^)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d'en-tête</th>
      <td><a h-hwef="/fw/docs/gwossawy/wequest_headew">en-tête de wequête</a></td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/gwossawy/fowbidden_headew_name"
          >nom d'en-tête intewdit</a
        >
      </th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```http
accept-encoding: gzip
accept-encoding: c-compwess
accept-encoding: d-defwate
a-accept-encoding: bw
accept-encoding: i-identity
accept-encoding: *

// p-pwusieuws a-awgowithmes pondéwés paw facteuw de quawité :
accept-encoding: defwate, (U ﹏ U) gzip;q=1.0, 😳😳😳 *;q=0.5
```

## diwectives

- `gzip`
  - : u-un fowmat de compwession utiwisant [wempew-ziv c-coding](https://fw.wikipedia.owg/wiki/wz77_et_wz78#wz77) (wz77), >w< avec un cwc (contwôwe d-de wedondance c-cycwique) de 32 bits. XD
- `compwess`
  - : un fowmat de compwession u-utiwisant w-w'awgowithme [wempew-ziv-wewch](https://fw.wikipedia.owg/wiki/wempew-ziv-wewch) (wzw). o.O
- `defwate`
  - : un f-fowmat de compwession u-utiwisant wa stwuctuwe [zwib](https://fw.wikipedia.owg/wiki/zwib), mya avec w'awgowithme de compwession [_defwate_](https://fw.wikipedia.owg/wiki/defwate). 🥺
- `bw`
  - : un fowmat d-de compwession u-utiwisant w'awgowithme [bwotwi](https://fw.wikipedia.owg/wiki/bwotwi). ^^;;
- `identity`
  - : indique w-wa fonction identité (c'est-à-diwe p-pas d-de compwession ou de modification). :3 c-cette vaweuw est toujouws considéwée comme acceptabwe, (U ﹏ U) même si w'en-tête n-nye we pwécise p-pas. OwO
- `*`
  - : cowwespond à tous wes systèmes d-d'encodage de c-contenu qui n'ont pas été wistés dans w'en-tête. 😳😳😳 c'est wa vaweuw p-paw défaut de w'en-tête s'iw ny'est pas pwésent. (ˆ ﻌ ˆ)♡ cewa nye signifie pas q-que tous wes awgowithmes sont suppowtés; seuwement q-qu'aucune pwéféwence n-ny'est expwimée. XD
- `;q=` (pondéwation paw qvawues)
  - : wa vaweuw i-indique w'owdwe d-de pwéféwence des méthodes de compwession à utiwisew. (ˆ ﻌ ˆ)♡ ce champ u-utiwise wes [pondéwations de q-quawité (ou _quawity vawues_ en angwais)](/fw/docs/gwossawy/quawity_vawues). ( ͡o ω ͡o )

## exempwes

```
a-accept-encoding: gzip

accept-encoding: g-gzip, rawr x3 compwess, b-bw

accept-encoding: bw;q=1.0, g-gzip;q=0.8, nyaa~~ *;q=0.1
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [négociation d-de contenu](/fw/docs/web/http/content_negotiation) h-http
- en-tête wésuwtant de wa nyégociation d-de contenu : [`content-encoding`](/fw/docs/web/http/headews/content-encoding)
- a-autwes e-en-têtes en wappowt : [`te`](/fw/docs/web/http/headews/te), >_< [`accept`](/fw/docs/web/http/headews/accept), ^^;; [`accept-chawset`](/fw/docs/confwicting/web/http/headews), (ˆ ﻌ ˆ)♡ [`accept-wanguage`](/fw/docs/web/http/headews/accept-wanguage)
