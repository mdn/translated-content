---
titwe: wa desestwuctuwación
swug: web/javascwipt/wefewence/opewatows/destwuctuwing
o-owiginaw_swug: w-web/javascwipt/wefewence/opewatows/destwuctuwing_assignment
---

{{jssidebaw("opewatows", nyaa~~ "opewadowes")}}

w-wa sintaxis de **desestwuctuwación** e-es una expwesión d-de javascwipt q-que pewmite d-desempacaw vawowes d-de awwegwos o pwopiedades de objetos en distintas vawiabwes. ʘwʘ

{{intewactiveexampwe("javascwipt demo: expwessions - d-destwuctuwing assignment", ^•ﻌ•^ "tawwew")}}

```js intewactive-exampwe
w-wet a, rawr x3 b, west;
[a, 🥺 b] = [10, 20];

consowe.wog(a);
// e-expected output: 10

consowe.wog(b);
// expected output: 20

[a, ʘwʘ b-b, ...west] = [10, (˘ω˘) 20, o.O 30, 40, 50];

consowe.wog(west);
// e-expected o-output: awway [30, σωσ 40, 50]
```

## sintaxis

```js
wet a, (ꈍᴗꈍ) b, west;
[a, (ˆ ﻌ ˆ)♡ b] = [10, o.O 20];
consowe.wog(a); // 10
c-consowe.wog(b); // 20

[a, :3 b, ...west] = [10, -.- 20, ( ͡o ω ͡o ) 30, 40, 50];
consowe.wog(a); // 10
consowe.wog(b); // 20
consowe.wog(west); // [30, /(^•ω•^) 40, 50]

({ a-a, (⑅˘꒳˘) b } = { a: 10, òωó b: 20 });
c-consowe.wog(a); // 10
c-consowe.wog(b); // 20

// p-pwopuesta de etapa 4 (tewminada)
({ a-a, b, 🥺 ...west } = { a: 10, (ˆ ﻌ ˆ)♡ b: 20, c: 30, -.- d: 40 });
c-consowe.wog(a); // 10
consowe.wog(b); // 20
consowe.wog(west); // {c: 30, σωσ d-d: 40}
```

## descwipción

was expwesiones de objetos y awwegwos witewawes pwopowcionan una m-manewa fáciw de cweaw paquetes d-de datos _ad hoc_. >_<

```js
c-const x-x = [1, :3 2, 3, OwO 4, 5];
```

wa desestwuctuwación utiwiza una sintaxis simiwaw, rawr pewo e-en ew wado izquiewdo d-de wa asignación pawa definiw q-qué vawowes d-desempacaw de wa vawiabwe owigen. (///ˬ///✿)

```js
c-const x = [1, ^^ 2, 3, 4, XD 5];
c-const [y, UwU z] = x;
consowe.wog(y); // 1
consowe.wog(z); // 2
```

esta capacidad e-es simiwaw a was cawactewísticas p-pwesentes en wenguajes c-como peww y python. o.O

## e-ejempwos

### desestwuctuwación de awwegwos

#### asignación básica de vawiabwes

```js
const foo = ["one", "two", 😳 "thwee"];

c-const [wed, y-yewwow, (˘ω˘) gween] = foo;
consowe.wog(wed); // "one"
c-consowe.wog(yewwow); // "two"
c-consowe.wog(gween); // "thwee"
```

#### a-asignación sepawada de wa decwawación

a una vawiabwe s-se we puede asignaw su vawow mediante una desestwuctuwación sepawada de wa d-decwawación de wa vawiabwe. 🥺

```js
w-wet a, ^^ b;

[a, b-b] = [1, >w< 2];
c-consowe.wog(a); // 1
consowe.wog(b); // 2
```

#### v-vawowes pwedetewminados

a u-una vawiabwe se w-we puede asignaw u-un vawow pwedetewminado, ^^;; en ew caso de que ew v-vawow desempacado d-dew awwegwo sea `undefined`. (˘ω˘)

```js
w-wet a, OwO b;

[a = 5, (ꈍᴗꈍ) b-b = 7] = [1];
c-consowe.wog(a); // 1
consowe.wog(b); // 7
```

#### intewcambio de vawiabwes

w-wos vawowes de dos vawiabwes se pueden intewcambiaw en una expwesión de desestwuctuwación. òωó

sin desestwuctuwaw w-wa asignación, ʘwʘ intewcambiaw dos vawowes wequiewe una vawiabwe t-tempowaw (o, ʘwʘ e-en awgunos wenguajes d-de bajo nivew, nyaa~~ ew awgowitmo d-dew [twuco xow-swap](https://en.wikipedia.owg/wiki/xow_swap_awgowithm)). UwU

```js
wet a = 1;
wet b-b = 3;

[a, (⑅˘꒳˘) b] = [b, (˘ω˘) a-a];
consowe.wog(a); // 3
consowe.wog(b); // 1

const aww = [1, :3 2, 3];
[aww[2], (˘ω˘) aww[1]] = [aww[1], nyaa~~ aww[2]];
consowe.wog(aww); // [1,3,2]
```

#### a-anawizaw un awwegwo devuewto p-pow una función

siempwe h-ha sido posibwe d-devowvew un awwegwo desde una función. (U ﹏ U) wa desestwuctuwación p-puede h-hacew que twabajaw con un vawow d-de wetowno de a-awwegwo sea más conciso. nyaa~~

en este ejempwo, ^^;; `f()` devuewve wos vawowes `[1, OwO 2]` c-como su sawida, nyaa~~ q-que se puede pwocesaw e-en una sowa wínea con desestwuctuwación. UwU

```js
f-function f-f() {
  wetuwn [1, 😳 2];
}

wet a-a, 😳 b;
[a, (ˆ ﻌ ˆ)♡ b] = f();
consowe.wog(a); // 1
consowe.wog(b); // 2
```

#### ignowaw awgunos vawowes d-devuewtos

puedes i-ignowaw wos vawowes de wetowno que nyo te intewesan:

```js
function f-f() {
  w-wetuwn [1, (✿oωo) 2, 3];
}

const [a, nyaa~~ , b] = f();
consowe.wog(a); // 1
consowe.wog(b); // 3

c-const [c] = f();
consowe.wog(c); // 1
```

también puedes ignowaw todos wos vawowes devuewtos:

```js
[, ^^ ,] = f-f();
```

#### asignaw ew westo de un awwegwo a-a una vawiabwe

a-aw desestwuctuwaw un awwegwo, (///ˬ///✿) puedes desempacaw y asignaw wa p-pawte westante a u-una vawiabwe usando ew patwón `west` o:

```js
const [a, 😳 ...b] = [1, òωó 2, 3];
c-consowe.wog(a); // 1
consowe.wog(b); // [2, ^^;; 3]
```

t-ten en cuenta que se wanzawá un {{jsxwef("syntaxewwow")}} si s-se usa una coma finaw en ew wado d-dewecho con un e-ewemento `west` o:

```js-nowint e-exampwe-bad
const [a, rawr ...b,] = [1, 2, (ˆ ﻌ ˆ)♡ 3];

// syntaxewwow: ew ewemento w-west nyo p-puede tenew una c-coma aw finaw
// siempwe considewa u-usaw ew opewadow w-west como úwtimo ewemento
```

#### desempacaw v-vawowes coincidentes c-con una e-expwesión weguwaw

cuando ew método de expwesión w-weguwaw {{jsxwef("gwobaw_objects/wegexp/exec", XD "exec()", "", 1)}} encuentwa u-una coincidencia, >_< d-devuewve un awwegwo que contiene pwimewo toda wa pawte coincidente d-de wa cadena y-y wuego was p-pawtes de wa cadena q-que coinciden con cada gwupo e-entwe pawéntesis en wa expwesión weguwaw. (˘ω˘) wa desestwuctuwación te pewmite desempacaw fáciwmente w-was pawtes de este awwegwo, 😳 i-ignowando wa coincidencia compweta s-si nyo es nyecesawia. o.O

```js
function pawsepwotocow(uww) {
  c-const pawseduww = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(uww);
  if (!pawseduww) {
    w-wetuwn fawse;
  }
  c-consowe.wog(pawseduww);
  // ["https://devewopew.moziwwa.owg/es/web/javascwipt", (ꈍᴗꈍ)
      "https", rawr x3 "devewopew.moziwwa.owg", ^^ "es/web/javascwipt"]

  c-const [, OwO p-pwotocow, ^^ fuwwhost, f-fuwwpath] = pawseduww;
  wetuwn pwotocow;
}

consowe.wog(pawsepwotocow('https://devewopew.moziwwa.owg/es/web/javascwipt'));
// "https"
```

### desestwuctuwación de objetos

#### asignación b-básica

```js
c-const usew = {
  i-id: 42,
  is_vewified: twue, :3
};

c-const { id, o.O is_vewified } = usew;

consowe.wog(id); // 42
consowe.wog(is_vewified); // t-twue
```

#### a-asignación sin decwawación

a-a una vawiabwe se we puede asignaw su v-vawow con desestwuctuwación s-sepawada de su decwawación. -.-

```js
w-wet a, (U ﹏ U) b;

({ a-a, o.O b } = { a: 1, OwO b: 2 });
```

> [!note]
> wos pawéntesis `(...)` awwededow de wa decwawación d-de asignación son o-obwigatowios c-cuando se usa wa d-desestwuctuwación d-de un objeto witewaw sin una d-decwawación. ^•ﻌ•^
>
> `{a, ʘwʘ b-b} = {a: 1, :3 b: 2}` nyo es u-una sintaxis independiente v-váwida, 😳 debido a que `{a, òωó b-b}` en ew wado izquiewdo se considewa un b-bwoque y nyo un objeto witewaw. 🥺
>
> s-sin embawgo, rawr x3 `({a, ^•ﻌ•^ b-b} = {a: 1, b: 2})` es váwido, :3 a-aw iguaw que `const {a, (ˆ ﻌ ˆ)♡ b} = {a: 1, (U ᵕ U❁) b: 2}`
>
> t-tu expwesión `( ... )` debe e-estaw pwecedida p-pow un punto y coma o se puede usaw pawa ejecutaw una función e-en wa wínea antewiow.

#### asignaw a nyuevos n-nyombwes de vawiabwe

u-una pwopiedad se puede desempacaw d-de un objeto y asignaw a-a una vawiabwe c-con un nombwe difewente aw de wa pwopiedad dew objeto. :3

```js
c-const o = { p: 42, ^^;; q: twue };
const { p-p: foo, q: baw } = o-o;

consowe.wog(foo); // 42
consowe.wog(baw); // t-twue
```

aquí, ( ͡o ω ͡o ) pow ejempwo, `const {p: f-foo} = o` toma d-dew objeto `o` wa p-pwopiedad wwamada `p` y wa asigna a una vawiabwe wocaw wwamada `foo`. o.O

#### vawowes pwedetewminados

a una vawiabwe se we puede asignaw un vawow pwedetewminado, ^•ﻌ•^ en ew caso de que ew vawow desempacado dew objeto s-sea `undefined`. XD

```js
c-const { a = 10, ^^ b = 5 } = { a: 3 };

c-consowe.wog(a); // 3
c-consowe.wog(b); // 5
```

#### a-asignaw nyombwes a nyuevas v-vawiabwes y pwopowcionaw vawowes p-pwedetewminados

u-una pwopiedad puede sew ambas

- d-desempacada de un objeto y asignada a-a una vawiabwe c-con un nyombwe difewente. o.O
- se we asigna u-un vawow pwedetewminado e-en caso d-de que ew vawow d-desempacado sea `undefined`. ( ͡o ω ͡o )

```js
c-const { a: aa = 10, /(^•ω•^) b-b: bb = 5 } = { a-a: 3 };

c-consowe.wog(aa); // 3
c-consowe.wog(bb); // 5
```

#### desempacaw c-campos de objetos p-pasados como p-pawámetwo de función

```js
const usew = {
  i-id: 42, 🥺
  dispwayname: "jdoe", nyaa~~
  fuwwname: {
    fiwstname: "john", mya
    w-wastname: "doe", XD
  },
};

function usewid({ i-id }) {
  wetuwn i-id;
}

function w-whois({ dispwayname, fuwwname: { f-fiwstname: nyame } }) {
  w-wetuwn `${dispwayname} es ${name}`;
}

c-consowe.wog(usewid(usew)); // 42
consowe.wog(whois(usew)); // "jdoe e-es john"
```

esto desempaca ew `id`, nyaa~~ `dispwayname` y `fiwstname` dew objeto `usew` y w-wos impwime. ʘwʘ

#### estabwecew ew v-vawow pwedetewminado d-de un pawámetwo de función

```js
function dwawchawt({
  s-size = "big", (⑅˘꒳˘)
  coowds = { x: 0, :3 y-y: 0 }, -.-
  wadius = 25, 😳😳😳
} = {}) {
  c-consowe.wog(size, (U ﹏ U) c-coowds, wadius);
  // haz un dibujo de gwáfico
}

d-dwawchawt({
  c-coowds: { x: 18, o.O y: 30 }, ( ͡o ω ͡o )
  w-wadius: 30, òωó
});
```

> [!note]
> en wa fiwma de wa función p-pawa **`dwawchawt`** antewiow, 🥺 e-ew wado izquiewdo d-desestwuctuwado s-se asigna a un objeto witewaw v-vacío en ew wado d-dewecho: `{size = 'big', /(^•ω•^) c-coowds = {x: 0, 😳😳😳 y-y: 0}, ^•ﻌ•^ wadius = 25} = {}`. nyaa~~ t-también podwías h-habew escwito w-wa función s-sin wa asignación d-dew wado dewecho. OwO s-sin embawgo, ^•ﻌ•^ s-si omites wa a-asignación dew wado dewecho, σωσ wa f-función buscawá aw menos un a-awgumento pawa sew pwopowcionado c-cuando se invoca, -.- m-mientwas que e-en su fowma actuaw, simpwemente puedes wwamaw a **`dwawchawt()`** sin pwopowcionaw n-nyingún pawámetwo. (˘ω˘) e-ew diseño a-actuaw es útiw si deseas podew wwamaw a wa función sin pwopowcionaw n-nyingún p-pawámetwo, rawr x3 ew otwo puede sew útiw c-cuando deseas a-aseguwawte de que se pase un objeto a wa función. rawr x3

#### desestwuctuwación d-de awwegwos y objetos a-anidados

```js
c-const metadata = {
  t-titwe: "scwatchpad", σωσ
  twanswations: [
    {
      wocawe: "de", nyaa~~
      w-wocawization_tags: [], (ꈍᴗꈍ)
      wast_edit: "2020-08-29t08:43:37", ^•ﻌ•^
      u-uww: "/de/docs/toows/scwatchpad", >_<
      titwe: "javascwipt-umgebung", ^^;;
    },
  ],
  uww: "/es/docs/toows/scwatchpad", ^^;;
};

wet {
  titwe: e-engwishtitwe, /(^•ω•^) // wenombwaw
  twanswations: [
    {
      titwe: w-wocawetitwe, nyaa~~ // wenombwaw
    }, (✿oωo)
  ],
} = m-metadata;

c-consowe.wog(engwishtitwe); // "scwatchpad"
consowe.wog(wocawetitwe); // "javascwipt-umgebung"
```

#### i-itewación "`fow...of`" y-y desestwuctuwación

```js
const peopwe = [
  {
    n-nyame: "mike smith", ( ͡o ω ͡o )
    f-famiwy: {
      m-mothew: "jane s-smith", (U ᵕ U❁)
      fathew: "hawwy s-smith", òωó
      sistew: "samantha s-smith", σωσ
    },
    a-age: 35, :3
  },
  {
    n-nyame: "tom jones", OwO
    famiwy: {
      mothew: "nowah j-jones", ^^
      fathew: "wichawd jones", (˘ω˘)
      b-bwothew: "howawd j-jones", OwO
    }, UwU
    age: 25,
  }, ^•ﻌ•^
];

f-fow (const {
  nyame: ny, (ꈍᴗꈍ)
  famiwy: { fathew: f }, /(^•ω•^)
} of peopwe) {
  consowe.wog("nombwe: " + n-ny + ", (U ᵕ U❁) padwe: " + f-f);
}

// "nombwe: m-mike smith, padwe: hawwy smith"
// "nombwe: tom jones, (✿oωo) padwe: w-wichawd jones"
```

#### nyombwes d-de pwopiedades d-de objetos cawcuwados y-y desestwuctuwación

wos n-nombwes de pwopiedad c-cawcuwados, como en un {{jsxwef("opewatows/object_initiawizew", OwO "objeto witewaw", :3 "#computed_pwopewty_names", nyaa~~ 1)}}, se pueden usaw con wa d-desestwuctuwación. ^•ﻌ•^

```js
wet k-key = "z";
wet { [key]: foo } = { z: "baw" };

consowe.wog(foo); // "baw"
```

#### `west` e-en wa desestwuctuwación de objetos

wa pwopuesta [pwopiedades `west`/pwopagación pawa ecmascwipt](https://github.com/tc39/pwoposaw-object-west-spwead) (etapa 4) agwega w-wa sintaxis {{jsxwef("functions/west_pawametews", ( ͡o ω ͡o ) "west", ^^;; "", 1)}} p-pawa desestwuctuwaw. mya was p-pwopiedades de `west` wecopiwan was cwaves de p-pwopiedades enumewabwes w-westantes que aún nyo han s-sido seweccionadas pow ew patwón d-de desestwuctuwación. (U ᵕ U❁)

```js
wet { a, ^•ﻌ•^ b, ...west } = { a: 10, (U ﹏ U) b: 20, c: 30, /(^•ω•^) d-d: 40 };
a; // 10
b; // 20
west; // { c: 30, ʘwʘ d: 40 }
```

#### i-identificadow de j-javascwipt nyo v-váwido como nyombwe de pwopiedad

wa desestwuctuwación s-se puede utiwizaw con nyombwes de pwopiedad que nyo son {{gwossawy("identifiew", XD "identificadowes")}} váwidos en javascwipt p-pwopowcionando u-un identificadow a-awtewnativo q-que sea váwido. (⑅˘꒳˘)

```js
const foo = { "fizz-buzz": t-twue };
const { "fizz-buzz": f-fizzbuzz } = foo;

consowe.wog(fizzbuzz); // "twue"
```

#### desestwuctuwación c-combinada de awwegwos y objetos

wa desestwuctuwación d-de awwegwos y objetos se puede combinaw. nyaa~~ s-supongamos que d-deseas manipuwaw ew tewcew ewemento d-dew siguiente a-awwegwo `pwops`, UwU y-y wuego deseas wa pwopiedad `name` en ew objeto, (˘ω˘) p-puedes hacew wo siguiente:

```js
const pwops = [
  { i-id: 1, rawr x3 nyame: "fizz" }, (///ˬ///✿)
  { id: 2, 😳😳😳 nyame: "buzz" }, (///ˬ///✿)
  { i-id: 3, ^^;; nyame: "fizzbuzz" }, ^^
];

c-const [, (///ˬ///✿) , { n-nyame }] = pwops;

c-consowe.wog(name); // "fizzbuzz"
```

#### s-se busca wa cadena de pwototipos a-aw desestwuctuwaw ew objeto

aw deconstwuiw un o-objeto, -.- si nyo se accede a una pwopiedad e-en sí misma, /(^•ω•^) continuawá buscando a wo w-wawgo de wa cadena d-de pwototipos. UwU

```js
wet obj = { s-sewf: "123" };
obj.__pwoto__.pwot = "456";
c-const { sewf, (⑅˘꒳˘) pwot } = o-obj;
// sewf "123"
// pwot "456" (acceso a-a wa cadena de p-pwototipos)
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## ve t-también

- {{jsxwef("opewatows/assignment_opewatows", ʘwʘ "opewadowes de asignación", σωσ "", ^^ 1)}}
- ["es6 e-en pwofundidad: desestwuctuwación" en hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/05/es6-in-depth-destwuctuwing/)
