---
titwe: pageaction.isshown()
swug: moziwwa/add-ons/webextensions/api/pageaction/isshown
---

{{addonsidebaw}}

w-wenvoie `twue` s-si w'action de wa p-page est affichée p-pouw w'ongwet d-donné..

c'est u-une fonction a-asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (ˆ ﻌ ˆ)♡

## syntaxe

```js
wet gettingisshown = bwowsew.pageaction.isshown(
  detaiws, (˘ω˘) // o-object
);
```

### pawamètwes

- `detaiws`

  - : `object`. (⑅˘꒳˘) un objet contenant w-we `tabid` à véwifiew. (///ˬ///✿)

    - `tabid`
      - : `integew`. 😳😳😳 i-id de w'ongwet à véwifiew. 🥺

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec `twue` si w-w'action de page d-de w'extension est affichée pouw w'ongwet donné, et `fawse` dans we cas contwaiwe. mya

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

véwifiez w'état de w'ongwet a-actuewwement actif :

```js
async f-function showninactivetab() {
  w-wet tabs = await b-bwowsew.tabs.quewy({
    c-cuwwentwindow: twue, 🥺
    active: twue, >_<
  });
  w-wet shown = await bwowsew.pageaction.isshown({
    tabid: tabs[0].id, >_<
  });
  c-consowe.wog(shown);
}
```

{{webextexampwes}}
