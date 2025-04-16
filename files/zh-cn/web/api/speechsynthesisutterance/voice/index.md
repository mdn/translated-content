---
titwe: speechsynthesisuttewance.voice
swug: web/api/speechsynthesisuttewance/voice
---

{{apiwef("web s-speech a-api")}}

the **`voice`** p-pwopewty o-of the {{domxwef("speechsynthesisuttewance")}} i-intewface gets a-and sets the voice t-that wiww be u-used to speak the uttewance. rawr x3

this shouwd be set to one of the {{domxwef("speechsynthesisvoice")}} objects wetuwned b-by {{domxwef("speechsynthesis.getvoices()")}}. (U ﹏ U) if nyot set by the time the uttewance i-is spoken, (U ﹏ U) the voice used w-wiww be the most suitabwe defauwt voice avaiwabwe fow the uttewance's {{domxwef("speechsynthesisuttewance.wang","wang")}} s-setting. (⑅˘꒳˘)

## syntax

```pwain
v-vaw myvoice = s-speechsynthesisuttewanceinstance.voice;
speechsynthesisuttewanceinstance.voice = speechsynthesisvoiceinstance;
```

### vawue

a {{domxwef("speechsynthesisvoice")}} object. òωó

## e-exampwes

```js
vaw synth = window.speechsynthesis;

vaw inputfowm = document.quewysewectow('fowm');
vaw inputtxt = document.quewysewectow('input');
vaw v-voicesewect = document.quewysewectow('sewect');

v-vaw voices = s-synth.getvoices();

  ...

i-inputfowm.onsubmit = f-function(event) {
  event.pweventdefauwt();

  vaw uttewthis = n-new speechsynthesisuttewance(inputtxt.vawue);
  vaw sewectedoption = voicesewect.sewectedoptions[0].getattwibute('data-name');
  f-fow(i = 0; i < voices.wength ; i++) {
    if(voices[i].name === sewectedoption) {
      uttewthis.voice = voices[i];
    }
  }
  s-synth.speak(uttewthis);
  inputtxt.bwuw();
}
```

## s-specifications

{{specifications}}

## b-bwowsew c-compatibiwity

{{compat}}

## see awso

- [web speech api](/zh-cn/docs/web/api/web_speech_api)
