---
title: Firefox 32 для разработчиков
slug: Mozilla/Firefox/Releases/32
translation_of: Mozilla/Firefox/Releases/32
---
<div>{{FirefoxSidebar}}</div><p>Хотите помочь с документированием Firefox 32? Взгляните на <a class="external" href="http://beta.elchi3.de/doctracker/#list=fx&amp;version=32.0">список ошибок, о которых нужно написать</a> и приступайте!</p>

<h2 id="Изменения_для_Web_Разработчиков">Изменения для Web Разработчиков</h2>

<h3 id="Инструментарий_разработчика">Инструментарий разработчика</h3>

<p>Основные изменения:</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Web_Audio_Editor">Редактор Web Audio</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Scratchpad#Code_completion_and_inline_documentation">Автоподстановка и подсказки в Блокноте</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector#Rules_view">Стили User agent в представлении Inspector Rules</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector#Firefox_32_onwards_2">Кнопка выбора элемента со страницы перемещена</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector#Firefox_32_onwards">Добавлено отображение размеров узла в информационную панель Инспектора</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Extra_tools">Добавлена кнопка снятия снимка всей страницы</a></li>
 <li>Добавлены HiDPI изображения в инструменты</li>
 <li>Узлы, содержащие <code>display:none</code> в Инспекторе отображаются иначе</li>
</ul>

<p><a class="external external-icon" href="https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&amp;classification=Client%20Software&amp;chfieldto=2014-06-09&amp;chfield=resolution&amp;query_format=advanced&amp;chfieldfrom=2014-04-28&amp;chfieldvalue=FIXED&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;component=Developer%20Tools&amp;component=Developer%20Tools%3A%203D%20View&amp;component=Developer%20Tools%3A%20App%20Manager&amp;component=Developer%20Tools%3A%20Canvas%20Debugger&amp;component=Developer%20Tools%3A%20Console&amp;component=Developer%20Tools%3A%20Debugger&amp;component=Developer%20Tools%3A%20Framework&amp;component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&amp;component=Developer%20Tools%3A%20Inspector&amp;component=Developer%20Tools%3A%20Memory&amp;component=Developer%20Tools%3A%20Netmonitor&amp;component=Developer%20Tools%3A%20Object%20Inspector&amp;component=Developer%20Tools%3A%20Profiler&amp;component=Developer%20Tools%3A%20Responsive%20Mode&amp;component=Developer%20Tools%3A%20Scratchpad&amp;component=Developer%20Tools%3A%20Source%20Editor&amp;component=Developer%20Tools%3A%20Style%20Editor&amp;component=Developer%20Tools%3A%20User%20Stories&amp;component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&amp;product=Firefox">Все ошибки исправленные между версиями Firefox 31 и Firefox 32</a>.</p>

<h3 id="CSS">CSS</h3>

<ul>
 <li>{{domxref("mix-blend-mode")}} включено по умолчанию ({{Bug(952643)}}).</li>
 <li><code>position:sticky</code> включено по умолчанию в Release сборках (раньше было только в Nightly и Aurora) ({{Bug(916315)}}).</li>
 <li>реализовано box-decoration-break: Левая/правая часть box-shadow должна быть отрисована только на первом/последнем элементе inline контейнера ({{Bug(613659)}}).</li>
 <li>Реализация flex-grow/flex-shrink для преобразования между нулевыми и не нулевыми значениями ({{Bug(996945)}}).</li>
</ul>

<h3 id="HTML">HTML</h3>

<ul>
 <li>Экспериментальная реализация свойства (включается параметром) {{HTMLElement("img")}} {{HTMLattrxref("srcset", "img")}}. Чтобы включить его, установите значение <code>dom.image.srcset.enable</code> в <code>true</code> ({{Bug(870021)}}).</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>Реализованы новые встроенные методы ECMAScript 6:
  <ul>
   <li>{{jsxref("Array.from()")}} ({{bug(904723)}})</li>
   <li>{{jsxref("Array.prototype.copyWithin()")}}</li>
   <li>{{jsxref("Number.isSafeInteger()")}}</li>
  </ul>
 </li>
</ul>

<h3 id="ИнтерфейсыAPIsDOM">Интерфейсы/APIs/DOM</h3>

<ul>
 <li>Реализованы свойство {{domxref("NavigatorLanguage.languages", "navigator.languages")}} и событие {{event("languagechange")}} ({{Bug(889335)}}).</li>
 <li>В методы {{domxref("KeyboardEvent.getModifierState")}}() и {{domxref("MouseEvent.getModifierState")}}() добавлена поддержка виртуального модификатора <code>Accel</code> ({{Bug(1009388)}}).</li>
 <li>Добавлена экспериментальная реализация свойства {{domxref("KeyboardEvent.code")}}: она отключена в Release сборках ({{Bug(865649)}}).</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>Добавлена поддержка для {{MathMLElement("menclose")}} notation <code>phasorangle</code>.</li>
</ul>

<h3 id="SVG">SVG</h3>

<p><em>Без изменений.</em></p>

<h3 id="AudioVideo">Audio/Video</h3>

<p><em><em>Без изменений</em>.</em></p>

<h2 id="Безопасность">Безопасность</h2>

<ul>
 <li><a href="/en-US/docs/Xray_vision#Xray_semantics_for_Object_and_Array">Привилегированный код теперь обладает рентгеновским зрением относительно экземпляров <code>Object</code> и <code>Array</code> в</a> <a href="/en-US/docs/Xray_vision#Xray_semantics_for_Object_and_Array">JavaScript</a>.</li>
</ul>

<h2 id="Изменения_для_разработчиков_дополнений_и_разработчиков_Mozilla">Изменения для разработчиков дополнений и разработчиков Mozilla</h2>

<h3 id="Add-on_SDK">Add-on SDK</h3>

<h4 id="Основные_изменения">Основные изменения</h4>

<ul>
 <li>Добавлено свойство <a href="https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod#PageMod%28options%29"><code>exclude</code></a> в <code>PageMod</code>.</li>
 <li>Добавлено свойство <a href="https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/request#Request%28options%29"><code>anonymous</code></a> в <code>Request</code>.</li>
 <li><a href="https://developer.mozilla.org/en-US/Add-ons/Add-on_Debugger">Add-on Debugger</a> теперь содержит Консоль и Блокнот.</li>
</ul>

<h4 id="Подробнее">Подробнее</h4>

<p><a class="external external-icon" href="https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32">Коммиты GitHub между версиями Firefox 31 и Firefox 32</a>. Не будут включать никаких поднятий, сделанных после того, как этот выпуск войдёт в Aurora.</p>

<p><a class="external external-icon" href="https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&amp;chfieldto=2014-06-09&amp;chfield=resolution&amp;query_format=advanced&amp;chfieldfrom=2014-04-28&amp;chfieldvalue=FIXED&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;bug_status=CLOSED&amp;product=Add-on%20SDK&amp;list_id=10493962">Ошибки исправленные Firefox 31 и Firefox 32</a>. Сюда не включены изменения, сделанные после того, как этот релиз был перемещён в стадию Aurora.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Mozilla/Firefox/Releases/32/Site_Compatibility">Совместимость сайтов с Firefox 32</a></li>
</ul>

<h3 id="Предыдущие_версии">Предыдущие версии</h3>

<p>{{Firefox_for_developers('31')}}</p>
