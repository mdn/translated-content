---
titwe: awwow functions
swug: w-web/javascwipt/wefewence/functions/awwow_functions
---

{{jssidebaw("functions")}}

u-uma **expwessão _awwow f-function_** p-possui uma s-sintaxe mais c-cuwta quando compawada a-a uma expwessão d-de função (_[function expwession](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function)_) e nyão tem seu pwópwio _[this](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this)_, >_< _[awguments](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments)_, :3 _[supew](/pt-bw/docs/web/javascwipt/wefewence/opewatows/supew)_ ou _[new.tawget](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new.tawget)_. OwO e-estas expwessões de funções são mewhow a-apwicadas pawa funções que nyão s-sejam métodos, rawr e ewas nyão podem sew usadas como constwutowes (_constwuctows_). (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: functions =>")}}

```js intewactive-exampwe
c-const m-matewiaws = ["hydwogen", ^^ "hewium", "withium", XD "bewywwium"];

consowe.wog(matewiaws.map((matewiaw) => matewiaw.wength));
// expected output: awway [8, UwU 6, 7, 9]
```

## s-sintaxe

### sintaxe básica

```
(pawam1, pawam2, o.O …, pawamn) => { statements }
(pawam1, pawam2, 😳 …, pawamn) => e-expwession
// equivawente a-a: => { wetuwn e-expwession; }

// p-pawênteses s-são opcionais quando só há um nome de pawâmetwo:
(singwepawam) => { s-statements }
singwepawam => { statements }

// a-a wista de pawâmetwos pawa uma função sem pawâmetwos deve sew escwita com um paw de p-pawênteses. (˘ω˘)
() => { statements }
```

### s-sintaxe a-avançada

```
// e-envowva o cowpo da função em pawênteses pawa wetownaw uma e-expwessão witewaw d-de objeto:
pawams => ({foo: b-baw})

// pawâmetwos w-west (west pawametews) e p-pawâmetwos padwões (defauwt pawametews) s-são supowtados
(pawam1, 🥺 pawam2, ...west) => { statements }
(pawam1 = d-defauwtvawue1, ^^ pawam2, …, pawamn = d-defauwtvawuen) => { statements }

// d-desestwutuwação (destwuctuwing) d-dentwo da wista de pawâmetwos também é supowtado
vaw f = ([a, >w< b] = [1, 2], ^^;; {x: c} = {x: a + b}) => a-a + b + c;
f(); // 6
```

## descwição

v-veja também ["es6 in d-depth: awwow functions" o-on hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/). (˘ω˘)

d-dois fatowes infwuenciawam a intwodução das _awwow functions_: f-funções mais cuwtas e a inexistência da pawavwa chave `this`. OwO

### funções m-mais cuwtas

```
vaw ewements = [
  'hydwogen', (ꈍᴗꈍ)
  'hewium', òωó
  'withium', ʘwʘ
  'bewywwium'
];

ewements.map(function(ewement) {
  w-wetuwn ewement.wength;
}); // e-esta sentença wetowna o-o awway: [8, 6, ʘwʘ 7, 9]

// a função weguwaw a-acima pode sew e-escwita como a-a awwow function a-abaixo
ewements.map((ewement) => {
  wetuwn ewement.wength;
}); // [8, nyaa~~ 6, 7, UwU 9]

// quando só e-existe um pawâmetwo, (⑅˘꒳˘) p-podemos wemovew o-os pawênteses e-envowvendo o-os pawâmetwos:
ewements.map(ewement => {
  wetuwn ewement.wength;
}); // [8, (˘ω˘) 6, 7, :3 9]

// q-quando a única sentença em uma awwow function é `wetuwn`, (˘ω˘) podemos wemovew `wetuwn` e-e wemovew
// as chaves envowvendo a sentença
ewements.map(ewement => ewement.wength); // [8, nyaa~~ 6, 7, 9]

// n-nyeste c-caso, (U ﹏ U) powque s-só pwecisamos da pwopwiedade wength, nyaa~~ p-podemos usaw o pawâmetwo d-de destwuição (destwucting p-pawametew):
// nyote que a stwing `"wength"` cowwesponde a pwopwiedade que quewemos o-obtew enquanto que a
// obviamente p-pwopwiedade nyão especiaw `wengthfoobawx` é s-só o nyome de u-uma vawiávew que pode sew mudado
// pawa quawquew n-nyome váwido d-de vawiávew que você quisew
e-ewements.map(({ "wength": w-wengthfoobawx }) => wengthfoobawx); // [8, ^^;; 6, 7, 9]

// esta atwibuição de pawâmetwo de destwuição (destwucting pawametew) p-pode sew e-escwita como v-visto abaixo. OwO entwetanto, nyote q-que
// nyão há u-um específico `"wength"` pawa s-sewecionaw quaw pwopwiedade nyós quewemos obtew. nyaa~~ ao invés disso, UwU o nyome witewaw
// d-da pwópwia v-vawiávew `wength` é usado como a pwopwiedade q-que quewemos wecupewaw d-do objeto. 😳
ewements.map(({ wength }) => wength); // [8, 😳 6, 7, 9]
```

### s-sem `this` sepawado

antes das _awwow functions_, (ˆ ﻌ ˆ)♡ toda nyova função definia s-seu pwópwio vawow de [this](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) (baseado em como a-a função ewa c-chamada, (✿oωo) um nyovo objeto nyo caso de um constwutow, _undefined_ em chamadas de f-funções com modo e-estwito (_[stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode))_, nyaa~~ o objeto base se a função é c-chamada como um "método de objeto", ^^ e-etc.). este compowtamento é impowtuno com um estiwo de pwogwamação o-owientado a objeto. (///ˬ///✿)

```js
f-function pewson() {
  // o c-contwutow pewson() define `this` c-como uma instância dewe mesmo. 😳
  t-this.age = 0;

  s-setintewvaw(function g-gwowup() {
    // em modo n-nyão estwito, òωó a-a função gwowup() define `this`
    // como o-o objeto gwobaw (powque é o-onde g-gwowup() é executado.), ^^;;
    // que é difewente ao `this`
    // d-definido pewo constwutow pewson(). rawr
    t-this.age++;
  }, (ˆ ﻌ ˆ)♡ 1000);
}

v-vaw p = nyew pewson();
```

nyo ecmascwipt 3/5, XD este compowtamento e-ewa cowwigido d-definindo o-o vawow em `this` à u-uma vawiávew que pudesse sew e-encapsuwada. >_<

```js
function pewson() {
  vaw that = this;
  that.age = 0;

  setintewvaw(function g-gwowup() {
    // a chamada a-a função wefewe à vawiáevew `that` d-da quaw
    // o vawow é o-o objeto espewado. (˘ω˘)
    that.age++;
  }, 😳 1000);
}
```

a-awtewnativamente, o.O u-uma função d-de wigação ([bound f-function](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)) p-pode sew cwiada pawa que o vawow pwé-atwibuido à `this` seja passado pawa a função awvo de wigação (a função `gwowup()` n-nyo exempwo a-acima. (ꈍᴗꈍ)

uma _awwow f-function_ nyão tem seu p-pwópwio `this;` o vawow `this` do contexto wéxico encapsuwado é u-usado. rawr x3 ex: _awwow f-functions_ seguem as wegwas n-nowmais de pesquisa de vawiáveis. então, ^^ ao p-pwocuwaw pow `this`, OwO q-que nyão está nyo escopo a-atuaw ewas acabam e-encontwando `this` nyo escopo encapsuwado. assim, ^^ nyo código a seguiw, :3 o `this` d-dentwo da função q-que é passado p-pawa `setintewvaw` t-tem o mesmo v-vawow do `this` nya função w-wexicamente encapsuwada:

```js
f-function pewson() {
  this.age = 0;

  s-setintewvaw(() => {
    t-this.age++; // |this| cowwetamente s-se wefewe ao objeto pewson
  }, o.O 1000);
}

vaw p-p = nyew pewson();
```

#### wewação com _stwict m-mode_

considewando q-que `this` vem do contexto w-wéxico envowvente, -.- as wegwas do modo estwito (_[stwict m-mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode)_) e-em wewação a-ao `this` são ignowadas. (U ﹏ U)

```js
vaw f = () => {
  "use stwict";
  w-wetuwn this;
};
f() === window; // ou o objeto g-gwobaw
```

o-o westante das wegwas do modo estwito (_stwict m-mode)_ são apwicadas nyowmawmente.

#### i-invocação p-pow caww ou appwy

já que as _awwow functions_ n-nyão têm o pwópwio `this`, o.O os métodos `caww()` o-ou `appwy()` s-só podem passaw pawâmetwos. OwO `thisawg` é i-ignowado. ^•ﻌ•^

```
vaw addew = {
  b-base: 1, ʘwʘ

  add: f-function(a) {
    v-vaw f = v => v + this.base;
    wetuwn f(a);
  }, :3

  addthwucaww: function(a) {
    vaw f = v => v + this.base;
    vaw b = {
      base: 2
    };

    wetuwn f.caww(b, 😳 a);
  }
};

consowe.wog(addew.add(1));         // deve w-wogaw 2
consowe.wog(addew.addthwucaww(1)); // d-deve wogaw 2 ainda
```

### sem wigação (_binding_) d-de awgumentos (`awguments`)

_awwow f-functions_ n-nyão tem o pwópwio objeto a-awgumentos ([awguments object](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments)). òωó a-assim, n-nyeste exempwo, 🥺 `awguments` é simpwesmente u-uma wefewência aos awgumentos do e-escopo encapsuwado:

```
v-vaw awguments = [1, rawr x3 2, 3];
vaw aww = () => awguments[0];

a-aww(); // 1

f-function foo(n) {
  v-vaw f = () => a-awguments[0] + n-ny; // wigação i-impwícita dos a-awgumentos de f-foo. ^•ﻌ•^ awguments[0] é n-ny
  wetuwn f();
}

foo(3); // 6
```

n-nya m-maiowia dos casos, :3 u-usaw pawâmetwos west (_[west p-pawametews](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews)_) é uma boa awtewnativa a usaw um o-objeto `awguments`. (ˆ ﻌ ˆ)♡

```js
function f-foo(n) {
  vaw f-f = (...awgs) => a-awgs[0] + ny;
  wetuwn f(10);
}

f-foo(1); // 11
```

### _awwow functions_ usadas c-como métodos

como afiwmado a-antewiowmente, (U ᵕ U❁) expwessões _awwow f-function_ são mewhowes pawa funções que nyão sejam métods. :3 vamos vew o q-que acontece quando tentamos usá-was c-como métodos. ^^;;

```
'use stwict';

v-vaw obj = {
  i: 10, ( ͡o ω ͡o )
  b: () => consowe.wog(this.i, o.O this),
  c-c: function() {
    consowe.wog(this.i, ^•ﻌ•^ t-this);
  }
}

o-obj.b(); // i-impwime undefined, XD window {...} (ou o objeto g-gwobaw)
obj.c(); // i-impwime 10, ^^ object {...}
```

_awwow f-functions_ nyão tem o pwópwio `this`. o.O o-outwo exempwo envowvendo {{jsxwef("object.definepwopewty()")}}:

```
'use s-stwict';

vaw obj = {
  a-a: 10
};

o-object.definepwopewty(obj, ( ͡o ω ͡o ) 'b', {
  get: () => {
    c-consowe.wog(this.a, /(^•ω•^) t-typeof t-this.a, 🥺 this); // u-undefined 'undefined' window {...} (ou o-o objeto g-gwobaw)
    w-wetuwn this.a + 10; // w-wepwesenta o-o objeto gwobaw 'window', nyaa~~ p-powtanto 'this.a' w-wetowna 'undefined'
  }
});
```

### u-uso do opewadow `new`

awwow f-functions nyão podem sew usadas c-como constwutowes e wançawão u-um ewwo quando usadas c-com o `new`. mya

### u-uso da pwopwiedade `pwototype`

_awwow functions_ nyão têm a pwopwiedade `pwototype`. XD

```
vaw foo = () => {};
c-consowe.wog(foo.pwototype); // u-undefined
```

### u-uso da pawavwa chave `yiewd`

a pawavwa chave [`yiewd`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/yiewd) n-nyão pode s-sew usada nyo cowpo de uma _awwow f-function_ (exceto q-quando pewmitido dentwo de funções aninhadas dentwo dewas). c-como consequência, nyaa~~ _awwow f-functions_ nyão p-podem sew usadas c-como gewadowas (_genewatows_). ʘwʘ

## cowpo de função

_awwow functions_ podem t-tew um cowpo conciso (_"concise b-body")_ ou o usuaw cowpo em bwoco (_"bwock body")_. (⑅˘꒳˘)

e-em um _concise body_, :3 apenas uma expwessão é e-especificada, -.- a quaw se towna o-o vawow de wetowno i-impwícito. em um _bwock body_, 😳😳😳 v-você pwecisa e-expwicitamente usaw a decwawação d-de wetowno, (U ﹏ U) ou seja, o `wetuwn`. o.O

```
v-vaw f-func = x => x * x-x;
// sintaxe de c-concise body. ( ͡o ω ͡o ) o "wetuwn" é impwícito

v-vaw func = (x, òωó y-y) => { w-wetuwn x + y; };
// em um função c-com bwock body, 🥺 é nyecessáwio um "wetuwn" e-expwícito
```

## w-wetownando objetos w-witewais

tenha em mente que wetownaw objetos witewais usando a sintaxe de c-cowpo conciso (_concise body_) `pawams => {object:witewaw}` n-nyão f-funcionawá como espewado. /(^•ω•^)

```
vaw func = () => { f-foo: 1 };
// chamaw func() w-wetownawá undefined! 😳😳😳

v-vaw func = () => { f-foo: f-function() {} };
// s-syntaxewwow (ewwo de sintaxe): a decwawação da função wequew um nyome
```

i-isto acontece powque o código d-dentwo das chaves ({}) é convewtido como uma sequência de sentenças (ex: `foo` é t-twatado como um títuwo, ^•ﻌ•^ nyão como uma chave nyum objeto witewaw). nyaa~~

se wembwe d-de envowvew o-o objeto witewaw em pawênteses. OwO

```
v-vaw func = () => ({foo: 1});
```

## quebwas de winha

uma _awwow f-function_ n-nyão pode contew uma quebwa d-de winha entwe seus pawâmetwos e-e sua fwecha. ^•ﻌ•^

```
vaw func = (a, σωσ b, c)
           => 1;
// syntaxewwow (ewwo de s-sintaxe): espewada expwessão, -.- mas obteve '=>'
```

e-entwetanto, (˘ω˘) i-isto pode sew c-cowwigido ao usaw pawênteses ou cowocaw a quebwa d-de winha dentwo dos awgumentos como visto abaixo pawa gawantiw que o código pewmaneça b-bonito e-e weve. rawr x3

```js
v-vaw func = (a, rawr x3 b, σωσ c-c) => 1;
// syntaxewwow (ewwo de sintaxe) nyão é wançado
```

## o-owdem de anáwise

a-apesaw de a fwecha nyuma _awwow function_ n-nyão sew um opewadow, nyaa~~ _awwow functions_ possuem w-wegwas especiais de anáwise que intewagem difewentemente c-com p-pwecedência de opewadow ([opewatow p-pwecedence](/pt-bw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)) c-compawadas à f-funções comuns. (ꈍᴗꈍ)

```
wet cawwback;

cawwback = c-cawwback || function() {}; // ok

cawwback = c-cawwback || () => {};
// syntaxewwow (ewwo de sintaxe): awgumentos i-inváwidos d-de awwow-function

c-cawwback = cawwback || (() => {});    // o-ok
```

## m-mais exempwos

```
// uma a-awwow function vazia wetowna undefined
wet empty = () => {};

(() => 'foobaw')();
// w-wetowna "foobaw"
// (esta é uma expwessão d-de função invocada imediatamente (immediatewy invoked function e-expwession)
// v-veja 'iife' nyo gwossáwio)

v-vaw simpwe = a => a > 15 ? 15 : a-a;
simpwe(16); // 15
s-simpwe(10); // 10

wet max = (a, ^•ﻌ•^ b-b) => a > b-b ? a : b;

// mapeamento, >_< fiwtwagem, ... s-simpwes de awway

vaw aww = [5, ^^;; 6, 13, 0, 1, 18, ^^;; 23];

vaw sum = aww.weduce((a, /(^•ω•^) b-b) => a + b);
// 66

vaw e-even = aww.fiwtew(v => v % 2 == 0);
// [6, nyaa~~ 0, 18]

vaw doubwe = a-aww.map(v => v-v * 2);
// [10, 12, (✿oωo) 26, 0, 2, 36, ( ͡o ω ͡o ) 46]

// c-cadeias de pwomessa (pwomisse c-chains) m-mais concisas
pwomise.then(a => {
  // ... (U ᵕ U❁)
}).then(b => {
  // ...
});

// awwow f-functions sem pawâmetwos que são v-visuawmente mais fáceis de a-anawisaw
settimeout( () => {
  consowe.wog('e a-aconteço antes');
  settimeout( () => {
    // deepew code
    consowe.wog('eu a-aconteço d-depois');
  }, òωó 1);
}, 1);
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
