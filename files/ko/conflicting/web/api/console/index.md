---
title: Window.console
slug: conflicting/Web/API/console
original_slug: Web/API/Window/console
---

{{APIRef}}

**`Window.console`** 속성은 브라우저 콘솔에 로그를 남길 수 있는 메서드를 가진 {{domxref("Console")}} 객체의 참조를 반환합니다. 콘솔 메서드는 디버깅 용도로만 사용해야 하며, 엔드유저에게 정보를 제공할 의도를 가져션 안됩니다.

## 예제

### 콘솔에 로그 남기기

다음 코드는 콘솔에 로그 텍스트를 남깁니다.

```js
console.log("An error occurred while loading the content");
```

다음 코드는 객체를 콘솔에 출력합니다. 출력 결과를 클릭하면 객체의 필드를 펼쳐볼 수 있습니다.

```js
console.dir(someObject);
```

{{domxref("Console")}} 문서의 [예제](/ko/docs/Web/API/console#%ec%98%88%ec%a0%9c) 항목에서 더 자세한 예제를 살펴보세요.

## 명세

{{Specifications}}

> [!NOTE]
> 현재 브라우저간 구현에 많은 차이가 있지만, 하나로 통합하여 서로 보다 일관적으로 만드는 작업이 진행 중입니다.
