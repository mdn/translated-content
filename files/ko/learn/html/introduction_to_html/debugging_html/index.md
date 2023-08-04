---
title: HTML 디버깅
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

HTML을 작성을 할 수 있지만, 문제가 생겼을 때 코드의 오류가 발생한 부분을 해결할 수 없나요? 이 기사에서는 HTML의 오류를 찾고 수정하는 데 도움이되는 몇 가지 도구를 소개합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행사항:</th>
      <td>
        HTML이 익숙해야 합니다. 다음문서를 이해하는 정도면 충분합니다.
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML로 시작하기</a
        >,
        <a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML 텍스트 기본사항</a
        >, and
        <a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >하이파링크 만들기</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        HTMl에서 문제를 찾기위해 디버깅 툴을 사용하는 기본적인 방법을 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## 디버깅은 무섭지 않아요

여러분이 원하든 원하지않든 무언가 잘못되면 코드가 동작하지 않거나 컴파일 오류가 나는 무시무시한 순간이 다가옵니다. 다음과 같이 말이죠

아래는 [Rust](https://www.rust-lang.org/) 언어로 작성된 간단한 프로그램을 {{glossary ( "compile")}}할 때 발생한 오류를 보여줍니다.

![A console window showing the result of trying to compile a rust program with a missing quote around a string in a print statement. The error message reported is error: unterminated double quote string.](error-message.png)

여기나온 오류 메시지는 상대적으로 이해하기 쉽습니다. "끝나지 않은 큰 따옴표 문자열". 애러 내용을 보면 코드 2번째 줄의 `println! (Hello, world! ");`에 큰 따옴표가 누락 된 것을 금방 볼 수 있습니다. 하지만 프로그램이 커질수록 오류 메시지는 점점더 복잡해지고 해석하기가 쉽지 않아집니다. 단순한 경우라 할지라도 Rust에 대해 전혀 모르는 사람에게 약간 무섭게 보일 수 있습니다.(보통은 점점 무서워지죠..)

그래도 디버깅을 무서워하지 않으셔도 됩니다! 프로그래밍 언어나 코드를 작성하고 디버깅하는 데 있어 중요한 것은 언어와 도구에 익숙해지는 것입니다. (익숙해져야 합니다!)

## HTML과 디버깅

HTML은 Rust만큼 복잡하지 않습니다. HTML은 브라우저가 구문 분석하기 전에 다른 형식으로 컴파일되지 않으며 결과를 표시합니다 (해석되지 않고 컴파일되지 않음). 그리고 HTML의 {{glossary ( "element")}} 구문은 Rust, {{glossary ( "JavaScript")}} 또는 {{glossary ( "Python")}}과 같은 "실제 프로그래밍 언어"보다 이해하기 쉽습니다. 브라우저가 HTML을 구문 분석하는 방식은 프로그래밍 언어가 실행되는 방식보다 훨씬 유연(**permissive**)합니다. 이는 좋은 점이기도 하지만 나쁜 점이기도 합니다.

### 허용 코드

그렇다면 유연함(**permissive**)이란 무엇일까요? 음, 일반적으로 코드에서 뭔가 잘못했을 때, 두 가지 주요 유형의 오류가 발생합니다.

- **문법 오류(Syntax errors)**: 이러한 오류는 위에 표시된 Rust 오류와 같이 실제로 프로그램이 실행되지 않는 코드의 맞춤법 오류입니다. 이들은 일반적으로 언어 구문에 익숙하고 오류 메시지의 의미를 알고있다면 수정하기 쉽습니다.
- **논리 에러(Logic errors)**: 언어 문법이 올바르게 작성된 오류입니다. 동작은 하지만 코드가 의도한 것과 다르게 동작하므로 프로그램이 잘못 실행됩니다. 오류의 원인을 알려주는 오류 메시지가 없으므로 구문 오류보다 수정하기가 더 어렵습니다.

브라우저 자체에서 구문 분석을하기 때문에 HTML 자체는 문법 오류가 발생하지 않으므로 문법 오류가 있어도 페이지가 계속 표시됩니다. 브라우저에는 잘못 작성된 마크 업을 해석하는 방법을 설명하는 규칙이 내장되어 있으므로 여러분이 생각한대로 결과가 나오지 않더라도 HTML페이지가 표시됩니다. 물론 문제가 될 수 있습니다!

> **참고:** 웹이 처음 만들어지면 사람들이 자신의 콘텐트를 게시 할 수 있도록 허용하는 것이 문법이 정확한지 확인하는 것보다 중요하기 때문에 HTML은 허용 된 방식으로 구문 분석됩니다. 처음부터 웹 사이트가 문법오류에 엄격했다면 웹은 오늘날처럼 인기가 있지 않았을 것입니다.

### 자발적 학습 : Permissive한 코드를 배웁니다

유연한 성질의 HTML 코드를 배울 시간입니다.

1. 첫째로, 우리의 [debug-example demo](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html)를 다운로드하고 Local에 저장하세요. This demo is deliberately written to have some errors in it for us to explore (the HTML markup is said to be **badly-formed**, as opposed to **well-formed**).
2. Next, open it in a browser. You will see something like this:![A simple HTML document with a title of HTML debugging examples, and some information about common HTML errors, such as unclosed elements, badly nested elements, and unclosed attributes. ](badly-formed-html.png)
3. This immediately doesn't look great; let's look at the source code to see if we can work out why (only the body contents are shown):

   ```html
   <h1>HTML debugging examples</h1>

   <p>What causes errors in HTML?

   <ul>
     <li>Unclosed elements: If an element is <strong>not closed properly,
         then its effect can spread to areas you didn't intend

     <li>Badly nested elements: Nesting elements properly is also very important
         for code behaving correctly. <strong>strong <em>strong emphasised?</strong>
         what is this?</em>

     <li>Unclosed attributes: Another common source of HTML problems. Let's
         look at an example: <a href="https://www.mozilla.org/>link to Mozilla
         homepage</a>
   </ul>
   ```

4. Let's review the problems:

   - The {{htmlelement("p","paragraph")}} and {{htmlelement("li","list item")}} elements have no closing tags. Looking at the image above, this doesn't seem to have affected the markup rendering too badly, as it is easy to infer where one element should end and another should begin.
   - The first {{htmlelement("strong")}} element has no closing tag. This is a bit more problematic, as it isn't easy to tell where the element is supposed to end. In fact, the whole of the rest of the text has been strongly emphasised.
   - This section is badly nested: `<strong>strong <em>strong emphasised?</strong> what is this?</em>`. It is not easy to tell how this has been interpreted because of the previous problem.
   - The [`href`](/ko/docs/Web/HTML/Element/a#href) attribute value has a missing closing double quote. This seems to have caused the biggest problem — the link has not rendered at all.

5. Now let's look at the markup the browser has rendered, as opposed to the markup in the source code. To do this, we can use the browser developer tools. If you are not familiar with how to use your browser's developer tools, take a few minutes to review [Discover browser developer tools](/ko/docs/Learn/Discover_browser_developer_tools).
6. In the DOM inspector, you can see what the rendered markup looks like: ![The HTML inspector in Firefox, with our example's paragraph highlighted, showing the text "What causes errors in HTML?" Here you can see that the paragraph element has been closed by the browser.](html-inspector.png)
7. Using the DOM inspector, let's explore our code in detail to see how the browser has tried to fix our HTML errors (we did the review in Firefox; other modern browsers _should_ give the same result):

   - The paragraphs and list items have been given closing tags.
   - It isn't clear where the first `<strong>` element should be closed, so the browser has wrapped each separate block of text with its own strong tag, right down to the bottom of the document!
   - The incorrect nesting has been fixed by the browser like this:

     ```html
     <strong
       >strong
       <em>strong emphasised?</em>
     </strong>
     <em> what is this?</em>
     ```

   - The link with the missing double quote has been deleted altogether. The last list item looks like this:

     ```html
     <li>
       <strong
         >Unclosed attributes: Another common source of HTML problems. Let's
         look at an example:
       </strong>
     </li>
     ```

### HTML validation

So you can see from the above example that you really want to make sure your HTML is well-formed! But how? In a small example like the one seen above, it is easy to search through the lines and find the errors, but what about a huge, complex HTML document?

The best strategy is to start by running your HTML page through the [Markup Validation Service](https://validator.w3.org/) — created and maintained by the W3C, the organization that looks after the specifications that define HTML, CSS, and other web technologies. This webpage takes an HTML document as an input, goes through it, and gives you a report to tell you what is wrong with your HTML.

![The HTML validator homepage](validator.png)

To specify the HTML to validate, you can give it a web address, upload an HTML file, or directly input some HTML code.

### Active learning: Validating an HTML document

Let's try this with our [sample document](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html).

1. First, load up the [Markup Validation Service](https://validator.w3.org/) in one browser tab, if it isn't already.
2. Switch to the [Validate by Direct Input](https://validator.w3.org/#validate_by_input) tab.
3. Copy all the sample document's code (not just the body) and paste it into the large text area shown in the Markup Validation Service.
4. Press the _Check_ button.

This should give you a list of errors and other information.

![A list of of HTML validation results from the W3C markup validation service](validation-results.png)

#### Interpreting the error messages

The error messages are usually helpful, but sometimes they are not so helpful; with a bit of practice you can work out how to interpret these to fix your code. Let's go through the error messages and what they mean. You'll see that each message comes with a line and column number to help you to locate the error easily.

- "End tag `li` implied, but there were open elements" (2 instances): These messages indicate that an element is open that should be closed. The ending tag is implied, but not actually there. The line/column information points to the first line after the line where the closing tag should really be, but this is a good enough clue to see what is wrong.
- "Unclosed element `strong`": This is really easy to understand — a {{htmlelement("strong")}} element is unclosed, and the line/column information points right to where it is.
- "End tag `strong` violates nesting rules": This points out the incorrectly nested elements, and the line/column information points out where it is.
- "End of file reached when inside an attribute value. Ignoring tag": This one is rather cryptic; it refers to the fact that there is an attribute value not properly formed somewhere, possibly near the end of the file because the end of the file appears inside the attribute value. The fact that the browser doesn't render the link should give us a good clue as to what element is at fault.
- "End of file seen and there were open elements": This is a bit ambiguous, but basically refers to the fact there are open elements that need to be properly closed. The lines numbers point to the last few lines of the file, and this error message comes with a line of code that points out an example of an open element:

  ```
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > **참고:** An attribute missing a closing quote can result in an open element because the rest of the document is interpreted as the attribute's content.

- "Unclosed element `ul`": This is not very helpful, as the {{htmlelement("ul")}} element _is_ closed correctly. This error comes up because the {{htmlelement("a")}} element is not closed, due to the missing closing quote mark.

If you can't work out what every error message means, don't worry about it — a good idea is to try fixing a few errors at a time. Then try revalidating your HTML to show what errors are left. Sometimes fixing an earlier error will also get rid of other error messages — several errors can often be caused by a single problem, in a domino effect.

You will know when all your errors are fixed when you see the following banner in your output:

![Banner that reads "The document validates according to the specified schema(s) and to additional constraints checked by the validator."](valid-html-banner.png)

## 요약

그래서 HTML을 디버깅하는 방법에 대해 소개합니다. 이 방법은 나중에 CSS, JavaScript 및 다른 유형의 코드를 디버깅 할 때 유용한 기술을 제공합니다. 이것은 또한 HTML 모듈 학습 입문의 끝 부분입니다. 이제 평가를 통해 스스로 테스트 할 수 있습니다. 첫 번째 것은 아래에 링크되어 있습니다.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
