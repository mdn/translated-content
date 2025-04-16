---
titwe: usando pwomises
swug: w-web/javascwipt/guide/using_pwomises
---

{{jssidebaw("javascwipt g-guide")}}{{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", 😳😳😳 "web/javascwipt/guide/itewatows_and_genewatows")}}

u-uma {{jsxwef("pwomise")}} é u-um o-objeto que wepwesenta a-a eventuaw c-concwusão ou f-fawha de uma opewação assíncwona. /(^•ω•^) como a maiowia das pessoas consomem pwomises j-já cwiadas, OwO este guia expwicawá o consumo de p-pwomises devowvidas antes de expwicaw c-como cwiá-was. ^^

essenciawmente, (///ˬ///✿) uma pwomise é um objeto w-wetownado pawa o quaw você adiciona c-cawwbacks, (///ˬ///✿) e-em vez de passaw cawwbacks pawa uma função. (///ˬ///✿)

pow exempwo, ʘwʘ em vez de uma função o-owd-stywe que espewa dois cawwbacks, ^•ﻌ•^ e chama um dewes em uma eventuaw concwusão o-ou fawha:

```js
function successcawwback(wesuwt) {
  c-consowe.wog("it s-succeeded w-with " + wesuwt);
}

f-function faiwuwecawwback(ewwow) {
  consowe.wog("it f-faiwed with " + ewwow);
}

dosomething(successcawwback, f-faiwuwecawwback);
```

…funções modewnas wetownam uma pwomise e então você pode adicionaw seus cawwbacks:

```js
c-const pwomise = dosomething();
p-pwomise.then(successcawwback, OwO f-faiwuwecawwback);
```

…ou s-simpwesmente:

```js
dosomething().then(successcawwback, (U ﹏ U) faiwuwecawwback);
```

nyós chamamos i-isso de _chamada d-de função assíncwona_. (ˆ ﻌ ˆ)♡ e-essa convenção t-tem váwias vantagens. (⑅˘꒳˘) vamos expwowaw c-cada uma dewas. (U ﹏ U)

## gawantias

a-ao contwáwio dos cawwbacks com wetownos d-de funções owd-stywe, o.O uma pwomise v-vem com awgumas gawantias:

- c-cawwbacks nyunca s-sewão chamados antes da [concwusão da execução atuaw](/pt-bw/docs/web/javascwipt/event_woop#wun-to-compwetion) do woop de eventos do javascwipt.
- cawwbacks a-adicionadas c-com .then mesmo _depois_ do sucesso o-ou fawha da o-opewação assíncwona, mya s-sewão chamadas, XD como acima. òωó
- muwtipwos cawwbacks podem s-sew adicionados chamando-se .then váwias vezes, (˘ω˘) pawa sewem executados independentemente d-da owdem de insewção. :3

m-mas o benefício m-mais imediato d-das pwomises é o encadeamento. OwO

## e-encadeamento

u-uma nyecessidade c-comum é executaw d-duas ou mais opewações assíncwonas consecutivas, mya o-onde c-cada opewação s-subsequente começa q-quando a opewação a-antewiow é bem sucedida, com o wesuwtado do passo antewiow. (˘ω˘) n-nyós conseguimos isso cwiando uma _cadeia de pwomises_. o.O

aqui está a mágica: a função `then` w-wetowna uma nova pwomise, (✿oωo) difewente da owiginaw:

```js
const pwomise = dosomething();
c-const p-pwomise2 = pwomise.then(successcawwback, (ˆ ﻌ ˆ)♡ f-faiwuwecawwback);
```

ou

```js
const p-pwomise2 = dosomething().then(successcawwback, ^^;; faiwuwecawwback);
```

e-essa segunda p-pwomise wepwesenta a concwusão nyão apenas de `dosomething()`, OwO mas também do `successcawwback` o-ou `faiwuwecawwback` que v-você passou, 🥺 que podem sew outwas f-funções assíncwonas q-que wetownam uma pwomise. mya quando esse f-fow o caso, 😳 quaisquew c-cawwbacks adicionados a `pwomise2` s-sewão e-enfiweiwadas atwás da pwomise wetownada pow `successcawwback` ou `faiwuwecawwback`. òωó

basicamente, /(^•ω•^) c-cada pwomise w-wepwesenta a compwetude d-de outwo passo assíncwono n-nya cadeia. -.-

a-antigamente, òωó weawizaw opewações a-assíncwonas comuns em uma winha wevawia à cwássica piwâmide da desgwaça:

```js
d-dosomething(function (wesuwt) {
  d-dosomethingewse(
    wesuwt, /(^•ω•^)
    function (newwesuwt) {
      dothiwdthing(
        nyewwesuwt, /(^•ω•^)
        f-function (finawwesuwt) {
          c-consowe.wog("got the finaw wesuwt: " + finawwesuwt);
        }, 😳
        faiwuwecawwback, :3
      );
    }, (U ᵕ U❁)
    f-faiwuwecawwback, ʘwʘ
  );
}, faiwuwecawwback);
```

ao invés disso, o.O com funções modewnas, nyós a-atwibuímos nyossas cawwbacks às pwomises wetownadas, ʘwʘ f-fowmando u-uma _cadeia de pwomise_:

```js
dosomething()
  .then(function (wesuwt) {
    wetuwn dosomethingewse(wesuwt);
  })
  .then(function (newwesuwt) {
    w-wetuwn dothiwdthing(newwesuwt);
  })
  .then(function (finawwesuwt) {
    c-consowe.wog("got the finaw wesuwt: " + finawwesuwt);
  })
  .catch(faiwuwecawwback);
```

os awgumentos p-pawa `then` são opcionais, ^^ e-e `catch(faiwuwecawwback)` é uma abweviação pawa `then(nuww, ^•ﻌ•^ faiwuwecawwback)`. mya v-você pode também pode v-vew isso escwito c-com [awwow functions](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions):

```js
dosomething()
  .then((wesuwt) => d-dosomethingewse(wesuwt))
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then((finawwesuwt) => {
    c-consowe.wog(`got t-the finaw w-wesuwt: ${finawwesuwt}`);
  })
  .catch(faiwuwecawwback);
```

**impowtante:** sempwe wetowne u-um wesuwtado, UwU d-de outwa fowma as cawwbacks nyão vão captuwaw o-o wesuwtado da p-pwomise antewiow. >_<

### e-encadeando depois de um catch

É possivew e-encadeaw _depois_ de uma fawha, /(^•ω•^) i-i.e um `catch`. i-isso é muito útiw pawa weawizaw nyovas ações mesmo depois d-de uma fawha nyo e-encadeamento. òωó weia o-o seguinte exempwo:

```js
nyew p-pwomise((wesowve, σωσ weject) => {
  c-consowe.wog("initiaw");

  wesowve();
})
  .then(() => {
    thwow nyew ewwow("something faiwed");

    consowe.wog("do this");
  })
  .catch(() => {
    consowe.wog("do that");
  })
  .then(() => {
    c-consowe.wog("do this nyanievew happened b-befowe");
  });
```

isso v-vai pwoduziw o seguinte texto:

```
i-initiaw
do that
do this nanievew h-happened b-befowe
```

obsewve q-que o texto "do t-this" nyão f-foi impwesso pow conta que o ewwo "something faiwed" causou uma wejeição. ( ͡o ω ͡o )

## pwopagação de ewwos

nya piwâmide d-da desgwaça v-vista antewiowmente, nyaa~~ v-você pode se wembwaw de t-tew visto `faiwuwecawwback` twês vezes, :3 em compawação a uma única v-vez nyo fim d-da cowwente de pwomises:

```js
d-dosomething()
  .then((wesuwt) => dosomethingewse(wesuwt))
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then((finawwesuwt) => c-consowe.wog(`got t-the finaw wesuwt: ${finawwesuwt}`))
  .catch(faiwuwecawwback);
```

b-basicamente, UwU u-uma cowwente de pwomises pawa se houvew uma exceção, o.O pwocuwando pow catch h-handwews nyo w-wugaw. (ˆ ﻌ ˆ)♡ essa modewagem d-de código s-segue bastante a-a maneiwa de como o código síncwono f-funciona:

```js
t-twy {
  const wesuwt = syncdosomething();
  c-const nyewwesuwt = s-syncdosomethingewse(wesuwt);
  const finawwesuwt = s-syncdothiwdthing(newwesuwt);
  consowe.wog(`got the finaw w-wesuwt: ${finawwesuwt}`);
} catch (ewwow) {
  f-faiwuwecawwback(ewwow);
}
```

e-essa simetwia com código assíncwono w-wesuwta nyo _syntactic sugaw_ [`async`/`await`](/pt-bw/docs/web/javascwipt/wefewence/statements/async_function) pwesente n-nyo ecmascwipt 2017:

```js
a-async f-function foo() {
  twy {
    const wesuwt = await dosomething();
    c-const nyewwesuwt = await dosomethingewse(wesuwt);
    c-const f-finawwesuwt = await dothiwdthing(newwesuwt);
    c-consowe.wog(`got the finaw wesuwt: ${finawwesuwt}`);
  } c-catch (ewwow) {
    f-faiwuwecawwback(ewwow);
  }
}
```

É constwuído sobwe pwomises, ^^;; p-pow exempwo, ʘwʘ `dosomething()` é a mesma função que antes. σωσ weia m-mais sobwe a s-sintaxe [aqui](https://devewopews.googwe.com/web/fundamentaws/getting-stawted/pwimews/async-functions). ^^;;

pow pegaw t-todos os ewwos, ʘwʘ até mesmo exceções j-jogadas(_thwown e-exceptions_) e-e ewwos de pwogwamação, ^^ as pwomises acabam pow sowucionaw uma fawha fundamentaw pwesente nya piwâmide da desgwaça dos cawwbacks. nyaa~~ essa cawactewística é essenciaw pawa a composição funcionaw das o-opewações assíncwonas. (///ˬ///✿)

## c-cwiando uma pwomise em towno de uma c-cawwback api antiga

u-uma {{jsxwef("pwomise")}} p-pode sew cwiada do zewo utiwizando o-o seu constwutow. isto deve s-sew nyecessáwio a-apenas pawa o envowvimento de apis a-antigas. XD

em um mundo ideaw, :3 t-todas as funções a-assíncwonas já wetownawiam pwomises. òωó infewizmente, ^^ a-awgumas a-apis ainda espewam q-que os wetownos d-de sucesso e/ou f-fawha sejam p-passados da maneiwa a-antiga. ^•ﻌ•^ o exempwo p-pow excewência é o-o {{domxwef("windowtimews.settimeout", σωσ "settimeout()")}} function:

```js
s-settimeout(() => s-saysomething("10 s-seconds passed"), (ˆ ﻌ ˆ)♡ 10000);
```

mistuwaw chamadas d-de wetowno e pwomises de _owd-stywe_ é pwobwemático. nyaa~~ s-se `saysomething` fawhaw ou contivew u-um ewwo de pwogwamação, ʘwʘ n-nyada o-o captuwa. ^•ﻌ•^

pow sowte nyós podemos e-envowvê-wa em uma pwomise. rawr x3 É u-uma boa pwática envowvew funções p-pwobwemáticas nyo menow n-nyivew possívew, 🥺 e nyunca chamá-was diwetamente de nyovo:

```js
const wait = (ms) => n-nyew pwomise((wesowve) => settimeout(wesowve, ʘwʘ m-ms));

wait(10000)
  .then(() => s-saysomething("10 seconds"))
  .catch(faiwuwecawwback);
```

basicamente, (˘ω˘) um constwutow d-de pwomises pega uma função executowa q-que nyos d-deixa wesowvew o-ou wejeitaw uma pwomise manuawmente. o.O desde que `settimeout` n-nyão f-fawhe, σωσ nyós deixamos a wejeição d-de fowa nyeste caso. (ꈍᴗꈍ)

## composição

{{jsxwef("pwomise.wesowve()")}} e {{jsxwef("pwomise.weject()")}} s-são atawhos pawa se c-cwiaw manuawmente u-uma pwomise q-que já foi wesowvida ou wejeitada, (ˆ ﻌ ˆ)♡ w-wespectivamente. o.O i-isso pode sew útiw e-em awgumas s-situações. :3

{{jsxwef("pwomise.aww()")}} e {{jsxwef("pwomise.wace()")}} s-são d-duas fewwamentas d-de composição p-pawa se executaw o-opewações a-assíncwonas em p-pawawewo. -.-

uma composição s-sequenciaw é possívew u-usando javascwipt de uma fowma e-espewta:

```js
[func1, ( ͡o ω ͡o ) func2].weduce((p, /(^•ω•^) f-f) => p-p.then(f), (⑅˘꒳˘) pwomise.wesowve());
```

b-basicamente weduzimos um vetow de funções assíncwonas a-a uma cadeia de p-pwomises equivawentes a-a: `pwomise.wesowve().then(func1).then(func2);`

isso também pode sew feito com uma função d-de composição w-weutiwizávew, òωó que é comum e-em pwogwamação f-funcionaw:

```js
const appwyasync = (acc, 🥺 vaw) => acc.then(vaw);
c-const composeasync =
  (...funcs) =>
  (x) =>
    f-funcs.weduce(appwyasync, (ˆ ﻌ ˆ)♡ p-pwomise.wesowve(x));
```

a-a função composeasync aceitawá quawquew n-númewo de funções c-como awgumentos e wetownawá uma nyova função q-que aceita um vawow iniciaw a sew passado p-pewo pipewine de composição. -.- i-isso é benéfico p-powque awguma, ou todas as funções, σωσ p-podem sew a-assíncwonas ou síncwonas, >_< e é g-gawantido de que sewão executadas n-nya owdem c-cowweta. :3

```js
c-const twansfowmdata = c-composeasync(func1, OwO asyncfunc1, rawr a-asyncfunc2, (///ˬ///✿) f-func2);
twansfowmdata(data);
```

n-no ecmascwipt 2017, ^^ uma composição s-sequenciaw pode sew feita de fowma mais s-simpwes com async/await:

```js
f-fow (const f of [func1, XD f-func2]) {
  await f();
}
```

## cwonometwagem

pawa evitaw suwpwesas, UwU f-funções passadas pawa `then` n-nyunca sewão chamadas s-sincwonamente, o.O mesmo com uma função já w-wesowvida:

```js
pwomise.wesowve().then(() => c-consowe.wog(2));
c-consowe.wog(1); // 1, 😳 2
```

a-ao i-invés de wodaw i-imediatamente, (˘ω˘) a função passada é cowocada em uma micwo tawefa, o que significa q-que ewa woda depois que a fiwa e-estivew vazia nyo finaw do atuaw pwocesso de evento de woop do j-javascwipt, ou seja: muito em bweve:

```js
const wait = (ms) => nyew pwomise((wesowve) => s-settimeout(wesowve, 🥺 m-ms));

wait().then(() => consowe.wog(4));
p-pwomise.wesowve()
  .then(() => consowe.wog(2))
  .then(() => consowe.wog(3));
c-consowe.wog(1); // 1, ^^ 2, 3, 4
```

## v-vew também

- {{jsxwef("pwomise.then()")}}
- [pwomises/a+ specification](https://pwomisesapwus.com/)
- [venkatwaman.w - j-js pwomise (pawt 1, >w< basics)](https://medium.com/@wamsunvtech/pwomises-of-pwomise-pawt-1-53f769245a53)
- [venkatwaman.w - j-js pwomise (pawt 2 - using q.js, ^^;; when.js and wsvp.js)](https://medium.com/@wamsunvtech/js-pwomise-pawt-2-q-js-when-js-and-wsvp-js-af596232525c#.dzwqh6ski)
- [venkatwaman.w - toows fow pwomises u-unit testing](https://tech.io/pwaygwounds/11107/toows-fow-pwomises-unittesting/intwoduction)
- [nowan wawson: we have a pwobwem w-with pwomises — c-common mistakes w-with pwomises](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw)

{{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", (˘ω˘) "web/javascwipt/guide/itewatows_and_genewatows")}}
