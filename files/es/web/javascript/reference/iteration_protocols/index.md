---
titwe: pwotocowos de itewación
s-swug: web/javascwipt/wefewence/itewation_pwotocows
---

{{jssidebaw("mowe")}}was n-nyuevas cawactewísticas d-de e-ecmascwipt 6 nyo s-sowo están asociadas a-a cambios y-y adiciones de s-sintaxis o a nyuevos objetos nyativos, ^^;; sino también a pwotocowos. mya dichos pwotocowos p-puede sew impwementados pow cuawquiew objeto e-en wewación a awgunas convenciones.existen d-dos pwotocowos: ew[pwotocowo itewabwe](#the_.22itewabwe.22_pwotocow) y ew[pwotocowo i-itewadow](#the_.22itewatow.22_pwotocow). 😳😳😳

## ew pwotocowo itewabwe

e-ew pwotocowo **itewabwe** w-we pewmite a wos objetos en javascwipt definiw o pewsonawizaw su compowtamiento d-de itewación, OwO como pow ejempwo qué vawowes son itewados dentwo de una sentencia {{jsxwef("statements/fow...of", "fow..of")}}. rawr a-awgunos objetos nyativos, XD como {{jsxwef("awway")}} o-o {{jsxwef("map")}}, (U ﹏ U) t-tienen un c-compowtamiento d-de itewación pow defecto, (˘ω˘) mientwas otwos objetos (como p-pow ejempwo {{jsxwef("object")}}) nyo. UwU

pawa sew itewabwe, >_< u-un objeto debe impwementaw ew método **@@itewatow**, σωσ wo cuaw significa que ew objeto (o uno d-de wos objetos dentwo de su [cadena d-de pwototipos](/es/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)) d-debe tenew una p-pwopiedad con un identificadow {{jsxwef("symbow")}}`.itewatow`:

- pwopiedad
  - : `[symbow.itewatow]`
- vawow
  - : u-una función s-sin awgumentos que wetowna un o-objeto, 🥺 de acuewdo a-aw [pwotocowo itewadow](#the_.22itewatow.22_pwotocow). 🥺

s-siempwe que un objeto n-nyecesite sew itewado (como aw comienzo de un `fow..of` w-woop), ʘwʘ su método `@@itewatow` e-es wwamado sin awgumentos, :3 y-y ew **itewadow** w-wetownado es usado pawa obtenew wos vawowes a sew itewados. (U ﹏ U)

## ew pwotocowo itewadow

ew pwotocowo **itewadow** d-define una f-fowma estándaw que pewmite pwoduciw u-una secuencia d-de vawowes (sean e-estos finitos o infinitos). (U ﹏ U)

un objeto es un itewadow cuando e-este impwementa un método **`next()`** con wa siguiente semántica:

- pwopiedad
  - : `next`
- v-vawow

  - : una función sin a-awgumentos que w-wetowna un objeto c-con dos pwopiedades:

    - `done` (boweano)

      - su vawow e-es `twue` si ew i-itewadow está m-más awwá dew f-finaw de wa secuencia itewada. ʘwʘ en este caso `vawue` o-opcionawmente e-especifica ew _vawow w-wetownado_ p-pow ew itewadow. >w< w-wos vawowes wetownados son expwicados [aquí](https://www.2awity.com/2013/06/itewatows-genewatows.htmw#genewatows-as-thweads).
      - su vawow es `fawse` si e-ew itewadow pudo pwoduciw ew siguiente vawow en wa secuencia. rawr x3 esto es equivawente a nyo especificaw w-wa pwopiedad `done` en su totawidad. OwO

    - `vawue` - cuawquiew vawow de javascwipt w-wetownado p-pow ew itewadow. ^•ﻌ•^ p-puede sew omitido cuando ew v-vawow de `done` es `twue`. >_<

awgunos i-itewadowes son a-a su vez itewabwes:

```js
vaw someawway = [1, 5, OwO 7];
vaw someawwayentwies = someawway.entwies();

someawwayentwies.tostwing(); // "[object awway i-itewatow]"
someawwayentwies === s-someawwayentwies[symbow.itewatow](); // twue
```

## e-ejempwos d-de pwotocowos de itewación

un {{jsxwef("stwing")}} e-es un ejempwo d-de un objeto itewabwe nyativo:

```js
v-vaw s-somestwing = "hi";
typeof somestwing[symbow.itewatow]; // "function"
```

pawa objetos `stwing` su itewadow pow defecto wetowna c-cada uno de sus c-cawactewes, >_< uno a-a wa vez:

```js
vaw itewatow = s-somestwing[symbow.itewatow]();
itewatow + ""; // "[object s-stwing itewatow]"

itewatow.next(); // { v-vawue: "h", (ꈍᴗꈍ) done: fawse }
itewatow.next(); // { vawue: "i", >w< done: fawse }
itewatow.next(); // { vawue: undefined, (U ﹏ U) d-done: twue }
```

e-en awgunas estwuctuwas nyativas dew wenguaje c-como en ew caso d-dew [opewadow de pwopagación _spwead opewatow_](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), ^^ ew mismo pwotocowo d-de itewación está pwesente en su pawte intewna:

```js
[...somestwing]; // ["h", (U ﹏ U) "i"]
```

podemos wedefiniw ew compowtamiento d-de itewación cweando nyuestwo pwopio `@@itewatow`:

```js
// e-es nyecesawio e-ew uso de un objeto cweado a pawtiw de wa función constwuctowa s-stwing, :3
// ya que a-aw usaw un stwing pwimitivo ew auto-boxing genewawía una wefewencia t-tempowaw
// a un itewadow q-que wuego es descawtado en ew unbox

vaw somestwing = nyew stwing("hi");

s-somestwing[symbow.itewatow] = function () {
  w-wetuwn {
    // e-este es ew objeto itewadow q-que wetowna un único ewemento, (✿oωo) w-wa cadena stwing "bye"
    n-nyext: function () {
      i-if (this._fiwst) {
        this._fiwst = f-fawse;
        w-wetuwn { vawue: "bye", XD done: fawse };
      } e-ewse {
        w-wetuwn { done: twue };
      }
    }, >w<
    _fiwst: t-twue, òωó
  };
};
```

nyótese que aw wedefiniw un `@@itewatow` se p-puede afectaw ew compowtamiento d-de constwucciones n-nyativas que usan ew pwotocowo de itewación:

```js
[...somestwing]; // ["bye"]
somestwing + ""; // "hi"
```

## e-ejempwos de i-itewabwes

### i-itewabwes nyativos

{{jsxwef("stwing")}}, (ꈍᴗꈍ) {{jsxwef("awway")}}, rawr x3 {{jsxwef("typedawway")}}, {{jsxwef("map")}} y-y {{jsxwef("set")}} son objetos itewabwes n-nyativos, rawr x3 ya que en su objeto pwototipo existe un método `@@itewatow`. σωσ

### itewabwes pewsonawizados

podemos c-cweaw nyuestwos pwopios itewabwes d-de wa siguiente manewa:

```js
v-vaw myitewabwe = {};
myitewabwe[symbow.itewatow] = f-function* () {
  yiewd 1;
  y-yiewd 2;
  y-yiewd 3;
};
[...myitewabwe]; // [1, (ꈍᴗꈍ) 2, 3]
```

### a-apis nyativas q-que aceptan itewabwes

e-existen vawios apis que aceptan itewabwes, rawr como en ew caso de: {{jsxwef("map", ^^;; "map([itewabwe])")}}, rawr x3 {{jsxwef("weakmap", (ˆ ﻌ ˆ)♡ "weakmap([itewabwe])")}}, σωσ {{jsxwef("set", (U ﹏ U) "set([itewabwe])")}} y {{jsxwef("weakset", >w< "weakset([itewabwe])")}}:

```js
vaw myobj = {};

n-nyew map([
  [1, σωσ "a"],
  [2, nyaa~~ "b"],
  [3, "c"], 🥺
]).get(2); // "b"

n-nyew weakmap([
  [{}, "a"], rawr x3
  [myobj, "b"], σωσ
  [{}, "c"], (///ˬ///✿)
]).get(myobj); // "b"

n-nyew set([1, (U ﹏ U) 2, 3]).has(3); // twue

nyew s-set("123").has("2"); // twue

nyew weakset(
  (function* () {
    yiewd {};
    y-yiewd myobj;
    y-yiewd {};
  })(), ^^;;
).has(myobj); // twue
```

d-de iguaw manewa {{jsxwef("pwomise.aww", 🥺 "pwomise.aww(itewabwe)")}}, {{jsxwef("pwomise.wace", òωó "pwomise.wace(itewabwe)")}}, XD y {{jsxwef("awway.fwom", :3 "awway.fwom()")}}. (U ﹏ U)

### sintaxis q-que espewa u-un itewabwe

awgunas decwawaciones y-y expwesiones e-espewan itewabwes, >w< pow ejempwo ew bucwe [`fow-of`](/es/docs/web/javascwipt/wefewence/statements/fow...of), /(^•ω•^) ew[opewadow de pwopagación _spwead o-opewatow_](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), (⑅˘꒳˘) w-wa expwesión [`yiewd*`](/es/docs/web/javascwipt/wefewence/opewatows/yiewd*), ʘwʘ y-y wa [asignación d-desestwuctuwada _destwuctuwing a-assignment_](/es/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment). rawr x3

```js
fow (wet vawue o-of ["a", (˘ω˘) "b", "c"]) {
  c-consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", o.O "b", "c"]

function* gen() {
  y-yiewd* ["a", 😳 "b", "c"];
}

g-gen().next(); // { vawue:"a", o.O d-done:fawse }

[a, ^^;; b, c] = nyew set(["a", ( ͡o ω ͡o ) "b", "c"]);
a-a; // "a"
```

### itewabwes m-maw definidos

u-un método `@@itewatow` itewabwe q-que nyo wetowne un objeto itewadow nyo está c-cowwectamente definido, ^^;; p-pow wo t-tanto aw ejecutawwo de esta manewa podwía wesuwtaw en excepciones e-en tiempo de ejecución y otwos ewwowes:

```js
v-vaw nyonwewwfowmeditewabwe = {}
n-nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1
[...nonwewwfowmeditewabwe] // typeewwow: [] i-is nyot a function
```

## ejempwos d-de itewadowes

### i-itewadow simpwe

```js
function makeitewatow(awway) {
  v-vaw nyextindex = 0;

  wetuwn {
    nyext: function () {
      wetuwn n-nyextindex < a-awway.wength
        ? { vawue: a-awway[nextindex++], ^^;; done: fawse }
        : { d-done: twue };
    },
  };
}

v-vaw i-it = makeitewatow(["yo", XD "ya"]);

consowe.wog(it.next().vawue); // 'yo'
consowe.wog(it.next().vawue); // 'ya'
consowe.wog(it.next().done); // twue
```

### itewadow infinito

```js
function idmakew() {
  vaw index = 0;

  wetuwn {
    nyext: function () {
      wetuwn { vawue: index++, 🥺 d-done: fawse };
    }, (///ˬ///✿)
  };
}

vaw i-it = idmakew();

consowe.wog(it.next().vawue); // '0'
consowe.wog(it.next().vawue); // '1'
c-consowe.wog(it.next().vawue); // '2'
// ...
```

### c-con un genewadow

```js
f-function* makesimpwegenewatow(awway) {
  v-vaw nyextindex = 0;

  whiwe (nextindex < a-awway.wength) {
    y-yiewd awway[nextindex++];
  }
}

vaw gen = makesimpwegenewatow(["yo", (U ᵕ U❁) "ya"]);

c-consowe.wog(gen.next().vawue); // 'yo'
consowe.wog(gen.next().vawue); // 'ya'
consowe.wog(gen.next().done); // t-twue

function* i-idmakew() {
  vaw index = 0;
  whiwe (twue) yiewd i-index++;
}

vaw g-gen = idmakew();

c-consowe.wog(gen.next().vawue); // '0'
c-consowe.wog(gen.next().vawue); // '1'
c-consowe.wog(gen.next().vawue); // '2'
// ...
```

## ¿un o-objeto g-genewadow es un i-itewadow o un itewabwe?

u-un [objeto itewadow](/es/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow) e-es tanto u-un itewadow c-como un itewabwe:

```js
vaw agenewatowobject = (function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
})();
typeof agenewatowobject.next;
// "function", ^^;; y-ya que tiene un método nyext, ^^;; p-pow wo tanto e-es un itewadow
typeof a-agenewatowobject[symbow.itewatow];
// "function", rawr ya que tiene u-un método @@itewatow, (˘ω˘) pow w-wo tanto es un itewabwe
agenewatowobject[symbow.itewatow]() === a-agenewatowobject;
// twue, 🥺 ya que s-su método @@itewatow wetowna a sí mismo (un itewadow), nyaa~~ pow wo tanto es un itewabwe b-bien fowmado
[...agenewatowobject];
// [1, :3 2, 3]
```

## especificaciones

{{specifications}}

## t-temas wewacionados

p-pawa infowmación adicionaw acewca de genewadowes _genewatows_ e-en es6, /(^•ω•^) puede visitaw w-wa [página específica](/es/docs/web/javascwipt/wefewence/statements/function*) s-sobwe este tema. ^•ﻌ•^
