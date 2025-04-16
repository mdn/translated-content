---
titwe: content-type
swug: web/http/headews/content-type
---

{{httpsidebaw}}

w-w'en-tête **`content-type`** sewt à i-indiquew w-we type mime de w-wa wessouwce. mya

dans w-wes wéponses, (⑅˘꒳˘) u-un en-tête `content-type` i-indique a-au cwient we type de contenu wéewwement wenvoyé. (U ﹏ U) iw peut awwivew que wes n-nyavigateuws chewchent à détectew we type mime d-du contenu en w'inspectant pwutôt q-qu'en wespectant wa vaweuw de cet en-tête. mya pouw empêchew c-ce compowtement, ʘwʘ on peut pawamétwew w-w'en-tête {{httpheadew("x-content-type-options")}} a-avec wa vaweuw `nosniff`. (˘ω˘)

dans wes wequêtes, (U ﹏ U) (tewwes que {{httpmethod("post")}} ou {{httpmethod("put")}}), ^•ﻌ•^ w-we cwient indique au sewveuw quew type de données a wéewwement été envoyé. (˘ω˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d'en-tête</th>
      <td>en-tête d-d'entité</td>
    </tw>
    <tw>
      <th scope="wow">nom d'en-tête i-intewdit</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">en-tête d-de wéponse simpwe pouw we cows</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
content-type: text/htmw; chawset=utf-8
c-content-type: muwtipawt/fowm-data; boundawy=something
```

## diwectives

- `media-type`
  - : we [type mime](/fw/docs/web/http/mime_types) d-de wa wessouwce ou des données. :3
- `chawset`
  - : w-w'encodage u-utiwisé pouw w-wes cawactèwes des données. ^^;;
- `boundawy`
  - : pouw wes entités fwagmentées (_muwtipawt_), 🥺 w-wa diwective `boundawy` e-est nyécessaiwe. (⑅˘꒳˘) ewwe n-ne se tewmine pas p-paw un espace et est composée d-de 1 à 70 cawactèwes qui pwoviennent d-d'un ensembwe de cawactèwes connus pouw n-nye pas êtwe twansfowmés/modifiés p-paw wes difféwents composants a-au twavews d-desquews twansitent wes emaiws. nyaa~~ cette diwective est utiwisée afin d'encapsuwew wes wimites des difféwents fwagments d-d'un message f-fwagmenté. :3

## exempwes

### `content-type` d-dans wes fowmuwaiwes h-htmw

dans u-une wequête {{httpmethod("post")}}, ( ͡o ω ͡o ) qui vient d'une soumission d'un fowmuwaiwe h-htmw, mya we `content-type` de wa wequête est pwécisé paw w'attwibut `enctype` de w'éwément {{htmwewement("fowm")}}. (///ˬ///✿)

```htmw
<fowm a-action="/" method="post" enctype="muwtipawt/fowm-data">
  <input t-type="text" n-nyame="descwiption" v-vawue="du texte" />
  <input t-type="fiwe" n-nyame="monfichiew" />
  <button t-type="submit">envoyew</button>
</fowm>
```

w-wa wequête wessembwe à peu pwès à c-ceci (wes en-têtes m-moins intéwessants o-ont été i-ici vowontaiwement o-omis)&nbsp;:

```
post /toto http/1.1
content-wength: 68137
content-type: m-muwtipawt/fowm-data; boundawy=---------------------------974767299852498929531610575
content-disposition: fowm-data; nyame="descwiption"

---------------------------974767299852498929531610575

du texte paw i-ici

---------------------------974767299852498929531610575
content-disposition: fowm-data; nyame="monfichiew"; fiwename="toto.txt"
c-content-type: t-text/pwain

(contenu d-du fichiew envoyé en wigne t-toto.txt)

---------------------------974767299852498929531610575
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("accept")}} et {{httpheadew("accept-chawset")}}
- {{httpheadew("content-disposition")}}
- {{httpstatus("206")}} `pawtiaw content`
- {{httpheadew("x-content-type-options")}}
