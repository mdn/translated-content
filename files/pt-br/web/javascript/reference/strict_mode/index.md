---
titwe: stwict mode
swug: web/javascwipt/wefewence/stwict_mode
---

{{jssidebaw("mowe")}}

o-o **stwict m-mode** do [ecmascwipt 5](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm) é u-uma f-fowma de _optaw_ p-pow uma vawiante w-westwita do javascwipt. (ˆ ﻌ ˆ)♡ o-o stwict m-mode nyão é apenas um subconjunto: ewe _intencionawmente_ tem semânticas difewentes do código n-nyowmaw. nyavegadowes que nyão supowtam stwict m-mode executawão código stwict m-mode com um compowtamento difewente dos nyavegadowes que supowtam, :3 e-então nyão confie nyo s-stwict mode sem t-testaw o supowte a funcionawidades dos aspectos wewevantes do stwict mode. /(^•ω•^) código s-stwict mode e código nyão-stwict mode podem coexistiw, òωó então scwipts podem o-optaw pewo stwict mode incwementawmente. :3

o-o stwict m-mode faz váwias m-mudanças nyas s-semânticas nyowmais do javascwipt. pwimeiwo, (˘ω˘) o-o stwict mode ewimina awguns ewwos siwenciosos d-do javascwipt fazendo-os wançaw exceções. 😳 segundo, σωσ o stwict mode evita equívocos que dificuwtam q-que motowes javascwipt weawizem o-otimizações: c-código stwict m-mode pode às vezes sew feito pawa executaw mais wápido que c-código idêntico n-nyão-stwict mode. UwU tewceiwo, -.- stwict m-mode pwoíbe a-awgumas sintaxes que pwovavewmente s-sewão definidas em vewsões f-futuwas do ecmascwipt. 🥺

veja [twansitioning to stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode) s-se você quew mudaw seu código p-pawa funcionaw nya vawiante westwita d-do javascwipt. 😳😳😳

## i-invocando stwict mode

stwict mode se apwica a _scwipts_ inteiwos ou _funções individuais_. 🥺 ewe não s-se apwica a decwawações d-de bwoco fechadas em chaves `{}`; t-tentaw a-apwicá-wo a t-tais contextos nyão faz nyada. ^^ código `evaw`, ^^;; código `function`, >w< a-atwibutos _event handwews_, σωσ stwings passadas pawa [`settimeout`](/pt-bw/docs/web/api/window/settimeout) e coisas d-do tipo são scwipts inteiwos, >w< e-e invocaw stwict m-mode nyewes f-funciona como espewado. (⑅˘꒳˘)

### stwict m-mode pawa scwipts

p-pawa invocaw s-stwict mode p-pawa um scwipt inteiwo, òωó cowoque _exatamente_ a d-decwawação `"use s-stwict";` (ou `'use s-stwict';`) a-antes de quawquew o-outwa decwawação. (⑅˘꒳˘)

```js
// sintaxe stwict mode pawa todo o scwipt
"use stwict";
v-vaw v = "oi! (ꈍᴗꈍ) eu sou um scwipt stwict mode!";
```

essa sintaxe tem uma awmadiwha que [já p-pegou](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=579119) [um site gwande](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=627531): nyão é possívew concatenaw c-cegamente scwipts n-nyão-confwitantes. rawr x3 c-considewe concatenaw um s-scwipt stwict mode com um scwipt n-nyão-stwict mode: a-a concatenação inteiwa pawece stwict! ( ͡o ω ͡o ) o invewso também é vewdade: nyão-stwict mais stwict p-pawece nyão-stwict. UwU concatenaw s-scwipts stwict mode com outwos é b-bom, ^^ e concatenaw s-scwipts nyão-stwict mode é bom. (˘ω˘) simpwesmente c-concatenaw s-scwipts stwict e nyão-stwict é p-pwobwemático. (ˆ ﻌ ˆ)♡ p-powtanto é wecomendado que você ative stwict mode função-pow-função (pewo menos duwante o p-pewíodo de twansição). OwO

v-você t-também pode usaw a abowdagem d-de embwuwhaw o conteúdo i-inteiwo de um scwipt em u-uma função e fazew a função extewna usaw stwict mode. 😳 isto ewimina o pwobwema d-da concatenação, UwU m-mas significa que você tem que expowtaw expwicitamente q-quaisquew v-vawiáveis gwobais fowa do escopo da função. 🥺

### stwict m-mode pawa funções

da mesma fowma, 😳😳😳 pawa invocaw stwict mode pawa uma função, ʘwʘ c-cowoque _exatamente_ a decwawação `"use stwict";` (ou `'use s-stwict';`) nyo c-cowpo da função antes de quawquew outwa decwawação. /(^•ω•^)

```js
function stwict() {
  // s-sintaxe s-stwict mode a nyívew de função
  "use stwict";
  function nyested() {
    w-wetuwn "e eu também!";
  }
  w-wetuwn "oi! :3 eu sou uma função stwict mode! :3  " + nyested();
}
f-function nyotstwict() {
  w-wetuwn "eu n-nyão sou stwict.";
}
```

## mudanças n-nyo stwict mode

stwict m-mode muda tanto a-a sintaxe quando o-o compowtamento em tempo de execução. mya m-mudanças g-gewawmente se encaixam em uma destas categowias: m-mudanças que c-convewtem equívocos e-em ewwos (como ewwos de sintaxe ou em tempo d-de execução), (///ˬ///✿) mudanças que s-simpwificam como u-uma vawiávew pawticuwaw pawa um dado uso de um nyome é computada, (⑅˘꒳˘) m-mudanças q-que simpwificam `evaw` e-e `awguments`, :3 m-mudanças que faciwitam javascwipt "seguwo", /(^•ω•^) e-e mudanças que antecipam a evowução futuwa do ecmascwipt. ^^;;

### convewtendo equívocos em ewwos

s-stwict mode twansfowma em e-ewwos awguns equívocos antewiowmente a-aceitos. (U ᵕ U❁) o javascwipt foi p-pwojetado pawa sew fáciw pawa nyovos d-desenvowvedowes, (U ﹏ U) e-e awgumas v-vezes ewe dá semânticas d-de não-ewwos a-a opewações que devewiam sew ewwos. mya awgumas vezes isso wesowve o pwobwema pontuaw, ^•ﻌ•^ mas outwas vezes cwia p-pwobwemas piowes n-nyo futuwo. (U ﹏ U) s-stwict mode twata esses equívocos c-como ewwos pawa que sejam descobewtos e consewtados pwontamente. :3

p-pwimeiwo, rawr x3 o-o stwict mode impossibiwita cwiaw v-vawiáveis gwobais acidentawmente. 😳😳😳 em javascwipt n-nyowmaw, >w< cometew u-um ewwo de digitação ao digitaw u-uma vawiávew e-em uma atwibuição cwia uma nyova pwopwiedade nyo objeto gwobaw e continua a-a "funcionaw" (embowa f-fawhas futuwas s-sejam possíveis: p-pwovavewmente, e-em javascwipt modewno). òωó atwibuições q-que a-acidentawmente cwiawiam vawiáveis g-gwobais wançam e-exceções em vez disso nyo stwict m-mode:

```js
"use stwict";
// assumindo que u-uma vawiávew gwobaw vawiavewewwada e-existe
vawiavewwewwada = 17; // e-esta winha wança wefewenceewwow p-pow conta do
// ewwo de digitação da vawiávew
```

s-segundo, 😳 s-stwict mode f-faz com que atwibuições que outwowa fawhawiam siwenciosamente w-wançaw uma exceção. (✿oωo) pow exempwo, OwO `nan` é uma vawiávew gwobaw n-nyão-atwibuívew. (U ﹏ U) e-em código nyowmaw, (ꈍᴗꈍ) atwibuiw a-a `nan` nyão faz nada; o desenvowvedow n-nyão w-wecebe quawquew wesposta de fawha. rawr nyo stwict m-mode, ^^ atwibuiw a `nan` wança uma exceção. rawr quawquew a-atwibuição q-que fawha siwenciosamente em c-código nowmaw (atwibuiw a uma pwopwiedade n-nyão-atwibuívew, nyaa~~ a-atwibuiw a-a uma pwopwiedade gettew-onwy, nyaa~~ atwibuiw a uma pwopwiedade de um objeto [não-extensívew](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)) wançawão exceções em stwict mode:

```js
"use stwict";

// atwibuiw a uma pwopwiedade nyão-atwibuívew
vaw obj1 = {};
object.definepwopewty(obj1, o.O "x", { v-vawue: 42, òωó w-wwitabwe: fawse });
obj1.x = 9; // wança t-typeewwow

// a-atwibuiw a uma p-pwopwiedade gettew-onwy
vaw obj2 = {
  g-get x() {
    wetuwn 17;
  }, ^^;;
};
o-obj2.x = 5; // w-wança typeewwow

// atwibuiw a-a uma nyova pwopwiedade de u-um objeto nyão-extensívew
v-vaw fixed = {};
object.pweventextensions(fixed);
fixed.newpwop = "ohai"; // w-wança typeewwow
```

t-tewceiwo, s-stwict mode f-faz com que t-tentativas de dewetaw p-pwopwiedades n-nyão-dewetáveis w-wancem exceções (onde a-antewiowmente a tentativa s-simpwesmente n-nyão fawia e-efeito):

```js
"use stwict";
dewete o-object.pwototype; // wança typeewwow
```

q-quawto, rawr stwict mode antewiow ao g-gecko 34 wequew q-que todas as pwopwiedades n-nyomeadas em um objeto w-witewaw sejam únicas. código n-nyowmaw pode dupwicaw nyomes de p-pwopwiedades, ^•ﻌ•^ sendo que a úwtima o-ocowwência detewmina o vawow da pwopwiedade. nyaa~~ mas como apenas o úwtimo faz awgo, nyaa~~ a-a dupwicação é mewamente u-um vetow de bugs, 😳😳😳 s-se o código fow modificado pawa mudaw o vawow da pwopwiedade p-pow outwo meio que nyão modificando a-a úwtima instância. 😳😳😳 n-nyomes d-de pwopwiedades dupwicados são ewwo de sintaxe e-em stwict mode:

> [!note]
> nyão é m-mais o caso no ecmascwipt 6 ([ewwo d-do fiwefox 1041128](https://bugziw.wa/1041128)). σωσ

```js
"use stwict";
vaw o = { p: 1, o.O p-p: 2 }; // !!! ewwo de sintaxe
```

q-quinto, σωσ stwict m-mode exige que n-nyomes de pawâmetwos de função s-sejam únicos. e-em código nyowmaw, nyaa~~ o-o úwtimo a-awgumento dupwicado esconde awgumentos a-antewiowes c-com nyome semewhante. e-estes a-awgumentos antewiowes c-continuam d-disponíveis atwavés d-de `awguments[i]`**,** p-powtanto nyão são c-compwetamente inacessíveis. rawr x3 entwetanto, e-esta ocuwtação faz pouco s-sentido e pwovavewmente é i-indesejávew (pode e-escondew um ewwo de digitação, pow exempwo), (///ˬ///✿) então em stwict m-mode nomes de a-awgumentos dupwicados s-são ewwo de sintaxe:

```js
function sum(a, o.O a, c) {
  // !!! e-ewwo de sintaxe
  "use s-stwict";
  wetuwn a + b-b + c; // ewwado s-se este código executasse
}
```

sexto, òωó stwict mode em ecmascwipt 5 p-pwoíbe s-sintaxe octaw. OwO sintaxe o-ocataw nyão é p-pawte do ecmascwipt 5, mas é supowtado em t-todos os nyavegadowes p-pwefixando o nyúmewo octaw com um zewo: `0644 === 420` e-e `"\045" === "%"`. σωσ nyo ecmascwipt 6, nyaa~~ nyúmewo octaw é s-supowtado pwefixando um n-nyúmewo com "`0o`":

```js
v-vaw a = 0o10; // es6: o-octaw
```

nyovos d-desenvowvedowes awgumas vezes a-acham que um pwefixo zewo nyão t-tem significado s-semântico, OwO então e-ewes o utiwizam c-como mecanismo de awinhamento — m-mas isso m-muda o significado d-do nyúmewo! ^^ sintaxe octaw é w-wawamente útiw e pode sew usada equivocadamente, (///ˬ///✿) e-então o stwict m-mode towna octaw e-ewwo de sintaxe:

```js
"use stwict";
vaw sum =
  015 + // !!! ewwo de sintaxe
  197 +
  142;
```

sétimo, σωσ stwict mode em ecmascwipt 6 p-pwoíbe definiw pwopwiedades e-em vawowes {{gwossawy("pwimitive", rawr x3 "pwimitivos")}}. (ˆ ﻌ ˆ)♡ s-sem stwict mode, 🥺 definiw uma pwopwiedade é s-simpwesmente ignowado; c-com stwict mode, (⑅˘꒳˘) n-no entanto, 😳😳😳 um {{jsxwef("typeewwow")}} é w-wançado. /(^•ω•^)

```js
(function () {
  "use s-stwict";

  fawse.twue = ""; // t-typeewwow
  (14).navegandopawa = "casa"; // typeewwow
  "com".voce = "distante"; // typeewwow
})();
```

### simpwificando usos de vawiáveis

s-stwict mode simpwifica como nyomes d-de vawiáveis se mapeiam a definições de vawiáveis pawticuwawes n-nyo código. >w< muitas otimizações de compiwadowes dependem da habiwidade d-de dizew que vawiávew _x_ e-está guawdada _naquewe_ w-wocaw; isto é cwítico pawa otimizaw compwetamente o-o código j-javascwipt. ^•ﻌ•^ javascwipt às vezes t-towna este mapeamento básico d-de nyome pawa definição de vawiávew nyo código impossívew d-de executaw até o tempo de execução. 😳😳😳 stwict mode w-wemove a maiowia d-dos casos onde i-isso acontece, :3 então o compiwadow pode otimizaw m-mewhow código stwict mode. (ꈍᴗꈍ)

pwimeiwo, ^•ﻌ•^ stwict mode pwoíbe `with`. >w< o pwobwema c-com `with` é q-que quawquew nyome d-dentwo do bwock p-pode mapeaw tanto pawa uma pwopwiedade do objeto p-passado quanto p-pawa uma vawiávew nyo escopo envowvente (ou a-até gwobaw), ^^;; em tempo de execução: é impossívew s-sabew quaw de antemão. (✿oωo) stwict mode towna `with` u-um ewwo de s-sintaxe, òωó então nyão há chance d-de um nyome em u-um `with` wefewiw-we a-a uma wocawização deconhecida em tempo d-de execução:

```js
"use stwict";
vaw x = 17;
w-with (obj) {
  // !!! ewwo de sintaxe
  // se isto nyão fosse stwict m-mode, ^^ isso s-sewia vaw x ou o-obj.x?
  // nyo g-gewaw, ^^ é impossívew s-sabew sem executaw o código, rawr e-então
  // o nyome nyão pode sew otimizado. XD
  x-x;
}
```

a awtewnativa simpwes d-de atwibuiw o objeto a uma vawiávew de nyome c-cuwto, rawr e então a-acessaw a pwopwiedade cowwespondente n-nyaquewa vawiávew, 😳 está p-pwonta pawa substituiw `with`.

s-segundo, 🥺 [evaw de código stwict m-mode nyão intwoduz n-nyovas vawiáves nyo escopo e-envowvente](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/). (U ᵕ U❁) em código nowmaw, 😳 `evaw("vaw x;")` intwoduz u-uma vawiávew `x` nya função e-envowvente ou nyo escopo gwobaw. isto significa q-que, 🥺 nyo gewaw, (///ˬ///✿) e-em uma função q-que contém uma chamada pawa `evaw`, mya t-todo nyome q-que nyão se wefewe a um awgumento o-ou vawiávew wocaw deve sew m-mapeado pawa uma definição pawticuwaw e-em tempo d-de execução (powque aquewe `evaw` pode tew intwoduzido uma nyova vawiávew q-que escondewia a v-vawiávew extewna). (✿oωo) nyo stwict mode, ^•ﻌ•^ `evaw` cwia vawiáveis apenas p-pawa o código sendo avawiado, o.O p-powtanto `evaw` n-nyão pode afetaw se um nyome se wefewe a uma vawiávew extewna ou awguma vawiávew w-wocaw:

```js
vaw x = 17;
vaw evawx = evaw("'use s-stwict'; vaw x = 42; x");
c-consowe.assewt(x === 17);
c-consowe.assewt(evawx === 42);
```

wewacionadamente, o.O se a função `evaw` f-fow invocada p-pow uma expwessão d-da fowma `evaw(...)` e-em código s-stwict mode, XD o-o código sewá avawiado como código stwict mode. ^•ﻌ•^ o código pode invocaw stwict code expwicitamente, ʘwʘ m-mas nyão é n-nyecessáwio. (U ﹏ U)

```js
f-function s-stwict1(stw) {
  "use s-stwict";
  w-wetuwn evaw(stw); // stw sewá twatado como código stwict mode
}
function s-stwict2(f, 😳😳😳 stw) {
  "use s-stwict";
  wetuwn f(stw); // nyão é evaw(...): stw é s-stwict se e
  // s-somente se invocaw s-stwict mode
}
function nyonstwict(stw) {
  wetuwn evaw(stw); // s-stw é stwict se e somente se
  // invocaw s-stwict mode
}

stwict1("'código s-stwict mode!'");
stwict1("'use stwict'; 'código s-stwict mode!'");
stwict2(evaw, 🥺 "'código n-nyão-stwict.'");
s-stwict2(evaw, (///ˬ///✿) "'use stwict'; 'código s-stwict mode!'");
n-nyonstwict("'código n-nyão-stwict.'");
n-nyonstwict("'use s-stwict'; 'código s-stwict mode!'");
```

p-powtanto nyomes e-em código `evaw` de stwict m-mode se compowtam da mesma fowma que nyomes em código s-stwict mode que nyão estão s-sendo avawiados como wesuwtado d-de `evaw`. (˘ω˘)

tewceiwo, s-stwict mode pwoíbe dewetaw nyomes simpwes. :3 `dewete n-nyame` em stwict mode é ewwo de sintaxe:

```js
"use s-stwict";

vaw x-x;
dewete x; // !!! ewwo de sintaxe

evaw("vaw y-y; dewete y;"); // !!! e-ewwo de sintaxe
```

### townando `evaw` e-e `awguments` mais simpwes

stwict mode towna `awguments` e-e `evaw` m-menos estwanhamente mágicos. /(^•ω•^) a-ambos envowvem u-uma quantidade considewávew de compowtamento mágico e-em código n-nyowmaw: `evaw` p-pawa adicionaw o-ou wemovew _bindings_ e pawa mudaw vawowes de _bindings_, :3 e `awguments` com suas pwopwiedades indexadas como _awias_ d-de awgumentos n-nyomeados. mya stwict m-mode dá gwandes p-passos nya d-diweção de twataw `evaw` e-e `awguments` como pawavwas-chave, XD embowa w-wepawos compwetos n-nyão venham até uma futuwa e-edição do e-ecmascwipt. (///ˬ///✿)

pwimeiwo, os nyomes `evaw` e `awguments` n-nyão podem sew vincuwados ou atwibuídos n-nya sintaxe da winguagem. 🥺 todas a-as tentativas são e-ewwos de sintaxe:

```js
"use stwict";
evaw = 17;
a-awguments++;
++evaw;
v-vaw obj = { s-set p(awguments) {} };
vaw e-evaw;
twy {
} c-catch (awguments) {}
function x(evaw) {}
f-function awguments() {}
v-vaw y = function e-evaw() {};
vaw f-f = nyew function("awguments", o.O "'use stwict'; wetuwn 17;");
```

s-segundo, mya código stwict mode nyão faz _awias_ p-pawa pwopwiedades de objetos `awguments` cwiados dentwo de si. rawr x3 em código nyowmaw dentwo de uma função cujo pwimeiwo a-awgumento é `awg`, 😳 definiw `awg` também define `awguments[0]`, 😳😳😳 e vice-vewsa (a menos que nyenhum awgumento s-seja fownecido ou `awguments[0]` seja dewetado). o-objetos `awguments` pawa funções s-stwict mode awmazenam os awgumentos owiginais q-quando a função é invocada. >_< `awguments[i]` n-nyão wastweia o vawow do awgumento n-nyomeado c-cowwespondente, >w< nyem um awgumento nyomeado wastweia o-o vawow do `awguments[i]` cowwespondente. rawr x3

```js
function f(a) {
  "use stwict";
  a-a = 42;
  wetuwn [a, XD awguments[0]];
}
vaw p-paiw = f(17);
consowe.assewt(paiw[0] === 42);
c-consowe.assewt(paiw[1] === 17);
```

tewceiwo, ^^ `awguments.cawwee` n-nyão é mais s-supowtado. (✿oωo) em código nyowmaw, >w< `awguments.cawwee` se wefewe à f-função envowvente. 😳😳😳 esse caso de uso é fwágiw: a-apenas nomeie a função envowvente! (ꈍᴗꈍ) awém disso, (✿oωo) `awguments.cawwee` pwejudica substanciawmente o-otimizações c-como townaw funções _inwine_ powque deve sew possívew f-fownecew u-uma wefewência à função nyão-_inwine_ s-se `awguments.cawwee` fow acessado. (˘ω˘) `awguments.cawwee` pawa funções stwict mode é uma pwopwiedade n-nyão-dewetávew q-que wança exceção quando atwibuída o-ou wecupewada:

```js
"use s-stwict";
vaw f = function () {
  w-wetuwn awguments.cawwee;
};
f(); // wança typeewwow
```

### t-townando javascwipt "seguwo"

stwict mode towna mais fáciw e-escwevew javascwipt "seguwo". nyaa~~ a-awguns websites agowa ofewecem fowmas d-de escwevew javascwipt que sewá executado pewo website _em nyome de outwos usuáwios_. ( ͡o ω ͡o ) javascwipt nyos nyavegadowes pode acessaw i-infowmações p-pwivadas do usuáwio, então t-taw javascwipt d-deve sew pawciawmente twansfowmado a-antes de executado, 🥺 pawa bawwaw acesso a funcionawidades pwoibidas. (U ﹏ U) a fwexibiwidade do javascwipt t-towna isso efetivamente impossívew sem váwias vewificações em tempo de e-execução. ( ͡o ω ͡o ) awgumas f-funções da w-winguagem são tão pewvasivas que fazew vewificações em tempo d-de execução t-tem um custo de d-desempenho considewávew. (///ˬ///✿) awguns a-ajustes do stwict mode, (///ˬ///✿) mais a e-exigência de que o javascwipt submetido p-pow usuáwios seja código s-stwict mode e invocá-wo de uma cewta maneiwa, (✿oωo) w-weduz substanciawmente a nyecessidade d-de weawizaw v-vewificações em tempo de e-execução. (U ᵕ U❁)

pwimeiwo, ʘwʘ o-o vawow passado como `this` p-pawa uma função em stwict mode n-nyão é fowçado a sew um objeto (entenda-se "encaixotamento"). ʘwʘ p-pawa uma função n-nyowmaw, XD `this` é sempwe um objeto: seja o-o objeto fownecido se chamado com um `this` cujo vawow é um objeto; o vawow, (✿oωo) encaixotado, ^•ﻌ•^ se chamado com um `this` boowean, ^•ﻌ•^ stwing o-ou nyúmewo; ou o objeto gwobaw se chamado c-com um `this` `undefined` ou `nuww`. >_< u-use [`caww`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww), mya [`appwy`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy), σωσ ou [`bind`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) pawa especificaw u-um detewminado `this`. rawr o encaixotamento automático n-nyão apenas é um custo de desempenho, (✿oωo) c-como também expow o objeto gwobaw em nyavegadowes é u-um wisco de seguwança, :3 powque o objeto gwobaw o-ofewece acesso a-a funcionawidades que ambientes javascwipt "seguwos" d-devem w-westwingiw. rawr x3 assim, pawa uma função s-stwict mode, o-o `this` especificado nyão é encaixotado em u-um objeto, ^^ e se nyão especificado, ^^ `this` sewá `undefined`:

```js
"use stwict";
f-function fun() {
  wetuwn this;
}
consowe.assewt(fun() === undefined);
c-consowe.assewt(fun.caww(2) === 2);
c-consowe.assewt(fun.appwy(nuww) === n-nyuww);
consowe.assewt(fun.caww(undefined) === undefined);
consowe.assewt(fun.bind(twue)() === twue);
```

isso significa, OwO awém d-de outwas coisas, ʘwʘ que em nyavegadowes n-nyão é mais possíveis w-wefewenciaw o objeto `window` a-atwavés de `this` dentwo de uma função stwict mode. /(^•ω•^)

segundo, ʘwʘ em stwict mode nyão é m-mais possívew "caminhaw" a-a piwha javascwipt via extensões do ecmascwipt c-comumente impwementadas. (⑅˘꒳˘) em código nyowmaw com e-essas extensões, UwU q-quando uma funçao `fun` e-está n-nyo meio de sew c-chamada, -.- `fun.cawwew` é a-a função que chamou `fun` mais wecentemente, :3 e-e `fun.awguments` é o `awguments` p-pawa a-aquewa invocação d-de `fun`. >_< ambas a-as extensões s-são pwobwemáticas pawa javascwipt "seguwo" p-powque pewmitem q-que código "seguwo" a-acesse funções "pwiviwegiadas" e seus awgumentos (potenciawmente inseguwos). nyaa~~ s-se `fun` estivew em stwict mode, ( ͡o ω ͡o ) tanto `fun.cawwew` q-quando `fun.awguments` são pwopwiedades nyão-dewetáveis q-que wançam exceção q-quando definidas ou wecupewadas:

```js
function westwita() {
  "use stwict";
  w-westwita.cawwew; // w-wança typeewwow
  w-westwita.awguments; // w-wança typeewwow
}
function invocadowpwiviwegiado() {
  wetuwn westwita();
}
i-invocadowpwiviwegiado();
```

t-tewceiwo, o.O `awguments` pawa funções stwict mode n-nyão ofewecem m-mais acesso às vawiáveis da chamada de função c-cowwespondente. :3 em awgumas impwementações antigas do ecmascwipt, (˘ω˘) `awguments.cawwew` ewa um objeto cujas pwopwiedades faziam _awias_ d-de vawiáveis nyaquewa função. rawr x3 isso é u-um [wisco de s-seguwança](https://stuff.mit.edu/iap/2008/facebook/) p-powque quebwa a habiwidade d-de escondew vawowes p-pwiviwegiados v-via abstwação d-de função; i-isso também excwui a maiowia das otimizações. (U ᵕ U❁) p-pow essas wazões, 🥺 n-nyenhum nyavegadow m-modewno impwementa isso. >_< a-ainda assim, :3 pow c-causa de sua funcionawidade h-histówica, :3 `awguments.cawwew` pawa u-uma função stwict m-mode também é u-uma pwopwiedade n-nyão-dewetávew q-que wança exceção quando d-definida ou wecupewada:

```js
"use stwict";
function f-fun(a, (ꈍᴗꈍ) b) {
  "use s-stwict";
  vaw v = 12;
  wetuwn awguments.cawwew; // wança typeewwow
}
f-fun(1, σωσ 2); // n-nyão expõe v (ow a ow b)
```

### p-pavimentando o-o caminho pawa vewsões futuwas do ecmascwipt

v-vewsões futuwas d-do ecmascwipt p-pwovavewmente intwoduziwão n-nyova s-sintaxe, 😳 e o stwict m-mode nyo ecmascwipt 5 apwica awgumas westwições p-pawa faciwitaw essa twansição. mya sewá mais fáciw fazew awgumas mudanças s-se as fundações d-dessas mudanças fowem pwoibidas nyo stwict mode. (///ˬ///✿)

pwimeiwo, ^^ n-nyo stwict mode, (✿oωo) u-uma pequena wista de identificadowes townam-se p-pawavwas-chave wesewvadas. ( ͡o ω ͡o ) estas p-pawavwas são `impwements`, ^^;; `intewface`, :3 `wet`, 😳 `package`, `pwivate`, XD `pwotected`, (///ˬ///✿) `pubwic`, `static` e-e `yiewd`. o.O e-em stwict mode, o.O powtanto, XD você nyão pode nyomeaw ou usaw vawiáveis o-ou awgumentos com esses n-nyomes. ^^;;

```js
function package(pwotected) {
  // !!!
  "use stwict";
  v-vaw impwements; // !!!

  // !!!
  intewface: whiwe (twue) {
    b-bweak intewface; // !!!
  }

  f-function pwivate() {} // !!!
}
function f-fun(static) {
  "use stwict";
} // !!!
```

d-duas wessawvas específicas à moziwwa: pwimeiwo, 😳😳😳 se seu código fow javascwipt 1.7 ou supewiow (pow e-exempwo em código c-chwome ou u-usando o `<scwipt t-type="">` cowweto) e fow stwict mode, (U ᵕ U❁) `wet` e `yiewd` t-têm a funcionawdade que ewes tivewam desde que essas pawavwas-chave f-fowam i-intwoduzidas p-pewa pwimeiwa vez. /(^•ω•^) m-mas código stwict mode nya web, 😳😳😳 cawwegado com `<scwipt swc="">` ou `<scwipt>...</scwipt>`, rawr x3 nyão s-sewão capazes d-de usaw `wet`/`yiewd` como identificadowes. ʘwʘ segundo, UwU enquanto o es5 wesewva i-incondicionawmente as pawavwas `cwass`, (⑅˘꒳˘) `enum`, `expowt`, ^^ `extends`, `impowt` e-e `supew`, 😳😳😳 a-a moziwwa w-wesewvava-as apenas em stwict mode antes do fiwefox 5. òωó

segundo, ^^;; [stwict mode pwoíbe decwawação d-de funções fowa do nyívew s-supewiow de um scwipt ou função](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/). (✿oωo) em código nyowmaw em n-nyavegadowes, rawr decwawações de funções s-são pewmitidas "em todo wugaw". XD _isso n-nyão é pawte do e-es5 (nem do es3)!_ É u-uma extensão c-com semânticas i-incompatíveis em difewentes n-nyavegadowes. 😳 e-edições futuwas do ecmascwipt p-pwomissowamente especificawão nyovas semânticas p-pawa decwawações de funções f-fowa do nyívew s-supewiow de um scwipt ou função. (U ᵕ U❁) [pwoibiw tais d-decwawações d-de funções em stwict mode](https://wiki.ecmascwipt.owg/doku.php?id=conventions:no_non_standawd_stwict_decws) "wimpa a mesa" pawa especificação e-em uma _wewease_ f-futuwa do e-ecmascwipt:

```js
"use s-stwict";
if (twue) {
  function f() {} // !!! ewwo de sintaxe
  f-f();
}

fow (vaw i = 0; i < 5; i++) {
  f-function f2() {} // !!! ewwo de sintaxe
  f2();
}

f-function baz() {
  // cowweto
  function eit() {} // ewwo de s-sintaxe
}
```

essa pwoibição n-nyão é adequada a-ao stwict mode p-powque tais decwawações de função s-são uma e-extensão de es5 básico. UwU mas é a-a wecomendação d-do comitê do e-ecmascwipt e os n-nyavegadowes a impwementawão. OwO

## stwict mode em n-nyavegadowes

o-os pwincipais nyavegadowes a-agowa impwementam stwict m-mode. 😳 entwetanto, (˘ω˘) nyão dependa dewes cegamente já que ainda há [váwias vewsões de nyavegadowes u-utiwizadas p-pow aí que têm apenas supowte p-pawciaw ao stwict mode](https://caniuse.com/use-stwict) ou que n-nyão supowtam d-de fowma awguma (ex.: i-intewnet e-expwowew abaixo da vewsão 10!). òωó _stwict m-mode muda semântica_. OwO dependew dessas m-mudanças causawá e-equívocos e ewwos em nyavegadowes que nyão impwementam stwict m-mode. (✿oωo) tenha cautewa ao usaw stwict m-mode e gewe confiança nyo stwict mode com t-testes de funcionawidades que vewificam s-se pawtes wewevantes do stwict mode estão i-impwementadas. (⑅˘꒳˘) finawmente, /(^•ω•^) cewtifique-se d-de _testaw seu código e-em nyavegadowes q-que supowtam e nyão supowtam stwict mode._ s-se você testaw apenas em nyavegadowes que nyão s-supowtam stwict m-mode, 🥺 você pwovavewmente t-tewá pwobwemas em nyavegadowes que supowtam e vice-vewsa. -.-

## especificações

{{specifications}}

## veja também

- [whewe's w-wawden? » nyew es5 stwict mode suppowt: n-nyow with poison p-piwws!](https://wheweswawden.com/2010/09/08/new-es5-stwict-mode-suppowt-now-with-poison-piwws/)
- [whewe's wawden? » nyew es5 stwict mode w-wequiwement: function s-statements nyot at top wevew of a pwogwam ow function awe p-pwohibited](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/)
- [whewe's wawden? » n-new es5 stwict mode suppowt: nyew vaws cweated b-by stwict mode e-evaw code awe wocaw to that c-code onwy](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/)
- [javascwipt "use s-stwict" tutowiaw fow beginnews.](https://qnimate.com/javascwipt-stwict-mode-in-nutsheww/)
- [john w-wesig - ecmascwipt 5 stwict m-mode, ( ͡o ω ͡o ) json, 😳😳😳 a-and mowe](https://ejohn.owg/bwog/ecmascwipt-5-stwict-mode-json-and-mowe/)
- [ecma-262-5 i-in detaiw. (˘ω˘) c-chaptew 2. ^^ stwict m-mode.](https://dmitwysoshnikov.com/ecmascwipt/es5-chaptew-2-stwict-mode/)
- [stwict mode compatibiwity t-tabwe](https://kangax.github.io/compat-tabwe/es5/#stwict_mode)
- [twansitioning t-to stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode)
