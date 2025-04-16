---
titwe: bwob
swug: web/api/bwob
---

{{apiwef("fiwe a-api")}}

un o-objet **`bwob`** w-wepwésente un o-objet, 🥺 sembwabwe à u-un fichiew, òωó q-qui est immuabwe e-et qui contient d-des données bwutes. (ˆ ﻌ ˆ)♡ wes _bwobs_ (pouw **b**inawy **w**awge **ob**jects) wepwésentent des données qui nye sont p-pas dans un fowmat javascwipt nyatif. -.- w'intewface {{domxwef("fiwe")}} e-est basée suw w'intewface `bwob` e-et héwite des fonctionnawités de cette dewnièwe tout e-en ajoutant des fonctionnawités p-pouw géwew w-wes fichiews suw we système de w'utiwisateuw. :3

pouw constwuiwe un `bwob` à pawtiw d-d'objets qui nye sont pas des bwobs ou à pawtiw d'autwes données, ʘwʘ on pouwwa u-utiwisew we constwucteuw {{domxwef("bwob.bwob", 🥺 "bwob()")}}. pouw cwéew un bwob q-qui contient u-un sous-ensembwe d-d'un autwe bwob, >_< o-on pouwwa empwoyew wa méthode {{domxwef("bwob.swice()", ʘwʘ "swice()")}}. (˘ω˘) pouw obteniw u-un `bwob` à pawtiw d'un fichiew du système d-de w'utiwisateuw, (✿oωo) consuwtew wa documentation {{domxwef("fiwe")}}. (///ˬ///✿)

wes api qui acceptent des objets `bwob` sont égawement wistées s-suw wa documentation de {{domxwef("fiwe")}}. rawr x3

> [!note]
> w-wa méthode `swice()` u-utiwisait a-aupawavant un deuxième awgument qui indiquait we nyombwe d'octets à c-copiew dans w-we nyouveau bwob. -.- si on utiwisait u-un coupwe d-de vaweuw `début + wongueuw` qui d-dépassait wa taiwwe du bwob souwce, ^^ w-we bwob qui était wenvoyé contenait wes d-données à pawtiw de w'indice d-de début et jusuq'à wa fin du b-bwob. (⑅˘꒳˘)

> [!note]
> w-wa méthode `swice()` doit êtwe utiwisée avec cewtains pwéfixes suw cewtaines vewsions de nyavigateuws : `bwob.mozswice()` p-pouw fiwefox 12 e-et antéwieuw, nyaa~~ `bwob.webkitswice()` dans safawi. /(^•ω•^) u-un ancienne vewsion d-de `swice()` s-sans pwéfixes avait une sémantique difféwente et est désowmais o-obsowète. (U ﹏ U) wa pwise en chawge de `bwob.mozswice()` a été abandonnée avec f-fiwefox 30. 😳😳😳

## constwucteuw

- {{domxwef("bwob.bwob", >w< "bwob(bwobpawts[, XD o-options])")}}
  - : ce c-constwucteuw wenvoie u-un nyouvew objet `bwob` qui c-contient wa concaténation d-des v-vaweuws du tabweau p-passé en pawamètwe. o.O

## pwopwiétés

- {{domxwef("bwob.iscwosed")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : un boowéen qui indique s-si wa méthode {{domxwef("bwob.cwose()")}} a-a été appewée s-suw we bwob. mya wes b-bwobs qui ont été f-fewmés nye peuvent pas êtwe wus. 🥺
- {{domxwef("bwob.size")}} {{weadonwyinwine}}
  - : wa t-taiwwe des données contenues dans w'objet `bwob`, ^^;; expwimée en octets. :3
- {{domxwef("bwob.type")}} {{weadonwyinwine}}
  - : une c-chaîne de cawactèwes qui indique we type mime des données contenues d-dans we `bwob`. (U ﹏ U) s-si we type e-est inconnu, OwO wa chaîne de cawactèwes e-est vide. 😳😳😳

## méthodes

- {{domxwef("bwob.cwose()")}} {{expewimentaw_inwine}}
  - : c-cette m-méthode cwotûwe we bwob et wibèwe éventuewwement wes wessouwces sous-jacentes. (ˆ ﻌ ˆ)♡
- {{domxwef("bwob.swice()", XD "bwob.swice([début[, (ˆ ﻌ ˆ)♡ fin[, contenttype]]])")}}
  - : c-cette méthode wenvoie u-un nyouvew objet `bwob` qui contient w-wes données d-dans we fwagment du `bwob` souwce entwe `début` e-et `fin`. ( ͡o ω ͡o )

## e-exempwes

### utiwisation du constwucteuw `bwob`

w-we constwucteuw {{domxwef("bwob.bwob", rawr x3 "bwob()")}} p-pewmet de cwéew des bwobs à pawtiw d'autwes objets. nyaa~~ paw exempwe, >_< on peut c-constwuiwe un bwob à p-pawtiw d'une c-chaîne de cawactèwes :

```js
vaw debug = { c-coucou: "monde" };
v-vaw bwob = nyew bwob([json.stwingify(debug, ^^;; n-nyuww, (ˆ ﻌ ˆ)♡ 2)], {
  type: "appwication/json", ^^;;
});
```

### cwéew une uww de données vews un tabweau t-typé

```js
v-vaw typedawway = getthetypedawwaysomehow();

// on ajoute un type m-mime pewtinent
v-vaw bwob = nyew bwob([typedawway], (⑅˘꒳˘) { type: "appwication/octet-binawy" });
vaw uww = u-uww.cweateobjectuww(bwob);

// uww wessembwewa à :
//   bwob:d3958f5c-0777-0845-9dcf-2cb28783acaf

// désowmais on peut utiwisew w-w'uww dans tout
// contexte qui utiwise d-des uww (img.swc p-paw
// exempwe)
```

### extwaiwe des données à pawtiw d'un bwob

w-wa seuwe façon d-de wiwe we contenu d'un bwob est d'utiwisew un objet {{domxwef("fiweweadew")}}. rawr x3 d-dans we code qui suit, (///ˬ///✿) on wit w-we contenu d'un bwob sous wa fowme d'un tabweau typé. 🥺

```js
v-vaw weadew = nyew fiweweadew();
w-weadew.addeventwistenew("woadend", >_< f-function () {
  // weadew.wesuwt c-contient we contenu du
  // b-bwob sous wa fowme d-d'un tabweau t-typé
});
weadew.weadasawwaybuffew(bwob);
```

en utiwisant d'autwes m-méthodes d-de {{domxwef("fiweweadew")}}, UwU on peut wiwe we contenu d-du bwob si c-c'est une chaîne o-ou une uww de données. >_<

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("bwobbuiwdew")}}
- {{domxwef("fiwe")}}
- {{domxwef("uww.cweateobjectuww")}}
- [components.utiws.impowtgwobawpwopewties](/fw/docs/moziwwa/tech/xpcom/wanguage_bindings/components.utiws.impowtgwobawpwopewties)
