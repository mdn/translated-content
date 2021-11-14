---
title: ':where()'
slug: 'Web/CSS/:where'
tags:
  - ':where'
  - CSS
  - псевдокласс
translation_of: 'Web/CSS/:where'
---
<div>{{CSSRef}}</div>

<div><a href="/ru/docs/Web/CSS">CSS</a> <a href="/ru/docs/Web/CSS/Псевдо-классы">псевдокласс </a><strong><code>:where()</code> </strong>в качестве аргумента принимает список селекторов и выбирает только те элементы, которые могут быть выбраны из переданного списка.</div>



<pre class="brush: css"><code>/* Выбирает любой параграф внутри header, main
   или footer на который наведён курсор мыши */
:where(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* Пример приведённый выше эквивалентен следующему */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}</code></pre>

<p>Разница между <code>:where()</code> и {{CSSxRef(":is", ":is()")}} заключается в том, что <code>:where()</code> всегда имеет нулевую <a href="ru/docs/Web/CSS/Specificity">специфичность селектора</a>, тогда как специфичность <code>:is()</code> равна самому специфичному селектору из списка переданных аргументов.</p>

<h3 id="Парсинг_forgiving-селектора">Парсинг forgiving-селектора</h3>

<p>В спецификации псевдоклассы <code>:is()</code> и <code>:where()</code> относятся к так называемому <a href="https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list">forgiving selector list</a> (прощающий список селекторов).</p>

<p>При использовании списка селекторов в CSS, если один из селекторов невалидный, то весь список селекторов будет считаться невалидным. В то же время при использовании <code>:is()</code> или <code>:where()</code> действует другое правило: если среди переданных аргументов будет некорректный или неподдерживаемый селектор, то он будет проигнорирован, для всех же остальных селекторов будут применены CSS-правила.</p>

<pre class="brush: css">:where(:valid, :unsupported) {
  ...
}</pre>

<p>Пример выше будет успешно распарсен и для <code>:valid</code> будут применены CSS-правила, даже если в браузере не поддерживается <code>:unsupported</code>, в то время как:</p>

<pre class="brush: css">:valid, :unsupported {
  ...
}</pre>

<p>Код будет полностью проигнорирован в браузерах, которые не поддерживают <code>:unsupported</code>, даже не смотря на то, что они поддерживают <code>:valid</code>.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Сравнение_where_и_is">Сравнение :where() и :is()</h3>

<p>В этом примере показывается как работает <code>:where()</code>, а так же демонстрируется разница между <code>:where()</code> и <code>:is()</code>.</p>

<p>Возьмём следующий HTML-код:</p>

<pre class="brush: html">&lt;article&gt;
  &lt;h2&gt;:is()-styled links&lt;/h2&gt;
  &lt;section class="is-styling"&gt;
    &lt;p&gt;Here is my main content. This &lt;a href="https://mozilla.org"&gt;contains a link&lt;/a&gt;.
  &lt;/section&gt;

  &lt;aside class="is-styling"&gt;
    &lt;p&gt;Here is my aside content. This &lt;a href="https://developer.mozilla.org"&gt;also contains a link&lt;/a&gt;.
  &lt;/aside&gt;

  &lt;footer class="is-styling"&gt;
    &lt;p&gt;This is my footer, also containing &lt;a href="https://github.com/mdn"&gt;a link&lt;/a&gt;.
  &lt;/footer&gt;
&lt;/article&gt;

&lt;article&gt;
  &lt;h2&gt;:where()-styled links&lt;/h2&gt;
  &lt;section class="where-styling"&gt;
    &lt;p&gt;Here is my main content. This &lt;a href="https://mozilla.org"&gt;contains a link&lt;/a&gt;.
  &lt;/section&gt;

  &lt;aside class="where-styling"&gt;
    &lt;p&gt;Here is my aside content. This &lt;a href="https://developer.mozilla.org"&gt;also contains a link&lt;/a&gt;.
  &lt;/aside&gt;

  &lt;footer class="where-styling"&gt;
    &lt;p&gt;This is my footer, also containing &lt;a href="https://github.com/mdn"&gt;a link&lt;/a&gt;.
  &lt;/footer&gt;
&lt;/article&gt;</pre>

<p>В примере выше у нас представлено две статьи, каждая из которых содержит следующие блоки: <code>section</code>, <code>aside</code> и <code>footer</code>. Каждый из блоков имеет свой CSS-класс.</p>

<p>Теперь при помощи псевдоклассов <code>:is()</code> и <code>:where()</code> зададим цвет для ссылок в простой форме, как в примере ниже:</p>

<pre class="brush: css">html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}</pre>

<p>Что если позже мы захотим переопределить цвет ссылок в <code>footer</code>'ах используя простой селектор?</p>

<pre class="brush: css">footer a {
  color: blue;
}</pre>

<p>Это не будет работать для ссылок красного цвета, потому что специфичность селекторов внутри <code>:is()</code> выше, чем специфичность селектора вышеприведённого кода. Селектор классов имеет бо́льшую специфичность, чем селектор элемента.</p>

<p>В то время как, селекторы перечисленные внутри <code>:where()</code> имеют нулевую специфичность, поэтому оранжевая ссылка в футере будет переопределена простым селектором и станет синего цвета.</p>

<p><strong>Примечание</strong>: вы так же можете найти этот пример на Github; смотрите <a href="https://mdn.github.io/css-examples/is-where/">is-where</a>.</p>

<p>{{EmbedLiveSample('Примеры', '100%', 600)}}</p>

<h2 id="Синтаксис">Синтаксис</h2>

{{CSSSyntax}}

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<div>
<p>{{Compat}}</p>
</div>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{CSSxRef(":is", ":is()")}}</li>
 <li><a href="/en-US/docs/Web/CSS/Selector_list">Список селекторов</a></li>
 <li><a href="/ru/docs/Web/Web_Components">Веб-компоненты</a></li>
</ul>
