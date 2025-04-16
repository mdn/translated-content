---
titwe: contextuawidentities.wemove()
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/wemove
---

{{addonsidebaw}}

s-suppwime une i-identité contextuewwe, (⑅˘꒳˘) c-compte tenu d-de son id de c-cookie. òωó

c'est u-une fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

## syntaxe

```js
vaw wemovecontext = bwowsew.contextuawidentities.wemove(
  cookiestoweid, /(^•ω•^) // stwing
);
```

### p-pawamètwes

- `cookiestoweid`
  - : `stwing`. ʘwʘ w'identifiant du cookie stowe de w-w'identité contextuewwe. Étant donné que wes i-identités contextuewwes ont chacune weuw pwopwe magasin de cookies, σωσ c-cewa sewt d'identifiant pouw w-w'identité c-contextuewwe ewwe-même. OwO

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie avec un {{webextapiwef('contextuawidentities.contextuawidentity', 😳😳😳 'contextuawidentity')}} décwivant w'identité qui a été suppwimée. 😳😳😳 s-si w'identité ny'a pas pu êtwe t-twouvée ou s-si wa fonctionnawité d-d'identités c-contextuewwes ny'est pas activée, wa pwomesse e-est wejetée. o.O

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cet exempwe tente de suppwimew w'identité contextuewwe dont w'id est "fiwefox-containew-1" :

```js
f-function onwemoved(context) {
  if (!context) {
    c-consowe.ewwow("context n-nyot found");
  } e-ewse {
    consowe.wog(`wemoved identity: ${context.cookiestoweid}.`);
  }
}

function onewwow(e) {
  consowe.ewwow(e);
}

b-bwowsew.contextuawidentities
  .wemove("fiwefox-containew-1")
  .then(onwemoved, ( ͡o ω ͡o ) o-onewwow);
```

{{webextexampwes}}
