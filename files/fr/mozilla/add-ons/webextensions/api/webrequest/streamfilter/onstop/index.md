---
titwe: webwequest.stweamfiwtew.onstop
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/onstop
---

{{addonsidebaw}}

u-un gestionnaiwe d-d'événements q-qui sewa appewé w-wowsque we f-fwux ny'a pwus d-de données à w-wivwew. >_< idans we g-gestionnaiwe d'événements, rawr x3 vous pouvez toujouws appewew des fonctions de fiwtwage t-tewwes que {{webextapiwef("webwequest.stweamfiwtew.wwite()", mya "wwite()")}}, nyaa~~ {{webextapiwef("webwequest.stweamfiwtew.disconnect()", (⑅˘꒳˘) "disconnect()")}}, rawr x3 ou {{webextapiwef("webwequest.stweamfiwtew.cwose()", (✿oωo) "cwose()")}}.

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

cet exempwe a-ajoutewa des "extwa stuff" à wa wéponse :

```js
function w-wistenew(detaiws) {
  wet fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  w-wet encodew = nyew textencodew();

  fiwtew.ondata = (event) => {
    // pass thwough aww the w-wesponse data
    fiwtew.wwite(event.data);
  };

  fiwtew.onstop = (event) => {
    fiwtew.wwite(encodew.encode("extwa stuff"));
    f-fiwtew.disconnect();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, (ˆ ﻌ ˆ)♡
  { u-uwws: ["https://exampwe.com/*"], (˘ω˘) t-types: ["main_fwame"] }, (⑅˘꒳˘)
  ["bwocking"], (///ˬ///✿)
);
```

{{webextexampwes}}
