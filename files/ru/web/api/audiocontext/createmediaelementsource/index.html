---
title: AudioContext.createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
translation_of: Web/API/AudioContext/createMediaElementSource
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>Метод <code>createMediaElementSource()</code> интерфейса {{ domxref("AudioContext") }} используется для создания объекта {{ domxref("MediaElementAudioSourceNode") }} из существующих HTML-элементов {{htmlelement("audio")}} или {{htmlelement("video")}} для дальнейших манипуляций со звуком и его воспроизведения.</p>
</div>

<p>Узнать больше о созданном таким образом аудио узле можно на справочной странице {{ domxref("MediaElementAudioSourceNode") }}.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);</pre>

<h3 id="Параметры">Параметры</h3>

<dl>
 <dt><code>myMediaElement</code></dt>
 <dd>Объект {{domxref("HTMLMediaElement")}}, который вы хотите использовать в качестве исходного звука.</dd>
</dl>

<h3 id="Возвращаемые_значения">Возвращаемые значения</h3>

<p>Объект {{domxref("MediaElementAudioSourceNode")}}.</p>

<h2 id="Пример">Пример</h2>

<p>Простой пример создания аудио узла из элемента {{htmlelement("audio") }} используя <code>createMediaElementSource()</code>, и управления усилением звука через {{ domxref("GainNode") }} перед подачей в {{ domxref("AudioDestinationNode") }} для воспроизведения. При движении мыши вызывается функция <code>updatePage()</code>, вычисляющая текущее усиление как отношение Y позиции курсора к общей высоте окна. Таким образом вы можете увеличивать/уменьшать громкость звучания аудио движениями мыши вверх/вниз.</p>

<div class="note">
<p><strong>Примечание</strong>: вы можете также посмотреть <a href="http://mdn.github.io/media-source-buffer/">демонстрацию</a> или <a href="https://github.com/mdn/media-source-buffer">исходники</a>.</p>
</div>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// Создаём MediaElementAudioSourceNode
// На основе HTMLMediaElement
var source = audioCtx.createMediaElementSource(myAudio);

// Создаём узел контроля громкости (усиления)
var gainNode = audioCtx.createGain();

// Переменные, содержащие Y координату курсора мыши
// и высоту окна
var CurY;
var HEIGHT = window.innerHeight;

// Обновляем Y координату курсора при движении мышью
// и вычисляем новый коэффициент усиления

document.onmousemove = updatePage;

function updatePage(e) {
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    gainNode.gain.value = CurY/HEIGHT;
}


// Последний шаг - построение графа
// Подсоединяем AudioBufferSourceNode к gainNode
// а gainNode, в свою очередь, к конечному узлу вывода
// Теперь мы можем слушать музыку управляя громкостью воспроизведения движением курсора мыши :)
source.connect(gainNode);
gainNode.connect(audioCtx.destination);</pre>

<div class="note">
<p><strong>Примечание</strong>: Вызов <code>createMediaElementSource()</code> перенаправит выходной поток аудиоданных из {{domxref("HTMLMediaElement")}} в обрабатывающий граф AudioContext. Управление воспроизведением медиа все ещё будет осуществляться через API медиа элемента или его панель управления.</p>
</div>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Поддержка_в_браузерах">Поддержка в браузерах</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
