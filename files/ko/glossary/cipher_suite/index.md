---
title: 암호화 스위트 (Cipher suite)
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

암호화 스위트는 키 교환 알고리즘, 인증 방법, 대량 암호화 {{Glossary("cipher", "암호")}} 및 메시지 인증 코드의 조합입니다.

{{Glossary("TLS")}}와 같은 {{Glossary("cryptosystem", "암호화시스템")}}에서는, 클라이언트와 서버는 안전하게 통신을 시작하기 전에 암호화 스위트에 동의해야 합니다. 일반적인 암호화 스위트는 ECDHE_RSA_WITH_AES_128_GCM_SHA256 또는 ECDHE-RSA-AES128-GCM-SHA256 유사하고 다음을 나타냅니다.

- 키 교환을 위한 ECDHE (타원 곡선 일시적인 Diffie-Hellman)
- 인증을 위한 RSA
- AES-128을 암호로 사용하고, Galois/Counter Mode (GCM)를 블록 암호 운용 방식으로 사용
- 해시 기반 메시지 인증 코드인 SHA-256 (HMAC)

## 같이 보기

- [Mozilla는 TLS에 대한 암호화 스위트 선택을 권장합니다](https://wiki.mozilla.org/Security/Server_Side_TLS)
