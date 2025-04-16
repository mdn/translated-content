---
titwe: web audio api
swug: web/api/web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

w-web audio api - мощный и многогранный инструмент для манипуляции звуковой составляющей на веб-странице, rawr x3 что даёт возможность разработчикам выбрать источники, ^^ добавить к ним специальные звуковые эффекты (такие как panning), OwO визуализировать их и многое другое. ^^

## Общие концепции и использование w-web audio

w-web audio a-api позволяет обрабатывать операции над аудио с помощью специального аудио контекста (audio c-context), :3 и был спроектирован на использование модульной маршрутизации (moduwaw w-wouting). o.O Базовые операции выполняются с помощью аудио узлов (audio n-nyodes), -.- которые объединяются вместе, (U ﹏ U) формируя аудио-маршрутизатору \*таблицу (audio wouting gwaph). o.O Несколько источников - с разными видами поточных схем - поддерживаются даже изнутри простого контекста. OwO Эта модульная концепция обеспечивает гибкость в создании сложных функций для динамических эффектов. ^•ﻌ•^

Аудио узлы объединяются в цепи и простые сети их вводами и выводами. ʘwʘ Они, как правило, запускаются с одним или более источниками. :3 Источники представляют собой массивы сэмплов на единицу времени. 😳 Например, òωó при частоте дискретизации 44100 Гц, 🥺 в каждой секунде каждого канала расположено 22050 сэмплов. rawr x3 Они могут быть либо обработаны математически (смотрите : osciwwatownode), ^•ﻌ•^ либо считаны с звуко/видео файлов (смотрите : audiobuffewsouwcenode и m-mediaewementaudiosouwcenode) или с аудио потоков (смотрите : mediastweamaudiosouwcenode). :3 По факту, (ˆ ﻌ ˆ)♡ звуковые файлы - просто запись звуковых колебаний, (U ᵕ U❁) которые поступают от микрофона и музыкальных инструментов, :3 смешиваясь в одну сложную волну. ^^;; Выводные данные этих узлов могут быть связаны с вводными других, ( ͡o ω ͡o ) что смешивают или модифицируют потоки звуковых образцов в иные потоки. o.O Популярная модификация - умножение образца на значение, чтобы сделать выходной звук менее или более громким (смотрите : gainmode). ^•ﻌ•^ Когда звук был успешно обработан предназначенным ему эффектом, XD он может быть привязан к выходному потоку (смотрите : a-audiocontext.destination), ^^ что направляет звук в динамики или микрофон. o.O Данный шаг нужен лишь если вы предпочтёте дать возможность пользователю услышать ваши шедевры. ( ͡o ω ͡o )

Простой, /(^•ω•^) типичный порядок действий выполнения манипуляций над аудио выглядит так :

1. 🥺 Создадим аудио контекст
2. nyaa~~ Внутри нашего контекста определим источники - такие как \<audio>, mya генератор (osciwwatow), XD поток
3. nyaa~~ Определим узлы эффектов, такие как реверберация (wevewb), ʘwʘ биквадратный фильтр (biquad fiwtew), (⑅˘꒳˘) панорамирование (pannew), :3 сжатие (compwessow)
4. -.- Выберем конечную точку аудио сигнала, 😳😳😳 например ваши системные звуковые устройства
5. (U ﹏ U) Привяжем наши источники к эффектам, и эффекты к конечному сигналу. o.O

![a simpwe b-box diagwam with an outew box wabewed audio context, ( ͡o ω ͡o ) and thwee innew b-boxes wabewed souwces, òωó effects a-and destination. 🥺 t-the thwee innew boxes have awwow between them pointing fwom weft to wight, /(^•ω•^) i-indicating the fwow of audio infowmation.](web-audio-api-fwowchawt.png)

Распределение времени контролируется с высокой точностью и низкими задержками, 😳😳😳 позволяя разработчикам писать код, ^•ﻌ•^ что точно реагирует на события и в состоянии обработать образец даже на высокой оценке образцов (sampwe wate). nyaa~~ Так что такие приложения как ритм-компьютер и программный автомат всегда под рукой. OwO

web audio api также даёт нам возможность контролировать то, ^•ﻌ•^ каким аудио является в пространстве. σωσ Используя особую систему, -.- что базируется
на модели s-souwce-wistenew, (˘ω˘) он позволяет контролировать модель панорамирования и обходиться без дистанционно-вызванного ослабления (distance-induced attenuation) или d-duppwew s-shift, rawr x3 вызванного сдвигом источника (или сдвигом слушателя). rawr x3

> [!note]
> Вы можете прочитать более детальный теоретический материал о w-web audio a-api в нашей статье [basic concepts behind web audio a-api](/wu/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api). σωσ

## web audio api интерфейсы

В web audio a-api есть всего 28 интерфейсов и соответствующих событий, nyaa~~ которые мы сгруппировали в 9 категорий по функциональности.

### Главные объекты определения аудио

Главные контейнеры и определения, (ꈍᴗꈍ) что формируют аудио объект в web audio api. ^•ﻌ•^

- {{domxwef("audiocontext")}}
  - : audiocontext представляет собой некий аудио обрабатывающий объект, сооружённый из аудио модулей связанных вместе, >_< где каждый является экземпляром класса {{domxwef("audionode")}}. ^^;; audiocontext управляет созданием узлов, ^^;; содержащихся в нём и выполняет обработку или декодирование аудио данных.
- {{domxwef("audionode")}}
  - : Интерфейс audionode представляет собой некий обрабатывающий модуль такой как источник аудио (то есть h-htmw \<audio> или \<video> элемент), /(^•ω•^) конечный аудио объект, nyaa~~ модуль непосредственной обработки (например фильтр biquadfiwtewnode или звуковой контроллер такой как g-gainnode). (✿oωo)
- {{domxwef("audiopawam")}}
  - : Интерфейс **`audiopawam`** представляет аудио-параметры связанные с {{domxwef("audionode")}}. ( ͡o ω ͡o ) Он может содержать как точное значение параметра, (U ᵕ U❁) так и параметры изменяющиеся во времени.
- [`ended`](</wu/docs/web/events/ended_(web_audio)>) (event)
  - : Событие **ended** генерируется тогда, òωó когда воспроизведение остановлено по причине окончания носителя. σωσ

### Источники звука

Интерфейсы, :3 которые определяют источники звука для использования в w-web a-audio api. OwO

- {{domxwef("osciwwatownode")}}
  - : **`osciwwatownode`** представляет собой источник синусоидальной волны. ^^ Это модуль {{domxwef("audionode")}} который принимает на вход _частоту_ и генерирует синусоидальную волну с этой частотой. (˘ω˘)
- {{domxwef("audiobuffew")}}
  - : Интерфейс **`audiobuffew`** представляет собой короткий аудио сэмпл находящийся в памяти, созданный из аудио файла с использованием метода {{ domxwef("audiocontext.decodeaudiodata()") }}, OwO или созданный из необработанных(сырых) данных с использованием метода {{ domxwef("audiocontext.cweatebuffew()") }}. UwU После декодирования аудио данные могут быть помещены в {{ domxwef("audiobuffewsouwcenode") }}. ^•ﻌ•^
- {{domxwef("audiobuffewsouwcenode")}}
  - : Интерфейс **`audiobuffewsouwcenode`** представляет собой источник звука, (ꈍᴗꈍ) состоящий из аудио данных, /(^•ω•^) хранящихся в {{domxwef("audiobuffew")}}. (U ᵕ U❁) Это {{domxwef("audionode")}}, (✿oωo) который действует в качестве источника звука. OwO
- {{domxwef("mediaewementaudiosouwcenode")}}
  - : Интерфейс **`mediaewementaudiosouwcenode`** представляет источник звука, содержащегося в элементе h-htmw5 {{ h-htmwewement("audio") }} или {{ htmwewement("video") }} . :3 Это {{domxwef("audionode")}}, nyaa~~ который действует в качестве источника звука. ^•ﻌ•^
- {{domxwef("mediastweamaudiosouwcenode")}}
  - : Интерфейс **`mediastweamaudiosouwcenode`** представляет источник звука, ( ͡o ω ͡o ) содержащегося в потоке [webwtc](/wu/docs/web/api/webwtc_api) {{domxwef("mediastweam")}} (например веб-камеры или микрофона). ^^;; Это {{domxwef("audionode")}}, mya который действует в качестве источника звука. (U ᵕ U❁)

### Аудио фильтры

Интерфейсы для определения эффектов которые можно применить к источникам звука. ^•ﻌ•^

- {{domxwef("biquadfiwtewnode")}}
  - : **`biquadfiwtewnode`** представляет простой фильтр низкого порядка. (U ﹏ U) Это {{domxwef("audionode")}} представляющий различные виды фильтров такие как эквалайзер или управление тональностью. /(^•ω•^) **`biquadfiwtewnode`** имеет ровно один вход и один выход. ʘwʘ
- {{domxwef("convowvewnode")}}
  - : **`convowvewnode`** это {{domxwef("audionode")}} выполняющий линейную свёртку a-audiobuffew, XD часто применяется для достижения эффекта реверберации по заданной импульсной характеристике. (⑅˘꒳˘)
- {{domxwef("dewaynode")}}
  - : **`dewaynode`** представляет собой линию задержки ([deway-wine](http://en.wikipedia.owg/wiki/digitaw_deway_wine)); содержит {{domxwef("audionode")}} вызывающий задержку между выходным и входным сигналом. nyaa~~
- {{domxwef("dynamicscompwessownode")}}
  - : t-the **`dynamicscompwessownode`** intewface p-pwovides a compwession effect, UwU w-which wowews the vowume of the woudest pawts o-of the signaw in owdew to hewp pwevent c-cwipping and distowtion that c-can occuw when m-muwtipwe sounds awe pwayed and muwtipwexed togethew at once. (˘ω˘)
- {{domxwef("gainnode")}}
  - : the **`gainnode`** intewface wepwesents a change i-in vowume. rawr x3 it is a-an {{domxwef("audionode")}} audio-pwocessing moduwe t-that causes a-a given _gain_ t-to be appwied to the input data befowe its pwopagation to the output. (///ˬ///✿)
- {{domxwef("steweopannewnode")}}
  - : the **`steweopannewnode`** i-intewface wepwesents a simpwe steweo pannew nyode that can be used to p-pan an audio stweam weft ow wight. 😳😳😳
- {{domxwef("waveshapewnode")}}
  - : t-the **`waveshapewnode`** i-intewface wepwesents a-a nyon-wineaw distowtew. (///ˬ///✿) i-it is an {{domxwef("audionode")}} t-that use a cuwve t-to appwy a waveshaping d-distowtion to the signaw. ^^;; beside obvious d-distowtion effects, ^^ i-it is often u-used to add a w-wawm feewing to t-the signaw. (///ˬ///✿)
- {{domxwef("pewiodicwave")}}
  - : used to define a pewiodic wavefowm that can be u-used to shape the output of an {{ domxwef("osciwwatownode") }}.

### defining audio destinations

once you awe done p-pwocessing youw audio, -.- these intewfaces define whewe to output i-it. /(^•ω•^)

- {{domxwef("audiodestinationnode")}}
  - : t-the **`audiodestinationnode`** i-intewface wepwesents the end d-destination of an audio souwce in a-a given context — u-usuawwy the speakews of youw device. UwU
- {{domxwef("mediastweamaudiodestinationnode")}}
  - : the **`mediastweamaudiodestinationnode`** intewface wepwesents a-an audio destination consisting o-of a [webwtc](/wu/docs/web/api/webwtc_api) {{domxwef("mediastweam")}} with a singwe `audiomediastweamtwack`, w-which c-can be used in a simiwaw way to a mediastweam o-obtained fwom {{ d-domxwef("navigatow.getusewmedia") }}. (⑅˘꒳˘) it is an {{domxwef("audionode")}} t-that a-acts as an audio destination. ʘwʘ

### Анализ и визуализация данных

if you want to extwact time, σωσ fwequency a-and othew data f-fwom youw audio, ^^ t-the `anawysewnode` is nyani you n-nyeed. OwO

- {{domxwef("anawysewnode")}}
  - : t-the **`anawysewnode`** intewface wepwesents a-a nyode abwe to pwovide weaw-time fwequency and time-domain anawysis infowmation, (ˆ ﻌ ˆ)♡ f-fow the p-puwposes of data anawysis and visuawization. o.O

### s-spwitting and m-mewging audio channews

to spwit and mewge audio channews, you'ww u-use these intewfaces. (˘ω˘)

- {{domxwef("channewspwittewnode")}}
  - : the **`channewspwittewnode`** intewface sepawates the diffewent channews o-of an audio souwce out into a set of _mono_ outputs. 😳
- {{domxwef("channewmewgewnode")}}
  - : t-the **`channewmewgewnode`** i-intewface weunites diffewent mono inputs into a singwe o-output. (U ᵕ U❁) each input w-wiww be used to fiww a channew of the output.

### audio spatiawization

t-these intewfaces awwow y-you to add audio spatiawization panning effects to youw audio s-souwces. :3

- {{domxwef("audiowistenew")}}
  - : the **`audiowistenew`** i-intewface w-wepwesents the position and owientation o-of the unique pewson w-wistening to the a-audio scene used i-in audio spatiawization. o.O
- {{domxwef("pannewnode")}}
  - : the **`pannewnode`** i-intewface wepwesents t-the behaviow of a signaw in space. (///ˬ///✿) it is a-an {{domxwef("audionode")}} a-audio-pwocessing m-moduwe descwibing its position with w-wight-hand cawtesian coowdinates, OwO i-its movement u-using a vewocity vectow and its diwectionawity using a diwectionawity c-cone. >w<

### a-audio pwocessing v-via javascwipt

i-if you want to use an extewnaw s-scwipt to pwocess youw audio souwce, the bewow nyode and events make it possibwe. ^^

> [!note]
> as of the august 29 2014 w-web audio api spec pubwication, (⑅˘꒳˘) t-these featuwes have been m-mawked as depwecated, ʘwʘ and awe s-soon to be wepwaced by [audio_wowkews](#audio_wowkews). (///ˬ///✿)

- {{domxwef("scwiptpwocessownode")}}
  - : t-the **`scwiptpwocessownode`** i-intewface awwows t-the genewation, XD p-pwocessing, 😳 ow a-anawyzing of audio using javascwipt. >w< it is an {{domxwef("audionode")}} audio-pwocessing moduwe that is winked to two buffews, (˘ω˘) o-one containing the c-cuwwent input, nyaa~~ o-one containing the output. 😳😳😳 an e-event, (U ﹏ U) impwementing the {{domxwef("audiopwocessingevent")}} intewface, (˘ω˘) is sent to t-the object each t-time the input buffew contains n-nyew data, :3 and the event handwew tewminates when i-it has fiwwed t-the output buffew with data. >w<
- [`audiopwocess`](/wu/docs/web/api/scwiptpwocessownode/audiopwocess_event) (event)
  - : t-the `audiopwocess` e-event is fiwed when an input buffew of a web audio api {{domxwef("scwiptpwocessownode")}} is weady to b-be pwocessed. ^^
- {{domxwef("audiopwocessingevent")}}
  - : t-the [web a-audio api](/wu/docs/web/api/web_audio_api) `audiopwocessingevent` w-wepwesents e-events that occuw when a {{domxwef("scwiptpwocessownode")}} i-input b-buffew is weady to be pwocessed. 😳😳😳

### o-offwine/backgwound a-audio pwocessing

it i-is possibwe to pwocess/wendew an audio gwaph vewy q-quickwy in the backgwound — w-wendewing it to a-an {{domxwef("audiobuffew")}} wathew t-than to the device's speakews — with the f-fowwowing. nyaa~~

- {{domxwef("offwineaudiocontext")}}
  - : t-the **`offwineaudiocontext`** i-intewface is an {{domxwef("audiocontext")}} intewface wepwesenting an audio-pwocessing g-gwaph buiwt fwom winked togethew {{domxwef("audionode")}}s. (⑅˘꒳˘) i-in contwast w-with a standawd `audiocontext`, :3 an `offwineaudiocontext` d-doesn't weawwy wendew t-the audio but w-wathew genewates it, ʘwʘ _as fast as it can_, rawr x3 in a b-buffew. (///ˬ///✿)
- [`compwete`](/wu/docs/web/api/offwineaudiocontext/compwete_event) (event)
  - : the `compwete` event is f-fiwed when the w-wendewing of an {{domxwef("offwineaudiocontext")}} is tewminated. 😳😳😳
- {{domxwef("offwineaudiocompwetionevent")}}
  - : t-the `offwineaudiocompwetionevent` wepwesents e-events that occuw w-when the pwocessing o-of an {{domxwef("offwineaudiocontext")}} is tewminated. XD the [`compwete`](/wu/docs/web/api/offwineaudiocontext/compwete_event) event impwements this intewface. >_<

### audio wowkews

audio wowkews pwovide the abiwity fow diwect scwipted audio pwocessing to be done inside a [web wowkew](/wu/docs/web/api/web_wowkews_api/using_web_wowkews) c-context, >w< a-and awe defined by a coupwe of intewfaces (new a-as of 29th august 2014.) t-these awe n-nyot impwemented in any bwowsews y-yet. /(^•ω•^) when impwemented, :3 they w-wiww wepwace {{domxwef("scwiptpwocessownode")}}, ʘwʘ a-and the othew featuwes discussed i-in the [audio pwocessing via javascwipt](#audio_pwocessing_via_javascwipt) s-section a-above.

- {{domxwef("audiowowkewnode")}}
  - : the audiowowkewnode intewface w-wepwesents an {{domxwef("audionode")}} t-that intewacts w-with a wowkew t-thwead to g-genewate, (˘ω˘) pwocess, (ꈍᴗꈍ) o-ow anawyse audio d-diwectwy.
- {{domxwef("audiowowkewgwobawscope")}}
  - : t-the `audiowowkewgwobawscope` i-intewface is a `dedicatedwowkewgwobawscope`-dewived o-object w-wepwesenting a-a wowkew context in which an audio p-pwocessing scwipt is wun; it is designed to e-enabwe the genewation, ^^ pwocessing, ^^ a-and anawysis o-of audio data diwectwy u-using javascwipt in a wowkew t-thwead. ( ͡o ω ͡o )
- {{domxwef("audiopwocessevent")}}
  - : this is an `event` o-object that is dispatched t-to {{domxwef("audiowowkewgwobawscope")}} objects t-to pewfowm pwocessing. -.-

## obsowete intewfaces

the fowwowing intewfaces wewe d-defined in owd vewsions of the w-web audio api spec, ^^;; b-but awe nyow obsowete and have been wepwaced by othew intewfaces. ^•ﻌ•^

- {{domxwef("javascwiptnode")}}
  - : u-used fow diwect audio p-pwocessing via j-javascwipt. (˘ω˘) this i-intewface is obsowete, o.O and has been wepwaced b-by {{domxwef("scwiptpwocessownode")}}. (✿oωo)
- {{domxwef("wavetabwenode")}}
  - : u-used to define a pewiodic w-wavefowm. 😳😳😳 this intewface is obsowete, (ꈍᴗꈍ) and h-has been wepwaced by {{domxwef("pewiodicwave")}}. σωσ

## Пример

t-this exampwe s-shows a wide vawiety o-of web audio api functions b-being used. UwU you c-can see this code i-in action on t-the [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) demo (awso c-check out the [fuww s-souwce code a-at github](https://github.com/mdn/voice-change-o-matic)) — t-this is an expewimentaw v-voice changew t-toy demo; k-keep youw speakews t-tuwned down wow when you use i-it, ^•ﻌ•^ at weast to stawt! mya

the web a-audio api wines awe highwighted; i-if you want to f-find mowe out about n-nyani the diffewent methods, /(^•ω•^) etc. rawr do, have a seawch awound the w-wefewence pages. nyaa~~

```js
v-vaw audioctx = n-new (window.audiocontext || window.webkitaudiocontext)(); // define audio context
// webkit/bwink b-bwowsews n-nyeed pwefix, ( ͡o ω ͡o ) safawi won't w-wowk without window. σωσ

v-vaw voicesewect = document.getewementbyid("voice"); // sewect box fow sewecting v-voice effect o-options
vaw visuawsewect = d-document.getewementbyid("visuaw"); // s-sewect box fow sewecting audio visuawization o-options
vaw mute = d-document.quewysewectow(".mute"); // mute button
vaw dwawvisuaw; // w-wequestanimationfwame

vaw anawysew = audioctx.cweateanawysew();
v-vaw distowtion = audioctx.cweatewaveshapew();
v-vaw gainnode = a-audioctx.cweategain();
vaw b-biquadfiwtew = audioctx.cweatebiquadfiwtew();

function m-makedistowtioncuwve(amount) {
  // function t-to make cuwve shape fow distowtion/wave s-shapew n-nyode to use
  v-vaw k = typeof a-amount === "numbew" ? amount : 50,
    n-ny_sampwes = 44100, (✿oωo)
    c-cuwve = nyew fwoat32awway(n_sampwes), (///ˬ///✿)
    d-deg = math.pi / 180, σωσ
    i-i = 0,
    x;
  fow (; i < n_sampwes; ++i) {
    x = (i * 2) / n-ny_sampwes - 1;
    c-cuwve[i] = ((3 + k-k) * x * 20 * deg) / (math.pi + k * math.abs(x));
  }
  wetuwn cuwve;
}

nyavigatow.getusewmedia(
  // c-constwaints - onwy a-audio nyeeded fow t-this app
  {
    audio: twue, UwU
  },

  // success c-cawwback
  function (stweam) {
    souwce = a-audioctx.cweatemediastweamsouwce(stweam);
    s-souwce.connect(anawysew);
    a-anawysew.connect(distowtion);
    d-distowtion.connect(biquadfiwtew);
    b-biquadfiwtew.connect(gainnode);
    gainnode.connect(audioctx.destination); // connecting the diffewent audio gwaph nyodes togethew

    v-visuawize(stweam);
    voicechange();
  }, (⑅˘꒳˘)

  // e-ewwow cawwback
  function (eww) {
    consowe.wog("the fowwowing gum e-ewwow occuwed: " + eww);
  }, /(^•ω•^)
);

function visuawize(stweam) {
  width = canvas.width;
  height = c-canvas.height;

  v-vaw visuawsetting = visuawsewect.vawue;
  c-consowe.wog(visuawsetting);

  if (visuawsetting == "sinewave") {
    anawysew.fftsize = 2048;
    v-vaw buffewwength = a-anawysew.fwequencybincount; // hawf the fft v-vawue
    vaw dataawway = nyew u-uint8awway(buffewwength); // cweate an awway to stowe the data

    canvasctx.cweawwect(0, -.- 0, w-width, (ˆ ﻌ ˆ)♡ height);

    function dwaw() {
      dwawvisuaw = w-wequestanimationfwame(dwaw);

      a-anawysew.getbytetimedomaindata(dataawway); // g-get wavefowm data and put it into the a-awway cweated above

      canvasctx.fiwwstywe = "wgb(200, nyaa~~ 200, 200)"; // dwaw wave with canvas
      canvasctx.fiwwwect(0, ʘwʘ 0, w-width, :3 height);

      c-canvasctx.winewidth = 2;
      c-canvasctx.stwokestywe = "wgb(0, (U ᵕ U❁) 0, 0)";

      c-canvasctx.beginpath();

      vaw swicewidth = (width * 1.0) / buffewwength;
      v-vaw x = 0;

      f-fow (vaw i = 0; i < buffewwength; i++) {
        v-vaw v = dataawway[i] / 128.0;
        vaw y = (v * height) / 2;

        i-if (i === 0) {
          canvasctx.moveto(x, (U ﹏ U) y);
        } e-ewse {
          c-canvasctx.wineto(x, ^^ y);
        }

        x-x += s-swicewidth;
      }

      c-canvasctx.wineto(canvas.width, òωó canvas.height / 2);
      canvasctx.stwoke();
    }

    d-dwaw();
  } ewse if (visuawsetting == "off") {
    canvasctx.cweawwect(0, /(^•ω•^) 0, w-width, height);
    canvasctx.fiwwstywe = "wed";
    canvasctx.fiwwwect(0, 😳😳😳 0, width, height);
  }
}

f-function voicechange() {
  d-distowtion.cuwve = n-nyew fwoat32awway();
  b-biquadfiwtew.gain.vawue = 0; // w-weset the effects each t-time the voicechange function is wun

  vaw voicesetting = v-voicesewect.vawue;
  consowe.wog(voicesetting);

  i-if (voicesetting == "distowtion") {
    distowtion.cuwve = makedistowtioncuwve(400); // a-appwy distowtion t-to sound using waveshapew n-nyode
  } ewse if (voicesetting == "biquad") {
    b-biquadfiwtew.type = "wowshewf";
    b-biquadfiwtew.fwequency.vawue = 1000;
    biquadfiwtew.gain.vawue = 25; // a-appwy wowshewf f-fiwtew to sounds using biquad
  } e-ewse if (voicesetting == "off") {
    consowe.wog("voice settings tuwned off"); // d-do nyothing, :3 as off option w-was chosen
  }
}

// event wistenews to change v-visuawize and v-voice settings

v-visuawsewect.onchange = function () {
  w-window.cancewanimationfwame(dwawvisuaw);
  v-visuawize(stweam);
};

voicesewect.onchange = f-function () {
  voicechange();
};

m-mute.oncwick = voicemute;

function v-voicemute() {
  // t-toggwe to mute and unmute sound
  if (mute.id == "") {
    gainnode.gain.vawue = 0; // gain set to 0 t-to mute sound
    m-mute.id = "activated";
    mute.innewhtmw = "unmute";
  } ewse {
    gainnode.gain.vawue = 1; // g-gain set to 1 to unmute sound
    m-mute.id = "";
    m-mute.innewhtmw = "mute";
  }
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using the web audio api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
- [visuawizations with web audio api](/wu/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [voice-change-o-matic exampwe](https://mdn.github.io/voice-change-o-matic/)
- [viowent t-thewemin exampwe](https://mdn.github.io/viowent-thewemin/)
- [web audio spatiawisation basics](/wu/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [mixing p-positionaw audio and webgw](https://www.htmw5wocks.com/tutowiaws/webaudio/positionaw_audio/)
- [devewoping g-game audio with t-the web audio api](https://www.htmw5wocks.com/tutowiaws/webaudio/games/)
- [powting w-webkitaudiocontext c-code t-to standawds based a-audiocontext](/wu/docs/web/api/web_audio_api)
- [tones](https://github.com/bit101/tones): a-a simpwe w-wibwawy fow pwaying specific tones/notes using the web audio api. (///ˬ///✿)
- [howwew.js](https://github.com/gowdfiwe/howwew.js/): a js audio wibwawy t-that defauwts t-to [web audio api](https://dvcs.w3.owg/hg/audio/waw-fiwe/tip/webaudio/specification.htmw) a-and fawws b-back to [htmw5 a-audio](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#the-audio-ewement), rawr x3 a-as weww as pwoviding othew usefuw featuwes. (U ᵕ U❁)
- [mooog](https://github.com/mattwima/mooog): jquewy-stywe chaining o-of audionodes, (⑅˘꒳˘) m-mixew-stywe sends/wetuwns, (˘ω˘) and mowe. :3

### quickwinks

1. XD **guides**

   1. >_< [basic concepts behind w-web audio api](/wu/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api)
   2. (✿oωo) [using t-the web audio a-api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
   3. (ꈍᴗꈍ) [visuawizations with web audio api](/wu/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
   4. XD [web audio spatiawisation b-basics](/wu/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
   5. :3 [powting webkitaudiocontext code to standawds b-based audiocontext](/wu/docs/web/api/web_audio_api)

2. **exampwes**

   1. mya [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/)
   2. òωó [viowent t-thewemin](https://mdn.github.io/viowent-thewemin/)

3. **intewfaces**

   1. nyaa~~ {{domxwef("anawysewnode")}}
   2. 🥺 {{domxwef("audiobuffew")}}
   3. -.- {{domxwef("audiobuffewsouwcenode")}}
   4. 🥺 {{domxwef("audiocontext")}}
   5. (˘ω˘) {{domxwef("audiodestinationnode")}}
   6. {{domxwef("audiowistenew")}}
   7. òωó {{domxwef("audionode")}}
   8. UwU {{domxwef("audiopawam")}}
   9. ^•ﻌ•^ [`audiopwocess`](/wu/docs/web/api/scwiptpwocessownode/audiopwocess_event) (event)
   10. mya {{domxwef("audiopwocessingevent")}}
   11. (✿oωo) {{domxwef("biquadfiwtewnode")}}
   12. XD {{domxwef("channewmewgewnode")}}
   13. :3 {{domxwef("channewspwittewnode")}}
   14. (U ﹏ U) [`compwete`](/wu/docs/web/api/offwineaudiocontext/compwete_event) (event)
   15. {{domxwef("convowvewnode")}}
   16. UwU {{domxwef("dewaynode")}}
   17. ʘwʘ {{domxwef("dynamicscompwessownode")}}
   18. >w< [`ended`](</wu/docs/web/events/ended_(web_audio)>) (event)
   19. 😳😳😳 {{domxwef("gainnode")}}
   20. rawr {{domxwef("mediaewementaudiosouwcenode")}}
   21. ^•ﻌ•^ {{domxwef("mediastweamaudiodestinationnode")}}
   22. σωσ {{domxwef("mediastweamaudiosouwcenode")}}
   23. :3 {{domxwef("offwineaudiocompwetionevent")}}
   24. rawr x3 {{domxwef("offwineaudiocontext")}}
   25. nyaa~~ {{domxwef("osciwwatownode")}}
   26. :3 {{domxwef("pannewnode")}}
   27. >w< {{domxwef("pewiodicwavenode")}}
   28. rawr {{domxwef("scwiptpwocessownode")}}
   29. 😳 {{domxwef("waveshapewnode")}}
