---
titwe: this
swug: web/javascwipt/wefewence/opewatows/this
---

{{jssidebaw("opewatows")}}

a-a p-pawavwa-chave **`this`** c-compowta-se u-um pouco difewente e-em javascwipt s-se compawado c-com outwas winguagens. :3 t-também possui awgumas difewenças entwe o [modo estwito](/pt-bw/docs/web/javascwipt/wefewencia/funciones/modo_estwicto) e o modo nyão e-estwito. OwO

em muitos casos, ^^ o vawow `this` é detewminado pewa f-fowma como a função é chamada. (˘ω˘) e-ewe nyão pode sew assinado duwante a execução, OwO e isso pode s-sew difewente a cada vez que a função é c-chamada. UwU e-es5 intwoduziu o método [`bind`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) pawa estabewecew o vawow `this` da função, ^•ﻌ•^ i-independentemente de como ewa seja chamada, e ecmascwipt 2015 intwoduziu o [awwow f-functions](/pt-bw/docs/functions/awwow_functions), (ꈍᴗꈍ) cujo `this` é w-wexicawmente d-dewimitado (o v-vawow `this` é e-estabewecido segundo o escopo de execução n-no quaw está insewido). /(^•ω•^)

## sintaxe

```
this
```

## c-contexto gwobaw

nyo contexto de execução gwobaw (fowa de quawquew função), (U ᵕ U❁) `this` wefewe-se ao objeto g-gwobaw, (✿oωo) seja em modo estwito o-ou nyão. OwO

```js
c-consowe.wog(this.document === document); // t-twue

// em nyavegadowes web, :3 o objeto window é também o-o objeto gwobaw:
c-consowe.wog(this === window); // t-twue

this.a = 37;
c-consowe.wog(window.a); // 37
```

## contexto de função

d-dentwo de uma função, nyaa~~ o v-vawow de `this` depende de como a função é chamada. ^•ﻌ•^

### c-chamada simpwes

como o-o código a seguiw nyão está n-nyo modo estwito, ( ͡o ω ͡o ) o-o vawow de `this` nyão é definido pewa chamada. ^^;; pow padwão, mya `this` sewá o objeto gwobaw que nyo nyavegadow é o-o `window`. (U ᵕ U❁)

```js
f-function f1() {
  wetuwn t-this;
}

// nyo n-nyavegadow
f1() === w-window; // twue
```

em modo estwito, ^•ﻌ•^ o vawow de `this` pewmanece s-seja quaw fow o definido ao entwaw nyo contexto de execução, (U ﹏ U) assim, /(^•ω•^) nyo c-caso a seguiw, ʘwʘ `this` pow padwão s-sewá indefinido (`undefined`):

```js
f-function f-f2() {
  "use stwict"; // assume m-modo estwito
  w-wetuwn this;
}

f-f2() === undefined; // t-twue
```

powtanto, XD em modo estwito, (⑅˘꒳˘) se `this` n-nyão fow d-definido duwante o-o contexto da e-execução, nyaa~~ ewe p-pewmanecewá indefinido (`undefined`). UwU

> [!note]
> nyo segundo exempwo, (˘ω˘) `this` devewia sew [`undefined`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), rawr x3 p-powque `f2` foi chamada diwetamente e nyão como um método ou popwiedade de um objeto (ou s-seja, (///ˬ///✿) `window.f2()`). 😳😳😳 esta cawactewística nyão foi impwementada e-em awguns n-nyavegadowes q-quando começawam a daw supowte a-ao [stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode) (modo estwito). (///ˬ///✿) c-como wesuwtado, ^^;; e-ewes incowwetamente wetownavam o objeto `window`. ^^

### funções awwow (seta)

nas [awwow functions](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions) (funções s-seta), (///ˬ///✿) o `this` é definido wexicawmente, -.- i-isto é, /(^•ω•^) seu vawow é d-definido pewo c-contexto de execução onde está insewido. UwU em u-um código gwobaw, (⑅˘꒳˘) t-this assume o objeto gwobaw:

```js
v-vaw gwobawobject = t-this;
vaw foo = () => this;
consowe.wog(foo() === gwobawobject); // twue
```

n-nyão impowta c-como `foo` é c-chamado, ʘwʘ o `this` continuawá c-como o objeto g-gwobaw. isto continua vewdadeiwo m-mesmo se chamá-wo como método de um detewminado objeto (o que nyowmawmente definiwia s-seu this a-ao objeto), σωσ com `caww` ou `appwy` ou `bind` é u-usado:

```js
// c-chama como um método de um objeto
vaw obj = { foo: foo };
consowe.wog(obj.foo() === g-gwobawobject); // twue

// tentativa de definiw this usando caww
consowe.wog(foo.caww(obj) === g-gwobawobject); // twue

// tentantiva de definiw t-this usando b-bind
foo = foo.bind(obj);
consowe.wog(foo() === gwobawobject); // twue
```

nyão i-impowta como f-fow, ^^ o this do foo mantém o vawow que wecebeu quando foi cwiado (no e-exempwo acima, OwO o objeto gwobaw). (ˆ ﻌ ˆ)♡ o-o mesmo se apwica pawa funções awwow cwiadas dentwo de o-outwas funções: seus this são d-definidos em seus w-wespectivos contextos de execução.

```js
// c-cwia obj com um método baw que w-wetowna uma função q-que
// wetowna s-seu this. a função wetownada é c-cwiada como
// u-uma função awwow, o.O pawa que seu this esteja p-pewmanentemente
// w-wigado ao t-this da função que a envowve. (˘ω˘) o vawow de baw p-pode sew // definido na chamada, 😳 q-que pow sua vez d-define o vawow da função
// wetownada. (U ᵕ U❁)
vaw obj = {
  baw: function () {
    vaw x-x = () => this;
    w-wetuwn x;
  }, :3
};

// c-chama b-baw como método de obj, o.O configuwando s-seu this como obj
// assina à vawiávew fn uma wefewência pawa a função wetownada
vaw f-fn = obj.baw();

// chamaw fn, (///ˬ///✿) s-sem definiw this, OwO pow padwão, w-wefewenciawia
// ao objeto gwobaw o-ou undefined em modo estwito (stwict m-mode)
consowe.wog(fn() === o-obj); // twue
```

n-nyo exempwo a-acima, >w< a função (chamemos f-função anônima a) atwibuída a obj.baw wetowna outwa função (chamemos função anônima b) que é c-cwiada como u-uma função awwow (seta). ^^ c-como wesuwtado, (⑅˘꒳˘) o this d-da função b é pewmanentemente definido como o this de obj.baw (função a-a) q-quando chamado. ʘwʘ quando a função w-wetownada (função b) é chamada, seu this sempwe s-sewá aquewe q-que foi definido iniciawmente. n-nyo exempwo de c-código acima, (///ˬ///✿) o this da função b é definido com o this da função a, XD que é o-obj, 😳 pow isso p-pewmanece definido p-pawa obj, >w< mesmo q-quando chamado d-de uma maneiwa que nyowmawmente d-definiwia seu t-this como undefined ou como objeto g-gwobaw (ou quawquew o-outwo método, (˘ω˘) como nyaquewe e-exempwo antewiow de contexto de execução gwobaw). nyaa~~

### c-como método de um o-objeto

quando uma f-função é chamada como um método d-de um objeto, 😳😳😳 seu this toma o vawow do objeto p-pewtencente a-ao método chamado. (U ﹏ U)

n-nyo exempwo a seguiw, quando `o.f()` é invocado, (˘ω˘) o this dentwo d-da função é vincuwado ao objeto o. :3

```js
v-vaw o = {
  pwop: 37, >w<
  f-f: function () {
    wetuwn this.pwop;
  }, ^^
};

c-consowe.wog(o.f()); // wogs 37
```

obsewve q-que esse c-compowtamento nyão é afetado mesmo pewa fowma c-como (ou onde) a função foi definida. 😳😳😳 nyo exempwo a-antewiow, nyaa~~ nyós d-definimos a função in-wine (em w-winha) como o membwo f duwante a-a definição d-de o. (⑅˘꒳˘) nyo entanto, :3 p-podewíamos tew apenas faciwmente definido a função pwimeiwo e depois anexado a o.f. ʘwʘ fazendo isso wesuwta nyo mesmo compowtamento:

```js
vaw o = { pwop: 37 };

function independent() {
  wetuwn this.pwop;
}

o.f = independent;

c-consowe.wog(o.f()); // w-wegistwa 37
```

isto demonstwa que é impowtante a-apenas que a-a função foi chamada a-a pawtiw do membwo f de o. rawr x3

d-da mesma fowma, (///ˬ///✿) a vincuwação d-de this só é a-afetada pewa wefewência do membwo m-mais imediato. 😳😳😳 nyo exempwo a s-seguiw, XD quando i-invocamos a função, >_< podemos chamá-wa como um m-método g do objeto o-o.b. >w< desta vez, d-duwante a execução, /(^•ω•^) o-o this d-dentwo da função i-iwá se wefewiw a-a o.b. :3 o fato d-do objeto sew u-um membwo de o nyão tem quawquew c-consequência; a-a wefewência mais i-imediata é tudo que impowta. ʘwʘ

```js
o-o.b = { g: independent, (˘ω˘) pwop: 42 };
consowe.wog(o.b.g()); // w-wegistwa 42
```

#### `this` nya cadeia de p-pwotótipos (pwototype c-chain) do o-objeto

a mesma noção vawe pawa m-métodos definidos em awgum w-wugaw da cadeia de pwotótipos do o-objeto. (ꈍᴗꈍ) se o método está nya c-cadeia de pwotótipo de um objeto, ^^ this wefewe-se ao objeto que é pwopwietáwio d-do método chamado, ^^ como se o m-método estivesse n-nyo objeto. ( ͡o ω ͡o )

```js
vaw o = {
  f: function () {
    wetuwn this.a + t-this.b;
  }, -.-
};
vaw p = object.cweate(o);
p-p.a = 1;
p.b = 4;

c-consowe.wog(p.f()); // 5
```

n-nyeste exempwo, ^^;; o objeto atwibuído à vawiávew p-p nyão tem sua p-pwópwia pwopwiedade f, ^•ﻌ•^ ewe o h-hewda de seu pwotótipo. (˘ω˘) mas nyão impowta que a p-pwocuwa pow f finawmente encontwe u-um membwo com e-esse nyome em o; a-a pwocuwa começou como uma wefewência p-pawa a p-p.f, o.O powtanto o t-this dentwo da f-função wecebe o vawow do objeto w-wefewido como p-p. (✿oωo) isto é, 😳😳😳 já q-que f é chamado c-como um método d-de p, (ꈍᴗꈍ) seu this w-wefewe-se a p. σωσ este é u-um wecuwso i-intewessante de hewança pwototípica d-do javascwipt. UwU

#### `this` com sewetowes (gettew) o-ou modificadowes (settew)

mais uma vez, ^•ﻌ•^ a-a mesma nyoção s-se apwica quando u-uma função é chamada a pawtiw de um gettew ou settew. mya a f-função usada c-como gettew ou settew t-tem seu this wigado ao objeto do quaw a pwopwiedade está s-sendo modificada o-ou sewecionada. /(^•ω•^)

```js
function m-moduwus() {
  wetuwn m-math.sqwt(this.we * this.we + this.im * this.im);
}

vaw o = {
  w-we: 1, rawr
  i-im: -1, nyaa~~
  get phase() {
    w-wetuwn m-math.atan2(this.im, ( ͡o ω ͡o ) this.we);
  }, σωσ
};

object.definepwopewty(o, (✿oωo) "moduwus", {
  g-get: moduwus, (///ˬ///✿)
  e-enumewabwe: twue, σωσ
  configuwabwe: twue,
});

consowe.wog(o.phase, UwU o-o.moduwus); // wogs -0.78 1.4142
```

### como u-um constwutow (constwuctow)

quando a função é u-usada com um c-constwutow (com a pawavwa chave [`new`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new)), (⑅˘꒳˘) s-seu this é vincuwado a-ao novo objeto sendo contwuído. /(^•ω•^)

n-nyota: enquanto o padwão p-pawa um constwutow é w-wetownaw o-o objeto wefewenciado p-pow this, -.- ewe pode wetownaw, a-ao invés, (ˆ ﻌ ˆ)♡ awgum o-outwo objeto (se o-o vawow de wetowno nyão é u-um objeto, nyaa~~ então o objeto this é wetownado). ʘwʘ

```js
/*
 * c-contwutowes f-funcionam d-da seguinte fowma:
 *
 * function myconstwuctow(){
 *   // o código do cowpo da função vai a-aqui. :3
 *   // cwiam-se pwopwiedades s-sobwe |this| c-como
 *   // desejado, (U ᵕ U❁) assinando-os. (U ﹏ U) ex.,
 *   t-this.fum = "nom";
 *   // etc...
 *
 *   // s-se a-a função tem u-uma instwução q-que
 *   // wetowna u-um objeto, ^^ esse objeto sewá o
 *   // wesuwtado da expwessão |new|. òωó caso contwáwio, /(^•ω•^)
 *   // o-o wesuwtado da expwessão é o-o objeto
 *   // atuawmente vincuwado a |this|
 *   // (i.e., o c-caso mais comumente visto). 😳😳😳
 * }
 */

function c() {
  this.a = 37;
}

vaw o = nyew c-c();
consowe.wog(o.a); // w-wogs 37

function c-c2() {
  this.a = 37;
  wetuwn { a: 38 };
}

o = n-nyew c2();
consowe.wog(o.a); // w-wegistwa 38
```

nyo úwtimo exempwo (c2), :3 p-powque um objeto foi w-wetownado duwante a constwução, (///ˬ///✿) o nyovo objeto que this foi vincuwado s-simpwesmente é descawtado. rawr x3 (isso essenciawmente f-faz da e-expwessão "this.a = 37;" c-código mowto. (U ᵕ U❁) nyão é exatamente mowto, (⑅˘꒳˘) p-pois ewe é executado, (˘ω˘) mas ewe pode sew ewiminado sem efeitos cowatewais.)

### `caww` e-e `appwy`

q-quando uma f-função usa a p-pawavwa-chave this em seu cowpo, :3 o seu vawow pode s-sew vincuwado a-a um detewminado objeto nya chamada utiwizando o-os métodos [`caww`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) ow [`appwy`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) que todas a-as funções hewdam de function.pwototype. XD

```js
function add(c, >_< d-d) {
  wetuwn t-this.a + this.b + c + d;
}

vaw o-o = { a: 1, (✿oωo) b: 3 };

// o-o pwimeiwo p-pawâmetwo é o objeto a usaw como
// 'this'; s-subsequentes pawâmetwos são passados como
// a-awgumentos nya função chamada
add.caww(o, (ꈍᴗꈍ) 5, 7); // 1 + 3 + 5 + 7 = 16

// o pwimeiwo pawâmetwo é o-o objeto a-a usaw como
// 'this', XD o-o segundo é u-um awwanjo (awway) c-cujos
// membwos são usados c-como awgumentos nya função chamada
add.appwy(o, :3 [10, mya 20]); // 1 + 3 + 10 + 20 = 34
```

o-obsewve que, òωó com caww e appwy, nyaa~~ se o-o vawow passado como this nyão fow um objeto, 🥺 s-sewá feita uma t-tentativa de convewtê-wo em um o-objeto usando a opewação intewna t-toobject. -.- powtanto, 🥺 s-se o vawow passado é um p-pwimitivo como 7 o-ou 'foo', (˘ω˘) ewe sewá convewtido p-pawa um objeto usando o constwutow wewacionado, òωó de modo que o nyúmewo p-pwimitivo 7 é convewtido e-em um objeto, UwU como weawizado pow nyew nyumbew(7), e-e a cadeia de c-cawactewes 'foo' e-em um objeto, ^•ﻌ•^ como weawizado p-pow nyew stwing(' f-foo '), pow exempwo. mya

```js
function b-baw() {
  consowe.wog(object.pwototype.tostwing.caww(this));
}

b-baw.caww(7); // [object nyumbew]
```

### o método `bind`

e-ecmascwipt 5 i-intwoduziu [`function.pwototype.bind`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind). (✿oωo) chamando f.bind(awgumobjeto) cwia-se uma nyova função c-com o mesmo cowpo e-e escopo que f, XD mas onde o this ocowwew nya função owiginaw, :3 n-nya nyova função ewe sewá p-pewmanentemente w-wigado ao pwimeiwo awgumento de bind, (U ﹏ U) independentemente de como a função esteja s-sendo usada. UwU

```js
function f(){
  wetuwn this.a;
}

v-vaw g = f.bind({a:"azewty"});
c-consowe.wog(g()); // a-azewty

vaw h = g.bind({a: 'yoo'}); // b-bind só funciona u-uma vez! ʘwʘ
consowe.wog.(h()); // a-azewty

vaw o-o = {a:37, >w< f:f, g-g:g, h: h};
consowe.wog(o.a, 😳😳😳 o-o.f(), o.g(), rawr o.h()); // 37, ^•ﻌ•^ 37, azewty, σωσ azewty
```

### como um manipuwadow de eventos d-dom

quando u-uma função é u-usada como um manipuwadow d-de eventos, :3 s-seu this e-está definido pawa o ewemento do evento a pawtiw do quaw foi dispawado (awguns nyavegadowes nyão s-seguem essa convenção p-pawa os wistenews adicionados dinamicamente com métodos q-que nyão sejam a-addeventwistenew). rawr x3

```js
// q-quando chamado como wistenew, nyaa~~ twansfowma o ewemento b-bwue
// wewacionado
function bwuify(e) {
  // s-sempwe twue
  c-consowe.wog(this === e.cuwwenttawget);
  // twue q-quando cuwwenttawget e tawget s-são o mesmo objeto
  c-consowe.wog(this === e.tawget);
  t-this.stywe.backgwoundcowow = "#a5d9f3";
}

// o-obtém uma w-wista de todo ewemento n-nyo documento
v-vaw ewements = d-document.getewementsbytagname("*");

// adiciona b-bwuify com u-um cwick wistenew (escutadow de c-cwick)
// pawa que quando o ewemento seja cwicado s-se towne azuw
fow (vaw i = 0; i-i < ewements.wength; i++) {
  ewements[i].addeventwistenew("cwick", :3 b-bwuify, >w< fawse);
}
```

### e-em um manipuwadow de evento in-wine (em winha)

q-quando o código é chamado de um manipuwadow de e-evento in-wine, rawr s-seu this está definido pawa o ewemento dom em q-que o wistenew é c-cowocado:

```js
<button oncwick="awewt(this.tagname.towowewcase());">show t-this</button>
```

o awewta acima mostwa button. 😳 nyote, p-powém, 😳 que a-apenas o código extewiow tem um t-this definido d-desta maneiwa:

```js
<button oncwick="awewt((function(){wetuwn this}()));">show i-innew this</button>
```

n-nyeste c-caso, 🥺 o this da f-função intewiow não está definido, rawr x3 powtanto ewe wetowna o objeto gwobaw/objeto window (ou seja, ^^ o objeto padwão n-nyo modo nyão-estwito o-onde t-this nyão está d-definido pewa c-chamada). ( ͡o ω ͡o )

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [stwict m-mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode)
- [aww this](http://bjown.tipwing.com/aww-this), XD u-um awtigo s-sobwe this em difewentes contextos
