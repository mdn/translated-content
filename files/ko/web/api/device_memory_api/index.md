---
title: Device Memory API
slug: Web/API/Device_Memory_API
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers}}

클라이언트 디바이스의 성능은 디바이스 내에서 사용 가능한 RAM 용량에 따라 크게 달라집니다. 이전까지 개발자들은 자신의 경험, 지식으로 RAM 용량을 추측하고 다른 디바이스를 벤치마킹 하거나, 디바이스 제조사 정보 혹은 유저 에이전트 스트링같은 요소로 디바이스 기능을 추측하였습니다.

## 디바이스 메모리 확인

디바이스 RAM 용량의 근삿값을 확인하는 방법은 두 가지가 있습니다.
자바스크립트 API를 사용하여 디바이스 메모리를 확인하거나, 클라이언트 힌트를 사용하는 방법입니다.

### 자바스크립트 API

여러분은 {{DOMxRef("Navigator.deviceMemory")}} 또는 {{DOMxRef("WorkerNavigator.deviceMemory")}} 를 사용하여 RAM 용량의 근삿값을 확인할 수 있습니다.

```js
const RAM = navigator.deviceMemory;
```

### 클라이언트 힌트

이어서 여러분은 `Device-Memory`가 있는 HTTP 헤더의 [Client hints(클라이언트 힌트)](/ko/docs/Web/HTTP/Guides/Client_hints)를 통해 RAM 용량 근삿값을 확인할 수 있습니다.

## 인터페이스

### 그 외 관련 인터페이스

- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}}
  - : 디바이스 메모리의 근삿값을 기가바이트로 반환합니다.
- {{domxref("WorkerNavigator.deviceMemory")}} {{ReadOnlyInline}}
  - : 디바이스 메모리의 근삿값을 기가바이트로 반환합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Device-Memory")}} header
