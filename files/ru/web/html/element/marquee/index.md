---
title: <marquee>
slug: Web/HTML/Element/marquee
translation_of: Web/HTML/Element/marquee
---
<div>{{HTMLRef}}</div>

<div>{{obsolete_header}}</div>

<h2 id="Summary">Определение</h2>

<p>HTML-элемент <code>&lt;marquee&gt;</code> используется для создания на странице прокручивающегося текста (бегущей строки).</p>

<h2 id="Атрибут">Атрибут</h2>

<dl>
 <dt>{{htmlattrdef("behavior")}}</dt>
 <dd>Описывает поведение прокрутки. Допустимые значения: <code>scroll</code>, <code>slide</code> <code>и alternate</code>. Если значение не указано, то используется <code>scroll</code>.</dd>
 <dt>{{htmlattrdef("bgcolor")}}</dt>
 <dd>Задаёт цвет фона (можно использовать имя цвета или шестнадцатеричное значение).</dd>
 <dt>{{htmlattrdef("direction")}}</dt>
 <dd>Задаёт направление прокрутки. <code>Допустимые значения: left</code>, <code>right</code>, <code>up</code> и <code>down</code>. Если значение не указано, то используется <code>left</code>.</dd>
 <dt>{{htmlattrdef("height")}}</dt>
 <dd>Задаёт высоту в пикселях или процентах.</dd>
 <dt>{{htmlattrdef("hspace")}}</dt>
 <dd>Задаёт поле (margin) слева.</dd>
 <dt>{{htmlattrdef("loop")}}</dt>
 <dd>Задаёт количество прокруток. Если значение не указано, то используется -1, что означает бесконечную прокрутку</dd>
 <dt>{{htmlattrdef("scrollamount")}}</dt>
 <dd>Задаёт сдвиг на каждом шаге в пикселях. По умолчанию 6.</dd>
 <dt>{{htmlattrdef("scrolldelay")}}</dt>
 <dd>Задаёт интервал между каждым шагом в миллисекундах. По умолчанию 85. Обратите внимание, что значения меньше 60 будут проигнорированы и будет использовано 60, если не присутствует атрибут <code>truespeed</code>.</dd>
 <dt>{{htmlattrdef("truespeed")}}</dt>
 <dd>По умолчанию значения меньше 60 в<code> scrolldelay игнорируются</code>. Однако, если присутствует <code>truespeed</code>, то они не игнорируются</dd>
 <dt>{{htmlattrdef("vspace")}}</dt>
 <dd>Задаёт вертикальный отступ (margin) в пикселях или процентах.</dd>
 <dt>{{htmlattrdef("width")}}</dt>
 <dd>Задаёт ширину в пикселях или процентах.</dd>
</dl>

<h2 id="Event_handlers">Обработчики событий</h2>

<dl>
 <dt>{{htmlattrdef("onbounce")}}</dt>
 <dd>Срабатывает, когда marquee достиг конечного состояния. Срабатывает только в случаях, когда <code>behavior</code> имеет значение <code>alternate</code>.</dd>
 <dt>{{htmlattrdef("onfinish")}}</dt>
 <dd>Срабатывает, когда marquee прокрутился столько раз, сколько было задано в атрибуте <code>loop</code>. Срабатывает только тогда, когда атрибут <code>loop</code> имеет положительное значение.</dd>
 <dt>{{htmlattrdef("onstart")}}</dt>
 <dd>Срабатывает в начале прокрутки.</dd>
</dl>

<h2 id="Methods">Методы</h2>

<dl>
 <dt>start</dt>
 <dd>Запускает прокрутку marquee.</dd>
 <dt>stop</dt>
 <dd>Останавливает прокрутку marquee.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: html">&lt;marquee&gt;This text will scroll from right to left&lt;/marquee&gt;

&lt;marquee direction="up"&gt;This text will scroll from bottom to top&lt;/marquee&gt;

&lt;marquee direction="down" width="250" height="200" behavior="alternate" style="border:solid"&gt;
  &lt;marquee behavior="alternate"&gt;
    This text will bounce
  &lt;/marquee&gt;
&lt;/marquee&gt;</pre>

<p>{{EmbedLiveSample("Examples", 600, 450)}}</p>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>

<p>{{Compat}}</p>
