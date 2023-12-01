---
title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserver()`** 생성자는 새로운 {{domxref("IntersectionObserver")}} 객체를 생성하고 반환합니다.

`rootMargin` 옵션을 지정했다면 값의 구문이 맞는지, 범위가 0.0 이상 1.0 이하인지, 그리고 역치가 오름차순으로 정렬됐는지 검사합니다. 역치 목록이 없다면 배열 `[0.0]`을 사용합니다.

## 구문

```js
new IntersectionObserver(callback[, options]);
```

### 매개변수

- `callback`

  - : 대상 요소의 보이는 영역 비율이 역치를 위아래로 넘을 때 (더 커졌거나 작아졌을 때 모두) 호출할 함수입니다. 두 개의 매개변수를 받습니다.
    - `entries`
      - : 더 드러나거나 가려져서 지정한 역치를 넘어가게 된 요소를 나타내는 {{domxref("IntersectionObserverEntry")}} 객체의 배열.
    - `observer`
      - : 콜백을 호출한 {{domxref("IntersectionObserver")}}.

- `options` {{optional_inline}}
  - : 감지기를 조절할 수 있는 객체입니다. 지정하지 않으면 문서 뷰포트를 루트로, 여백 없이, 0% 역치(하나의 픽셀이라도 보이면 콜백 호출)로 설정합니다.
    - `root`
      - : 대상 요소의 조상 {{domxref("Element")}} 또는 {{domxref("Document")}}. 여기에 지정한 요소 또는 문서의 {{glossary("bounding box", "바운딩 박스")}}를 이 감지기의 뷰포트로 사용합니다.
    - `rootMargin`
      - : 교차 계산에 대해 루트의 바운딩 박스에 적용할 오프셋을 나타내는 문자열. 즉 교차 계산 시 루트 영역의 크기를 키우거나 줄이고자 할 때 사용합니다. CSS {{cssxref("margin")}} 속성과 유사한 값을 받을 수 있습니다. [Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API) 문서의 [교차 루트와 루트 여백](/ko/docs/Web/API/Intersection_Observer_API#교차_루트와_루트_여백)에서 여백의 동작 방식과 여백 구문에 대해 알아보세요. 기본 값은 `"0px 0px 0px 0px"`입니다.
    - `threshold`
      - : 0.0 이상, 1.0 이하의 숫자 단일 값 또는 숫자 배열. 대상의 보이는 영역과 전체 바운딩 박스의 비율에 대한 역치를 나타냅니다. `0.0`을 지정하면 대상의 픽셀 하나라도 보일 때 대상을 볼 수 있는 것으로 취급하고, `1.0`을 지정하면 대상을 온전히 볼 수 있어야 합니다. [Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API) 문서의 [역치](/ko/docs/Web/API/Intersection_Observer_API#역치)에서 자세한 동작 방식을 알아보세요. 기본 값은 `0.0`입니다.

### 반환 값

지정한 `root` 내에서 주시 중인 요소의 가시성이 `threshold`를 위아래로 넘어가는 경우를 감지할 수 있는 새로운 {{domxref("IntersectionObserver")}}. {{domxref("IntersectionObserver.observe", "observe()")}} 메서드를 호출해서 새로운 요소를 주시하세요.

### 예외

- `SyntaxError`
  - : 지정한 `rootMargin`이 유효하지 않은 경우.
- `RangeError`
  - : 한 개 이상의 `threshold` 값이 0.0 미만 또는 1.0을 초과할 경우.

## 예제

요소의 볼 수 있는 영역 비율이 10% 위아래로 넘어갈 때 `myObserverCallback` 함수를 호출하는 새로운 교차 탐지기를 생성하는 예제입니다.

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
