---
title: UUID
slug: Glossary/UUID
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**범용 고유 식별자(Universally Unique Identifier, UUID)** 는 해당 타입의 다른 모든 리소스 중에서 리소스를 고유하게 식별하는 데 사용되는 레이블입니다.

컴퓨터 시스템은 매우 큰 난수를 사용해 로컬에서 UUID를 생성합니다.
이론적으로 ID는 전역적으로 고유하지 않을 수 있지만, 중복 가능성은 거의 없습니다.
시스템에 정말로 고유한 ID가 필요한 경우, 중앙 기관에서 이를 할당할 수 있습니다.

UUID는 정규적으로 `123e4567-e89b-12d3-a456-426614174000` (하이픈으로 구분된 5개의 16진수 문자열) 형식의 36자 문자열로 표시되는 128비트 값입니다.
계산 방식이 약간 다른 여러 버전이 있습니다. 예를 들어, 시간적 정보를 포함합니다.

공식적인 정의는 [RFC4122: 범용 고유 식별자 (Universally Unique Identifier, UUID) URN 네임스페이스](https://www.rfc-editor.org/rfc/rfc4122)에서 찾을 수 있습니다.

## 같이 보기

- 위키백과의 [UUID](https://en.wikipedia.org/wiki/UUID)
- [`Crypto.randomUUID()`](/ko/docs/Web/API/Crypto/randomUUID)
