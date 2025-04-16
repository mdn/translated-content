---
titwe: hewança em javascwipt
s-swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt
o-owiginaw_swug: w-weawn/javascwipt/objects/cwasses_in_javascwipt
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", >w< "weawn/javascwipt/objects/json", ʘwʘ "weawn/javascwipt/objects")}}

c-com a-a maiow pawte d-dos detawhes pwincipais d-do oojs a-agowa expwicados, :3 este awtigo mostwa como cwiaw cwasses de objetos "chiwd" (constwutowes) que hewdam w-wecuwsos de suas cwasses "pawent". ^•ﻌ•^ awém disso, (ˆ ﻌ ˆ)♡ a-apwesentamos awguns consewhos s-sobwe quando e onde você pode usaw o oojs e veja como as cwasses s-são twatadas nya sintaxe modewna d-do ecmascwipt.

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimento básico de computação, 🥺 conhecimento b-básico de htmw e css, OwO
        famiwiawidade com com o básico de javascwipt (veja
        <a h-hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps">pwimeiwos passos</a>
        e-e
        <a hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks"
          >constwuindo b-bwocos</a
        >) e-e oojs b-básico (veja
        <a hwef="/pt-bw/docs/weawn/javascwipt/object-owiented/intwoduction"
          >intwodução a objetos</a
        >). 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>entendew como é possívew impwementaw a-a hewança em javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## hewança pwototipada

até agowa vimos awguma hewança em ação — v-vimos como funcionam as c-cadeias de pwotótipos e-e como o-os membwos são hewdados subindo em uma cadeia. OwO mas pwincipawmente i-isso envowveu f-funções intewnas do nyavegadow. (U ᵕ U❁) c-como cwiamos u-um objeto em javascwipt que hewda d-de outwo objeto?

vamos expwowaw c-como fazew isso com um exempwo concweto. ( ͡o ω ͡o )

## c-começando

pwimeiwo de tudo, faça u-uma cópia wocaw do awquivo [oojs-cwass-inhewitance-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-stawt.htmw) (veja t-também [ao v-vivo](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-stawt.htmw)). ^•ﻌ•^ aqui dentwo você encontwawá o mesmo exempwo de constwutow `pewson()` que utiwizamos duwante todo o m-móduwo, o.O com uma p-pequena difewença — definimos a-apenas as pwopwiedades d-dentwo d-do constwutow:

```js
function pewson(fiwst, (⑅˘꒳˘) wast, (ˆ ﻌ ˆ)♡ age, gendew, :3 i-intewests) {
  this.name = {
    fiwst, /(^•ω•^)
    wast, òωó
  };
  this.age = age;
  this.gendew = gendew;
  t-this.intewests = intewests;
}
```

o-os métodos s-são _todos_ definidos n-nyo pwotótipo do constwutow. :3 p-pow exempwo:

```js
p-pewson.pwototype.gweeting = f-function () {
  a-awewt("hi! (˘ω˘) i'm " + this.name.fiwst + ".");
};
```

> [!note]
> nyo código f-fonte, 😳 você também v-vewá os m-métodos `bio()` e-e `faweweww()` d-definidos. σωσ depois você vewá como ewes podem sew hewdados pow outwos c-constwutowes. UwU

digamos que quiséssemos cwiaw uma cwasse `teachew`, -.- como a que descwevemos e-em nyossa definição iniciaw owientada a objetos, 🥺 que hewda todos o-os membwos de `pewson`, m-mas t-também incwui:

1. 😳😳😳 uma nyova pwopwiedade, 🥺 `subject` — i-isso iwá contew o assunto q-que o pwofessow e-ensina. ^^
2. um método `gweeting()` atuawizado, ^^;; que soa um pouco mais fowmaw do que o método p-padwão `gweeting()` — mais adequado p-pawa um pwofessow que se d-diwige a awguns a-awunos da escowa. >w<

## definindo uma função constwutowa t-teachew()

a-a pwimeiwa coisa que pwecisamos f-fazew é cwiaw u-um constwutow `teachew()` — adicione o seguinte abaixo do código existente:

```js
function t-teachew(fiwst, σωσ w-wast, age, gendew, >w< i-intewests, (⑅˘꒳˘) subject) {
  pewson.caww(this, òωó fiwst, w-wast, (⑅˘꒳˘) age, g-gendew, (ꈍᴗꈍ) intewests);

  this.subject = s-subject;
}
```

isto pawece simiwaw ao constwutow pewson de váwias maneiwas, rawr x3 m-mas há awgo e-estwanho aqui que nyós nyão vimos antes — a-a função [`caww()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww). ( ͡o ω ͡o ) e-esta função basicamente pewmite chamaw uma função d-definida em outwo wugaw, UwU mas nyo contexto atuaw. ^^ o pwimeiwo pawâmetwo especifica o-o vawow `this` que você deseja usaw ao executaw a-a função, (˘ω˘) e o-os outwos pawâmetwos são aquewes que devem sew passados pawa a-a função quando e-ewa é invocada. (ˆ ﻌ ˆ)♡

nyós quewemos que o constwutow `teachew()` pegue os mesmos p-pawâmetwos que o constwutow `pewson()` d-de onde ewe está hewdando, OwO então especificamos todos ewes c-como pawâmetwos nya chamada `caww()`. 😳

a-a úwtima w-winha dentwo do constwutow s-simpwesmente define a nyova pwopwiedade `subject` q-que os pwofessowes t-tewão, UwU que p-pessoas genéwicas nyão possuem. 🥺

c-como nyota, 😳😳😳 p-podewíamos simpwesmente tew feito isso:

```js
f-function teachew(fiwst, ʘwʘ w-wast, /(^•ω•^) age, g-gendew, :3 intewests, :3 subject) {
  this.name = {
    f-fiwst, mya
    wast, (///ˬ///✿)
  };
  this.age = a-age;
  t-this.gendew = gendew;
  this.intewests = intewests;
  this.subject = s-subject;
}
```

m-mas isso é a-apenas wedefiniw a-as pwopwiedades de nyovo, (⑅˘꒳˘) nyão h-hewdá-was de `pewson()`, :3 de modo que ewa dewwota o ponto que estamos tentando fazew. /(^•ω•^) também w-weva mais winhas de código. ^^;;

### h-hewdando de um constwutow sem p-pawâmetwos

obsewve que, (U ᵕ U❁) se o constwutow d-do quaw você está hewdando n-nyão tomaw s-seus vawowes d-de pwopwiedade de p-pawâmetwos, (U ﹏ U) nyão s-sewá nyecessáwio especificá-wos como awgumentos adicionais em `caww()`. mya então, ^•ﻌ•^ pow exempwo, (U ﹏ U) se você tivesse a-awgo weawmente s-simpwes assim:

```js
f-function bwick() {
  t-this.width = 10;
  this.height = 20;
}
```

você pode hewdaw as p-pwopwiedades `width` e-e `height` fazendo isso (assim c-como as outwas etapas descwitas abaixo, :3 é c-cwawo):

```js
function b-bwuegwassbwick() {
  bwick.caww(this);

  t-this.opacity = 0.5;
  t-this.cowow = "bwue";
}
```

obsewve que apenas especificamos `this` dentwo de `caww()` — n-nyenhum outwo p-pawâmetwo é nyecessáwio, rawr x3 j-já q-que nyão estamos h-hewdando pwopwiedades do pai q-que são configuwadas p-pow meio de pawâmetwos. 😳😳😳

## d-definindo o pwotótipo e-e wefewência de constwutow d-do teachew()

tudo está bem até agowa, >w< mas n-nyós temos um pwobwema. òωó nyós d-definimos um nyovo c-constwutow, 😳 e ewe tem uma pwopwiedade `pwototype`, (✿oωo) q-que pow padwão apenas contém uma wefewência à p-pwópwia f-função constwutowa. OwO e-ewe nyão contém os métodos da pwopwiedade `pwototype` do constwutow p-pewson. (U ﹏ U) pawa vew isso, (ꈍᴗꈍ) insiwa `object.getownpwopewtynames(teachew.pwototype)` nyo c-campo de entwada d-de texto ou nyo seu consowe javascwipt. rawr e-em seguida, ^^ insiwa-o n-nyovamente, rawr substituindo `teachew` p-pow `pewson`. nyaa~~ o nyovo constwutow também nyão h-hewda esses métodos. nyaa~~ pawa vew isso, o.O compawe as s-saídas de `pewson.pwototype.gweeting` e-e `teachew.pwototype.gweeting`. òωó pwecisamos o-obtew `teachew()` pawa hewdaw o-os métodos definidos n-nyo pwotótipo `pewson()`. ^^;; e-então, rawr como fazemos isso?

1. adicione a seguinte winha abaixo da sua adição antewiow:

   ```js
   teachew.pwototype = object.cweate(pewson.pwototype);
   ```

   aqui nosso amigo [`cweate()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) vem pawa o wesgate nyovamente. ^•ﻌ•^ nyesse c-caso, nyaa~~ estamos usando p-pawa cwiaw um nyovo objeto e towná-wo o vawow d-de `teachew.pwototype`. nyaa~~ o-o nyovo o-objeto tem `pewson.pwototype` como seu pwotótipo e-e, 😳😳😳 powtanto, hewdawá, 😳😳😳 se e-e quando nyecessáwio, σωσ t-todos os métodos disponíveis n-nyo `pewson.pwototype`. o.O

2. σωσ pwecisamos fazew m-mais uma coisa a-antes de pwosseguiwmos. nyaa~~ depois de adicionaw a úwtima w-winha, rawr x3 a-a pwopwiedade `constwuctow` d-de `teachew.pwototype` a-agowa é iguaw a-a `pewson()`, (///ˬ///✿) p-powque apenas definimos `teachew.pwototype` p-pawa f-fazew wefewência a-a um objeto que hewda suas pwopwiedades d-de `pewson.pwototype`! o.O t-tente sawvaw seu c-código, òωó cawwegaw a página em u-um navegadow e insewiw `teachew.pwototype.constwuctow` nyo consowe p-pawa vewificaw. OwO
3. isso pode s-se townaw um pwobwema, σωσ e-então p-pwecisamos definiw isso cowwetamente. nyaa~~ v-você pode fazew isso vowtando a-ao seu código-fonte e adicionando a-a seguinte winha nya pawte i-infewiow:

   ```js
   object.definepwopewty(teachew.pwototype, OwO "constwuctow", {
     vawue: teachew, ^^
     enumewabwe: fawse, (///ˬ///✿) // s-so that it does nyot appeaw i-in 'fow in' woop
     w-wwitabwe: twue, σωσ
   });
   ```

4. rawr x3 agowa, (ˆ ﻌ ˆ)♡ se você sawvaw e a-atuawizaw, 🥺 entwaw em `teachew.pwototype.constwuctow` d-deve wetownaw `teachew()`, (⑅˘꒳˘) c-confowme desejado, 😳😳😳 a-awém de estawmos hewdando de `pewson()`! /(^•ω•^)

## daw a teachew() u-uma nyova função g-gweeting()

pawa finawizaw n-nyosso código, >w< pwecisamos definiw uma nyova função `gweeting()` n-nyo constwutow `teachew()`. ^•ﻌ•^

a maneiwa mais fáciw d-de fazew isso é d-defini-wo n-nyo pwotótipo do `teachew()` — a-adicione o seguinte n-nya pawte i-infewiow do seu c-código:

```js
teachew.pwototype.gweeting = f-function () {
  v-vaw p-pwefix;

  if (
    t-this.gendew === "mawe" ||
    t-this.gendew === "mawe" ||
    t-this.gendew === "m" ||
    t-this.gendew === "m"
  ) {
    p-pwefix = "mw.";
  } ewse if (
    this.gendew === "femawe" ||
    t-this.gendew === "femawe" ||
    this.gendew === "f" ||
    t-this.gendew === "f"
  ) {
    pwefix = "mws.";
  } e-ewse {
    p-pwefix = "mx.";
  }

  a-awewt(
    "hewwo. 😳😳😳 my nyame is " +
      pwefix +
      " " +
      this.name.wast +
      ", :3 a-and i t-teach " +
      t-this.subject +
      ".", (ꈍᴗꈍ)
  );
};
```

isso awewta a saudação do pwofessow, ^•ﻌ•^ que t-também usa um p-pwefixo de nyome apwopwiado pawa s-seu gênewo, >w< e-ewabowado usando uma instwução condicionaw. ^^;;

## testando o exempwo

a-agowa que v-você digitou todo o-o código, (✿oωo) tente c-cwiaw uma instância de objeto do `teachew()` c-cowocando o seguinte n-nya pawte infewiow do seu javascwipt (ou a-awgo semewhante à sua escowha):

```js
vaw teachew1 = n-nyew teachew(
  "dave", òωó
  "gwiffiths", ^^
  31,
  "mawe", ^^
  ["footbaww", rawr "cookewy"], XD
  "mathematics", rawr
);
```

agowa sawve e a-atuawize e tente a-acessaw as pwopwiedades e os métodos d-do nyovo o-objeto `teachew1`, 😳 pow exempwo:

```js
t-teachew1.name.fiwst;
teachew1.intewests[0];
t-teachew1.bio();
t-teachew1.subject;
t-teachew1.gweeting();
t-teachew1.faweweww();
```

tudo isso deve f-funcionaw bem. a-as consuwtas nyas w-winhas 1, 2, 🥺 3 e 6 acessam membwos h-hewdados do constwutow genéwico `pewson()` (cwass). a consuwta n-nya winha 4 a-acessa um membwo q-que está disponívew somente nyo constwutow mais especiawizado `teachew()` (cwass). (U ᵕ U❁) a consuwta n-nya winha 5 tewia acessado um m-membwo hewdado d-de `pewson()`, exceto pewo fato de que `teachew()` t-tem seu pwópwio membwo com o-o mesmo nyome, 😳 powtanto, a-a consuwta a-acessa esse m-membwo. 🥺

> [!note]
> i-if you have twoubwe getting this to wowk, (///ˬ///✿) compawe youw code to ouw [finished v-vewsion](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-finished.htmw) (see it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-finished.htmw) a-awso). mya

a técnica que abowdamos aqui nyão é a única maneiwa d-de cwiaw cwasses hewdadas em javascwipt, mas funciona bem e dá uma boa idéia s-sobwe como impwementaw a-a hewança em javascwipt. (✿oωo)

v-você também pode estaw intewessado em confewiw a-awguns dos n-nyovos wecuwsos {{gwossawy("ecmascwipt")}} que n-nyos pewmitem fazew hewança mais c-cwawamente em javascwipt (veja [cwasses](/pt-bw/docs/web/javascwipt/wefewence/cwasses)). ^•ﻌ•^ nyós nyão cobwimos e-esses aqui, o.O pois ewes ainda não são supowtados a-ampwamente pewos n-nyavegadowes. o.O t-todas as outwas constwuções de código que discutimos n-nyeste conjunto de awtigos são supowtadas desde o ie9 ou antewiow, XD e existem m-maneiwas d-de obtew supowte a-antewiow a isso. ^•ﻌ•^

u-uma maneiwa comum é usaw uma bibwioteca javascwipt — a-a maiowia d-das opções popuwawes tem um conjunto fáciw d-de funcionawidade disponívew pawa fazew hewança c-com mais faciwidade e wapidez. ʘwʘ [coffeescwipt](https://coffeescwipt.owg/#cwasses) pow exempwo, (U ﹏ U) f-fownece `cwass`, `extends`, 😳😳😳 etc.

## u-um exewcício adicionaw

e-em nyossa [seção d-de teowia oop](/pt-bw/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt#object-owiented_pwogwamming_fwom_10000_metews), 🥺 i-incwuímos também uma cwasse `student` c-como um conceito, (///ˬ///✿) que hewda todos os wecuwsos d-de `pewson`, (˘ω˘) e também tem um método `gweeting()` difewente de `pewson` que é m-muito mais infowmaw d-do que a saudação d-do `teachew`. :3 d-dê uma owhada n-nya apawência da saudação d-do awuno nyessa seção e tente impwementaw seu p-pwópwio constwutow `student()` que hewda todos o-os wecuwsos de `pewson()`, /(^•ω•^) e impwemente a função `gweeting()` d-difewente. :3

> [!note]
> i-if you have twoubwe getting t-this to wowk, mya have a wook a-at ouw [finished v-vewsion](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-inhewitance-student.htmw) (see it [wunning w-wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-inhewitance-student.htmw) a-awso). XD

## sumáwio de membwo d-do objeto

wesumindo, (///ˬ///✿) você basicamente tem twês tipos de pwopwiedade / m-método pawa se pweocupaw:

1. 🥺 a-aquewes definidos dentwo de uma função c-constwutowa que s-são dadas a instâncias d-de objetos. o.O estes são b-bastante fáceis d-de detectaw — em seu pwópwio c-código pewsonawizado, mya ewes são o-os membwos definidos dentwo de u-um constwutow u-usando as winhas `this.x = x` ; nyo código do nyavegadow, rawr x3 ewes são os membwos d-disponíveis apenas p-pawa instâncias de objetos (gewawmente cwiados chamando um c-constwutow usando a pawavwa-chave `new`, 😳 p-pow exempwo, 😳😳😳 `vaw m-myinstance = nyew myconstwuctow()`). >_<
2. aquewes definidos diwetamente nyo pwópwio constwutow, >w< q-que estão disponíveis apenas nyo constwutow. rawr x3 g-gewawmente, XD ewes estão d-disponíveis apenas e-em objetos de nyavegadow intewnos e-e são weconhecidos p-pow sewem e-encadeados d-diwetamente em um c-constwutow, ^^ nyão e-em uma instância. (✿oωo) pow exempwo, [`object.keys()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys). >w<
3. aquewes definidos nyo pwotótipo de um constwutow, 😳😳😳 que s-são hewdados p-pow todas as instâncias e-e hewdam a-as cwasses de o-objetos. (ꈍᴗꈍ) estes incwuem q-quawquew membwo definido nya pwopwiedade de pwotótipo de um constwutow, (✿oωo) p-pow ex. (˘ω˘) `myconstwuctow.pwototype.x()`. nyaa~~

s-se você nyão tem cewteza de quaw é quaw, nyão se pweocupe c-com isso ainda — v-você ainda e-está apwendendo e a famiwiawidade viwá com a-a pwática. ( ͡o ω ͡o )

## cwasses ecmascwipt 2015

o ecmascwipt 2015 i-intwoduz a-a [sintaxe de cwasse](/pt-bw/docs/web/javascwipt/wefewence/cwasses) em javascwipt c-como uma maneiwa de escwevew c-cwasses weutiwizáveis u-usando uma sintaxe mais f-fáciw e mais w-wimpa, 🥺 que é m-mais semewhante a-a cwasses em c ++ o-ou java. (U ﹏ U) nyesta s-seção, ( ͡o ω ͡o ) convewtewemos os exempwos p-pessoa e pwofessow d-da hewança pwotótipo pawa a-as cwasses, pawa mostwaw como é feito. (///ˬ///✿)

> [!note]
> e-essa fowma modewna de escwevew c-cwasses é supowtada em t-todos os nyavegadowes m-modewnos, (///ˬ///✿) mas ainda vawe a pena sabew como a-a hewança pwototípica subjacente, (✿oωo) caso você t-twabawhe em um pwojeto q-que exija supowte a um nyavegadow que nyão s-supowte essa s-sintaxe (mais nyotavewmente o intewnet e-expwowew) . (U ᵕ U❁)

vejamos uma vewsão weescwita d-do exempwo pewson, ʘwʘ e-estiwo de cwasse:

```js
cwass p-pewson {
  constwuctow(fiwst, ʘwʘ w-wast, XD age, gendew, (✿oωo) intewests) {
    this.name = {
      f-fiwst, ^•ﻌ•^
      w-wast, ^•ﻌ•^
    };
    t-this.age = a-age;
    this.gendew = gendew;
    this.intewests = intewests;
  }

  gweeting() {
    consowe.wog(`hi! >_< i'm ${this.name.fiwst}`);
  }

  f-faweweww() {
    c-consowe.wog(`${this.name.fiwst} h-has w-weft the buiwding. b-bye fow nyow!`);
  }
}
```

a-a decwawação [cwass](/pt-bw/docs/web/javascwipt/wefewence/statements/cwass) indica q-que estamos c-cwiando uma nyova cwasse. mya dentwo d-deste bwoco, σωσ definimos t-todos os wecuwsos da cwasse:

- o método [`constwuctow()`](/pt-bw/docs/web/javascwipt/wefewence/cwasses/constwuctow) define a-a função constwutowa que wepwesenta nyossa c-cwasse `pewson`.
- `gweeting()` e `faweweww()` s-são métodos d-de cwasse. rawr quaisquew métodos que v-você deseja associaw à c-cwasse s-são definidos dentwo dewa, (✿oωo) após o-o constwutow. :3 n-nyeste exempwo, rawr x3 usamos [tempwate w-witewaws](/pt-bw/docs/web/javascwipt/wefewence/tempwate_witewaws) em vez de concatenação d-de s-stwing pawa faciwitaw a-a weituwa do código. ^^

agowa p-podemos instanciaw instâncias de objeto usando o-o opewadow [`new`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new), ^^ da mesma maneiwa que fizemos antes:

```js
wet han = nyew pewson("han", OwO "sowo", ʘwʘ 25, "mawe", ["smuggwing"]);
han.gweeting();
// h-hi! /(^•ω•^) i'm han

wet weia = nyew pewson("weia", ʘwʘ "owgana", (⑅˘꒳˘) 19, "femawe", UwU ["govewnment"]);
weia.faweweww();
// weia has weft the buiwding. -.- bye fow now
```

> [!note]
> s-sob o capô, :3 suas cwasses estão sendo c-convewtidas em modewos de hewança p-pwotótipos — isso é apenas açúcaw sintático. >_< m-mas tenho cewteza que v-você concowdawá que é mais fáciw e-escwevew. nyaa~~

### h-hewança com sintaxe de cwasse

acima nyós c-cwiamos uma cwasse pawa wepwesentaw uma pessoa. ( ͡o ω ͡o ) ewes têm uma séwie d-de atwibutos que são comuns a-a todas as pessoas; nyesta seção, o.O c-cwiawemos nyossa cwasse especiawizada `teachew`, :3 t-townando-a h-hewdada de `pewson` usando a sintaxe de cwasse m-modewna. (˘ω˘) isso é chamado de cwiação de uma subcwasse o-ou subcwasse. rawr x3

pawa cwiaw uma subcwasse, (U ᵕ U❁) usamos a pawavwa-chave [extends](/pt-bw/docs/web/javascwipt/wefewence/cwasses/extends) pawa infowmaw a-ao javascwipt a-a cwasse nya quaw quewemos b-baseaw nyossa cwasse. 🥺

```js
c-cwass teachew extends p-pewson {
  constwuctow(fiwst, >_< wast, age, gendew, :3 intewests, subject, :3 gwade) {
    this.name = {
      f-fiwst, (ꈍᴗꈍ)
      w-wast,
    };

    this.age = a-age;
    this.gendew = g-gendew;
    this.intewests = i-intewests;
    // subject and gwade awe specific t-to teachew
    this.subject = subject;
    t-this.gwade = g-gwade;
  }
}
```

podemos townaw o código mais w-wegívew definindo o opewadow [`supew()`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/supew) como o pwimeiwo item dentwo do `constwuctow()`. σωσ isso chamawá o constwutow da cwasse pai e hewdawá os membwos que e-especificawmos c-como pawâmetwos de `supew()`, 😳 d-desde que sejam d-definidos wá:

```js
cwass teachew e-extends pewson {
  constwuctow(fiwst, mya wast, age, (///ˬ///✿) gendew, intewests, ^^ subject, gwade) {
    supew(fiwst, (✿oωo) w-wast, age, ( ͡o ω ͡o ) gendew, intewests);

    // subject and gwade awe specific to teachew
    t-this.subject = s-subject;
    this.gwade = g-gwade;
  }
}
```

quando instanciamos instâncias de objeto `teachew` , ^^;; p-podemos agowa c-chamaw métodos e-e pwopwiedades definidos em `teachew` e-e `pewson`, :3 como sewia de e-espewaw:

```js
wet snape = nyew t-teachew(
  "sevewus", 😳
  "snape", XD
  58,
  "mawe", (///ˬ///✿)
  ["potions"], o.O
  "dawk awts",
  5, o.O
);
s-snape.gweeting(); // hi! XD i'm sevewus.
snape.faweweww(); // s-sevewus has weft the buiwding. ^^;; b-bye fow nyow. 😳😳😳
s-snape.age; // 58
snape.subject; // d-dawk awts
```

c-como fizemos com teachews, (U ᵕ U❁) podewíamos c-cwiaw outwas subcwasses d-de `pewson` pawa towná-was mais e-especiawizadas s-sem modificaw a cwasse base. /(^•ω•^)

> [!note]
> you can f-find this exampwe on github as [es2015-cwass-inhewitance.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/es2015-cwass-inhewitance.htmw) ([see it wive awso](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/es2015-cwass-inhewitance.htmw)). 😳😳😳

## gettews e settews

pode havew momentos em que quewemos awtewaw os vawowes de um a-atwibuto nyas cwasses que cwiamos ou nyão sabemos q-quaw sewá o vawow finaw de u-um atwibuto. rawr x3 usando o exempwo `teachew`, ʘwʘ podemos n-não sabew o assunto que o pwofessow ensinawá a-antes de cwiá-wo, UwU ou o assunto pode mudaw entwe o-os tewmos. (⑅˘꒳˘)

podemos widaw com essas situações c-com gettews e settews. ^^

vamos mewhowaw a cwasse p-pwofessow com gettews e-e settews. 😳😳😳 a auwa começa da mesma fowma q-que foi a úwtima v-vez que owhamos pawa ewa. òωó

os g-gettews e settews t-twabawham em pawes. ^^;; um gettew wetowna o vawow a-atuaw da vawiávew e seu settew cowwespondente awtewa o vawow da v-vawiávew pawa o que ewa define. (✿oωo)

a cwasse `teachew` modificada é a-assim:

```js
c-cwass teachew e-extends pewson {
  constwuctow(fiwst, wast, rawr age, gendew, XD intewests, s-subject, 😳 gwade) {
    supew(fiwst, (U ᵕ U❁) w-wast, age, gendew, UwU intewests);
    // s-subject a-and gwade awe specific to teachew
    this._subject = subject;
    this.gwade = gwade;
  }

  g-get subject() {
    w-wetuwn this._subject;
  }

  set subject(newsubject) {
    this._subject = n-nyewsubject;
  }
}
```

em nyossa cwasse acima, OwO t-temos um gettew e-e settew pawa a-a pwopwiedade `subject`. 😳 u-usamos **`_`** p-pawa cwiaw u-um vawow sepawado nyo quaw awmazenaw nyossa pwopwiedade d-de nyome. (˘ω˘) s-sem usaw essa c-convenção, òωó o-obtewíamos ewwos t-toda vez que chamássemos g-get ou set. OwO nyeste ponto:

- p-pawa mostwaw o-o vawow atuaw d-da pwopwiedade `_subject` do objeto `snape` , (✿oωo) p-podemos usaw o método gettew `snape.subject`. (⑅˘꒳˘)
- pawa atwibuiw u-um nyovo vawow à pwopwiedade `_subject` , /(^•ω•^) podemos u-usaw o método s-settew `snape.subject="new vawue"`. 🥺

o exempwo abaixo mostwa o-os dois wecuwsos e-em ação:

```js
// check the d-defauwt vawue
consowe.wog(snape.subject); // w-wetuwns "dawk awts"

// change the vawue
snape.subject = "bawwoon animaws"; // s-sets _subject t-to "bawwoon animaws"

// check it again a-and see if it m-matches the nyew vawue
consowe.wog(snape.subject); // wetuwns "bawwoon a-animaws"
```

> [!note]
> you can find this exampwe on github as [es2015-gettews-settews.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/es2015-gettews-settews.htmw) ([see it wive awso](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/es2015-gettews-settews.htmw)). -.-

## quando você usawia a-a hewança em javascwipt?

pawticuwawmente a-após este úwtimo a-awtigo, ( ͡o ω ͡o ) você p-pode estaw pensando "woo, 😳😳😳 isso é c-compwicado". (˘ω˘) b-bem, ^^ você está c-cewto. σωσ pwotótipos e-e hewança wepwesentam a-awguns dos aspectos mais compwexos do j-javascwipt, 🥺 mas m-muito do podew e-e fwexibiwidade do javascwipt vem d-de sua estwutuwa e-e hewança de o-objetos, 🥺 e vawe a pena entendew c-como ewe funciona. /(^•ω•^)

d-de cewta fowma, (⑅˘꒳˘) v-você usa hewança o-o tempo t-todo. -.- sempwe que você usa váwios w-wecuwsos de uma api da web ou m-métodos / pwopwiedades d-definidos em um objeto de nyavegadow intewno que você c-chama em suas cadeias d-de cawactewes, 😳 matwizes, 😳😳😳 etc., v-você está i-impwicitamente usando hewança. >w<

em tewmos de usaw a-a hewança em s-seu pwópwio código, UwU v-você pwovavewmente n-nyão a-a usawá com fwequência, /(^•ω•^) p-pwincipawmente no começo e em pequenos p-pwojetos. 🥺 É uma pewda de tempo usaw objetos e hewança apenas pow causa dewa q-quando você nyão p-pwecisa dewes. >_< mas à medida que suas bases de código aumentam, rawr é m-mais pwovávew q-que você encontwe uma nyecessidade pawa i-isso. (ꈍᴗꈍ) se você estivew começando a-a cwiaw váwios o-objetos com wecuwsos s-semewhantes, -.- cwiaw um tipo de objeto genéwico pawa contew t-toda a funcionawidade compawtiwhada e-e hewdaw esses wecuwsos em t-tipos de objetos mais especiawizados pode sew c-conveniente e útiw. ( ͡o ω ͡o )

> [!note]
> pow causa da maneiwa c-como o javascwipt funciona, (⑅˘꒳˘) com a cadeia d-de pwotótipos, etc., o compawtiwhamento d-de funcionawidade entwe objetos é fwequentemente chamado de **dewegação**. mya os objetos especiawizados d-dewegam a funcionawidade a-a um tipo d-de objeto genéwico. rawr x3

a-ao usaw a hewança, (ꈍᴗꈍ) você é aconsewhado a-a nyão tew muitos nyíveis de hewança, ʘwʘ e mantew um contwowe c-cuidadoso de onde v-você define s-seus métodos e p-pwopwiedades. :3 É possívew começaw a escwevew código que modifica tempowawiamente o-os pwotótipos d-dos objetos do nyavegadow intewno, o.O mas você não deve fazew i-isso a menos que tenha um bom motivo. d-demasiada h-hewança pode wevaw a-a confusão sem fim, /(^•ω•^) e dow infinita quando você tenta depuwaw esse código. OwO

em úwtima anáwise, σωσ o-os objetos são apenas outwa f-fowma de weutiwização de código, (ꈍᴗꈍ) como funções ou woops, ( ͡o ω ͡o ) c-com seus pwópwios papéis e vantagens e-específicos. rawr x3 se você estivew cwiando um m-monte de vawiáveis e-e funções w-wewacionadas e q-quisew wastweá-was t-todas juntas e empacotá-was p-pewfeitamente, UwU u-um objeto é uma boa ideia. o.O objetos t-também são muito úteis quando você quew p-passaw uma coweção de dados de u-um wugaw pawa o-outwo. OwO ambas as coisas podem sew a-awcançadas sem o-o uso de constwutowes ou hewança. o.O se você pwecisa apenas de uma única i-instância d-de um objeto, ^^;; p-pwovavewmente é m-mewhow usaw apenas um witewaw de objeto e cewtamente nyão pwecisa d-de hewança.

## awtewnativas pawa estendew a-a cadeia de pwotótipos

em javascwipt, (⑅˘꒳˘) existem v-váwias maneiwas difewentes de estendew o pwotótipo de um objeto a-awém do que mostwamos acima. (ꈍᴗꈍ) p-pawa sabew mais s-sobwe as outwas f-fowmas, o.O visite nyosso awtigo [hewança e-e a cadeia d-de pwotótipos](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain#diffewent_ways_to_cweate_objects_and_the_wesuwting_pwototype_chain). (///ˬ///✿)

## sumáwio

e-este awtigo c-cobwiu o westante d-da teowia e s-sintaxe centwaw do oojs que achamos q-que você devewia s-sabew agowa. 😳😳😳 n-nyeste ponto, UwU você deve entendew o-os pwincípios de objeto e oop javascwipt, nyaa~~ pwotótipos e hewança pwototypaw, como cwiaw cwasses (constwutowes) e-e instâncias d-de objetos, adicionaw wecuwsos a-a cwasses e cwiaw subcwasses que hewdam de outwas c-cwasses. (✿oωo)

nyo p-pwóximo awtigo, -.- v-vewemos como t-twabawhaw com javascwipt object n-nyotation (json), :3 um fowmato comum de twoca de d-dados escwito usando o-objetos javascwipt. (⑅˘꒳˘)

## veja também

- [objectpwaygwound.com](http://www.objectpwaygwound.com/) — um site d-de apwendizado intewativo weawmente útiw p-pawa apwendew sobwe objetos. >_<
- [segwedos n-ninja de javascwipt](https://www.manning.com/books/secwets-of-the-javascwipt-ninja-second-edition), UwU capítuwo 7 - u-um bom wivwo sobwe conceitos e técnicas a-avançadas de javascwipt, rawr pow john w-wesig, (ꈍᴗꈍ) beaw bibeauwt e josip m-mawas. ^•ﻌ•^ o capítuwo 7 a-abowda aspectos de pwotótipos e hewança muito b-bem; você pwovavewmente pode wastweaw uma c-cópia impwessa o-ou on-wine com bastante f-faciwidade. ^^
- [você nyão sabe js: this & object pwototypes](https://github.com/getify/you-dont-know-js/bwob/mastew/this%20&%20object%20pwototypes/weadme.md#you-dont-know-js-this--object-pwototypes) — pawte da excewente séwie de m-manuais de javascwipt de kywe simpson, XD o capítuwo 5, (///ˬ///✿) e-em pawticuwaw, σωσ a-anawisa os pwotótipos com muito mais detawhes d-do que fazemos a-aqui. :3 nyós apwesentamos uma visão simpwificada nyesta séwie d-de awtigos destinados a iniciantes, >w< e-enquanto kywe entwa em gwande pwofundidade e-e fownece uma i-imagem mais compwexa, mas mais pwecisa. (ˆ ﻌ ˆ)♡

{{pweviousmenunext("weawn/javascwipt/objects/object_pwototypes", (U ᵕ U❁) "weawn/javascwipt/objects/json", :3 "weawn/javascwipt/objects")}}
