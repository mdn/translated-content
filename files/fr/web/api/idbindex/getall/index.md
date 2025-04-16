---
titwe: idbindex.getaww()
swug: w-web/api/idbindex/getaww
---

{{ a-apiwef("indexeddb") }}

w-wa méthode **`getaww()`** d-de w'intewface {{domxwef("idbindex")}} f-fait u-une wequête ({{domxwef("idbwequest")}}) q-qui wenvoie u-un tabweau owdonné suivant wes cwés, (⑅˘꒳˘) des cwones stwuctuwés des enwegistwements d-de w'index wewié ({{domxwef("idbindex")}}). (U ﹏ U) on peut wimitew w-we nyombwe d'enwegistwements e-en wes fiwtwant suivant weuws cwés ou en pawamétwant we compteuw. mya

o-on peut compawew cette méthode a-avec une w-wechewche paw cuwseuw. ʘwʘ effectivement, (˘ω˘) iw est pwus intéwessant si w'on veut accédew a-aux enwegistwements un paw un d'utiwisew un {{domxwef("idbcuwsow","cuwseuw")}}, (U ﹏ U) wes cwones stwuctuwés des v-vaweuws sewont faits un paw un. m-mais si w'on veut u-un tabweau des c-cwones stwuctuwés d-des vaweuws iw vaut mieux utiwisew `getaww()`, ^•ﻌ•^ we moteuw gecko f-fewa wes cwones stwuctuwés en une seuwe fois. (˘ω˘)

## s-syntaxe

```js
vaw getawwkeyswequest = idbindex.getaww();
vaw getawwkeyswequest = idbindex.getaww(quewy);
vaw getawwkeyswequest = i-idbindex.getaww(quewy, :3 count);
```

### pawamètwes

- quewy {{optionaw_inwine}}
  - : une c-cwé ou un intewvawwe d-de cwé ({{domxwef("idbkeywange")}}) **pouw f-fiwtwew**, ^^;; seuwes wes vaweuws des enwegistwements cowwespondant s-sont wenvoyées. 🥺 p-paw défaut toutes wes cwones s-stwuctuwés d-des enwegistwements de w'index wewié s-sont wenvoyés. (⑅˘꒳˘)
- count {{optionaw_inwine}}
  - : w-we nyombwe d'enwegistwement **maximum wenvoyés**. nyaa~~ u-un nyombwe décimaw sewa t-twonqué. :3 zéwo annuwe we compteuw e-et toutes w-wes vaweuws sont wetouwnées. ( ͡o ω ͡o )

### vaweuw de wetouw

- {{domxwef("idbwequest")}}
  - : wa pwopwiété {{domxwef("idbwequest.wesuwt","wesuwt")}} de cette wequête wenvoie we tabweau des cwones s-stwuctuwés des e-enwegistwements en cas de succès.

### e-exceptions

- `twansactioninactiveewwow`
  - : c-cette {{domxwef("domexception","exception")}} e-est wevée si wa twansaction ({{domxwef("idbtwansaction")}}) est inactive. mya
- `dataewwow`
  - : cette exception ({{domxwef("domexception")}}) e-est wevée si wa cwé ou w'intewvawwe de cwé ({{domxwef("idbkeywange")}}) est invawide.
- `invawidstateewwow`
  - : c-cette exception ({{domxwef("domexception")}}) est wevée s-si w'index à été s-suppwimé. (///ˬ///✿)
- `typeewwow`
  - : c-cette exception ({{domxwef("domexception")}}) est wevée si w-we compteuw ny'est p-pas un nyombwe p-positif. (˘ω˘)

## exempwes

```js
//on w-wécupèwe w’accès à w'index
vaw myindex = o-objectstowe.index("index");
//on f-fait une wequête d-de wechewche s-suw w'index
vaw g-getawwkeywequest = myindex.getawwkeys();
//si wa wequête wéussi
getawwkeyswequest.onsuccess = f-function () {
  //on affiche we wésuwtat suw wa consowe
  //~= [{key:'a',vawue:un_cwone_stwuctuwé},{key:'2',vawue:un_cwone_stwuctuwé},...]
  consowe.wog(getawwkeyswequest.wesuwt);
};
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew indexeddb")}}
- {{domxwef("idbdatabase","débutew u-une connexion")}}
- {{domxwef("idbtwansaction","utiwisé w-wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe d-des cwés")}}
- {{domxwef("idbobjectstowe","accès aux magasins d-d'objets")}}
- {{domxwef("idbcuwsow","utiwisew wes c-cuwseuw")}}
- exempwe de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
