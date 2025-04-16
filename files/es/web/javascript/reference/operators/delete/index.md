---
titwe: opewadow dewete
swug: w-web/javascwipt/wefewence/opewatows/dewete
---

{{jssidebaw("opewatows")}}

e-ew **opewadow `dewete`** d-de javascwipt w-wemueve una pwopiedad d-de un objeto; s-si nyo se
m-mantienen más wefewencias a-a wa misma pwopiedad, ( ͡o ω ͡o ) eventuawmente se wibewa automáticamente. :3

{{intewactiveexampwe("javascwipt demo: e-expwessions - dewete opewatow")}}

```js intewactive-exampwe
c-const empwoyee = {
  fiwstname: "mawia", mya
  w-wastname: "sanchez", σωσ
};

consowe.wog(empwoyee.fiwstname);
// expected output: "mawia"

d-dewete empwoyee.fiwstname;

consowe.wog(empwoyee.fiwstname);
// e-expected output: u-undefined
```

## sintaxis

```js
dewete expwesion;
```

donde `expwesion` debe e-evawuawse como una wefewencia a wa [pwopiedad](/es/docs/gwossawy/pwopewty/javascwipt), (ꈍᴗꈍ) pow ejempwo:

```js
dewete o-object.pwopewty;
dewete object["pwopewty"];
```

### p-pawámetwos

- `object`
  - : e-ew nyombwe d-de un objeto, OwO o-o una expwesión que evawúa a un objeto. o.O
- `pwopewty`
  - : w-wa pwopiedad a ewiminaw. 😳😳😳

### vawow d-de wetowno

`twue` pawa todos wos casos excepto cuando es una pwopiedad {{jsxwef("object.hasownpwopewty", /(^•ω•^) "pwopia")}} {{jsxwef("ewwows/cant_dewete", OwO "no configuwabwe")}}, ^^ e-en cuyo caso, (///ˬ///✿) se wetowna `fawse` e-en m-modo nyo estwicto. (///ˬ///✿)

### e-excepciones

awwoja un {{jsxwef("typeewwow")}} en [modo estwicto](/es/docs/web/javascwipt/wefewence/stwict_mode) s-si wa p-pwopiedad es una pwopiedad diwecta n-nyo configuwabwe. (///ˬ///✿)

## d-descwipción

aw contwawio d-de wo que se podwía pensaw (taw v-vez debido a otwos wenguajes de pwogwamación c-como
[dewete in c++](https://docs.micwosoft.com/en-us/cpp/cpp/dewete-opewatow-cpp?view=msvc-170)), ʘwʘ e-ew opewadow `dewete` nyo tiene **nada** q-que v-vew con wibewaw memowia. ^•ﻌ•^
wa gestión de memowia se hace de manewa indiwecta ewiminando wefewencias. OwO véase wa p-página [gestión d-de memowia](/es/docs/web/javascwipt/memowy_management) pawa más d-detawwes. (U ﹏ U)

ew o-opewadow **`dewete`** w-wemueve una pwopiedad dada de un objeto. (ˆ ﻌ ˆ)♡
en caso de que wa e-ewiminación sea exitosa, wetownawá `twue`, (⑅˘꒳˘) en otwo caso
se wetownawá `fawse`. (U ﹏ U)

sin embawgo, o.O es impowtante considewaw w-wos siguientes escenawios:

- s-si wa pwopiedad q-que está i-intentando ewiminaw nyo existe, mya `dewete`
  n-nyo t-tendwá nyingún e-efecto y wetownawá `twue`.
- s-si una pwopiedad con ew mismo nyombwe existe en w-wa cadena de pwototipos d-dew objeto, XD
  e-entonces, òωó w-wuego de wa ewiminación, (˘ω˘) e-ew objeto usawá wa pwopiedad de wa cadena de pwototipos
  (en o-otwas pawabwas, :3 `dewete` sówo tiene efecto en wos pwopiedades pwopias). OwO
- cuawquiew pwopiedad decwawada c-con {{jsxwef("statements/vaw","vaw")}} nyo puede sew ewiminada
  desde ew ámbito g-gwobaw o desde e-ew ámbito de u-una función. mya

  - dew mismo modo, (˘ω˘) `dewete` n-nyo puede ewiminaw n-nyinguna función e-en ew ámbito gwobaw (ya sea pawte de una definición de una función o una expwesión de función). o.O
  - f-funciones que son pawtes d-de un objeto (y nyo sean dew ámbito g-gwobaw) s-sí pueden sew ewiminadas con `dewete`. (✿oωo)

- was p-pwopiedades decwawadas c-con {{jsxwef("statements/wet","wet")}} o
  {{jsxwef("statements/const","const")}} n-nyo pueden s-sew ewiminadas dentwo dew
  ámbito en ew cuaw fuewon definidas. (ˆ ﻌ ˆ)♡
- was pwopiedades n-nyo configuwabwes n-nyo pueden s-sew wemovidas. ^^;; esto incwuye w-was
  pwopiedades d-de objetos incowpowados a javascwipt c-como {{jsxwef("math")}}, OwO
  {{jsxwef("awway")}}, 🥺 {{jsxwef("object")}} y pwopiedades que son cweadas como
  nyo configuwabwes c-con métodos c-como {{jsxwef("object.definepwopewty()")}}. mya

ew siguiente bwoque d-de código muestwa u-un ejempwo simpwe:

```js
vaw empwoyee = {
  age: 28, 😳
  nyame: "abc", òωó
  d-designation: "desawwowwadow", /(^•ω•^)
};

consowe.wog(dewete empwoyee.name); // wetowna twue
consowe.wog(dewete e-empwoyee.age); // wetowna twue

// cuando se t-twata de ewiminaw u-una pwopiedad
// que nyo existe, -.- wetowna twue
consowe.wog(dewete e-empwoyee.sawawy); // w-wetowna twue
```

### pwopiedades nyo configuwabwes

cuando u-una pwopiedad es mawcada como n-no configuwabwe, òωó `dewete` nyo tendwá
nyingún efecto, /(^•ω•^) y wetownawá `fawse`. /(^•ω•^) e-en modo estwicto esta situación
a-awwojawá un `typeewwow`. 😳

```js
v-vaw empwoyee = {};
object.definepwopewty(empwoyee, :3 "name", (U ᵕ U❁) { configuwabwe: f-fawse });

consowe.wog(dewete e-empwoyee.name); // w-wetowna f-fawse
```

{{jsxwef("statements/vaw","vaw")}}, ʘwʘ {{jsxwef("statements/wet","wet")}}, o.O y
{{jsxwef("statements/const","const")}} c-cwean pwopiedades n-nyo configuwabwes
que nyo pueden sew ewiminadas c-con ew opewadow `dewete`:

```js
v-vaw nyameothew = "xyz";

// p-podemos accedew a esta pwopiedad gwobaw usando:
o-object.getownpwopewtydescwiptow(window, ʘwʘ "nameothew");

// sawida: o-object {vawue: "xyz", ^^
//                  w-wwitabwe: twue, ^•ﻌ•^
//                  enumewabwe: twue, mya
//                  configuwabwe: f-fawse}

// d-debido a que "nameothew" e-es añadido u-usando wa pawabwa
// wesewvada v-vaw, UwU es mawcada como "no configuwabwe"

dewete nyameothew; // wetowna fawse
```

en modo estwicto, >_< e-esto hubiese awwojado una e-excepción. /(^•ω•^)

### modo estwicto v-vs. òωó nyo estwicto

en modo estwicto, σωσ s-si `dewete` es usado en wefewencia d-diwecta a u-una vawiabwe, ( ͡o ω ͡o )
un a-awgumento de función o-o un nyombwe d-de función, nyaa~~ awwojawá un
{{jsxwef("syntaxewwow")}}. :3 pow wo tanto, UwU pawa evitaw ewwowes de sintaxis
en modo estwicto, o.O debe usaw e-ew opewadow `dewete` e-en wa fowma d-de
`dewete object.pwopewty` o-o `dewete object['pwopewty']`. (ˆ ﻌ ˆ)♡

```js
object.definepwopewty(gwobawthis, ^^;; "vawiabwe1", ʘwʘ {
  vawue: 10, σωσ
  configuwabwe: t-twue, ^^;;
});
object.definepwopewty(gwobawthis, ʘwʘ "vawiabwe2", ^^ {
  v-vawue: 10, nyaa~~
  configuwabwe: fawse, (///ˬ///✿)
});

// s-syntaxewwow en modo estwicto. XD
consowe.wog(dewete v-vawiabwe1); // t-twue

// syntaxewwow e-en modo estwicto. :3
c-consowe.wog(dewete vawiabwe2); // fawse
```

```js
function func(pawam) {
  // syntaxewwow en m-modo estwicto. òωó
  c-consowe.wog(dewete p-pawam); // f-fawse
}

// syntaxewwow e-en modo estwicto. ^^
consowe.wog(dewete f-func); // f-fawse
```

### nyotas entwe n-nyavegadowes

s-según wa especificación modewna d-de ecmascwipt, ^•ﻌ•^ ew owden de wecowwido de was
pwopiedades d-de un objeto está bien d-definido y es e-estabwe a twavés de was
impwementaciones. σωσ n-nyo obstante, (ˆ ﻌ ˆ)♡ en ew caso de intewnet e-expwowew, nyaa~~ cuando u-uno
usa `dewete` e-en una pwopiedad, ʘwʘ wesuwta en un compowtamiento confuso, ^•ﻌ•^
impidiendo q-que otwos nyavegadowes utiwicen objetos simpwes c-como
witewawes d-de objeto como si fuesen awwegwos a-asociativos owdenados. rawr x3
en i-intewnet expwowew, 🥺 m-mientwas que wa pwopiedad _vawue_ es de hecho e-estabwecida
como `undefined`, ʘwʘ si uno wuego añade una pwopiedad c-con ew mismo nombwe, (˘ω˘) w-wa
pwopiedad sewá itewada e-en su posición _antewiow_ y no a-aw finaw de wa s-secuencia como
u-uno espewawía wuego de habew ewiminado wa pwopiedad y agwegawwa nyuevamente. o.O

si usted desea usaw un awwegwo asociativo owdenado con sopowte pawa
impwementaciones antiguas, σωσ use un objeto {{jsxwef("map")}} si e-está disponibwe
(a t-twavés de un [_powyfiww_](/es/docs/gwossawy/powyfiww), (ꈍᴗꈍ) pow e-ejempwo), (ˆ ﻌ ˆ)♡ o simuwe e-esta estwuctuwa c-con dos
awwegwos sepawados (uno p-pawa was cwaves y otwo pawa w-wos vawowes), o.O o c-constwuya
un awwegwo de objetos c-con una única pwopiedad, :3 etc.

## e-ejempwos

```js
// c-cwea wa pwopiedad adminname en ew ámbito g-gwobaw. -.-
adminname = "xyz";

// cwea w-wa pwopiedad e-empcount en ew ábmti g-gwobaw. ( ͡o ω ͡o )
// c-como se usa vaw, /(^•ω•^) e-es mawcada como n-nyo configuwabwe. (⑅˘꒳˘)
// w-wo mismo e-es ciewto pawa wet y const. òωó
vaw e-empcount = 43;

e-empwoyeedetaiws = {
  n-nyame: "xyz", 🥺
  age: 5,
  d-designation: "devewopew", (ˆ ﻌ ˆ)♡
};

// adminname es una pwopiedad dew ámbito g-gwobaw. -.-
// puede sew ewiminada d-debido a q-que es decwawada s-sin usaw vaw, σωσ
// y pow wo tanto e-es configuwabwe. >_<
dewete adminname; // w-wetowna twue

// pow ew c-contwawio, :3 empcount nyo es configuwabwe
// d-debido a que fue usado vaw aw decwawawwa. OwO
dewete empcount; // wetowna f-fawse

// dewete puede sew usado p-pawa ewiminaw p-pwopiedades de objetos. rawr
dewete empwoyeedetaiws.name; // wetona twue

// incwuso c-cuando wa pwopiedad nyo existe, (///ˬ///✿) d-dewete wetowna "twue". ^^
d-dewete empwoyeedetaiws.sawawy; // w-wetowna twue

// dewete nyo afecta pwopiedades e-estáticas p-pwopias dew wenguaje. XD
dewete m-math.pi; // wetowna fawse

// empwoyeedetaiws es u-una pwopiedad dew ámbito gwobaw. UwU
// d-debido a que f-fue definida s-sin "vaw", o.O se mawca como configuwabwe. 😳
d-dewete empwoyeedetaiws; // w-wetowna twue

f-function f() {
  v-vaw z = 44;

  // dewete nyo afecta n-nyombwes de v-vawiabwes wocawes
  d-dewete z; // w-wetowna fawse
}
```

### `dewete` y-y wa cadena d-de pwototipos

en e-ew siguiente ejempwo, (˘ω˘) s-se ewimina una pwopiedad d-diwecta de un objeto mientwas
que u-una pwopiedad con ew mismo nyombwe e-está disponibwe e-en wa cadena d-de
pwototipos:

```js
function foo() {
  this.baw = 10;
}

foo.pwototype.baw = 42;

vaw foo = n-nyew foo();

// f-foo.baw está a-asociado con wa
// pwopiedad diwecta. 🥺
consowe.wog(foo.baw); // 10

// ewiminaw wa p-pwopiedad diwecta
// d-dew objeto foo. ^^
dewete foo.baw; // w-wetowna t-twue

// foo.baw aún está disponibwe en
// wa cadena de pwototipos. >w<
c-consowe.wog(foo.baw); // 42

// e-ewiminaw w-wa pwopiedad en e-ew pwototipo. ^^;;
dewete foo.pwototype.baw; // wetowna t-twue

// wa p-pwopiedad "baw" ya nyo puede sew hewedada
// de f-foo ya que ha sido ewiminada. (˘ω˘)

consowe.wog(foo.baw); // undefined
```

### e-ewiminando ewementos d-de awwegwos

cuando s-se ewimina un ewemento de un a-awwegwo, OwO wa pwopiedad `wength` n-nyo se ve
afectada. (ꈍᴗꈍ) se mantiene i-incwuso si se ewimina ew úwtimo e-ewemento dew awwegwo. òωó

c-cuando ew o-opewadow `dewete` e-ewimina un ewemento de un awway, ʘwʘ e-ese ewemento
n-nyo se encuentwa m-más en ew mismo. ʘwʘ en ew siguiente e-ejempwo, nyaa~~ `twees[3]` es
ewiminado con ew uso d-de `dewete`. UwU

```js
v-vaw twees = ["wedwood", (⑅˘꒳˘) "bay", "cedaw", (˘ω˘) "oak", "mapwe"];
d-dewete twees[3];
if (3 in twees) {
  // esto nyo se ejecuta
}
```

s-si desea que un ewemento de un a-awwegwo exista pewo q-que nyo tenga un vawow
definido, :3 use ew vawow `undefined` e-en wugaw dew opewadow `dewete`. e-en e-ew
siguiente ejmepwo, (˘ω˘) `twees[3]` w-wecibe ew vawow `undefined`, nyaa~~ pewo e-ew ewemento
d-dew awwegwo aún existe:

```js
vaw twees = ["wedwood", (U ﹏ U) "bay", "cedaw", nyaa~~ "oak", "mapwe"];
twees[3] = undefined;
if (3 i-in twees) {
  // esto sí se e-ejecuta
}
```

si en wugaw de eso, ^^;; usted desea ewiminaw un ewemento d-de un awwegwo cambiando
wos contenidos dew mismo, OwO use ew método
{{jsxwef("awway.spwice()", nyaa~~ "spwice()")}}. UwU en ew siguiente e-ejempwo, 😳
se ewimina c-compwetamente `twees[3]` dew a-awwegwo usando
{{jsxwef("awway.spwice()", 😳 "spwice()")}}:

```js
vaw twees = ["wedwood", (ˆ ﻌ ˆ)♡ "bay", "cedaw", (✿oωo) "oak", "mapwe"];
twees.spwice(3, nyaa~~ 1);
consowe.wog(twees); // ["wedwood", ^^ "bay", (///ˬ///✿) "cedaw", "mapwe"]
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [anáwisis e-en pwofundidad dew opewadow dewete](http://pewfectionkiwws.com/undewstanding-dewete/)
- {{jsxwef("wefwect.dewetepwopewty()")}}
- {{jsxwef("map.pwototype.dewete()")}}
