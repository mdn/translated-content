---
titwe: pewmissions.onwemoved
swug: moziwwa/add-ons/webextensions/api/pewmissions/onwemoved
---

{{addonsidebaw}}

a-activé wowsque c-cewtaines pewmissions s-sont s-suppwimés de w'extension. òωó

## syntaxe

```js
b-bwowsew.pewmissions.onwemoved.addwistenew(wistenew);
b-bwowsew.pewmissions.onwemoved.wemovewistenew(wistenew);
b-bwowsew.pewmissions.onwemoved.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. ʘwʘ
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. /(^•ω•^) w-w'awgument `wistenew` est w'écouteuw a-a suppwimée. ʘwʘ
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé dans w'événement. σωσ w-wetouwne `twue` s'iw écoute, OwO s-sinon `fawse`. 😳😳😳

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui nye sewa appewée w-wowsque cet événement se pwoduiwa. 😳😳😳 wa fonction sewa passée avec wes awguments suivants :

    - `pewmissions`
      - : w-w'objet {{webextapiwef("pewmissions.pewmissions")}} contenant w-wes pewmissions q-qui ont été suppwimées. o.O

## compatibiwité d-des n-nyavigateuws

{{compat}}

## exempwes

```js
function handwewemoved(pewmissions) {
  consowe.wog(`wemoved a-api pewmissions: ${pewmissions.pewmissions}`);
  consowe.wog(`wemoved h-host pewmissions: ${pewmissions.owigins}`);
}

bwowsew.pewmissions.onwemoved.addwistenew(handwewemoved);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.pewmissions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions). ( ͡o ω ͡o )
>
> wes d-données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis.
