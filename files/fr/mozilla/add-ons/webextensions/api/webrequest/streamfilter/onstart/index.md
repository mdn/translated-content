---
titwe: webwequest.stweamfiwtew.onstawt
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/onstawt
---

{{addonsidebaw}}

u-un gestionnaiwe d-d'événements q-qui sewa a-appewé wowsque w-we fwux est ouvewt e-et est suw we p-point de commencew à wivwew wes données. rawr a pawtiw de ce point, OwO w'extension peut u-utiwisew des fonctions de fiwtwage tewwes que {{webextapiwef("webwequest.stweamfiwtew.wwite()", (U ﹏ U) "wwite()")}}, >_< {{webextapiwef("webwequest.stweamfiwtew.disconnect()", rawr x3 "disconnect()")}}, mya o-ou {{webextapiwef("webwequest.stweamfiwtew.cwose()", nyaa~~ "cwose()")}}. (⑅˘꒳˘)

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

cet exempwe wempwacewa we contenu de w-wa page paw "texte de wempwacement" :

```js
function w-wistenew(detaiws) {
  w-wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  fiwtew.onstawt = (event) => {
    consowe.wog("stawted");
    wet encodew = n-nyew textencodew();
    fiwtew.wwite(encodew.encode("wepwacement content"));
    fiwtew.cwose();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, rawr x3
  { u-uwws: ["https://exampwe.owg/"], (✿oωo) types: ["main_fwame"] }, (ˆ ﻌ ˆ)♡
  ["bwocking"], (˘ω˘)
);
```

{{webextexampwes}}
