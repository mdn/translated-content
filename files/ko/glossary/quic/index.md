---
title: QUIC
slug: Glossary/QUIC
tags:
  - Glossary
  - HTTP
  - QUIC
  - Reference
  - Web Performance
translation_of: Glossary/QUIC
---
**Quick UDP Internet Connection** 또는 **QUIC**은 UDP 상에 구현된 실험적인 다중 전송 프로토콜로 TCP 및 웹 애플리케이션 전송을 개선하기 위한 방법을 위해 Google에서 실험적으로 개발하였습니다.

TCP는 많은 운영 체제 커널에 내장되어 있기 때문에 변경사항을 실험하고 수정을 구현하는 것에 시간이 많이드는 과정이기에, QUIC을 만들어 개발자는 더 빠르게 실험을 할 수 있고, 새로운 것을 시도할 수 있게 되었습니다.

QUIC은 HTTP/2의 의미론적 지원을 위해 설계되었습니다. 멀티플랙싱, 흐름 제어, 보안 및 혼잡 제어를 제공해줍니다.

QUIC의 중요한 기능입니다.

- 연결 설정 시간 단축
- 혼잡 제어 개선
- Head of Line Blocking 없는 멀티플렉싱
- 전달 오류 수정
- 연결 마이그레이션

현재는 QUIC를 지원하는 브라우저와 서버는 그리 많지 않습니다.

### 리소스

- [Chromium Projects Documentation](https://www.chromium.org/quic)
- [IETF Draft](https://datatracker.ietf.org/doc/html/draft-tsvwg-quic-protocol-02)

## 같이 보기

- [HTTP/2](/ko/docs/Glossary/HTTP_2)
