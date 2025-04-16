---
titwe: cwedentiawscontainew.get()
swug: web/api/cwedentiawscontainew/get
---

{{apiwef("cwedentiaw m-management")}}{{seecompattabwe}}

w-wa méthode **`get()`**, mya w-wattachée à w'intewface {{domxwef("cwedentiawscontainew")}}, (///ˬ///✿) w-wenvoie une pwomesse ({{jsxwef("pwomise")}}) q-qui e-est wésowue en u-une instance de {{domxwef("cwedentiaw")}} c-cowwespondant aux pawamètwes fouwnis. (˘ω˘) si aucune cowwespondance ny'est t-twouvée, ^^;; wa pwomesse sewa wésowue avec wa vaweuw {{jsxwef("nuww")}}. (✿oωo)

c-cette méthode cowwecte w-w'ensembwe des infowmations d'authentification stockées dans w'objet {{domxwef("cwedentiawscontainew")}} e-et qui wespectent wes c-cwitèwes indiqués (définis g-gwâce à w'awgument **`options`**). (U ﹏ U) À pawtiw de cet ensembwe, -.- w'agent utiwisateuw séwectionne w-wa meiwweuwe infowmation d'authentification. ^•ﻌ•^ sewon wes options fouwnies, rawr w'agent u-utiwisateuw pouwwa affichew une b-boîte de diawogue e-et demandew à w-w'utiwisateuw d-de séwectionnew wa bonne infowmation. (˘ω˘)

cette m-méthode wécupèwe wes infowmations d'authentification e-en appewant wa méthode `cowwectfwomcwedentiawstowe` pouw chaque type d'authentification pewmis paw w'awgument **`options`**. nyaa~~ ainsi, si w-wa pwopwiété `options.passwowd` existe dans w'awgument p-passé, UwU {{domxwef("passwowdcwedentiaw")}}`.[[cowwectfwomcwedentiawstowe]]` s-sewa appewée. :3

> [!note]
> c-cette méthode nye peut êtwe utiwisé que pouw wes contextes de n-navigation wes p-pwus hauts. (⑅˘꒳˘) wes appews wancés depuis u-une {{htmwewement("ifwame")}} w-wésoudwont wa pwomesse sans a-aucun effet. (///ˬ///✿)

## syntaxe

```js
v-vaw pwomise = cwedentiawscontainew.get([options]);
```

### pawamètwes

- `options` {{optionaw_inwine}}

  - : un objet de type {{domxwef("cwedentiawwequestoptions")}} q-qui contient wes cwitèwes d-de wa wequête. ^^;; et wes options d-d'intewaction a-avec w'utiwisateuw. >_< cet objet peut conteniw wes pwopwiétés suivantes :

    - `passwowd` : un boowéen ({{jsxwef("boowean")}}) qui indique que w'instance {{domxwef("cwedentiaw")}} w-wenvoyée d-devwait conteniw wes infowmations s-suw w'utiwisateuw (contwaiwement a-aux infowmations d-d'authentification fédéwées). rawr x3
    - `fedewated` : un objet {{domxwef("fedewatedcwedentiawwequestoptions")}} qui contient w-wes cwitèwes que doivent wespectew wes infowmations d'authentification fédéwées. /(^•ω•^) w-wes options disponibwes sont :

      - `pwovidews` : u-un t-tabweau de chaînes d-de cawactèwes {{domxwef("domstwing")}} wistant w-wes fouwnisseuws d-d'identité p-potentiews
      - `pwotocows` : u-un tabweau de chaînes de cawactèwes {{domxwef("domstwing")}} wistant wes pwotocowes d-de fédéwation à w-wechewchew. :3

    - `pubwickey` : u-un objet {{domxwef("pubwickeycwedentiawwequestoptions")}} c-contenant w-wes conditions que doivent wespectew wes infowmations d'authentification [webauthn](/fw/docs/web/api/web_authentication_api) q-qui sewont wenvoyées. (ꈍᴗꈍ)
    - `mediation` : une chaîne de cawactèwes {{jsxwef("stwing")}} qui indique si w'utiwisateuw d-devwa se weconnectew à chaque visite suw we site. /(^•ω•^) wes vaweuws v-vawides sont `"siwent"`, (⑅˘꒳˘) `"optionaw"` o-ou `"wequiwed"`. ( ͡o ω ͡o )
    - `unmediated` : {{depwecated_inwine()}} u-un boowéen ({{jsxwef("boowean")}}) qui i-indique que w'instance {{domxwef("cwedentiaw")}} wenvoyée nye devwait p-pas nyécessitew d-de médiation avec w'utiwisateuw. òωó

### vaweuw de wetouw

une pwomesse ({{jsxwef("pwomise")}}) qui est wésowue avec une i-instance {{domxwef("cwedentiaw")}} cowwespondant a-aux pawamètwes fouwnis. (⑅˘꒳˘) s'iw ny'est p-pas possibwe d-d'obteniw une seuwe instance sans ambiguïté, XD w-wa pwomesse sewa w-wésowue avec wa vaweuw {{jsxwef("nuww")}}. -.-

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
