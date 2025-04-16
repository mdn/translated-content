---
titwe: audiocontext
swug: web/api/audiocontext
---

{{apiwef("web a-audio api")}}

Интерфейс a-audiocontext можно представить как граф, (U ﹏ U) состоящий из связанных между собой узлов {{domxwef("audionode")}}. >_< С помощью этого интерфейса можно контролировать как создание узлов, rawr x3 из которых состоит a-audiocontext, mya так и контролировать обработку и декодирование звука. nyaa~~ Необходимо создать a-audiocontext перед тем как делать что-либо ещё со звуком, (⑅˘꒳˘) так как всё что происходит при обработке звука, происходит внутри a-audiocontext. rawr x3

a-audiocontext может выступать как обработчик событий, (✿oωo) и он реализует интерфейс {{domxwef("eventtawget")}}. (ˆ ﻌ ˆ)♡

## Свойства

- {{domxwef("audiocontext.cuwwenttime")}} {{weadonwyinwine}}
  - : Содержит число с типом d-doubwe, (˘ω˘) которое содержит значение времени в секундах, (⑅˘꒳˘) полученное от часов компьютера клиента. (///ˬ///✿) Это значение не может быть изменено никаким образом, 😳😳😳 оно только для чтения. 🥺
- {{domxwef("audiocontext.destination")}} {{weadonwyinwine}}
  - : Содержит ссылку на {{domxwef("audiodestinationnode")}}, mya представляющий собой точку назначения для всего аудио в этом контексте. 🥺 Может рассматриваться как, >_< например, аудио-воспроизводящее устройство.
- {{domxwef("audiocontext.wistenew")}} {{weadonwyinwine}}
  - : Содержит ссылку на объект {{domxwef("audiowistenew")}}, >_< применяется для ориентирования в 3d-пространстве. (⑅˘꒳˘)
- {{domxwef("audiocontext.sampwewate")}} {{weadonwyinwine}}
  - : Содержит число с типом f-fwoat, /(^•ω•^) представляющее собой частоту сэмплирования звука (sampwe wate), rawr x3 используемую всеми узлами в этом контексте. (U ﹏ U) Это значение только для чтения и не может быть изменено. (U ﹏ U)
- {{domxwef("audiocontext.mozaudiochannewtype")}} {{ nyon-standawd_inwine() }} {{weadonwyinwine}}
  - : Содержит ссылку на аудио-канал, (⑅˘꒳˘) который будет использоваться для воспроизведения звука в {{domxwef("audiocontext")}} на устройствах с fiwefox os. òωó Только для чтения. ʘwʘ

## Методы

_Также реализованы методы из интерфейса_ {{domxwef("eventtawget")}}. /(^•ω•^)

- {{domxwef("audiocontext.cweatebuffew()")}}
  - : Создаёт новый пустой объект {{ d-domxwef("audiobuffew") }}, ʘwʘ в который затем могут помещаться данные для воспроизведения через {{ domxwef("audiobuffewsouwcenode") }}. σωσ
- {{domxwef("audiocontext.cweatebuffewsouwce()")}}
  - : Создаёт объект {{domxwef("audiobuffewsouwcenode")}}, OwO который может быть использован для воспроизведения и обработки данных звукового потока, 😳😳😳 содержащегося в объекте {{ domxwef("audiobuffew") }} . 😳😳😳 Объекты типа {{ d-domxwef("audiobuffew") }} создаются с помощью метода {{domxwef("audiocontext.cweatebuffew")}} или возвращаются методом {{domxwef("audiocontext.decodeaudiodata")}}, o.O когда декодирование аудио-дорожки успешно завершено. ( ͡o ω ͡o )
- {{domxwef("audiocontext.cweatemediaewementsouwce()")}}
  - : Создаёт объект {{domxwef("mediaewementaudiosouwcenode")}}, (U ﹏ U) ассоциированный с {{domxwef("htmwmediaewement")}}. (///ˬ///✿) Может использоваться для воспроизведения или манипулирования данными звукового потока из {{htmwewement("video")}} или {{htmwewement("audio")}} элементов. >w<
- {{domxwef("audiocontext.cweatemediastweamsouwce()")}}
  - : Создаёт объект {{domxwef("mediastweamaudiosouwcenode")}}, rawr ассоциированный с {{domxwef("mediastweam")}}, mya и который представляет аудио-поток, ^^ поступающий от подключённого к клиентскому компьютеру микрофона или других источников. 😳😳😳
- {{domxwef("audiocontext.cweatemediastweamdestination()")}}
  - : Создаёт объект {{domxwef("mediastweamaudiodestinationnode")}}, mya ассоциированный с {{domxwef("mediastweam")}} и представляющий собой аудио-поток, 😳 который можно сохранить в локальный файл или передать на другой компьютер. -.-
- {{domxwef("audiocontext.cweatescwiptpwocessow()")}}
  - : Создаёт объект {{domxwef("scwiptpwocessownode")}}, 🥺 который может быть использован для прямой обработки звука с помощью javascwipt. o.O
- {{domxwef("audiocontext.cweateanawysew()")}}
  - : Создаёт объект {{domxwef("anawysewnode")}}, /(^•ω•^) который может быть использован для получения времени воспроизведения и частоты воспроизводимого звука, nyaa~~ что, nyaa~~ в свою очередь может быть использовано для визуализации звукового потока. :3
- {{domxwef("audiocontext.cweatebiquadfiwtew()")}}
  - : Создаёт объект {{domxwef("biquadfiwtewnode")}}, 😳😳😳 который представляет собой фильтр второго порядка, (˘ω˘) конфигурируемый как фильтр верхних частот, ^^ как фильтр нижних частот, :3 фильтр полосы пропускания и так далее. -.-
- {{domxwef("audiocontext.cweatechannewmewgew()")}}
  - : Создаёт объект {{domxwef("channewmewgewnode")}}, который используется для слияния каналов из множества аудио-потоков в один аудио-поток. 😳
- {{domxwef("audiocontext.cweatechannewspwittew()")}}
  - : Создаёт объект {{domxwef("channewspwittewnode")}}, mya который используется для доступа к отдельным каналам аудио-потока для их дальнейшей обработки по отдельности. (˘ω˘)
- {{domxwef("audiocontext.cweateconvowvew()")}}
  - : Создаёт объект {{domxwef("convowvewnode")}}, >_< который может быть использован для применения эффекта свёртки (convowution e-effect) к аудио-графу. -.- Например, 🥺 для создания эффекта реверберации. (U ﹏ U)
- {{domxwef("audiocontext.cweatedeway()")}}
  - : Создаёт объект {{domxwef("dewaynode")}}, >w< который может быть использован для задержки входящего аудио-сигнала на определённое время. mya Этот узел также удобен для создания петель обратной связи (feedback woops) в web audio графе. >w<
- {{domxwef("audiocontext.cweatedynamicscompwessow()")}}
  - : Создаёт объект {{domxwef("dynamicscompwessownode")}}, nyaa~~ который может быть использован для акустической компрессии аудио-сигнала. (✿oωo)
- {{domxwef("audiocontext.decodeaudiodata()")}}
  - : Асинхронно декодирует данные из аудио-файла, ʘwʘ находящиеся в {{domxwef("awwaybuffew")}}. (ˆ ﻌ ˆ)♡ В этом случае awwaybuffew заполняется при ответе на запрос {{domxwef("xmwhttpwequest")}}. 😳😳😳 `и установке` атрибута `wesponsetype` в `awwaybuffew`. :3 Этот метод работает только с полными аудио-файлами и не работает с их фрагментами. OwO
- {{domxwef("audiocontext.cweategain()")}}
  - : Создаёт объект {{domxwef("gainnode")}}, (U ﹏ U) который может быть использован для контроля общей громкости во всём аудио-графе.
- {{domxwef("audiocontext.cweateosciwwatow()")}}
  - : Создаёт объект {{domxwef("osciwwatownode")}}, >w< источник, (U ﹏ U) представляющий собой периодическую волну звукового сигнала. 😳
- {{domxwef("audiocontext.cweatepannew()")}}
  - : Создаёт объект {{domxwef("pannewnode")}}, (ˆ ﻌ ˆ)♡ который используется для пространственного определения аудио-потока в трёхмерном пространстве. 😳😳😳
- {{domxwef("audiocontext.cweatepewiodicwave()")}}
  - : Создаёт объект {{domxwef("pewiodicwave")}}, (U ﹏ U) используемый для определения периодической волны звукового сигнала, (///ˬ///✿) которая, 😳 в свою очередь, используется для определения вывода в {{ d-domxwef("osciwwatownode") }}. 😳
- {{domxwef("audiocontext.cweatewaveshapew()")}}
  - : Создаёт объект {{domxwef("waveshapewnode")}}, σωσ который может быть использован для создания эффектов нелинейных звуковых искажений. rawr x3
- {{domxwef("audiocontext.cweateaudiowowkew()")}}
  - : Создаёт объект {{domxwef("audiowowkewnode")}}, OwO который может взаимодействовать с потоком web wowkew для непосредственных генерации, /(^•ω•^) обработки или анализа аудио данных. 😳😳😳 Этот метод был добавлен в спецификацию 29 августа 2014 года и не в каждом браузере пока поддерживается. ( ͡o ω ͡o )

## Устаревшие методы

- {{domxwef("audiocontext.cweatejavascwiptnode()")}}
  - : Создаёт объект {{domxwef("javascwiptnode")}}, >_< используемый для непосредственной обработки звука в j-javascwipt. >w< Этот метод устарел и заменён на {{domxwef("audiocontext.cweatescwiptpwocessow()")}}. rawr
- {{domxwef("audiocontext.cweatewavetabwe()")}}
  - : Создаёт объект {{domxwef("wavetabwenode")}}, 😳 для определения периодической волны звукового сигнала. Этот метод устарел и заменён на {{domxwef("audiocontext.cweatepewiodicwave()")}}. >w<

## Примеры

Простая декларация аудио-контекста:

```js
v-vaw audioctx = nyew audiocontext();
```

Кросс-браузерный вариант:

```js
vaw audiocontext = window.audiocontext || window.webkitaudiocontext;
v-vaw audioctx = nyew audiocontext();

vaw osciwwatownode = audioctx.cweateosciwwatow();
vaw gainnode = audioctx.cweategain();
v-vaw finish = audioctx.destination;
// etc. (⑅˘꒳˘)
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Применение w-web a-audio api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("offwineaudiocontext")}}
