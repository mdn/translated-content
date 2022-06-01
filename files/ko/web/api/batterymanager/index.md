---
title: BatteryManager
slug: Web/API/BatteryManager
tags:
  - API
  - Battery API
  - Device API
  - Interface
  - Deprecated
  - Reference
browser-compat: api.BatteryManager
translation_of: Web/API/BatteryManager
---
{{APIRef}}{{deprecated_header}}

**`BatteryManager`** 인터페이스는 시스템의 배터리 충전 상태에 대한 정보를 확인 하는 방법을 제공합니다.

{{domxref("window.navigator.battery","navigator.battery")}} 프로퍼티는 Battery Status API와 상호작용 할 수 있는 `BatteryManager 인터페이스의 `인스턴스를 반환합니다.

## 속성

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : 배터리가 현재 충전 중인지 여부를 Boolean 값으로 나타냅니다.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : 배터리가 완전히 충전되기 까지 남은 시간을 초로 표현합니다. 0 이면 이미 배터리의 충전이 완료 된 상황 입니다.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : 배터리가 완전히 방전되고 시스템이 중지 될 때까지의 남은 시간을 초로 표현 합니다.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : 배터리의 충전 상태를 0.0 에서 1.0 사이의 값으로 표현 합니다.

### 이벤트 처리기

- {{domxref("BatteryManager.onchargingchange")}}
  - : {{event("chargingchange")}} 이벤트의 핸들러 입니다. 이 이벤트는 배터리 충전 상태가 변경될 때 발생합니다.
- {{domxref("BatteryManager.onchargingtimechange")}}
  - : {{event("chargingtimechange")}} 이벤트의 핸들러 입니다. 이 이벤트는 배터리 충전 시간이 변경될 때 발생합니다.
- {{domxref("BatteryManager.ondischargingtimechange")}}
  - : {{event("dischargingtimechange")}} 이벤트의 핸들러 입니다. 이 이벤트는 배터리 방전 시간이 변경될 때 발생합니다.
- {{domxref("BatteryManager.onlevelchange")}}
  - : {{event("levelchange")}} 이벤트의 핸들러 입니다. 이 이벤트는 배터리 수준 상태가 변경 될 때 발생합니다.

## 메서드

{{domxref("EventTarget")}} 으로 부터 상속을 받습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- {{ domxref("window.navigator.battery","navigator.battery") }}
- [Battery Status API](/ko/docs/WebAPI/Battery_Status "/en-US/docs/WebAPI/Battery_Status")
