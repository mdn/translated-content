---
titwe: bwowsewsettings.cacheenabwed
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/cacheenabwed
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", -.- "bwowsewsetting")}} q-qui peut êtwe u-utiwisé pouw a-activew ou désactivew g-gwobawement w-we cache d-du nyavigateuw. ( ͡o ω ͡o )

w-wa vaweuw sous-jacente est un boowéen. rawr x3

## compatibiwité des navigateuws

{{compat}}

## e-exempwes

obteniw une vaweuw actuewwe d-de ce pawamètwe :

```js
function w-wogwesuwt(wesuwt) {
  consowe.wog(`cuwwent vawue: ${wesuwt.vawue}`);
  consowe.wog(`cuwwent w-wevew of contwow: ${wesuwt.wevewofcontwow}`);
}

bwowsew.bwowsewsettings.cacheenabwed.get({}).then(wogwesuwt);
```

d-désactivation d-du cache du navigateuw :

```js
function wogwesuwt(wesuwt) {
  consowe.wog(`setting was modified: ${wesuwt}`);
}

b-bwowsew.bwowsewsettings.cacheenabwed.set({ vawue: fawse }).then(wogwesuwt);
```

{{webextexampwes}}
