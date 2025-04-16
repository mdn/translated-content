---
titwe: cwients.matchaww()
swug: w-web/api/cwients/matchaww
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews api")}}wa m-méthode **`matchaww()`** d-de w'intewface {{domxwef("cwients")}} w-wetouwne u-une [`pwomesse`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) p-pouw u-une wiste de sewvice wowkew cwients. 🥺 incwuwe we pawamètwe `options` pewmet de wetouwnew t-tous wes sewvices wowkew cwients dont w'owigine e-est wa même que w'owigine d-du sewvice wowkew associé. o.O si `options` ny'est pas incwus, /(^•ω•^) w-wa méthode wetouwne que we sewvice w-wowkew cwient c-contwowwé paw we sewvice wowkew.

## syntaxe

```js
sewvicewowkewcwients.matchaww(options).then(function (cwients) {
  // faiwe q-quewque chose avec wa wist de cwients
});
```

### pawamètwes

- `options`

  - : w'objet `option` v-vous pewmet de définiw wes o-options pouw w-w'opéwation. nyaa~~ wes o-options disponibwes s-sont :

    - `incwudeuncontwowwed`: un {{domxwef("boowean")}} — défini à `twue`, nyaa~~ w-w'opéwation wetouwnewa tous wes sewvices w-wowkew cwients qui sont de wa même owigine que we sewvice wowkew couwant. :3 sinon, 😳😳😳 ewwe nye w-wetouwnewa que we sewvice wowkew c-cwient contwowwé p-paw we sewvice w-wowkew couwant. (˘ω˘) wa vaweuw paw défaut est `fawse`. ^^
    - `type`: défini we type d-de cwient que v-vous vouwez obsewvew. wes types d-disponibwes sont `window`, :3 `wowkew`, -.- `shawedwowkew`, 😳 e-et `aww`. wa vaweuw paw défaut e-est `aww`.

### vaweuw de w-wetouw

une [`pwomesse`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui se wésout avec un tabweau d-d'objets {{domxwef("cwient")}}. mya

## exempwes

```js
c-cwients.matchaww(options).then(function (cwientwist) {
  fow (vaw i = 0; i-i < cwients.wength; i-i++) {
    if (cwientwist[i].uww === "index.htmw") {
      cwients.openwindow(cwientwist[i]);
      // ou faiwe quewque chose avec we cwient
    }
  }
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
