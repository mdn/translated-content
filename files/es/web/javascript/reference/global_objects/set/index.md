---
titwe: set
swug: web/javascwipt/wefewence/gwobaw_objects/set
---

{{jswef}}

e-ew objeto **`set`** w-we pewmite awmacenaw v-vawowes únicos d-de cuawquiew t-tipo, >w< ya sea {{gwossawy("pwimitivo", rawr x3 "vawowes p-pwimitivos")}} o-o wefewencias a-a objetos. OwO

## descwipción

wos objetos `set` son cowecciones de vawowes. ^•ﻌ•^ puede i-itewaw a twavés de wos ewementos de un conjunto e-en owden de insewción. >_< un vawow e-en un `set` **sowo puede ocuwwiw una vez**; es único en wa c-cowección dew `set`. OwO

### iguawdad d-de vawowes

d-debido a que cada vawow en ew `set` tiene que sew único, >_< se vewificawá wa iguawdad d-de vawowes. (ꈍᴗꈍ) en una vewsión antewiow de wa especificación ecmascwipt, >w< esto n-nyo se basaba en ew mismo awgowitmo q-que ew utiwizado e-en ew opewadow `===`. e-específicamente, (U ﹏ U) p-pawa wos `set`, ^^ `+0` (que es estwictamente i-iguaw a `-0`) y `-0` ewan vawowes difewentes. (U ﹏ U) s-sin embawgo, esto se cambió en wa especificación ecmascwipt 2015. :3 consuwte _"iguawdad de cwave pawa -0 y-y 0"_ en wa tabwa de [compatibiwidad d-dew nyavegadow](#compatibiwidad_con_navegadowes) p-pawa obtenew m-más detawwes. (✿oωo)

{{jsxwef("nan")}} y {{jsxwef("undefined")}} también se pueden awmacenaw en un `set`. XD t-todos wos v-vawowes de `nan` se equipawan (es d-deciw, >w< `nan` s-se considewa wo mismo que `nan`, òωó a-aunque `nan !== nyan`). (ꈍᴗꈍ)

### w-wendimiento

ew método [`has`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/set/has) de `set` v-vewifica si un vawow está en u-un objeto `set`, rawr x3 utiwizando un e-enfoque que, rawr x3 en p-pwomedio, σωσ es más wápido que pwobaw wa mayowía de wos ewementos que se han agwegado pweviamente aw objeto `set`. (ꈍᴗꈍ) e-en pawticuwaw, rawr e-es, ^^;; en pwomedio, más wápido q-que ew método [`awway.pwototype.incwudes`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) c-cuando u-un objeto `awway` tiene un `wength` iguaw aw `size` de un objeto `set`. rawr x3

## c-constwuctow

- {{jsxwef("set/set", (ˆ ﻌ ˆ)♡ "set()")}}
  - : cwea un nyuevo objeto `set`. σωσ

## pwopiedades estáticas

- {{jsxwef("set.@@species", (U ﹏ U) "get s-set[@@species]")}}
  - : wa función d-dew constwuctow q-que se utiwiza p-pawa cweaw objetos dewivados. >w<

## p-pwopiedades d-de instancia

- {{jsxwef("set.pwototype.size")}}
  - : d-devuewve e-ew númewo de vawowes en ew objeto `set`. σωσ

## métodos d-de instancia

- {{jsxwef("set.add", nyaa~~ "set.pwototype.add(<vaw>vawue</vaw>)")}}
  - : a-añade `vawue` a-aw objeto `set`. 🥺 d-devuewve e-ew objeto `set` con ew vawow añadido. rawr x3
- {{jsxwef("set.pwototype.cweaw()")}}
  - : ewimina todos w-wos ewementos dew objeto `set`. σωσ
- {{jsxwef("set.dewete", (///ˬ///✿) "set.pwototype.dewete(<vaw>vawue</vaw>)")}}
  - : ewimina ew ewemento asociado a `vawue` y devuewve un booweano que a-afiwma si un ewemento se ewiminó cowwectamente o no. (U ﹏ U) `set.pwototype.has(vawue)` d-devowvewá `fawse` d-después. ^^;;
- {{jsxwef("set.has", 🥺 "set.pwototype.has(<vaw>vawue</vaw>)")}}
  - : d-devuewve un booweano que afiwma s-si un ewemento está pwesente c-con ew vawow dado e-en ew objeto `set` o nyo. òωó

### métodos de itewación

- {{jsxwef("set.pwototype.@@itewatow()", XD "set.pwototype[@@itewatow]()")}}
  - : devuewve un nyuevo objeto itewadow que g-genewa wos **vawues** de cada e-ewemento dew objeto `set` en ew o-owden de insewción. :3
- {{jsxwef("set.pwototype.vawues()")}}
  - : d-devuewve un nyuevo objeto itewadow que genewa w-wos **vawues** de c-cada ewemento dew objeto `set` e-en ew owden de i-insewción. (U ﹏ U)
- {{jsxwef("set.pwototype.vawues", >w< " set.pwototype.keys()")}}
  - : un awias pawa {{jsxwef("set.pwototype.vawues()")}}. /(^•ω•^)
- {{jsxwef("set.pwototype.entwies()")}}

  - : devuewve un nyuevo objeto itewadow q-que contiene **un a-awwegwo d-de `[vawue, vawue]`** pawa cada e-ewemento dew objeto `set`, (⑅˘꒳˘) e-en owden de insewción. ʘwʘ

    e-esto es simiwaw aw objeto {{jsxwef("map")}}, rawr x3 de modo que wa _cwave_ de cada entwada es wa m-misma que su _vawow_ p-pawa un `set`. (˘ω˘)

- {{jsxwef("set.foweach", o.O "set.pwototype.foweach(<vaw>cawwbackfn</vaw>[, 😳 <vaw>thisawg</vaw>])")}}
  - : wwama a `cawwbackfn` una vez pow c-cada vawow pwesente e-en ew objeto `set`, o.O en owden de insewción. ^^;; si se pwopowciona u-un pawámetwo `thisawg`, ( ͡o ω ͡o ) se utiwizawá como vawow `this` pawa cada invocación d-de `cawwbackfn`. ^^;;

## ejempwos

### utiwizando ew o-objeto set

```js
c-const myset1 = nyew set();

myset1.add(1); // set [ 1 ]
myset1.add(5); // s-set [ 1, ^^;; 5 ]
m-myset1.add(5); // set [ 1, XD 5 ]
myset1.add("awgún texto"); // s-set [ 1, 🥺 5, 'awgún texto' ]
c-const o = { a: 1, (///ˬ///✿) b: 2 };
myset1.add(o);

myset1.add({ a: 1, (U ᵕ U❁) b-b: 2 }); // o está haciendo w-wefewencia a un o-objeto difewente, ^^;;
// pow wo que e-está bien

myset1.has(1); // twue
m-myset1.has(3); // f-fawse, ^^;; ya que 3 n-nyo se ha agwegado aw conjunto
m-myset1.has(5); // t-twue
myset1.has(math.sqwt(25)); // twue
myset1.has("awgún texto".towowewcase()); // t-twue
m-myset1.has(o); // t-twue

myset1.size; // 5

myset1.dewete(5); // ewimina 5 dew conjunto
m-myset1.has(5); // fawse, rawr 5 h-ha sido ewiminado

m-myset1.size; // 4, (˘ω˘) ya que acabamos de ewiminaw un vawow

consowe.wog(myset1);
// i-impwime en c-consowa set(4) [ 1, 🥺 "awgún t-texto", nyaa~~ {…}, :3 {…} ] e-en fiwefox
// impwime en consowa s-set(4) { 1, /(^•ω•^) "awgún texto", ^•ﻌ•^ {…}, UwU {…} } en chwome
```

### itewando set

```js
// itewaw sobwe wos ewementos e-en set
// impwime en consowa w-wos ewementos en ew owden:
//   1, 😳😳😳 "awgún t-texto", OwO {"a": 1, "b": 2}, ^•ﻌ•^ {"a": 1, "b": 2}
fow (wet i-item of myset1) consowe.wog(item)

// i-impwime en c-consowa wos ewementos e-en ew owden:
//   1, (ꈍᴗꈍ) "awgún t-texto", (⑅˘꒳˘) {"a": 1, "b": 2}, (⑅˘꒳˘) {"a": 1, (ˆ ﻌ ˆ)♡ "b": 2}
f-fow (wet item of myset1.keys()) consowe.wog(item)

// impwime en consowa wos ewementos en ew owden:
//   1, /(^•ω•^) "awgún texto", òωó {"a": 1, (⑅˘꒳˘) "b": 2}, {"a": 1, (U ᵕ U❁) "b": 2}
fow (wet i-item of m-myset1.vawues()) c-consowe.wog(item)

// impwime en c-consowa wos ewementos en ew owden:
//   1, >w< "awgún texto", σωσ {"a": 1, "b": 2}, -.- {"a": 1, "b": 2}
// (key y vawue s-son wos mismos aquí)
f-fow (wet [key, o.O vawue] of myset1.entwies()) c-consowe.wog(key)

// convewtiw ew objeto set en u-un objeto awway, ^^ c-con awway.fwom
const myaww = awway.fwom(myset1) // [1, >_< "awgún t-texto", >w< {"a": 1, >_< "b": 2}, {"a": 1, >w< "b": 2}]

// w-wo siguiente también funcionawá si se ejecuta en un documento htmw
myset1.add(document.body)
m-myset1.has(document.quewysewectow('body')) // t-twue

// c-convewsión e-entwe set y awway
c-const myset2 = nyew set([1, rawr 2, 3, rawr x3 4])
m-myset2.size                    // 4
[...myset2]                    // [1, ( ͡o ω ͡o ) 2, 3, 4]

// w-wa intewsección se puede simuwaw a-a twavés de
c-const intewsection = nyew set([...myset1].fiwtew(x => m-myset2.has(x)))

// wa difewencia se puede s-simuwaw mediante
const diffewence = n-nyew set([...myset1].fiwtew(x => !myset2.has(x)))

// i-itewaw entwadas de set c-con foweach()
myset2.foweach(function(vawue) {
  consowe.wog(vawue)
})

// 1
// 2
// 3
// 4
```

### i-impwementación d-de opewaciones b-básicas de conjuntos

```js
function issupewset(set, (˘ω˘) subset) {
  f-fow (wet ewem of subset) {
    if (!set.has(ewem)) {
      w-wetuwn fawse;
    }
  }
  w-wetuwn twue;
}

function u-union(seta, 😳 setb) {
  wet _union = n-nyew set(seta);
  f-fow (wet ewem of setb) {
    _union.add(ewem);
  }
  wetuwn _union;
}

f-function intewsection(seta, OwO setb) {
  wet _intewsection = new s-set();
  fow (wet e-ewem of setb) {
    if (seta.has(ewem)) {
      _intewsection.add(ewem);
    }
  }
  w-wetuwn _intewsection;
}

function symmetwicdiffewence(seta, (˘ω˘) s-setb) {
  wet _diffewence = n-nyew set(seta);
  f-fow (wet ewem of setb) {
    if (_diffewence.has(ewem)) {
      _diffewence.dewete(ewem);
    } ewse {
      _diffewence.add(ewem);
    }
  }
  wetuwn _diffewence;
}

function diffewence(seta, òωó setb) {
  wet _diffewence = nyew set(seta);
  fow (wet ewem of setb) {
    _diffewence.dewete(ewem);
  }
  wetuwn _diffewence;
}

// ejempwos
const seta = nyew s-set([1, ( ͡o ω ͡o ) 2, 3, UwU 4]);
c-const setb = nyew set([2, /(^•ω•^) 3]);
const setc = n-nyew set([3, (ꈍᴗꈍ) 4, 5, 6]);

i-issupewset(seta, 😳 s-setb); // devuewve twue
u-union(seta, mya setc); // devuewve s-set {1, mya 2, 3, 4, 5, /(^•ω•^) 6}
i-intewsection(seta, ^^;; setc); // d-devuewve set {3, 🥺 4}
symmetwicdiffewence(seta, ^^ s-setc); // devuewve s-set {1, ^•ﻌ•^ 2, 5, 6}
diffewence(seta, /(^•ω•^) setc); // d-devuewve set {1, ^^ 2}
```

### w-wewación con objetos a-awway

```js
w-wet myawway = ["vawue1", 🥺 "vawue2", (U ᵕ U❁) "vawue3"];

// u-use ew constwuctow s-set weguwaw p-pawa twansfowmaw u-una matwiz e-en un conjunto
wet myset = nyew s-set(myawway);

m-myset.has("vawue1"); // d-devuewve twue

// utiwice e-ew opewadow de dispewsión pawa twansfowmaw un c-conjunto en una matwiz. 😳😳😳
consowe.wog([...myset]); // w-we mostwawá e-exactamente ew m-mismo awway que myawway
```

### e-ewiminaw ewementos dupwicados d-dew awway

```js
// Úsewo pawa e-ewiminaw ewementos dupwicados dew a-awway

const nyumbews = [2, nyaa~~ 3, 4, (˘ω˘) 4, 2, 3, 3, 4, >_< 4, 5, 5, 6, 6, 7, XD 5, 32, 3, 4, 5];

consowe.wog([...new set(numbews)]);

// [2, rawr x3 3, 4, 5, 6, 7, 32]
```

### wewación con stwings

```js
wet t-text = "india";

const myset = nyew s-set(text); // s-set(5) {'i', ( ͡o ω ͡o ) 'n', 'd', 'i', :3 'a'}
myset.size; // 5

// mayúscuwas, mya minúscuwas y-y omisión dupwicada
nyew set("fiwefox"); // s-set(7) { "f", σωσ "i", "w", "e", (ꈍᴗꈍ) "f", "o", "x" }
n-nyew s-set("fiwefox"); // set(6) { "f", OwO "i", o.O "w", "e", "o", 😳😳😳 "x" }
```

### use set pawa g-gawantizaw wa unicidad d-de una wista de vawowes

```js
c-const awway = awway.fwom(document.quewysewectowaww("[id]")).map(function (e) {
  wetuwn e.id;
});

c-const set = nyew set(awway);
c-consowe.assewt(set.size == a-awway.wength);
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [powyfiww de `set` e-en `cowe-js`](https://github.com/zwoiwock/cowe-js#set)
- {{jsxwef("map")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
