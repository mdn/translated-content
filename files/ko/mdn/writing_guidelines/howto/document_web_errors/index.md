---
title: 웹 오류를 문서화하는 방법
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

MDN 웹 문서의 [JavaScript 오류 참고서](/ko/docs/Web/JavaScript/Reference/Errors)는 [개발자 콘솔](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)에서 발생하는 오류에 대해 웹 개발자를 돕기 위한 프로젝트입니다. 이 프로젝트의 경우, MDN 웹 문서에 더 많은 오류 문서를 작성하여 오류 메시지가 발생하는 도구에 링크를 더 추가할 수 있도록 해야합니다. 이 문서는 웹 오류를 문서화하는 방법을 설명합니다.

JavaScript 오류에는 문제 해결을 위한 추가 조언이 포함된 JavaScript 오류 참고서로 이동하는 "더 알아보기" 링크가 포함되어 있습니다. 웹 오류를 문서화하려면 일부 [JavaScript](/ko/docs/Web/JavaScript)를 알고 있거나 자세히 알아볼 수 있어야 합니다.

## 1단게 – 문서화할 오류 결정하기

- Firefox/Gecko의 오류 메시지: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Chrome/v8의 오류 메시지: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## 2단계 - 기존 오류 문서 확인하기

- 기존 [JavaScript 오류 참고서](/ko/docs/Web/JavaScript/Reference/Errors)를 보고 오류가 어떻게 문서화되어 있는지 확인하십시오.
- 작성하려는 오류의 유형에 따라 이 페이지를 자세히 살펴볼 수 있습니다.
- 새 페이지를 작성하기 위해 기존 페이지의 콘텐츠를 복사할 수 있습니다.

## 3단계 – 새 오류 페이지 만들기

- 모든 오류 페이지는 [/docs/Web/JavaScript/Reference/Errors](/ko/docs/Web/JavaScript/Reference/Errors) 트리 아래에 있습니다.
- 새 페이지를 만들려면 [페이지를 만드는 방법](/ko/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) 안내서의 지침을 참조하십시오.

## 4단계 – 오류 문서화하기

- 기존 오류 문서 중 하나에서 구조를 복사하여 사용하거나 처음부터 시작하십시오. 여러분의 선택입니다!
- 적어도 다음 사항이 있어야 합니다.

  - 다른 브라우저에서 발생한 메시지를 포함한 구문 상자.
  - 오류 유형.
  - 이 오류가 발생한 이유와 그 결과를 설명하는 텍스트. 발생한 메시지 이상으로 작성.
  - 오류를 보여주는 예제(하나 이상!)와 코드를 수정하는 방법을 보여주는 예제.
  - MDN 웹 문서의 다른 참고서 자료에 대한 포인터.

## 5단계 – 콘텐츠 검토 받기

오류 페이지를 만든 후 풀 리퀘스트로 제출합니다. 여러분의 페이지를 검토할 검토 팀 구성원이 자동으로 할당됩니다.
