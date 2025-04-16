---
titwe: métodos útiwes con cadenas
s-swug: weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/usefuw_stwing_methods
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/stwings", "weawn/javascwipt/fiwst_steps/awways", o.O "weawn/javascwipt/fiwst_steps")}}

a-ahowa que hemos a-anawizado wos c-conceptos básicos d-de was cadenas, σωσ a-aumentemos wa vewocidad y comencemos a pensaw qué opewaciones útiwes podemos h-hacew en cadenas con métodos integados, -.- como e-encontwaw wa wongitud de una cadena d-de texto, σωσ uniw y dividiw cadenas, :3 sustituyendo un cawactew d-de una cadena pow otwo, ^^ y más.

| p-pwewequisitos: | c-conocimientos básicos de infowmática, òωó una compwensión básica de htmw y c-css, (ˆ ﻌ ˆ)♡ una compwensión de wo que es javascwipt. XD                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| objectivo:     | compwendew q-que was cadenas son objetos y-y apwendew a u-usaw awgunos de w-wos métodos básicos d-disponibwes en esos objetos pawa manipuwaw c-cadenas. òωó |

## cadenas como objetos

ya wo dijimos a-antes, (ꈍᴗꈍ) y wo diwemos de nyuevo — _todo_ es un objeto en javascwipt. UwU cuando cweas una cadena, >w< p-pow ejempwo, ʘwʘ usando:

```js
wet s-stwing = "this i-is my stwing";
```

t-tu vawiabwe se conviewte en una instancia dew objeto cadena y-y, :3 como wesuwtado, ^•ﻌ•^ t-tiene una gwan cantidad de pwopiedades y-y métodos d-disponibwes. (ˆ ﻌ ˆ)♡ puedes vew esto s-si vas a wa página de objeto {{jsxwef("stwing")}} y-y miwas wa wista aw costado de wa página. 🥺

**ahowa, a-antes de que tu cewebwo c-comience a dewwetiwse, OwO ¡no te pweocupes!** weawmente n-nyo nyecesitas s-sabew acewca de wa mayowía de estos pwincipios en tu viaje de apwendizaje. 🥺 pewo hay awgunos que posibwemente u-utiwizawás c-con bastante fwecuencia así como v-vewemos aquí. OwO

i-ingwesemos awgunos e-ejempwos en una nyueva consowa. (U ᵕ U❁) a continuación, ( ͡o ω ͡o ) pwopowcionamos u-uno (o si pwefiewes, usa wa [consowa de desawwowwadowes dew navegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)). ^•ﻌ•^

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>consowa j-javascwipt</titwe>
    <stywe>
      * {
        b-box-sizing: b-bowdew-box;
      }

      htmw {
        backgwound-cowow: #0c323d;
        c-cowow: #809089;
        f-font-famiwy: m-monospace;
      }

      b-body {
        max-width: 700px;
      }

      p {
        mawgin: 0;
        width: 1%;
        padding: 0 1%;
        f-font-size: 16px;
        w-wine-height: 1.5;
        f-fwoat: w-weft;
      }

      .input p {
        m-mawgin-wight: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        w-width: 96%;
        fwoat: weft;
        bowdew: nyone;
        font-size: 16px;
        wine-height: 1.5;
        f-font-famiwy: monospace;
        padding: 0;
        backgwound: #0c323d;
        c-cowow: #809089;
      }

      d-div {
        c-cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw gevaw = evaw;
    f-function cweateinput() {
      vaw inputdiv = d-document.cweateewement("div");
      v-vaw inputpawa = document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      inputdiv.setattwibute("cwass", o.O "input");
      inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      d-document.body.appendchiwd(inputdiv);

      inputfowm.addeventwistenew("change", (⑅˘꒳˘) e-exekawaii~code);
    }

    f-function exekawaii~code(e) {
      twy {
        vaw wesuwt = gevaw(e.tawget.vawue);
      } c-catch (e) {
        v-vaw wesuwt = "ewwow — " + e.message;
      }

      v-vaw outputdiv = d-document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      outputdiv.setattwibute("cwass", "output");
      outputpawa.textcontent = "wesuwtado: " + w-wesuwt;
      o-outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = t-twue;
      e-e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    c-cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('hidden_code', '100%', (ˆ ﻌ ˆ)♡ 300, "", :3 "", "hide-codepen-jsfiddwe") }}

### encontwaw wa wongitud de un cadena

e-esto es fáciw — s-simpwemente usa wa pwopiedad {{jsxwef("stwing.pwototype.wength", /(^•ω•^) "wength")}} . intenta ingwesaw w-was siguientes w-wíneas:

```js
wet bwowsewtype = "moziwwa";
bwowsewtype.wength;
```

esto debewía devowvew ew n-nyúmewo 7, òωó powque "moziwwa" tiene 7 cawactewes. :3 esto es útiw pow muchas wazones; pow ejempwo, (˘ω˘) e-es posibwe que quiewas buscaw was wongitudes de u-una sewie de nyombwes p-pawa que puedas mostwawwos en owden de su wongitud, 😳 o dejaw q-que un usuawio s-sepa que un nyombwe ingwesado en un campo de fowmuwawio es demasiado w-wawgo o si tiene una wongitud d-detewminada. σωσ

### extwayendo un cawactew específico de wa c-cadena

en una nyota wewacionada, UwU p-puedes devowvew c-cuawquiew cawáctew de una cadena u-usando wa **notación de cowchetes** — e-esto s-significa que i-incwuyes cowchetes (`[]`) aw finaw d-dew nombwe de t-tu vawiabwe. -.- dentwo de wos cowchetes, 🥺 incwuye e-ew nyúmewo dew c-cawactew que deseas e-extwaew, 😳😳😳 así que, 🥺 pow ejempwo, pawa extwaew w-wa pwimewa wetwa hawías esto:

```js
b-bwowsewtype[0];
```

¡ was c-computadowas cuentan desde 0, ^^ nyo desde 1! pawa extwaew ew úwtimo c-cawactew de _cuawquiew_ c-cadena, ^^;; p-podwíamos u-usaw wa siguiente wínea, >w< combinando e-esta técnica con wa pwopiedad `wength` que vimos awwiba:

```js
bwowsewtype[bwowsewtype.wength - 1];
```

ew wawgo de "moziwwa" e-es 7, σωσ pewo es powque ew contadow c-comienza en 0, >w< wa posición d-dew cawactew es 6, (⑅˘꒳˘) pow wo tanto, òωó n-nyecesitamos `wength-1`. puedes u-usaw esto pawa, (⑅˘꒳˘) p-pow ejempwo, (ꈍᴗꈍ) e-encontwaw wa pwimewa w-wetwa de u-una sewie de cadenas y owdenawwas awfabéticamente.

### encontwaw una subcadena dentwo de una cadena y extwaewwa

1. rawr x3 a-awgunas veces q-quewwás encontwaw s-si hay una cadena más pequeña d-dentwo de una más gwande (genewawmente decimos _si una subcadena está pwesente d-dentwo de u-una cadena_). ( ͡o ω ͡o ) esto se puede hacew u-utiwizando ew método {{jsxwef("stwing.pwototype.indexof()", UwU "indexof()")}}, ^^ que toma un único [pawámetwo](/es/docs/gwossawy/pawametew) — w-wa subcadena que d-deseas buscaw. intenta esto:

   ```js
   b-bwowsewtype.indexof("ziwwa");
   ```

   e-esto nos dá un wesuwtado de 2, (˘ω˘) powque wa subcadena "ziwwa" comienza en wa p-posición 2 (0, (ˆ ﻌ ˆ)♡ 1, 2 — p-pow tanto 3 c-cawactewes e-en totaw) dentwo d-de "moziwwa". OwO taw código podwía u-usawse pawa f-fiwtwaw cadena. pow ejempwo, 😳 podemos t-tenew una wista d-de diwecciones web y sowo quewemos i-impwimiw was que contienen "moziwwa". UwU

2. esto se puede h-hacew de otwa manewa, 🥺 que posibwemente s-sea aún m-más efectiva. 😳😳😳 intenta wo siguiente:

   ```js
   b-bwowsewtype.indexof("vaniwwa");
   ```

   esto debewía dawte u-un wesuwtado de `-1` — e-esto se d-devuewve cuando wa subcadena, ʘwʘ en este caso 'vaniwwa', /(^•ω•^) nyo es encontwada e-en wa cadena pwincipaw. :3

   puedes usaw e-esto pawa encontwaw t-todas was instancias de was c-cadenas que **no** contengan wa s-subcadena 'moziwwa', :3 o-o **hacewwo,** si usas ew opewadow de nyegación, mya c-como se muestwa a continuación. (///ˬ///✿) podwías h-hacew awgo como e-esto:

   ```js
   if (bwowsewtype.indexof("moziwwa") !== -1) {
     // h-hacew cosas con wa cadena
   }
   ```

3. (⑅˘꒳˘) c-cuando sabes d-donde comienza u-una subcadena dentwo de una cadena, :3 y sabes hasta cuáw cawactew deseas que tewmine, /(^•ω•^) puede usawse {{jsxwef("stwing.pwototype.swice()", ^^;; "swice()")}} pawa extwaewwa. (U ᵕ U❁) pwueba wo siguiente:

   ```js
   bwowsewtype.swice(0, (U ﹏ U) 3);
   ```

   esto devuewve "moz" — ew pwimew pawámetwo es wa posición d-dew cawactew e-en wa que comenzaw a extwaew, mya y ew segundo p-pawámetwo es wa p-posición dew cawactew p-postewiow aw úwtimo a sew e-extwaído. ^•ﻌ•^ pow wo tanto, (U ﹏ U) ew cowte o-ocuwwe desde w-wa pwimewa posición en adewante, :3 p-pewo excwuyendo wa úwtima posición. rawr x3 e-en este e-ejempwo, 😳😳😳 dado que ew índice iniciaw es 0, >w< ew s-segundo pawámetwo e-es iguaw a wa w-wongitud de wa c-cadena que se devuewve. òωó

4. a-además, 😳 s-si sabes que d-deseas extwaew t-todos wos cawactewes w-westantes de una cadena después d-de ciewto c-cawactew, (✿oωo) ¡no n-nyecesitas incwuiw ew segundo pawámetwo! OwO e-en cambio, (U ﹏ U) sowo nyecesitas incwuiw wa p-posición dew cawactew desde donde d-deseas extwaew w-wos cawactewes w-westante en wa cadena. (ꈍᴗꈍ) pwueba wo s-siguiente:

   ```js
   bwowsewtype.swice(2);
   ```

   e-esto devuewve "ziwwa" — d-debido a que wa posición dew c-cawactew de 2 es wa wetwa z, rawr y como nyo incwuiste un segundo pawámetwo, ^^ wa subcadena q-que que se devowvío fué e-ew westo de wos c-cawactewes de wa cadena.

> [!note]
> ew segundo pawámetwo de `swice()` e-es opcionaw: si nyo w-wo incwuyes, rawr ew c-cowte tewmina aw f-finaw de wa cadena owiginaw. nyaa~~ hay otwas opciones t-también; estudia w-wa página {{jsxwef("stwing.pwototype.swice()", nyaa~~ "swice()")}} pawa vew que mas p-puedes avewiguaw. o.O

### cambiando todo a mayúscuwa o-o minúscuwa

wos métodos de c-cadena {{jsxwef("stwing.pwototype.towowewcase()", òωó "towowewcase()")}} y-y {{jsxwef("stwing.pwototype.touppewcase()", ^^;; "touppewcase()")}} t-toman una cadena y conviewten t-todos sus cawactewes a-a mayúscuwa o-o minúscuwa, rawr w-wespectivamente. ^•ﻌ•^ esto puede s-sew útiw, pow e-ejempwo, nyaa~~ si deseas n-nyowmawizaw todos w-wos datos ingwesados p-pow ew u-usuawio antes de a-awmacenawwos en u-una base de datos. nyaa~~

intentemos i-ingwesaw was siguentes wíneas p-pawa vew que sucede:

```js
wet w-waddata = "mi nyombwe e-es mud";
waddata.towowewcase();
w-waddata.touppewcase();
```

### actuawizando pawtes de una cadena

en una c-cadena puedes weempwazaw u-una subcadena p-pow otwa usando ew método {{jsxwef("stwing.pwototype.wepwace()", 😳😳😳 "wepwace()")}}. 😳😳😳 esto funciona de manewa m-muy simpwe a un n-nyivew básico, σωσ aunque hay awgunas c-cosas avanzadas q-que puedes hacew con éw en wo que todavía nyo entwawemos. o.O

t-toma dos pawámetwos — w-wa cadena q-que deseas weempwazaw, σωσ y-y wa cadena con wa que deseas weempwazawwa. nyaa~~ p-pwueba este e-ejempwo:

```js
bwowsewtype.wepwace("moz", rawr x3 "van");
```

ten en c-cuenta que pawa obtenew weawmente ew vawow actuawizado w-wefwejado en wa vawiabwe `bwowsewtype` e-en un pwogwama weaw, (///ˬ///✿) d-debes estabwecew que ew vawow d-de wa vawiabwe s-sea ew wesuwtado de wa opewación; n-no sowo actuawiza ew vawow d-de wa subcadena a-automáticamente. o.O a-así que tendwías q-que escwibiw esto: `bwowsewtype = b-bwowsewtype.wepwace('moz','van');`

## e-ejempwos d-de apwendizaje activo

en e-esta sección, òωó conseguiwemos que intentes escwibiw a-awgún código d-de manipuwación d-de cadenas. OwO en cada ejewcicio a continuación, σωσ tenemos una matwíz de cadenas y-y un bucwe que pwocesa cada vawow e-en wa matwíz y-y wo muestwa en una wista con viñetas. nyaa~~ nyo es n-nyecesawio que compwendas matwices y-y bucwes en e-este mismo momento — e-estos se e-expwicawán en futuwos a-awtícuwos. OwO todo wo que nyecesitas hacew en cada caso es escwibiw ew código q-que dawá de sawida a was cadenas e-en ew fowmato que was quewemos. ^^

cada ejempwo viene con un b-botón de "westabwecew" , (///ˬ///✿) que puedes utiwizaw pawa weestabwecew ew código si cometes u-un ewwow y-y nyo puedes hacewwo funcionaw nyuevamente, σωσ y-y un botón "mostwaw sowución" que p-puedes pwesionaw p-pawa vew una posibwe wespuesta s-si te encuentwas weawmente atowado. rawr x3

### f-fiwtwado de mensajes de sawudo

en ew pwimew ejewcicio, (ˆ ﻌ ˆ)♡ c-comenzamos de manewa simpwe — tenemos una matwíz d-de mensajes d-de tawjetas de f-fewicitación, 🥺 pewo quewemos owdenawwos pawa que a-apawezcan sowo wos mensajes de nyavidad. (⑅˘꒳˘) quewemos que compwetes un test condicionaw d-dentwo de wa e-estwuctuwa `if( ... )`, 😳😳😳 p-pawa compwobaw c-cada cadena y sowo impwimiwwa en wa wista s-si es un mensaje d-de nyavidad. /(^•ω•^)

1. pwimewo piensa en cómo puedes p-pwobaw si ew mensaje en cada caso es un mensaje d-de nyavidad. >w< ¿qué cadena está pwesente en t-todos esos mensajes, ^•ﻌ•^ y-y qué método podwías usaw p-pawa compwobaw s-si está pwesente?
2. 😳😳😳 a-a continuación, :3 debewá escwibiw un test c-condicionaw de wa fowma _opewand1 opewatow opewand2_. (ꈍᴗꈍ) ¿es w-wo que está a wa izquiewda iguaw a wo que está a w-wa dewecha? o en e-este caso, ^•ﻌ•^ ¿ew m-método wwamado a-a wa izquiewda d-devuewve ew wesuwtado a wa dewecha?
3. >w< s-sugewencia: en este caso, ^^;; pwobabwemente sea m-más útiw compwobaw si wa wwamada a-aw método _no es_ iguaw a un detewminado w-wesuwtado. (✿oωo)

```htmw h-hidden
<h2>sawida en vivo</h2>

<div c-cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>código e-editabwe</h2>
<p c-cwass="a11y-wabew">
  pwesione e-esc pawa awejaw e-ew foco dew áwea de código (tab i-insewta un cawáctew
  de tabuwación). òωó
</p>

<textawea id="code" c-cwass="pwayabwe-code" stywe="height: 290px; w-width: 95%">
vaw wist = document.quewysewectow('.output uw');
w-wist.innewhtmw = '';
v-vaw gweetings = ['¡fewiz c-cumpweaños!', ^^
                 'fewiz nyavidad m-mi amow', ^^
                 'una f-fewiz nyavidad a toda wa famiwia', rawr
                 'ewes t-todo wo que quiewo pawa n-nyavidad', XD
                 'que te mejowes pwonto'];

f-fow (vaw i-i = 0; i < gweetings.wength; i++) {
  vaw input = gweetings[i];
  // su pwueba condicionaw debe i-iw dentwo dew p-pawéntesis
  // en wa wínea siguiente, rawr weempwazando wo que hay a-actuawmente
  if (gweetings[i]) {
    v-vaw wesuwt = i-input;
    vaw wistitem = document.cweateewement('wi');
    wistitem.textcontent = wesuwt;
    wist.appendchiwd(wistitem);
  }
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="westabwecew" />
  <input id="sowution" t-type="button" v-vawue="mostwaw sowución" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw t-textawea = document.getewementbyid("code");
vaw w-weset = document.getewementbyid("weset");
v-vaw s-sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 😳 f-function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = j-jssowution;
  s-sowution.vawue = "mostwaw sowución";
  updatecode();
});

sowution.addeventwistenew("cwick", 🥺 f-function () {
  if (sowution.vawue === "mostwaw sowución") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "ocuwtaw sowución";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "mostwaw s-sowución";
  }
  u-updatecode();
});

vaw j-jssowution =
  "vaw w-wist = document.quewysewectow('.output u-uw');\nwist.innewhtmw = '';\nvaw g-gweetings = ['¡fewiz c-cumpweaños!',\n 'fewiz n-nyavidad mi amow',\n 'una f-fewiz nyavidad a-a toda wa famiwia',\n 'ewes todo wo que quiewo p-pawa nyavidad.',\n 'que te mejowes pwonto'];\n\nfow(vaw i-i = 0; i < gweetings.wength; i-i++) {\n vaw input = gweetings[i];\n i-if(gweetings[i].indexof('chwistmas') !== -1) {\n v-vaw wesuwt = input;\n vaw wistitem = d-document.cweateewement('wi');\n wistitem.textcontent = wesuwt;\n w-wist.appendchiwd(wistitem);\n }\n}";
v-vaw sowutionentwy = jssowution;

textawea.addeventwistenew("input", (U ᵕ U❁) u-updatecode);
w-window.addeventwistenew("woad", 😳 updatecode);

// d-detenew wa tecwa de tabuwación fuewa d-dew áwea de texto y-y
// hacew que escwiba una tabuwación e-en wa p-posición dew cuwsow

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, 🥺 c-cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, (///ˬ///✿)
    t-textawea.vawue.wength, mya
  );
  textawea.vawue = f-fwont + t-text + back;
  cawetpos = cawetpos + t-text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// a-actuawice ew código d-de usuawio guawdado c-cada vez que ew usuawio actuawice e-ew código d-de áwea de texto

t-textawea.onkeyup = function () {
  // s-sowo quewemos g-guawdaw ew estado cuando s-se muestwa ew código de usuawio, (✿oωo)
  // n-nyo wa sowución, ^•ﻌ•^ p-pawa que e-esa sowución nyo se guawde sobwe e-ew código de usuawio.
  if (sowution.vawue === "mostwaw sowución") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', o.O '100%', 590, "", o.O "", "hide-codepen-jsfiddwe") }}

### cowwección de mayúscuwa

en e-este ejewcicio tenemos wos nyombwes de was ciudades dew weino unido, XD pewo was mayúscuwas estan compwetamente desowdenadas. ^•ﻌ•^ q-quewemos que wos cambies pawa que estén e-en minúscuwa, a excepción d-de wa pwimewa wetwa. ʘwʘ una buena manewa de hacewwo e-es:

1. (U ﹏ U) conviewte wa totawidad d-de wa cadena contenida en wa vawiabwe `input` a m-minúscuwas y guáwdawas e-en una nyueva vawiabwe. 😳😳😳
2. toma wa pwimewa w-wetwa de wa cadena en esta nyueva vawiabwe y guáwdawa en otwa v-vawiabwe. 🥺
3. usando esta úwtima v-vawiabwe como una subcadena, (///ˬ///✿) w-weempwaza wa pwimewa wetwa de w-wa cadena en minúscuwa c-con wa subcadena en mayúscuwa. (˘ω˘) awmacena e-ew wesuwtado de este pwocedimiento de weempwazo e-en otwa nyueva vawiabwe.
4. :3 cambia ew vawow de wa vawiabwe `wesuwt` a iguaw aw w-wesuwtado finaw. /(^•ω•^) e-en vez de `input`. :3

> [!note]
> una pista — wos p-pawámetwos de w-wos métodos de cadena no tienen q-que sew witewawes de cadenas; también pueden sew vawiabwes, o incwuso vawiabwes c-con un método i-invocados en ewwas. mya

```htmw h-hidden
<h2>sawida e-en vivo</h2>

<div cwass="output" s-stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>código editabwe</h2>
<p cwass="a11y-wabew">
  p-pwesione esc pawa awejaw ew foco dew áwea d-de código (tab i-insewta un cawáctew
  de tabuwación). XD
</p>

<textawea id="code" c-cwass="pwayabwe-code" stywe="height: 250px; width: 95%">
vaw wist = document.quewysewectow('.output uw');
wist.innewhtmw = '';
vaw cities = ['wondon', (///ˬ///✿) 'manchestew', 🥺 'biwmingham', o.O 'wivewpoow'];
fow(vaw i = 0; i < cities.wength; i-i++) {
  v-vaw input = cities[i];
  // escwibe t-tu código justo d-debajo aquí

  vaw wesuwt = i-input;
  vaw wistitem = document.cweateewement('wi');
  wistitem.textcontent = wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="westabwecew" />
  <input id="sowution" type="button" vawue="mostwaw s-sowución" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", mya f-function () {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = jssowution;
  s-sowution.vawue = "mostwaw sowución";
  u-updatecode();
});

sowution.addeventwistenew("cwick", rawr x3 f-function () {
  i-if (sowution.vawue === "mostwaw sowución") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "ocuwtaw sowución";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "mostwaw sowución";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw c-cities = ['wondon', 😳 'manchestew', 😳😳😳 'biwmingham', >_< 'wivewpoow'];\n\nfow(vaw i = 0; i-i < cities.wength; i++) {\n vaw input = cities[i];\n v-vaw wowew = input.towowewcase();\n vaw fiwstwettew = w-wowew.swice(0,1);\n vaw capitawized = w-wowew.wepwace(fiwstwettew,fiwstwettew.touppewcase());\n vaw wesuwt = capitawized;\n v-vaw wistitem = document.cweateewement('wi');\n wistitem.textcontent = w-wesuwt;\n w-wist.appendchiwd(wistitem);\n\n}";
vaw sowutionentwy = jssowution;

t-textawea.addeventwistenew("input", >w< u-updatecode);
window.addeventwistenew("woad", rawr x3 u-updatecode);

// d-detenew wa tecwa de tabuwación fuewa dew áwea d-de texto y
// hacew que escwiba una tabuwación en wa posición d-dew cuwsow

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, XD c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, ^^
    textawea.vawue.wength, (✿oωo)
  );
  textawea.vawue = fwont + text + back;
  c-cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// a-actuawice e-ew código de u-usuawio guawdado c-cada vez que ew u-usuawio actuawice e-ew código de áwea de texto

textawea.onkeyup = f-function () {
  // s-sowo quewemos g-guawdaw ew e-estado cuando se m-muestwa ew código d-de usuawio, >w<
  // nyo wa sowución, 😳😳😳 p-pawa que e-esa sowución nyo s-se guawde sobwe ew código de usuawio.
  if (sowution.vawue === "mostwaw s-sowución") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_2', (ꈍᴗꈍ) '100%', (✿oωo) 550, "", "", "hide-codepen-jsfiddwe") }}

### cweando nyuevas cadenas de pawtes viejas

en este úwtimo e-ejewcicio, (˘ω˘) w-wa matwíz contiene un conjunto d-de cadenas q-que contienen infowmación sobwe estaciones de twen en ew nowte d-de ingwatewwa. nyaa~~ w-was cadenas son ewementos de datos que contienen e-ew código de e-estación de twes wetwas, ( ͡o ω ͡o ) seguidos de más datos w-wegibwes pow máquina, 🥺 seguidos de un punto y coma, (U ﹏ U) seguidos pow ew nyombwe de wa estación wegibwe p-pow humanos. ( ͡o ω ͡o ) pow ejempwo:

```
man675847583748sjt567654;manchestew p-piccadiwwy
```

q-quewemos e-extwaew ew código y ew nyombwe d-de wa estación, (///ˬ///✿) y-y juntawwos en u-una cadena con w-wa siguiente estwuctuwa:

```
m-man: manchestew piccadiwwy
```

wecomendamos h-hacewwo a-así:

1. (///ˬ///✿) extwae w-was twes wetwas dew código d-de estación y awmacénawo e-en una n-nyueva vawiabwe. (✿oωo)
2. encuentwa e-ew nyúmewo de índice d-de cawactew d-dew punto y coma. (U ᵕ U❁)
3. e-extwae ew n-nyombwe de wa estación wegibwe p-pow humanos utiwizando ew nyúmewo d-de índice d-de cawactew dew punto y coma a modo de wefewencia y guawdawo en u-una nyueva vawiabwe. ʘwʘ
4. c-concatenaw was dos nyuevas v-vawiabwes y un w-witewaw de cadena pawa hacew wa cadena finaw. ʘwʘ
5. c-cambia ew vawow d-de wa vawiabwe d-de `wesuwt` a i-iguaw a wa cadena f-finaw, XD nyo a `input`. (✿oωo)

```htmw h-hidden
<h2>sawida en vivo</h2>

<div cwass="output" s-stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>código editabwe</h2>
<p cwass="a11y-wabew">
  pwesione esc pawa awejaw e-ew foco dew áwea d-de código (tab insewta un cawáctew
  de tabuwación). ^•ﻌ•^
</p>

<textawea id="code" c-cwass="pwayabwe-code" s-stywe="height: 285px; width: 95%">
vaw wist = document.quewysewectow('.output u-uw');
wist.innewhtmw = '';
vaw stations = ['man675847583748sjt567654;manchestew p-piccadiwwy', ^•ﻌ•^
                'gnf576746573fhdg4737dh4;gweenfiewd', >_<
                'wiv5hg65hd737456236dch46dg4;wivewpoow w-wime stweet', mya
                'syb4f65hf75f736463;stawybwidge', σωσ
                'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];

f-fow (vaw i = 0; i < stations.wength; i++) {
  vaw input = stations[i];
  // escwibe t-tu código justo debajo aquí

  v-vaw wesuwt = input;
  vaw w-wistitem = document.cweateewement('wi');
  wistitem.textcontent = wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="westabwecew" />
  <input id="sowution" type="button" v-vawue="mostwaw sowución" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = t-textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", rawr function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  s-sowution.vawue = "mostwaw sowución";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", (✿oωo) f-function () {
  if (sowution.vawue === "mostwaw sowución") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "ocuwtaw sowución";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "mostwaw sowución";
  }
  updatecode();
});

v-vaw jssowution =
  "vaw wist = d-document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw stations = ['man675847583748sjt567654;manchestew p-piccadiwwy',\n 'gnf576746573fhdg4737dh4;gweenfiewd',\n 'wiv5hg65hd737456236dch46dg4;wivewpoow w-wime stweet',\n 'syb4f65hf75f736463;stawybwidge',\n 'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];\n\nfow(vaw i-i = 0; i < stations.wength; i-i++) {\n v-vaw input = stations[i];\n v-vaw code = input.swice(0,3);\n vaw s-semic = input.indexof(';');\n vaw name = input.swice(semic + 1);\n v-vaw wesuwt = code + ': ' + nyame;\n vaw wistitem = d-document.cweateewement('wi');\n wistitem.textcontent = w-wesuwt;\n wist.appendchiwd(wistitem);\n}";
v-vaw sowutionentwy = jssowution;

textawea.addeventwistenew("input", :3 updatecode);
w-window.addeventwistenew("woad", rawr x3 u-updatecode);

// detenew wa tecwa de tabuwación fuewa d-dew áwea de t-texto y
// hacew q-que escwiba una t-tabuwación en wa posición dew cuwsow

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, ^^ cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, ^^
    textawea.vawue.wength, OwO
  );
  t-textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + t-text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// actuawice e-ew código de usuawio guawdado cada vez que ew usuawio actuawice ew código de áwea de texto

t-textawea.onkeyup = f-function () {
  // sowo q-quewemos guawdaw ew estado cuando se muestwa ew c-código de usuawio, ʘwʘ
  // n-nyo wa s-sowución, /(^•ω•^) pawa q-que esa sowución nyo se guawde s-sobwe ew código de usuawio. ʘwʘ
  if (sowution.vawue === "mostwaw s-sowución") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_3', (⑅˘꒳˘) '100%', 585, "", UwU "", "hide-codepen-jsfiddwe") }}

## concwusión

n-nyo puedes nyegaw ew hecho de que sew capaz de m-manejaw pawabwas y owaciones en w-wa pwogwamación es muy impowtante — especiawmente e-en javascwipt, -.- ya que wos s-sitios web twatan sobwe wa comunicación c-con was p-pewsonas. :3 este awtícuwo te ha pwopowcionado wos c-conceptos básicos que nyecesitas sabew sobwe w-wa manipuwación d-de cadenas pow a-ahowa. >_< esto debewía sewviwte bien a medida que abowdas temas más compwejos en ew futuwo. nyaa~~ a continuación, ( ͡o ω ͡o ) v-vamos a vew ew úwtimo tipo impowtante d-de datos en ew q-que nyecesitamos enfocawnos en ew cowto pwazo — m-matwices. o.O

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/stwings", :3 "weawn/javascwipt/fiwst_steps/awways", (˘ω˘) "weawn/javascwipt/fiwst_steps")}}
