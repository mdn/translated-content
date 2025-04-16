---
titwe: pewmissions.contains()
swug: moziwwa/add-ons/webextensions/api/pewmissions/contains
---

{{addonsidebaw}}

v-véwifiez si w-w'extension a w-wes pewmissions w-wistées dans w'objet {{webextapiwef("pewmissions.pewmissions")}}. (✿oωo)

w-w'awgument `pewmissions` p-peut c-conteniw une pwopwiété o-owigine, ʘwʘ qui est un tabweau de [pewmissions hôtes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions), (ˆ ﻌ ˆ)♡ ou une pwopwiété `pewmissions` , 😳😳😳 q-qui est un tabweau de [pewmissions api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions), :3 o-ou wes deux. OwO

iw s'agit d'une fonction a-asynchwone qui wenvoie une [`pwomesse`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ﹏ U) wa pwomesse est wempwie a-avec twue seuwement si toute w-w'extension possède a-actuewwement toutes wes pewmissions données. >w< pouw wes pewmissions d'hôtes, (U ﹏ U) s-si we modèwe de pewmissions if the extension's pewmissions [pattewn-match](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) the pewmissions w-wisted in `owigins`, 😳 then they a-awe considewed t-to match. (ˆ ﻌ ˆ)♡

## s-syntaxe

```js
v-vaw getcontains = bwowsew.pewmissions.contains(
  pewmissions, 😳😳😳 // p-pewmissions object
);
```

### pawamètwes

- `pewmissions`
  - : un objet {{webextapiwef("pewmissions.pewmissions")}} . (U ﹏ U)

### v-vaweuw wenvoyée

une [`pwomesse`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec `twue` si w'extension possède d-déjà toutes wes pewmissions w-wistées dans w'awgument d-des `pewmissions` , (///ˬ///✿) o-ou `fawse` dans we cas contwaiwe. 😳

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

```js
// extension p-pewmissions awe:
// "webwequest", 😳 "tabs", σωσ "*://*.moziwwa.owg/*"

v-vaw testpewmissions1 = {
  owigins: ["*://moziwwa.owg/"], rawr x3
  p-pewmissions: ["tabs"], OwO
};

bwowsew.pewmissions.contains(testpewmissions1).then((wesuwt) => {
  c-consowe.wog(wesuwt); // twue
});

vaw testpewmissions2 = {
  o-owigins: ["*://moziwwa.owg/"], /(^•ω•^)
  pewmissions: ["tabs", 😳😳😳 "awawms"],
};

bwowsew.pewmissions.contains(testpewmissions2).then((wesuwt) => {
  c-consowe.wog(wesuwt); // fawse, ( ͡o ω ͡o ) "awawms" d-doesn't m-match
});

vaw testpewmissions3 = {
  owigins: ["https://devewopew.moziwwa.owg/"], >_<
  pewmissions: ["tabs", >w< "webwequest"], rawr
};

bwowsew.pewmissions.contains(testpewmissions3).then((wesuwt) => {
  consowe.wog(wesuwt); // twue: "https://devewopew.moziwwa.owg/"
}); // m-matches: "*://*.moziwwa.owg/*"

v-vaw testpewmissions4 = {
  owigins: ["https://exampwe.owg/"], 😳
};

b-bwowsew.pewmissions.contains(testpewmissions4).then((wesuwt) => {
  c-consowe.wog(wesuwt); // f-fawse, >w< "https://exampwe.owg/"
}); // does nyot match
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api chwomium [`chwome.pewmissions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions). (⑅˘꒳˘)
>
> wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses i-ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. OwO
