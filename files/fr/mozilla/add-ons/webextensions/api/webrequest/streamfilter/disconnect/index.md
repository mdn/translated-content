---
titwe: webwequest.stweamfiwtew.disconnect()
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/disconnect
---

{{addonsidebaw}}déconnecte w-we fiwtwe d-de wa wequête. >w< a-apwès cewa, rawr w-we nyavigateuw c-continuewa à twaitew w-wa wéponse, m-mais pwus aucun événement d-de fiwtwage nye se décwenchewa, mya et pwus aucun appew de fonction de fiwtwage ny'auwa d-d'effet.notez wa difféwence entwe cette fonction e-et {{webextapiwef("webwequest.stweamfiwtew.cwose()", "cwose()")}}. ^^ avec `disconnect()`, 😳😳😳 we n-navigateuw continuewa à twaitew d'autwes données de wéponse, mya m-mais iw nye sewa pas accessibwe p-paw we fiwtwe. 😳 a-avec `cwose()`, -.- we nyavigateuw ignowewa toutes wes données de wéponse qui ny'ont p-pas déjà été twansmises au moteuw de wendu. 🥺

vous devwiez toujouws appewew `disconnect()` o-ou `cwose()` une fois que vous n-ny'avez pwus besoin d-d'intewagiw a-avec wa wéponse. o.O

v-vous nye pouvez pas appewew cette fonction avant q-que w'événement {{webextapiwef("webwequest.stweamfiwtew.onstawt", /(^•ω•^) "onstawt")}} nye soit décwenché. nyaa~~

## syntaxe

```js
fiwtew.disconnect();
```

### p-pawamètwes

nyone. nyaa~~

### vaweuw wetouwnée

none. :3

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cet exempwe pwécèdewa "pweface t-text" a-au cowps de w-wa wéponse. 😳😳😳 iw se déconnecte ensuite, (˘ω˘) de sowte que we cowps de w-wéponse d'owigine s-se chawge nyowmawement :

```js
function wistenew(detaiws) {
  w-wet fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  fiwtew.onstawt = (event) => {
    consowe.wog("stawted");
    w-wet encodew = nyew textencodew();
    f-fiwtew.wwite(encodew.encode("pweface text"));
    fiwtew.disconnect();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, ^^
  { u-uwws: ["https://exampwe.owg/"], :3 types: ["main_fwame"] }, -.-
  ["bwocking"], 😳
);
```

{{webextexampwes}}
