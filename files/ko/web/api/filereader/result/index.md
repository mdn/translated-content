---
title: FileReader.result
slug: Web/API/FileReader/result
---

{{APIRef("File API")}}

파일의 내용을 반환한다. 이 속성은 읽기가 완료 된 후에만 사용 가능 하며 데이터의 형식은 읽기 작업에 어떤 함수가 사용되었는가에 의해 정해진다.

## Syntax

```js
var file = instanceOfFileReader.result;
```

## Value

읽기 작업에 사용된 함수에 의해 string 또는 {{domxref("ArrayBuffer")}} 가 된다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("FileReader")}}
