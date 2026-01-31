---
title: 속도 제한
slug: Glossary/Rate_limit
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

{{GlossarySidebar}}

**속도 제한** 이란 네트워크 환경에서 시스템의 과부하와 성능 저하를 방지하기 위해 일정 시간 동안 수행할 수 있는 작업량을 제어하는 것을 의미합니다.
예를 들어, 서버는 일정 시간 동안 단일 클라이언트의 요청 횟수를 제한함으로써, 서버 성능 최적화는 물론 {{Glossary("Denial of Service", "서비스 거부 (Denial of Service, DoS)")}} 공격에 따른 피해를 줄일 수 있습니다.

속도 제한은 {{glossary("throttle", "스로틀링")}}과 동일하며, 특정 상황에서는 더 나은 사용자 경험과 정확한 동작을 위해 {{glossary("debounce", "디바운싱")}}을 채택할 수 있습니다.

## 같이 보기

- 용어 사전:
  - {{Glossary("디바운스")}}
  - {{Glossary("스로틀링")}}
- {{HTTPStatus("429", "429 Too Many Requests")}}
- [What is rate limiting? | Rate limiting and bots](https://www.cloudflare.com/en-gb/learning/bots/what-is-rate-limiting/) on cloudflare.com
