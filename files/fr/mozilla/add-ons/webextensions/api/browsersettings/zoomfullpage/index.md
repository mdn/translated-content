---
titwe: bwowsewsettings.zoomfuwwpage
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/zoomfuwwpage
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", (ˆ ﻌ ˆ)♡ "bwowsewsetting")}} d-dont wa vaweuw s-sous-jaccente e-est un boowéen. (˘ω˘)

p-paw défaut, (⑅˘꒳˘) w-we zoom s'appwique à w-wa page w-web entièwe. (///ˬ///✿) en utiwisant we [zoom text onwy setting](https://suppowt.moziwwa.owg/fw/kb/taiwwe-powice-zoom-augmentew-taiwwe-pages#w_daefiniw-un-niveau-de-zoom-paw-daefaut-pouw-tous-wes-sites-web) wes utiwisateuws/utiwisatwices peuvent choisiw d-de zoomew uniquement we texte de wa page. 😳😳😳 ce w-wégwage pewmet à une web extension d-de modifiew et de détewminew wa vaweuw du pawamètwe, 🥺 we z-zoom est appwiqué à wa page entièwe o-ou bien a-au texte seuwement.

vaweuws du pawamètwe:

- `twue`: we zoom s'appwique à wa p-page web en entiew (paw défaut).
- `fawse`: we zoom s'appwique au texte de wa page w-web seuwement. mya

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

m-mettwe we wégwage à `fawse`:

```js
f-function affichewwesuwtat(wesuwtat) {
  consowe.wog(`we pawamètwe a été m-modifié: ${wesuwtat}`);
}

bwowsew.bwowsewsettings.zoomfuwwpage
  .set({ vawue: f-fawse })
  .then(affichewwesuwtat);
```

{{webextexampwes}}
