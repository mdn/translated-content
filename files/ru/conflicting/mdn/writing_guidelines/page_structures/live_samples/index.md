---
title: Как создать интерактивное обучающее упражнение
slug: conflicting/MDN/Writing_guidelines/Page_structures/Live_samples
original_slug: MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web
---

{{MDNSidebar}}

При изучении веба, важно полагаться на активном обучающем контенте. Такой контент создан для помощи в изучении чего-либо проактивно. Это может быть упражнения, живые взламываемые примеры, задачи к исполнению, оценки и т.д. Вкратце, всё что может помочь кому-либо в активном понимании чего-либо.

Нет прямого способа для создания такого контента. Например существует много сторонних инструментов которые помогут в создании живых примеров (см: [JSFiddle](https://jsfiddle.net/), [CodePen](https://codepen.io/), [Dabblet](http://dabblet.com/), и т.д.) которые вы можете ссылаться из MDN статей. Если вы хотите создать более продвинутые упражнения, то можете воспользоваться [Thimble](https://thimble.mozilla.org) из проекта WebMaker.

На данный момент MDN не имеет лёгкого инструмента для пометки автора такого контента. Однако, если вы являетесь программистом, то можете воспользоваться текущими MDN функциями для создания своего активного обучающего контента. Читайте далее для того чтобы узнать как это сделать.

## MDN live samples

MDN has a very cool feature called **live samples**. It's a mechanism that turns any HTML, CSS, and JavaScript code inside an MDN page into its executed equivalent. Before using it, you should read over [Using the live sample system](/ru/docs/MDN/Contribute/Editor/Live_samples), which is our complete documentation for building them. While they're easy to do, there are quirks and tricks you'll learn along the way.

What is interesting is that it's really easy to tweak that feature to use it in order to embed any kind of tool or utility you want into an MDN page.

### Hidden code

The first way to use a code sample to create active learning content is to edit the page where you want to add your content. Use the Live Sample feature to create your content as you wish. Don't bother with the code complexity you could write; just create what you need. Once your content is ready, just switch to the editor code view and surround your code with a simple {{HTMLElement('div')}} element with the class `hidden`. By doing so, your code won't be displayed but your live sample remains accessible and displayable.

Let's see a simple example:

Click on the following square to randomly change its color or just type a hexadecimal code color

```html hidden
<div class="square">
  #<input class="color">
</div>
```

```css hidden
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
```

```js hidden
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').value = color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

function getInputColor() {
  var value = document.querySelector('.color').value;
  var color = Number('0x' + color);
  if (color === +color) {
    return color.toString(16);
  }
  return value;
}

document.addEventListener('click', function () {
  setColor(getRandomColor());
});

document.addEventListener('keyup', function () {
  setColor(getInputColor());
});
```

{{EmbedLiveSample('hidden_code', '100%', 200)}}

If you take a look at that page HTML code with the MDN editor, you'll see the exact following HTML code:

```html
<div class="moreinfo">
<p>Click on the following square to randomly change its color or just type an hexadecimal code color</p>

<div class="hidden">
<h4 id="hidden_code">hidden code example</h4>

<h5 id="HTML">HTML</h5>

<pre class="brush: html">
&lt;div class="square"&gt;
  #&lt;input class="color"&gt;
&lt;/div&gt;</pre>

<h5 id="CSS">CSS</h5>

<pre class="brush: css">
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
</pre>

<h5 id="JS">JS</h5>

<pre class="brush: js">
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').value = color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

function getInputColor() {
  var value = document.querySelector('.color').value;
  var color = Number('0x' + color);
  if (color === +color) {
    return color.toString(16);
  }
  return value;
}

document.addEventListener('click', function () {
  setColor(getRandomColor());
});

document.addEventListener('keyup', function () {
  setColor(getInputColor());
});
</pre>
</div>

<pre>\{{EmbedLiveSample('hidden_code', '100%', 200)}}</pre>
</div>
```

You can see a more advance example of such a tweak on [the Canvas API page](/ru/docs/Web/API/Canvas_API#JavaScript).

### Code from outside the page

The previous example is okay if you want to embed basic active learning content. However, if you want to deal with complex code, it can become a bit awkward to deal with that `hidden` class wrapper.

So another option is to write the code of your learning content on an MDN page and then embed it into another page. To do this we can use the [`EmbedDistLiveSample`](https://github.com/mdn/yari/tree/main/kumascript/macros/EmbedDistLiveSample.ejs) macro instead of the [`EmbedLiveSample`](https://github.com/mdn/yari/tree/main/kumascript/macros/EmbedLiveSample.ejs) macro.

Let's how that sample looks when configured as if it were being embedded from a remote origin:

Click on the following square to randomly change its color or just type a hexadecimal code color

{{ EmbedLiveSample('The_example', 120, 120) }}

This time, if you take a [look at that page's HTML using the MDN editor](/ru/docs/MDN/Contribute/Editor/Source_mode), you'll see no hidden code. If you want to see the code, just go to [the page that hosts it](/ru/docs/MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web/distant_example).

You can see a more advanced example of this usage in our [HTML Form tutorial](/ru/docs/Web/Guide/HTML/Forms/How_to_build_custom_form_widgets), which uses this technique to allow experimentation with forms.
