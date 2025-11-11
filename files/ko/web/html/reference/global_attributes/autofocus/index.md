---
title: autofocus
slug: Web/HTML/Reference/Global_attributes/autofocus
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

**`autofocus`** [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)은 페이지 로드 시 또는 {{HTMLElement("dialog")}} 표시 시 해당 요소가 자동으로 포커스를 받아야 함을 나타내는 불리언 특성입니다.

```html
<input name="q" autofocus />
```

문서나 다이얼로그 내에서 autofocus 특성을 가진 요소는 단 하나만 존재해야 합니다. 여러 요소에 특성이 적용된 경우, 첫 번째 요소만 포커스를 받습니다.

> [!NOTE]
> 이 `autofocus` 특성은 양식 컨트롤 요소 뿐만 아니라 모든 요소에 적용 가능합니다. 예를 들어, [contenteditable](/ko/docs/Web/HTML/Reference/Global_attributes/contenteditable) 영역에 적용될 수 있습니다.

## 접근성 고려사항

양식 컨트롤에 자동으로 포커스를 설정하는 것은 스크린 리더 기능을 사용하는 시각 장애인 및 인지 장애가 있는 사람들에게 혼란을 줄 수 있습니다. `autofocus` 특성이 지정된 경우 스크린 리더는 사용자에게 사전 경고 없이 양식 컨트롤로 "순간이동"시킵니다.

`autofocus` 특성을 적용할 때에는 접근성을 신중히 고려해야 합니다. 컨트롤에 자동으로 포커스를 설정하는 경우 페이지 로드 시 스크롤이 발생할 수 있습니다. 또한, 일부 터치 기기에서는 동적 키보드가 표시될 수 있습니다. 스크린 리더는 포커스를 받는 양식 컨트롤의 라벨을 읽어주지만 라벨 이전의 내용은 읽어주지 않으며, 작은 기기를 사용하는 유저 또한 이전 컨텐츠의 문맥을 놓칠 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
