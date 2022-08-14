---
title: Применение Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
tags:
  - API
  - Web Speech API
  - Воспроизведение речи
  - Распознавание речи
  - Синтез речи
translation_of: Web/API/Web_Speech_API/Using_the_Web_Speech_API
---
<p class="summary">Web Speech API предоставляет 2 основных типа функциональности — <a href="https://developer.mozilla.org/ru/docs/Web/API/SpeechRecognition">распознавание речи пользователя</a> и <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis">речевое воспроизведение текста</a>. Это предоставляет новые возможности для взаимодействия с интерфейсом и открывает перед нами новые горизонты создания уникального пользовательского опыта. Эта статья даёт краткое описание обоих направлений с примерами кода и ссылкой на работающее приложение онлайн.</p>

<h2 id="Распознавание_речи">Распознавание речи</h2>

<p>Механизм распознавания речи способен принимать речевой поток через микрофон устройства, а затем проверять его, используя свои внутренние алгоритмы. Для более точной работы рекомендуется использовать интерфейс <a href="https://developer.mozilla.org/ru/docs/Web/API/SpeechGrammar">SpeechGrammar</a>, предоставляющий контейнер для определённого набора грамматики, которое ваше приложение должно использовать. Грамматика определяется с помощью <a href="https://www.w3.org/TR/jsgf/">JSpeech Grammar Format(JSGF.)</a>.</p>

<p>После того, как пользовательская речь была распознана, алгоритм возвращает результат (список результатов) в качестве текстовой строки, с которой мы можем продолжить работу.</p>

<div class="note">
<p><strong>Внимание:</strong> В Chrome распознавание речи на веб-странице завязано на взаимодействие с сервером. Ваш звук отправляется на веб-службу для обработки распознавания, поэтому приложение не будет работать в офлайн-режиме.</p>
</div>

<h3 id="Демо">Демо</h3>

<p>Для запуска демо достаточно перейти по <a href="https://ru.web-speech-api-example.cheliz.top/">ссылке на приложение </a>или скачать <a href="https://github.com/Oleg-Miniuk/ru_web_speech_example">репозиторий</a>, установить зависимости (<code>npm install</code>) и запустить приложение (<code>npm run start</code>), после чего открыть <strong>localhost:4001</strong> в браузере.</p>

<p><img alt="" src="https://pp.userapi.com/c831409/v831409509/1c0226/S_tm-BfW-U8.jpg" style="height: 362px; width: 652px;"></p>

<p>после озвучки команды</p>

<p><img alt="" src="https://pp.userapi.com/c831409/v831409509/1c022e/uWRjlOvjopk.jpg" style="height: 329px; width: 650px;"></p>

<h3 id="Браузерная_поддержка">Браузерная поддержка</h3>

<p>Поддержка интерфейса ещё только распространяется на основные браузеры, и на текущий момент ограничена следующим образом:</p>

<ul>
 <li dir="ltr">
  <p dir="ltr">Мобильный и десктопный Firefox поддерживает его в Gecko 44+ без префиксов, и его можно включить, установив значение флага <code>media.webspeech.recognition.enable</code> на <code>true</code> в <code>about:config</code></p>
 </li>
 <li dir="ltr">
  <p dir="ltr">Chrome для настольных компьютеров и версия для Android поддерживали его с версии 33, но с прописанными префиксами, поэтому вам нужно использовать префиксную версию, например <code>webkitSpeechRecognition</code></p>
 </li>
</ul>

<p dir="ltr">Традиционно, самая актуальная информация по поддержке чего-либо в браузерах на <a href="https://caniuse.com/#search=speech">caniuse</a>.</p>

<h3 id="HTML_и_CSS">HTML и CSS</h3>

<p>Разметка и стили предельно просты. У нас есть значок микрофона, на который мы можем кликнуть для начала записи, анимация звукозаписи, которая включается после клика, и фоновый контейнер, который будет изменять свой цвет, в зависимости от того, что озвучит пользователь.</p>

<p>CSS задаёт простые отзывчивые стили, для корректного отображения и работы на всех устройствах</p>

<h3 id="JavaScript">JavaScript</h3>

<p>А вот на реализацию логики давайте обратим более пристальное внимание.</p>

<h4 id="Поддержка_Chrome">Поддержка Chrome </h4>

<p>Как уже упоминалось ранее, в настоящее время Chrome поддерживает интерфейс распознавания речи с указанными префиксами, поэтому в начале нашего кода мы включаем строки префиксов для использования нужных объектов в Chrome и ссылки на объекты без префиксов для Firefox.</p>

<pre>const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
</pre>

<h4 id="Грамматика">Грамматика</h4>

<p>Следующая часть нашего кода определяет грамматику, которую мы хотим, применять для поиска соответствий.</p>

<p>Определяем следующие переменные:</p>

<pre>const colors = {
  красный: 'red',
  оранжевый: 'orange',
  жёлтый: 'yellow',
  зелёный: 'green',
  голубой: 'blue',
  синий: 'darkblue',
  фиолетовый: 'violet'
};

const colorsList = Object.keys(colors);

const grammar = '#JSGF V1.0; grammar colors; public &lt;color&gt; = ' + colorsList.join(' | ') + ' ;';

Формат “грамматики“ используемой нами - это <a href="http://www.w3.org/TR/jsgf/">JSpeech Grammar Format</a> (JSGF) - по ссылке можете почитать про это больше.</pre>

<p dir="ltr">Быстро пробежимся по основным принципам:</p>

<ul>
 <li dir="ltr">
  <p dir="ltr">Линии разделены точкой с запятой, как и в JavaScript.</p>
 </li>
 <li dir="ltr">
  <p dir="ltr">Первая строка - <code>#JSGF V1.0;</code> - указывает формат и версию. Это всегда необходимо включать в первую очередь.</p>
 </li>
 <li dir="ltr">
  <p dir="ltr">Вторая строка указывает значение, которое мы хотим распознать. public объявляет, что это общедоступное правило, строка в угловых скобках определяет распознанное имя для этого значения (цвет), а список элементов, следующих за знаком равенства, - это альтернативные варианты, которые будут распознаны и могут быть приняты в качестве возможного значения. Обратите внимание, как каждый из них разделяется вертикальной линией (“|” - “pipe character”).</p>
 </li>
 <li dir="ltr">
  <p dir="ltr">У вас может быть множество значений, определённых отдельно, как указано выше, и содержащих довольно сложные определения грамматики. Для нашего демонстрационного примера мы делаем все просто.</p>
 </li>
</ul>

<h4 id="Подключение_грамматики_к_нашему_распознаванию_речи"><strong id="docs-internal-guid-5c511c58-7fff-3f7e-ba1f-2130d83c633a">Подключение грамматики к нашему распознаванию речи</strong></h4>

<p>Следующее, что нужно сделать, это определить экземпляр объекта распознавания речи для управления записью нашего приложения.</p>

<p dir="ltr">Это делается с помощью конструктора <code>SpeechRecognition()</code>. Мы также создаём новый речевой грамматический список, чтобы содержать нашу грамматику, используя конструктор <code>SpeechGrammarList()</code>.</p>

<pre>const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();</pre>

<p>Добавляем нашу “грамматику” в список, используя метод <code>SpeechGrammarList.addFromString()</code>. Он принимает в качестве параметров строку, плюс необязательное значение веса, которое указывает важность этой грамматики по отношению к другим грамматикам, доступным в списке (может быть от 0 до 1 включительно). Добавленная грамматика доступна в списке как экземпляр объекта <code>SpeechGrammar</code>.</p>

<pre class="brush: js">speechRecognitionList.addFromString(grammar, 1);
</pre>

<p dir="ltr">Затем мы добавляем <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList">SpeechGrammarList</a></code> к уже созданному объекту распознавания речи, присваивая его значение свойству <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars">SpeechRecognition.grammars</a></code>. Также зададим ещё несколько свойств объекту, прежде чем двигаться дальше:</p>

<ul>
 <li dir="ltr">
  <p dir="ltr"><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang">SpeechRecognition.lang</a></code>: устанавливает язык распознавания. Его установка - это хорошая практика, поэтому рекомендуется не пропускать.</p>
 </li>
 <li dir="ltr">
  <p dir="ltr"><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults">SpeechRecognition.interimResults</a></code>: определяет, должна ли система распознавания речи возвращать промежуточные результаты или только конечные результаты. Только конечные результаты подойдут для этой нашего простого приложения.</p>
 </li>
 <li dir="ltr">
  <p dir="ltr"><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives">SpeechRecognition.maxAlternatives</a></code>: устанавливает количество альтернативных потенциальных совпадений, которые должны быть возвращены на каждый результат. Иногда это может быть полезно, скажем, если результат распознан не точно, и вы хотите отобразить пользователю список вариантов. Но это для простого примера это не нужно, поэтому мы просто указываем один (который по сути является вариантом по умолчанию).</p>
 </li>
</ul>

<pre class="brush: js">recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'ru-RU';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
</pre>

<div class="note">
<p dir="ltr"><strong>Внимание:</strong>  <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/continuous">SpeechRecognition.continuous</a></code> задаёт, отслеживаются ли продолжающиеся результаты или только 1 результат, каждый раз, когда запись начата. Это закомментировано, поскольку данное свойство в ещё не реализовано в Gecko.</p>

<p dir="ltr">Вы можете получить аналогичный результат, просто прекратив распознавание после получения первого результата.</p>
</div>

<h4 id="Запуск_распознавания_речи">Запуск распознавания речи</h4>

<p>После получения ссылок на DOM-элементы, необходимые нам для обработки пользовательских событий и обновления цвета фона приложения, мы реализуем обработчик <code>onclick</code>, чтобы при нажатии на значок микрофона сервис распознавания речи начинал работу. Запуск происходит путём вызова функции <code>SpeechRecognition.start()</code>.</p>

<pre>microphoneIcon.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
};

recognition.onaudiostart = function() {
  microphoneWrapper.style.visibility = 'hidden';
  audioRecordAnimation.style.visibility = 'visible';
};
</pre>

<h4 id="Получение_и_обработка_результата">Получение и обработка результата</h4>

<p>После того, как процесс распознавания речи был запущен, есть много обработчиков событий, которые могут быть использованы для работы с результатом и другой сопутствующей информацией (см. <a href="https://developer.mozilla.org/ru/docs/Web/API/SpeechRecognition#%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B8_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9">Список обработчиков событий SpeechRecognition</a>.) Наиболее распространённый, который вы, вероятно, и будете использовать, это <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onresult">SpeechRecognition.onresult</a>, который запускается сразу после получения успешного результата. Значение цвета получаем вызовом функции <code>getColor()</code></p>

<pre>function getColor(speechResult) {
  for (let index = 0; index &lt; colorsList.length; index += 1) {
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
};</pre>

<p>Третья строка здесь выглядит немного усложнённой, поэтому давайте разберёмся с ней подробнее. Свойство <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/results">SpeechRecognitionEvent.results</a></code> возвращает объект <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList">SpeechRecognitionResultList</a></code>, содержащий в себе другие объекты типа <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult">SpeechRecognitionResult</a></code>. У него есть геттер, поэтому он может быть доступен как массив, поэтому переменная <code>last</code> определяет ссылку на <code>SpeechRecognitionResult</code> из списка. Каждый объект <code>SpeechRecognitionResult</code> содержит объекты <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative">SpeechRecognitionAlternative</a></code>, которые содержат отдельные распознанные слова. Они также имеют геттеры, поэтому к ним можно получить доступ как к массивам, поэтому логично, что [0] возвращает значение <code>SpeechRecognitionAlternative</code> по индексу 0. Затем мы возвращаем строку, содержащую индивидуально распознанный результат, используя который и можем установить цвет фона.</p>

<p>Мы также используем свойство <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechend">SpeechRecognition.speechend</a></code>, чтобы задать обработчик на завершение работы распознавателя речи (вызов <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/stop">SpeechRecognition.stop()</a></code> ), как только одно слово было распознано, и входящий речевой поток был остановлен.</p>

<pre>recognition.onspeechend = function() {
  recognition.stop();
  microphoneWrapper.style.visibility = 'visible';
  audioRecordAnimation.style.visibility = 'hidden';
};

</pre>

<h4 id="Обработка_ошибок">Обработка ошибок</h4>

<p>Последние два обработчика используются для отлова ошибок: когда речь была признана не в соответствии с определённой грамматикой или произошла ошибка. По логике, <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onnomatch">SpeechRecognition.onnomatch</a></code>, должен обрабатывать первый случай, но обратите внимание, что на данный момент он не срабатывает правильно в Firefox или Chrome, он просто возвращает все, что было распознано в любом случае:</p>

<pre>recognition.onnomatch = function(event) {
  alert("I didn't recognise that color.");
};</pre>

<p><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onerror">SpeechRecognition.onerror</a></code> обрабатывает случаи, когда имела место быть фактическая ошибка при распознавании. Свойство <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionError/error">SpeechRecognitionError.error</a></code> содержит возвращаемую фактическую ошибку:</p>

<pre>recognition.onerror = function(event) {
  alert(`Error occurred in recognition: ${event.error}`);
};
</pre>

<h2 id="Синтез_речи">Синтез речи</h2>

<p>Синтез речи (text-to-speech или tts) подразумевает получение синтезированного текста приложения и его речевое воспроизведение.<br>
 <br>
 Для этой цели Web Speech API предоставляет интерфейс - <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis">SpeechSynthesis</a></code> - плюс ряд близких интерфейсов для нужного нам воспроизведения текста (utterances - “дикция”), набор голосов, которыми приложение будет “говорить”, и т. д.<br>
 Опять же, большинство ОС имеют некоторые встроенные системы синтеза речи, которые будут задействованы нашим API для этой цели.</p>

<h3 id="Демо_2">Демо</h3>

<p>То же самое приложение из предыдущего примера.<br>
 <a href="https://ru.web-speech-api-example.cheliz.top/">Ссылка на приложение</a> или <a href="https://github.com/Oleg-Miniuk/ru_web_speech_example">репозиторий</a> (клонируем, затем <code>npm install &amp;&amp; npm run start</code> в терминале, после чего открыть <strong>localhost:4001</strong> в браузере).<br>
 <br>
 Пользовательский интерфейс включает в себя набор элементов для ввода текста, задания высоты тона, скорости воспроизведения и непосредственного выбора голоса, которым будет текст произнесён.</p>

<p>После ввода текста вы можете нажать <strong>Play</strong> для запуска.</p>

<p><img alt="" src="https://pp.userapi.com/c847220/v847220505/1103b9/Jlnq5hDThyQ.jpg" style="height: 529px; width: 634px;"></p>

<h3 id="Браузерная_поддержка_2">Браузерная поддержка</h3>

<p>Поддержка интерфейса ещё только распространяется на основные браузеры, и на текущий момент ограничена следующим образом:</p>

<ul>
 <li dir="ltr">
  <p dir="ltr">Мобильный и десктопный Firefox поддерживает его в Gecko 44+ без префиксов, и его можно включить, установив значение флага media.webspeech.synth.enabled на true в about:config</p>
 </li>
 <li dir="ltr">
  <p dir="ltr">Chrome для настольных компьютеров и версия для Android поддерживали его с версии 33 без префиксов</p>
 </li>
</ul>

<ul>
 <li>
  <p>Традиционно, самая актуальная информация по поддержке чего-либо в браузерах на <a href="https://caniuse.com/#search=SpeechSynthesis">caniuse</a>.</p>
 </li>
</ul>

<h3 id="HTML_и_CSS_2">HTML и CSS</h3>

<p>HTML и CSS снова достаточно тривиальны.<br>
 Заголовок и форму с некоторыми простыми элементами управления.<br>
 Элемент <code>&lt;select&gt; </code>изначально пуст, но заполняется с помощью <code>&lt;option&gt;</code> через JavaScript (см. ниже).</p>

<p>CSS задаёт простые отзывчивые стили, для корректного отображения и работы на всех устройствах</p>

<pre>&lt;section&gt;
  &lt;h1&gt;Синтез речи&lt;/h1&gt;
  &lt;p&gt;Введите текст в поле ниже и нажмите кнопку "Play", чтобы прослушать запись. Выбирайте возможные голоса из списка ниже&lt;/p&gt;

  &lt;form&gt;
    &lt;input type="text" class="text"&gt;
    &lt;div class="row"&gt;
      &lt;div class="values-box"&gt;
        &lt;div class="value-box"&gt;
          &lt;div&gt;Темп (Rate)&lt;/div&gt;
          &lt;div class="value value--rate-value"&gt;1&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="value-box"&gt;
          &lt;div&gt;Диапазон (Pitch)&lt;/div&gt;
          &lt;div class="value value--pitch-value"&gt;1&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="ranges-box"&gt;
        &lt;input type="range" min="0.5" max="2" value="1" step="0.1" id="rate"&gt;
        &lt;input type="range" min="0" max="2" value="1" step="0.1" id="pitch"&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;select&gt;
    &lt;/select&gt;

    &lt;button id="play" type="submit"&gt;Play&lt;/button&gt;

  &lt;/form&gt;</pre>

<h3 id="JavaScript_2">JavaScript</h3>

<p>Давайте более детально рассмотрим скрипт, задающий логику нашему приложения.</p>

<h4 id="Задание_переменных">Задание переменных</h4>

<p>Прежде всего, создаём ссылки на все нужные нам DOM-элементы.</p>

<p dir="ltr">Входная точка API - <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis">window.speechSynthesis</a></code>, возвращает экземпляр <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis">SpeechSynthesis</a></code>, интерфейс контроллера для синтеза речи в вебе.</p>

<pre>const synth = window.speechSynthesis;
const inputForm = document.querySelector('form');
const inputTxt = document.querySelector('.text');
const voicesList = document.querySelector('select');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('.value--pitch-value');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('.value--rate-value');
let voices = [];</pre>

<h4 id="Заполнение_выпадающего_списка">Заполнение выпадающего списка</h4>

<p>Чтобы заполнить элемент <code><a href="https://developer.mozilla.org/ru/docs/Web/HTML/Element/select">&lt;select&gt;</a></code> различными вариантами голоса, доступных на устройстве, напишем функцию <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices">populateVoiceList()</a></code>. Сначала мы вызываем <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices">SpeechSynthesis.getVoices()</a></code>, который возвращает список всех доступных вариантов голосов, представленных объектами <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice">SpeechSynthesisVoice</a></code>. Затем мы проходимся по списку, создавая элемент <code><a href="https://developer.mozilla.org/ru/docs/Web/HTML/Element/option">&lt;option&gt;</a></code> для каждого отдельного случая, задаём его текстовое содержимое, соответствующее названию голоса (взято из <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/name">SpeechSynthesisVoice.name</a></code>), языка голоса (из <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/lang">SpeechSynthesisVoice.lang</a></code>), и  “по умолчанию”, если голос является голосом по умолчанию для механизма синтеза (проверяется, если функция <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/default">SpeechSynthesisVoice.default</a></code> возвращает значение <code>true</code>.)</p>

<p>Мы также задаём <code>data-</code> атрибуты для каждого варианта, содержащие имя и язык связанного голоса, благодаря чему мы можем легко их собрать их позже, а затем вложить все варианты в качестве дочерних элементов нашего списка (<code>&lt;select&gt;</code>).</p>

<pre>function populateVoiceList() {
  voices = synth.getVoices();
  const selectedIndex =
  voicesList.selectedIndex &lt; 0 ? 0 : voicesList.selectedIndex;
  voicesList.innerHTML = '';

  for(i = 0; i &lt; voices.length ; i++) {
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
}</pre>

<p>Когда мы собираемся запустить функцию, мы делаем следующее. Это связано с тем, что Firefox не поддерживает свойство <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged">SpeechSynthesis.onvoiceschanged</a></code> и будет только возвращать список голосов при запуске <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices">SpeechSynthesis.getVoices()</a></code>. Однако, в Chrome вам нужно дождаться триггера события перед заполнением списка, следовательно, нужно условие, описанное в блоке с <code>if</code> ниже.</p>

<pre>populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}</pre>

<h4 id="Озвучка_введённого_текста">Озвучка введённого текста</h4>

<p>Затем мы создаём обработчик событий, чтобы начать “произносить” текст, введённый в текстовом поле, при нажатии на кнопку <code>Enter/Return</code> или на <code>Play</code>. Для этого используем обработчик <code><a href="https://developer.mozilla.org/ru/docs/Web/API/GlobalEventHandlers/onsubmit">onsubmit</a></code> в html-формы. В функции-обработчике <code>speak()</code> мы создаём новый экземпляр <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance">SpeechSynthesisUtterance()</a></code>, передавая значение текстового поля в конструктор.</p>

<p dir="ltr">Затем нам нужно выяснить, какой голос использовать. Мы используем свойство <code><a href="https://developer.mozilla.org/ru/docs/Web/API/HTMLSelectElement">HTMLSelectElement</a></code> <code>selectedOptions</code> для получения выбранного элемента <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option">&lt;option&gt;</a></code>, у которого берём атрибут data-name, и находим объект <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice">SpeechSynthesisVoice</a></code>, имя которого соответствует значению имеющегося атрибута. После этого устанавливаем соответствующий “голосовой” объект как значение свойства <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/voice">SpeechSynthesisUtterance.voice</a></code>.</p>

<p>Наконец, мы устанавливаем <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pitch">SpeechSynthesisUtterance.pitch</a></code> (высота тона) и <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/rate">SpeechSynthesisUtterance.rate</a></code> (скорость) в соответствии со значениями соответствующих элементов формы. Затем, после всего проделанного, мы запускаем произношение речи, вызывая <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak">SpeechSynthesis.speak()</a></code>, и передавая ему экземпляр <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance">SpeechSynthesisUtterance</a></code> в качестве аргумента.</p>

<p>Внутри функции <code>speak()</code> мы выполняем проверку на то, воспроизводится ли речь в данный момент, с помощью свойства <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speaking">SpeechSynthesis.speaking</a></code> <br>
 Если да, то останавливаем процесс функцией <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel" title="The cancel() method of the SpeechSynthesis interface removes all utterances from the utterance queue.">SpeechSynthesis.cancel()</a></code> и запускаем рекурсивно заново.</p>

<p>В последней части функции мы включаем обработчик <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onpause">SpeechSynthesisUtterance.onpause</a></code>, чтобы показать пример применения <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent">SpeechSynthesisEvent</a></code> в различных ситуациях. Вызов <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pause">SpeechSynthesis.pause() </a></code>возвращает сообщение с информацией о номере символа и слове, на котором была вызвана пауза.</p>

<p>Наконец, мы назовём <code>blur()</code> у текстового поля. Это, прежде всего, для того, чтобы скрыть клавиатуру в ОС Firefox.</p>

<pre>function speak() {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    synth.cancel();
    setTimeout(speak, 300);
  } else if (inputTxt.value !== '') {
      const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
      utterThis.onend = function(event) {
        console.log('SpeechSynthesisUtterance.onend');
      };

      utterThis.onerror = function(event) {
        console.error('SpeechSynthesisUtterance.onerror');
      };
      const selectedOption = voicesList.selectedOptions[0].getAttribute('data-name');

      for (i = 0; i &lt; voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }

      utterThis.onpause = function(event) {
        const char = event.utterance.text.charAt(event.charIndex);
        console.log('Speech paused at character ' +
          event.charIndex +
          ' of "' +
          event.utterance.text +
          '", which is "' +
          char +
          '".'
        );
      };

      utterThis.pitch = pitch.value;
      utterThis.rate = rate.value;
      synth.speak(utterThis);
    }
}

inputForm.onsubmit = function(event) {
  event.preventDefault();
  speak();
  inputTxt.blur();
};
</pre>

<h4 id="Обновление_отображаемых_значений_высоты_тона_и_скорости">Обновление отображаемых значений высоты тона и скорости</h4>

<p>Последний пример кода просто обновляет значения высоты тона/скорости, отображаемые в пользовательском интерфейсе, каждый раз, когда позиции ползунка перемещаются.</p>

<pre>pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
};

rate.onchange = function() {
  rateValue.textContent = rate.value;
};
</pre>
