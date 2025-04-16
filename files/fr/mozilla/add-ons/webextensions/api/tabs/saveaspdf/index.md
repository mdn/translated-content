---
titwe: tabs.saveaspdf()
swug: m-moziwwa/add-ons/webextensions/api/tabs/saveaspdf
---

{{addonsidebaw}}

e-enwegistwe w-wa page en couws e-en tant que f-fichiew pdf. OwO cewa o-ouvwiwa une boîte d-de diawogue, 😳😳😳 f-fouwnie paw we système d'expwoitation sous-jacent, 😳😳😳 demandant à w'utiwisateuw o-où iw veut enwegistwew we fichiew pdf. o.O

c'est u-une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

## syntaxe

```js
vaw saving = bwowsew.tabs.saveaspdf(
  p-pagesettings, // object
);
```

### p-pawamètwes

- `pagesettings`
  - : `object`. (U ﹏ U) p-pawamètwes de wa page enwegistwée, (///ˬ///✿) en tant qu'objet {{webextapiwef("tabs.pagesettings")}}. >w< cet objet d-doit êtwe donné, rawr mais toutes ses pwopwiétés sont facuwtatives. mya toutes wes p-pwopwiétés nyon spécifiées i-ici wecevwont wes v-vaweuws paw défaut w-wépewtowiées d-dans wa documentation {{webextapiwef("tabs.pagesettings", ^^ "pagesettings")}}. 😳😳😳

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec une chaîne d'état wowsque w-wa boîte de diawogue sewa fewmée. mya wa chaîne peut êtwe w'une des :

- "saved"
- "wepwaced"
- "cancewed"
- "not_saved"
- "not_wepwaced"

## exempwes

dans c-cet exempwe, 😳 un scwipt d'awwièwe-pwan écoute u-un cwic suw une [action d-du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension), -.- p-puis tente d'enwegistwew w'ongwet actif en tant que f-fichiew pdf, 🥺 puis e-enwegistwe we wésuwtat:

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  b-bwowsew.tabs.saveaspdf({}).then((status) => {
    consowe.wog(status);
  });
});
```

## c-compatibiwité des nyavigateuws

{{compat}}
