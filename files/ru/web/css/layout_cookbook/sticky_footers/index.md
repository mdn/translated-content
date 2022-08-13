---
title: Sticky footers
slug: Web/CSS/Layout_cookbook/Sticky_footers
translation_of: Web/CSS/Layout_cookbook/Sticky_footers
---
<div>{{CSSRef}}</div>

<p class="summary">Шаблон нижнего колонтитула - это шаблон, в котором нижний колонтитул вашей страницы «прилипает» к нижней части области просмотра в тех случаях, когда содержимое короче высоты области просмотра. В этом рецепте мы рассмотрим несколько методов для создания одного из них.</p>

<p><img alt="A sticky footer pushed to the bottom of a box" src="https://mdn.mozillademos.org/files/16184/cookbook-footer.png" style="height: 807px; width: 1213px;"></p>

<h2 id="Requirements">Requirements</h2>

<p><span class="tlid-translation translation" lang="ru"><span title="">Липкий шаблон нижнего колонтитула должен соответствовать следующим требованиям:</span></span><br>
  </p>

<ul>
 <li><span title="">Нижний колонтитул прилипает к нижней части области просмотра, когда содержание короткое.</span></li>
 <li><span class="tlid-translation translation" lang="ru"><span title="">Если содержимое страницы выходит за нижнюю часть области просмотра, нижний колонтитул располагается ниже содержимого, как обычно.</span></span></li>
</ul>

<h2 id="The_recipe">The recipe</h2>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer.html", '100%', 720)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/sticky-footer--download.html">Download this example</a></p>
</div>

<div class="note">
<p><strong>Note</strong>: In this example and the following one we are using a wrapper set to <code>min-height: 100%</code> in order that our live example works. You could also achieve this for a full page by setting a {{cssxref("min-height")}} of <code>100vh</code> on the {{htmlelement("body")}} and then using it as your grid container.</p>
</div>

<h2 id="Выбор_сделан">Выбор сделан</h2>

<p>В приведённом выше примере мы получаем липкий нижний колонтитул, используя CSS Grid Layout. Класс <code>.wrapper</code> имеет минимальную высоту <code>100%</code>, что означает, что он такой же высоты, как и контейнер, в котором он находится. Затем мы создаём сетку с одним столбцом с тремя строками, по одной строке для каждой части нашего макета.</p>

<p>При автоматическом размещении сетки наши элементы будут располагаться в исходном порядке, поэтому заголовок переходит на первую дорожку с автоматическими размерами, основное содержимое - на дорожку <code>1fr</code>, а нижний колонтитул - в конечную дорожку с автоматическими размерами. Трек <code>1fr</code> будет занимать все доступное пространство и поэтому будет увеличиваться, чтобы заполнить этот пробел.</p>

<h2 id="Alternate_method">Alternate method</h2>

<p>If you need compatibility with browsers that do not support Grid Layout you can also use Flexbox to create a sticky footer.</p>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer-flexbox.html", '100%', 720)}}</p>

<p>The flexbox example starts out in the same way, but we use <code>display:flex</code> rather than <code>display:grid</code> on the <code>.wrapper</code>; we also set <code>flex-direction</code> to <code>column</code>. Then we set our main content to <code>flex-grow: 1</code> and the other two elements to <code>flex-shrink: 0</code> — this prevents them from shrinking smaller when content fills the main area.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<h4 id="grid-template-rows">grid-template-rows</h4>

<p>{{Compat("css.properties.grid-template-rows")}}</p>

<h4 id="flex-direction">flex-direction</h4>

<p>{{Compat("css.properties.flex-direction")}}</p>

<h4 id="flex-grow">flex-grow</h4>

<p>{{Compat("css.properties.flex-grow")}}</p>

<h4 id="flex-shrink">flex-shrink</h4>

<p>{{Compat("css.properties.flex-shrink")}}</p>

<h2 id="Resources_on_MDN">Resources on MDN</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basic concepts of Grid Layout</a></li>
</ul>
