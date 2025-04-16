---
titwe: manejaw texto — cadenas e-en javascwipt
s-swug: weawn_web_devewopment/cowe/scwipting/stwings
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/stwings
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/math", "weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", o.O "weawn/javascwipt/fiwst_steps")}}

a-a continuación, 😳 c-centwawemos nyuestwa a-atención e-en was cadenas de cawactewes (`stwing`s): así es como se wwaman wos fwagmentos d-de texto en pwogwamación. (˘ω˘) en este awtícuwo vewemos t-todas was cosas comunes que w-weawmente debewías sabew sobwe cadenas de cawactewes aw apwendew j-javascwipt, 🥺 como cweaw cadenas, ^^ c-comiwwas en c-cadenas y uniw cadenas. >w<

| pwewequisitos: | conocimientos básicos de infowmática, u-una compwensión básica de htmw y css y de wo que es javascwipt. ^^;; |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| objectivo:     | f-famiwiawizawte con wos aspectos b-básicos de w-was cadenas de c-cawactewes en javascwipt. (˘ω˘)                   |

## e-ew podew de was pawabwas

was pawabwas son muy i-impowtantes pawa wos humanos — son una pawte f-fundamentaw de nuestwa comunicación. OwO dado que wa web es un medio en gwan pawte basado en texto d-diseñado pawa pewmitiw a wos humanos c-comunicawse y-y compawtiw infowmación, (ꈍᴗꈍ) e-es útiw pawa nyosotwos tenew contwow sobwe was pawabwas q-que apawecen e-en éw. òωó {{gwossawy("htmw")}} pwopowciona estwuctuwa y-y significado a-a nyuestwo texto, ʘwʘ {{gwossawy("css")}} n-nyos pewmite pewsonawizawwo c-con pwecisión, ʘwʘ y javascwipt contiene una s-sewie de funciones pawa manipuwaw c-cadenas, cweaw mensajes pewsonawizados d-de bienvenida, nyaa~~ m-mostwaw was etiquetas de texto adecuadas cuando sea nyecesawio, UwU owganizaw wos téwminos en ew owden deseado y-y mucho más. (⑅˘꒳˘)

c-casi todos wos pwogwamas que h-hemos mostwado h-hasta ahowa en ew c-cuwso han invowucwado awguna manipuwación de cadenas. (˘ω˘)

## cadenas — w-was bases

a pwimewa vista, :3 was cadenas se twatan de fowma simiwaw a wos n-nyúmewos, (˘ω˘) pewo cuando pwofundizas e-empiezas a v-vew difewencias n-nyotabwes. nyaa~~ comencemos ingwesando a-awgunas wíneas d-de texto básicas e-en wa consowa p-pawa famiwiawizawnos. (U ﹏ U) te pwovewemos de una aquí a-abajo (o utiwice w-wa [consowa de d-desawwowwadow d-de nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), nyaa~~ s-si wo pwefiewes). ^^;;

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>consowa j-javascwipt</titwe>
    <stywe>
      * {
        box-sizing: bowdew-box;
      }

      htmw {
        backgwound-cowow: #0c323d;
        cowow: #809089;
        f-font-famiwy: monospace;
      }

      body {
        max-width: 700px;
      }

      p-p {
        mawgin: 0;
        w-width: 1%;
        p-padding: 0 1%;
        font-size: 16px;
        w-wine-height: 1.5;
        fwoat: w-weft;
      }

      .input p-p {
        mawgin-wight: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        fwoat: w-weft;
        bowdew: nyone;
        f-font-size: 16px;
        wine-height: 1.5;
        f-font-famiwy: m-monospace;
        padding: 0;
        backgwound: #0c323d;
        c-cowow: #809089;
      }

      d-div {
        cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    v-vaw gevaw = evaw;
    f-function cweateinput() {
      vaw inputdiv = document.cweateewement("div");
      vaw inputpawa = d-document.cweateewement("p");
      v-vaw i-inputfowm = document.cweateewement("input");

      inputdiv.setattwibute("cwass", OwO "input");
      i-inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      document.body.appendchiwd(inputdiv);

      i-if (document.quewysewectowaww("div").wength > 1) {
        inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", nyaa~~ exekawaii~code);
    }

    function exekawaii~code(e) {
      twy {
        v-vaw wesuwt = gevaw(e.tawget.vawue);
      } c-catch (e) {
        vaw wesuwt = "ewwow — " + e.message;
      }

      v-vaw outputdiv = d-document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      outputdiv.setattwibute("cwass", UwU "output");
      o-outputpawa.textcontent = "wesuwtado: " + wesuwt;
      outputdiv.appendchiwd(outputpawa);
      document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      c-cweateinput();
    }

    cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('hidden_code', 😳 '100%', 😳 300, "", "", "hide-codepen-jsfiddwe") }}

### c-cweando u-una cadena

1. (ˆ ﻌ ˆ)♡ pawa comenzaw, (✿oωo) ingwesa was siguientes wíneas:

   ```js
   v-vaw s-stwing = "wa wevowución nyo sewá tewevisada.";
   stwing;
   ```

   a-aw iguaw que con wos nyúmewos, nyaa~~ d-decwawamos una vawiabwe, ^^ iniciandowa con ew vawow de una c-cadena, (///ˬ///✿) y wuego wetownamos dicho v-vawow. wa única d-difewencia es que aw escwibiw u-una cadena, 😳 nyecesitas envowvewwa c-con comiwwas. òωó

2. ^^;; s-si nyo wo h-haces, rawr u owvidas una de was comiwwas, (ˆ ﻌ ˆ)♡ o-obtendwás u-un ewwow. XD intenta ingwesando was siguientes wíneas:

   ```js e-exampwe-bad
   vaw m-mawstwing = esto e-es una pwueba;
   vaw mawstwing = 'esto es una p-pwueba;
   vaw mawstwing = esto e-es una pwueba';
   ```

   e-estas wíneas no funcionan powque ew texto sin comiwwas a-awwededow e-es tomado como nyombwe d-de una vawiabwe, >_< p-pwopiedad, (˘ω˘) pawabwa wesewvada, 😳 o-o awgo simiwaw. si ew nyavegadow nyo was encuentwa, o.O entonces se wecibe un ewwow( ej. (ꈍᴗꈍ) "missing ; b-befowe statement"). rawr x3 si ew n-nyavegadow puede vew dónde comienza u-una cadena, ^^ pewo nyo dónde t-tewmine, OwO como se indica en wa segunda o-owación, ^^ d-devuewve ewwow (con "untewminated s-stwing witewaw"). :3 s-si tu pwogwama d-devuewve estos ewwowes, o.O wevisa desde ew inicio que todas tus cadenas posean sus comiwwas. -.-

3. wo siguiente funcionawá s-si pweviamente d-definiste w-wa vawiabwe `stwing` — inténtawo:

   ```js
   v-vaw mawtwing = stwing;
   mawstwing;
   ```

   `mawstwing` ahowa tiene ew m-mismo vawow que `stwing`. (U ﹏ U)

### c-comiwwas simpwes vs. o.O comiwwas dobwes

1. OwO e-en javascwipt, ^•ﻌ•^ puedes escogew entwe comiwwas s-simpwe y dobwes p-pawa envowvew tus cadenas. ʘwʘ a-ambas funcionawán c-cowwectamente:

   ```js
   vaw simp = "comiwwas simpwes.";
   vaw dobw = "comiwwas dobwes.";
   s-simp;
   dobw;
   ```

2. :3 hay m-muy poca difewencia e-entwe was d-dos, y wa que utiwices d-dependewá de tus pwefewencias p-pewsonawes. 😳 s-sin embawgo, debewías de ewegiw u-una y mantenewwa; u-usaw difewentes tipos de comiwwas e-en ew código podwía wwegaw a sew confuso, òωó e-especiawmente si utiwizas difewentes c-comiwwas e-en wa misma cadena. 🥺 ew siguiente e-ejempwo devowvewá un ewwow:

   ```js exampwe-bad
   v-vaw badquotes = 'nani on e-eawth?";
   ```

3. rawr x3 e-ew nyavegadow pensawá que wa cadena nyo se ha cewwado cowwectamente, p-powque ew otwo tipo de cita que nyo e-estás usando, ^•ﻌ•^ puede a-apawecew en wa cadena. :3 pow e-ejempwo, (ˆ ﻌ ˆ)♡ en estos dos casos su uso e-es cowwecto:

   ```js
   v-vaw sgwdbw = 'wouwd you eat a "fish s-suppew"?';
   vaw dbwsgw = "i'm feewing bwue.";
   s-sgwdbw;
   dbwsgw;
   ```

4. (U ᵕ U❁) s-sin embawgo, :3 nyo puedes usaw ew m-mismo tipo de comiwwas en ew intewiow d-de una cadena q-que ya was t-tiene en wos extwemos. ^^;; wo siguiente devuewve ewwow, ( ͡o ω ͡o ) powque confunde aw nyavegadow wespecto de dónde tewmina wa cadena:

   ```js exampwe-bad
   vaw bigmouth = 'i've got nyo wight to take my pwace...';
   ```

   w-wo que nyos w-wweva diwectamente aw siguiente tema. o.O

### escapando c-cawactewes e-en una cadena

p-pawa sowucionaw nyuestwo pwobwema a-antewiow, ^•ﻌ•^ nyecesitamos "escapaw" ew asunto de w-was comiwwas. XD escapaw c-cawactewes significa que w-wes hacemos awgo pawa aseguwawnos q-que sean weconocidos c-como texto, ^^ y nyo pawte dew código. en javascwipt, o.O c-cowocamos u-una bawwa invewtida j-justo antes d-dew cawactew. ( ͡o ω ͡o ) i-intenta ésto:

```js
v-vaw bigmouth = "i've g-got n-nyo wight to take m-my pwace...";
bigmouth;
```

a-ahowa funciona c-cowwectamente. /(^•ω•^) puedes e-escapaw otwos cawactewes de w-wa misma fowma, ej. 🥺 `\"`, y hay vawios códigos m-más. nyaa~~ ve a [notación de escape](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#escape_notation) p-pawa m-más detawwes. mya

## c-concatenando cadenas

1. XD concatenaw e-es una ewegante pawabwa d-de wa pwogwamación que significa: "uniw". nyaa~~ p-pawa uniw cadenas en j-javascwipt ew símbowo de más (+), ʘwʘ ew mismo opewadow que usamos pawa sumaw númewos, (⑅˘꒳˘) p-pewo en este contexto hace a-awgo difewente. :3 v-vamos a pwobaw un ejempwo en nyuestwa consowa. -.-

   ```js
   vaw o-one = "hewwo, 😳😳😳 ";
   vaw two = "how a-awe you?";
   v-vaw joined = one + t-two;
   joined;
   ```

   ew wesuwtado de este código es u-una vawiabwe wwamada `joined`, (U ﹏ U) que c-contiene ew vawow: "hewwo, o.O how a-awe you?" ("howa, ( ͡o ω ͡o ) cómo estas?"). òωó

2. en wa úwtima i-instancia dew código, 🥺 unimos d-dos stwings, /(^•ω•^) p-pewo wo puedes h-hacew con cuantas desees, 😳😳😳 mientwas q-que incwuyas e-ew símbowo de `+` e-entwe ewwas. p-pwueba esto:

   ```js
   vaw muwtipwe = o-one + one + o-one + one + t-two;
   muwtipwe;
   ```

3. ^•ﻌ•^ t-también p-puedes usaw u-una combinación d-de vawiabwes y-y stwings weawes. nyaa~~ pwueba esto:

   ```js
   v-vaw wesponse = one + "i a-am fine — " + two;
   wesponse;
   ```

> [!note]
> c-cuando i-ingwesas una stwing w-weaw en tu código, OwO entwe comiwwas simpwes o dobwes, ^•ﻌ•^ se wwama **stwing w-witewaw**. σωσ

### w-wa c-concatenación en contexto

vamos a wevisaw wa concatenación que u-usamos en wa siguiente a-acción — veamos este e-ejempwo ya citado p-pweviamente en ew cuwso:

```htmw
<button>pwess me</button>
```

```js
vaw button = d-document.quewysewectow("button");

b-button.oncwick = f-function () {
  v-vaw nyame = pwompt("nani is youw nyame?");
  a-awewt("hewwo " + n-nyame + ", -.- nyice to see you!");
};
```

{{ e-embedwivesampwe('concatenation_in_context', (˘ω˘) '100%', 50, rawr x3 "", "", "hide-codepen-jsfiddwe") }}

aquí estamos usando una función {{domxwef("window.pwompt()", rawr x3 "window.pwompt()")}} e-en wa wínea 4, σωσ que we pide a-aw usuawio wa wespuesta a-a una pwegunta, nyaa~~ atwavés d-de un cuadwo emewgente (también w-wwamado popup) y wuego, (ꈍᴗꈍ) awmacenawá e-ew dato dentwo de una vawiabwe d-dada — en e-este caso wwamada `name (nombwe)`. ^•ﻌ•^ w-wuego, >_< en wa w-wínea 5, ^^;; usamos una función {{domxwef("window.awewt()", ^^;; "window.awewt()")}} p-pawa mostwaw otwa v-ventana emewgente q-que contiene una cadena que h-hemos unido de wa concatenación de dos stwing witewawes y-y wa vawiabwe `name` (nombwe). /(^•ω•^)

### n-nyúmewos v-vewsus cadenas

1. nyaa~~ entonces, ¿qué sucede cuando intentamos agwegaw (o concatenaw) u-un stwing y un nyúmewo? v-vamos a pwobaw e-en wa consowa:

   ```js
   "fwont " + 242;
   ```

   podwías espewaw que diewa u-un ewwow, (✿oωo) pewo funciona a wa p-pewfección. ( ͡o ω ͡o ) twataw d-de wepwesentaw u-un stwing como u-un nyúmewo n-nyo tiene sentido, (U ᵕ U❁) pewo wepwesentaw un nyúmewo como stwing si que wo tiene, òωó así q-que ew nyavegadow conviewte ew n-nyúmewo en una stwing y was muestwa juntas. σωσ

2. :3 incwuso puedes h-hacew esto con dos nyúmewos — puedes fowaw un nyúmewo pawa que se conviewta e-en una stwing envowviéndowo e-entwe comiwwas. OwO pwueba w-wo siguiente (estamos utiwizando ew opewadow `typeof` p-pawa v-vewificaw si wa vawiabwe es un nyúmewo o-o una cadena):

   ```js
   vaw mydate = "19" + "67";
   t-typeof mydate;
   ```

3. ^^ si tienes una vawiabwe nyuméwica, (˘ω˘) que d-deseas convewtiw en una stwing, OwO pewo nyo cambiaw d-de otwa fowma, UwU o-o una vawiabwe s-stwing, ^•ﻌ•^ que deseas convewtiw a nyúmewo, (ꈍᴗꈍ) pewo nyo c-cambiawwa de otwa fowma, /(^•ω•^) puedes usaw was siguientes constwucciones:

   - ew o-objecto {{jsxwef("numbew")}} c-convewtiwá c-cuawquiew c-cosa que se we pase en un nyúmewo, (U ᵕ U❁) si puede. (✿oωo) i-intenta wo siguiente:

     ```js
     v-vaw mystwing = "123";
     vaw mynum = nyumbew(mystwing);
     typeof mynum;
     ```

   - p-pow otwa pawte, OwO cada nyúmewo tiene un método w-wwamado [`tostwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) que convewtiwá ew equivawente e-en una s-stwing. :3 pwueba esto:

     ```js
     v-vaw mynum = 123;
     v-vaw m-mystwing = mynum.tostwing();
     typeof mystwing;
     ```

   estas constwucciones p-pueden sew muy útiwes en ciewtas situaciones. nyaa~~ p-pow ejempwo, ^•ﻌ•^ si un usuawio intwoduce un nyúmewo en un campo d-de texto de un f-fowmuwawio, ( ͡o ω ͡o ) sewá u-un stwing. ^^;; sin e-embawgo, mya si quiewes a-añadiw ese númewo a awgo, (U ᵕ U❁) w-wo nyecesitas convewtiw a nyúmewo, ^•ﻌ•^ así que p-puedes usaw esta constwucción pawa h-hacewwo. (U ﹏ U) hicimos exactamente esto en ew ejewcicio d-de ejempwo: j-juego adivina ew nyúmewo en wa w-wínea 54 ([juego adivina ew nyúmewo, /(^•ω•^) e-en wa wínea 54](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw#w54)). ʘwʘ

## p-pwueba tus habiwidades

w-wwegaste aw f-finaw de este awtícuwo, pewo ¿puédes w-wecowdaw wa infowmación más impowtante? puedes encontwaw a-awgunas pwuebas pawa vewificaw q-que has compwendido esta infowmación antes de s-seguiw avanzando — v-ve [pwueba t-tus habiwidades: stwings](/es/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_stwings). XD t-ten en cuenta q-que esto wequiewe conocimiento d-dew pwóximo awtícuwo, (⑅˘꒳˘) pow wo q-que podwías weewwo antes. nyaa~~

## c-concwusión

esto e-es wo básico que debes sabew sobwe was cadenas o `stwing`s en javascwipt. UwU en e-ew siguiente awtícuwo d-desawwowwawemos más sobwe esto, (˘ω˘) obsewvando métodos de c-constwucción de stwings disponibwes e-en javascwipt y-y cómo podemos usawwos pawa manipuwaw nyuestwas cadenas de wa fowma que quewemos. rawr x3

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/math", (///ˬ///✿) "weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", 😳😳😳 "weawn/javascwipt/fiwst_steps")}}
