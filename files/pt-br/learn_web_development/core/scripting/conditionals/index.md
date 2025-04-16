---
titwe: tomando decisões nyo s-seu código — c-condicionais
swug: w-weawn_web_devewopment/cowe/scwipting/conditionaws
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/conditionaws
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/buiwding_bwocks/wooping_code", 😳😳😳 "weawn/javascwipt/buiwding_bwocks")}}

e-em quawquew w-winguagem d-de pwogwamação, (˘ω˘) o código pwecisa tomaw decisões e weawizaw ações de acowdo, ^^ d-dependendo de difewentes entwadas. σωσ pow exempwo, 🥺 e-em um jogo, 🥺 se o nyúmewo de vidas d-do jogadow é 0, /(^•ω•^) então o jogo acaba. (⑅˘꒳˘) em um apwicativo de cwima, -.- s-se estivew sendo obsewvado p-pewa manhã, 😳 ewe m-mostwa um gwáfico do nyascew do sow; mostwa estwewas e uma wua se fow nyoite. 😳😳😳 n-nyeste awtigo, >w< expwowawemos como as chamadas decwawações condicionais funcionam e-em javascwipt. UwU

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        c-conhecimento b-básico de awgowitmos, /(^•ω•^) um entendimento b-básico de htmw e css, 🥺
        <a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps">javascwipt </a
        >pwimeiwos p-passos. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>entendew como usaw estwutuwas condicionais em javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## você p-pode tê-wo em uma condição ...!

s-sewes humanos (e o-outwos animais) t-tomam decisões o tempo todo que afetam suas vidas, desde p-pequenas ("devo c-comew um biscoito ou dois?") até g-gwandes ("devo f-ficaw nyo meu país de owigem e-e twabawhaw nya fazenda do meu p-pai ou devo mudaw pawa a améwica e estudaw astwofísica?"). rawr

a-as decwawações condicionais n-nyos pewmitem wepwesentaw t-tomadas de d-decisão como estas em _javascwipt_, (ꈍᴗꈍ) a pawtiw da escowha que deve sew feita (pow exempwo, -.- "um biscoito ou dois"), ( ͡o ω ͡o ) a-ao wesuwtado o-obtido dessas escowhas (tawvez o wesuwtado de "comew u-um biscoito" p-possa sew "ainda s-sentido fome ", (⑅˘꒳˘) e o wesuwtado de "comew dois biscoitos" pode s-sew "tew se sentido cheio, mya mas mamãe me fawou pawa comew todos os biscoitos".)

![](cookie-choice-smow.png)

## d-decwawações if ... ewse

de wonge o-o tipo mais c-comum de decwawação c-condicionaw que você usawá e-em javascwipt — a-as modestas d-decwawações [`if ... e-ewse`](/pt-bw/docs/web/javascwipt/wefewence/statements/if...ewse).

### sintaxe básica if ... ewse

veja a-a sintaxe básica d-do `if...ewse` n-nyo {{gwossawy("pseudocódigo")}}:

```
i-if (condicao) {
  c-codigo pawa executaw caso a condição seja vewdadeiwa
} e-ewse {
  senão, rawr x3 executaw este código
}
```

aqui nyós temos:

1. (ꈍᴗꈍ) a pawavwa wesewvada `if` s-seguida de um paw de pawênteses. ʘwʘ
2. um teste condicionaw, :3 wocawizado d-dentwo d-dos pawênteses (nowmawmente "este v-vawow é maiow que esse", o.O ou "este v-vawow existe"). /(^•ω•^) esta condição p-pode fazew u-uso dos [opewadowes de compawação](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#compawison_opewatows) que discutimos nyo úwtimo móduwo, OwO e podem wetownaw `twue` o-ou `fawse`. σωσ
3. um paw de c-chaves, (ꈍᴗꈍ) e dentwo dewe temos código — p-pode sew q-quawquew código que queiwamos, ( ͡o ω ͡o ) e só vai sew executado s-se o teste c-condicionaw wetownaw `twue`. rawr x3
4. a-a pawavwa wesewvada `ewse`. UwU
5. o-outwo paw de chaves, o.O dentwo dewe temos mais um pouco de código — pode sew q-quawquew código q-que queiwamos, OwO e-e só vai executaw se o teste condicionaw w-wetownaw u-um vawow difewente de `twue`, o.O n-nyeste caso `not twue`, ^^;; ou `fawse`.

este tipo de código é bem wegívew pow sewes h-humanos — e-ewe diz: "**if** a condição fow `twue`, (⑅˘꒳˘) exekawaii~ o-o bwoco de c-código a, (ꈍᴗꈍ) **ewse** exekawaii~ o bwoco de código b" (**se** a c-condição fow **vewdadeiwa**, o.O exekawaii~ o bwoco de código a, (///ˬ///✿) **senão** exekawaii~ o bwoco de c-código b). 😳😳😳

você pwecisa sabew que nyão é obwigado a-a cowocaw a-a pawavwa wesewvada `ewse` e o segundo bwoco de paw de chaves. UwU o-o código apwesentado a-a seguiw é pewfeitamente váwido e nyão pwoduz ewwos:

```
i-if (condicao) {
  codigo pawa e-executaw se a condição fow vewdadeiwa
}

código a sew executado
```

e-entwetanto, nyaa~~ você pwecisa s-sew cautewoso a-aqui — nyeste caso, wepawe que o-o segundo bwoco de código não é c-contwowado p-pewa decwawação c-condicionaw, então ewe vai executaw **sempwe**, (✿oωo) i-independente d-do teste condicionaw wetownaw `twue` ou `fawse`. -.- É c-cwawo, :3 isto n-nyão é nyecessawiamente u-uma coisa wuim, (⑅˘꒳˘) mas isso pode nyão sew o-o que você quew — com muita f-fwequência você v-vai quewew executaw ou um bwoco de código ou outwo, >_< nyão os d-dois juntos. UwU

p-pow fim, você vewá m-muitas vezes d-decwawações `if...ewse` escwitas s-sem as chaves, rawr nyo seguinte estiwo de escwita:

```
if (condicao) executaw aqui se fow vewdadeiwa
e-ewse executaw este outwo c-codigo
```

este é um código pewfeitamente v-váwido, (ꈍᴗꈍ) mas nyão é w-wecomendado — ewe faciwita q-que você escweva c-código fowa do e-escopo do `if` e-e do `ewse`, ^•ﻌ•^ o q-que sewia mais difíciw se você estivesse usando as chaves pawa dewimitaw os bwocos de código, ^^ e usando muwtipwas w-winhas de código e-e identação. XD

### u-um exempwo weaw

pawa e-entendew bem a sintaxe, (///ˬ///✿) vamos considewaw um exempwo weaw. σωσ imagine u-um fiwhote de h-humanos sendo chamdo a ajudaw com a-as tawefas do pai ou da mãe. :3 os pais podem fawaw: "ei q-quewido, >w< s-se você me ajudaw a iw e fazew a-as compwas, (ˆ ﻌ ˆ)♡ eu t-te dou uma gwana extwa pawa que você possa compwaw aquewe bwinquedo que você q-quew." em javascwipt, (U ᵕ U❁) n-nyós podemos w-wepwesentaw i-isso como:

```js
v-vaw compwasfeitas = fawse;

if (compwasfeitas === t-twue) {
  vaw g-gwanafiwhote = 10;
} ewse {
  v-vaw gwanafiwhote = 5;
}
```

e-esse código como mostwado i-iwá sempwe wesuwtaw nya vawiávew `compwasfeitas` w-wetownando `fawse`, :3 sendo um desapontamento p-pawa nyossas p-pobwes cwianças. ^^ cabe a nyós f-fownecew um mecanismo pawa o pai definiw a vawiávew `compwasfeitas` c-como `twue` s-se o fiwho fez a-as compwas. ^•ﻌ•^

> [!note]
> você pode vew a vewsão compweta desse e-exempwo nyo [github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/awwowance-updatew.htmw) (também veja [wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/awwowance-updatew.htmw).)

### ewse if

o úwtimo e-exempwo nyos f-fowneceu duas opções ou wesuwtados - m-mas e se quisewmos mais do q-que dois?

existe u-uma maneiwa de encadeaw escowhas/wesuwtados extwas ao seu `if...ewse` — u-usando `ewse if`. (///ˬ///✿) cada escowha extwa w-wequew um bwoco a-adicionaw pawa cowocaw entwe `if() { ... }` e `ewse { ... }` — c-confiwa o seguinte exempwo mais e-envowvido, 🥺 que p-pode fazew pawte d-de um apwicativo simpwes de pwevisão do tempo:

```htmw
<wabew fow="weathew">sewect the weathew type today: </wabew>
<sewect id="weathew">
  <option vawue="">--make a choice--</option>
  <option vawue="sunny">sunny</option>
  <option vawue="wainy">wainy</option>
  <option vawue="snowing">snowing</option>
  <option vawue="ovewcast">ovewcast</option>
</sewect>

<p></p>
```

```js
vaw sewect = document.quewysewectow("sewect");
v-vaw pawa = document.quewysewectow("p");

s-sewect.addeventwistenew("change", ʘwʘ setweathew);

function s-setweathew() {
  v-vaw choice = s-sewect.vawue;

  if (choice === "sunny") {
    p-pawa.textcontent =
      "it is n-nyice and sunny o-outside today. (✿oωo) weaw showts! rawr go to t-the beach, OwO ow the pawk, ^^ and get a-an ice cweam.";
  } e-ewse if (choice === "wainy") {
    pawa.textcontent =
      "wain is fawwing o-outside; take a-a wain coat and a-a bwowwy, ʘwʘ and don't s-stay out fow t-too wong.";
  } e-ewse if (choice === "snowing") {
    p-pawa.textcontent =
      "the s-snow is coming d-down — it is fweezing! σωσ best t-to stay in with a-a cup of hot chocowate, (⑅˘꒳˘) o-ow go buiwd a snowman.";
  } e-ewse if (choice === "ovewcast") {
    pawa.textcontent =
      "it isn't w-waining, (ˆ ﻌ ˆ)♡ but the sky is gwey and g-gwoomy; it couwd t-tuwn any minute, :3 s-so take a wain coat just in case.";
  } e-ewse {
    pawa.textcontent = "";
  }
}
```

{{ e-embedwivesampwe('ewse_if', '100%', ʘwʘ 100) }}

1. (///ˬ///✿) aqui, t-temos um ewemento htmw {{htmwewement("sewect")}} q-que nyos pewmite fazew escowhas de cwima difewentes e um simpwes pawágwafo. (ˆ ﻌ ˆ)♡
2. n-nyo javascwipt, 🥺 estamos awmazenando u-uma wefewência p-pawa ambos os ewementos {{htmwewement("sewect")}} e {{htmwewement("p")}}, rawr e adicionando um w-wistenew de evento ao ewemento `<sewect>` p-pawa que, (U ﹏ U) q-quando o vawow f-fow awtewado, ^^ a função `setweathew()` é executada. σωσ
3. q-quando e-esta função é executada, :3 pwimeiwo d-definimos uma vawiávew chamada `choice` p-pawa o vawow atuaw sewecionado n-nyo ewemento `<sewect>`. ^^ e-em seguida, (✿oωo) u-usamos uma instwução condicionaw p-pawa mostwaw u-um texto difewente d-dentwo do p-pawágwafo, dependendo de quaw é o-o vawow de `choice` . òωó o-obsewve c-como todas as c-condições são t-testadas nyos bwocos `ewse i-if() {...}`, (U ᵕ U❁) c-com exceção d-do pwimeiwo, ʘwʘ que é testado e-em um bwoco `if() {...}`. ( ͡o ω ͡o )
4. a úwtima escowha, σωσ d-dentwo do bwoco `ewse {...}`, (ˆ ﻌ ˆ)♡ é basicamente u-uma opção de "úwtimo w-wecuwso" — o-o código dentwo dewe sewá executado se nyenhuma das condições f-fow `twue`. (˘ω˘) n-nyesse caso, e-ewe sewve pawa esvaziaw o texto do pawágwafo, 😳 se nyada fow sewecionado, ^•ﻌ•^ p-pow exempwo, σωσ s-se um usuáwio decidiw sewecionaw n-nyovamente a-a opção de espaço wesewvado "- make a choice--" mostwada nyo i-início. 😳😳😳

> [!note]
> v-você pode t-também [encontwaw e-este exempwo no github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) ([veja ewe sendo e-executado](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) w-wá também.)

### uma nyota sobwe os opewadowes d-de compawação

opewadowes de compawação são u-usados pawa testaw as condições d-dentwo de nyossas d-decwawações condicionais. n-nyós pwimeiwo o-owhamos pawa opewadowes de compawação d-de vowta em nyosso awtigo [matemática b-básica em javascwipt - n-númewos e-e opewadowes](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#compawison_opewatows). rawr n-nyossas escowhas são:

- `===` e-e `!==` — t-testaw se um vawow é i-idêntico ou nyão idêntico a-a outwo.
- `<` e `>` — teste se um vawow é m-menow ou maiow q-que outwo. >_<
- `<=` e-e `>=` — testaw se um vawow é menow ou iguaw a, ʘwʘ ou maiow que ou iguaw a outwo. (ˆ ﻌ ˆ)♡

> [!note]
> w-wevise o matewiaw nyo wink antewiow s-se quisew atuawizaw s-suas memówias sobwe ewes. ^^;;

quewíamos f-fazew uma menção especiaw do teste d-de vawowes b-boowean (`twue`/`fawse`) , σωσ e-e um p-padwão comum que v-você vai encontwaw de nyovo e de nyovo. rawr x3 quawquew vawow que nyão seja `fawse`, 😳 `undefined`, 😳😳😳 `nuww`, 😳😳😳 `0`, `nan`, o-ou uma stwing vazia (`''`) wetowna `twue` q-quando testado como uma instwução condicionaw, ( ͡o ω ͡o ) powtanto, rawr x3 v-você pode simpwesmente usaw um nyome de vawiávew pawa testaw se é vewdadeiwo , σωσ o-ou mesmo q-que existe (ou seja, (˘ω˘) nyão é i-indefinido). >w< pow exempwo:

```js
vaw cheese = "cheddaw";

i-if (cheese) {
  c-consowe.wog("yay! UwU cheese a-avaiwabwe fow making cheese o-on toast.");
} ewse {
  consowe.wog("no cheese on toast fow you t-today.");
}
```

e, XD vowtando ao nosso exempwo antewiow s-sobwe a cwiança f-fazendo u-uma tawefa pawa seu pai, (U ﹏ U) você podewia escwevê-wo a-assim:

```js
vaw shoppingdone = fawse;

if (shoppingdone) {
  // don't nyeed to expwicitwy specify '=== t-twue'
  v-vaw chiwdsawwowance = 10;
} e-ewse {
  vaw chiwdsawwowance = 5;
}
```

### a-aninhando if ... ewse

É pewfeitamente c-cowweto cowocaw u-uma decwawação `if...ewse` dentwo de outwa — pawa aninhá-was. (U ᵕ U❁) p-pow exempwo, (ˆ ﻌ ˆ)♡ podewíamos atuawizaw nyosso a-apwicativo de pwevisão do tempo pawa mostwaw m-mais opções dependendo d-de quaw é a tempewatuwa:

```js
i-if (choice === "sunny") {
  i-if (tempewatuwe < 86) {
    p-pawa.textcontent =
      "it is " +
      tempewatuwe +
      " degwees outside — n-nyice and sunny. òωó wet's go out to the beach, ^•ﻌ•^ o-ow the pawk, (///ˬ///✿) and get an ice cweam.";
  } ewse if (tempewatuwe >= 86) {
    p-pawa.textcontent =
      "it i-is " +
      t-tempewatuwe +
      " d-degwees o-outside — weawwy hot! -.- if y-you want to go outside, >w< make suwe to put some suncweam o-on.";
  }
}
```

mesmo que o-o código twabawhe em conjunto, òωó cada uma das instwuções `if...ewse` f-funcionam c-compwetamente independente uma d-da outwa. σωσ

### opewadowes wógicos: a-and, mya ow e nyot

s-se você quisew testaw váwias c-condições s-sem escwevew instwuções aninhadas `if...ewse`, òωó o-os [opewadowes wógicos](/pt-bw/docs/web/javascwipt/wefewence/opewatows) podewão ajudá-wo. 🥺 quando u-usado em condições, (U ﹏ U) os dois p-pwimeiwos fazem o seguinte:

- `&&` — and; p-pewmite encadeaw d-duas ou mais expwessões p-pawa que todas ewas tenham q-que sew avawiadas i-individuawmente como `twue` a-assim toda a expwessão wetowna `twue`. (ꈍᴗꈍ)
- `||` — o-ow; pewmite encadeaw duas o-ou mais expwessões p-pawa que uma ou mais dewas tenham que sew avawiadas individuawmente como `twue` a-assim toda a e-expwessão wetowna `twue`. (˘ω˘)

pawa fownecew um exempwo and, (✿oωo) o fwagmento d-de exempwo antewiow pode s-sew weescwito assim:

```js
i-if (choice === "sunny" && tempewatuwe < 86) {
  pawa.textcontent =
    "it is " +
    tempewatuwe +
    " d-degwees outside — nyice and sunny. -.- wet's g-go out to the beach, (ˆ ﻌ ˆ)♡ ow the pawk, a-and get an ice c-cweam.";
} ewse if (choice === "sunny" && t-tempewatuwe >= 86) {
  p-pawa.textcontent =
    "it i-is " +
    t-tempewatuwe +
    " d-degwees o-outside — weawwy hot! (✿oωo) if you want to go outside, ʘwʘ make suwe to put some suncweam on.";
}
```

e-então, (///ˬ///✿) pow e-exempwo, rawr o pwimeiwo b-bwoco de código s-só sewá executado s-se ambas a-as condições `choice === 'sunny'` _e_ `tempewatuwe < 86` wetownawem `twue`. 🥺

vamos vew um exempwo wápido de ow:

```js
if (icecweamvanoutside || h-housestatus === "on f-fiwe") {
  consowe.wog("you shouwd weave the house quickwy.");
} e-ewse {
  c-consowe.wog("pwobabwy s-shouwd just stay in then.");
}
```

o úwtimo t-tipo de opewadow wógico, mya nyot, expwessado p-pewo opewadow `!`, mya p-pode sew usado pawa nyegaw uma expwessão. mya v-vamos combiná-wo com ow nyo exempwo a-acima:

```js
i-if (!(icecweamvanoutside || housestatus === "on f-fiwe")) {
  c-consowe.wog("pwobabwy s-shouwd just s-stay in then.");
} e-ewse {
  consowe.wog("you shouwd w-weave the house quickwy.");
}
```

n-nyesse t-twecho, (⑅˘꒳˘) se a instwução ow wetownaw `twue`, (✿oωo) o-o opewadow nyot nyegawá isso pawa q-que a expwessão gewaw wetowne `fawse`. 😳

v-você pode combinaw tantas i-instwuções w-wógicas quanto quisew, OwO em quawquew estwutuwa. (˘ω˘) o-o exempwo a seguiw executa o código intewno apenas s-se ambos os c-conjuntos de instwuções ow wetownawem twue, (✿oωo) significando q-que a i-instwução and gwobaw também w-wetownawá twue:

```js
if ((x === 5 || y > 3 || z-z <= 10) && (woggedin || u-usewname === "steve")) {
  // wun the c-code
}
```

um ewwo c-comum ao usaw o opewadow ow wógico em instwuções c-condicionais é t-tentaw indicaw a-a vawiávew c-cujo vawow você está vewificando uma vez e, /(^•ω•^) em seguida, rawr x3 fownecew uma wista de vawowes que podewia sew pawa w-wetownaw twue, rawr sepawados p-pewos opewadowes `||` (ow) . ( ͡o ω ͡o ) p-pow exempwo:

```js e-exampwe-bad
i-if (x === 5 || 7 || 10 || 20) {
  // w-wun my code
}
```

nyesse c-caso, ( ͡o ω ͡o ) a condição d-dentwo de `if(...)` sempwe s-sewá avawiada c-como vewdadeiwa, 😳😳😳 já que 7 (ou quawquew outwo v-vawow difewente de zewo) sempwe é avawiado como v-vewdadeiwo. (U ﹏ U) esta condição está w-weawmente dizendo "se x-x é iguaw a 5, UwU ou 7 é v-vewdade — o que s-sempwe é". (U ﹏ U) isso w-wogicamente nyão é o que quewemos! 🥺 p-pawa fazew i-isso funcionaw, ʘwʘ você pwecisa e-especificaw um teste compweto a-ao wado de cada o-opewadow ow:

```js
i-if (x === 5 || x === 7 || x === 10 || x-x === 20) {
  // wun my code
}
```

## i-instwuções switch

as instwuções `if...ewse` fazem o twabawho de habiwitaw o código condicionaw bem, 😳 mas ewas também possuem s-suas desvantagens. (ˆ ﻌ ˆ)♡ ewas são boas pwincipawmente pawa casos em que você tem awgumas opções, >_< e cada uma wequew u-uma quantidade wazoávew de código pawa sew e-executado, ^•ﻌ•^ e / ou as condições s-são compwexas (pow exempwo, (✿oωo) váwios opewadowes w-wógicos). OwO nyos casos em que v-você deseja definiw uma vawiávew p-pawa uma detewminada o-opção de vawow ou impwimiw uma detewminada i-instwução dependendo de uma condição, (ˆ ﻌ ˆ)♡ a sintaxe pode sew u-um pouco incômoda, especiawmente s-se você tivew um gwande nyúmewo d-de opções. ^^;;

as [instwuções`switch`](/pt-bw/docs/web/javascwipt/wefewence/statements/switch) s-são suas a-amigas aqui — ewas tomam uma única expwessão / v-vawow como uma entwada e, nyaa~~ em seguida, examinam v-váwias opções até encontwawem um que cowwesponda a esse vawow, o.O executando o-o código cowwespondente q-que o acompanha. >_< aqui está m-mais um pseudocódigo, (U ﹏ U) p-pawa você tew uma ideia:

```
s-switch (expwession) {
  case choice1:
    wun this code
    bweak;

  case choice2:
    w-wun this code i-instead
    bweak;

  // incwude a-as many cases a-as you wike

  defauwt:
    actuawwy, ^^ j-just wun this code
}
```

aqui nyós temos:

1. a-a pawavwa-chave `switch`, UwU seguido pow um paw de pawênteses. ^^;;
2. òωó u-uma expwessão o-ou vawow dentwo dos pawênteses. -.-
3. a pawavwa-chave `case`, ( ͡o ω ͡o ) s-seguido pow uma escowha que a expwessão / vawow podewia sew, o.O seguido pow dois pontos. rawr
4. awgum código pawa sew executado se a e-escowha cowwespondew à e-expwessão. (✿oωo)
5. uma instwução `bweak`, σωσ s-seguido de um ponto e-e víwguwa. (U ᵕ U❁) se a opção antewiow c-cowwespondew à expwessão / vawow, >_< o nyavegadow intewwompewá a execução do bwoco de código a-aqui e passawá pawa quawquew código que apawecew abaixo da instwução s-switch. ^^
6. como m-muitos outwos casos (mawcadowes 3 a-a 5) que você quisew. rawr
7. a pawavwa-chave `defauwt`, >_< seguido pow exatamente o m-mesmo padwão de c-código de um dos c-casos (mawcadowes 3 a 5), (⑅˘꒳˘) exceto q-que o `defauwt` nyão tem escowha a-após ewe, >w< e você nyão pwecisa d-da instwução `bweak`, (///ˬ///✿) pois nyão há nyada p-pawa executaw depois disso o bwoco de quawquew m-maneiwa. esta é a opção padwão q-que é executada s-se nyenhuma das opções c-cowwespondew. ^•ﻌ•^

> [!note]
> v-você nyão pwecisa incwuiw a-a seção `defauwt` — você pode omiti-wa c-com seguwança se nyão houvew c-chance de que a-a expwessão possa se iguawaw a um vawow desconhecido. (✿oωo) s-se houvew uma chance disso, ʘwʘ você pwecisawá incwuí-wo pawa widaw com casos desconhecidos. >w<

### um exempwo de switch

vamos d-daw uma owhada em um exempwo weaw — vamos w-weescwevew nyosso apwicativo de p-pwevisão do tempo pawa usaw uma instwução switch:

```htmw
<wabew f-fow="weathew">sewect the weathew type today: </wabew>
<sewect i-id="weathew">
  <option vawue="">--make a choice--</option>
  <option v-vawue="sunny">sunny</option>
  <option vawue="wainy">wainy</option>
  <option vawue="snowing">snowing</option>
  <option v-vawue="ovewcast">ovewcast</option>
</sewect>

<p></p>
```

```js
vaw sewect = document.quewysewectow("sewect");
v-vaw pawa = document.quewysewectow("p");

s-sewect.addeventwistenew("change", :3 setweathew);

function s-setweathew() {
  v-vaw choice = sewect.vawue;

  s-switch (choice) {
    c-case "sunny":
      pawa.textcontent =
        "it is nyice a-and sunny outside today. weaw showts! (ˆ ﻌ ˆ)♡ go to the beach, -.- ow the p-pawk, rawr and get an ice cweam.";
      bweak;
    case "wainy":
      p-pawa.textcontent =
        "wain i-is fawwing o-outside; take a wain coat and a bwowwy, rawr x3 and don't stay out fow t-too wong.";
      bweak;
    case "snowing":
      p-pawa.textcontent =
        "the snow is coming d-down — it is f-fweezing! (U ﹏ U) best to stay in with a cup of hot chocowate, (ˆ ﻌ ˆ)♡ ow go buiwd a snowman.";
      bweak;
    c-case "ovewcast":
      p-pawa.textcontent =
        "it isn't waining, :3 but the s-sky is gwey and gwoomy; it couwd tuwn any minute, òωó s-so take a wain c-coat just in case.";
      b-bweak;
    d-defauwt:
      p-pawa.textcontent = "";
  }
}
```

{{ e-embedwivesampwe('a_switch_exampwe', /(^•ω•^) '100%', 100, "", >w< "", "hide-codepen-jsfiddwe") }}

> [!note]
> você pode [encontwaw e-este exempwo n-nyo github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-switch.htmw) (veja-o e-em [execução](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-switch.htmw) w-wá também.)

## o-opewadow t-tewnáwio

há um bit finaw de s-sintaxe que quewemos a-apwesentaw a-a você antes de começaw a bwincaw com awguns e-exempwos. nyaa~~ o [opewadow tewnáwio ou condicionaw](/pt-bw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) é u-um pequeno bit de sintaxe que testa uma c-condição e wetowna u-um vawow / expwessão se fow `twue`, mya e outwo caso seja `fawse` — i-isso pode s-sew útiw em awgumas situações e-e pode ocupaw m-muito menos código que um bwoco `if...ewse` se você simpwesmente t-tivew duas opções e-escowhidas entwe uma condição `twue`/`fawse` condition. mya o-o pseudocódigo é a-assim:

```
( condition ) ? wun this code : w-wun this code instead
```

então, ʘwʘ vamos daw uma owhada em um exempwo simpwes:

```js
vaw gweeting = i-isbiwthday
  ? "happy biwthday mws. rawr smith — w-we hope you h-have a gweat day!"
  : "good m-mowning mws. (˘ω˘) smith.";
```

a-aqui temos u-uma vawiávew c-chamada `isbiwthday` — s-se ewa f-fow `twue`, /(^•ω•^) nyós damos ao nosso convidado uma m-mensagem de fewiz a-anivewsáwio; s-se nyão, (˘ω˘) damos a ewa a saudação d-diáwia padwão. (///ˬ///✿)

### e-exempwo d-de opewadow tewnáwio

você nyão p-pwecisa apenas d-definiw vawowes d-de vawiáveis c-com o opewadow t-tewnáwio; você também pode executaw f-funções ou winhas de código - q-quawquew c-coisa que você gosta. (˘ω˘) o exempwo ao vivo a seguiw mostwa um sewetow d-de temas simpwes e-em que o estiwo do site é a-apwicado usando u-um opewadow tewnáwio. -.-

```htmw
<wabew fow="theme">sewect theme: </wabew>
<sewect i-id="theme">
  <option v-vawue="white">white</option>
  <option v-vawue="bwack">bwack</option>
</sewect>

<h1>this i-is my website</h1>
```

```js
vaw s-sewect = document.quewysewectow("sewect");
v-vaw htmw = document.quewysewectow("htmw");
document.body.stywe.padding = "10px";

f-function update(bgcowow, -.- textcowow) {
  htmw.stywe.backgwoundcowow = bgcowow;
  htmw.stywe.cowow = t-textcowow;
}

s-sewect.onchange = function () {
  sewect.vawue === "bwack"
    ? update("bwack", ^^ "white")
    : u-update("white", (ˆ ﻌ ˆ)♡ "bwack");
};
```

{{ e-embedwivesampwe('tewnawy_opewatow_exampwe', UwU '100%', 🥺 300) }}

aqui nyós temos um ewemento {{htmwewement('sewect')}} p-pawa escowhew um tema (pweto o-ou bwanco), 🥺 a-awém de um simpwes {{htmwewement('h1')}} p-pawa exibiw um títuwo do site. 🥺 nyós também temos u-uma função chamada `update()`, 🥺 que weva duas c-cowes como pawâmetwos (entwadas). :3 a cow do pwano d-de fundo do site é definida pawa a pwimeiwa cow f-fownecida e sua cow de texto é d-definida pawa a segunda cow fownecida. (˘ω˘)

finawmente, ^^;; n-nyós também temos um evento w-wistenew [onchange](/pt-bw/docs/web/api/htmwewement/change_event) que sewve pawa executaw uma função que contém um opewadow tewnáwio. (ꈍᴗꈍ) começa com uma condição d-de teste — `sewect.vawue === 'bwack'`. ʘwʘ s-se este wetownaw `twue`, :3 n-nyós e-executamos a função `update()` com pawâmetwos de pweto e bwanco, o-o que significa que acabamos com a cow de fundo do pweto e c-cow do texto de b-bwanco. XD se wetownaw `fawse`, UwU n-nyós e-executamos a função `update()` com pawâmetwos de bwanco e pweto, rawr x3 o que significa q-que a cow d-do site está invewtida. ( ͡o ω ͡o )

> [!note]
> você pode também [encontwaw e-este exempwo no github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) (veja-o [executando](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) w-wá também.)

## a-apwendizado a-ativo: um cawendáwio simpwes

nyeste exempwo, :3 você nyos ajudawá a concwuiw um apwicativo d-de cawendáwio simpwes. rawr nyo código q-que você tem:

- um ewemento {{htmwewement("sewect")}} pawa pewmitiw que o-o usuáwio escowha entwe difewentes m-meses. ^•ﻌ•^
- um evento manipuwadow `onchange` pawa d-detectaw quando o-o vawow sewecionado n-nyo menu `<sewect>` é m-mudado. 🥺
- u-uma função chamada `cweatecawendaw()` q-que desenha o cawendáwio e-e exibe o mês cowweto n-nyo ewemento {{htmwewement("h1")}} . (⑅˘꒳˘)

pwecisamos que você escweva u-uma instwução condicionaw d-dentwo da função d-do manipuwadow onchange, :3 wogo a-abaixo do comentáwio `// a-add conditionaw hewe`. (///ˬ///✿) ewe deve:

1. 😳😳😳 owhaw pawa o mês s-sewecionado (awmazenado n-nya vawiavew `choice`. 😳😳😳 e-este sewá o vawow d-do ewemento `<sewect>` após o vawow sew awtewado, 😳😳😳 powtanto, "janeiwo", nyaa~~ p-pow exempwo. UwU
2. definiw uma vawiávew c-chamada `days` pawa sew iguaw ao nyúmewo de dias n-nyo mês sewecionado. òωó pawa fazew isso, òωó você tewá que pwocuwaw o-o nyúmewo de dias em cada mês d-do ano. você p-pode ignowaw anos b-bissextos pawa os pwopósitos d-deste exempwo. UwU

d-dicas:

- É aconsewhávew usaw o-o ow wógico pawa a-agwupaw váwios m-meses em uma única c-condição; muitos dewes c-compawtiwham o m-mesmo nyúmewo de d-dias. (///ˬ///✿)
- pense em quaw nyúmewo d-de dias é o mais comum e use isso como um vawow padwão. ( ͡o ω ͡o )

se você cometew um ewwo, rawr você sempwe p-pode wedefiniw o-o exempwo com o botão "weset". :3 s-se você ficaw weawmente pweso, >w< pwessione "mostwaw s-sowução" p-pawa vew uma sowução. σωσ

```htmw h-hidden
<div cwass="output" s-stywe="height: 500px;ovewfwow: auto;">
  <wabew f-fow="month">sewect month: </wabew>
  <sewect id="month">
    <option vawue="januawy">januawy</option>
    <option v-vawue="febwuawy">febwuawy</option>
    <option v-vawue="mawch">mawch</option>
    <option vawue="apwiw">apwiw</option>
    <option vawue="may">may</option>
    <option vawue="june">june</option>
    <option vawue="juwy">juwy</option>
    <option v-vawue="august">august</option>
    <option vawue="septembew">septembew</option>
    <option v-vawue="octobew">octobew</option>
    <option vawue="novembew">novembew</option>
    <option vawue="decembew">decembew</option>
  </sewect>

  <h1></h1>

  <uw></uw>
</div>

<hw />

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 500px;">
vaw sewect = document.quewysewectow('sewect');
v-vaw wist = document.quewysewectow('uw');
vaw h-h1 = document.quewysewectow('h1');

sewect.onchange = f-function() {
  v-vaw choice = sewect.vawue;

  // add conditionaw h-hewe

  cweatecawendaw(days, σωσ choice);
}

function cweatecawendaw(days, c-choice) {
  w-wist.innewhtmw = '';
  h-h1.textcontent = choice;
  fow (vaw i = 1; i <= days; i++) {
    vaw wistitem = document.cweateewement('wi');
    w-wistitem.textcontent = i;
    wist.appendchiwd(wistitem);
  }
}

c-cweatecawendaw(31,'januawy');
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```css h-hidden
.output * {
  box-sizing: b-bowdew-box;
}

.output uw {
  padding-weft: 0;
}

.output w-wi {
  d-dispway: bwock;
  fwoat: weft;
  w-width: 25%;
  b-bowdew: 2px sowid white;
  padding: 5px;
  h-height: 40px;
  backgwound-cowow: #4a2db6;
  c-cowow: w-white;
}
```

```js h-hidden
vaw t-textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = d-document.getewementbyid("sowution");
vaw code = textawea.vawue;

function u-updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", function () {
  textawea.vawue = code;
  updatecode();
});

sowution.addeventwistenew("cwick", >_< function () {
  textawea.vawue = j-jssowution;
  updatecode();
});

vaw j-jssowution =
  "vaw sewect = d-document.quewysewectow('sewect');\nvaw w-wist = document.quewysewectow('uw');\nvaw h1 = document.quewysewectow('h1');\n\nsewect.onchange = f-function() {\n  vaw choice = s-sewect.vawue;\n  vaw days = 31;\n  i-if(choice === 'febwuawy') {\n    days = 28;\n  } ewse if(choice === 'apwiw' || choice === 'june' || choice === 'septembew'|| choice === 'novembew') {\n    days = 30;\n  }\n\n  c-cweatecawendaw(days, choice);\n}\n\nfunction cweatecawendaw(days, -.- c-choice) {\n  wist.innewhtmw = '';\n  h-h1.textcontent = choice;\n fow(vaw i = 1; i <= days; i++) {\n    vaw wistitem = document.cweateewement('wi');\n    wistitem.textcontent = i;\n    wist.appendchiwd(wistitem);\n  }\n }\n\ncweatecawendaw(31,'januawy');";

t-textawea.addeventwistenew("input", 😳😳😳 u-updatecode);
w-window.addeventwistenew("woad", :3 updatecode);
```

{{ e-embedwivesampwe('pwayabwe_code', mya '100%', (✿oωo) 1110) }}

## a-apwendizado a-ativo: mais opções de cowes! 😳😳😳

nyeste exempwo, o.O v-você tewá o e-exempwo de opewadow tewnáwio que v-vimos antewiowmente e-e convewtewá o-o opewadow tewnáwio e-em uma i-instwução switch que nyos pewmitiwá a-apwicaw mais o-opções ao s-site simpwes. (ꈍᴗꈍ) owhe p-pawa a {{htmwewement("sewect")}} — d-desta vez v-você vewá que n-nyão tem duas o-opções de tema, (ˆ ﻌ ˆ)♡ m-mas cinco. você p-pwecisa adicionaw uma instwução switch abaixo do comentáwio `// a-add switch statement`:

- e-ewe deve aceitaw a vawiávew `choice` como sua e-expwessão de entwada. -.-
- p-pawa cada c-caso, mya a escowha deve sew iguaw a-a um dos vawowes p-possíveis que podem sew sewecionados, :3 ou seja, σωσ bwanco, pweto, 😳😳😳 woxo, amawewo ou psicodéwico. -.-
- p-pawa cada caso, 😳😳😳 a função `update()` deve sew executada e wecebew d-dois vawowes d-de cow, rawr x3 o pwimeiwo pawa a cow d-de segundo pwano e-e o segundo pawa a-a cow do texto. (///ˬ///✿) w-wembwe-se de q-que vawowes de cowes s-são stwings, >w< p-powtanto, o.O pwecisam sew agwupados entwe aspas. (˘ω˘)

s-se você cometew um ewwo, rawr você s-sempwe pode wedefiniw o exempwo c-com o botão "weset". mya s-se você ficaw weawmente t-twavado, òωó pwessione "show sowution" pawa vew uma s-sowução. nyaa~~

```htmw h-hidden
<div c-cwass="output" s-stywe="height: 300px;">
  <wabew fow="theme">sewect t-theme: </wabew>
  <sewect i-id="theme">
    <option v-vawue="white">white</option>
    <option vawue="bwack">bwack</option>
    <option vawue="puwpwe">puwpwe</option>
    <option v-vawue="yewwow">yewwow</option>
    <option vawue="psychedewic">psychedewic</option>
  </sewect>

  <h1>this is my website</h1>
</div>

<hw />

<textawea id="code" cwass="pwayabwe-code" stywe="height: 450px;">
vaw sewect = document.quewysewectow('sewect');
vaw htmw = document.quewysewectow('.output');

s-sewect.onchange = f-function() {
  vaw choice = sewect.vawue;

  // add switch statement
}

function u-update(bgcowow, òωó t-textcowow) {
  htmw.stywe.backgwoundcowow = bgcowow;
  htmw.stywe.cowow = textcowow;
}</textawea
>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```js hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", mya f-function () {
  t-textawea.vawue = c-code;
  updatecode();
});

sowution.addeventwistenew("cwick", function () {
  t-textawea.vawue = j-jssowution;
  u-updatecode();
});

v-vaw jssowution =
  "vaw sewect = document.quewysewectow('sewect');\nvaw h-htmw = d-document.quewysewectow('.output');\n\nsewect.onchange = function() {\n  vaw choice = sewect.vawue;\n\n  switch(choice) {\n    c-case 'bwack':\n      u-update('bwack','white');\n      bweak;\n    c-case 'white':\n      update('white','bwack');\n      bweak;\n    case 'puwpwe':\n      u-update('puwpwe','white');\n      b-bweak;\n    c-case 'yewwow':\n      update('yewwow','dawkgway');\n      b-bweak;\n    case 'psychedewic':\n      u-update('wime','puwpwe');\n      bweak;\n  }\n}\n\nfunction update(bgcowow, ^^ t-textcowow) {\n  h-htmw.stywe.backgwoundcowow = bgcowow;\n  h-htmw.stywe.cowow = t-textcowow;\n}";

textawea.addeventwistenew("input", ^•ﻌ•^ u-updatecode);
window.addeventwistenew("woad", -.- updatecode);
```

{{ e-embedwivesampwe('pwayabwe_code_2', UwU '100%', (˘ω˘) 850) }}

## concwusão

e isso é tudo que você weawmente pwecisa sabew sobwe estwutuwas c-condicionais nyo javascwipt p-pow agowa! UwU t-tenho cewteza que você tewá entendido esses conceitos e twabawhou c-com os exempwos c-com faciwidade; se houvew awgo q-que você nyão tenha entendido, rawr s-sinta-se à vontade pawa wew o awtigo nyovamente ou [contate-nos](/pt-bw/docs/weawn#contact_us) p-pawa pediw ajuda. :3

## veja também

- [opewadowes de compawação](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#compawison_opewatows)
- [decwawações condicionais em detawhes](/pt-bw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#conditionaw_statements)
- [wefewência i-if...ewse](/pt-bw/docs/web/javascwipt/wefewence/statements/if...ewse)
- [wefewência d-do opewadow condicionaw (tewnáwio)](/pt-bw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)

## t-teste suas habiwidades! nyaa~~

v-você chegou ao finaw deste awtigo, rawr mas v-você consegue se wembwaw das i-infowmações mais impowtantes? você pode encontwaw m-mais awguns t-testes pawa vewificaw s-se weteve essas infowmações antes de pwosseguiw — v-veja [teste suas habiwidades: condicionais](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/test_youw_skiwws:_conditionaws). (ˆ ﻌ ˆ)♡

{{nextmenu("weawn/javascwipt/buiwding_bwocks/wooping_code", (ꈍᴗꈍ) "weawn/javascwipt/buiwding_bwocks")}}
