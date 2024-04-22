---
title: IdleDeadline
slug: Web/API/IdleDeadline
---

{{APIRef("Background Tasks")}}

`IdleDeadline` 인터페이스는 {{domxref("Window.requestIdleCallback()")}}을 호출하여 설정된 유휴 콜백(idle callback)에 대한 입력 매개변수(parameter)의 데이터 타입으로 사용됩니다. {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} 메서드를 제공하여 사용자 에이전트가 유휴 상태로있을 것으로 추정하는 시간과 속성(property)인 {{domxref("IdleDeadline.didTimeout", "didTimeout")}}을 결정할 수있게하여, timeout 기간이 만료되어 콜백이 실행 중인지 여부를 결정할 수 있습니다.

request callback이 작동하는 방식에 대해 자세히알아 보려면, [Collaborative Scheduling of Background Tasks](/ko/docs/Web/API/Background_Tasks_API) 문서를 읽어보세요.

## Properties

<dl id="property_definitions"><dt>{{domxref("IdleDeadline.didTimeout")}} {{ReadOnlyInline}}</dt><dd>유휴 콜백을 구현할 때 지정한 timeout이 만료되었음에도 콜백이 실행중인 경우, 값이 true인 Boolean 입니다.</dd></dl>

## Methods

<dl id="method_definitions"><dt>{{domxref("IdleDeadline.timeRemaining()")}}</dt><dd>현재 유휴 기간(idle period)에 남아있는 밀리초 수를 예측하는 부동 소수점 값인 {{domxref("DOMHighResTimeStamp")}}를 반환합니다. 유휴 기간이 끝나면 값은 0 입니다. 우리의 콜백은 이것을 반복적으로 호출하여, 반환하기 전에 더 많은 작업을 할 수 있는 충분한 시간이 있는지 확인할 수 있습니다.</dd></dl>

<dl id="method_definitions_obsolete"></dl>

## Example

[Cooperative Scheduling of Background Tasks API](/ko/docs/Web/API/Background_Tasks_API)의 [complete example](/ko/docs/Web/API/Background_Tasks_API#Example)를 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Cooperative Scheduling of Background Tasks API](/ko/docs/Web/API/Background_Tasks_API)
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
