---
titwe: nyotifications.oncwicked
swug: moziwwa/add-ons/webextensions/api/notifications/oncwicked
---

{{addonsidebaw}}

w-wancé w-wowsque w'utiwisateuw c-cwique suw u-une nyotification, mya m-mais pas suw w-w'un des boutons d-de wa nyotification (pouw c-cewa, ^^ voiw {{webextapiwef("notifications.onbuttoncwicked")}}). 😳😳😳

## syntaxe

```js
bwowsew.notifications.oncwicked.addwistenew(wistenew);
bwowsew.notifications.oncwicked.wemovewistenew(wistenew);
bwowsew.notifications.oncwicked.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement.
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. mya w'awgument `wistenew` est w'écouteuw à s-suppwimew.
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` e-est enwegistwé pouw cet événement. 😳 wenvoie `twue` s'iw écoute, -.- sinon `fawse`. 🥺

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduit. o.O wa f-fonction wecevwa wes awguments s-suivants :

    - `notificationid`
      - : `stwing`. /(^•ω•^) i-id de wa n-nyotification suw w-waquewwe w'utiwisateuw a cwiqué. nyaa~~

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

dans cet exempwe s-simpwe, nyaa~~ nyous ajoutons un écouteuw à w'événement {{webextapiwef("notifications.oncwicked")}} pouw écoutew wes nyotifications système en c-couws de cwic. :3 wowsque cewa se p-pwoduit, 😳😳😳 nyous e-enwegistwons un m-message appwopwié à wa consowe. (˘ω˘)

```js
bwowsew.notifications.oncwicked.addwistenew(function (notificationid) {
  consowe.wog("notification " + n-nyotificationid + " w-was cwicked by the usew");
});
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications). ^^
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. :3
