---
title: Контрольный список по мобильной доступности
slug: Web/Accessibility/Mobile_accessibility_checklist
tags:
  - Мобильная разработка
  - доступность
translation_of: Web/Accessibility/Mobile_accessibility_checklist
---
<div class="summary">
<p><span class="seoSummary">Этот документ содержит краткий список требований доступности для разработчиков мобильных приложений. Он будет обновляться по мере появления новых техник и подходов.</span></p>
</div>

<h2 id="Цвет">Цвет</h2>

<ul>
 <li>Контраст цвета <strong>ДОЛЖЕН</strong> соответствовать требованиям уровня AA <a href="http://www.w3.org/TR/WCAG/">WCAG 2.0</a>:

  <ul>
   <li>Коэффициент контрастности 4.5:1 для обычного текста (менее 18 пунктов или 14 пунктов для жирного текста).</li>
   <li>Коэффициент контрастности 3:1 для крупного текста (минимум 18 пунктов или 14 пунктов для жирного текста).</li>
  </ul>
 </li>
 <li>Информация, передаваемая через цвет, <strong>ДОЛЖНА</strong> быть доступна и другими способами (подчёркнутый текст для ссылок и т. д.).</li>
</ul>

<h2 id="Видимость">Видимость</h2>

<ul>
 <li>Техники сокрытия содержимого, такие как нулевая непрозрачность, порядок z-индекса и размещение вне экрана, <strong>НЕ ДОЛЖНЫ</strong> использоваться исключительно для управления видимостью.</li>
 <li>Всё, кроме видимого в данный момент экрана, <strong>ДОЛЖНО</strong> быть действительно невидимым:
  <ul>
   <li><strong>ИСПОЛЬЗУЙТЕ </strong><code>hidden</code><strong> </strong>атрибут или свойство<strong> </strong><code>visibility</code><strong> </strong>или изменяйте тип отображения.</li>
   <li>Без абсолютной необходимости, <strong>НЕ ИСПОЛЬЗУЙТЕ</strong> <code>aria-hidden</code> атрибут.</li>
  </ul>
 </li>
</ul>

<h2 id="Фокус">Фокус</h2>

<ul>
 <li>Все интерактивные элементы <strong>ДОЛЖНЫ</strong> иметь состояние фокуса:

  <ul>
   <li>Стандартные элементы, такие как ссылки, кнопки и поля формы фокусируемые по умолчанию.</li>
   <li>Нестандартные элементы <strong>ДОЛЖНЫ</strong> иметь соответствующую <a href="http://www.w3.org/TR/wai-aria/roles">ARIA Role</a>, назначенную им. Например, кнопка, ссылка или чекбокс.</li>
  </ul>
 </li>
 <li>Фокус должен обрабатываться в логическом порядке и последовательным образом.</li>
</ul>

<h2 id="Текстовые_эквиваленты">Текстовые эквиваленты</h2>

<ul>
 <li>Текстовый эквивалент <strong>ДОЛЖЕН</strong> быть предусмотрен для каждого не строго презентационного нетекстового элемента в приложении.

  <ul>
   <li>Используйте <em>alt</em> и <em>title</em> там, где это уместно (<a href="http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/">см. статью</a> Steve Faulkner's про использование HTML атрибута {{ htmlelement("title") }}).</li>
   <li>Если вышеуказанные атрибуты неприменимы, используйте соответствующие <a href="http://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header">ARIA Properties</a>, такие как <code>aria-label</code>, <code>aria-labelledby</code>, или <code>aria-describedby</code>.</li>
  </ul>
 </li>
 <li>Необходимо <strong>ИЗБЕГАТЬ</strong> текста внутри изображений.</li>
 <li>Все элементы формы <strong>ДОЛЖНЫ</strong> иметь метки ({{ htmlelement("label") }} элементы) в интересах пользователей программы чтения с экрана.</li>
</ul>

<h2 id="Обработка_состояния">Обработка состояния</h2>

<ul>
 <li>Стандартные элементы, такие как радиокнопки и чекбоксы обрабатываются операционной системой. Однако, для других кастомных элементов изменения состояния должны быть предоставлены через <a href="http://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header">ARIA States</a>, такие как <code>aria-checked</code>, <code>aria-disabled</code>, <code>aria-selected</code>, <code>aria-expanded</code>, and <code>aria-pressed</code>.</li>
</ul>

<h2 id="Общие_рекомендации">Общие рекомендации</h2>

<ul>
 <li><strong>ДОЛЖНО</strong> быть указано название приложения ({{ htmlelement("title") }} элемент).</li>
 <li>Заголовки <strong>НЕ ДОЛЖНЫ</strong> нарушать иерархическую структуру.
  <pre class="brush: html">&lt;h1&gt;Заголовок верхнего уровня&lt;/h1&gt;
  &lt;h2&gt;Вторичный заголовок&lt;/h2&gt;
  &lt;h2&gt;Другой вторичный заголовок&lt;/h2&gt;
    &lt;h3&gt;Заголовок низкого уровня&lt;/h3&gt;</pre>
 </li>
 <li><a href="http://www.w3.org/TR/wai-aria/roles#landmark_roles_header">ARIA Landmark Roles</a> <strong>СЛЕДУЕТ </strong>использовать для описания приложения или структуры документа, такие как <code>banner</code>, <code>complementary</code>, <code>contentinfo</code>, <code>main</code>, <code>navigation</code>, <code>search</code>.</li>
 <li>Обработчики сенсорных событий <strong>ДОЛЖНЫ</strong> запускаться только при соответствующих событиях.</li>
 <li>Области нажатия <strong>ДОЛЖНЫ</strong> быть достаточно большими, чтобы пользователь мог взаимодействовать с ними (см. статью <a href="http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/design/touch-target-size">BBC Mobile Accessibility Guidelines</a> с полезными рекомендациями по размеру области нажатия для сенсорного объекта).</li>
</ul>

<div class="note">
<p><strong>Note</strong>: The <a href="http://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html">original version of this document</a> was written by <a href="http://yzen.github.io/">Yura Zenevich</a>.</p>
</div>

<p> </p>
