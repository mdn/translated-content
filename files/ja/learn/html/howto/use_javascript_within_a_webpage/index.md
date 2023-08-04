---
title: ウェブページで JavaScript を使う方法
slug: Learn/HTML/Howto/Use_JavaScript_within_a_webpage
---

Take your webpages to the next level by harnessing JavaScript. Learn in this article how to trigger JavaScript right from your HTML documents.

| 前提条件: | [基本的な HTML 文書の作成](/ja//Learn/HTML/Write_a_simple_page_in_HTML)方法を習熟している必要があります。 |
| --------- | --------------------------------------------------------------------------------------------------------- |
| 目的:     | HTML ファイルから JavaScript を起動する方法と、JavaScript にアクセスできるようにする最も良い習慣を学ぶ。  |

## JavaScript について

{{Glossary("JavaScript")}} はウェブページをインタラクティブにするための、主にクライアントサイドで使われるプログラミング言語です。 JavaScript を使わなくてもすばらしいウェブページを作ることが*できます*が、JavaScript は全く新しいレベルの可能性を開きます。

> **メモ:** In this article we're going over the HTML code you need to make JavaScript take effect. If you want to learn JavaScript itself, you can start with our [JavaScript basics](/ja//Learn/Getting_started_with_the_web/JavaScript_basics) article. If you already know something about JavaScript or if you have a background with other プログラミング言語 s, we suggest you jump directly into our [JavaScript Guide](/ja//docs/Web/JavaScript/Guide).

## HTML から JavaScript を起動する方法

Within a browser, JavaScript doesn't do anything by itself. You run JavaScript from inside your HTML webpages. To call JavaScript code from within HTML, you need the {{htmlelement("script")}} element. There are two ways to use `script`, depending on whether you're linking to an external script or embedding a script right in your webpage.

### Linking an external script

Usually, you'll be writing scripts in their own .js files. If you want to execute a .js script from your webpage, just use {{HTMLElement ('script')}} with an `src` attribute pointing to the script file, using its [URL](/ja//Learn/Understanding_URLs):

```html
<script src="path/to/my/script.js"></script>
```

> **メモ:** **Pro tip:** In many cases it's a good idea to put your {{HTMLElement('script')}} elements at the end of your HTML document (right before the `</body>` closing {{Glossary("tag")}}).
>
> Loading and running scripts is blocking and immediate. That means, every time the browser comes across a `<script>` element, the browser stops reading the HTML and instead loads and runs the script. The browser continues reading and rendering the HTML code after running the script.
>
> When you put {{htmlelement("script")}} elements at the end, you don't run the risk of manipulating {{Glossary("DOM")}} nodes that are not yet initialized. In addition, your webpages will finish displaying faster.

### Writing JavaScript within HTML

You may also add JavaScript code between `<script>` tags rather than providing an `src` attribute.

```html
<script>
  window.addEventListener("load", function () {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

That's convenient when you just need a small bit of JavaScript, but if you keep JavaScript in separate files you'll find it easier to

- focus on your work
- write self-sufficient HTML
- write structured JavaScript applications

## Use scripting accessibly

Accessibility is a major issue in any software development. JavaScript can make your website more accessible if you use it wisely, or it can become a disaster if you use scripting without care. To make JavaScript work in your favor, it's worth knowing about certain best practices for adding JavaScript:

- **Make all content available as (structured) text.** Rely on HTML for your content as much as possible. 例えば、 if you've implemented a nice JavaScript progress bar, make sure to supplement it with matching text percentages inside the HTML. Likewise, your drop-down menus should be structured as [unordered lists](/ja//Learn/HTML/Howto/Create_list_of_items_with_HTML) of [links](/ja//Learn/HTML/Howto/Create_a_hyperlink).
- **Make all functionality accessible from the keyboard.**

  - Let users Tab through all controls (e.g., links and form input) in a logical order.
  - If you use pointer events (like mouse events or touch events), duplicate the functionality with keyboard events.
  - Test your site using a keyboard only.

- **Don't set nor even guess time limits.** It takes extra time to navigate with the keyboard or hear content read out. You can hardly ever predict just how long it will take for users or browsers to complete an process (especially asynchronous actions such as loading resources).
- **Keep animations subtle and brief with no flashing.** Flashing is annoying and can [cause seizures](http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Additionally, if an animation lasts more than a couple seconds, give the user a way to cancel it.
- **Let users initiate interactions.** That means, don't update content, redirect, or refresh automatically. Don't use carousels or display popups without warning.
- **Have a plan B for users without JavaScript.** People may have JavaScript turned off to improve speed and security, and users often face network issues that prevent loading scripts. Moreover, third-party scripts (ads, tracking scripts, browser extensions) might break your scripts.

  - At a minimum, leave a short message with {{HTMLElement("noscript")}} like this: `<noscript>To use this site, please enable JavaScript.</noscript>`
  - Ideally, replicate the JavaScript functionality with HTML and server-side scripting when possible.
  - If you're only looking for simple visual effects, CSS can often get the job done even more intuitively.
  - _Since almost everybody **does** have JavaScript enabled, `<noscript>` is no excuse for writing inaccessible scripts._

## Learn more

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [James Edwards' introduction to using JavaScript accessibly](http://www.sitepoint.com/javascript-accessibility-101/)
- [Accessibility guidelines from W3C](http://www.w3.org/TR/WCAG20/)
