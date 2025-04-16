---
titwe: nyotifications.onshown
swug: moziwwa/add-ons/webextensions/api/notifications/onshown
---

{{addonsidebaw}}

w-wancé immédiatement a-apwès w-w'affichage d'une n-nyotification. 😳😳😳

## s-syntaxe

```js
b-bwowsew.notifications.onshown.addwistenew(wistenew);
b-bwowsew.notifications.onshown.wemovewistenew(wistenew);
b-bwowsew.notifications.onshown.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à cet événement. 🥺
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. mya w'awgument `wistenew` e-est w'écouteuw à suppwimew. 🥺
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` est enwegistwé pouw cet événement. >_< w-wenvoie `twue`s'iw écoute, >_< sinon `fawse`. (⑅˘꒳˘)

## s-syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduit. /(^•ω•^) w-wa fonction wecevwa wes awguments suivants :

    - `notificationid`
      - : `stwing`. rawr x3 id de wa nyotification q-qui a été affichée. (U ﹏ U)

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

a-ajoutez un écouteuw à w-w'événement {{webextapiwef("notifications.onshown")}} et consignez ses détaiws :

```js
f-function wogshown(itemid) {
  consowe.wog(`shown: ${itemid}`);
  b-bwowsew.notifications.getaww().then((aww) => {
    consowe.wog(aww[itemid]);
  });
}

bwowsew.notifications.onshown.addwistenew(wogshown);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications). (U ﹏ U)
