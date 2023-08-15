---
title: Стили HTML форм
slug: Learn/Forms/Styling_web_forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Forms/HTML_forms_in_legacy_browsers", "Learn/HTML/Forms/Advanced_styling_for_HTML_forms", "Learn/HTML/Forms")}}

В этой статье Вы узнает, как использовать CSS с HTML-формами, чтобы сделать их (надеюсь) более красивыми. Удивительно, но это может быть немного сложнее. По историческим и техническим причинам виджеты форм плохо сочетаются с CSS. Из-за этих трудностей многие разработчики предпочитают создавать свои собственные HTML-виджеты, чтобы получить контроль над своим внешним видом. Однако в современных браузерах веб-дизайнеры все больше контролируют дизайн элементов формы. Давайте приступим!

## Почему так сложно стилизовать виджеты форм с помощью CSS?

На заре Интернета, примерно в 1995 году, в [HTML 2](http://www.ietf.org/rfc/rfc1866.txt) были добавлены элементы управления формой. Из-за сложности виджетов форм разработчики решили полагаться на базовую операционную систему для управления ими и их рендеринга.

Несколько лет спустя был создан CSS, и то, что было технической необходимостью, то есть использование собственных виджетов для реализации элементов управления формой, стало требованием к стилю. В первые дни CSS, стилизация элементов управления формы не была приоритетом.

Поскольку пользователи привыкли к внешнему виду своих соответствующих платформ, поставщики браузеров неохотно делают элементы управления формами стилевыми; и по сей день все ещё чрезвычайно трудно перестроить все элементы управления, чтобы сделать их стилизованными.

Даже сегодня ни один браузер полностью не реализует CSS 2.1. Однако со временем поставщики браузеров улучшили свою поддержку CSS для элементов формы, и, несмотря на плохую репутацию в отношении удобства использования, теперь вы можете использовать CSS для стилизации [HTML форм](/ru/docs/HTML/Forms).

### Не все виджеты созданы равными, когда задействован CSS

В настоящее время некоторые трудности остаются при использовании CSS с формами. Эти проблемы можно разделить на три категории:

#### Хорошая

Некоторые элементы могут быть стилизованы с небольшим количеством проблем на разных платформах. К ним относятся следующие структурные элементы:

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}}
3. {{HTMLElement("label")}}
4. {{HTMLElement("output")}}

Сюда также входят все виджеты текстового поля (как однострочные, так и многострочные) и кнопки.

#### Плохая

Некоторые элементы редко могут быть стилизованы, и могут потребовать некоторых сложных уловок, иногда требующих углублённых знаний CSS3.

Они включают в себя элемент {{HTMLElement ("legend")}}, но его нельзя правильно расположить на всех платформах. Флажки и переключатели также не могут быть стилизованы напрямую, однако, благодаря CSS3 вы можете обойти это. Контент [`placeholder`](/ru/docs/Web/HTML/Element/input#placeholder) не может быть стилизован каким-либо стандартным способом, однако все браузеры, которые его реализуют, также реализуют собственные псевдо-элементы CSS или псевдоклассы, которые позволяют его стилизовать.

Мы опишем, как обрабатывать эти более конкретные случаи, в статье [«Расширенные стили для HTML-форм».](/ru/docs/Advanced_styling_for_HTML_forms)

#### The ugly

Some elements simply can't be styled using CSS. These include: all advanced user interface widgets, such as range, color, or date controls; and all the dropdown widgets, including {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} and {{HTMLElement("datalist")}} elements. The file picker widget is also known not to be stylable at all. The new {{HTMLElement("progress")}} and {{HTMLElement("meter")}} elements also fall in this category.

The main issue with all these widgets, comes from the fact that they have a very complex structure, and CSS is not currently expressive enough to style all the subtle parts of those widgets. If you want to customize those widgets, you have to rely on JavaScript to build a DOM tree you'll be able to style. We explore how to do this in the article [How to build custom form widgets](/ru/docs/HTML/Forms/How_to_build_custom_form_widgets).

## Basic styling

To style [elements that are easy to style](/ru/docs/HTML/Forms/Styling_HTML_forms#The_good) with CSS, you shouldn't face any difficulties, since they mostly behave like any other HTML element. However, the user-agent style sheet of every browser can be a little inconsistent, so there are a few tricks that can help you style them in an easier way.

### Search fields

Search boxes are the only kind of text fields that can be a little tricky to style. On WebKit based browsers (Chrome, Safari, etc.), you'll have to tweak it with the `-webkit-appearance` proprietary property. We discuss this property further in the article: [Advanced styling for HTML forms](/ru/docs/Advanced_styling_for_HTML_forms).

#### Example

```html
<form>
  <input type="search" />
</form>
```

```css
input[type="search"] {
  border: 1px dotted #999;
  border-radius: 0;

  -webkit-appearance: none;
}
```

![This is a screenshot of a search filed on Chrome, with and without the use of -webkit-appearance](/files/4153/search-chrome-macos.png)

As you can see on this screenshot of the search field on Chrome, the two fields have a border set as in our example. The first field is rendered without using the `-webkit-appearance` property, whereas the second is rendered using `-webkit-appearance:none`. This difference is noticeable.

### Fonts and text

CSS font and text features can be used easily with any widget (and yes, you can use {{cssxref("@font-face")}} with form widgets). However, browsers' behaviors are often inconsistent. By default, some widgets do not inherit {{cssxref("font-family")}} and {{cssxref("font-size")}} from their parents. Many browsers use the system default appearance instead. To make your forms' appearance consistent with the rest of your content, you can add the following rules to your stylesheet:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

The screenshot below shows the difference; on the left is the default rendering of the element in Firefox on Mac OS X, with the platform's default font style in use. On the right are the same elements, with our font harmonization style rules applied.

![This is a screenshot of the main form widgets on Firefox on Mac OSX, with and without font harmonization](/files/4157/font-firefox-macos.png)

There's a lot of debate as to whether forms look better using the system default styles, or customized styles designed to match your content. This decision is yours to make, as the designer of your site, or Web application.

### Box model

All text fields have complete support for every property related to the CSS box model ({{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, and {{cssxref("border")}}). As before, however, browsers rely on the system default styles when displaying these widgets. It's up to you to define how you wish to blend them into your content. If you want to keep the native look and feel of the widgets, you'll face a little difficulty if you want to give them a consistent size.

**This is because each widget has their own rules for border, padding and margin.** So if you want to give the same size to several different widgets, you have to use the {{cssxref("box-sizing")}} property:

```css
input,
textarea,
select,
button {
  width: 150px;
  margin: 0;

  -webkit-box-sizing: border-box; /* For legacy WebKit based browsers */
  -moz-box-sizing: border-box; /* For legacy (Firefox <29) Gecko based browsers */
  box-sizing: border-box;
}
```

![This is a screenshot of the main form widgets on Chrome on Windows 7, with and without the use of box-sizing.](/files/4161/size-chrome-win7.png)

In the screenshot above, the left column is built without {{cssxref("box-sizing")}}, while the right column uses this property with the value `border-box`. Notice how this lets us ensure that all of the elements occupy the same amount of space, despite the platform's default rules for each kind of widget.

### Positioning

Positioning of HTML form widgets is generally not a problem; however, there are two elements you should take special note of:

#### legend

The {{HTMLElement("legend")}} element is okay to style, except for positioning. In every browser, the {{HTMLElement("legend")}} element is positioned on top of the top border of its {{HTMLElement("fieldset")}} parent. There is absolutely no way to change it to be positioned within the HTML flow, away from the top border. You can, however, position it absolutely or relatively, using the {{cssxref("position")}} property. But otherwise it is part of the fieldset border.

Because the {{HTMLElement("legend")}} element is very important for accessibility reasons, it will be spoken by assistive technologies as part of the label of each form element inside the fieldset, it's quite often paired with a title, and then hidden in an accessible way. For example:

##### HTML

```html
<fieldset>
  <legend>Hi!</legend>
  <h1>Hello</h1>
</fieldset>
```

##### CSS

```css
legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

#### textarea

By default, all browsers consider the {{HTMLElement("textarea")}} element to be an inline block, aligned to the text bottom line. This is rarely what we actually want to see. To change from `inline-block` to `block`, it's pretty easy to use the {{cssxref("display")}} property. But if you want to use it inline, it's common to change the vertical alignment:

```css
textarea {
  vertical-align: top;
}
```

## Example

Let's look at a concrete example of how to style an HTML form. This will help make a lot of these ideas clearer. We will build the following "postcard" contact form:

![This is what we want to achieve with HTML and CSS](/files/4149/screenshot.png)

If you want to follow along with this example, make a local copy of our [postcard-start.html file](https://github.com/mdn/learning-area/blob/master/html/forms/postcard-example/postcard-start.html), and follow the below instructions.

### The HTML

The HTML is only slightly more involved than the example we used in [the first article of this guide](/ru/docs/HTML/Forms/My_first_HTML_form); it just has a few extra IDs and a title.

```html
<form>
  <h1>to: Mozilla</h1>

  <div id="from">
    <label for="name">from:</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div id="reply">
    <label for="mail">reply:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div id="message">
    <label for="msg">Your message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

Add the above code into the body of your HTML.

### Organizing your assets

This is where the fun begins! Before we start coding, we need three additional assets:

1. The postcard [background](/files/4151/background.jpg) — download this image and save it in the same directory as your working HTML file.
2. A typewriter font: [The "Secret Typewriter" font from fontsquirrel.com](http://www.fontsquirrel.com/fonts/Secret-Typewriter) — download the TTF file into the same directory as above.
3. A handdrawn font: [The "Journal" font from fontsquirrel.com](http://www.fontsquirrel.com/fonts/Journal) — download the TTF file into the same directory as above.

Your fonts need some more processing before you start:

1. Go to the fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
2. Using the form, upload both your font files and generate a webfont kit. Download the kit to your computer.
3. Unzip the provided zip file.
4. Inside the unzipped contents you will find two `.woff` files and two `.woff2` files. Copy these four files into a directory called fonts, in the same directory as before. We are using two different files for each font to maximise browser compatibility; see our [Web fonts](/ru/docs/Learn/CSS/Styling_text/Web_fonts) article for a lot more information.

### The CSS

Now we can dig into the CSS for the example. Add all the code blocks shown below inside the {{htmlelement("style")}} element, one after another.

First, we prepare the ground by defining our {{cssxref("@font-face")}} rules, all the basics on the {{HTMLElement("body")}} element, and the {{HTMLElement("form")}} element:

```css
@font-face {
  font-family: "handwriting";
  src:
    url("fonts/journal-webfont.woff2") format("woff2"),
    url("fonts/journal-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "typewriter";
  src:
    url("fonts/veteran_typewriter-webfont.woff2") format("woff2"),
    url("fonts/veteran_typewriter-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font: 21px sans-serif;

  padding: 2em;
  margin: 0;

  background: #222;
}

form {
  position: relative;

  width: 740px;
  height: 498px;
  margin: 0 auto;

  background: #fff url(background.jpg);
}
```

Now we can position our elements, including the title and all the form elements:

```css
h1 {
  position: absolute;
  left: 415px;
  top: 185px;

  font:
    1em "typewriter",
    sans-serif;
}

#from {
  position: absolute;
  left: 398px;
  top: 235px;
}

#reply {
  position: absolute;
  left: 390px;
  top: 285px;
}

#message {
  position: absolute;
  left: 20px;
  top: 70px;
}
```

That's where we start working on the form elements themselves. First, let's ensure that the {{HTMLElement("label")}}s are given the right font:

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

The text fields require some common rules. Simply put, we remove their {{cssxref("border","borders")}} and {{cssxref("background","backgrounds")}}, and redefine their {{cssxref("padding")}} and {{cssxref("margin")}}:

```css
input,
textarea {
  font:
    0.9em/1.5em "handwriting",
    sans-serif;

  border: none;
  padding: 0 10px;
  margin: 0;
  width: 240px;

  background: none;
}
```

When one of these fields gains focus, we highlight them with a light grey, transparent, background. Note that it's important to add the {{cssxref("outline")}} property, in order to remove the default focus highlight added by some browsers:

```css
input:focus,
textarea:focus {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
}
```

Now that our text fields are complete, we need to adjust the display of the single and multiple line text fields to match, since they won't typically look the same using the defaults.

The single-line text field needs some tweaks to render nicely in Internet Explorer. Internet Explorer does not define the height of the fields based on the natural height of the font (which is the behavior of all other browsers). To fix this, we need to add an explicit height to the field, as follows:

```css
input {
  height: 2.5em; /* for IE */
  vertical-align: middle; /* This is optional but it makes legacy IEs look better */
}
```

{{HTMLElement("textarea")}} elements default to being rendered as a block element. The two important things here are the {{cssxref("resize")}} and {{cssxref("overflow")}} properties. Because our design is a fixed-size design, we will use the `resize` property to prevent users from resizing our multi-line text field. The {{cssxref("overflow")}} property is used to make the field render more consistently across browsers. Some browsers default to the value `auto`, while some default to the value `scroll`. In our case, it's better to be sure every one will use `auto`:

```css
textarea {
  display: block;

  padding: 10px;
  margin: 10px 0 0 -10px;
  width: 340px;
  height: 360px;

  resize: none;
  overflow: auto;
}
```

The {{HTMLElement("button")}} element is really convenient with CSS; you can do whatever you want, even using [pseudo-elements](/ru/docs/CSS/Pseudo-elements):

```css
button {
  position: absolute;
  left: 440px;
  top: 360px;

  padding: 5px;

  font: bold 0.6em sans-serif;
  border: 2px solid #333;
  border-radius: 5px;
  background: none;

  cursor: pointer;

  -webkit-transform: rotate(-1.5deg);
  -moz-transform: rotate(-1.5deg);
  -ms-transform: rotate(-1.5deg);
  -o-transform: rotate(-1.5deg);
  transform: rotate(-1.5deg);
}

button:after {
  content: " >>>";
}

button:hover,
button:focus {
  outline: none;
  background: #000;
  color: #fff;
}
```

And voila!

> **Примечание:** If your example does not work quite like you expected and you want to check it against our version, you can find it on GitHub — see it [running live](https://mdn.github.io/learning-area/html/forms/postcard-example/) (also see [the source code](https://github.com/mdn/learning-area/tree/master/html/forms/postcard-example)).

## Conclusion

As you can see, as long as we want to build forms with just text fields and buttons, it's easy to style them using CSS. If you want to know more of the little CSS tricks that can make your life easier when working with form widgets, take a look at the form part of [the normalize.css project](http://necolas.github.com/normalize.css).

[In the next article](/ru/docs/Web/Guide/HTML/Forms/Advanced_styling_for_HTML_forms), we will see how to handle form widgets which fall in the "bad" and "ugly" categories.

{{PreviousMenuNext("Learn/HTML/Forms/HTML_forms_in_legacy_browsers", "Learn/HTML/Forms/Advanced_styling_for_HTML_forms", "Learn/HTML/Forms")}}

## In this module

- [Your first HTML form](/ru/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [How to structure an HTML form](/ru/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [The native form widgets](/ru/docs/Learn/HTML/Forms/The_native_form_widgets)
- [Sending form data](/ru/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
- [Form data validation](/ru/docs/Learn/HTML/Forms/Form_validation)
- [How to build custom form widgets](/ru/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [Sending forms through JavaScript](/ru/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [HTML forms in legacy browsers](/ru/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [Styling HTML forms](/ru/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [Advanced styling for HTML forms](/ru/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [Property compatibility table for form widgets](/ru/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
