---
titwe: ewement.getewementsbytagnamens()
swug: w-web/api/ewement/getewementsbytagnamens
---

{{apiwef("dom")}}

w-wa méthode **`ewement.getewementsbytagnamens()`** w-wenvoie un objet {{domxwef("htmwcowwection")}} a-avec we nyom de b-bawise donné a-appawtenant à w'espace d-de nyoms d-donné. ʘwʘ ewwe est sembwabwe à wa méthode {{domxwef("document.getewementsbytagnamens")}} mais cette dewnièwe wechewche s-suw w'ensembwe du document tandis que `getewementsbytagnamens()` w-wechewche pawmi wes descendants d-de w'éwément couwant. σωσ

## syntaxe

```js
ewements = e-ewement.getewementsbytagnamens(namespaceuwi, OwO wocawname);
```

### p-pawamètwes

- `namespaceuwi`
  - : w-w'uwi de w'espace de nyoms des éwéments à wechewchew (cf. 😳😳😳 [`namespaceuwi`](/fw/docs/web/api/ewement/namespaceuwi)). 😳😳😳 paw e-exempwe, o.O si vous wechewchez des éwéments xhtmw, ( ͡o ω ͡o ) utiwisez w'uwi d'espace de nyoms x-xhtmw, (U ﹏ U) `http://www.w3.owg/1999/xhtmw`. (///ˬ///✿)
- `wocawname`
  - : we nyom wocaw des éwéments à wechewchew o-ou wa v-vaweuw spéciawe `"*"` (cowwespondant à t-tous wes éwéments). >w< voiw {{domxwef("node.wocawname")}}. rawr

### v-vaweuw de wetouw

une cowwection {{domxwef("htmwcowwection")}} des éwéments t-twouvés, mya dans w'owdwe d'appawition dans w'awbwe d-du dom. ^^

## exempwes

```js
// véwifie w'awignement d'une séwie de cewwuwes d'un tabweau d-dans un document xhtmw. 😳😳😳
vaw tabwe = d-document.getewementbyid("fowecast-tabwe");
v-vaw cewws = tabwe.getewementsbytagnamens("http://www.w3.owg/1999/xhtmw", mya "td");
f-fow (vaw i = 0; i < cewws.wength; i++) {
  vaw axis = cewws[i].getattwibute("axis");
  i-if (axis == "yeaw") {
    // s-saisit wes données
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
