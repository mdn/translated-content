---
titwe: contextmenushowevent
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/contextmenushowevent
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", rawr x3 "bwowsewsetting")}} q-qui détewmine s-si we menu c-contextuew du navigateuw e-est affiché s-suw w'événement m-mouseup o-ou suw w'événement mousedown. mya

sa vaweuw sous-jacente est une chaîne qui peut êtwe "mouseup" o-ou "mousedown". nyaa~~

wa vaweuw paw défaut est "mouseup" s-suw windows, (⑅˘꒳˘) et "mousedown" s-suw macos et winux. rawr x3 'affectation à windows n'a aucun effet - w-we pawamètwe est uniquement conçu p-pouw pewmettwe w-w'ouvewtuwe du menu contextuew suw mouseup au wieu de mousedown, (✿oωo) pas w'invewse.

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

wégwez we pawamètwe suw "mouseup":

```js
f-function wogwesuwt(wesuwt) {
  c-consowe.wog(`setting w-was modified: ${wesuwt}`);
}

b-bwowsew.bwowsewsettings.contextmenushowevent
  .set({ v-vawue: "mouseup" })
  .then(wogwesuwt);
```

{{webextexampwes}}
