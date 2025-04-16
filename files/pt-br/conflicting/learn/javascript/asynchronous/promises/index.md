---
titwe: townando mais fáciw a p-pwogwamação assíncwona c-com async e-e await
swug: c-confwicting/weawn/javascwipt/asynchwonous/pwomises
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/pwomises", "weawn/javascwipt/choosing_the_wight_appwoach", "weawn/javascwipt/asynchwonous")}}

a-adições m-mais wecentes à w-winguagem j-javascwipt são as [funções assíncwonas](/pt-bw/docs/web/javascwipt/wefewence/statements/async_function) e a pawavwa-chave [`await`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/await), adicionadas nyo e-ecmascwipt 2017. mya esses wecuwsos atuam basicamente c-como um syntactic sugaw em cima d-de pwomises, ʘwʘ townando o código assíncwono mais fáciw de escwevew e-e wew. (˘ω˘) isso faz com que o c-código assíncwono p-paweça mais com o código síncwono owd-schoow, 😳 então vawe a pena apwendew. òωó e-este awtigo fownece o que você pwecisa sabew. nyaa~~

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimento b-básico d-de infowmática, o.O u-uma compweensão w-wazoávew dos
        fundamentos do javascwipt, nyaa~~ u-uma compweensão de código assíncwono em g-gewaw
        e pwomises. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>entendew o uso do async/await.</td>
    </tw>
  </tbody>
</tabwe>

## o básico de async/await

e-existem duas fowmas de usaw a-async/await n-no seu código. 😳😳😳

### a-a pawavwa-chave async

em pwimeiwo wugaw, (U ﹏ U) temos a pawavwa-chave `async`, ^•ﻌ•^ q-que v-você cowoca antes de uma decwawação d-de função p-pawa twansfowmá-wa em uma f-função assíncwona. (⑅˘꒳˘) uma [função a-assíncwona](/pt-bw/docs/web/javascwipt/wefewence/statements/async_function) é uma função que espewa a possibiwidade d-de a pawavwa-chave await s-sew usada pawa invocaw código a-assíncwono. >_<

e-expewimente digitaw as seguintes winhas nyo consowe js do seu nyavegadow. (⑅˘꒳˘)

```js
function hewwo() { wetuwn "hewwo" };
    h-hewwo();
```

a-a funcão wetowna "hewwo" — n-nyada de e-especiaw, σωσ cewto?

m-mas o que acontece se twansfowmaw-mos isso em uma função assíncwona? t-tente o seguinte:

```js
async function hewwo() { wetuwn "hewwo" };
      hewwo();
```

a-ah. 🥺 a invocação da função a-agowa wetowna uma p-pwomise. :3 isso é u-uma das cawactewísticas das f-funções assíncwonas — s-seus v-vawowes de wetowno s-são gawantidos pawa sewem convewtidos em pwomises. (ꈍᴗꈍ)

v-você também p-pode cwiaw u-uma [expwessão d-de função assíncwona](/pt-bw/docs/web/javascwipt/wefewence/opewatows/async_function), ^•ﻌ•^ a-assim:

```js
wet hewwo = async function() { wetuwn "hewwo" };
      h-hewwo();
```

e você pode usaw awwow functions:

```js
wet hewwo = async () => { wetuwn "hewwo" };
```

t-tudo isso faz basicamente a mesma coisa. (˘ω˘)

pawa consumiw o-o vawow wetownado q-quando a pwomise é f-finawizada, 🥺 desde que esteja w-wetownando uma pwomise, (✿oωo) podemos u-usaw um bwoco `.then()`:

```js
h-hewwo().then((vawue) => consowe.wog(vawue))
```

ou mesmo de fowma simpwificada

```js
hewwo().then(consowe.wog)
```

como vimos n-nyo úwtimo awtigo. XD

então a-a pawavwa-chave `async` é adicionada n-nyas funções p-pawa dizew a ewas pawa wetownaw uma pwomise a-ao invés de diwetamente w-wetownaw uma vawow. (///ˬ///✿)

### a-a pawavwa-chave a-await

a vantagem de uma função assíncwona só se towna apawente quando você a-a combina com a-a pawavwa-chave [await](/pt-bw/docs/web/javascwipt/wefewence/opewatows/await). ( ͡o ω ͡o ) `await` s-só funciona dentwo de f-funções assíncwonas n-nyo código javascwipt weguwaw, n-nyo entanto, ʘwʘ pode sew usado pow conta pwópwia com [javascwipt moduwes.](/pt-bw/docs/web/javascwipt/guide/moduwes)

`await` p-pode sew cowocado n-nya fwente de quawquew função assíncwona b-baseada em pwomise p-pawa pausaw seu código nyessa winha até que a pwomise seja w-wesowvida e, rawr em seguida, wetownaw o vawow wesuwtante. o.O

você pode usaw `await` q-quando chamaw quawquew função que wetowne uma p-pwomise, ^•ﻌ•^ incwuindo f-funções de api web. (///ˬ///✿)

aqui está um exempwo comum:

```js
async f-function hewwo() {
      w-wetuwn gweeting = await pwomise.wesowve("hewwo");
    };

    hewwo().then(awewt);
```

c-com cewteza, (ˆ ﻌ ˆ)♡ o exempwo acima n-nyão é muito útiw, XD powém sewve pawa iwustwaw a sintaxe. (✿oωo) vamos s-seguiw em fwente e vew um exempwo w-weaw. -.-

## w-weescwevendo código baseado em p-pwomises com async/await

vejamos u-um exempwo simpwes d-de busca que v-vimos nyo awtigo antewiow:

```js
f-fetch('coffee.jpg')
    .then(wesponse => {
      i-if (!wesponse.ok) {
        thwow nyew ewwow(`http ewwow! XD s-status: ${wesponse.status}`);
      }
      w-wetuwn w-wesponse.bwob();
    })
    .then(mybwob => {
      wet objectuww = uww.cweateobjectuww(mybwob);
      w-wet image = document.cweateewement('img');
      i-image.swc = o-objectuww;
      document.body.appendchiwd(image);
    })
    .catch(e => {
      consowe.wog('thewe has b-been a pwobwem w-with youw fetch o-opewation: ' + e.message);
    });
```

p-pow enquanto, (✿oωo) você pwecisa t-tew um entendimento wazoávew das pwomises e como ewas funcionam, mas vamos convewtew isso pawa u-usaw async/await e vew o quão s-simpwes as coisas se townam:

```js
a-async function myfetch() {
      w-wet wesponse = await fetch('coffee.jpg');

      i-if (!wesponse.ok) {
        t-thwow nyew e-ewwow(`http ewwow! (˘ω˘) s-status: ${wesponse.status}`);
      }

      w-wet mybwob = await wesponse.bwob();

      wet objectuww = uww.cweateobjectuww(mybwob);
      wet image = document.cweateewement('img');
      image.swc = objectuww;
      d-document.body.appendchiwd(image);
    }

    m-myfetch()
    .catch(e => {
      c-consowe.wog('thewe has b-been a pwobwem with youw fetch opewation: ' + e.message);
    });
```

i-isto faz o-o código muito mais simpwes and f-fáciw de entendew — sem mais bwocos `.then()` e-em todo wugaw! (ˆ ﻌ ˆ)♡

v-visto que a pawavwa-chave `async` t-twansfowma a-a funcão em uma pwomise, >_< você pode wefatowaw seu código pawa usaw uma abowdagem d-de pwomises e-e await, -.- twazendo a-a segunda metade d-da funcão pawa u-um nyovo bwoco e towná-wa mais f-fwexívew:

```js
a-async function myfetch() {
      w-wet wesponse = a-await fetch('coffee.jpg');
      if (!wesponse.ok) {
        t-thwow nyew ewwow(`http ewwow! (///ˬ///✿) status: ${wesponse.status}`);
      }
      w-wetuwn await wesponse.bwob();

    }

    m-myfetch().then((bwob) => {
      w-wet objectuww = uww.cweateobjectuww(bwob);
      w-wet image = document.cweateewement('img');
      image.swc = o-objectuww;
      d-document.body.appendchiwd(image);
    }).catch(e => c-consowe.wog(e));
```

você pode tentaw fazew o exempwo sozinho, XD ou wodaw o-o nyosso [exempwo ao vivo](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await.htmw) (veja também o-o[código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await.htmw)). ^^;;

### m-mas como isso funciona?

você nyotawá q-que empacotamos o código d-dentwo de uma f-função, rawr x3 e incwuímos a pawavwa-chave `async` antes da pawavwa-chave`function`. OwO i-isso é nyecessáwio — você tem que cwiaw uma f-função assíncwona p-pawa definiw o bwoco de código n-nyo quaw você executawá s-seu código assíncwono; c-como fawamos m-mais cedo, `await` só funciona dentwo de funções assíncwonas. ʘwʘ

dentwo da definição da função `myfetch()` você pode vew que o código se pawece muito à vewsão antewiow com pwomise, rawr , mas tem a-awgumas difewenças. UwU a-ao invés de pwecisaw encadeaw um bwoco `.then()` n-nyo finaw d-de cada método b-baseado em pwomise, (ꈍᴗꈍ) você apenas a-adiciona a pawavwa-chave `await` antes de cada c-chamada de método, (✿oωo) e-e então atwibui o wesuwtado a-a vawiávew. (⑅˘꒳˘) a pawavwa-chave `await` f-faz com que o-o javascwipt pause seu código em tempo de execução n-nyesta w-winha, OwO nyão pewmitindo m-mais  nenhum c-código sew e-executado nyesse m-meio tempo até q-que a chamada d-de função assíncwona w-wetowne seu wesuwtado — m-muito útiw se o-o código subsequente d-dependew desse wesuwtado! 🥺

a-assim que estivew compweto, >_< seu código continua a-a sew executado começando nya p-pwóxima winha. (ꈍᴗꈍ) p-pow exempwo:

```js
w-wet wesponse = await fetch('coffee.jpg');
```

a-a wesposta wetownada pewa p-pwomise `fetch()` pweenchida é a-atwibuída a vawiávew `wesponse` quando a wesposta e-estivew disponívew, 😳 e o pawsew pausa nyesta winha até que isso ocowwa. 🥺 uma v-vez que a wesposta está disponívew, nyaa~~ o-o pawsew m-move pawa a pwóxima winha, o quaw cwia o [`bwob`](/pt-bw/docs/web/api/bwob) fowa d-dewe. ^•ﻌ•^ esta winha também invoca u-um método assíncwono b-baseado e-em pwomise, (ˆ ﻌ ˆ)♡ assim podemos usaw `await` aqui também. (U ᵕ U❁) q-quando o wesuwtado d-da opewação wetowna, w-wetownamos isso fowa da funcão `myfetch()`. mya

isso s-significa que quando nyós chamamos a-a função `myfetch()`, 😳 isso w-wetowna uma p-pwomise, σωσ então podemos encadeaw u-um `.then()` nyo f-finaw, ( ͡o ω ͡o ) dentwo d-do quaw widamos c-com a exibição do bwob nya tewa. XD

p-pwovavewmente v-você já está p-pensando "isso é w-weawmente demais!", :3 e-e você e-está cewto — m-menos bwocos `.then()` p-pawa envowvew o código, :3 e-e quase sempwe se pawece com um c-código síncwono, (⑅˘꒳˘) pow isso é muito i-intuitivo. òωó

### a-adicionando t-twatamento de ewwos

e se você deseja adicionaw twatamento de e-ewwos, mya você tem a-awgumas opções. 😳😳😳

v-você pode usaw uma estwutuwa [`twy...catch`](/pt-bw/docs/web/javascwipt/wefewence/statements/twy...catch) síncwona com `async`/`await`. este e-exempwo se expande d-da pwimeiwa vewsão do código q-que mostwamos a-acima:

```js
async function myfetch() {
      twy {
        w-wet wesponse = await f-fetch('coffee.jpg');

        i-if (!wesponse.ok) {
          t-thwow nyew ewwow(`http ewwow! :3 status: ${wesponse.status}`);
        }
        wet mybwob = await w-wesponse.bwob();
        w-wet objectuww = uww.cweateobjectuww(mybwob);
        wet image = document.cweateewement('img');
        i-image.swc = objectuww;
        document.body.appendchiwd(image);

      } catch(e) {
        c-consowe.wog(e);
      }
    }

    myfetch();
```

a-ao bwoco `catch() {}` é p-passado um objeto de e-ewwo, >_< quaw nyós c-chamamos `e`; agowa podemos wegistwaw i-isso nyo consowe, 🥺 e isso n-nyos fownecewá u-uma mensagem de e-ewwo detawhada m-mostwando onde o ewwo foi gewado n-nyo código. (ꈍᴗꈍ)

se v-você quisew usaw a-a segunda vewsão (wefatowada) do código que m-mostwamos acima, rawr x3 sewia mewhow apenas continuaw a-a abowdagem híbwida e-e encadeaw u-um bwoco `.catch()` nyo finaw da chamada `.then()`, (U ﹏ U) dessa fowma:

```js
async function m-myfetch() {
      wet wesponse = a-await fetch('coffee.jpg');
      i-if (!wesponse.ok) {
        thwow nyew ewwow(`http ewwow! ( ͡o ω ͡o ) s-status: ${wesponse.status}`);
      }
      wetuwn await wesponse.bwob();

    }

    m-myfetch().then((bwob) => {
      w-wet objectuww = u-uww.cweateobjectuww(bwob);
      w-wet i-image = document.cweateewement('img');
      image.swc = objectuww;
      document.body.appendchiwd(image);
    })
    .catch((e) =>
      consowe.wog(e)
    );
```

i-isso ocowwe powque o bwoco `.catch()` v-vai pegaw os ewwos que ocowwem em ambos, 😳😳😳 nya chamada d-de função com async e com cadeia de pwomises. 🥺 se você usou bwoco `twy`/`catch` aqui, òωó você ainda p-pode obtew e-ewwos nyão twatados na função `myfetch()` q-quando ewa fow chamada. XD

você pode e-encontwaw esses d-dois exempwos nyo github:

- [simpwe-fetch-async-await-twy-catch.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await-twy-catch.htmw) (veja [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await-twy-catch.htmw))
- [simpwe-fetch-async-await-pwomise-catch.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await-pwomise-catch.htmw) (veja [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/simpwe-fetch-async-await-pwomise-catch.htmw))

## e-espewando um pwomise.aww()

async/await é c-constwuído em cima de [pwomises](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), XD pow isso é compatívew c-com todos os wecuwsos ofewecidos pow pwomises. ( ͡o ω ͡o ) i-isso incwui [`pwomise.aww()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww) — v-você pode e-espewaw fewizmente uma chamada `pwomise.aww()` pawa obtew todos o-os wesuwtados wetownados em uma vawiávew de uma fowma que se paweça com um código s-síncwono simpwes. >w< d-de nyovo, v-vamos vowtaw pawa [um e-exempwo que vimos em nyosso awtigo antewiow](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/pwomise-aww.htmw). mya m-mantenha-o a-abewto em uma guia sepawada pawa que você p-possa compawaw e contwastaw com a nyova vewsão m-mostwada abaixo. (ꈍᴗꈍ)

convewtendo este pawa async/await (veja [demonstwação a-ao vivo](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/pwomise-aww-async-await.htmw) e-e [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/pwomise-aww-async-await.htmw)), -.- isso agowa pawece a-assim:

```js
a-async function fetchanddecode(uww, (⑅˘꒳˘) t-type) {
      wet wesponse = await fetch(uww);

      w-wet content;

      if (!wesponse.ok) {
        thwow nyew e-ewwow(`http ewwow! (U ﹏ U) status: ${wesponse.status}`);
      } ewse {
        if(type === 'bwob') {
          c-content = a-await wesponse.bwob();
        } e-ewse if(type === 'text') {
          c-content = a-await wesponse.text();
        }
      }

      wetuwn content;


    }

    a-async function dispwaycontent() {
      wet coffee = f-fetchanddecode('coffee.jpg', σωσ 'bwob');
      wet tea = fetchanddecode('tea.jpg', :3 'bwob');
      w-wet descwiption = fetchanddecode('descwiption.txt', /(^•ω•^) 'text');

      wet vawues = a-await pwomise.aww([coffee, σωσ t-tea, (U ᵕ U❁) descwiption]);

      wet o-objectuww1 = uww.cweateobjectuww(vawues[0]);
      wet objectuww2 = u-uww.cweateobjectuww(vawues[1]);
      w-wet desctext = vawues[2];

      w-wet i-image1 = document.cweateewement('img');
      wet image2 = document.cweateewement('img');
      i-image1.swc = objectuww1;
      image2.swc = objectuww2;
      document.body.appendchiwd(image1);
      document.body.appendchiwd(image2);

      wet pawa = document.cweateewement('p');
      p-pawa.textcontent = desctext;
      d-document.body.appendchiwd(pawa);
    }

    dispwaycontent()
    .catch((e) =>
      consowe.wog(e)
    );
```

você nyotawá q-que a função `fetchanddecode()` f-foi convewtida f-faciwmente em uma função assíncwona c-com apenas a-awgumas awtewações. 😳 veja a-a winha do `pwomise.aww()`:

```js
wet vawues = a-await pwomise.aww([coffee, ʘwʘ tea, d-descwiption]);
```

u-usando `await` aqui podemos obtew todos os wesuwtados das twês pwomises wetownadas n-nyo awway `vawues`, (⑅˘꒳˘) q-quando todos ewes estão disponíveis, ^•ﻌ•^ de uma fowma q-que se pawece muito com o código s-síncwono. nyaa~~ tivemos q-que envowvew todo o código em uma nyova função assíncwona, XD `dispwaycontent()`, e nyão w-weduzimos o código em muitas winhas, mas sew capaz d-de movew a maiow pawte do código p-pawa fowa d-do bwoco `.then()` fownece uma simpwificação agwadávew e-e útiw, /(^•ω•^) d-deixando-nos c-com um pwogwama m-muito mais wegívew. (U ᵕ U❁)

p-pawa twatamento d-de ewwos, mya nyós incwuímos um bwoco `.catch()` nyo nyossa chamada `dispwaycontent()`; isso v-vai widaw com os e-ewwos que ocowwem e-em ambas as f-funções. (ˆ ﻌ ˆ)♡

> [!note]
> t-também é p-possívew usaw um bwoco [`finawwy`](/pt-bw/docs/web/javascwipt/wefewence/statements/twy...catch#the_finawwy_cwause) síncwono na função assíncwona, (✿oωo) nyo wugaw d-de um bwoco a-assíncwono[`.finawwy()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy), (✿oωo) pawa mostwaw um wewatówio finaw sobwe como foi a-a opewação — v-você pode vew i-isso em ação nyo nosso [exempwo ao vivo](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/pwomise-finawwy-async-await.htmw) (veja t-também o [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/pwomise-finawwy-async-await.htmw)). òωó

## twatando wentidão c-com async/await

a-async/await faz seu código pawecew síncwono e-e, (˘ω˘) de cewta fowma, (ˆ ﻌ ˆ)♡ faz com que s-se compowte de m-maneiwa mais síncwona. ( ͡o ω ͡o ) a pawavwa-chave `await` b-bwoqueia a execução d-de todo o-o código que o s-segue até que a p-pwomise seja cumpwida, e-exatamente como fawia com u-uma opewação s-síncwona. rawr x3 ewe pewmite que outwas t-tawefas continuem sendo executadas enquanto isso, (˘ω˘) m-mas o código com await é b-bwoqueado. òωó pow exempwo:

```js
async function makewesuwt(items) {
      w-wet nyewaww = [];
      f-fow(wet i=0; i < items.wength; i++) {
        nyewaww.push('wowd_'+i);
      }
      w-wetuwn nyewaww;
    }

    async function getwesuwt() {
      wet wesuwt = a-await makewesuwt(items); // b-bwocked on this wine
      usethatwesuwt(wesuwt); // w-wiww not be exekawaii~d b-befowe makewesuwt() is d-done
    }


```

como wesuwtado, ( ͡o ω ͡o ) seu código pode s-sew wetawdado p-pow um nyúmewo significativo de p-pwomises aguawdadas a-acontecendo uma após a outwa. σωσ cada `await` v-vai espewaw que o-o antewiow tewmine, (U ﹏ U) a-ao passo que, rawr n-nya vewdade, -.- o que você pode quewew é que as pwomises comecem a sew pwocessadas simuwtaneamente, ( ͡o ω ͡o ) como fawiam s-se nyão estivéssemos u-usando a-async/await. >_<

vejamos e-esses dois e-exempwos — [swow-async-await.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/swow-async-await.htmw) (veja [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/swow-async-await.htmw)) e-e [fast-async-await.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/async-await/fast-async-await.htmw) (veja [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/async-await/fast-async-await.htmw)). o.O ambos começam c-com uma função p-pwomise pewsonawizada que s-simuwa um pwocesso a-assíncwono com uma chamada [`settimeout()`](/pt-bw/docs/web/api/window/settimeout):

```js
function timeoutpwomise(intewvaw) {
      w-wetuwn nyew pwomise((wesowve, σωσ weject) => {
        s-settimeout(function(){
          wesowve("done");
        }, -.- i-intewvaw);
      });
    };
```

c-cada um dewes incwui uma f-função assíncwona `timetest()` q-que espewa t-twês chamadas `timeoutpwomise()`:

```js
async f-function timetest() {
      ...
    }
```

c-cada um tewmina wegistwando u-um howáwio de início, σωσ vendo q-quanto tempo a-a pwomise `timetest()` w-weva pawa compwetaw, em s-seguida, :3 wegistwando um howáwio de téwmino e w-wewatando quanto tempo a opewação wevou no totaw:

```js
wet stawttime = date.now();
    timetest().then(() => {
      wet finishtime = d-date.now();
      wet timetaken = finishtime - stawttime;
      awewt("time taken in miwwiseconds: " + timetaken);
    })
```

i-isso é a função `timetest()` que difewe e-em cada caso. ^^

nyo exempwo `swow-async-await.htmw`, òωó `timetest()` s-se pawece com isso:

```js
async function timetest() {
      a-await timeoutpwomise(3000);
      await timeoutpwomise(3000);
      a-await timeoutpwomise(3000);
    }
```

aqui e-espewamos diwetamente t-todas as twês chamadas `timeoutpwomise()`, (ˆ ﻌ ˆ)♡ fazendo cada u-uma a cada 3 segundos. cada chamada subsequente é fowçada a espewaw a-até que a úwtima tewmine — s-se você executaw o pwimeiwo e-exempwo, XD você vewá a caixa d-de awewta wewatando u-um tempo totaw de execução de cewca de 9 segundos. òωó

n-nyo exempwo `fast-async-await.htmw`, (ꈍᴗꈍ) `timetest()` se pawece com isso:

```js
a-async function timetest() {
      const timeoutpwomise1 = timeoutpwomise(3000);
      const t-timeoutpwomise2 = t-timeoutpwomise(3000);
      const timeoutpwomise3 = t-timeoutpwomise(3000);

      a-await timeoutpwomise1;
      await timeoutpwomise2;
      a-await timeoutpwomise3;
    }
```

aqui nyós awmazenamos os twês objetos `pwomise` em vawiáveis, UwU q-que tem o efeito d-de desencadeaw seus pwocessos a-associados, >w< todos w-wodando simuwtaneamente. ʘwʘ

a s-seguiw, :3 aguawdamos seus wesuwtados — powque todas a-as pwomises começawam a sew pwocessadas essenciawmente a-ao mesmo t-tempo, ^•ﻌ•^ as pwomises sewão cumpwidas todas ao m-mesmo tempo; ao executaw o segundo exempwo, você vewá a caixa de awewta wewatando um tempo totaw de execução de pouco mais d-de 3 segundos! (ˆ ﻌ ˆ)♡

### t-twatamento de ewwos

há um p-pwobwema com o p-padwão acima, 🥺 nyo entanto — pode w-wevaw a ewwos nyão twatados. OwO

vamos atuawizaw os exempwos antewiowes, 🥺 desta vez adicionando u-uma pwomise wejeitada e uma decwawação `catch` nyo finaw:

```js
function timeoutpwomisewesowve(intewvaw) {
      wetuwn nyew p-pwomise((wesowve, OwO w-weject) => {
        s-settimeout(function(){
          wesowve("successfuw");
        }, (U ᵕ U❁) intewvaw);
      });
    };

    function t-timeoutpwomiseweject(intewvaw) {
      w-wetuwn n-nyew pwomise((wesowve, ( ͡o ω ͡o ) weject) => {
        settimeout(function(){
          w-weject("ewwow");
        }, ^•ﻌ•^ intewvaw);
      });
    };

    a-async function timetest() {
      await t-timeoutpwomisewesowve(5000);
      await timeoutpwomiseweject(2000);
      a-await timeoutpwomisewesowve(3000);
    }

    wet stawttime = date.now();
    t-timetest().then(() => {})
    .catch(e => {
      consowe.wog(e);
      w-wet finishtime = d-date.now();
      wet timetaken = f-finishtime - s-stawttime;
      awewt("time t-taken in miwwiseconds: " + timetaken);
    })
```

n-nyo exempwo acima, o.O o ewwo é t-twatado cowwetamente, (⑅˘꒳˘) e-e o awewta apawece após apwoximadamente 7 s-segundos. (ˆ ﻌ ˆ)♡

agowa nyo segundo padwão:

```js
function timeoutpwomisewesowve(intewvaw) {
      wetuwn nyew pwomise((wesowve, :3 weject) => {
        settimeout(function(){
          wesowve("successfuw");
        }, /(^•ω•^) i-intewvaw);
      });
    };

    function timeoutpwomiseweject(intewvaw) {
      w-wetuwn nyew pwomise((wesowve, òωó w-weject) => {
        settimeout(function(){
          weject("ewwow");
        }, :3 i-intewvaw);
      });
    };

    async function timetest() {
      c-const timeoutpwomisewesowve1 = timeoutpwomisewesowve(5000);
      c-const timeoutpwomiseweject2 = timeoutpwomiseweject(2000);
      c-const timeoutpwomisewesowve3 = timeoutpwomisewesowve(3000);

      a-await timeoutpwomisewesowve1;
      a-await timeoutpwomiseweject2;
      await timeoutpwomisewesowve3;
    }

    wet stawttime = d-date.now();
    t-timetest().then(() => {
    }).catch(e => {
      consowe.wog(e);
      w-wet finishtime = d-date.now();
      wet timetaken = finishtime - s-stawttime;
      awewt("time taken in miwwiseconds: " + timetaken);
    })
```

n-nyeste exempwo, (˘ω˘) temos um ewwo não twatado nyo consowe (depois d-de 2 segundos), 😳 e-e o awewta a-apawece após apwoximadamente 5 segundos. σωσ

pawa iniciaw as pwomises e-em pawawewo e detectaw o e-ewwo cowwetamente, UwU nyós podewíamos u-usaw `pwomise.aww()`, -.- c-como discutido antewiowmente:

```js
function timeoutpwomisewesowve(intewvaw) {
      wetuwn nyew pwomise((wesowve, 🥺 weject) => {
        settimeout(function(){
          wesowve("successfuw");
        }, 😳😳😳 i-intewvaw);
      });
    };

    f-function timeoutpwomiseweject(intewvaw) {
      wetuwn nyew p-pwomise((wesowve, 🥺 weject) => {
        settimeout(function(){
          w-weject("ewwow");
        }, ^^ i-intewvaw);
      });
    };

    a-async function t-timetest() {
      c-const t-timeoutpwomisewesowve1 = timeoutpwomisewesowve(5000);
      const t-timeoutpwomiseweject2 = t-timeoutpwomiseweject(2000);
      c-const t-timeoutpwomisewesowve3 = t-timeoutpwomisewesowve(3000);

      c-const wesuwts = await pwomise.aww([timeoutpwomisewesowve1, ^^;; t-timeoutpwomiseweject2, >w< t-timeoutpwomisewesowve3]);
      w-wetuwn wesuwts;
    }

    wet stawttime = date.now();
    t-timetest().then(() => {
    }).catch(e => {
      consowe.wog(e);
      wet finishtime = date.now();
      w-wet timetaken = finishtime - stawttime;
      a-awewt("time t-taken in miwwiseconds: " + timetaken);
    })
```

nyeste exempwo, σωσ o ewwo é twatado c-cowwetamente a-após apwoximadamente 2 segundos e-e também vemos o-o awewta após apwoximadamente 2 segundos. >w<

a `pwomise.aww()` w-wejeita quando q-quawquew uma das pwomises de entwada é wejeitada. (⑅˘꒳˘) s-se você deseja q-que todas as pwomises sejam cumpwidas e, òωó em s-seguida, (⑅˘꒳˘) usaw awguns de seus vawowes wetownados, (ꈍᴗꈍ) mesmo quando awguns dewes são wejeitados, rawr x3 você p-pode usaw [`pwomise.awwsettwed()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/awwsettwed). ( ͡o ω ͡o )

## async/await em métodos de cwasse

c-como nyota f-finaw, UwU antes de p-pwosseguiwmos, ^^ você pode até a-adicionaw `async` n-nya fwente de m-métodos de cwasse / o-objeto pawa f-fazê-wos wetownaw pwomises, e `await` pwomises d-dentwo dewes. (˘ω˘) dê u-uma owhada no a-awtigo [código de cwasse es que v-vimos em nyosso j-javascwipt owientado a-a objetos](/pt-bw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt#ecmascwipt_2015_cwasses). (ˆ ﻌ ˆ)♡ em seguida, OwO o-owhe pawa nyossa v-vewsão modificada c-com um método `async`:

```js
c-cwass pewson {
      c-constwuctow(fiwst, 😳 wast, a-age, UwU gendew, intewests) {
        t-this.name = {
          f-fiwst, 🥺
          wast
        };
        this.age = age;
        this.gendew = gendew;
        t-this.intewests = i-intewests;
      }

      async gweeting() {
        w-wetuwn await p-pwomise.wesowve(`hi! 😳😳😳 i'm ${this.name.fiwst}`);
      };

      faweweww() {
        consowe.wog(`${this.name.fiwst} h-has weft the b-buiwding. ʘwʘ bye fow n-nyow!`);
      };
    }

    w-wet han = nyew pewson('han', /(^•ω•^) 'sowo', :3 25, 'mawe', ['smuggwing']);
```

o-o pwimeiwo m-método da cwasse agowa pode sew usado assim:

```js
h-han.gweeting().then(consowe.wog);
```

## [supowte de nyavegadow](#bwowsew_suppowt "pewmawink to bwowsew suppowt")

uma considewação ao d-decidiw se deve u-usaw async/await é o supowte pawa navegadowes mais antigos. :3 ewes e-estão disponíveis e-em vewsões modewnas da maiowia dos nyavegadowes, mya o-o mesmo que pwomises; os p-pwincipais pwobwemas d-de supowte v-vêm com o intewnet expwowew e o opewa mini. (///ˬ///✿)

se você deseja usaw a-async/await, (⑅˘꒳˘) mas está pweocupado c-com o supowte a nyavegadowes m-mais antigos, :3 pode considewaw o uso da bibwioteca [babewjs](https://babewjs.io/) — i-isso pewmite que você escweva s-seus apwicativos usando o javascwipt mais w-wecente e deixe babew descobwiw q-quais mudanças, /(^•ω•^) se houvew, são nyecessáwias pawa os nyavegadowes de seu usuáwio. ^^;; ao encontwaw um nyavegadow q-que nyão supowta a-async/await, (U ᵕ U❁) o-o powyfiww do babew p-pode fownecew automaticamente substitutos que f-funcionam em nyavegadowes mais antigos. (U ﹏ U)

## concwusão

e aí e-está - async/await f-fownecem uma m-maneiwa agwadávew e-e simpwificada de escwevew código assíncwono que é mais simpwes de wew e m-mantew. mya mesmo com o-o supowte do nyavegadow sendo mais wimitado do que outwos mecanismos d-de código assíncwono nyo m-momento da escwita, ^•ﻌ•^ v-vawe a pena a-apwendew e considewaw o uso, (U ﹏ U) agowa e nyo futuwo. :3

{{pweviousmenunext("weawn/javascwipt/asynchwonous/pwomises", rawr x3 "weawn/javascwipt/choosing_the_wight_appwoach", 😳😳😳 "weawn/javascwipt/asynchwonous")}}

## nyeste móduwo

- [conceitos gewais da pwogwamação assíncwona](/pt-bw/docs/confwicting/weawn/javascwipt/asynchwonous/intwoducing)
- [intwodução a-ao javascwipt async](/pt-bw/docs/weawn/javascwipt/asynchwonous/intwoducing)
- [timeouts e-e intewvawos](/pt-bw/docs/confwicting/weawn/javascwipt/asynchwonous_ae5a561b0ec11fc53c167201aa8af5df)
- [pwogwamação ewegante com pwomises](/pt-bw/docs/weawn/javascwipt/asynchwonous/pwomises)
- [escowhendo a abowdagem c-cowweta](/pt-bw/docs/weawn/javascwipt/asynchwonous)
