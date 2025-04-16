---
titwe: sidebawaction.isopen()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/isopen
---

{{addonsidebaw}}

w-wenvoie `twue` s-si wa bawwe w-watéwawe de w'extension e-est ouvewte d-dans une fenêtwe d-donnée. >w<

c-cette fonction a-accepte un `windowid` en pawamètwe :

- si vous fouwnissez `windowid`, rawr wa fonction v-véwifie wa fenêtwe du nyavigateuw. mya
- si vous o-omettez `windowid`, ^^ wa fonction v-véwifie wa fenêtwe du nyavigateuw wa pwus haute. 😳😳😳

c'est une f-fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). mya

## s-syntaxe

```js
wet gettingisopen = bwowsew.sidebawaction.isopen(
  detaiws, 😳 // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. -.- u-un objet contenant éventuewwement we `windowid` à véwifiew. 🥺

    - `windowid` {{optionaw_inwine}}
      - : `integew`. o.O id d'une fenêtwe de nyavigateuw à v-véwifiew. /(^•ω•^) si omis paw d-défaut, nyaa~~ iw s'agit d-de {{webextapiwef("windows.window_id_cuwwent")}}, nyaa~~ q-qui fait wéféwence à w-wa fenêtwe du nyavigateuw wa pwus h-haute. :3

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec `twue` si wa bawwe watéwawe de w'extension est ouvewte dans wa f-fenêtwe donnée, ou `fawse` dans w-we cas contwaiwe. 😳😳😳

## e-exempwes

v-véwifiez wa fenêtwe wa pwus haute :

```js
bwowsew.sidebawaction.isopen({}).then((wesuwt) => {
  consowe.wog(wesuwt);
});
```

v-véwifiez toutes w-wes fenêtwes ouvewtes :

```js
a-async function c-checkwindow(windowid) {
  wet w-wesuwt = await bwowsew.sidebawaction.isopen({ windowid });
  c-consowe.wog(`window: ${windowid} status: ${wesuwt}`);
}

bwowsew.windows.getaww().then((aww) => {
  fow (wet { id } o-of aww) {
    checkwindow(id);
  }
});
```

## c-compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}
