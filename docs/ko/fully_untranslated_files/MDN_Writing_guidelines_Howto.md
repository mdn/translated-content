---
title: 페이지에 올바르게 태그하는 방법
slug: MDN/Writing_guidelines/Howto
---

{{MDNSidebar}}

**문서 태그**는 방문자에게 유용한 컨텐츠를 제공하는 중요한 방법입니다. 각 페이지는 콘텐츠 정리에 도움을 줄 수 있도록 몇 개의 태그를 가져야 합니다. 본 페이지는 독자들이 정보를 찾을 때나, 사이트를 체계적으로 유지할 때 필요한 페이지 태그를 하는 가장 좋은 방법을 설명합니다.

태그를 편집할 때 사용하는 인터페이스에 대한 도움이 필요하시면, 편집 가이드의 [태그 섹션](/ko/docs/MDN/Contribute/Editor/Basics#The_tags_box)을 참고하세요.

아래의 설명처럼 태그를 적절히 사용해주세요. 그렇지 않으면, 저희의 자동화 도구가 콘텐츠 목록, 랜딩 페이지, 문서 간 링크 등을 정확하게 생성하지 못합니다.

## MDN이 태그를 사용하는 방법

MDN은 태그를 여러가지 방법으로 사용합니다.

- 문서 분류
  - : 어떤 종류의 문서인가요? 레퍼런스? 튜토리얼? 랜딩 페이지? 저희 방문자는 태그를 사용해 검색 결과를 필터링 할 수 있으므로 매우 중요합니다.
- 항목 식별
  - : 무엇에 관한 문서인가요? API? DOM? 그래픽? 다시 말씀드리지만, 태그를 사용해 검색 겨로가를 필터링 할 수 있으므로 중요합니다.
- API 식별
  - : API 레퍼런스 페이지는 문서화된 API의 특정 구성요소를 식별할 수 있어야 합니다. (즉, 어떤 인터페이스인지, 그리고 해당되는 경우에 페이지가 다루는 속성이나 방법).
- 기술 현황
  - : 이 기술의 상태는 어떤가요? 비표준인가요? 더 이상 사용되지 않나요? 실험 단계인가요?
- 기술 수준
  - : 튜토리얼이나 가이드의 경우, 이 글이 다루는 내용이 얼마나 어려운가요?
- 문서 메타데이터
  - : 기여자 커뮤니티는 태그를 사용하여 어떤 페이지에 어떤 작업이 필요한지 추적합니다.

## 태그 유형별 가이드

다음은 태그 유형 및 적합한 값에 대한 빠른 가이드입니다.

### 문서 카테고리

여기에 있는 카테고리들로 글을 태그하면, 자동화 시스템이 방문 페이지, 목차 등을 좀 더 정확하게 생성할 수 있습니다. 저희의 새로운 검색 시스템은 이런 용어들을 사용해서 방문자들이 레퍼런스나 가이드 정보를 찾을 수 있을 겁니다.

다음과 같은 카테고리 명을 표준 태그로 사용하고 있습니다.

- `Intro`
  - : 이 문서는 주제에 관한 입문 자료를 제공합니다. 이상적으로는 각 기술 영역에 하나의 인트로만 존재해야 합니다.
- `Reference`
  - : 이 문서는 API, 요소(Element), 속성 등에 관한 참조 자료가 포함되어 있습니다.
- `Landing`
  - : 이 문서는 랜딩 페이지입니다.
- `Guide`
  - : 이 문서는 방법 일람이나 가이드입니다.
- `Example`
  - : 이 문서는 코드 샘플 페이지거나, 코드 샘플(한 줄짜리 구문 예제가 아닌 실제로 유용한 코드 조각)을 포함하고 있습니다.

### 주제

주제의 범위를 밝힘으로써 검색 결과를 개선하는데 도움을 주실 수 있습니다(또한 랜딩 페이지와 네비게이션에도 도움을 줍니다).

새로운 항목이 생길 수 있어 유연성을 위한 여지가 있긴 하지만, 되도록 API나 기술의 이름으로 제한하려고 합니다. 자주 쓰이는 예시입니다.

- `HTML`
- `CSS`
- `JavaScript` (대문자 S)
- `Document`
- `DOM`
- `API` API의 각 개요, 인터페이브, 메서드, 속성마다.
- `Method` API의 각 메서드마다.
- `Property` API의 각 속성마다.
- `Graphics`
- `SVG`
- `WebGL`
- `Tools`
- `Web`
- `Element`

대체로, your topic identification tag should be the name of an interface with a number of related pages (like [Node](/ko/docs/Web/API/Node), which has many pages for its various properties and methods), or the name of an overall technology type. You might tag a page about WebGL with `Graphics` and `WebGL`, for example, but a page about {{HTMLElement("canvas")}} with `HTML`, `Element`, `Canvas`, and `Graphics`.

#### 모질라 관련 콘텐츠

아래 태그는 모질라 관련 콘텐츠에만 사용합니다.

- `Mozilla`
- `Firefox`
- `Firefox OS`
- `Gecko`
- `XUL`
- `XPCOM`

### API 식별

API 참조 내에서 각 문서는 API에서 다루는 부분을 식별해야합니다.

- Interface
  - : The main article for an interface should have this tag. For example, {{domxref("RTCPeerConnection")}}.
- Constructor"
  - : Each interface may have up to one page tagged "Constructor"; this is the interface's constructor. The page should have the same name as the interface, like {{domxref("RTCPeerConnection.RTCPeerConnection()")}}.
- Property
  - : Every article describing a particular property within an interface needs this tag. See {{domxref("RTCPeerConnection.connectionState")}}, for example.
- Method
  - : Each article documenting an interface method needs this tag. See {{domxref("RTCPeerConnection.createOffer()")}} for example.

In addition, the reference pages need to include interface, property, and method names among their tags. Some examples:

- The interface {{domxref("RTCPeerConnection")}}
  - : Include the tag "RTCPeerConnection" along with the other relevant tags ("Interface", "WebRTC", "WebRTC API", "API", "Reference", and so forth).
- The method {{domxref("RTCPeerConnection.createOffer()")}}
  - : Include the tags "RTCPeerConnection" and "createOffer" (note _no_ parentheses in tag names!) along with the other relevant tags, including "WebRTC", "WebRTC API", "API", "Reference", and so forth. Consider including things like "Offer" and "SDP", which are also relevant here.
- The property {{domxref("RTCPeerConnection.iceConnectionState")}}
  - : Include the tags "RTCPeerConnection" and "iceConnectionState" along with the other relevant tags, including "WebRTC", "WebRTC API", "API" and "Reference". Also consider including "ICE".

### 기술 상태

To help the reader understand how viable a technology is, we use tags to label pages as to the status of the technology's specification. This isn't as detailed as actually explaining what the spec is and how far the technology has come in the specification process (that's what the Specifications table is for), but it helps the reader judge, at a glance, whether it's a good idea to use the technology described in the article.

다음 태그와 가능한 값은 다음과 같습니다:

- `Read-only`
  - : Apply this tag to reference pages which describe a property or attribute which is read-only.
- `Non-standard`
  - : Indicates that the technology or API described on the page is not part of a standard, whether it's stable or not in any browsers which implement it (if it's not stable, it should also be Experimental")}}). If you don't use this tag, your readers will assume the technology is standard. The compatibility table on the page should clarify which browser(s) support this technology or API.
- `Deprecated`
  - : The technology or API covered on the page is marked as deprecated in the specification, and is likely to eventually be removed, but is generally still available in current versions of browsers.
- `Obsolete`
  - : The technology or API has been deemed obsolete and has been removed (or is actively being removed) from all or most current browsers.
- `Experimental`
  - : The technology is not standardized, and is an experimental technology or API that may or may not ever become part of a standard. It is also subject to change in the browser engine (typically only one) that implements it. If the technology isn't part of any specification (even in draft form), it should also have the Non-standard")}} tag.
- `Needs Privileges`
  - : The API requires privileged access to the device on which the code is running.
- `Certified Only`
  - : The API only works in certified code.

These tags are no excuse to leave out the [compatibility table](/ko/docs/Project:Compatibility_tables) in your article! That should always be present.

### 기술 수준

Use the skill-level tag type only for guides and tutorials (that is, pages tagged `Guide`) to help users choose tutorials based on how familiar they are with a technology. There are three values for this:

- `Beginner`
  - : Articles designed to introduce the reader to a technology they've never used or have only a passing familiarity with.
- `Intermediate`
  - : Articles for users who have gotten started with the technology but aren't experts.
- `Advanced`
  - : Articles about stretching the capabilities of a technology and of the reader.

### 문서 메타데이터

글쓰기 커뮤니티는 태그를 사용하여 문서에 특정 유형의 작업이 필요하다고 표시합니다. 우리가 가장 많이 사용하는 목록은 다음과 같습니다:

- `Draft`
  - : The article is not complete, and is at least in theory still actively being updated (although it's also possible it's been forgotten about). Try to check with the most recent contributors before making changes, in order to avoid potential content collisions.
- `NeedsContent`
  - : The article is a stub, or is otherwise lacking information. This tag means that someone should review the content and add more details and/or finish writing the article.
- `NeedsExample`
  - : The article needs one or more examples created to help illustrate the article's point. These examples should use the [live sample system](/ko/docs/Project:MDN/Contributing/How_to_help/Code_samples).
- `NeedsLiveSamples`
  - : The article has one or more examples that need to be updated to use the [live sample system](/ko/docs/Project:MDN/Contributing/How_to_help/Code_samples).
- `NeedsUpdate`
  - : The content is out of date and needs to be updated.
- `l10n:exclude`
  - : The content is not really worth localizing and will not appear on localization status pages.
- `l10n:priority`
  - : The content is important and should be marked as a priority for MDN translators. Shows up in an extra priority table on localization status pages.

## 조합하기

각 페이지에 여러 유형의 태그를 할당할 수 있습니다.

- 초보자를 위한 WebGL 튜토리얼
  - : `WebGL`, `Graphics`, `Guide`, `Beginner`
- {{HTMLElement("canvas")}}용 레퍼런스 페이지
  - : `Canvas`, `HTML`, `Element`, `Graphics,` `Reference`
- Firefox OS 개발자 도구용 랜딩 페이지
  - : `Tools`, `Firefox OS`, `Landing`

## 태그 추가 및 검색 필터

MDN 페이지에 올바르게 태그를 지정하지 않으면 검색 필터가 제대로 작동하지 않습니다. 다음은 검색 필터 목록과 검색 태그입니다.

> **참고:** If multiple tags are listed under "Tag name," that means any one or more of these tags must be present for the article to match.

| 필터 그룹 | 검색명                | 태그명                                                                                |
| --------- | --------------------- | ------------------------------------------------------------------------------------- |
| 주제      | Open Web Apps         | Apps                                                                                  |
|           | HTML                  | HTML                                                                                  |
|           | CSS                   | CSS                                                                                   |
|           | JavaScript            | JavaScript                                                                            |
|           | APIs and DOM          | API                                                                                   |
|           | Canvas                | Canvas                                                                                |
|           | SVG                   | SVG                                                                                   |
|           | MathML                | MathML                                                                                |
|           | WebGL                 | WebGL                                                                                 |
|           | XUL                   | XUL                                                                                   |
|           | Marketplace           | Marketplace                                                                           |
|           | Firefox               | Firefox                                                                               |
|           | 안드로이드 용 Firefox | Firefox Mobile                                                                        |
|           | 데스크탑 용Firefox    | Firefox Desktop                                                                       |
|           | Firefox 운영체제      | Firefox OS                                                                            |
|           | 모바일                | Mobile                                                                                |
|           | 웹 개발               | Web Development                                                                       |
|           | 애드온 & 확장프로그램 | Add-ons \|\| Extensions \|\| Plugins \|\| Themes                                      |
|           | 게임                  | Games                                                                                 |
| 기술 수준 | 전문가                | Advanced                                                                              |
|           | 중급자                | Intermediate                                                                          |
|           | 초급자                | Beginner                                                                              |
| 문서 형식 | 문서                  | _This restricts the search to docs content, leaving out Hacks and other MDN content._ |
|           | 체험판                | _This includes Demo Studio content in the search results._                            |
|           | 도구                  | Tools                                                                                 |
|           | 코드 샘플             | Example                                                                               |
|           | 튜토리얼              | Guide                                                                                 |
|           | 개발자 프로필         | _This includes developer profiles from the MDN site in the search results._           |
|           | 외부 리소스           | _The dev team is still figuring this out..._                                          |

## 해결할 수 있는 태그 추가 문제

해결할 수 있는 여러 종류의 태그 추가 문제가 있습니다:

- 태그 없음
  - : Generally articles should have at _least_ a "[category](#document_category)" tag and a "[topic](#topic)" tag. Usually other tags are appropriate as well, but if you can help us ensure that the minimum tags are present, you'll be a documentation hero!
- 표준을 따르지 않은 태그
  - : Please fix any documents whose tags don't follow the standards on this page.
    Note that you may occasionally see some localized tags (such as `Référence`) showing up on some English pages. This was due to a [bug in Kuma](https://bugzilla.mozilla.org/show_bug.cgi?id=776048), which caused the tags to reappear even if they were deleted. That bug has [since been fixed](https://bugzilla.mozilla.org/show_bug.cgi?id=776048#c37), so any remaining localized tags can be cleaned up if they're spotted.
- 올바르지 않은 태그
  - : If you're looking at an article about HTML and it's tagged "JavaScript", that's probably wrong! Likewise, if an article discusses Mozilla internals but has a "Web" tag, that's probably wrong too. Remove these tags and add the right tags if they aren't already there. Please also correct misspelled tags (e.g., "Javascript" will still match, since tags are case-insensitive, but let's not be sloppy!).
- 누락된 태그
  - : If an article has some but not all of the tags it needs, feel free to add more. For example, if a page in JavaScript reference is (correctly) tagged "JavaScript" but nothing else, you're invited to tag the page "Reference" as well!
- 스팸 태그
  - : This insidious beast is the most revolting tag problem of all: some Web vermin has deposited its droppings in the page tags (like "Free warez!" or "Hey I was browsing your site and wanted to ask you if you could help me solve this problem I'm having with Flash crashing all the time"). We've got to delete these right away! They're ugly, they're hard to manage if they're allowed to linger too long, and they're terrible for {{Glossary("SEO")}}.

If you see one (or more) of these problems, please [log into MDN](/ko/docs/Project:MDN/Contributing/Getting_started#Logging_into_MDN) and click EDIT at the top right of the MDN window. Once the editor loads up, scroll down to the bottom of the page, where you'll see the tag box. For more details on the tagging interface, see "[The tags box](/ko/docs/Project:MDN/Contributing/Editor_guide#The_tags_box)" in the [MDN editor guide](/ko/docs/Project:MDN/Contributing/Editor_guide).
