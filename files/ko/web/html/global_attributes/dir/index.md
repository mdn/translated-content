---
title: dir
slug: Web/HTML/Global_attributes/dir
---

{{HTMLSidebar("Global_attributes")}}

**`dir`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 요소의 쓰기 방향을 나타내는 열거형 특성입니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}

가능한 값은 다음과 같습니다.

- `ltr`은 왼쪽에서 오른쪽을 뜻하며, 좌횡서 언어인 한국어나 영어에 사용합니다.
- `rtl`은 오른쪽에서 왼쪽을 뜻하며, 우횡서 언어인 아랍어 등을 사용합니다.
- `auto`는 {{glossary("user agent", "사용자 에이전트")}}가 결정합니다. 사용자 에이전트는 기본적인 알고리즘을 사용해 요소 내부의 문자를 분석한 후, 명확한 방향성을 가진 문자가 존재하는 경우 전체 요소에 해당 방향성을 적용합니다.

> **참고:** `dir` 특성은{{HTMLElement("bdo")}} 요소에 필수로 지정해야 하며, 다른 뜻을 가집니다.
>
> - {{ HTMLElement("bdi") }} 요소는 `dir` 특성을 상속하지 않으며, 지정하지 않은 경우 `auto`를 기본값으로 사용합니다.
> - {{ cssxref("direction") }}과 {{ cssxref("unicode-bidi") }}를 지원하며 CSS를 활성화한 경우, 특성 값은 무시하고 CSS 값을 대신 사용합니다.
> - 글자의 쓰기 방향은 외형이 아니라 그 의미에 관여하므로, 웹 개발자로서 되도록 CSS 속성 대신 `dir` 특성을 사용하세요. 관련 속성을 지원하지 않거나, CSS를 비활성화한 브라우저에서도 텍스트가 올바른 방향으로 나타납니다.
> - 데이터베이스에 저장된 사용자 입력 값처럼 방향성을 알 수 없는 데이터에는 `auto` 값을 사용해야 합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- 이 특성을 나타내는 {{domxref("HTMLElement.dir")}}.
