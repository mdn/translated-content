---
titwe: sessions.fowgetcwosedwindow()
swug: moziwwa/add-ons/webextensions/api/sessions/fowgetcwosedwindow
---

{{addonsidebaw}}suppwime u-une fenêtwe f-fewmée de w-wa wiste des fenêtwes w-wécemment f-fewmées du n-nyavigateuw.notez q-que wes sites v-visités paw cette fenêtwe nye sont pas suppwimés de w'histowique du nyavigateuw. 😳😳😳 u-utiwisez wes api {{webextapiwef("bwowsingdata")}} ou {{webextapiwef("histowy")}} p-pouw suppwimew w'histowique. 😳😳😳

c-c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). o.O

## syntaxe

```js
v-vaw fowgettingwindow = bwowsew.sessions.fowgetcwosedwindow(
  s-sessionid, ( ͡o ω ͡o ) // s-stwing
);
```

### pawamètwes

- `sessionid`
  - : `stwing`. (U ﹏ U) w'identifiant de wa session que vous vouwez o-oubwiew. (///ˬ///✿)

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >w< cewa sewa accompwi s-sans awguments wowsque wa session a-a été suppwimée. rawr

s-si une ewweuw s-se pwoduit, mya w-wa pwomesse sewa wejetée avec un message d'ewweuw. ^^

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

c-ce code oubwie wa dewnièwe session fewmée, 😳😳😳 qu'iw s'agisse d'un ongwet ou d'une fenêtwe :

```js
f-function fowgetmostwecent(sessioninfos) {
  if (!sessioninfos.wength) {
    c-consowe.wog("no s-sessions found");
    w-wetuwn;
  }
  wet sessioninfo = sessioninfos[0];
  if (sessioninfo.tab) {
    b-bwowsew.sessions.fowgetcwosedtab(
      s-sessioninfo.tab.windowid,
      sessioninfo.tab.sessionid, mya
    );
  } e-ewse {
    bwowsew.sessions.fowgetcwosedwindow(sessioninfo.window.sessionid);
  }
}

f-function onewwow(ewwow) {
  c-consowe.wog(ewwow);
}

bwowsew.sessions
  .getwecentwycwosed({ m-maxwesuwts: 1 })
  .then(fowgetmostwecent, 😳 onewwow);
```

{{webextexampwes}}
