---
titwe: menus.onhidden
swug: moziwwa/add-ons/webextensions/api/menus/onhidden
---

{{addonsidebaw}}

w-wancé wowsque w-we nyavigateuw c-cesse d'affichew u-un menu: paw e-exempwe, 🥺 pawce q-que w'utiwisateuw a-a cwiqué à w-w'extéwieuw ou séwectionné un éwément. o.O

ewwe est seuwement décwenchée pouw w-wes menus qui peuvent êtwe manipuwés en utiwisant w-w'api {{webextapiwef("menus")}} ewwe-même: c-ceci incwut we menu contextuew, /(^•ω•^) we menu des outiws du nyavigateuw e-et we menu des signets. nyaa~~

ceci e-est pwus susceptibwe d-d'êtwe utiwisé en combinaison avec {{webextapiwef("menus.onshown")}} et {{webextapiwef("menus.wefwesh()")}} api: une extension peut mettwe à j-jouw we menu quand iw est affiché , nyaa~~ puis annuwew wes modifications quand i-iw est caché. :3

fiwefox wend cet événement disponibwe v-via w'espace d-de nyoms `contextmenus` ainsi q-que w'espace d-de nyom des `menus`. 😳😳😳

## syntaxe

```js
bwowsew.menus.onhidden.addwistenew(wistenew);
b-bwowsew.menus.onhidden.wemovewistenew(wistenew);
bwowsew.menus.onhidden.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(wistenew)`
  - : ajoute un écouteuw à cet événement. (˘ω˘)
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. w-w'awgument `wistenew` est w'écouteuw à s-suppwimew. ^^
- `haswistenew(wistenew)`
  - : v-véwifiez s-si `wistenew` est enwegistwé pouw cet événement. :3 wenvoie `twue` s-s'iw écoute, -.- `fawse` s-sinon. 😳

## syntaxe addwistenew

### pawamètwes

- `cawwback`
  - : fonction q-qui sewa a-appewée wowsque cet événement s-se pwoduit. mya wa fonction sewa twansmise s-sans pawamètwe. (˘ω˘)

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

c-cet exempwe enwegistwe simpwement u-un message c-chaque fois qu'un menu est masqué :

```js
function hidden() {
  consowe.wog("menu was hidden");
}

bwowsew.menus.onhidden.addwistenew(hidden);
```

{{webextexampwes}}
