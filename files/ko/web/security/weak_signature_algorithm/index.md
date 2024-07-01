---
title: 약한 서명 알고리즘
slug: Web/Security/Weak_Signature_Algorithm
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

{{Glossary("Digital certificate", "디지털 인증서")}} {{Glossary("Signature/Security", "서명")}}에 사용되는 해시 알고리즘의 강도는 인증서 보안의 중요한 요소입니다. 이 문서에서는 약한 것으로 알려진 서명 알고리즘에 대한 몇 가지 정보를 제공하므로 적절한 때 이 알고리즘을 피할 수 있습니다.

해시 알고리즘의 약점으로 인해 공격자가 사기성 인증서를 생성하거나 획득할 수 있는 상황이 발생할 수 있습니다. 새로운 공격이 발견되고 사용 가능한 기술이 개선됨에 따라 공격이 보다 실현 가능해지면서 이전 알고리즘의 사용은 권장되지 않으며 이에 대한 지원은 결국 제거됩니다.

## SHA-1

SHA-1 인증서는 2017년부터 주요 브라우저 제조업체에서 더 이상 안전한 것으로 취급하지 않습니다. 대신 보다 안전한 해시 알고리즘(예: SHA-256 또는 SHA-512)을 사용하는 인증서를 사용해야 합니다.

## MD5

MD5 기반 서명에 대한 지원은 2012년 초에 제거되었습니다.

## 같이 보기

- SHA-1 사용 중단에 대한 [Mozilla 보안 블로그 게시물](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/)
