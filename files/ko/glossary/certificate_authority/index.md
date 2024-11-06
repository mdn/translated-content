---
title: 인증 기관 (Certificate authority)
slug: Glossary/Certificate_authority
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

인증 기관 (Certificate authority, CA)은 {{Glossary("Digital certificate", "디지털 인증서")}}와 관련 {{Glossary("Key", "키")}}에 {{Glossary("Signature/Security", "서명")}}하여 포함된 정보와 키가 정확하다고 주장하는 기관입니다.

웹사이트 디지털 인증서의 경우, 이 정보에는 최소한 디지털 인증서를 요청한 조직의 이름(예, Mozilla Corporation), 해당 사이트 (e.g., mozilla.org) 및 인증 기관이 포함됩니다.

인증 기관은 브라우저가 웹 사이트 ID를 확인하고 SSL(및 HTTPS)을 통해 안전하게 연결할 수 있도록 하는 [인터넷 공개키 인프라](https://en.wikipedia.org/wiki/Public_key_infrastructure)의 일부입니다.

> [!NOTE]
> 웹 브라우저에는 '루트 인증서' 목록이 미리 로드되어 있습니다. 브라우저는 이를 사용하여 웹사이트 인증서가 루트 인증서에 "체인 백"되는 인증 기관에 의해 서명되었는지(즉, 루트 인증서 소유자 또는 중간 CA가 신뢰했는지) 확실하게 확인할 수 있습니다. 궁극적으로 이 과정은 인증서에 서명하기 전에 적절한 신원 확인을 수행하는 모든 CA에 의존합니다!

## 같이 보기

- 위키백과의 [인증 기관](https://en.wikipedia.org/wiki/Certificate_authority)
- 위키백과의 [공개키 인프라](https://en.wikipedia.org/wiki/Public_key_infrastructure)
- [Mozilla 포함 CA 인증서 목록](https://wiki.mozilla.org/CA/Included_Certificates)
