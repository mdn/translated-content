---
title: 구문분석 (Parse)
slug: Glossary/Parse
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

구문분석(Parsing)이란 프로그램을 분석하고 런타임 환경이 실제로 실행할 수 있는 내부 형식(예, 브라우저 내부의 {{glossary("JavaScript")}} 엔진)으로 변환하는 것을 의미합니다.

[브라우저는 HTML을 구문분석](/ko/docs/Learn/HTML) 하는 것을 통해 {{glossary('DOM')}} 트리로 만듭니다. HTML 구문분석에는 [토큰화](/ko/docs/Web/API/DOMTokenList) 및 트리 구성이 포함됩니다. HTML 토큰에는 시작 태그와 끝 태그는 물론 속성 이름과 값도 포함됩니다. 문서의 형식이 올바른 경우, 구문 분석이 간단하고 빠릅니다. 구문분석기는 토큰화된 입력을 문서로 구문 분석하여 트리를 구축합니다.

HTML 구문분석기가 이미지와 같은 논블록킹 리소스를 찾으면, 브라우저는 해당 리소스를 요청하고 구문분석을 계속합니다. CSS 파일이 발견되면 구문분석을 계속할 수 있지만, 특히 [`async`](/ko/docs/Web/JavaScript/Reference/Statements/async_function) 또는 `defer` 속성이 없는 `<script>` 태그의 경우에는 렌더링을 차단하고 HTML 구문 분석을 일시 중지합니다.

브라우저가 CSS 스타일을 발견하면, 텍스트를 CSS 객체 모델({{glossary('CSSOM')}})로 구문 분석합니다. CSS 객체 모델 데이터 구조는 레이아웃 스타일 지정 및 페인팅에 사용됩니다. 그런 다음 브라우저는 콘텐츠를 화면에 그릴 수 있도록 두 구조 모두에서 렌더링 트리를 생성합니다. JavaScript도 다운로드 되어 구문 분석된 후 실행됩니다.

JavaScript 구문 분석은 {{glossary("compile time", "컴파일 타임")}} 동안, 또는 메소드 호출 중인 경우와 같이 {{glossary("parser", "구문분석기")}}가 호출될 때마다 수행됩니다.

## 같이 보기

- 위키백과의 [Parse](https://en.wikipedia.org/wiki/Parsing)
