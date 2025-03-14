---
title: Compression Streams API
slug: Web/API/Compression_Streams_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("Compression Streams API")}}

**Compression Streams API**는 gzip 또는 deflate 형식을 사용하여 데이터 스트림을 압축 및 압축 해제 할 수 있는 JavaScript API를 제공합니다.

압축 기능이 내장되어 있기 때문에 JavaScript 애플리케이션에 압축 라이브러리를 포함할 필요가 없으므로 애플리케이션의 다운로드 크기가 더 작아집니다.

## 인터페이스

- {{domxref("CompressionStream")}}
  - : 데이터 스트림을 압축합니다.
- {{domxref("DecompressionStream")}}
  - : 데이터 스트림의 압축을 해제합니다.

## 예제

이 예제에서는 스트림이 gzip 압축을 사용하여 압축됩니다.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

다음 예제에서는 gzip을 사용하여 blob의 압축을 해제하는 함수입니다.

```js
async function DecompressBlob(blob) {
  const ds = new DecompressionStream("gzip");
  const decompressedStream = blob.stream().pipeThrough(ds);
  return await new Response(decompressedStream).blob();
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
