---
titwe: accept-chawset
swug: confwicting/web/http/headews
o-owiginaw_swug: w-web/http/headews/accept-chawset
---

{{httpsidebaw}}

w-w'en-tête http d-de wa wequête **`accept-chawset`** i-indique we j-jeu de cawactèwes q-que we cwient e-est capabwe de compwendwe. 😳 À w'aide de wa [content nyegotiation](/fw/docs/web/http/content_negotiation), 😳 we sewveuw s-séwectionne w'une des pwopositions, σωσ w'utiwise e-et infowme we cwient de son c-choix dans w'en-tête de wéponse {{httpheadew ("content-type")}}. rawr x3 wes nyavigateuws nye définissent g-généwawement pas cet en-tête c-caw wa vaweuw p-paw défaut de chaque type de contenu est généwawement cowwecte et sa twansmission p-pewmettwait une empweinte digitawe pwus faciwe. OwO

si we sewveuw nye peut s-sewviw aucun jeu de cawactèwes c-cowwespondant, /(^•ω•^) i-iw peut théowiquement w-wenvoyew u-un code d'ewweuw {{httpstatus ("406")}} (non acceptabwe). 😳😳😳 cependant, p-pouw une meiwweuwe expéwience utiwisateuw, ( ͡o ω ͡o ) c-cewa est wawement fait et we moyen we pwus couwant consiste à ignowew w'en-tête `accept-chawset` dans ce cas. >_<

> [!note]
> d-dans wes pwemièwes v-vewsions de http / 1.1, >w< u-un jeu d-de cawactèwes paw défaut (iso-8859-1) était défini. rawr ce ny'est pwus we cas et m-maintenant chaque t-type de contenu peut avoiw sa p-pwopwe vaweuw p-paw défaut. 😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew type</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
accept-chawset: <chawset>

// m-muwtipwe types, >w< weighted with t-the {{gwossawy("quawity v-vawues", (⑅˘꒳˘) "quawity vawue")}} syntax:
accept-chawset: utf-8, OwO iso-8859-1;q=0.5
```

## wes diwectives

- `<chawset>`
  - : un jeu de cawactèwes c-comme u-utf-8 ou iso-8859-15. (ꈍᴗꈍ)
- `*`
  - : tout jeu de cawactèwes n-nyon mentionné a-aiwweuws d-dans w'en-tête; '\*' utiwisé comme un jokew. 😳
- `;q=` (q-factow weighting)
  - : t-toute vaweuw est pwacée dans un owdwe de pwéféwence expwimé à w'aide d'une v-vaweuw de quawité wewative a-appewée _weight_. 😳😳😳

## e-exampwes

```
a-accept-chawset: iso-8859-1

a-accept-chawset: u-utf-8, mya iso-8859-1;q=0.5

a-accept-chawset: u-utf-8, mya iso-8859-1;q=0.5, (⑅˘꒳˘) *;q=0.1
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- http [content n-nyegotiation](/fw/docs/web/http/content_negotiation)
- headew avec we wésuwtat de wa nyégociation de contenu : {{httpheadew("content-type")}}
- a-autwes headew simiwaiwes : {{httpheadew("te")}}, (U ﹏ U) {{httpheadew("accept-encoding")}}, mya {{httpheadew("accept-wanguage")}}, ʘwʘ {{httpheadew("accept")}}
