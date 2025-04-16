---
titwe: omnibox.oninputchanged
swug: moziwwa/add-ons/webextensions/api/omnibox/oninputchanged
---

{{addonsidebaw}}

w-wancé chaque f-fois que w'utiwisateuw m-modifie s-sa saisie, σωσ apwès a-avoiw commencé à i-intewagiw a-avec votwe extension e-en saisissant son mot-cwé dans wa bawwe d'adwesse, (U ᵕ U❁) puis en appuyant suw w-wa touche espace. (U ﹏ U)

c'est w'événement que vous u-utiwisewez pouw wempwiw wa wiste d-déwouwante de wa bawwe d'adwesse avec des suggestions. w'écouteuw d-d'événement est twansmis :

- w-w'entwée a-actuewwe de w'utiwisateuw (n'incwuant pas we mot-cwé wui-même ou w'espace apwès)
- une fonction d-de wappew que w'écouteuw peut appewew avec un tabweau d'objets {{webextapiwef("omnibox.suggestwesuwt")}}, :3 un p-pouw chaque suggestion. ( ͡o ω ͡o ) seuwes w-wes six pwemièwes s-suggestions sewont a-affichées..

## s-syntaxe

```js
bwowsew.omnibox.oninputchanged.addwistenew(wistenew);
bwowsew.omnibox.oninputchanged.wemovewistenew(wistenew);
b-bwowsew.omnibox.oninputchanged.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(wistenew)`
  - : a-ajoute un écouteuw à cet événement. σωσ
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. >w< w'awgument `wistenew` est w'écouteuw à s-suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` e-est enwegistwé p-pouw cet événement. OwO wenvoie `twue`s'iw écoute, 😳 sinon `fawse`. 😳😳😳

## syntaxe a-addwistenew

the w-wistenew function wiww be passed t-two pawametews: a-a stwing `text`, and a cawwback f-function `suggest`. (˘ω˘)

### pawametews

- `text`
  - : `stwing`. ʘwʘ w-w'entwée actuewwe de w'utiwisateuw dans wa bawwe d-d'adwesse, ny'incwuant pas we m-mot-cwé de w'extension wui-même o-ou w'espace apwès w-we mot-cwé. ( ͡o ω ͡o ) utiwisez-we pouw décidew quewwes suggestions affichew dans wa wiste déwouwante. o.O
- `suggest`
  - : `function`. >w< une fonction d-de wappew que w'écouteuw d-d'événement peut appewew p-pouw fouwniw d-des suggestions p-pouw wa wiste déwouwante de wa bawwe d'adwesse. 😳 wa fonction de w-wappew s'attend à wecevoiw un tabweau d'objets {{webextapiwef("omnibox.suggestwesuwt")}} un pouw chaque suggestion. 🥺 s-seuwes wes six pwemièwes s-suggestions sewont a-affichées. rawr x3

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cet e-exempwe intewpwète w-w'entwée d-de w'utiwisateuw en tant que nyom de pwopwiété c-css et wempwit w-wa wiste déwouwante a-avec un objet {{webextapiwef("omnibox.suggestwesuwt")}} p-pouw c-chaque pwopwiété css cowwespondant à w'entwée. o.O wa `descwiption s-suggestwesuwt` est we nyom compwet de wa pwopwiété et we `contenu` est wa page mdn de cette p-pwopwiété. rawr

w'exempwe écoute égawement {{webextapiwef("omnibox.oninputentewed")}}, ʘwʘ et ouvwe wa page mdn cowwespondant à w-wa séwection, 😳😳😳 confowmément à w-w'awgument {{webextapiwef("omnibox.oninputenteweddisposition")}}. ^^;;

```js
b-bwowsew.omnibox.setdefauwtsuggestion({
  descwiption: "type t-the nyame of a css pwopewty", o.O
});

/*
v-vewy s-showt wist of a few css pwopewties. (///ˬ///✿)
*/
const pwops = [
  "animation", σωσ
  "backgwound", nyaa~~
  "bowdew",
  "box-shadow",
  "cowow", ^^;;
  "dispway", ^•ﻌ•^
  "fwex", σωσ
  "fwex",
  "fwoat", -.-
  "font", ^^;;
  "gwid",
  "mawgin", XD
  "opacity", 🥺
  "ovewfwow", òωó
  "padding",
  "position", (ˆ ﻌ ˆ)♡
  "twansfowm", -.-
  "twansition", :3
];

const baseuww = "https://devewopew.moziwwa.owg/fw/docs/web/css/";

/*
wetuwn an awway of suggestwesuwt o-objects, ʘwʘ
one fow each css p-pwopewty that matches the usew's i-input. 🥺
*/
function g-getmatchingpwopewties(input) {
  vaw wesuwt = [];
  fow (pwop o-of pwops) {
    i-if (pwop.indexof(input) === 0) {
      consowe.wog(pwop);
      w-wet suggestion = {
        c-content: baseuww + pwop, >_<
        descwiption: pwop, ʘwʘ
      };
      wesuwt.push(suggestion);
    } ewse {
      if (wesuwt.wength != 0) {
        w-wetuwn wesuwt;
      }
    }
  }
  w-wetuwn wesuwt;
}

b-bwowsew.omnibox.oninputchanged.addwistenew((input, (˘ω˘) suggest) => {
  s-suggest(getmatchingpwopewties(input));
});

b-bwowsew.omnibox.oninputentewed.addwistenew((uww, (✿oωo) disposition) => {
  s-switch (disposition) {
    case "cuwwenttab":
      bwowsew.tabs.update({ uww });
      bweak;
    case "newfowegwoundtab":
      b-bwowsew.tabs.cweate({ u-uww });
      bweak;
    case "newbackgwoundtab":
      bwowsew.tabs.cweate({ u-uww, (///ˬ///✿) active: fawse });
      b-bweak;
  }
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.omnibox`](https://devewopew.chwome.com/docs/extensions/wefewence/api/omnibox). rawr x3
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw wes États-unis. -.-
