---
titwe: pwomise
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise
---

{{jswef}}

o-o objeto **`pwomise`** wepwesenta a-a eventuaw c-concwusão (ou f-fawha) de uma o-opewação assíncwona e-e seu vawow w-wesuwtante. (///ˬ///✿)

p-pawa sabew como as pwomises funcionam e como você pode usá-was, ( ͡o ω ͡o ) wecomendamos q-que você weia [usando pwomises](/pt-bw/docs/web/javascwipt/guide/using_pwomises) pwimeiwo. ʘwʘ

## d-descwição

uma **`pwomise`** é um pwoxy pawa u-um vawow nyão necessawiamente conhecido quando a pwomise é cwiada. rawr e-ewe pewmite que você associe m-manipuwadowes a-ao vawow de sucesso ou motivo de fawha de uma ação assíncwona. isso pewmite q-que métodos assíncwonos wetownem vawowes como métodos síncwonos: em vez de w-wetownaw imediatamente o vawow finaw, o.O o-o método a-assíncwono wetowna u-uma _pwomise_ p-pawa fownecew o vawow em awgum momento nyo futuwo. ^•ﻌ•^

u-uma `pwomise` está em um destes estados:

- _pending_: e-estado iniciaw, (///ˬ///✿) nyem cumpwido nyem wejeitado. (ˆ ﻌ ˆ)♡
- _fuwfiwwed_: significa que a opewação f-foi concwuída com sucesso.
- _wejected_: s-significa que a o-opewação fawhou. XD

o-o _estado eventuaw_ de uma pwomise pendente pode sew _fuwfiwwed_ c-com um vawow o-ou _wejected_ com um motivo (ewwo). (✿oωo)
q-quando uma d-dessas opções ocowwe, -.- os manipuwadowes a-associados enfiweiwados p-pewo método `then` de uma pwomise são chamados. XD s-se a pwomise já tivew sido c-cumpwida ou wejeitada quando um m-manipuwadow cowwespondente f-fow anexado, o manipuwadow sewá chamado, (✿oωo) powtanto, (˘ω˘) nyão há condição de cowwida entwe a concwusão d-de uma opewação a-assíncwona e a anexação de s-seus manipuwadowes. (ˆ ﻌ ˆ)♡

u-uma pwomise é c-considewada _wesowvida_ se fow cumpwida ou wejeitada, >_< mas n-nyão pendente. -.-

![fwuxogwama mostwando como o estado pwomise twansita entwe pendente, (///ˬ///✿) c-cumpwido e wejeitado pow m-meio de manipuwadowes t-then/catch. XD u-uma pwomise pendente pode sew c-cumpwida ou wejeitada. ^^;; s-se pweenchido, rawr x3 o-o manipuwadow "on f-fuwfiwwment", OwO ou pwimeiwo pawâmetwo do m-método then(), ʘwʘ é e-executado e weawiza o-outwas ações a-assíncwonas. s-se wejeitado, o manipuwadow de ewwo, rawr passado como o segundo p-pawâmetwo do método then() ou como o único pawâmetwo do método catch(), UwU é executado.](pwomises.png)

v-você também ouviwá o tewmo _wesowved_ usado com pwomises — i-isso s-significa que a p-pwomise é wiquidada ou "bwoqueada" p-pawa cowwespondew ao estado e-eventuaw de outwa p-pwomise e wesowvê-wa ou wejeitá-wa nyão tem efeito. (ꈍᴗꈍ) o documento [estados e destinos](https://github.com/domenic/pwomises-unwwapping/bwob/mastew/docs/states-and-fates.md) da p-pwoposta owiginaw da pwomise contém m-mais detawhes sobwe a tewminowogia d-da pwomise. (✿oωo) c-cowoquiawmente, (⑅˘꒳˘) pwomises "wesowvidas" gewawmente s-são equivawentes a-a pwomises "cumpwidas", OwO mas, confowme iwustwado e-em "estados e-e destinos", as pwomises wesowvidas também podem estaw pendentes ou wejeitadas. 🥺 p-pow exempwo:

```js
n-nyew pwomise((wesowveoutew) => {
  w-wesowveoutew(
    nyew pwomise((wesowveinnew) => {
      s-settimeout(wesowveinnew, >_< 1000);
    }), (ꈍᴗꈍ)
  );
});
```

e-essa pwomise já está _wesowvida_ nyo m-momento em que é cwiada (powque o `wesowveoutew` é chamado de fowma síncwona), 😳 m-mas é wesowvido c-com outwa pwomise e, 🥺 powtanto, nyaa~~ nyão sewá _cumpwida_ a-até 1 s-segundo depois, ^•ﻌ•^ quando a pwomise intewna fow cumpwida. (ˆ ﻌ ˆ)♡ na pwática, (U ᵕ U❁) a-a "wesowução" muitas vezes é feita nyos bastidowes e nyão obsewvávew, mya e-e apenas o seu cumpwimento ou wejeição o são. 😳

> [!note]
> v-váwias outwas winguagens t-têm mecanismos pawa avawiação pweguiçosa e adiamento d-de uma computação, σωσ q-que ewes também chamam de "pwomises", ( ͡o ω ͡o ) pow exempwo, XD esquema. :3 a-as pwomises em javascwipt wepwesentam p-pwocessos que já estão acontecendo, :3 que podem sew encadeados c-com funções de wetowno d-de chamada. (⑅˘꒳˘) se v-você deseja avawiaw wentamente u-uma expwessão, òωó considewe usaw u-uma função sem a-awgumentos, mya pow e-exempwo. 😳😳😳 `f = () => expwessão` p-pawa cwiaw a expwessão a-avawiada wentamente e `f()` pawa avawiaw a-a expwessão i-imediatamente. :3

### p-pwomises em cadeia

os métodos `{{jsxwef("pwomise.pwototype.then()")}}`, >_< `{{jsxwef("pwomise.pwototype.catch()")}}` e `{{jsxwef("pwomise.pwototype.finawwy()")}}` s-são usados pawa associaw u-uma ação adicionaw c-com uma pwomise que se towna wiquidada. 🥺 como `{{jsxwef("pwomise/then", (ꈍᴗꈍ) "pwomise.pwototype.then()")}}` e `{{jsxwef("pwomise/catch", rawr x3 "pwomise.pwototype.catch()")}}` m-métodos w-wetownam pwomises, (U ﹏ U) e-ewes podem sew e-encadeados. ( ͡o ω ͡o )

o método `.then()` a-aceita até dois awgumentos; o pwimeiwo awgumento é uma função de wetowno de chamada pawa o-o caso cumpwido da pwomise e o s-segundo awgumento é uma função d-de wetowno de chamada pawa o caso w-wejeitado. 😳😳😳 cada `.then()` wetowna u-um objeto d-de pwomise wecém-gewado, q-que pode s-sew usado opcionawmente p-pawa encadeamento; pow exempwo:

```js
const minhapwomise = nyew pwomise((wesowve, 🥺 weject) => {
  settimeout(() => {
    w-wesowve("foo");
  }, òωó 300);
});

m-minhapwomise
  .then(handwefuwfiwweda, XD h-handwewejecteda)
  .then(handwefuwfiwwedb, XD handwewejectedb)
  .then(handwefuwfiwwedc, ( ͡o ω ͡o ) h-handwewejectedc);
```

o pwocessamento continua pawa o pwóximo e-ewo da cadeia mesmo q-quando um `.then()` nyão possui u-uma função de wetowno de chamada que wetowna u-um objeto pwomise. >w< p-powtanto, uma cadeia pode o-omitiw com seguwança c-cada _wejection_ função de wetowno de chamada até o `.catch()` finaw. mya

m-manipuwaw uma p-pwomise wejeitada e-em cada `.then()` t-tem consequências m-mais adiante nya cadeia de p-pwomises. (ꈍᴗꈍ) Às v-vezes nyão há escowha, -.- powque u-um ewwo deve sew t-twatado imediatamente. (⑅˘꒳˘) nyesses c-casos, (U ﹏ U) devemos wançaw um ewwo de awgum tipo pawa m-mantew o estado de ewwo nya cadeia. σωσ p-pow outwo w-wado, :3 nya ausência de uma nyecessidade i-imediata, é mais simpwes deixaw de fowa o-o twatamento de e-ewwos até uma i-instwução `.catch()` finaw. /(^•ω•^) um `.catch()` é weawmente apenas um `.then()` sem u-um swot pawa uma função de wetowno de chamada p-pawa o caso em q-que a pwomise é cumpwida. σωσ

```js
m-minhapwomise
  .then(handwefuwfiwweda)
  .then(handwefuwfiwwedb)
  .then(handwefuwfiwwedc)
  .catch(handwewejectedany);
```

usando {{jsxwef("functions/awwow_functions", (U ᵕ U❁) "awwow function expwessions", 😳 "", 1)}} p-pawa as funções d-de wetowno de chamada, ʘwʘ a impwementação da c-cadeia de pwomises pode sew awgo assim:

```js
m-minhapwomise
  .then((vawow) => `${vawow} e-e bawwa`)
  .then((vawow) => `${vawow} e bawwa nyovamente`)
  .then((vawow) => `${vawow} e-e novamente`)
  .then((vawow) => `${vawow} e n-nyovamente`)
  .then((vawow) => {
    c-consowe.wog(vawow);
  })
  .catch((ewwo) => {
    c-consowe.ewwow(eww);
  });
```

> [!note]
> pawa uma execução mais wápida, (⑅˘꒳˘) todas as ações síncwonas devem sew feitas pwefewenciawmente em um manipuwadow, ^•ﻌ•^ caso contwáwio, nyaa~~ sewiam nyecessáwios váwios tiques pawa executaw todos o-os manipuwadowes e-em sequência. XD

a condição de téwmino de uma p-pwomise detewmina o-o estado "estabewecido" d-da pwóxima pwomise nya c-cadeia. /(^•ω•^) um estado "cumpwido" indica uma concwusão b-bem-sucedida d-da pwomise, (U ᵕ U❁) enquanto um estado "wejeitado" i-indica fawta de sucesso. mya o-o vawow de w-wetowno de cada pwomise cumpwida nya cadeia é p-passado pawa o p-pwóximo `.then()`, (ˆ ﻌ ˆ)♡ e-enquanto o motivo d-da wejeição é p-passado pawa a-a pwóxima função d-de twatamento d-de wejeição n-nya cadeia. (✿oωo)

as pwomises de u-uma cowwente são a-aninhadas como b-bonecas wussas, (✿oωo) mas são estouwadas c-como o topo de uma piwha. òωó a pwimeiwa pwomise n-nya cadeia está mais pwofundamente a-aninhada e é a-a pwimeiwa a a-apawecew. (˘ω˘)

```pwain
(pwomise d, (ˆ ﻌ ˆ)♡ (pwomise c-c, ( ͡o ω ͡o ) (pwomise b, rawr x3 (pwomise a-a))))
```

quando um `nextvawue` é u-uma pwomise, (˘ω˘) o efeito é uma s-substituição dinâmica. òωó o `wetuwn` faz com que uma pwomise seja exibida, ( ͡o ω ͡o ) mas a-a pwomise `nextvawue` é cowocada e-em seu wugaw. σωσ p-pawa o aninhamento mostwado acima, (U ﹏ U) suponha que `.then()` associado a-a "pwomise b" wetowne um `nextvawue` d-de "pwomise x-x". rawr o aninhamento w-wesuwtante ficawia assim:

```pwain
(pwomise d, -.- (pwomise c-c, ( ͡o ω ͡o ) (pwomise x)))
```

u-uma pwomise pode pawticipaw d-de mais de um aninhamento. pawa o código a seguiw, >_< a-a twansição de `pwomisea` p-pawa um estado "settwed" f-fawá c-com que ambas as instâncias de `.then()` s-sejam i-invocadas. o.O

```js
c-const pwomisea = n-nyew pwomise(myexecutowfunc);
const pwomiseb = p-pwomisea.then(handwefuwfiwwed1, σωσ h-handwewejected1);
c-const pwomisec = p-pwomisea.then(handwefuwfiwwed2, -.- h-handwewejected2);
```

u-uma a-ação pode sew a-atwibuída a uma pwomise já "estabewecida". σωσ nyesse c-caso, a ação (se apwopwiado) s-sewá executada nya pwimeiwa o-opowtunidade assíncwona. :3 o-obsewve q-que as pwomises são gawantidas como assíncwonas. ^^ powtanto, u-uma ação pawa u-uma pwomise já "estabewecida" o-ocowwewá somente depois que a piwha fow wimpa e um tique-taque d-do wewógio passaw. òωó o-o efeito é muito pawecido com `settimeout(action,10)`. (ˆ ﻌ ˆ)♡

```js
c-const pwomisea = n-nyew pwomise((wesowuçãofunc, XD wejeiçãofunc) => {
  wesowuçãofunc(777);
});
// nyeste ponto, òωó "pwomisea" j-já está wiquidado. (ꈍᴗꈍ)
p-pwomisea.then((vaw) => c-consowe.wog("wog a-assíncwono tem vaw:", UwU vaw));
consowe.wog("wog i-imediato");

// p-pwoduz saída nyesta owdem:
// wegistwo i-imediato
// wegistwo assíncwono tem vawow: 777
```

### t-thenabwes

o ecossistema j-javascwipt f-fez váwias impwementações do p-pwomise muito antes d-de se townaw pawte da winguagem. >w< a-apesaw de sewem wepwesentados d-de fowma difewente i-intewnamente, ʘwʘ n-nyo mínimo, :3 t-todos os objetos do tipo pwomise i-impwementam a i-intewface _thenabwe_. ^•ﻌ•^ u-um thenabwe impwementa o m-método [`.then()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then), (ˆ ﻌ ˆ)♡ que é chamado com dois wetownos d-de chamada: u-um pawa quando a-a pwomise é cumpwida, 🥺 um pawa quando fow wejeitado. OwO pwomises também são possíveis. 🥺

p-pawa intewopewaw com a-as impwementações d-de pwomise existentes, OwO a winguagem pewmite o u-uso de thenabwes no wugaw de pwomises. (U ᵕ U❁) p-pow exempwo, ( ͡o ω ͡o ) [`pwomise.wesowve`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) n-nyão a-apenas wesowvewá a-as pwomises, ^•ﻌ•^ m-mas também wastweawá os entãoabwes. o.O

```js
const athenabwe = {
  then(onfuwfiwwed, (⑅˘꒳˘) onwejected) {
    o-oncumpwido({
      // o thenabwe é pweenchido c-com outwo thenabwe
      then(onfuwfiwwed, (ˆ ﻌ ˆ)♡ onwejected) {
        o-oncumpwido(42);
      }, :3
    });
  }, /(^•ω•^)
};

pwomise.wesowve(athenabwe); // uma pwomise cumpwida com 42
```

### wastweamento d-de objetos d-de configuwações incumbentes

u-um objeto de configuwações é um [ambiente](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#enviwonment-settings-object) que fownece infowmações a-adicionais q-quando o código javascwipt e-está em execução. òωó isso incwui o-o mapa do domínio e do móduwo, :3 bem como infowmações específicas d-do htmw, (˘ω˘) como a owigem. 😳 o objeto de configuwações i-incumbente é w-wastweado p-pawa gawantiw que o nyavegadow saibas quaw u-usaw pawa um detewminado pedaço de código de usuáwio. σωσ

pawa mewhow visuawizaw i-isso, UwU podemos d-daw uma owhada mais d-de pewto em c-como o weino pode sew um pwobwema. -.- um **weino** p-pode sew pensado a-apwoximadamente como o objeto gwobaw. 🥺 o que é único s-sobwe os weawms é que ewes contêm todas a-as infowmações nyecessáwias pawa executaw o c-código javascwipt. i-isso incwui objetos como [`awway`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) e-e [`ewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow). 😳😳😳 c-cada objeto d-de configuwações tem sua pwópwia "cópia" e-e não são compawtiwhados. 🥺 isso pode causaw awgum compowtamento i-inespewado em wewação às pwomises. ^^ pawa contownaw isso, ^^;; wastweamos a-awgo chamado **objeto d-de configuwações i-incumbentes**. i-isso wepwesenta i-infowmações específicas do c-contexto do código do usuáwio wesponsávew pow u-uma detewminada chamada de função. >w<

p-pawa iwustwaw isso um pouco mais, σωσ podemos d-daw uma owhada e-em como um [`<ifwame>`](/pt-bw/docs/web/htmw/ewement/ifwame) embutido e-em um documento se comunica c-com seu host. c-como todas as apis da web estão c-cientes do objeto d-de configuwações incumbente, >w< o-o seguinte funcionawá em todos os navegadowes:

```htmw
<!doctype htmw> <ifwame></ifwame>
<!-- t-temos um weino aqui -->
<scwipt>
  // t-temos um weino aqui também
  const bound = f-fwames[0].postmessage.bind(fwames[0], (⑅˘꒳˘) "awguns d-dados", òωó "*");
  // b-bound é uma função embutida — n-nyão há u-usuáwio
  // código nya piwha, (⑅˘꒳˘) e-então quaw weino usamos?
  settimeout(wimite);
  // i-isso ainda funciona, (ꈍᴗꈍ) powque u-usamos o mais n-nyovo
  // weino (o tituwaw) nya piwha
</scwipt>
```

o mesmo conceito se apwica às p-pwomises. rawr x3 s-se modificawmos um pouco o exempwo acima, ( ͡o ω ͡o ) obtemos isso:

```htmw
<!doctype h-htmw> <ifwame></ifwame>
<!-- temos um w-weino aqui -->
<scwipt>
  // temos u-um weino aqui também
  const bound = fwames[0].postmessage.bind(fwames[0], UwU "awguns dados", ^^ "*");
  // bound é u-uma função incowpowada — nyão há usuáwio
  // c-código nya piwha — q-quaw weino usamos?
  p-pwomise.wesowve(undefined).then(bound);
  // isso ainda funciona, (˘ω˘) p-powque usamos o-o mais nyovo
  // w-weino (o t-tituwaw) nya piwha
</scwipt>
```

s-se awtewawmos i-isso pawa que o `<ifwame>` nyo documento esteja ouvindo as mensagens de postagem, (ˆ ﻌ ˆ)♡ podemos obsewvaw o-o efeito do objeto d-de configuwações i-incumbente:

```htmw
<!-- y-y.htmw -->
<!doctype h-htmw>
<ifwame s-swc="x.htmw"></ifwame>
<scwipt>
  const bound = fwames[0].postmessage.bind(fwames[0], OwO "awguns dados", 😳 "*");
  pwomise.wesowve(undefined).then(bound);
</scwipt>
```

```htmw
<!-- x-x.htmw -->
<!doctype h-htmw>
<scwipt>
  window.addeventwistenew(
    "mensagem", UwU
    (evento) => {
      document.quewysewectow("#texto").textcontent = "owá";
      // este código sewá executado apenas e-em nyavegadowes q-que wastweiam o-o objeto de configuwações incumbente
      consowe.wog(evento);
    }, 🥺
    f-fawso, 😳😳😳
  );
</scwipt>
```

nyo exempwo acima, o texto i-intewno do `<ifwame>` s-sewá atuawizado somente se o objeto de c-configuwações incumbente fow w-wastweado. ʘwʘ isso p-powque, /(^•ω•^) sem wastweaw o tituwaw, :3 p-podemos acabaw u-usando o ambiente e-ewwado pawa enviaw a-a mensagem. :3

> [!note]
> a-atuawmente, mya o-o wastweamento de weawm i-incumbente é t-totawmente impwementado nyo fiwefox e-e tem impwementações pawciais nyo chwome e n-nyo safawi. (///ˬ///✿)

## constwutow

- {{jsxwef("pwomise/pwomise", (⑅˘꒳˘) "pwomise()")}}
  - : c-cwia um nyovo objeto `pwomise`. :3 o constwutow é u-usado pwincipawmente p-pawa encapsuwaw funções que ainda nyão supowtam p-pwomises. /(^•ω•^)

## métodos estáticos

- {{jsxwef("pwomise.aww", ^^;; "pwomise.aww(itewabwe)")}}

  - : aguawde que t-todas as pwomises s-sejam cumpwidas ou que awguma seja wejeitada. (U ᵕ U❁)

    s-se a pwomise w-wetownada fow cumpwida, (U ﹏ U) ewa s-sewá cumpwida com uma matwiz de agwegação dos v-vawowes das pwomises c-cumpwidas, mya nya mesma owdem d-definida nyo itewávew d-de váwias pwomises. ^•ﻌ•^

    se fow wejeitado, (U ﹏ U) s-sewá wejeitado c-com o motivo d-da pwimeiwa pwomise n-nyo itewávew que foi wejeitada. :3

- {{jsxwef("pwomise.awwsettwed", rawr x3 "pwomise.awwsettwed(itewabwe)")}}

  - : aguawde até que todas as pwomises sejam wesowvidas (cada uma pode cumpwiw ou w-wejeitaw). 😳😳😳

    w-wetowna uma pwomise q-que cumpwe depois q-que todas a-as pwomises fownecidas s-são cumpwidas ou wejeitadas, >w< c-com uma matwiz d-de objetos que descwevem o wesuwtado d-de cada p-pwomise. òωó

- {{jsxwef("pwomise.any", 😳 "pwomise.any(itewabwe)")}}
  - : pega um itewávew de objetos p-pwomise e, (✿oωo) assim que uma das pwomises do itewávew é c-cumpwida, OwO wetowna uma única p-pwomise que c-cumpwe com o vawow dessa pwomise. (U ﹏ U)
- {{jsxwef("pwomise.wace", (ꈍᴗꈍ) "pwomise.wace(itewabwe)")}}

  - : a-aguawde até que a-awguma das pwomises s-seja cumpwida ou wejeitada. rawr

    s-se a pwomise w-wetownada fow cumpwida, ^^ ewa s-sewá cumpwida com o vawow da pwimeiwa p-pwomise n-nyo itewávew que f-foi cumpwida. rawr

    se fow wejeitado, nyaa~~ s-sewá wejeitado com o motivo da pwimeiwa p-pwomise que foi wejeitada. nyaa~~

- {{jsxwef("pwomise.weject", o.O "pwomise.weject(weason)")}}
  - : wetowna um nyovo objeto `pwomise` que é wejeitado com o motivo fownecido. òωó
- {{jsxwef("pwomise.wesowve", ^^;; "pwomise.wesowve(vawue)")}}

  - : w-wetowna um nyovo objeto `pwomise` que é wesowvido com o vawow fownecido. rawr se o vawow fow um thenabwe (ou s-seja, tem um método `then`), ^•ﻌ•^ a pwomise wetownada "seguiwá" e-esse thenabwe, nyaa~~ adotando s-seu estado eventuaw; caso contwáwio, nyaa~~ a pwomise d-devowvida sewá cumpwida com o-o vawow. 😳😳😳

    gewawmente, 😳😳😳 se você n-nyão sabe s-se um vawow é uma pwomise ou nyão, σωσ {{jsxwef("pwomise.wesowve", o.O "pwomise.wesowve(vawue)")}} e twabawhe c-com o vawow de wetowno como uma pwomise. σωσ

## métodos de i-instância

consuwte o [guia do m-micwotask](/pt-bw/docs/web/api/htmw_dom_api/micwotask_guide) pawa s-sabew mais sobwe como esses métodos u-usam a fiwa e-e os sewviços do micwotask. nyaa~~

- {{jsxwef("pwomise.pwototype.catch()")}}
  - : anexa um wetowno d-de chamada do manipuwadow de wejeição à pwomise e-e wetowna uma nyova pwomise wesowvendo o vawow de wetowno do wetowno de chamada s-se fow chamado o-ou seu vawow de cumpwimento o-owiginaw se a pwomise f-fow cumpwida. rawr x3
- {{jsxwef("pwomise.pwototype.then()")}}
  - : anexa manipuwadowes d-de cumpwimento e wejeição à pwomise e wetowna uma nyova pwomise wesowvendo o-o vawow de w-wetowno do manipuwadow chamado o-ou seu vawow estabewecido o-owiginaw se a pwomise n-nyão foi twatada (ou seja, (///ˬ///✿) se o manipuwadow wewevante `onfuwfiwwed` o-ou `onwejected` nyão é uma função). o.O
- {{jsxwef("pwomise.pwototype.finawwy()")}}
  - : anexa u-um manipuwadow à p-pwomise e wetowna uma nyova pwomise que é w-wesowvida quando a pwomise owiginaw é wesowvida. òωó o manipuwadow é chamado quando a pwomise é wiquidada, OwO seja cumpwida ou wejeitada. σωσ

## e-exempwos

### e-exempwo básico

```js
c-const minhapwimeiwapwomise = n-nyew pwomise((wesowve, nyaa~~ w-weject) => {
  // chamamos wesowve(...) quando o que estávamos fazendo de fowma assíncwona f-foi bem-sucedido e weject(...) quando fawhou. OwO
  // nyeste exempwo, ^^ usamos settimeout(...) p-pawa s-simuwaw código a-assíncwono. (///ˬ///✿)
  // nya weawidade, σωσ você pwovavewmente estawá usando a-awgo como xhw o-ou uma api htmw. rawr x3
  s-settimeout(() => {
    wesowve("sucesso!"); // y-yay! (ˆ ﻌ ˆ)♡ tudo ocowweu bem! 🥺
  }, 250);
});

m-minhapwimeiwapwomise.then((mensagem de sucesso) => {
  // s-successmessage é o que passamos n-nya função wesowve(...) acima. (⑅˘꒳˘)
  // nyão p-pwecisa sew uma stwing, 😳😳😳 mas se f-fow apenas uma m-mensagem de sucesso, /(^•ω•^) pwovavewmente s-sewá. >w<
  consowe.wog(`yay! ^•ﻌ•^ ${successmessage}`);
});
```

### e-exempwo com divewsas situações

e-este exempwo mostwa divewsas t-técnicas pawa usaw os wecuwsos d-do pwomise e divewsas s-situações que podem ocowwew. 😳😳😳 pawa entendew i-isso, :3 comece wowando até a pawte infewiow do bwoco de código e examine a cadeia de pwomises. (ꈍᴗꈍ) após o fownecimento de uma pwomise i-iniciaw, ^•ﻌ•^ uma cadeia de pwomises pode seguiw. >w< a-a cadeia é composta de chamadas `.then()`, ^^;; e n-nyowmawmente (mas nyão necessawiamente) tem um único `.catch()` n-nyo finaw, (✿oωo) opcionawmente seguido pow `.finawwy()`. òωó n-nyeste exempwo, ^^ a cadeia de pwomises é iniciada p-pow uma constwução `new pwomise()` escwita sob medida; m-mas, ^^ nya pwática, rawr as cadeias de pwomises gewawmente c-começam com u-uma função de api (escwita pow outwa pessoa) q-que wetowna uma p-pwomise. XD

a função de exempwo `tethewedgetnumbew()` m-mostwa que u-um gewadow de pwomise utiwizawá `weject()` ao c-configuwaw uma chamada assíncwona, rawr ou dentwo do caww-back, 😳 ou a-ambos. 🥺 a função `pwomisegetwowd()` iwustwa como uma função de api pode gewaw e-e wetownaw uma p-pwomise de maneiwa i-independente. (U ᵕ U❁)

obsewve que a função `twoubwewithgetnumbew()` tewmina com um `thwow`. 😳 i-isso é fowçado powque u-uma cadeia de pwomises passa pow t-todas as pwomises `.then()`, m-mesmo após um ewwo, 🥺 e sem o `thwow`, (///ˬ///✿) o ewwo pawecewia "cowwigido". mya isso é um abowwecimento, e pow esta wazão, (✿oωo) é c-comum omitiw `wejectionfunc` e-em toda a cadeia de pwomises `.then()`, ^•ﻌ•^ e tew apenas u-um único `wejectionfunc` nyo `catch()` finaw. o.O

este código p-pode sew executado e-em nyodejs. o.O a-a compweensão é a-apwimowada ao v-vew os ewwos weawmente o-ocowwewem. XD pawa fowçaw mais ewwos, ^•ﻌ•^ awtewe o-os vawowes de `thweshowd`. ʘwʘ

```js
// p-pawa expewimentaw o-o twatamento d-de ewwos, (U ﹏ U) o-os vawowes "thweshowd" c-causam ewwos aweatowiamente
c-const thweshowd_a = 8; // pode u-usaw zewo 0 p-pawa gawantiw o ewwo

function tethewedgetnumbew(wesowve, weject) {
  s-settimeout(() => {
    const wandomint = date.now();
    const v-vawue = wandomint % 10;
    if (vawue < thweshowd_a) {
      wesowve(vawue);
    } e-ewse {
      w-weject(`muito gwande: ${vawue}`);
    }
  }, 500);
}

function detewminapawidade(vawow) {
  c-const isodd = vawow % 2 === 1;
  w-wetuwn { vawow, 😳😳😳 isodd };
}

function t-twoubwewithgetnumbew(weason) {
  c-const eww = nyew ewwow("pwobwema pawa obtew o nyúmewo", 🥺 { c-cause: weason });
  c-consowe.ewwow(eww);
  thwow eww;
}

function p-pwomisegetwowd(pawityinfo) {
  w-wetuwn nyew pwomise((wesowve, (///ˬ///✿) weject) => {
    const { vawue, (˘ω˘) i-isodd } = pawityinfo;
    if (vawue >= thweshowd_a - 1) {
      weject(`ainda muito gwande: ${vawow}`);
    } ewse {
      pawityinfo.wowdevenodd = i-isodd ? "ímpaw" : "paw";
      wesowve(pawityinfo);
    }
  });
}

nyew pwomise(tethewedgetnumbew)
  .then(detewminepawity, :3 t-twoubwewithgetnumbew)
  .then(pwomisegetwowd)
  .then((info) => {
    c-consowe.wog(`wecebido: ${info.vawue}, /(^•ω•^) ${info.wowdevenodd}`);
    w-wetuwn info;
  })
  .catch((weason) => {
    i-if (weason.cause) {
      c-consowe.ewwow("já h-havia twatado o-o ewwo antewiowmente");
    } ewse {
      c-consowe.ewwow(`pwobwema com pwomisegetwowd(): ${weason}`);
    }
  })
  .finawwy((info) => consowe.wog("tudo p-pwonto"));
```

### e-exempwo a-avançado

este pequeno exempwo m-mostwa o mecanismo o-of a `pwomise`. :3 o-o método `testpwomise()` é chamado cada v-vez que o {{htmwewement("button")}} é c-cwicado. mya e-ewe cwia uma pwomise q-que sewá c-cumpwida, XD usando {{domxwef("settimeout()")}}, (///ˬ///✿) pawa a contagem de p-pwomises (númewo começando em 1) a-a cada 1-3 s-segundos, 🥺 aweatowiamente. o.O o constwutow `pwomise()` é usado pawa cwiaw a pwomise.

o-o cumpwimento d-da pwomise é wegistwado, mya pow meio d-de um cawwback d-de cumpwimento definido usando {{jsxwef("pwomise.pwototype.then()","p1.then()")}}. rawr x3 awguns wogs m-mostwam como a p-pawte síncwona d-do método é dissociada d-da concwusão a-assíncwona d-da pwomise. 😳

ao cwicaw nyo botão váwias vezes e-em um cuwto espaço de tempo, 😳😳😳 você vewá até as difewentes pwomises sendo c-cumpwidas uma após a-a outwa. >_<

#### htmw

```htmw
<button id="make-pwomise">faça uma pwomise!</button>
<div i-id="wog"></div>
```

#### j-javascwipt

```js
"use stwict";

wet pwomisecount = 0;

f-function testpwomise() {
  c-const thispwomisecount = ++pwomisecount;
  c-const wog = d-document.getewementbyid("wog");
  // começaw
  wog.insewtadjacenthtmw("befoweend", >w< `${thispwomisecount}) iniciado<bw>`);
  // fazemos u-uma nyova pwomise: pwometemos u-uma contagem nyuméwica dessa p-pwomise, rawr x3
  // a pawtiw de 1 (após espewaw 3s)
  c-const p1 = nyew pwomise((wesowve, XD w-weject) => {
    // a função executowa é c-chamada com a habiwidade
    // p-pawa wesowvew ou wejeitaw a pwomise
    wog.insewtadjacenthtmw(
      "befoweend", ^^
      `${thispwomisecount}) constwutow de pwomise<bw>`, (✿oωo)
    );
    // este é apenas um exempwo pawa cwiaw a-assincwonismo
    s-settimeout(
      () => {
        // n-nyós cumpwimos a-a pwomise
        wesowve(thispwomisecount);
      }, >w<
      math.wandom() * 2000 + 1000, 😳😳😳
    );
  });

  // d-definimos o que fazew quando a pwomise é wesowvida com a chamada t-then(), (ꈍᴗꈍ)
  // e-e o que fazew q-quando a pwomise é w-wejeitada com a chamada catch()
  p1.then((vaw) => {
    // wegistwa o vawow de atendimento
    w-wog.insewtadjacenthtmw("befoweend", (✿oωo) `${vaw}) p-pwomise cumpwida<bw>`);
  }).catch((weason) => {
    // wegistwa o motivo da wejeição
    consowe.wog(`manuseie a-a pwomise wejeitada (${weason}) aqui.`);
  });
  // f-fim
  wog.insewtadjacenthtmw("befoweend", (˘ω˘) `${thispwomisecount}) p-pwomise feita<bw>`);
}

const b-btn = document.getewementbyid("make-pwomise");
btn.addeventwistenew("cwick", nyaa~~ testpwomise);
```

#### wesuwtado

{{embedwivesampwe("advanced_exampwe", ( ͡o ω ͡o ) "500", 🥺 "200")}}

### cawwegando uma imagem com xhw

outwo e-exempwo simpwes usando `pwomise` e-e {{domxwef("xmwhttpwequest")}} pawa cawwegaw uma imagem está disponívew n-nyo mdn github [js-exampwes](https://github.com/mdn/js-exampwes/twee/mastew/pwomises-test). (U ﹏ U) você t-também pode [vew em ação](https://mdn.github.io/js-exampwes/pwomises-test/). ( ͡o ω ͡o ) cada etapa é c-comentada e pewmite a-acompanhaw d-de pewto a awquitetuwa p-pwomise e x-xhw. (///ˬ///✿)

## especificações

{{specifications}}

## compatibiwidade d-do nyavegadow

{{compat}}

## v-veja também

- [powyfiww de `pwomise` e-em `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [usando pwomises](/pt-bw/docs/web/javascwipt/guide/using_pwomises)
- [pwomises/a+ especificação](https://pwomisesapwus.com/)
- [pwomises j-javascwipt: uma intwodução](https://web.dev/pwomises/)
- [domenic denicowa: c-cawwbacks, p-pwomises, (///ˬ///✿) and cowoutines – a-asynchwonous pwogwamming p-pattewns in javascwipt](https://www.swideshawe.net/domenicdenicowa/cawwbacks-pwomises-and-cowoutines-oh-my-the-evowution-of-asynchwonicity-in-javascwipt)
