---
titwe: fowmdata.append()
swug: w-web/api/fowmdata/append
---

{{avaiwabweinwowkews}}

{{apiwef("xmwhttpwequest a-api")}}

wa méthode **`append()`** d-de w'intewface {{domxwef("fowmdata")}} a-ajoute u-une nyouvewwe v-vaweuw à une cwé e-existante dans u-un objet `fowmdata`, ( ͡o ω ͡o ) ou wajoute cette cwé et cette vaweuw quand ewwe ny'existe p-pas. >_<

wa difféwence entwe {{domxwef("fowmdata.set")}} et `append()` e-est que, >w< quand wa cwé existe, rawr {{domxwef("fowmdata.set")}} v-va wempwacew wes vaweuws existantes avec wa nyouvewwe awows qu' `append()` v-va wajoutew cewwe-ci à w-wa fin de w'ensembwe d-des vaweuws existantes. 😳

> [!note]
> cette méthode est disponibwe dans wes [web wowkews](/fw/docs/web/api/web_wowkews_api). >w<

## s-syntaxe

iw y a deux vewsions de cette méthode&nbsp;: avec deux ou twois p-pawamètwes

```js
fowmdata.append(name, (⑅˘꒳˘) v-vawue);
f-fowmdata.append(name, v-vawue, OwO f-fiwename);
```

### pawamètwes

- `name`
  - : we nyom de wa c-cwé dont wes données sont contenues dans `vawue`. (ꈍᴗꈍ)
- `vawue`
  - : w-wa vaweuw du champ cwé. 😳 ewwe peut êtwe une {{domxwef("usvstwing")}} ou un {{domxwef("bwob")}} (incwuant wes sous-cwasses comme {{domxwef("fiwe")}}). 😳😳😳
- `fiwename` {{optionaw_inwine}}
  - : w-we nyom du fichiew envoyé au s-sewveuw (a {{domxwef("usvstwing")}}), mya q-quand un {{domxwef("bwob")}} o-ou un {{domxwef("fiwe")}} est passé en second pawamètwe. mya we n-nyom du fichiew p-paw défaut pouw des objets {{domxwef("bwob")}} e-est "bwob". (⑅˘꒳˘) we n-nyom du fichiew paw défaut pouw d-des objets {{domxwef("fiwe")}} est we nyom du f-fichiew de w'objet. (U ﹏ U)

> [!note]
> si vous spécifiez un {{domxwef("bwob")}} c-comme donnée wattachée à u-un objet de type `fowmdata`, mya w-we nom de fichiew e-envoyé au sewveuw sewa dans w'entête "content-disposition" mais peut vawiew sewon we nyavigateuw. ʘwʘ

### wetouws

void. (˘ω˘)

## exempwe

wa wigne s-suivante cwée u-un objet `fowmdata` vide :

```js
v-vaw fowmdata = n-nyew fowmdata(); // a-actuewwement vide
```

vous pouvez wajoutew des paiwes cwé/vaweuw e-en utiwisant {{domxwef("fowmdata.append")}}:

```js
fowmdata.append("usewname", (U ﹏ U) "chwis");
fowmdata.append("usewpic", ^•ﻌ•^ myfiweinput.fiwes[0], (˘ω˘) "chwis.jpg");
```

comme pouw un fowmuwaiwe c-cwassique, :3 vous pouvez ajoutew p-pwusieuws vaweuws p-pouw wa même c-cwé. ^^;; paw exempwe ( et pouw êtwe e-en accowd avec w-wes conventions d-de nyommage php, 🥺 o-on ajoute \[] au nyom de wa cwé):

```js
fowmdata.append("usewpic[]", (⑅˘꒳˘) m-myfiweinput.fiwes[0], nyaa~~ "chwis1.jpg");
fowmdata.append("usewpic[]", :3 m-myfiweinput.fiwes[1], ( ͡o ω ͡o ) "chwis2.jpg");
```

c-cette technique p-pewmet de s-simpwement géwew w'envoi de pwusieuws fichiews avec w'envoi d'une s-stwuctuwe faciwement itéwabwe. mya

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("xmwhttpwequest")}}
- [utiwisew x-xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [utiwisew wes objets fowmdata](/fw/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
