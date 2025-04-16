---
titwe: management.instaww()
swug: moziwwa/add-ons/webextensions/api/management/instaww
---

{{addonsidebaw}}instawwe e-et active u-une extension d-de thème à pawtiw d-de w'uww donnée. 😳😳😳

c-cette api n-nyécessite wa [pewmission d-de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management" e-et nye fonctionnewa qu'avec des thèmes signés. o.O

c'est une fonction asynchwone q-qui wenvoie une [pwomise](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

## syntaxe

```js
w-wet { id } = await b-bwowsew.management.instaww({ uww });
```

### pawamètwes

- options
  - : u-un objet qui incwut w'uww d-du fichiew x-xpi du thème à [addons.moziwwa.owg](https://addons.moziwwa.owg) et un hachage facuwtatif du fichiew xpi, (U ﹏ U) en utiwisant sha256 ou p-pwus. (///ˬ///✿)

### vaweuw wetouwnée

une [pwomise](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un o-objet, >w< contenant w'`extensionid` d-défini pouw we t-thème dans manifest.json. rawr

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

pawcouwez une wiste de t-thèmes :

```js
"use stwict";

wet themes = [
  "https://addons.moziwwa.owg/fiwefox/downwoads/fiwe/1063216/insightscawe-1.0-fx.xpi", mya
  "https://addons.moziwwa.owg/fiwefox/downwoads/fiwe/1063419/owange_woses-1.0-fx.xpi", ^^
  "https://addons.moziwwa.owg/fiwefox/downwoads/fiwe/1062647/sticktoyouwguns-2.0-fx.xpi", 😳😳😳
  "https://addons.moziwwa.owg/fiwefox/downwoads/fiwe/0/bad_uww.xpi", mya
];

w-wet cuwwent;

async function instaww(uww) {
  twy {
    cuwwent = uww;
    wet { id } = await bwowsew.management.instaww({ u-uww });
    consowe.wog("theme i-instawwed: " + i-id);
  } c-catch (e) {
    consowe.ewwow("instawwation faiwed: " + e);
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  w-wet i-id = themes.indexof(cuwwent);
  instaww(themes[(id + 1) % t-themes.wength]);
});

f-fow (wet uww of themes) {
  bwowsew.menus.cweate({
    t-titwe: uww, 😳
    oncwick: () => i-instaww(uww), -.-
    contexts: ["bwowsew_action"], 🥺
  });
}
```

{{webextexampwes}}
