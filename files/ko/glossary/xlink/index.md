---
title: XLink
slug: Glossary/XLink
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

XLink는 XML과 XML 또는 기타 문서 간의 링크를 설명하는 데 사용되는 W3C 표준입니다. 처리 방법을 결정하기 위해 일부 동작은 구현에 달려있습니다.

단순 XLink는 Firefox(적어도 SVG 및 MathML에서) 지원되지만, XLink가 포함된 일반 XML 문서를 로드하고 XML 트리에서 관련 포인트를 클릭하려고 하면 링크로 작동하지 않습니다.

XLink 1.0이 일반 링크에 대해 번거롭다고 생각하는 사람들을 위해, XLink 1.1에서 단순 링크에 `xlink:type="simple"`을 지정할 필요가 없어졌습니다.

XLink는 [SVG](/ko/docs/Web/SVG), [MathML](/ko/docs/Web/MathML) 및 기타 중요한 표준에서 사용됩니다.

### 명세서

- [XLink 1.0](https://www.w3.org/TR/xlink/)
- [XLink 1.1](https://www.w3.org/TR/xlink11/) (현재 초안입니다)

### 같이 보기

- [XML](/ko/docs/Web/XML)
- [Code snippets:getAttributeNS](/ko/docs/Web/API/Element/getAttributeNS) - 이 DOM 메서드를 지원하지 않는 일부 브라우저를 처리하기 위한 래퍼
