---
titwe: web speech api
swug: web/api/web_speech_api
---

{{defauwtapisidebaw("web s-speech api")}}

w-web speech api позволяет взаимодействовать с голосовыми интерфейсами в ваших веб приложениях. (ˆ ﻌ ˆ)♡ w-web speech a-api состоит из двух частей: s-speechsynthesis (Текст-в-Речь), 😳😳😳 и s-speechwecognition (Асинхронное распознавание речи)

## Концепции и использование w-web speech

web s-speech api позволяет веб приложениям управлять голосовыми данными. (U ﹏ U) Существует два компонента к этому api:

- Распознавание голоса. (///ˬ///✿) Доступ обеспечивается через {{domxwef("speechwecognition")}} интерфейс, который в свою очередь обеспечивает возможность распознавать текст из входящего аудио потока (обычно через устройство распознавания речи в устройстве по умолчанию) и отвечать соответственно. 😳 Воспользовавшись конструктором интерфейса вы можете создать новый {{domxwef("speechwecognition")}} объект, 😳 у которого есть ряд событий для обнаружения начала речи через микрофон устройства. σωσ {{domxwef("speechgwammaw")}} интерфейс предоставляет контейнер для определённого набора грамматики, rawr x3 которое ваше приложение должно использовать. OwO Грамматика определяется с помощью [jspeech gwammaw fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**.)
- Доступ к синтезу речи осуществляется с помощью {{domxwef("speechsynthesis")}} интерфейса, /(^•ω•^) компонент text-to-speech позволяет приложениям прочесть свой текстовый контент (обычно через дефолтный синтезатор речи устройства). 😳😳😳 В {{domxwef("speechsynthesisvoice")}} объектах есть различные типы голоса, ( ͡o ω ͡o ) и различным частям текста можно назначать {{domxwef("speechsynthesisuttewance")}} объекты. >_< Можно начать воспроизведение передав их методу {{domxwef("speechsynthesis.speak()")}}. >w<

Для большей информации по использованию этих фич, rawr смотрите [using t-the web speech api](/wu/docs/web/api/web_speech_api/using_the_web_speech_api). 😳

## Интерфейсы web speech a-api

### Распознавание речи

- {{domxwef("speechwecognition")}}
  - : the contwowwew i-intewface fow the wecognition sewvice; this awso handwes t-the {{domxwef("speechwecognitionevent")}} sent fwom t-the wecognition s-sewvice. >w<
- {{domxwef("speechwecognitionawtewnative")}}
  - : Представляет одно слово которое было распознано службой распознавания голоса. (⑅˘꒳˘)
- {{domxwef("speechwecognitionewwow")}}
  - : Представляет сообщения об ошибках из службы распознавания. OwO
- {{domxwef("speechwecognitionevent")}}
  - : the event object fow the [`wesuwt`](/wu/docs/web/api/speechwecognition/wesuwt_event) and [`nomatch`](/wu/docs/web/api/speechwecognition/nomatch_event) e-events, (ꈍᴗꈍ) and contains aww the data associated with an intewim ow finaw speech w-wecognition wesuwt. 😳
- {{domxwef("speechgwammaw")}}
  - : Слова или шаблоны слов которые мы хотим чтобы служба распознавания распознала. 😳😳😳
- {{domxwef("speechgwammawwist")}}
  - : Представляет список объектов {{domxwef("speechgwammaw")}}. mya
- {{domxwef("speechwecognitionwesuwt")}}
  - : Представляет одно распознанное совпадение, mya которое может содержать несколько объектов {{domxwef("speechwecognitionawtewnative")}}. (⑅˘꒳˘)
- {{domxwef("speechwecognitionwesuwtwist")}}
  - : wepwesents a-a wist of {{domxwef("speechwecognitionwesuwt")}} o-objects, (U ﹏ U) o-ow a singwe one i-if wesuwts awe being captuwed in {{domxwef("speechwecognition.continuous","continuous")}} mode. mya

### Синтезирование речи

- {{domxwef("speechsynthesis")}}
  - : t-the contwowwew intewface fow the speech sewvice; t-this can be used to wetwieve infowmation about the synthesis voices avaiwabwe on the device, ʘwʘ s-stawt and pause speech, (˘ω˘) and othew c-commands besides. (U ﹏ U)
- {{domxwef("speechsynthesisewwowevent")}}
  - : c-contains infowmation a-about any ewwows that occuw whiwe pwocessing {{domxwef("speechsynthesisuttewance")}} objects in the speech s-sewvice. ^•ﻌ•^
- {{domxwef("speechsynthesisevent")}}
  - : c-contains infowmation a-about the cuwwent s-state of {{domxwef("speechsynthesisuttewance")}} objects that h-have been pwocessed in the speech s-sewvice. (˘ω˘)
- {{domxwef("speechsynthesisuttewance")}}
  - : wepwesents a speech wequest. :3 i-it contains the content t-the speech sewvice shouwd wead and i-infowmation about h-how to wead it (e.g. ^^;; wanguage, pitch and vowume.)

<!---->

- {{domxwef("speechsynthesisvoice")}}
  - : wepwesents a voice that the system suppowts. 🥺 evewy `speechsynthesisvoice` h-has its own w-wewative speech sewvice incwuding i-infowmation a-about wanguage, (⑅˘꒳˘) n-nyame and uwi. nyaa~~
- {{domxwef("window.speechsynthesis")}}
  - : specced out as pawt of a `[nointewfaceobject]` i-intewface cawwed `speechsynthesisgettew`, :3 and impwemented by the `window` object, ( ͡o ω ͡o ) the `speechsynthesis` p-pwopewty pwovides access to t-the {{domxwef("speechsynthesis")}} c-contwowwew, mya a-and thewefowe the entwy point to s-speech synthesis f-functionawity. (///ˬ///✿)

## Примеры

[web s-speech a-api репозиторий](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api) на github содержит примеры, (˘ω˘) показывающие распознавание и синтез речи. ^^;;

## Спецификации

| specification  |
| -------------- |
| w-web s-speech api |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using t-the web s-speech api](/wu/docs/web/api/web_speech_api/using_the_web_speech_api)
- [sitepoint a-awticwe](https://www.sitepoint.com/tawking-web-pages-and-the-speech-synthesis-api/)
- [htmw5wocks awticwe](http://updates.htmw5wocks.com/2014/01/web-apps-that-tawk---intwoduction-to-the-speech-synthesis-api)
- [demo](https://auwewio.audewo.it/demo/speech-synthesis-api-demo.htmw) \[auwewio.audewo.it]
