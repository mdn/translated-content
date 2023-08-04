---
title: Practical positioning examples
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

Основы позиционирования, приведённые в последней статье, мы теперь рассмотрим, как создать некоторые примеры реального мира, чтобы проиллюстрировать, какие вещи вы можете сделать с позиционированием.

| Предпосылки: | Основы HTML (уроки [Introduction to HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), и идея о том, как работает CSS (уроки [Introduction to CSS](/ru/docs/Learn/CSS/Introduction_to_CSS).) |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:      | Чтобы получить представление о практичности позиционирования                                                                                                                                |

## Информационный блок с вкладками

Первый пример, который мы рассмотрим, - это классический информационный блок с вкладками - очень распространённая функция, используемая, когда вы хотите упаковать много информации в небольшую область. Сюда входят информационные приложения, такие как стратегии / военные игры, мобильные версии веб-сайтов, где экран и пространство ограничены и необходимы компактные информационные окна, где вы можете сделать много информации, не заполняя весь пользовательский интерфейс. Наш простой пример будет выглядеть так, как только мы закончим:

![](tabbed-info-box.png)

> **Примечание:**Вы можете увидеть, что готовый пример работает в прямом эфире [info-box.html](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) ([source code](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)). Проверьте его, чтобы понять, что вы будете строить в этом разделе статьи.

Возможно, вы думаете: «Почему бы просто не создавать отдельные вкладки в виде отдельных веб-страниц и просто иметь вкладки, переходящие на отдельные страницы, чтобы создать эффект?» Этот код был бы проще, да, но тогда каждый отдельный «просмотр страницы» на самом деле был бы вновь загруженной веб-страницей, что затрудняло бы сохранение информации между представлениями и интеграцию этой функции в более крупный дизайн пользовательского интерфейса. Кроме того, так называемые «одностраничные приложения» становятся очень популярными - особенно для мобильных веб-интерфейсов - потому что все, что обслуживается как один файл, сокращает количество HTTP-запросов, необходимых для просмотра всего содержимого, тем самым повышая производительность.

> **Примечание:** Некоторые веб-разработчики занимаются ещё более быстрыми темпами, имея только одну страницу информации, загружаемую сразу и динамическое изменение информации, отображаемой с помощью функции JavaScript, такой как [XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest). На этом этапе вашего обучения мы хотим сохранить все как можно проще. Впоследствии есть JavaScript, но только немного.

Для начала мы хотели бы, чтобы вы создали локальную копию исходного HTML-файла — [info-box-start.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box-start.html). Сохраните это где вам удобно на локальном компьютере и откройте его в текстовом редакторе. Давайте посмотрим на HTML, содержащийся в теле:

```html
<section class="info-box">
  <ul>
    <li><a href="#" class="active">Tab 1</a></li>
    <li><a href="#">Tab 2</a></li>
    <li><a href="#">Tab 3</a></li>
  </ul>
  <div class="panels">
    <article class="active-panel">
      <h2>The first tab</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum
        et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius
        libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt
        metus. Donec ultrices, urna maximus consequat aliquet, dui neque
        eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor
        urna. Nulla facilisi.
      </p>
    </article>
    <article>
      <h2>The second tab</h2>

      <p>
        This tab hasn't got any Lorem Ipsum in it. But the content isn't very
        exciting all the same.
      </p>
    </article>
    <article>
      <h2>The third tab</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. And now an
        ordered list: how exciting!
      </p>

      <ol>
        <li>dui neque eleifend lorem, a auctor libero turpis at sem.</li>
        <li>Aliquam ut porttitor urna.</li>
        <li>Nulla facilisi</li>
      </ol>
    </article>
  </div>
</section>
```

Итак, у нас есть элемент {{htmlelement ("section")}} с `классом` `info-box`, который содержит {{htmlelement ("ul")}} и {{htmlelement ("div")}}. Неупорядоченный список содержит три элемента списка со ссылками внутри, которые станут фактическими вкладками для отображения наших панелей контента. `div` содержит три элемента {{htmlelement ("article")}}, которые будут составлять панели содержимого, соответствующие каждой вкладке. Каждая панель содержит некоторый образец контента.

Идея здесь заключается в том, что мы будем стилизовать вкладки, чтобы они выглядели как стандартное меню горизонтальной навигации и нарисуем панели, чтобы они сидели друг над другом, используя абсолютное позиционирование. Мы также предоставим вам немного JavaScript для включения на вашу страницу, чтобы отобразить соответствующую панель при нажатии вкладки и вы создадите саму вкладку. Вам не нужно будет понимать сам JavaScript на данном этапе, но вы должны подумать об изучении базового [JavaScript](/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics) как можно скорее - чем сложнее ваши функции пользовательского интерфейса, тем больше вероятность того, что вам понадобится JavaScript для реализации желаемую функциональность.

### Общая настройка

Для начала добавьте следующее между вашим открытием и закрытием {{HTMLElement ("style")}} tags:

```css
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

Это всего лишь общая настройка для установки шрифта sans-serif на нашей странице, используйте поле `border-box` {{cssxref ("box-sizing")}} и избавьтесь от стандартного {{htmlelement ("body") }} поля.

Затем добавьте следующее ниже вашего предыдущего CSS:

```css
.info-box {
  width: 450px;
  height: 400px;
  margin: 0 auto;
}
```

Это задаёт конкретную ширину и высоту содержимого и центрирует его на экране с использованием старого `margin: 0 auto` трюка. Раньше в курсе мы советовали не устанавливать фиксированную высоту на контейнеры содержимого, если это вообще возможно; это нормально в этом случае, потому что у нас есть фиксированный контент на наших вкладках. Это также выглядит немного раздражающим, чтобы иметь разные вкладки на разных высотах.

### Укладка наших вкладок

Теперь мы хотим, чтобы стиль вкладок выглядел как вкладки - в основном это горизонтальное меню навигации, но вместо того, чтобы загружать разные веб-страницы, когда они нажимаются, как мы видели ранее в курсе, они вызывают отображение разных панелей на той же странице. Сначала добавьте следующее правило внизу CSS, чтобы удалить по умолчанию {{cssxref ("padding-left")}} и {{cssxref ("margin-top")}} из неупорядоченного списка:

```css
.info-box ul {
  padding-left: 0;
  margin-top: 0;
}
```

> **Примечание:** Мы используем селектор-потомки с полем `.info-box` в начале цепочки в этом примере - это значит, что мы можем вставить эту функцию на страницу с другим содержимым, уже на ней, не опасаясь вмешиваться в стили, применяемые к другим частям страницы.

Затем мы нарисуем горизонтальные вкладки - все элементы списка будут перемещены влево, чтобы заставить их сидеть в одной строке вместе, их {{cssxref ("list-style-type")}} имеет значение `none`, чтобы избавиться от пули и их {{cssxref ("width")}} установлены на `150px`, чтобы они удобно располагались в информационном окне. Элементы {{htmlelement ("a")}} имеют {{cssxref ("display")}} встроенный блок, поэтому они будут сидеть в строке, но всё же быть стильными и соответствующим образом оформлены для кнопок вкладок, используя множество других свойств.

Добавьте следующий CSS:

```css
.info-box li {
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
}
```

Наконец, для этого раздела мы установим некоторые стили в состояниях ссылок. Во-первых, мы настроим `:focus` и `:hover` состояния вкладок, чтобы выглядеть по-другому, когда они сфокусированы / зависают, предоставляя пользователям некоторую визуальную обратную связь. Во-вторых, мы установим правило, которое ставит один и тот же стиль на одной из вкладок, когда на нем присутствует `class` of `active`. Мы установим это с помощью JavaScript при нажатии на вкладку. Поместите следующий CSS ниже других стилей:

```css
.info-box li a:focus,
.info-box li a:hover {
  background-color: #a60000;
  color: white;
}

.info-box li a.active {
  background-color: #a60000;
  color: white;
}
```

### Styling the panels

The next job is to style our panels. Let's get going!

First, of all, add the following rule to style the `.panels` {{htmlelement("div")}} container. Here we simply set a fixed {{cssxref("height")}} to make sure the panels fit snugly inside the info-box, {{cssxref("position")}} `relative` to set the {{htmlelement("div")}} as the positioning context, so you can then place positioned child elements relative to it and not the {{htmlelement("html")}} element, and finally we {{cssxref("clear")}} the float set in the CSS above so that it doesn't interfere with the remainder of the layout.

```css
.info-box .panels {
  height: 352px;
  position: relative;
  clear: both;
}
```

Finally for this section, we will style the individual {{htmlelement("article")}} elements that comprise our panels. The first rule we'll add will absolutely {{cssxref("position")}} the panels, and make them all sit flush to the {{cssxref("top")}} and {{cssxref("left")}} of their {{htmlelement("div")}} container — this part is absolutely key to this whole layout feature, as it makes the panels sit on top of one another. The rule also gives the panels the same set height as the container, and gives the content some padding, a text {{cssxref("color")}}, and a {{cssxref("background-color")}}.

The second rule we'll add here makes it so that a panel with a `class` of `active-panel` set on it will have a {{cssxref("z-index")}} of 1 applied to it, which will make it sit above the other panels (positioned elements have a `z-index` of 0 by default, which would put them below). Again, we'll add this class using JavaScript at the appropriate time.

```css
.info-box article {
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
}
```

### Adding our JavaScript

The final step to getting this feature working is to add some JavaScript. Put the following block of code, exactly as written in between your opening and closing {{htmlelement("script")}} tags (you'll find these below the HTML content):

```
var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');

for(i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}
```

This code does the following:

- First we save a reference to all the tabs and all the panels in two variables called `tabs` and `panels`, so we can easily do things to them later on.
- Then we use a `for` loop to cycle through all the tabs and run a function called `setTabHandler()` on each one, which sets up the functionality that should occur when each one is clicked on. When run, the function is passed a reference to the particular tab it is being run for, and an index number `i` that indentifies the tab's position in the `tabs` array.
- In the `setTabHandler()` function, the tab has an `onclick` event handler set on it, so that when the tab is clicked, the following occurs:

  - A `for` loop is used to cycle through all the tabs and remove any classes that are present on them.
  - A `class` of `active` is set on the tab that was clicked on — remember from earlier that this class has an associated rule in the CSS that sets the same {{cssxref("color")}} and {{cssxref("background-color")}} on the tab as the panels are styled with.
  - A `for` loop is used to cycle through all the panels and remove any classes that are present on them.
  - A class of `active-panel` is set on the panel that corresponds to the tab that was clicked on — remember from earlier that this class has an associated rule in the CSS that sets its {{cssxref("z-index")}} to 1, making it appear over the top of the other panels.

That's it for the first example. Keep your code open, as we'll be adding to it in the second one.

## A fixed position tabbed info-box

In our second example, we will take our first example — our info-box — and add it into the context of a full web page. But not only that — we'll give it fixed position so that it stays in the same position in the browser window. When the main content scrolls, the info-box will stay in the same position on the screen. Our finished example will look like this:

![](fixed-info-box.png)

> **Примечание:** You can see the finished example running live at [fixed-info-box.html](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([source code](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/fixed-info-box.html)). Check it out to get an idea of what you will be building in this section of the article.

As a starting point, you can use your completed example from the first section of the article, or make a local copy of [info-box.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html) from our Github repo.

### HTML additions

First of all, we need some additional HTML to represent the web site main content. Add the following {{htmlelement("section")}} just below your opening {{htmlelement("body")}} tag, just before the existing section:

```html
<section class="fake-content">
  <h1>Fake content</h1>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
</section>
```

> **Примечание:** You can feel free to change the fake content for some real content if you like.

### Changes to the existing CSS

Next we need to make some small changes to the existing CSS, to get the info-box placed and positioned. Change your `.info-box` rule to get rid of `margin: 0 auto;` (we no longer want the info-box centered), add {{cssxref("position")}}`: fixed;`, and stick it to the {{cssxref("top")}} of the browser viewport.

It should now look like this:

```css
.info-box {
  width: 450px;
  height: 400px;
  position: fixed;
  top: 0;
}
```

### Styling the main content

The only thing left for this example is to provide the main content with some styling. Add the following rule underneath the rest of your CSS:

```css
.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}
```

To start with, we give the content the same {{cssxref("background-color")}}, {{cssxref("color")}}, and {{cssxref("padding")}} as the info-box panels. We then give it a large {{cssxref("margin-left")}} to move it over to the right, making space for the info-box to sit in, so it is not overlapping anything else.

This marks the end of the second example; we hope you'll find the third just as interesting.

## A sliding hidden panel

The final example we'll present here is a panel that slides on and off the screen at the press of an icon — as mentioned earlier, this is popular for situations like mobile layouts, where the available screen spaces is small, so you don't want to use up most of it by showing a menu or info panel instead of the useful content.

Our finished example will look like this:

![](hidden-sliding-panel.png)

> **Примечание:** You can see the finished example running live at [hidden-info-panel.html](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([source code](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel.html)). Check it out to get an idea of what you will be building in this section of the article.

As a starting point, make a local copy of [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) from our Github repo. This doesn't follow on from the previous example, so a fresh start file is required. Let's have a look at the HTML in the file:

```css
<label for="toggle">❔</label>
<input type="checkbox" id="toggle">
<aside>

  ...

</aside>
```

To start with here we've got a {{htmlelement("label")}} element and an {{htmlelement("input")}} element — `<label>` elements are normally used to associate a text label with a form element for accessibility purposes (allowing a screen user to see what description goes with what form element). Here it is associated with the `<input>` checkbox using the `for` and `id` attributes.

> **Примечание:** We've put a special question mark character into our HTML to act as our info icon — this represents the button that will be pressed to show/hide the panel.

Here we are going to use these elements for a slightly different purpose — another useful side effect of `<label>` elements is that you can click a checkbox's label to check the checkbox, as well as just the checkbox itself. This has led to the well-known [checkbox hack](https://css-tricks.com/the-checkbox-hack/), which provides a JavaScript-free way of controlling an element by toggling a button. The element we'll be controlling is the {{htmlelement("aside")}} element that follows the other two (we've left its contents out of the above code listing for brevity).

In the below sections we'll explain how this all works.

### Styling the form elements

First let's deal with the form elements — add the following CSS in between your {{htmlelement("style")}} tags:

```css
label[for="toggle"] {
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
}
```

The first rule styles the `<label>`; here we've:

- Set a large {{cssxref("font-size")}} to make the icon nice and big.
- Set {{cssxref("position")}} `absolute` on it, and used {{cssxref("top")}} and {{cssxref("right")}} to position it nicely in the top-right corner.
- Set a {{cssxref("z-index")}} of 1 on it — this is so that when the info panel is styled and shown, it doesn't cover up the icon; instead the icon will sit on top of it so it can be pressed again to hide the info pane.
- Used the {{cssxref("cursor")}} property to change the mouse cursor when it is hovering over the icon to a hand pointer (like the one you see when links are hovered over), as an extra visual clue to users that the icon does something interesting.

The second rule sets {{cssxref("position")}} `absolute` on the actual checkbox `<input>` element, and hides it off the top of the screen. We don't actually want to see this on our UI.

### Styling the panel

Now it's time to style the actual sliding panel itself. Add the following rule to the bottom of your CSS:

```css
aside {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s all;
}
```

There's a lot going on here — let's discuss it bit by bit:

- First, we set some simple {{cssxref("background-color")}} and {{cssxref("color")}} on the info box.
- Next, we set a fixed {{cssxref("width")}} on the panel, and make its {{cssxref("height")}} the entire height of the browser viewport.
- We also include some horizontal {{cssxref("padding")}} to space it out a bit.
- Next we set {{cssxref("position")}}`: fixed;` on the panel so it will always appear in the same place, even if the page has content to scroll. We glue it to the {{cssxref("top")}} of the viewport, and set it so that by default it is offscreen to the {{cssxref("right")}}.
- Finally, we set a {{cssxref("transition")}} on the element. Transitions are an interesting feature that allow you to make changes between states happen smoothly, rather than just going "on", "off" abruptly. In this case we are intending to make the panel slide smoothly onscreen when the checkbox is checked. (Or to put it another way, when the question mark icon is clicked — remember, clicking the `<label>` will check the associated checkbox! We told you it was a hack.) You will learn a lot more about...

### Setting the checked state

There is one final bit of CSS to add — put the following at the bottom of your CSS:

```css
input[type="checkbox"]:checked + aside {
  right: 0px;
}
```

The selector is pretty complex here — we are selecting the `<aside>` element adjacent to the `<input>` element, but only when it is checked (note the use of the {{cssxref(":checked")}} pseudo-class to achieve this). When this is the case, we are setting the {{cssxref("right")}} property of the `<aside>` to `0px`, which causes the panel to appear on the screen again (smoothly due to the transition). Clicking the label again unchecks the checkbox, which hides the panel again.

So there you have it — a rather clever JavaScript-free way to create a toggling button effect. This will work in IE9 and above (the smooth transition will work in IE10 and above.) This effect does have some concerns — this is a bit of an abuse of form elements, as they weren't intended for this purpose. In addition, the effect is not great in terms of accessibility; the label is not focusable by default, and the non-semantic use of the form elements could cause issues with screen readers. JavaScript and a link or button might be more appropriate, but it is still fun to experiment with.

## Summary

So that rounds off our look at positioning — by now, you should have an idea of how the basic mechanics work, as well as understanding how to start applying these to building some interesting UI features. Don't worry if you didn't get this all immediately — positioning is a fairly advanced topic, and you can always work through the articles again to aid your understanding. The next subject we'll turn to is Flexbox.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

## In this module

- [Introduction to CSS layout](/ru/docs/Learn/CSS/CSS_layout/Introduction)
- [Floats](/ru/docs/Learn/CSS/CSS_layout/Floats)
- [Positioning](/ru/docs/Learn/CSS/CSS_layout/Positioning)
- [Practical positioning examples](/ru/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
- [Flexbox](/ru/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grids](/ru/docs/Learn/CSS/CSS_layout/Grids)
