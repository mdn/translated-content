---
title: Plugin
slug: Web/API/Plugin
---

{{ApiRef("HTML DOM")}}

플러그 인 인터페이스는 브라우저 플러그 인에 대한 정보를 제공합니다.

> **참고:** 플러그 인 개체의 고유 속성은 더 이상 최신 브라우저 버전에서 찾아볼 수 없습니다.

## 특성

| 이름                              | 설명                                                    | Return Type              | 유용성                           |
| --------------------------------- | ------------------------------------------------------- | ------------------------ | -------------------------------- |
| {{domxref("Plugin.description")}} | 플러그 인에 대한 읽기 쉬운 설명입니다. 읽기 전용입니다. | {{domxref("DOMString")}} | DOM 0                            |
| {{domxref("Plugin.filename")}}    | 플러그 인 파일의 파일 이름. 읽기 전용입니다.            | {{domxref("DOMString")}} | DOM 0                            |
| {{domxref("Plugin.name")}}        | 플러그 인의 이름. 읽기 전용입니다.                      | {{domxref("DOMString")}} | DOM 0                            |
| {{domxref("Plugin.version")}}     | 플러그 인의 버전 번호 문자열. 읽기 전용입니다.          | {{domxref("DOMString")}} | Gecko browsers only (Firefox 4+) |

## 방법

- {{domxref("Plugin.item")}}
  - : 지원되는 유형의 목록에 인덱스 번호를 부여한 경우 지원되는 콘텐츠 유형의 MIME형식을 반환합니다.
- {{domxref("Plugin.namedItem")}}
  - : 지원되는 항목의 MIME유형을 반환합니다.
