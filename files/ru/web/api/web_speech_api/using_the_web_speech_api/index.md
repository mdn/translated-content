---
title: Применение Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
---

Web Speech API предоставляет 2 основных типа функциональности — [распознавание речи пользователя](/ru/docs/Web/API/SpeechRecognition) и [речевое воспроизведение текста](/ru/docs/Web/API/SpeechSynthesis). Это предоставляет новые возможности для взаимодействия с интерфейсом и открывает перед нами новые горизонты создания уникального пользовательского опыта. Эта статья даёт краткое описание обоих направлений с примерами кода и ссылкой на работающее приложение онлайн.

## Распознавание речи

Механизм распознавания речи способен принимать речевой поток через микрофон устройства, а затем проверять его, используя свои внутренние алгоритмы. Для более точной работы рекомендуется использовать интерфейс [SpeechGrammar](/ru/docs/Web/API/SpeechGrammar), предоставляющий контейнер для определённого набора грамматики, которое ваше приложение должно использовать. Грамматика определяется с помощью [JSpeech Grammar Format(JSGF.)](https://www.w3.org/TR/jsgf/).

После того, как пользовательская речь была распознана, алгоритм возвращает результат (список результатов) в качестве текстовой строки, с которой мы можем продолжить работу.

> **Примечание:** В Chrome распознавание речи на веб-странице завязано на взаимодействие с сервером. Ваш звук отправляется на веб-службу для обработки распознавания, поэтому приложение не будет работать в офлайн-режиме.

### Демо

Для запуска демо достаточно перейти по [ссылке на приложение](https://ru.web-speech-api-example.cheliz.top/) или скачать [репозиторий](https://github.com/Oleg-Miniuk/ru_web_speech_example), установить зависимости (`npm install`) и запустить приложение (`npm run start`), после чего открыть **localhost:4001** в браузере.

![](https://pp.userapi.com/c831409/v831409509/1c0226/S_tm-BfW-U8.jpg)

после озвучки команды

![](https://pp.userapi.com/c831409/v831409509/1c022e/uWRjlOvjopk.jpg)

### Браузерная поддержка

Поддержка интерфейса ещё только распространяется на основные браузеры, и на текущий момент ограничена следующим образом:

- Мобильный и десктопный Firefox поддерживает его в Gecko 44+ без префиксов, и его можно включить, установив значение флага `media.webspeech.recognition.enable` на `true` в `about:config`
- Chrome для настольных компьютеров и версия для Android поддерживали его с версии 33, но с прописанными префиксами, поэтому вам нужно использовать префиксную версию, например `webkitSpeechRecognition`

Традиционно, самая актуальная информация по поддержке чего-либо в браузерах на [caniuse](https://caniuse.com/#search=speech).

### HTML и CSS

Разметка и стили предельно просты. У нас есть значок микрофона, на который мы можем кликнуть для начала записи, анимация звукозаписи, которая включается после клика, и фоновый контейнер, который будет изменять свой цвет, в зависимости от того, что озвучит пользователь.

CSS задаёт простые отзывчивые стили, для корректного отображения и работы на всех устройствах

### JavaScript

А вот на реализацию логики давайте обратим более пристальное внимание.

#### Поддержка Chrome

Как уже упоминалось ранее, в настоящее время Chrome поддерживает интерфейс распознавания речи с указанными префиксами, поэтому в начале нашего кода мы включаем строки префиксов для использования нужных объектов в Chrome и ссылки на объекты без префиксов для Firefox.

```
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### Грамматика

Следующая часть нашего кода определяет грамматику, которую мы хотим, применять для поиска соответствий.

Определяем следующие переменные:

```
const colors = {
  красный: 'red',
  оранжевый: 'orange',
  жёлтый: 'yellow',
  зелёный: 'green',
  голубой: 'blue',
  синий: 'darkblue',
  фиолетовый: 'violet'
};

const colorsList = Object.keys(colors);

const grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colorsList.join(' | ') + ' ;';

Формат “грамматики“ используемой нами - это JSpeech Grammar Format (JSGF) - по ссылке можете почитать про это больше.
```

Быстро пробежимся по основным принципам:

- Линии разделены точкой с запятой, как и в JavaScript.
- Первая строка - `#JSGF V1.0;` - указывает формат и версию. Это всегда необходимо включать в первую очередь.
- Вторая строка указывает значение, которое мы хотим распознать. public объявляет, что это общедоступное правило, строка в угловых скобках определяет распознанное имя для этого значения (цвет), а список элементов, следующих за знаком равенства, - это альтернативные варианты, которые будут распознаны и могут быть приняты в качестве возможного значения. Обратите внимание, как каждый из них разделяется вертикальной линией ("|" - "pipe character").
- У вас может быть множество значений, определённых отдельно, как указано выше, и содержащих довольно сложные определения грамматики. Для нашего демонстрационного примера мы делаем все просто.

#### Подключение грамматики к нашему распознаванию речи

Следующее, что нужно сделать, это определить экземпляр объекта распознавания речи для управления записью нашего приложения.

Это делается с помощью конструктора `SpeechRecognition()`. Мы также создаём новый речевой грамматический список, чтобы содержать нашу грамматику, используя конструктор `SpeechGrammarList()`.

```
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

Добавляем нашу "грамматику" в список, используя метод `SpeechGrammarList.addFromString()`. Он принимает в качестве параметров строку, плюс необязательное значение веса, которое указывает важность этой грамматики по отношению к другим грамматикам, доступным в списке (может быть от 0 до 1 включительно). Добавленная грамматика доступна в списке как экземпляр объекта `SpeechGrammar`.

```js
speechRecognitionList.addFromString(grammar, 1);
```

Затем мы добавляем [`SpeechGrammarList`](/ru/docs/Web/API/SpeechGrammarList) к уже созданному объекту распознавания речи, присваивая его значение свойству [`SpeechRecognition.grammars`](/ru/docs/Web/API/SpeechRecognition/grammars). Также зададим ещё несколько свойств объекту, прежде чем двигаться дальше:

- [`SpeechRecognition.lang`](/ru/docs/Web/API/SpeechRecognition/lang): устанавливает язык распознавания. Его установка - это хорошая практика, поэтому рекомендуется не пропускать.
- [`SpeechRecognition.interimResults`](/ru/docs/Web/API/SpeechRecognition/interimResults): определяет, должна ли система распознавания речи возвращать промежуточные результаты или только конечные результаты. Только конечные результаты подойдут для этой нашего простого приложения.
- [`SpeechRecognition.maxAlternatives`](/ru/docs/Web/API/SpeechRecognition/maxAlternatives): устанавливает количество альтернативных потенциальных совпадений, которые должны быть возвращены на каждый результат. Иногда это может быть полезно, скажем, если результат распознан не точно, и вы хотите отобразить пользователю список вариантов. Но это для простого примера это не нужно, поэтому мы просто указываем один (который по сути является вариантом по умолчанию).

```js
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = "ru-RU";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

> **Примечание:** [`SpeechRecognition.continuous`](/ru/docs/Web/API/SpeechRecognition/continuous) задаёт, отслеживаются ли продолжающиеся результаты или только 1 результат, каждый раз, когда запись начата. Это закомментировано, поскольку данное свойство в ещё не реализовано в Gecko.
>
> Вы можете получить аналогичный результат, просто прекратив распознавание после получения первого результата.

#### Запуск распознавания речи

После получения ссылок на DOM-элементы, необходимые нам для обработки пользовательских событий и обновления цвета фона приложения, мы реализуем обработчик `onclick`, чтобы при нажатии на значок микрофона сервис распознавания речи начинал работу. Запуск происходит путём вызова функции `SpeechRecognition.start()`.

```
microphoneIcon.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
};

recognition.onaudiostart = function() {
  microphoneWrapper.style.visibility = 'hidden';
  audioRecordAnimation.style.visibility = 'visible';
};
```

#### Получение и обработка результата

После того, как процесс распознавания речи был запущен, есть много обработчиков событий, которые могут быть использованы для работы с результатом и другой сопутствующей информацией (см. [Список обработчиков событий SpeechRecognition](/ru/docs/Web/API/SpeechRecognition#%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B8_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9).) Наиболее распространённый, который вы, вероятно, и будете использовать, это [SpeechRecognition.onresult](/ru/docs/Web/API/SpeechRecognition/onresult), который запускается сразу после получения успешного результата. Значение цвета получаем вызовом функции `getColor()`

```
function getColor(speechResult) {
  for (let index = 0; index < colorsList.length; index += 1) {
    if (speechResult.indexOf(colorsList[index]) !== -1) {
      const colorKey = colorsList[index];
      return [colorKey, colors[colorKey]];
    }
  }
  return null;
}

recognition.onresult = function(event) {
  const last = event.results.length - 1;
  const colors = getColor(event.results[last][0].transcript);
  recognitionTextResult.textContent = 'Результат: ' + colors[0];
  speechRecognitionSection.style.backgroundColor = colors[1];
  console.log('Confidence: ' + event.results[0][0].confidence);
};
```

Третья строка здесь выглядит немного усложнённой, поэтому давайте разберёмся с ней подробнее. Свойство [`SpeechRecognitionEvent.results`](/ru/docs/Web/API/SpeechRecognitionEvent/results) возвращает объект [`SpeechRecognitionResultList`](/ru/docs/Web/API/SpeechRecognitionResultList), содержащий в себе другие объекты типа [`SpeechRecognitionResult`](/ru/docs/Web/API/SpeechRecognitionResult). У него есть геттер, поэтому он может быть доступен как массив, поэтому переменная `last` определяет ссылку на `SpeechRecognitionResult` из списка. Каждый объект `SpeechRecognitionResult` содержит объекты [`SpeechRecognitionAlternative`](/ru/docs/Web/API/SpeechRecognitionAlternative), которые содержат отдельные распознанные слова. Они также имеют геттеры, поэтому к ним можно получить доступ как к массивам, поэтому логично, что \[0] возвращает значение `SpeechRecognitionAlternative` по индексу 0. Затем мы возвращаем строку, содержащую индивидуально распознанный результат, используя который и можем установить цвет фона.

Мы также используем свойство [`SpeechRecognition.speechend`](/ru/docs/Web/API/SpeechRecognition/onspeechend), чтобы задать обработчик на завершение работы распознавателя речи (вызов [`SpeechRecognition.stop()`](/ru/docs/Web/API/SpeechRecognition/stop) ), как только одно слово было распознано, и входящий речевой поток был остановлен.

```
recognition.onspeechend = function() {
  recognition.stop();
  microphoneWrapper.style.visibility = 'visible';
  audioRecordAnimation.style.visibility = 'hidden';
};
```

#### Обработка ошибок

Последние два обработчика используются для отлова ошибок: когда речь была признана не в соответствии с определённой грамматикой или произошла ошибка. По логике, [`SpeechRecognition.onnomatch`](/ru/docs/Web/API/SpeechRecognition/onnomatch), должен обрабатывать первый случай, но обратите внимание, что на данный момент он не срабатывает правильно в Firefox или Chrome, он просто возвращает все, что было распознано в любом случае:

```
recognition.onnomatch = function(event) {
  alert("I didn't recognise that color.");
};
```

[`SpeechRecognition.onerror`](/ru/docs/Web/API/SpeechRecognition/onerror) обрабатывает случаи, когда имела место быть фактическая ошибка при распознавании. Свойство [`SpeechRecognitionError.error`](/ru/docs/Web/API/SpeechRecognitionError/error) содержит возвращаемую фактическую ошибку:

```
recognition.onerror = function(event) {
  alert(`Error occurred in recognition: ${event.error}`);
};
```

## Синтез речи

Синтез речи (text-to-speech или tts) подразумевает получение синтезированного текста приложения и его речевое воспроизведение.

Для этой цели Web Speech API предоставляет интерфейс - [`SpeechSynthesis`](/ru/docs/Web/API/SpeechSynthesis) - плюс ряд близких интерфейсов для нужного нам воспроизведения текста (utterances - "дикция"), набор голосов, которыми приложение будет "говорить", и т. д.
Опять же, большинство ОС имеют некоторые встроенные системы синтеза речи, которые будут задействованы нашим API для этой цели.

### Демо

То же самое приложение из предыдущего примера.
[Ссылка на приложение](https://ru.web-speech-api-example.cheliz.top/) или [репозиторий](https://github.com/Oleg-Miniuk/ru_web_speech_example) (клонируем, затем `npm install && npm run start` в терминале, после чего открыть **localhost:4001** в браузере).

Пользовательский интерфейс включает в себя набор элементов для ввода текста, задания высоты тона, скорости воспроизведения и непосредственного выбора голоса, которым будет текст произнесён.

После ввода текста вы можете нажать **Play** для запуска.

![](https://pp.userapi.com/c847220/v847220505/1103b9/Jlnq5hDThyQ.jpg)

### Браузерная поддержка

Поддержка интерфейса ещё только распространяется на основные браузеры, и на текущий момент ограничена следующим образом:

- Мобильный и десктопный Firefox поддерживает его в Gecko 44+ без префиксов, и его можно включить, установив значение флага media.webspeech.synth.enabled на true в about:config
- Chrome для настольных компьютеров и версия для Android поддерживали его с версии 33 без префиксов

<!---->

- Традиционно, самая актуальная информация по поддержке чего-либо в браузерах на [caniuse](https://caniuse.com/#search=SpeechSynthesis).

### HTML и CSS

HTML и CSS снова достаточно тривиальны.
Заголовок и форму с некоторыми простыми элементами управления.
Элемент `<select>` изначально пуст, но заполняется с помощью `<option>` через JavaScript (см. ниже).

CSS задаёт простые отзывчивые стили, для корректного отображения и работы на всех устройствах

```
<section>
  <h1>Синтез речи</h1>
  <p>Введите текст в поле ниже и нажмите кнопку "Play", чтобы прослушать запись. Выбирайте возможные голоса из списка ниже</p>

  <form>
    <input type="text" class="text">
    <div class="row">
      <div class="values-box">
        <div class="value-box">
          <div>Темп (Rate)</div>
          <div class="value value--rate-value">1</div>
        </div>

        <div class="value-box">
          <div>Диапазон (Pitch)</div>
          <div class="value value--pitch-value">1</div>
        </div>
      </div>

      <div class="ranges-box">
        <input type="range" min="0.5" max="2" value="1" step="0.1" id="rate">
        <input type="range" min="0" max="2" value="1" step="0.1" id="pitch">
      </div>
    </div>

    <select>
    </select>

    <button id="play" type="submit">Play</button>

  </form>
```

### JavaScript

Давайте более детально рассмотрим скрипт, задающий логику нашему приложения.

#### Задание переменных

Прежде всего, создаём ссылки на все нужные нам DOM-элементы.

Входная точка API - [`window.speechSynthesis`](/ru/docs/Web/API/Window/speechSynthesis), возвращает экземпляр [`SpeechSynthesis`](/ru/docs/Web/API/SpeechSynthesis), интерфейс контроллера для синтеза речи в вебе.

```
const synth = window.speechSynthesis;
const inputForm = document.querySelector('form');
const inputTxt = document.querySelector('.text');
const voicesList = document.querySelector('select');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('.value--pitch-value');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('.value--rate-value');
let voices = [];
```

#### Заполнение выпадающего списка

Чтобы заполнить элемент [`<select>`](/ru/docs/Web/HTML/Element/select) различными вариантами голоса, доступных на устройстве, напишем функцию [`populateVoiceList()`](/ru/docs/Web/API/SpeechSynthesis/getVoices). Сначала мы вызываем [`SpeechSynthesis.getVoices()`](/ru/docs/Web/API/SpeechSynthesis/getVoices), который возвращает список всех доступных вариантов голосов, представленных объектами [`SpeechSynthesisVoice`](/ru/docs/Web/API/SpeechSynthesisVoice). Затем мы проходимся по списку, создавая элемент [`<option>`](/ru/docs/Web/HTML/Element/option) для каждого отдельного случая, задаём его текстовое содержимое, соответствующее названию голоса (взято из [`SpeechSynthesisVoice.name`](/ru/docs/Web/API/SpeechSynthesisVoice/name)), языка голоса (из [`SpeechSynthesisVoice.lang`](/ru/docs/Web/API/SpeechSynthesisVoice/lang)), и "по умолчанию", если голос является голосом по умолчанию для механизма синтеза (проверяется, если функция [`SpeechSynthesisVoice.default`](/ru/docs/Web/API/SpeechSynthesisVoice/default) возвращает значение `true`.)

Мы также задаём `data-` атрибуты для каждого варианта, содержащие имя и язык связанного голоса, благодаря чему мы можем легко их собрать их позже, а затем вложить все варианты в качестве дочерних элементов нашего списка (`<select>`).

```
function populateVoiceList() {
  voices = synth.getVoices();
  const selectedIndex =
  voicesList.selectedIndex < 0 ? 0 : voicesList.selectedIndex;
  voicesList.innerHTML = '';

  for(i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voicesList.selectedIndex = selectedIndex;
}
```

Когда мы собираемся запустить функцию, мы делаем следующее. Это связано с тем, что Firefox не поддерживает свойство [`SpeechSynthesis.onvoiceschanged`](/ru/docs/Web/API/SpeechSynthesis/onvoiceschanged) и будет только возвращать список голосов при запуске [`SpeechSynthesis.getVoices()`](/ru/docs/Web/API/SpeechSynthesis/getVoices). Однако, в Chrome вам нужно дождаться триггера события перед заполнением списка, следовательно, нужно условие, описанное в блоке с `if` ниже.

```
populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Озвучка введённого текста

Затем мы создаём обработчик событий, чтобы начать "произносить" текст, введённый в текстовом поле, при нажатии на кнопку `Enter/Return` или на `Play`. Для этого используем обработчик [`onsubmit`](/ru/docs/Web/API/GlobalEventHandlers/onsubmit) в html-формы. В функции-обработчике `speak()` мы создаём новый экземпляр [`SpeechSynthesisUtterance()`](/ru/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance), передавая значение текстового поля в конструктор.

Затем нам нужно выяснить, какой голос использовать. Мы используем свойство [`HTMLSelectElement`](/ru/docs/Web/API/HTMLSelectElement) `selectedOptions` для получения выбранного элемента [`<option>`](/ru/docs/Web/HTML/Element/option), у которого берём атрибут data-name, и находим объект [`SpeechSynthesisVoice`](/ru/docs/Web/API/SpeechSynthesisVoice), имя которого соответствует значению имеющегося атрибута. После этого устанавливаем соответствующий "голосовой" объект как значение свойства [`SpeechSynthesisUtterance.voice`](/ru/docs/Web/API/SpeechSynthesisUtterance/voice).

Наконец, мы устанавливаем [`SpeechSynthesisUtterance.pitch`](/ru/docs/Web/API/SpeechSynthesisUtterance/pitch) (высота тона) и [`SpeechSynthesisUtterance.rate`](/ru/docs/Web/API/SpeechSynthesisUtterance/rate) (скорость) в соответствии со значениями соответствующих элементов формы. Затем, после всего проделанного, мы запускаем произношение речи, вызывая [`SpeechSynthesis.speak()`](/ru/docs/Web/API/SpeechSynthesis/speak), и передавая ему экземпляр [`SpeechSynthesisUtterance`](/ru/docs/Web/API/SpeechSynthesisUtterance) в качестве аргумента.

Внутри функции `speak()` мы выполняем проверку на то, воспроизводится ли речь в данный момент, с помощью свойства [`SpeechSynthesis.speaking`](/ru/docs/Web/API/SpeechSynthesis/speaking)
Если да, то останавливаем процесс функцией [`SpeechSynthesis.cancel()`](/ru/docs/Web/API/SpeechSynthesis/cancel) и запускаем рекурсивно заново.

В последней части функции мы включаем обработчик [`SpeechSynthesisUtterance.onpause`](/ru/docs/Web/API/SpeechSynthesisUtterance/onpause), чтобы показать пример применения [`SpeechSynthesisEvent`](/ru/docs/Web/API/SpeechSynthesisEvent) в различных ситуациях. Вызов [`SpeechSynthesis.pause()`](/ru/docs/Web/API/SpeechSynthesis/pause)возвращает сообщение с информацией о номере символа и слове, на котором была вызвана пауза.

Наконец, мы назовём `blur()` у текстового поля. Это, прежде всего, для того, чтобы скрыть клавиатуру в ОС Firefox.

```js
function speak() {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    synth.cancel();
    setTimeout(speak, 300);
  } else if (inputTxt.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };
    const selectedOption =
      voicesList.selectedOptions[0].getAttribute("data-name");

    for (i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.onpause = function (event) {
      const char = event.utterance.text.charAt(event.charIndex);
      console.log(
        "Speech paused at character " +
          event.charIndex +
          ' of "' +
          event.utterance.text +
          '", which is "' +
          char +
          '".',
      );
    };

    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);
  }
}

inputForm.onsubmit = function (event) {
  event.preventDefault();
  speak();
  inputTxt.blur();
};
```

#### Обновление отображаемых значений высоты тона и скорости

Последний пример кода просто обновляет значения высоты тона/скорости, отображаемые в пользовательском интерфейсе, каждый раз, когда позиции ползунка перемещаются.

```js
pitch.onchange = function () {
  pitchValue.textContent = pitch.value;
};

rate.onchange = function () {
  rateValue.textContent = rate.value;
};
```
