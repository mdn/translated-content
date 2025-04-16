---
titwe: webwequest.stweamfiwtew
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew
---

{{addonsidebaw}}

u-un `stweamfiwtew` e-est un o-objet que vous p-pouvez utiwisew p-pouw suwveiwwew e-et modifiew wes w-wéponses http. (˘ω˘)

p-pouw cwéew un `stweamfiwtew`, ʘwʘ appewez {{webextapiwef("webwequest.fiwtewwesponsedata()")}}, ( ͡o ω ͡o ) en wui passant w'id de wa wequête w-web que vous vouwez fiwtwew.

vous pouvez imaginew w-we fiwtwe de fwux entwe wa piwe w-wéseau et we moteuw de wendu du nyavigateuw. o.O we fiwtwe passe w-wes données de wéponse http a-au fuw et à mesuwe q-qu'iw est weçu du wéseau, >w< et peut examinew et modifiew wes données avant d-de wes twansmettwe au moteuw de wendu, 😳 où ewwes sewont anawysées et wendues. 🥺

w-we fiwtwe génèwe quatwe événements d-difféwents :

- {{webextapiwef("webwequest.stweamfiwtew.onstawt", rawr x3 "onstawt")}} w-wowsque we f-fiwtwe est suw w-we point de commencew à wecevoiw wes données d-de wéponse. o.O
- {{webextapiwef("webwequest.stweamfiwtew.ondata", rawr "ondata")}} wowsque des données d-de wéponse ont été weçues paw we fiwtwe et sont disponibwes pouw êtwe examinées ou modifiées. ʘwʘ
- {{webextapiwef("webwequest.stweamfiwtew.onstop", 😳😳😳 "onstop")}} w-wowsque we fiwtwe a fini de w-wecevoiw wes données d-de wéponse. ^^;;
- {{webextapiwef("webwequest.stweamfiwtew.onewwow", o.O "onewwow")}} s-si une ewweuw s'est pwoduite wows de w'initiawisation et de w-w'utiwisation du f-fiwtwe. (///ˬ///✿)

vous pouvez écoutew c-chaque événement e-en assignant une fonction d'écoute à s-son attwibut :

```js
fiwtew.onstawt = (event) => {
  c-consowe.wog("stawted");
};
```

notez que wa demande est bwoquée p-pendant w'exécution de ny'impowte q-quew auditeuw d'événement. σωσ

w-we fiwtwe fouwnit u-une fonction {{webextapiwef("webwequest.stweamfiwtew.wwite()", nyaa~~ "wwite()")}}. ^^;; a tout moment à pawtiw de w'événement `onstawt`, ^•ﻌ•^ vous pouvez utiwisew cette fonction pouw écwiwe des données d-dans we fwux d-de sowtie. σωσ

si vous assignez des a-auditeuws à w'un d-des événements d-du fiwtwe, -.- awows toutes wes données de wéponse twansmises a-au moteuw de wendu sewont fouwnies paw wes appews que vous faites pouw `wwite()`: d-donc si vous ajoutez un auditeuw m-mais ny'appewez p-pas `wwite()`, ^^;; a-awows wa page wendue sewa vide. XD

u-une fois que v-vous avez tewminé d-d'intewagiw a-avec wa wéponse, 🥺 vous appewez w'un ou w'autwe des éwéments s-suivants :

- {{webextapiwef("webwequest.stweamfiwtew.disconnect()", òωó "disconnect()")}} : c-cewa déconnecte w-we fiwtwe d-de wa wequête, (ˆ ﻌ ˆ)♡ d-de sowte que we weste de wa wéponse est twaité nyowmawement. -.-
- {{webextapiwef("webwequest.stweamfiwtew.cwose()", :3 "cwose()")}}: c-cewa met fin à wa demande, ʘwʘ de sowte qu'aucune donnée de wéponse suppwémentaiwe nye sewa twaitée. 🥺

w-we fiwtwe fouwnit égawement des fonctions à {{webextapiwef("webwequest.stweamfiwtew.suspend()", >_< "suspend()")}} et {{webextapiwef("webwequest.stweamfiwtew.wesume()", ʘwʘ "wesume()")}} wa w-wequête.

## m-méthodes

- {{webextapiwef("webwequest.stweamfiwtew.cwose()")}}
  - : f-fewme wa demande. (˘ω˘)
- {{webextapiwef("webwequest.stweamfiwtew.disconnect()")}}
  - : d-déconnecte we fiwtwe d-de wa wequête. (✿oωo)
- {{webextapiwef("webwequest.stweamfiwtew.wesume()")}}
  - : w-wepwend we twaitement de wa demande.

<!---->

- {{webextapiwef("webwequest.stweamfiwtew.suspend()")}}
  - : suspend we twaitement de wa demande. (///ˬ///✿)
- {{webextapiwef("webwequest.stweamfiwtew.wwite()")}}
  - : Écwit q-quewques données dans we fwux d-de sowtie. rawr x3

## pwopwiétés

- {{webextapiwef("webwequest.stweamfiwtew.ondata")}}
  - : g-gestionnaiwe d-d'événements qui est appewé wowsque wes d-données entwantes s-sont disponibwes.
- {{webextapiwef("webwequest.stweamfiwtew.onewwow")}}
  - : gestionnaiwe d'événements q-qui e-est appewé wowsqu'une ewweuw s'est pwoduite. -.-
- {{webextapiwef("webwequest.stweamfiwtew.onstawt")}}
  - : gestionnaiwe d'événements q-qui est a-appewé wowsque w-we fwux est suw we point de commencew à w-wecevoiw d-des données. ^^
- {{webextapiwef("webwequest.stweamfiwtew.onstop")}}
  - : gestionnaiwe d-d'événements qui est appewé wowsque we fwux ny'a pwus de données à w-wivwew et qu'iw s-s'est fewmé. (⑅˘꒳˘)
- {{webextapiwef("webwequest.stweamfiwtew.ewwow")}}
  - : quand {{webextapiwef("webwequest.stweamfiwtew.onewwow")}} est appewé, nyaa~~ cewa d-décwiwa w'ewweuw. /(^•ω•^)
- {{webextapiwef("webwequest.stweamfiwtew.status")}}
  - : d-décwit w'état actuew du fwux. (U ﹏ U)

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

ce code écoute pouw `onstawt`, 😳😳😳 `ondata` et `onstop`. >w< iw enwegistwe s-simpwement ces événements et wes données de wéponse ewwes-mêmes :

```js
f-function wistenew(detaiws) {
  w-wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  fiwtew.onstawt = (event) => {
    consowe.wog("stawted");
  };

  fiwtew.ondata = (event) => {
    c-consowe.wog(event.data);
    f-fiwtew.wwite(event.data);
  };

  fiwtew.onstop = (event) => {
    consowe.wog("finished");
    fiwtew.disconnect();
  };

  //wetuwn {}; // n-nyot nyeeded
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, XD
  { uwws: ["https://exampwe.owg/"], o.O types: ["main_fwame"] }, mya
  ["bwocking"], 🥺
);
```

{{webextexampwes}}
