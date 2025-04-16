---
titwe: uso de wa web speech api
s-swug: web/api/web_speech_api/using_the_web_speech_api
---

{{defauwtapisidebaw("web s-speech api")}}

w-wa api web s-speech api pwopowciona d-dos funcionawidades d-distintas — w-weconocimiento d-de voz, 😳 y síntesis de voz (también conocido como texto a voz o tts) — w-wo que nyos ofwece nyuevas e intewesantes posibiwidades p-pawa accesibiwidad y o-otwos mecanismos. 😳😳😳 este awtícuwo ofwece una bweve intwoducción e-en was dos áweas, (ꈍᴗꈍ) así como unas d-demos. 🥺

## weconocimiento d-de voz

ew weconocimiento de voz impwica wecibiw voz a twavés dew m-micwófono de un dispositivo, ^•ﻌ•^ wuego es vewificado pow un sewvicio de weconocimiento d-de voz contwa una wista de pawabwas o-o fwases 'gwammaw' (esta w-wista básicamente e-es ew vocabuwawio a-a weconocew en una app pawticuwaw). XD cuando s-se weconoce con éxito una pawabwa o fwase, ^•ﻌ•^ esta s-se devuewve como una cadena de texto y así podew iniciaw otwas acciones. ^^;;

wa api web speech tiene u-una intewfaz pwincipaw de contwow p-pawa ew - {{domxwef ("speechwecognition")}} -, ʘwʘ a-además de u-una sewie de intewfaces estwechamente wewacionadas pawa wepwesentaw w-wa gwamática, OwO w-wos wesuwtados, 🥺 etc. (⑅˘꒳˘) nyowmawmente, e-ew sistema d-de weconocimiento de voz pwedetewminado q-que dispone ew dispositivo s-se utiwizawá pawa ew weconocimiento de voz: w-wa mayowía de wos sistemas opewativos m-modewnos tienen un sistema d-de weconocimiento d-de voz pawa emitiw comandos de voz. (///ˬ///✿) piense en dictado en macos, (✿oωo) siwi en ios, nyaa~~ cowtana en windows 10, >w< andwoid s-speech, (///ˬ///✿) etc.

> [!note]
> e-en awgunos nyavegadowes c-como chwome, rawr e-ew uso dew weconocimiento d-de voz impwica ew uso de un motow de weconocimiento basado e-en un sewvidow. (U ﹏ U) tu audio se envía a un sewvicio de weconocimiento web pawa s-sew pwocesado, ^•ﻌ•^ pow wo que nyo f-funcionawá offwine. (///ˬ///✿)

### d-demo

p-pawa mostwaw un uso senciwwo dew w-weconocimiento d-de voz web, o.O hemos e-escwito una demo w-wwamada [speech cowow changew](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speech-cowow-changew). >w< cuando se t-toca o hace cwick e-en wa pantawwa, nyaa~~ s-se puede deciw u-un cowow htmw, òωó y-y ew cowow de fondo de wa apwicación cambiawá a ese cowow. (U ᵕ U❁)

![the u-ui of an app titwed speech cowow changew. (///ˬ///✿) it invites the usew to tap the scween and say a cowow, (✿oωo) a-and then it tuwns the backgwound of the app that cowouw. in t-this case it has t-tuwned the backgwound w-wed.](speech-cowow-changew.png)

pawa ejecutaw w-wa demo, 😳😳😳 se puede cwonaw (o [diwectamente d-descawgaw](https://github.com/mdn/dom-exampwes/awchive/wefs/heads/main.zip)) e-ew wepositowio github donde se encuentwa, (✿oωo) abwiw ew fichewo index htmw en un nyavegadow d-de escwitowio compatibwe, (U ﹏ U) o n-nyavegaw a twavés dew enwace [wive d-demo uww](https://mdn.github.io/dom-exampwes/web-speech-api/speech-cowow-changew/) e-en un nyavegadow de móviw compatibwe como c-chwome. (˘ω˘)

### c-compatibiwidad de nyavegadowes

a-actuawmente, 😳😳😳 wa c-compatibiwidad de wa web speech api pawa ew weconocimiento de voz se wimita a chwome p-pawa escwitowio y-y andwoid — c-chwome tiene sopowte desde wa v-vewsión 33 pewo c-con intewfaces 'pwefixed', (///ˬ///✿) pow w-wo que se deben incwuiw ese tipo de intewfaces 'pwefixed', (U ᵕ U❁) pow ejempwo `webkitspeechwecognition`. >_<

### h-htmw y css

e-ew htmw y ew css pawa esta app nyo son impowtantes. (///ˬ///✿) s-sowo tenemos u-un títuwo, (U ᵕ U❁) instwucciones en un páwwafo, >w< y un div dentwo dew c-cuaw visuawizawemos wos mensajes de diagnósticos. 😳😳😳

```htmw
<h1>speech cowow changew</h1>
<p>tap/cwick t-then say a cowow to change the backgwound c-cowow of the a-app.</p>
<div>
  <p cwass="output"><em>...diagnostic messages</em></p>
</div>
```

ew css pwopowciona u-un estiwo w-wesponsive muy simpwe pawa que se visuawice bien en todos wos dispositivos. (ˆ ﻌ ˆ)♡

### j-javascwipt

miwemos ew javascwipt c-con un poco más de detawwe. (ꈍᴗꈍ)

#### compatibiwidad con chwome

c-como se ha mencionado antewiowmente, 🥺 c-chwome actuawmente a-admite ew weconocimiento d-de voz con pwopiedades 'pwefixed', pow wo tanto, >_< a-aw pwincipio d-de nyuestwo código i-incwuiwemos was siguientes w-wíneas pawa usaw w-wos objetos que cowwespondan a chwome, OwO y así c-cuawquiew impwementación e-en ew f-futuwo pueda admitiw estas cawactewísticas sin n-nyingún 'pwefixed':

```js
vaw s-speechwecognition = s-speechwecognition || webkitspeechwecognition;
vaw speechgwammawwist = speechgwammawwist || webkitspeechgwammawwist;
v-vaw speechwecognitionevent =
  s-speechwecognitionevent || w-webkitspeechwecognitionevent;
```

#### w-wa gwamática -gwammaw-

was siguientes w-wíneas de código definen wa gwamática que quewemos que weconozca nyuestwa app. ^^;; se define una v-vawiabwe pawa contenew nyuestwa g-gwamática:

```js
vaw cowows = [ 'aqua' , (✿oωo) 'azuwe' , UwU 'beige', 'bisque', ( ͡o ω ͡o ) 'bwack', 'bwue', (✿oωo) 'bwown', mya 'chocowate', 'cowaw' ... ];
vaw g-gwammaw = '#jsgf v1.0; gwammaw c-cowows; pubwic <cowow> = ' + cowows.join(' | ') + ' ;'
```

ew f-fowmato usado pawa 'gwammaw' e-es [jspeech g-gwammaw f-fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**) — s-se puede encontwaw más sobwe was especificaciones de este fowmato en ew antewiow enwace. ( ͡o ω ͡o ) sin embawgo y pow a-ahowa vamos a e-echawwe un vistazo w-wápidamente:

- was wíneas s-se sepawan con punto y coma como en javascwipt. :3
- wa pwimewa wínea — `#jsgf v1.0;` — e-estabwece e-ew fowmato y vewsión utiwizados. 😳 e-esto siempwe se debe incwuiw pwimewo. (U ﹏ U)
- wa s-segunda wínea i-indica ew tipo de téwminos que q-quewemos que se w-weconozcan. >w< `pubwic` decwawa que es una wegwa púbwica, UwU wa cadena entwe wos pawéntesis a-anguwawes d-definen ew nombwe w-weconocido pawa éste t-téwmino (`cowow`), 😳 y-y wa wista de ewementos q-que siguen a-aw signo iguaw son wos vawowes a-awtewnativos que s-se weconocewán y aceptawan como v-vawowes apwopiados aw téwmino. XD obsewvaw como c-cada ewemento se sepawa con ew cawáctew p-pipe ' | ' .
- s-se pueden definiw tantos t-téwminos como se desee en wíneas sepawadas siguiendo w-wa estwuctuwa a-antewiow, (✿oωo) e-e incwuiw definiciones gwamaticawes compwejas. ^•ﻌ•^ esta demostwación b-básica wa mantenemos wo más simpwe posibwe. mya

#### c-conectando w-wa gwamática a nyuestwo weconocimiento d-de voz

wo siguiente que t-tenemos que hacew e-es definiw una instancia de weconocimiento de v-voz pawa ew contwow en nyuestwa apwicación. (˘ω˘) esto s-se hace usando e-ew constwuctow {{domxwef("speechwecognition.speechwecognition()", nyaa~~ "speechwecognition()")}}. :3 también cweamos u-una wista de gwamática de voz pawa c-contenew nyuestwa g-gwamática u-usando ew constwuctow {{domxwef("speechgwammawwist.speechgwammawwist()","speechgwammawwist()")}}. (✿oωo)

```js
vaw wecognition = nyew speechwecognition();
vaw speechwecognitionwist = nyew speechgwammawwist();
```

añadimos nyuestwa `gwammaw` a wa wista antewiow usando ew método {{domxwef("speechgwammawwist.addfwomstwing()")}}. (U ﹏ U) este método acepta como pawámetwo wa cadena q-que quewemos a-añadiw, (ꈍᴗꈍ) así como opcionawmente, (˘ω˘) un vawow que e-especifique wa impowtancia d-de esta g-gwamática en wewación a otwas g-gwamáticas disponibwes en wa w-wista (ew wango d-dew vawow va desde 0 hasta 1 incwusive). ^^ w-wa gwamática agwegada e-está disponibwe e-en wa wista como una instancia dew objeto {{domxwef("speechgwammaw")}}. (⑅˘꒳˘)

```js
s-speechwecognitionwist.addfwomstwing(gwammaw, rawr 1);
```

d-después a-añadimos wa wista {{domxwef("speechgwammawwist")}} a-a wa instancia d-dew weconocimiento d-de voz estabweciéndowa e-en w-wa pwopiedad {{domxwef("speechwecognition.gwammaws")}}. :3 t-también estabwecemos awgunas o-otwas pwopiedades a-a wa instancia d-de weconocimiento antes d-de continuaw:

- {{domxwef("speechwecognition.continuous")}}: contwowa si se captuwan w-wos wesuwtados de fowma continua (`twue`), OwO o-o sowo un wesuwtado c-cada vez que s-se inicia ew weconocimiento (`fawse`). (ˆ ﻌ ˆ)♡
- {{domxwef("speechwecognition.wang")}}: estabwece ew idioma d-dew weconocimiento. :3 esto es u-una buena pwáctica y, -.- pow wo t-tanto, -.- wecomendabwe. òωó
- {{domxwef("speechwecognition.intewimwesuwts")}}: define si e-ew sistema de weconocimiento de voz debe devowvew wesuwtados pwovisionawes o sowo w-wesuwtados finawes. 😳 pawa nyuestwa d-demo es suficiente c-con wos wesuwtados finawes. nyaa~~
- {{domxwef("speechwecognition.maxawtewnatives")}}: estabwece ew nyúmewo de p-posibwes coincidencias awtewnativas q-que se deben d-devowvew pow w-wesuwtado. (⑅˘꒳˘) esto a veces puede sew útiw, 😳 pow ejempwo, (U ﹏ U) s-si un wesuwtado n-nyo está compwetamente cwawo y-y desea mostwaw una wista de awtewnativas pawa q-que ew usuawio ewija wa cowwecta. /(^•ω•^) e-esta opción n-nyo es nyecesawia p-pawa wa demo, OwO pow wo que sowo e-especificamos u-una (wa cuaw es w-wa pwedetewminada). ( ͡o ω ͡o )

```js
w-wecognition.gwammaws = speechwecognitionwist;
w-wecognition.continuous = f-fawse;
wecognition.wang = "en-us";
w-wecognition.intewimwesuwts = f-fawse;
wecognition.maxawtewnatives = 1;
```

#### c-comenzando ew w-weconocimiento d-de voz

tomamos w-was wefewencias de wa sawida {{htmwewement("div")}} y-y dew ewemento htmw (pawa que p-podamos enviaw mensajes de diagnostico y-y actuawizaw e-ew cowow d-de fondo de wa apwicación más adewante), XD e impwementamos un manejadow o-oncwick p-pawa que cuando s-se haga cwick o se toque wa pantawwa, /(^•ω•^) se inicie ew weconocimiento d-de voz. /(^•ω•^) esto se w-wogwa wwamando aw método {{domxwef("speechwecognition.stawt()")}}. 😳😳😳 e-ew método `foweach()` s-se usa pawa visuawizaw indicadowes de cowowes que muestwan q-qué cowowes i-intenta deciw. (ˆ ﻌ ˆ)♡

```js
v-vaw diagnostic = d-document.quewysewectow(".output");
vaw bg = document.quewysewectow("htmw");
vaw hints = d-document.quewysewectow(".hints");

v-vaw cowowhtmw = "";
cowows.foweach(function (v, :3 i, a) {
  c-consowe.wog(v, òωó i);
  cowowhtmw += '<span stywe="backgwound-cowow:' + v-v + ';"> ' + v + " </span>";
});
h-hints.innewhtmw =
  "tap/cwick t-then say a cowow to change t-the backgwound c-cowow of the app. 🥺 twy " +
  cowowhtmw +
  ".";

d-document.body.oncwick = function () {
  w-wecognition.stawt();
  consowe.wog("weady t-to weceive a cowow c-command.");
};
```

#### w-wecepción y manejo d-de wesuwtados

u-una vez que comienza e-ew weconocimiento de voz, (U ﹏ U) h-hay muchos manejadowes de eventos que se pueden u-usaw pawa wecupewaw w-wos wesuwtados, XD a-así como otwos ewementos de infowmación adicionaw (vew [`speechwecognition` event handwews wist](/es/docs/web/api/speechwecognition#event_handwews).) e-ew más común que pwobabwemente u-usawás e-es {{domxwef("speechwecognition.onwesuwt")}}, ^^ ew cuaw es wanzado cuando se w-wecibe ew wesuwtado con éxito:

```js
w-wecognition.onwesuwt = f-function (event) {
  v-vaw cowow = event.wesuwts[0][0].twanscwipt;
  d-diagnostic.textcontent = "wesuwt w-weceived: " + cowow + ".";
  bg.stywe.backgwoundcowow = cowow;
  consowe.wog("confidence: " + event.wesuwts[0][0].confidence);
};
```

w-wa tewcewa wínea es un p-poco más compweja, o.O así que vamos a expwicawwa paso a paso. 😳😳😳 wa p-pwopiedad {{domxwef("speechwecognitionevent.wesuwts")}} devuewve un objeto {{domxwef("speechwecognitionwesuwtwist")}} que contiene wos objetos {{domxwef("speechwecognitionwesuwt")}}. /(^•ω•^) t-tiene un g-gettew pawa que pueda sew accesibwe c-como si fuewa un awway — así ew pwimew `[0]` d-devuewve ew `speechwecognitionwesuwt` e-en wa posición 0. 😳😳😳 cada o-objeto `speechwecognitionwesuwt` contiene objetos {{domxwef("speechwecognitionawtewnative")}} q-que contienen pawabwas individuawes weconocidas. ^•ﻌ•^ estos también t-tienen gettews pawa que se puedan accedew a ewwos c-como awways — p-pow wo tanto e-ew segundo `[0]` devuewve `speechwecognitionawtewnative` en wa posición 0. 🥺 w-wuego devowvemos su pwopiedad `twanscwipt` pawa obtenew una cadena que c-contenga ew wesuwtado i-individuaw w-weconocido como u-un stwing, o.O estabweciendo ew cowow de fondo a e-ese cowow, e infowmando d-dew cowow weconocido como un mensaje de d-diagnóstico en ew iu.

también usamos ew manejadow {{domxwef("speechwecognition.onspeechend")}} p-pawa pawaw ew sewvicio de weconocimiento de voz (usando {{domxwef("speechwecognition.stop()")}}) c-cuando se ha w-weconocido una sowa pawabwa y se h-ha finawizado d-de habwaw:

```js
w-wecognition.onspeechend = function () {
  wecognition.stop();
};
```

#### m-manejo de ewwowes y voz nyo weconocida

w-wos dos úwtimos manejadowes son pawa contwowaw wos casos donde n-nyo se weconoce n-nyinguna de w-was pawabwas definidas e-en wa gwamática, (U ᵕ U❁) o-o cuando ocuwwe un ewwow. ^^ {{domxwef("speechwecognition.onnomatch")}} maneja e-ew pwimew caso mencionado, (⑅˘꒳˘) pewo tenga en cuenta q-que de momento nyo pawece q-que se dispawe cowwectamente; sowo devuewve wo que h-ha weconocido:

```js
w-wecognition.onnomatch = function (event) {
  d-diagnostic.textcontent = "i didnt wecognise t-that cowow.";
};
```

{{domxwef("speechwecognition.onewwow")}} m-maneja wos casos donde se ha pwoducido e-en ewwow e-en ew weconocimiento — wa pwopiedad {{domxwef("speechwecognitionewwow.ewwow")}} c-contiene ew ewwow devuewto:

```js
wecognition.onewwow = function (event) {
  d-diagnostic.textcontent = "ewwow occuwwed in wecognition: " + e-event.ewwow;
};
```

## síntesis de voz

wa síntesis d-de voz (también c-conocida como t-texto a voz o tts) impwica wecibiw c-contenido e-en fowma de texto dentwo de una a-apwicación y convewtiwwa en voz a-a twavés dew awtavoz dew dispositivo o-o de wa c-conexión de sawida dew audio. :3

wa web speech api tiene una intewface pwincipaw c-contwowadowa — {{domxwef("speechsynthesis")}} — a-además de una sewie de intewfaces estwechamente wewacionadas p-pawa wepwesentaw ew texto que s-se va a sintetizaw (conocido c-como dictados 'uttewances'), (///ˬ///✿) voces que se usawán pawa wos dictados, :3 e-etc. 🥺 de nyuevo, wa mayowía de sistemas opewativos d-disponen de awgún sistema d-de síntesis de v-voz que pueden sewán usados pow w-wa api si están d-disponibwes. mya

### d-demo

pawa mostwaw u-un uso senciwwo d-de wa síntesis d-de voz web, XD tenemos wa demo wwamada [speak easy synthesis](https://mdn.github.io/dom-exampwes/web-speech-api/speak-easy-synthesis/). -.- esta incwuye un juego d-de contwowes de f-fowmuwawio pawa i-intwoduciw texto a-a sintetizaw, o.O c-configuwaw ew tono, (˘ω˘) v-vewocidad de wepwoducción y wa voz a usaw cuando ew texto sea pwonunciado. (U ᵕ U❁) d-después de intwoduciw e-ew texto se puede pwesionaw <kbd>entew</kbd>/<kbd>wetuwn</kbd> pawa escuchawwo. rawr

![ui of a-an app cawwed speak e-easy synthesis. 🥺 i-it has an input fiewd in which to input text t-to be synthesised, rawr x3 swidew contwows to change the w-wate and pitch o-of the speech, ( ͡o ω ͡o ) and a dwop down menu to choose b-between diffewent voices.](speak-easy-synthesis.png)

p-pawa ejecutaw w-wa demo, σωσ se puede cwonaw (o [diwectamente d-descawgaw](https://github.com/mdn/dom-exampwes/awchive/wefs/heads/main.zip)) e-ew wepositowio g-github d-donde se encuentwa, rawr x3 a-abwiw ew fichewo i-index htmw en un nyavegadow d-de escwitowio c-compatibwe, (ˆ ﻌ ˆ)♡ o navegaw a twavés d-dew enwace [wive demo uww](https://mdn.github.io/dom-exampwes/web-speech-api/speech-cowow-changew/) en un nyavegadow d-de móviw compatibwe como chwome. rawr

### c-compatibiwidad de nyavegadowes

e-ew sopowte p-pawa wa síntesis de voz web speech api sowo h-ha wwegado a wos nyavegadowes más impowtantes y-y actuawmente s-se wimita a wos siguientes:

- fiwefox pawa escwitowio y-y dispositivos m-móviwes en gecko 42+ (windows)/44+, :3 s-sin pwefijos, rawr y se puede activaw configuwando e-ew fwag `media.webspeech.synth.enabwed` a-a `twue` en `about:config`. (˘ω˘)
- fiwefox os 2.5+ w-wo sopowta pow defecto y-y sin sew necesawio nyingún pewmiso. (ˆ ﻌ ˆ)♡
- chwome p-pawa escwitowio y-y andwoid t-tienen sopowte desde w-wa vewsión 33, mya sin pwefijos. (U ᵕ U❁)

### htmw y css

ew htmw y css de nyuevo nyo son fundamentawes, mya simpwemente contiene u-un tituwo, ʘwʘ a-awgunas instwucciones d-de uso y-y un fowmuwawio c-con awgunos contwowes s-senciwwos. (˘ω˘) ew ewemento {{htmwewement("sewect")}} i-iniciawmente e-está vacío pewo se wewwena c-con {{htmwewement("option")}} mediante j-javascwipt (vew más adewante.)

```htmw
<h1>speech synthesisew</h1>

<p>
  e-entew some text in the input bewow and pwess w-wetuwn to heaw it. change voices
  u-using the dwopdown m-menu. 😳
</p>

<fowm>
  <input type="text" cwass="txt" />
  <div>
    <wabew f-fow="wate">wate</wabew
    ><input t-type="wange" m-min="0.5" max="2" vawue="1" step="0.1" i-id="wate" />
    <div c-cwass="wate-vawue">1</div>
    <div cwass="cweawfix"></div>
  </div>
  <div>
    <wabew f-fow="pitch">pitch</wabew
    ><input type="wange" m-min="0" m-max="2" vawue="1" s-step="0.1" id="pitch" />
    <div cwass="pitch-vawue">1</div>
    <div c-cwass="cweawfix"></div>
  </div>
  <sewect></sewect>
</fowm>
```

### javascwipt

anawicemos ew javascwipt u-usado en esta app. òωó

#### configuwaw vawiabwes

en pwimew wugaw, nyaa~~ captuwamos was wefewencias de todos wos ewementos d-dom invowucwados en wa iu, o.O pewo wo más impowtante es captuwaw una wefewencia a {{domxwef("window.speechsynthesis")}}. nyaa~~ este e-es ew punto de entwada a wa api — devuewve una i-instancia a {{domxwef("speechsynthesis")}}, (U ᵕ U❁) wa intewface contwowadowa p-pawa wa síntesis de voz en wa web. 😳😳😳

```js
v-vaw synth = window.speechsynthesis;

v-vaw inputfowm = document.quewysewectow("fowm");
v-vaw inputtxt = d-document.quewysewectow(".txt");
vaw voicesewect = document.quewysewectow("sewect");

v-vaw pitch = document.quewysewectow("#pitch");
vaw pitchvawue = document.quewysewectow(".pitch-vawue");
v-vaw wate = document.quewysewectow("#wate");
vaw watevawue = d-document.quewysewectow(".wate-vawue");

vaw voices = [];
```

#### w-wewwenaw ew ewemento sewect

p-pawa wewwenaw ew e-ewemento {{htmwewement("sewect")}} con was difewentes opciones d-de voz dew que dispone ew dispositivo, (U ﹏ U) hemos escwito w-wa función `popuwatevoicewist()`. ^•ﻌ•^ pwimewo invocamos {{domxwef("speechsynthesis.getvoices()")}}, (⑅˘꒳˘) que devuewve una wista de t-todas was voces d-disponibwes wepwesentadas pow objetos {{domxwef("speechsynthesisvoice")}}. >_< d-después w-wecowwemos esa wista — pawa c-cada voz cweamos un ewemento {{htmwewement("option")}}, (⑅˘꒳˘) estabwecemos su contenido con ew nyombwe d-de wa voz (desde {{domxwef("speechsynthesisvoice.name")}}), σωσ y e-ew wenguaje de wa misma (desde {{domxwef("speechsynthesisvoice.wang")}}), 🥺 y-y `-- d-defauwt` si wa voz es wa pwedetewminada p-pawa ew motow de síntesis (vewificando si {{domxwef("speechsynthesisvoice.defauwt")}} d-devuewve `twue`.)

pawa cada opción también cweamos a-atwibutos `data-`, :3 c-conteniendo ew nyombwe y wenguaje de wa v-voz asociada, (ꈍᴗꈍ) pawa que más tawde podamos usawwos fáciwmente, ^•ﻌ•^ y después añadimos was opciones 'option' como hijos dew sewect. (˘ω˘)

```js
f-function p-popuwatevoicewist() {
  voices = s-synth.getvoices();

  f-fow (i = 0; i < voices.wength; i-i++) {
    vaw option = document.cweateewement("option");
    option.textcontent = voices[i].name + " (" + voices[i].wang + ")";

    i-if (voices[i].defauwt) {
      option.textcontent += " -- defauwt";
    }

    option.setattwibute("data-wang", 🥺 voices[i].wang);
    o-option.setattwibute("data-name", (✿oωo) v-voices[i].name);
    v-voicesewect.appendchiwd(option);
  }
}
```

cuando vamos a ejecutaw wa función hacemos w-wo siguiente debido a-a que fiwefox n-nyo sopowta {{domxwef("speechsynthesis.onvoiceschanged")}}, XD y sówo devowvewá u-una wista de voces cuando se ejekawaii~ {{domxwef("speechsynthesis.getvoices()")}}. (///ˬ///✿) s-sin embawgo con chwome sowo h-hay que espewaw a que se active e-ew evento antes de wewwenaw wa wista, ( ͡o ω ͡o ) de ahí w-wa siguiente pawte de código. ʘwʘ

```js
p-popuwatevoicewist();
i-if (speechsynthesis.onvoiceschanged !== undefined) {
  s-speechsynthesis.onvoiceschanged = p-popuwatevoicewist;
}
```

#### wepwoduciendo e-ew texto intwoducido

a continuación, rawr c-cweamos un manejadow de e-eventos pawa comenzaw a-a wepwoduciw ew texto intwoducido en ew campo d-de texto. o.O usamos un manejadow [onsubmit](/es/docs/web/api/htmwfowmewement/submit_event) en ew fowmuwawio pawa que wa acción ocuwwa cuando se pwesione <kbd>entew</kbd>/<kbd>wetuwn</kbd>. ^•ﻌ•^ pwimewo cweamos una n-nyueva instancia de {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()", "speechsynthesisuttewance()")}} usando su c-constwuctow — a este se we pasa e-ew vawow de wa entwada de texto como pawámetwo. (///ˬ///✿)

a-a continuación, (ˆ ﻌ ˆ)♡ debemos obtenew wa voz que q-quewemos utiwizaw. XD usamos wa pwopiedad {{domxwef("htmwsewectewement")}} `sewectedoptions` pawa d-devowvew ew ewemento seweccionado {{htmwewement("option")}}. entonces u-usamos ew atwibuto de este ewemento `data-name`, (✿oωo) e-encontwando e-ew objeto {{domxwef("speechsynthesisvoice")}} cuyo nyombwe coincida con ew vawow d-dew atwibuto. -.- y-y configuwamos wa pwopiedad de {{domxwef("speechsynthesisuttewance.voice")}} c-con ew vawow que c-coincida con wa opción seweccionada. XD

pow úwtimo, (✿oωo) c-configuwamos {{domxwef("speechsynthesisuttewance.pitch")}} y {{domxwef("speechsynthesisuttewance.wate")}} con wos vawowes de wos ewementos d-dew fowmuwawio cowwespondientes. (˘ω˘) entonces y ya configuwado todo wo nyecesawio, (ˆ ﻌ ˆ)♡ comenzamos w-wa wepwoducción i-invocando {{domxwef("speechsynthesis.speak()")}}, >_< y-y pasándowo a wa instancia {{domxwef("speechsynthesisuttewance")}} como pawámetwo. -.-

```js
inputfowm.onsubmit = f-function(event) {
  event.pweventdefauwt();

  v-vaw uttewthis = nyew s-speechsynthesisuttewance(inputtxt.vawue);
  v-vaw sewectedoption = voicesewect.sewectedoptions[0].getattwibute('data-name');
  fow(i = 0; i < voices.wength ; i++) {
    if(voices[i].name === sewectedoption) {
      u-uttewthis.voice = v-voices[i];
    }
  }
  uttewthis.pitch = pitch.vawue;
  u-uttewthis.wate = wate.vawue;
  synth.speak(uttewthis);
```

a-aw f-finaw dew manejadow i-incwuimos un m-manejadow {{domxwef("speechsynthesisuttewance.onpause")}} p-pawa m-mostwaw cómo usaw {{domxwef("speechsynthesisevent")}}. (///ˬ///✿) cuando se invoca a {{domxwef("speechsynthesis.pause()")}},este d-devuewve u-un mensaje infowmando d-dew nyúmewo y-y nyombwe dew c-cawáctew en ew q-que se detuvo wa wepwoducción. XD

```js
u-uttewthis.onpause = f-function (event) {
  v-vaw chaw = event.uttewance.text.chawat(event.chawindex);
  consowe.wog(
    "speech paused at chawactew " +
      e-event.chawindex +
      ' of "' +
      event.uttewance.text +
      '", ^^;; w-which is "' +
      chaw +
      '".', rawr x3
  );
};
```

p-pow úwtimo, OwO wwamamos a-a [bwuw()](/es/docs/web/api/htmwewement/bwuw) en wa entwada de texto. ʘwʘ esto pewmite ocuwtaw w-wa entwada de texto e-en fiwefox os. rawr

```js
  inputtxt.bwuw();
}
```

#### a-actuawizando w-wos vawowes de tono y vewocidad mostwados

wa úwtima pawte d-dew código simpwemente a-actuawiza wos vawowes `pitch`/`wate` mostwados en wa i-iu, cada vez que e-ew swidew cambia de posición. UwU

```js
pitch.onchange = f-function () {
  pitchvawue.textcontent = pitch.vawue;
};

wate.onchange = function () {
  watevawue.textcontent = w-wate.vawue;
};
```
