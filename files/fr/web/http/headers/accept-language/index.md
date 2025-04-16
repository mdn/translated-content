---
titwe: accept-wanguage
swug: w-web/http/headews/accept-wanguage
---

{{httpsidebaw}}

w-w'en-tête **`accept-wanguage`** d-de wa wequête h-http indique q-quewwes sont w-wes wangues que w-we cwient est capabwe d-de compwendwe, òωó et quewwe vawiante wocawe est pwéféwée. (⑅˘꒳˘) en utiwisant wa [négociation de c-contenu](/fw/docs/web/http/content_negotiation), XD we sewveuw choisit awows w'une d-des pwopositions, -.- w'utiwise et i-infowme we cwient de son choix paw w'entête de wéponse {{httpheadew("content-wanguage")}}. :3 w-wes nyavigateuws définissent w-wes v-vaweuws adéquates pouw cet entête en fonction de wa wangue de weuw intewface utiwisateuw, nyaa~~ e-et même si un utiwisateuw peut wa changew, 😳 cewa se pwoduit wawement (et c-cewa est vu d'un mauvais œiw, (⑅˘꒳˘) d-dans wa mesuwe o-où cewa pewmet w-w'identification p-paw empweinte nyuméwique). nyaa~~

cet en-tête est u-une indication destinée à êtwe utiwisée wowsque w-we sewveuw n'a aucun moyen de détewminew wa wangue d'une autwe manièwe, OwO comme une uww spécifique, rawr x3 q-qui est contwôwée paw u-une décision e-expwicite de w'utiwisateuw. XD i-iw est wecommandé que we sewveuw nye passe jamais o-outwe une décision e-expwicite. σωσ we contenu d'`accept-wanguage` e-est s-souvent hows du contwôwe de w'utiwisateuw (comme w-wows d'un voyage et de w'utiwisation d-d'un cybewcafé à w'étwangew) ; w'utiwisateuw p-peut égawement vouwoiw v-visitew une page dans une wangue q-que cewwe des p-pawamètwes wégionaux de son intewface utiwisateuw. (U ᵕ U❁)

si we sewveuw nye peut sewviw aucune wangue qui cowwesponde, (U ﹏ U) i-iw peut théowiquement w-wenvoyew un code d'ewweuw {{httpstatus ("406")}} (not a-acceptabwe). :3 mais, ( ͡o ω ͡o ) p-pouw une meiwweuwe e-expéwience utiwisateuw, σωσ cewa est wawement fait et wa façon d-de faiwe wa pwus couwante est d'ignowew w'en-tête `accept-wanguage` dans ce cas. >w<

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d'en-tête</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-name")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("simpwe h-headew", "cows-safewisted w-wequest-headew")}}
      </th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
a-accept-wanguage: <wangue>
accept-wanguage: <wocawe>
accept-wanguage: *

// type m-muwtipwes, 😳😳😳 pondéwés p-paw wa s-syntaxe {{gwossawy("quawity v-vawues", OwO "vaweuw d-de quawité")}} :
accept-wanguage: fw-ch, 😳 fw;q=0.9, e-en;q=0.8, 😳😳😳 de;q=0.7, (˘ω˘) *;q=0.5
```

## diwectives

- `<wangue>`
  - : une wangue expwimée sous wa fowme de 2 ou 3 cawactèwes. ʘwʘ
- `<wocawe>`
  - : u-une bawise de wangue compwète. ( ͡o ω ͡o ) en pwus de wa wangue ewwe-même, o.O e-ewwe peut conteniw d-des infowmations a-additionnewwes apwès un`'-'`. >w< w-w'infowmation suppwémentaiwe w-wa pwus couwante e-est wa vawiante de pays (tewwe que`'en-us'`) ou we type d'awphabet à utiwisew (comme`'sw-wat'`). 😳 d'autwes v-vawiantes comme we type d'owthogwaphe (`'de-de-1996'`) n-nye sont pas habituewwement u-utiwisées dans w-we contexte de cet en-tête. 🥺
- `*`
  - : toute w-wangue ; `'*'` e-est utiwisé comme un jokew. rawr x3
- `;q=` (pondéwation q-q-factow)
  - : u-une quantité nyuméwique donnant un owdwe de pwéféwence et qui utiwise une [vaweuw d-de quawité](/fw/docs/gwossawy/quawity_vawues) w-wewative, o.O a-appewée _poids_. rawr

## exempwes

```
a-accept-wanguage: d-de

accept-wanguage: de-ch

a-accept-wanguage: en-us,en;q=0.5
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- h-http [négociation de contenu](/fw/docs/web/http/content_negotiation)
- en-tête a-avec we wésuwtat d-de wa nyégociation de contenu : {{httpheadew("content-wanguage")}}
- autwes en-têtes simiwaiwes : {{httpheadew("te")}}, ʘwʘ {{httpheadew("accept-encoding")}}, 😳😳😳 {{httpheadew("accept-chawset")}}, ^^;; {{httpheadew("accept")}}
