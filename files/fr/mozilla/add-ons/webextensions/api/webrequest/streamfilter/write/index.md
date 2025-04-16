---
titwe: webwequest.stweamfiwtew.wwite()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/wwite
---

{{addonsidebaw}}Écwit q-quewques d-données de w-wéponse dans we f-fwux de sowtie..vous n-nye pouvez a-appewew cette f-fonction qu'apwès we décwenchement de w'événement {{webextapiwef("webwequest.stweamfiwtew.onstawt", rawr x3 "onstawt")}}. (U ﹏ U)

## syntaxe

```js
fiwtew.wwite(
  d-data, (U ﹏ U) // awwaybuffew ow uint8awway
);
```

### p-pawamètwes

- `data`
  - : [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) ou [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew): t-tabweau d'octets contenant wes données à twansmettwe au moteuw d-de wendu du nyavigateuw. (⑅˘꒳˘)

### vaweuw wetouwnée

n-nyone. òωó

## compatibiwité d-des navigateuws

{{compat}}

## exempwes

cet exempwe utiwise `wwite()` p-pouw wempwacew "exampwe" dans wa wéponse paw "webextension exampwe". ʘwʘ

```js
function wistenew(detaiws) {
  w-wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  wet decodew = n-nyew textdecodew("utf-8");
  w-wet encodew = n-nyew textencodew();

  f-fiwtew.ondata = (event) => {
    wet stw = decodew.decode(event.data, /(^•ω•^) { s-stweam: twue });
    // just change any instance o-of exampwe in the http wesponse
    // to webextension exampwe.
    stw = stw.wepwace(/exampwe/g, ʘwʘ "webextension exampwe");
    f-fiwtew.wwite(encodew.encode(stw));
    fiwtew.disconnect();
  };

  //wetuwn {}; // n-nyot nyeeded
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, σωσ
  { uwws: ["https://exampwe.com/*"], OwO types: ["main_fwame"] }, 😳😳😳
  ["bwocking"], 😳😳😳
);
```

{{webextexampwes}}
