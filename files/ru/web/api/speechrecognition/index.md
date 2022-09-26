---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
translation_of: Web/API/SpeechRecognition
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p>Интерфейс<strong> Распознавание голоса</strong> <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> является интерфейсом контроллера для сервиса распознавания; который так же перехватывает событие {{domxref("SpeechRecognitionEvent")}}, отправленное сервисом распознавания.</p>

<h2 id="Конструктор">Конструктор</h2>

<dl>
 <dt>{{domxref("SpeechRecognition.SpeechRecognition()")}}</dt>
 <dd>Создаёт новый объект <code>SpeechRecognition</code> .</dd>
</dl>

<h2 id="Свойства">Свойства</h2>

<p><em><code>SpeechRecognition</code> наследует свойства от своего родительского интерфейса, {{domxref("EventTarget")}}.</em></p>

<dl>
 <dt>{{domxref("SpeechRecognition.grammars")}}</dt>
 <dd>Возвращает и устанавливает коллекцию объектов {{domxref("SpeechGrammar")}}  грамматики которые будут понятны текущему <code>SpeechRecognition</code>.</dd>
 <dt>{{domxref("SpeechRecognition.lang")}}</dt>
 <dd>Задаёт и возвращает язык текущего <code>SpeechRecognition</code>. Если данное свойство не указано по умолчанию, то используется из HTML кода значение атрибута {{htmlattrxref("lang","html")}} , или настройки языка агента текущего пользователя.</dd>
 <dt>{{domxref("SpeechRecognition.continuous")}}</dt>
 <dd>Проверяет возвращается ли непрерывные результаты или вернулся только один. По умолчанию для одиночного значение (<code>false</code>.)</dd>
 <dt>{{domxref("SpeechRecognition.interimResults")}}</dt>
 <dd>Контроллирует, следует ли возвращать промежуточные результаты (<code>true</code>) или нет (<code>false</code>.) Промежуточные результаты это результаты которые ещё не завершены ( например {{domxref("SpeechRecognitionResult.isFinal")}} свойство ложно.)</dd>
 <dt>{{domxref("SpeechRecognition.maxAlternatives")}}</dt>
 <dd>Устанавливает максимальное количество предоставленных результатов {{domxref("SpeechRecognitionAlternative")}}. По умолчанию значение 1.</dd>
 <dt>{{domxref("SpeechRecognition.serviceURI")}}</dt>
 <dd>Определяет местоположение службы распознавания речи, используемой текущим SpeechRecognition, для обработки фактического распознавания. По умолчанию используется речевая служба агента пользователя.</dd>
</dl>

<h3 id="Обработчики_событий">Обработчики событий</h3>

<dl>
 <dt>{{domxref("SpeechRecognition.onaudiostart")}}</dt>
 <dd>Вызывается когда пользовательский агент начал захват аудио.</dd>
 <dt>{{domxref("SpeechRecognition.onaudioend")}}</dt>
 <dd>Вызывается когда пользовательский агент закончил захват аудио.</dd>
 <dt>{{domxref("SpeechRecognition.onend")}}</dt>
 <dd>Вызывается когда служба распознавания речи отключилась.</dd>
 <dt>{{domxref("SpeechRecognition.onerror")}}</dt>
 <dd>Вызывается когда произошла ошибка распознавания речи.</dd>
 <dt>{{domxref("SpeechRecognition.onnomatch")}}</dt>
 <dd>Вызывается, когда служба распознавания речи возвращает окончательный результат без существенного распознавания. Это может включать определённую степень признания  {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} которая не соответствует пороговому значению или превышает его.</dd>
 <dt>{{domxref("SpeechRecognition.onresult")}}</dt>
 <dd>Вызывается когда возвращает результат — слово или фраза были распознаны положительно, и это было передано обратно в приложение.</dd>
 <dt>{{domxref("SpeechRecognition.onsoundstart")}}</dt>
 <dd>Вызывается при обнаружении любого звука - не важно, распознана речь или нет.</dd>
 <dt>{{domxref("SpeechRecognition.onsoundend")}}</dt>
 <dd>Вызывается когда  любой звук — распознаваемая речь или нет — перестала распознаваться.</dd>
 <dt>{{domxref("SpeechRecognition.onspeechstart")}}</dt>
 <dd>Вызывается, когда обнаружен звук, распознаваемый службой распознавания речи как речевой сигнал.</dd>
 <dt>{{domxref("SpeechRecognition.onspeechend")}}</dt>
 <dd>Вызывается, когда прекращается обнаружение речи, распознанной службой распознавания речи.</dd>
 <dt>{{domxref("SpeechRecognition.onstart")}}</dt>
 <dd>Вызывается, когда служба распознавания речи начинает обрабатывать входящий звук с намерением распознать грамматики, связанные с текущим распознаванием речи.</dd>
</dl>

<h2 id="Методы">Методы</h2>

<p><em>Распознавание речи также наследует методы от своего родительского интерфейса, {{domxref("EventTarget")}}.</em></p>

<dl>
 <dt>{{domxref("SpeechRecognition.abort()")}}</dt>
 <dd>Останавливает обработку входящего аудио службой распознавания речи и не пытается вернуть {{domxref("SpeechRecognitionResult")}}.</dd>
 <dt>{{domxref("SpeechRecognition.start()")}}</dt>
 <dd>Запускает службу распознавания речи, прослушивая входящее аудио с целью распознавания грамматик, связанных с текущим распознаванием речи.</dd>
 <dt>{{domxref("SpeechRecognition.stop()")}}</dt>
 <dd>Останавливает обработку входящего аудио службой распознавания речи и пытается вернуть {{domxref("SpeechRecognitionResult")}} Используя уже записанный звук.</dd>
</dl>

<h2 id="Примеры">Примеры</h2>

<p>В нашем простом примере <a href="https://github.com/mdn/web-speech-api/tree/master/speech-color-changer">Speech color changer</a> , мы создаём новый объект экземпляра <code>SpeechRecognition</code> используя этот конструктор {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} , создание нового  {{domxref("SpeechGrammarList")}}, И установить его в качестве грамматики, которая будет распознаваться экземпляром распознавание речи с использованием свойства {{domxref("SpeechRecognition.grammars")}}.</p>

<p>После определения некоторых других значений мы затем устанавливаем их так, чтобы служба распознавания началась когда произошло событие по клику ( {{domxref("SpeechRecognition.start()")}}.) Когда результат был успешно распознан, the {{domxref("SpeechRecognition.onresult")}} обработчик извлекаем цвет, который был произнесён из события, а затем меняем цвет фона на данный цвет {{htmlelement("html")}}.</p>

<pre class="brush: js">var grammar = '#JSGF V1.0; grammar colors; public &lt;color&gt; = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color;
  bg.style.backgroundColor = color;
}</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарии</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Speech API', '#speechreco-section', 'SpeechRecognition')}}</td>
   <td>{{Spec2('Web Speech API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость_браузеров">Совместимость браузеров</h2>

{{Compat}}

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
