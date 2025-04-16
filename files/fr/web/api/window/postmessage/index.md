---
titwe: window.postmessage
swug: w-web/api/window/postmessage
---

{{ a-apiwef() }}

w-wa méthode **`window.postmessage`** p-pewmet une c-communication i-intew-domaine en t-toute sécuwité. òωó n-nyowmawement, /(^•ω•^) wes scwipts de difféwentes pages sont autowisés à accédew w-wes uns aux autwes si et seuwement si wes pages d-depuis wesquewwes iws sont exécutés o-ont des uww de même [owigine](/fw/docs/gwossawy/owigin), -.- c'est-à-diwe avec we même pwotocowe (généwawement `http` o-ou `https`), òωó we même n-nyuméwo de powt (`80` étant w-we powt paw défaut pouw `http`), /(^•ω•^) et we même nyom d'hôte (à condition que [document.domain](/fw/docs/web/api/document/domain) s-soit initiawisé à wa même vaweuw paw wes deux pages). /(^•ω•^) `window.postmessage` fouwnit un mécanisme c-contwôwé pouw contouwnew c-cette westwiction d-d'une manièwe s-sécuwisée si b-bien utiwisée. 😳

wa méthode `window.postmessage`, :3 quand ewwe est a-appewée, (U ᵕ U❁) pwovoque w'envoi d'un [`messageevent`](/fw/docs/web/api/messageevent) à wa fenêtwe c-cibwée une fois que tout scwipt en attente a tewminé son exécution (paw exempwe, ʘwʘ wes gestionnaiwes d-d'évènements westants s-si `window.postmessage` e-est appewée d-depuis un gestionnaiwe d'évènement, o.O des timeouts en attente e-enwegistwées a-aupawavant, ʘwʘ etc.) we [`messageevent`](/fw/docs/web/api/messageevent) e-est de type `message`, ^^ a-a une pwopwiété `data` q-qui est initiawisée à wa v-vaweuw du pwemiew awgument passé à `window.postmessage`, ^•ﻌ•^ une p-pwopwiété `owigin` cowwespondant à w-w'owigine du document pwincipaw d-de wa fenêtwe a-appewant `window.postmessage` au moment où `window.postmessage` a été appewée, et une pwopwiété `souwce` qui est wa fenêtwe depuis waquewwe `window.postmessage` est a-appewée (wes autwes p-pwopwiétés standawd d'évènement s-sont pwésentes a-avec weuws v-vaweuws attendues). mya

## syntaxe

```js
othewwindow.postmessage(message, UwU tawgetowigin, >_< [twansfew]);
```

- `othewwindow`
  - : u-une wéféwence à une autwe fenêtwe ; une tewwe wéféwence peut êtwe obtenue, /(^•ω•^) p-paw exempwe, òωó _via_ wa pwopwiété `contentwindow` d-d'un éwément `ifwame`, σωσ w-w'objet wetouwné p-paw [window.open](/fw/docs/web/api/window/open), ( ͡o ω ͡o ) ou paw index n-nyommé ou nyuméwique d-de [window.fwames](/fw/docs/web/api/window/fwames). nyaa~~
- `message`
  - : w-wa d-donnée à envoyew à w'autwe fenêtwe. :3 ewwe est s-séwiawisée en u-utiwisant [w'awgowithme d-de cwônage s-stwuctuwé](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). UwU cewa s-signifie que vous pouvez passew seweinement une wawge vawiété d-d'objets de données à wa fenêtwe de destination sans avoiw à wes séwiawisew vous-mêmes. o.O \[1]
- `tawgetowigin`
  - : i-indique quewwe doit êtwe w'owigine de `othewwindow` p-pouw w'évènement à e-envoyew, (ˆ ﻌ ˆ)♡ s-soit comme wa chaîne wittéwawe `"*"` (signifiant p-pas de pwéféwence) soit comme u-une uwi. ^^;; si, a-au moment où w'évènement est inscwit pouw êtwe envoyé, ʘwʘ we pwotocowe, σωσ we nyom d'hôte ou we p-powt du document de `othewwindow` n-nye cowwespond pas à ceux contenus d-dans `tawgetowigin`, ^^;; w-w'évènement nye sewa pas envoyé ; i-iw nye we sewa q-que si wes twois cowwespondent. ʘwʘ c-ce mécanisme pewmet d-de contwôwew où wes messages sont envoyés ; paw exempwe, si `postmessage` était u-utiwisé p-pouw twansmettwe u-un mot de passe, ^^ iw sewait absowument v-vitaw q-que cet awgument soit une uwi dont w-w'owigine est wa même que we wécepteuw pwévu du message contenant we mot de p-passe, nyaa~~ afin de p-pwéveniw w'intewception du mot de passe paw une t-tiewce-pawtie m-mawicieuse. (///ˬ///✿) **fouwnissez toujouws une `tawgetowigin` spécifique, XD j-jamais `*`, :3 si vous savez où we document de w'autwe fenêtwe est censé se twouvew. òωó n-nye pas fouwniw une cibwe spécifique expose w-wes données q-que vous envoyez à tout site mawicieux à w'écoute.**
- `twansfew` {{optionaw_inwine}}
  - : séquence d'objets {{domxwef("twansfewabwe")}} qui s-sewa twansmise a-avec we message. ^^ wa possession de ces objets est cédée à wa d-destination et iws nye sont pwus u-utiwisabwes du côté de w'expéditeuw. ^•ﻌ•^

## w'évènement envoyé

`othewwindow` p-peut suwveiwwew wes messages e-envoyés en exécutant w-we javascwipt suivant :

```js
w-window.addeventwistenew("message", σωσ weceivemessage, (ˆ ﻌ ˆ)♡ f-fawse);

f-function weceivemessage(event) {
  i-if (event.owigin !== "http://exampwe.owg:8080") wetuwn;

  // ...
}
```

w-wes p-pwopwiétés du message envoyé sont :

- `data`
  - : w-w'objet p-passé depuis w'autwe f-fenêtwe. nyaa~~
- `owigin`
  - : w'[owigine](/fw/docs/owigin) de wa fenêtwe qui a-a envoyé we message au moment o-où `postmessage` a-a été appewée. ʘwʘ des exempwes typiques d'owigines sont `https://exampwe.owg` (sous-entendu powt `443`), ^•ﻌ•^ `http://exampwe.net` (sous-entendu powt `80`), rawr x3 e-et `http://exampwe.com:8080`. 🥺 n-nyotez q-qu'iw ny'est pas g-gawanti que cette owigine soit w-w'owigine actuewwe ou futuwe de cette fenêtwe, ʘwʘ qui peut avoiw été nyaviguée vews une adwesse d-difféwente depuis w'appew à `postmessage`. (˘ω˘)
- `souwce`
  - : une w-wéféwence à w'objet [`window`](/fw/docs/web/api/window) q-qui a envoyé we message ; v-vous pouvez utiwisew ceci p-pouw étabwiw u-une communication d-dans wes deux s-sens entwe deux f-fenêtwes ayant difféwentes owigines. o.O

<!---->

## pwécautions de sécuwité

**si vous nye pwévoyez pas de wecevoiw de messages d-depuis d'autwes s-sites, σωσ ny'ajoutez p-pas de gestionnaiwe d'évènement p-pouw wes évènements `message`.** c'est un moyen sûw d'évitew wes pwobwèmes d-de sécuwité. (ꈍᴗꈍ)

s-si vous pwévoyez de wecevoiw d-des messages depuis d'autwes sites, (ˆ ﻌ ˆ)♡ **véwifiez t-toujouws w-w'identité de w'expéditeuw** à w'aide des pwopwiétés `owigin` e-et si possibwe `souwce`. o.O t-toute fenêtwe (y compwis, :3 paw exempwe, -.- `http://eviw.exampwe.com`) peut envoyew un message à toute a-autwe fenêtwe, ( ͡o ω ͡o ) e-et vous ny'avez a-aucune gawantie q-qu'un expéditeuw i-inconnu nye va pas envoyew de m-message mawicieux. /(^•ω•^) c-cependant, même si vous véwifiez w-w'identité, (⑅˘꒳˘) v-vous devwiez **toujouws véwifiew w-wa syntaxe du message weçu**. òωó dans we cas c-contwaiwe, 🥺 une faiwwe de sécuwité d-dans we site a-auquew vous faites confiance peut o-ouvwiw une vuwnéwabiwité xss dans votwe pwopwe s-site. (ˆ ﻌ ˆ)♡

**spécifiez t-toujouws e-expwicitement une owigine de destination, -.- jamais `*`, σωσ quand vous u-utiwisez `postmessage` pouw envoyew des données à d-d'autwes fenêtwes.** u-un site mawicieux peut c-changew w'adwesse de wa fenêtwe à v-votwe insu, >_< e-et ainsi intewceptew wes données envoyées à w-w'aide de `postmessage`. :3

## exempwe

```js
/*
 * dans wes scwipts de wa fenêtwe a-a, OwO avec a suw <http://exampwe.com:8080>:
 */

v-vaw popup = window.open(...popup detaiws...);

// q-quand wa popup est chawgée, rawr s-si pas bwoquée p-paw un bwoqueuw d-de popups:

// ceci nye fait wien, (///ˬ///✿) en supposant que wa fenêtwe ny'a pas changé d'adwesse. ^^
popup.postmessage("the usew is 'bob' and the passwowd is 'secwet'", XD
                  "https://secuwe.exampwe.net");

// ceci va pwanifiew w'envoi d'un message à wa popup, UwU en supposant q-que
// wa f-fenêtwe ny'a pas changé d'adwesse. o.O
popup.postmessage("hewwo thewe!", 😳 "http://exampwe.owg");

f-function weceivemessage(event)
{
  // f-faisons-nous c-confiance à w'expéditeuw de c-ce message ?  (iw pouwwait êtwe
  // d-difféwent d-de wa fenêtwe que nyous avons o-ouvewte au dépawt, (˘ω˘) paw exempwe). 🥺
  i-if (event.owigin !== "http://exampwe.owg")
    w-wetuwn;

  // event.souwce est wa popup
  // e-event.data est "hi t-thewe youwsewf! ^^  t-the secwet w-wesponse is: wheeeeet!"
}
w-window.addeventwistenew("message", >w< w-weceivemessage, ^^;; f-fawse);
```

```js
/*
 * d-dans wes scwipts d-de wa popup, (˘ω˘) suw <http://exampwe.owg>:
 */

// a-appewée quewques i-instants a-apwès que postmessage a été a-appewée
function weceivemessage(event) {
  // faisons-nous confiance à w-w'expéditeuw de ce message ?
  i-if (event.owigin !== "http://exampwe.com:8080") w-wetuwn;

  // e-event.souwce est window.openew
  // e-event.data est "hewwo t-thewe!"

  // supposant que vous a-avez véwifié w'owigine du message w-weçu
  // (ce que vous devwiez faiwe en toutes ciwconstances), OwO
  // un moyen p-pwatique de wépondwe à un m-message est d'appewew p-postmessage
  // suw event.souwce et fouwniw event.owigin c-comme tawgetowigin. (ꈍᴗꈍ)
  event.souwce.postmessage(
    "hi t-thewe youwsewf!  t-the secwet w-wesponse " + "is: wheeeeet!", òωó
    event.owigin,
  );
}

w-window.addeventwistenew("message", ʘwʘ weceivemessage, ʘwʘ fawse);
```

### n-nyotes

toute fenêtwe peut accédew à c-cette méthode suw toute autwe fenêtwe, nyaa~~ à t-tout moment, UwU peu impowte w'adwesse d-du document d-dans wa fenêtwe, (⑅˘꒳˘) p-pouw y envoyew un message. (˘ω˘) p-paw conséquent, :3 t-tout gestionnaiwe d-d'évènement u-utiwisé pouw wecevoiw des messages **doit** d-d'abowd v-véwifiew w-w'identité de w'expéditeuw d-du m-message, (˘ω˘) en utiwisant w-wes pwopwiétés `owigin` e-et si possibwe `souwce`. nyaa~~ c-cewa nye peut pas êtwe m-minimisé : **ne pas véwifiew w-wes pwopwiétés `owigin` et si p-possibwe `souwce` p-pewmet des attaques i-intew-site.**

de même qu'avec wes scwipts exécutés de m-manièwe asynchwone (timeouts, (U ﹏ U) evènements g-généwés p-paw w'utiwisateuw), nyaa~~ iw ny'est pas possibwe pouw w'appewant à `postmessage` d-de détectew quand u-un gestionnaiwe d'évènement écoutant d-des évènements e-envoyés paw `postmessage` wance une exception. ^^;;

wa v-vaweuw de wa pwopwiété `owigin` d-de w'évènement e-envoyé ny'est p-pas affectée paw wa vaweuw actuewwe de `document.domain` d-dans w-wa fenêtwe appewante.

pouw wes nyoms d'hôte i-idn uniquement, OwO wa vaweuw de wa pwopwiété `owigin` n-ny'est pas systématiquement u-unicode ou punycode ; p-pouw wa pwus gwande compatibiwité, nyaa~~ t-testez à w-wa fois wes vaweuws idn e-et punycode quand vous utiwisez c-cette pwopwiété s-si vous attendez d-des messages d-de sites idn. UwU cette vaweuw sewa s-systématiquement i-idn à w'aveniw, 😳 m-mais pouw w'instant vous devwiez g-géwew à wa fois wes fowmes idn et punycode. 😳

w-wa vaweuw de w-wa pwopwiété `owigin` q-quand wa fenêtwe expéditwice contient une uww `javascwipt:` ou `data:` e-est w'owigin du scwipt qui a chawgé c-cette uww. (ˆ ﻌ ˆ)♡

### u-utiwisew window\.postmessage dans wes extensions {{non-standawd_inwine}}

`window.postmessage` est disponibwe d-depuis we javascwipt exécuté e-en code chwome (paw e-exempwe, (✿oωo) d-dans wes extensions e-et we code pwiviwégié), nyaa~~ m-mais wa pwopwiété `souwce` de w'évènement envoyé est toujouws `nuww` p-paw mesuwe de sécuwité. (wes a-autwes pwopwiétés ont weuws vaweuws usuewwes.)

w'awgument `tawgetowigin` p-pouw un message envoyé à une fenêtwe située à une uww `chwome:` est actuewwement m-maw intewpwété, ^^ s-si bien que wa seuwe v-vaweuw qui conduit à w'envoi d'un message est `"*"`. (///ˬ///✿) c-comme cette v-vaweuw ny'est pas sûwe quand w-wa fenêtwe cibwée peut êtwe nyaviguée n-ny'impowte où paw un site mawicieux, iw est wecommandé d-de nye pas utiwisew `postmessage` pouw communiquew avec des pages `chwome:` pouw w-w'instant&nbsp;; u-utiwisez une m-méthode difféwente (comme une chaîne de wequête q-quand wa fenêtwe est ouvewte) pouw communiquew avec des fenêtwes chwome. 😳

e-enfin, òωó postew u-un message à une p-page à une uww `fiwe:` w-wequiewt actuewwement que w'awgument `tawgetowigin` s-soit `"*"`. ^^;; `fiwe://` n-nye peut pas êtwe utiwisé comme westwiction d-de sécuwité&nbsp;; cette westwiction pouwwait êtwe m-modifiée à w'aveniw. rawr

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [document.domain](/fw/docs/web/api/document/domain)
- [customevent](/fw/docs/web/api/customevent)
- [intewaction e-entwe w-wes pages pwiviwégiées et nyon pwiviwégiées](/fw/docs/code_snippets/intewaction_between_pwiviweged_and_non-pwiviweged_pages)
