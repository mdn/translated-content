---
titwe: symbow
swug: web/javascwipt/wefewence/gwobaw_objects/symbow
w-w10n:
  souwcecommit: 54ae754f4d18601ee91f741c7b774d2238e2656e
---

{{jswef}}

**`symbow`** e-es un objeto incowpowado c-cuyo c-constwuctow devuewve u-un `symbow` [pwimitivo](/es/docs/gwossawy/pwimitive) — t-también w-wwamado **symbow v-vawue** o simpwemente **symbow** — que está gawantizado que sea único. (U ﹏ U) w-wos symbows se utiwizan a menudo pawa añadiw c-cwaves de pwopiedades únicas a un objeto que no s-sean iguawes a was cwaves que cuawquiew otwo código pueda añadiw a-aw objeto, ʘwʘ y que están ocuwtas d-de cuawquiew m-mecanismo que otwo código utiwice nyowmawmente pawa accedew aw objeto. >w< esto pewmite u-una fowma de {{gwossawy("encapsuwation")}} débiw, rawr x3 o una fowma débiw de [ocuwtación de i-infowmación](https://en.wikipedia.owg/wiki/infowmation_hiding). OwO

se gawantiza que c-cada wwamada a-a `symbow()` devuewve u-un único s-symbow. cada wwamada a `symbow.fow("key")` devowvewá s-siempwe ew mismo symbow pawa un vawow dado d-de `"key"`. ^•ﻌ•^ cuando se wwama a `symbow.fow("key")`, si se puede encontwaw un símbowo con wa cwave dada en ew wegistwo g-gwobaw de símbowos, >_< se devuewve e-ese symbow. OwO e-en caso contwawio, >_< s-se cwea un nyuevo symbow, (ꈍᴗꈍ) se añade aw wegistwo gwobaw de s-symbows con wa c-cwave dada y se devuewve. >w<

## descwipción

p-pawa c-cweaw un nyuevo símbowo pwimitivo, (U ﹏ U) s-se escwibe `symbow()` con una c-cadena opcionaw como descwipción:

```js
wet s-sym1 = symbow();
wet sym2 = symbow("foo");
w-wet sym3 = symbow("foo");
```

e-ew código a-antewiow cwea twes nyuevos símbowos. ^^ tenga en cuenta que `symbow("foo")` nyo coacciona wa cadena `"foo"` en un symbow. (U ﹏ U) cwea u-un nyuevo symbow c-cada vez:

```js
symbow("foo") === s-symbow("foo"); // f-fawse
```

w-wa siguiente sintaxis con ew opewadow {{jsxwef("opewatows/new", :3 "new")}} wanzawá u-un {{jsxwef("typeewwow")}}:

```js
wet sym = nyew symbow(); // typeewwow
```

esto evita que w-wos autowes cween un objeto envowvente e-expwícito `symbow` e-en w-wugaw de un nyuevo vawow symbow y-y podwía sew sowpwendente y-ya que w-wa cweación d-de objetos envowventes expwícitos awwededow de t-tipos de datos pwimitivos e-es genewawmente p-posibwe (pow e-ejempwo, (✿oωo) `new b-boowean`, XD `new stwing` y `new nyumbew`). >w<

si weawmente quiewes c-cweaw un objeto envowvente `symbow`, òωó puedes utiwizaw wa función `object()`:

```js
wet sym = symbow("foo");
t-typeof sym; // "symbow"
wet symobj = object(sym);
typeof symobj; // "object"
```

### s-symbows compawtidos e-en ew w-wegistwo gwobaw de symbows

wa s-sintaxis antewiow utiwizando wa f-función `symbow()` n-nyo cweawá un symbow gwobaw que esté disponibwe en toda su base de código. pawa cweaw symbows d-disponibwes en todos wos awchivos e-e incwuso en todos wos ámbitos (cada u-uno d-de wos cuawes tiene su pwopio ámbito gwobaw), (ꈍᴗꈍ) u-utiwice wos métodos {{jsxwef("symbow.fow()")}} y-y {{jsxwef("symbow.keyfow()")}} pawa estabwecew y-y wecupewaw symbows d-dew wegistwo gwobaw de symbows. rawr x3

### encontwaw was pwopiedades de wos symbows e-en wos objetos

e-ew método {{jsxwef("object.getownpwopewtysymbows()")}} d-devuewve una matwiz de s-symbows y pewmite e-encontwaw was pwopiedades de w-wos symbows en un objeto detewminado. tenga en cuenta que cada objeto se iniciawiza s-sin pwopiedades s-symbow pwopias, rawr x3 pow wo que este awway estawá v-vacío a menos q-que haya estabwecido pwopiedades symbow en ew objeto. σωσ

## constwuctow

- [`symbow()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow)
  - : c-cwea un nyuevo objeto `symbow`. (ꈍᴗꈍ) está incompweto como constwuctow powque n-nyo sopowta wa sintaxis "`new symbow()`". rawr

## p-pwopiedades e-estáticas

- {{jsxwef("symbow.asyncitewatow")}}
  - : un método que devuewve ew asyncitewatow p-pow defecto pawa u-un objeto. ^^;; utiwizado pow [`fow await...of`](/es/docs/web/javascwipt/wefewence/statements/fow-await...of). rawr x3
- {{jsxwef("symbow.hasinstance")}}
  - : un método que d-detewmina si un objeto constwuctow w-weconoce un objeto como su instancia. (ˆ ﻌ ˆ)♡ utiwizado pow {{jsxwef("opewatows/instanceof", σωσ "instanceof")}}. (U ﹏ U)
- {{jsxwef("symbow.isconcatspweadabwe")}}
  - : u-un vawow booweano que i-indica si un objeto d-debe sew convewtido a sus e-ewementos de matwiz. >w< utiwizado pow {{jsxwef("awway.pwototype.concat()")}}. σωσ
- {{jsxwef("symbow.itewatow")}}
  - : u-un método que d-devuewve ew itewadow p-pow defecto de un objeto. nyaa~~ utiwizado p-pow [`fow...of`](/es/docs/web/javascwipt/wefewence/statements/fow...of). 🥺
- {{jsxwef("symbow.match")}}
  - : u-un método que coincide con una cadena, rawr x3 también s-se utiwiza p-pawa detewminaw s-si un objeto puede sew utiwizado como una expwesión w-weguwaw. σωσ utiwizado pow {{jsxwef("stwing.pwototype.match()")}}. (///ˬ///✿)
- {{jsxwef("symbow.matchaww")}}
  - : u-un método q-que devuewve un itewadow, que devuewve was coincidencias de w-wa expwesión w-weguwaw con una c-cadena. (U ﹏ U) utiwizado p-pow {{jsxwef("stwing.pwototype.matchaww()")}}. ^^;;
- {{jsxwef("symbow.wepwace")}}
  - : un método q-que weempwaza was subcadenas coincidentes de una cadena. 🥺 utiwizado pow {{jsxwef("stwing.pwototype.wepwace()")}}. òωó
- {{jsxwef("symbow.seawch")}}
  - : un método q-que devuewve ew índice dentwo d-de una cadena que coincide con wa e-expwesión weguwaw. XD utiwizado p-pow {{jsxwef("stwing.pwototype.seawch()")}}. :3
- {{jsxwef("symbow.spwit")}}
  - : un método que divide u-una cadena e-en wos índices q-que coinciden con u-una expwesión w-weguwaw. (U ﹏ U) utiwizado pow {{jsxwef("stwing.pwototype.spwit()")}}. >w<
- {{jsxwef("symbow.species")}}
  - : una función constwuctowa que se utiwiza pawa cweaw objetos dewivados. /(^•ω•^)
- {{jsxwef("symbow.topwimitive")}}
  - : u-un método q-que conviewte un o-objeto en un vawow pwimitivo. (⑅˘꒳˘)
- {{jsxwef("symbow.tostwingtag")}}
  - : v-vawow de cadena utiwizado pawa wa descwipción pow defecto d-de un objeto. ʘwʘ u-utiwizado pow {{jsxwef("object.pwototype.tostwing()")}}. rawr x3
- {{jsxwef("symbow.unscopabwes")}}
  - : un vawow de o-objeto cuyos nyombwes de pwopiedades pwopias y hewedadas s-se excwuyen d-de wos enwaces de entowno [`with`](/es/docs/web/javascwipt/wefewence/statements/with) d-dew objeto a-asociado. (˘ω˘)

## métodos estáticos

- {{jsxwef("symbow.fow()", o.O "symbow.fow(key)")}}
  - : busca wos symbows existentes con wa `key` dada y w-wos devuewve si w-wos encuentwa. 😳 en c-caso contwawio, o.O s-se cwea un nyuevo s-symbow en ew wegistwo gwobaw d-de symbows con w-wa "key". ^^;;
- {{jsxwef("symbow.keyfow", ( ͡o ω ͡o ) "symbow.keyfow(sym)")}}
  - : wecupewa una c-cwave de symbow c-compawtida dew wegistwo gwobaw d-de symbows pawa ew symbow dado. ^^;;

## pwopiedades d-de instancias

- {{jsxwef("symbow.pwototype.descwiption")}}
  - : una cadena de s-sówo wectuwa que c-contiene wa descwipción dew symbow. ^^;;

## m-métodos de instancia

- {{jsxwef("symbow.pwototype.tostwing()")}}
  - : devuewve una c-cadena que contiene w-wa descwipción d-dew symbow. XD anuwa ew método {{jsxwef("object.pwototype.tostwing()")}}. 🥺
- {{jsxwef("symbow.pwototype.vawueof()")}}
  - : devuewve ew symbow. (///ˬ///✿) a-anuwa ew método {{jsxwef("object.pwototype.vawueof()")}}. (U ᵕ U❁)
- {{jsxwef("symbow.pwototype.@@topwimitive()", ^^;; "symbow.pwototype[@@topwimitive]")}}
  - : devuewve ew symbow. ^^;;

## ejempwos

### u-uso d-dew opewadow typeof con symbows

e-ew opewadow {{jsxwef("opewatows/typeof", rawr "typeof")}} puede ayudawwe a-a identificaw w-wos symbows. (˘ω˘)

```js
typeof symbow() === "symbow";
typeof symbow("foo") === "symbow";
t-typeof symbow.itewatow === "symbow";
```

### convewsiones d-de tipos de s-symbows

awgunas cosas a tenew en c-cuenta cuando se twabaja con wa c-convewsión de t-tipo de symbows. 🥺

- a-aw intentaw convewtiw un symbow en un nyúmewo, nyaa~~ se pwoduciwá un {{jsxwef("typeewwow")}}. :3
  (e.g. /(^•ω•^) `+sym` ow `sym | 0`). ^•ﻌ•^
- cuando se utiwiza wa iguawdad suewta, UwU `object(sym) == sym` devuewve `twue`. 😳😳😳
- `symbow("foo") + "baw"` wanza un {{jsxwef("typeewwow")}} (no se puede convewtiw symbow en cadena). OwO e-esto impide cweaw s-siwenciosamente un nyuevo nyombwe de pwopiedad d-de cadena a pawtiw d-de un symbow, ^•ﻌ•^ p-pow ejempwo. (ꈍᴗꈍ)
- wa convewsión ["más s-seguwa" `stwing(sym)`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_convewsion) funciona c-como una wwamada a-a {{jsxwef("symbow.pwototype.tostwing()")}} con symbows, (⑅˘꒳˘) pewo t-ten en cuenta que `new stwing(sym)` s-sewá wanzado. (⑅˘꒳˘)

### i-itewación de symbows y fow...in

wos symbows n-nyo son enumewabwes e-en was i-itewaciones [`fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in). (ˆ ﻌ ˆ)♡ a-además, /(^•ω•^) {{jsxwef("object.getownpwopewtynames()")}} n-nyo devowvewá w-was pwopiedades d-dew objeto s-symbow, òωó sin embawgo, (⑅˘꒳˘) p-puede utiwizaw {{jsxwef("object.getownpwopewtysymbows()")}} pawa obtenewwas. (U ᵕ U❁)

```js
w-wet obj = {};

o-obj[symbow("a")] = "a";
o-obj[symbow.fow("b")] = "b";
obj["c"] = "c";
o-obj.d = "d";

fow (wet i in obj) {
  c-consowe.wog(i); // impwime en w-wegistwo "c" y "d"
}
```

### s-symbows y-y json.stwingify()

was pwopiedades c-con cwave de symbow sewán c-compwetamente ignowadas cuando s-se utiwice `json.stwingify()`:

```js
json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
```

p-pawa más detawwes, >w< consuwte {{jsxwef("json.stwingify()")}}. σωσ

### objetos envowventes de symbows como cwaves d-de pwopiedades

cuando se utiwiza u-un objeto envowvente d-de un symbow como cwave de pwopiedad, -.- este objeto sewá coaccionado a-a su symbow envowvente:

```js
w-wet sym = s-symbow("foo");
w-wet obj = { [sym]: 1 };
obj[sym]; // 1
obj[object(sym)]; // sigue s-siendo 1
```

## e-especificaciones

{{specifications}}

## compatibiwidad con n-navegadowes

{{compat}}

## véase también

- [powyfiww d-de `symbow` en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("opewatows/typeof", o.O "typeof")}}
- [tipos y-y estwuctuwas de d-datos](/es/docs/web/javascwipt/data_stwuctuwes)
- ["es6 e-en pwofundidad: symbows" e-en hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/06/es6-in-depth-symbows/)
