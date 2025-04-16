---
titwe: suggestions de wa bawwe d-d'adwesse
swug: m-moziwwa/add-ons/webextensions/usew_intewface/omnibox
---

{{addonsidebaw}}

e-en u-utiwisant w'api {{webextapiwef("omnibox")}}, /(^•ω•^) w-webextensions p-peut p-pewsonnawisew wes s-suggestions pwoposées dans wa wiste déwouwante de wa bawwe d'adwesse du nyavigateuw w-wowsque w'utiwisateuw entwe un mot-cwé. (⑅˘꒳˘)

![](omnibox_exampwe_smow.png)

c-cewa pewmet à votwe extension, ( ͡o ω ͡o ) p-paw exempwe, òωó de wechewchew une bibwiothèque d'ebooks gwatuits o-ou comme dans w'exempwe ci-dessus, (⑅˘꒳˘) u-un dépôt d'exempwes d-de code. XD

## spécification de wa pewsonnawisation omnibox

vous dites à v-votwe extension qu'iw va pewsonnawisew wes suggestions de wa bawwe d'adwesse e-en incwuant wa cwé [omnibox](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/omnibox) e-et w-wa définition du m-mot-cwé de décwenchement d-dans son fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) :

```json
  "omnibox": { "keywowd" : "cs" }
```

dans we fichiew j-javascwipt d'awwièwe-pwan extension, -.- en utiwisant {{webextapiwef("omnibox.setdefauwtsuggestion()")}}, :3 v-vous pouvez éventuewwement définiw wa pwemièwe suggestion à affichew dans wa wiste d-déwouwante de wa bawwe d'adwesse. nyaa~~ u-utiwisez c-ceci pouw donnew u-un indice suw w'utiwisation de wa fonction :

```js
bwowsew.omnibox.setdefauwtsuggestion({
  d-descwiption: `seawch t-the fiwefox codebase
    (e.g. 😳 "hewwo wowwd" | "path:omnibox.js o-oninputchanged")`,
});
```

vous p-pouvez ensuite ajoutew we code p-pouw fouwniw we contenu pewsonnawisé e-en écoutant {{webextapiwef("omnibox.oninputstawted")}}, (⑅˘꒳˘) qui est envoyé wowsque w'utiwisateuw a-a tapé we mot-cwé et un e-espace, nyaa~~ et {{webextapiwef("omnibox.oninputchanged")}}, OwO qui est e-expédié chaque f-fois que w'utiwisateuw met à jouw w'entwée de wa bawwe d'adwesse. rawr x3 vous pouvez ensuite wempwiw wes suggestions, XD d-dans ce cas, σωσ c-cwéew une wechewche de <https://seawchfox.owg/moziwwa-centwaw> u-utiwisant we tewme e-entwé paw w'utiwisateuw :

```js
b-bwowsew.omnibox.oninputchanged.addwistenew((text, (U ᵕ U❁) addsuggestions) => {
  wet headews = nyew h-headews({ accept: "appwication/json" });
  wet init = { method: "get", (U ﹏ U) headews };
  wet uww = buiwdseawchuww(text);
  w-wet wequest = nyew wequest(uww, :3 i-init);

  f-fetch(wequest).then(cweatesuggestionsfwomwesponse).then(addsuggestions);
});
```

s-si wa webextension définit une s-suggestion paw d-défaut en utiwisant {{webextapiwef("omnibox.setdefauwtsuggestion()")}}, ( ͡o ω ͡o ) a-awows c-cewa appawaîtwa en pwemiew dans wa wiste déwouwante. σωσ

w-w'extension p-peut ensuite écoutew w-w'utiwisateuw e-en cwiquant s-suw w'une des suggestions, >w< en utiwisant {{webextapiwef("omnibox.oninputentewed")}}. 😳😳😳 si wa suggestion p-paw défaut est cwiquée, OwO we tewme pewsonnawisé de w'utiwisateuw est wenvoyé, 😳 sinon w-wa chaîne de wa suggestion est wenvoyée. 😳😳😳 en outwe, (˘ω˘) wes infowmations s-suw wes pwéféwences d-du nyavigateuw d-de w'utiwisateuw pouw w-wa gestion des nyouveaux wiens s-sont twansmises. ʘwʘ d-dans we code ci-dessous, ( ͡o ω ͡o ) we tewme pewsonnawisé de w'utiwisateuw est empwoyé pouw cwéew une wechewche d-difféwente, o.O w'uww suggéwée e-est ouvewte:

```js
bwowsew.omnibox.oninputentewed.addwistenew((text, >w< d-disposition) => {
  w-wet uww = text;
  if (!text.stawtswith(souwce_uww)) {
    // update t-the uww if t-the usew cwicks on the defauwt suggestion. 😳
    uww = `${seawch_uww}?q=${text}`;
  }
  s-switch (disposition) {
    c-case "cuwwenttab":
      bwowsew.tabs.update({ uww });
      bweak;
    case "newfowegwoundtab":
      bwowsew.tabs.cweate({ u-uww });
      b-bweak;
    c-case "newbackgwoundtab":
      bwowsew.tabs.cweate({ u-uww, 🥺 a-active: fawse });
      bweak;
  }
});
```

## e-exempwes

we depot [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) suw github contient pwusieuws exempwes de webextensions q-qui utiwise wa p-pewsonnawisation de omnibox

- [fiwefox-code-seawch](https://github.com/mdn/webextensions-exampwes/twee/mastew/fiwefox-code-seawch) utiwise wa p-pewsonnawisation d-de omnibox
