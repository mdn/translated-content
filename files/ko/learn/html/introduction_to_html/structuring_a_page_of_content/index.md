---
title: 콘텐츠 페이지 구조화
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

CSS를 사용하여 콘텐츠 페이지를 레이아웃할 수 있도록 구조화하는 것은 숙달해야 할 매우 중요한 기술이므로 이 장에서는 페이지가 어떻게 보일지 고려하고 그 위에 레이아웃을 구축할 적절한 구조적 의미론(Structural Semantics)을 선택하는 능력을 테스트합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        이 장에 참여하기 전에
        <a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          >문서 및 웹사이트 구조</a
        >에 특히 중점을 두고 나머지 과정을 먼저 완료 해주시기 바랍니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        웹 페이지 구조에 대한 지식과 예비 레이아웃 디자인을 마크업으로 표현하는 방법을 테스트합니다.
      </td>
    </tr>
  </tbody>
</table>

## 시작 지점

이 장을 시작하기 위해, [시작 에셋(asset)들을 담고 있는 zip 파일](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip)을 다운로드 해주시기 바랍니다.

zip 파일에는 다음이 포함되어 있습니다:

- 구조적 마크업을 추가하는 데 필요한 HTML.
- 마크업에 적용할 CSS.
- 페이지에서 사용되는 이미지들.

로컬 컴퓨터에서 예제를 만들거나, 또는 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/)와 같은 온라인 도구를 사용하여 작업을 수행합니다.

> **참고:** 만약 막히면, 도움을 요청하세요 — 이 페이지 아래의 [Assessment or further help](#assessment_or_further_help) 섹션을 보세요.

## 프로젝트 개요

이 프로젝트의 과제는 조류 관찰 웹사이트의 홈페이지 콘텐츠를 가져와 페이지 레이아웃을 적용할 수 있도록 구조적인 요소를 추가하는 것입니다. 다음과 같은 요소들이 필요합니다:

- 페이지의 주요 제목(main title), 사이트 로고 및 탐색 메뉴가 포함된 사이트의 전체 너비에 걸친 헤더(header). 스타일이 적용되면 제목과 로고가 옆에 나란히, 그리고 탐색 메뉴는 이 두 항목 아래에 표시됩니다.
- 두 개의 열로 이루어진 메인 콘텐츠 영역 — 환영하는 텍스트를 담을 주요 블록(main block)과 이미지 썸네일을 담을 사이드바(sidebar).
- 저작권 정보 및 크레딧이 포함된 푸터(footer).

다음에 적합한 래퍼(wrapper)를 추가 해주시기 바랍니다:

- 헤더
- 탐색 메뉴
- 메인 콘텐츠
- 환영하는 텍스트
- 이미지 사이드바
- 푸터

또한 다음을 수행 해주시기 바랍니다:

- 시작 부분에서 제공된 기존 요소 바로 아래에 다른 {{htmlelement("link")}} 요소를 추가하여 제공된 CSS를 페이지에 적용합니다.

## 힌트 및 팁

- [W3C Nu HTML Checker](https://validator.w3.org/nu/)를 사용하면 HTML, CSS, SVG에서 의도하지 않은 실수 — 다른 방법으로는 놓쳤을 수 있는 실수 — 를 찾아내어 수정할 수 있습니다.
- 이 장을 수행하기 위해 CSS를 알 필요 없이 제공된 CSS를 HTML 요소 안에 넣어주시기만 하면 됩니다.
- 제공된 CSS는 올바른 구조적인 요소들이 마크업에 추가되면 렌더링된 페이지에서 녹색으로 표시되도록 설계되었습니다.
- 만약 어떤 요소를 어디에 넣어야 할지 막히신다면 페이지 레이아웃의 간단한 블록 다이어그램을 그려서 각 블록을 감싸고 있어야 한다고 생각하는 요소를 적어보시기를 바랍니다. 이 방법은 매우 유용합니다.

## 예제

다음 스크린샷은 마크업이 적용된 후 홈페이지가 어떻게 보일 수 있는지 보여주는 예제입니다.

![The finished example for the assessment; a simple webpage about birdwatching, including a heading of "Birdwatching", bird photos, and a welcome message](example-page.png)

## 평가 혹은 추가적인 도움

만약 여러분의 작업을 평가받고 싶으시거나 막혀서 도움을 요청하기를 원하신다면:

1. 여러분의 작업을 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/)와 같은 온라인에서 공유 가능한 에디터에 올리세요. 여러분은 코드를 직접 작성할 수도 있고, 혹은 위 섹션에 링크된 시작 파일을 사용할 수도 있습니다.
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250)에 평가 및/또는 도움을 요청하는 글을 작성하세요. 여러분의 글은 다음을 포함해야만 합니다:

   - "콘텐츠 페이지 구조화를 위한 평가 원함"과 같은 서술적인 제목.
   - 여러분이 이미 무엇을 시도해 봤는지, 그리고 우리가 무엇을 하기를 원하는지에 대한 설명. 예를 들자면, 막혀서 도움이 필요하다거나, 평가를 원한다거나 하는 설명을 포함해야 합니다.
   - (위의 단계 1에서 언급된) 온라인에서 공유 가능한 에디터에 있는, 여러분이 평가를 원하거나 도움이 필요한 예제의 링크. 이것은 익숙해지기에 좋은 습관입니다. 코딩 문제가 있는 누군가를 도울 때, 그들의 코드를 보지 못한다면 그들을 돕는 것은 몹시 힘듭니다.
   - 우리가 여러분이 도움을 원하는 문제를 찾을 수 있도록, 실제 과제나 평가 페이지의 링크.

{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
