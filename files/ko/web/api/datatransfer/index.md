---
title: DataTransfer
slug: Web/API/DataTransfer
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("HTML Drag and Drop API")}}

**`DateTransfer`** 객체는 드래그 앤 드롭 작업 중에 드래그되고 있는 데이터를 보관하기 위해 사용됩니다. 각각의 데이터 타입들에 해당하는 하나 이상의 데이터 항목을 포함할 수 있습니다. 드래그 앤 드롭에 대한 자세한 정보는 [HTML Drag and Drop API](/ko/docs/Web/API/HTML_Drag_and_Drop_API)을 확인하시길 바랍니다.

이 객체는 모든 {{domxref("DragEvent","drag events")}}의 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 속성에서 사용할 수 있습니다.

## 생성자

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : 새로운 `DataTransfer` 객체를 생성하고 반환합니다.

## 인스턴스 속성

### 표준 속성

- {{domxref("DataTransfer.dropEffect")}}
  - : 현재 선택된 드래그 앤 드롭 작업의 타입을 가져오거나 작업을 새로운 타입으로 설정합니다. 값은 `none`, `copy`, `link` 또는 `move`이어야 합니다.
- {{domxref("DataTransfer.effectAllowed")}}
  - : 가능한 작업의 모든 타입을 제공합니다. `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` 또는 `uninitialized` 중 하나이어야 합니다.
- {{domxref("DataTransfer.files")}}
  - : 데이터 전송에서 사용할 수 있는 모든 로컬 파일의 목록을 포함합니다. 드래그 작업에 드래그하고 있는 파일이 포함되지 않으면 이 속성은 빈 목록입니다.
- {{domxref("DataTransfer.items")}} {{ReadOnlyInline}}
  - : 모든 드래그 데이터의 목록인 {{domxref("DataTransferItemList")}} 객체를 받습니다.
- {{domxref("DataTransfer.types")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLElement/dragstart_event", "dragstart")}} 이벤트에 설정된 형식을 제공하는 문자열 배열입니다.

### Gecko 속성

{{SeeCompatTable}}

## 인스턴스 메서드

### 표준 메서드

- {{domxref("DataTransfer.clearData()")}}
  - : 지정된 타입과 연결된 데이터를 제거합니다. 타입 전달인자는 선택 사항입니다. 타입이 비어있거나 지정되지 않은 경우 모든 타입과 연결된 데이터가 제거됩니다. 지정된 타입의 데이터가 없거나 데이터 전송에 데이터가 포함되어 있지 않으면 이 메서드는 아무런 효과가 없습니다.
- {{domxref("DataTransfer.getData()")}}
  - : 지정된 타입의 데이터를 검색합니다. 혹은 해당 타입의 데이터가 없거나 데이터 전송에 데이터가 없는 경우에는 빈 문자열을 검색합니다.
- {{domxref("DataTransfer.setData()")}}
  - : 지정된 타입의 데이터를 설정합니다. 타입의 데이터가 없으면 타입 목록의 마지막 항목이 새로운 형식이 되도록 타입이 마지막에 추가됩니다. 타입의 데이터가 이미 존재하면 기존 데이터가 동일한 위치에서 교체됩니다.
- {{domxref("DataTransfer.setDragImage()")}}
  - : 사용자 지정 이미지를 원하는 경우 드래그에 사용될 이미지를 설정합니다.

### Gecko 메서드

{{Non-standard_Header}}

## 예제

문서에 나열된 모든 메서드와 속성은 고유한 참조 페이지가 있으며 각 참조 페이지에는 인터페이스의 예제가 직접 포함되어 있거나 예제에 대한 링크가 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTML 드래그 앤 드롭 API](/ko/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
