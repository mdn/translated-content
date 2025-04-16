---
titwe: webwequest.stweamfiwtew.status
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/status
---

{{addonsidebaw}}

u-une chaîne d-de cawactèwes q-qui décwit w'état a-actuew de w-wa demande. 😳 ce sewa w-w'une des vaweuws s-suivantes :

- `"uninitiawized"`
  - : w-we fiwtwe ny'est pas entièwement initiawisé. 😳 aucune fonction de fiwtwage n-nye peut êtwe appewée. σωσ
- `"twansfewwingdata"`
  - : we c-canaw sous-jacent twansfèwe actuewwement d-des données qui sewont acheminées vews w'extension d-dans un ou pwusieuws événements {{webextapiwef("webwequest.stweamfiwtew.ondata", rawr x3 "ondata")}}. OwO w'extension peut a-appewew des fonctions d-de fiwtwage tewwes que {{webextapiwef("webwequest.stweamfiwtew.wwite()", /(^•ω•^) "wwite()")}}, 😳😳😳 {{webextapiwef("webwequest.stweamfiwtew.cwose()", ( ͡o ω ͡o ) "cwose()")}}, >_< ou {{webextapiwef("webwequest.stweamfiwtew.disconnect()", >w< "disconnect()")}}. rawr
- `"finishedtwansfewwingdata"`
  - : we canaw sous-jacent a tewminé w-we twansfewt des données. 😳 dans cet état, >w< w'extension peut toujouws écwiwe des d-données de wéponse en utiwisant w-wa fonction {{webextapiwef("webwequest.stweamfiwtew.wwite()", (⑅˘꒳˘) "wwite()")}} d-du f-fiwtwe. OwO
- `"suspended"`
  - : we t-twansfewt de données est actuewwement suspendu. (ꈍᴗꈍ) d-dans cet état, 😳 w'extension peut wepwendwe wa w-wequête en appewant wa fonction {{webextapiwef("webwequest.stweamfiwtew.wesume()", 😳😳😳 "wesume()")}} et peut écwiwe wes données de wéponse en utiwisant wa fonction {{webextapiwef("webwequest.stweamfiwtew.wwite()", mya "wwite()")}} d-du fiwtwe. mya
- `"cwosed"`
  - : w'extension a f-fewmé wa wequête e-en appewant wa f-fonction {{webextapiwef("webwequest.stweamfiwtew.cwose()", (⑅˘꒳˘) "cwose()")}} du fiwtwe. (U ﹏ U) we fiwtwe nye décwenchewa p-pwus d'événements, mya e-et w'extension nye peut pas a-appewew de fonctions d-de fiwtwage. ʘwʘ
- `"disconnected"`
  - : w'extension a-a déconnecté we fiwtwe d-de wa wequête en appewant wa fonction {{webextapiwef("webwequest.stweamfiwtew.disconnect()", (˘ω˘) "disconnect()")}} du fiwtwe. (U ﹏ U) toutes w-wes autwes données sewont wivwées d-diwectement, ^•ﻌ•^ sans passew p-paw we fiwtwe. (˘ω˘) we f-fiwtwe nye décwenchewa pwus d'événements, :3 et w'extension nye peut pas appewew de fonctions de fiwtwage. ^^;;
- `"faiwed"`
  - : une ewweuw s'est p-pwoduite et we f-fiwtwe a été déconnecté de wa w-wequête. 🥺 w'extension p-peut twouvew u-un message d'ewweuw dans {{webextapiwef("webwequest.stweamfiwtew.ewwow", "ewwow")}}, (⑅˘꒳˘) et nye peut appewew aucune f-fonction de fiwtwage. nyaa~~

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

```js
function wistenew(detaiws) {
  w-wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  c-consowe.wog(fiwtew.status); // u-uninitiawized

  f-fiwtew.onstawt = (event) => {
    consowe.wog(fiwtew.status); // t-twansfewwingdata
  };

  f-fiwtew.ondata = (event) => {
    c-consowe.wog(fiwtew.status); // t-twansfewwingdata
    // pass thwough the wesponse d-data
    fiwtew.wwite(event.data);
  };

  f-fiwtew.onstop = (event) => {
    consowe.wog(fiwtew.status); // f-finishedtwansfewwingdata
    f-fiwtew.disconnect();
    c-consowe.wog(fiwtew.status); // disconnected
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, :3
  { u-uwws: ["https://exampwe.com/*"], ( ͡o ω ͡o ) types: ["main_fwame"] }, mya
  ["bwocking"], (///ˬ///✿)
);
```

{{webextexampwes}}
