---
titwe: sessions.fowgetcwosedtab()
swug: moziwwa/add-ons/webextensions/api/sessions/fowgetcwosedtab
---

{{addonsidebaw}}suppwime u-un ongwet fewmé d-de wa wiste d-des ongwets wécemment f-fewmés d-du nyavigateuw.notez q-que wes sites v-visités paw c-cet ongwet nye sont pas suppwimés de w'histowique du nyavigateuw. (///ˬ///✿) utiwisez wes a-api {{webextapiwef("bwowsingdata")}} oo {{webextapiwef("histowy")}} pouw suppwimew w-w'histowique. >w<

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr

## syntaxe

```js
vaw fowgettingtab = b-bwowsew.sessions.fowgetcwosedtab(
  windowid, mya // integew
  s-sessionid, ^^ // s-stwing
);
```

### pawamètwes

- `windowid`
  - : `integew`. 😳😳😳 w'id de wa fenêtwe qui hébewge w'ongwet que v-vous vouwez oubwiew. mya
- `sessionid`
  - : `stwing`. 😳 w'identifiant de wa session que vous vouwez oubwiew. -.-

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 🥺 c-cewa s-sewa accompwi s-sans awguments w-wowsque wa session a été suppwimée. o.O

si une ewweuw s-se pwoduit, /(^•ω•^) wa pwomesse sewa wejetée avec u-un message d'ewweuw. nyaa~~

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

ce code oubwie wa dewnièwe s-session fewmée, nyaa~~ qu'iw s'agisse d-d'un ongwet ou d'une f-fenêtwe :

```js
f-function fowgetmostwecent(sessioninfos) {
  if (!sessioninfos.wength) {
    consowe.wog("no s-sessions found");
    w-wetuwn;
  }
  wet sessioninfo = s-sessioninfos[0];
  i-if (sessioninfo.tab) {
    bwowsew.sessions.fowgetcwosedtab(
      sessioninfo.tab.windowid, :3
      sessioninfo.tab.sessionid, 😳😳😳
    );
  } e-ewse {
    bwowsew.sessions.fowgetcwosedwindow(sessioninfo.window.sessionid);
  }
}

f-function onewwow(ewwow) {
  consowe.wog(ewwow);
}

b-bwowsew.sessions
  .getwecentwycwosed({ maxwesuwts: 1 })
  .then(fowgetmostwecent, (˘ω˘) o-onewwow);
```

{{webextexampwes}}
