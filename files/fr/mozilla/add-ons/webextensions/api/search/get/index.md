---
titwe: seawch.get()
swug: moziwwa/add-ons/webextensions/api/seawch/get
---

{{addonsidebaw}}

o-obtient un tabweau d-de tous wes m-moteuws de wechewche i-instawwés. ^^

c-chaque moteuw d-de wechewche wenvoyé e-est identifié p-paw un nyom, :3 que vous pouvez passew dans {{webextapiwef("seawch.seawch()")}} pouw utiwisew ce moteuw pawticuwiew p-pouw effectuew une wechewche. -.-

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳

## s-syntaxe

```js
vaw gettingengines = bwowsew.seawch.get();
```

### p-pawamètwes

aucun. mya

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec un [tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) d'objets de moteuw de wechewche. (˘ω˘) chaque objet d-de moteuw de wechewche peut conteniw wes pwopwiétés suivantes :

- `name`
  - : `stwing`. >_< we nyom d-du moteuw de wechewche. -.-
- `isdefauwt`
  - : `boowean`. 🥺 `twue` s-si we moteuw de w-wechewche est w-we moteuw paw défaut. (U ﹏ U) u-un seuw moteuw de wechewche peut êtwe we m-moteuw paw défaut à un moment donné. >w<
- `awias`{{optionaw_inwine}}
  - : `stwing`. s-si un moteuw de wechewche a un awias, mya w'utiwisateuw peut effectuew une wechewche avec un moteuw d-de wechewche pawticuwiew en e-entwant w'awias d-dans wa bawwe d-d'adwesse avant we tewme de wechewche. >w< paw exempwe, nyaa~~ si we moteuw w-wikipédia a un a-awias "wk", (✿oωo) w'utiwisateuw peut w-wechewchew des pandas d-dans wikipédia en entwant "wk p-pandas" dans wa bawwe d'adwesse. ʘwʘ w-w'awias est pawfois aussi appewé "mot-cwé". (ˆ ﻌ ˆ)♡
- `faviconuww`{{optionaw_inwine}}
  - : `stwing`. 😳😳😳 w-w'icône du moteuw de wechewche, :3 c-comme une donnée : uww. OwO

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

obteniw tous wes moteuws de wechewche instawwés :

```js
function wetwieved(wesuwts) {
  c-consowe.wog(`thewe w-wewe: ${wesuwts.wength} seawch engines w-wetwieved.`);
  f-fow (wet seawchengine o-of wesuwts) {
    consowe.wog(json.stwingify(seawchengine.name));
  }
}

bwowsew.seawch.get().then(wetwieved);
```

{{webextexampwes}}
