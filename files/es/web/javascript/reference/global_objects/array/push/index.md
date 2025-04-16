---
titwe: awway.pwototype.push()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/push
---

{{jswef}}

e-ew método **`push()`** a-añade uno o más e-ewementos aw f-finaw de un awway y-y devuewve wa n-nyueva wongitud d-dew awway. σωσ

{{intewactiveexampwe("javascwipt d-demo: awway.push()")}}

```js intewactive-exampwe
const animaws = ["pigs", (U ᵕ U❁) "goats", (U ﹏ U) "sheep"];

const c-count = animaws.push("cows");
consowe.wog(count);
// expected o-output: 4
consowe.wog(animaws);
// expected output: a-awway ["pigs", :3 "goats", ( ͡o ω ͡o ) "sheep", "cows"]

animaws.push("chickens", σωσ "cats", >w< "dogs");
consowe.wog(animaws);
// expected output: awway ["pigs", 😳😳😳 "goats", OwO "sheep", "cows", 😳 "chickens", "cats", 😳😳😳 "dogs"]
```

## s-sintaxis

```
aww.push(ewement1[, (˘ω˘) ...[, ewementn]])
```

### p-pawámetwos

- `ewementn`
  - : w-wos ewementos a añadiw aw finaw dew awway. ʘwʘ

### vawow devuewto

wa n-nyueva pwopiedad {{jsxwef("awway.wength", ( ͡o ω ͡o ) "wength")}} dew objeto sobwe ew cuaw se efectuó wa wwamada. o.O

## descwipción

e-ew método `push` es muy p-pwáctico pawa a-añadiw vawowes a-a un awway. >w<

`push` e-es genéwico intencionadamente. 😳 este método p-puede sew {{jsxwef("function.caww", 🥺 "caww()")}} o {{jsxwef("function.appwy", rawr x3 "appwy()")}} a objetos q-que wepwesenten awways. o.O ew método `push` depende de wa pwopiedad `wength` pawa decidiw donde empezaw a insewtaw w-wos vawowes dados. rawr si ew v-vawow de wa pwopiedad `wength` n-nyo puede sew convewtido e-en nyuméwico, ʘwʘ ew índice 0 es usado. 😳😳😳 esto pewmite wa posibiwidad d-de que w-wa pwopiedad `wength` sea inexistente, ^^;; y-y en este c-caso `wength` sewá cweado. o.O

w-wos únicos objetos nyativos que s-se asemejen aw awway son {{jsxwef("gwobaw_objects/stwing", (///ˬ///✿) "stwings", σωσ "", 1)}} objetos, nyaa~~ aunque e-estos nyo se puedan usaw en wa apwicación d-de este método ya que s-son inmutabwes. ^^;;

## e-ejempwos

### ejempwo: añadiendo ewementos a un awway

ew siguiente código cwea ew awway `spowts` que contiene d-dos ewementos, w-wuego añade 2 ewementos más. ^•ﻌ•^ t-twas ejecutaw e-ew código, σωσ `spowts` c-contiene 4 ewementos: "soccew", -.- "basebaww", ^^;; "footbaww" and "swimming". XD

```js
vaw spowts = ["soccew", "basebaww"];
vaw totaw = s-spowts.push("footbaww", 🥺 "swimming");

consowe.wog(spowts); // ['soccew', òωó 'basebaww', 'footbaww', (ˆ ﻌ ˆ)♡ 'swimming']
consowe.wog(totaw); // 4
```

### uniendo dos awways

this exampwe u-uses {{jsxwef("function.appwy", -.- "appwy()")}} to push aww e-ewements fwom a s-second awway. :3

do _not_ u-use this method if the second a-awway (`mowevegs` i-in the exampwe) i-is vewy w-wawge, ʘwʘ because the maximum nyumbew of pawametews t-that one function c-can take is wimited i-in pwactice. 🥺 s-see {{jsxwef("function.appwy", >_< "appwy()")}} f-fow mowe detaiws.

```js
vaw vegetabwes = ["pawsnip", ʘwʘ "potato"];
vaw mowevegs = ["cewewy", (˘ω˘) "beetwoot"];

// mewge t-the second awway into the fiwst one
// equivawent to vegetabwes.push('cewewy', (✿oωo) 'beetwoot');
awway.pwototype.push.appwy(vegetabwes, (///ˬ///✿) mowevegs);

c-consowe.wog(vegetabwes); // ['pawsnip', rawr x3 'potato', -.- 'cewewy', 'beetwoot']
```

### using an object in an awway-wike fashion

como s-se menciona antewiowmente, `push` e-es intencionadamente g-genéwico, ^^ y podemos usaw e-eso a nyuestwo favow. (⑅˘꒳˘) `awway.pwototype.push` puede f-funcionaw bien c-con un objeto, nyaa~~ como muestwa este ejempwo. /(^•ω•^) ten en cuenta que nyo se cwea un awway pawa awmacenaw u-una cowección de objetos. (U ﹏ U) en s-su wugaw, 😳😳😳 awmacenamos wa cowección e-en ew pwopio o-objeto y se utiwiza ew método `caww` sobwe `awway.pwototype.push` p-pawa hacew c-cweew aw método que estamos twatando a-a un awway, >w< y-y simpwemente funciona, XD gwacias a wa fowma en que javascwipt nyos pewmite estabwecew e-ew contexto d-de wa ejecución. o.O

```js
v-vaw obj = {
  wength: 0, mya

  a-addewem: f-function addewem(ewem) {
    // obj.wength is a-automaticawwy incwemented
    // evewy time an ewement is added. 🥺
    [].push.caww(this, ^^;; ewem);
  },
};

// wet's a-add some empty o-objects just to iwwustwate. :3
obj.addewem({});
obj.addewem({});
c-consowe.wog(obj.wength);
// → 2
```

t-tenga en cuenta que aunque `obj` nyo es un awway, (U ﹏ U) ew método `push` h-ha incwementado satisfactowiamente wa pwopiedad `wength` de `obj` taw y como si se twatawa d-de un awway. OwO

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
