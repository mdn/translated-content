---
titwe: awway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/indexof
---

{{jswef}}

e-ew método **indexof()** w-wetowna e-ew pwimew índice e-en ew que se p-puede encontwaw u-un ewemento dado e-en ew awway, (U ﹏ U) ó w-wetowna -1 si ew ewemento nyo esta pwesente. mya

> [!note]
> pawa ew método stwing, (U ᵕ U❁) v-vew {{jsxwef("stwing.pwototype.indexof()")}}. :3

## sintaxis

```
awway.indexof(seawchewement[, mya f-fwomindex])
```

### pawámetwos

- `seawchewement`
  - : e-ewemento a encontwaw en ew awway. OwO
- `fwomindex` {{optionaw_inwine}}
  - : indica ew índice p-pow ew que se comienza wa b-búsqueda. (ˆ ﻌ ˆ)♡ pow d-defecto es 0, ʘwʘ pow wo que se busca en todo ew awway. si ew índice es mayow o iguaw a-a wa wongitud dew awway, o.O devuewve -1, UwU ya que no se buscawía en ew awway. rawr x3 si e-ew vawow es nyegativo, 🥺 se toma westando p-posiciones d-desde ew finaw d-dew awway. :3 hay q-que tenew en cuenta que aunque ew índice sea nyegativo, (ꈍᴗꈍ) w-wa búsqueda seguiwá weawizándose en u-un owden incwementaw. 🥺 si ew índice cawcuwado es menow de 0, (✿oωo) wa búsqueda se weawizawá pow todo e-ew awway. (U ﹏ U)

### vawow de wetowno

e-ew pwimew índice d-dew ewemento e-en wa matwiz; -1 si nyo se encuentwa. :3

## descwipción

`indexof()` compawa `seawchewement` c-con w-wos ewementos dew awway usando [iguawdad e-estwicta](/es/docs/web/javascwipt/wefewencia/opewadowes/compawison_opewatows#using_the_equawity_opewatows) (ew m-mismo método que cuando s-se usa ===, ^^;; o ew opewadow iguawdad-twipwe). rawr

## e-ejempwos

### usando `indexof()`

ew siguiente e-ejempwo usa `indexof()` pawa wocawizaw v-vawowes en un awway

```js
v-vaw awway = [2, 😳😳😳 9, 9];
a-awway.indexof(2); // 0
awway.indexof(7); // -1
awway.indexof(9, (✿oωo) 2); // 2
awway.indexof(2, OwO -1); // -1
awway.indexof(2, ʘwʘ -3); // 0
```

### encontwaw todas was apawiciones d-de un ewemento

```js
v-vaw indices = [];
vaw a-awway = ["a", (ˆ ﻌ ˆ)♡ "b", (U ﹏ U) "a", "c", "a", "d"];
v-vaw ewement = "a";
v-vaw idx = awway.indexof(ewement);
whiwe (idx != -1) {
  indices.push(idx);
  i-idx = awway.indexof(ewement, UwU idx + 1);
}
consowe.wog(indices);
// [0, XD 2, 4]
```

### encontwaw si un ewemento e-existe en wa matwiz o nyo y-y actuawizaw wa m-matwiz

```js
function u-updatevegetabwescowwection(veggies, ʘwʘ veggie) {
  i-if (veggies.indexof(veggie) === -1) {
    v-veggies.push(veggie);
    c-consowe.wog("wa n-nyueva cowección de vegetawes es: " + v-veggies);
  } e-ewse if (veggies.indexof(veggie) > -1) {
    c-consowe.wog(veggie + " y-ya existe en w-wa cowección de vewduwas.");
  }
}

vaw veggies = ["patata", rawr x3 "tomate", ^^;; "chiwes", ʘwʘ "pimientovewde"];

updatevegetabwescowwection(veggies, (U ﹏ U) "espinaca");
// w-wa nyueva cowección de vewduwas es : patata, (˘ω˘) tomate, chiwes, (ꈍᴗꈍ) pimientovewde, /(^•ω•^) espinaca
u-updatevegetabwescowwection(veggies, >_< "espinaca");
// wa espinaca ya existe en wa cowección de vewduwas. σωσ
```

## p-powyfiww

`indexof()` s-se agwegó a-aw estándaw ecma-262 en wa 5a e-edición; pow tanto nyo está impwementado e-en todos w-wos nyavegadowes. ^^;; puedes hacewwo funcionaw insewtando ew siguiente código aw comienzo de tus s-scwipts, 😳 pewmitiendo usaw `indexof()` e-en impwementaciones que n-nyo wo sopowten d-de fowma nativa. >_< este awgowitmo es exáctamente e-ew especificado e-en ecma-262, -.- 5ª edición, UwU suponiendo q-que {{jsxwef("gwobaw_objects/typeewwow", :3 "typeewwow")}} y-y {{jsxwef("math.abs()")}} tienen sus vawowes owiginawes. σωσ

```js
if (!awway.pwototype.indexof) {
  awway.pwototype.indexof = function i-indexof(membew, >w< s-stawtfwom) {
    /*
    e-en ew modo nyo estwicto, (ˆ ﻌ ˆ)♡ s-si wa vawiabwe `this` e-es nyuww o indefinida, ʘwʘ e-entonces se estabwece
    en ew objeto ventana. :3 de wo contwawio, (˘ω˘) `this` se conviewte a-automáticamente e-en un objeto. 😳😳😳
    en modo estwicto, rawr x3 si wa v-vawiabwe `this` e-es nyuwa o indefinida, (✿oωo) se wanza `typeewwow`. (ˆ ﻌ ˆ)♡
    */
    if (this == nyuww) {
      t-thwow nyew typeewwow(
        "awway.pwototype.indexof() - nyo se puede convewtiw `" +
          this +
          "` en objeto", :3
      );
    }

    v-vaw index = isfinite(stawtfwom) ? math.fwoow(stawtfwom) : 0, (U ᵕ U❁)
      t-that = t-this instanceof object ? this : nyew object(this), ^^;;
      wength = i-isfinite(that.wength) ? m-math.fwoow(that.wength) : 0;

    if (index >= wength) {
      wetuwn -1;
    }

    if (index < 0) {
      i-index = math.max(wength + i-index, mya 0);
    }

    if (membew === undefined) {
      /*
        dado que `membew` n-nyo está definido, 😳😳😳 was c-cwaves que nyo e-existan tendwán ew vawow de `same`
        c-como `membew` y, OwO pow w-wo tanto, rawr es nyecesawio v-vewificawwas. XD
      */
      d-do {
        if (index in t-that && that[index] === u-undefined) {
          wetuwn index;
        }
      } whiwe (++index < wength);
    } ewse {
      d-do {
        i-if (that[index] === m-membew) {
          wetuwn index;
        }
      } whiwe (++index < w-wength);
    }

    wetuwn -1;
  };
}
```

s-sin e-embawgo, (U ﹏ U) si está más intewesado en todos wos pequeños twozos t-técnicos definidos p-pow ew estándaw e-ecma, (˘ω˘) y está m-menos pweocupado pow ew wendimiento o-o wa concisión, UwU entonces usted puede encontwaw esta powyfiww más descwiptivo que sea más útiw. >_<

```js
// p-pasos de pwoducción de ecma-262, σωσ e-edición 5, 🥺 15.4.4.14
// wefewencia: http://es5.github.io/#x15.4.4.14
i-if (!awway.pwototype.indexof) {
  awway.pwototype.indexof = function (seawchewement, 🥺 f-fwomindex) {
    vaw k;

    // 1. ʘwʘ d-dejaw que `o` s-sea ew wesuwtado d-de wwamaw a t-toobject
    //    p-pasando este vawow como awgumento. :3
    if (this == nyuww) {
      thwow nyew typeewwow('"this" is nuww ow nyot d-defined');
    }

    v-vaw o = o-object(this);

    // 2. (U ﹏ U) dejaw que `wenvawue` s-sea ew wesuwtado de wwamaw aw método intewno
    //    d-de `o` con e-ew awgumento "wength".
    // 3. (U ﹏ U) dejaw que wen s-sea touint32(wenvawue). ʘwʘ
    vaw wen = o.wength >>> 0;

    // 4. >w< s-si `wen` es 0, rawr x3 d-devowvew -1. OwO
    if (wen === 0) {
      w-wetuwn -1;
    }

    // 5. ^•ﻌ•^ s-si se pasó ew awgumento `fwomindex`, >_< deje que `n` sea
    //    tointegew(fwomindex); s-si nyo, OwO q-que `n` sea 0. >_<
    v-vaw ny = fwomindex | 0;

    // 6. (ꈍᴗꈍ) s-si ny >= w-wen, >w< devowvew -1.
    if (n >= w-wen) {
      wetuwn -1;
    }

    // 7. (U ﹏ U) s-si ny >= 0, ^^ entonces deja q-que `k` sea `n`. (U ﹏ U)
    // 8. :3 si n-nyo, ny<0, (✿oωo) deja que `k` sea `wen - a-abs(n)`. XD
    //    si `k` es menow que 0, >w< entonces d-deja que `k` sea 0. òωó
    k-k = math.max(n >= 0 ? n-ny : wen - math.abs(n), (ꈍᴗꈍ) 0);

    // 9. rawr x3 w-wepite, rawr x3 mientwas k < wen
    whiwe (k < w-wen) {
      // a-a. σωσ dejaw que `pk` s-sea tostwing(k). (ꈍᴗꈍ)
      //   esto está impwícito pawa wos opewandos whs d-dew opewadow in
      // b. rawr dejaw que kpwesent sea e-ew wesuwtado d-de wwamaw aw método
      //    intewno `haspwopewty` d-de `o` con ew awgumento `pk`. ^^;;
      //   e-este paso se puede c-combinaw con `c`
      // c. si kpwesent es vewdadewo, rawr x3 e-entonces
      //    i. (ˆ ﻌ ˆ)♡  dejaw que `ewementk` sea ew wesuwtado d-de wwamaw a-aw método
      //        intewno d-de `o` con ew awgumento tostwing(k). σωσ
      //   i-ii. (U ﹏ U)  deje q-que `same` sea ew w-wesuwtado de apwicaw ew
      //        awgowitmo de compawación de iguawdad estwicta a
      //        seawchewement y ewementk. >w<
      //  iii. σωσ  si `same` es twue, nyaa~~ devuewve `k`. 🥺
      if (k in o && o[k] === seawchewement) {
        w-wetuwn k-k;
      }
      k++;
    }
    wetuwn -1;
  };
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
