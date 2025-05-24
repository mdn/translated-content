---
title: 보안 및 개인정보
slug: conflicting/Web/Security
original_slug: Learn_web_development/Extensions/Security_privacy
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

> [!NOTE]
> 아래 내용에서 확인할 수 있지만, 현재 이 모듈은 커리큘럼 개요 혹은 교과 계획서의 수준이며 입문자 가이드에 대한 일부 링크만 제공하고 있습니다. 시간이 허락하는대로 이 문서를 완전한 과정으로 전환할 예정에 있습니다.

잠재적인 공격자로부터 사용자의 데이터를 탈취당하지 않도록 보호하고, 이를 어떻게 보호할 수 있는지 이해하는 것은 매우 중요합니다. 이 모듈은 데이터를 탈취하려는 시도를 어렵게 만들기 위한 웹사이트 보안 강화, 제3자와 공유하지 않고 사용자의 데이터를 존중하는 방식으로 수집하며 추적을 피하는 방법을 다룹니다.

## 선행 지식

이 모듈을 시작하기 전에 [HTML](/ko/docs/Learn_web_development/Core/Structuring_content) 와 [CSS](/ko/docs/Learn_web_development/Core/Styling_basics) 에 대한 선행 지식이 필요합니다.

## 학습 성과

### 5.1 보안 및 개인정보 보호 기초

> [!NOTE]
>
> - 이 모듈의 모든 기준을 충족하는 것이 학생이 자격이 증명된 보안 엔지니어가 된다는 것을 의미하는 것은 아니지만, 웹 개발자가 웹 보안과 개인정보 보호의 기초를 이해하는 것은 중요합니다.
> - 학생들은 다수의 보안 문제가 서버 측면의 코드나 서버 혹은 클라이언트 측면에서의 코드로 인해 발생한다는 것을 이해하는 것 또한 중요합니다. 브라우저가 제 역할을 잘 수행한다면 대부분의 코드는 매우 적은 보안 위협만을 가지고 있습니다.

학습 성과

- 보안과 개인정보에 대한 차이를 이해할 수 있습니다.

- 고수준의 일반적인 HTTP 모델을 이해할 수 있습니다.

- HTTPS가 무엇인지, 왜 이것이 중요한지 배웁니다.

- 동일 출처 보안:

  - 이것이 웹에서 기본이 되는 이유

  - 교차 출처 리소스 공유(CORS)와 같이 이를 안전하게 우회하는 방법

- 쿠키의 저장 방식과 추적과 같은 보안 및 개인정보 보호 관련 영향

- 일반적인 보안 문제가 발생하는 상황 이해

  - (비밀번호나 신용 카드 정보와 같이) 사용자에게 민감한 데이터를 요청하고 서버로 전송할 때.

  - 서버에서 데이터를 요청할 때.

  - 서버 간 데이터 전송 시 (예를 들어 서버가 웹 서비스에서 데이터를 요청하는 경우).

  - 쿠키 혹은 다른 메커니즘으로 사용자 상태를 유지할 때.

- 일반적인 보안 위협과 이를 완화하는 방법 학습

  - 사이트 간 스크립팅 (XSS).

  - 사이트 간 위조 요청 (CSRF).

  - 클릭재킹.

  - 서비스 거부 (DoS).

- 아래 항목과 같은 중요한 기술 목적의 이해

  - 콘텐츠 보안 정책 (CSP).

  - 권한 정책.

  - 사용자 활성화(일시적 활성화)를 위한 강력한 기능의 웹 모델.

### 5.2 데이터 보호 규칙

학습 성과

- 사용자 개인정보 보호와 관련된 기본 개념 이해

  - 개인 식별 정보 (PII).

  - 기밀성

  - 추적

  - 지문

- 아래 항목과 같은 지역별 개인정보 보호 법 준수

  - [일반 데이터 보호 규정 (GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) (EU).

  - [데이터 보호법 2018](https://www.gov.uk/data-protection) (UK), gov.uk.

  - [캘리포니아 소비자 개인정보 보호법 (2018)](https://www.oag.ca.gov/privacy/ccpa) (US, CA), ca.gov.

  - [아동 온라인 개인정보 보호법 (COPPA)](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa) (US), ftc.gov.

- 실제 구현 측면에서 위와 같은 법률을 준수하는 방법 이해

> [!NOTE]:
> 위의 기준을 준수하기 위해 학생들이 개인정보 보호법의 법률 전문가가 될 필요는 없지만, 위 법률들의 의미와 그것이 업무에 어떤 영향을 미치는지 이해하는 것이 좋습니다.

## 리소스

- [웹에서의 보안](/ko/docs/Web/Security)
- [웹사이트 보안](/ko/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [웹에서의 개인 정보](/ko/docs/Web/Privacy)
- [GDPR 준수를 위한 완벽 가이드](https://gdpr.eu/), gdpr.eu

## 같이 보기

- [Learn Privacy](https://web.dev/learn/privacy/), web.dev (2023)
