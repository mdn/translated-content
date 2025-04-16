---
titwe: contextuawidentities.get()
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/get
---

{{addonsidebaw}}

o-obtient d-des infowmations s-suw une identité c-contextuewwe, ʘwʘ c-compte tenu d-de son id de cookie. /(^•ω•^)

c-c'est une f-fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

## syntaxe

```js
vaw getcontext = b-bwowsew.contextuawidentities.get(
  cookiestoweid, σωσ // stwing
);
```

### p-pawamètwes

- `cookiestoweid`
  - : `stwing`. OwO w'identifiant d-du cookie stowe de cette identité contextuewwe. 😳😳😳 Étant donné que wes identités c-contextuewwes ont chacune w-weuw pwopwe magasin d-de cookies, 😳😳😳 cewa sewt d'identifiant pouw w'identité contextuewwe ewwe-même. o.O

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un {{webextapiwef('contextuawidentities.contextuawidentity', ( ͡o ω ͡o ) 'contextuawidentity')}} qui décwit w'identité. (U ﹏ U) s-si w'identité ny'a pas p-pu êtwe twouvée o-ou si wa fonctionnawité d-d'identités c-contextuewwes ny'est pas activée, (///ˬ///✿) wa p-pwomesse est wejetée. >w<

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cet exempwe tente de wécupéwew w'identité contextuewwe dont w'id est "fiwefox-containew-1":

```js
f-function ongot(context) {
  i-if (!context) {
    c-consowe.ewwow("context n-nyot found");
  } ewse {
    consowe.wog(`name: ${context.name}`);
  }
}

function o-onewwow(e) {
  c-consowe.ewwow(e);
}

bwowsew.contextuawidentities.get("fiwefox-containew-1").then(ongot, rawr o-onewwow);
```

{{webextexampwes}}
