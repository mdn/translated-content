---
title: 배너와 알림
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{MDNSidebar}}

배너는 설명된 콘텐츠가 사용되는 방식에 영향을 미치는 중요한 내용을 강조하기 위해 일부 페이지, 특히 API 참고서에 추가됩니다. 예를 들어 배너는 특정 인터페이스, 메서드 또는 속성이 더 이상 사용되지 않고 프로덕션 코드에서 사용해서는 안 된다는 것을 강조하는 데 사용될 수 있습니다.

이 문서는 중요 배너와 추가 방법에 대해 설명합니다.

## 배너를 추가하는 방법

배너는 매크로를 사용하여 추가합니다.
배너 매크로는 페이지 메타데이터 아래에, 페이지 사이드바 매크로와 함께 삽입되어야 합니다.
예를 들어 `\{{SeeCompatTable}}` 매크로는 [Ink API](/ko/docs/Web/API/Ink_API)가 [실험적](/ko/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)임을 나타내기 위해 아래에 추가됩니다.

```md
---
title: Ink API
slug: Web/API/Ink_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Ink
---

\{{DefaultAPISidebar("Ink API")}}\{{SeeCompatTable}}
```

배너가 있는 페이지에는 일반적으로 "보완적인" 페이지 메타데이터도 있습니다.
예를 들어 `\{{SeeCompatTable}}`이 있는 페이지는 일반적으로 사이드바에 적절한 아이콘이 표시되도록 `experimental` 상태도 추가해야 합니다(위에 표시된 대로).

> [!NOTE]
> 배너 매크로는 메타데이터에 의존하지 않지만 일부 다른 매크로 삽입 콘텐츠는 의존합니다.
> 예를 들어 `\{{Compat}}` 매크로는 `browser-compat` 메타데이터 값에 의존합니다.

## 추가 할 수 있는 배너와 추가해야하는 배너

[페이지 유형 템플릿](/ko/docs/MDN/Writing_guidelines/Page_structures/Page_types#templates)에는 가장 중요한 매크로들이 포함되어 있습니다.
요약하면 다음과 같습니다.

- `\{{SeeCompatTable}}` — 이 기술은 [실험적](/ko/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)임이라는 것을 나타내는 **실험적 기술 배너**를 생성합니다.
  또한 페이지 머리말에 `status`를 `experimental`로 추가합니다.
- `\{{Deprecated_Header}}` — 기술 사용이 [권장되지 않음](/ko/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated)을 나타내는 **Deprecated** 배너를 생성합니다.
  또한 페이지 머리말에 `status`를 `deprecated`로 추가합니다.
- `\{{Non-standard_Header}}` — 기술 사용이 여러 브라우저에서 구현되더라도 공식 사양의 일부가 아님을 나타내는 **비표준** 배너를 생성합니다.
  또한 페이지 머리말에 `status`를 `non-standard`로 추가합니다.
- `\{{SecureContext_Header}}` — [보안 컨텍스트](/ko/docs/Web/Security/Secure_Contexts)에서만 기술을 사용할 수 있음을 나타내는 **보안 컨텍스트** 배너를 생성합니다.
