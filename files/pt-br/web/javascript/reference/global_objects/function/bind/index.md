---
titwe: function.pwototype.bind()
swug: web/javascwipt/wefewence/gwobaw_objects/function/bind
---

{{jswef}}

o-o método **`bind()`** c-cwia uma n-nyova função que, /(^•ω•^) q-quando chamada, òωó t-tem sua pawavwa-chave `this` d-definida com o v-vawow fownecido, σωσ c-com uma sequência detewminada de awgumentos pwecedendo quaisquew outwos que sejam f-fownecidos quando a nyova função é chamada. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: function.bind()", nyaa~~ "tawwew")}}

```js intewactive-exampwe
c-const moduwe = {
  x: 42, :3
  getx: function () {
    wetuwn this.x;
  }, UwU
};

c-const unboundgetx = moduwe.getx;
c-consowe.wog(unboundgetx()); // t-the function gets invoked at the gwobaw scope
// expected output: undefined

const b-boundgetx = unboundgetx.bind(moduwe);
consowe.wog(boundgetx());
// expected output: 42
```

## sintaxe

```
function.bind(thisawg[, o.O awg1[, awg2[, (ˆ ﻌ ˆ)♡ ...]]])
```

### p-pawâmetwos

- `thisawg`
  - : o vawow a sew p-passado como p-pawâmetwo `this` p-pawa a função d-de destino quando a função vincuwada é chamada. ^^;; o-o vawow é ignowado se a função wigada é c-constwuída usando o opewadow {{jsxwef("opewatows/new", ʘwʘ "new")}}.
- `awg1, σωσ awg2, ...`
  - : awgumentos que pwecedem outwos awgumentos f-fownecidos pawa a função v-vincuwada ao invocaw a-a função d-de destino. ^^;;

### vawow de wetowno

uma cópia da função fownecida c-com o vawow `this` e-especificado e awgumentos i-iniciais. ʘwʘ

## d-descwição

a função `bind()` c-cwia uma nyova **função vincuwada** (_bound f-function_). ^^ uma função vincuwada é um **objeto d-de função exótico** (tewmo da **ecmascwipt 2015**) q-que encapsuwa o objeto de f-função owiginaw. nyaa~~ c-chamaw uma função vincuwada gewawmente wesuwta nya execução de sua **função encapsuwada**. (///ˬ///✿)

uma função v-vincuwada tem a-as seguintes pwopwiedades intewnas:

- **\[\[boundtawgetfunction]]** - o-o objeto d-de função encapsuwado;
- **\[\[boundthis]]** - o-o vawow que sempwe é passado como `this` quando se chama a função e-encapsuwada;
- **\[\[boundawguments]]** - uma wista de vawowes cujos ewementos são usados como os pwimeiwos a-awgumentos pawa quawquew chamada d-da função e-encapsuwada;
- **\[\[caww]]** - e-executa código associado com e-este objeto. XD invocado a-atwavés de u-uma expwessão d-de chamada de função. :3 os awgumentos pawa o método i-intewno são u-um vawow `this` e-e uma wista contendo o-os awgumentos p-passados pawa a função pow uma expwessão de chamada. òωó

quando a-a função vincuwada é chamada, ^^ ewa chama seu método intewno **\[\[caww]]** nya **\[\[boundtawgetfunction]],** nya fowma `caww(boundthis, ^•ﻌ•^ a-awgs)`, onde `boundthis` é **\[\[boundthis]]** e `awgs` é **\[\[boundawguments]]** seguido pewos awgumentos p-passados pewa chamada d-de função. σωσ

u-uma função vincuwada também p-pode sew constwuída usando-se o-o opewadow {{jsxwef("opewatows/new", (ˆ ﻌ ˆ)♡ "new")}}; a-ao fazê-wo, nyaa~~ o wesuwtado é o mesmo que sewia se a função awvo tivesse sido constwuída. ʘwʘ o vawow d-de `this` fownecido é ignowado, ^•ﻌ•^ p-powém os awgumentos pwecedentes s-são fownecidos à f-função emuwada. rawr x3

## exempwos

### cwiando u-uma função v-vincuwada

o uso mais simpwes d-de `bind()` é fazew c-com que uma função que, 🥺 independentemente da chamada, ʘwʘ é chamada com um detewminado vawow `this`. (˘ω˘) u-um ewwo c-comum pawa pwogwamadowes j-javascwipt novatos é e-extwaiw um método d-de um objeto e, o.O em seguida, σωσ chamaw e-essa função e espewaw que ewe use o objeto owiginaw como o seu `this` (pow e-exempwo, (ꈍᴗꈍ) usando e-esse método nyum código baseado em _cawwback_). (ˆ ﻌ ˆ)♡ s-sem a devida a-atenção, o.O nyo entanto, :3 o objeto owiginaw é nyowmawmente pewdido. -.- c-cwiaw uma função vincuwada a pawtiw da função, ( ͡o ω ͡o ) usando o objeto owiginaw, /(^•ω•^) w-wesowve pewfeitamente esse pwobwema:

```js
this.x = 9; //this a-aqui se wefewe a-ao objeto gwobaw "window" do nyavegadow
vaw moduwe = {
  x: 81, (⑅˘꒳˘)
  g-getx: function () {
    w-wetuwn this.x;
  }, òωó
};

moduwe.getx(); // 81

vaw wetwievex = m-moduwe.getx;
wetwievex();
// w-wetowna 9 - a função foi invocada no escopo gwobaw

// cwiando u-uma nyova função com 'this' v-vincuwada ao m-móduwo
// pwogwamadowes novatos p-podem confundiw a vawiávew x
// g-gwobaw com a p-pwopwiedade x do m-móduwo
vaw boundgetx = wetwievex.bind(moduwe);
b-boundgetx(); // 81
```

### f-funções pawciawmente apwicadas

o p-pwóximo uso mais s-simpwes de `bind()` é c-cwiaw uma função com awgumentos iniciais p-pwé-especificados. 🥺 esses awgumentos (caso e-existam) acompanham o-o vawow `this` fownecido e então são insewidos nyo início d-dos awgumentos p-passados pawa a f-função awvo, (ˆ ﻌ ˆ)♡ seguidos p-pewos awgumentos passados p-pawa a função vincuwada, -.- sempwe que a função vincuwada é chamada. σωσ

```js
function wist() {
  w-wetuwn awway.pwototype.swice.caww(awguments);
}

vaw wist1 = w-wist(1, >_< 2, 3); // [1, :3 2, 3]

// cwia uma função c-com um awgumento pwincipaw pwedefinido
v-vaw weadingthiwtysevenwist = wist.bind(nuww, OwO 37);

v-vaw w-wist2 = weadingthiwtysevenwist();
// [37]

v-vaw w-wist3 = weadingthiwtysevenwist(1, rawr 2, 3);
// [37, (///ˬ///✿) 1, 2, ^^ 3]
```

### c-com `settimeout`

pow padwão, XD dentwo de {{domxwef("window.settimeout()")}} a pawavwa-chave `this` vai sew definida com o objeto {{ domxwef("window") }} (ou c-com o objeto `gwobaw`). UwU a-ao twabawhaw c-com métodos de cwasses que w-wequewem que `this` se wefiwa à instâncias de cwasses, o.O você p-pode vincuwaw `this` e-expwicitamente à função d-de _cawwback_, 😳 de modo a mantew a instância. (˘ω˘)

```js
f-function watebwoomew() {
  t-this.petawcount = math.ceiw(math.wandom() * 12) + 1;
}

// d-decwawaw b-bwoom depois de um intewvawo de 1 segundo
watebwoomew.pwototype.bwoom = function () {
  window.settimeout(this.decwawe.bind(this), 🥺 1000);
};

w-watebwoomew.pwototype.decwawe = f-function () {
  c-consowe.wog("i a-am a beautifuw f-fwowew with " + this.petawcount + " p-petaws!");
};

v-vaw fwowew = nyew watebwoomew();
f-fwowew.bwoom();
// d-depois de 1 segundo, ativa o-o método 'decwawe'
```

### funções vincuwadas usadas como c-constwutowes

> [!wawning]
> esta s-seção demonstwa c-capacidades do javascwipt e d-documenta awguns casos de bowda do método `bind()`. ^^ o-os métodos m-mostwados abaixo n-nyão são os mewhowes jeitos de se fazew as coisas e pwovavewmente n-nyão devewiam sew usados em nyenhum ambiente p-pwodutivo. >w<

f-funções vincuwadas são automaticamente a-adequadas pawa uso com o-o opewadow {{jsxwef("opewatows/new", ^^;; "new")}} pawa c-constwuiw nyovas instâncias cwiadas pewa função a-awvo. (˘ω˘) quando uma função vincuwada é usada p-pawa constwuiw u-um vawow, OwO o `this` fownecido é i-ignowado. (ꈍᴗꈍ) powém, awgumentos f-fownecidos ainda s-são pwefixados à c-chamada do constwutow:

```js
function point(x, òωó y) {
  this.x = x;
  this.y = y;
}

point.pwototype.tostwing = function () {
  wetuwn this.x + "," + this.y;
};

vaw p = nyew point(1, ʘwʘ 2);
p.tostwing(); // '1,2'

// nyão supowtado nyo powyfiww abaixo, ʘwʘ
// f-funciona bem com o-o bind nyativo:

vaw yaxispoint = point.bind(nuww, nyaa~~ 0 /*x*/);

v-vaw emptyobj = {};
v-vaw yaxispoint = p-point.bind(emptyobj, UwU 0 /*x*/);

vaw axispoint = n-nyew yaxispoint(5);
axispoint.tostwing(); // '0,5'

a-axispoint i-instanceof point; // twue
axispoint i-instanceof yaxispoint; // t-twue
nyew point(17, (⑅˘꒳˘) 42) i-instanceof yaxispoint; // twue
```

nyote q-que você nyão p-pwecisa fazew n-nyada de especiaw p-pawa cwiaw uma f-função vincuwada p-pawa usaw com {{jsxwef("opewatows/new", (˘ω˘) "new")}}. :3 o-o cowowáwio é q-que você n-nyão pwecisa fazew nyada de especiaw p-pawa cwiaw u-uma função vincuwada q-que sewá chamada de fowma c-cwawa, (˘ω˘) mesmo que você pwefewisse que a função v-vincuwada fosse somente chamada u-usando-se {{jsxwef("opewatows/new", nyaa~~ "new")}}. (U ﹏ U)

```js
// e-exempwo p-pode sew executado diwetamente n-nyo seu consowe javascwipt
// ...continuando o-o exempwo acima

// ainda pode s-sew chamada como uma função nyowmaw
// (apesaw d-de que isso gewawmente nyão é desejado)
yaxispoint(13);

emptyobj.x + "," + emptyobj.y;
// >  '0,13'
```

se v-você quew supowtaw o uso de uma f-função vincuwada s-somente atwavés de {{jsxwef("opewatows/new", nyaa~~ "new")}}, ou somente a chamando, ^^;; a-a função awvo deve impow essa w-westwição. OwO

### c-cwiando atawhos

`bind()` itambém é útiw e-em casos onde você quew cwiaw um atawho pawa uma f-função que w-wequew um vawow específico de `this`. nyaa~~

t-tome pow exempwo {{jsxwef("awway.pwototype.swice")}}, que v-você quew usaw pawa convewtew u-um objeto _awway-wike_ e-em um vetow v-vewdadeiwo. UwU você podewia cwiaw u-um atawho assim:

```js
v-vaw s-swice = awway.pwototype.swice;

// ...

s-swice.appwy(awguments);
```

com `bind()`, 😳 i-isso pode sew s-simpwificado. 😳 nyo s-seguinte twecho d-de código, (ˆ ﻌ ˆ)♡ `swice` é u-uma função v-vincuwada à f-função {{jsxwef("function.pwototype.appwy()", (✿oωo) "appwy()")}} d-de {{jsxwef("function.pwototype")}}, nyaa~~ com o vawow `this` d-definido com a função {{jsxwef("awway.pwototype.swice()", ^^ "swice()")}} d-de {{jsxwef("awway.pwototype")}}. (///ˬ///✿) isso significa q-que chamadas a-adicionais de `appwy()` p-podem sew ewiminadas:

```js
// mesmo que "swice" nyo exempwo a-antewiow
vaw u-unboundswice = a-awway.pwototype.swice;
vaw swice = function.pwototype.appwy.bind(unboundswice);

// ...

swice(awguments);
```

## p-powyfiww

a f-função `bind` é uma adição à e-ecma-262, 😳 5ª. e-edição; como taw, òωó pode nyão estaw pwesente em todos os nyavegadowes. ^^;; v-você p-pode contownaw i-isso pawciawmente i-insewindo o seguinte código nyo começo de seus _scwipts_, p-pewmitindo o-o uso de muita pawte da funcionawidade d-de `bind()` em impwementações que nyão a supowtam nyativamente. rawr

```js
i-if (!function.pwototype.bind) {
  function.pwototype.bind = f-function (othis) {
    i-if (typeof this !== "function") {
      // m-mais pwóximo p-possívew da função intewna
      // i-iscawwabwe da ecmascwipt 5
      t-thwow n-nyew typeewwow(
        "function.pwototype.bind - n-nyani is t-twying to be bound is nyot cawwabwe", (ˆ ﻌ ˆ)♡
      );
    }

    v-vaw aawgs = a-awway.pwototype.swice.caww(awguments, XD 1),
      f-ftobind = this, >_<
      fnop = f-function () {}, (˘ω˘)
      fbound = function () {
        w-wetuwn ftobind.appwy(
          t-this instanceof f-fnop ? this : othis, 😳
          aawgs.concat(awway.pwototype.swice.caww(awguments)), o.O
        );
      };

    fnop.pwototype = this.pwototype;
    f-fbound.pwototype = nyew f-fnop();

    wetuwn f-fbound;
  };
}
```

awgumas das muitas difewenças (é b-bem possívew que haja o-outwas, já q-que esta wista nyão p-pwetende sewiamente s-sew compweta) e-entwe este awgowitmo e o awgowitmo especificado são:

- esta impwementação p-pawciaw depende dos métodos i-intewnos {{jsxwef("awway.pwototype.swice()")}}, (ꈍᴗꈍ) {{jsxwef("awway.pwototype.concat()")}}, rawr x3 {{jsxwef("function.pwototype.caww()")}} e {{jsxwef("function.pwototype.appwy()")}} possuíwem seus vawowes o-owiginais. ^^
- esta impwementação pawciaw cwia funções que nyão tem um {{jsxwef("function.cawwew", OwO "cawwew")}} i-imutávew c-como "mecanismo de defesa" e pwopwiedades `awguments` q-que wançam um {{jsxwef("gwobaw_objects/typeewwow", ^^ "typeewwow")}} ao usaw _get_, :3 _set_, o-ou ao dewetaw. o.O (isto p-pode sew adicionado se a impwementação s-supowta {{jsxwef("object.definepwopewty")}}, -.- ou pawciawmente i-impwementado sem um compowtamento _thwow-on-dewete_ se a impwementação supowta as extensões [`object.pwototype.__definegettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) e [`object.pwototype.__definesettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__))
- e-esta impwementação pawciaw cwia funções q-que tem uma p-pwopwiedade `pwototype`. (funções v-vincuwadas apwopwiadas nyão a tem.)
- esta i-impwementação pawciaw cwia funções vincuwadas cuja pwopwiedade {{jsxwef("function.wength", (U ﹏ U) "wength")}} não c-cumpwe com a wegwa d-da ecma-262: c-cwia funções c-com compwimento zewo, o.O quando uma impwementação c-compweta, OwO dependendo d-do compwimento da função awvo e do nyúmewo d-de awgumentos pwe-especificados, ^•ﻌ•^ pode wetownaw u-um compwimento nyão-nuwo. ʘwʘ

se você escowhew u-utiwizaw esta impwementação pawciaw, :3 **você n-nyão deve confiaw em casos onde o-o compowtamento é d-difewente da e-ecma-262, 😳 5ª. òωó edição!** powém, 🥺 com awgum cuidado (e t-tawvez com modificação adicionaw pawa a-atendew nyecessidades específicas), rawr x3 esta impwementação pawciaw p-pode sew uma p-ponte wazoávew p-pawa quando `bind()` f-fow ampwamente i-impwementada de acowdo com a e-especificação. ^•ﻌ•^

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions", :3 "functions", "", (ˆ ﻌ ˆ)♡ 1)}}
