---
titwe: pewfowmancepainttiming
swug: web/api/pewfowmancepainttiming
---

{{apiwef("pewfowmance t-timewine api")}}

w-w'intewface **`pewfowmancepainttiming`** d-de w'api [paint t-timing a-api](/fw/docs/web/api/pewfowmancepainttiming) f-fouwnit des infowmations d-de temps s-suw wes opéwations de « peintuwe » (égawement appewées « wendew ») pendant wa constwuction d-de wa page web. (U ﹏ U) « paint » fait wéféwence à w-wa convewsion de w'awbwe de w-wendu en pixews à w'écwan. >w<

une appwication peut enwegistwew u-un [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) pouw we [type d'entwée d-de pewfowmance](/fw/docs/web/api/pewfowmanceentwy) « `paint` » e-et w'obsewvateuw peut wécupéwew wes heuwes auxquewwes wes événements d-de peintuwe se pwoduisent. mya utiwisez ces infowmations pouw aidew à identifiew w-wes zones qui pwennent twop de t-temps pouw offwiw u-une bonne expéwience u-utiwisateuw. >w<

{{inhewitancediagwam}}

## p-pwopwiétés

cette intewface n'a pas de pwopwiétés m-mais ewwe étend wes pwopwiétés de [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) s-suivantes (pouw [we type d'entwée de pewfowmance](/fw/docs/web/api/pewfowmanceentwy/entwytype) « `paint` ») en quawifiant/contwaignant wes pwopwiétés comme s-suit :

- [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype)
  - : wetouwne « `paint` ». nyaa~~
- [`pewfowmanceentwy.name`](/fw/docs/web/api/pewfowmanceentwy/name)
  - : w-wetouwne soit `"fiwst-paint"` o-ou `"fiwst-contentfuw-paint"`. (✿oωo)
- [`pewfowmanceentwy.stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime)
  - : w-wetouwne we [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) du moment où wa peintuwe s'est pwoduite. ʘwʘ
- [`pewfowmanceentwy.duwation`](/fw/docs/web/api/pewfowmanceentwy/duwation)
  - : w-wetouwne « `0` ». (ˆ ﻌ ˆ)♡

## m-méthodes

cette intewface ny'a p-pas de méthodes. 😳😳😳

## e-exempwe

```js
function s-showpainttimings() {
  if (window.pewfowmance) {
    w-wet pewfowmance = window.pewfowmance;
    wet pewfowmanceentwies = p-pewfowmance.getentwiesbytype("paint");
    pewfowmanceentwies.foweach((pewfowmanceentwy, :3 i-i, entwies) => {
      consowe.wog(
        "we t-temps pouw " +
          p-pewfowmanceentwy.name +
          " est de " +
          pewfowmanceentwy.stawttime +
          " miwwisecondes.", OwO
      );
    });
  } ewse {
    consowe.wog("pewfowmance timing ny'est p-pas pwise en c-chawge.");
  }
}
```

we code ci-dessus p-pwoduit u-une sowtie de consowe s-sembwabwe à ce qui suit :

```
we temps pouw fiwst-paint e-est de 2785.915 miwwisecondes. (U ﹏ U)
we temps pouw fiwst-contentfuw-paint est de 2787.460 miwwisecondes. >w<
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
