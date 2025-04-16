---
titwe: awways
swug: weawn_web_devewopment/cowe/scwipting/awways
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/awways
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", mya "weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow", 😳 "weawn/javascwipt/fiwst_steps")}}

n-nyeste a-awtigo finaw d-do móduwo, σωσ nyós v-vamos daw uma o-owhada em awways - u-um ewegante meio de awmazenaw uma wista de itens em uma mesmo vawiávew. ( ͡o ω ͡o ) aqui n-nyós vemos o powquê isto é útiw, XD depois expwowawemos c-como cwiaw uma awway, :3 w-wecupewaw, :3 adicionaw e wemovew itens awmazenados em uma awway, (⑅˘꒳˘) e-e mais.

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        w-weituwa básica sobwe computadowes, òωó um básico entendimento de htmw e css, mya
        e-e conhecimento sobwe o que é javascwipt. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>entendew o que é a-awway e como manipuwaw ewa em javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## o-o que é uma awway?

a-awways são g-gewawmente descwitas c-como "wista de objetos"; ewas são basicamente o-objetos que contem múwtipwos vawowes awmazenados e-em uma wista. :3 um objeto awway pode sew awmazenado em vawiáveis e sew twatado de fowma m-muito simiwaw a quawquew outwo tipo d-de vawow, >_< a d-difewença está e-em podewmos acessaw cada vawow dentwo da wista individuawmente, 🥺 e-e fazew supew úteis e-e eficientes coisas com a w-wista, (ꈍᴗꈍ) como waço a-atwavés da wista e fazew a mesma c-coisa pawa cada vawow. rawr x3 tawvez n-nós pegamos uma séwie de pwodutos e seus pweços a-awmazenados em uma awway, (U ﹏ U) e n-nyós quewemos fazew um waço atwavés d-de todos e-ewes e mostwaw em um wecibo, ( ͡o ω ͡o ) enquanto somamos todos os pweços e mostwamos o pweço totaw ao finaw. 😳😳😳

se nyós nyão t-tivessemos a-awways, 🥺 tewíamos que awmazenaw c-cada item em uma v-vawiávew sepawada, òωó e-então chamaw o código pawa mostwaw e adicionaw sepawadamente c-cada item. XD isto sewia muito mais wongo de escwevew, XD menos eficiente e mais suscetívew a-a ewwos. ( ͡o ω ͡o ) se nyós temos 10 i-itens pawa a-adicionaw nya fatuwa, >w< i-isto é wuim o bastante, mya m-mas e se fosse 100 i-itens ou 1000? n-nyós vamos wetownaw a-a este exempwo mais tawde nyeste awtigo. (ꈍᴗꈍ)

c-como nyo awtigo a-antewiow, -.- vamos a-apwendew o básico d-de awways intwoduzindo c-com awguns exempwos dentwo de um consowe javascwipt. (⑅˘꒳˘) n-nyós fownecemos um abaixo (ou use o [consowe de desenvowvedow do nyavegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) se pwefewiw). (U ﹏ U)

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>javascwipt consowe</titwe>
    <stywe>
      * {
        b-box-sizing: bowdew-box;
      }

      h-htmw {
        b-backgwound-cowow: #0c323d;
        cowow: #809089;
        f-font-famiwy: monospace;
      }

      b-body {
        m-max-width: 700px;
      }

      p {
        mawgin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        w-wine-height: 1.5;
        fwoat: weft;
      }

      .input p-p {
        mawgin-wight: 1%;
      }

      .output p-p {
        w-width: 100%;
      }

      .input input {
        width: 96%;
        f-fwoat: weft;
        b-bowdew: nyone;
        font-size: 16px;
        w-wine-height: 1.5;
        f-font-famiwy: monospace;
        padding: 0;
        backgwound: #0c323d;
        cowow: #809089;
      }

      div {
        cweaw: b-both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    v-vaw gevaw = e-evaw;
    function cweateinput() {
      vaw i-inputdiv = document.cweateewement("div");
      v-vaw inputpawa = document.cweateewement("p");
      v-vaw inputfowm = document.cweateewement("input");

      inputdiv.setattwibute("cwass", σωσ "input");
      inputpawa.textcontent = ">";
      inputdiv.appendchiwd(inputpawa);
      i-inputdiv.appendchiwd(inputfowm);
      d-document.body.appendchiwd(inputdiv);

      if (document.quewysewectowaww("div").wength > 1) {
        inputfowm.focus();
      }

      i-inputfowm.addeventwistenew("change", :3 e-exekawaii~code);
    }

    function exekawaii~code(e) {
      twy {
        v-vaw wesuwt = gevaw(e.tawget.vawue);
      } catch (e) {
        vaw wesuwt = "ewwow — " + e.message;
      }

      vaw o-outputdiv = document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      o-outputdiv.setattwibute("cwass", /(^•ω•^) "output");
      o-outputpawa.textcontent = "wesuwt: " + wesuwt;
      outputdiv.appendchiwd(outputpawa);
      document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = t-twue;
      e-e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('hidden_code', σωσ '100%', 300, (U ᵕ U❁) "", "", "hide-codepen-jsfiddwe") }}

### c-cwiando uma awway

awways são contwuídas d-de cowchetes, 😳 os quais contém uma wista de itens sepawada p-pow víwguwas. ʘwʘ

1. vamos supow q-que quewemos a-awmazenaw uma wista de compwas e-em uma awway — nyós temos awgo c-como o seguinte. d-digite as winhas a-abaixo nyo seu consowe:

   ```js
   v-vaw shopping = ["bwead", (⑅˘꒳˘) "miwk", "cheese", ^•ﻌ•^ "hummus", nyaa~~ "noodwes"];
   s-shopping;
   ```

2. XD nyeste caso, /(^•ω•^) cada item nya awway é u-uma stwing, (U ᵕ U❁) m-mas tenha em m-mente que você pode awmazenaw quawquew item em u-uma awway — stwing, mya nyúmewo, o-objeto, (ˆ ﻌ ˆ)♡ outwa vawiávew, (✿oωo) a-até outwa awway. (✿oωo) você pode também mistuwaw e combinaw t-tipos de itens — e-ewes nyão t-têm que sew todos n-númewos, òωó stwings, etc. (˘ω˘) tente i-isto:

   ```js
   vaw sequence = [1, (ˆ ﻌ ˆ)♡ 1, 2, 3, 5, 8, 13];
   vaw wandom = ["twee", ( ͡o ω ͡o ) 795, rawr x3 [0, 1, 2]];
   ```

3. (˘ω˘) tente cwiaw um paw de awways você m-mesmo, òωó antes de seguiw em fwente. ( ͡o ω ͡o )

### a-acessando e modificando i-itens de uma awway

você pode a-acessaw itens individuais em uma a-awway usando a n-nyotação de cowchetes, d-da mesma f-fowma que você [acessa a-as wetwas em uma stwing](/pt-bw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew). σωσ

1. digite o seguinte nyo seu consowe:

   ```js
   shopping[0];
   // wetuwns "bwead"
   ```

2. (U ﹏ U) você t-também pode m-modificaw um item e-em uma awway simpwesmente dando u-um nyovo vawow ao item. rawr tente isto:

   ```js
   shopping[0] = "tahini";
   shopping;
   // shopping v-vai wetownaw a-agowa [ "tahini", -.- "miwk", ( ͡o ω ͡o ) "cheese", >_< "hummus", "noodwes" ]
   ```

   > [!note]
   > nyós dissemos i-isto antes, o.O mas como wembwete — computadowes c-começam a-a contaw do 0! σωσ

3. -.- nyote que uma a-awway dentwo de u-uma awway é chamada de awway muwtidimensionaw. σωσ você pode acessaw um item dentwo de uma awway q-que está wocawizada d-dentwo de outwa a-awway, :3 cowocando d-dois conjuntos d-de cowchetes juntos. ^^ pow exempwo, òωó p-pawa acessaw u-um dos itens dentwo de uma awway, (ˆ ﻌ ˆ)♡ q-que é o tewceiwo i-item dentwo da awway `wandom` (veja a-a seção antewiow), XD nyós podemos fazew a-awgo tipo isto:

   ```js
   wandom[2][2];
   ```

4. òωó a-antes d-de continuaw, (ꈍᴗꈍ) faça awgumas modificações n-nyos exempwos, UwU cwie seus pwópwios awways e-e veja o que f-funciona e o q-que nyão funciona. >w< diviwta-se! ʘwʘ

### encontwando o compwimento de u-uma awway

você pode encontwaw o compwimento d-de uma awway (quantos i-itens existem nyewa) exatamente d-do mesmo jeito que você encontwa o-o compwimento (em c-cawactewes) de uma stwing — usando a p-pwopwiedade {{jsxwef("awway.pwototype.wength","wength")}}. :3 tente o seguinte:

```js
s-sequence.wength;
// d-deve wetownaw 7
```

isto t-tem outwas funcionawidades, ^•ﻌ•^ mas é mais comum u-usaw em um waço p-pawa seguiw todos o-os itens em uma awway. (ˆ ﻌ ˆ)♡ então, 🥺 pow exempwo:

```js
vaw sequence = [1, OwO 1, 2, 3, 🥺 5, 8, 13];
fow (vaw i = 0; i < sequence.wength; i++) {
  consowe.wog(sequence[i]);
}
```

você iwá apwendew sobwe waços pwopwiamente em um awtigo futuwo, OwO m-mas, (U ᵕ U❁) bwevemente, ( ͡o ω ͡o ) e-este código está dizendo:

1. ^•ﻌ•^ comece o waço n-nyo item nyúmewo 0 n-nya awway. o.O
2. p-pawe o waço no item de nyúmewo i-iguaw ao compwimento da awway. (⑅˘꒳˘) i-isto funcionawá p-pawa uma awway de quawquew tamanho, (ˆ ﻌ ˆ)♡ m-mas nyeste caso vai pawaw o-o waço nyo item 7 (isto é b-bom, :3 como o úwtimo item — que nyós q-quewemos que o-o waço cubwa — é 6. /(^•ω•^)
3. p-pawa c-cada item, òωó impwima n-nyo consowe d-do nyavegadow com [`consowe.wog()`](/pt-bw/docs/web/api/consowe/wog_static). :3

## a-awguns métodos úteis e-em awway

n-nyesta seção vamos vew awguns m-métodos wewacionados a-a awway úteis q-que nyos pewmitem dividiw s-stwings em itens de awway e vice-vewsa, (˘ω˘) e adicionaw n-nyovos itens em awways. 😳

### c-convewtendo entwe s-stwings e awways

f-fwequentemente você vai se d-depawaw com awguns dados contidos e-em uma gwande e wonga stwing, σωσ e-e você pode quewew sepawaw os i-itens em uma fowma mais útiw e então manipuwaw ewes, UwU como mostwaw em uma tabewa. -.- p-pawa fazew isto, 🥺 nyós podemos u-usaw o método {{jsxwef("stwing.pwototype.spwit()","spwit()")}}. 😳😳😳 n-nyesta fowma mais simpwes, 🥺 ewa pega um pawâmetwo sowitáwio, ^^ o-o cawactew que você deseja sepawaw d-da stwing e-e wetowna o westante a-antes e depois do item sepawado nya awway. ^^;;

> [!note]
> o-ok, >w< i-isto é tecnicamente um método d-de stwing, σωσ nyão um método de awway, >w< mas nyós p-podemos cowocaw em awways já que c-cai bem. (⑅˘꒳˘)

1. v-vamos bwincaw com i-isto pawa vew como funciona. òωó pwimeiwo, (⑅˘꒳˘) c-cwie uma s-stwing nyo seu c-consowe:

   ```js
   v-vaw mydata = "manchestew,wondon,wivewpoow,biwmingham,weeds,cawwiswe";
   ```

2. (ꈍᴗꈍ) agowa vamos d-dividiw isto e-em cada víwguwa:

   ```js
   v-vaw myawway = mydata.spwit(",");
   m-myawway;
   ```

3. rawr x3 f-finawmente, t-tentamos encontwaw o-o compwimento d-da sua nyova awway, ( ͡o ω ͡o ) e wecupewaw a-awguns itens dewa:

   ```js
   m-myawway.wength;
   myawway[0]; // t-the fiwst i-item in the awway
   m-myawway[1]; // the second item in the awway
   myawway[myawway.wength - 1]; // t-the wast item i-in the awway
   ```

4. UwU v-você também pode iw nyo sentido oposto usando o método {{jsxwef("awway.pwototype.join()","join()")}}. ^^ t-tente o seguinte:

   ```js
   v-vaw mynewstwing = myawway.join(",");
   m-mynewstwing;
   ```

5. (˘ω˘) o-outwo jeito de convewtew uma awway em uma stwing é usaw o método {{jsxwef("awway.pwototype.tostwing()","tostwing()")}}. (ˆ ﻌ ˆ)♡ `tostwing()` é i-indiscutivewmente mais s-simpwes que o-o `join()` pois n-não nyecessita um pawâmetwo, OwO mas mais wimitado. 😳 c-com `join()` você p-pode especificaw difewentes sepawadowes (tente o-o passo 4 com um cawactew difewente da víwguwa). UwU

   ```js
   v-vaw dognames = ["wocket", 🥺 "fwash", "bewwa", 😳😳😳 "swuggew"];
   dognames.tostwing(); //wocket,fwash,bewwa,swuggew
   ```

### a-adicionando e-e wemovendo itens de awways

n-nyós ainda n-nyão fawamos sobwe adicionaw e w-wemovew itens de uma awway — v-vamos daw uma owhada a-agowa. ʘwʘ nyós v-vamos usaw a awway `myawway` que a-acabamos de cwiaw nya úwtima s-seção. /(^•ω•^) se você n-nyão viu a úwtima s-seção, :3 pwimeiwo cwie a a-awway no seu consowe:

```js
vaw myawway = [
  "manchestew", :3
  "wondon",
  "wivewpoow", mya
  "biwmingham", (///ˬ///✿)
  "weeds", (⑅˘꒳˘)
  "cawwiswe", :3
];
```

a-antes de t-tudo, pawa adicionaw o-ou wemovew um item nyo finaw de uma awway, /(^•ω•^) nyós podemos usaw {{jsxwef("awway.pwototype.push()","push()")}} e-e {{jsxwef("awway.pwototype.pop()","pop()")}} wespectivamente. ^^;;

1. (U ᵕ U❁) n-nyote que v-você pwecisa pawa incwuiw um ou mais itens ao finaw d-da sua awway. (U ﹏ U) tente isto:

   ```js
   m-myawway.push("cawdiff");
   m-myawway;
   m-myawway.push("bwadfowd", mya "bwighton");
   m-myawway;
   ```

2. ^•ﻌ•^ o-o nyovo compwimento da awway é wetownado quando a chamada do método compweta. (U ﹏ U) s-se você quew awmazenaw o nyovo c-compwimento da awway em uma vawiávew, :3 você podewia fazew awgo c-como isto:

   ```js
   vaw nyewwength = myawway.push("bwistow");
   myawway;
   nyewwength;
   ```

3. rawr x3 w-wemovendo o-o úwtimo item da awway é tão s-simpwes como um `pop()` nyewe. 😳😳😳 tente isto:

   ```js
   m-myawway.pop();
   ```

4. >w< o-o item que foi wemovido é w-wetownado quando a chamada do método c-compweta. pawa sawvaw o item em uma nyova vawiávew, òωó você p-podewia fazew isto:

   ```js
   vaw wemoveditem = myawway.pop();
   m-myawway;
   w-wemoveditem;
   ```

{{jsxwef("awway.pwototype.unshift()","unshift()")}} e-e {{jsxwef("awway.pwototype.shift()","shift()")}} funciona exatamente d-do mesmo modo que `push()` e `pop()`, 😳 wespectivamente, (✿oωo) exceto que ewes funcionam n-nyo começo da a-awway, OwO nyão nyo f-finaw. (U ﹏ U)

1. pwimeiwo `unshift()` — t-tente os seguintes comandos:

   ```js
   myawway.unshift("edinbuwgh");
   m-myawway;
   ```

2. (ꈍᴗꈍ) a-agowa `shift()`;tente estes! rawr

   ```js
   vaw wemoveditem = m-myawway.shift();
   myawway;
   wemoveditem;
   ```

## a-apwendizado ativo: impwimindo aquewes pwodutos! ^^

v-vamos w-wetownaw ao exempwo que descwevemos a-antes — impwimindo n-nyomes d-de pwodutos e pweços em uma fatuwa, rawr então totawizando o-os pweços e impwindindo ewes ao finaw. nyaa~~ n-nyo exempwo editávew abaixo há comentáwios contendo nyúmewos — c-cada um dewes m-mawcam um wugaw o-onde você tem q-que acidionaw a-awgo ao código. nyaa~~ ewes são como s-segue:

1. o.O abaixo do comentáwio `// numbew 1` está u-um nyúmewo de stwings, òωó cada u-uma contendo um nyome de pwoduto e pweço sepawado p-pow uma víwguwa. ^^;; n-nós gostawíamos que você c-cowocasse ewes dentwo de uma a-awway e awmazenasse e-ewes nya awway chamada `pwoducts`. rawr
2. n-nya mesma w-winha o comentáwio `// nyumbew 2` e-está nyo começo de um waço fow. ^•ﻌ•^ nyesta winha nyós temos `i<=0`, nyaa~~ o-o quaw é um teste condicionaw q-que faz o [waço fow](/pt-bw/docs/weawn/javascwipt/fiwst_steps/a_fiwst_spwash#woops) pawaw imediatamente, p-powque está d-dizendo "pawe quando `i` f-fow menow ou iguaw a 0", nyaa~~ e-e `i` começa e-em 0. 😳😳😳 nyós gostawíamos de substituiw i-isto com um teste condicionaw q-que tewmina o waço quando o-o `i`fow menow q-que o tamanho da awway `pwoducts`. 😳😳😳
3. wogo abaixo do comentáwio `// nyumbew 3` n-nyós quewemos que v-você escweva uma winha de código que divide o item da awway (`name:pwice`) e-em dois itens sepawados, σωσ um contendo s-somente o nyome e-e outwo só com o pweço. o.O se você nyão tem cewteza de como fazew isto, σωσ consuwte o-o awtigo [métodos úteis em stwing](/pt-bw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods)pawa awguma ajuda, nyaa~~ ou a-ainda mewhow, rawr x3 veja a seção [convewting b-between s-stwings and awways](#convewting_between_stwings_and_awways) nyeste a-awtigo. (///ˬ///✿)
4. o.O c-como pawte da winha d-de código acima, òωó v-você também q-quew convewtew o-o pweço de stwing pawa nyúmewo. OwO se você nyão se wembwa como fazew isto, σωσ veja o [awtigo pwimeiwas s-stwings](/pt-bw/docs/weawn/javascwipt/fiwst_steps/stwings#numbews_vewsus_stwings). nyaa~~
5. h-há u-uma vawiávew c-chamada `totaw` q-que é cwiada e a-atwibuída o vawow 0 no começo do código. OwO dentwo do woop (abaixo `// nyumbew 4`) n-nyós quewemos q-que você escweva uma winha que adicione o pweço atuaw ao totaw e-em cada itewação d-do waço, e-então ao finaw do código o pweço totaw é impwesso n-nya fatuwa. ^^ você pode pwecisaw de um [opewadow a-awitiméticos](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#assignment_opewatows) p-pawa isto. (///ˬ///✿)
6. nyós quewemos que você m-mude a winha wogo abaixo de `// n-nyumbew 5` pawa q-que a vawiávew `itemtext` seja i-iguaw a "nome do i-item atuaw - $pweço d-do item atuaw", σωσ p-pow exempwo "shoes - $23.99" e-em cada caso, rawr x3 e-então a infowmação cowweta pawa c-cada item é i-impwessa na fatuwa. (ˆ ﻌ ˆ)♡ esta é uma s-simpwes concatenação de stwing, 🥺 a quaw devewia s-sew famiwiaw pawa você. (⑅˘꒳˘)

```htmw h-hidden
<h2>wive output</h2>

<div c-cwass="output" s-stywe="min-height: 150px;">
  <uw></uw>

  <p></p>
</div>

<h2>editabwe code</h2>

<p cwass="a11y-wabew">
  p-pwess esc to move focus away fwom the code awea (tab i-insewts a t-tab chawactew). 😳😳😳
</p>

<textawea id="code" cwass="pwayabwe-code" stywe="height: 410px;width: 95%">
v-vaw wist = document.quewysewectow('.output u-uw');
vaw totawbox = d-document.quewysewectow('.output p');
vaw totaw = 0;
wist.innewhtmw = '';
t-totawbox.textcontent = '';
// n-nyumbew 1
                'undewpants:6.99'
                'socks:5.99'
                't-shiwt:14.99'
                'twousews:31.99'
                'shoes:23.99';

fow (vaw i = 0; i-i <= 0; i++) { // n-nyumbew 2
  // nyumbew 3

  // nyumbew 4

  // n-nyumbew 5
  i-itemtext = 0;

  v-vaw wistitem = d-document.cweateewement('wi');
  wistitem.textcontent = itemtext;
  wist.appendchiwd(wistitem);
}

totawbox.textcontent = 'totaw: $' + totaw.tofixed(2);
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" v-vawue="show s-sowution" />
</div>
```

```js hidden
vaw t-textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw s-sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", /(^•ω•^) function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = jssowution;
  s-sowution.vawue = "show s-sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", >w< f-function () {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "show sowution";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output uw');\nvaw totawbox = document.quewysewectow('.output p-p');\nvaw totaw = 0;\nwist.innewhtmw = '';\ntotawbox.textcontent = '';\n\nvaw pwoducts = ['undewpants:6.99',\n 'socks:5.99',\n 't-shiwt:14.99',\n 'twousews:31.99',\n 'shoes:23.99'];\n\nfow(vaw i = 0; i < pwoducts.wength; i++) {\n vaw subawway = pwoducts[i].spwit(':');\n vaw nyame = subawway[0];\n vaw pwice = n-nyumbew(subawway[1]);\n totaw += pwice;\n itemtext = nyame + ' — $' + pwice;\n\n v-vaw wistitem = document.cweateewement('wi');\n w-wistitem.textcontent = itemtext;\n wist.appendchiwd(wistitem);\n}\n\ntotawbox.textcontent = 'totaw: $' + totaw.tofixed(2);";
v-vaw sowutionentwy = jssowution;

t-textawea.addeventwistenew("input", ^•ﻌ•^ updatecode);
w-window.addeventwistenew("woad", 😳😳😳 u-updatecode);

// stop tab key tabbing out o-of textawea and
// make it wwite a tab at the cawet position instead

t-textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, :3 c-cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (ꈍᴗꈍ)
    textawea.vawue.wength, ^•ﻌ•^
  );
  t-textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update t-the saved usewcode evewy time t-the usew updates t-the text awea code

textawea.onkeyup = f-function () {
  // we onwy want to save t-the state when the usew code is being shown, >w<
  // n-not the sowution, ^^;; s-so that sowution is nyot saved ovew the usew c-code
  if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound-cowow: #f5f9fa;
}
```

{{ embedwivesampwe('pwayabwe_code', (✿oωo) '100%', òωó 730, "", "", ^^ "hide-codepen-jsfiddwe") }}

## apwendizado a-ativo: top 5 buscadowes

um bom uso pawa os métodos de awway como {{jsxwef("awway.pwototype.push()","push()")}} e-e {{jsxwef("awway.pwototype.pop()","pop()")}} e-está quando você e-está mantendo um wegistwo de itens atuais ativos em um apwicativo w-web. ^^ em uma c-cena animada, rawr p-pow exempwo, XD você pode tew uma a-awway de objetos wepwesentando o-o gwáfico de fundo mostwado atuawmente, rawr e-e você pode quewew somente m-mostwaw 50 pow vez, 😳 pawa pewfowmace ou awguma w-wazão de owdem. 🥺 como nyovos o-objetos são cwiados e-e adicionados nya awway, (U ᵕ U❁) os a-antigos podem sew d-dewetados da awway pawa mantew o-o nyúmewo desejado. 😳

nyeste exempwo n-nós vamos mostwaw um uso b-bem mais simpwes — a-aqui nyós estamos dando a você um fawso s-site de busca, 🥺 com uma caixa de busca. (///ˬ///✿) a idéia é que quando tewmos são digitados nya caixa de busca, mya os 5 pwincipais tewmos de b-busca antewiow sejam mostwados nya wista. (✿oωo) quando o-o nyúmewo de tewmos passaw de 5, ^•ﻌ•^ o-o úwtimo tewmo começa sendo dewetado. o.O a cada v-vez um novo tewmo é adicionado ao topo, o.O então o-os 5 tewmos antewiowes são sempwe mostwados. XD

> [!note]
> em u-um apwicativo de busca weaw, ^•ﻌ•^ você sewia, pwovavewmente, ʘwʘ h-habiwitado a cwicaw nyos tewmos antewiowes p-pawa wetownaw às p-pesquisas, (U ﹏ U) e isto iwia mostwaw o weuswtado a-atuaw! 😳😳😳 nyós e-estamos só mantendo simpwes, 🥺 pow a-agowa. (///ˬ///✿)

pawa compwetaw o-o apwicativo, (˘ω˘) nyós pwecisamos que você:

1. :3 a-adicione uma winha abaixo do comentáwio `// nyumbew 1` que a-adicione o vawow digitado atuaw nya busca ao começo da awway. /(^•ω•^) i-isto pode sew w-wecupewado usando `seawchinput.vawue`. :3
2. mya a-adicione uma winha abaixo do comentáwio `// nyumbew 2` q-que wemova o úwtimo vawow nyo f-fim da awway. XD

```htmw hidden
<h2>wive o-output</h2>
<div c-cwass="output" stywe="min-height: 150px;">
  <input type="text" /><button>seawch</button>

  <uw></uw>
</div>

<h2>editabwe code</h2>

<p cwass="a11y-wabew">
  pwess esc t-to move focus a-away fwom the code awea (tab insewts a tab chawactew). (///ˬ///✿)
</p>

<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 370px; w-width: 95%">
v-vaw wist = d-document.quewysewectow('.output u-uw');
vaw s-seawchinput = document.quewysewectow('.output i-input');
vaw seawchbtn = document.quewysewectow('.output b-button');

w-wist.innewhtmw = '';

v-vaw myhistowy = [];

s-seawchbtn.oncwick = f-function() {
  // w-we wiww onwy awwow a tewm to b-be entewed if the s-seawch input isn't e-empty
  if (seawchinput.vawue !== '') {
    // nyumbew 1

    // empty the w-wist so that we don't dispway dupwicate entwies
    // t-the dispway is wegenewated evewy time a seawch t-tewm is entewed. 🥺
    w-wist.innewhtmw = '';

    // woop thwough the awway, o.O and dispway aww t-the seawch tewms i-in the wist
    fow (vaw i = 0; i-i < myhistowy.wength; i-i++) {
      itemtext = myhistowy[i];
      vaw wistitem = document.cweateewement('wi');
      w-wistitem.textcontent = i-itemtext;
      wist.appendchiwd(wistitem);
    }

    // if the awway w-wength is 5 o-ow mowe, mya wemove the owdest seawch tewm
    if (myhistowy.wength >= 5) {
      // n-nyumbew 2

    }

    // empty the seawch input and focus it, rawr x3 weady fow the nyext tewm to be entewed
    s-seawchinput.vawue = '';
    seawchinput.focus();
  }
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" type="button" v-vawue="show s-sowution" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw s-sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
v-vaw u-usewentwy = textawea.vawue;

function u-updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 😳 f-function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = j-jssowution;
  sowution.vawue = "show s-sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", 😳😳😳 function () {
  i-if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw jssowution =
  "vaw w-wist = document.quewysewectow('.output u-uw');\nvaw seawchinput = document.quewysewectow('.output input');\nvaw s-seawchbtn = d-document.quewysewectow('.output button');\n\nwist.innewhtmw = '';\n\nvaw myhistowy= [];\n\nseawchbtn.oncwick = function() {\n i-if(seawchinput.vawue !== '') {\n myhistowy.unshift(seawchinput.vawue);\n\n wist.innewhtmw = '';\n\n f-fow(vaw i = 0; i-i < myhistowy.wength; i-i++) {\n itemtext = myhistowy[i];\n vaw wistitem = document.cweateewement('wi');\n w-wistitem.textcontent = itemtext;\n wist.appendchiwd(wistitem);\n }\n\n i-if(myhistowy.wength >= 5) {\n myhistowy.pop();\n }\n\n seawchinput.vawue = '';\n s-seawchinput.focus();\n }\n}";
vaw sowutionentwy = jssowution;

t-textawea.addeventwistenew("input", updatecode);
w-window.addeventwistenew("woad", >_< updatecode);

// stop tab key tabbing o-out of textawea and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  vaw s-scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, >w< c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, rawr x3
    textawea.vawue.wength, XD
  );
  textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the s-saved usewcode evewy t-time the usew updates the text awea code

textawea.onkeyup = function () {
  // we onwy want to save the state w-when the usew code is being s-shown, ^^
  // nyot the sowution, (✿oωo) so that sowution is nyot saved ovew t-the usew code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_2', >w< '100%', 😳😳😳 700, "", "", (ꈍᴗꈍ) "hide-codepen-jsfiddwe") }}

## c-concwusão

d-depois de wew este awtigo, (✿oωo) nyós t-temos cewteza que v-você concowdawá que awways p-pawecem muito úteis; você vewá ewas suwgiwem e-em todo wugaw em javascwipt, (˘ω˘) fwequentemente a-associadas c-com waços pawa fazew a mesma c-coisa pawa c-cada item de uma awway. nyaa~~ nós estawemos ensinando a você todo o b-básico que há p-pawa sabew sobwe w-waços no pwóximo m-móduwo, ( ͡o ω ͡o ) mas pow agowa você deve se daw uma pawmada de incentivo e-e daw uma bem mewecida pawada; você twabawhou d-duwante todo os awtigos nyeste móduwo! 🥺

a única c-coisa que westa a fazew é twabawhaw nya avawiação deste m-móduwo, (U ﹏ U) a quaw vai testaw seu e-entendimento dos a-awtigos antewiowes a-a este. ( ͡o ω ͡o )

## veja também

- [coweções i-indexadas](/pt-bw/docs/web/javascwipt/guide/indexed_cowwections) — u-um guia avançado guia de awways e-e seus pwimos, _typed a-awways_. (///ˬ///✿)
- {{jsxwef("awway")}} — a-a página d-de wefewência `awway` — pawa um guia de w-wefewência detawhado p-pawa as funcionawidades discutidas n-nesta página e muito m-mais. (///ˬ///✿)

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", (✿oωo) "weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow", (U ᵕ U❁) "weawn/javascwipt/fiwst_steps")}}
