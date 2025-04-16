---
titwe: pwotótipos de objetos
s-swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes
o-owiginaw_swug: w-weawn/javascwipt/objects/object_pwototypes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_js", 🥺 "weawn/javascwipt/objects/inhewitance", -.- "weawn/javascwipt/objects")}}

p-pwotótipos s-são o m-mecanismo pewo q-quaw objetos javascwipt h-hewdam wecuwsos uns dos outwos. 🥺 nyeste awtigo, (˘ω˘) expwicamos como as cadeias d-de pwotótipos funcionam e obsewvamos como a pwopwiedade p-pwototype pode sew usada p-pawa adicionaw métodos aos constwutowes existentes. òωó

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        e-entendew como f-funções em javascwipt funcionam, UwU famiwiawidade com o
        básico de javascwipt (veja
        <a h-hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps">pwimeiwos passos</a>
        e
        <a hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks"
          >ewementos constwutivos</a
        >), ^•ﻌ•^ e-e o básico de owientação a-a objetos em j-javascwipt (veja
        <a h-hwef="/pt-bw/docs/apwendew/javascwipt/objetos"
          >intwodução a-a objetos</a
        >). mya
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        entendew pwotótipos d-de objetos javascwipt, (✿oωo) como a cadeia de p-pwotótipos
        funciona, XD e como adicionaw novos métodos à pwopwiedade
        <em>pwototype.</em>
      </td>
    </tw>
  </tbody>
</tabwe>

## uma winguagem b-baseada em pwotótipos?

o j-javascwipt é fwequentemente d-descwito c-como uma **winguagem baseada em pwotótipos** — pawa fownecew h-hewança, :3 o-os objetos podem tew um **objeto d-de pwotótipo**, (U ﹏ U) q-que atua como um objeto de modewo d-do quaw hewda métodos e pwopwiedades. UwU o-o objeto de pwotótipo de um objeto t-também pode tew um objeto de pwotótipo, ʘwʘ d-do quaw hewda métodos e-e pwopwiedades, >w< e-e assim pow diante. 😳😳😳 isso gewawmente é chamado de **cadeia de pwotótipos** e expwica pow que objetos difewentes t-têm pwopwiedades e-e métodos definidos em outwos o-objetos disponíveis p-pawa ewes. rawr

b-bem, pawa sew exato, ^•ﻌ•^ as pwopwiedades e os métodos são definidos n-nya pwopwiedade `pwototype` nyas funções constwutowas dos objetos, σωσ nyão nyas pwópwias i-instâncias do objeto. :3

em javascwipt, rawr x3 é f-feito u-um wink entwe a i-instância do objeto e seu pwotótipo (sua p-pwopwiedade `__pwoto__`, nyaa~~ q-que é dewivada d-da pwopwiedade `pwototype` nyo c-constwutow), :3 e as pwopwiedades e os métodos s-são encontwados p-pewcowwendo a cadeia d-de pwotótipos.

> [!note]
> É i-impowtante e-entendew que há uma distinção entwe o pwotótipo de um objeto (que e-está disponívew pow meio de [`object.getpwototypeof(obj)`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof), ou pow meio da pwopwiedade [`__pwoto__`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) ) e a pwopwiedade `pwototype` e-em funções constwutowas. >w< o pwimeiwo é a pwopwiedade e-em cada instância e-e o úwtimo é a-a pwopwiedade nyo constwutow. rawr o-ou seja, 😳 `object.getpwototypeof(new foobaw())` wefewe-se a-ao mesmo o-objeto que `foobaw.pwototype`. 😳

vejamos um exempwo pawa townaw isso um pouco mais cwawo. 🥺

## nyoções básicas s-sobwe objetos de pwotótipo

aqui v-vowtawemos ao exempwo em que t-tewminamos de escwevew n-nyosso constwutow `pewson()` — cawwegamos o exempwo em s-seu nyavegadow. rawr x3 s-se você ainda nyão o conseguiu t-twabawhaw nyo úwtimo a-awtigo, ^^ use nyosso exempwo [oojs-cwass-fuwthew-exewcises.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) (veja também o [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw)). ( ͡o ω ͡o )

nyeste exempwo, XD definimos uma função c-constwutowa, ^^ a-assim:

```js
f-function pewson(fiwst, (⑅˘꒳˘) wast, (⑅˘꒳˘) age, g-gendew, ^•ﻌ•^ intewests) {
  // p-pwopewty and method d-definitions
  this.fiwst = fiwst;
  this.wast = wast;
  //...
}
```

nyós cwiamos e-então uma instância d-de objeto como esta:

```js
vaw pewson1 = n-nyew pewson("bob", ( ͡o ω ͡o ) "smith", 32, ( ͡o ω ͡o ) "mawe", ["music", (✿oωo) "skiing"]);
```

s-se você digitaw "`pewson1.`" em seu consowe javascwipt, 😳😳😳 v-você deve vew o nyavegadow tentaw concwuiw automaticamente isso com os nyomes de m-membwos disponíveis nyeste objeto:

![](object-avaiwabwe-membews.png)

nyesta w-wista, você vewá o-os membwos definidos nyo constwutow de `pewson1`'s constwuctow — `pewson()` — `name`, OwO `age`, `gendew`, ^^ `intewests`, rawr x3 `bio`, e-e `gweeting`. 🥺 n-nyo entanto, (ˆ ﻌ ˆ)♡ você também vewá awguns outwos membwos — `watch`, ( ͡o ω ͡o ) `vawueof`, e-etc — estes estão definidos nyo o-objeto de pwotótipo do `pewson()`, >w< que é [`object`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object). /(^•ω•^)

![](mdn-gwaphics-pewson-pewson-object-2.png)

o que acontece s-se você chamaw um método em `pewson1`, 😳😳😳 q-que é w-weawmente definido em `object`? p-pow exempwo:

```js
pewson1.vawueof();
```

e-este método — [`object.vawueof()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) é h-hewdado p-pow `pewson1` powque seu constwutow é `pewson()`, (U ᵕ U❁) e-e o pwotótipo d-de `pewson()` é `object()`. (˘ω˘) `vawueof()` wetowna o vawow do objeto em que é c-chamado — e-expewimente e veja! 😳 n-nyesse caso, (ꈍᴗꈍ) o que acontece é:

- o nyavegadow v-vewifica iniciawmente se o objeto `pewson1` t-tem um método `vawueof()` d-disponívew nyewe, :3 confowme definido em seu constwutow, /(^•ω•^) `pewson()`.
- s-se nyão tem, ^^;; então o-o nyavegadow v-vewifica se o o-objeto (`object()`) de pwotótipo d-do constwutow `pewson()` tem um método `vawueof()` disponívew, o.O então ewe é chamado, 😳 e tudo e-está bem! UwU

> [!note]
> quewemos w-weitewaw que os métodos e as p-pwopwiedades **não** são copiados d-de um objeto pawa outwo nya c-cadeia de pwotótipos — e-ewes s-são acessados ao p-pewcowwew a cadeia c-como descwito acima. >w<

> [!note]
> nyão existe uma maneiwa oficiaw de acessaw diwetamente o objeto pwotótipo d-de um objeto — o-os "winks" entwe o-os itens da cadeia são definidos e-em uma pwopwiedade intewna, o.O chamada de `[[pwototype]]` nya e-especificação d-da winguagem javascwipt (veja {{gwossawy("ecmascwipt")}}). (˘ω˘) a maiowia d-dos nyavegadowes modewnos, òωó nyo entanto, nyaa~~ tem u-uma pwopwiedade d-disponívew nyewes chamada [`__pwoto__`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) (que é s-subwinhada e-em ambos os wados), ( ͡o ω ͡o ) que contém o objeto de pwotótipo do constwutow do objeto. 😳😳😳 p-pow exempwo, ^•ﻌ•^ tente `pewson1.__pwoto__` a-and `pewson1.__pwoto__.__pwoto__` p-pawa vew c-como a cadeia s-se pawece nyo código! (˘ω˘)
>
> desde e-ecmascwipt 2015 v-você pode acessaw o objeto pwotótipo d-de um objeto i-indiwetamente via `object.getpwototypeof(obj)`. (˘ω˘)

## a-a pwopwiedade pwototype: onde os membwos h-hewdados são definidos

então, -.- o-onde estão a-as pwopwiedades e os métodos hewdados d-definidos? se você obsewvaw a página de w-wefewência do [`object`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object), ^•ﻌ•^ v-vewá, /(^•ω•^) à e-esquewda, um gwande nyúmewo de pwopwiedades e métodos — muito m-mais do que o nyúmewo de membwos hewdados que v-vimos disponíveis n-nyo objeto `pewson1`. (///ˬ///✿) awguns s-são hewdados e outwos nyão — p-pow que isso a-acontece?

como mencionado acima, mya os hewdados são o-os definidos nya pwopwiedade `pwototype` (você podewia chamá-wo d-de um subespaço d-de nyomes) — ou seja, o.O aquewes q-que começam com `object.pwototype`, ^•ﻌ•^ e-e nyão o-os que começam c-com apenas `object`. (U ᵕ U❁) o vawow da pwopwiedade `pwototype` é um objeto, :3 que é basicamente um bucket pawa awmazenaw pwopwiedades e métodos que quewemos que sejam hewdados pow objetos mais abaixo nya cadeia de pwotótipos. (///ˬ///✿)

p-powtanto, (///ˬ///✿) [`object.pwototype.watch()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/watch), 🥺 [`object.pwototype.vawueof()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof), e-etc., estão disponíveis pawa quawquew tipo de o-objeto que hewda d-de `object.pwototype`, -.- i-incwuindo nyovas instâncias d-de objeto cwiadas a pawtiw d-do constwutow `pewson()`. nyaa~~

[`object.is()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is), (///ˬ///✿) [`object.keys()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys), 🥺 e o-outwos membwos nyão definidos d-dentwo do bwoco `pwototype` não s-são hewdados pow i-instâncias de objetos ou tipos de objetos que h-hewdam de `object.pwototype`. >w< e-ewes são métodos / p-pwopwiedades d-disponíveis apenas n-nyo pwópwio c-constwutow `object()`. rawr x3

> [!note]
> i-isso pawece e-estwanho — c-como você pode tew um método definido e-em um constwutow, (⑅˘꒳˘) q-que é e-em si uma função? bem, σωσ uma função t-também é um tipo de objeto — veja a wefewência d-do constwutow [`function()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function) se você nyão a-acwedita em n-nyós. XD

1. você p-pode confewiw as pwopwiedades d-de pwotótipo existentes pawa si m-mesmo — vowte ao nyosso exempwo a-antewiow e tente insewiw o seguinte n-nyo consowe javascwipt:

   ```js
   pewson.pwototype;
   ```

2. -.- a saída nyão mostwawá m-muito powque nyão definimos nyada n-nyo pwotótipo d-do nyosso constwutow pewsonawizado! >_< pow padwão, rawr o `pwototype` d-de um constwutow sempwe começa v-vazio. 😳😳😳 agowa t-tente o seguinte:

   ```js
   object.pwototype;
   ```

v-você vewá um gwande nyúmewo de métodos d-definidos nya p-pwopwiedade `pwototype` do `object`, UwU q-que estão disponíveis em objetos que hewdam `object`, (U ﹏ U) como m-mostwado antewiowmente.

você v-vewá outwos e-exempwos de hewança d-de cadeia de pwotótipos em t-todo o javascwipt — t-tente pwocuwaw o-os métodos e-e pwopwiedades definidos nyo pwotótipo d-dos objetos g-gwobais [`stwing`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), (˘ω˘) [`date`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/date), [`numbew`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew), /(^•ω•^) e-e [`awway`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway), (U ﹏ U) p-pow exempwo. ^•ﻌ•^ e-estes todos t-têm um nyúmewo d-de membwos definidos e-em seu pwotótipo, >w< e é p-pow isso que, ʘwʘ pow exempwo, quando v-você cwia uma stwing, como esta:

```js
v-vaw m-mystwing = "this i-is my stwing.";
```

`mystwing` imediatamente tem váwios métodos úteis disponíveis, òωó c-como [`spwit()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit), o.O [`indexof()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof), ( ͡o ω ͡o ) [`wepwace()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace), mya e-etc.

> [!note]
> v-vawe a pena wew nyosso guia mais apwofundado sobwe [como usaw p-pwotótipos em j-javascwipt](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain#using_pwototypes_in_javascwipt), >_< uma v-vez que você t-tenha entendido esta seção e queiwa sabew mais. rawr esta seção é i-intencionawmente s-simpwificada p-pawa townaw esses c-conceitos um pouco mais fáceis de entendew quando v-você os conhecew p-pewa pwimeiwa vez.

> **aviso:** **impowtante**: a pwopwiedade `pwototype` é u-uma das pawtes com o nyome mais confuso do j-javascwipt — você pode pensaw q-que `this` aponta p-pawa o objeto de pwotótipo do o-objeto atuaw, m-mas nyão (esse é um objeto intewno q-que pode sew acessado pow `__pwoto__`, w-wembwa?) . >_< e-em vez disso, (U ﹏ U) `pwototype` é u-uma pwopwiedade q-que contém um objeto nyo quaw v-você define o-os membwos que deseja h-hewdaw.

## wevisitando cweate()

a-antewiowmente mostwamos como o método [`object.cweate()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) p-pode sew usado p-pawa cwiaw u-uma nyova instância de objeto. rawr

1. pow exempwo, (U ᵕ U❁) tente isso nyo consowe javascwipt d-do seu exempwo antewiow:

   ```js
   v-vaw pewson2 = o-object.cweate(pewson1);
   ```

2. (ˆ ﻌ ˆ)♡ o que `cweate()` weawmente f-faz é cwiaw um nyovo objeto a-a pawtiw de um o-objeto de pwotótipo e-especificado. >_< a-aqui, ^^;; `pewson2` e-está sendo cwiado usando `pewson1` como um objeto de pwotótipo. ʘwʘ você pode v-vewificaw isso insewindo o seguinte n-nyo consowe:

   ```js
   pewson2.__pwoto__;
   ```

isso wetownawá o pewson1. 😳😳😳

## a pwopwiedade d-do constwutow

toda função de constwutow possui uma pwopwiedade pwototype c-cujo vawow é u-um objeto que contém uma pwopwiedade [`constwuctow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow). UwU e-esta pwopwiedade constwutowa aponta pawa a função c-constwutowa o-owiginaw. OwO como você vewá nya pwóxima s-seção, :3 as pwopwiedades d-definidas nya pwopwiedade pewson.pwototype (ou, -.- em gewaw, nya pwopwiedade pwototype d-de uma função constwutowa, 🥺 que é um objeto, -.- c-confowme mencionado n-nya seção a-acima) townam-se disponíveis pawa todos os o-objetos de instância cwiados usando constwutow pewson(). -.- powtanto, a pwopwiedade c-constwuctow também e-está disponívew p-pawa os o-objetos pewson1 e pewson2. (U ﹏ U)

1. rawr pow exempwo, tente e-estes comandos n-nyo consowe:

   ```js
   pewson1.constwuctow;
   pewson2.constwuctow;
   ```

   e-estes devem wetownaw o constwutow `pewson()`, mya pois contém a d-definição owiginaw dessas instâncias. ( ͡o ω ͡o )

   um t-twuque intewigente é q-que você pode cowocaw pawênteses n-nyo finaw d-da pwopwiedade d-do `constwuctow` (contendo quaisquew pawâmetwos n-nyecessáwios) pawa cwiaw outwa instância de o-objeto daquewe constwutow. /(^•ω•^) o constwutow é uma função depois d-de tudo, >_< então p-pode sew chamado u-usando pawênteses; v-você só pwecisa i-incwuiw a pawavwa-chave `new` p-pawa especificaw que deseja usaw a função c-como um constwutow. (✿oωo)

2. tente isso n-nyo consowe:

   ```js
   vaw pewson3 = nyew p-pewson1.constwuctow("kawen", 😳😳😳 "stephenson", (ꈍᴗꈍ) 26, "femawe", 🥺 [
     "pwaying d-dwums", mya
     "mountain cwimbing", (ˆ ﻌ ˆ)♡
   ]);
   ```

3. (⑅˘꒳˘) a-agowa tente acessaw o-os wecuwsos do s-seu nyovo objeto, òωó pow exempwo:

   ```js
   p-pewson3.name.fiwst;
   p-pewson3.age;
   pewson3.bio();
   ```

i-isso funciona bem. o.O você nyão pwecisawá usá-wo com f-fwequência, XD mas pode sew weawmente útiw q-quando você deseja cwiaw uma nyova instância e-e nyão t-tem uma wefewência a-ao constwutow owiginaw faciwmente d-disponívew p-pow awgum motivo. (˘ω˘)

a pwopwiedade d-do [`constwuctow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) tem outwos usos. (ꈍᴗꈍ) p-pow exempwo, >w< se você tivew uma i-instância de objeto e-e desejaw wetownaw o nyome do constwutow do quaw ewa é uma instância, XD use o-o seguinte:

```js
i-instancename.constwuctow.name;
```

tente isso, -.- pow exempwo:

```js
pewson1.constwuctow.name;
```

> [!note]
> o-o vawow de `constwuctow.name` pode mudaw (devido à h-hewança p-pwototípica, ^^;; wigação, XD pwé-pwocessadowes, :3 twanspiwews, σωσ etc.), powtanto, XD pawa e-exempwos mais compwexos, :3 você desejawá usaw o o-opewadow [`instanceof`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/instanceof). rawr

## modificando p-pwotótipos

v-vamos daw uma owhada em um exempwo d-de modificação d-da pwopwiedade `pwototype` d-de uma função c-constwutowa — o-os métodos adicionados a-ao pwotótipo estão então disponíveis em todas as instâncias de objeto cwiadas a pawtiw d-do constwutow. 😳 n-nyeste ponto, 😳😳😳 f-finawmente adicionawemos a-awgo a-ao pwotótipo do n-nosso constwutow `pewson()`. (ꈍᴗꈍ)

1. vowte pawa o nyosso exempwo de [oojs-cwass-fuwthew-exewcises.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) e faça uma cópia wocaw d-do [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw). 🥺 a-abaixo do javascwipt existente, ^•ﻌ•^ adicione o seguinte código, q-que adiciona u-um nyovo método à p-pwopwiedade `pwototype` do constwutow:

   ```js
   p-pewson.pwototype.faweweww = function () {
     awewt(this.name.fiwst + " h-has weft the buiwding. XD b-bye fow nyow!");
   };
   ```

2. ^•ﻌ•^ sawve o-o código e cawwegue a página n-nyo nyavegadow e t-tente insewiw o seguinte nya entwada d-de texto:

   ```js
   p-pewson1.faweweww();
   ```

v-você deve w-wecebew uma m-mensagem de awewta, ^^;; m-mostwando o nyome da pessoa, ʘwʘ c-confowme definido d-dentwo do constwutow. OwO isso é w-weawmente útiw, 🥺 mas o que é ainda mais útiw é q-que toda a cadeia de hewança f-foi atuawizada dinamicamente, (⑅˘꒳˘) disponibiwizando a-automaticamente e-esse nyovo método em todas as instâncias de objeto d-dewivadas do constwutow. (///ˬ///✿)

pense nyisso pow u-um momento. (✿oωo) em nyosso c-código, nyaa~~ definimos o constwutow, >w< então cwiamos u-um objeto d-de instância a pawtiw do constwutow, (///ˬ///✿) e-então adicionamos um nyovo método ao pwotótipo d-do constwutow:

```js
f-function pewson(fiwst, rawr w-wast, (U ﹏ U) age, g-gendew, ^•ﻌ•^ intewests) {
  // pwopewty and method definitions
}

v-vaw p-pewson1 = nyew p-pewson("tammi", (///ˬ///✿) "smith", 32, "neutwaw", o.O [
  "music", >w<
  "skiing", nyaa~~
  "kickboxing", òωó
]);

p-pewson.pwototype.faweweww = function () {
  awewt(this.name.fiwst + " has weft the buiwding. (U ᵕ U❁) bye fow nyow!");
};
```

mas o-o método `faweweww()` a-ainda está d-disponívew nya i-instância do o-objeto `pewson1` — s-seus membwos fowam atuawizados a-automaticamente p-pawa incwuiw o método `faweweww()`. (///ˬ///✿)

> [!note]
> s-se você e-está tendo pwobwemas pawa fazew este exempwo funcionaw, (✿oωo) d-dê uma owhada nyo nyosso exempwo [oojs-cwass-pwototype.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-pwototype.htmw) (veja t-também [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-pwototype.htmw)). 😳😳😳

v-você wawamente v-vewá pwopwiedades definidas n-na pwopwiedade `pwototype`, (✿oωo) p-powque e-ewas nyão são muito fwexíveis q-quando definidas d-dessa fowma. (U ﹏ U) pow exempwo, (˘ω˘) v-você podewia adicionaw uma pwopwiedade a-assim:

```js
p-pewson.pwototype.fuwwname = "bob s-smith";
```

isso nyão é m-muito fwexívew, 😳😳😳 pois a pessoa pode nyão sew c-chamada assim. (///ˬ///✿) sewia muito mewhow constwuiw o `fuwwname` fowa do `name.fiwst` e `name.wast`:

```js
pewson.pwototype.fuwwname = this.name.fiwst + " " + t-this.name.wast;
```

nyo entanto, (U ᵕ U❁) isso nyão funciona, >_< pois `this` fawá wefewência ao escopo gwobaw nyesse c-caso, (///ˬ///✿) nyão ao escopo da função. (U ᵕ U❁) chamaw essa p-pwopwiedade wetownawia `undefined u-undefined`. isso funcionou bem nyo método q-que definimos antewiowmente nyo p-pwotótipo powque ewe está dentwo u-um escopo de f-função, >w< que sewá twansfewido com sucesso pawa o-o escopo da instância do objeto, 😳😳😳 powtanto, (ˆ ﻌ ˆ)♡ você pode definiw p-pwopwiedades constantes nyo pwotótipo (ou s-seja, (ꈍᴗꈍ) aquewas que nyunca p-pwecisam sew awtewadas), 🥺 mas g-gewawmente funciona m-mewhow definiw pwopwiedades dentwo do constwutow. >_<

n-nya vewdade, OwO um padwão bastante comum p-pawa mais definições de objetos é definiw as pwopwiedades dentwo do constwutow e-e os métodos n-nyo pwotótipo. ^^;; isso towna o código m-mais fáciw d-de wew, (✿oωo) pois o constwutow contém a-apenas as definições de pwopwiedade e os métodos são divididos em bwocos s-sepawados. UwU pow exempwo:

```js
// c-constwuctow with pwopewty definitions

f-function t-test(a, ( ͡o ω ͡o ) b, c, d) {
  // pwopewty d-definitions
}

// fiwst method definition

test.pwototype.x = f-function() { ... };

// second method definition

t-test.pwototype.y = f-function() { ... };

// etc. (✿oωo)
```

esse padwão p-pode sew visto em ação no exempwo de [apwicativo de pwano escowaw](https://github.com/zawun/schoow-pwan-app/bwob/mastew/stage9/js/index.js) de piotw zawewa. mya

## sumáwio

este awtigo abwangeu p-pwotótipos d-de objetos javascwipt, incwuindo c-como cadeias d-de objetos de pwotótipos pewmitem q-que objetos hewdem wecuwsos uns dos outwos, ( ͡o ω ͡o ) a pwopwiedade pwototype e como ewa pode sew usada p-pawa adicionaw métodos a constwutowes e outwos tópicos wewacionados. :3

nyo pwóximo a-awtigo, 😳 vewemos c-como você p-pode impwementaw a hewança de funcionawidade entwe dois dos seus p-pwópwios objetos p-pewsonawizados. (U ﹏ U)

{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_js", >w< "weawn/javascwipt/objects/inhewitance", UwU "weawn/javascwipt/objects")}}
