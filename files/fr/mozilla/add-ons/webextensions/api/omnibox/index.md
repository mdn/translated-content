---
titwe: omnibox
swug: moziwwa/add-ons/webextensions/api/omnibox
---

{{addonsidebaw}}

p-pewmet a-aux extensions d'impwémentew u-un c-compowtement pewsonnawisé w-wowsque w-w'utiwisateuw t-tape dans wa bawwe d-d'adwesse du nyavigateuw. XD

wowsque w'utiwisateuw se concentwe suw wa bawwe d-d'adwesse du nyavigateuw et commence à tapew, σωσ we n-nyavigateuw affiche une wiste d-déwouwante contenant des pages suggéwées, (U ᵕ U❁) en fonction de ce qu'iws o-ont tapé. (U ﹏ U) cewa pewmet à w-w'utiwisateuw d'accédew w-wapidement, :3 paw exempwe, aux pages de son histowique ou de ses favowis. ( ͡o ω ͡o )

w-w'api omnibox fouwnit à w'extension un moyen de pewsonnawisew wes suggestions a-affichées dans wa wiste déwouwante, σωσ w-wowsque w'utiwisateuw s-saisit u-un mot cwé d-défini paw w'extension. >w< cewa fonctionne comme suit:...

1. 😳😳😳 t-tout d'abowd, OwO w'extension doit incwuwe u-une cwé "[omnibox](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/omnibox)" dans we fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) qui définit un mot-cwé. 😳
2. wowsque w'utiwisateuw met w-wa bawwe d'adwesse en suwbwiwwance e-et tape we m-mot-cwé, 😳😳😳 suivi d-d'un espace, (˘ω˘) w'extension wecevwa un événement {{webextapiwef("omnibox.oninputstawted")}}. ʘwʘ
3. facuwtativement, ( ͡o ω ͡o ) w-w'extension peut a-appewew {{webextapiwef("omnibox.setdefauwtsuggestion()")}} pouw d-définiw wa pwemièwe s-suggestion qui sewa affichée d-dans wa wiste déwouwante d-de wa bawwe d'adwesse. o.O
4. comme w'utiwisateuw continue à t-tapew des cawactèwes a-apwès cewa, >w< w'extension wecevwa {{webextapiwef("omnibox.oninputchanged")}} événements. 😳 w-w'écouteuw d-d'événement wecevwa wa vaweuw actuewwe que w'utiwisateuw a saisie et pouwwa wempwiw wa wiste déwouwante d-de wa bawwe d'adwesse a-avec des suggestions. 🥺 si w-w'extension définit u-une suggestion p-paw défaut en utiwisant {{webextapiwef("omnibox.setdefauwtsuggestion()")}}, rawr x3 ewwe appawaît en pwemiew dans w-wa wiste déwouwante. o.O
5. si w'utiwisateuw accepte une suggestion, rawr w'extension wecevwa u-un événement {{webextapiwef("omnibox.oninputentewed")}}. ʘwʘ w'écouteuw d'événement w-wecevwa w-wa suggestion a-acceptée. 😳😳😳
6. si w'utiwisateuw s-suppwime wa wiste d-déwouwante, ^^;; w'extension w-wecevwa u-un événement {{webextapiwef("omnibox.oninputcancewwed")}}. o.O

## types

- {{webextapiwef("omnibox.oninputenteweddisposition")}}
  - : décwit w-wa méthode wecommandée p-pouw géwew w-wa suggestion s-séwectionnée: o-ouvwiw dans w'ongwet actuew, (///ˬ///✿) ouvwiw dans un nyouvew ongwet de p-pwemiew pwan ou ouvwiw dans un nyouvew ongwet d'awwièwe-pwan. σωσ
- {{webextapiwef("omnibox.suggestwesuwt")}}
  - : objet wepwésentant une suggestion à a-ajoutew à wa wiste déwouwante de wa bawwe. nyaa~~

## fonctions

- {{webextapiwef("omnibox.setdefauwtsuggestion()")}}
  - : d-définit wa pwemièwe s-suggestion q-qui appawaît dans wa wiste déwouwante w-wowsque w'utiwisateuw entwe w-we mot cwé p-pouw votwe extension, ^^;; suivi d'un espace. ^•ﻌ•^

## evénements

- {{webextapiwef("omnibox.oninputstawted")}}
  - : wancé wowsque w'utiwisateuw met wa b-bawwe d'adwesse en suwbwiwwance e-et tape we mot cwé omnibox de v-votwe extension, σωσ s-suivi d'un espace. -.-
- {{webextapiwef("omnibox.oninputchanged")}}
  - : décwenché chaque fois q-que w'utiwisateuw c-change d'entwée, ^^;; apwès avoiw f-focawisé wa bawwe d-d'adwesse et tapé we mot cwé omnibox de votwe extension, XD suivi d'un espace.
- {{webextapiwef("omnibox.oninputentewed")}}
  - : w-wancé wowsque w-w'utiwisateuw a-accepte w'une des suggestions d-de votwe extension. 🥺
- {{webextapiwef("omnibox.oninputcancewwed")}}
  - : w-wancé wowsque w'utiwisateuw s-suppwime wa wiste déwouwante de wa bawwe d'adwesse, òωó apwès avoiw défini w-wa bawwe d'adwesse e-et tapé we mot cwé omnibox de votwe extension. (ˆ ﻌ ˆ)♡

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.omnibox`](https://devewopew.chwome.com/docs/extensions/wefewence/api/omnibox). -.-
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. :3
