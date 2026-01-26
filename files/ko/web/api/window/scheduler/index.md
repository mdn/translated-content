---
title: "Window: scheduler property"
short-title: scheduler
slug: Web/API/Window/scheduler
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef("Prioritized Task Scheduling API")}}

{{domxref("Window")}} 인터페이스의 읽기 전용 속성인 **`scheduler`** 는 [우선순위 기반 작업 스케줄링 API](/ko/docs/Web/API/Prioritized_Task_Scheduling_API)를 사용하기 위한 진입점입니다.

이는 작업의 우선 순위를 스케줄링하는 데에 사용되는 {{domxref('Scheduler.postTask', 'postTask()')}} 와 {{domxref('Scheduler.yield()', 'yield()')}} 메서드를 포함한 {{domxref("Scheduler")}} 객체 인스턴스를 반환합니다.

## 값

{{domxref("Scheduler")}} 입니다.

## 예제

아래 코드는 연관된 인터페이스와 속성들을 사용하는 기본 예제입니다.
프로퍼티가 존재하는지 확인한 뒤 프로미스를 반환하는 작업을 게시하는 방법을 보여줍니다.

```js
// 우선순위 작업 API가 지원되는지 확인
if ("scheduler" in window) {
  // 콜백 함수 - "the task"
  const myTask = () => "Task 1: user-visible";

  // 기본 우선순위로 작업 게시: 'user-visible' (다른 옵션 없음)
  // 작업이 완료되면 Promise.then()이 결과를 로그에 기록합니다.
  window.scheduler
    .postTask(myTask)
    // 반환 처리
    .then((taskResult) => console.log(`${taskResult}`))
    // 실패 처리
    .catch((error) => console.log(`Error: ${error}`));
} else {
  console.log("Feature: NOT Supported");
}
```

복잡한 예제 코드에 대해서는 [우선순위 기반 작업 스케줄링 API > 예제](/ko/docs/Web/API/Prioritized_Task_Scheduling_API#examples) 문서를 확인하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [우선순위 기반 작업 스케줄링 API](/ko/docs/Web/API/Prioritized_Task_Scheduling_API)
- {{domxref('Scheduler.postTask()')}}
- {{domxref('Scheduler.yield()')}}
- {{domxref('TaskController')}}
- {{domxref("WorkerGlobalScope.scheduler")}}
