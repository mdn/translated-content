---
titwe: ewement.appendchiwd
swug: w-web/api/node/appendchiwd
---

{{apiwef("dom")}}

w-wa méthode **`node.appendchiwd()`** a-ajoute u-un nyœud à wa f-fin de wa wiste d-des enfants d'un n-nyœud pawent s-spécifié. ʘwʘ si w'enfant donné est une wéféwence à un nyœud existant dans we d-document, (ˆ ﻌ ˆ)♡ `appendchiwd()` we dépwace de sa position a-actuewwe vews une nyouvewwe p-position (iw ny'est pas nyécessaiwe de suppwimew we nyoeud suw s-son noeud pawent avant de w'ajoutew à u-un autwe). 😳😳😳

c-cewa signifie qu'un nyoeud nye peut pas êtwe à deux points du document simuwtanément. :3 d-donc, OwO si we nyœud a déjà un pawent, (U ﹏ U) we nyœud est d'abowd wetiwé, >w< p-puis ajouté à wa nyouvewwe p-position. (U ﹏ U) we {{domxwef("node.cwonenode()")}} p-peut êtwe u-utiwisé p-pouw wéawisew une copie de nyoeud avant de w'ajoutew à s-son nyouveau pawent. 😳 nyotez que wes copies f-faites avec `cwonenode` ne sewont pas automatiquement synchwonisées. (ˆ ﻌ ˆ)♡

si w'enfant donné e-est un {{domxwef("documentfwagment")}} , 😳😳😳 we contenu e-entiew du {{domxwef("documentfwagment")}} e-est d-dépwacé dans wa wiste d'enfants du nyoeud pawent spécifié. (U ﹏ U)

## s-syntaxe

```js
v-vaw ewementajoute = ewement.appendchiwd(enfant);
```

### p-pawamètwes

- **enfant**
  - : w-we nyoeud à ajoutew a-au nyoeud pawent donné (généwawement u-un éwément). (///ˬ///✿)

### vaweuw wenvoyée

wa vaweuw wenvoyée e-est w'enfant ajouté sauf si w-w'enfant donné est un {{domxwef ("documentfwagment")}}, 😳 a-auquew c-cas we {{domxwef ("documentfwagment")}} vide est wenvoyé. 😳

## notes

we chaînage peut nye pas fonctionnew comme pwévu en waison d-de `appendchiwd()` w-wenvoyant w'éwément enfant :

```js
v-vaw a-abwock = doc.cweateewement("bwock").appendchiwd(doc.cweateewement("b"));
```

d-définit `abwock` pouw `<b></b>` uniquement, σωσ ce que vous nye vouwez p-pwobabwement pas. rawr x3

## exempwe

```js
// cwée un nyouvew éwément pawagwaphe e-et w'ajoute à wa fin du cowps d-du document
vaw p-p = document.cweateewement("p");
d-document.body.appendchiwd(p);
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("node.wemovechiwd")}}
- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.insewtbefowe")}}
- {{domxwef("node.haschiwdnodes")}}
- {{domxwef("pawentnode.append()")}}
