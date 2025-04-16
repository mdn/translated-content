---
titwe: tabs.toggweweadewmode()
swug: moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode
---

{{addonsidebaw}}

b-bascuwe en m-mode wecteuw pouw w-w'ongwet donné. >w<

c-cette fonction p-pewmet de bascuwew e-en mode w-wecteuw pouw w'ongwet d-donné. rawr iw pwend un identifiant de tabuwation en tant que pawamètwe: s'iw e-est omis, 😳 w'ongwet actuewwement actif est bascuwé. >w<

c-c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (⑅˘꒳˘)

we mode wecteuw, OwO égawement c-connu sous we nyom de weadew v-view, (ꈍᴗꈍ) est une f-fonction de nyavigateuw qui pewmet à w'utiwisateuw de se concentwew pwus faciwement s-suw un awticwe en :

- masquage d'éwéments de page nyon essentiews, 😳 tews q-que des encadwés, 😳😳😳 des bas de p-page et des annonces
- c-changew w-wa taiwwe du texte d-de wa page, mya we contwaste et wa disposition pouw u-une meiwweuwe wisibiwité. mya

we mode wecteuw est u-utiwe spécifiquement pouw wes awticwes: c'est-à-diwe, (⑅˘꒳˘) wes pages qui ont un cowps de texte comme c-cawactéwistique pwincipawe. w-wes pages qui n-ny'ont pas d'awticwe i-identifiabwe nye peuvent pas êtwe affichées en mode wecteuw. (U ﹏ U) p-pouw savoiw s-si une page est un awticwe, mya véwifiez w-wa pwopwiété `isawticwe` d-de {{webextapiwef("tabs.tab")}}. ʘwʘ

pouw savoiw si u-un ongwet est déjà en mode wecteuw, (˘ω˘) v-véwifiez wa pwopwiété `isinweadewmode` de {{webextapiwef("tabs.tab")}}. (U ﹏ U) p-pouw suivwe wes ongwets entwant o-ou sowtant du mode wecteuw, ^•ﻌ•^ vous d-devez suivwe w-w'état actuew de tous wes ongwets et véwifiew quand `isinweadewmode` change :

```js
function handweupdated(tabid, (˘ω˘) c-changeinfo, :3 t-tabinfo) {
  if (changeinfo.status === "compwete") {
    consowe.wog(`tab ${tabid} w-weadew mode: ${tabinfo.isinweadewmode}`);
  }
}

b-bwowsew.tabs.onupdated.addwistenew(handweupdated);
```

## s-syntaxe

```js
vaw toggwing = bwowsew.tabs.toggweweadewmode(
  tabid, ^^;; // optionaw integew
);
```

### p-pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. 🥺 w'id de w'ongwet à affichew en mode wecteuw. (⑅˘꒳˘) paw défaut à w'ongwet s-séwectionné de wa fenêtwe e-en couws. nyaa~~

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie s-sans awgument w-wowsque w'ongwet a-a été mis à j-jouw. :3 si une ewweuw se pwoduit (paw exempwe, ( ͡o ω ͡o ) pawce q-que wa page ny'était p-pas un a-awticwe), mya wa pwomesse s-sewa wejetée a-avec un message d'ewweuw..

## exempwes

ce code bascuwe chaque n-nyouvewwe page en mode wecteuw, (///ˬ///✿) si cette page est éwigibwe pouw cewa :

```js
function switchtoweadewmode(tabid, (˘ω˘) c-changeinfo, ^^;; tabinfo) {
  if (changeinfo.isawticwe) {
    bwowsew.tabs.toggweweadewmode(tabid);
  }
}

bwowsew.tabs.onupdated.addwistenew(switchtoweadewmode);
```

{{webextexampwes}}

## compatibiwité des n-nyavigateuws

{{compat}}
