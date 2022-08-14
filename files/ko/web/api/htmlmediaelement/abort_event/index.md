---
title: abort
slug: Web/API/HTMLMediaElement/abort_event
tags:
  - DOM
  - Event
  - Reference
  - 레퍼런스
  - 이벤트
translation_of: Web/API/HTMLMediaElement/abort_event
translation_of_original: Web/Events/abort
original_slug: Web/Events/abort
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

| 속성                                  | 타입                                                                                                                                                         | 설명                                                                                                                                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/ko/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.")  | 이벤트 타겟 (DOM tree의 최상위 타겟).                                                                                                                                                                          |
| `type` {{readonlyInline}}       | [`DOMString`](/ko/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | 이벤트의 타입                                                                                                                                                                                                  |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/ko/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | 이벤트가 버블링 되는지 안되는지                                                                                                                                                                                |
| `cancelable` {{readonlyInline}} | [`Boolean`](/ko/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | 이벤트가 취소 가능한지 아닌지                                                                                                                                                                                  |
| `view` {{readonlyInline}}       | [`WindowProxy`](/ko/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!")                         | [`document.defaultView`](/ko/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (document의 `window` ) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                                                                                                                             | 0.                                                                                                                                                                                                             |
