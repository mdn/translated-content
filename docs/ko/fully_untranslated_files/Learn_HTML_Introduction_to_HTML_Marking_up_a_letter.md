---
title: Marking up a letter
slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}우리 모두 글자를 쓸 줄 압니다. 이제 글을 포멧팅하는 방법을 익혀 보도록 합니다. 이 장에서는 주어진 글을 HTML 기본/혹은 고급 텍스트 포멧팅 방식에 맞춰 다듬는 연습을 할 예정입니다. 예를 들어, 하이퍼링크라든지 \<head> 컨텐츠 등을 말이지요.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선수 학습:</th>
      <td>
        <p>
          이 장에 들어서기에 앞서 필요한 선수 학습들에는
          <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
            >Getting started with HTML</a
          >,
          <a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
            >What's in the head? Metadata in HTML</a
          >,
          <a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
            >HTML text fundamentals</a
          >,
          <a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
            >Creating hyperlinks</a
          >,
          <a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting"
            >Advanced text formatting</a
          >
          등이 있습니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">이 장에서 배워요:</th>
      <td>
        <p>
          HTML 기본/고급 텍스트 포멧팅 방법, 하이퍼링크, HTML &#x3C;head> 부분에
          무엇이 들어가는지에 대해 알아 보아요.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 시작하기에 앞서

프로젝트를 시작하기 위해서는 두 가지가 필요합니다. [raw text you need to mark up](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt)와 [CSS you need to include](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/css.txt)입니다. 텍스트 편집기를 이용해 .html 파일을 만들거나 사이트 - [JSBin](http://jsbin.com/) 이나 [Thimble](https://thimble.mozilla.org/) 를 이용하여 프로젝트를 할 수도 있습니다.

## 프로젝트 요약

이 프로젝트에서 여러분은 대학 인트라넷에 호스팅 될 문서를 마크업 하게 될 겁니다. 이 문서는 미래 해당 대학에서 박사학위를 공부하려는 이들이 보내 온 질문에 대한 연구원들의 답변입니다.

**블록/ 구조적인 시맨틱들**

- 당신은 전체 문서를 doctype을 비롯해 {{htmlelement("html")}}, {{htmlelement("head")}}, {{htmlelement("body")}} elements 를 이용하여 다듬어야 합니다.
- 일반적으로 이 서한은 아래의 점을 제외하고 단락과 표제의 구조로 표시되어야합니다. 가장 높은 단계의 heading(the "Re:" lin) 하나와 두 번째 단계의 heading 세 개를 사용합니다
- 학기 시작 날짜, 스터디 주제들 그리고 이국적인 댄스들은 적절한 리스트 유형을 사용해서 마크 업을 하세요
- 두 개의 주소는 {{htmlelement("address")}} 요소 안에 위치해야 합니다. 주소의 각 줄은 새로운 문단이 아닌 새로운 줄에 위치해야합니다

Inline semantics:

- The names of the sender and receiver (and "Tel" and "Email") should be marked up with strong importance.
- The four dates in the document should be given appropriate elements containing machine-readable dates.
- The first address and first date in the letter should be given a class attribute value of "sender-column"; the CSS you'll add later will then cause these to be right aligned, as should be the case in a classic letter layout.
- The five acronyms/abbreviations in the main text of the letter should be marked up to provide expansions of each acronym/abbreviation.
- The six sub/superscripts should be marked up appropriately — in the chemical formulae, and the numbers 103 and 104 (they should be 10 to the power or 3 and 4, respectively).
- Try to mark up at least two appropriate words in the text with strong importance/emphasis.
- There are two places where a hyperlink should be added; add appropriate links with titles. For the location that the links point to, just use `http://example.com`.
- The university motto quote and citation should be marked up with appropriate elements.

The head of the document:

- The character set of the document should be specified as utf-8 using an appropriate meta tag.
- The author of the letter should be specified in an appropriate meta tag.
- The provided CSS should be included inside an appropriate tag.

## Hints and tips

- Use the [W3C HTML validator](https://validator.w3.org/) to validate your HTML; you'll get bonus points if it validates.
- You don't need to know any CSS to do this assessment; you just need to put the provided CSS inside an HTML element.

## Example

The following screenshot shows an example of what the letter might look like after being marked up.

![Example](letter_screengrab_2.png)

## 프로젝트

If you are following this assessment as part of an organized course, you should be able to give your work to your teacher/mentor for marking. If you are self-learning, then you can get the marking guide fairly easily by asking on the [discussion thread about this exercise](https://discourse.mozilla.org/t/marking-up-a-letter-assignment/24676), or in the [#mdn](irc://irc.mozilla.org/mdn) IRC channel on [Mozilla IRC](https://wiki.mozilla.org/IRC). Try the exercise first — there is nothing to be gained by cheating!

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}
