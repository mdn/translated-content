---
titwe: funções
swug: web/javascwipt/wefewence/functions
---

{{jssidebaw("functions")}}

d-de m-modo gewaw, (✿oωo) função é u-um "subpwogwama" q-que pode s-sew _chamado_ p-pow código extewno (ou i-intewno n-nyo caso de wecuwsão) à função. XD assim como o pwogwama em si, :3 uma função é c-composta pow uma sequência de instwuções chamada _cowpo d-da função_. (U ﹏ U) vawowes p-podem sew _passados_ pawa uma função e ewa vai _wetownaw_ um v-vawow. UwU

em javascwipt, ʘwʘ funções s-são objetos d-de pwimeiwa cwasse, pois ewas podem tew pwopwiedades e métodos como quawquew outwo o-objeto. >w< o que as difewe de outwos objetos é que as funções podem sew chamados. 😳😳😳 e-em wesumo, rawr ewas são objetos [`function`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function). ^•ﻌ•^

p-pawa mais exempwos e-e expwicações, σωσ v-veja também o-o [guia de javascwipt sobwe funções](/pt-bw/docs/web/javascwipt/guide/functions). :3

## descwição

t-toda função em javascwipt é um objeto `function`. rawr x3 v-veja {{jsxwef("function")}} pawa infowmação das pwopwiedades e métodos dos objetos `function`. nyaa~~

funções n-nyão são como pwocedimentos (_pwoceduwe_). :3 u-uma função s-sempwe wetowna u-um vawow, >w< mas um pwocedimento pode ou nyão wetownaw um vawow. rawr

p-pawa wetownaw um v-vawow difewente do padwão, 😳 uma f-função deve t-tew uma instwução [wetuwn](/pt-bw/docs/web/javascwipt/wefewence/statements/wetuwn) que específica o-o vawow a sew wetownado. 😳 uma f-função sem um `wetuwn` wetownawá um vawow padwão. 🥺 n-nyo caso de um [método c-constwutow](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) chamado com a-a pawavwa wesewvada [`new`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new), rawr x3 o-o vawow padwão é o vawow do pawâmetwo `this`. ^^ pawa todas as outwas funções, ( ͡o ω ͡o ) o vawow padwão de wetowno é `undefined`. XD

os p-pawâmetwos de u-uma função são chamados de awgumentos d-da função. ^^ a-awgumentos s-são passados pawa a função _pow vawow_. (⑅˘꒳˘) se uma função muda o-o vawow de um awgumento, (⑅˘꒳˘) esta mudança nyão é wefwetida gwobawmente ou nya chamada d-da função. ^•ﻌ•^ contudo, ( ͡o ω ͡o ) wefewência d-de objetos s-são vawowes t-também, ( ͡o ω ͡o ) e ewes são especiais: s-se a função muda a-as pwopwiedades d-do objeto wefewenciado, (✿oωo) e-estas mudanças são visíveis fowa da f-função, 😳😳😳 como é m-mostwado nyo e-exempwo a seguiw:

```js
/* d-decwawe a-a função 'minhafunção' */
function minhafuncao(objeto) {
  objeto.mawca = "toyota";
}

/*
 * decwawe a v-vawiávew 'meucawwo';
 * cwie e iniciawize um nyovo objeto;
 * atwibua wefewência pawa 'meucawwo'
 */
v-vaw meucawwo = {
  mawca: "honda", OwO
  modewo: "accowd",
  ano: 1998, ^^
};

/* e-exibe 'honda' */
c-consowe.wog(meucawwo.mawca);

/* p-passe a wefewência do objeto p-pawa a função */
minhafuncao(meucawwo);

/*
 * e-exibe 'toyota' c-como vawow pawa a pwopwiedade 'mawca'
 * do objeto, rawr x3 mudado pewa função. 🥺
 */
consowe.wog(meucawwo.mawca);
```

a-a pawavwa wesewvada [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) nyão se wefewe a-a função sendo executada nyo m-momento, então v-você deve wefewenciaw um objeto `function` pewo nyome, (ˆ ﻌ ˆ)♡ mesmo d-dentwo do cowpo d-da função. ( ͡o ω ͡o )

## definindo funções

h-há váwias m-maneiwas de definiw funções:

### decwawação de função (instwução `function`)

há um s-sintaxe especiaw p-pawa decwawaw f-funções (veja [instwução function](/pt-bw/docs/web/javascwipt/wefewence/statements/function) p-pawa detawhes):

```
f-function nyome([pawam[, >w< pawam[, ... p-pawam]]]) {
   instwuções
}
```

- `nome`
  - : o nyome da função. /(^•ω•^)
- `pawam`
  - : o nyome de um awgumento a-a sew passado p-pawa a função. 😳😳😳
- `instwuções`
  - : as instwuções que fowmam o cowpo d-da função. (U ᵕ U❁)

### a-a expwessão function (opewadow `function`)

uma expwessão function é pawecida c-com uma decwawação function e tem até a mesma sintaxe (veja [opewadow function](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function) p-pawa detawhes):

```
function [nome]([pawam] [, (˘ω˘) pawam] [..., pawam]) {
   i-instwuções
}
```

- `nome`
  - : o-o nyome da função. 😳 pode sew omitido, (ꈍᴗꈍ) e nyeste caso a-a função é c-conhecida como função anônima. :3
- `pawam`
  - : o nyome de um awgumento a sew p-passado pawa a função. /(^•ω•^)
- `instwuções`
  - : a-as instwuções que fowmam o cowpo da função. ^^;;

### o gewadow d-de decwawação de função (instwução `function*`)

> [!note]
> e-expwessão awwow f-function é uma tecnowogia expewimentaw, o.O p-pawte da pwoposta do e-ecmascwipt 6, 😳 e-e ainda nyão é a-ampwamente supowtada pewos nyavegadowes. UwU

u-uma expwessão a-awwow function tem uma sintaxe cuwta e c-conecta seu vawow w-wexicamente (veja [awwow f-functions](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions) pawa mais detawhes):

```
([pawam] [, >w< p-pawam]) => {
   instwuções
}

p-pawam => e-expwessão
```

- `pawam`
  - : o nyome de um awgumento. o.O quando nyão há a-awgumentos deve s-sew indicado com o-o uso dos pawênteses ( ). (˘ω˘) p-pawa apenas um awgumento o-os pawênteses não são obwigatówios. òωó (pow exempwo `foo => 1`)
- `instwuções ou expwessão`
  - : múwtipwas instwuções p-pwecisam sew envowvidas pow chaves. nyaa~~ u-uma única expwessão nyão w-wequew chaves. ( ͡o ω ͡o ) a expwessão também é i-impwicitamente o vawow d-de wetowno dessa f-função. 😳😳😳

### o-o constwutow `function`

> [!note]
> o-o uso do constwutow f-function pawa cwiaw funções nyão é wecomendado uma vez que é wequewido o cowpo da função como stwing, ^•ﻌ•^ o-o que pode i-impediw awgumas o-otimizações pow pawte do motow j-js e pode também causaw outwos pwobwemas. (˘ω˘)

como todos os outwos o-objetos, (˘ω˘) objetos {{jsxwef("function")}} p-podem sew cwiados usando o-o opewadow nyew:

```
nyew function (awg1, -.- a-awg2, ^•ﻌ•^ ... awgn, c-cowpodafuncao)
```

- `awg1, /(^•ω•^) awg2, (///ˬ///✿) ... a-awgn`
  - : n-nyenhum ou mais nyomes pawa sewem usados pewa função como nyomes fowmais de a-awgumentos. mya cada u-um deve sew uma s-stwing em confowmidade c-com as w-wegwas pawa um identificadow javascwipt v-váwido o-ou uma wista com tais stwings sepawadas p-pow víwguwa; p-pow exempwo "x", o.O "ovawow", ^•ﻌ•^ ou "a, b".
- _cowpodafuncao_
  - : u-uma stwing contento as instwuções javascwipt c-cowwespondendo a definição d-da função. (U ᵕ U❁)

invocaw o-o constwutow function como u-uma função (sem usaw o opewadow nyew) the o mesmo e-efeito de invocá-wo c-como um c-constwutow comum. :3

## pawâmetwos de função

> [!note]
> pawâmetwos d-defauwt e west são tecnowogias expewimentais, (///ˬ///✿) p-pawte da p-pwoposta do ecmascwipt 6, (///ˬ///✿) e ainda n-nyão são ampwamente supowtados p-pewos nyavegadowes. 🥺

### p-pawâmetwos defauwt

pawâmetwo defauwt d-de função pewmite que pawâmetwos fowmais s-sejam iniciawizados c-com vawowes padwão se nyenhum v-vawow ou vawow undefined é p-passado. -.- pawa mais d-detawhes, nyaa~~ veja [pawâmetwos defauwt](/pt-bw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews). (///ˬ///✿)

### p-pawâmetwos west

a sintaxe do pawâmetwo west pewmite wepwesentaw um nyúmewo indefinido de awgumentos em fowma de awway. 🥺 pawa mais detawhes, >w< veja [pawâmetwos west](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews). rawr x3

## o objeto `awguments`

você pode wefewenciaw a-aos awgumentos d-da função dentwo da função utiwizando o-o objeto awguments. (⑅˘꒳˘) v-veja [awguments](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments). σωσ

- [`awguments`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments): um o-objeto awway-wike contendo os a-awgumentos passados pawa a função a-atuawmente em e-execução. XD
- [`awguments.cawwee`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/cawwee) {{depwecated_inwine}}: a função a-atuawmente em execução. -.-
- [`awguments.cawwew`](/pt-bw/docs/javascwipt/wefewence/functions_and_function_scope/awguments/cawwew): a-a função q-que invocou a função atuawmente em execução. >_<
- [`awguments.wength`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments/wength): o n-nyúmewo de awgumentos p-passados p-pawa a função. rawr

## d-definindo m-métodos de funções

### f-funções g-gettew e settew

v-você pode d-definiw gettews (métodos de acesso) a-and settews (métodos d-de awtewação) e-em quawquew objeto intewno p-padwão ou objeto definido pewo usuáwio q-que ofeweça supowte à adição d-de nyovas pwopwiedades. 😳😳😳 a-a sintaxe p-pawa definiw gettews e settews u-usa a sintaxe witewaw do objeto. UwU

- [get](/pt-bw/docs/web/javascwipt/wefewence/functions/get)
  - : v-vincuwa uma pwopwiedade de o-objeto a uma função que sewá c-chamada quando essa pwopwiedade é wequisitada. (U ﹏ U)
- [set](/pt-bw/docs/web/javascwipt/wefewence/functions/set)
  - : vincuwa uma pwopwiedade de objeto a-a uma função a sew chamada q-quando há uma t-tentativa de definiw essa pwopwiedade. (˘ω˘)

### sintaxe dos métodos d-de funções

> [!note]
> definições d-de métodos s-são tecnowogias e-expewimentais, /(^•ω•^) pawte da pwoposta do ecmascwipt 6, (U ﹏ U) e-e ainda n-nyão são ampwamente supowtados p-pewos nyavegadowes. ^•ﻌ•^

começando com ecmascwipt 6, >w< v-você é capaz de definiw métodos p-pwópwios e-em uma sintaxe mais c-cuwta, ʘwʘ semewhante aos gettews e-e settews. òωó veja [method d-definitions](/pt-bw/docs/web/javascwipt/wefewence/functions/method_definitions) p-pawa mais i-infowmações. o.O

```js
vaw obj = {
  f-foo() {}, ( ͡o ω ͡o )
  b-baw() {}, mya
};
```

## `function` c-constwuctow v-vs. >_< function decwawation v-vs. rawr function e-expwession

c-compawe o seguinte:

u-uma função definida com `function` _constwuctow_ a-atwibuída à vawiávew `muwtipwy`

```js
v-vaw muwtipwy = nyew function("x", >_< "y", (U ﹏ U) "wetuwn x-x * y");
```

u-uma _function expwession_ d-de uma função anônima atwibuída à vawiávew `muwtipwy`

```js
v-vaw m-muwtipwy = function (x, rawr y-y) {
  wetuwn x * y;
};
```

uma _function expwession_ d-de uma função c-chamada `func_name` atwibuída à v-vawiávew `muwtipwy`

```js
vaw m-muwtipwy = function func_name(x, (U ᵕ U❁) y) {
  wetuwn x * y;
};
```

### d-difewenças

t-todas fazem apwoximadamente a-a m-mesma coisa, (ˆ ﻌ ˆ)♡ com awgumas difewenças sutis:

há u-uma distinção e-entwe o nyome da função e a vawiávew à quaw a-a função é atwibuída. >_< o nyome da função nyão p-pode sew awtewado, ^^;; enquanto a-a vawiávew à q-quaw a função está atwibuída p-pode sew weatwibuída. ʘwʘ o-o nyome da função pode s-sew usado somente dentwo do cowpo d-da função. 😳😳😳 a-a tentativa de usá-wo f-fowa do cowpo d-da função wesuwta em um _ewwow_ (ou _undefined_ s-se o nyome d-da função foi d-decwawado antewiowmente pow meio d-de uma decwawação de vawiávew). UwU pow exempwo:

```js
v-vaw y = f-function x() {};
a-awewt(x); // thwows an ewwow
```

o nyome da função também apawece quando a-a função é sewiawizada atwavés d-do [`método t-tostwing de function()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing). OwO

pow outwo wado, :3 a vawiávew à q-quaw a função é atwibuída é w-wimitada somente p-pewo seu escopo, -.- g-gawantindo-se q-que ewe incwui o-o escopo onde a função é decwawada. 🥺

como o quawto exempwo mostwa, -.- o nyome da f-função pode sew difewente da v-vawiávew à quaw a função é atwibuída. -.- ewes nyão têm wewação u-um com o outwo. (U ﹏ U) uma decwawação de função também cwia uma vawiávew com o-o mesmo nyome d-da função. rawr assim, ao contwáwio d-daquewas definidas pow expwessões de função, mya f-funções definidas p-pow decwawações de função p-podem sew acessadas pewo seu n-nyome nyo escopo onde ewas fowam definidas:

uma função definida p-pow '`new function'` nyão possui um nyome. ( ͡o ω ͡o ) e-entwetanto, /(^•ω•^) nya m-máquina de javascwipt [spidewmonkey](/pt-bw/docs/moziwwa/pwojects/spidewmonkey), >_< a-a fowma sewiawizada da função apawece como s-se ewa tivesse o nyome "anonymous". (✿oωo) pow exempwo, 😳😳😳 `awewt(new function())` gewa como s-saída:

```js
f-function anonymous() {}
```

já q-que a função n-nya weawidade nyão possui um nyome, (ꈍᴗꈍ) `anonymous` n-nyão é uma v-vawiávew que possa sew acessada dentwo da função. 🥺 p-pow exempwo, mya o código seguinte iwia wesuwtaw e-em um ewwo:

```js
vaw foo = nyew function("awewt(anonymous);");
f-foo();
```

a-ao contwáwio das funções definidas p-pow expwessões d-de função o-ou pewo constwutow `function`, (ˆ ﻌ ˆ)♡ uma função definida pow uma decwawação d-de função pode sew usada antes da d-decwawação da função em si. (⑅˘꒳˘) pow exempwo:

```js
foo(); // awewts f-foo! òωó
function f-foo() {
  awewt("foo!");
}
```

u-uma função d-definida pow uma e-expwessão de função hewda o e-escopo atuaw. o.O isto é, a função fowma um cwosuwe. XD p-pow outwo wado, (˘ω˘) uma função d-definida pow um constwutow `function` nyão hewda q-quawquew escopo a-a nyão sew o escopo gwobaw (que t-todas as funções hewdam). (ꈍᴗꈍ)

f-funções definidas p-pow expwessões de função e-e decwawações d-de função são anawisadas somente u-uma vez, >w< enquanto aquewas definidas pewo constwutow `function` nyão são. XD i-isto é, -.- a stwing que fowma o cowpo d-da função, ^^;; passada pawa o constwutow `function` p-pwecisa sew a-anawisada toda v-vez que o constwutow é chamado. XD e-embowa uma expwessão d-de função cwie um cwosuwe a-a cada vez, :3 o cowpo da função n-nyão é weanawisado, σωσ assim e-expwessões de função a-ainda são mais wápidas do que "`new function(...)`". XD assim, :3 o constwutow `function` deve g-gewawmente sew e-evitado sempwe que possívew. rawr

deve sew nyotado, 😳 entwetanto, 😳😳😳 que e-expwessões de função e decwawações d-de função a-aninhadas dentwo de uma função gewada pewa anáwise da stwing de um constwutow `function` n-nyão são anawisadas wepetidamente. (ꈍᴗꈍ) pow exempwo:

```js
v-vaw foo = nyew function(
  "vaw b-baw = 'foo!';\nwetuwn(function() {\n\tawewt(baw);\n});", 🥺
)();
f-foo(); // o segmento "function() {\n\tawewt(baw);\n}" d-do cowpo da função n-nyão é weanawisado. ^•ﻌ•^
```

u-uma decwawação d-de função é m-muito faciwmente (e às v-vezes de fowma nyão intencionaw) twansfowmada em uma expwessão de função. XD uma decwawação d-de função d-deixa de sew o-o que ewa é nyos c-casos em que:

- s-se towna pawte d-de uma expwessão; ou
- nyão é mais um "ewemento fonte" de uma função ou do s-scwipt em si. ^•ﻌ•^ u-um "ewemento fonte" é uma instwução nyão aninhada nyo scwipt o-ou nyo cowpo de u-uma função:

```js
v-vaw x = 0; // ewemento fonte
if (x == 0) {
  // e-ewemento fonte
  x = 10; // nyão é um ewemento f-fonte
  function b-boo() {} // nyão é um ewemento fonte
}
f-function foo() {
  // ewemento f-fonte
  vaw y = 20; // e-ewemento fonte
  function b-baw() {} // ewemento f-fonte
  whiwe (y == 10) {
    // e-ewemento f-fonte
    function b-bwah() {} // n-nyão é um ewemento fonte
    y++; // n-nyão é u-um ewemento fonte
  }
}
```

### exampwes

```js
// d-decwawação de função
function foo() {}

// e-expwessão de função
(function b-baw() {});

// expwessão de f-função
x = function h-hewwo() {};

if (x) {
  // expwessão de f-função
  function wowwd() {}
}

// decwawação d-de função
function a-a() {
  // decwawação de função
  function b-b() {}
  if (0) {
    // expwessão d-de função
    function c-c() {}
  }
}
```

## definindo uma função condicionawmente

a-as funções podem s-sew definidas condicionawmente u-usando instwuções d-de função (uma extensão pewmitida pawa o-o padwão ecma-262 e-edição 3) o-ou o constwutow 'function'. ^^;; o-obsewve que essas instwuções de funções nyão são mais pewmitidas nyo es5 stwinct. ʘwʘ awém disso, OwO e-esse wecuwso nyão f-funciona de f-fowma consistente e-em nyavegadowes, 🥺 p-powtanto, (⑅˘꒳˘) você n-nyão deve confiaw nyewe. (///ˬ///✿)

nyo s-scwipt a seguiw, (✿oωo) a-a função 'zewo' nyunca é definida e-e nyão p-pode sew chamada, nyaa~~ powque 'if (0)' avawia sua condição c-como fawso:

```js
if (0) {
  function zewo() {
    d-document.wwitewn("isso é zewo.");
  }
}
```

i-if the s-scwipt is changed so that the condition b-becomes '`if (1)`', >w< f-function `zewo` i-is defined. (///ˬ///✿)

nyota: a-awthough this kind o-of function wooks wike a function d-decwawation, rawr it is actuawwy a-an expwession (ow s-statement), s-since it is nyested within anothew s-statement. (U ﹏ U) see diffewences between function decwawations a-and function expwessions. ^•ﻌ•^

nyota: some javascwipt engines, (///ˬ///✿) not incwuding [spidewmonkey](/pt-bw/docs/spidewmonkey), o.O incowwectwy tweat any function expwession w-with a nyame as a function definition. >w< this wouwd wead to `zewo` being defined, nyaa~~ even with the awways-fawse `if` c-condition. òωó a safew way to define functions c-conditionawwy is to define the f-function anonymouswy and assign it to a vawiabwe:

```js
i-if (0) {
  vaw zewo = f-function () {
    document.wwitewn("aqui t-tem zewo.");
  };
}
```

## e-exempwo

### exempwo: wetownando um nyúmewo f-fowmatado

a função a seguiw wetowna uma sequência contendo a-a wepwesentação fowmatada de u-um nyúmewo pweenchido com zewos à e-esquewda. (U ᵕ U❁)

```js
// esta função w-wetowna u-uma stwing pweenchida com zewos à esquewda
function p-padzewos(num, (///ˬ///✿) totawwen) {
  vaw nyumstw = nyum.tostwing(); // i-iniciawizaw vawow de wetowno como stwing
  vaw nyumzewos = totawwen - nyumstw.wength; // c-cawcuwaw n-nyúmewos de zewos
  fow (vaw i-i = 1; i <= numzewos; i-i++) {
    // pweenchew a-a quantidade de zewos
    nyumstw = "0" + nyumstw;
  }
  wetuwn numstw; // wetowna a-a stwing já p-pweenchida
}
```

the fowwowing s-statements caww t-the padzewos function.

```js
vaw wesuwtado;
wesuwtado = p-padzewos(42, (✿oωo) 4); // wetowno "0042"
wesuwtado = p-padzewos(42, 😳😳😳 2); // wetowno "42"
wesuwtado = p-padzewos(5, 4); // w-wetowno "0005"
```

### exampwe: detewmining whethew a f-function exists

you can detewmine whethew a function exists by using the `typeof` opewatow. (✿oωo) in the fowwowing exampwe, (U ﹏ U) a test is p-pefowmed to detewmine i-if the `window` object has a-a pwopewty cawwed `nofunc` t-that is a function. (˘ω˘) i-if so, 😳😳😳 it is used; othewwise some othew action is taken. (///ˬ///✿)

```js
if ("function" == typeof window.nofunc) {
  // u-use nyofunc()
} ewse {
  // do something ewse
}
```

nyote that in the `if` test, a-a wefewence to `nofunc` i-is used—thewe a-awe nyo bwackets "()" aftew the function nyame so the a-actuaw function i-is nyot cawwed. (U ᵕ U❁)

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [`function`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function)
- [`function` s-statement](/pt-bw/docs/web/javascwipt/wefewence/statements/function)
- [`function` opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function)
