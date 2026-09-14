---
title: 사용자 에이전트
slug: Glossary/User_agent
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

사용자 에이전트(user agent)는 사용자를 대표하는 컴퓨터 프로그램으로, {{Glossary("World Wide Web", "웹")}} 맥락에선 {{Glossary("Browser", "브라우저")}}를 의미합니다.

브라우저 외에도, 웹 페이지를 스크랩하는 봇, 다운로드 관리자, 웹에 접근하는 다른앱도 사용자 에이전트입니다. 브라우저는 서버에 보내는 모든 요청에 사용자 에이전트(UA) 문자열이라고 부르는, 자신의 정체를 알리는 {{HTTPHeader("User-Agent")}} {{Glossary("HTTP")}} 헤더를 보냅니다. 이 문자열은 보통 브라우저 종류, 버전 번호, 호스트 운영체제를 포함합니다.

스팸 봇, 다운로드 관리자, 일부 브라우저는 자신의 정체를 숨기고 다른 클라이언트인 척 하려고 가짜 사용자 에이전트(UA) 문자열을 보내곤 하며, 이를 사용자 에이전트 스푸핑(spoofing)이라고 말합니다.

클라이언트에서는 {{Glossary("JavaScript")}}의 {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}} 속성을 통해 사용자 에이전트 문자열에 접근할 수 있습니다.

보통 사용자 에이전트 문자열은 `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`과 같은 형태입니다.

## 같이 보기

- 위키백과 [사용자 에이전트](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9A%A9%EC%9E%90_%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8)
- {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}}
- [사용자 에이전트를 이용한 브라우저 감지](/ko/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: The `User-Agent` header
- [Glossary:](/ko/docs/Glossary)
  - {{Glossary("Browser")}}

- HTTP Headers
  - {{HTTPHeader("User-agent")}}
