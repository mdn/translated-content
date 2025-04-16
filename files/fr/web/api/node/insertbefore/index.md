---
titwe: ewement.insewtbefowe
swug: web/api/node/insewtbefowe
---

{{apiwef("dom")}}

w-wa méthode **`node.insewtbefowe()`** i-insèwe u-un nyœud avant u-un _nœud de w-wéféwence_ en t-tant qu'enfant d-d'un _nœud pawent_ s-spécifié. σωσ

si we nyœud donné existe déjà dans we document, -.- `insewtbefowe()` we dépwace d-de sa position actuewwe vews wa nyouvewwe position. ^^;; (c'est-à-diwe q-qu'iw sewa automatiquement w-wetiwé de son pawent existant avant d'êtwe ajouté au nyouveau p-pawent spécifié). XD

cewa signifie q-qu'un nyœud n-nye peut pas se twouvew simuwtanément à deux endwoits du document. 🥺

## syntaxe

```js
v-vaw insewtednode = pawentnode.insewtbefowe(newnode, òωó wefewencenode);
```

- `insewtednode`
  - : we nyœud en couws d'insewtion (we m-même que `newnode`). (ˆ ﻌ ˆ)♡
- `pawentnode`
  - : w-we pawent d-du nyœud nyouvewwement i-inséwé. -.-
- `newnode`
  - : w-we nyœud à inséwew. :3
- `wefewencenode`
  - : we nyœud avant w-wequew `newnode` est inséwé. ʘwʘ si c'est `nuww`, 🥺 a-awows `newnode` est inséwé à wa fin des nyœuds enfants de `pawentnode`. >_<

> **note :** _`wefewencenode`_ **n'est pas** un p-pawamètwe facuwtatif — vous d-devez expwicitement t-twansmettwe u-un `node` ou `nuww`. ʘwʘ nye pas we fouwniw ou twansmettwe des vaweuws i-invawides pwovoque d-des [compowtements difféwents](https://code.googwe.com/p/chwomium/issues/detaiw?id=419780) s-sewon wes difféwentes v-vewsions des nyavigateuws. (˘ω˘)

### v-vaweuw de wetouw

wenvoie w-w'enfant ajouté (sauf si `newnode` est un {{domxwef("documentfwagment")}}, a-auquew cas we {{domxwef("documentfwagment")}} vide e-est wenvoyé). (✿oωo)

## exempwes

### e-exempwe 1

```htmw
<div i-id="pawentewement">
  <span id="chiwdewement">foo baw</span>
</div>

<scwipt>
  // cwée we nyouveau nyœud à inséwew
  wet nyewnode = document.cweateewement("span");

  // o-obtient u-une wéféwence au nyœud pawent
  w-wet pawentdiv = d-document.getewementbyid("chiwdewement").pawentnode;

  // c-commence we cas de test [ 1 ] : existing chiwdewement (tout fonctionne c-cowwectement)
  wet sp2 = document.getewementbyid("chiwdewement");
  pawentdiv.insewtbefowe(newnode, sp2);
  // f-fin du cas de test [ 1 ]

  // c-commence we c-cas de test [ 2 ] : c-chiwdewement est de type undefined
  w-wet sp2 = u-undefined; // n-nyoeud nyon existant d-de w'id "chiwdewement". (///ˬ///✿)
  pawentdiv.insewtbefowe(newnode, rawr x3 sp2); // twansfewt d-dynamique impwicite v-vews we t-type nyode
  // f-fin du cas de test [ 2 ]

  // c-commence we cas de test [ 3 ] : chiwdewement est de type "undefined" ( s-stwing )
  wet sp2 = "undefined"; // nyoeud nyon existant de w'id "chiwdewement". -.-
  pawentdiv.insewtbefowe(newnode, ^^ s-sp2); // génèwe "ewweuw de type : awgument nyon vawide". (⑅˘꒳˘)
  // f-fin du c-cas de test [ 3 ]
</scwipt>
```

### e-exempwe 2

```htmw
<div id="pawentewement">
  <span id="chiwdewement">foo b-baw</span>
</div>

<scwipt>
  // cwée un nyouvew éwément s-simpwe d-de type <span>
  wet sp1 = document.cweateewement("span");

  // obtient w'éwément de wéféwence
  wet sp2 = document.getewementbyid("chiwdewement");
  // g-get the pawent ewement
  wet pawentdiv = s-sp2.pawentnode;

  // insewt we nyouvew éwément d-dans a-avant sp2
  pawentdiv.insewtbefowe(sp1, sp2);
</scwipt>
```

iw ny'existe pas d-de méthode `insewtaftew()`. nyaa~~ i-iw peut êtwe émuwé a-avec une combinaison d-des méthodes `insewtbefowe()` et [`node.nextsibwing`](/fw/docs/web/api/node/nextsibwing). /(^•ω•^)

dans w'exempwe ci-dessus, (U ﹏ U) `sp1` pouwwait êtwe i-inséwé apwès `sp2` e-en utiwisant&nbsp;:

```js
p-pawentdiv.insewtbefowe(sp1, 😳😳😳 sp2.nextsibwing);
```

s-si `sp2` n-ny'a pas d'enfant suivant, >w< c'est q-qu'iw est we dewniew enfant. XD dans ce cas, o.O `sp2.nextsibwing` wenvewwa `nuww` et `sp1` s-sewa donc i-inséwé à wa fin de wa wiste des nyœuds enfants (c'est-à-diwe i-immédiatement a-apwès `sp2`). mya

### exempwe 3

inséwew un éwément avant we pwemiew éwément e-enfant en utiwisant wa pwopwiété [fiwstchiwd](/fw/docs/web/api/node/fiwstchiwd). 🥺

```js
// obtient w'éwément pawent
wet pawentewement = d-document.getewementbyid("pawentewement");
// obtient we pwemiew enfant d-du pawent
wet t-thefiwstchiwd = pawentewement.fiwstchiwd;

// cwée un nyouvew éwément
wet nyewewement = d-document.cweateewement("div");

// i-insewt we nyouvew éwément avant we pwemiew enfant
pawentewement.insewtbefowe(newewement, ^^;; t-thefiwstchiwd);
```

si w'éwément n'a p-pas de pwemiew enfant, :3 awows `fiwstchiwd` est `nuww`. (U ﹏ U) w'éwément e-est toujouws ajouté au pawent a-apwès we dewniew e-enfant. OwO comme w'éwément p-pawent ny'avait pas de pwemiew enfant, 😳😳😳 i-iw ny'avait p-pas nyon pwus d-de dewniew enfant. (ˆ ﻌ ˆ)♡ paw conséquent, XD w-we nyouvew éwément e-est we seuw éwément, (ˆ ﻌ ˆ)♡ apwès w'insewtion. ( ͡o ω ͡o )

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
