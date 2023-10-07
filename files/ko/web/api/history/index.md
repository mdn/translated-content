---
title: History
slug: Web/API/History
---

{{APIRef("HTML DOM")}}

**`History`** 인터페이스는 브라우저의 세션 기록, 즉 현재 페이지를 불러온 탭 또는 프레임의 방문 기록을 조작할 수 있는 방법을 제공합니다.

## 속성

_`History` 인터페이스는 어떤 속성도 상속하지 않습니다._

- {{domxref("History.length")}} {{readOnlyInline}}
  - : 현재 페이지를 포함해, 세션 기록의 길이를 나타내는 정수를 반환합니다.
- {{domxref("History.scrollRestoration")}}
  - : 기록 탐색 시 스크롤 위치 복원 여부를 명시할 수 있습니다. 가능한 값은 `auto`와 `manual`입니다.
- {{domxref("History.state")}} {{readOnlyInline}}
  - : 기록 스택 최상단의 스테이트를 나타내는 값을 반환합니다. {{event("popstate")}} 이벤트를 기다리지 않고 현재 기록의 스테이트를 볼 수 있는 방법입니다.

## 메서드

_`History` 인터페이스는 어떤 메서드도 상속하지 않습니다._

- {{domxref("History.back()")}}
  - : 세션 기록의 바로 뒤 페이지로 이동하는 비동기 메서드입니다. 브라우저의 <kbd>뒤로 가기</kbd> 버튼을 눌렀을 때, 그리고 `history.go(-1)`을 사용했을 때와 같습니다.> **참고:** 세션 기록의 제일 첫 번째 페이지에서 호출해도 오류는 발생하지 않습니다.
- {{domxref("History.forward()")}}
  - : 세션 기록의 바로 앞 페이지로 이동하는 비동기 메서드입니다. 브라우저의 <kbd>앞으로 가기</kbd> 버튼을 눌렀을 때, 그리고 `history.go(1)`을 사용했을 때와 같습니다.> **참고:** 세션 기록의 제일 마지막 페이지에서 호출해도 오류는 발생하지 않습니다.
- {{domxref("History.go()")}}
  - : 현재 페이지를 기준으로, 상대적인 위치에 존재하는 세션 기록 내 페이지로 이동하는 비동기 메서드입니다. 예를 들어, 매개변수로 `-1`을 제공하면 바로 뒤로, `1`을 제공하면 바로 앞으로 이동합니다. 세션 기록의 범위를 벗어나는 값을 제공하면 아무 일도 일어나지 않습니다. 매개변수를 제공하지 않거나, `0`을 제공하면 현재 페이지를 다시 불러옵니다.
- {{domxref("History.pushState()")}}
  - : 주어진 데이터를 지정한 제목(제공한 경우 URL도)으로 세션 기록 스택에 넣습니다. 데이터는 DOM이 불투명(opaque)하게 취급하므로, 직렬화 가능한 모든 JavaScript 객체를 사용할 수 있습니다. 참고로, Safari를 제외한 모든 브라우저는 `title` 매개변수를 무시합니다.
- {{domxref("History.replaceState()")}}
  - : 세션 기록 스택의 제일 최근 항목을 주어진 데이터, 지정한 제목 및 URL로 대체합니다. 데이터는 DOM이 불투명(opaque)하게 취급하므로, 직렬화 가능한 모든 JavaScript 객체를 사용할 수 있습니다. 참고로, Safari를 제외한 모든 브라우저는 `title` 매개변수를 무시합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `History` 객체 참조를 반환하는 {{domxref("Window.history")}} 속성.
