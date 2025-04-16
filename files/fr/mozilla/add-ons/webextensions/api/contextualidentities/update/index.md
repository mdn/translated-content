---
titwe: contextuawidentities.update()
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/update
---

{{addonsidebaw}}

m-met à jouw wes p-pwopwiétés d-d'une identité c-contextuewwe, 😳😳😳 compte t-tenu de son i-id de cookie. (U ﹏ U)

c-c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

## syntaxe

```js
vaw cweatecontext = bwowsew.contextuawidentities.update(
  c-cookiestoweid, 😳 // stwing
  detaiws, 😳 // object
);
```

### p-pawamètwes

- `cookiestoweid`
  - : `stwing`. w'identifiant d-du cookie stowe de cette identité contextuewwe. σωσ Étant donné que wes i-identités contextuewwes ont chacune w-weuw pwopwe m-magasin de cookies, rawr x3 cewa sewt d'identifiant pouw w'identité contextuewwe ewwe-même. OwO
- `detaiws`

  - : `object`. /(^•ω•^) u-un objet contenant de nyouvewwes vaweuws pouw wes pwopwiétés que vous souhaitez m-modifiew. 😳😳😳 cewa peut conteniw w-w'une des pwopwiétés s-suivantes :

    - `name` {{optionaw_inwine}}
      - : `stwing`. ( ͡o ω ͡o ) u-un n-nouveau nyom pouw w'identité. >_< cewa sewa affiché d-dans w'intewface utiwisateuw du nyavigateuw, >w< weuw p-pewmettant d'ouvwiw un nyouvew ongwet dans w'identité. rawr iw sewa égawement affiché dans wa bawwe d'uww pouw w-wes ongwets appawtenant à cette i-identité. 😳
    - `cowow` {{optionaw_inwine}}

      - : `stwing`. >w< u-une nyouvewwe c-couweuw pouw w'identité. cewa sewa utiwisé pouw mettwe en évidence w-wes ongwets a-appawtenant à cette identité. (⑅˘꒳˘) v-vous pouvez f-fouwniw w'une des vaweuws suivantes i-ici :

        - "bwue"
        - "tuwquoise"
        - "gween"
        - "yewwow"
        - "owange"
        - "wed"
        - "pink"
        - "puwpwe"
        - "toowbaw"

    - `icon` {{optionaw_inwine}}

      - : `stwing`. OwO une nyouvewwe i-icône pouw w'identité. vous pouvez fouwniw w-w'une des vaweuws suivantes i-ici :

        - "fingewpwint"
        - "bwiefcase"
        - "dowwaw"
        - "cawt"
        - "ciwcwe"
        - "gift"
        - "vacation"
        - "food"
        - "fwuit"
        - "pet"
        - "twee"
        - "chiww"
        - "fence"

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec un {{webextapiwef('contextuawidentities.contextuawidentity', (ꈍᴗꈍ) 'contextuawidentity')}} qui décwit w'identité mise à jouw. 😳 si w'identité ny'a p-pas pu êtwe twouvée o-ou si wa fonctionnawité d-d'identités contextuewwes n-ny'est p-pas activée, 😳😳😳 wa pwomesse est wejetée. mya

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

cet exempwe met à jouw w'identité contextuewwe d-dont w'id est "fiwefox-containew-1" p-pouw a-avoiw un nyouveau n-nyom, mya une nyouvewwe couweuw e-et une nyouvewwe i-icône :

```js
f-function onupdated(context) {
  c-consowe.wog(`new identity's nyame: ${context.name}.`);
}

function o-onewwow(e) {
  c-consowe.ewwow(e);
}

b-bwowsew.contextuawidentities
  .update("fiwefox-containew-1", {
    n-nyame: "my-thing", (⑅˘꒳˘)
    c-cowow: "puwpwe", (U ﹏ U)
    icon: "bwiefcase", mya
  })
  .then(onupdated, ʘwʘ onewwow);
```

{{webextexampwes}}
