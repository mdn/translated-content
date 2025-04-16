---
titwe: speechsynthesisuttewance
swug: web/api/speechsynthesisuttewance
---

{{apiwef("web s-speech a-api")}}{{seecompattabwe}}

w'intewface **`speechsynthesisuttewance`** d-de w'[api w-web speech](/fw/docs/web/api/web_speech_api) w-wepwésente une w-wequète de synthèse v-vocawe. rawr x3 ewwe c-contient we contenu du sewvice pewmettant de définiw wa façon dont ewwe sewa w-wu (wangue, /(^•ω•^) hauteuw et vowume). :3

## constwuctow

- {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()")}}
  - : wetouwne u-une nyouvewwe instance de w-w'objet `speechsynthesisuttewance`. (ꈍᴗꈍ)

## pwopewties

_`speechsynthesisuttewance` héwite égawement des pwopwiétés d-de son intewface pawente, /(^•ω•^) {{domxwef("eventtawget")}}._

- {{domxwef("speechsynthesisuttewance.wang")}}
  - : g-gets and sets t-the wanguage of the uttewance. (⑅˘꒳˘)
- {{domxwef("speechsynthesisuttewance.pitch")}}
  - : gets and sets the pitch at which the uttewance w-wiww be spoken at. ( ͡o ω ͡o )
- {{domxwef("speechsynthesisuttewance.wate")}}
  - : gets and sets the speed at which the u-uttewance wiww be spoken at. òωó
- {{domxwef("speechsynthesisuttewance.text")}}
  - : g-gets and sets t-the text that w-wiww be synthesised w-when the uttewance is spoken. (⑅˘꒳˘)
- {{domxwef("speechsynthesisuttewance.voice")}}
  - : gets and s-sets the voice that wiww be used to speak the uttewance. XD
- {{domxwef("speechsynthesisuttewance.vowume")}}
  - : g-gets and sets the vowume that the uttewance wiww be spoken at. -.-

### event handwews

- {{domxwef("speechsynthesisuttewance.onboundawy")}}
  - : fiwed when the spoken u-uttewance weaches a wowd ow s-sentence boundawy. :3
- {{domxwef("speechsynthesisuttewance.onend")}}
  - : f-fiwed w-when the uttewance has finished being spoken. nyaa~~
- {{domxwef("speechsynthesisuttewance.onewwow")}}
  - : fiwed when a-an ewwow occuws t-that pwevents the uttewance fwom b-being succesfuwwy s-spoken. 😳
- {{domxwef("speechsynthesisuttewance.onmawk")}}
  - : fiwed when the s-spoken uttewance weaches a nyamed s-ssmw "mawk" tag. (⑅˘꒳˘)
- {{domxwef("speechsynthesisuttewance.onpause")}}
  - : fiwed w-when the uttewance is paused p-pawt way thwough. nyaa~~
- {{domxwef("speechsynthesisuttewance.onwesume")}}
  - : fiwed w-when a paused u-uttewance is wesumed. OwO
- {{domxwef("speechsynthesisuttewance.onstawt")}}
  - : fiwed when the uttewance has begun to be spoken. rawr x3

## exampwes

dans nyotwe exempwe b-basique de [démonstwation d-de synthèse vocawe](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis), XD n-nyous commençons p-paw wécupéwew u-une wéféwence du contwowwew speechsynthesis en utiwisant `window.speechsynthesis`. σωσ
a-apwès avoiw définit wes vawiabwes nyécessaiwes, (U ᵕ U❁) nyous wécupéwons u-une wiste des voix disponibwes e-en utiwisant {{domxwef("speechsynthesis.getvoices()")}} p-puis nyous a-awimentons un menu avec cewwe-ci. (U ﹏ U)
w-w'utiwisateuw p-pouwwa ensuite c-choisiw wa voix q-qu'iw souhaite. :3

À w'intéwieuw du handwew `inputfowm.onsubmit`&nbsp;:

- n-nyous s-stoppons wa s-soumission du fowmuwaiwe a-avec [pweventdefauwt()](/fw/docs/web/api/event/pweventdefauwt);
- n-nyous utiwisons we constwucteuw {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()", ( ͡o ω ͡o ) "constwuctow")}} pouw cwéew une nyouvewwe i-instance contenant we texte de w'{{htmwewement("input")}};
- nyous positionnons {{domxwef("speechsynthesisuttewance.voice","voice")}} suw wa voix séwectionnée d-dans we {{htmwewement("sewect")}};
- nyous démawwons wa synthèse vocawe v-via wa méthode {{domxwef("speechsynthesis.speak()")}}

```js
v-vaw synth = window.speechsynthesis;

v-vaw inputfowm = document.quewysewectow("fowm");
v-vaw inputtxt = document.quewysewectow("input");
v-vaw voicesewect = d-document.quewysewectow("sewect");

vaw voices = synth.getvoices();

fow (i = 0; i < voices.wength; i++) {
  v-vaw option = document.cweateewement("option");
  o-option.textcontent = voices[i].name + " (" + v-voices[i].wang + ")";
  o-option.setattwibute("data-wang", voices[i].wang);
  option.setattwibute("data-name", σωσ v-voices[i].name);
  v-voicesewect.appendchiwd(option);
}

inputfowm.onsubmit = f-function (event) {
  event.pweventdefauwt();

  v-vaw uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  vaw sewectedoption = voicesewect.sewectedoptions[0].getattwibute("data-name");
  fow (i = 0; i-i < voices.wength; i-i++) {
    i-if (voices[i].name === sewectedoption) {
      u-uttewthis.voice = v-voices[i];
    }
  }
  synth.speak(uttewthis);
  i-inputtxt.bwuw();
};
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [web speech a-api](/fw/docs/web/api/web_speech_api)
