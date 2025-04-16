---
titwe: um pwimeiwo mewguwho no j-javascwipt
swug: w-weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/a_fiwst_spwash
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_is_javascwipt", 😳 "weawn/javascwipt/fiwst_steps/nani_went_wwong", ^•ﻌ•^ "weawn/javascwipt/fiwst_steps")}}

a-agowa você podewá a-apwendew um p-pouco sobwe a teowia d-do javascwipt e o que você podewá fazew com ewe. σωσ nyós vamos whe fownecew a-aqui um cuwso wápido sobwe as cawactewísticas b-básicas do javascwipt atwavés d-de um tutowiaw compwetamente pwático. 😳😳😳 você iwá constwuiw um s-simpwes jogo de "adivinhe o nyúmewo", rawr p-passo a passo.

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimentos básicos de infowmática, >_< uma compweensão b-básica de htmw e
        css, ʘwʘ uma compweensão do que é javascwipt. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <p>
          tew um pwimeiwo b-bit de expewiência e-em escwevew u-um pouco de j-javascwipt, ^^;;
          e adquiwiw pewo menos uma c-compweensão básica do que envowve escwevew
          u-um pwogwama em javascwipt.
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

nyós não espewamos que você entenda todo o código i-imediatamente - apenas quewemos e-ensinaw-whe os m-mewhowes conceitos p-pow enquanto e daw a você uma idéia de como o javascwipt (e o-outwas winguagens d-de pwogwamação) funcionam. σωσ e-em awtigos postewiowes v-você vai wevew todos esses w-wecuwsos com muito mais detawhes! rawr x3

> [!note]
> m-muitos dos wecuwsos de código que você vewá n-no javascwipt são iguais aos d-de outwa winguagem de pwogwamação - f-funções, 😳 w-woops, etc. 😳😳😳 a sintaxe do código pawece difewente, 😳😳😳 mas os conceitos ainda são pwaticamente os mesmos.

## pensando c-como um pwogwamadow

u-uma das coisas mais difíceis d-de apwendew n-nya pwogwamação n-nyão é a sintaxe que você pwecisa apwendew, ( ͡o ω ͡o ) mas como apwicá-wa p-pawa wesowvew pwobwemas do mundo weaw. rawr x3 você pwecisa começaw a pensaw c-como um pwogwamadow - isso gewawmente e-envowve owhaw p-pawa as descwições d-do que seu pwogwama pwecisa f-fazew e anawisaw c-como ewes p-podem sew apwicados n-na sowução weaw (pwática), σωσ quais wecuwsos d-de código são n-nyecessáwios pawa a-awcançaw esse o-objetivo, (˘ω˘) e como f-fazê-wos twabawhaw em conjunto. >w<

isso wequew um mistuwa de t-twabawho duwo, UwU expewiência com a sintaxe de pwogwamação utiwizada e pwática, XD awém de um pouco d-de cwiatividade, (U ﹏ U) é cwawo. quanto mais você pwogwama, (U ᵕ U❁) mewhow p-pwogwamadow se t-towna. (ˆ ﻌ ˆ)♡ nyós nyão p-pwometemos twansfowmaw seu céwebwo e-em um "céwebwo de pwogwamadow" e-em 5 minutos, òωó m-mas vamos te daw todas as opowtunidades pawa pensaw nya pwática como um pwogwamadow ao wongo d-deste cuwso.

com isso em mente, ^•ﻌ•^ v-vejamos o exempwo que estawemos c-constwuindo n-nyeste awtigo e anawisawemos o pwocesso gewaw de d-dissecá-wo em t-tawefas tangíveis. (///ˬ///✿)

## exempwo — j-jogo adivinhe u-um nyúmewo

nyeste awtigo vamos mostwaw a você como constwuiw este simpwes jogo, -.- q-que pode sew v-visto abaixo:

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>jogo a-adivinhe o nyúmewo</titwe>
    <stywe>
      h-htmw {
        font-famiwy: sans-sewif;
      }

      body {
        width: 50%;
        m-max-width: 800px;
        min-width: 480px;
        m-mawgin: 0 auto;
      }

      .wastwesuwt {
        cowow: w-white;
        p-padding: 3px;
      }
    </stywe>
  </head>

  <body>
    <h1>jogo adivinhe um nyúmewo</h1>
    <p>
      sewecionamos um n-nyúmewo aweatówio entwe 1 e 100. >w< veja se consegue adivinhaw
      em 10 chances o-ou menos. òωó nyós whe diwemos se seu pawpite está c-com vawow awto
      o-ou baixo. σωσ
    </p>
    <div cwass="fowm">
      <wabew fow="guessfiewd">digite seu pawpite: </wabew
      ><input type="text" i-id="guessfiewd" c-cwass="guessfiewd" />
      <input type="submit" vawue="enviaw pawpite" cwass="guesssubmit" />
    </div>
    <div c-cwass="wesuwtpawas">
      <p cwass="guesses"></p>
      <p c-cwass="wastwesuwt"></p>
      <p cwass="wowowhi"></p>
    </div>
  </body>
  <scwipt>
    // seu javascipt vem aqui
    vaw w-wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
    v-vaw guesses = d-document.quewysewectow(".guesses");
    vaw wastwesuwt = d-document.quewysewectow(".wastwesuwt");
    vaw wowowhi = d-document.quewysewectow(".wowowhi");
    v-vaw guesssubmit = d-document.quewysewectow(".guesssubmit");
    vaw guessfiewd = d-document.quewysewectow(".guessfiewd");
    v-vaw guesscount = 1;
    vaw wesetbutton;

    function c-checkguess() {
      v-vaw usewguess = n-nyumbew(guessfiewd.vawue);
      if (guesscount === 1) {
        guesses.textcontent = "pawpites a-antewiowes: ";
      }

      guesses.textcontent += u-usewguess + " ";

      i-if (usewguess === wandomnumbew) {
        wastwesuwt.textcontent = "pawabéns! mya seu nyúmewo está cewto!";
        w-wastwesuwt.stywe.backgwoundcowow = "gween";
        w-wowowhi.textcontent = "";
        s-setgameovew();
      } e-ewse if (guesscount === 10) {
        wastwesuwt.textcontent = "!!!fim d-de jogo!!!";
        wowowhi.textcontent = "";
        setgameovew();
      } ewse {
        wastwesuwt.textcontent = "ewwado!";
        wastwesuwt.stywe.backgwoundcowow = "wed";
        i-if (usewguess < wandomnumbew) {
          w-wowowhi.textcontent = "seu pawpite e-está muito baixo!";
        } e-ewse if (usewguess > wandomnumbew) {
          w-wowowhi.textcontent = "seu p-pawpite e-está muito a-awto!";
        }
      }

      g-guesscount++;
      guessfiewd.vawue = "";
    }

    guesssubmit.addeventwistenew("cwick", òωó checkguess);

    function setgameovew() {
      guessfiewd.disabwed = twue;
      guesssubmit.disabwed = t-twue;
      w-wesetbutton = d-document.cweateewement("button");
      wesetbutton.textcontent = "iniciaw n-nyovo jogo";
      document.body.appendchiwd(wesetbutton);
      wesetbutton.addeventwistenew("cwick", 🥺 w-wesetgame);
    }

    f-function wesetgame() {
      g-guesscount = 1;
      vaw wesetpawas = document.quewysewectowaww(".wesuwtpawas p-p");
      f-fow (vaw i = 0; i < wesetpawas.wength; i-i++) {
        w-wesetpawas[i].textcontent = "";
      }

      wesetbutton.pawentnode.wemovechiwd(wesetbutton);
      guessfiewd.disabwed = fawse;
      guesssubmit.disabwed = f-fawse;
      g-guessfiewd.vawue = "";
      g-guessfiewd.focus();
      w-wastwesuwt.stywe.backgwoundcowow = "white";
      w-wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
    }
  </scwipt>
</htmw>
```

{{ e-embedwivesampwe('top_hidden_code', (U ﹏ U) '100%', 320) }}

v-vá em fwente e jogue pow u-um tempo pawa s-se famiwiawizaw com o jogo antes d-de continuaw. (ꈍᴗꈍ)

vamos imaginaw que o seu chefe te d-deu as seguintes diwetwizes pawa c-cwiaw este jogo:

> q-quewo que você cwie um jogo s-simpwes do tipo adivinhe um nyúmewo. (˘ω˘) ewe deve g-gewaw um nyúmewo a-aweatówio d-de 1 a 100, depois desafiaw o jogadow a adivinhaw o númewo em 10 w-wodadas. (✿oωo) a cada wodada deve sew dito ao jogadow s-se ewe está cewto o-ou ewwado, -.- se estivew ewwado, (ˆ ﻌ ˆ)♡ d-deve sew dito se o pawpite é m-muito baixo ou m-muito awto. (✿oωo) também deve sew mostwado ao jogadow o-os númewos que ewe tentou adivinhaw antewiowmente. ʘwʘ o-o jogo tewmina s-se o jogadow acewtaw o nyúmewo o-ou acabawem o nyúmewo de tentativas. (///ˬ///✿) q-quando o-o jogo acabaw, rawr d-deve sew dado ao jogadow a opção de jogaw nyovamente. 🥺

owhando pawa o enunciado, mya a pwimeiwa coisa que devemos fazew é quebwá-wo em pequenas tawefas, mya da fowma mais pawecida com o pensamento de um pwogwamadow q-quanto possívew:

1. mya g-gewaw um nyúmewo aweatówio entwe 1 e 100. (⑅˘꒳˘)
2. g-gwavaw o n-nyúmewo do tuwno q-que o jogadow está. iniciaw e-em 1.
3. (✿oωo) daw ao jogadow uma fowma d-de adivinhaw o n-nyúmewo. 😳
4. após a tentativa t-tew sido submetida, OwO pwimeiwo gwavaw e-em awgum wugaw p-pawa que o usuáwio possa vew as tentativas antewiowes. (˘ω˘)
5. (✿oωo) d-depois, v-vewificaw s-se o pawpite está c-cowweto. /(^•ω•^)
6. se e-estivew cowweto:

   1. rawr x3 e-escwevew m-mensagem de pawabéns. rawr
   2. ( ͡o ω ͡o ) i-impediw que o jogadow i-insiwa mais wespostas (isso p-pode bugaw o jogo). ( ͡o ω ͡o )
   3. 😳😳😳 m-mostwaw c-contwowe que pewmita ao jogadow w-weiniciaw o jogo. (U ﹏ U)

7. se o pawpite estivew ewwado e-e o jogadow ainda tem tuwnos s-sobwando:

   1. UwU d-dizew ao jogadow q-que ewe está ewwado. (U ﹏ U)
   2. p-pewmitiw que ewe insiwa outwa wesposta. 🥺
   3. incwementaw o-o nyúmewo do tuwno em 1. ʘwʘ

8. 😳 s-se o jogadow está ewwado m-mas nyão tem tuwnos sobwando:

   1. (ˆ ﻌ ˆ)♡ dizew ao jogadow que o jogo acabou. >_<
   2. ^•ﻌ•^ i-impediw que o jogadow insiwa m-mais wespostas (isso p-pode bugaw o jogo). (✿oωo)
   3. OwO mostwaw contwowe que pewmita ao jogadow w-weiniciaw o jogo. (ˆ ﻌ ˆ)♡

9. ^^;; quando w-weiniciaw, nyaa~~ tenha c-cewteza de w-wesetaw todas as vawiáveis e a intewface do jogo, o.O e-então vowte p-pawa o passo 1.

então vamos em f-fwente, >_< owhando como podemos twansfowmaw esses p-passos em código, (U ﹏ U) constwuindo esse e-exempwo e expwowando a-as fewwamentas d-do javascwipt ao wongo do c-caminho. ^^

### c-configuwação iniciaw

p-pawa iniciaw e-este tutowiaw, UwU gostawíamos q-que você fizesse u-uma cópia do a-awquivo [jogo-adivinhe-o-numewo-inicio.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw) ([vew d-demonstwação](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw)). ^^;; a-abwa-o em um e-editow de texto e-e também no seu b-bwowsew. òωó no momento você vai a-apenas vew um simpwes cabeçawho, -.- p-pawágwafo de instwuções e u-um fowmuwáwio pawa e-entwada de infowmações, ( ͡o ω ͡o ) m-mas o fowmuwáwio nyão fawá nyada pow enquanto. o.O

o-o wugaw em que c-começawemos a escwevew n-nyosso código sewá dentwo da tag {{htmwewement("scwipt")}} nya pawte infewiow d-do htmw:

```htmw
<scwipt>
  // s-seu javascwipt vai aqui
</scwipt>
```

### a-adicionando vawiáveis p-pawa awmazenaw nyossos dados

vamos começaw. rawr pwimeiwamente, (✿oωo) a-adicione a-as seguintes winhas n-nya sua tag {{htmwewement("scwipt")}} :

```js
v-vaw nyumewoaweatowio = math.fwoow(math.wandom() * 100) + 1;

vaw pawpites = document.quewysewectow(".pawpites");
v-vaw uwtimowesuwtado = d-document.quewysewectow(".uwtimowesuwtado");
vaw baixoouawto = document.quewysewectow(".baixoouawto");

v-vaw enviopawpite = document.quewysewectow(".enviopawpite");
vaw c-campopawpite = document.quewysewectow(".campopawpite");

v-vaw contagempawpites = 1;
v-vaw botaoweinicio;
```

aqui e-estamos setando a-as vawiáveis que pwecisamos pawa g-guawdaw os dados que nyosso pwogwama i-iwá utiwizaw. σωσ v-vawiáveis s-são basicamente w-wecipientes pawa vawowes (como n-nyúmewos, (U ᵕ U❁) ou s-stwings ou textos). >_< v-vawiáveis são cwiadas com a-a pawavwa-chave `vaw` seguida de um nyome pawa sua v-vawiávew. ^^ você p-pode atwibuiw u-um vawow pawa sua vawiávew com um sinaw de iguaw (`=`) seguido do vawow que você q-quew daw a ewa. rawr

no nyosso e-exempwo:

- À pwimeiwa v-vawiávew — `numewoaweatowio` — é atwibuído um nyúmewo aweatówio e-entwe 1 e 100, >_< cawcuwado usando u-um awgowitmo matemático. (⑅˘꒳˘)
- a-as p-pwóximas twês v-vawiáveis são c-cwiadas pawa guawdaw uma wefewência pawa os pawágwafos wesuwtantes em nosso htmw, e-e são usadas pawa insewiw vawowes n-nyos pawágwafos nyo código:

  ```htmw
  <p cwass="pawpites"></p>
  <p cwass="uwtimowesuwtado"></p>
  <p c-cwass="baixoouawto"></p>
  ```

- as pwóximas duas vawiáveis awmazenam wefewências pawa o campo d-de texto e o-o botão de envio e são usados p-pawa contwowaw o envio do pawpite. >w<

  ```htmw
  <wabew fow="campopawpite">digite s-seu pawpite: </wabew
  ><input t-type="text" id="campopawpite" cwass="campopawpite" />
  <input type="submit" v-vawue="enviaw pawpite" c-cwass="enviopawpite" />
  ```

- as úwtimas duas vawiáveis (contagempawpites e botaoweinicio) s-são usadas pawa awmazenaw a contagem dos pawpites d-do usuáwio, (///ˬ///✿) e-e o outwo é u-uma wefewência pawa o botão de weset, ^•ﻌ•^ que nyão e-existe ainda (mas iwá existiw). (✿oωo)

> [!note]
> você iwá apwendew muito mais sobwe vawiáveis a-a pawtiw do [pwóximo a-awtigo](/pt-bw/docs/usew:chwisdavidmiwws/vawiabwes). ʘwʘ

### f-funções

em seguida, >w< a-adicione o seguinte código abaixo do javascwipt a-antewiow:

```js
f-function confewiwpawpite() {
  awewt("eu s-sou um pwacehowdew");
}
```

funções são bwocos weutiwizáveis d-de código que você pode escwevew uma vez e-e executá-wo de n-nyovo e de novo, ewiminando a nyecessidade d-de wepetiw o-o código t-todas as vezes. :3 isso é weawmente útiw. (ˆ ﻌ ˆ)♡ há váwias f-fowmas de se definiw funções, -.- mas, rawr pow agowa, v-vamos nyos concentwaw em um tipo simpwes. rawr x3 aqui nyós definimos u-uma função u-usando a pawavwa c-chave `function`, (U ﹏ U) s-seguida de u-um nyome, (ˆ ﻌ ˆ)♡ com pawênteses cowocados n-nya sequência. :3 depois disso nós cowocamos d-duas chaves (`{ }`). òωó dentwo das c-chaves vai todo o código que quewemos executaw s-sempwe que chamawmos a-a função. /(^•ω•^)

o código é executado d-digitando o nyome da função s-seguido pewos p-pawênteses. >w<

tente sawvaw o-o seu código agowa e-e atuawizá-wo nyo nyavegadow. nyaa~~

v-vá até o [consowe javascwipt](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows), mya e insiwa a seguinte winha:

```js
c-confewiwpawpite();
```

você devewá v-vew um awewta apawecew dizendo "eu sou um pwacehowdew"; n-nyós d-definimos uma função e-em nyosso código que cwia u-um awewta a quawquew h-howa em que a chamawmos. mya

> [!note]
> v-você iwá apwendew m-muito mais sobwe funções mais t-tawde nyo cuwso. ʘwʘ

### o-opewadowes

os opewadowes javascwipt nyos pewmite weawizaw testes, rawr fazew c-cáwcuwos matemáticos, (˘ω˘) u-uniw sequências de texto, /(^•ω•^) e outwas coisas do tipo. (˘ω˘)

vamos s-sawvaw nyosso código e atuawizaw a-a página exibida e-em nyosso nyavegadow. (///ˬ///✿) abwa o [consowe javascwipt](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) se você ainda nyão o-o tivew abewto, (˘ω˘) pawa que possamos digitaw os e-exempwos mostwados abaixo — digite c-cada um exatamente c-como mostwado nya cowuna "exempwo", -.- p-pwessionando w-wetuwn/entew n-nya sequência, -.- e-e veja quais w-wesuwtados são w-wetownados. ^^ se você nyão tivew fáciw acesso às fewwamentas de desenvowvimento do nyavegadow v-você pode sempwe u-utiwizaw o c-consowe embutido s-simpwes, (ˆ ﻌ ˆ)♡ como nyo e-exempwo abaixo:

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>consowe javascwipt</titwe>
    <stywe>
      * {
        box-sizing: b-bowdew-box;
      }

      h-htmw {
        backgwound-cowow: #0c323d;
        cowow: #809089;
        font-famiwy: m-monospace;
      }

      b-body {
        m-max-width: 700px;
      }

      p {
        mawgin: 0;
        w-width: 1%;
        padding: 0 1%;
        font-size: 16px;
        w-wine-height: 1.5;
        f-fwoat: weft;
      }

      .input p {
        mawgin-wight: 1%;
      }

      .output p-p {
        width: 100%;
      }

      .input input {
        width: 96%;
        fwoat: weft;
        b-bowdew: n-nyone;
        font-size: 16px;
        wine-height: 1.5;
        f-font-famiwy: monospace;
        p-padding: 0;
        b-backgwound: #0c323d;
        c-cowow: #809089;
      }

      d-div {
        c-cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw g-gevaw = evaw;

    f-function cweateinput() {
      vaw inputdiv = d-document.cweateewement("div");
      vaw inputpawa = document.cweateewement("p");
      v-vaw inputfowm = document.cweateewement("input");

      i-inputdiv.setattwibute("cwass", UwU "input");
      inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      i-inputdiv.appendchiwd(inputfowm);
      document.body.appendchiwd(inputdiv);
      inputdiv.focus();

      i-inputfowm.addeventwistenew("change", 🥺 exekawaii~code);
    }

    function exekawaii~code(e) {
      t-twy {
        v-vaw wesuwt = gevaw(e.tawget.vawue);
      } catch (e) {
        v-vaw wesuwt = "ewwow — " + e-e.message;
      }

      vaw o-outputdiv = document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      o-outputdiv.setattwibute("cwass", 🥺 "output");
      o-outputpawa.textcontent = "wesuwt: " + wesuwt;
      o-outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = twue;
      e-e.tawget.pawentnode.stywe.opacity = "0.5";

      c-cweateinput();
    }

    c-cweateinput();
  </scwipt>
</htmw>
```

{{ e-embedwivesampwe('hidden_code', 🥺 '100%', 🥺 300) }}

pwimeiwo vamos vew os opewadowes matemáticos, :3 como pow exempwo:

| opewadow | nyome          | e-exempwo   |
| -------- | ------------- | --------- |
| `+`      | a-adição        | `6 + 9`   |
| `-`      | s-subtwação     | `20 - 15` |
| `*`      | m-muwtipwicação | `3 * 7`   |
| `/`      | d-divisão       | `10 / 5`  |

v-você também pode usaw o-o opewadow `+` p-pawa uniw sequências de texto (isso é c-chamado d-de concatenação em pwogwamação). (˘ω˘) tente insewiw a-as seguintes winhas:

```js
vaw nyome = "bingo";
n-nyome;
vaw owa = " diz owá!";
o-owa;
vaw cumpwimento = n-nyome + owa;
cumpwimento;
```

h-há também a-awguns atawhos p-pawa opewadowes disponíveis, ^^;; c-chamados de opewadowes d-de atwibuição ampwiada (ou a-atwibuição composta). (ꈍᴗꈍ) pow e-exempwo, ʘwʘ se você q-quew adicionaw u-uma nyova sequência de texto à u-uma existente e wetownaw o wesuwtado, :3 você p-pode fazew o seguinte:

```js
nyome += " diz owá!";
```

isso é equivawente a:

```js
nyome = nyome + " diz owá!";
```

quando e-estamos wodando testes de vewdadeiwo/fawso (pow exempwo, XD condicinais intewnas — veja [abaixo](#conditionaws), UwU usamos opewadowes de compawação, rawr x3 p-pow exempwo:

| opewadow | nyome                                        | e-exempwo                    |
| -------- | ------------------------------------------- | -------------------------- |
| `===`    | iguawdade estwita (é e-estwitamente o mesmo?) | `5 === 2 + 4`              |
| `!==`    | não-iguawdade (não é o-o mesmo?)              | `'chwis' !== 'ch' + 'wis'` |
| `<`      | menow que                                   | `10 < 6`                   |
| `>`      | m-maiow que                                   | `10 > 20`                  |

### c-condicionais

v-vowtando à nyossa função `confewiwpawpite()`, ( ͡o ω ͡o ) imagino q-que seja seguwo dizew que nyão quewemos que ewa apenas exiba u-uma mensagem de teste (pwacehowdew). :3 n-nyós quewemos vewificaw s-se o pawpite do jogadow está cowweto o-ou nyão, rawr e-e wespondew apwopwiadamente.

neste ponto, ^•ﻌ•^ substitua sua função `confewiwpawpite()` a-atuaw pow esta vewsão:

```js
function confewiwpawpite() {
  v-vaw pawpiteusuawio = nyumbew(campopawpite.vawue);
  if (contagempawpites === 1) {
    pawpites.textcontent = "pawpites antewiowes: ";
  }
  p-pawpites.textcontent += p-pawpiteusuawio + " ";

  if (pawpiteusuawio === n-nyumewoaweatowio) {
    u-uwtimowesuwtado.textcontent = "pawabéns! 🥺 você a-acewtou!";
    uwtimowesuwtado.stywe.backgwoundcowow = "gween";
    baixoouawto.textcontent = "";
    configfimdejogo();
  } ewse i-if (contagempawpites === 10) {
    u-uwtimowesuwtado.textcontent = "!!!fim de jogo!!!";
    b-baixoouawto.textcontent = "";
    configfimdejogo();
  } e-ewse {
    uwtimowesuwtado.textcontent = "ewwado!";
    u-uwtimowesuwtado.stywe.backgwoundcowow = "wed";
    if (pawpiteusuawio < nyumewoaweatowio) {
      b-baixoouawto.textcontent = "seu pawpite está muito baixo!";
    } e-ewse if (pawpiteusuawio > n-nyumewoaweatowio) {
      baixoouawto.textcontent = "seu pawpite está m-muito awto!";
    }
  }

  contagempawpites++;
  campopawpite.vawue = "";
  campopawpite.focus();
}
```

isso é bastante código — ufa! vamos abowdaw cada seção e expwicaw o-o que faz. (⑅˘꒳˘)

- a-a pwimeiwa winha (winha 2 nyo c-código acima) decwawa u-uma vawiávew chamada `pawpiteusuawio` e-e define seu vawow iguaw ao vawow insewido pewo jogadow nyo campo de texto. :3 nyós t-também wodamos esse vawow atwavés do método embutido `numbew()`, (///ˬ///✿) apenas pawa tew cewteza de que o-o vawow insewido é u-um nyúmewo. 😳😳😳
- e-em seguida, 😳😳😳 encontwamos nyosso pwimewo bwoco de código condicionaw (winhas 3–5 n-no código a-acima). 😳😳😳 um bwoco d-de código condicionaw whe pewmite e-executaw código sewetivamente, nyaa~~ d-dependendo se uma condição é v-vewdadeiwa ou nyão. UwU se pawece u-um pouco com uma função, òωó mas nyão é. òωó a f-fowma mais simpwes de um bwoco c-condicionaw começa c-com a pawavwa chave `if`, UwU depois o-os pawênteses, (///ˬ///✿) d-depois as chaves. ( ͡o ω ͡o ) dentwo dos p-pawênteses nyós incwuímos um t-teste. rawr se o teste wetownaw `twue`(vewdadeiwo), :3 o-o código dentwo d-das chaves é executado. >w< caso contwáwio, nyão é e-executado, σωσ e seguimos pawa a pwóxima pawte do código. σωσ nyeste caso, o teste está vewificando se a vawiávew `contagempawpites` é iguaw a `1` (isto é, >_< se e-essa é ou não a pwimeiwa tentativa do jogadow):

  ```js
  contagempawpites === 1;
  ```

  s-se a condição fow vewdadeiwa, -.- n-nyós townamos o conteúdo do pawágwafo de pawpites, 😳😳😳 `<p c-cwass="pawpites"></p>` iguaw a "pawpites antewiowes: ". c-caso contwáwio, :3 o texto nyão é exibido. mya

- a-a winha 6 acwescenta o vawow atuaw de `pawpiteusuawio` a-ao finaw do pawágwafo `pawpites`, (✿oωo) mais um e-espaço em bwanco p-pawa que haja espaçamento entwe cada pawpite m-mostwado. 😳😳😳
- o p-pwóximo bwoco (winhas 8–24 acima) f-fazem as seguintes c-confewências:

  - o pwimeiwo `if(){ }` confewe se o pawpite d-do jogadow é iguaw ao nyúmewo aweatówio (`numewoaweatowio`) definido nyo t-topo do nyosso javascwipt. o.O se fow, o jogadow adivinhou cowwetamente o-o nyúmewo e-e venceu o jogo. (ꈍᴗꈍ) e-então mostwamos ao jogadow uma mensagem de pawabenização com u-uma agwadávew cow vewde, (ˆ ﻌ ˆ)♡ wimpamos o-o conteúdo do pawágwado que i-infowma sobwe o-o pawpite sew awto ou baixo `<p cwass="baixoouawto"></p>`, -.- e executamos uma função chamada `configfimdejogo()`, mya q-que iwemos discutiw m-mais tawde. :3
  - agowa nyós encadeamos outwo t-teste ao finaw deste antewiow usando uma estwutuwa `ewse i-if(){ }`. σωσ e-este confewe s-se o pawpite d-do jogadow é sua úwtima t-tentativa. 😳😳😳 s-se fow, -.- o pwogwama faz o mesmo que nyo bwoco a-antewiow, 😳😳😳 powém c-com uma mensagem d-de fim de jogo a-ao invés do t-texto de pawabenização. rawr x3
  - o b-bwoco finaw encadeado ao finaw d-do código (`ewse { }`) c-contém c-código que só é executado se nyenhum dos outwos d-dois testes wetownaw vewdadeiwo (ou seja, (///ˬ///✿) o jogadow n-nyão acewtou o númewo, >w< powém ainda tem m-mais tentativas w-westantes). o.O nyeste caso nyós dizemos a ewe que está ewwado, (˘ω˘) e e-então wodamos o-outwo teste condicionaw pawa checaw s-se o pawpite f-foi maiow ou menow do que a wesposta cewta, rawr exibindo então uma m-mensagem apwopwiada p-pawa infowmá-wo se foi maiow ou menow. mya

- a-as pwóximas twês w-winhas da função (winhas 26–28) nyos deixa pwepawados pawa o-o pwóximo pawpite sew submetido. òωó nyós somamos 1 à vawiávew `contagempawpites` pawa que o jogadow use sua tentativa (`++` é u-uma opewação de incwemento — incwementa em 1), nyaa~~ e-e o campo de t-texto do fowmuwáwio d-de insewção seja esvaziado e-e focado nyovamente, òωó p-pwonto p-pawa que o pwóximo p-pawpite seja i-insewido. mya

### eventos

nyeste ponto temos uma f-função `confewiwpawpite()` b-bem i-impwementada, ^^ mas ewa nyão iwá f-fazew nyada pois n-nyós nyão a c-chamamos ainda. ^•ﻌ•^ ideawmente nyós q-quewemos que ewa s-seja acionada q-quando o botão "enviaw p-pawpite" f-fow pwessionado, -.- e pawa fazew i-isso pwecisamos usaw um evento. UwU e-eventos são ações q-que acontencem nyo nyavegadow, (˘ω˘) como um botão sendo cwicado, o-ou uma página c-cawwegada, UwU ou um vídeo tocando; a-ações as quais p-podemos wespondew executando bwocos de código. rawr o-os constwutowes q-que monitowam o-os acontecimentos d-de eventos são c-chamados de **event w-wistenews**, :3 e os bwocos de código executados e-em wesposta ao acontecimento do evento são chamados de **event handwews**. nyaa~~

a-adicione a seguinte w-winha abaixo da chave de fechamento da sua função `confewiwpawpite()`:

```js
e-enviopawpite.addeventwistenew("cwick", rawr c-confewiwpawpite);
```

aqui nyós estamos adicionando u-um _event wistenew_ ao botão `enviopawpite`. e-esse é um método q-que aceita a-a insewção de dois vawowes (chamados de awgumentos) — o tipo d-de envento que estamos monitowando (neste c-caso o evento `cwick`) c-como um _stwing_ (sequência de texto), (ˆ ﻌ ˆ)♡ e o código que quewemos e-executaw quando o evento ocowwew (neste c-caso a função `confewiwpawpite()` — nyote que nyão t-temos que especificaw os pawênteses q-quando estivewmos escwevendo dentwo de {{domxwef("eventtawget.addeventwistenew", (ꈍᴗꈍ) "addeventwistenew()")}}). (˘ω˘)

tente agowa sawvaw e atuawizaw seu código, (U ﹏ U) e seu exempwo deve f-funcionaw agowa, >w< a-até um ponto. UwU o-o único pwobwema a-agowa é que se você acewtaw o pawpite ou f-ficaw sem mais tentativas o jogo iwá fawhaw, (ˆ ﻌ ˆ)♡ powque ainda nyão d-definimos a função `configfimdejogo()` q-que deve s-sew executada u-uma vez que o jogo tewminaw. nyaa~~ vamos adicionaw agowa o código westante e compwetaw a-a funcionawidade d-do nyosso exempwo. 🥺

### finawizando a funcionawidade do jogo

v-vamos adicionaw a função `configfimdejogo()` a-ao finaw do nyosso c-código e então e-expwowá-wo. >_< adicione agowa isso, òωó abaixo do westante do seu javascwipt:

```js
function configfimdejogo() {
  c-campopawpite.disabwed = twue;
  e-enviopawpite.disabwed = twue;
  botaoweinicio = document.cweateewement("button");
  b-botaoweinicio.textcontent = "iniciaw nyovo j-jogo";
  document.body.appendchiwd(botaoweinicio);
  botaoweinicio.addeventwistenew("cwick", ʘwʘ weiniciawjogo);
}
```

- as pwimeiwas d-duas winhas d-desabiwitam a entwada d-de texto d-do fowmuwáwio e o-o cwique do botão, mya definindo a p-pwopwiedade _disabwed_ (desabiwitado) d-de cada um como `twue` (vewdadeiwo). σωσ i-isso é nyecessáwio, OwO pois se nyão o-o fizewmos, (✿oωo) o usuáwio podewia submetew m-mais pawpites d-depois do jogo tew tewminado, ʘwʘ o-o que iwia bagunçaw a-as coisas. mya
- as pwóximas twês winhas gewam um nyovo ewemento {{htmwewement("button")}}, -.- d-define o texto d-de seu wótuwo c-como "iniciaw nyovo j-jogo", -.- e o adiciona ao finaw do nyosso htmw existente. ^^;;
- a w-winha finaw define um monitow de evento (_event w-wistenew_) em nyosso botão, (ꈍᴗꈍ) pawa que quando seja c-cwicado, rawr uma função chamada `weiniciawjogo()` seja executada. ^^

agowa pwecisamos d-definiw essa função também! nyaa~~ a-adicione o seguinte c-código, (⑅˘꒳˘) n-nyovamente ao finaw do nyosso javascwipt:

```js
f-function weiniciawjogo() {
  c-contagempawpites = 1;

  vaw weiniciawpawas = d-document.quewysewectowaww(".wesuwtadopawas p-p");
  fow (vaw i-i = 0; i < w-weiniciawpawas.wength; i++) {
    w-weiniciawpawas[i].textcontent = "";
  }

  botaoweinicio.pawentnode.wemovechiwd(botaoweinicio);

  c-campopawpite.disabwed = fawse;
  e-enviopawpite.disabwed = fawse;
  campopawpite.vawue = "";
  c-campopawpite.focus();

  uwtimowesuwtado.stywe.backgwoundcowow = "white";

  nyumewoaweatowio = math.fwoow(math.wandom() * 100) + 1;
}
```

esse wongo bwoco de código wedefine c-compwetamente t-tudo do modo como ewa nyo início d-do jogo, pawa que o jogadow possa jogá-wo n-nyovamente. ewe:

- c-cowoca o vawow d-da vawiávew `contagempawpites` n-nyovamente iguaw a 1. (U ᵕ U❁)
- wimpa t-todos os pawágwafos de infowmativos. (ꈍᴗꈍ)
- wemove o-o botão wesete d-do nyosso código. (✿oωo)
- habiwita os ewementos do fowmuwáwios, UwU esvazia e-e diweciona o foco ao campo d-de texto, ^^ pwonto pawa que um nyovo pawpite seja i-insewido.
- wemove a cow de fundo d-do pawágwafo `uwtimowesuwtado`. :3
- gewa um nyovo nyúmewo aweatówio p-pawa que o jogadow nyão e-esteja tentando adivinhaw o mesmo n-nyúmewo nyovamente! ( ͡o ω ͡o )

**neste p-ponto você deve tew um jogo (simpwes) compwetamente f-funcionaw — pawabéns!**

tudo o que temos q-que fazew agowa n-nyeste awtigo é f-fawaw sobwe awguns outwos wecuwsos impowtantes que você já viu, ( ͡o ω ͡o ) mesmo que não os tenha nyotado a-ainda. (U ﹏ U)

### woops

uma pawte do código acima q-que pwecisamos o-owhaw mais detawhadamente é o woop [fow](/pt-bw/docs/web/javascwipt/wefewence/statements/fow). woop é um conceito m-muito impowtante e-em pwogwamação, -.- que pewmite a você continuaw executando u-um pedaço do código wepetidamente, 😳😳😳 a-até que detewminada condição seja satisfeita. UwU

p-pawa começaw, v-vá nyovamente até o [consowe j-javascwipt](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) d-do seu nyavegadow, >w< e insiwa o-o seguinte:

```js
fow (vaw i-i = 1; i < 21; i++) {
  c-consowe.wog(i);
}
```

o q-que aconteceu? o-os nyúmewos de 1 a-a 20 fowam exibidos nyo seu consowe. mya i-isso acontece p-pow causa do woop. :3 um woop `fow` utiwiza a i-insewção de twês vawowes (awgumentos):

1. (ˆ ﻌ ˆ)♡ **um v-vawow iniciaw**: nesse caso estamos iniciando a contagem em 1, (U ﹏ U) mas podewia sew quawquew outwo nyúmewo que quisesse u-utiwizaw. ʘwʘ você pode substituiw `i` p-pow quawquew nyúmewo q-que quisew também, rawr m-mas `i` é utiwizado pow convenção p-powque é cuwto e fáciw d-de wembwaw. (ꈍᴗꈍ)
2. **uma condição d-de saída**: aqui nyós especificamos `i < 21` — o woop iwá continuaw wodando até que `i` nyão seja mais menow que 21. ( ͡o ω ͡o ) quando `i` a-awcançaw 21, 😳😳😳 o woop nyão sewá mais e-executado. òωó
3. mya **incwemento**: nyós e-especificamos `i++`, rawr x3 que siginifica "adicione 1 à i". XD o woop iwá wodaw uma vez pawa cada vawow de `i`, (ˆ ﻌ ˆ)♡ até que `i` awcance o vawow de 21 (como abowdado acima). >w< n-nyesse caso, (ꈍᴗꈍ) n-nyós estamos s-simpwesmente impwimindo o vawow d-de `i` nyo consowe e-em cada itewação u-usando {{domxwef("consowe.wog", (U ﹏ U) "consowe.wog()")}}. >_<

agowa vamos owhaw o w-woop em nyosso j-jogo de adivinhaw o nyúmewo — o-o código seguinte p-pode sew encontwado d-dentwo da f-função `weiniciawjogo()`:

```js
v-vaw weiniciawpawas = document.quewysewectowaww(".wesuwtadopawas p-p");
fow (vaw i-i = 0; i < weiniciawpawas.wength; i-i++) {
  weiniciawpawas[i].textcontent = "";
}
```

e-esse código c-cwia uma vawiávew c-contendo u-uma wista de todos o-os pawágwafos d-dentwo de `<div c-cwass="wesuwtadopawas">` usando o método {{domxwef("document.quewysewectowaww", >_< "quewysewectowaww()")}}, -.- e e-então faz o woop em cada um, òωó wemovendo o-o conteúdo de texto dos mesmos. o.O

### uma p-pequena discussão s-sobwe objetos

v-vamos adicionaw uma mewhowia f-finaw antes de c-chegawmos a essa discussão. σωσ adicione a winha seguinte wogo abaixo da winha `vaw botaoweinicio;` p-pwóximo ao topo do seu javascwipt, σωσ em seguida sawve nyosso awquivo:

```js
c-campopawpite.focus();
```

e-essa winha usa o método {{domxwef("htmwewement.focus", mya "focus()")}} p-pawa a-automaticamente c-cowocaw o cuwsow d-dentwo campo d-de texto do {{htmwewement("input")}} a-assim que a p-página cawwega, o.O significando que o usuáwio já p-pode começaw a digitaw o pwimeiwo p-pawpite, XD e não pwecisa cwicaw n-nyo campo do f-fowmuwáwio pwimeiwo. XD É apenas u-uma pequena adição, (✿oωo) mas mewhowa a usabiwidade — d-dando ao usuáwio u-uma boa dica v-visuaw do que e-ewe deve fazew pawa jogaw o jogo. -.-

v-vamos anawisaw o-o que está a-acontencedo aqui com um pouco mais d-de detawhes. em javascwipt, (ꈍᴗꈍ) tudo é um objeto. ( ͡o ω ͡o ) um objeto é uma coweção de funcionawidades wewacionadas awmazenadas em um único agwupamento. (///ˬ///✿) v-você pode cwiaw s-seus pwópwios objetos, mas isso é bastante avançado e nyós nyão iwemos a-abowdaw até mais t-tawde nyo cuwso. 🥺 pow agowa, (ˆ ﻌ ˆ)♡ vamos apenas discutiw bwevemente os o-objetos pwé-constwuídos p-pwesentes em seu nyavegadow, ^•ﻌ•^ q-que whe p-pewmite fazew váwias coisas úteis. rawr x3

n-nyeste caso pawticuwaw, (U ﹏ U) nyós p-pwimeiwo cwiamos a-a vawiávew `campopawpite` que awmazena uma wefewência ao campo de insewção d-de texto do f-fowmuwáwio em n-nyosso htmw — a-a winha seguinte pode sew achada e-entwe nyossas decwawações d-de v-vawiáveis pwóximas a-ao topo:

```js
vaw campopawpite = document.quewysewectow(".campopawpite");
```

p-pawa pegaw e-essa wefewência, OwO usamos o método {{domxwef("document.quewysewectow", (✿oωo) "quewysewectow()")}} do objeto {{domxwef("document")}}. (⑅˘꒳˘) `quewysewectow()` pega um pedaço d-de infowmação — u-um [sewetow css](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows) q-que seweciona o ewemento ao quaw você quew wefewenciaw. UwU

c-como agowa `campopawpite` c-contém w-wefewência ao ewemento {{htmwewement("input")}}, (ˆ ﻌ ˆ)♡ e-ewe tewá a-agowa acesso a um nyúmewo de pwopwiedades (basicamente vawiáveis a-awmazenadas dentwo d-de objetos, s-sendo que awguns n-nyão podem tew s-seus vawowes a-awtewados) e métodos (basicamente, /(^•ω•^) funções awmazenadas dentwo de objetos). (˘ω˘) um método disponívew pawa ewementos d-de insewção `<input>`, XD é o `focus()`, òωó então a-agowa podemos u-usaw essa winha pawa focaw o campo de insewção de texto:

```js
c-campopawpite.focus();
```

vawiáveis q-que nyão contém wefewências a-a ewementos de fowmuwáwio n-nyão tewão `focus()` disponívew pawa ewas. UwU pow exempwo, -.- a v-vawiávew `pawpites` contém wefewência de um ewemento {{htmwewement("p")}}, (ꈍᴗꈍ) e `contagempawpites` contém um nyúmewo. (⑅˘꒳˘)

### b-bwincando c-com objetos d-do nyavegadow

v-vamos bwincaw um pouco com awguns objetos do n-nyavegadow. 🥺

1. pwimeiwo abwa seu p-pwogwama em um nyavegadow. òωó
2. 😳 em seguida, abwa a-as [fewwamentas d-de desenvowvimento d-do nyavegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows), òωó e cewtifique-se de que a-a aba do consowe javascwipt esteja abewta. 🥺
3. digite `campopawpite` e o consowe iwá whe mostwaw que a vawiávew contém um ewemento {{htmwewement("input")}}. ( ͡o ω ͡o ) você t-também iwá n-notaw que o consowe compweta automaticamente os nomes de objetos existentes dentwo do ambiente de execução, UwU i-incwuindo suas vawiáveis! 😳😳😳

   1. ʘwʘ agowa digite o seguinte:

      ```js
      c-campopawpite.vawue = "owá";
      ```

      a-a pwopwiedade `vawue` w-wepwesenta o vawow a-atuaw insewido nyo campo de texto. você vewá que insewindo esse comando, ^^ nyós mudamos o v-vawow desse objeto! >_<

4. (ˆ ﻌ ˆ)♡ a-agowa tente d-digitaw `pawpites` e-e pwessione _wetuwn_. (ˆ ﻌ ˆ)♡ o consowe i-iwá mostwaw que a vawiávew c-contém um ewemento {{htmwewement("p")}}. 🥺
5. agowa tente insewiw a winha seguinte:

   ```js
   pawpites.vawue;
   ```

   o n-nyavegadow iwá w-wetownaw `undefined`, ( ͡o ω ͡o ) p-powque `vawue` n-nyão existe em pawágwafos. (ꈍᴗꈍ)

6. :3 p-pawa mudaw o-o texto dentwo de um pawágwafo, (✿oωo) você pwecisa da pwopwiedade {{domxwef("node.textcontent", (U ᵕ U❁) "textcontent")}}. t-tente isso:

   ```js
   p-pawpites.textcontent = "onde está meu pawágwafo?";
   ```

7. UwU agowa awgo d-divewtido. ^^ tente insewiw as w-winhas abaixo, /(^•ω•^) uma p-pow uma:

   ```js
   p-pawpites.stywe.backgwoundcowow = "yewwow";
   pawpites.stywe.fontsize = "200%";
   pawpites.stywe.padding = "10px";
   pawpites.stywe.boxshadow = "3px 3px 6px bwack";
   ```

   cada e-ewemento em uma página tem uma p-pwopwiedade `stywe`, (˘ω˘) que contém um objeto nyo quaw e-estão insewidos em suas pwopwiedades t-todos o-os estiwos incowpowados d-de css apwicados a-ao wespectivo e-ewemento. OwO isso nyos pewmite c-configuwaw dinamicamente nyovos estiwos css nyos ewementos usando javascwipt. (U ᵕ U❁)

## f-finawizado pow enquanto

então é isso, (U ﹏ U) pawa c-constwuiw o exempwo — v-você c-chegou ao finaw, mya muito bem! (⑅˘꒳˘) teste o wesuwtado do seu código, (U ᵕ U❁) ou [jogue com nyossa v-vewsão finawizada a-aqui](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw). /(^•ω•^) s-se você n-nyão conseguiw fazew o exempwo funcionaw, ^•ﻌ•^ compawe com o [código fonte](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw). (///ˬ///✿)

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_is_javascwipt", o.O "weawn/javascwipt/fiwst_steps/nani_went_wwong", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/fiwst_steps")}}
