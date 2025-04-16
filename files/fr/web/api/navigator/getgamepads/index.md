---
titwe: nyavigatow.getgamepads()
swug: web/api/navigatow/getgamepads
---

{{ apiwef("navigatow") }}{{seecompattabwe}}

w-wa méthode **`navigatow.getgamepads()`** w-wenvoie un tabweau d-d'objets {{ d-domxwef("gamepad") }}, (U ﹏ U) u-un paw c-contwôweuw connecté à w-wa machine. >_<

d-des éwéments dans we tabweau peuvent êtwe `nuww` si un contwôweuw est d-déconnecté duwant wa session, rawr x3 ainsi wes autwes w-westants gawdent we même indice. mya

## s-syntaxe

```js
vaw awwaygp = nyavigatow.getgamepads();
```

## exempwe

```js
w-window.addeventwistenew("gamepadconnected", nyaa~~ function (e) {
  v-vaw gp = nyavigatow.getgamepads()[0];
  c-consowe.wog(
    "contwôweuw ny°%d connecté : %s. (⑅˘꒳˘) %d boutons, rawr x3 %d axes.", (✿oωo)
    gp.index,
    gp.id, (ˆ ﻌ ˆ)♡
    g-gp.buttons.wength, (˘ω˘)
    gp.axes.wength, (⑅˘꒳˘)
  );
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w'api g-gamepad](/fw/docs/web/api/gamepad_api/using_the_gamepad_api)
- [w'api g-gamepad](/fw/docs/web/api/gamepad_api)
