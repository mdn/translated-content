---
title: <video>
slug: Web/HTML/Element/video
translation_of: Web/HTML/Element/video
---
<p>{{HTMLRef}}</p>

<p>Для встраивания видео контента в документ используйте <strong>элемент HTML &lt;video&gt;</strong>. Видео элемент может содержать один или несколько источников видео. Чтобы указать источник видео, необходимо использовать атрибут <strong>src</strong> или элемент {{HTMLElement("source")}}; браузер сам определит наиболее подходящий источник.</p>

<p>Для просмотра списка поддерживаемых форматов, перейдите по ссылке <a href="/en-US/docs/Media_formats_supported_by_the_audio_and_video_elements">Поддерживаемые аудио и видео элементами форматы мультимедийных файлов</a>.</p>

<h2 id="Контекст_Использования">Контекст Использования</h2>

<ul>
 <li>Допустимое содержимое. Если элемент имеет атрибут {{htmlattrxref("src", "video")}}: 0 или более элементов {{HTMLElement("track")}}, за которым следует прозрачный контент, который не содержит элементов мультимедиа: {{HTMLElement("audio")}} или {{HTMLElement("video")}}<br>
  Иначе: 0 или более элементов {{HTMLElement("source")}}, за которыми следует 0 или более элементов {{HTMLElement("track")}}, затем прозрачным содержимым, которое не содержит элементы мультимедиа: {{HTMLElement("audio")}} или {{HTMLElement("video")}}.</li>
</ul>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/Web/HTML/Content_categories">Content categories </a></th>
   <td><a href="/en-US/docs/Web/HTML/Content_categories#Flow_content">Flow content</a>, содержание фраз, встроенный контент. Если имеет атрибут {{htmlattrxref("controls", "video")}}: становится интерактивным элементом с осязаемым содержанием.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Допустимые родительские элементы</th>
   <td>Любой элемент, который принимает встроенный контент.</td>
  </tr>
  <tr>
   <th scope="row">DOM интерфейс</th>
   <td>{{domxref("HTMLVideoElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Атрибуты">Атрибуты</h2>

<p>Как и все HTML-элементы, этот элемент поддерживает <a href="/ru/docs/Web/HTML/Общие_атрибуты">глобальные атрибуты</a>.</p>

<dl>
 <dt>{{htmlattrdef("autoplay")}}</dt>
 <dd>Логический атрибут<span>; если указан, то видео начнёт воспроизводится </span>автоматически, как только это будет возможно сделать без остановки<span>, чтобы закончить загрузку данных<span>.</span></span></dd>
 <dt>{{htmlattrdef("autobuffer")}} {{Non-standard_inline}} {{obsolete_inline}}</dt>
 <dd>Логический атрибут; если указано, видео автоматически начнёт буферизацию, даже если оно не настроено на автоматический запуск. Используйте этот атрибут только тогда, когда очень вероятно, что пользователь будет смотреть видео. Видео буферизуется до тех пор, пока не заполнится кеш мультимедиа.
 <div class="note"><strong>Примечание:</strong> несмотря на то, что в ранних версиях HTML5 атрибут <code>autobuffer</code> присутствовал, в последующих выпусках он был удалён. Также он был удалён из Gecko 2.0 и других браузеров, а в некоторых никогда не реализовывался. Спецификация определяет новый перечислимый атрибут <code>preload</code>, вместо <code>autobuffer</code> с другим синтаксисом. {{bug(548523)}}</div>
 </dd>
 <dt>{{htmlattrdef("buffered")}}</dt>
 <dd>Атрибут для определения временных диапазонов буферизованных носителей. Этот атрибут содержит объект {{domxref("TimeRanges")}}.</dd>
 <dt>{{htmlattrdef("controls")}}</dt>
 <dd>Если этот атрибут присутствует<span>, тогда браузер отобразит элементы управления<span>, чтобы позволить</span> пользователю управлять воспроизведением видео<span>, регулировать громкость</span>, осуществлять перемотку, <span>а также</span></span> ставить на паузу и возобновление воспроизведение<span>.</span></dd>
 <dt>{{htmlattrdef("crossorigin")}}</dt>
 <dd>This enumerated attribute indicates whether to use CORS to fetch the related image. <a href="/en-US/docs/CORS_Enabled_Image">CORS-enabled resources</a> can be reused in the {{HTMLElement("canvas")}} element without being <em>tainted</em>. The allowed values are:
 <dl>
  <dt>anonymous</dt>
  <dd>Sends a  cross-origin request without a credential. In other words, it sends the <code style="font-size: 15px; background-color: rgb(245, 246, 245);">Origin:</code> HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the <code style="font-size: 15px;">Access-Control-Allow-Origin:</code> HTTP header), the image will be <em>tainted</em>, and its usage restricted.</dd>
  <dt>use-credentials</dt>
  <dd>Sends a  cross-origin request with a credential. In other words, it sends the <code style="font-size: 15px; background-color: rgb(245, 246, 245);">Origin:</code> HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through <code style="font-size: 15px;">Access-Control-Allow-Credentials:</code> HTTP header), the image will be <em>tainted</em> and its usage restricted.</dd>
 </dl>
 When not present, the resource is fetched without a CORS request (i.e. without sending the <code>Origin:</code> HTTP header), preventing its non-tainted used in {{HTMLElement('canvas')}} elements. If invalid, it is handled as if the enumerated keyword <strong>anonymous</strong> was used. See <a href="/en-US/docs/HTML/CORS_settings_attributes">CORS settings attributes</a> for additional information.</dd>
 <dt>{{htmlattrdef("height")}}</dt>
 <dd>Высота области отображения видео в пикселях<span>.</span></dd>
 <dt>{{htmlattrdef("loop")}}</dt>
 <dd>Логический атрибут<span>; если указан, то по окончанию проигрывания, видео автоматически начнёт воспроизведение с начала.</span></dd>
 <dt>{{htmlattrdef("muted")}}</dt>
 <dd>Логический атрибут, который определяет значение по умолчания для аудио дорожки, содержащуюся в видео. Если атрибут указан, то аудио дорожка воспроизводиться не будет. Значение атрибута по умолчанию - "ложь"<span>, и это означает, что звук будет воспроизводиться, когда видео воспроизводится<span>.</span></span></dd>
 <dt>{{htmlattrdef("played")}}</dt>
 <dd>Атрибут {{domxref("TimeRanges")}}, указывающий все диапазоны воспроизводимого видео.</dd>
 <dt>{{htmlattrdef("preload")}}</dt>
 <dd>Этот перечислимый атрибут предназначен для того, чтобы дать подсказку браузеру о том, что, по мнению автора, приведёт к лучшему пользовательскому опыту. Он может иметь одно из следующих значений:
 <ul>
  <li><code>none</code>: указывает, что видео не должно быть предварительно загружено.</li>
  <li><code>metadata</code>: указывает, что предварительно загружаются метаданные видео (например, длина).</li>
  <li><code>auto</code>: указывает, что весь видеофайл может быть загружен, даже если пользователь не должен его использовать.</li>
  <li><em>пустая строка</em>: синоним значения <code>auto</code>.</li>
 </ul>

 <p>Если не задано, значение атрибута определяется браузером по умолчанию (то есть, каждый браузер имеет по умолчанию значение данного атрибута). Спецификация рекомендует использовать <code>metadata</code>.</p>

 <div class="note"><strong>Usage notes:</strong>

 <ul>
  <li>The <code>autoplay</code> attribute has precedence over <code>preload</code>. If <code>autoplay</code> is specified, the browser would obviously need to start downloading the video for playback.</li>
  <li>The specification does not force the browser to follow the value of this attribute; it is a mere hint.</li>
 </ul>
 </div>
 </dd>
 <dt>{{htmlattrdef("poster")}}</dt>
 <dd>URL-адрес, указывающий на постера, которое будет использовано, пока загружается видео или пока пользователь не нажмёт на кнопку воспроизведения. Если этот атрибут не указан, ничего не отображается до тех пор, пока не будет доступен первый кадр; то первый кадр отображается как рамка постера.</dd>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>The URL of the video to embed. This is optional; you may instead use the {{HTMLElement("source")}} element within the video block to specify the video to embed.</dd>
 <dt>{{htmlattrdef("width")}}</dt>
 <dd>Ширина области отображения видео в пикселях<span>.</span></dd>
</dl>

<h2 id="События">События</h2>

<p>The <code>&lt;video&gt;</code> element can fire many different <a href="/en-US/docs/Web/Guide/Events/Media_events">events</a>.</p>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: html">&lt;!-- Simple video example --&gt;
&lt;video src="videofile.ogg" autoplay poster="posterimage.jpg"&gt;
  Sorry, your browser doesn't support embedded videos,
  but don't worry, you can &lt;a href="videofile.ogg"&gt;download it&lt;/a&gt;
  and watch it with your favorite video player!
&lt;/video&gt;

&lt;!-- Video with subtitles --&gt;
&lt;video src="foo.ogg"&gt;
  &lt;track kind="subtitles" src="foo.en.vtt" srclang="en" label="English"&gt;
  &lt;track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska"&gt;
&lt;/video&gt;
</pre>

<p>The first example plays a video, starting playback as soon as enough of the video has been received to allow playback without pausing to download more. Until the video starts playing, the image "posterimage.jpg" is displayed in its place.</p>

<p>The second example allows the user to choose between different subtitles.</p>

<h2 id="Multiple_Sources_Example">Multiple Sources Example</h2>

<pre class="brush: html">&lt;video width="480" controls poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" &gt;
  &lt;source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4"&gt;
  &lt;source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv" type="video/ogg"&gt;
  &lt;source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm" type="video/webm"&gt;
  Your browser doesn't support HTML5 video tag.
&lt;/video&gt;</pre>

<p>You can try the preceding example on <a href="http://dul.web.id/contoh-example/html/tag-element/html5-video.php">HTML5 video demo example</a> with live preview code editor.</p>

<h2 id="Server_support">Server support</h2>

<p>If the MIME type for the video is not set correctly on the server, the video may not show or show a gray box containing an X (if JavaScript is enabled).</p>

<p>If you use Apache Web Server to serve Ogg Theora videos, you can fix this problem by adding the video file type extensions to "video/ogg" MIME type.  The most common video file type extensions are ".ogm", ".ogv", or ".ogg". To do this, edit the "mime.types" file in "/etc/apache" or use the "AddType" configuration directive in httpd.conf.</p>

<pre class="eval">AddType video/ogg .ogm
AddType video/ogg .ogv
AddType video/ogg .ogg
</pre>

<p>If you serve your videos as WebM, you can fix this problem for the Apache Web Server by adding the extension used by your video files (".webm" is the most common one) to the MIME type "video/webm" via the "mime.types" file in "/etc/apache" or via the "AddType" configuration directive in httpd.conf.</p>

<pre class="eval">AddType video/webm .webm
</pre>

<p>Your web host may provide an easy interface to MIME type configuration changes for new technologies until a global update naturally occurs.</p>

<h2 id="Интерфейс_DOM">Интерфейс DOM</h2>

<p>Этот элемент реализует интерфейс <code><a href="/en-US/docs/Web/API/HTMLVideoElement">HTMLVideoElement</a></code>.</p>

<h2 id="Совместимость_браузера">Совместимость браузера</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Media_formats_supported_by_the_audio_and_video_elements">Media formats supported by the audio and video elements</a></li>
 <li>{{htmlelement("audio")}}</li>
 <li><a href="/en-US/docs/Using_HTML5_audio_and_video">Using HTML5 audio and video</a></li>
 <li><a href="/en-US/docs/Manipulating_video_using_canvas">Manipulating video using canvas</a></li>
 <li><a href="/en-US/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement"><code>nsIDOMHTMLMediaElement</code></a></li>
 <li><a class="external" href="http://tinyvid.tv/">TinyVid</a> - examples using ogg files in HTML5.</li>
 <li><a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/#video">The <code>video</code> element</a> (HTML5 specification)</li>
 <li><a href="/en-US/docs/Configuring_servers_for_Ogg_media">Configuring servers for Ogg media</a></li>
 <li><a href="http://www.jwplayer.com/html5/">The state of HTML5 video</a></li>
</ul>
