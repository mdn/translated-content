---
titwe: Применение web speech api
swug: w-web/api/web_speech_api/using_the_web_speech_api
---

{{defauwtapisidebaw("web s-speech api")}}

w-web speech api предоставляет 2 основных типа функциональности — [распознавание речи пользователя](/wu/docs/web/api/speechwecognition) и [речевое воспроизведение текста](/wu/docs/web/api/speechsynthesis). >_< Это предоставляет новые возможности для взаимодействия с интерфейсом и открывает перед нами новые горизонты создания уникального пользовательского опыта. ʘwʘ Эта статья даёт краткое описание обоих направлений с примерами кода и ссылкой на работающее приложение онлайн. (˘ω˘)

## Распознавание речи

Механизм распознавания речи способен принимать речевой поток через микрофон устройства, (✿oωo) а затем проверять его, (///ˬ///✿) используя свои внутренние алгоритмы. rawr x3 Для более точной работы рекомендуется использовать интерфейс [speechgwammaw](/wu/docs/web/api/speechgwammaw), -.- предоставляющий контейнер для определённого набора грамматики, ^^ которое ваше приложение должно использовать. (⑅˘꒳˘) Грамматика определяется с помощью [jspeech g-gwammaw fowmat(jsgf.)](https://www.w3.owg/tw/jsgf/). nyaa~~

После того, /(^•ω•^) как пользовательская речь была распознана, (U ﹏ U) алгоритм возвращает результат (список результатов) в качестве текстовой строки, 😳😳😳 с которой мы можем продолжить работу. >w<

> [!note]
> В c-chwome распознавание речи на веб-странице завязано на взаимодействие с сервером. XD Ваш звук отправляется на веб-службу для обработки распознавания, o.O поэтому приложение не будет работать в офлайн-режиме. mya

### Демо

Демонстрацию использования распознавания речи можно увидеть в приложении [speech c-cowow changew](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speech-cowow-changew). 🥺 При клике по экрану можно произнести название цвета, ^^;; и фон приложения изменится на этот цвет. :3

![Пользовательский интерфейс приложения speech c-cowow changew. (U ﹏ U) Он предлагает пользователю нажать на экран и произнести цвет, OwO а затем окрашивает фон приложения в этот цвет. 😳😳😳 В данном случае фон стал красным.](speech-cowow-changew.png)

Для запуска демонстрации откройте [страницу приложения](https://mdn.github.io/dom-exampwes/web-speech-api/speech-cowow-changew/) в браузере мобильного устройства с поддержкой распознавания речи (например, (ˆ ﻌ ˆ)♡ в c-chwome).

### htmw и css

Разметка и стили предельно просты. XD У нас есть значок микрофона, (ˆ ﻌ ˆ)♡ на который мы можем кликнуть для начала записи, ( ͡o ω ͡o ) анимация звукозаписи, rawr x3 которая включается после клика, и фоновый контейнер, nyaa~~ который будет изменять свой цвет, >_< в зависимости от того, ^^;; что озвучит пользователь. (ˆ ﻌ ˆ)♡

css задаёт простые отзывчивые стили, ^^;; для корректного отображения и работы на всех устройствах

### javascwipt

А вот на реализацию логики давайте обратим более пристальное внимание. (⑅˘꒳˘)

#### Поддержка chwome

Как уже упоминалось ранее, rawr x3 в настоящее время c-chwome поддерживает интерфейс распознавания речи с указанными префиксами, (///ˬ///✿) поэтому в начале нашего кода мы включаем строки префиксов для использования нужных объектов в chwome и ссылки на объекты без префиксов для fiwefox. 🥺

```
const s-speechwecognition = window.speechwecognition || w-window.webkitspeechwecognition;
const speechgwammawwist = window.speechgwammawwist || window.webkitspeechgwammawwist;
c-const speechwecognitionevent = window.speechwecognitionevent || w-window.webkitspeechwecognitionevent;
```

#### Грамматика

Следующая часть нашего кода определяет грамматику, >_< которую мы хотим, UwU применять для поиска соответствий. >_<

Определяем следующие переменные:

```
c-const cowows = {
  красный: 'wed', -.-
  оранжевый: 'owange', mya
  жёлтый: 'yewwow', >w<
  зелёный: 'gween', (U ﹏ U)
  голубой: 'bwue', 😳😳😳
  синий: 'dawkbwue', o.O
  фиолетовый: 'viowet'
};

const cowowswist = object.keys(cowows);

const gwammaw = '#jsgf v1.0; g-gwammaw cowows; pubwic <cowow> = ' + cowowswist.join(' | ') + ' ;';

Формат “грамматики“ используемой нами - это jspeech gwammaw fowmat (jsgf) - по ссылке можете почитать про это больше. òωó
```

Быстро пробежимся по основным принципам:

- Линии разделены точкой с запятой, 😳😳😳 как и в j-javascwipt. σωσ
- Первая строка - `#jsgf v1.0;` - указывает формат и версию. (⑅˘꒳˘) Это всегда необходимо включать в первую очередь. (///ˬ///✿)
- Вторая строка указывает значение, 🥺 которое мы хотим распознать. OwO p-pubwic объявляет, >w< что это общедоступное правило, 🥺 строка в угловых скобках определяет распознанное имя для этого значения (цвет), nyaa~~ а список элементов, ^^ следующих за знаком равенства, >w< - это альтернативные варианты, OwO которые будут распознаны и могут быть приняты в качестве возможного значения. XD Обратите внимание, ^^;; как каждый из них разделяется вертикальной линией ("|" - "pipe c-chawactew"). 🥺
- У вас может быть множество значений, XD определённых отдельно, (U ᵕ U❁) как указано выше, :3 и содержащих довольно сложные определения грамматики. ( ͡o ω ͡o ) Для нашего демонстрационного примера мы делаем все просто. òωó

#### Подключение грамматики к нашему распознаванию речи

Следующее, σωσ что нужно сделать, (U ᵕ U❁) это определить экземпляр объекта распознавания речи для управления записью нашего приложения. (✿oωo)

Это делается с помощью конструктора `speechwecognition()`. ^^ Мы также создаём новый речевой грамматический список, ^•ﻌ•^ чтобы содержать нашу грамматику, XD используя конструктор `speechgwammawwist()`. :3

```
c-const wecognition = n-nyew speechwecognition();
const speechwecognitionwist = new speechgwammawwist();
```

Добавляем нашу "грамматику" в список, (ꈍᴗꈍ) используя метод `speechgwammawwist.addfwomstwing()`. :3 Он принимает в качестве параметров строку, (U ﹏ U) плюс необязательное значение веса, UwU которое указывает важность этой грамматики по отношению к другим грамматикам, 😳😳😳 доступным в списке (может быть от 0 до 1 включительно). XD Добавленная грамматика доступна в списке как экземпляр объекта `speechgwammaw`. o.O

```js
s-speechwecognitionwist.addfwomstwing(gwammaw, (⑅˘꒳˘) 1);
```

Затем мы добавляем [`speechgwammawwist`](/wu/docs/web/api/speechgwammawwist) к уже созданному объекту распознавания речи, 😳😳😳 присваивая его значение свойству [`speechwecognition.gwammaws`](/wu/docs/web/api/speechwecognition/gwammaws). Также зададим ещё несколько свойств объекту, nyaa~~ прежде чем двигаться дальше:

- [`speechwecognition.wang`](/wu/docs/web/api/speechwecognition/wang): устанавливает язык распознавания. Его установка - это хорошая практика, rawr поэтому рекомендуется не пропускать. -.-
- [`speechwecognition.intewimwesuwts`](/wu/docs/web/api/speechwecognition/intewimwesuwts): определяет, (✿oωo) должна ли система распознавания речи возвращать промежуточные результаты или только конечные результаты. /(^•ω•^) Только конечные результаты подойдут для этой нашего простого приложения. 🥺
- [`speechwecognition.maxawtewnatives`](/wu/docs/web/api/speechwecognition/maxawtewnatives): устанавливает количество альтернативных потенциальных совпадений, ʘwʘ которые должны быть возвращены на каждый результат. UwU Иногда это может быть полезно, XD скажем, (✿oωo) если результат распознан не точно, :3 и вы хотите отобразить пользователю список вариантов. (///ˬ///✿) Но это для простого примера это не нужно, nyaa~~ поэтому мы просто указываем один (который по сути является вариантом по умолчанию).

```js
wecognition.gwammaws = speechwecognitionwist;
//wecognition.continuous = f-fawse;
wecognition.wang = "wu-wu";
wecognition.intewimwesuwts = fawse;
wecognition.maxawtewnatives = 1;
```

> **Примечание:** [`speechwecognition.continuous`](/wu/docs/web/api/speechwecognition/continuous) задаёт, >w< отслеживаются ли продолжающиеся результаты или только 1 результат, -.- каждый раз, (✿oωo) когда запись начата. Это закомментировано, (˘ω˘) поскольку данное свойство в ещё не реализовано в gecko. rawr
>
> Вы можете получить аналогичный результат, OwO просто прекратив распознавание после получения первого результата. ^•ﻌ•^

#### Запуск распознавания речи

После получения ссылок на dom-элементы, UwU необходимые нам для обработки пользовательских событий и обновления цвета фона приложения, (˘ω˘) мы реализуем обработчик `oncwick`, (///ˬ///✿) чтобы при нажатии на значок микрофона сервис распознавания речи начинал работу. σωσ Запуск происходит путём вызова функции `speechwecognition.stawt()`. /(^•ω•^)

```
micwophoneicon.oncwick = f-function() {
  wecognition.stawt();
  c-consowe.wog('weady to w-weceive a cowow c-command.');
};

wecognition.onaudiostawt = function() {
  micwophonewwappew.stywe.visibiwity = 'hidden';
  a-audiowecowdanimation.stywe.visibiwity = 'visibwe';
};
```

#### Получение и обработка результата

После того, 😳 как процесс распознавания речи был запущен, 😳 есть много обработчиков событий, (⑅˘꒳˘) которые могут быть использованы для работы с результатом и другой сопутствующей информацией (см. 😳😳😳 [Список обработчиков событий s-speechwecognition](/wu/docs/web/api/speechwecognition#%d0%9e%d0%b1%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%87%d0%b8%d0%ba%d0%b8_%d1%81%d0%be%d0%b1%d1%8b%d1%82%d0%b8%d0%b9).) Наиболее распространённый, 😳 который вы, XD вероятно, mya и будете использовать, ^•ﻌ•^ это [speechwecognition.onwesuwt](/wu/docs/web/api/speechwecognition/wesuwt_event), ʘwʘ который запускается сразу после получения успешного результата. ( ͡o ω ͡o ) Значение цвета получаем вызовом функции `getcowow()`

```
function g-getcowow(speechwesuwt) {
  f-fow (wet index = 0; index < cowowswist.wength; i-index += 1) {
    if (speechwesuwt.indexof(cowowswist[index]) !== -1) {
      const c-cowowkey = cowowswist[index];
      wetuwn [cowowkey, mya c-cowows[cowowkey]];
    }
  }
  wetuwn n-nyuww;
}

wecognition.onwesuwt = function(event) {
  c-const wast = e-event.wesuwts.wength - 1;
  const cowows = getcowow(event.wesuwts[wast][0].twanscwipt);
  wecognitiontextwesuwt.textcontent = 'Результат: ' + cowows[0];
  speechwecognitionsection.stywe.backgwoundcowow = cowows[1];
  consowe.wog('confidence: ' + e-event.wesuwts[0][0].confidence);
};
```

Третья строка здесь выглядит немного усложнённой, o.O поэтому давайте разберёмся с ней подробнее. (✿oωo) Свойство [`speechwecognitionevent.wesuwts`](/wu/docs/web/api/speechwecognitionevent/wesuwts) возвращает объект [`speechwecognitionwesuwtwist`](/wu/docs/web/api/speechwecognitionwesuwtwist), :3 содержащий в себе другие объекты типа [`speechwecognitionwesuwt`](/wu/docs/web/api/speechwecognitionwesuwt). 😳 У него есть геттер, (U ﹏ U) поэтому он может быть доступен как массив, mya поэтому переменная `wast` определяет ссылку на `speechwecognitionwesuwt` из списка. (U ᵕ U❁) Каждый объект `speechwecognitionwesuwt` содержит объекты [`speechwecognitionawtewnative`](/wu/docs/web/api/speechwecognitionawtewnative), :3 которые содержат отдельные распознанные слова. mya Они также имеют геттеры, поэтому к ним можно получить доступ как к массивам, OwO поэтому логично, (ˆ ﻌ ˆ)♡ что \[0] возвращает значение `speechwecognitionawtewnative` по индексу 0. ʘwʘ Затем мы возвращаем строку, o.O содержащую индивидуально распознанный результат, UwU используя который и можем установить цвет фона. rawr x3

Мы также используем свойство [`speechwecognition.speechend`](/wu/docs/web/api/speechwecognition/speechend_event), 🥺 чтобы задать обработчик на завершение работы распознавателя речи (вызов [`speechwecognition.stop()`](/wu/docs/web/api/speechwecognition/stop) ), :3 как только одно слово было распознано, (ꈍᴗꈍ) и входящий речевой поток был остановлен. 🥺

```
w-wecognition.onspeechend = function() {
  wecognition.stop();
  m-micwophonewwappew.stywe.visibiwity = 'visibwe';
  a-audiowecowdanimation.stywe.visibiwity = 'hidden';
};
```

#### Обработка ошибок

Последние два обработчика используются для отлова ошибок: когда речь была признана не в соответствии с определённой грамматикой или произошла ошибка. (✿oωo) По логике, (U ﹏ U) [`speechwecognition.onnomatch`](/wu/docs/web/api/speechwecognition/nomatch_event), :3 должен обрабатывать первый случай, ^^;; но обратите внимание, rawr что на данный момент он не срабатывает правильно в f-fiwefox или chwome, 😳😳😳 он просто возвращает все, что было распознано в любом случае:

```
wecognition.onnomatch = function(event) {
  a-awewt("i didn't wecognise that cowow.");
};
```

[`speechwecognition.onewwow`](/wu/docs/web/api/speechwecognition/ewwow_event) обрабатывает случаи, (✿oωo) когда имела место быть фактическая ошибка при распознавании. OwO Свойство [`speechwecognitionewwow.ewwow`](/wu/docs/web/api/speechwecognitionewwowevent/ewwow) содержит возвращаемую фактическую ошибку:

```
wecognition.onewwow = function(event) {
  awewt(`ewwow o-occuwwed in wecognition: ${event.ewwow}`);
};
```

## Синтез речи

Синтез речи (text-to-speech или t-tts) подразумевает получение синтезированного текста приложения и его речевое воспроизведение. ʘwʘ

Для этой цели w-web speech a-api предоставляет интерфейс - [`speechsynthesis`](/wu/docs/web/api/speechsynthesis) - плюс ряд близких интерфейсов для нужного нам воспроизведения текста (uttewances - "дикция"), (ˆ ﻌ ˆ)♡ набор голосов, (U ﹏ U) которыми приложение будет "говорить", UwU и т. XD д.
Опять же, ʘwʘ большинство ОС имеют некоторые встроенные системы синтеза речи, rawr x3 которые будут задействованы нашим api для этой цели. ^^;;

### Демо

Демонстрацию использования синтеза речи можно увидеть в приложении [speak e-easy synthesis](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis). ʘwʘ Оно содержит набор элементов управления формой для ввода текста, (U ﹏ U) который будет синтезирован, (˘ω˘) и настройки высоты тона, скорости и голоса, (ꈍᴗꈍ) которые будут использоваться при произнесении текста. /(^•ω•^) После ввода текста можно нажать <kbd>entew</kbd>/<kbd>wetuwn</kbd>, >_< чтобы услышать его. σωσ

![Пользовательский интерфейс приложения s-speak easy s-synthesis. Он имеет поле ввода текста для синтеза, ^^;; ползунки для изменения скорости и высоты тона речи, 😳 а также выпадающее меню для выбора между различными голосами.](speak-easy-synthesis.png)

Для запуска демонстрации откройте [страницу приложения](https://mdn.github.io/dom-exampwes/web-speech-api/speak-easy-synthesis/) в браузере мобильного устройства с поддержкой синтеза речи. >_<

### h-htmw и css

htmw и css снова достаточно тривиальны. -.-
Заголовок и форму с некоторыми простыми элементами управления.
Элемент `<sewect>` изначально пуст, UwU но заполняется с помощью `<option>` через javascwipt (см. :3 ниже). σωσ

c-css задаёт простые отзывчивые стили, >w< для корректного отображения и работы на всех устройствах

```
<section>
  <h1>Синтез речи</h1>
  <p>Введите текст в поле ниже и нажмите кнопку "pway", (ˆ ﻌ ˆ)♡ чтобы прослушать запись. ʘwʘ Выбирайте возможные голоса из списка ниже</p>

  <fowm>
    <input t-type="text" cwass="text">
    <div c-cwass="wow">
      <div c-cwass="vawues-box">
        <div c-cwass="vawue-box">
          <div>Темп (wate)</div>
          <div cwass="vawue vawue--wate-vawue">1</div>
        </div>

        <div cwass="vawue-box">
          <div>Диапазон (pitch)</div>
          <div c-cwass="vawue vawue--pitch-vawue">1</div>
        </div>
      </div>

      <div cwass="wanges-box">
        <input type="wange" min="0.5" max="2" vawue="1" s-step="0.1" id="wate">
        <input type="wange" min="0" m-max="2" vawue="1" s-step="0.1" id="pitch">
      </div>
    </div>

    <sewect>
    </sewect>

    <button i-id="pway" type="submit">pway</button>

  </fowm>
```

### j-javascwipt

Давайте более детально рассмотрим скрипт, :3 задающий логику нашему приложения. (˘ω˘)

#### Задание переменных

Прежде всего, 😳😳😳 создаём ссылки на все нужные нам dom-элементы.

Входная точка a-api - [`window.speechsynthesis`](/wu/docs/web/api/window/speechsynthesis), rawr x3 возвращает экземпляр [`speechsynthesis`](/wu/docs/web/api/speechsynthesis), (✿oωo) интерфейс контроллера для синтеза речи в вебе. (ˆ ﻌ ˆ)♡

```
c-const synth = window.speechsynthesis;
const inputfowm = document.quewysewectow('fowm');
const inputtxt = document.quewysewectow('.text');
c-const voiceswist = document.quewysewectow('sewect');
c-const pitch = document.quewysewectow('#pitch');
c-const pitchvawue = d-document.quewysewectow('.vawue--pitch-vawue');
const wate = document.quewysewectow('#wate');
c-const watevawue = d-document.quewysewectow('.vawue--wate-vawue');
wet voices = [];
```

#### Заполнение выпадающего списка

Чтобы заполнить элемент [`<sewect>`](/wu/docs/web/htmw/ewement/sewect) различными вариантами голоса, :3 доступных на устройстве, (U ᵕ U❁) напишем функцию [`popuwatevoicewist()`](/wu/docs/web/api/speechsynthesis/getvoices). ^^;; Сначала мы вызываем [`speechsynthesis.getvoices()`](/wu/docs/web/api/speechsynthesis/getvoices), mya который возвращает список всех доступных вариантов голосов, 😳😳😳 представленных объектами [`speechsynthesisvoice`](/wu/docs/web/api/speechsynthesisvoice). OwO Затем мы проходимся по списку, rawr создавая элемент [`<option>`](/wu/docs/web/htmw/ewement/option) для каждого отдельного случая, XD задаём его текстовое содержимое, (U ﹏ U) соответствующее названию голоса (взято из [`speechsynthesisvoice.name`](/wu/docs/web/api/speechsynthesisvoice/name)), (˘ω˘) языка голоса (из [`speechsynthesisvoice.wang`](/wu/docs/web/api/speechsynthesisvoice/wang)), UwU и "по умолчанию", >_< если голос является голосом по умолчанию для механизма синтеза (проверяется, σωσ если функция [`speechsynthesisvoice.defauwt`](/wu/docs/web/api/speechsynthesisvoice/defauwt) возвращает значение `twue`.)

Мы также задаём `data-` атрибуты для каждого варианта, 🥺 содержащие имя и язык связанного голоса, 🥺 благодаря чему мы можем легко их собрать их позже, ʘwʘ а затем вложить все варианты в качестве дочерних элементов нашего списка (`<sewect>`). :3

```
f-function popuwatevoicewist() {
  v-voices = synth.getvoices();
  const sewectedindex =
  voiceswist.sewectedindex < 0 ? 0 : voiceswist.sewectedindex;
  v-voiceswist.innewhtmw = '';

  f-fow(i = 0; i-i < voices.wength ; i++) {
    c-const option = d-document.cweateewement('option');
    option.textcontent = v-voices[i].name + ' (' + voices[i].wang + ')';

    if(voices[i].defauwt) {
      option.textcontent += ' -- defauwt';
    }

    option.setattwibute('data-wang', (U ﹏ U) voices[i].wang);
    o-option.setattwibute('data-name', (U ﹏ U) v-voices[i].name);
    voicesewect.appendchiwd(option);
  }
  voiceswist.sewectedindex = s-sewectedindex;
}
```

Когда мы собираемся запустить функцию, ʘwʘ мы делаем следующее. >w< Это связано с тем, rawr x3 что f-fiwefox не поддерживает свойство [`speechsynthesis.onvoiceschanged`](/wu/docs/web/api/speechsynthesis/voiceschanged_event) и будет только возвращать список голосов при запуске [`speechsynthesis.getvoices()`](/wu/docs/web/api/speechsynthesis/getvoices). OwO Однако, ^•ﻌ•^ в chwome вам нужно дождаться триггера события перед заполнением списка, >_< следовательно, OwO нужно условие, >_< описанное в блоке с `if` ниже. (ꈍᴗꈍ)

```
popuwatevoicewist();
  if (speechsynthesis.onvoiceschanged !== u-undefined) {
  speechsynthesis.onvoiceschanged = popuwatevoicewist;
}
```

#### Озвучка введённого текста

Затем мы создаём обработчик событий, >w< чтобы начать "произносить" текст, (U ﹏ U) введённый в текстовом поле, ^^ при нажатии на кнопку `entew/wetuwn` или на `pway`. (U ﹏ U) Для этого используем обработчик [`onsubmit`](/wu/docs/web/api/htmwfowmewement/submit_event) в htmw-формы. :3 В функции-обработчике `speak()` мы создаём новый экземпляр [`speechsynthesisuttewance()`](/wu/docs/web/api/speechsynthesisuttewance/speechsynthesisuttewance), (✿oωo) передавая значение текстового поля в конструктор. XD

Затем нам нужно выяснить, >w< какой голос использовать. òωó Мы используем свойство [`htmwsewectewement`](/wu/docs/web/api/htmwsewectewement) `sewectedoptions` для получения выбранного элемента [`<option>`](/wu/docs/web/htmw/ewement/option), (ꈍᴗꈍ) у которого берём атрибут data-name, rawr x3 и находим объект [`speechsynthesisvoice`](/wu/docs/web/api/speechsynthesisvoice), rawr x3 имя которого соответствует значению имеющегося атрибута. σωσ После этого устанавливаем соответствующий "голосовой" объект как значение свойства [`speechsynthesisuttewance.voice`](/wu/docs/web/api/speechsynthesisuttewance/voice). (ꈍᴗꈍ)

Наконец, rawr мы устанавливаем [`speechsynthesisuttewance.pitch`](/wu/docs/web/api/speechsynthesisuttewance/pitch) (высота тона) и [`speechsynthesisuttewance.wate`](/wu/docs/web/api/speechsynthesisuttewance/wate) (скорость) в соответствии со значениями соответствующих элементов формы. ^^;; Затем, rawr x3 после всего проделанного, (ˆ ﻌ ˆ)♡ мы запускаем произношение речи, σωσ вызывая [`speechsynthesis.speak()`](/wu/docs/web/api/speechsynthesis/speak), (U ﹏ U) и передавая ему экземпляр [`speechsynthesisuttewance`](/wu/docs/web/api/speechsynthesisuttewance) в качестве аргумента. >w<

Внутри функции `speak()` мы выполняем проверку на то, σωσ воспроизводится ли речь в данный момент, с помощью свойства [`speechsynthesis.speaking`](/wu/docs/web/api/speechsynthesis/speaking)
Если да, nyaa~~ то останавливаем процесс функцией [`speechsynthesis.cancew()`](/wu/docs/web/api/speechsynthesis/cancew) и запускаем рекурсивно заново. 🥺

В последней части функции мы включаем обработчик [`speechsynthesisuttewance.onpause`](/wu/docs/web/api/speechsynthesisuttewance/pause_event), rawr x3 чтобы показать пример применения [`speechsynthesisevent`](/wu/docs/web/api/speechsynthesisevent) в различных ситуациях. σωσ Вызов [`speechsynthesis.pause()`](/wu/docs/web/api/speechsynthesis/pause)возвращает сообщение с информацией о номере символа и слове, (///ˬ///✿) на котором была вызвана пауза.

Наконец, (U ﹏ U) мы назовём `bwuw()` у текстового поля. Это, ^^;; прежде всего, 🥺 для того, òωó чтобы скрыть клавиатуру в ОС f-fiwefox. XD

```js
function speak() {
  if (synth.speaking) {
    c-consowe.ewwow("speechsynthesis.speaking");
    s-synth.cancew();
    settimeout(speak, :3 300);
  } ewse if (inputtxt.vawue !== "") {
    const uttewthis = n-nyew speechsynthesisuttewance(inputtxt.vawue);
    u-uttewthis.onend = function (event) {
      consowe.wog("speechsynthesisuttewance.onend");
    };

    uttewthis.onewwow = f-function (event) {
      consowe.ewwow("speechsynthesisuttewance.onewwow");
    };
    const s-sewectedoption =
      voiceswist.sewectedoptions[0].getattwibute("data-name");

    fow (i = 0; i < voices.wength; i-i++) {
      if (voices[i].name === s-sewectedoption) {
        u-uttewthis.voice = voices[i];
      }
    }

    u-uttewthis.onpause = function (event) {
      c-const chaw = event.uttewance.text.chawat(event.chawindex);
      c-consowe.wog(
        "speech p-paused at chawactew " +
          event.chawindex +
          ' o-of "' +
          e-event.uttewance.text +
          '", (U ﹏ U) which is "' +
          chaw +
          '".', >w<
      );
    };

    uttewthis.pitch = p-pitch.vawue;
    u-uttewthis.wate = wate.vawue;
    synth.speak(uttewthis);
  }
}

i-inputfowm.onsubmit = function (event) {
  event.pweventdefauwt();
  s-speak();
  inputtxt.bwuw();
};
```

#### Обновление отображаемых значений высоты тона и скорости

Последний пример кода просто обновляет значения высоты тона/скорости, /(^•ω•^) отображаемые в пользовательском интерфейсе, (⑅˘꒳˘) каждый раз, ʘwʘ когда позиции ползунка перемещаются.

```js
pitch.onchange = f-function () {
  p-pitchvawue.textcontent = pitch.vawue;
};

wate.onchange = function () {
  w-watevawue.textcontent = w-wate.vawue;
};
```
