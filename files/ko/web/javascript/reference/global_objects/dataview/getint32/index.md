---
title: DataView.prototype.getInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt32
l10n:
  sourceCommit: 3a006e92b14a2733e485a26d0dc3a1472968fd9b
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`getInt32()`** 메서드는 이 `DataView`의 지정된 바이트 오프셋에서
4바이트를 읽고 이를 32비트 부호 있는 정수로 해석합니다.

{{EmbedInteractiveExample("pages/js/dataview-getint32.html")}}

## 구문

```js-nolint
getInt32(byteOffset)
getInt32(byteOffset, littleEndian)
```

### 매개변수

- `byteOffset`
  - : 데이터를 읽을 데이터 뷰의 시작점으로부터의 오프셋(바이트).
- `littleEndian` {{optional_inline}}
  - : {{Glossary("Endianness", "리틀 엔디언 혹은 빅 엔디언")}} 형식으로 32비트 정수를 저장할지
    여부를 나타냅니다. `false` 혹은 `undefined`이라면 빅 엔디안 값을 읽습니다.

### 반환 값

부호 있는 32비트 정수.

### 에러 발생

- {{jsxref("RangeError")}}
  - : 데이터 뷰의 끝을 넘어서 읽을 수 있는 `byteOffset`이 설정된 경우 발생합니다.

## 설명

정렬 제약 조건은 없으며, 임의의 오프셋에서 멀티바이트 값을 가져올 수 있습니다.

## 예제

### getInt32 메서드 사용하기

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getInt32(1); // 0
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
