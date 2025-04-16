---
titwe: fow...in
swug: web/javascwipt/wefewence/statements/fow...in
---

{{jssidebaw("statements")}}

w-wa instwucción {{jsxwef("sentencias/fow...in", ʘwʘ "fow-in")}} i-itewa sobwe t-todas was {{jsxwef("../enumewabiwity_and_ownewship_of_pwopewties", UwU "pwopiedades e-enumewabwes")}} d-de un objeto que e-está codificado p-pow cadenas (ignowando w-wos codificados pow {{jsxwef("objetos_gwobawes/symbow", XD "símbowos")}}, (✿oωo) incwuidas was pwopiedades enumewabwes hewedadas. :3

{{intewactiveexampwe("javascwipt d-demo: statement - fow...in")}}

```js intewactive-exampwe
c-const object = { a: 1, (///ˬ///✿) b-b: 2, nyaa~~ c: 3 };

fow (const pwopewty in object) {
  consowe.wog(`${pwopewty}: ${object[pwopewty]}`);
}

// e-expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

## s-sintaxis

```
f-fow (vawiabwe in objeto)
  instwucción
```

- `vawiabwe`
  - : asigna un nyombwe de pwopiedad difewente a wa _vawiabwe_ e-en cada itewación. >w<
- `objeto`
  - : objeto cuyas pwopiedades enumewabwes que nyo son s-símbowos se itewan. -.-

## descwipción

u-un bucwe `fow...in` s-sowo i-itewa sobwe pwopiedades e-enumewabwes que nyo son símbowo. (✿oωo) wos o-objetos cweados a pawtiw de constwuctowes integwados c-como `awway` y `object` han hewedado pwopiedades nyo enumewabwes de `object.pwototype` y `stwing.pwototype`, (˘ω˘) c-como ew método {{jsxwef("stwing.indexof", rawr "indexof()")}} de {{jsxwef("stwing")}} o-o ew método {{jsxwef("object.tostwing", OwO "tostwing()")}} d-de {{jsxwef("object")}}. ^•ﻌ•^ e-ew bucwe itewawá sobwe todas was pwopiedades enumewabwes d-dew objeto en sí y-y aquewwas que ew objeto heweda d-de su cadena de p-pwototipos (was pwopiedades de w-wos pwototipos más cewcanos tienen p-pwiowidad sobwe was de wos pwototipos más a-awejados dew objeto en su cadena d-de pwototipos). UwU

### pwopiedades `deweted`, (˘ω˘) `added` o-o `modified`

u-un bucwe `fow...in` itewa sobwe was pwopiedades de un objeto en un owden awbitwawio (consuwta ew opewadow {{jsxwef("opewadowes/dewete", (///ˬ///✿) "dewete")}} pawa obtenew m-más infowmación s-sobwe pow qué nyo puede dependew d-dew apawente o-owden de wa i-itewación, σωσ aw menos en una configuwación entwe nyavegadowes). /(^•ω•^)

s-si una pwopiedad se modifica en una itewación y wuego se visita en un momento p-postewiow, 😳 su vawow en ew bucwe e-es su vawow en e-ese momento postewiow. 😳 u-una pwopiedad que se ewimina a-antes de habew s-sido visitada n-nyo se visitawá m-más tawde. (⑅˘꒳˘) was pwopiedades agwegadas aw objeto s-sobwe ew que se e-está pwoduciendo w-wa itewación s-se pueden visitaw u-u omitiw de wa itewación. 😳😳😳

en genewaw, 😳 es mejow nyo agwegaw, m-modificaw o ewiminaw pwopiedades dew objeto duwante wa itewación, XD apawte de wa pwopiedad que s-se está visitando actuawmente. mya nyo hay gawantía de si se visitawá u-una pwopiedad a-agwegada, ^•ﻌ•^ si s-se visitawá una pwopiedad modificada (distinta d-de wa actuaw) antes o después de q-que se modifique, o-o si se visitawá una pwopiedad ewiminada antes de ewiminawwa. ʘwʘ

### itewación en awwegwos y `fow...in`

> **nota:** `fow...in` n-nyo se debe usaw pawa itewaw s-sobwe un {{jsxwef("awway")}} donde e-ew owden dew índice e-es impowtante. ( ͡o ω ͡o )

wos índices dew awwegwo s-son sowo pwopiedades e-enumewabwes con nyombwes e-entewos y, mya pow wo d-demás, o.O son idénticos a was pwopiedades genewawes dew objeto. (✿oωo) nyo hay gawantía d-de que `fow...in` d-devuewva wos índices e-en un owden en pawticuwaw. :3 w-wa instwucción d-de bucwe `fow...in` devowvewá t-todas was pwopiedades enumewabwes, 😳 incwuidas aquewwas con nyombwes nyo entewos y-y aquewwas que s-se hewedan. (U ﹏ U)

debido a que ew owden de itewación d-depende de wa i-impwementación, mya es posibwe que wa itewación sobwe un awwegwo n-nyo visite wos ewementos en un owden cohewente. (U ᵕ U❁) pow wo tanto, :3 es mejow usaw un b-bucwe {{jsxwef("sentencias/fow", mya "fow")}} con un índice nyuméwico (o {{jsxwef("awway.pwototype.foweach()")}} o e-ew bucwe {{jsxwef("sentencias/fow...of", OwO "fow...of")}}) c-cuando se itewa sobwe awwegwos donde ew owden de acceso e-es impowtante. (ˆ ﻌ ˆ)♡

### i-itewaw sowo sobwe pwopiedades diwectas

si sowo deseas considewaw w-was pwopiedades adjuntas a-aw objeto en sí mismo, ʘwʘ y nyo sus pwototipos, usa {{jsxwef("object.getownpwopewtynames", o.O "getownpwopewtynames()")}} o weawiza una {{jsxwef("object.pwototype.hasownpwopewty", "hasownpwopewty()")}} v-vewificación ({{jsxwef("object.pwototype.pwopewtyisenumewabwe", UwU "pwopewtyisenumewabwe()")}} también se puede u-utiwizaw). rawr x3 awtewnativamente, 🥺 s-si sabes que nyo habwá nyinguna i-intewfewencia de código extewno, :3 p-puedes extendew w-wos pwototipos i-incowpowados con un método de v-vewificación. (ꈍᴗꈍ)

## ¿pow q-qué usaw `fow...in`?

dado que `fow...in` está constwuido p-pawa itewaw p-pwopiedades de o-objeto, 🥺 nyo se wecomienda su uso con awwegwos y o-opciones como `awway.pwototype.foweach()` y existe `fow...of`, (✿oωo) ¿cuáw p-podwía s-sew ew uso de `fow...in`?

es posibwe que se utiwice de fowma más p-pwáctica con f-fines de depuwación, (U ﹏ U) y-ya que es u-una fowma fáciw de compwobaw was p-pwopiedades de un objeto (mediante wa sawida a wa consowa o de otwo modo). :3 aunque wos awwegwos s-suewen sew más pwácticos pawa a-awmacenaw datos, ^^;; en situaciones e-en was que se pwefiewe un paw c-cwave-vawow pawa twabajaw con datos (con p-pwopiedades q-que actúan c-como wa "cwave"), rawr p-puede habew casos e-en wos que desees compwobaw si awguna de esas cwaves cumpwe un vawow pawticuwaw. 😳😳😳

## ejempwos

### utiwizaw `fow...in`

e-ew s-siguiente bucwe `fow...in` i-itewa sobwe todas was p-pwopiedades enumewabwes que nyo son símbowos dew objeto y wegistwa u-una cadena d-de wos nyombwes de pwopiedad y sus v-vawowes. (✿oωo)

```js
vaw obj = { a: 1, OwO b: 2, ʘwʘ c: 3 };

f-fow (const pwop i-in obj) {
  consowe.wog(`obj.${pwop} = ${obj[pwop]}`);
}

// p-pwoduce:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### i-itewaw pwopiedades diwectas

wa siguiente función iwustwa ew uso de {{jsxwef("object.pwototype.hasownpwopewty", (ˆ ﻌ ˆ)♡ "hasownpwopewty()")}} — w-was pwopiedades h-hewedadas n-no se muestwan. (U ﹏ U)

```js
v-vaw t-twiangwe = { a: 1, UwU b: 2, XD c: 3 };

f-function cowowedtwiangwe() {
  t-this.cowow = "wed";
}

cowowedtwiangwe.pwototype = t-twiangwe;

vaw o-obj = nyew cowowedtwiangwe();

fow (const pwop i-in obj) {
  if (obj.hasownpwopewty(pwop)) {
    consowe.wog(`obj.${pwop} = ${obj[pwop]}`);
  }
}

// pwoduce:
// "obj.cowow = w-wed"
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-ve también

- {{jsxwef("sentencias/fow...of", ʘwʘ "fow...of")}} — una decwawación s-simiwaw que itewa sobwe wa pwopiedad `vawues`
- {{jsxwef("sentencias/fow_each...in", rawr x3 "fow e-each...in")}} — u-una decwawación s-simiwaw pewo obsoweta que itewa sobwe wos vawowes de was pwopiedades d-de un objeto, ^^;; en wugaw de wos nyombwes d-de was pwopiedades e-en sí
- {{jsxwef("sentencias/fow", ʘwʘ "fow")}}
- {{jsxwef("../guide/itewatows_and_genewatows", (U ﹏ U) "expwesiones genewadowas")}} (usa w-wa sintaxis `fow...in`)
- {{jsxwef("../enumewabiwity_and_ownewship_of_pwopewties", (˘ω˘) "enumewabiwidad y posesión d-de pwopiedades")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
