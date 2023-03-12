---
title: 從物件到iframe - 其他嵌入技術
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
original_slug: Learn/HTML/Multimedia_and_embedding/其他_嵌入_技術
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

到現在為止，您應該真正掌握了將內容嵌入網頁的方法，包括圖片，影片和聲音。在這一點上，我們想採取一些橫向的措施，尋找一些元素，使您可以將各種內容類型嵌入到網頁中： {{htmlelement("iframe")}}, {{htmlelement("embed")}} 和 {{htmlelement("object")}} 元素。`<iframe>`用於嵌入其他網頁，另外兩個用於嵌入 PDF，SVG 甚至是 Flash（這項技術正在淘汰，但您仍會半定期看到）。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/zh-TW/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, basic knowledge of
        <a href="/zh-TW/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >, familiarity with HTML fundamentals (as covered in
        <a href="/zh-TW/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Getting started with HTML</a
        >) and the previous articles in this module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn how to embed items into web pages using
        {{htmlelement("object")}}, {{htmlelement("embed")}}, and
        {{htmlelement("iframe")}}, like Flash movies and other webpages.
      </td>
    </tr>
  </tbody>
</table>

## A short history of embedding

A long time ago on the Web, it was popular to use **frames** to create websites — small parts of a website stored in individual HTML pages. These were embedded in a master document called a **frameset**, which allowed you to specify the area on the screen that each frame filled, rather like sizing the columns and rows of a table. These were considered the height of coolness in the mid to late 90s, and there was evidence that having a webpage split up into smaller chunks like this was better for download speeds — especially noticeable with network connections being so slow back then. They did however have many problems, which far outweighed any positives as network speeds got faster, so you don't see them being used anymore.

A little while later (late 90s, early 2000s), plugin technologies became very popular, such as [Java Applets](/zh-TW/docs/Glossary/Java) and [Flash](/zh-TW/docs/Glossary/Adobe_Flash) — these allowed web developers to embed rich content into webpages such as videos and animations, which just weren't available through HTML alone. Embedding these technologies was achieved through elements like {{htmlelement("object")}}, and the lesser-used {{htmlelement("embed")}}, and they were very useful at the time. They have since fallen out of fashion due to many problems, including accessibility, security, file size, and more; these days most mobile devices don't support such plugins anymore, and desktop support is on the way out.

Finally, the {{htmlelement("iframe")}} element appeared (along with other ways of embedding content, such as {{htmlelement("canvas")}}, {{htmlelement("video")}}, etc.) This provides a way to embed an entire web document inside another one, as if it were an {{htmlelement("img")}} or other such element, and is used regularly today.

With the history lesson out of the way, let's move on and see how to use some of these.

## Active learning: classic embedding uses

In this article we are going to jump straight into an active learning section, to immediately give you a real idea of just what embedding technologies are useful for. The online world is very familiar with [Youtube](https://www.youtube.com), but many people don't know about some of the sharing facilities it has available. Let's look at how Youtube allows us to embed a video in any page we like using an {{htmlelement("iframe")}}.

1. First, go to Youtube and find a video you like.
2. Below the video, you'll find a _Share_ button — select this to display the sharing options.
3. Select the _Embed_ button and you'll be given some `<iframe>` code — copy this.
4. Insert it into the _Input_ box below, and see what the result is in the _Output_.

For bonus points, you could also try embedding a [Google Map](https://www.google.com/maps/) in the example:

1. Go to Google Maps and find a map you like.
2. Click on the "Hamburger Menu" (three horizontal lines) in the top left of the UI.
3. Select the _Share or embed map_ option.
4. Select the Embed map option, which will give you some `<iframe>` code — copy this.
5. Insert it into the _Input_ box below, and see what the result is in the _Output_.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to see an answer.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 250px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="width: 95%;min-height: 100px;">
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
const output = document.querySelector('.output');
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

const htmlSolution = '<iframe width="420" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen>\n</iframe>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3A0xf82fddd1e49fc0a1!2sThe+Lowry!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>\n</iframe>';
let solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  const caretPos = textarea.selectionStart;

  const front = (textarea.value).substring(0, caretPos);
  const back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active learning: classic embedding uses', 700, 600) }}

## Iframes in detail

So, that was easy and fun, right? {{htmlelement("iframe")}} elements are designed to allow you to embed other web documents into the current document. This is great for incorporating third-party content into your website that you might not have direct control over and don't want to have to implement your own version of — such as video from online video providers, commenting systems like [Disqus](https://disqus.com/), maps from online map providers, advertising banners, etc. The live editable examples you've been using through this course are implemented using `<iframe>`s.

There are some serious [Security concerns](#security_concerns) to consider with `<iframe>`s, as we'll discuss below, but this doesn't mean that you shouldn't use them in your websites — it just requires some knowledge and careful thinking. Let's explore the code in a bit more detail. Say you wanted to include the MDN glossary on one of your web pages — you could try something like this:

```html
<iframe src="https://developer.mozilla.org/en-US/docs/Glossary"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary">
        Fallback link for browsers that don't support iframes
    </a>
  </p>
</iframe>
```

This example includes the basic essentials needed to use an `<iframe>`:

- {{htmlattrxref('allowfullscreen','iframe')}}
  - : If set, the `<iframe>` is able to be placed in fullscreen mode using the [Full Screen API](/zh-TW/docs/Web/API/Fullscreen_API) (somewhat beyond scope for this article.)
- {{htmlattrxref('frameborder','iframe')}}
  - : If set to 1, this tells the browser to draw a border between this frame and other frames, which is the default behaviour. 0 removes the border. Using this isn't really recommended any more, as the same effect can be better achieved using {{cssxref('border')}}`: none;` in your {{Glossary('CSS')}}.
- {{htmlattrxref('src','iframe')}}
  - : This attribute, as with {{htmlelement("video")}}/{{htmlelement("img")}}, contains a path pointing to the URL of the document to be embedded.
- {{htmlattrxref('width','iframe')}} and {{htmlattrxref('height','iframe')}}
  - : These attributes specify the width and height you want the iframe to be.
- **F**allback content
  - : In the same way as other similar elements like {{htmlelement("video")}}, you can include fallback content between the opening and closing `<iframe></iframe>` tags that will appear if the browser doesn't support the `<iframe>`. In this case, we have included a link to the page instead. It is unlikely that you'll come across any browser that doesn't support `<iframe>`s these days.
- {{htmlattrxref('sandbox','iframe')}}
  - : This attribute, which works in slightly more modern browsers than the rest of the `<iframe>` features (e.g. IE 10 and above) requests heightened security settings; we'll say more about this in the next section.

> **備註：** In order to improve speed, it's a good idea to set the iframe's `src` attribute with JavaScript after the main content is done with loading. This makes your page usable sooner and decreases your official page load time (an important {{glossary("SEO")}} metric.)

### Security concerns

Above we mentioned security concerns — let's go into this in a bit more detail now. We are not expecting you to understand all of this content perfectly the first time; we just want to make you aware of this concern, and provide a reference to come back to as you get more experienced and start considering using `<iframe>`s in your experiments and work. Also, there is no need to be scared and not use `<iframe>`s — you just need to be careful. Read on...

Browser makers and Web developers have learned the hard way that iframes are a common target (official term: **attack vector**) for bad people on the Web (often termed **hackers**, or more accurately, **crackers**) to attack if they are trying to maliciously modify your webpage, or trick people into doing something they don't want to do, such as reveal sensitive information like usernames and passwords. Because of this, spec engineers and browser developers have developed various security mechanisms for making `<iframe>`s more secure, and there are also best practices to consider — we'll cover some of these below.

> **備註：** [Clickjacking](https://zh.wikipedia.org/wiki/Clickjacking) is one kind of common iframe attack where hackers embed an invisible iframe into your document (or embed your document into their own malicious website) and use it to capture users' interactions. This is a common way to mislead users or steal sensitive data.

A quick example first though — try loading the previous example we showed above into your browser — you can [find it live on Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) ([see the source code](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html) too.) You won't actually see anything displayed on the page, and if you look at the _Console_ in the [browser developer tools](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools), you'll see a message telling you why. In Firefox, you'll get told _Load denied by X-Frame-Options: "https://developer.mozilla.org/en-US/docs/Glossary" does not permit framing_. This is because the developers that built MDN have included a setting on the server that serves the website pages to disallow them from being embedded inside `<iframe>`s (see [Configure CSP directives](#configure_csp_directives), below.) This makes sense — an entire MDN page doesn't really make sense to be embedded in other pages unless you want to do something like embed them on your site and claim them as your own — or attempt to steal data via clickjacking, which are both really bad things to do. Plus if everybody started to do this, all the additional bandwidth would start to cost Mozilla a lot of money.

#### Only embed when necessary

Sometimes it makes sense to embed third-party content — like youtube videos and maps — but you can save yourself a lot of headaches if you only embed third-party content when completely necessary. A good rule of thumb for web security is _"You can never be too cautious. If you made it, double-check it anyway. If someone else made it, assume it's dangerous until proven otherwise."_

Besides security, you should also be aware of intellectual property issues. Most content is copyrighted, offline and online, even content you might not expect (for example, most images on [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)). Never display content on your webpage unless you own it or the owners have given you written, unequivocal permission. Penalties for copyright infringement are severe. Again, you can never be too cautious.

If the content is licensed, you must obey the license terms. For example, the content on MDN is [licensed under CC-BY-SA](/zh-TW/docs/MDN/About#Copyrights_and_licenses). That means, you must [credit us properly](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution) when you quote our content, even if you make substantial changes.

#### Use HTTPS

{{Glossary("HTTPS")}} is the encrypted version of {{Glossary("HTTP")}}. You should serve your websites using HTTPS whenever possible:

1. HTTPS reduces the chance that remote content has been tampered with in transit,
2. HTTPS prevents embedded content from accessing content in your parent document, and vice versa.

Using HTTPS requires a security certificate, which can be expensive (although [Let's Encrypt](https://letsencrypt.org/) makes things easier) — if you can't get one, you may serve your parent document with HTTP. However, because of the second benefit of HTTPS above, _no matter what the cost, you must never embed third-party content with HTTP._ (In the best case scenario, your user's Web browser will give them a scary warning.) All reputable companies that make content available for embedding via an `<iframe>` will make it available via HTTPS — look at the URLs inside the `<iframe>` `src` attribute when you are embedding content from Google Maps or Youtube, for example.

> **備註：** [Github pages](/zh-TW/docs/Learn/Common_questions/Using_Github_pages) allow content to be served via HTTPS by default, so is useful for hosting content. If you are using different hosting and are not sure, ask your hosting provider about it.

#### Always use the `sandbox` attribute

You want to give attackers as little power as you can to do bad things on your website, therefore you should give embedded content _only the permissions needed for doing its job._ Of course, this applies to your own content, too. A container for code where it can be used appropriately — or for testing — but can't cause any harm to the rest of the codebase (either accidental or malicious) is called a [sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>).

Unsandboxed content can do way too much (executing JavaScript, submitting forms, popup windows, etc.) By default, you should impose all available restrictions by using the `sandbox` attribute with no parameters, as shown in our previous example.

If absolutely required, you can add permissions back one by one (inside the `sandbox=""` attribute value) — see the {{htmlattrxref('sandbox','iframe')}} reference entry for all the available options. One important note is that you should _never_ add both `allow-scripts` and `allow-same-origin` to your `sandbox` attribute — in that case, the embedded content could bypass the [Same-origin policy](/zh-TW/docs/Glossary/Same-origin_policy) that stops sites from executing scripts, and use JavaScript to turn off sandboxing altogether.

> **備註：** Sandboxing provides no protection if attackers can fool people into visiting malicious content directly (outside an `iframe`). If there's any chance that certain content may be malicious (e.g., user-generated content), please serve it from a different {{glossary("domain")}} to your main site.

#### Configure CSP directives

{{Glossary("CSP")}} stands for **[content security policy](/zh-TW/docs/Web/Security/CSP)** and provides [a set of HTTP Headers](/zh-TW/docs/Web/Security/CSP/CSP_policy_directives) (metadata sent along with your web pages when they are served from a web server) designed to improve the security of your HTML document. When it comes to securing `<iframe>`s, you can _[configure your server to send an appropriate `X-Frame-Options` header.](/zh-TW/docs/Web/HTTP/X-Frame-Options)_ This can prevent other websites from embedding your content in their web pages (which would enable [clickjacking](https://zh.wikipedia.org/wiki/clickjacking) and a host of other attacks), which is exactly what the MDN developers have done, as we saw earlier on.

> **備註：** You can read Frederik Braun's post [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/) for more background information on this topic. Obviously, it's rather out of scope for a full explanation in this article.

## The \<embed> and \<object> elements

The {{htmlelement("embed")}} and {{htmlelement("object")}} elements serve a different function to {{htmlelement("iframe")}} — these elements are general purpose embedding tools for embedding multiple types of external content, which include plugin technologies like Java Applets and Flash, PDF (which can be shown in a browser with a PDF plugin), and even content like videos, SVG and images!

> **備註：** A **plugin**, in this context, refers to software that provides access to content the browser cannot read natively.

However, you are unlikely to use these elements very much — Applets haven't been used for years, Flash is no longer very popular, due to a number of reasons (see [The case against plugins](#the_case_against_plugins), below), PDFs tend to be better linked to than embedded, and other content such as images and video have much better, easier elements to handle those. Plugins and these embedding methods are really a legacy technology, and we are mainly mentioning them in case you come across them in certain circumstances like intranets, or enterprise projects.

If you find yourself needing to embed plugin content, this is the kind of information you'll need, at a minimum:

|                                                                                         | {{htmlelement("embed")}}                                                          | {{htmlelement("object")}}                                                              |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| {{glossary("URL")}} of the embedded content                                        | {{htmlattrxref('src','embed')}}                                                  | {{htmlattrxref('data','object')}}                                                  |
| _accurate_ {{glossary("MIME type", 'media type')}} of the embedded content | {{htmlattrxref('type','embed')}}                                              | {{htmlattrxref('type','object')}}                                                  |
| height and width (in CSS pixels) of the box controlled by the plugin                    | {{htmlattrxref('height','embed')}} {{htmlattrxref('width','embed')}} | {{htmlattrxref('height','object')}} {{htmlattrxref('width','object')}} |
| names and values, to feed the plugin as parameters                                      | ad hoc attributes with those names and values                                             | single-tag {{htmlelement("param")}} elements, contained within `<object>`             |
| independent HTML content as fallback for an unavailable resource                        | not supported (`<noembed>` is obsolete)                                                   | contained within `<object>`, after `<param>` elements                                         |

> **備註：** `<object>` requires a `data` attribute, a `type` attribute, or both. If you use both, you may also use the {{htmlattrxref('typemustmatch','object')}} attribute (only implemented in Firefox and Chrome, as of this writing). `typemustmatch` keeps the embedded file from running unless the `type` attribute provides the correct media type. `typemustmatch` can therefore confer significant security benefits when you're embedding content from a different {{glossary("origin")}} (it can keep attackers from running arbitrary scripts through the plugin).

Here's an example that uses the {{htmlelement("embed")}} element to embed a Flash movie (see this [live on Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/embed-flash.html), and [check the source code](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/embed-flash.html) too):

```html
<embed src="whoosh.swf" quality="medium"
       bgcolor="#ffffff" width="550" height="400"
       name="whoosh" align="middle" allowScriptAccess="sameDomain"
       allowFullScreen="false" type="application/x-shockwave-flash"
       pluginspage="http://www.macromedia.com/go/getflashplayer">
```

Pretty horrible, isn't it? The HTML generated by the Adobe Flash tool tended to be even worse, using an `<object>` element with an `<embed>` element embedded in it, to cover all bases (check out an example.) Flash was even used successfully as fallback content for HTML5 video, for a time, but this is increasingly being seen as not necessary.

Now let's look at an `<object>` example that embeds a PDF into a page (see the [live example](http://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html) and the [source code](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)):

```html
<object data="mypdf.pdf" type="application/pdf"
        width="800" height="1200" typemustmatch>
  <p>You don't have a PDF plugin, but you can
    <a href="mypdf.pdf">download the PDF file.
    </a>
  </p>
</object>
```

PDFs were a necessary stepping stone between paper and digital, but they pose many [accessibility challenges](http://webaim.org/techniques/acrobat/acrobat) and can be hard to read on small screens. They do still tend to be popular in some circles, but it is much better to link to them so they can be downloaded or read on a separate page, rather than embedding them in a webpage.

### The case against plugins

Once upon a time, plugins were indispensable on the Web. Remember the days when you had to install Adobe Flash Player just to watch a movie online? And then you constantly got annoying alerts about updating Flash Player and your Java Runtime Environment. Web technologies have since grown much more robust, and those days are over. For virtually all applications, it's time to stop delivering content that depends on plugins and start taking advantage of Web technologies instead.

- **Broaden your reach to everyone.** Everyone has a browser, but plugins are increasingly rare, especially among mobile users. Since the Web is easily used without any plugins, people would rather just go to your competitors' websites than install a plugin.
- **Give yourself a break from the [extra accessibility headaches](https://webaim.org/techniques/flash/) that come with Flash and other plugins.**
- **Stay clear of additional security hazards.** Adobe Flash is [notoriously insecure,](https://www.cvedetails.com/product/6761/Adobe-Flash-Player.html?vendor_id=53) even after countless patches. In 2015, Alex Stamos, then-Chief Security Officer at Facebook, [requested that Adobe discontinue Flash.](https://www.theverge.com/2015/7/13/8948459/adobe-flash-insecure-says-facebook-cso)

> **備註：** Due to its inherent issues and the lack of support for Flash, Adobe announced that they would stop supporting it at the end of 2020. As of January 2020, most browsers block Flash content by default, and by December 31st of 2020, all browsers will have completly removed all Flash functionality. Any existing Flash content will be inaccessable after that date.

So what should you do? If you need interactivity, HTML and {{glossary("JavaScript")}} can readily get the job done for you with no need for Java applets or outdated ActiveX/BHO technology. Instead of relying on Adobe Flash, you should use [HTML5 video](/zh-TW/docs/Learn/HTML/Howto/Add_audio_or_video_content_to_a_webpage) for your media needs, [SVG](/zh-TW/docs/Learn/HTML/Howto/Add_vector_image_to_a_webpage) for vector graphics, and [Canvas](/zh-TW/docs/Web/API/Canvas_API/Tutorial) for complex images and animations. [Peter Elst was already writing some years ago](https://plus.google.com/+PeterElst/posts/P5t4pFhptvp) that Adobe Flash is rarely the right tool for the job. As for ActiveX, even Microsoft's {{glossary("Microsoft Edge","Edge")}} browser no longer supports it.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Multimedia and embedding](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding).

## Summary

The topic of embedding other content in web documents can quickly become very complex, so in this article, we've tried to introduce it in a simple, familiar way that will immediately seem relevant, while still hinting at some of the more advanced features of the involved technologies. To start with, you are unlikely to use embedding for much beyond including third-party content like maps and videos on your pages. As you become more experienced, however, you are likely to start finding more uses for them.

There are many other technologies that involve embedding external content besides the ones we discussed here. We saw some in earlier articles, such as {{htmlelement("video")}}, {{htmlelement("audio")}}, and {{htmlelement("img")}}, but there are others to discover, such as {{htmlelement("canvas")}} for JavaScript-generated 2D and 3D graphics, and {{SVGElement("svg")}} for embedding vector graphics. We'll look at [SVG](/zh-TW/docs/Web/SVG) in the next article of the module.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
