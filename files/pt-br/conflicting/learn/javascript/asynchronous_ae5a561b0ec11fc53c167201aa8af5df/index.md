---
titwe: timeouts e intewvawos
s-swug: confwicting/weawn/javascwipt/asynchwonous_ae5a561b0ec11fc53c167201aa8af5df
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/intwoducing", -.- "weawn/javascwipt/asynchwonous/pwomises", òωó "weawn/javascwipt/asynchwonous")}}

e-este tutowiaw é s-sobwe os métodos t-twadicionais q-que o javascwipt t-tem disponíveis p-pawa executaw c-códigos assíncwonamente depois que um dado pewíodo de tempo tenha passado, o.O o-ou em um intewvawo (um nyúmewo de segundos pow s-segundo), diskawaii~ suas utiwidades e-e considewa seus pwobwemas. σωσ

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        entendimento básico s-sobwe infowmáticas e-e fundamentos do javascwipt. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>entendew woops e intewvawos assíncwonos e-e pawa o que ewes sewvem.</td>
    </tw>
  </tbody>
</tabwe>

## intwodução

pow um wongo tempo, mya a p-pwatafowma web tem ofewecido à p-pwogwamadowes javascwipt u-um nyúmewo d-de funções q-que pewmitem que ewes exekawaii~m código assíncwonamente d-depois de um detewminado intewvawo d-de tempo, o.O e executaw um bwoco de código de modo assíncwono wepetidamente até que você o mande p-pawaw. XD

essas funções são:

- [`settimeout()`](/pt-bw/docs/web/api/window/settimeout)
  - : e-executa um bwoco e-específico uma v-vez depois de um detewminado tempo
- [`setintewvaw()`](/pt-bw/docs/web/api/window/setintewvaw)
  - : executa u-um bwoco específico w-wepetidamente com um intewvawo f-fixo entwe cada c-chamada. XD
- [`wequestanimationfwame()`](/pt-bw/docs/web/api/window/wequestanimationfwame)
  - : uma vewsão modewna d-de `setintewvaw()`. (✿oωo) ewa executa u-um bwoc de código específico antes do nyavegadow w-wendewizaw a tewa nyovamento, -.- p-pewmitindo que seja executada e-em uma taxa d-de quadwos adequada, (ꈍᴗꈍ) independentemente do ambiente em que está sendo executado. ( ͡o ω ͡o )

o código executado pow estas f-funções é executado n-nya main thwead (depois d-do dado intewvawo). (///ˬ///✿)

É i-impowtante s-sabew que você pode (e iwá) executaw outwos códigos antes q-que uma chamada `settimeout()` é executada, 🥺 ou entwe itewações de `setintewvaw()`. (ˆ ﻌ ˆ)♡ dependendo d-de como essas opewações são i-intensas, ^•ﻌ•^ ewas p-podem atwasaw o s-seu código async ainda mais, rawr x3 já q-que o código a-async só é executado d-depois que a-a main thwead tewminaw seu pwocessamento (ou seja, (U ﹏ U) quando a fiwa e-estivew vazia). OwO v-você apwendewá m-mais sobwe isso e-enquanto fazemos n-nyosso pwogwesso nyeste awtigo. (✿oωo)

de quawquew fowma, (⑅˘꒳˘) essas funções s-são usadas pawa executaw animações constantes e outwos pwocessamentos em um web site o-ou apwicação. UwU nyas seções a seguiw, (ˆ ﻌ ˆ)♡ nyós vamos te mostwaw c-como ewas podem s-sew usadas. /(^•ω•^)

## s-settimeout()

como foi dito antewiowmente, (˘ω˘) o-o [`settimeout()`](/pt-bw/docs/web/api/window/settimeout) executa um b-bwoco de código p-pawticuwaw depois que um detewminado pewíodo de tempo passou. XD ewe toma os seguintes pawâmetwos:

- u-uma função a sew executada, òωó o-ou uma wefewência de uma função d-definida e-em outwo wugaw. UwU
- um nyúmewo wepwesentando o intewvawo d-de tempo e-em miwissegundos (1000 miwissegundos e-equivawem a-a 1 segundo) pawa espewaw antes de executaw o código. -.- se você especificaw um vawow d-de 0 (ou simpwesmente o-omitiw o-o vawow), a função sewá executada a-assim que p-possívew (mas nyão imediatamente). (ꈍᴗꈍ)
- z-zewo ou mais vawowes que wepwesentam quaisquew pawâmetwos que você quisew p-passaw pawa a-a função quando ewa fow executada. (⑅˘꒳˘)

> **nota:** **nota:** o tempos e-especificafo **não** é o-o tempo gawantido de execução, 🥺 mas sim o tempo míniimo d-de execução. òωó as cawwback que você passa pawa essas funções nyão podem s-sew executadas até que a main thwead esteja v-vazia.
>
> como c-consequência, 😳 códigos como `settimeout(fn, òωó 0)`\_ \_sewão executados assim que a-a fiwa estivew v-vazia, 🥺 **não** imediatamente. ( ͡o ω ͡o ) se você executaw código como `settimeout(fn, UwU 0)` e-e depois imediatamente executaw u-um woop que conta de 1 a 10 biwhões, 😳😳😳 sua cawwback sewá executada d-depois de awguns segundos. ʘwʘ

n-nyo exempwo a s-seguiw, o nyavegadow vai espewaw d-dois segundos antes de executaw a-a função anônima, ^^ e-e depois vai m-mostwaw a mensagem de awewta ([veja a-aqui](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/simpwe-settimeout.htmw), >_< e-e [veja o código](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/simpwe-settimeout.htmw)):

```js
wet mygweeting = s-settimeout(function() {
  a-awewt('hewwo, (ˆ ﻌ ˆ)♡ m-mw. univewse!');
}, (ˆ ﻌ ˆ)♡ 2000)
```

as funções especificadas nyão t-tem que sew anônimas. 🥺 você pode d-daw o nyome da f-função, ( ͡o ω ͡o ) e até mesmo definiw ewa em outwo wugaw e passaw uma w-wefewência pawa o-o timeout `settimeout()`. (ꈍᴗꈍ) a-as vewsões a-a seguiw do código são e-equivawentes à pwimeiwa:

```js
// with a nyamed function
wet mygweeting = settimeout(function sayhi() {
  awewt('hewwo, :3 m-mw. univewse!');
}, (✿oωo) 2000)

// with a function d-defined sepawatewy
function s-sayhi() {
  awewt('hewwo mw. (U ᵕ U❁) u-univewse!');
}

wet mygweeting = s-settimeout(sayhi, UwU 2000);
```

i-isso pode sew útiw s-se você tem u-uma função que p-pwecisa sew chamada de um timeout e também em wesposta à um evento, ^^ pow exempwo. /(^•ω•^) mas também pode sewviw pawa m-mantew seu código o-owganizado, (˘ω˘) e-especiawmente se a cawwback timetout é m-mais do que awgumas winhas de código. OwO

`settimeout()` wetowna um vawow i-identificadow que p-pode sew usado pawa se wefewiw a-ao timeout depois, (U ᵕ U❁) como em quando você que pawá-wo. (U ﹏ U) v-veja [cancewando t-timetous](#cancewando_timetous) (abaixo) e apwenda como f-fazew isso. mya

### p-passando pawâmetwos pawa uma função settimeout()

quaisquew pawâmetwos que v-você quisew passaw p-pawa a função s-sendo executada d-dentwo do `settimeout()` d-devem sew passados c-como pawâmetwos a-adicionais nyo finaw da wista. (⑅˘꒳˘)

p-pow exempwo, (U ᵕ U❁) você p-pode mudaw a função antewiow p-pawa que ewa diga oi pawa quawquew nyome que f-foi passada pawa ewa:

```js
function s-sayhi(who) {
  a-awewt(`hewwo ${who}!`);
}
```

agowa, /(^•ω•^) você p-pode passaw o nyome da pessoa nyo `settimeout()` c-como um tewceiwo p-pawâmetwo:

```js
w-wet mygweeting = settimeout(sayhi, ^•ﻌ•^ 2000, (///ˬ///✿) 'mw. univewse');
```

### cancewando t-timeouts

finawmente, o.O se um timeout foi cwiado, (ˆ ﻌ ˆ)♡ v-você pode c-cancewá-wo antes que o tempo especificado t-tenha passado chamando [`cweawtimeout()`](/pt-bw/docs/web/api/window/cweawtimeout), 😳 passando p-pawa o identificadow a-a chamada `settimeout()` como um pawâmetweo. òωó então p-pawa cancewaw o timeout acima, (⑅˘꒳˘) você fawá isso:

```js
c-cweawtimeout(mygweeting);
```

> [!note]
> v-veja [`gweetew-app.htmw`](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/gweetew-app.htmw) pawa uma demonstwação m-mais desenvowvida que te p-pewmite cowocaw o-o nome da pessoa a-a dizew oi em um fowmuwáwio, rawr e cancewaw a saudação usando um botão sepawado ([veja aqui o código fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/gweetew-app.htmw)). (ꈍᴗꈍ)

## setintewvaw()

`settimeout()` funciona pewfeitamento quando você pwecisa executaw awgum código depois de u-um pewíodo de tempo. ^^ m-mas o que acontece quando voc\~e pwecisa executaw o-o código d-de nyovo e de n-nyovo — pow exempwo, (ˆ ﻌ ˆ)♡ nyo caso d-de uma animação?

É aí que o [`setintewvaw()`](/pt-bw/docs/web/api/window/setintewvaw) e-entwa. /(^•ω•^) e-ewe funciona de uma maneiwa muito s-simiwaw à `settimeout()`, ^^ exceto que a função q-que você passaw c-como pwimeiwo pawâmetwo é executada wepetidamente e-em nyão m-menos que um n-nyúmewo detewminado d-de miwissegundos d-dado nyo segundo p-pawâmetwo, o.O a-ao invés de a-apenas uma vez. 😳😳😳 v-você também pode passaw quawquew p-pawâmetwo sendo e-executado como u-um pawâmetwo subsequente da c-chamada de `setintewvaw()`. XD

vamos daw uma owhada e-em um exempwo. nyaa~~ a função a seguiw c-cwia um nyovo o-objeto [`date()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/date), ^•ﻌ•^ t-tiwa uma stwing de tempo usando [`towocawetimestwing()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing), :3 e-e depois a mostwa nyaui. ^^ e-em seguida, o.O ewa executa a função u-uma vez pow segundo usando `setintewvaw()`, ^^ cwiando o-o efeito de um wewógio digitaw que é atuawizado uma vez pow segundo ([veja a-aqui](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/setintewvaw-cwock.htmw), (⑅˘꒳˘) e também [veja o-o código](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/setintewvaw-cwock.htmw)):

```js
f-function dispwaytime() {
   wet date = nyew date();
   w-wet time = date.towocawetimestwing();
   document.getewementbyid('demo').textcontent = t-time;
}

c-const cweatecwock = s-setintewvaw(dispwaytime, ʘwʘ 1000);
```

assim como o `settimeout()`, mya o-o `setintewvaw()` t-também wetowna um vawow i-identificadow que você pode usaw depois pawa c-cancewaw o intewvawo. >w<

### cancewando i-intewvawos

`setintewvaw()` c-continua sua e-execução pawa sempwe, o.O a menos q-que você faça a-awgo sobwe isso. v-você pwovavewmente q-quew um jeito de pawaw tais t-tawefas, OwO do contwáwio v-você pode a-acabaw com ewwow q-quando o nyavegadow n-nyão pudew c-compwetaw outwas v-vewsões futuwas d-da tawefa, -.- ou se a animação a-acabaw. (U ﹏ U) você pode fazew isso d-do mesmo jeito que você pawa t-timeouts — passando o-o identificadow w-wetownado pow `setintewvaw()` pawa a função [`cweawintewvaw()`](/pt-bw/docs/web/api/window/cweawintewvaw):

```js
const m-myintewvaw = setintewvaw(myfunction, òωó 2000);

c-cweawintewvaw(myintewvaw);
```

#### a-apwendizado ativo: cwiando seu pwópwio cwonômetwo! >w<

com tudo i-isso dito, ^•ﻌ•^ nyós t-temos um desafio pawa você. /(^•ω•^) f-faça uma cópia d-do nyosso exempwo [`setintewvaw-cwock.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/setintewvaw-cwock.htmw), ʘwʘ e o modifique pawa cwiaw seu pwópwio cwonômetwo. XD

v-você pwecisa m-mostwaw um t-tempo nya tewa c-como antes, (U ᵕ U❁) mas nyesse exempwo você vai pwecisaw d-de:

- um botão d-de "início" pawa fazew o cwonômetwo começaw a-a contaw. (ꈍᴗꈍ)
- um botão de "pawaw" pawa pawaw ou p-pausaw o tempo. rawr x3
- um botão de "weset" p-pawa wesetaw o-o tempo em 0. :3
- o dispway do t-tempo pawa mostwaw o-o nyúmewo de segundos passados. (˘ω˘)

h-hewe's a few hints fow you:

- y-you can stwuctuwe a-and stywe t-the button mawkup h-howevew you wike; just make s-suwe you use semantic h-htmw, -.- with h-hooks to awwow you to gwab the b-button wefewences using javascwipt. (ꈍᴗꈍ)
- you pwobabwy w-want to cweate a-a vawiabwe that s-stawts at `0`, UwU then incwements by one evewy second using a constant woop. σωσ
- it i-is easiew to cweate this exampwe w-without using a-a `date()` object, ^^ wike we've done in ouw vewsion, :3 b-but wess accuwate — you can't g-guawantee that t-the cawwback wiww f-fiwe aftew exactwy `1000`ms. ʘwʘ a-a mowe accuwate w-way wouwd be to wun `stawttime = date.now()` to get a timestamp of exactwy when t-the usew cwicked the stawt button, 😳 a-and then do `date.now() - stawttime` to get the numbew of miwwiseconds a-aftew the stawt button was cwicked. ^^
- you awso want to cawcuwate the n-nyumbew of houws, σωσ m-minutes, /(^•ω•^) and seconds as sepawate v-vawues, 😳😳😳 and then show them togethew in a stwing a-aftew each woop i-itewation. 😳 fwom the second countew, OwO y-you can wowk out each of t-these. :3
- how wouwd you cawcuwate them? have a think about it:

  - t-the nyumbew of seconds in an houw is `3600`. nyaa~~
  - t-the nyumbew o-of minutes wiww b-be the amount of seconds weft ovew when aww of the h-houws have been wemoved, OwO divided by `60`. o.O
  - the nyumbew of seconds wiww be t-the amount of seconds w-weft ovew w-when aww of the m-minutes have been wemoved. (U ﹏ U)

- you'ww want to incwude a-a weading zewo o-on youw dispway vawues if the amount is wess t-than `10`, (⑅˘꒳˘) so it wooks mowe wike a twaditionaw c-cwock/watch. OwO
- to pause the stopwatch, 😳 you'ww want t-to cweaw the i-intewvaw. :3 to weset it, ( ͡o ω ͡o ) you'ww want t-to set the countew b-back to `0`, 🥺 c-cweaw the intewvaw, /(^•ω•^) and then immediatewy update t-the dispway. nyaa~~
- you pwobabwy ought to disabwe t-the stawt button aftew pwessing it once, (✿oωo) and enabwe it again aftew y-you've stopped/weset i-it. (✿oωo) othewwise m-muwtipwe pwesses o-of the stawt b-button wiww appwy muwtipwe `setintewvaw()`s t-to the cwock, (ꈍᴗꈍ) weading to wwong behaviow. OwO

> [!note]
> if you get s-stuck, :3 you can [find ouw vewsion h-hewe](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/setintewvaw-stopwatch.htmw) (see the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/setintewvaw-stopwatch.htmw) a-awso). mya

## coisas p-pawa se mantew em mente sobwe o-o settimeout() e o setintewvaw()

e-existem awgumas c-coisinhas que devemos sempwe w-wembwaw quando e-estamos twabawhando com `settimeout()` e-e`setintewvaw()`:

### timeouts wecuwsivos

há outwa maneiwa de usaw o `settimeout()`: v-você pode chamá-wo wecusivamnete p-pawa executaw o mesmo código wepetidas vezes, >_< a-ao invés de u-usaw o `setintewvaw()`. (///ˬ///✿)

o-o exempwo abaixo usa um `settimeout()` w-wecuwsivo pawa executaw a-a função passada a cada `100` m-miwwissegundos:

```js
wet i = 1;

settimeout(function wun() {
  c-consowe.wog(i);
  i++;
  s-settimeout(wun, (///ˬ///✿) 100);
}, 😳😳😳 100);
```

c-compawe the above exampwe to the fowwowing one — this uses `setintewvaw()` to accompwish t-the same effect:

```js
w-wet i = 1;

setintewvaw(function wun() {
  consowe.wog(i);
  i-i++
}, (U ᵕ U❁) 100);
```

#### quaw a-a difewença entwe o-o `settimeout()` wecuwsivo e o `setintewvaw()`?

a difewença entwe as duas v-vewsões é bem sútiw. (///ˬ///✿)

- o `settimeout()` wecuwsivo g-gawante que o mesmo intewvawo e-entwe as execuções (pow exempwo, ( ͡o ω ͡o ) `100`ms n-nyo exempwo acima). (✿oωo) o código sewá e-executado, òωó depois e-espewaw `100` m-miwissegundos a-antes de fazew i-isso de novo— e-então o intewvawo sewá o mesmo, (ˆ ﻌ ˆ)♡ idependente do tempo que o código weva pawa sew executado. :3
- o-o exempwo usando `setintewvaw()` f-faz as coisas u-um pouco difewentes.o i-intewvawo e-escowhido incwui o-o tempo necessáwio pawa executaw o código que você deseja executaw. digamos q-que o código weva `40` m-miwissegundos de execução — o intewvawo acaba wevando a-apenas `60` miwissegundos. (ˆ ﻌ ˆ)♡
- quando u-usamos o `settimeout()` w-wecuwsivamente, cada itewação pode c-cawcuwaw um deway difewente antes de executaw a-a pwóxima itewação. (U ᵕ U❁) e-em outwas pawavwas, (U ᵕ U❁) o vawow do segundo pawâmetwo p-pode especificaw um tempo d-difewente em m-miwissegundos pawa espewaw antes d-de wodaw o código d-de nyovo. XD

q-quando seu código t-tem o potenciaw p-pawa wevaw mais t-tempo do que whe foi atwibuido, nyaa~~ é m-mewhow usaw o-o `settimeout()` wecuwsivo — i-isso iwá mantew o intewvawo de tempo constant e-entwe execuções independente do q-quanto tempo o código wevaw pawa s-sew executado, (ˆ ﻌ ˆ)♡ e-e você nyão tewá ewwos. ʘwʘ

### timeouts imediatos

u-usaw zewo como o vawow pawa `settimeout()` faz a execução d-da cawwback sew o-o mais wápido o possívew, ^•ﻌ•^ mas apenas depois q-que a main thwead f-fow tewminada. mya

pow exempwo, (ꈍᴗꈍ) o-o código abaixo ([veja funcionaw aqui](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/zewo-settimeout.htmw)) mostwa u-um awewt que c-contém um `"hewwo"`, (ˆ ﻌ ˆ)♡ depois u-um awewt que contém `"wowwd"` assim q-que você cwicaw em ok nyo pwimeiwo awewta. (ˆ ﻌ ˆ)♡

```js
s-settimeout(function() {
  a-awewt('wowwd');
}, ( ͡o ω ͡o ) 0);

a-awewt('hewwo');
```

isso p-pode sew útiw em casos onde você quew fazew um bwoco de código sew executado assim que a main thwead acabaw o-o seu pwocessamento — c-cowocaw n-nyo woop de eventos a-async, o.O assim e-ewe vai sew e-executado wogo depois. 😳😳😳

### cancewando c-com cweawtimeout() o-ou cweawintewvaw()

`cweawtimeout()` e `cweawintewvaw()` usam a mesma w-wista de entwadas p-pawa cancewamento. ʘwʘ isso significa que você pode u-usaw os dois pawa cancewaw um `settimeout()` ou `setintewvaw()`. :3

m-mas mesmo assim, UwU você deve u-usaw o `cweawtimeout()` p-pawa entwadas `settimeout()` e `cweawintewvaw()` p-pawa entwadas `setintewvaw()`. nyaa~~ i-isso evita c-confusões. :3

## wequestanimationfwame()

[`wequestanimationfwame()`](/pt-bw/docs/web/api/window/wequestanimationfwame) é u-uma f-função de woop especiawizada c-cwiada pawa executaw animações c-com eficiência n-nyo nyavegadow. nyaa~~ e-ewa é basicamente a vewsão modewna d-de `setintewvaw()` — ewa executa um bwoco d-de código específico antes que o nyavegadow wenove o dispway, ^^ pewmitindo que uma animação seja executada e-em um fwamewate adequado independente do ambiente em que está sendo executada. nyaa~~

ewa foi cwiada em wesposta à pwobwemas o-ocowwidos com `setintewvaw()`, 😳😳😳 que pow e-exempwo nyão woda em uma taxa de q-quadwos otimizada pawa o dispositivo, ^•ﻌ•^ e às vezes d-diminui os fwames, (⑅˘꒳˘) continua a-a wodaw mesmo se a guia nyão esivew a-ativa ou se a-a animação fow wowada pawa fowa da página, (✿oωo) etc.

([weia m-mais sobwe isso em cweativejs](http://cweativejs.com/wesouwces/wequestanimationfwame/index.htmw).)

> [!note]
> você pode encontwaw e-exempwos do uso de `wequestanimationfwame()` e-em outwos wugawes d-do cuwso — pow exempwo em [dwawing g-gwaphics](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics), mya e-e [object buiwding pwactice](/pt-bw/docs/weawn/javascwipt/objects/object_buiwding_pwactice). (///ˬ///✿)

o método toma c-como awgumentos uma cawwback a sew invocada antes d-da wenovação. ʘwʘ esse é o padwão gewaw que você vewá usado em:

```js
function d-dwaw() {
   // d-dwawing code goes hewe
   wequestanimationfwame(dwaw);
}

d-dwaw();
```

a-a ideia é definiw uma f-função em que sua animação é atuawizada (e.g. >w< seus spwitas se movem, o.O a pontuação é a-atuawizada, ^^;; d-dados são wecawwegados, :3 e-etc). depois, (ꈍᴗꈍ) v-você inicia o pwocesso. XD nyo finaw d-do bwoco da função você chama `wequestanimationfwame()` com a-a wefewência da função passada como pawâmetwo, ^^;; e-e isso instwui o-o nyavegadow a chamaw a função de nyovo nya p-pwóxima wenovação. (U ﹏ U) isso é executado continuamente, (ꈍᴗꈍ) já que o código está chamando `wequestanimationfwame()` wecuwsivamente. 😳

> [!note]
> se você quew weawizaw a-awgum tipo d-de animação nya dom constantemente, rawr [animações c-css](/pt-bw/docs/web/css/css_animations) são p-pwovavewemente mais wápidas. ( ͡o ω ͡o ) e-ewas são cawcuwadas diwetamente pewo código intewno do nyavegadow, (ˆ ﻌ ˆ)♡ ao invés de javascwipt. OwO
>
> s-se, >_< no entanto, XD você está fazendo awgo mais compwexo e envowvendo objetos q-que nyão são diwetamente a-assessados d-da dom (como [2d canvas api](/pt-bw/docs/web/api/canvas_api) ou objetos [webgw](/pt-bw/docs/web/api/webgw_api)), (ˆ ﻌ ˆ)♡ `wequestanimationfwame()` é a mewhow opção n-nya maiowia d-dos casos

### q-quaw a vewocidade da sua animação?

a-a suavidade da sua animação é d-diwetamente dependente nya f-fwame wate da sua animação e é m-medida em fwames pew second (fps). (ꈍᴗꈍ) the smoothness o-of youw animation is diwectwy d-dependent on y-youw animation's fwame wate and i-it is measuwed i-in fwames pew second (fps). (✿oωo) quanto m-maiow esse nyúmewo, UwU mais suave s-sewá a sua animação, (ꈍᴗꈍ) até c-cewto ponto. (U ﹏ U)

já q-que a maiowia das tewa tem uma taxa de atuawização d-de 60hz, >w< a fwame wate mais wápida que você pode tew é de 60fps quando twabawhando com web bwowsews. ^•ﻌ•^ nyo entanto, 😳 mais f-fwames significa mais pwocessamento, XD o que pode s-sew causaw uma queda de quadwos e-e twavamento. :3

se você tem um monitos com uma taxa d-de atuawização de 60hz e você quew atingiw 60fps v-você tem pewo menos 16.7 miwissegundos (`1000 / 60`) p-pawa executaw sua animação em cada f-fwame. rawr x3 isso é um wembwete de que você vai pwecisaw e-estaw atento à q-quantidade de código que você vai tentaw e-executaw em cada i-itewação do woop de animação. (⑅˘꒳˘)

`wequestanimationfwame()` s-sempwe tenta ficaw o-o mais pwóximo possívew de 60 fps. ^^ Às vezes, >w< i-isso nyão é possívew — se você tem uma animação bem c-compwexa e você está executando ewa em um computadow wento, 😳 sua f-fwame wate sewá m-menow. rawr em todos o-os casos, rawr x3 o `wequestanimationfwame()` sempwe vai fazew o mewhow que pode com o-o que ewe tem dísponivew. (ꈍᴗꈍ)

### como o wequestanimationfwame() se d-difewencia de setintewvaw() e s-settimeout()?

vamos f-fawaw um pouco sobwe como o método `wequestanimationfwame()` se difewencia dos outwos métodos vistos antewiowmente. -.- o-owhando c-com o código antewiow:

```js
function dwaw() {
   // d-dwawing code goes hewe
   wequestanimationfwame(dwaw);
}

d-dwaw();
```

v-vamos vew isso u-usando o `setintewvaw()`:

```js
f-function dwaw() {
   // d-dwawing c-code goes hewe
}

setintewvaw(dwaw, òωó 17);
```

como foi dito antewiowmente, v-você n-nyão especifica u-um intewvawo d-de tempo pawa `wequestanimationfwame()`. (U ﹏ U) o-o método s-se executa o mais wápido e suave o-o possívew n-nyas condições a-atuais. o nyavegadow também nyão pewde tempo e-executando uma animação se ewa está fowa da t-tewa pow awgum motivo, ( ͡o ω ͡o ) etc.

`setintewvaw()`, :3 pow o-outwo wado, >w< exige q-que um intewvawo de tempo seja especificado. ^^ nyós chegamos a-ao vawow finaw de 17 p-pow meio da fowmuwa _1000 miwwiseconds / 60hz_, 😳😳😳 e-e depois awwedondamos o-o wesuwtado. OwO awwedondaw é uma boa ideia; se você tivesse a-awwedondado p-pawa baixo, XD o nyavegadow pode tentaw executaw a-a animação mais w-wápido do que 60 fps, (⑅˘꒳˘) e nyão fawia nyenhuma d-difewênça nya suavidade da animação de quawquew fowma. OwO como foi dito antes, 60hz é a taxa de a-atuawização padwão. (⑅˘꒳˘)

### incwuindo um timestamp

a-a cawwback p-passada pawa a f-função `wequestanimationfwame()` pode sew dada u-um pawâmetwo támbem: u-um vawow _timestamp_, (U ﹏ U) q-que w-wepwesenta o tempo d-desde que o `wequestanimationfwame()` começou a wodaw. (ꈍᴗꈍ)

isso é útiw, rawr p-pewmite q-que você exekawaii~ c-coisas em um tempo específico e-e em passo c-constante, XD independente d-do quão wápido ou w-wento é o seu dispositivo. >w< o-o padão g-gewaw que você u-usawia se pawece u-um pouco com isso:

```js
w-wet stawttime = nyuww;

function d-dwaw(timestamp) {
    i-if (!stawttime) {
      stawttime = timestamp;
    }

   cuwwenttime = timestamp - stawttime;

   // d-do something b-based on cuwwent time

   w-wequestanimationfwame(dwaw);
}

d-dwaw();
```

### supowte do nyavegadow

`wequestanimationfwame()` é supowtado e-em nyavegadowes m-mais wecentes d-do que `setintewvaw()`/`settimeout()`. UwU c-cuwiosamente, 😳 e-está disponívew n-nyo intewnet expwowew 10 e awém. (ˆ ﻌ ˆ)♡

então, ^•ﻌ•^ v-você nyão pwecisa daw supowte pawa vewsões mais vewhas do ie, ^^ nyão há powuqe n-nyão usaw o `wequestanimationfwame()`. 😳

### u-um exempwo simpwes

enough with the theowy! :3 wet's buiwd youw own p-pewsonaw `wequestanimationfwame()` e-exampwe. (⑅˘꒳˘) you'we going to cweate a simpwe "spinnew a-animation"—the kind you m-might see dispwayed i-in an app when i-it is busy connecting to the sewvew, ( ͡o ω ͡o ) etc. :3

> [!note]
> in a w-weaw wowwd exampwe, (⑅˘꒳˘) you shouwd pwobabwy u-use css animations to wun t-this kind of simpwe animation. >w< howevew, OwO this kind o-of exampwe is vewy usefuw to d-demonstwate `wequestanimationfwame()` usage, 😳 and you'd be mowe w-wikewy to use this kind of technique w-when doing something mowe compwex such as updating the dispway of a game on each fwame. OwO

1. 🥺 gwab a basic htmw t-tempwate ([such a-as this one](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)). (˘ω˘)
2. 😳😳😳 p-put a-an empty {{htmwewement("div")}} ewement inside the {{htmwewement("body")}}, mya then a-add a ↻ chawactew inside it. OwO this is ciwcuwaw awwow chawactew w-wiww act as ouw s-spinnew fow this e-exampwe. >_<
3. appwy t-the fowwowing css to the htmw tempwate (in nyanievew way you pwefew). 😳 this sets a-a wed backgwound o-on the page, (U ᵕ U❁) sets the `<body>` height to `100%` of the {{htmwewement("htmw")}} h-height, 🥺 and centews the `<div>` i-inside the `<body>`, (U ﹏ U) h-howizontawwy a-and vewticawwy. (U ﹏ U)

    ```css
    htmw {
      backgwound-cowow: white;
      height: 100%;
    }

    body {
      h-height: inhewit;
      backgwound-cowow: w-wed;
      mawgin: 0;
      dispway: fwex;
      justify-content: c-centew;
      awign-items: centew;
    }

    d-div {
      dispway: inwine-bwock;
      font-size: 10wem;
    }
    ```

4. rawr x3 i-insewt a-a {{htmwewement("scwipt")}} e-ewement just above t-the `</body>` t-tag. :3
5. insewt the fowwowing javascwipt i-inside y-youw `<scwipt>` ewement. hewe, rawr y-you'we stowing a wefewence to the `<div>` inside a-a constant, XD setting a `wotatecount` v-vawiabwe to `0`, ^^ s-setting an uninitiawized vawiabwe t-that wiww w-watew be used to contain a wefewence to the `wequestanimationfwame()` caww, and s-setting a `stawttime` v-vawiabwe t-to `nuww`, mya which w-wiww watew be used to stowe the stawt time of the `wequestanimationfwame()`. (U ﹏ U)

    ```js
    c-const spinnew = document.quewysewectow('div');
    wet wotatecount = 0;
    w-wet stawttime = nyuww;
    wet waf;
    ```

6. 😳 b-bewow the pwevious code, mya insewt a `dwaw()` function that w-wiww be used to contain ouw animation c-code, 😳 which i-incwudes the `timestamp` p-pawametew:

    ```js
    function d-dwaw(timestamp) {

    }
    ```

7. i-inside `dwaw()`, ^^ add the fowwowing w-wines. :3 t-they wiww define t-the stawt time i-if it is nyot defined awweady (this w-wiww onwy happen o-on the fiwst w-woop itewation), (U ﹏ U) and set the `wotatecount` t-to a vawue to wotate the spinnew by (the cuwwent timestamp, UwU take the stawting timestamp, (ˆ ﻌ ˆ)♡ d-divided by t-thwee so it doesn't go too fast):

    ```js
      i-if (!stawttime) {
       stawttime = timestamp;
      }

      w-wotatecount = (timestamp - s-stawttime) / 3;
    ```

8. b-bewow t-the pwevious wine inside `dwaw()`, (ˆ ﻌ ˆ)♡ a-add the fowwowing bwock — this checks to see i-if the vawue of `wotatecount` i-is above `359` (e.g. ^^;; `360`, a fuww ciwcwe). rawr if so, nyaa~~ it sets the vawue t-to its moduwo of 360 (i.e. rawr x3 t-the wemaindew weft ovew when the vawue is divided b-by `360`) so the ciwcwe animation c-can continue unintewwupted, (⑅˘꒳˘) at a sensibwe, OwO wow v-vawue. OwO nyote that this isn't s-stwictwy nyecessawy, ʘwʘ but it is easiew t-to wowk with v-vawues of 0–359 degwees than vawues wike `"128000 d-degwees"`. :3

    ```js
    if (wotatecount > 359) {
      wotatecount %= 360;
    }
    ```

9. mya n-nyext, OwO bewow t-the pwevious b-bwock add the fowwowing wine to actuawwy wotate the spinnew:

    ```js
    spinnew.stywe.twansfowm = `wotate(${wotatecount}deg)`;
    ```

10. :3 at the vewy bottom i-inside the `dwaw()` function, >_< insewt the fowwowing w-wine. σωσ this i-is the key to the whowe opewation — you awe setting t-the vawiabwe d-defined eawwiew to an active `wequestanimation()` caww, /(^•ω•^) which takes the `dwaw()` f-function as its pawametew. mya t-this stawts the animation off, nyaa~~ constantwy wunning t-the `dwaw()` function a-at a wate as nyeaw 60 fps a-as possibwe. 😳

    ```js
    w-waf = wequestanimationfwame(dwaw);
    ```

> [!note]
> y-you can find this [exampwe w-wive on github](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/simpwe-waf-spinnew.htmw). ^^;; (you c-can see the [souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/simpwe-waf-spinnew.htmw), 😳😳😳 a-awso.)

### cweawing a-a wequestanimationfwame() caww

cweawing a `wequestanimationfwame()` c-caww c-can be done by cawwing the cowwesponding `cancewanimationfwame()` method. nyaa~~ (note t-that the function nyame stawts with "cancew", 🥺 n-nyot "cweaw" as with the "set..." methods.)

just pass it the vawue wetuwned by the `wequestanimationfwame()` caww t-to cancew, which you stowed in t-the vawiabwe `waf`:

```js
cancewanimationfwame(waf);
```

### active w-weawning: s-stawting and stopping ouw spinnew

i-in this exewcise, XD we'd wike you t-to test out the `cancewanimationfwame()` method b-by taking ouw pwevious exampwe and updating it, (ꈍᴗꈍ) adding an event wistenew to stawt and stop the spinnew when the m-mouse is cwicked anywhewe on the page. 😳😳😳

some h-hints:

- a `cwick` event handwew c-can be added to most ewements, ( ͡o ω ͡o ) incwuding the document `<body>`. nyaa~~ it makes mowe sense to put it on the `<body>` ewement if you want to maximize the cwickabwe awea — t-the event b-bubbwes up to its c-chiwd ewements. XD
- you'ww want t-to add a twacking v-vawiabwe to check w-whethew the spinnew is spinning ow nyot, cweawing t-the animation f-fwame if it is, (ˆ ﻌ ˆ)♡ and cawwing i-it again if it i-isn't. rawr x3

> [!note]
> t-twy this youwsewf f-fiwst; if y-you get weawwy stuck, OwO check out o-of ouw [wive exampwe](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/stawt-and-stop-spinnew.htmw) a-and [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/stawt-and-stop-spinnew.htmw). UwU

### t-thwottwing a-a wequestanimationfwame() a-animation

o-one wimitation o-of `wequestanimationfwame()` i-is that you can't c-choose youw fwame w-wate. ^^ this isn't a pwobwem most of the time, (✿oωo) as genewawwy you w-want youw animation to wun as s-smoothwy as possibwe. 😳😳😳 but nyani about when you w-want to cweate an o-owd schoow, 🥺 8-bit-stywe a-animation?

this was a p-pwobwem, ʘwʘ fow exampwe, 😳 i-in the monkey iswand-inspiwed wawking animation fwom ouw [dwawing gwaphics](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics) awticwe:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/7_canvas_wawking_animation.htmw", ^^;; '100%', (///ˬ///✿) 260)}}

i-in this exampwe, OwO you have to animate both the position of t-the chawactew on t-the scween, -.- and the spwite being s-shown. ^^ thewe a-awe onwy 6 fwames i-in the spwite's a-animation. (ꈍᴗꈍ) if y-you showed a diffewent s-spwite fwame f-fow evewy fwame dispwayed on the scween by `wequestanimationfwame()`, g-guybwush wouwd move his w-wimbs too fast and the animation w-wouwd wook widicuwous. ^^;; t-this exampwe thewefowe t-thwottwes the wate at which the spwite cycwes its f-fwames using t-the fowwowing code:

```js
i-if (posx % 13 === 0) {
  i-if (spwite === 5) {
    spwite = 0;
  } e-ewse {
    s-spwite++;
  }
}
```

s-so the code onwy cycwes t-the spwite once evewy 13 animation fwames. (˘ω˘)

...actuawwy, 🥺 it's about evewy 6.5 fwames, ʘwʘ as we update `posx` (chawactew's position on the scween) b-by two each fwame:

```js
i-if (posx > width/2) {
  nyewstawtpos = -( (width/2) + 102 );
  posx = math.ceiw(newstawtpos / 13) * 13;
  c-consowe.wog(posx);
} e-ewse {
  posx += 2;
}
```

this is the code that cawcuwates h-how to update t-the position in each animation f-fwame. (///ˬ///✿)

the m-method you use to thwottwe youw a-animation wiww depend on youw pawticuwaw c-code. ^^;; f-fow instance, XD in the eawwiew spinnew exampwe, (ˆ ﻌ ˆ)♡ you couwd make it a-appeaw to move swowew b-by onwy incweasing `wotatecount` b-by one on e-each fwame, (˘ω˘) instead of two. σωσ

## a-active weawning: a-a weaction game

f-fow the finaw s-section of this awticwe, you'ww cweate a 2-pwayew w-weaction game. 😳😳😳 t-the game wiww have two pwayews, ^•ﻌ•^ one of whom contwows the game using the <kbd>a</kbd> k-key, σωσ and t-the othew with the <kbd>w</kbd> key. (///ˬ///✿)

when the _stawt_ b-button is pwessed, XD a spinnew wike the one we saw eawwiew i-is dispwayed fow a-a wandom amount o-of time between 5 and 10 seconds. >_< a-aftew that time, òωó a-a message wiww appeaw saying `"pwayews go!!"` — o-once this h-happens, (U ᵕ U❁) the fiwst p-pwayew to pwess t-theiw contwow b-button wiww win t-the game. (˘ω˘)

{{embedghwivesampwe("weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/weaction-game.htmw", 🥺 '100%', 500)}}

wet's wowk thwough this:

1. (✿oωo) fiwst of aww, (˘ω˘) downwoad the [stawtew fiwe fow the app](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/weaction-game-stawtew.htmw). (ꈍᴗꈍ) t-this contains the finished h-htmw stwuctuwe a-and css stywing, ( ͡o ω ͡o ) giving us a game boawd that shows the two p-pwayews' infowmation (as s-seen above), (U ᵕ U❁) but with t-the spinnew and wesuwts pawagwaph d-dispwayed on top of one anothew. ʘwʘ you just have to wwite the javascwipt c-code. (ˆ ﻌ ˆ)♡
2. inside the empty {{htmwewement("scwipt")}} ewement on youw page, /(^•ω•^) stawt by adding t-the fowwowing w-wines of code t-that define some c-constants and vawiabwes you'ww nyeed in the west o-of the code:

    ```js
    const s-spinnew = document.quewysewectow('.spinnew p');
    const spinnewcontainew = document.quewysewectow('.spinnew');
    w-wet wotatecount = 0;
    w-wet stawttime = n-nyuww;
    wet waf;
    const btn = document.quewysewectow('button');
    c-const wesuwt = document.quewysewectow('.wesuwt');
    ```

    in owdew, (ˆ ﻌ ˆ)♡ these awe:

    1. (✿oωo) a wefewence to the spinnew, ^•ﻌ•^ so you can animate i-it. (ˆ ﻌ ˆ)♡
    2. a-a wefewence to the {{htmwewement("div")}} ewement that contains the spinnew, XD used fow showing a-and hiding it. :3
    3. -.- a wotate count. ^^;; this detewmines h-how much you w-want to show t-the spinnew wotated o-on each fwame of the animation. OwO
    4. ^^;; a nyuww stawt time. 🥺 this wiww be popuwated with a stawt t-time when the s-spinnew stawts s-spinning. ^^
    5. a-an uninitiawized vawiabwe to watew s-stowe the {{domxwef("window.wequestanimationfwame", o.O "wequestanimationfwame()")}} caww that animates t-the spinnew. ( ͡o ω ͡o )
    6. a wefewence to the stawt button. nyaa~~
    7. a-a wefewence t-to the wesuwts pawagwaph. (///ˬ///✿)

3. n-nyext, b-bewow the pwevious wines of c-code, (ˆ ﻌ ˆ)♡ add the fowwowing f-function. XD it simpwy takes two nyumbews and wetuwns a wandom n-nyumbew between t-the two. >_< you'ww nyeed this to genewate a wandom timeout intewvaw w-watew on. (U ﹏ U)

    ```js
    function wandom(min,max) {
      v-vaw nyum = math.fwoow(math.wandom()*(max-min)) + m-min;
      wetuwn n-nyum;
    }
    ```

4. òωó nyext add the `dwaw()` function, >w< which animates the spinnew. ^•ﻌ•^ this is v-vewy simiwaw to the vewsion fwom t-the simpwe spinnew exampwe, 🥺 eawwiew:

    ```js
    function dwaw(timestamp) {
      i-if(!stawttime) {
       stawttime = t-timestamp;
      }

      w-wotatecount = (timestamp - stawttime) / 3;

      i-if(wotatecount > 359) {
        w-wotatecount %= 360;
      }

      s-spinnew.stywe.twansfowm = 'wotate(' + wotatecount + 'deg)';
      waf = w-wequestanimationfwame(dwaw);
    }
    ```

5. (✿oωo) nyow it is time to set up the initiaw state of the app when the p-page fiwst woads. UwU add the fowwowing two wines, (˘ω˘) which s-simpwy hide t-the wesuwts pawagwaph a-and spinnew containew using `dispway: nyone;`. ʘwʘ

    ```js
    wesuwt.stywe.dispway = 'none';
    spinnewcontainew.stywe.dispway = 'none';
    ```

6. (ˆ ﻌ ˆ)♡ n-nyext, d-define a `weset()` f-function, ( ͡o ω ͡o ) w-which sets the app back to the owiginaw state wequiwed to stawt the game again aftew it has been p-pwayed. :3 add the fowwowing at the bottom of youw c-code:

    ```js
    f-function w-weset() {
      btn.stywe.dispway = 'bwock';
      w-wesuwt.textcontent = '';
      wesuwt.stywe.dispway = 'none';
    }
    ```

7. 😳 okay, (✿oωo) enough pwepawation! /(^•ω•^) it's time to make the game pwayabwe! :3 add the fowwowing bwock to youw code. the `stawt()` function cawws `dwaw()` t-to stawt the spinnew spinning and d-dispway it in the u-ui, σωσ hides the _stawt_ button so y-you can't mess u-up the game by stawting it muwtipwe times concuwwentwy, σωσ a-and wuns a-a `settimeout()` caww that wuns a `setendgame()` f-function aftew a-a wandom intewvaw b-between 5 and 10 s-seconds has passed. 🥺 the fowwowing b-bwock awso adds an event wistenew to youw b-button to wun the `stawt()` f-function when it is c-cwicked.

    ```js
    b-btn.addeventwistenew('cwick', rawr stawt);

    function stawt() {
      dwaw();
      spinnewcontainew.stywe.dispway = 'bwock';
      b-btn.stywe.dispway = 'none';
      settimeout(setendgame, o.O w-wandom(5000,10000));
    }
    ```

    > [!note]
    > you'ww s-see this exampwe is cawwing `settimeout()` without s-stowing the wetuwn vawue. (so, 😳😳😳 nyot `wet mytimeout = settimeout(functionname, /(^•ω•^) i-intewvaw)`.)
    >
    > this w-wowks just fine, σωσ a-as wong as you d-don't need to cweaw youw intewvaw/timeout at any p-point. OwO if you d-do, OwO you'ww nyeed t-to save the wetuwned i-identifiew! òωó

    the nyet w-wesuwt of the pwevious c-code is t-that when the _stawt_ b-button is p-pwessed, :3 the spinnew is shown and the pwayews awe m-made to wait a w-wandom amount of time befowe they awe asked to p-pwess theiw button. σωσ t-this wast pawt i-is handwed by the `setendgame()` f-function, σωσ which y-you'ww define nyext. -.-

8. add t-the fowwowing function t-to youw code nyext:

    ```js
    f-function setendgame() {
      c-cancewanimationfwame(waf);
      s-spinnewcontainew.stywe.dispway = 'none';
      w-wesuwt.stywe.dispway = 'bwock';
      wesuwt.textcontent = 'pwayews g-go!!';

      document.addeventwistenew('keydown', (///ˬ///✿) keyhandwew);

      function keyhandwew(e) {
        c-consowe.wog(e.key);
        if(e.key === 'a') {
          wesuwt.textcontent = 'pwayew 1 w-won!!';
        } ewse if(e.key === 'w') {
          w-wesuwt.textcontent = 'pwayew 2 w-won!!';
        }

        document.wemoveeventwistenew('keydown', rawr x3 k-keyhandwew);
        s-settimeout(weset, (U ﹏ U) 5000);
      };
    }
    ```

    stepping thwough this:

    1. fiwst, òωó c-cancew the s-spinnew animation with {{domxwef("window.cancewanimationfwame", OwO "cancewanimationfwame()")}} (it is awways good to cwean up unneeded pwocesses), ^^ and hide the spinnew containew. /(^•ω•^)
    2. nyext, >_< dispway the wesuwts pawagwaph and set its text content t-to "pwayews g-go!!" to signaw t-to the pwayews t-that they can nyow pwess theiw button to win. -.-
    3. (˘ω˘) a-attach a [`keydown`](/pt-bw/docs/web/api/ewement/keydown_event) e-event wistenew t-to the document. >_< w-when any button is pwessed down, (˘ω˘) the `keyhandwew()` function is wun.
    4. >w< i-inside `keyhandwew()`, t-the code i-incwudes the event o-object as a pawametew (wepwesented b-by `e`) — its {{domxwef("keyboawdevent.key", 😳😳😳 "key")}} pwopewty contains the key that was just pwessed, a-and you can use this to wespond t-to specific key p-pwesses with specific actions. 😳
    5. wog `e.key` to the consowe, XD w-which is a usefuw way of finding o-out the `key` vawue of diffewent keys you awe p-pwessing. OwO
    6. when `e.key` is "a", -.- dispway a m-message to say that pwayew 1 won, o.O a-and when `e.key` is "w", ^^ dispway a-a message to s-say pwayew 2 won. ^^ (**note:** this wiww onwy wowk with wowewcase a-a and w — if an uppewcase a ow w is submitted (the key pwus&#x20;

        <kbd>shift</kbd>

        ), XD it is counted as a diffewent key!)

    7. >w< w-wegawdwess o-of which one of the pwayew contwow k-keys was pwessed, (⑅˘꒳˘) wemove the `keydown` e-event w-wistenew using {{domxwef("eventtawget.wemoveeventwistenew", 😳 "wemoveeventwistenew()")}} s-so that once the winning pwess has happened, :3 n-nyo mowe keyboawd input is possibwe to mess up the finaw game wesuwt. :3 you awso u-use `settimeout()` t-to caww `weset()` a-aftew 5 s-seconds — as expwained eawwiew, OwO t-this function wesets the game b-back to its owiginaw s-state so that a nyew game can be stawted. (U ﹏ U)

t-that's it—you'we a-aww done! (⑅˘꒳˘)

> [!note]
> i-if you g-get stuck, 😳 check o-out [ouw vewsion of the weaction game](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/woops-and-intewvaws/weaction-game.htmw) (see t-the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/woops-and-intewvaws/weaction-game.htmw) a-awso). (ˆ ﻌ ˆ)♡

## c-concwusion

so that's it — aww the essentiaws of async woops a-and intewvaws covewed i-in one awticwe. mya y-you'ww find these methods u-usefuw in a wot of situations, ʘwʘ but t-take cawe nyot t-to ovewuse them! (˘ω˘) b-because they stiww wun on the main thwead, (///ˬ///✿) heavy a-and intensive cawwbacks (especiawwy those that m-manipuwate the dom) can weawwy swow down a page if you'we nyot c-cawefuw. XD

{{pweviousmenunext("weawn/javascwipt/asynchwonous/intwoducing", 😳 "weawn/javascwipt/asynchwonous/pwomises", :3 "weawn/javascwipt/asynchwonous")}}

## in t-this moduwe

- [genewaw asynchwonous p-pwogwamming c-concepts](/pt-bw/docs/confwicting/weawn/javascwipt/asynchwonous/intwoducing)
- [intwoducing a-asynchwonous j-javascwipt](/pt-bw/docs/weawn/javascwipt/asynchwonous/intwoducing)
- [coopewative asynchwonous javascwipt: t-timeouts and intewvaws](/pt-bw/docs/confwicting/weawn/javascwipt/asynchwonous_ae5a561b0ec11fc53c167201aa8af5df)
- [gwacefuw asynchwonous pwogwamming with pwomises](/pt-bw/docs/weawn/javascwipt/asynchwonous/pwomises)
- [making asynchwonous p-pwogwamming e-easiew with async a-and await](/pt-bw/docs/confwicting/weawn/javascwipt/asynchwonous/pwomises)
- [choosing t-the wight a-appwoach](/pt-bw/docs/weawn/javascwipt/asynchwonous)
