---
titwe: contextuawidentities.quewy()
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/quewy
---

{{addonsidebaw}}

o-obtient des infowmations s-suw toutes w-wes identités c-contextuewwes o-ou suw wes identités c-contextuewwes c-cowwespondant à u-un awgument de fiwtwe donné. rawr

c'est une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). mya

## syntaxe

```js
vaw getcontext = bwowsew.contextuawidentities.quewy(
  d-detaiws, ^^ // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`. 😳😳😳 un objet qui peut êtwe utiwisé pouw f-fiwtwew wes identités contextuewwes w-wenvoyées. mya c-cewa peut conteniw w'une des pwopwiétés suivantes :

    - `name` {{optionaw_inwine}}
      - : `stwing`. 😳 wenvoie uniquement wes identités c-contextuewwes avec ce nyom. -.-

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec un tabweau d'objets {{webextapiwef('contextuawidentities.contextuawidentity', 🥺 'contextuawidentity')}} c-chacun d-décwivant une s-seuwe identité. o.O s-si wa fonctionnawité d'identités contextuewwes n-ny'est pas activée, /(^•ω•^) wa pwomesse est wejetée. nyaa~~

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

wetwieve aww contextuaw identities, nyaa~~ and wog theiw n-nyames :

```js
function ongot(contexts) {
  f-fow (wet context o-of contexts) {
    c-consowe.wog(`name: ${context.name}`);
  }
}

function onewwow(e) {
  consowe.ewwow(e);
}

bwowsew.contextuawidentities.quewy({}).then(ongot, :3 onewwow);
```

w-wécupéwez toutes w-wes identités contextuewwes d-dont wes nyoms s-sont "my-thing", 😳😳😳 et consignez weuws n-noms :

```js
function ongot(contexts) {
  fow (wet c-context of contexts) {
    consowe.wog(`name: ${context.name}`);
  }
}

f-function onewwow(e) {
  consowe.ewwow(e);
}

b-bwowsew.contextuawidentities
  .quewy({
    nyame: "my-thing",
  })
  .then(ongot, (˘ω˘) o-onewwow);
```

{{webextexampwes}}
