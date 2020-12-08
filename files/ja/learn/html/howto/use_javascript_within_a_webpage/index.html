---
title: ウェブページで JavaScript を使う方法
slug: Learn/HTML/Howto/Use_JavaScript_within_a_webpage
tags:
  - Beginner
  - HTML
  - JavaScript
  - OpenPractices
translation_of: Learn/HTML/Howto/Use_JavaScript_within_a_webpage
---
<div class="summary">
<p>Take your webpages to the next level by harnessing JavaScript. Learn in this article how to trigger JavaScript right from your HTML documents.</p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td><a href="/ja//Learn/HTML/Write_a_simple_page_in_HTML">基本的な HTML 文書の作成</a>方法を習熟している必要があります。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>HTMLファイルからJavaScript を起動する方法と、JavaScript にアクセスできるようにする最も良い習慣を学ぶ。</td>
  </tr>
 </tbody>
</table>

<h2 id="About_JavaScript" name="About_JavaScript">JavaScript について</h2>

<p>{{Glossary("JavaScript")}} はウェブページをインタラクティブにするための、主にクライアントサイドで使われるプログラミング言語です。 JavaScript を使わなくてもすばらしいウェブページを作ることが<em>できます</em>が、JavaScript は全く新しいレベルの可能性を開きます。</p>

<div class="note">
<p>In this article we're going over the HTML code you need to make JavaScript take effect. If you want to learn JavaScript itself, you can start with our <a href="/ja//Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript basics</a> article. If you already know something about JavaScript or if you have a background with other プログラミング言語s, we suggest you jump directly into our <a href="/ja//docs/Web/JavaScript/Guide">JavaScript Guide</a>.</p>
</div>

<h2 id="How_to_trigger_JavaScript_from_HTML" name="How_to_trigger_JavaScript_from_HTML">HTML から JavaScript を起動する方法</h2>

<p>Within a browser, JavaScript doesn't do anything by itself. You run JavaScript from inside your HTML webpages. To call JavaScript code from within HTML, you need the {{htmlelement("script")}} element. There are two ways to use <code>script</code>, depending on whether you're linking to an external script or embedding a script right in your webpage.</p>

<h3 id="Linking_an_external_script" name="Linking_an_external_script">Linking an external script</h3>

<p>Usually, you'll be writing scripts in their own .js files. If you want to execute a .js script from your webpage, just use {{HTMLElement ('script')}} with an <code>src</code> attribute pointing to the script file, using its <a href="/ja//Learn/Understanding_URLs">URL</a>:</p>

<pre class="brush: html">&lt;script src="path/to/my/script.js"&gt;&lt;/script&gt;</pre>

<div class="note">
<p><strong>Pro tip:</strong> In many cases it's a good idea to put your {{HTMLElement('script')}} elements at the end of your HTML document (right before the <code>&lt;/body&gt;</code> closing {{Glossary("tag")}}).</p>

<p>Loading and running scripts is blocking and immediate. That means, every time the browser comes across a <code>&lt;script&gt;</code> element, the browser stops reading the HTML and instead loads and runs the script. The browser continues reading and rendering the HTML code after running the script.</p>

<p>When you put {{htmlelement("script")}} elements at the end, you don't run the risk of manipulating {{Glossary("DOM")}} nodes that are not yet initialized. In addition, your webpages will finish displaying faster.</p>
</div>

<h3 id="Writing_JavaScript_within_HTML" name="Writing_JavaScript_within_HTML">Writing JavaScript within HTML</h3>

<p>You may also add JavaScript code between <code>&lt;script&gt;</code> tags rather than providing an <code>src</code> attribute.</p>

<pre class="brush: html">&lt;script&gt;
window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
});
&lt;/script&gt;</pre>

<p>That's convenient when you just need a small bit of JavaScript, but if you keep JavaScript in separate files you'll find it easier to</p>

<ul>
 <li>focus on your work</li>
 <li>write self-sufficient HTML</li>
 <li>write structured JavaScript applications</li>
</ul>

<h2 id="Use_scripting_accessibly" name="Use_scripting_accessibly">Use scripting accessibly</h2>

<p>Accessibility is a major issue in any software development. JavaScript can make your website more accessible if you use it wisely, or it can become a disaster if you use scripting without care. To make JavaScript work in your favor, it's worth knowing about certain best practices for adding JavaScript:</p>

<ul>
 <li><strong>Make all content available as (structured) text.</strong> Rely on HTML for your content as much as possible. 例えば、 if you've implemented a nice JavaScript progress bar, make sure to supplement it with matching text percentages inside the HTML. Likewise, your drop-down menus should be structured as <a href="/ja//Learn/HTML/Howto/Create_list_of_items_with_HTML">unordered lists</a> of <a href="/ja//Learn/HTML/Howto/Create_a_hyperlink">links</a>.</li>
 <li><strong>Make all functionality accessible from the keyboard.</strong>
  <ul>
   <li>Let users Tab through all controls (e.g., links and form input) in a logical order.</li>
   <li>If you use pointer events (like mouse events or touch events), duplicate the functionality with keyboard events.</li>
   <li>Test your site using a keyboard only.</li>
  </ul>
 </li>
 <li><strong>Don't set nor even guess time limits.</strong> It takes extra time to navigate with the keyboard or hear content read out. You can hardly ever predict just how long it will take for users or browsers to complete an process (especially asynchronous actions such as loading resources).</li>
 <li><strong>Keep animations subtle and brief with no flashing.</strong> Flashing is annoying and can <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html">cause seizures</a>. Additionally, if an animation lasts more than a couple seconds, give the user a way to cancel it.</li>
 <li><strong>Let users initiate interactions.</strong> That means, don't update content, redirect, or refresh automatically. Don't use carousels or display popups without warning.</li>
 <li><strong>Have a plan B for users without JavaScript.</strong> People may have JavaScript turned off to improve speed and security, and users often face network issues that prevent loading scripts. Moreover, third-party scripts (ads, tracking scripts, browser extensions) might break your scripts.
  <ul>
   <li>At a minimum, leave a short message with {{HTMLElement("noscript")}} like this: <code>&lt;noscript&gt;To use this site, please enable JavaScript.&lt;/noscript&gt;</code></li>
   <li>Ideally, replicate the JavaScript functionality with HTML and server-side scripting when possible.</li>
   <li>If you're only looking for simple visual effects, CSS can often get the job done even more intuitively.</li>
   <li>
    <p><em>Since almost everybody <strong>does</strong> have JavaScript enabled, <code>&lt;noscript&gt;</code> is no excuse for writing inaccessible scripts.</em></p>
   </li>
  </ul>
 </li>
</ul>

<h2 id="Learn_more" name="Learn_more">Learn more</h2>

<ul>
 <li>{{htmlelement("script")}}</li>
 <li>{{htmlelement("noscript")}}</li>
 <li><a href="http://www.sitepoint.com/javascript-accessibility-101/">James Edwards' introduction to using JavaScript accessibly</a></li>
 <li><a href="http://www.w3.org/TR/WCAG20/">Accessibility guidelines from W3C</a></li>
</ul>
