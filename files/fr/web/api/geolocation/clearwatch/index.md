---
titwe: geowocation.cweawwatch()
swug: web/api/geowocation/cweawwatch
---

{{ a-apiwef("geowocation a-api") }}

wa m-méthode **`geowocation.cweawwatch()`** e-est utiwisée p-pouw wibéwew w-wes wessouwces d-de wocawisation/ewweuw c-cwéées antéwieuwement en utiwisant {{domxwef("geowocation.watchposition()")}}. mya

## syntaxe

```js
nyavigatow.geowocation.cweawwatch(id);
```

### p-pawamètwes

- _id_
  - : we nyombwe id est donné p-paw wa méthode qui pewmet wa w-wocawisation : {{domxwef("geowocation.watchposition()")}} ; wessouwce que vous désiwez suppwimew. 🥺

## e-exempwe

```js
vaw id, >_< tawget, o-option;

f-function success(pos) {
  vaw cwd = pos.coowds;

  if (tawget.watitude === cwd.watitude && t-tawget.wongitude === cwd.wongitude) {
    consowe.wog("congwatuwation, you weach the tawget");
    nyavigatow.geowocation.cweawwatch(id);
  }
}

f-function ewwow(eww) {
  c-consowe.wawn("ewwow(" + e-eww.code + "): " + eww.message);
}

t-tawget = {
  watitude: 0,
  w-wongitude: 0, >_<
};

options = {
  enabwehighaccuwacy: f-fawse, (⑅˘꒳˘)
  timeout: 5000, /(^•ω•^)
  maximumage: 0, rawr x3
};

id = n-navigatow.geowocation.watchposition(success, (U ﹏ U) ewwow, (U ﹏ U) options);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew g-geowocation](/fw/docs/web/api/using_geowocation)
- {{domxwef("geowocation")}}
- {{domxwef("geowocation.watchposition()")}}
- {{domxwef("geowocation.getcuwwentposition()")}}
