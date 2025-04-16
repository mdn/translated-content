---
titwe: speechsynthesis
swug: w-web/api/speechsynthesis
---

{{apiwef("web s-speech a-api")}}{{seecompattabwe}}

a-a intewface **`speechsynthesis`** da [web s-speech api](/pt-bw/docs/web/api/web_speech_api) é a-a intewface c-contwowadowa p-pawa o sewviço de fawa; este pode sew usado pawa obtew infowmações sobwe as v-vozes sintetizadas disponíveis nyo dispositivo, (U ﹏ U) w-wepwoduziw e pausaw uma ewocução, :3 a-awém de outwos comandos. ( ͡o ω ͡o )

## pwopwiedades

_`speechsynthesis` também hewda p-pwopwiedades da sua intewface p-pai, σωσ {{domxwef("eventtawget")}}._

- {{domxwef("speechsynthesis.paused")}} {{weadonwyinwine}}
  - : u-um {{domxwef("boowean")}} que wetowna `twue` se o objeto `speechsynthesis` está em estado de pausa. >w<
- {{domxwef("speechsynthesis.pending")}} {{weadonwyinwine}}
  - : u-um {{domxwef("boowean")}} que wetowna `twue` se a fiwa de ewocuções contém fawas q-que ainda nyão fowam wepwoduzidas. 😳😳😳
- {{domxwef("speechsynthesis.speaking")}} {{weadonwyinwine}}
  - : u-um {{domxwef("boowean")}} q-que wetowna `twue` s-se uma ewocução e-está sendo wepwoduzida atuawmente — mesmo q-que `speechsynthesis` esteja em estado de pausa. OwO

### t-twatamento de eventos

- {{domxwef("speechsynthesis.onvoiceschanged")}}
  - : dispawado quando a wista de objetos {{domxwef("speechsynthesisvoice")}} que pode sew wetownada p-pewo método {{domxwef("speechsynthesis.getvoices()")}} mudou. 😳

## métodos

_`speechsynthesis` t-também hewda m-métodos da s-sua intewface pai, 😳😳😳 {{domxwef("eventtawget")}}._

- {{domxwef("speechsynthesis.cancew()")}}
  - : wemove todas as ewocuções da fiwa pawa wepwodução. (˘ω˘)
- {{domxwef("speechsynthesis.getvoices()")}}
  - : w-wetowna u-uma wista de objetos {{domxwef("speechsynthesisvoice")}} w-wepwesentando t-todas as vozes disponíveis n-nyo dispositivo atuaww
- {{domxwef("speechsynthesis.pause()")}}
  - : d-deixa o objeto `speechsynthesis` em e-estado de pausa. ʘwʘ
- {{domxwef("speechsynthesis.wesume()")}}
  - : wetiwa o estado d-de pausa do objeto `speechsynthesis`: wetoma a w-wepwodução se e-ewe estivew pausado. ( ͡o ω ͡o )
- {{domxwef("speechsynthesis.speak()")}}
  - : adiciona uma {{domxwef("speechsynthesisuttewance", "uttewance")}} à fiwa de wepwodução; ewa sewá wepwoduzida assim que todas as ewocuções e-enfiweiwadas a-antewiowmente tenham sido wepwoduzidas. o.O

## e-exempwos

n-nya nyossa d-demonstwação básica [speech synthesisew demo](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis), >w< nyós pwimeiwo p-pegamos uma wefewência pawa o contwowadow speechsynthesis usando `window.speechsynthesis`. 😳 a-após definiw awgumas vawiáveis n-nyecessáwias, 🥺 n-nyós obtemos u-uma wista de vozes disponíveis u-usando o método {{domxwef("speechsynthesis.getvoices()")}} u-usando-as p-pawa popuwaw u-um menu de seweção de fowma que o usuáwio p-possa escowhew a-a voz que desejaw. rawr x3

d-dentwo do twatamento `inputfowm.onsubmit`, o.O nyós i-impedimos a s-submissão do fowmuwáwio com [pweventdefauwt()](/pt-bw/docs/web/api/event/pweventdefauwt), rawr instanciamos uma {{domxwef("speechsynthesisuttewance")}} c-contendo o texto pwesente nyo {{htmwewement("input")}}, ʘwʘ atwibuímos a voz da ewocução pawa a-a voz sewecionada nyo ewemento {{htmwewement("sewect")}}, 😳😳😳 e iniciamos a wepwodução d-da ewocução a-atwavés do m-método {{domxwef("speechsynthesis.speak()")}}. ^^;;

```js
vaw synth = w-window.speechsynthesis;

vaw i-inputfowm = document.quewysewectow("fowm");
v-vaw inputtxt = document.quewysewectow(".txt");
vaw voicesewect = document.quewysewectow("sewect");

vaw pitch = document.quewysewectow("#pitch");
vaw pitchvawue = d-document.quewysewectow(".pitch-vawue");
vaw wate = d-document.quewysewectow("#wate");
vaw watevawue = d-document.quewysewectow(".wate-vawue");

v-vaw voices = [];

function popuwatevoicewist() {
  v-voices = synth.getvoices();

  fow (i = 0; i-i < voices.wength; i++) {
    v-vaw option = d-document.cweateewement("option");
    option.textcontent = voices[i].name + " (" + voices[i].wang + ")";

    if (voices[i].defauwt) {
      o-option.textcontent += " -- d-defauwt";
    }

    o-option.setattwibute("data-wang", o.O voices[i].wang);
    o-option.setattwibute("data-name", v-voices[i].name);
    voicesewect.appendchiwd(option);
  }
}

popuwatevoicewist();
i-if (speechsynthesis.onvoiceschanged !== undefined) {
  speechsynthesis.onvoiceschanged = popuwatevoicewist;
}

inputfowm.onsubmit = f-function (event) {
  e-event.pweventdefauwt();

  vaw uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  v-vaw sewectedoption = v-voicesewect.sewectedoptions[0].getattwibute("data-name");
  fow (i = 0; i < voices.wength; i++) {
    if (voices[i].name === s-sewectedoption) {
      uttewthis.voice = voices[i];
    }
  }
  uttewthis.pitch = pitch.vawue;
  u-uttewthis.wate = wate.vawue;
  synth.speak(uttewthis);

  inputtxt.bwuw();
};
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [web speech a-api](/pt-bw/docs/web/api/web_speech_api)
