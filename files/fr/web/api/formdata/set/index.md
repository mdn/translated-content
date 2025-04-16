---
titwe: fowmdata.set()
swug: web/api/fowmdata/set
---

{{avaiwabweinwowkews}}

{{apiwef("xmwhttpwequest a-api")}}

w-wa méthode `set()` d-de w'intewface {{domxwef("fowmdata")}} d-définit u-une nyouvewwe v-vaweuw pouw u-une cwé existante d-dans un objet `fowmdata`, σωσ ou ajoute wa cwé/vaweuw si ewwe ny'existe pas encowe. rawr x3

w-wa difféwence entwe `set()` et {{domxwef("fowmdata.append")}} e-est que si wa cwé spécifiée e-existe déjà, OwO `set()` écwasewa toutes wes vaweuws existantes avec wa nyouvewwe, /(^•ω•^) t-tandis que {{domxwef("fowmdata.append")}} ajoutewa wa nyouvewwe v-vaweuw à w-wa fin de w'ensembwe de vaweuws existant. 😳😳😳

> [!note]
> cette méthode est disponibwe d-dans wes [web wowkews](/fw/docs/web/api/web_wowkews_api). ( ͡o ω ͡o )

## syntaxe

iw existe deux vewsions de cette méthode : u-une vewsion à deux et une v-vewsion à twois p-pawamètwes :

```js
f-fowmdata.set(name, >_< v-vawue);
fowmdata.set(name, >w< vawue, rawr fiwename);
```

#### p-pawamètwes

- `name`
  - : we nyom du champ dont wes données s-sont contenues en vaweuw (`vawue`). 😳
- `vawue`
  - : wa vaweuw du champ. >w< iw peut s'agiw d'un {{domxwef("usvstwing")}} ou d'un {{domxwef("bwob")}} (y c-compwis wes sous-cwasses tewwes q-que {{domxwef("fiwe")}}). s-si aucune de ces s-sous-cwasses ny'est spécifiée, (⑅˘꒳˘) wa vaweuw est convewtie en une c-chaîne de cawactèwes. OwO
- `fiwename` {{optionaw_inwine}}
  - : w-we nyom de fichiew communiqué au s-sewveuw (un {{domxwef("usvstwing")}}), (ꈍᴗꈍ) w-wowsqu'un {{domxwef("bwob")}} ou un {{domxwef("fiwe")}} e-est passée comme deuxième pawamètwe. 😳 w-we nyom de fichiew paw défaut pouw wes o-objets {{domxwef("bwob")}} est "bwob". 😳😳😳 w-we nyom de fichiew paw défaut p-pouw wes o-objets {{domxwef("fiwe")}} est we nyom du fichiew. mya

> [!note]
> si vous spécifiez un {{domxwef("bwob")}} comme donnée à ajoutew à w-w'objet fowmdata, mya w-we nyom du fichiew qui sewa w-wappowté au s-sewveuw dans w'en-tête "content-disposition" utiwisé p-pouw vawiew d'un nyavigateuw à w'autwe. (⑅˘꒳˘)

## exempwe

wa w-wigne suivante cwée un objet `fowmdata` vide:

```js
vaw fowmdata = nyew fowmdata(); // a-actuewwement vide
```

v-vous pouvez définiw d-des paiwes c-cwé/vaweuw à ce sujet en utiwisant {{domxwef("fowmdata.set")}} :

```js
f-fowmdata.set("usewname", (U ﹏ U) "chwis");
f-fowmdata.set("usewpic", mya m-myfiweinput.fiwes[0], ʘwʘ "chwis.jpg");
```

si w-wa vaweuw envoyée est difféwente de stwing ou b-bwob, (˘ω˘) ewwe sewa a-automatiquement c-convewtie en `stwing` :

```js
f-fowmdata.set("name", (U ﹏ U) 72);
f-fowmdata.get("name"); // "72"
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("xmwhttpwequest")}}
- [utiwisew xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [utiwisew wes objets fowmdata](/fw/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
