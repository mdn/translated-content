---
title: HTML 디버깅
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
translation_of: Learn/HTML/Introduction_to_HTML/Debugging_HTML
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}</div>

<p class="summary">HTML을 작성을 할 수 있지만, 문제가 생겼을 때  코드의 오류가 발생한 부분을 해결할 수 없나요? 이 기사에서는 HTML의 오류를 찾고 수정하는 데 도움이되는 몇 가지 도구를 소개합니다.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">선행사항:</th>
   <td>HTML이 익숙해야 합니다. 다음문서를 이해하는 정도면 충분합니다. <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started">HTML로 시작하기</a>, <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML 텍스트 기본사항</a>, and <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">하이파링크 만들기</a>.</td>
  </tr>
  <tr>
   <th scope="row">목표:</th>
   <td>HTMl에서 문제를 찾기위해 디버깅 툴을 사용하는 기본적인 방법을 배웁니다.</td>
  </tr>
 </tbody>
</table>

<h2 id="디버깅은_무섭지_않아요.">디버깅은 무섭지 않아요.</h2>

<p>여러분이 원하든 원하지않든 무언가 잘못되면 코드가 동작하지 않거나 검파일 애러가 나는 무시무시한 순간이 다가옵니다. 다음과 같이 말이죠</p>

<p>아래는 <a href="https://www.rust-lang.org/">Rust</a> 언어로 작성된 간단한 프로그램을 {{glossary ( "compile")}}할 때 발생한 오류를 보여줍니다.</p>

<p><img alt="A console window showing the result of trying to compile a rust program with a missing quote around a string in a print statement. The error message reported is error: unterminated double quote string." src="https://mdn.mozillademos.org/files/12435/error-message.png" style="display: block; height: 520px; margin: 0px auto; width: 711px;"></p>

<p>여기나온 오류 메시지는 상대적으로 이해하기 쉽습니다. "끝나지 않은 큰 따옴표 문자열". 애러 내용을 보면 코드 2번째 줄의 <code>println! (Hello, world! ");</code>에 큰 따옴표가 누락 된 것을 금방 볼 수 있습니다. 하지만 프로그램이 커질수록 오류 메시지는 점점더 복잡해지고 해석하기가 쉽지 않아집니다. 단순한 경우라 할지라도 Rust에 대해 전혀 모르는 사람에게 약간 무섭게 보일 수 있습니다.(보통은 점점 무서워지죠..)</p>

<p>그래도 디버깅을 무서워하지 않으셔도 됩니다! 프로그래밍 언어나 코드를 작성하고 디버깅하는 데 있어 중요한 것은 언어와 도구에 익숙해지는 것입니다. (익숙해져야 합니다!)</p>

<h2 id="HTML과_디버깅">HTML과 디버깅</h2>

<p>HTML은 Rust만큼 복잡하지 않습니다. HTML은 브라우저가 구문 분석하기 전에 다른 형식으로 컴파일되지 않으며 결과를 표시합니다 (해석되지 않고 컴파일되지 않음). 그리고 HTML의 {{glossary ( "element")}} 구문은 Rust, {{glossary ( "JavaScript")}} 또는 {{glossary ( "Python")}}과 같은 "실제 프로그래밍 언어"보다 이해하기 쉽습니다. 브라우저가 HTML을 구문 분석하는 방식은 프로그래밍 언어가 실행되는 방식보다 훨씬 유연(<strong>permissive</strong>)합니다. 이는 좋은 점이기도 하지만 나쁜 점이기도 합니다.</p>

<h3 id="허용_코드">허용 코드</h3>

<p>그렇다면 유연함(<strong>permissive</strong>)이란 무엇일까요? 음, 일반적으로 코드에서 뭔가 잘못했을 때, 두 가지 주요 유형의 오류가 발생합니다.</p>

<ul>
 <li><strong>문법 오류(Syntax errors)</strong>: 이러한 오류는 위에 표시된 Rust 오류와 같이 실제로 프로그램이 실행되지 않는 코드의 맞춤법 오류입니다. 이들은 일반적으로 언어 구문에 익숙하고 오류 메시지의 의미를 알고있다면 수정하기 쉽습니다.</li>
 <li><strong>논리 에러(Logic errors)</strong>: 언어 문법이 올바르게 작성된 오류입니다. 동작은 하지만 코드가 의도한 것과 다르게 동작하므로 프로그램이 잘못 실행됩니다. 오류의 원인을 알려주는 오류 메시지가 없으므로 구문 오류보다 수정하기가 더 어렵습니다.</li>
</ul>

<p>브라우저 자체에서 구문 분석을하기 때문에 HTML 자체는 문법 오류가 발생하지 않으므로 문법 오류가 있어도 페이지가 계속 표시됩니다. 브라우저에는 잘못 작성된 마크 업을 해석하는 방법을 설명하는 규칙이 내장되어 있으므로 여러분이 생각한대로 결과가 나오지 않더라도 HTML페이지가 표시됩니다. 물론 문제가 될 수 있습니다!</p>

<div class="note">
<p><strong>Note</strong>: 웹이 처음 만들어지면 사람들이 자신의 콘텐트를 게시 할 수 있도록 허용하는 것이 문법이 정확한지 확인하는 것보다 중요하기 때문에 HTML은 허용 된 방식으로 구문 분석됩니다. 처음부터 웹 사이트가 문법오류에 엄격했다면 웹은 오늘날처럼 인기가 있지 않았을 것입니다.</p>
</div>

<h3 id="자발적_학습_Permissive한_코드를_배웁니다.">자발적 학습 : Permissive한 코드를 배웁니다.</h3>

<p>유연한 성질의 HTML 코드를 배울 시간입니다.</p>

<ol>
 <li>첫째로,  우리의 <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html">debug-example demo</a>를 다운로드하고 Local에 저장하세요. This demo is deliberately written to have some errors in it for us to explore (the HTML markup is said to be <strong>badly-formed</strong>, as opposed to <strong>well-formed</strong>).</li>
 <li>Next, open it in a browser. You will see something like this:<img alt="A simple HTML document with a title of HTML debugging examples, and some information about common HTML errors, such as unclosed elements, badly nested elements, and unclosed attributes. " src="https://mdn.mozillademos.org/files/12437/badly-formed-html.png" style="display: block; margin: 0 auto;"></li>
 <li>This immediately doesn't look great; let's look at the source code to see if we can work out why (only the body contents are shown):
  <pre class="brush: html notranslate">&lt;h1&gt;HTML debugging examples&lt;/h1&gt;

&lt;p&gt;What causes errors in HTML?

&lt;ul&gt;
  &lt;li&gt;Unclosed elements: If an element is &lt;strong&gt;not closed properly,
      then its effect can spread to areas you didn't intend

  &lt;li&gt;Badly nested elements: Nesting elements properly is also very important
      for code behaving correctly. &lt;strong&gt;strong &lt;em&gt;strong emphasised?&lt;/strong&gt;
      what is this?&lt;/em&gt;

  &lt;li&gt;Unclosed attributes: Another common source of HTML problems. Let's
      look at an example: &lt;a href="https://www.mozilla.org/&gt;link to Mozilla
      homepage&lt;/a&gt;
&lt;/ul&gt;</pre>
 </li>
 <li>Let's review the problems:
  <ul>
   <li>The {{htmlelement("p","paragraph")}} and {{htmlelement("li","list item")}} elements have no closing tags. Looking at the image above, this doesn't seem to have affected the markup rendering too badly, as it is easy to infer where one element should end and another should begin.</li>
   <li>The first {{htmlelement("strong")}} element has no closing tag. This is a bit more problematic, as it isn't easy to tell where the element is supposed to end. In fact, the whole of the rest of the text has been strongly emphasised.</li>
   <li>This section is badly nested: <code>&lt;strong&gt;strong &lt;em&gt;strong emphasised?&lt;/strong&gt; what is this?&lt;/em&gt;</code>. It is not easy to tell how this has been interpreted because of the previous problem.</li>
   <li>The {{htmlattrxref("href","a")}} attribute value has a missing closing double quote. This seems to have caused the biggest problem — the link has not rendered at all.</li>
  </ul>
 </li>
 <li>Now let's look at the markup the browser has rendered, as opposed to the markup in the source code. To do this, we can use the browser developer tools. If you are not familiar with how to use your browser's developer tools, take a few minutes to review <a href="/en-US/docs/Learn/Discover_browser_developer_tools">Discover browser developer tools</a>.</li>
 <li>In the DOM inspector, you can see what the rendered markup looks like: <img alt="The HTML inspector in Firefox, with our example's paragraph highlighted, showing the text &quot;What causes errors in HTML?&quot; Here you can see that the paragraph element has been closed by the browser." src="https://mdn.mozillademos.org/files/12439/html-inspector.png" style="display: block; margin: 0 auto;"></li>
 <li>Using the DOM inspector, let's explore our code in detail to see how the browser has tried to fix our HTML errors (we did the review in Firefox; other modern browsers <em>should</em> give the same result):
  <ul>
   <li>The paragraphs and list items have been given closing tags.</li>
   <li>It isn't clear where the first <code>&lt;strong&gt;</code> element should be closed, so the browser has wrapped each separate block of text with its own strong tag, right down to the bottom of the document!</li>
   <li>The  incorrect nesting has been fixed by the browser like this:
    <pre class="brush: html notranslate">&lt;strong&gt;strong
  &lt;em&gt;strong emphasised?&lt;/em&gt;
&lt;/strong&gt;
&lt;em&gt; what is this?&lt;/em&gt;</pre>
   </li>
   <li>The link with the missing double quote has been deleted altogether. The last list item looks like this:
    <pre class="brush: html notranslate">&lt;li&gt;
  &lt;strong&gt;Unclosed attributes: Another common source of HTML problems.
  Let's look at an example: &lt;/strong&gt;
&lt;/li&gt;</pre>
   </li>
  </ul>
 </li>
</ol>

<h3 id="HTML_validation">HTML validation</h3>

<p>So you can see from the above example that you really want to make sure your HTML is well-formed! But how? In a small example like the one seen above, it is easy to search through the lines and find the errors, but what about a huge, complex HTML document?</p>

<p>The best strategy is to start by running your HTML page through the <a href="https://validator.w3.org/">Markup Validation Service</a> — created and maintained by the W3C, the organization that looks after the specifications that define HTML, CSS, and other web technologies. This webpage takes an HTML document as an input, goes through it, and gives you a report to tell you what is wrong with your HTML.</p>

<p><img alt="The HTML validator homepage" src="https://mdn.mozillademos.org/files/12441/validator.png" style="display: block; margin: 0 auto;"></p>

<p>To specify the HTML to validate, you can give it a web address, upload an HTML file, or directly input some HTML code.</p>

<h3 id="Active_learning_Validating_an_HTML_document">Active learning: Validating an HTML document</h3>

<p>Let's try this with our <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html">sample document</a>.</p>

<ol>
 <li>First, load up the <a href="https://validator.w3.org/">Markup Validation Service</a> in one browser tab, if it isn't already.</li>
 <li>Switch to the <a href="https://validator.w3.org/#validate_by_input">Validate by Direct Input</a> tab.</li>
 <li>Copy all the sample document's code (not just the body) and paste it into the large text area shown in the Markup Validation Service.</li>
 <li>Press the <em>Check</em> button.</li>
</ol>

<p>This should give you a list of errors and other information.</p>

<p><img alt="A list of of HTML validation results from the W3C markup validation service" src="https://mdn.mozillademos.org/files/12443/validation-results.png" style="display: block; margin: 0 auto;"></p>

<h4 id="Interpreting_the_error_messages">Interpreting the error messages</h4>

<p>The error messages are usually helpful, but sometimes they are not so helpful; with a bit of practice you can work out how to interpret these to fix your code. Let's go through the error messages and what they mean. You'll see that each message comes with a line and column number to help you to locate the error easily.</p>

<ul>
 <li>"End tag <code>li</code> implied, but there were open elements" (2 instances): These messages indicate that an element is open that should be closed. The ending tag is implied, but not actually there. The line/column information points to the first line after the line where the closing tag should really be, but this is a good enough clue to see what is wrong.</li>
 <li>"Unclosed element <code>strong</code>": This is really easy to understand — a {{htmlelement("strong")}} element is unclosed, and the line/column information points right to where it is.</li>
 <li>"End tag <code>strong</code> violates nesting rules": This points out the incorrectly nested elements, and the line/column information points out where it is.</li>
 <li>"End of file reached when inside an attribute value. Ignoring tag": This one is rather cryptic; it refers to the fact that there is an attribute value not properly formed somewhere, possibly near the end of the file because the end of the file appears inside the attribute value. The fact that the browser doesn't render the link should give us a good clue as to what element is at fault.</li>
 <li>"End of file seen and there were open elements": This is a bit ambiguous, but basically refers to the fact there are open elements that need to be properly closed. The lines numbers point to the last few lines of the file, and this error message comes with a line of code that points out an example of an open element:
  <pre class="notranslate">example: &lt;a href="https://www.mozilla.org/&gt;link to Mozilla homepage&lt;/a&gt; ↩ &lt;/ul&gt;↩ &lt;/body&gt;↩&lt;/html&gt;</pre>

  <div class="note">
  <p><strong>Note</strong>: An attribute missing a closing quote can result in an open element because the rest of the document is interpreted as the attribute's content.</p>
  </div>
 </li>
 <li>"Unclosed element <code>ul</code>": This is not very helpful, as the {{htmlelement("ul")}} element <em>is</em> closed correctly. This error comes up because the {{htmlelement("a")}} element is not closed, due to the missing closing quote mark.</li>
</ul>

<p><span>If you can't work out what every error message means, don't worry about it — a good idea is to try fixing a few errors at a time. Then try revalidating your HTML to show what errors are left. Sometimes fixing an earlier error will also get rid of other error messages — several errors can often be caused by a single problem, in a domino effect.</span></p>

<p><span>You will know when all your errors are fixed when you see the following banner in your output:</span></p>

<p><img alt='Banner that reads "The document validates according to the specified schema(s) and to additional constraints checked by the validator."' src="https://mdn.mozillademos.org/files/12445/valid-html-banner.png" style="display: block; margin: 0 auto;"></p>

<h2 id="요약">요약</h2>

<p>그래서 HTML을 디버깅하는 방법에 대해 소개합니다. 이 방법은 나중에 CSS, JavaScript 및 다른 유형의 코드를 디버깅 할 때 유용한 기술을 제공합니다. 이것은 또한 HTML 모듈 학습 입문의 끝 부분입니다. 이제 평가를 통해 스스로 테스트 할 수 있습니다. 첫 번째 것은 아래에 링크되어 있습니다.</p>

<p>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started">Getting started with HTML</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML">What’s in the head? Metadata in HTML</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML text fundamentals</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">Creating hyperlinks</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting">Advanced text formatting</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure">Document and website structure</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML">Debugging HTML</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter">Marking up a letter</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content">Structuring a page of content</a></li>
</ul>
