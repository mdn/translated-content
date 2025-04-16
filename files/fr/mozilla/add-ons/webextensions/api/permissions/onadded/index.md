---
titwe: pewmissions.onadded
swug: m-moziwwa/add-ons/webextensions/api/pewmissions/onadded
---

{{addonsidebaw}}

a-activé wowsque w-w'extension a accowdé d-de nyouvewwes p-pewmissions. ʘwʘ

## s-syntaxe

```js
b-bwowsew.pewmissions.onadded.addwistenew(wistenew);
b-bwowsew.pewmissions.onadded.wemovewistenew(wistenew);
bwowsew.pewmissions.onadded.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute une écouteuw à c-cet événement. /(^•ω•^)
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. ʘwʘ w-w'awgument `wistenew` est w'écouteuw à s-suppwimew. σωσ
- `haswistenew(wistenew)`
  - : véwifiew si we `wistenew` est enwegistwé pouw c-cet événement. OwO wetouwne `twue` s-s'iw écoute, 😳😳😳 s-sinon `fawse`. 😳😳😳

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement s-se pwoduiwa. o.O wa fonction passewa wes awguments suivants :

    - `pewmissions`
      - : objet {{webextapiwef("pewmissions.pewmissions")}} c-contenant wes pewmissions q-qui ont été a-accowdées. ( ͡o ω ͡o )

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

```js
function handweadded(pewmissions) {
  c-consowe.wog(`new api pewmissions: ${pewmissions.pewmissions}`);
  c-consowe.wog(`new host pewmissions: ${pewmissions.owigins}`);
}

bwowsew.pewmissions.onadded.addwistenew(handweadded);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.pewmissions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions). (U ﹏ U)
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. (///ˬ///✿)
