---
title: lang
slug: Web/HTML/Global_attributes/lang
---

{{HTMLSidebar("Global_attributes")}}

**`lang`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 요소 내의 수정 불가한 텍스트의 언어와, 수정 가능한 텍스트가 사용해야 하는 언어를 정의합니다. 특성의 값은 [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt)에 정의된 형식의 "언어 태그" 한 개입니다.

> **참고:** `lang`의 기본값은 "알 수 없음"이므로 항상 적절한 값을 지정하는 것이 좋습니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

특성의 값이 빈 문자열(`lang=""`)일 때의 값은 "알 수 없음"(unknown)이며, 지정한 값이 BCP47의 유효한 값이 아닌 경우 "유효하지 않음"(invalid)입니다.

> **참고:** ## 언어 태그 구문BCP47의 전체 구문은 매우 상세하여 어떤 언어의 세세한 방언을 나타낼 수도 있지만, 대부분의 사용법은 훨씬 단순합니다.언어 태그는 붙임표로 구분하는 "언어 하위태그"로 구성하며, 각각의 하위태그가 언어의 특정 속성을 나타냅니다. 가장 흔히 쓰이는 세 개의 하위 태그는 다음과 같습니다.- 언어 하위태그 - : 필수. 두 세 글자로 구성된 코드로 기본 언어를 정의하며, 보통 모두 소문자로 표기합니다. 예를 들어 영어의 언어 태그는 `en`이고, 한국어의 언어 태그는 `ko`입니다.
>
> - 활자 하위태그
>   - : 선택사항. 언어의 문자 체계를 나타내며 항상 네 글자이고, 첫 글자는 대문자입니다. 예를 들어, 점자로 쓴 프랑스어는 `fr-Brai`이고, 일본어 가타카나는 `ja-Kana`입니다. 라틴 알파벳으로 작성한 영어와 같이 굉장히 흔히 쓰이는 체계의 경우 활자 하위태그를 지정할 필요가 없습니다.
> - 지역 하위태그
>   - : 선택사항. 기본 언어 안에서 특정 지역의 방언을 정의하며, 국가 코드와 일치하는 전체 대문자의 두 글자이거나, 국가 외 지역과 일치하는 세 글자 숫자로 구성됩니다. `es-ES`는 스페인에서 사용하는 스페인어, `es-013`은 중앙 아메리카에서 사용하는 스페인어이며 "국제 스페인어"는 짧게 `es`가 됩니다.활자와 지역 하위태그가 모두 존재할 경우 활자 태그가 더 앞에 배치됩니다. 예를 들어, `ru-Cyrl-BY`는 키릴 문자로 작성한 벨라루스의 러시아어입니다.언어에 적합한 하위태그를 찾아보시려면 [Language Subtag Lookup](https://r12a.github.io/app-subtags/)을 사용해보세요.

CSS {{cssxref(":lang")}} 의사 클래스에서는 유효하지 않은 언어의 이름 두 가지가 이 서로 다르다면 별도로 취급합니다. 예컨대, `:lang(es)` `lang="es-ES"`와 `lang="es-419"` 모두 선택하지만, `:lang(xyzzy)`는 `lang="xyzzy-Zorp!"`를 선택하지 못합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- [`Content-Language` HTTP 헤더](/ko/docs/Web/HTTP/Headers/Content-Language)
