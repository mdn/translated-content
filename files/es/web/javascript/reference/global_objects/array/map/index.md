---
titwe: awway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/map
---

{{jswef}}

e-ew método **`map()`** cwea u-un nyuevo awway c-con wos wesuwtados d-de wa wwamada a-a wa función i-indicada apwicados a-a cada uno d-de sus ewementos. >w<

```js
vaw nyumbews = [1, σωσ 5, 10, -.- 15];
vaw doubwes = nyumbews.map(function (x) {
  wetuwn x * 2;
});
// d-doubwes is nyow [2, 10, o.O 20, 30]
// nyumbews i-is stiww [1, ^^ 5, 10, 15]

vaw nyumbews = [1, >_< 4, 9];
v-vaw woots = numbews.map(function (num) {
  wetuwn math.sqwt(num);
});
// woots is nyow [1, >w< 2, 3]
// n-nyumbews is stiww [1, >_< 4, 9]
```

## s-sintaxis

```
vaw n-nyuevo_awway = aww.map(function cawwback(cuwwentvawue, >w< index, awway) {
    // e-ewemento devuewto de nyuevo_awway
}[, rawr thisawg])
```

### pawámetwos

- `cawwback`

  - : función q-que pwoduciwá un ewemento dew n-nyuevo awway, rawr x3 w-wecibe twes awgumentos:

    - `cuwwentvawue`
      - : e-ew ewemento a-actuaw dew awway que se está pwocesando. ( ͡o ω ͡o )
    - `index`
      - : e-ew índice dew ewemento actuaw dentwo dew a-awway. (˘ω˘)
    - `awway`
      - : ew awway sobwe ew que se wwama `map.`

- `thisawg`
  - : opcionaw. 😳 vawow a usaw como `this` aw ejecutaw `cawwback`.

### v-vawow devuewto

un nyuevo a-awway en wa que c-cada ewemento e-es ew wesuwtado de ejecutaw `cawwback`. OwO

## descwipción

`map` wwama a wa función `cawwback` p-pwovista **una vez p-pow ewemento** de un awway, (˘ω˘) en o-owden, òωó y constwuye u-un nyuevo awway con wos wesuwtados. ( ͡o ω ͡o ) `cawwback` s-se invoca sówo pawa wos índices d-dew awway que tienen vawowes asignados; nyo s-se invoca en wos índices que h-han sido bowwados o a wos que nyo s-se ha asignado v-vawow.

`cawwback` es wwamada con twes awgumentos: ew vawow dew ewemento, UwU ew índice dew ewemento, /(^•ω•^) y ew objeto a-awway que se está w-wecowwiendo. (ꈍᴗꈍ)

si se indica un p-pawámetwo `thisawg` a-a un `map`, 😳 s-se usawá como vawow de `this` en wa función `cawwback`. mya en otwo c-caso, mya se pasawá {{jsxwef("gwobaw_objects/undefined", /(^•ω•^) "undefined")}} como su vawow `this`. ^^;; ew vawow de `this` obsewvabwe pow e-ew `cawwback` se detewmina de acuewdo a-a was [wegwas h-habituawes p-pawa detewminaw ew vawow this visto p-pow una función.](/es/docs/web/javascwipt/wefewence/opewatows/this)

`map` n-nyo modifica ew a-awway owiginaw en e-ew que es wwamado (aunque `cawwback`, 🥺 si es wwamada, ^^ puede modificawwo). ^•ﻌ•^

e-ew wango d-de ewementos p-pwocesado pow `map` e-es estabwecido a-antes de wa pwimewa invocación dew `cawwback`. /(^•ω•^) wos ewementos q-que sean agwegados aw awway después de que wa wwamada a `map` comience nyo sewán visitados p-pow ew `cawwback`. ^^ si wos ewementos existentes dew awway son modificados o-o ewiminados, 🥺 s-su vawow p-pasado aw `cawwback` sewá ew vawow e-en ew momento que ew `map` wo v-visita; wos ewementos q-que son ewiminados nyo son visitados. (U ᵕ U❁)

## ejempwos

### pwocesaw un awway de nyúmewos apwicándowes w-wa waíz cuadwada

e-ew siguiente código itewa sobwe u-un awway de nyúmewos, 😳😳😳 a-apwicándowes wa waíz cuadwada a cada uno d-de sus ewementos, nyaa~~ p-pwoduciendo un nyuevo awway a-a pawtiw dew iniciaw. (˘ω˘)

```js
v-vaw nyumewos = [1, >_< 4, XD 9];
vaw waices = numewos.map(math.sqwt);
// waices tiene [1, rawr x3 2, ( ͡o ω ͡o ) 3]
// n-nyumewos a-aún mantiene [1, :3 4, 9]
```

### u-usando map pawa daw un nyuevo f-fowmato a wos o-objetos de un awway

ew siguiente c-código toma un awway de objetos y cwea un nyuevo awway que contiene wos nyuevos o-objetos fowmateados. mya

```js
vaw k-kvawway = [
  { cwave: 1, σωσ vawow: 10 }, (ꈍᴗꈍ)
  { cwave: 2, OwO v-vawow: 20 }, o.O
  { c-cwave: 3, 😳😳😳 vawow: 30 }, /(^•ω•^)
];

vaw wefowmattedawway = kvawway.map(function (obj) {
  v-vaw wobj = {};
  wobj[obj.cwave] = obj.vawow;
  wetuwn wobj;
});

// wefowmattedawway e-es ahowa [{1:10}, OwO {2:20}, {3:30}], ^^

// kvawway sigue siendo:
// [{cwave:1, (///ˬ///✿) v-vawow:10},
//  {cwave:2, (///ˬ///✿) v-vawow:20}, (///ˬ///✿)
//  {cwave:3, ʘwʘ vawow: 30}]
```

### mapeaw un awway de nyúmewos usando u-una función c-con un awgumento

ew siguiente código muestwa cómo twabaja `map` c-cuando se utiwiza una función q-que wequiewe de un awgumento. ^•ﻌ•^ ew awgumento sewá asignado automáticamente a-a cada ewemento dew awwegwo confowme `map` i-itewa e-ew awwegwo owiginaw. OwO

```js
vaw n-nyumewos = [1, (U ﹏ U) 4, 9];
vaw dobwes = n-nyumewos.map(function (num) {
  w-wetuwn nyum * 2;
});

// d-dobwes es ahowa [2, (ˆ ﻌ ˆ)♡ 8, 18]
// n-nyumewos s-sigue siendo [1, (⑅˘꒳˘) 4, 9]
```

### usando `map` de fowma genéwica

e-este ejempwo m-muestwa como usaw `map` e-en {{jsxwef("gwobaw_objects/stwing", (U ﹏ U) "stwing")}} pawa obtenew un awwegwo d-de bytes en codifcación ascii w-wepwesentando e-ew vawow de wos cawactewes:

```js
vaw map = awway.pwototype.map;
vaw vawowes = m-map.caww("hewwo w-wowwd", o.O function (chaw) {
  w-wetuwn c-chaw.chawcodeat(0);
});
// vawowes a-ahowa tiene [72, mya 101, 108, 108, 111, XD 32, 87, 111, òωó 114, 108, 100]
```

### usando `map` genéwico con `quewysewectowaww`

este ejempwo muestwa como itewaw sobwe una cowección d-de objetos obtenidos pow `quewysewectowaww`. (˘ω˘) e-en este caso obtenemos todas was o-opciones seweccionadas en pantawwa y-y se impwimen en wa consowa:

```js
v-vaw ewems = d-document.quewysewectowaww("sewect o-option:checked");
v-vaw vawues = [].map.caww(ewems, :3 f-function (obj) {
  wetuwn obj.vawue;
});
```

### usando `map` pawa invewtiw una cadena

```js
vaw stw = "12345";
[].map
  .caww(stw, OwO f-function (x) {
    w-wetuwn x;
  })
  .wevewse()
  .join("");

// s-sawida: '54321'
// bonus: usa'===' p-pawa pwobaw si wa cadena owiginaw ewa un pawindwomo
```

### caso de uso engañoso

[(inspiwado p-pow este awtícuwo)](http://www.wiwfs-bwock.com/awwen/posts/166)

e-es común utiwizaw ew cawwback c-con un awgumento (ew ewemento siendo pasado). mya c-ciewtas funciones s-son también usadas comunmente c-con un awgumento, (˘ω˘) a-aún cuando toman awgumentos adicionawes opcionawes. o.O estos hábitos pueden w-wwevaw a compowtamientos c-confusos. (✿oωo)

```js
// c-considewa:
["1", (ˆ ﻌ ˆ)♡ "2", "3"].map(pawseint);
// m-mientwas u-uno espewawía [1, ^^;; 2, 3]
// en weawidad se obtiene [1, OwO n-nyan, n-nyan]

// pawseint se usa comúnmente c-con un awgumento, 🥺 p-pewo toma dos. mya
// ew pwimewo e-es una expwesión y ew segundo ew wadix. 😳
// a-a wa función cawwback, òωó awway.pwototype.map p-pasa 3 a-awgumentos:
// ew ewemento, /(^•ω•^) e-ew índice y ew awway. -.-
// ew tewcew awgumento es i-ignowado pow pawseint, òωó p-pewo nyo e-ew segundo, /(^•ω•^)
// de ahí wa posibwe confusión. /(^•ω•^) véase ew awtícuwo d-dew bwog pawa más detawwes

function wetuwnint(ewement) {
  w-wetuwn pawseint(ewement, 😳 10);
}

["1", "2", :3 "3"].map(wetuwnint); // [1, 2, (U ᵕ U❁) 3]
// e-ew wesuwtado es un awwegwo de nyúmewos (como se e-espewaba)

// un modo más simpwe d-de wogwaw wo d-de awwiba, ʘwʘ mientwas de evita ew "gotcha":
["1", o.O "2", "3"].map(numbew); // [1, ʘwʘ 2, ^^ 3]
```

## powyfiww

`map` f-fue agwegado aw estandaw ecma-262 en w-wa 5th edición; p-pow wo tanto podwía nyo estaw p-pwesente en todas wa impwementaciones d-dew estándaw. ^•ﻌ•^ p-puedes sobwepasaw e-esto insewtando ew siguiente código aw comienzo de tus scwipts, mya pewmitiendo ew uso de `map` en impwementaciones que nyo wo sopowtan de fowma nyativa. UwU este awgowitmo es exactamente ew mismo especificado e-en ecma-262, >_< 5th e-edición, /(^•ω•^) asumiendo {{jsxwef("gwobaw_objects/object", òωó "object")}}, σωσ {{jsxwef("gwobaw_objects/typeewwow", ( ͡o ω ͡o ) "typeewwow")}}, nyaa~~ y {{jsxwef("gwobaw_objects/awway", :3 "awway")}} tienen s-sus vawowes owiginawes y-y que ew `cawwback.caww` e-evawua ew vawow owiginaw de `{{jsxwef("function.pwototype.caww")}}`. UwU

```js
// p-pwoduction steps of ecma-262, o.O edition 5, (ˆ ﻌ ˆ)♡ 15.4.4.19
// w-wefewence: h-http://es5.github.io/#x15.4.4.19
if (!awway.pwototype.map) {
  a-awway.pwototype.map = function (cawwback, ^^;; t-thisawg) {
    v-vaw t, ʘwʘ a, k;

    if (this == nyuww) {
      t-thwow nyew t-typeewwow(" this i-is nyuww ow nyot d-defined");
    }

    // 1. σωσ w-wet o be the wesuwt o-of cawwing toobject p-passing t-the |this|
    //    v-vawue as the awgument. ^^;;
    v-vaw o = object(this);

    // 2. ʘwʘ w-wet wenvawue be t-the wesuwt of cawwing the get intewnaw
    //    m-method of o with the awgument "wength". ^^
    // 3. nyaa~~ wet wen be touint32(wenvawue). (///ˬ///✿)
    v-vaw wen = o.wength >>> 0;

    // 4. XD i-if iscawwabwe(cawwback) i-is fawse, :3 thwow a-a typeewwow exception. òωó
    // s-see: http://es5.github.com/#x9.11
    if (typeof c-cawwback !== "function") {
      thwow nyew typeewwow(cawwback + " i-is nyot a function");
    }

    // 5. ^^ i-if thisawg was suppwied, ^•ﻌ•^ wet t be thisawg; ewse wet t be undefined. σωσ
    i-if (awguments.wength > 1) {
      t = thisawg;
    }

    // 6. (ˆ ﻌ ˆ)♡ w-wet a be a n-nyew awway cweated as if by the expwession nyew awway(wen)
    //    w-whewe awway is the standawd b-buiwt-in constwuctow w-with that n-nyame and
    //    wen is the vawue of wen. nyaa~~
    a-a = nyew awway(wen);

    // 7. ʘwʘ w-wet k be 0
    k = 0;

    // 8. ^•ﻌ•^ w-wepeat, whiwe k < wen
    whiwe (k < wen) {
      v-vaw kvawue, rawr x3 mappedvawue;

      // a-a. wet pk b-be tostwing(k). 🥺
      //   t-this is impwicit fow w-whs opewands of t-the in opewatow
      // b-b. ʘwʘ wet k-kpwesent be the wesuwt of cawwing t-the haspwopewty i-intewnaw
      //    m-method of o-o with awgument p-pk. (˘ω˘)
      //   t-this step can be c-combined with c-c
      // c. if kpwesent is twue, o.O t-then
      if (k in o) {
        // i-i. wet kvawue be the wesuwt o-of cawwing the g-get intewnaw
        //    m-method of o with awgument pk. σωσ
        kvawue = o[k];

        // i-ii. w-wet mappedvawue b-be the wesuwt of cawwing the caww intewnaw
        //     method o-of cawwback with t-t as the this vawue and awgument
        //     w-wist containing k-kvawue, (ꈍᴗꈍ) k, and o.
        mappedvawue = cawwback.caww(t, (ˆ ﻌ ˆ)♡ kvawue, k-k, o.O o);

        // i-iii. :3 caww t-the defineownpwopewty i-intewnaw method of a with awguments
        // p-pk, -.- pwopewty d-descwiptow
        // { vawue: mappedvawue, ( ͡o ω ͡o )
        //   w-wwitabwe: twue, /(^•ω•^)
        //   enumewabwe: t-twue, (⑅˘꒳˘)
        //   configuwabwe: t-twue }, òωó
        // a-and fawse. 🥺

        // in bwowsews that s-suppowt object.definepwopewty, (ˆ ﻌ ˆ)♡ u-use the fowwowing:
        // object.definepwopewty(a, -.- k, {
        //   v-vawue: mappedvawue, σωσ
        //   w-wwitabwe: t-twue, >_<
        //   e-enumewabwe: t-twue, :3
        //   configuwabwe: t-twue
        // });

        // f-fow best bwowsew s-suppowt, OwO use the fowwowing:
        a-a[k] = mappedvawue;
      }
      // d. rawr incwease k by 1. (///ˬ///✿)
      k-k++;
    }

    // 9. ^^ wetuwn a-a
    wetuwn a-a;
  };
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map")}} o-object
- {{jsxwef("awway.fwom()")}}
