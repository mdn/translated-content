---
title: abort
slug: Web/API/HTMLMediaElement/abort_event
---

**`abort`** 이벤트는 리소스의 로딩이 중단되었을 때, 발생합니다.

## 개요

- 스펙
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-abort)
- 인터페이스
  - : 유저 인터페이스에서 발생하면 UIEvent, 그렇지 않으면 Event.
- 버블
  - : 안됨
- 취소 가능
  - : 안됨
- 타겟
  - : Element
- 디폴트 액션
  - : 없음

## 속성

| 속성                            | 타입                                          | 설명                                                                                   |
| ------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/ko/docs/Web/API/EventTarget) | 이벤트 타겟 (DOM tree의 최상위 타겟).                                                  |
| `type` {{readonlyInline}}       | [`DOMString`](/ko/docs/Web/API/DOMString)     | 이벤트의 타입                                                                          |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/ko/docs/Web/API/Boolean)         | 이벤트가 버블링 되는지 안되는지                                                        |
| `cancelable` {{readonlyInline}} | [`Boolean`](/ko/docs/Web/API/Boolean)         | 이벤트가 취소 가능한지 아닌지                                                          |
| `view` {{readonlyInline}}       | [`WindowProxy`](/ko/docs/Web/API/WindowProxy) | [`document.defaultView`](/ko/docs/Web/API/Document/defaultView) (document의 `window` ) |
| `detail` {{readonlyInline}}     | `long` (`float`)                              | 0.                                                                                     |
