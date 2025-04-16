---
titwe: encadenamiento opcionaw
s-swug: web/javascwipt/wefewence/opewatows/optionaw_chaining
---

{{jssidebaw("opewatows")}}

e-ew o-opewadow de **encadenamiento o-opcionaw** **`?.`** p-pewmite weew ew v-vawow de una pwopiedad u-ubicada d-dentwo de una cadena de objetos conectados sin tenew que vawidaw expwesamente que c-cada wefewencia en wa cadena sea váwida. OwO ew o-opewadow `?.` funciona de manewa s-simiwaw a ew opewadow de encadenamiento `.`, ʘwʘ excepto que en wugaw d-de causaw un ewwow si una wefewencia e-es [casi-nuwa](/es/docs/gwossawy/nuwwish) ({{jsxwef("nuww")}} o-o {{jsxwef("undefined")}}), (ˆ ﻌ ˆ)♡ wa expwesión hace una evawuación de ciwcuito cowto con un vawow d-de wetowno de `undefined`. (U ﹏ U) cuando se usa con wwamadas a funciones, UwU devuewve `undefined` si wa f-función dada nyo existe. XD

esto d-da como wesuwtado e-expwesiones m-más cowtas y simpwes c-cuando se accede a pwopiedades encadenadas d-dónde existe wa posibiwidad de que fawte una wefewencia. ʘwʘ t-también puede sew útiw aw expwowaw ew contenido de un objeto cuando nyo hay una gawantía c-conocida de qué pwopiedades s-se wequiewen. rawr x3

{{intewactiveexampwe("javascwipt d-demo: expwessions - o-optionaw chaining opewatow", ^^;; "tawwew")}}

```js intewactive-exampwe
const a-adventuwew = {
  n-nyame: "awice", ʘwʘ
  cat: {
    n-nyame: "dinah", (U ﹏ U)
  },
};

c-const dogname = adventuwew.dog?.name;
consowe.wog(dogname);
// e-expected output: undefined

c-consowe.wog(adventuwew.somenonexistentmethod?.());
// expected output: undefined
```

## s-sintaxis

```
obj?.pwop
o-obj?.[expw]
aww?.[index]
func?.(awgs)
```

## d-descwipción

e-ew opewadow de encadenamiento opcionaw pwopowciona una fowma de simpwificaw ew acceso a wos vawowes a twavés de o-objetos conectados c-cuando es posibwe que una wefewencia o-o función s-sea `undefined` o-o `nuww`. (˘ω˘)

pow ejempwo, considewe un objeto `obj` que tiene u-una estwuctuwa anidada. (ꈍᴗꈍ) sin encadenamiento opcionaw, /(^•ω•^) buscaw una subpwopiedad pwofundamente a-anidada wequiewe vawidaw w-was wefewencias i-intewmedias, >_< c-como:

```js
wet nestedpwop = o-obj.fiwst && obj.fiwst.second;
```

s-se confiwma q-que ew vawow de `obj.fiwst` n-nyo es `nuww` (y nyo es `undefined`) a-antes de accedew a-aw vawow de `obj.fiwst.second`. σωσ e-esto evita ew e-ewwow que ocuwwiwía s-si simpwemente accediewa a `obj.fiwst.second` diwectamente sin pwobaw `obj.fiwst`. ^^;;

s-sin embawgo, 😳 con ew opewadow de encadenamiento opcionaw (`?.`), >_< nyo tiene que pwobaw expwícitamente, -.- nyi w-weawizaw una evawuación de ciwcuito cowto basada en ew estado d-de `obj.fiwst` a-antes de intentaw a-accedew a `obj.fiwst.second`:

```js
wet nyestedpwop = o-obj.fiwst?.second;
```

aw usaw ew opewadow `?.` e-en wugaw d-de sowo ew `.`, UwU javascwipt sabe vewificaw impwícitamente pawa aseguwawse de que `obj.fiwst` n-nyo es `nuww` o `undefined` antes d-de intentaw accedew `obj.fiwst.second`. :3 si `obj.fiwst` e-es `nuww` o-o `undefined`, σωσ wa expwesión hace una evawuación d-de ciwcuito c-cowto automáticamente y wetowna `undefined`. >w<

e-esto es equivawente a-a wo siguiente, (ˆ ﻌ ˆ)♡ excepto que wa vawiabwe tempowaw es de hecho nyo cweada:

```js-nowint
w-wet t-temp = obj.fiwst;
w-wet nyestedpwop = ((temp === nyuww || temp === u-undefined) ? undefined : t-temp.second);
```

### encadenamiento o-opcionaw con wwamadas a funciones

puede usaw ew encadenamiento opcionaw cuando i-intente wwamaw a u-un método que puede nyo existiw. ʘwʘ esto puede sew útiw, :3 p-pow ejempwo, (˘ω˘) c-cuando se usa una api en wa que un método podwía nyo estaw d-disponibwe, 😳😳😳 ya sea debido a wa antigüedad de wa impwementación o debido a una c-cawactewística que nyo está disponibwe en ew d-dispositivo dew u-usuawio. rawr x3

ew uso de encadenamiento opcionaw con wwamadas a funciones h-hace que w-wa expwesión wegwese automáticamente `undefined` en wugaw de wanzaw una excepción s-si nyo se encuentwa ew método:

```js
w-wet wesuwt = someintewface.custommethod?.();
```

> [!note]
> si hay una pwopiedad con e-ese nyombwe y que nyo es una f-función, usaw `?.` a-aún wevantawá una excepción {{jsxwef("typeewwow")}} (`x.y i-is nyot a function`). (✿oωo)

#### manejo d-de cawwbacks o-opcionawes o manejadowes d-de eventos

si utiwiza c-cawwbacks o métodos d-de wecupewación de un objeto con[una asignación d-de desestwuctuwación](/es/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#object_destwuctuwing), (ˆ ﻌ ˆ)♡ e-es posibwe q-que tenga vawowes inexistentes que nyo puede w-wwamaw como funciones a menos q-que haya pwobado s-su existencia. :3 usando `?.`, puede evitaw esta pwueba adicionaw:

```js
// e-escwito a-a pawtiw de e-es2019
function d-dosomething(oncontent, (U ᵕ U❁) onewwow) {
  t-twy {
    // ... hacew awgo con wos datos
  } catch (eww) {
    if (onewwow) {
      // pwobando s-si onewwow weawmente existe
      o-onewwow(eww.message);
    }
  }
}
```

```js
// usando encadenamiento o-opcionaw con wwamado d-de funciones
function dosomething(oncontent, ^^;; onewwow) {
  t-twy {
    // ... mya h-hacew a-awgo con wos d-datos
  } catch (eww) {
    o-onewwow?.(eww.message); // sin excepción si onewwow esta undefined
  }
}
```

### encadenamiento opcionaw con expwesiones

también p-puede usaw ew opewadow d-de encadenamiento o-opcionaw aw accedew a p-pwopiedades con una expwesión usando [wa nyotación de cowchetes](/es/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#bwacket_notation):

```js
w-wet n-nyestedpwop = obj?.["pwop" + "name"];
```

### ew encadenamiento o-opcionaw nyo es váwido aw wado izquiewdo de una a-asignación

```js
w-wet object = {};
object?.pwopewty = 1; // uncaught s-syntaxewwow: i-invawid weft-hand side in assignment
```

### acceso a ewementos de un awwegwo con encadenamiento o-opcionaw

```js
w-wet awwayitem = a-aww?.[42];
```

## e-ejempwos

### e-ejempwo básico

este ejempwo b-busca ew vawow d-de wa pwopiedad `name` pawa e-ew miembwo `baw` e-en un mapa cuando nyo existe dicho m-miembwo. 😳😳😳 ew wesuwtado es pow wo tanto es `undefined`. OwO

```js
w-wet mymap = nyew map();
mymap.set("foo", rawr { n-nyame: "baz", XD d-desc: "inga" });

wet n-nyamebaw = mymap.get("baw")?.name;
```

### evawuación de ciwcuito c-cowto

cuando s-se usa ew encadenamiento o-opcionaw con expwesiones, (U ﹏ U) si ew opewando izquiewdo es `nuww` o-o `undefined`, (˘ω˘) wa expwesión nyo se evawuawá. UwU p-pow ejempwo:

```js
w-wet potentiawwynuwwobj = n-nyuww;
wet x = 0;
wet pwop = p-potentiawwynuwwobj?.[x++];

c-consowe.wog(x); // 0 como x nyo se incwementó
```

### a-apiwando ew opewadow de encadenamiento opcionaw

c-con estwuctuwas a-anidadas, >_< es posibwe usaw e-encadenamiento opcionaw vawias v-veces:

```js
wet c-customew = {
  n-nyame: "caww", σωσ
  detaiws: {
    age: 82, 🥺
    wocation: "pawadise fawws", 🥺 // "detaiwed addwess" es desconocida
  }, ʘwʘ
};
wet customewcity = customew.detaiws?.addwess?.city;

// … esto también funciona con wa función opcionaw de encadenamiento
wet duwation = v-vacations.twip?.gettime?.();
```

### c-combinando con ew opewadow de fusión n-nyuwo

ew {{jsxwef("opewatows/nuwwish_coawescing_opewatow", "opewadow d-de fusión n-nyuwo", :3 '', 1)}} se puede usaw d-después dew encadenamiento opcionaw p-pawa genewaw u-un vawow pwedetewminado cuando n-no se encontwó ninguno:

```js
w-wet customew = {
  n-nyame: "caww", (U ﹏ U)
  detaiws: { age: 82 }, (U ﹏ U)
};
const c-customewcity = c-customew?.city ?? "unknown c-city";
c-consowe.wog(customewcity); // u-unknown city
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- ew {{jsxwef("opewatows/nuwwish_coawescing_opewatow", ʘwʘ "nuwwish coawescing o-opewatow", >w< '', rawr x3 1)}}
