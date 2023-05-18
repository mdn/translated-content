---
title: Advanced text formatting
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

There are many other elements in HTML for formatting text, which we didn't get to in the [HTML text fundamentals](/zh-TW/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) article. The elements described in this article are less well-known, but still useful to know about (and this is still not a complete list by any means.) In here you'll learn about marking up quotations, description lists, computer code and other related text, subscript and superscript, contact information, and more.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic HTML familiarity, as covered in
        <a href="/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Getting started with HTML</a
        >. HTML text formatting, as covered in
        <a
          href="/zh-TW/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML text fundamentals</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn how to use lesser-known HTML elements to mark up advanced
        semantic features.
      </td>
    </tr>
  </tbody>
</table>

## 說明列表

In HTML text fundamentals, we walked through how to [mark up basic lists](/zh-TW/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Lists) in HTML, but we didn't mention the third type of list you'll occasionally come across — **description lists**. The purpose of these lists is to mark up a set of items and their associated descriptions, such as terms and definitions, or questions and answers. Let's look at an example of a set of terms and definitions:

```
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

Description lists use a different wrapper than the other list types — {{htmlelement("dl")}}; in addition each term is wrapped in a {{htmlelement("dt")}} (description term) element, and each description is wrapped in a {{htmlelement("dd")}} (description description) element. Let's finish marking up our example:

```html
<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought or piece of
    additional background information.
  </dd>
</dl>
```

The browser default styles will display description lists with the descriptions indented somewhat from the terms. MDN's styles follow this convention fairly closely, but also embolden the terms for extra definition.

- soliloquy
  - : In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
- monologue
  - : In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
- aside
  - : In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of addtional background information.

Note that it is permitted to have a single term with multiple descriptions, for example:

- aside
  - : In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information.
    In writing, a section of content that is related to the current topic, but doesn't fit directly into the main flow of content so is presented nearby (often in a box off to the side.)

### Active learning: Marking up a set of definitions

It's time to try your hand at description lists; add elements to the raw text in the _Input_ field so that it appears as a description list in the _Output_ field. You could try using your own terms and descriptions if you like.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to see the answer.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">
Bacon
The glue that binds the world together.
Eggs
The glue that binds the cake together.
Coffee
The drink that gets the world running in the morning.
A light brown color.
</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    "<dl>\n  <dt>Bacon</dt>\n  <dd>The glue that binds the world together.</dd>\n  <dt>Eggs</dt>\n  <dd>The glue that binds the cake together.</dd>\n  <dt>Coffee</dt>\n  <dd>The drink that gets the world running in the morning.</dd>\n  <dd>A light brown color.</dd>\n</dl>";
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Active learning: Marking up a set of definitions', 700, 500) }}

## Quotations

HTML also has features available for marking up quotations; which element you use depends on whether you are marking up a block or inline quotation.

### Blockquotes

If a section of block level content (be it a paragraph, multiple paragraphs, a list, etc.) is quoted from somewhere else, you should wrap it inside a {{htmlelement("blockquote")}} element to signify this, and include a URL pointing to the source of the quote inside a [`cite`](/zh-TW/docs/Web/HTML/Element/blockquote#cite) attribute. For example, the following markup is taken from the MDN `<blockquote>` element page:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

To turn this into a block quote, we would just do this:

```html
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

Browser default styling will render this as an indented paragraph, as an indicator that it is a quote; MDN does this, but also adds some extra styling:

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline quotations

Inline quotations work in exactly the same way, except that they use the {{htmlelement("q")}} element. For example, the below bit of markup contains a quotation from the MDN `<q>` page:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
</p>
```

Browser default styling will render this as normal text put in quotes to indicate a quotation, like so:

{{EmbedLiveSample('Inline quotations', '100%', '78px')}}

### Citations

The content of the [`cite`](/zh-TW/docs/Web/HTML/Element/blockquote#cite) attribute sounds useful, but unfortunately browsers, screenreaders, etc. don't really do much with it. There is no way to get the browser to display the contents of `cite`, without writing your own solution using JavaScript or CSS. If you want to make the source of the quotation available on the page, a better way to mark it up is put the {{htmlelement("cite")}} element next to the quote element. This is really meant to contain the name of the quote source — i.e. the name of the book, or name of the person that said the quote — but there is no reason why you couldn't link the text inside `<cite>` to the quote source in some way:

```html
<p>
  According to the
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
    <cite>MDN blockquote page</cite></a
  >:
</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
  --
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    <cite>MDN q page</cite></a
  >.
</p>
```

Citations are styled in italic font by default. You can see this code at work in our [quotations.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/quotations.html) example.

### Active learning: Who said that?

Time for another active learning example! In this example we'd like you to:

1. Turn the middle paragraph into a blockquote, which includes a `cite` attribute.
2. Turn part of the third paragraph into an inline quote, which includes a `cite` attribute.
3. Include a `<cite>` element for each quote

Search online to find appropriate quote sources.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to see the answer.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">
<p>Hello and welcome to my motivation page. As Confucius once said:</p>

<p>It does not matter how slowly you go as long as you do not stop.</p>

<p>I also love the concept of positive thinking, and The Need To Eliminate Negative Self Talk
(as mentioned in Affirmations for Positive Thinking.)</p></textarea
>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<p>Hello and welcome to my motivation page. As <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius</cite></a> once said:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n  <p>It does not matter how slowly you go as long as you do not stop.</p>\n</blockquote>\n\n<p>I also love the concept of positive thinking, and <q cite="http://www.affirmationsforpositivethinking.com/index.htm">The Need To Eliminate Negative Self Talk</q> (as mentioned in <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Active learning: Who said that?', 700, 500) }}

## Abbreviations

Another fairly common element you'll meet when looking around the Web is {{htmlelement("abbr")}} — this is used to wrap around an abbreviation or acronym, and provide a full expansion of the term (included inside a [`title`](/zh-TW/docs/Web/HTML/Global_attributes#title) attribute.) Let's look at a couple of examples:

```html
<p>
  We use <abbr title="Hypertext Markup Language">HTML</abbr> to structure our
  web documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>
```

These will come out looking something like this (the expansion will appear in a tooltip when the term is hovered over):

We use HTML to structure our web documents.

I think Rev. Green did it in the kitchen with the chainsaw.

> **備註：** There is another element, {{htmlelement("acronym")}}, which basically does the same thing as `<abbr>`, and was intended specifically for acronyms rather than abbreviations. This however has fallen into disuse — it wasn't supported as well in browsers as well as `<abbr>`, and has such as similar function that it was felt pointless to have both. Just use `<abbr>` instead.

### Active learning: marking up an abbreviation

For this simple active learning assignment, we'd like you to simply mark up an abbreviation. You can use our sample below, or replace it with one of your own.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">
<p>NASA sure does some exciting work.</p></textarea
>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 5em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<p><abbr title="National Aeronautics and Space Administration">NASA</abbr> sure does some exciting work.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Active learning: marking up an abbreviation', 700, 350) }}

## Marking up contact details

HTML has an element for marking up contact details — {{htmlelement("address")}}. This simply wraps around your contact details, for example:

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

One thing to remember however is that the \<address> element is meant for marking up the contact details of the person who wrote the HTML document, not _any_ address. So the above would only be ok if Chris had written the document the markup appears on. Note that something like this would also be ok:

```html
<address>
  <p>Page written by <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>
```

## Superscript and subscript

You will occasionally need to use superscript and subscript when marking up items like dates, chemical formulae, and mathematical equations so they have the correct meaning. The {{htmlelement("sup")}} and {{htmlelement("sub")}} elements handle this job. For example:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

The output of this code looks like so:

My birthday is on the 25<sup>th</sup> of May 2001.

Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.

If x<sup>2</sup> is 9, x must equal 3 or -3.

## Representing computer code

There are a number of elements available for marking up computer code:

- {{htmlelement("code")}}: For making up generic pieces of computer code.
- {{htmlelement("pre")}}: For marking up blocks of fixed width text, in which the whitespace is retained (generally code blocks.)
- {{htmlelement("var")}}: For specifically marking up variable names.
- {{htmlelement("kbd")}}: For marking up keyboard (and other types of) input entered into the computer.
- {{htmlelement("samp")}}: For marking up the output of a computer program.

Let's look at a few examples. You should try having a play with these (try grabbing a copy of our [other-semantics.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html) sample file):

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

The above code will look like so:

{{ EmbedLiveSample('Representing_computer_code','100%',300) }}

## Marking up times and dates

HTML also provides the {{htmlelement("time")}} element for marking up times and dates in a machine-readable format. For example:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Why is this useful? Well, there are many different ways that humans write down dates. The above date could be written as:

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/06/16
- 06/20/16
- The 20th of next month
- 20e Janvier 2016
- 2016 年 1 月 20 日
- And so on

But these different forms cannot be easily recognised by the computers — what if you wanted to automatically grab the dates of all events in a page and insert them into a calendar? The {{htmlelement("time")}} element allows you to attach a unambiguous, machine-readable time/date for this purpose.

The basic example above just provides a simple machine readable date, but there are many other options that are possible, for example:

```html
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset-->
<time datetime="2016-01-20T19:30+01:00"
  >7.30pm, 20 January 2016 is 8.30pm in France</time
>
<!-- Calling out a specific week number-->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## Summary

That marks the end of our study of HTML text semantics. Bear in mind that what you have seen during this course is not an exhaustive list of HTML text elements — we wanted to try to cover the essentials, and some of the more common ones you will see in the wild, or at least might find interesting. To find way more HTML elements, you can take a look at our [HTML element reference](/zh-TW/docs/Web/HTML/Element) (the [Inline text semantics](/zh-TW/docs/Web/HTML/Element#Inline_text_semantics) section would be a great place to start.) In the next article we will look at the HTML elements you'd use to structure the different parts of an HTML document.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
