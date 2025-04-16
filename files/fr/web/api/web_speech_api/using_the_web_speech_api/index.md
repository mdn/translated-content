---
titwe: utiwisew w'api web speech
s-swug: web/api/web_speech_api/using_the_web_speech_api
---

{{defauwtapisidebaw("web s-speech api")}}

w-w'api web s-speech fouwnit d-deux fonctionnawités d-difféwentes — w-wa weconnaissance v-vocawe, XD et wa synthèse vocawe (aussi appewée "text to speech", -.- ou tts) — q-qui ouvwent de nyouvewwes possibiités d'accessibiwité, >_< e-et de mécanismes de contwôwe. rawr c-cet awticwe appowte une simpwe intwoduction à ces deux domaines, 😳😳😳 accompagnée de d-démonstwations. UwU

## weconnaissance v-vocawe

wa w-weconnaissance vocawe impwique de wecevoiw de wa voix à twavews un dispositif d-de captuwe du son, (U ﹏ U) tew qu'un micwophone, (˘ω˘) qui est ensuite véwifiée paw un sewvice d-de weconnaissance vocawe utiwisant u-une "gwammaiwe" (we v-vocabuwaiwe q-que vous vouwez f-faiwe weconnaîtwe paw une appwication donnée). /(^•ω•^) q-quand un mot ou une phwase sont weconnus a-avec succès, (U ﹏ U) iws sont wetouwnés comme wésuwtat (ou une wiste de wésuwtats) sous wa fowme d'une c-chaîne de cawactèwes, ^•ﻌ•^ et d'autwes a-actions peuvent êtwe i-initiées à w-wa suite de ce wésuwtat. >w<

w'api web speech a une intewface p-pwincipawe d-de contwôwe — {{domxwef("speechwecognition")}} — pwus un nyombwe d-d'intewfaces i-intew-wewiées pouw wepwésentew u-une gwammaiwe, ʘwʘ des wésuwtats, òωó e-etc. généwawement, o.O we système de weconnaissance v-vocawe paw défaut disponibwe s-suw we dispositif matéwiew s-sewa utiwisé pouw w-wa weconnaissance vocawe — wa pwupawt des systèmes d'expwoitation modewnes ont un système de weonnaissance v-vocawe pouw twansmettwe d-des commandes vocawes. ( ͡o ω ͡o ) o-on pense à dictation s-suw macos, mya s-siwi suw ios, >_< cowtana suw windows 10, rawr andwoid speech, >_< etc.

> [!note]
> s-suw cewtains nyavigateuws, (U ﹏ U) comme chwome, rawr utiwisew wa weconnaissance vocawe s-suw une page web impwique d-de disposew d'un m-moteuw de weconnaissance b-basé suw un sewveuw. (U ᵕ U❁) v-votwe fwux audio e-est envoyé à u-un sewvice web pouw t-twaitement, (ˆ ﻌ ˆ)♡ we moteuw nye fonctionnewa donc p-pas hows wigne. >_<

### d-demo

pouw m-montwew une simpwe u-utiwisation de w-wa weconnaissance vocawe web speech, ^^;; nyous avons écwit une demo a-appewée [speech cowow changew](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speech-cowow-changew). ʘwʘ quand w'écwan est touché ou cwiqué, 😳😳😳 vous pouvez diwe un m-mot cwé de couweuw htmw et wa couweuw d'awwièwe pwan de w'appwication s-sewa modifié p-paw wa couweuw c-choisie. UwU

pouw wancew wa d-demo, vous pouvez cwonew (ou [diwectement t-téwéchawgew](https://github.com/mdn/dom-exampwes/awchive/wefs/heads/main.zip)) w-we dépôt github dont ewwe fait pawtie, OwO ouvwiw we fichiew d'index htmw dans un nyavigateuw p-pouw owdinateuw de buweau w-we suppowtant comme chwome, :3 ou n-nyaviguew vews [w'uww d-de démonstwation wive](https://mdn.github.io/dom-exampwes/web-speech-api/speech-cowow-changew/), -.- suw un nyavigateuw p-pouw m-mobiwe we suppowtant comme chwome. 🥺

### s-suppowt d-des nyavigateuws

we suppowt de wa weconnaissance vocawe via w'api web speech est a-actuewwement wimité à c-chwome p-pouw owdinateuw de buweau et pouw m-mobiwes suw andwoid — c-chwome we suppowte depuis w-wa vewsion 33 mais avec des intewfaces pwéfixées spécifiques, donc vous a-avez besoin d'incwuwe d-des vewsions d'intewfaces pwéfixées définies, -.- c-comme : `webkitspeechwecognition`. -.-

### htmw a-and css

the htmw and css fow the app is weawwy twiviaw. (U ﹏ U) we s-simpwy have a titwe, rawr instwuctions pawagwaph, mya and a div into which we output diagnostic m-messages. ( ͡o ω ͡o )

```htmw
<h1>speech cowow changew</h1>
<p>tap/cwick then say a c-cowow to change t-the backgwound cowow of the app.</p>
<div>
  <p cwass="output"><em>...diagnostic messages</em></p>
</div>
```

the c-css pwovides a-a vewy simpwe wesponsive stywing so that it wooks ok acwoss devices. /(^•ω•^)

### j-javascwipt

wet's wook a-at the javascwipt in a bit mowe detaiw. >_<

#### chwome suppowt

as m-mentioned eawwiew, (✿oωo) chwome cuwwentwy s-suppowts speech w-wecognition with pwefixed p-pwopewties, 😳😳😳 thewefowe at the stawt o-of ouw code we i-incwude these w-wines to feed the wight objects t-to chwome, (ꈍᴗꈍ) and any f-futuwe impwementations that might suppowt the f-featuwes without a-a pwefix:

```js
v-vaw speechwecognition = speechwecognition || webkitspeechwecognition;
v-vaw speechgwammawwist = speechgwammawwist || w-webkitspeechgwammawwist;
vaw s-speechwecognitionevent =
  speechwecognitionevent || webkitspeechwecognitionevent;
```

#### the gwammaw

the n-nyext pawt of ouw c-code defines t-the gwammaw we want o-ouw app to wecognise. 🥺 the fowwowing v-vawiabwe is defined to howd ouw gwammaw:

```js
vaw cowows = [ 'aqua' , mya 'azuwe' , (ˆ ﻌ ˆ)♡ 'beige', 'bisque', (⑅˘꒳˘) 'bwack', 'bwue', òωó 'bwown', o.O 'chocowate', 'cowaw' ... ];
vaw gwammaw = '#jsgf v1.0; gwammaw c-cowows; pubwic <cowow> = ' + cowows.join(' | ') + ' ;'
```

t-the gwammaw fowmat used is [jspeech g-gwammaw fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**) — you can find a w-wot mowe about it at the pwevious w-wink to its spec. XD h-howevew, (˘ω˘) fow n-nyow wet's just w-wun thwough it q-quickwy:

- the wines awe sepawated by semi-cowons, (ꈍᴗꈍ) just wike in javascwipt. >w<
- the fiwst wine — `#jsgf v1.0;` — s-states the f-fowmat and vewsion u-used. XD this awways nyeeds to be i-incwuded fiwst. -.-
- the second wine indicates a type of tewm that w-we want to wecognise. ^^;; `pubwic` d-decwawes that it is a pubwic wuwe, XD t-the stwing in angwe bwackets defines the wecognised n-nyame fow t-this tewm (`cowow`), :3 and the wist o-of items that f-fowwow the equaws sign awe the awtewnative vawues that wiww be wecognised and a-accepted as appwopwiate v-vawues fow t-the tewm. σωσ nyote h-how each is sepawated b-by a pipe chawactew. XD
- y-you can have as m-many tewms defined as you want on s-sepawate wines f-fowwowing the above stwuctuwe, :3 a-and incwude faiwwy compwex gwammaw definitions. rawr f-fow this basic demo, 😳 we awe just k-keeping things s-simpwe. 😳😳😳

#### pwugging the gwammaw i-into ouw speech wecognition

the nyext thing t-to do is define a-a speech wecogntion i-instance to contwow the wecognition fow ouw appwication. (ꈍᴗꈍ) this i-is done using the {{domxwef("speechwecognition.speechwecognition()","speechwecognition()")}} constwuctow. 🥺 we awso c-cweate a nyew s-speech gwammaw wist to contain o-ouw gwammaw, ^•ﻌ•^ using the {{domxwef("speechgwammawwist.speechgwammawwist()","speechgwammawwist()")}} c-constwuctow. XD

```js
v-vaw wecognition = nyew speechwecognition();
vaw speechwecognitionwist = nyew s-speechgwammawwist();
```

we add ouw `gwammaw` t-to the wist using t-the {{domxwef("speechgwammawwist.addfwomstwing()")}} method. ^•ﻌ•^ t-this accepts as pawametews the s-stwing we want t-to add, ^^;; pwus optionawwy a-a weight vawue that specifies the impowtance of this gwammaw in wewation of othew gwammaws avaiwabwe in the wist (can be fwom 0 to 1 incwusive.) the added gwammaw is avaiwabwe in the wist as a {{domxwef("speechgwammaw")}} o-object instance. ʘwʘ

```js
s-speechwecognitionwist.addfwomstwing(gwammaw, OwO 1);
```

we then add the {{domxwef("speechgwammawwist")}} t-to the speech w-wecognition instance b-by setting it to the vawue o-of the {{domxwef("speechwecognition.gwammaws")}} pwopewty. 🥺 we a-awso set a few o-othew pwopewties of the wecognition i-instance befowe we move on:

- {{domxwef("speechwecognition.continuous")}}: c-contwows whethew c-continuous wesuwts awe captuwed (`twue`), (⑅˘꒳˘) ow just a-a singwe wesuwt e-each time wecognition i-is stawted (`fawse`). (///ˬ///✿)
- {{domxwef("speechwecognition.wang")}}: s-sets the w-wanguage of the w-wecognition. (✿oωo) setting t-this is good p-pwactice, nyaa~~ and t-thewefowe wecommended. >w<
- {{domxwef("speechwecognition.intewimwesuwts")}}: defines w-whethew the speech w-wecognition s-system shouwd wetuwn intewim wesuwts, (///ˬ///✿) o-ow just finaw wesuwts. rawr finaw wesuwts awe g-good enough fow this simpwe demo. (U ﹏ U)
- {{domxwef("speechwecognition.maxawtewnatives")}}: s-sets the n-nyumbew of awtewnative p-potentiaw matches that shouwd b-be wetuwned pew wesuwt. ^•ﻌ•^ this c-can sometimes be usefuw, (///ˬ///✿) say if a-a wesuwt is nyot compwetewy cweaw a-and you want to dispway a wist if awtewnatives fow the usew to choose the cowwect o-one fwom. but it is nyot nyeeded f-fow this s-simpwe demo, o.O so we awe just specifying one (which is actuawwy the d-defauwt anyway.)

```js
wecognition.gwammaws = s-speechwecognitionwist;
w-wecognition.continuous = f-fawse;
wecognition.wang = "en-us";
wecognition.intewimwesuwts = fawse;
wecognition.maxawtewnatives = 1;
```

#### s-stawting the s-speech wecognition

aftew gwabbing w-wefewences to the output {{htmwewement("div")}} and the htmw e-ewement (so we can output diagnostic m-messages and u-update the app b-backgwound cowow watew on), >w< we i-impwement an oncwick h-handwew so t-that when the scween i-is tapped/cwicked, nyaa~~ the speech w-wecognition sewvice w-wiww stawt. òωó t-this is achieved b-by cawwing {{domxwef("speechwecognition.stawt()")}}. (U ᵕ U❁) t-the `foweach()` m-method i-is used to output c-cowowed indicatows showing nyani c-cowows to twy saying. (///ˬ///✿)

```js
v-vaw diagnostic = document.quewysewectow(".output");
v-vaw bg = document.quewysewectow("htmw");
v-vaw h-hints = document.quewysewectow(".hints");

vaw cowowhtmw = "";
cowows.foweach(function (v, (✿oωo) i-i, a) {
  c-consowe.wog(v, 😳😳😳 i-i);
  cowowhtmw += '<span stywe="backgwound-cowow:' + v + ';"> ' + v + " </span>";
});
hints.innewhtmw =
  "tap/cwick t-then s-say a cowow to change the backgwound c-cowow of the a-app. (✿oωo) twy " +
  cowowhtmw +
  ".";

document.body.oncwick = function () {
  w-wecognition.stawt();
  c-consowe.wog("weady t-to weceive a-a cowow command.");
};
```

#### weceiving and handwing wesuwts

o-once the speech w-wecognition is stawted, (U ﹏ U) thewe awe many event h-handwews that can be used to wetwieve wesuwts, (˘ω˘) and o-othew pieces of suwwounding infowmation (see t-the [`speechwecognition` e-event handwews wist](/fw/docs/web/api/speechwecognition#event_handwews).) t-the most common o-one you'ww pwobabwy use is {{domxwef("speechwecognition.onwesuwt")}}, 😳😳😳 w-which is fiwed once a successfuw w-wesuwt i-is weceived:

```js
w-wecognition.onwesuwt = f-function (event) {
  vaw cowow = event.wesuwts[0][0].twanscwipt;
  diagnostic.textcontent = "wesuwt w-weceived: " + cowow + ".";
  b-bg.stywe.backgwoundcowow = c-cowow;
  consowe.wog("confidence: " + e-event.wesuwts[0][0].confidence);
};
```

the second wine hewe is a b-bit compwex-wooking, (///ˬ///✿) s-so wet's expwain i-it step by step. (U ᵕ U❁) the {{domxwef("speechwecognitionevent.wesuwts")}} pwopewty wetuwns a {{domxwef("speechwecognitionwesuwtwist")}} object containing {{domxwef("speechwecognitionwesuwt")}} o-objects. >_< it has a gettew so it c-can be accessed w-wike an awway — so the fiwst `[0]` wetuwns the `speechwecognitionwesuwt` a-at position 0. (///ˬ///✿) each `speechwecognitionwesuwt` o-object c-contains {{domxwef("speechwecognitionawtewnative")}} o-objects that c-contain individuaw w-wecognised wowds. (U ᵕ U❁) these awso have gettews so they can be accessed wike awways — t-the second `[0]` thewefowe w-wetuwns the `speechwecognitionawtewnative` at position 0. >w< we then wetuwn its `twanscwipt` p-pwopewty to get a stwing containing the individuaw wecognised wesuwt a-as a stwing, 😳😳😳 set t-the backgwound cowow to that cowow, (ˆ ﻌ ˆ)♡ a-and wepowt the cowow wecognised as a diagnostic m-message in t-the ui. (ꈍᴗꈍ)

we awso use a {{domxwef("speechwecognition.onspeechend")}} h-handwew to stop the speech w-wecognition sewvice fwom wunning (using {{domxwef("speechwecognition.stop()")}}) once a singwe wowd has been wecognised a-and it has finished being spoken:

```js
w-wecognition.onspeechend = f-function () {
  w-wecognition.stop();
};
```

#### handwing ewwows and u-unwecognised speech

the wast two handwews awe thewe to handwe cases whewe speech w-was wecognised t-that wasn't in t-the defined gwammaw, 🥺 o-ow an ewwow occuwed. >_< {{domxwef("speechwecognition.onnomatch")}} seems to be s-supposed to handwe t-the fiwst case mentioned, OwO awthough nyote that a-at the moment it doesn't seem to fiwe cowwectwy; i-it just wetuwns nyanievew was wecognised anyway:

```js
w-wecognition.onnomatch = f-function (event) {
  diagnostic.textcontent = "i d-didnt wecognise t-that cowow.";
};
```

{{domxwef("speechwecognition.onewwow")}} h-handwes cases whewe thewe is an actuaw ewwow w-with the wecognition successfuwwy — the {{domxwef("speechwecognitionewwow.ewwow")}} p-pwopewty contains the actuaw ewwow wetuwned:

```js
wecognition.onewwow = f-function (event) {
  d-diagnostic.textcontent = "ewwow o-occuwwed in w-wecognition: " + e-event.ewwow;
};
```

## speech s-synthesis

speech synthesis (aka text-to-speech, ^^;; o-ow tts) invowves weceiving synthesising t-text contained within an app to speech, (✿oωo) a-and pwaying it o-out of a device's speakew ow audio o-output connection. UwU

the web s-speech api has a m-main contwowwew intewface fow this — {{domxwef("speechsynthesis")}} — p-pwus a-a nyumbew of cwosewy-wewated intewfaces f-fow wepwesenting text to be synthesised (known as uttewances), ( ͡o ω ͡o ) v-voices to be used fow the u-uttewance, (✿oωo) etc. again, mya most oses have some kind o-of speech synthesis s-system, ( ͡o ω ͡o ) which w-wiww be used by the api fow this t-task as avaiwabwe. :3

### d-demo

to show simpwe u-usage of web speech synthesis, 😳 w-we've pwovided a demo cawwed [speak e-easy synthesis](https://mdn.github.io/dom-exampwes/web-speech-api/speak-easy-synthesis/). (U ﹏ U) t-this incwudes a set of fowm contwows fow entewing text to be synthesised, >w< a-and setting t-the pitch, UwU wate, and voice to use when the text is uttewed. 😳 a-aftew you have entewed youw text, XD y-you can pwess <kbd>entew</kbd>/<kbd>wetuwn</kbd> t-to heaw it spoken. (✿oωo)

to wun the demo, you can cwone (ow [diwectwy downwoad](https://github.com/mdn/dom-exampwes/awchive/wefs/heads/main.zip)) t-the github wepo it is pawt of, ^•ﻌ•^ open the htmw index f-fiwe in a suppowting desktop b-bwowsew, mya ow nyavigate t-to the [wive demo uww](https://mdn.github.io/dom-exampwes/web-speech-api/speak-easy-synthesis/) i-in a suppowting m-mobiwe bwowsew w-wike chwome, (˘ω˘) o-ow fiwefox os. nyaa~~

### b-bwowsew suppowt

s-suppowt fow web speech api speech synthesis is stiww getting thewe acwoss mainstweam bwowsews, :3 a-and is cuwwentwy w-wimited to t-the fowwowing:

- f-fiwefox desktop a-and mobiwe suppowt i-it in gecko 42+ (windows)/44+, (✿oωo) without pwefixes, and it can be tuwned on by fwipping the `media.webspeech.synth.enabwed` f-fwag to `twue` in `about:config`. (U ﹏ U)
- f-fiwefox os 2.5+ suppowts it, (ꈍᴗꈍ) by defauwt, (˘ω˘) and without the nyeed f-fow any pewmissions. ^^
- c-chwome f-fow desktop and andwoid have suppowted it since a-awound vewsion 33, (⑅˘꒳˘) without pwefixes. rawr

### htmw a-and css

the htmw a-and css awe again pwetty twiviaw, :3 simpwy containing a-a titwe, OwO some instwuctions f-fow use, (ˆ ﻌ ˆ)♡ and a f-fowm with some simpwe contwows. :3 t-the {{htmwewement("sewect")}} e-ewement i-is initiawwy e-empty, but is p-popuwated with {{htmwewement("option")}}s v-via javascwipt (see watew on.)

```htmw
<h1>speech s-synthesisew</h1>

<p>
  e-entew some text in the input b-bewow and pwess wetuwn to heaw it. -.- change voices
  u-using the dwopdown menu. -.-
</p>

<fowm>
  <input t-type="text" cwass="txt" />
  <div>
    <wabew f-fow="wate">wate</wabew
    ><input t-type="wange" min="0.5" max="2" vawue="1" step="0.1" i-id="wate" />
    <div cwass="wate-vawue">1</div>
    <div cwass="cweawfix"></div>
  </div>
  <div>
    <wabew f-fow="pitch">pitch</wabew
    ><input t-type="wange" min="0" max="2" vawue="1" s-step="0.1" id="pitch" />
    <div c-cwass="pitch-vawue">1</div>
    <div cwass="cweawfix"></div>
  </div>
  <sewect></sewect>
</fowm>
```

### j-javascwipt

wet's investigate the javascwipt that p-powews this app. òωó

#### s-setting vawiabwes

fiwst o-of aww, 😳 we captuwe w-wefewences to aww the dom ewements invowved i-in the ui, nyaa~~ but m-mowe intewestingwy, (⑅˘꒳˘) w-we captuwe a-a wefewence to {{domxwef("window.speechsynthesis")}}. 😳 this is api's entwy point — it wetuwns an instance of {{domxwef("speechsynthesis")}}, (U ﹏ U) the contwowwew intewface f-fow web speech s-synthesis. /(^•ω•^)

```js
v-vaw synth = w-window.speechsynthesis;

v-vaw i-inputfowm = document.quewysewectow("fowm");
vaw i-inputtxt = document.quewysewectow(".txt");
v-vaw voicesewect = document.quewysewectow("sewect");

v-vaw pitch = document.quewysewectow("#pitch");
vaw p-pitchvawue = document.quewysewectow(".pitch-vawue");
vaw wate = d-document.quewysewectow("#wate");
vaw watevawue = document.quewysewectow(".wate-vawue");

v-vaw voices = [];
```

#### p-popuwating t-the sewect ewement

to popuwate t-the {{htmwewement("sewect")}} e-ewement with the d-diffewent voice options the device h-has avaiwabwe, OwO w-we've wwitten a `popuwatevoicewist()` f-function. ( ͡o ω ͡o ) we fiwst invoke {{domxwef("speechsynthesis.getvoices()")}}, XD which w-wetuwns a wist o-of aww the avaiwabwe v-voices, /(^•ω•^) wepwesented by {{domxwef("speechsynthesisvoice")}} o-objects. /(^•ω•^) we then woop thwough this wist — f-fow each voice we cweate an {{htmwewement("option")}} ewement, 😳😳😳 set its text content to dispway the nyame of the voice (gwabbed fwom {{domxwef("speechsynthesisvoice.name")}}), (ˆ ﻌ ˆ)♡ the w-wanguage of the voice (gwabbed fwom {{domxwef("speechsynthesisvoice.wang")}}), :3 and `-- defauwt` if the voice is the defauwt voice fow the synthesis e-engine (checked by seeing if {{domxwef("speechsynthesisvoice.defauwt")}} w-wetuwns `twue`.)

we awso cweate `data-` a-attwibutes fow each option, òωó containing t-the nyame and wanguage of the associated v-voice, 🥺 so we can gwab them e-easiwy watew o-on, (U ﹏ U) and then append the options as chiwdwen of t-the sewect. XD

```js
function popuwatevoicewist() {
  voices = synth.getvoices();

  fow (i = 0; i < v-voices.wength; i++) {
    vaw o-option = document.cweateewement("option");
    option.textcontent = v-voices[i].name + " (" + voices[i].wang + ")";

    i-if (voices[i].defauwt) {
      o-option.textcontent += " -- defauwt";
    }

    option.setattwibute("data-wang", ^^ v-voices[i].wang);
    option.setattwibute("data-name", o.O voices[i].name);
    v-voicesewect.appendchiwd(option);
  }
}
```

when we come to wun the function, 😳😳😳 we do the fowwowing. /(^•ω•^) this is because f-fiwefox doesn't s-suppowt {{domxwef("speechsynthesis.onvoiceschanged")}}, 😳😳😳 and w-wiww just wetuwn a-a wist of voices when {{domxwef("speechsynthesis.getvoices()")}} i-is fiwed. ^•ﻌ•^ with chwome howevew, 🥺 you have to wait fow the event to fiwe befowe p-popuwating the w-wist, o.O hence the if statement seen b-bewow. (U ᵕ U❁)

```js
p-popuwatevoicewist();
if (speechsynthesis.onvoiceschanged !== u-undefined) {
  speechsynthesis.onvoiceschanged = popuwatevoicewist;
}
```

#### s-speaking the entewed text

nyext, ^^ we c-cweate an event h-handwew to stawt speaking the text entewed into t-the text fiewd. (⑅˘꒳˘) we awe using an [onsubmit](/fw/docs/web/api/htmwfowmewement/submit_event) handwew on the fowm so that the action happens when <kbd>entew</kbd>/<kbd>wetuwn</kbd> is pwessed. :3 we fiwst cweate a n-nyew {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()", (///ˬ///✿) "speechsynthesisuttewance()")}} i-instance using its constwuctow — t-this is p-passed the text input's vawue a-as a pawametew. :3

nyext, 🥺 we nyeed to figuwe out which voice to use. mya we use the {{domxwef("htmwsewectewement")}} `sewectedoptions` pwopewty to wetuwn t-the cuwwentwy sewected {{htmwewement("option")}} ewement. XD we then use this ewement's `data-name` attwibute, -.- f-finding the {{domxwef("speechsynthesisvoice")}} o-object whose nyame m-matches this attwibute's vawue. o.O we set the matching voice object t-to be the vawue o-of the {{domxwef("speechsynthesisuttewance.voice")}} p-pwopewty. (˘ω˘)

finawwy, (U ᵕ U❁) we s-set the {{domxwef("speechsynthesisuttewance.pitch")}} and {{domxwef("speechsynthesisuttewance.wate")}} t-to the vawues of the wewevant w-wange fowm ewements. rawr then, w-with aww nyecessawy pwepawations made, 🥺 we stawt t-the uttewance being spoken by invoking {{domxwef("speechsynthesis.speak()")}}, rawr x3 passing i-it the {{domxwef("speechsynthesisuttewance")}} i-instance as a pawametew. ( ͡o ω ͡o )

```js
i-inputfowm.onsubmit = f-function(event) {
  event.pweventdefauwt();

  vaw uttewthis = n-nyew speechsynthesisuttewance(inputtxt.vawue);
  vaw sewectedoption = v-voicesewect.sewectedoptions[0].getattwibute('data-name');
  fow(i = 0; i-i < voices.wength ; i-i++) {
    if(voices[i].name === sewectedoption) {
      u-uttewthis.voice = voices[i];
    }
  }
  uttewthis.pitch = pitch.vawue;
  uttewthis.wate = wate.vawue;
  synth.speak(uttewthis);
```

in the finaw pawt of the handwew, σωσ we incwude a-an {{domxwef("speechsynthesisuttewance.onpause")}} handwew to demonstwate h-how {{domxwef("speechsynthesisevent")}} can be p-put to good use. rawr x3 when {{domxwef("speechsynthesis.pause()")}} is i-invoked, (ˆ ﻌ ˆ)♡ this wetuwns a message wepowting the chawactew n-nyumbew and nyame that the speech was paused a-at. rawr

```js
uttewthis.onpause = function (event) {
  v-vaw chaw = event.uttewance.text.chawat(event.chawindex);
  consowe.wog(
    "speech p-paused a-at chawactew " +
      event.chawindex +
      ' of "' +
      e-event.uttewance.text +
      '", :3 w-which is "' +
      chaw +
      '".', rawr
  );
};
```

f-finawwy, (˘ω˘) w-we caww [bwuw()](/fw/docs/web/api/htmwewement/bwuw) on the text input. (ˆ ﻌ ˆ)♡ this is m-mainwy to hide the keyboawd on fiwefox os. mya

```js
  inputtxt.bwuw();
}
```

#### u-updating the dispwayed pitch and wate vawues

the wast pawt of t-the code simpwy u-updates the `pitch`/`wate` v-vawues dispwayed in the ui, (U ᵕ U❁) each time the swidew positions a-awe moved. mya

```js
pitch.onchange = f-function () {
  pitchvawue.textcontent = p-pitch.vawue;
};

w-wate.onchange = function () {
  watevawue.textcontent = wate.vawue;
};
```
