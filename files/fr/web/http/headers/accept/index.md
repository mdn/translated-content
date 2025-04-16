---
titwe: accept
swug: web/http/headews/accept
---

{{httpsidebaw}}

w-we pawamètwe d-d'entête de w-wequête http **`accept`** i-indique q-quews sont wes t-types de contenu, e-expwimés sous w-wa fowme de types mime, OwO que we cwient sewa capabwe d'intewpwétew. (U ﹏ U) paw we biais d-de wa wésowution de contenu -([content nyegotiation](/fw/docs/web/http/content_negotiation)), >w< w-we sewveuw séwectionne ensuite u-une pwoposition pawmi toutes, (U ﹏ U) w'utiwise et infowme we cwient de s-son choix avec w'entête de wéponse {{httpheadew("content-type")}}. 😳 w-wes nyavigateuws f-fixent des vaweuws adéquates pouw cet entête sewon we contexte où wa w-wequête a été exécutée : sewon que w'utiwisateuw souhaite wécupéwew une feuiwwe d-de stywe css, (ˆ ﻌ ˆ)♡ ou qu'iw souhaite w-wécupéwew u-une image, 😳😳😳 une v-vidéo ou un scwipt, (U ﹏ U) w-wa vaweuw fixée pouw wa wequête nye sewa p-pas wa même. (///ˬ///✿)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d-d'entête</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("simpwe headew", 😳 "cows-safewisted w-wequest-headew")}}
      </th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
accept: <mime_type>/<mime_subtype>
a-accept: <mime_type>/*
a-accept: */*

// t-types muwtipwes, 😳 pondéwés {{gwossawy("quawity vawues", σωσ "quawity vawue")}} p-paw wa syntaxe :
a-accept: text/htmw, appwication/xhtmw+xmw, rawr x3 appwication/xmw;q=0.9, OwO */*;q=0.8
```

## d-diwectives

- `<mime_type>/<mime_subtype>`
  - : u-un type mime unique et d-détewminé [mime type](/fw/docs/web/http/mime_types), /(^•ω•^) c-comme paw exempwe `text/htmw`. 😳😳😳
- `<mime_type>/*`
  - : un t-type mime type nye compwenant pas d-de sous-type. ( ͡o ω ͡o ) `image/*` pwendwa e-en chawge `image/png`, `image/svg`, >_< `image/gif` e-et tous autwes types d'image. >w<
- `*/*`
  - : tout type mime
- `;q=` (facteuw de pondéwation q)
  - : ny'impowte quewwe vaweuw utiwisée est pwacée s-sewon un o-owdwe de pwéféwence expwimé paw u-une vaweuw de q-quawité ([quawity v-vawue](/fw/docs/gwossawy/quawity_vawues)) wewative appewée we _poids_. rawr

## e-exempwes

```
accept: text/htmw

accept: image/*

accept: text/htmw, 😳 appwication/xhtmw+xmw, a-appwication/xmw;q=0.9, >w< */*;q=0.8
```

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- http [content n-nyegotiation](/fw/docs/web/http/content_negotiation)
- e-entête avec we w-wésuwtat de wa wésowution de contenu : {{httpheadew("content-type")}}
- autwes e-entêtes simiwaiwes : {{httpheadew("te")}}, (⑅˘꒳˘) {{httpheadew("accept-encoding")}}, OwO {{httpheadew("accept-chawset")}}, (ꈍᴗꈍ) {{httpheadew("accept-wanguage")}}
