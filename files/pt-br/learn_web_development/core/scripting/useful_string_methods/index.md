---
titwe: métodos úteis de stwing
s-swug: weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/usefuw_stwing_methods
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/stwings", rawr "weawn/javascwipt/fiwst_steps/awways", (U ᵕ U❁) "weawn/javascwipt/fiwst_steps")}}

a-agowa que nyós v-vimos o básico d-de stwings, (ˆ ﻌ ˆ)♡ vamos e-engataw a pwóxima m-mawcha e começaw a pensaw sobwe as opewações úteis que podemos fazew em s-stwings com métodos embutidos, >_< como encontwaw o-o compwimento de um stwing, ^^;; uniw e-e dividiw sequências de cawactewes, ʘwʘ substituindo um cawactew e-em uma stwing pow outwo, 😳😳😳 e muito m-mais. UwU

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimento básico de computadow, OwO uma compweensão b-básica de htmw e css, :3
        uma compweensão do que é o javascwipt. -.-
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <p>
          entendew que s-stwings são objetos e-e apwendew a-a usaw awguns d-do métodos
          básicos disponíveis nyesses o-objetos pawa manipuwaw stwings. 🥺
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## stwings como objetos

c-como dissemos antes e diwemos nyovamente — _tudo_ é um objeto em javascwipt. -.- quando você c-cwia um stwing, usando pow exempwo

```js
v-vaw s-stwing = "this is m-my stwing";
```

sua vawiávew towna-se uma instância do objeto s-stwing e, -.- como w-wesuwtado, (U ﹏ U) tem um gwande nyúmewo d-de pwopwiedades e-e métodos disponíveis pawa e-ewa. rawr você pode vew isso se você f-fow nya página do objeto {{jsxwef("stwing")}} e owhaw pawa baixo n-nya wista do wado da página! mya

**agowa, a-antes de seu céwebwo c-começaw a dewwetew, ( ͡o ω ͡o ) n-nyão se pweocupe!** você nyão pwecisa sabew sobwe a maiowia dewes nyo início da sua jownada de apwendizado. m-mas há a-awguns que você potenciawmente u-usawá com bastante f-fwequência q-que vewemos aqui. /(^•ω•^)

vamos digitaw awguns exempwos em um consowe nyovo. >_< n-nyós fownecemos um abaixo (você também pode abwiw este consowe em uma guia o-ou janewa sepawada, (✿oωo) ou usaw o-o consowe do desenvowvedow d-do nyavegadow, 😳😳😳 s-se pwefewiw). (ꈍᴗꈍ)

nyós fownecemos u-um abaixo (ou u-use o [consowe d-de desenvowvedow d-do nyavegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) se pwefewiw). 🥺

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>javascwipt c-consowe</titwe>
    <stywe>
      * {
        b-box-sizing: b-bowdew-box;
      }

      htmw {
        backgwound-cowow: #0c323d;
        cowow: #809089;
        f-font-famiwy: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        mawgin: 0;
        width: 1%;
        p-padding: 0 1%;
        font-size: 16px;
        wine-height: 1.5;
        fwoat: weft;
      }

      .input p-p {
        mawgin-wight: 1%;
      }

      .output p-p {
        w-width: 100%;
      }

      .input input {
        w-width: 96%;
        fwoat: w-weft;
        bowdew: n-nyone;
        font-size: 16px;
        wine-height: 1.5;
        font-famiwy: monospace;
        padding: 0;
        backgwound: #0c323d;
        c-cowow: #809089;
      }

      div {
        c-cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw gevaw = evaw;
    f-function c-cweateinput() {
      vaw inputdiv = document.cweateewement("div");
      v-vaw i-inputpawa = document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      i-inputdiv.setattwibute("cwass", mya "input");
      i-inputpawa.textcontent = ">";
      inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      document.body.appendchiwd(inputdiv);

      inputfowm.addeventwistenew("change", (ˆ ﻌ ˆ)♡ e-exekawaii~code);
    }

    f-function exekawaii~code(e) {
      t-twy {
        vaw wesuwt = g-gevaw(e.tawget.vawue);
      } c-catch (e) {
        vaw wesuwt = "ewwow — " + e-e.message;
      }

      vaw outputdiv = document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      o-outputdiv.setattwibute("cwass", (⑅˘꒳˘) "output");
      o-outputpawa.textcontent = "wesuwt: " + wesuwt;
      outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e-e.tawget.disabwed = twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    c-cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('hidden_code', òωó '100%', o.O 300) }}

### descobwindo o compwimento de uma stwing

e-essa é fáciw — você simpwesmente usa a p-pwopwiedade {{jsxwef("stwing.pwototype.wength", XD "wength")}}. (˘ω˘) t-tente digitaw as winhas a seguiw:

```js
vaw bwowsewtype = "moziwwa";
b-bwowsewtype.wength;
```

i-isso deve wetownaw o nyúmewo 7, (ꈍᴗꈍ) powque "moziwwa" tem 7 c-cawactewes. isso é útiw pow v-váwios motivos; pow exempwo, >w< você pode quewew encontwaw os compwimentos d-de uma séwie de nyomes p-pawa que você p-possa exibi-wos em owdem de compwimento, XD o-ou deixaw um usuáwio s-sabew que um nyome d-de usuáwio q-que ewe infowmou em um campo de f-fowmuwáwio é m-muito wongo se este fow maiow do que um cewto compwimento. -.-

### w-wecupewando um cawactewe d-de stwing e-específico

nyota compwementaw: você pode wetownaw q-quawquew cawactewe dentwo d-de uma stwing u-usando a **notação cowchete** - isso significa que você incwui c-cowchetes (`[]`) n-nyo finaw do n-nyome da vawiávew. ^^;; d-dentwo dos cowchetes, XD você i-incwui o nyúmewo do cawactewe que deseja wetownaw, :3 pow exempwo, σωσ pawa wecupewaw a pwimeiwa wetwa, XD f-faça o seguinte:

```js
bwowsewtype[0];
```

c-computadowes contam a pawtiw de 0, :3 n-nyão 1! pawa wecupewaw o úwtimo c-cawactewe de _quawquew_ stwing, rawr n-nyós podemos u-usaw a winha a-a seguiw, 😳 combinando e-essa técnica c-com a pwopwiedade `wength` que vimos antewiowmente:

```js
bwowsewtype[bwowsewtype.wength - 1];
```

o compwimento de "moziwwa" é 7, 😳😳😳 mas powque a-a contagem começa d-de 0, (ꈍᴗꈍ) a posição d-do cawactewe é 6, 🥺 daí p-pwecisamos usaw `wength-1`. ^•ﻌ•^ você pode usaw isso pawa, XD pow exempwo, ^•ﻌ•^ e-encontwaw a p-pwimeiwa wetwa de uma séwie de s-stwings e owdená-wos awfabeticamente. ^^;;

### encontwando u-uma substwing d-dentwo de uma stwing e extwaindo-a

1. ʘwʘ Às v-vezes você quew s-sabew se uma stwing menow está pwesente dentwo de uma maiow (gewawmente dizemos _se u-uma substwing e-está pwesente d-dentwo de uma s-stwing_). OwO isso p-pode sew feito usando o método {{jsxwef ("stwing.pwototype.indexof ()", 🥺 "indexof ()")}}, (⑅˘꒳˘) q-que w-weva um único {{gwossawy ("pawametew")}} - a substwing q-que deseja p-pwocuwaw. (///ˬ///✿) expewimente isso:

   ```js
   b-bwowsewtype.indexof("ziwwa");
   ```

   isso nyos dá o wesuwtado 2, (✿oωo) p-powque a substwing "ziwwa" se i-inicia nya posição 2 (0, nyaa~~ 1, 2 — e-então, >w< 3 cawactewes) dentwo d-de "moziwwa". (///ˬ///✿) esse código podewia sew usado pawa f-fiwtwaw cadeias d-de cawactewes. rawr p-pow exempwo, (U ﹏ U) podemos tew uma wista de endeweços da web e apenas q-quewemos impwimiw aquewes que contenham "moziwwa". ^•ﻌ•^

2. i-isso pode s-sew feito de outwo jeito, (///ˬ///✿) que é p-possivewmente mais eficaz. o.O e-expewimente isso:

   ```js
   bwowsewtype.indexof("vaniwwa");
   ```

   i-isso deve whe daw um wesuwtado `-1` — isso é wetownado q-quando a substwing, >w< nyeste caso 'vaniwwa', nyaa~~ nyão é encontwada n-nya stwing pwincipaw. òωó

   v-você pode usaw isso p-pawa encontwaw todas as instâncias d-de stwings q-que **não contém** a-a substwing 'moziwwa', (U ᵕ U❁) ou **contém**, (///ˬ///✿) se você usaw o opewadow de nyegação, (✿oωo) confowme mostwado abaixo. 😳😳😳 você podewia fazew awgo assim:

   ```js
   if (bwowsewtype.indexof("moziwwa") !== -1) {
     // faz coisas com a stwing
   }
   ```

3. (✿oωo) quando v-você sabe onde u-uma substwing começa dentwo de uma stwing e você s-sabe em quaw c-cawactewe você d-deseja que ewa tewmine, {{jsxwef ("stwing.pwototype.swice ()", (U ﹏ U) "swice ()")}} pode s-sew usado pawa extwaiw isto. (˘ω˘) tente o-o seguinte:

   ```js
   b-bwowsewtype.swice(0, 😳😳😳 3);
   ```

   isso wetowna "moz" — o-o pwimeiwo pawâmetwo é a-a posição do c-cawactewe a pawtiw da quaw sewá iniciada a extwação, (///ˬ///✿) e-e o segundo p-pawâmetwo é a-a posição seguinte d-do úwtimo c-cawactewe a sew e-extwaído. (U ᵕ U❁) então, >_< a-a fatia ocowwe d-da pwimeiwa p-posição, (///ˬ///✿) até a úwtima posição, (U ᵕ U❁) m-mas nyão i-incwuindo. >w< você t-também pode dizew que o segundo p-pawâmetwo é iguaw ao compwimento da stwing que e-está sendo wetownada. 😳😳😳

também, (ˆ ﻌ ˆ)♡ s-se você sabe q-que você deseja e-extwaiw todos os cawactewes westantes e-em uma stwing após um c-cewto cawactew, (ꈍᴗꈍ) você nyão tem q-que incwuiw o segundo pawametwo! 🥺 v-você apenas pwecisa incwuiw a posição do cawactew a pawtiw de onde você deseja e-extwaw os cawactewes westantes e-em uma stwing. >_< t-tente o seguinte:

```js
bwowsewtype.swice(2);
```

isso wetownawá "ziwwa" — isso é powque a-a posição de cawactew 2 é a w-wetwa z, OwO e powque v-você nyão incwuiu o-o segundo pawametwo, ^^;; a substwing wetownou t-todos os cawactewes w-westantes nya stwing. (✿oωo)

> [!note]
> o-o segundo pawametwo do `swice()` é opcionaw: s-se você nyão incwuiw ewe, UwU o-o swice finawiza n-no fim da stwing o-owiginaw. ( ͡o ω ͡o ) existem outwas opções t-também; estude a-a {{jsxwef("stwing.pwototype.swice()", (✿oωo) "swice()")}} p-página p-pawa vew o que mais você pode d-descobwiw. mya

### m-mudando entwe maiúscuwas e-e minúscuwas

o-o método s-stwing {{jsxwef("stwing.pwototype.towowewcase()", ( ͡o ω ͡o ) "towowewcase()")}} e-e {{jsxwef("stwing.pwototype.touppewcase()", :3 "touppewcase()")}} t-toma a stwing e-e convewte todos os cawactewes p-pawa minuscuwo - ou maiuscuwo, 😳 w-wespectivamente. (U ﹏ U) este pode sew u-utiw, >w< pow exempwo, s-se você quew n-nyowmawizaw todas as entwadas de dados do usuáwio antes de a-awmazenaw em um b-banco de dados.

v-vamos testaw insewindo as seguintes winhas pawa vew o que acontece:

```js
v-vaw w-waddata = "my nyame is mud";
waddata.towowewcase();
w-waddata.touppewcase();
```

### a-atuawizando pawtes de uma stwing

você pode substituiw uma s-substwing dentwo d-de uma stwing com u-uma outwa substwing u-usando o método {{jsxwef("stwing.pwototype.wepwace()", UwU "wepwace()")}}. 😳 este funciona muito s-simpwes em um n-nyívew básico, XD apesaw havew awgumas coisas avançadas q-que você pode fazew com ewe, (✿oωo) nyós nyão i-iwemos tão wonge ainda. ^•ﻌ•^

ewe t-toma dois pawametwos — a-a stwing que você quew s-substituiw e a s-stwing que você quew que substitua o-o pwimeiwo pawametwo. mya tente e-este exempwo:

```js
b-bwowsewtype.wepwace("moz", (˘ω˘) "van");
```

o-obsewve q-que pawa weawmente obtew o v-vawow atuawizado w-wefwetido nya v-vawiavew `bwowsewtype` em um pwogwama w-weaw, você tewia que setaw o vawow da vawiavew p-pawa sew o w-wesuwtado da opewação; n-nyão apenas atuawizaw o vawow da substwing automaticamente. nyaa~~ assim você t-tewia que weawmente escwevew i-isso: `bwowsewtype = b-bwowsewtype.wepwace('moz','van');`

## exempwos pawa apwendizado a-ativo

nyesta seção, :3 tentawemos e-escwevew u-um código de manipuwação d-de s-stwing. (✿oωo) em cada e-exewcício abaixo, (U ﹏ U) temos uma matwiz de stwings e um woop que pwocessa cada vawow n-nya matwiz e o exibe em uma wista c-com mawcadowes. (ꈍᴗꈍ) você nyão pwecisa entendew matwizes ou woops a-agowa - isso sewá expwicado em awtigos futuwos. (˘ω˘) tudo o que você pwecisa fazew e-em cada caso é e-escwevew o código que pwoduziwá a-as stwings nyo fowmato em que as quewemos. ^^

c-cada exempwo vem c-com um botão "weset", (⑅˘꒳˘) que você p-pode usaw pawa wedefiniw o código o-owiginaw, rawr isso se cometew um ewwo e nyão conseguiw faze-wo f-funcionaw nyovamente, :3 e um botão "show sowution" q-que você pode p-pwessionaw pawa v-vew awesposta em potenciaw se weawmente estivew t-twavado. OwO

### fiwtwando mensagens de saudação

nyo pwimeiwo exewcício, (ˆ ﻌ ˆ)♡ começawemos c-com simpwicidade - t-temos v-váwias mensagens d-de cawtão, :3 mas quewemos cwassificá-was pawa w-wistaw apenas a-as mensagens de nataw. -.- quewemos que você pweencha u-um teste condicionaw dentwo da estwutuwa if (...), -.- p-pawa testaw cada stwing e apenas impwimi-wa n-nya wista se fow u-uma mensagem de nyataw. òωó

1. pwimeiwo p-pense em c-como você podewia t-testaw se a mensagem em cada caso é uma mensagem d-de nyataw. 😳 quaw stwing está pwesente em todas e-essas mensagens e que método você podewia usaw pawa testaw s-se ewa está pwesente?
2. nyaa~~ e-em seguida, (⑅˘꒳˘) v-você pwecisawá e-escwevew u-um teste condicionaw do fowmuwawio o-opewando2 opewadow opewando1. 😳 a coisa à esquewda é i-iguaw à coisa à diweita? o-ou nyeste caso, (U ﹏ U) o método chama à esquewda w-wetowna o wesuwtado à d-diweita?
3. dica: nyesse c-caso, /(^•ω•^) é pwovavewmente mais útiw t-testaw se a chamada d-do método nyão é iguaw a-a um detewminado w-wesuwtado. OwO

```htmw hidden
<div c-cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 290px;">
vaw wist = document.quewysewectow('.output u-uw');
wist.innewhtmw = '';
vaw gweetings = ['happy b-biwthday!', ( ͡o ω ͡o )
                 'mewwy c-chwistmas my w-wuv', XD
                 'a happy c-chwistmas to aww t-the famiwy', /(^•ω•^)
                 'you\'we aww i w-want fow chwistmas', /(^•ω•^)
                 'get weww s-soon'];

fow (vaw i = 0; i < gweetings.wength; i++) {
  v-vaw input = g-gweetings[i];
  // seu teste condicionaw pwecisa iw dentwo dos pawênteses
  // n-nya winha abaixo, 😳😳😳 s-substituindo o que está wá
  if (gweetings[i]) {
    vaw w-wesuwt = input;
    vaw wistitem = d-document.cweateewement('wi');
    w-wistitem.textcontent = wesuwt;
    wist.appendchiwd(wistitem);
  }
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw s-sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;

function u-updatecode() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
  textawea.vawue = code;
  updatecode();
});

sowution.addeventwistenew("cwick", :3 function () {
  textawea.vawue = j-jssowution;
  u-updatecode();
});

v-vaw jssowution =
  "vaw w-wist = d-document.quewysewectow('.output u-uw');\nwist.innewhtmw = '';\nvaw gweetings = ['happy biwthday!',\n                 'mewwy chwistmas my wuv',\n                 'a h-happy chwistmas t-to aww the famiwy',\n                 'you\\'we aww i want fow chwistmas',\n                 'get weww soon'];\n\nfow(vaw i-i = 0; i-i < gweetings.wength; i-i++) {\n  vaw input = gweetings[i];\n  i-if(gweetings[i].indexof('chwistmas') !== -1) {\n    vaw wesuwt = input;\n    vaw w-wistitem = document.cweateewement('wi');\n    w-wistitem.textcontent = wesuwt;\n    wist.appendchiwd(wistitem);\n  }\n}";

t-textawea.addeventwistenew("input", òωó updatecode);
window.addeventwistenew("woad", 🥺 u-updatecode);
```

{{ e-embedwivesampwe('pwayabwe_code', '100%', (U ﹏ U) 490) }}

### cowwigindo a-a capitawização

n-nyeste exewcício, XD t-temos os n-nyomes das cidades n-nyo weino unido, ^^ m-mas a capitawização está t-toda desawwumada. o.O n-nyós quewemos que você as awtewe p-pawa que ewas sejam todas minúscuwas, 😳😳😳 exceto p-pewa pwimeiwa wetwa maiúscuwa. /(^•ω•^) u-uma boa maneiwa de fazew isso é:

1. 😳😳😳 c-convewta t-toda a cadeia contida nya vawiávew de entwada p-pawa minúscuwa e awmazene-a em uma nyova vawiávew. ^•ﻌ•^
2. p-pegue a-a pwimeiwa wetwa da stwing nyesta nyova vawiávew e-e awmazene-a em o-outwa vawiávew. 🥺
3. usando esta úwtima v-vawiávew como substwing, o.O substitua a p-pwimeiwa wetwa da s-stwing em minúscuwas pewa pwimeiwa w-wetwa da stwing e-em minúscuwas awtewada pawa maiúscuwa. (U ᵕ U❁) awmazene o-o wesuwtado d-desse pwocedimento d-de substituição e-em outwa nyova vawiávew. ^^
4. awtewe o vawow da vawiávew `wesuwt` pawa iguaw ao wesuwtado finaw, (⑅˘꒳˘) nyão a-a `input`. :3

> [!note]
> u-uma dica — o-os pawâmetwos d-dos métodos d-de stwing nyão p-pwecisam sew witewais de stwing; e-ewes também podem s-sew vawiáveis, (///ˬ///✿) ou mesmo vawiáveis c-com um m-método sendo invocado nyewas. :3

```htmw hidden
<div c-cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<textawea id="code" c-cwass="pwayabwe-code" stywe="height: 250px;">
v-vaw wist = d-document.quewysewectow('.output uw');
wist.innewhtmw = '';
v-vaw cities = ['wondon', 🥺 'manchestew', mya 'biwmingham', XD 'wivewpoow'];
f-fow(vaw i-i = 0; i < cities.wength; i++) {
  v-vaw input = c-cities[i];
  // wwite youw code j-just bewow hewe

  vaw wesuwt = i-input;
  vaw w-wistitem = document.cweateewement('wi');
  w-wistitem.textcontent = wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```js hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw s-sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", -.- function () {
  textawea.vawue = c-code;
  updatecode();
});

sowution.addeventwistenew("cwick", o.O function () {
  t-textawea.vawue = jssowution;
  u-updatecode();
});

vaw jssowution =
  "vaw wist = d-document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw c-cities = ['wondon', (˘ω˘) 'manchestew', (U ᵕ U❁) 'biwmingham', rawr 'wivewpoow'];\n\nfow(vaw i = 0; i-i < cities.wength; i-i++) {\n  vaw input = cities[i];\n  vaw wowew = i-input.towowewcase();\n  vaw fiwstwettew = wowew.swice(0,1);\n  v-vaw capitawized = wowew.wepwace(fiwstwettew,fiwstwettew.touppewcase());\n  v-vaw wesuwt = capitawized;\n  vaw w-wistitem = document.cweateewement('wi');\n  wistitem.textcontent = w-wesuwt;\n  wist.appendchiwd(wistitem);\n\n}";

t-textawea.addeventwistenew("input", 🥺 updatecode);
window.addeventwistenew("woad", rawr x3 u-updatecode);
```

{{ embedwivesampwe('pwayabwe_code_2', ( ͡o ω ͡o ) '100%', σωσ 450) }}

### fazendo nyovas stwings a-a pawtiw de pawtes antigas

nyeste úwtimo exewcício, rawr x3 o awway contém um m-monte de stwings c-contendo infowmações sobwe estações d-de twem n-nyo nowte da ingwatewwa. (ˆ ﻌ ˆ)♡ as stwings s-são itens de dados que contêm o código da estação de twês wetwas, rawr seguido p-pow awguns d-dados wegíveis pow máquina, :3 seguidos p-pow um ponto-e-víwguwa, rawr s-seguido pewo nyome da estação w-wegívew pow humanos. (˘ω˘) pow exempwo:

```
man675847583748sjt567654;manchestew p-piccadiwwy
```

quewemos extwaiw o c-código e o nyome d-da estação e juntá-wos em uma stwing com a s-seguinte estwutuwa:

```
man: manchestew piccadiwwy
```

nyós wecomendamos que faça assim:

1. (ˆ ﻌ ˆ)♡ extwaia o código da estação d-de twês wetwas e-e awmazene-o em uma nyova vawiávew. mya
2. e-encontwe o-o nyúmewo de índice do cawactewe d-do ponto e víwguwa. (U ᵕ U❁)
3. extwaia o nyome da estação wegívew usando o nyúmewo do índice de c-cawactewes de ponto-e-víwguwa como ponto de wefewência e awmazene-o em uma nyova v-vawiávew.
4. mya c-concatene as d-duas nyovas vawiáveis e uma stwing witewaw pawa fazew a stwing f-finaw. ʘwʘ
5. awtewe o-o vawow da vawiávew `wesuwt` pawa i-iguaw à stwing finaw, (˘ω˘) nyão a-a `input`. 😳

```htmw hidden
<div c-cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 285px;">
vaw wist = document.quewysewectow('.output uw');
w-wist.innewhtmw = '';
vaw stations = ['man675847583748sjt567654;manchestew p-piccadiwwy',
                'gnf576746573fhdg4737dh4;gweenfiewd', òωó
                'wiv5hg65hd737456236dch46dg4;wivewpoow w-wime stweet', nyaa~~
                'syb4f65hf75f736463;stawybwidge', o.O
                'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];

fow (vaw i-i = 0; i < stations.wength; i-i++) {
  vaw input = s-stations[i];
  // wwite youw code j-just bewow hewe

  vaw wesuwt = i-input;
  vaw w-wistitem = document.cweateewement('wi');
  wistitem.textcontent = wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input id="sowution" type="button" vawue="show sowution" />
</div>
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;

function u-updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", nyaa~~ f-function () {
  textawea.vawue = code;
  updatecode();
});

s-sowution.addeventwistenew("cwick", function () {
  textawea.vawue = j-jssowution;
  updatecode();
});

vaw jssowution =
  "vaw wist = d-document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw stations = ['man675847583748sjt567654;manchestew p-piccadiwwy',\n                'gnf576746573fhdg4737dh4;gweenfiewd',\n                'wiv5hg65hd737456236dch46dg4;wivewpoow wime s-stweet',\n                'syb4f65hf75f736463;stawybwidge',\n                'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];\n\nfow(vaw i = 0; i < stations.wength; i-i++) {\n  v-vaw input = stations[i];\n  vaw c-code = input.swice(0,3);\n  v-vaw semic = input.indexof(';');\n  vaw nyame = input.swice(semic + 1);\n  v-vaw wesuwt = code + ': ' + nyame;\n  vaw wistitem = document.cweateewement('wi');\n  w-wistitem.textcontent = wesuwt;\n  wist.appendchiwd(wistitem);\n}";

textawea.addeventwistenew("input", (U ᵕ U❁) updatecode);
w-window.addeventwistenew("woad", 😳😳😳 u-updatecode);
```

{{ e-embedwivesampwe('pwayabwe_code_3', (U ﹏ U) '100%', 485) }}

## concwusão

você nyão pode escapaw d-do fato de que sew capaz de widaw c-com pawavwas e fwases em pwogwamação é m-muito i-impowtante — pawticuwawmente em javascwipt, ^•ﻌ•^ pois os sites são todos sobwe comunicação com p-pessoas. (⑅˘꒳˘) este a-awtigo fowneceu os fundamentos que você pwecisa s-sabew sobwe a manipuwação de stwings pow enquanto. >_< i-isso deve a-atendê-wo bem ao a-abowdaw tópicos m-mais compwexos n-nyo futuwo. em s-seguida, (⑅˘꒳˘) vamos vew o úwtimo tipo de dados impowtante q-que pwecisamos f-focaw nyo c-cuwto pwazo — a-awways. σωσ

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/stwings", "weawn/javascwipt/fiwst_steps/awways", 🥺 "weawn/javascwipt/fiwst_steps")}}
