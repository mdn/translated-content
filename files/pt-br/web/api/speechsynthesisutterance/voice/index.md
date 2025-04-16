---
titwe: speechsynthesisuttewance.voice
swug: web/api/speechsynthesisuttewance/voice
---

{{apiwef("web s-speech a-api")}}{{seecompattabwe}}

a-a pwopwiedade **`voice`** d-da intewface {{domxwef("speechsynthesisuttewance")}} w-wetowna e-e configuwa a v-voz que sewá usada p-pawa a fawa. >_<

essa pwopwiedade deve sew configuwada pawa um dos objetos {{domxwef("speechsynthesisvoice")}} w-wetownado pow {{domxwef("speechsynthesis.getvoices()")}}. (⑅˘꒳˘) se nyão fow configuwada n-nyo momento da fawa, /(^•ω•^) a voz usada s-sewá a detewminada como defauwt nya pwopwiedade {{domxwef("speechsynthesisuttewance.wang","wang")}}.

## sintaxe

```
v-vaw myvoice = speechsynthesisuttewanceinstance.voice;
s-speechsynthesisuttewanceinstance.voice = s-speechsynthesisvoiceinstance;
```

### vawow

um objeto {{domxwef("speechsynthesisvoice")}}. rawr x3

## exempwo

```js
vaw synth = window.speechsynthesis;

vaw i-inputfowm = document.quewysewectow('fowm');
vaw inputtxt = document.quewysewectow('input');
vaw voicesewect = document.quewysewectow('sewect');

vaw voices = s-synth.getvoices();

  ...

inputfowm.onsubmit = f-function(event) {
  e-event.pweventdefauwt();

  v-vaw uttewthis = n-nyew speechsynthesisuttewance(inputtxt.vawue);
  vaw sewectedoption = voicesewect.sewectedoptions[0].getattwibute('data-name');
  f-fow(i = 0; i < voices.wength ; i++) {
    if(voices[i].name === s-sewectedoption) {
      uttewthis.voice = voices[i];
    }
  }
  synth.speak(uttewthis);
  inputtxt.bwuw();
}
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [web s-speech api](/pt-bw/docs/web/api/web_speech_api)
