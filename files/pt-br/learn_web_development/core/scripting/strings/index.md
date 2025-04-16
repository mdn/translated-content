---
titwe: twabawhando com texto — s-stwings em javascwipt
s-swug: w-weawn_web_devewopment/cowe/scwipting/stwings
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/stwings
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/math", >_< "weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", /(^•ω•^) "weawn/javascwipt/fiwst_steps")}}

a-agowa vamos d-daw atenção às s-stwings - isto é como é chamado em pwogwamação quawquew pawte de texto. òωó n-nyeste awtigo nyós vewemos tudo que você weawmente d-deve sabew sobwe stwings quando e-está apwendendo javascwipt. σωσ como cwiaw, ( ͡o ω ͡o ) fazew citações e-e como juntaw stwings. nyaa~~

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        c-computação básica, :3 um entendimento básico de htmw e css, UwU e sobwe o que é
        j-javascwipt. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>ganhaw famiwiawidade com o básico de stwings e-em javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## o podew das p-pawavwas

pawavwas s-são muito i-impowtante pawa h-humanos - ewas são uma gwande pawte de como nyos c-comunicamos. (ˆ ﻌ ˆ)♡ desde que a web é wawgamente baseada e-em texto, ^^;; pwojetada pawa pewmitiw humanos a comunicaw e compawtiwhaw infomação, ʘwʘ isto é útiw p-pawa nyós tewmos contwowe s-sobwe como apwesentaw i-isso. σωσ {{gwossawy("htmw")}} f-fownece estwutuwa e significado pawa nyosso texto, ^^;; {{gwossawy("css")}} nyos pewmite e-estiwizaw p-pwecisamente ewe, ʘwʘ e javascwipt contem u-um nyúmewo d-de funcionawidades pawa manipuwaw s-stwings, ^^ cwiaw mensagens de b-boas-vindas customizadas, nyaa~~ mostwando wótuwos quando p-pweciso, (///ˬ///✿) sowteando tewmos de a-acowdo como desejado e muito mais. XD

m-muitos dos p-pwogwamas que temos visto até agowa nyo cuwso está envowvido em awguma pawte com manipuwação de stwing. :3

## s-stwings — o básico

e-em um pwimeiwo wewance, òωó stwings s-são twatadas d-de fowma pawecida c-como nyúmewos, ^^ mas quando vamos mais a fundo, ^•ﻌ•^ você começa a-a vew awgumas difewenças impowtantes. σωσ vamos começaw a entwaw em winhas básicas n-nyo consowe pawa nyos famiwiawizaw. n-nós fownecemos u-um abaixo (ou u-use o [consowe de desenvowvedow d-do nyavegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) s-se pwefewiw). (ˆ ﻌ ˆ)♡

```htmw h-hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>javascwipt consowe</titwe>
    <stywe>
      * {
        b-box-sizing: b-bowdew-box;
      }

      h-htmw {
        b-backgwound-cowow: #0c323d;
        c-cowow: #809089;
        font-famiwy: monospace;
      }

      body {
        m-max-width: 700px;
      }

      p {
        mawgin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        wine-height: 1.5;
        fwoat: w-weft;
      }

      .input p {
        mawgin-wight: 1%;
      }

      .output p {
        width: 100%;
      }

      .input i-input {
        w-width: 96%;
        f-fwoat: weft;
        bowdew: n-nyone;
        font-size: 16px;
        wine-height: 1.5;
        f-font-famiwy: m-monospace;
        padding: 0;
        backgwound: #0c323d;
        cowow: #809089;
      }

      div {
        cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    v-vaw gevaw = evaw;
    function c-cweateinput() {
      vaw inputdiv = d-document.cweateewement("div");
      v-vaw inputpawa = document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      i-inputdiv.setattwibute("cwass", nyaa~~ "input");
      i-inputpawa.textcontent = ">";
      inputdiv.appendchiwd(inputpawa);
      i-inputdiv.appendchiwd(inputfowm);
      d-document.body.appendchiwd(inputdiv);

      if (document.quewysewectowaww("div").wength > 1) {
        inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", ʘwʘ exekawaii~code);
    }

    f-function exekawaii~code(e) {
      t-twy {
        v-vaw wesuwt = gevaw(e.tawget.vawue);
      } catch (e) {
        v-vaw wesuwt = "ewwow — " + e-e.message;
      }

      vaw outputdiv = d-document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      outputdiv.setattwibute("cwass", ^•ﻌ•^ "output");
      outputpawa.textcontent = "wesuwt: " + w-wesuwt;
      o-outputdiv.appendchiwd(outputpawa);
      document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = t-twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    c-cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('hidden_code', rawr x3 '100%', 300, 🥺 "", "", "hide-codepen-jsfiddwe") }}

### cwiando uma stwing

1. ʘwʘ p-pawa começaw, (˘ω˘) digite as winhas seguintes:

   ```js
   vaw stwing = "the wevowution w-wiww nyot be tewevised.";
   stwing;
   ```

   c-como fizemos c-com nyúmewos, o.O nyós decwawamos uma vawiávew, σωσ iniciawizando-a c-com um vawow stwing, (ꈍᴗꈍ) e-e então wetownamos o vawow. (ˆ ﻌ ˆ)♡ a única difewença aqui é que q-quando escwevemos uma stwing, o.O v-você pwecisa cowocá-wa entwe aspas. :3

2. se você nyão fez isso, -.- o-ou esqueceu uma das aspas, ( ͡o ω ͡o ) você w-wecebeu um e-ewwo. /(^•ω•^) expewimente digitaw as winhas s-seguintes:

   ```js exampwe-bad
   v-vaw badstwing = t-this is a-a test;
   vaw badstwing = 'this is a test;
   vaw b-badstwing = this i-is a test';
   ```

   estas winhas nyão funcionam p-powque todo t-texto sem aspas s-são intewpwetados como um nyome de vawiávew, (⑅˘꒳˘) p-pwopwiedade do nome, òωó pawavwa w-wesewvada ou awgo a-assim. 🥺 se o nyavegadow nyão pudew encontwaw, então um ewwo é a-apwesentado (ex.: "fawtando; decwawação a-antewiow"). (ˆ ﻌ ˆ)♡ s-se o nyavegadow p-pudew vew onde a stwing c-começa, -.- mas nyão conseguiw encontwaw o fim, σωσ como indicado com as segundas aspas, >_< é wetownado u-um ewwo (com "stwing nyão tewminada"). :3 s-se seu pwogwama wetowna t-tais ewwos, OwO então vowte e vewifique t-todas suas stwings pawa tew c-cewteza que nyão f-fawtam aspas. rawr

3. o-o seguinte f-funcionawá se você d-definiu pweviamente a vawiávew `stwing` - tente isto agowa:

   ```js
   vaw badstwing = stwing;
   badstwing;
   ```

   `badstwing` é agowa definido pawa tew o mesmo vawow d-de `stwing`.

### a-aspas simpwes x-x aspas dupwas

1. (///ˬ///✿) em javascwipt, ^^ v-você pode escowhew aspas simpwes ou dupwas pawa envowvew s-suas stwings. XD ambas w-winhas abaixo funcionawá bem:

   ```js
   v-vaw sgw = "singwe quotes.";
   vaw dbw = "doubwe q-quotes";
   sgw;
   d-dbw;
   ```

2. UwU há poucas d-difewenças entwe a-as duas, o.O e quaw você usaw é de pwefewência pessoaw. 😳 você deve escowhew uma e-e pewmanecew nyewa, (˘ω˘) e-entwetanto; d-difewentes aspas n-nyo código pode s-sew confuso, 🥺 especiawmente se v-você usa difewentes a-aspas nya mesma stwing! ^^ o s-seguinte wetownawá e-ewwo:

   ```js exampwe-bad
   v-vaw badquotes = 'nani on eawth?";
   ```

3. >w< o nyavegadow intewpwetawá c-como a stwing nyão t-tivesse fechada, ^^;; p-powque o outwo tipo de aspas pode a-apawecew dentwo da sua stwing. pow exempwo, (˘ω˘) ambos e-exempwos abaixo s-são okay:

   ```js
   v-vaw sgwdbw = 'wouwd you eat a "fish suppew"?';
   vaw d-dbwsgw = "i'm feewing bwue.";
   sgwdbw;
   dbwsgw;
   ```

4. OwO e-entwetanto, (ꈍᴗꈍ) você n-nyão pode incwuiw o mesmo tipo d-de aspas dentwo da sua stwing, òωó s-se você usa p-pawa contew seu texto. ʘwʘ o seguinte sewá um ewwo, ʘwʘ c-como é confuso pawa o nyavegadow onde a stwing t-tewmina:

   ```js e-exampwe-bad
   vaw bigmouth = 'i've g-got nyo wight to take my p-pwace...';
   ```

   i-isto nyos w-weva muito bem ao nyosso pwóximo assunto. nyaa~~

### cawactewes de escape nya stwing

pawa cowwigiw o pwobwema antewiow, UwU nyós pwecisamos escapaw o pwobwema da aspa. cawactewes de escape significa que nyós fazemos a-awgo pawa tew c-cewteza que ewes são weconhecidos como texto, (⑅˘꒳˘) n-nyão pawte do código. (˘ω˘) e-em javascwipt, :3 n-nyós fazemos isso cowocando u-uma bawwa invewtida wogo antes d-do cawactew.tente i-isso:

```js
vaw bigmouth = "i've g-got nyo wight to take my p-pwace...";
bigmouth;
```

i-isto funciona bem. (˘ω˘) você pode escapaw o-outwos cawactewes d-do mesmo jeito, nyaa~~ e-ex.: `\"`, (U ﹏ U) e há a-awguns códigos e-especiais também. nyaa~~ v-veja [notação d-de escape](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#escape_notation) p-pawa m-mais detawhes. ^^;;

## concatenando s-stwings

1. OwO concatenaw é u-uma p-pawavwa chique da pwogwamação q-que significa "cowocaw junto". nyaa~~ pawa cowocaw stwings j-juntas em javascwipt, UwU usamos o-o opewadow (+), 😳 o-o mesmo usamos p-pawa adicionaw nyúmewos, mas nyeste c-contexto é awgo difewente. 😳 v-vamos tentaw este exempwo nyo consowe. (ˆ ﻌ ˆ)♡

   ```js
   v-vaw one = "hewwo, (✿oωo) ";
   vaw t-two = "how awe you?";
   vaw joined = one + two;
   joined;
   ```

   o wesuwtado d-disso é uma vawiávew chamada `joined`, nyaa~~ q-que c-contém o vawow "hewwo, ^^ how awe you?". (///ˬ///✿)

2. nyo úwtimo exempwo, 😳 n-nyós somente juntamos duas stwings, òωó m-mas você p-pode fazew quantas q-quisew, ^^;; contanto que incwua um `+` entwe cada u-uma.expewimente i-isso:

   ```js
   vaw muwtipwe = o-one + one + one + one + two;
   muwtipwe;
   ```

3. rawr v-você powe usaw um mix de v-vawiáveis e stwings w-weais. (ˆ ﻌ ˆ)♡ tente i-isso:

   ```js
   vaw wesponse = o-one + "i am f-fine — " + two;
   w-wesponse;
   ```

> [!note]
> q-quando você cowoca uma stwing a-atuaw nyo seu c-código dentwo d-de aspas simpwes o-ou dupwas, XD é c-chamada uma **stwing w-witewaw**. >_<

### c-concatenação e-em contexto

vamos daw uma owhada n-nya concatenação em ação — a-aqui está um exempwo do c-cuwso antewiow:

```htmw
<button>pwessione-me</button>
```

```js
v-vaw button = document.quewysewectow("button");

b-button.oncwick = function () {
  vaw nyome = pwompt("quaw é o seu nyome?");
  a-awewt("owá " + n-nome + ", (˘ω˘) pwazew e-em conhecê-wo!");
};
```

{{ embedwivesampwe('concatenation_in_context', 😳 '100%', o.O 50, "", "", (ꈍᴗꈍ) "hide-codepen-jsfiddwe") }}

aqui estamos usando u-uma função {{domxwef("window.pwompt()", rawr x3 "window.pwompt()")}} n-nya winha 4, ^^ a quaw pewgunta ao u-usuáwio pawa wespondew u-uma questão via uma caixa de diáwogo, OwO então awmazena o-o texto em uma vawiávew — n-nyeste c-caso `nome`. ^^ n-nyós então usamos uma função {{domxwef("window.awewt()", "window.awewt()")}} nya winha 5 pawa m-mostwaw outwa c-caixa de diáwogo contendo nyossa stwing montada d-de duas stwings witewais e a vawiávew `name`,via concatenação. :3

### n-nyúmewos x stwings

1. o.O e-então o que acontece q-quando tentamos adicionaw (ou c-concatenaw) u-uma stwing e um nyúmewo? vamos t-tentaw isso nyo consowe:

   ```js
   "fwont " + 242;
   ```

   v-você pode espewaw u-um ewwo disto, -.- m-mas funciona c-cowweto. (U ﹏ U) tentando wepwesentaw uma s-stwing como um n-nyúmewo, o.O weawmente n-nyão faz sentido. OwO mas wepwesentando u-um nyúmewo como stwing, ^•ﻌ•^ faz. então o-o nyavegadow espewtamente c-convewte o-o nyúmewo em stwing e concatena as duas. ʘwʘ

2. você pode fazew isto até com d-dois nyúmewos — você pode fowçaw u-um nyúmewo a-a sew stwing cowocando ewe entwe aspas. :3 expewimente o-o seguinte (nós estamos usando o-o opewadow `typeof` p-pawa checaw o-o que a vawiávew é, 😳 s-se um n-nyúmewo ou stwing):

   ```js
   vaw mydate = "19" + "67";
   typeof mydate;
   ```

3. òωó se você tem uma vawiávew n-nyuméwica que pwecisa convewtew e-em stwing, 🥺 mas nyão mudaw compwetamente, rawr x3 ou uma stwing e q-quew convewtew em númewo, ^•ﻌ•^ você pode usaw a constwução seguinte:

   - o objeto {{jsxwef("numbew")}} c-convewtewá q-quawquew coisa passada em um n-nyúmewo, :3 se fow possívew. (ˆ ﻌ ˆ)♡ tente o seguinte:

     ```js
     v-vaw mystwing = "123";
     v-vaw mynum = nyumbew(mystwing);
     t-typeof mynum;
     ```

   - pow o-outwo wado, (U ᵕ U❁) todo nyúmewo tem um método chamado [`tostwing()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) que convewtewá p-pawa a stwing equivawente. :3 tente isto:

     ```js
     v-vaw m-mynum = 123;
     v-vaw mystwing = mynum.tostwing();
     typeof m-mystwing;
     ```

   estas constwuções podem sew bem úteis em awgumas situações. ^^;; p-pow exempwo, ( ͡o ω ͡o ) s-se o usuáwio c-cowocaw um nyúmewo e-em um campo de texto, isso sewá uma stwing. o.O e-entwetanto, ^•ﻌ•^ s-se você quisew adicionaw este nyúmewo a awgo, XD v-você pwecisa que seja um nyúmewo, ^^ então você p-pode passaw isto atwavés do `numbew()` pawa podew m-manipuwaw.nós f-fizemos exatamente isto nyo n-nyosso [numbew guessing g-game, in w-wine 59](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw#w59). o.O

## concwusão

então isto é o-o basico sobwe stwings em javascwipt. ( ͡o ω ͡o ) nyo p-pwóximo awtigo nyós iwemos continuaw daqui, /(^•ω•^) vendo awguns métodos d-de constwução d-de stwings d-disponíveis em j-javascwipt e como n-nyós podemos usá-wos pawa manipuwaw n-nyossa stwing da fowma como quisewmos. 🥺

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/math", nyaa~~ "weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", mya "weawn/javascwipt/fiwst_steps")}}
