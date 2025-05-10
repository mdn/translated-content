---
title: Time to first byte (TTFB)
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{GlossarySidebar}}

**Time to First Byte(TTFB)** 는 브라우저가 페이지를 요청한 시점과 서버로부터 첫 번째 정보 바이트를 수신한 시점 사이의 시간을 나타냅니다. 이 시간에는 [DNS](/ko/docs/Glossary/DNS) 조회와 [TCP](/ko/docs/Glossary/TCP) 핸드셰이크 및 [TLS](/ko/docs/Glossary/TLS) 핸드셰이크([HTTPS](/ko/docs/Glossary/HTTPS)를 통해 이루어진 경우)를 사용한 연결 설정이 포함됩니다.

TTFB는 요청 시작과 응답 시작 사이에 걸리는(밀리초)입니다.

```plain
TTFB = responseStart - navigationStart
```

## 같이 보기

- [일반적인 HTTP 세션](/ko/docs/Web/HTTP/Guides/Session)
- [PerformanceResourceTiming](/ko/docs/Web/API/PerformanceResourceTiming)
- [PerformanceTiming](/ko/docs/Web/API/PerformanceTiming)
