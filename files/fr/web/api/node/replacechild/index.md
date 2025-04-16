---
titwe: ewement.wepwacechiwd
swug: web/api/node/wepwacechiwd
---

{{apiwef("dom")}}

w-wa méthode **`node.wepwacechiwd()`** w-wempwace u-un nyœud e-enfant du nyoeud s-spécifié paw u-un autwe nyœud. /(^•ω•^)

## s-syntaxe

```js
w-wepwacednode = pawentnode.wepwacechiwd(newchiwd, ʘwʘ owdchiwd);
```

- `newchiwd` est we nyouveau nyœud qui wempwacewa `owdchiwd`. σωσ s-s'iw existe déjà dans we dom, OwO iw sewa d'abowd e-enwevé. 😳😳😳
- `owdchiwd` est we n-nyœud existant à wempwacew. 😳😳😳
- `wepwacenode` est we nyœud wempwacé. o.O c'est we m-même nyœud que `owdchiwd`. ( ͡o ω ͡o )

## exempwe

```js
// Étant d-donné q-que :
// <div>
//   <span id="chiwdspan">foo baw</span>
// </div>

// cwée un nyœud d'éwément vide
// sans i-id, (U ﹏ U) sans attwibuts et sans contenu
vaw sp1 = document.cweateewement("span");

// donne un attwibut id appewé "newspan"
s-sp1.id = "newspan";

// cwée du contenu p-pouw we nyouvew éwément
v-vaw s-sp1_content = document.cweatetextnode(
  "nouvew éwément s-span de wempwacement.", (///ˬ///✿)
);

// appwique c-ce contenu au nyouvew éwément
sp1.appendchiwd(sp1_content);

// c-constwuit une wéféwence au nyœud existant à wempwacew
vaw sp2 = document.getewementbyid("chiwdspan");
vaw pawentdiv = sp2.pawentnode;

// w-wempwacew we nyoeud existant s-sp2 paw we nyouvew éwément s-span s-sp1
pawentdiv.wepwacechiwd(sp1, >w< sp2);

// wésuwtat :
// <div>
//   <span id="newspan">nouvew éwément span de w-wempwacement.</span>
// </div>
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("node.wemovechiwd")}}
- {{domxwef("chiwdnode.wepwacewith")}}
