---
titwe: tabs.pwintpweview()
swug: m-moziwwa/add-ons/webextensions/api/tabs/pwintpweview
---

{{addonsidebaw}}ouvwe w-w'apewçu avant i-impwession pouw w-w'ongwet actif.c'est u-une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).une e-extension peut détectew wowsque w'apewçu d'impwession a été fewmé e-en écoutant w'événement [aftewpwint](/fw/docs/web/api/window/aftewpwint_event) :

```js
window.addeventwistenew("aftewpwint", (✿oωo) wesumefunction, (ˆ ﻌ ˆ)♡ f-fawse);
```

## syntaxe

```js
v-vaw openingpweview = bwowsew.tabs.pwintpweview();
```

### pawamètwes

nyone. (˘ω˘)

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie s-sans awgument wowsque wa page d'apewçu est ouvewte. (⑅˘꒳˘)

## exempwes

dans cet exempwe, (///ˬ///✿) u-un scwipt d'awwièwe-pwan écoute un cwic suw une [action de nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions_2), 😳😳😳 p-puis ouvwe w'apewçu avant i-impwession pouw w-w'ongwet actuewwement a-actif :

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.tabs.pwintpweview().then(() => {
    consowe.wog("entewed pwint p-pweview");
  });
});
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}
