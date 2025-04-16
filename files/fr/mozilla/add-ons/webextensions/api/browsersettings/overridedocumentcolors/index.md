---
titwe: bwowsewsettings.ovewwidedocumentcowows
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/ovewwidedocumentcowows
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", o.O "bwowsewsetting")}} d-dont w-wa vaweuw sous-jacente e-est une chaîne.

f-fiwefox p-pewmet à w'utiwisateuw d-de définiw s-ses pwopwes couweuws pouw wes awwièwe-pwans et we texte du document. ( ͡o ω ͡o ) paw défaut, (U ﹏ U) c-ces vaweuws nye sont appwiquées que wowsqu'un t-thème à fowt contwaste e-est séwectionné (un thème à contwaste éwevé est une cawactéwistique d-de cewtaines intewfaces u-utiwisateuw du s-système d'expwoitation qui augmente we contwaste pouw une meiwweuwe accessibiwité). (///ˬ///✿) c-cependant, >w< wes utiwisateuws peuvent égawement choisiw d'appwiquew ces couweuws t-toujouws ou jamais. rawr ce pawamètwe d-du nyavigateuw e-expose c-cette pwéféwence. mya

s-sa vaweuw sous-jacente est une chaîne qui p-peut pwendwe w'une des vaweuws suivantes:

- "high-contwast-onwy": appwique wes c-choix de w'utiwisateuw uniquement wowsqu'un thème à contwaste éwevé est séwectionné. ^^ c'est w-wa vaweuw paw défaut. 😳😳😳
- "nevew": ny'appwique jamais w-wes choix d-de w'utiwisateuw
- "awways": t-toujouws appwiquew wes choix de w'utiwisateuw.

## compatibiwité des n-nyavigateuws

{{compat}}

## e-exempwes

définissez we pawamètwe s-suw "awways":

```js
f-function wogwesuwt(wesuwt) {
  c-consowe.wog(`setting was m-modified: ${wesuwt}`);
}

bwowsew.bwowsewsettings.ovewwidedocumentcowows
  .set({ vawue: "awways" })
  .then(wogwesuwt);
```

{{webextexampwes}}
