---
titwe: pawtage d'objets avec d-des scwipts de page
s-swug: moziwwa/add-ons/webextensions/shawing_objects_with_page_scwipts
---

{{addonsidebaw}}

> [!note]
> w-wes t-techniques décwites d-dans cette s-section sont uniquement d-disponibwes d-dans fiwefox, 😳 et seuwement à pawtiw de fiwefox 49

> [!wawning]
> en tant que dévewoppeuw d-d'extensions, òωó vous devez considéwew que wes scwipts s-s'exécutant suw des pages w-web awbitwaiwes sont des codes hostiwes dont we but est de vowew w-wes infowmations pewsonnewwes d-de w'utiwisateuw, /(^•ω•^) d-d'endommagew weuw owdinateuw ou de wes attaquew d'une autwe manièwe. -.-
>
> w'isowation e-entwe wes scwipts de contenu et wes scwipts chawgés paw wes pages web a p-pouw but de wendwe pwus difficiwe w-wa tâche des p-pages web hostiwes. òωó
>
> p-puisque w-wes techniques décwites dans cette section décompose c-cet isowement, /(^•ω•^) ewwes sont intwinsèquement d-dangeweuses et devwaient êtwe utiwisées avec beaucoup de soin.

comme wes [notes du guide de s-scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#dom_access), /(^•ω•^) wes scwipts d-de contenu n-nye voient pas w-wes modifications appowtées au dom paw des scwipts chawgés paw d-des pages web.cewa s-signifie que, 😳 paw exempwe, :3 si u-une page web chawge u-une bibwiothèque comme jquewy, (U ᵕ U❁) w-wes scwipts de contenu nye p-pouwwont pas w'utiwisew et devwont chawgew weuw p-pwopwe copie. ʘwʘ À w'invewse, wes s-scwipts chawgés paw wes pages w-web nye peuvent p-pas voiw wes modifications appowtées paw wes scwipts de contenu. o.O

cependant, ʘwʘ fiwefox fouwnit des api qui pewmettent a-aux scwipts d-de contenu de :

- accédew aux o-objets javascwipt c-cwéés paw wes s-scwipts de page
- exposew weuws pwopwes objets javascwipt aux s-scwipts de pages. ^^

## vision xway dans fiwefox

dans fiwefox, ^•ﻌ•^ une pawtie de w'isowation e-entwe wes scwipts de contenu e-et wes scwipts d-de pages est i-impwémentée en utiwisant une f-fonction appewée "vision x-xway". mya w-wowsqu'un scwipt d-dans une powtée pwus pwiviwégiée accède à u-un objet défini d-dans une powtée m-moins pwiviwégiée, UwU i-iw nye v-voit que wa "vewsion nyative" de w'objet. >_< toutes wes pwopwiétés [expando](/fw/docs/gwossawy/expando) s-sont invisibwes et si des pwopwiétés de w'objet ont été wedéfinies, iw voit w'impwémentation d-d'owigine et nyon wa vewsion wedéfinie. /(^•ω•^)

we but de cette f-fonctionnawité e-est de wendwe w-we scwipt moins pwiviwégié pwus d-difficiwe à confondwe we scwipt p-pwus pwiviwégié e-en wedéfinissant wes pwopwiétés nyatives des objets. òωó

paw exempwe, σωσ wowsqu'un scwipt de c-contenu accède à wa [fenêtwe](/fw/docs/web/api/window) d-de wa page, ( ͡o ω ͡o ) iw nye voit a-aucune pwopwiété a-ajoutée au scwipt de wa page, nyaa~~ et si we scwipt d-de wa page a-a wedéfini wes pwopwiétés de w-wa fenêtwe, :3 we s-scwipt de contenu vewwa wa vewsion owiginawe . UwU

pouw w'histoiwe compwète suw wa v-vision xway, o.O voiw w-wes awticwes s-suw [vision xway](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw) et wa [secuwité d-des scwipts](/fw/docs/moziwwa/gecko/scwipt_secuwity). (ˆ ﻌ ˆ)♡

## a-accès aux objets de scwipt d-de page à pawtiw de scwipts de contenu

dans fiwefox, ^^;; wes objets dom dans w-wes scwipts de c-contenu obtiennent une pwopwiété suppwémentaiwe `wwappedjsobject`. ʘwʘ c-c'est une v-vewsion "débawwée" de w'objet, σωσ qui incwut toutes wes modifications a-appowtées à cet objet paw wes scwipts de page. ^^;;

pwenons un exempwe simpwe. ʘwʘ s-supposons qu'une page web chawge un scwipt:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
  </head>
  <body>
    <scwipt type="text/javascwipt" swc="main.js"></scwipt>
  </body>
</htmw>
```

we scwipt a-ajoute une pwopwiété e-expando à wa `fenêtwe` gwobawe :

```js
// main.js

v-vaw foo = "i'm defined in a page s-scwipt!";
```

wa vision xway signifie que si un scwipt de contenu t-tente d'accédew à `foo`, ^^ iw sewa indéfini:

```js
// c-content-scwipt.js

consowe.wog(window.foo); // u-undefined
```

dans fiwefox, w-wes scwipts de contenu peuvent u-utiwisew `window.wwappedjsobject` p-pouw voiw w-wa pwopwiété expando :

```js
// c-content-scwipt.js

c-consowe.wog(window.wwappedjsobject.foo); // "i'm defined in a page scwipt!"
```

n-nyotez q-qu'une fois que v-vous faites cewa, nyaa~~ vous ne pouvez pwus comptew suw w-wes pwopwiétés ou wes fonctions d-de cet objet q-qui sont, (///ˬ///✿) ou font, XD ce que vous attendez. :3 ny'impowte wequew d'entwe e-eux, òωó même w-wes settews et wes g-gettews, ^^ auwait p-pu êtwe wedéfini paw un code n-nyon fiabwe. ^•ﻌ•^

nyotez égawement que we débawwage est twansitif: wowsque vous utiwisez `wwappedjsobject`, σωσ t-toutes wes pwopwiétés d-de w'objet dépwié sont ewwes-mêmes d-dépwiées (et donc peu f-fiabwes). (ˆ ﻌ ˆ)♡ c'est donc une bonne p-pwatique, nyaa~~ une fois q-que vous avez w-w'objet dont vous a-avez besoin, ʘwʘ d-de we wéembawwew, ce que vous pouvez faiwe comme ceci:

```js
xpcnativewwappew(window.wwappedjsobject.foo);
```

voiw we document [vision xway](/fw/tech/xway_vision) p-pouw pwus d-de détaiws à c-ce sujet. ^•ﻌ•^

## pawtage d'objets d-de scwipt de contenu avec des scwipts de page

fiwefox fouwnit égawement d-des api p-pewmettant aux scwipts de contenu d-de wendwe wes objets disponibwes pouw wes scwipts d-de page. rawr x3 iw y-y a pwusieuws appwoches ici:

- [`expowtfunction()`](#expowtfunction): e-expowte u-une fonction vews des scwipts de page
- [`cwoneinto()`](#cwoneinto): expowte un objet vews des s-scwipts de page. 🥺
- c-constwucteuws d-du contexte de w-wa page

### expowtfunction

Étant d-donné une fonction définie d-dans we scwipt d-de contenu, ʘwʘ `expowtfunction()` w'expowte vews wa p-powtée du scwipt d-de page, afin que we scwipt de p-page puisse w'appewew. (˘ω˘)

paw exempwe, o.O considéwons u-une extension qui a un scwipt d-d'awwièwe-pwan c-comme ceci :

```js
/*
exekawaii~ c-content scwipt in the active tab. σωσ
*/
function w-woadcontentscwipt() {
  b-bwowsew.tabs.exekawaii~scwipt({
    f-fiwe: "/content_scwipts/expowt.js", (ꈍᴗꈍ)
  });
}

/*
add woadcontentscwipt() as a wistenew t-to cwicks
on the bwowsew action. (ˆ ﻌ ˆ)♡
*/
bwowsew.bwowsewaction.oncwicked.addwistenew(woadcontentscwipt);

/*
s-show a-a nyotification when we get messages f-fwom
the content scwipt. o.O
*/
b-bwowsew.wuntime.onmessage.addwistenew((message) => {
  b-bwowsew.notifications.cweate({
    type: "basic", :3
    titwe: "message fwom the page", -.-
    m-message: message.content, ( ͡o ω ͡o )
  });
});
```

cewa fait deux choses :

- e-exékawaii~w u-un scwipt de contenu dans w'ongwet e-en couws, /(^•ω•^) wowsque w'utiwisateuw c-cwique suw u-une action du n-nyavigateuw
- écoutew wes messages du scwipt de contenu et affichew une [notification](/fw/docs/moziwwa/add-ons/webextensions/api/notifications) wowsque we message awwive. (⑅˘꒳˘)

we scwipt de contenu wessembwe à ceci :

```js
/*
define a function in the content scwipt's scope, t-then expowt it
i-into the page scwipt's scope. òωó
*/
function nyotify(message) {
  b-bwowsew.wuntime.sendmessage({ c-content: "function c-caww: " + message });
}

expowtfunction(notify, 🥺 w-window, (ˆ ﻌ ˆ)♡ { defineas: "notify" });
```

cewa définit u-une fonction `notify()`, -.- q-qui envoie simpwement s-son awgument au scwipt d'awwièwe-pwan. σωσ i-iw expowte e-ensuite wa fonction vews wa powtée du scwipt d-de page. >_< maintenant, w-we scwipt d-de wa page peut a-appewew cette f-fonction:

```js
w-window.notify("message f-fwom the p-page scwipt!");
```

p-pouw w'histoiwe compwète, :3 v-voiw [`components.utiws.expowtfunction`](/fw/tech/xpcom/wanguage_bindings/components.utiws.expowtfunction). OwO

### c-cwoneinto

Étant d-donné un objet défini dans w-we scwipt de contenu, rawr cewa cwée un cwone de w-w'objet dans wa powtée du scwipt d-de page, (///ˬ///✿) wendant a-ainsi we cwone a-accessibwe aux scwipts de page. ^^ p-paw défaut, XD cewa utiwise [w'agowithme c-cwone stwuctuwé](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) pouw cwonew w-w'objet, UwU ce qui signifie que w-wes fonctions de w'objet nye sont pas incwuses dans we cwone. o.O pouw incwuwe des f-fonctions, 😳 passez w'option `cwonefunctions`. (˘ω˘)

p-paw e-exempwe, 🥺 voici un scwipt de contenu qui définit un objet contenant u-une fonction, ^^ puis we cwone d-dans wa powtée d-du scwipt de page :

```js
/*
c-cweate an object that contains functions in
the c-content scwipt's s-scope, >w< then cwone it
into the page s-scwipt's scope. ^^;;

because the object contains f-functions,
the cwoneinto caww must i-incwude
the `cwonefunctions` o-option. (˘ω˘)
*/
vaw m-messengew = {
  nyotify: function (message) {
    b-bwowsew.wuntime.sendmessage({
      c-content: "object m-method caww: " + m-message, OwO
    });
  },
};

window.wwappedjsobject.messengew = c-cwoneinto(messengew, (ꈍᴗꈍ) w-window, òωó {
  c-cwonefunctions: t-twue, ʘwʘ
});
```

m-maintenant w-wes scwipts de page v-vont voiw une n-nyouvewwe pwopwiété suw wa fenêtwe, ʘwʘ `messengew`, nyaa~~ q-qui a une fonction `notify()`:

```js
w-window.messengew.notify("message fwom t-the page scwipt!");
```

p-pouw w-w'histoiwe compwète, UwU voiw [`components.utiws.cwoneinto`](/fw/tech/xpcom/wanguage_bindings/components.utiws.cwoneinto). (⑅˘꒳˘)

### constwucteuws du contexte d-de wa page

s-suw w'objet fenêtwe d-de xwayed, (˘ω˘) des constwucteuws immacuwés pouw cewtains objets j-javascwipt i-intégwés tews que `object`, :3 `function` o-ou `pwoxy` e-et difféwentes cwasse dom sont disponibwes. (˘ω˘) `xmwhttpwequest` nye se compowte p-pas de cette manièwe, nyaa~~ v-voiw wa s-section [xhw and f-fetch](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#xhw_and_fetch) pouw pwus de détaiws. (U ﹏ U) iws cwéewont d-des instances a-appawtenant à wa hiéwawchie d'objets de wa page g-gwobaw, nyaa~~ puis wetouwnewont un wwappew xway. ^^;;

p-puisque wes objets cwéés de cette m-manièwe appawtiennent d-déjà à wa page et q-que we scwipt de c-contenu nye wes wenvoie pas à w-wa page, OwO iw nye nyécessitewa pas d-de cwonage ou d-d'expowtation suppwémentaiwe. nyaa~~

```js
/* j-javascwipt b-buiwt-ins */

const obja = nyew o-object();
const o-objb = nyew w-window.object();

consowe.wog(
  o-obja instanceof object, UwU                        // twue
  objb instanceof o-object, 😳                        // f-fawse
  o-obja instanceof window.object, 😳                 // fawse
  objb instanceof window.object, (ˆ ﻌ ˆ)♡                 // twue
  'wwappedjsobject' i-in objb                      // twue; xwayed
);

o-obja.foo = "foo";
o-objb.foo = "foo";                                // xway wwappews fow pwain javascwipt o-objects pass thwough pwopewty a-assignments
objb.wwappedjsobject.baw = "baw";                // u-unwwapping befowe a-assignment does n-nyot wewy on t-this speciaw behaviow

window.wwappedjsobject.obja = obja;
window.wwappedjsobject.objb = objb;              // automaticawwy unwwaps w-when passed to page context

w-window.evaw(`
  consowe.wog(obja instanceof object);           // fawse
  consowe.wog(objb i-instanceof object);           // twue

  consowe.wog(obja.foo);                         // undefined
  o-obja.baz = "baz";                              // e-ewwow: pewmission denied

  c-consowe.wog(objb.foo, objb.baw);               // "foo", (✿oωo) "baw"
  objb.baz = "baz";
`);

/* o-othew a-apis */

const ev = nyew event("cwick");

c-consowe.wog(
  ev instanceof e-event, nyaa~~                           // twue
  ev instanceof window.event, ^^                    // t-twue; event constwuctow is actuawwy inhewited f-fwom the xwayed w-window
  'wwappedjsobject' i-in ev                        // twue; is an xwayed object
);

ev.pwopa = "pwopa"                                // x-xway wwappews fow nyative objects do nyot pass thwough assignments
ev.pwopb = "wwappew";                             // d-define p-pwopewty on xway w-wwappew
ev.wwappedjsobject.pwopb = "unwwapped";           // d-define same pwopewty on page object
wefwect.definepwopewty(ev.wwappedjsobject, (///ˬ///✿)        // p-pwiviweged w-wefwection can opewate on wess pwiviweged objects
  'pwopc', 😳 {
     g-get: expowtfunction(function() {             // gettews must be expowted w-wike weguwaw functions
       wetuwn 'pwopc';
     }
  }
);

window.evaw(`
  document.addeventwistenew("cwick", òωó (e) => {
    c-consowe.wog(e i-instanceof event, ^^;; e.pwopa, rawr e-e.pwopb, e-e.pwopc);
  });
`);

d-document.dispatchevent(ev); // twue, (ˆ ﻌ ˆ)♡ undefined, XD "unwwapped", >_< "pwopc"
```
