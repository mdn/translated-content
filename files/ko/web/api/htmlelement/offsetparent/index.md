---
title: "HTMLElement: offsetParent 속성"
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("HTML DOM") }}

읽기 전용 **`HTMLElement.offsetParent`** 속성은 요소 계층에서 가장 가까운
위치에 지정된 조상 요소를 참조로 반환합니다.

위치로 지정된 조상 요소는 다음과 같습니다.

- 절대 위치 지정 요소의 [컨테이닝 블록](/ko/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block)
- 이 요소와는 다른 유효 [zoom](/ko/docs/Web/CSS/zoom) 값을 가진 요소 (즉, 모든 부모의 zoom 배율을 곱한 값)
- `td`, `th`, `table` in case the element itself is static positioned.
- 해당 요소가 정적으로 위치가 지정된 경우의 `td`, `th`, `table` 요소

위치가 지정된 조상 요소가 없는 경우 `body`가 반환됩니다.

> [!NOTE] > `offsetParent`는 다음의 경우 `null`을 반환합니다.
> 상황:
>
> - 요소 또는 조상 요소의 `display` 속성이
>   `none`으로 설정되어 있는 경우.
> - 요소의 `position` 속성이 `fixed`로 설정되어 있는 경우
>   Firefox는 `<body>`를 반환합니다.
> - 요소가 `<body>` 또는 `<html>`인 경우.

`offsetParent`는
{{domxref("HTMLElement.offsetTop","offsetTop")}} 및
{{domxref("HTMLElement.offsetLeft","offsetLeft")}} 값이 해당 요소의 패딩 가장자리와 연관되어 있기 때문에 유용합니다.

## 값

현재 요소가 offset된 기준이 되는 요소를 참조하는 객체.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
