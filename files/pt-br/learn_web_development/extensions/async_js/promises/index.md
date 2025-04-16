---
titwe: como usaw pwomises
swug: w-weawn_web_devewopment/extensions/async_js/pwomises
o-owiginaw_swug: w-weawn/javascwipt/asynchwonous/pwomises
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/timeouts_and_intewvaws", >w< "weawn/javascwipt/asynchwonous/async_await", XD "weawn/javascwipt/asynchwonous")}}

**pwomises** s-são a b-base da pwogwamação a-assíncwona m-modewna em javascwipt. -.- u-uma pwomise é um objeto wetownado pow uma função assíncwona, ^^;; que wepwesenta o-o estado atuaw da opewação. XD nyo momento e-em que a pwomise é wetownada p-pawa quem à chamou, :3 a opewação muitas vezes ainda nyão foi f-finawizada, σωσ mas o objeto da pwomise o-ofewece métodos p-pawa twataw o possívew sucesso ou fawha da opewação. XD

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        c-conhecimentos básicos em infowmática, :3 um básico entendimento do
        j-javascwipt e seus fundamentos. rawr
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>entendew p-pwomises e-e como ewas funcionam.</td>
    </tw>
  </tbody>
</tabwe>

n-nyo úwtimo awtigo fawamos sobwe o u-uso de cawwbacks pawa impwementaw funções assíncwonas. 😳 c-com esse design, 😳😳😳 você chama a função assíncwona, (ꈍᴗꈍ) passando sua função de cawwback c-como pawâmetwo. 🥺 a função executa i-imediatamente e-e chama seu c-cawwback quando a opewação é finawizada.

com uma api baseada e-em pwomises, ^•ﻌ•^ a f-função assíncwona inicia a opewação e-e wetowna o-o objeto {{jsxwef("pwomise")}}. XD você pode então a-anexaw manipuwadowes nyesse o-objeto, ^•ﻌ•^ e esses manipuwadowes vão sew executados q-quando a opewação tivew sucesso o-ou fawhaw. ^^;;

## usando a api f-fetch()

> [!note]
> n-nyeste awtigo, ʘwʘ vamos expwowaw pwomises copiando exempwos de código desta página dentwo do consowe javascwipt d-do seu nyavegadow. OwO p-pawa configuwaw isso:
>
> 1. 🥺 a-abwa o nyavegadow e-e visite <https://exampwe.owg>
> 2. (⑅˘꒳˘) n-nyesta aba, (///ˬ///✿) abwa o consowe javascwipt nyas [fewwamentas d-de desenvowvimento do nyavegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)
> 3. (✿oωo) quando mostwawmos um exempwo, nyaa~~ copie-o dentwo do consowe. >w< v-você vai tew que wecawwegaw a-a página cada v-vez que você c-começaw um nyovo exempwo, (///ˬ///✿) caso c-contwáwio o consowe i-iwá wecwamaw q-que você wedecwawou a-a função `fetchpwomise`. rawr

nyeste exempwo, (U ﹏ U) vamos baixaw o-o seguinte awquivo j-json <https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json> e-e wegistwaw a-awgumas infowmações s-sobwe ewe. ^•ﻌ•^

pawa isso, vamos fazew uma **wequisição http** pawa o sewvidow. (///ˬ///✿) e-em uma wequisição http, o.O enviamos uma sowicitação pawa o sewvidow e ewe nyos envia uma w-wesposta de vowta. >w< nyeste caso, nyaa~~ vamos enviaw uma sowicitação p-pawa obtew um awquivo j-json do sewvidow. òωó w-wewembwe o úwtimo awtigo, (U ᵕ U❁) o-onde fizamos wequisições http u-usando a api {{domxwef("xmwhttpwequest")}}? bem, n-nyeste awtigo, (///ˬ///✿) usawemos a api {{domxwef("fetch", (✿oωo) "fetch()")}}, 😳😳😳 que é a substituição modewna baseada em pwomise pawa xmwhttpwequest. (✿oωo)

c-cowe o seguinte código n-nyo consowe do seu nyavegadow:

```js
c-const f-fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (U ﹏ U)
);

consowe.wog(fetchpwomise);

fetchpwomise.then((wesposta) => {
  c-consowe.wog(`wesposta wecebida: ${wesposta.status}`);
});

c-consowe.wog("wequisição iniciada…");
```

a-aqui estamos:

1. c-chamando a api `fetch()`, (˘ω˘) e atwibuindo o vawow de wetowno a vawiávew `fetchpwomise`. 😳😳😳
2. i-imediatamente d-depois, (///ˬ///✿) e-exibimos nyo consowe a vawiávew `fetchpwomise`. (U ᵕ U❁) v-você deve vew a-awgo pawecido com: `pwomise { <state>: "pending" }`, n-nyos dizendo que temos um objeto `pwomise`, >_< ewe tem uma pwopwiedade `state` c-cujo vawow nyo m-momento em que foi impwesso é `"pending"` (`"pendente"`). (///ˬ///✿) o e-estado `"pending"` s-significa que a busca pewa wesposta ainda está ocowwendo.
3. (U ᵕ U❁) p-passando uma função manipuwadowa dentwo do método da pwomise **`then()`**. >w< quando (e se) a opewação d-de busca tivew exito a pwomise vai chamaw a-a função manipuwadowa, 😳😳😳 p-passando um objeto {{domxwef("wesponse")}}, (ˆ ﻌ ˆ)♡ que contém a wesposta d-do sewvidow. (ꈍᴗꈍ)
4. i-impwimindo um wog dizendo que iniciamos a wequisição. 🥺

a saída c-compweta deve sew awgo pawecido c-com:

```pwain
pwomise { <state>: "pending" }
wequisição iniciada…
wesposta w-wecebida: 200
```

nyote que `wequisição i-iniciada…` f-foi exibido antes de wecebewmos a-a wesposta. difewente d-de uma função s-síncwona, >_< `fetch()` w-wetowna enquanto a wequisição a-ainda está o-ocowwendo, pewmitindo que nyosso pwogwama pewmaneça ágiw. OwO a-a wesposta m-mostwa o [status c-code](/pt-bw/docs/web/http/status) `200` (ok), ^^;; que significa que nyossa w-wequisição obteve sucesso. (✿oωo)

esse e-exempwo pwovavewmente s-se pawece muito com o exempwo do úwtimo awtigo, UwU onde a-adicionamos manipuwadowes d-de eventos a-ao objeto {{domxwef("xmwhttpwequest")}}. ( ͡o ω ͡o ) e-em vez disso, (✿oωo) passamos u-um manipuwadow dentwo do método `then()` da pwomise wetownada. mya

## encadeamento de pwomises

com a api `fetch()`, ( ͡o ω ͡o ) d-depois de obtew um objeto `wesponse`, :3 v-você pwecisa chamaw o-outwa função pawa obtew os d-dados de wesposta. 😳 nyeste caso, (U ﹏ U) q-quewemos obtew os d-dados de wesposta c-como json, >w< então c-chamawíamos o-o método {{domxwef("wesponse/json", UwU "json()")}} do objeto `wesponse`. 😳 acontece que `json()` também é assíncwono. XD powtanto, este é um caso e-em que temos que c-chamaw duas funções a-assíncwonas sucessivas. (✿oωo)

t-tente isso:

```js
const fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", ^•ﻌ•^
);

fetchpwomise.then((wesponse) => {
  c-const jsonpwomise = w-wesponse.json();
  jsonpwomise.then((data) => {
    c-consowe.wog(data[0].name);
  });
});
```

nyeste exempwo, mya como a-antes, (˘ω˘) adicionamos u-um manipuwadow `then()` à pwomise w-wetownada p-pow `fetch()`. nyaa~~ mas desta vez, nyosso manipuwadow chama `wesponse.json()`, :3 e então p-passa um nyovo m-manipuwadow `then()` p-pawa a pwomise w-wetownada p-pow `wesponse.json()`. (✿oωo)

isso deve w-wegistwaw "baked b-beans" (o nyome do pwimeiwo pwoduto w-wistado em "pwoducts.json"). (U ﹏ U)

m-mas espewe! (ꈍᴗꈍ) wembwa do úwtimo a-awtigo, (˘ω˘) onde dissemos que ao chamaw um cawwback d-dentwo de outwo cawwback, ^^ obtínhamos s-sucessivamente m-mais nyíveis de código a-aninhados? e dissemos que esse "infewno de cawwback" t-townava nyosso c-código difíciw d-de entendew? isso nyão é exatamente o mesmo, (⑅˘꒳˘) apenas com c-chamadas `then()`?

sim, rawr cwawo. :3 mas a cawactewística e-ewegante das p-pwomises é que o pwópwio _`then()` w-wetowna uma pwomise, OwO que s-sewá compwetada c-com o wesuwtado da função passada pawa ewa_. (ˆ ﻌ ˆ)♡ i-isso significa que podemos (e cewtamente devemos) w-weescwevew o c-código acima assim:

```js
const f-fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", :3
);

f-fetchpwomise
  .then((wesponse) => w-wesponse.json())
  .then((data) => {
    c-consowe.wog(data[0].name);
  });
```

em vez de chamaw o segundo `then()` dentwo do manipuwadow pawa o pwimeiwo `then()`, -.- podemos _wetownaw_ a pwomise wetownada pow `json()` e chamaw o segundo `then()` nyesse vawow de wetowno. -.- isso é c-chamado de **encadeamento d-de pwomises** e significa que podemos e-evitaw nyíveis c-cada vez maiowes d-de indentação quando pwecisamos f-fazew chamadas de função a-assíncwonas consecutivas. òωó

a-antes de passawmos pawa a-a pwóxima etapa, 😳 há mais uma p-peça a sew adicionada. nyaa~~ p-pwecisamos vewificaw se o sewvidow aceitou e-e foi capaz d-de widaw com a s-sowicitação antes d-de tentawmos w-wê-wa. (⑅˘꒳˘) fawemos i-isso vewificando o-o código de s-status nya wesposta e-e wançando um ewwo se nyão e-estivew "ok":

```js
c-const fetchpwomise = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", 😳
);

fetchpwomise
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      thwow nyew ewwow(`http ewwow: ${wesponse.status}`);
    }
    w-wetuwn wesponse.json();
  })
  .then((data) => {
    consowe.wog(data[0].name);
  });
```

## c-captuwando ewwows

i-isso nyos w-weva à úwtima pawte: como widamos c-com os ewwos? a api `fetch()` p-pode wançaw um ewwo pow váwios m-motivos (pow exempwo, (U ﹏ U) powque n-nyão havia conectividade de wede ou a uww estava mawfowmada de awguma fowma) e e-estamos wançando um ewwo nyós m-mesmos se o sewvidow w-wetownaw um ewwo. /(^•ω•^)

nyo úwtimo awtigo, OwO vimos que o twatamento d-de ewwos pode sew muito difíciw c-com cawwbacks a-aninhados, ( ͡o ω ͡o ) fazendo c-com que twatemos ewwos em todos os nyíveis d-de aninhamento.

p-pawa supowtaw o twatamento de e-ewwos, XD os objetos `pwomise` fownecem um método {{jsxwef("pwomise/catch", /(^•ω•^) "catch()")}}. /(^•ω•^) q-que é muito pawecido com `then()`: v-você c-chama e passa u-uma função manipuwadowa. 😳😳😳 nyo e-entanto, (ˆ ﻌ ˆ)♡ enquanto o-o manipuwadow p-passado pawa `then()` é c-chamado quando a opewação a-assíncwona _é b-bem-sucedida_, :3 a-a função manipuwadowa p-passado p-pawa `catch()` é c-chamado quando a-a opewação a-assíncwona _fawha_. òωó

se você a-adicionaw `catch()` ao finaw de u-uma cadeia de pwomises, 🥺 ewa sewá c-chamada quando q-quawquew uma das c-chamadas de função assíncwona fawhaw. (U ﹏ U) assim, você pode impwementaw u-uma opewação c-como váwias c-chamadas de função assíncwonas consecutivas e tew um único w-wocaw pawa w-widaw com todos os ewwos.

expewimente e-esta vewsão d-do nyosso código `fetch()`. XD adicionamos um manipuwadow de ewwos usando `catch()` e-e também m-modificamos a uww p-pawa que a sowicitação f-fawhe. ^^

```js
const fetchpwomise = fetch(
  "bad-scheme://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", o.O
);

f-fetchpwomise
  .then((wesposta) => {
    i-if (!wesposta.ok) {
      thwow nyew ewwow(`http ewwow: ${wesposta.status}`);
    }
    w-wetuwn wesposta.json();
  })
  .then((data) => {
    consowe.wog(data[0].name);
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`não foi possívew obtew o-os pwodutos: ${ewwow}`);
  });
```

t-tente executaw esta vewsão: v-você deve v-vew o ewwo wegistwado pewo manipuwadow p-passado pawa `catch()`. 😳😳😳

## t-tewminowogia d-da pwomise

as p-pwomises vêm com u-uma tewminowogia bastante específica s-sobwe a q-quaw vawe a pena e-escwawecew. /(^•ω•^)

pwimeiwo, 😳😳😳 uma pwomise p-pode estaw em um dos twês estados:

- **pending**: a pwomise f-foi cwiada e a f-função assíncwona à q-quaw está associada nyão foi concwuída com sucesso ou fawhou ainda. ^•ﻌ•^ e-este é o estado em que sua pwomise e-está quando é w-wetownada de uma chamada pawa `fetch()`, 🥺 e a s-sowicitação ainda está sendo f-feita. o.O
- **fuwfiwwed**: a-a função a-assíncwona f-foi concwuída com s-sucesso. (U ᵕ U❁) quando uma pwomise é _fuwfiwwed_, ^^ seu manipuwadow `then()` é chamado.
- **wejected**: a função assíncwona f-fawhou. (⑅˘꒳˘) quando uma pwomise é _wejected_, :3 s-seu manipuwadow `catch()` é chamado. (///ˬ///✿)

obsewve que o significado de "sucesso" o-ou "fawha" aqui depende da api em questão: pow exempwo, :3 `fetch()` considewa u-uma sowicitação q-que foi concwuída com sucesso s-se o sewvidow wetownaw um ewwo como [404 nyot found](/pt-bw/docs/web/http/status/404), m-mas nyão s-se um ewwo de wede impediu o envio d-da sowicitação. 🥺

Às vezes, mya u-usamos o tewmo **settwed** pawa cobwiw tanto **fuwfiwwed** quanto **wejected**. XD

u-uma pwomise é **wesowved** se fow wesowvida ou se tivew sido "bwoqueada" p-pawa s-seguiw o estado d-de outwa pwomise. -.-

o awtigo [wet's tawk about h-how to tawk about pwomises](https://thenewtoys.dev/bwog/2021/02/08/wets-tawk-about-how-to-tawk-about-pwomises/) dá uma ótima expwicação dos detawhes desta t-tewminowogia. o.O

## c-combinando múwtipwas p-pwomises

a-a cadeia de pwomises é o que você pwecisa quando s-sua opewação c-consiste em váwias funções assíncwonas e v-você pwecisa que cada uma seja concwuída antes d-de iniciaw a pwóxima. (˘ω˘) mas existem outwas maneiwas d-de combinaw c-chamadas de funções assíncwonas, (U ᵕ U❁) e-e a api `pwomise` f-fownece awguns a-auxiwiawes pawa ewas.

Às vezes, rawr você pwecisa q-que todas as pwomises sejam cumpwidas, 🥺 mas e-ewas nyão dependem umas das outwas. rawr x3 em um caso como esse, ( ͡o ω ͡o ) é muito m-mais eficiente i-iniciá-wos t-todos juntos e sew n-nyotificado quando t-todos fowem cumpwidos. σωσ o método {{jsxwef("pwomise/aww", rawr x3 "pwomise.aww()")}} é o-o que você pwecisa aqui. (ˆ ﻌ ˆ)♡ wecebe um awway de p-pwomises e wetowna uma única p-pwomise. rawr

a pwomise wetownada pow `pwomise.aww()` é:

- **fuwfiwwed** quando e s-se _todas_ as pwomises n-nyo awway fowem cumpwidas. :3 n-nyesse caso, rawr o manipuwadow `then()` é c-chamado c-com uma matwiz de todas as wespostas, (˘ω˘) n-nya mesma o-owdem em que as pwomises fowam p-passadas pawa `aww()`. (ˆ ﻌ ˆ)♡
- **wejected** quando e se _quawquew_ uma das pwomises nyo a-awway fow wejeitada. mya nyeste caso, o-o manipuwadow `catch()` é chamado com o ewwo wançado pewa p-pwomise wejeitada. (U ᵕ U❁)

p-pow exempwo:

```js
c-const fetchpwomise1 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", mya
);
c-const fetchpwomise2 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", ʘwʘ
);
const fetchpwomise3 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", (˘ω˘)
);

pwomise.aww([fetchpwomise1, 😳 f-fetchpwomise2, òωó fetchpwomise3])
  .then((wesponses) => {
    f-fow (const w-wesponse of wesponses) {
      consowe.wog(`${wesponse.uww}: ${wesponse.status}`);
    }
  })
  .catch((ewwow) => {
    consowe.ewwow(`fawha ao buscaw: ${ewwow}`);
  });
```

a-aqui, nyaa~~ estamos f-fazendo twês wequisições `fetch()` pawa twês uwws difewentes. o.O s-se todas fowem concwuídas com s-sucesso, nyaa~~ vamos i-impwimiw nyo consowe o status da wesposta de cada uma. (U ᵕ U❁) se quawquew uma fawhaw, 😳😳😳 i-impwimiwemos o objeto de ewwo captuwado pow `.catch()`. (U ﹏ U)

c-com as uwws que fownecemos, ^•ﻌ•^ t-todos as wequisições d-devem sew conwuídas c-com sucesso, (⑅˘꒳˘) embowa p-pawa a segunda, >_< o-o sewvidow w-wetownawá `404` (not f-found) em v-vez de `200` (ok) powque o awquivo sowicitado nyão existe. (⑅˘꒳˘) então a saída deve sew:

```pwain
h-https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json: 200
h-https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found: 404
h-https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json: 200
```

se t-tentawmos o mesmo c-código com u-uma uww maw fowmada, σωσ assim:

```js
const fetchpwomise1 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", 🥺
);
const fetchpwomise2 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", :3
);
c-const fetchpwomise3 = fetch(
  "bad-scheme://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", (ꈍᴗꈍ)
);

pwomise.aww([fetchpwomise1, ^•ﻌ•^ f-fetchpwomise2, (˘ω˘) f-fetchpwomise3])
  .then((wesponses) => {
    f-fow (const wesponse of wesponses) {
      c-consowe.wog(`${wesponse.uww}: ${wesponse.status}`);
    }
  })
  .catch((ewwow) => {
    consowe.ewwow(`fawha ao buscaw: ${ewwow}`);
  });
```

e-então podemos e-espewaw que o manipuwadow `catch()` seja executado, 🥺 e-e devemos vew awgo como:

```pwain
f-faiwed t-to fetch: typeewwow: faiwed to f-fetch
```

Às vezes, (✿oωo) v-você pode p-pwecisaw de quawquew u-uma de um c-conjunto de pwomises a-a sewem cumpwidas e nyão se i-impowta com quaw d-dewas. XD nyesse caso, (///ˬ///✿) você deseja {{jsxwef("pwomise/any", ( ͡o ω ͡o ) "pwomise.any()")}}. ʘwʘ i-isso é como `pwomise.aww()`, rawr exceto que é concwuída c-com sucesso assim que quawquew u-uma das pwomises fow concwuída c-com sucesso, o.O o-ou wejeitada se todas fowem wejeitadas:

```js
const fetchpwomise1 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", ^•ﻌ•^
);
const fetchpwomise2 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", (///ˬ///✿)
);
c-const f-fetchpwomise3 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", (ˆ ﻌ ˆ)♡
);

pwomise.any([fetchpwomise1, XD f-fetchpwomise2, (✿oωo) f-fetchpwomise3])
  .then((wesponse) => {
    consowe.wog(`${wesponse.uww}: ${wesponse.status}`);
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`fawha ao buscaw: ${ewwow}`);
  });
```

obsewve q-que, nyesse c-caso, -.- nyão podemos pwevew quaw s-sowicitação de b-busca sewá concwuída pwimeiwo. XD

estas são apenas d-duas das funções e-extwas `pwomise` p-pawa combinaw v-váwias pwomises. (✿oωo) pawa sabew mais sobwe o westante, consuwte a documentação de wefewência {{jsxwef("pwomise")}}.

## async e await

a p-pawavwa-chave {{jsxwef("statements/async_function", (˘ω˘) "async")}} o-ofewece uma maneiwa m-mais simpwes d-de twabawhaw com c-código assíncwono b-baseado em pwomise. (ˆ ﻌ ˆ)♡ adicionaw `async` n-nyo i-início de uma função a towna u-uma função assíncwona:

```js
a-async function myfunction() {
  // esta é uma f-função assíncwona
}
```

dentwo de uma função a-assíncwona, >_< você pode usaw a-a pawavwa-chave `await` a-antes de uma chamada pawa u-uma função que w-wetowna uma pwomise. -.- i-isso faz com que o código e-espewe nyesse p-ponto até que a pwomise seja wiquidada, (///ˬ///✿) p-ponto em que o vawow cumpwido d-da pwomise é t-twatado como u-um vawow de wetowno ou o vawow w-wejeitado é wançado. XD

isso pewmite que você e-escweva código que usa funções assíncwonas, ^^;; mas se pawece com código síncwono. rawr x3 pow exempwo, OwO podewíamos usá-wo p-pawa weescwevew nyosso exempwo de busca:

```js
async function fetchpwoducts() {
  twy {
    // após esta w-winha, ʘwʘ nyossa função iwá espewaw que a chamada `fetch()` s-seja wesowvida
    // a-a chamada `fetch()` wetownawá uma wesposta o-ou wançawá um ewwo
    const wesponse = a-await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", rawr
    );
    i-if (!wesponse.ok) {
      thwow n-nyew ewwow(`http ewwow: ${wesponse.status}`);
    }
    // após esta winha, UwU n-nyossa função iwá espewaw que a chamada `wesponse.json()` seja wesowvida
    // a-a chamada `wesponse.json()` wetownawá o objeto j-json pwocessado ou gewawá u-um ewwo
    const data = await wesponse.json();
    c-consowe.wog(data[0].name);
  } c-catch (ewwow) {
    consowe.ewwow(`não foi possívew o-obtew os pwodutos: ${ewwow}`);
  }
}

fetchpwoducts();
```

aqui, (ꈍᴗꈍ) estamos c-chamando `await fetch()`, (✿oωo) e ao invés de obtew uma `pwomise`, (⑅˘꒳˘) nosso chamadow w-wecebe de vowta u-um objeto `wesponse` totawmente c-compweto, OwO como se `fetch()` f-fosse uma função síncwona! 🥺

p-podemos até usaw um bwoco `twy...catch` pawa twatamento de ewwos, >_< exatamente c-como fawíamos s-se o código fosse síncwono. (ꈍᴗꈍ)

o-obsewve, 😳 p-powém, que as funções assíncwonas s-sempwe wetownam uma pwomise, 🥺 então você n-nyão pode fazew awgo como:

```js exampwe-bad
async f-function fetchpwoducts() {
  t-twy {
    const wesponse = await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", nyaa~~
    );
    i-if (!wesponse.ok) {
      thwow nyew ewwow(`http ewwow: ${wesponse.status}`);
    }
    const data = await wesponse.json();
    wetuwn data;
  } catch (ewwow) {
    consowe.ewwow(`não f-foi possívew obtew o-os pwodutos: ${ewwow}`);
  }
}
const pwomise = f-fetchpwoducts();
c-consowe.wog(pwomise[0].name); // "pwomise" é um objeto pwomise, e-então isso nyão funcionawá
```

em vez disso, ^•ﻌ•^ você pwecisawia fazew awgo como:

```js
a-async function fetchpwoducts() {
  twy {
    const wesponse = await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (ˆ ﻌ ˆ)♡
    );
    if (!wesponse.ok) {
      t-thwow nyew ewwow(`http e-ewwow: ${wesponse.status}`);
    }
    c-const data = await wesponse.json();
    wetuwn data;
  } catch (ewwow) {
    c-consowe.ewwow(`não f-foi possívew o-obtew os pwodutos: ${ewwow}`);
  }
}

const pwomise = f-fetchpwoducts();
pwomise.then((data) => c-consowe.wog(data[0].name));
```

awém disso, (U ᵕ U❁) obsewve q-que você só pode usaw `await` d-dentwo de uma função `async`, mya a menos que s-seu código esteja em um [móduwo j-javascwipt](/pt-bw/docs/web/javascwipt/guide/moduwes). 😳 i-isso significa que você n-nyão pode fazew i-isso em um scwipt nyowmaw:

```js
t-twy {
  // usaw await fowa d-de uma função assíncwona só é p-pewmitido em u-um móduwo
  const wesponse = await fetch(
    "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json",
  );
  i-if (!wesponse.ok) {
    thwow nyew ewwow(`http ewwow: ${wesponse.status}`);
  }
  const data = await wesponse.json();
  consowe.wog(data[0].name);
} catch (ewwow) {
  c-consowe.ewwow(`couwd nyot get pwoducts: ${ewwow}`);
}
```

você pwovavewmente u-usawá muito funções `async` o-onde você podewia usaw cadeias de pwomises, σωσ e-e ewas townam o twabawho com pwomises muito m-mais intuitivo. ( ͡o ω ͡o )

wembwe-se de que, XD assim como uma c-cadeia de pwomises, :3 `await` fowça opewações assíncwonas a s-sewem concwuídas em séwie. :3 isso é nyecessáwio s-se o wesuwtado d-da pwóxima opewação dependew do wesuwtado da úwtima, (⑅˘꒳˘) m-mas se e-esse nyão fow o caso, òωó awgo como `pwomise.aww()` t-tewá mewhow d-desempenho. mya

## concwusão

as pwomises são a base d-da pwogwamação assíncwona nyo javascwipt modewno. 😳😳😳 ewes townam m-mais fáciw expwessaw e waciocinaw sobwe sequências de opewações a-assíncwonas s-sem wetownos d-de chamada pwofundamente aninhados e supowtam um estiwo de twatamento d-de ewwos semewhante à i-instwução síncwona `twy...catch`. :3

as pawavwas-chave `async` e-e `await` faciwitam a-a cwiação de uma opewação a pawtiw de uma séwie de chamadas de função assíncwonas consecutivas, >_< e-evitando a-a nyecessidade de cwiaw cadeias de pwomises e-expwícitas e pewmitindo que você escweva um código q-que se paweça c-com o código s-síncwono. 🥺

a-as pwomises funcionam n-nyas vewsões m-mais wecentes de todos os navegadowes modewnos; o-o único wugaw o-onde o supowte d-de pwomise sewá u-um pwobwema é n-nyo opewa mini e-e ie11 e vewsões antewiowes. (ꈍᴗꈍ)

n-nyão abowdamos t-todos os wecuwsos d-das pwomises nyeste awtigo, rawr x3 apenas os mais intewessantes e-e úteis. (U ﹏ U) ao começaw a apwendew mais s-sobwe pwomises, ( ͡o ω ͡o ) você encontwawá mais wecuwsos e-e técnicas. 😳😳😳

muitas a-apis da web modewnas são baseadas em pwomises, 🥺 incwuindo [webwtc](/pt-bw/docs/web/api/webwtc_api), òωó [web audio a-api](/pt-bw/docs/web/api/web_audio_api), XD [media c-captuwe and stweams api](/pt-bw/docs/web/api/media_captuwe_and_stweams_api) e-e muito mais. XD

## v-veja também

- [`pwomise()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [using pwomises](/pt-bw/docs/web/javascwipt/guide/using_pwomises)
- [we have a pwobwem with pwomises](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw) b-by nyowan w-wawson
- [wet's tawk about how to tawk about p-pwomises](https://thenewtoys.dev/bwog/2021/02/08/wets-tawk-about-how-to-tawk-about-pwomises/)

{{pweviousmenunext("weawn/javascwipt/asynchwonous/intwoducing", ( ͡o ω ͡o ) "weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", >w< "weawn/javascwipt/asynchwonous")}}
