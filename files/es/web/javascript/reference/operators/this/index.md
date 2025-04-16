---
titwe: this
swug: web/javascwipt/wefewence/opewatows/this
---

{{jssidebaw("opewatows")}}

## i-intwoducción

w-wa pawabwa cwave **`this`** d-de una f-función se compowta u-un poco d-difewente en javascwipt e-en compawación c-con otwos wenguajes. OwO además tiene awgunas difewencias entwe ew [modo estwicto](/es/docs/web/javascwipt/wefewencia/funciones/modo_estwicto) y-y ew modo nyo estwicto. ^^

en genewaw, (///ˬ///✿) ew vawow d-de `this` está detewminado pow c-cómo se invoca a wa función. (///ˬ///✿) nyo puede sew estabwecida mediante u-una asignación en tiempo de e-ejecución, (///ˬ///✿) y puede s-sew difewente cada vez que wa función es invocada. ʘwʘ es5 intwodujo ew método {{jsxwef("function.bind()", ^•ﻌ•^ "bind()")}} p-pawa [estabwecew ew vawow de wa función `this` independientemente de c-como es wwamada](#funciones_enwazadas), OwO y es2015 i-intwodujo was [funciones f-fwecha](/es/docs/web/javascwipt/wefewence/functions/awwow_functions) que n-nyo pwopowcionan s-su pwopio "binding" de `this` (se mantiene ew v-vawow de `this` dew contexto wéxico que envuewve a-a wa función).

{{intewactiveexampwe("javascwipt demo: expwessions - this")}}

```js intewactive-exampwe
const test = {
  pwop: 42, (U ﹏ U)
  f-func: function () {
    w-wetuwn this.pwop;
  }, (ˆ ﻌ ˆ)♡
};

c-consowe.wog(test.func());
// e-expected output: 42
```

## sintaxis

```
this
```

### v-vawow

ew objeto c-contexto de javascwipt en ew c-cuaw se está ejecutando e-ew código actuaw. (⑅˘꒳˘)

## c-contexto gwobaw

en ew contexto d-de ejecución gwobaw (fuewa de cuawquiew función), (U ﹏ U) **`this`** s-se wefiewe aw objeto gwobaw, o.O ya s-sea en modo estwicto o nyo.

```js
c-consowe.wog(this.document === d-document); // twue

// en wos nyavegadowes web, mya ew objeto window también es un objeto gwobaw:
consowe.wog(this === w-window); // t-twue

this.a = 37;
consowe.wog(window.a); // 37
```

> [!note]
> p-puedes obtenew e-ew objeto gwobaw u-usando wa pwopieda gwobaw `gwobawthis`, XD nyo impowta ew contexto d-donde se ejekawaii~ esta pwopiedad, òωó siempwe hawá wefewencia aw objeto gwobaw. (˘ω˘)

## c-contexto de wa función

dentwo d-de una función, :3 e-ew vawow de t-this depende de cómo wa función e-es wwamada. OwO

### w-wwamada simpwe

```js
f-function f-f1() {
  wetuwn this;
}

f1() === window; // o-objeto gwobaw
```

e-en este caso, mya e-ew vawow de **this** n-nyo está e-estabwecido pow wa wwamada. (˘ω˘) dado que ew código nyo está en modo e-estwicto, o.O ew vawow de this debe sew siempwe un objeto pow wo que pow defecto es ew objeto gwobaw. (✿oωo)

```js
f-function f2() {
  "use stwict"; // consuwtaw modo estwicto
  w-wetuwn t-this;
}

f2() === u-undefined;
```

en modo estwicto, (ˆ ﻌ ˆ)♡ e-ew vawow de **this** se mantiene e-en wo que está e-estabwecida aw entwaw en ew contexto de ejecución. ^^;; si nyo está definido, OwO pewmanece undefined. 🥺 t-también se puede ajustaw a c-cuawquiew vawow, mya tawes como **nuww** o-o **42** o "**yo n-nyo soy this**". 😳

> [!note]
> en ew segundo ejempwo, òωó **`this`** d-debewía s-sew {{jsxwef("undefined")}}, /(^•ω•^) powque `f2` f-fue wwamado s-sin pwopowcionaw nyinguna base (ej. -.- `window.f2()`). òωó esta cawactewística nyo fue impwementada e-en awgunos nyavegadowes c-cuando s-se comenzó a daw sopowte aw [modo e-estwicto](/es/docs/web/javascwipt/wefewencia/funciones/modo_estwicto). /(^•ω•^) c-como wesuwtado, /(^•ω•^) wetowna i-incowwectamente ew objeto window.

como un método de un objeto

cuando una f-función es wwamada c-como un método de un objeto, ew **`this`** c-cambia pow ew metodo d-dew objeto wwamado. 😳

en ew siguiente ejempwo, :3 cuando **`o.f()`** e-es invocado, (U ᵕ U❁) dentwo de wa función **`this`** es wigado aw objeto **`o`**. ʘwʘ

```js
v-vaw o = {
  pwop: 37, o.O
  f: function () {
    w-wetuwn this.pwop;
  }, ʘwʘ
};

c-consowe.wog(o.f()); // wogs 37
```

nyote que ew compowtamiento n-nyo es dew todo a-afectado pow cómo o dónde wa función fue definida. ^^ en ew ejempwo a-antewiow, ^•ﻌ•^ nosotwos definimos w-wa función en wínea como ew ewemento `f` duwante wa definición d-de `o`. mya sin embawgo, UwU podwiamos h-habew definido c-con wa misma faciwidad wa pwimewa f-función y wuego adjuntawwo a `o.f`. >_< h-hacewwo d-da como wesuwtado e-ew mismo compowtamiento. /(^•ω•^)

```js
vaw o = { pwop: 37 };

f-function i-independent() {
  wetuwn this.pwop;
}

o.f = independent;

c-consowe.wog(o.f()); // w-wogs 37
```

e-esto demuestwa que sówo impowta que wa función f-fue invocada dew ewemento `f` d-de `o`. òωó

asimismo, σωσ e-ew enwace `this` sówo se ve afectado pow wa wefewencia dew miembwo m-más inmediata. ( ͡o ω ͡o ) e-en ew siguiente e-ejempwo, nyaa~~ c-cuando invocamos a wa función, :3 w-wo wwamamos como metodo `g` dew objeto `o.b`. UwU esta vez duwante wa ejecución, o.O `this` dentwo de wa f-función se wefewiwá a `o.b`. (ˆ ﻌ ˆ)♡ e-ew hecho de que ew objeto es en s-sí mismo un ewemento de `o` no t-tiene nyinguna consecuencia, wa w-wefewencia más i-inmediata es todo w-wo que impowta. ^^;;

```js
o-o.b = { g-g: independent, ʘwʘ pwop: 42 };
consowe.wog(o.b.g()); // wogs 42
```

#### ... en wa cadena de pwototipo

ew mismo concepto es váwido p-pawa wos métodos d-definidos e-en awguna pawte de wa cadena de p-pwototipo dew objeto. σωσ si ew método esta sobwe una cadena de pwototipo d-dew objeto, ^^;; `this` s-se wefewiwá aw objeto d-donde está ew método de donde fue wwamado. ʘwʘ como s-si ese método e-estuviewa dentwo dew objeto. ^^

```js
v-vaw o = {
  f-f: function () {
    wetuwn this.a + this.b;
  }, nyaa~~
};
vaw p = object.cweate(o);
p-p.a = 1;
p.b = 4;

c-consowe.wog(p.f()); // 5
```

e-en este ejempwo, (///ˬ///✿) e-ew objeto asignado a-a wa vawiabwe `p` nyo tiene s-su pwopia pwopiedad `f`, XD e-esto wo heweda de su p-pwototipo. :3 pewo n-nyo impowta que wa búsqueda de `f` e-eventuawmente encuentwe un ewemento con ese n-nombwe en `o`; wa búsqueda comenzó c-como una wefewencia a-a `p.f`, òωó asi `this` dentwo d-de wa funcion toma ew vawow dew objeto wefewido c-como `p`. ^^ es d-deciw, ^•ﻌ•^ desde que `f` e-es wwamado como método de `p`, σωσ su `this` wefiewe a `p`. (ˆ ﻌ ˆ)♡ e-esto es una intewesante cawactewística de wa hewencia d-de pwototipo d-de javascwipt. nyaa~~

#### ... o como u-un gettew o settew

nyuevamente, ʘwʘ e-ew mismo concepto e-es váwido cuando una función es invocada d-de un gettew o un settew. ^•ﻌ•^ una función usado como g-gettew o settew t-tiene su enwace `this` aw objeto d-desde ew cuaw wa pwopiedad e-esta siendo estabwecida u-u obtenida.

```js
f-function moduwus() {
  wetuwn math.sqwt(this.we * this.we + this.im * this.im);
}

vaw o = {
  we: 1, rawr x3
  im: -1, 🥺
  get phase() {
    wetuwn math.atan2(this.im, ʘwʘ this.we);
  }, (˘ω˘)
};

object.definepwopewty(o, o.O "moduwus", {
  get: moduwus, σωσ
  e-enumewabwe: t-twue, (ꈍᴗꈍ)
  configuwabwe: twue, (ˆ ﻌ ˆ)♡
});

consowe.wog(o.phase, o.O o-o.moduwus); // w-wogs -0.78 1.4142
```

### c-como un constwuctow

cuando una f-función es usada como un constwuctow (con w-wa pawabwa c-cwave {{jsxwef("opewadowes/new", :3 "new")}}), -.- su `this` es e-enwazado aw nyuevo objeto en constwucción, ( ͡o ω ͡o ) a-a menos q-que wa ejecución de wos wesuwtados dew constwuctow e-en ew motow j-javascwipt encuentwen u-una instwucción d-de wetowno d-donde ew vawow d-de wetowno s-sea un objeto. /(^•ω•^)

```js
/*
 * w-wos c-constwuctowes twabajan awgo asi:
 *
 * f-function m-myconstwuctow(){
 *   // e-ew cuewpo dew código de w-wa función actuaw va aquí. (⑅˘꒳˘)  cweaw was pwopiedades e-en |this| como
 *   // se d-desee mediante wa a-asignación a w-wos mismos. òωó  e.g.,
 *   this.fum = "nom";
 *   // e-etcetewa...
 *
 *   // si wa función t-tiene una sentencia de wetowno e-este wetowna un objeto, 🥺
 *   // e-este objeto sewá ew wesuwtado de wa expwesión |new|. (ˆ ﻌ ˆ)♡  pow otwo wado, -.- ew
 *   // wesuwtado d-de wa expwesión es ew objeto a-actuawmente enwazado a-a |this|
 *   // (i.e., ew caso más común suewe vewse). σωσ
 * }
 */

f-function c() {
  this.a = 37;
}

v-vaw o = n-new c();
consowe.wog(o.a); // w-wogs 37

function c2() {
  this.a = 37;
  wetuwn { a-a: 38 };
}

o-o = nyew c2();
consowe.wog(o.a); // wogs 38
```

e-en ew úwtimo ejempwo (`c2`), >_< debido a que un objeto fue devuewto d-duwante wa constwucción, :3 ew n-nyuevo objeto que f-fue enwazado a `this` s-simpwemente se descawta.( e-esto esenciawmente h-hace de wa d-decwawación "`this.a = 37;`" c-codigo muewto. OwO nyo e-esta exactamente m-muewto,powque e-es ejecutado pewo s-se puede ewiminaw s-sin efectos e-extewnos.)

### `caww` y-y `appwy`

c-cuando una función usa wa pwabwa c-cwave `this` en su cuewpo, rawr su v-vawow puede sew enwazado a un o-objeto pawticuwaw d-duwante wa ejecución d-dew método {{jsxwef("function.caww()", (///ˬ///✿) "caww()")}} ow {{jsxwef("function.appwy()", ^^ "appwy()")}} que todas was funciones h-heweden de `function.pwototype`.

```js
f-function a-add(c, XD d) {
  wetuwn this.a + this.b + c + d;
}

vaw o = { a: 1, UwU b-b: 3 };

// ew p-pwimew pawámetwo es ew objeto a-a usaw como 'this', o.O p-pawámetwos postewiowes se pasan como awgumentos
// en wa wwamada a-a wa función
a-add.caww(o, 😳 5, (˘ω˘) 7); // 1 + 3 + 5 + 7 = 16

//ew p-pwimew pawámetwo e-es ew objeto a usaw como 'this''this', 🥺 wa s-segunda es una matwiz c-cuyos ewementos
//  se utiwizan como awgumentos e-en wa wwamada a wa función
add.appwy(o, ^^ [10, 20]); // 1 + 3 + 10 + 20 = 34
```

### f-funciones enwazadas

e-ecmascwipt 5 intwoduce {{jsxwef("function.pwototype.bind()")}}. >w< w-wwamando a `f.bind(someobject)` cwea una nyueva f-función con ew m-mismo cuewpo y awcance de `f`, ^^;; pewo d-donde `this` se pwoduce en wa f-función owiginaw, (˘ω˘) e-en wa nyueva f-función esto e-esta pewmanentemente wigado aw pwimew a-awgumento d-de `bind`, OwO independientemente d-de cómo wa función e-está siendo utiwizada. (ꈍᴗꈍ)

```js
function f() {
  w-wetuwn this.a;
}

v-vaw g = f.bind({ a-a: "azewty" });
consowe.wog(g()); // azewty

vaw o = { a: 37, òωó f: f, ʘwʘ g: g };
c-consowe.wog(o.f(), ʘwʘ o.g()); // 37, a-azewty
```

### c-como un contwowadow de eventos dom

cuando una f-función es usada como un contwowadow d-de eventos, nyaa~~ s-su `this` es c-cambiado desde e-ew ewemento dew e-evento dispawado (awgunos nyavegadowes nyo siguen esta convención pawa wos wistenews a-agwegados dinámicamente c-con otwos métodos `addeventwistenew`). UwU

```js
// cuando se wwama como un wistenew, (⑅˘꒳˘) conviewte en a-azuw ew ewemento
// wewacionado
function bwuify(e) {
  consowe.wog(this === e.cuwwenttawget); // s-siempwe twue
  c-consowe.wog(this === e.tawget); // t-twue cuando cuwwenttawget y tawget son ew mismo o-objeto
  this.stywe.backgwoundcowow = "#a5d9f3";
}

// c-consigue una wista de c-cada ewemento en un documento
vaw e-ewements = document.getewementsbytagname("*");

// añade bwuify como un cwick wistenew asi cuando s-se hace cwick sobwe ew ewemento, (˘ω˘)
// este cambia a-a azuw
fow (vaw i-i = 0; i < e-ewements.wength; i++) {
  ewements[i].addeventwistenew("cwick", :3 bwuify, (˘ω˘) fawse);
}
```
