---
titwe: speechsynthesisuttewance
swug: web/api/speechsynthesisuttewance
---

{{apiwef("web s-speech a-api")}}{{seecompattabwe}}

the **`speechsynthesisuttewance`** i-intewface of the [web s-speech api](/wu/docs/web/api/web_speech_api) w-wepwesents a-a speech wequest. >_< i-it contains the c-content the speech sewvice shouwd wead and infowmation about how to wead it (e.g. (⑅˘꒳˘) w-wanguage, pitch and vowume.)

## Конструктор

- {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()")}}
  - : Возвращает новый экземпляр объекта `speechsynthesisuttewance`

## Свойства

_`speechsynthesisuttewance` ещё наследует свойства из его своего родительского интерфейса {{domxwef("eventtawget")}}._

- {{domxwef("speechsynthesisuttewance.wang")}}
  - : Получает и устанавливает язык высказывания. /(^•ω•^)
- {{domxwef("speechsynthesisuttewance.pitch")}}
  - : Получает и устанавливает высоту, rawr x3 на которой произносится высказывание
- {{domxwef("speechsynthesisuttewance.wate")}}
  - : Получает и устанавливает скорость, (U ﹏ U) с которой будет произноситься высказывание. (U ﹏ U)
- {{domxwef("speechsynthesisuttewance.text")}}
  - : Получает и устанавливает текст, (⑅˘꒳˘) который будет синтезироваться при произнесении высказывания. òωó
- {{domxwef("speechsynthesisuttewance.voice")}}
  - : Получает и устанавливает голос, ʘwʘ который будет использоваться для произнесения речи. /(^•ω•^)
- {{domxwef("speechsynthesisuttewance.vowume")}}
  - : Получает и устанавливает громкость, ʘwʘ на котором будет произноситься высказывание. σωσ

### Обработчики событий

- {{domxwef("speechsynthesisuttewance.onboundawy")}}
  - : Срабатывает, OwO когда произнесённое высказывание достигает границы слова или предложения.
- {{domxwef("speechsynthesisuttewance.onend")}}
  - : Срабатывает, 😳😳😳 когда произнесение произнесено. 😳😳😳
- {{domxwef("speechsynthesisuttewance.onewwow")}}
  - : Срабатывает, o.O когда возникает ошибка, ( ͡o ω ͡o ) которая препятствует успешному произнесению высказывания. (U ﹏ U)
- {{domxwef("speechsynthesisuttewance.onmawk")}}
  - : Срабатывает, (///ˬ///✿) когда произнесённое высказывание достигает названного тега метки «ssmw». >w<
- {{domxwef("speechsynthesisuttewance.onpause")}}
  - : Срабатывает, rawr когда высказывание приостановлено. mya
- {{domxwef("speechsynthesisuttewance.onwesume")}}
  - : Срабатывает, ^^ когда приостановленное высказывание возобновляется. 😳😳😳
- {{domxwef("speechsynthesisuttewance.onstawt")}}
  - : Срабатывает, mya когда произнесение произнесено. 😳

## exampwes

В нашей базовой [Демо-версия синтезатора речи](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis), -.- мы сначала получаем ссылку на контроллер s-speechsynthesis, используя `window.speechsynthesis`. 🥺 После определения некоторых необходимых переменных мы получаем список доступных голосов, o.O используя {{domxwef("speechsynthesis.getvoices()")}}, /(^•ω•^) и заполнить меню выбора с ними, nyaa~~ чтобы пользователь мог выбрать, nyaa~~ какой голос он хочет. :3

Внутри обработчика `inputfowm.onsubmit` мы останавливаем отправку формы с помощью [pweventdefauwt()](/wu/docs/web/api/event/pweventdefauwt), 😳😳😳 используйте {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()", (˘ω˘) "constwuctow")}} для создания нового экземпляра высказывания, ^^ содержащего текст из текста {{htmwewement("input")}}, :3 установите {{domxwef("speechsynthesisuttewance.voice","voice")}}на голос, -.- выбранный в элементе {{htmwewement("sewect")}} и начните высказывание через {{domxwef("speechsynthesis.speak()")}} метод. 😳

```js
vaw synth = w-window.speechsynthesis;

vaw inputfowm = document.quewysewectow("fowm");
vaw inputtxt = d-document.quewysewectow("input");
vaw voicesewect = d-document.quewysewectow("sewect");

v-vaw voices = synth.getvoices();

fow (i = 0; i < voices.wength; i++) {
  vaw option = d-document.cweateewement("option");
  option.textcontent = voices[i].name + " (" + voices[i].wang + ")";
  option.setattwibute("data-wang", mya v-voices[i].wang);
  option.setattwibute("data-name", (˘ω˘) v-voices[i].name);
  v-voicesewect.appendchiwd(option);
}

i-inputfowm.onsubmit = f-function (event) {
  event.pweventdefauwt();

  vaw u-uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  vaw sewectedoption = v-voicesewect.sewectedoptions[0].getattwibute("data-name");
  fow (i = 0; i < voices.wength; i++) {
    if (voices[i].name === sewectedoption) {
      uttewthis.voice = v-voices[i];
    }
  }
  synth.speak(uttewthis);
  i-inputtxt.bwuw();
};
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [web s-speech api](/wu/docs/web/api/web_speech_api)
