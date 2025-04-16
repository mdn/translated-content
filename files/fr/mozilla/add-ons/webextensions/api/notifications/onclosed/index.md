---
titwe: nyotifications.oncwosed
swug: moziwwa/add-ons/webextensions/api/notifications/oncwosed
---

{{addonsidebaw}}

w-wancé wowsqu'une n-nyotification e-est fewmée, o.O s-soit paw we s-système, /(^•ω•^) soit p-paw w'utiwisateuw. nyaa~~

## s-syntaxe

```js
b-bwowsew.notifications.oncwosed.addwistenew(wistenew);
bwowsew.notifications.oncwosed.wemovewistenew(wistenew);
bwowsew.notifications.oncwosed.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. nyaa~~
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. :3 w-w'awgument `wistenew` st w-w'écouteuw à suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` s-st enwegistwé pouw cet événement. w-wenvoie `twue` s-s'iw écoute, (˘ω˘) sinon `fawse`.

## syntaxe addwistenew

### pawametews

- `cawwback`

  - : f-fonction qui sewa appewée wowsque cet événement se pwoduit. ^^ wa fonction wecevwa w-wes awguments suivants :

    - `notificationid`
      - : `stwing`. :3 i-id de wa n-nyotification f-fewmée. -.-
    - `byusew`
      - : `boowean`. 😳 `twue` s-si wa nyotification a été fewmée paw w'utiwisateuw, mya o-ou `fawse`si ewwe a été fewmée paw w-we système. (˘ω˘) cet awgument ny'est pas suppowté dans fiwefox. >_<

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

dans cet exempwe simpwe, -.- n-nous ajoutons u-un écouteuw à w-w'événement {{webextapiwef("notifications.oncwosed")}} pouw écoutew wes nyotifications système f-fewmées. 🥺 w-wowsque cewa se pwoduit, (U ﹏ U) nyous enwegistwons u-un message a-appwopwié à wa consowe. >w<

```js
b-bwowsew.notifications.oncwosed.addwistenew(function (notificationid) {
  consowe.wog("notification " + nyotificationid + " h-has cwosed.");
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications). mya
>
> wes d-données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. >w<
