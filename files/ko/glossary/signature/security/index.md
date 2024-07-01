---
title: 서명 (signature) (보안)
slug: Glossary/Signature/Security
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**서명(signature)** 또는 '디지털 서명'은 메시지가 진짜임을 보여주는 {{glossary("protocol", "프로토콜")}}입니다.

주어진 메시지의 {{glossary("hash", "해시")}}에서, **서명 과정**은 먼저 엔터티의 비공개 {{glossary("key", "키")}}를 사용하여 서명 엔터티에 연결된 디지털 서명을 생성합니다.

메시지를 받으면, **인증 과정**을 진행합니다.

- '발신자를 인증합니다'. 발신자의 공개 키를 사용하여 서명을 {{glossary("decryption","복호화")}}하고 해시를 복구합니다. 해시는 발신자의 개인 키로만 생성할 수 있습니다.
- '메시지 무결성을 확인합니다'. 해시를 수신된 문서에서 새로 계산한 해시와 비교합니다(문서가 변조된 경우 두 해시가 달라집니다).

개인 키가 손상되거나 수신자에게 잘못된 공개 키가 제공되면 시스템이 실패합니다.

디지털 서명은 [공개 키 암호화](https://en.wikipedia.org/wiki/Public-key_cryptography)라고도 알려진 비대칭 암호화를 사용합니다.

## 같이 보기

- 위키백과의 [디지털 서명](https://en.wikipedia.org/wiki/Digital_signature)
- {{glossary("digest","다이제스트")}}, {{glossary("encryption", "암호화")}}를 참조하세요.
