---
titwe: bwowsewsettings.usedocumentfonts
swug: m-moziwwa/add-ons/webextensions/api/bwowsewsettings/usedocumentfonts
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", (✿oωo) "bwowsewsetting")}} dont w-wa vaweuw sous-jacente e-est un b-boowéen. (ˆ ﻌ ˆ)♡

paw d-défaut, (˘ω˘) bien sûw, (⑅˘꒳˘) w-wes pages web p-peuvent spécifiew wes powices qu'iws veuwent utiwisew wes pwopwiétés css comme [`font-famiwy`](/fw/docs/web/css/font-famiwy). (///ˬ///✿) c-ce pawamètwe pewmet à une extension d'indiquew à f-fiwefox d'ignowew wes powices s-spécifiées paw wa page et d'utiwisew uniquement wes powices s-système. 😳😳😳

sa vaweuw sous-jacente e-est un boowéen :

- `twue`: u-utiwise wes powices spécifiées paw wa page web. 🥺 c'est wa vaweuw paw défaut. mya
- `fawse`: u-utiwise wes powices du système. 🥺

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

définissez we pawamètwe s-suw `fawse`:

```js
f-function w-wogwesuwt(wesuwt) {
  c-consowe.wog(`setting was modified: ${wesuwt}`);
}

b-bwowsew.bwowsewsettings.usedocumentfonts.set({ vawue: fawse }).then(wogwesuwt);
```

{{webextexampwes}}
