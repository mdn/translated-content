---
title: Использование медиавыражений
slug: Web/CSS/Media_Queries/Using_media_queries
tags:
  - Веб
  - Медиа
  - Медиа вёрстка
  - Медиавыражения
  - Отзывчивый дизайн
  - Продвинутый
  - Резиновая вёрстка
  - Руководство
translation_of: Web/CSS/Media_Queries/Using_media_queries
---
<div>{{cssref}}</div>

<p><strong>Медиавыражения</strong> используются в тех случаях , когда нужно применить разные CSS-стили, для разных устройств по типу отображения (например: для принтера, монитора или смартфона), а также конкретных характеристик устройства  (например: ширины окна просмотра браузера), или внешней среды (например: внешнее освещение). Учитывая огромное количество подключаемых к интернету устройств, медиавыражения являются очень важным инструментом при создании веб-сайтов и приложений, которые будут правильно работать на всех доступных устройствах, которые  есть у ваших пользователей. </p>

<h2 id="Медиа_для_разных_типов_устройств">Медиа для разных типов устройств</h2>

<p>Медиавыражения позволяют адаптировать страницу для различных типов устройств, таких как: принтеры, речевых браузеров, устройств Брайля, телевизоров и так далее. Например это правило для принтеров:</p>

<pre class="brush: css">@media print { ... }</pre>

<p>Вы также можете писать правила сразу для нескольких устройств. Например этот @media написан сразу для экранов и принтеров:</p>

<pre class="brush: css">@media screen, print { ... }</pre>

<p>Список устройств вы можете найти перейдя по <a href="/en-US/docs/CSS/@media#Media_types">этой ссылке</a>. Но для задания более детальных и узконаправленных правил вам нужно просмотреть следующий раздел.</p>

<h2 id="Узконаправленные_media">Узконаправленные @media</h2>

<p><a href="/en-US/docs/CSS/@media#Media_features">Media features</a> описывают некие характеристики определённого {{glossary("user agent")}}, устройства вывода или окружения. Например, вы можете применить выбранные стили  только для широкоэкранных мониторов, компьютеров с мышью, или для устройств, которые используются в условиях слабой освещённости. В примере ниже стили будут применены только когда <em>основное </em>устройство ввода пользователя (например мышь)  будет расположено над элементами:</p>

<pre class="brush: css">@media (hover: hover) { ... }</pre>

<p>Многие медиавыражения представляют собой функцию диапазона и имеют префиксы "min-" или "max-". Минимальное значение и максимальное значение условия, соответственно. Например этот CSS-код применяется только если ширина {{glossary("viewport")}} меньше или равна 12450px:</p>

<pre class="brush: css">@media (max-width: 12450px) { ... }</pre>

<p>Если вы создаёте медиавыражение без указания значения, вложенные стили будут использоваться до тех пор, пока значение функции не равно нулю. Например, этот CSS будет применяться к любому устройству с цветным экраном:</p>

<pre class="brush: css">@media (color) { ... }</pre>

<p>Если функция не применима к устройству, на котором работает браузер, выражения, включающие эту функцию, всегда ложны. Например, стили, вложенные в следующий запрос, никогда не будут использоваться, потому что ни одно речевое устройство не имеет формат экрана:</p>

<pre class="brush: css">@media speech and (aspect-ratio: 11/5) { ... }</pre>

<p>Дополнительные примеры медиавыражений, смотрите на <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features">справочной странице</a> для каждой конкретной функции.</p>

<h2 id="Создание_комплексных_медиавыражений">Создание комплексных медиавыражений</h2>

<p>Иногда вы хотите создать медиавыражение, включающее в себя несколько условий. В таком случае применяются <em>логические операторы</em>: <code>not</code>, <code>and</code>, and <code>only</code>. Кроме того, вы можете объединить несколько медиавыражений в список через запятую; это позволяет применять одни и те же стили в разных ситуациях.</p>

<p>В прошлом примере мы видели, как применяется оператор <code>and</code> для группировки <em>type</em> и функции. Оператор <code>and</code> также может комбинировать несколько функций в одно медиавыражение. Между тем, оператор not отрицает медиавыражение, полностью инвертируя его значение. Оператор <em>only</em> работает тогда, когда применяется всё выражение, не позволяя старым браузерам применять стили.</p>

<div class="note">
<p><strong>Note:</strong> In most cases, the <code>all</code> media type is used by default when no other type is specified. However, if you use the <code>not</code> or <code>only</code> operators, you must explicitly specify a media type.</p>
</div>

<h3 id="and"><code>and</code></h3>

<p>The <code>and</code> keyword combines a media feature with a media type <em>or</em> other media features. This example combines two media features to restrict styles to landscape-oriented devices with a width of at least 30 ems:</p>

<pre class="brush: css">@media (min-width: 30em) and (orientation: landscape) { ... }</pre>

<p>To limit the styles to devices with a screen, you can chain the media features to the <code>screen</code> media type:</p>

<pre class="brush: css">@media screen and (min-width: 30em) and (orientation: landscape) { ...  }</pre>

<h3 id="comma-separated_lists">comma-separated lists</h3>

<p>You can use a comma-separated list to apply styles when the user's device matches any one of various media types, features, or states. For instance, the following rule will apply its styles if the user's device has either a minimum height of 680px <em>or</em> is a screen device in portrait mode:</p>

<pre class="brush: css">@media (min-height: 680px), screen and (orientation: portrait) { ... }</pre>

<p>Taking the above example, if the user had a printer with a page height of 800px, the media statement would return true because the first query would apply. Likewise, if the user were on a smartphone in portrait mode with a viewport height of 480px, the second query would apply and the media statement would still return true.</p>

<h3 id="not"><code>not</code></h3>

<p>The <code>not</code> keyword inverts the meaning of an entire media query. It will only negate the specific media query it is applied to. (Thus, it will not apply to every media query in a comma-separated list of media queries.) The <code>not</code> keyword can't be used to negate an individual feature query, only an entire media query. The <code>not</code> is evaluated last in the following query:</p>

<pre class="brush: css">@media not all and (monochrome) { ... }
</pre>

<p>... so that the above query is evaluated like this:</p>

<pre class="brush: css">@media not (all and (monochrome)) { ... }
</pre>

<p>... rather than like this:</p>

<pre class="example-bad brush: css">@media (not all) and (monochrome) { ... }</pre>

<p>As another example, the following media query:</p>

<pre class="brush: css">@media not screen and (color), print and (color) { ... }
</pre>

<p>... is evaluated like this:</p>

<pre class="brush: css">@media (not (screen and (color))), print and (color) { ... }</pre>

<h3 id="only"><code>only</code></h3>

<p>The <code>only</code> keyword prevents older browsers that do not support media queries with media features from applying the given styles. <em>It has no effect on modern browsers.</em></p>

<pre class="brush: html">&lt;link rel="stylesheet" media="only screen and (color)" href="modern-styles.css" /&gt;
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a class="internal" href="/en-US/docs/CSS/@media#Media_types">Media types</a></li>
 <li><a href="/en-US/docs/CSS/@media#Media_features">Media features</a></li>
 <li><a href="/en-US/docs/CSS/Using_media_queries_from_code">Testing media queries using code</a></li>
 <li><a href="http://davidwalsh.name/animate-media-queries">CSS Animations Between Media Queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/Mozilla_Extensions#Media_features">Extended Mozilla media features</a></li>
 <li><a href="/en-US/docs/Web/CSS/Webkit_Extensions#Media_features">Extended WebKit media features</a></li>
</ul>
