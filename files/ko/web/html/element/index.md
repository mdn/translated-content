---
title: HTML 요소 참고서
slug: Web/HTML/Element
tags:
  - Basic
  - Element
  - HTML
  - Reference
  - Web
  - l10n:priority
translation_of: Web/HTML/Element
---
{{HTMLSidebar("Elements")}}
이 페이지는 {{glossary("tag", "태그")}}를 사용해 만들 수 있는 모든 {{glossary("HTML")}} {{glossary("Element", "요소")}}의 목록을 제공합니다. 필요로 하는 요소를 쉽게 찾을 수 있도록 기능별로 분류했으며, 각각의 요소 참조 페이지 사이드바에서는 사전 순으로 정렬된 목록도 확인할 수 있습니다.

## 메인 루트

{{HTMLRefTable("HTML Root Element")}}

## 문서 메타데이터

{{glossary("metadata", "메타데이터")}}는 스타일, 스크립트, 각종 소프트웨어({{Glossary("search engine", "검색 엔진")}}, {{glossary("browser", "브라우저")}} 등)의 탐색 및 렌더링을 도와줄 데이터 등 페이지에 대한 정보를 가집니다. 스타일과 스크립트 메타데이터는 페이지 안에서 정의할 수도 있고, 해당하는 정보를 가진 다른 파일로 링크할 수도 있습니다.

{{HTMLRefTable("HTML document metadata")}}

## 구획 루트

{{HTMLRefTable("Sectioning Root Element")}}

## 콘텐츠 구획

콘텐츠 구획 요소를 사용하면 문서의 콘텐츠를 논리적인 조각으로 체계화할 수 있습니다. 구획 요소를 사용해 탐색을 위한 헤더 및 푸터, 콘텐츠 판별을 위한 제목 요소 등 페이지 콘텐츠의 큰 틀을 잡으세요.

{{HTMLRefTable("HTML sections")}}

## 텍스트 콘텐츠

HTML 텍스트 콘텐츠를 사용하여 여는 {{htmlelement("body")}}와 닫는 `</body>` 태그 사이의 블록이나 콘텐츠 구획을 정리할 수 있습니다. 해당 콘텐츠의 목적이나 구조 판별에 사용하므로 {{glossary("accessibility", "접근성")}}과 {{glossary("SEO")}}에 중요합니다.

{{HTMLRefTable("HTML grouping content")}}

## 인라인 텍스트 시멘틱

HTML 인라인 텍스트 시멘틱을 사용해서 단어, 줄, 혹은 아무 부분의 의미나 구조, 스타일을 정의할 수 있습니다.

{{HTMLRefTable("HTML text-level semantics")}}

## 이미지 & 멀티미디어

HTML은 사진, 오디오, 비디오 등 다양한 멀티미디어 리소스를 지원합니다..

{{HTMLRefTable("multimedia")}}

## 내장 콘텐츠

HTML은 일반적인 멀티미디어 콘텐츠 외에도 다양한 종류의 기타 콘텐츠를 포함할 수 있습니다.

{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}

## 스크립트

HTML은 동적인 콘텐츠와 웹 어플리케이션을 위해 스크립트 언어, 그 중에서도 주로 JavaScript를 지원합니다. 특정 요소가 이런 기능을 가지고 있습니다.

{{HTMLRefTable("HTML scripting")}}

## 수정사항 표시

텍스트의 특정 부분이 수정됐다는 것을 표시할 수 있습니다.

{{HTMLRefTable("HTML edits")}}

## 표 콘텐츠

표 형식의 데이터를 생성하고 처리할 때 사용합니다.

{{HTMLRefTable("HTML tabular data")}}

## 양식

HTML은 여러가지 입력 가능한 요소를 제공합니다. 이런 요소를 서로 조합하면 사용자가 내용을 채우고, 웹사이트나 어플리케이션에 제출할 수 있습니다. [HTML 폼 안내서](/ko/docs/Learn/HTML/Forms)에 더욱 다양한 내용이 있습니다.

{{HTMLRefTable("HTML forms")}}

## 대화형 요소

HTML은 상호작용 가능한 사용자 인터페이스 객체를 만들 때 사용할 수 있는 요소를 지원합니다.

{{HTMLRefTable("HTML interactive elements")}}

## 웹 컴포넌트

웹 컴포넌트는 완전히 새로운 형태의 요소를 생성한 후 일반적인 HTML처럼 사용할 수 있는 기술입니다. 또한 표준 HTML 요소의 맞춤 버전을 만들 수도 있습니다.

{{HTMLRefTable({"include":["Web Components"],"exclude":["Deprecated", "Obsolete"]})}}

## 폐기됐거나 사용하지 않는 요소들

> **경고:** 다음은 더 이상 사용하지 않고, 사용해서도 안되는 오래된 HTML 요소입니다. **새로운 프로젝트에서 절대 사용해서는 안되고, 오래된 프로젝트에서도 가능한 빨리 대체해야 합니다.** 아래 목록은 정보성 목적으로만 존재합니다.

{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}
