---
title: style
slug: Web/HTML/Reference/Global_attributes/style
original_slug: Web/HTML/Global_attributes/style
---

{{HTMLSidebar("Global_attributes")}}

**`style`** [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)은 요소에 적용할 [CSS](/ko/docs/Web/CSS) 스타일 선언을 담습니다. 스타일은 별도의 파일에 정의하는 것이 권장된다는 점을 참고하세요. 이 특성과 {{HTMLElement("style")}} 요소는 주로 테스트 등 빠른 스타일링을 위한 목적으로 사용됩니다.

{{InteractiveExample("HTML Demo: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Well, I am the slime from your video<br />
    Oozin' along on your livin' room floor.
  </p>
</div>
```

> [!NOTE]
> `style` 특성에 의미를 담으면 안됩니다. 페이지의 모든 스타일을 제거하더라도, 그 의미는 옳게 남아있어야 합니다. 보통 `style`을 사용해 불필요한 정보를 숨기기보단 [`hidden`](/ko/docs/Web/HTML/Reference/Global_attributes/hidden) 특성을 사용해야 합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes).
