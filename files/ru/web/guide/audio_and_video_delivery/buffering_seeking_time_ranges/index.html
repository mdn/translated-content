---
title: 'Медиа-буферизация, поиск и временные диапазоны'
slug: Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges
tags:
  - Audio
  - HTML5
  - Video
  - Буфер
  - буферизация
  - временные диапазоны
  - поиск
translation_of: Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges
---
<div class="summary">
<p><span class="seoSummary">Sometimes it's useful to know how much {{htmlelement("audio") }} or {{htmlelement("video") }} has downloaded or is playable without delay — a good example of this is the buffered progress bar of an audio or video player. This article discusses how to build a buffer/seek bar using <a href="https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges">TimeRanges</a>, and other features of the media API.</span></p>
</div>

<h2 id="Buffered">Buffered</h2>

<p>Атрибут <code>buffered</code> расскажет нам, какие части медиа-элемента были загружены. Он возвращает объект {{ domxref("TimeRanges") }}, который содержит информацию о том, какие куски медиа были загружены. Обычно он непрерывный, но если пользователь перескакивает, когда медиа-элемент занят буферизацией, он может содержать пропуски.</p>

<p>Это будет работать с {{htmlelement("audio") }} или {{htmlelement("video") }}; теперь давайте рассмотрим простой пример для audio:</p>

<pre class="brush: html">&lt;audio id="my-audio" controls src="music.mp3"&gt;
&lt;/audio&gt;</pre>

<p>Мы можем получить доступ к этому атрибутам, так:</p>

<pre class="brush: js">var myAudio = document.getElementById('my-audio');

var bufferedTimeRanges = myAudio.buffered;</pre>

<h2 id="Объект_TimeRanges">Объект TimeRanges</h2>

<p>TimeRanges содержит данные о частях буферизованных участков медиафайла (один или более — сколько успело буферизоваться) (<a href="https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges">Узнать больше о TimeRanges</a>).</p>

<p>Объект {{ domxref("TimeRanges") }} имеет следующие свойства:</p>

<ul>
 <li><code>length</code>: число интервалов.</li>
 <li><code>start(index)</code>: начальное время указанного интервала.</li>
 <li><code>end(index)</code>: конечное время указанного интервала.</li>
</ul>

<p><span id="result_box" lang="ru"><span>Без действий пользователя обычно существует только один временной диапазон (</span></span>Time Ranges<span lang="ru"><span>), но если вы переходите по медиа-файлу, может появиться более одного диапазона, как показано на рисунке ниже.</span> <span>Получится два буферизированных диапазона по времени - один с 0 по 5 секунду, а второй - с 15 по 19 секунду.</span></span></p>

<pre>------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21</pre>

<p><span id="result_box" lang="ru"><span>Для этого звукового файла</span></span> {{ domxref("TimeRange") }} будет иметь следующие доступные свойства:</p>

<pre class="brush: js">myAudio.buffered.length;   // returns 2
myAudio.buffered.start(0); // returns 0
myAudio.buffered.end(0);   // returns 5
myAudio.buffered.start(1); // returns 15
myAudio.buffered.end(1);   // returns 19</pre>

<p>Чтобы опробовать и визуализировать буферные диапазоны времени, мы можем написать немного HTML:</p>

<pre class="brush: html">&lt;p&gt;
  &lt;audio id="my-audio" controls&gt;
    &lt;source src="music.mp3" type="audio/mpeg"&gt;
  &lt;/audio&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;canvas id="my-canvas" width="300" height="20"&gt;
  &lt;/canvas&gt;
&lt;/p&gt;</pre>

<p>и немного JavaScript:</p>

<pre class="brush: js">  window.onload = function(){

    var myAudio = document.getElementById('my-audio');
    var myCanvas = document.getElementById('my-canvas');
    var context = myCanvas.getContext('2d');

    context.fillStyle = 'lightgray';
    context.fillRect(0, 0, myCanvas.width, myCanvas.height);
    context.fillStyle = 'red';
    context.strokeStyle = 'white';

    var inc = myCanvas.width / myAudio.duration;

    // отображение TimeRanges

    myAudio.addEventListener('seeked', function() {
      for (i = 0; i &lt; myAudio.buffered.length; i++) {

        var startX = myAudio.buffered.start(i) * inc;
        var endX = myAudio.buffered.end(i) * inc;
        var width = endX - startX;

        context.fillRect(startX, 0, width, myCanvas.height);
        context.rect(startX, 0, width, myCanvas.height);
        context.stroke();
      }
    });
  }</pre>

<p><span id="result_box" lang="ru"><span>Это наглядно работает с длинными фрагментами аудио или видео. Нажмите кнопку воспроизведения и нажмите на панели прогресса и вы должны получить что-то вроде того, что показано на картинке ниже.</span> </span>Each red filled white rectangle represents a time range.</p>

<p><img alt="A simple audio player with play button, seek bar and volume control, with a series of red rectangles beneath it representing time ranges." src="https://mdn.mozillademos.org/files/7347/bufferedtimeranges.png" style="" title="[https://mdn.mozillademos.org] A simple audio player with play button, seek bar and volume control, with a series of red rectangles beneath it representing time ranges."></p>

<div class="note">
<p><strong>Note</strong>: You can see the <a href="http://jsbin.com/memazaro/1/edit">timerange code running live on JS Bin</a>.</p>
</div>

<h2 id="Seekable">Seekable</h2>

<p>The <code>seekable</code> attribute returns a {{ domxref("TimeRanges") }} object and tells us which parts of the media can be played without delay; this is irrespective of whether that part has been downloaded or not. Some parts of the media may be seekable but not buffered if byte-range requests are enabled on the server. Byte range requests allow parts of the media file to be delivered from the server and so can be ready to play almost immediately — thus they are seekable.</p>

<pre class="brush: js">var seekableTimeRanges = myAudio.seekable;</pre>

<h2 id="Создание_собственной_буферизации">Создание собственной буферизации</h2>

<p>If we wish to create our own custom player, we may want to provide feedback on how much of the media is ready to be played. In practice a good way to do this is use the <code>seekable</code> attribute, although as we have seen above seekable parts of the media are not neccessarily contiguous — they often are however and we can safely approximate this information to give the user an indication of which parts of the media can be played directly. We can find this point in the media using the following line of code:</p>

<pre class="brush: js">var seekableEnd = myAudio.seekable.end(myAudio.seekable.length - 1);</pre>

<div class="note">
<p><strong>Note</strong>: <code>myAudio.seekable.end(myAudio.seekable.length - 1)</code> actually tells us the end point of the last time range that is seekable (not all seekable media). In practice this is good enough as the browser either enables range requests or it doesn't. If it doesn't then <code>audio.seekable</code> will be equivalent to <code>audio.buffered</code>, which will give a valid indication of the end of seekable media. If range requests are enabled this value usually becomes the duration of the media almost instantly.</p>
</div>

<p>It is better perhaps to give an indication of how much media has actually downloaded — this what the browser's native players seem to display.</p>

<p>Итак, давайте реализуем это. HTML для нашего плеера выглядит так:</p>

<pre class="brush: css">&lt;audio id="my-audio" preload controls&gt;
  &lt;source src="music.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;
&lt;div class="buffered"&gt;
  &lt;span id="buffered-amount"&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;div class="progress"&gt;
  &lt;span id="progress-amount"&gt;&lt;/span&gt;
&lt;/div&gt;
</pre>

<p>Мы будем использовать следующий CSS для стилизации отображения буферизации:</p>

<pre class="brush: css">.buffered {
  height: 20px;
  position: relative;
  background: #555;
  width: 300px;
}

#buffered-amount {
  display: block;
  height: 100%;
  background-color: #777;
  width: 0;
}

.progress {
  margin-top: -20px;
  height: 20px;
  position: relative;
  width: 300px;
}

#progress-amount {
  display: block;
  height: 100%;
  background-color: #595;
  width: 0;
}</pre>

<p>И следующий JavaScript реализует нашу функциональность:</p>

<pre class="brush: js">window.onload = function(){

  var myAudio = document.getElementById('my-audio');

  myAudio.addEventListener('progress', function() {
    var duration =  myAudio.duration;
    if (duration &gt; 0) {
      for (var i = 0; i &lt; myAudio.buffered.length; i++) {
            if (myAudio.buffered.start(myAudio.buffered.length - 1 - i) &lt; myAudio.currentTime) {
                document.getElementById("buffered-amount").style.width = (myAudio.buffered.end(myAudio.buffered.length - 1 - i) / duration) * 100 + "%";
                break;
            }
        }
    }
  });

  myAudio.addEventListener('timeupdate', function() {
    var duration =  myAudio.duration;
    if (duration &gt; 0) {
      document.getElementById('progress-amount').style.width = ((myAudio.currentTime / duration)*100) + "%";
    }
  });
}</pre>

<p>The progress event is fired as data is downloaded, this is a good event to react to if we want to display download or buffering progress.</p>

<p>The timeupdate event is fired 4 times a second as the media plays and that's where we increment our playing progress bar.</p>

<p>This should give you results similar to the following, where the light grey bar represents the buffered progress and green bar shows the played progress:</p>

<p><img alt="A simple audio player with play button, seek bar and volume control, with a bar below it. The bar has a red portion to show played video, and a dark gray bar to show how much has been buffered." src="https://mdn.mozillademos.org/files/7349/bufferedprogress.png" style="" title="[https://mdn.mozillademos.org] A simple audio player with play button, seek bar and volume control, with a bar below it. The bar has a red portion to show played video, and a dark gray bar to show how much has been buffered."></p>

<div class="note">
<p><strong>Note</strong>: You can see the <a href="http://jsbin.com/badimipi/1/edit">buffering code running live on JS Bin</a>.</p>
</div>

<h2 id="Пару_слов_о_Played">Пару слов о Played</h2>

<p>Надо заметить, что есть свойство <code>played</code>, сообщающее, были ли воспроизведены интервалы полностью. Пример:</p>

<pre class="brush: js">var played = audio.played; // вернёт объект TimeRanges</pre>

<p>Если просуммировать все интервалы <code>audio.played</code>, то получим долю прослушанного аудио, что может быть полезно для сбора метрик.</p>
