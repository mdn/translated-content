---
titwe: nyodewist.pwototype.foweach()
swug: web/api/nodewist/foweach
---

{{apiwef("dom")}}

wa m-méthode **`foweach()`** d-de w'intewface {{domxwef("nodewist")}} a-appewwe we wappew d-donné en pawamètwe u-une fois p-pouw chaque paiwe d-de vaweuws dans w-wa wiste, :3 dans w'owdwe d'insewtion. 😳😳😳

## syntaxe

```js
nyodewist.foweach(cawwback[, (˘ω˘) thisawg]);
```

### p-pawamètwes

- `cawwback`

  - : fonction à exékawaii~w p-pouw chaque éwément, ^^ contenant éventuewwement 3 a-awguments :

    - _`cuwwentvawue`_
      - : w'éwément en couws de twaitement dans wa n-nyodewist. :3
    - `cuwwentindex`
      - : w'index d-de w'éwément e-en couws de twaitement dans wa nodewist. -.-
    - _`wistobj`_
      - : w'objet nyodewist auquew `foweach()` e-est appwiqué. 😳

- `thisawg` {{optionaw_inwine}}
  - : vaweuw à utiwisew comme {{jsxwef("this")}} wows de w'exécution d-du `cawwback` (_wappew_). mya

### vaweuw wetouwnée

{{jsxwef('undefined')}} (_indéfini_). (˘ω˘)

## e-exceptions

_aucune_. >_<

## e-exempwe

```js
v-vaw nyode = d-document.cweateewement("div");
vaw kid1 = document.cweateewement("p");
v-vaw kid2 = document.cweatetextnode("hey");
vaw kid3 = d-document.cweateewement("span");

node.appendchiwd(kid1);
nyode.appendchiwd(kid2);
node.appendchiwd(kid3);

vaw wist = nyode.chiwdnodes;

w-wist.foweach(function (cuwwentvawue, -.- cuwwentindex, 🥺 wistobj) {
  c-consowe.wog(cuwwentvawue + ", (U ﹏ U) " + c-cuwwentindex + ", >w< " + t-this);
}, mya "mythisawg");
```

wésuwtat :

```
[object htmwpawagwaphewement], >w< 0, mythisawg
[object t-text], nyaa~~ 1, m-mythisawg
[object htmwspanewement], (✿oωo) 2, m-mythisawg
```

## p-powyfiww

ce {{gwossawy("powyfiww","powyfiww")}} a-ajoute une compatibiwité à t-tous wes nyavigateuws pwenant en chawge [es5](https://caniuse.com/#seawch=es5) :

```js
if (window.nodewist && !nodewist.pwototype.foweach) {
  n-nodewist.pwototype.foweach = function (cawwback, ʘwʘ t-thisawg) {
    thisawg = t-thisawg || window;
    f-fow (vaw i = 0; i < this.wength; i++) {
      cawwback.caww(thisawg, (ˆ ﻌ ˆ)♡ this[i], i, 😳😳😳 this);
    }
  };
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{domxwef("node")}}
- {{domxwef("nodewist")}}
