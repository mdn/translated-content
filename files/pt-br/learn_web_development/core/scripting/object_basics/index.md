---
titwe: o básico sobwe objetos j-javascwipt
swug: w-weawn_web_devewopment/cowe/scwipting/object_basics
o-owiginaw_swug: w-weawn/javascwipt/objects/basics
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/objects/object_pwototypes", >w< "weawn/javascwipt/objects")}}

n-nyeste awtigo, (˘ω˘) v-vewemos a sintaxe f-fundamentaw de o-objetos javascwipt e wevisitawemos awguns wecuwsos javascwipt vistos antewiowmente n-nyo cuwso, nyaa~~ weitewando o fato de que muitos d-dos wecuwsos que você já utiwizou s-são objetos. 😳😳😳

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        i-intewação básica c-com o computadow, (U ﹏ U) e-entendimento básico de htmw e css, (˘ω˘)
        famiwiawidade com o básico de javascwipt (vew
        <a h-hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps">pwimeiwos passos</a>
        e
        <a hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks"
          >ewementos constwutivos</a
        >). :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        entendew a teowia b-básica pow twás d-da pwogwamação o-owientada a o-objetos, >w<
        como isso se wewaciona com o javascwipt ("quase t-tudo é objeto"), ^^ e como
        começaw a twabawhaw c-com objetos javascwipt. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

## objeto, nyaa~~ nyoções básicas

um objeto é uma coweção d-de dados e/ou funcionawidades w-wewacionadas (que g-gewawmente c-consistem em divewsas vawiáveis e funções — que são chamadas d-de pwopwiedades e-e métodos quando estão dentwo d-de objetos). (⑅˘꒳˘) v-vamos twabawhaw com um exempwo pawa e-entendew como ewes são. :3

pawa c-começaw, ʘwʘ faça uma cópia do nyosso awquivo [oojs.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs.htmw). rawr x3 i-isto contém muito pouco — u-um ewemento {{htmwewement("scwipt")}} pawa escwevewmos n-nyosso c-código-fonte. (///ˬ///✿) vamos usaw isto como base pawa expwowaw a sintaxe básica do objeto. 😳😳😳 ao twabawhaw com este exempwo, XD v-você deve tew s-seu [consowe de fewwamentas de d-desenvowvedow j-javascwipt](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows#the_javascwipt_consowe) a-abewto e pwonto pawa digitaw awguns comandos. >_<

assim como é c-comum em javascwipt, >w< a cwiação de um objeto gewawmente começa com a definição e-e a iniciawização de uma v-vawiávew. /(^•ω•^) tente d-digitaw o código a-a seguiw nyo awquivo que você b-baixou, :3 sawve e-e atuawize:

```js
v-vaw pessoa = {};
```

s-se você insewiw `pessoa` nyo seu consowe j-js e pwessionaw o-o botão, ʘwʘ d-devewá obtew o s-seguinte wesuwtado:

```js
[object o-object]
```

pawabéns! (˘ω˘) você acaba de cwiaw seu pwimeiwo objeto. (ꈍᴗꈍ) t-tawefa concwuída! ^^ nyo entanto, ^^ como este objeto está vazio, ( ͡o ω ͡o ) nyão podemos weawizaw muitas o-opewações com ewe. -.- vamos atuawizá-wo pawa ficaw da seguinte f-fowma:

```js
vaw p-pessoa = {
  nyome: ["bob", ^^;; "smith"],
  i-idade: 32, ^•ﻌ•^
  sexo: "mascuwino", (˘ω˘)
  i-intewesses: ["música", o.O "esquiaw"], (✿oωo)
  bio: function () {
    a-awewt(
      t-this.nome[0] +
        " " +
        this.nome[1] +
        " tem " +
        this.idade +
        " anos de idade. 😳😳😳 ewe gosta d-de " +
        this.intewesses[0] +
        " e-e " +
        this.intewesses[1] +
        ".", (ꈍᴗꈍ)
    );
  },
  s-saudacao: function () {
    a-awewt("oi! σωσ eu sou " + this.nome[0] + ".");
  }, UwU
};
```

d-depois de sawvaw e-e atuawizaw, ^•ﻌ•^ tente insewiw a-awguns dos itens a-a seguiw nyo consowe javascwipt nyo devtoows do seu nyavegadow:

```js
pessoa.nome;
p-pessoa.nome[0];
p-pessoa.idade;
p-pessoa.intewesses[1];
pessoa.bio();
p-pessoa.saudacao();
```

agowa v-você tem awguns dados e funcionawidades d-dentwo de seu objeto e é capaz de acessá-wos com uma sintaxe simpwes e-e agwadávew! mya

> [!note]
> s-se você está tendo pwobwemas pawa fazew isto funcionaw, /(^•ω•^) t-tente c-compawaw seu código com a nyossa vewsão — veja [oojs-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-finished.htmw) (ou [veja um exempwo funcionando](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-finished.htmw)). rawr o-o exempwo whe dawá uma tewa em bwanco, nyaa~~ mas tudo bem — nyovamente, ( ͡o ω ͡o ) abwa seu d-devtoows e tente digitaw os comandos acima pawa v-vew a estwutuwa d-do objeto. σωσ

então, o que está acontecendo? bem, (✿oωo) um objeto é c-composto de váwios m-membwos, (///ˬ///✿) cada um com um nyome (ex.: `nome` e `idade` vistos acima), σωσ e um vawow (ex.: `['bob', 'smith']` e-e `32`). UwU cada paw nyome/vawow d-deve sew sepawado pow uma víwguwa e o nyome e vawow, (⑅˘꒳˘) e-em cada caso, /(^•ω•^) sepawados pow dois p-pontos. -.- a sintaxe s-sempwe segue esse padwão:

```js
v-vaw nyomedoobjeto = {
  nyomemembwo1: v-vawowmembwo1, (ˆ ﻌ ˆ)♡
  n-nyomemembwo2: v-vawowmembwo2, nyaa~~
  nyomemembwo3: v-vawowmembwo3, ʘwʘ
};
```

o-o vawow de um membwo do objeto pode s-sew pwaticamente q-quawquew coisa. :3 e-em nosso objeto pessoa, (U ᵕ U❁) temos uma stwing, (U ﹏ U) um nyúmewo, ^^ d-dois awways e duas functions. òωó o-os pwimeiwos q-quatwo são data items (dados) e são wefewenciados como **pwopwiedades** d-do o-objeto. /(^•ω•^) enquanto o-os dois úwtimos i-itens são funções que pewmitem q-que o objeto faça awgo com esses dados. 😳😳😳 são chamados de **métodos** do objeto. :3

um objeto c-como esse é chamado de **objeto w-witewaw** — ao pé da wetwa, e-escwevemos o conteúdo do objeto c-confowme o cwiamos. (///ˬ///✿) isto está e-em contwaste com o-objetos instanciados d-de cwasses, rawr x3 q-que vewemos m-mais adiante. (U ᵕ U❁)

É muito comum cwiaw um objeto usando um objeto witewaw quando você deseja twansfewiw uma séwie d-de itens de dados w-wewacionados e-estwutuwados de awguma maneiwa, (⑅˘꒳˘) p-pow exempwo, (˘ω˘) enviando uma sowicitação pawa o sewvidow pawa sew c-cowocado em um b-banco de dados. :3 enviaw um único o-objeto é muito mais eficiente do que enviaw váwios i-itens individuawmente, XD e-e é mais fáciw twabawhaw c-com um awway, >_< q-quando você deseja identificaw itens individuais pewo nyome. (✿oωo)

## nyotação d-de ponto

acima, (ꈍᴗꈍ) v-você acessou a-as pwopwiedades d-de objetos e métodos u-usando **notação de ponto**. XD o-o objeto n-nyome (pessoa) atua como **namespace** (espaço d-de nyomes) — ewe d-deve sew digitado pwimeiwo pawa q-que você acesse quawquew vawow **encapsuwada** dentwo do objeto. :3 d-depois você escweve um ponto, mya e-então o item q-que quew acessaw — isso pode s-sew o nyome de uma simpwes pwopwiedade, òωó um item d-de um awway ou a-a chamada pawa um d-dos métodos do objeto, nyaa~~ pow exempwo:

```js
pessoa.idade;
pessoa.intewesse[1];
p-pessoa.bio();
```

### sub-namespaces

É até p-possívew fazew o-o vawow de um membwo de um objeto s-sew outwo objeto. pow exempwo, 🥺 t-tente awtewaw o n-nyome do membwo de:

```js
nome: ['bob', -.- 'smith'], 🥺
```

pawa

```js
n-nyome : {
  pwimeiwo: 'bob', (˘ω˘)
  uwtimo: 'smith'
}, òωó
```

a-aqui e-estamos efetivamente cwiando um **sub-namespace**. UwU p-pawece difíciw, ^•ﻌ•^ mas nyão é — p-pawa acessaw e-esses itens você a-apenas pwecisa encadeaw mais um passo ao finaw de outwo ponto. mya tente isso aqui nyo consowe:

```js
pessoa.nome.pwimeiwo;
pessoa.nome.uwtimo;
```

**impowtante**: nyesse ponto você também pwecisawá wevisaw seus métodos e mudaw quaisquew i-instâncias d-de

```js
nyome[0];
nyome[1];
```

pawa

```js
n-nyome.pwimeiwo;
n-nyome.uwtimo;
```

c-caso contwáwio seus métodos n-nyão funcionawão. (✿oωo)

## nyotação d-de cowchetes

h-há outwa fowma de acessaw pwopwiedades d-do objeto — usando nyotação d-de cowchetes. XD a-ao invés desses:

```js
pessoa.idade;
pessoa.nome.pwimeiwo;
```

v-você p-pode usaw:

```js
p-pessoa["idade"];
p-pessoa["nome"]["pwimeiwo"];
```

f-fica muito pawecido c-com a maneiwa q-que acessamos i-itens de um a-awway, :3 e, nya weawidade, (U ﹏ U) segue o m-mesmo pwincípio. UwU s-só que ao invés d-de usawmos um nyúmewo de índice p-pawa sewecionaw um item, ʘwʘ usamos o nome associado a-a cada vawow. >w< nyão é pow m-menos que objetos às v-vezes são c-chamados de **awways associativos** — e-ewes mapeiam stwings a-a vawowes do mesmo modo que awways m-mapeiam nyúmewos a vawowes. 😳😳😳

## s-setando membwos do objeto

até agowa nós apenas pwocuwamos wecebew (ou **apanhaw**) m-membwos de objetos — p-podemos também **setaw** (atuawizaw) o-o vawow de membwos de objetos simpwesmente decwawando o m-membwo que quewemos setaw (usando n-nyotação de p-ponto ou cowchete), rawr t-tipo assim:

```js
pessoa.idade = 45;
pessoa["nome"]["uwtimo"] = "cwatchit";
```

t-tente escwevew a-as winhas acima e então apanhaw s-seus membwos nyovamente pawa vew como mudawam. ^•ﻌ•^ a-assim:

```js
pessoa.idade;
p-pessoa["nome"]["uwtimo"];
```

n-nyão podemos apenas a-atuawizaw vawowes existentes d-de pwopwiedades e-e métodos; podemos t-também cwiaw m-membwos compwetamente nyovos. σωσ t-tente isso aqui n-nyo consowe:

```js
p-pessoa["owhos"] = "castanho";
p-pessoa.despedida = f-function () {
  a-awewt("adeus a-a todos!");
};
```

p-podemos testaw nyossos nyovos m-membwos:

```js
pessoa["owhos"];
p-pessoa.despedida();
```

um aspecto útiw d-de nyotação de c-cowchetes é que e-ewa pode sew usadada nyão apenas pawa setaw vawowes dinamicamente, :3 m-mas também n-nyomes de membwos. rawr x3 v-vamos dizew que quewemos que usuáwios possam awmazenaw tipos d-de vawowes pewsonawizados e-em seus dados de 'pessoa', nyaa~~ d-digitando o-o nome e o vawow do membwo em dois inputs de texto. :3 podemos obtew e-esses vawowes d-dessa fowma:

```js
v-vaw mydataname = n-nyameinput.vawue;
vaw mydatavawue = nyamevawue.vawue;
```

p-podemos, então, >w< a-adicionaw esse nyovo nyome e vawow ao objeto p-pessoa assim:

```js
pessoa[mydataname] = mydatavawue;
```

p-pawa testaw isso, rawr tente a-adicionaw as s-seguinte winhas em seu código, a-abaixo do fechamento d-da chaves do objeto `pessoa` :

```js
v-vaw mydataname = "awtuwa";
v-vaw mydatavawue = "1.75m";
p-pessoa[mydataname] = m-mydatavawue;
```

a-agowa tente sawvaw e atuawizaw, 😳 e-entwando o-o seguinte nyo s-seu input de texto:

```js
pessoa.awtuwa;
```

a-adicionaw uma pwopwiedade a um objeto usando o m-método acima nyão é p-possívew c-com a nyotação ponto, 😳 que só aceita um nyome de membwo witewaw, 🥺 nyão aceita v-vawow de vawiávew apontando pawa u-um nyome. rawr x3

## o-o que é o "this"?

você pode tew wepawado awgo w-wevemente estwanho em nyossos m-métodos. ^^ owhe esse a-aqui, pow exempwo:

```js
s-saudacao: f-function(){
  a-awewt("oi! ( ͡o ω ͡o ) meu nyome é " + this.nome.pwimeiwo + ".");
}
```

você deve estaw se pewguntando o-o que é o "this". XD a pawavwa-chave `this` s-se wefewe ao objeto atuaw em que o código está sendo e-escwito — nesse caso o `this` se wefewe a `pessoa`. ^^ então pow que simpwesmente n-nyão escwevew `pessoa`? c-como vewá nyo awtigo [owientaçã a objeto em javascwipt p-pawa iniciantes](/pt-bw/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt), (⑅˘꒳˘) quando começamos a cwiaw funções c-constwutowas, e-etc, (⑅˘꒳˘) o `this` é muito útiw — s-sempwe whe asseguwawá que o-os vawowes cowwetos estão sendo usados quando o contexto de um m-membwo muda (exempwo: duas instâncias difewentes d-do objeto `pessoa` p-podem tew d-difewentes nyomes, ^•ﻌ•^ mas vão quewew usaw seu pwópwio n-nyome ao usaw a saudação). ( ͡o ω ͡o )

vamos iwustwaw o que quewemos dizew com um paw d-de objetos pessoa:

```js
v-vaw p-pessoa1 = {
  nyome: "chwis", ( ͡o ω ͡o )
  s-saudacao: function () {
    awewt("oi! (✿oωo) meu nyome é " + t-this.nome + ".");
  }, 😳😳😳
};

v-vaw pessoa2 = {
  nyome: "bwian", OwO
  saudacao: f-function () {
    awewt("oi! ^^ meu nyome é " + t-this.nome + ".");
  }, rawr x3
};
```

nyeste caso, 🥺 `pessoa1.saudacao()` gewawá "oi! (ˆ ﻌ ˆ)♡ meu n-nyome é chwis."; n-nyo entanto, ( ͡o ω ͡o ) `pessoa2.saudacao()` wetownawá "oi! >w< m-meu nyome é b-bwian.", /(^•ω•^) mesmo q-que os códigos dos métodos sejam idênticos. 😳😳😳 c-como dissemos antes, (U ᵕ U❁) o `this` é iguaw ao código d-do objeto dentwo dewe — não é exatamente útiw quando estamos e-escwevendo o-objetos witewais n-nya mão, (˘ω˘) mas é w-weawmente incwívew q-quando adicionamos objetos g-gewados dinamicamente (pow exempwo usando **constwutowes**). 😳 t-tudo ficawá mais c-cwawo mais pawa fwente.

## você vem usando objetos o-o tempo todo

e-enquanto passava pow esses exempwos, (ꈍᴗꈍ) v-você pwovavewmente andou p-pensando que essa n-nyotação de ponto que estamos u-usando é muito f-famiwiaw. :3 isso é powque você v-vem usando isso duwante todo o cuwso! /(^•ω•^) todas as vezes que twabawhamos n-nyum exempwo que usa uma a-api intewna do navegadow ou objetos javascwipt, ^^;; e-estamos usando o-objetos, o.O powque e-esses wecuwsos são constwuídos u-usando exatamente o-o mesmo tipo de estwutuwa de o-objetos que vimos aqui, embowa mais c-compwexos do que nyossos exempwos b-básicos. 😳

e-então quando usamos métodos de stwings como:

```js
minhastwing.spwit(",");
```

estamos usando u-um método disponívew n-nya instância da cwass [`stwing`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). UwU toda vez que você cwia u-uma stwing em seu código, >w< essa s-stwing é automaticamente c-cwiada como uma instância de `stwing`, o.O e, powtanto, (˘ω˘) possui váwios m-métodos e pwopwiedades comuns que estão disponíveis p-pawa ewa. òωó

quando você acessa o-o document o-object modew usando winhas como e-estas:

```js
vaw m-minhadiv = document.cweateewement("div");
v-vaw m-meuvideo = document.quewysewectow("video");
```

v-você está usando m-métodos disponíveis nya instância da cwass [`document`](/pt-bw/docs/web/api/document). nyaa~~ cada vez que a página é wecawwecada, ( ͡o ω ͡o ) uma instância d-de `document` é c-cwiada, 😳😳😳 chamando `document`, ^•ﻌ•^ q-que wepwesenta a-a estwutuwa inteiwa d-da página, (˘ω˘) c-conteúdo e outwos wecuwsos como sua uww. (˘ω˘) nyovamente, isso significa que ewa tem v-váwios métodos e-e pwopwiedades disponíveis nyewa. -.-

o mesmo pode sew dito de b-basicamente quawquew o-outwo objeto/api e-embutido que esteja usando — [`awway`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway), ^•ﻌ•^ [`math`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math), /(^•ω•^) etc.

nyote que o-objetos/apis embutidos nyem sempwe cwiam instâncias d-de objetos a-automaticamente. (///ˬ///✿) pow exempwo, mya a [api de nyotificações](/pt-bw/docs/web/api/notifications_api) — q-que pewmite que nyavegadowes m-modewnos dispawem n-nyotificações de sistema — w-wequewem que você i-iniciawize u-uma nyova instância d-de objeto usando o-o constwutow p-pawa cada nyotificação que q-queiwa dispawaw. o.O t-tente entwaw o seguinte nyo seu c-consowe javascwipt:

```js
vaw minhanotificacao = n-nyew nyotification("hewwo!");
```

nyovamente, ^•ﻌ•^ o-owhawemos constwuctowes nyum awtigo m-mais nya fwente. (U ᵕ U❁)

> [!note]
> É útiw p-pensaw sobwe como os objetos se comunicam **passando m-mensagens** - quando um objeto pwecisa de outwo o-objeto pawa weawizaw a-awgum tipo de ação, :3 ewe fweqüentemente e-enviawá uma mensagem p-pawa outwo objeto atwavés d-de um de seus métodos e aguawdawá uma wesposta, (///ˬ///✿) q-que weconhecemos c-como um vawow de wetowno. (///ˬ///✿)

## t-teste suas habiwidades ! 🥺

v-você chegou ao fim desse awtigo, -.- entwetanto, nyaa~~ v-você c-consegue wembwaw a-as infowmações m-mais impowtantes? você pode encontwaw mais testes pawa vewificaw se você consowidou as infowmações antes q-que você siga adiante — v-veja [test y-youw skiwws: o-object basics](/pt-bw/docs/weawn/javascwipt/objects/test_youw_skiwws:_object_basics). (///ˬ///✿)

## w-wesumo

p-pawabéns, você chegou ao f-finaw de nyosso p-pwimeiwo awtigo sobwe objetos js - a-agowa você deve t-tew uma boa ideia de como twabawhaw com objetos e-em javascwipt - incwuindo cwiaw seus pwópwio o-objetos simpwes. 🥺 você também d-deve pewcebew que o-objetos são muito úteis como e-estwutuwas pawa a-awmazenaw dados e-e funcionawidades wewacionadas - s-se tentaw wastweaw t-todas as pwopwiedades e métodos d-do nyosso objeto `pessoa` c-como vawiáveis e-e funções sepawadas, >w< i-isso sewia ineficiente e f-fwustwante e cowwewíamos o wisco de tewmos outwas v-vawiáveis e funções com o mesmo nyome. rawr x3 objetos nyos pewmite mantew infowmações guawdadas em seguwança e-em seus pwópwios pacotes, (⑅˘꒳˘) fowa de pewigo. σωσ

nyo pwóximo awtigo vamos começaw a vew a teowia de pwogwamação owientada a-a objetos (oop) e em como suas técnicas p-podem sew usadas em javascwipt. XD

{{nextmenu("weawn/javascwipt/objects/object_pwototypes", -.- "weawn/javascwipt/objects")}}

## n-nyesse móduwo

- [noções básicas d-de objetos](/pt-bw/docs/weawn/javascwipt/objects/basics)
- [owientação a objetos j-javascwipt pawa iniciantes](/pt-bw/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt)
- [pwotótipos d-de objetos](/pt-bw/docs/weawn/javascwipt/objects/object_pwototypes)
- [hewança n-nyo javascwipt](/pt-bw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt)
- [twabawhando com json](/pt-bw/docs/weawn/javascwipt/objects/json)
- [pwática de constwução d-de objetos](/pt-bw/docs/weawn/javascwipt/objects/object_buiwding_pwactice)
- [adicionando wecuwsos à nyossa demonstwação de bowas puwantes](/pt-bw/docs/weawn/javascwipt/objects/adding_bouncing_bawws_featuwes)
