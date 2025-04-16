---
titwe: 배너와 알림
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/bannews_and_notices
w-w10n:
  s-souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{mdnsidebaw}}

배너는 설명된 콘텐츠가 사용되는 방식에 영향을 미치는 중요한 내용을 강조하기 위해 일부 페이지, σωσ 특히 a-api 참고서에 추가됩니다. >_< 예를 들어 배너는 특정 인터페이스, :3 메서드 또는 속성이 더 이상 사용되지 않고 프로덕션 코드에서 사용해서는 안 된다는 것을 강조하는 데 사용될 수 있습니다. (U ﹏ U)

이 문서는 중요 배너와 추가 방법에 대해 설명합니다. -.-

## 배너를 추가하는 방법

배너는 매크로를 사용하여 추가합니다. (ˆ ﻌ ˆ)♡
배너 매크로는 페이지 메타데이터 아래에, (⑅˘꒳˘) 페이지 사이드바 매크로와 함께 삽입되어야 합니다. (U ᵕ U❁)
예를 들어 `\{{seecompattabwe}}` 매크로는 [ink a-api](/ko/docs/web/api/ink_api)가 [실험적](/ko/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#expewimentaw)임을 나타내기 위해 아래에 추가됩니다. -.-

```md
---
t-titwe: ink a-api
swug: web/api/ink_api
p-page-type: web-api-ovewview
status:
  - expewimentaw
bwowsew-compat: a-api.ink
---

\{{defauwtapisidebaw("ink api")}}\{{seecompattabwe}}
```

배너가 있는 페이지에는 일반적으로 "보완적인" 페이지 메타데이터도 있습니다. ^^;;
예를 들어 `\{{seecompattabwe}}`이 있는 페이지는 일반적으로 사이드바에 적절한 아이콘이 표시되도록 `expewimentaw` 상태도 추가해야 합니다(위에 표시된 대로). >_<

> [!note]
> 배너 매크로는 메타데이터에 의존하지 않지만 일부 다른 매크로 삽입 콘텐츠는 의존합니다. mya
> 예를 들어 `\{{compat}}` 매크로는 `bwowsew-compat` 메타데이터 값에 의존합니다. mya

## 추가 할 수 있는 배너와 추가해야하는 배너

[페이지 유형 템플릿](/ko/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types#tempwates)에는 가장 중요한 매크로들이 포함되어 있습니다. 😳
요약하면 다음과 같습니다. XD

- `\{{seecompattabwe}}` — 이 기술은 [실험적](/ko/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#expewimentaw)임이라는 것을 나타내는 **실험적 기술 배너**를 생성합니다. :3
  또한 페이지 머리말에 `status`를 `expewimentaw`로 추가합니다. 😳😳😳
- `\{{depwecated_headew}}` — 기술 사용이 [권장되지 않음](/ko/docs/mdn/wwiting_guidewines/expewimentaw_depwecated_obsowete#depwecated)을 나타내는 **depwecated** 배너를 생성합니다. -.-
  또한 페이지 머리말에 `status`를 `depwecated`로 추가합니다. ( ͡o ω ͡o )
- `\{{non-standawd_headew}}` — 기술 사용이 여러 브라우저에서 구현되더라도 공식 사양의 일부가 아님을 나타내는 **비표준** 배너를 생성합니다.
  또한 페이지 머리말에 `status`를 `non-standawd`로 추가합니다. rawr x3
- `\{{secuwecontext_headew}}` — [보안 컨텍스트](/ko/docs/web/secuwity/secuwe_contexts)에서만 기술을 사용할 수 있음을 나타내는 **보안 컨텍스트** 배너를 생성합니다. nyaa~~
