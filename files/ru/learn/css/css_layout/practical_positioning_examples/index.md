---
title: Practical positioning examples
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
translation_of: Learn/CSS/CSS_layout/Practical_positioning_examples
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}</div>

<p class="summary">Основы позиционирования, приведённые в последней статье, мы теперь рассмотрим, как создать некоторые примеры реального мира, чтобы проиллюстрировать, какие вещи вы можете сделать с позиционированием.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Предпосылки:</th>
   <td>Основы HTML (уроки <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>), и идея о том, как работает CSS (уроки <a href="/en-US/docs/Learn/CSS/Introduction_to_CSS">Introduction to CSS</a>.)</td>
  </tr>
  <tr>
   <th scope="row">Задача:</th>
   <td>Чтобы получить представление о практичности позиционирования</td>
  </tr>
 </tbody>
</table>

<h2 id="Информационный_блок_с_вкладками">Информационный блок с вкладками</h2>

<p>Первый пример, который мы рассмотрим, - это классический информационный блок с вкладками - очень распространённая функция, используемая, когда вы хотите упаковать много информации в небольшую область. Сюда входят информационные приложения, такие как стратегии / военные игры, мобильные версии веб-сайтов, где экран и пространство ограничены и необходимы компактные информационные окна, где вы можете сделать много информации, не заполняя весь пользовательский интерфейс. Наш простой пример будет выглядеть так, как только мы закончим:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13368/tabbed-info-box.png" style="display: block; height: 400px; margin: 0px auto; width: 450px;"></p>

<div class="note">
<p><strong>Примечание: </strong>Вы можете увидеть, что готовый пример работает в прямом эфире <a href="http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html">info-box.html</a> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html">source code</a>). Проверьте его, чтобы понять, что вы будете строить в этом разделе статьи.</p>
</div>

<p>Возможно, вы думаете: «Почему бы просто не создавать отдельные вкладки в виде отдельных веб-страниц и просто иметь вкладки, переходящие на отдельные страницы, чтобы создать эффект?» Этот код был бы проще, да, но тогда каждый отдельный «просмотр страницы» на самом деле был бы вновь загруженной веб-страницей, что затрудняло бы сохранение информации между представлениями и интеграцию этой функции в более крупный дизайн пользовательского интерфейса. Кроме того, так называемые «одностраничные приложения» становятся очень популярными - особенно для мобильных веб-интерфейсов - потому что все, что обслуживается как один файл, сокращает количество HTTP-запросов, необходимых для просмотра всего содержимого, тем самым повышая производительность.</p>

<div class="note">
<p><strong>Примечание:</strong> Некоторые веб-разработчики занимаются ещё более быстрыми темпами, имея только одну страницу информации, загружаемую сразу и динамическое изменение информации, отображаемой с помощью функции JavaScript, такой как <a href="/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a>. На этом этапе вашего обучения мы хотим сохранить все как можно проще. Впоследствии есть JavaScript, но только немного.</p>
</div>

<p>Для начала мы хотели бы, чтобы вы создали локальную копию исходного HTML-файла — <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box-start.html">info-box-start.html</a>. Сохраните это где вам удобно на локальном компьютере и откройте его в текстовом редакторе. Давайте посмотрим на HTML, содержащийся в теле:</p>

<pre class="brush: html">&lt;section class="info-box"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#" class="active"&gt;Tab 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Tab 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Tab 3&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;div class="panels"&gt;
    &lt;article class="active-panel"&gt;
      &lt;h2&gt;The first tab&lt;/h2&gt;

      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt metus. Donec ultrices, urna maximus consequat aliquet, dui neque eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor urna. Nulla facilisi.&lt;/p&gt;
    &lt;/article&gt;
    &lt;article&gt;
      &lt;h2&gt;The second tab&lt;/h2&gt;

      &lt;p&gt;This tab hasn't got any Lorem Ipsum in it. But the content isn't very exciting all the same.&lt;/p&gt;
    &lt;/article&gt;
    &lt;article&gt;
      &lt;h2&gt;The third tab&lt;/h2&gt;

      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in augue. And now an ordered list: how exciting!&lt;/p&gt;

      &lt;ol&gt;
        &lt;li&gt;dui neque eleifend lorem, a auctor libero turpis at sem.&lt;/li&gt;
        &lt;li&gt;Aliquam ut porttitor urna.&lt;/li&gt;
        &lt;li&gt;Nulla facilisi&lt;/li&gt;
      &lt;/ol&gt;
    &lt;/article&gt;
  &lt;/div&gt;
&lt;/section&gt;</pre>

<p>Итак, у нас есть элемент {{htmlelement ("section")}} с <code>классом</code> <code>info-box</code>, который содержит {{htmlelement ("ul")}} и {{htmlelement ("div")}}. Неупорядоченный список содержит три элемента списка со ссылками внутри, которые станут фактическими вкладками для отображения наших панелей контента. <code>div</code> содержит три элемента {{htmlelement ("article")}}, которые будут составлять панели содержимого, соответствующие каждой вкладке. Каждая панель содержит некоторый образец контента.</p>

<p>Идея здесь заключается в том, что мы будем стилизовать вкладки, чтобы они выглядели как стандартное меню горизонтальной навигации и нарисуем панели, чтобы они сидели друг над другом, используя абсолютное позиционирование. Мы также предоставим вам немного JavaScript для включения на вашу страницу, чтобы отобразить соответствующую панель при нажатии вкладки и вы создадите саму вкладку. Вам не нужно будет понимать сам JavaScript на данном этапе, но вы должны подумать об изучении базового  <a href="/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript</a> как можно скорее - чем сложнее ваши функции пользовательского интерфейса, тем больше вероятность того, что вам понадобится JavaScript для реализации желаемую функциональность.</p>

<h3 id="Общая_настройка">Общая настройка</h3>

<p>Для начала добавьте следующее между вашим открытием и закрытием {{HTMLElement ("style")}} tags:</p>

<pre class="brush: css">html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}</pre>

<p>Это всего лишь общая настройка для установки шрифта sans-serif на нашей странице, используйте поле <code>border-box </code>{{cssxref ("box-sizing")}} и избавьтесь от стандартного {{htmlelement ("body") }} поля.</p>

<p>Затем добавьте следующее ниже вашего предыдущего CSS:</p>

<pre class="brush: css">.info-box {
  width: 450px;
  height: 400px;
  margin: 0 auto;
}</pre>

<p>Это задаёт конкретную ширину и высоту содержимого и центрирует его на экране с использованием старого <code>margin: 0 auto </code>трюка. Раньше в курсе мы советовали не устанавливать фиксированную высоту на контейнеры содержимого, если это вообще возможно; это нормально в этом случае, потому что у нас есть фиксированный контент на наших вкладках. Это также выглядит немного раздражающим, чтобы иметь разные вкладки на разных высотах.</p>

<h3 id="Укладка_наших_вкладок">Укладка наших вкладок</h3>

<p>Теперь мы хотим, чтобы стиль вкладок выглядел как вкладки - в основном это горизонтальное меню навигации, но вместо того, чтобы загружать разные веб-страницы, когда они нажимаются, как мы видели ранее в курсе, они вызывают отображение разных панелей на той же странице. Сначала добавьте следующее правило внизу CSS, чтобы удалить по умолчанию {{cssxref ("padding-left")}} и {{cssxref ("margin-top")}} из неупорядоченного списка:</p>

<pre class="brush: css">.info-box ul {
  padding-left: 0;
  margin-top: 0;
}</pre>

<div class="note">
<p><strong>Примечание</strong>: Мы используем селектор-потомки с полем <code>.info-box</code> в начале цепочки в этом примере - это значит, что мы можем вставить эту функцию на страницу с другим содержимым, уже на ней, не опасаясь вмешиваться в стили, применяемые к другим частям страницы.</p>
</div>

<p>Затем мы нарисуем горизонтальные вкладки - все элементы списка будут перемещены влево, чтобы заставить их сидеть в одной строке вместе, их {{cssxref ("list-style-type")}} имеет значение <code>none</code>, чтобы избавиться от пули и их {{cssxref ("width")}} установлены на <code>150px</code>, чтобы они удобно располагались в информационном окне. Элементы {{htmlelement ("a")}} имеют {{cssxref ("display")}} встроенный блок, поэтому они будут сидеть в строке, но всё же быть стильными и  соответствующим образом оформлены для кнопок вкладок, используя множество других свойств.</p>

<p>Добавьте следующий CSS:</p>

<pre class="brush: css">.info-box li {
  float: left;
  list-style-type: none;
  width: 150px;
}

.info-box li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  line-height: 3;
  background-color: red;
  color: black;
  text-align: center;
}</pre>

<p>Наконец, для этого раздела мы установим некоторые стили в состояниях ссылок. Во-первых, мы настроим <code>:focus</code> и <code>:hover</code> состояния вкладок, чтобы выглядеть по-другому, когда они сфокусированы / зависают, предоставляя пользователям некоторую визуальную обратную связь. Во-вторых, мы установим правило, которое ставит один и тот же стиль на одной из вкладок, когда на нем присутствует <code>class</code> of <code>active</code>. Мы установим это с помощью JavaScript при нажатии на вкладку. Поместите следующий CSS ниже других стилей:</p>

<pre class="brush: css">.info-box li a:focus, .info-box li a:hover {
  background-color: #a60000;
  color: white;
}

.info-box li a.active {
  background-color: #a60000;
  color: white;
}</pre>

<h3 id="Styling_the_panels">Styling the panels</h3>

<p>The next job is to style our panels. Let's get going!</p>

<p>First, of all, add the following rule to style the <code>.panels</code> {{htmlelement("div")}} container. Here we simply set a fixed {{cssxref("height")}} to make sure the panels fit snugly inside the info-box, {{cssxref("position")}} <code>relative</code> to set the {{htmlelement("div")}} as the positioning context, so you can then place positioned child elements relative to it and not the {{htmlelement("html")}} element, and finally we {{cssxref("clear")}} the float set in the CSS above so that it doesn't interfere with the remainder of the layout.</p>

<pre class="brush: css">.info-box .panels {
  height: 352px;
  position: relative;
  clear: both;
}</pre>

<p>Finally for this section, we will style the individual {{htmlelement("article")}} elements that comprise our panels. The first rule we'll add will absolutely {{cssxref("position")}} the panels, and make them all sit flush to the {{cssxref("top")}} and {{cssxref("left")}} of their {{htmlelement("div")}} container — this part is absolutely key to this whole layout feature, as it makes the panels sit on top of one another. The rule also gives the panels the same set height as the container, and gives the content some padding, a text {{cssxref("color")}}, and a {{cssxref("background-color")}}.</p>

<p>The second rule we'll add here makes it so that a panel with a <code>class</code> of <code>active-panel</code> set on it will have a {{cssxref("z-index")}} of 1 applied to it, which will make it sit above the other panels (positioned elements have a <code>z-index</code> of 0 by default, which would put them below). Again, we'll add this class using JavaScript at the appropriate time.</p>

<pre class="brush: css">.info-box article {
  position: absolute;
  top: 0;
  left: 0;
  height: 352px;
  padding: 10px;
  color: white;
  background-color: #a60000;
}

.info-box .active-panel {
  z-index: 1;
}</pre>

<h3 id="Adding_our_JavaScript">Adding our JavaScript</h3>

<p>The final step to getting this feature working is to add some JavaScript. Put the following block of code, exactly as written in between your opening and closing {{htmlelement("script")}} tags (you'll find these below the HTML content):</p>

<pre>var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');

for(i = 0; i &lt; tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i &lt; tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(i = 0; i &lt; panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}</pre>

<p>This code does the following:</p>

<ul>
 <li>First we save a reference to all the tabs and all the panels in two variables called <code>tabs</code> and <code>panels</code>, so we can easily do things to them later on.</li>
 <li>Then we use a <code>for</code> loop to cycle through all the tabs and run a function called <code>setTabHandler()</code> on each one, which sets up the functionality that should occur when each one is clicked on. When run, the function is passed a reference to the particular tab it is being run for, and an index number <code>i</code> that indentifies the tab's position in the <code>tabs</code> array.</li>
 <li>In the <code>setTabHandler()</code> function, the tab has an <code>onclick</code> event handler set on it, so that when the tab is clicked, the following occurs:
  <ul>
   <li>A <code>for</code> loop is used to cycle through all the tabs and remove any classes that are present on them.</li>
   <li>A <code>class</code> of <code>active</code> is set on the tab that was clicked on — remember from earlier that this class has an associated rule in the CSS that sets the same {{cssxref("color")}} and {{cssxref("background-color")}} on the tab as the panels are styled with.</li>
   <li>A <code>for</code> loop is used to cycle through all the panels and remove any classes that are present on them.</li>
   <li>A class of <code>active-panel</code> is set on the panel that corresponds to the tab that was clicked on — remember from earlier that this class has an associated rule in the CSS that sets its {{cssxref("z-index")}} to 1, making it appear over the top of the other panels.</li>
  </ul>
 </li>
</ul>

<p>That's it for the first example. Keep your code open, as we'll be adding to it in the second one.</p>

<h2 id="A_fixed_position_tabbed_info-box">A fixed position tabbed info-box</h2>

<p>In our second example, we will take our first example — our info-box — and add it into the context of a full web page. But not only that — we'll give it fixed position so that it stays in the same position in the browser window. When the main content scrolls, the info-box will stay in the same position on the screen. Our finished example will look like this:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13364/fixed-info-box.png" style="border-style: solid; border-width: 1px; display: block; height: 585px; margin: 0px auto; width: 1118px;"></p>

<div class="note">
<p><strong>Note</strong>: You can see the finished example running live at <a href="http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html">fixed-info-box.html</a> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/fixed-info-box.html">source code</a>). Check it out to get an idea of what you will be building in this section of the article.</p>
</div>

<p>As a starting point, you can use your completed example from the first section of the article, or make a local copy of <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html">info-box.html</a> from our Github repo.</p>

<h3 id="HTML_additions">HTML additions</h3>

<p>First of all, we need some additional HTML to represent the web site main content. Add the following {{htmlelement("section")}} just below your opening {{htmlelement("body")}} tag, just before the existing section:</p>

<pre class="brush: html">&lt;section class="fake-content"&gt;
  &lt;h1&gt;Fake content&lt;/h1&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
&lt;/section&gt;</pre>

<div class="note">
<p><strong>Note</strong>: You can feel free to change the fake content for some real content if you like.</p>
</div>

<h3 id="Changes_to_the_existing_CSS">Changes to the existing CSS</h3>

<p>Next we need to make some small changes to the existing CSS, to get the info-box placed and positioned. Change your <code>.info-box</code> rule to get rid of <code>margin: 0 auto;</code> (we no longer want the info-box centered), add {{cssxref("position")}}<code>: fixed;</code>, and stick it to the {{cssxref("top")}} of the browser viewport.</p>

<p>It should now look like this:</p>

<pre class="brush: css">.info-box {
  width: 450px;
  height: 400px;
  position: fixed;
  top: 0;
}</pre>

<h3 id="Styling_the_main_content">Styling the main content</h3>

<p>The only thing left for this example is to provide the main content with some styling. Add the following rule underneath the rest of your CSS:</p>

<pre class="brush: css">.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}</pre>

<p>To start with, we give the content the same {{cssxref("background-color")}}, {{cssxref("color")}}, and {{cssxref("padding")}} as the info-box panels. We then give it a large {{cssxref("margin-left")}} to move it over to the right, making space for the info-box to sit in, so it is not overlapping anything else.</p>

<p>This marks the end of the second example; we hope you'll find the third just as interesting.</p>

<h2 id="A_sliding_hidden_panel">A sliding hidden panel</h2>

<p>The final example we'll present here is a panel that slides on and off the screen at the press of an icon — as mentioned earlier, this is popular for situations like mobile layouts, where the available screen spaces is small, so you don't want to use up most of it by showing a menu or info panel instead of the useful content.</p>

<p>Our finished example will look like this:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13366/hidden-sliding-panel.png" style="border-style: solid; border-width: 1px; display: block; height: 521px; margin: 0px auto; width: 950px;"></p>

<div class="note">
<p><strong>Note</strong>: You can see the finished example running live at <a href="http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html">hidden-info-panel.html</a> (<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel.html">source code</a>). Check it out to get an idea of what you will be building in this section of the article.</p>
</div>

<p>As a starting point, make a local copy of <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html">hidden-info-panel-start.html</a> from our Github repo. This doesn't follow on from the previous example, so a fresh start file is required. Let's have a look at the HTML in the file:</p>

<pre class="brush: css">&lt;label for="toggle"&gt;❔&lt;/label&gt;
&lt;input type="checkbox" id="toggle"&gt;
&lt;aside&gt;

  ...

&lt;/aside&gt;</pre>

<p>To start with here we've got a {{htmlelement("label")}} element and an {{htmlelement("input")}} element — <code>&lt;label&gt;</code> elements are normally used to associate a text label with a form element for accessibility purposes (allowing a screen user to see what description goes with what form element). Here it is associated with the <code>&lt;input&gt;</code> checkbox using the <code>for</code> and <code>id</code> attributes.</p>

<div class="note">
<p><strong>Note</strong>: We've put a special question mark character into our HTML to act as our info icon — this represents the button that will be pressed to show/hide the panel.</p>
</div>

<p>Here we are going to use these elements for a slightly different purpose — another useful side effect of <code>&lt;label&gt;</code> elements is that you can click a checkbox's label to check the checkbox, as well as just the checkbox itself. This has led to the well-known <a href="https://css-tricks.com/the-checkbox-hack/">checkbox hack</a>, which provides a JavaScript-free way of controlling an element by toggling a button. The element we'll be controlling is the {{htmlelement("aside")}} element that follows the other two (we've left its contents out of the above code listing for brevity).</p>

<p>In the below sections we'll explain how this all works.</p>

<h3 id="Styling_the_form_elements">Styling the form elements</h3>

<p>First let's deal with the form elements — add the following CSS in between your {{htmlelement("style")}} tags:</p>

<pre class="brush: css">label[for="toggle"] {
  font-size: 3rem;
  position: absolute;
  top: 4px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  top: -100px;
}</pre>

<p>The first rule styles the <code>&lt;label&gt;</code>; here we've:</p>

<ul>
 <li>Set a large {{cssxref("font-size")}} to make the icon nice and big.</li>
 <li>Set {{cssxref("position")}} <code>absolute</code> on it, and used {{cssxref("top")}} and {{cssxref("right")}} to position it nicely in the top-right corner.</li>
 <li>Set a {{cssxref("z-index")}} of 1 on it — this is so that when the info panel is styled and shown, it doesn't cover up the icon; instead the icon will sit on top of it so it can be pressed again to hide the info pane.</li>
 <li>Used the {{cssxref("cursor")}} property to change the mouse cursor when it is hovering over the icon to a hand pointer (like the one you see when links are hovered over), as an extra visual clue to users that the icon does something interesting.</li>
</ul>

<p>The second rule sets {{cssxref("position")}} <code>absolute</code> on the actual checkbox <code>&lt;input&gt;</code> element, and hides it off the top of the screen. We don't actually want to see this on our UI.</p>

<h3 id="Styling_the_panel">Styling the panel</h3>

<p>Now it's time to style the actual sliding panel itself. Add the following rule to the bottom of your CSS:</p>

<pre class="brush: css">aside {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s all;
}</pre>

<p>There's a lot going on here — let's discuss it bit by bit:</p>

<ul>
 <li>First, we set some simple {{cssxref("background-color")}} and {{cssxref("color")}} on the info box.</li>
 <li>Next, we set a fixed {{cssxref("width")}} on the panel, and make its {{cssxref("height")}} the entire height of the browser viewport.</li>
 <li>We also include some horizontal {{cssxref("padding")}} to space it out a bit.</li>
 <li>Next we set {{cssxref("position")}}<code>: fixed;</code> on the panel so it will always appear in the same place, even if the page has content to scroll. We glue it to the {{cssxref("top")}} of the viewport, and set it so that by default it is offscreen to the {{cssxref("right")}}.</li>
 <li>Finally, we set a {{cssxref("transition")}} on the element. Transitions are an interesting feature that allow you to make changes between states happen smoothly, rather than just going "on", "off" abruptly. In this case we are intending to make the panel slide smoothly onscreen when the checkbox is checked. (Or to put it another way, when the question mark icon is clicked — remember, clicking the <code>&lt;label&gt;</code> will check the associated checkbox! We told you it was a hack.) You will learn a lot more about...</li>
</ul>

<h3 id="Setting_the_checked_state">Setting the checked state</h3>

<p>There is one final bit of CSS to add — put the following at the bottom of your CSS:</p>

<pre class="brush: css">input[type=checkbox]:checked + aside {
  right: 0px;
}</pre>

<p>The selector is pretty complex here — we are selecting the <code>&lt;aside&gt;</code> element adjacent to the <code>&lt;input&gt;</code> element, but only when it is checked (note the use of the {{cssxref(":checked")}} pseudo-class to achieve this). When this is the case, we are setting the {{cssxref("right")}} property of the <code>&lt;aside&gt;</code> to <code>0px</code>, which causes the panel to appear on the screen again (smoothly due to the transition). Clicking the label again unchecks the checkbox, which hides the panel again.</p>

<p>So there you have it — a rather clever JavaScript-free way to create a toggling button effect. This will work in IE9 and above (the smooth transition will work in IE10 and above.) This effect does have some concerns — this is a bit of an abuse of form elements, as they weren't intended for this purpose. In addition, the effect is not great in terms of accessibility; the label is not focusable by default, and the non-semantic use of the form elements could cause issues with screen readers. JavaScript and a link or button might be more appropriate, but it is still fun to experiment with.</p>

<h2 id="Summary">Summary</h2>

<p>So that rounds off our look at positioning — by now, you should have an idea of how the basic mechanics work, as well as understanding how to start applying these to building some interesting UI features. Don't worry if you didn't get this all immediately — positioning is a fairly advanced topic, and you can always work through the articles again to aid your understanding. The next subject we'll turn to is Flexbox.</p>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}</p>

<p> </p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Introduction">Introduction to CSS layout</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Floats">Floats</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Positioning">Positioning</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Practical_positioning_examples">Practical positioning examples</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a></li>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Grids">Grids</a></li>
</ul>

<p> </p>
