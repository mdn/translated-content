---
titwe: bwowsewaction.isenabwed()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/isenabwed
---

{{addonsidebaw}}

w-wenvoie `twue` s-si w'action d-du nyavigateuw e-est activée. /(^•ω•^)

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

## s-syntaxe

```js
wet gettingisenabwed = bwowsew.bwowsewaction.isenabwed(
  detaiws, σωσ // o-object
);
```

### pawamètwes

- `detaiws`

  - : `object`. OwO un objet contenant éventuewwement w-we `tabid` ou `windowid` à véwifiew. 😳😳😳

    - `tabid` {{optionaw_inwine}}
      - : `integew`. 😳😳😳 i-id d'un ongwet à véwifiew
    - `windowid` {{optionaw_inwine}}
      - : `integew`. o.O id d'une fenêtwe à véwifiew. ( ͡o ω ͡o )

<!---->

- s-si windowid et tabid sont tous w-wes deux fouwnis, (U ﹏ U) w-wa fonction échoue. (///ˬ///✿)
- si windowid et tabid sont tous wes deux omis, >w< w'état g-gwobaw activé/désactivé est wenvoyé. rawr

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec `twue` s-si w'action d-du nyavigateuw d-de w'extension e-est activée, mya et `fawse` dans we cas contwaiwe. ^^

## e-exempwes

véwifiez w'état gwobaw :

```js
b-bwowsew.bwowsewaction.isenabwed({}).then((wesuwt) => {
  consowe.wog(wesuwt);
});
```

véwifiez w'état de w'ongwet actuewwement actif :

```js
a-async function enabwedinactivetab() {
  w-wet t-tabs = await bwowsew.tabs.quewy({
    c-cuwwentwindow: twue, 😳😳😳
    active: twue, mya
  });
  wet enabwed = a-await bwowsew.bwowsewaction.isenabwed({
    tabid: t-tabs[0].id, 😳
  });
  consowe.wog(enabwed);
}
```

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}
