---
title: ReadableStream
slug: Web/API/ReadableStream
---

{{APIRef("Streams")}}

[Streams API](/ko/docs/Web/API/Streams_API)의 `ReadableStream` 인터페이스는 바이트 데이터를 읽을수 있는 스트림을 제공합니다. [Fetch API](/ko/docs/Web/API/Fetch_API)는 Response 객체의 body 속성을 통하여 `ReadableStream`의 구체적인 인스턴스를 제공합니다.

## Constructor

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : 읽을수 있는 스트림 객체를 생성하고 리턴합니다.

## Properties

- {{domxref("ReadableStream.locked")}} {{readonlyInline}}
  - : `locked`는 Readable stream이 reader에 고정되어 있는지([locaked to a reader](https://streams.spec.whatwg.org/#locked-to-a-reader)) 확인하는 getter 입니다.

## Methods

- {{domxref("ReadableStream.cancel()")}}
  - : 스트림을 취소하여, 소비자가 스트림에 대해 관심이 없음을 알립니다. The supplied reason argument will be given to the underlying source, which may or may not use it.
- {{domxref("ReadableStream.getReader()")}}
  - : Reader를 만들고 스트림을 그 Reader에 고정 시킵니다. 스트림이 고정되어 있는 동안에는 다른 Reader를 얻을수 없습니다.
- {{domxref("ReadableStream.pipeThrough()")}}
  - : Provides a chainable way of piping the current stream through a transform stream or any other writable/readable pair.
- {{domxref("ReadableStream.pipeTo()")}}
  - : 인자로 넘기는 {{domxref("WritableStream")}}과 현재의 ReadableStream을 연결하고 프로미스를 리턴합니다. 이 프로미스는 파이핑 프로세스가 성공적으로 완료될때 fulfil되며 애러가 발생했을때 reject됩니다.
- {{domxref("ReadableStream.tee()")}}
  - : The `tee` method <a href="https://streams.spec.whatwg.org/#tee-a-readable-stream" id="ref-for-tee-a-readable-stream②">tees</a> this readable stream, returning a two-element array containing the two resulting branches as new {{domxref("ReadableStream")}} instances. Each of those streams receives the same incoming data.

## Examples

아래 예시에서, 다른 리소스에서 fetch된 HTML 조각들을 스트림 하기위해 가공의 {{domxref("Response")}}를 만듭니다. 이것은{{domxref("Uint8Array")}}로 구성된 {{domxref("ReadableStream")}} 의 사용법을 보여줍니다.

```js
fetch("https://www.example.org/").then((response) => {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // 아래 함수는 각 data chunck를 다룬다.
      function push() {
        // "done"은 Boolean 이며 value는 "Uint8Array 이다."
        reader.read().then(({ done, value }) => {
          // 더이상 읽은 데이터가 없는가?
          if (done) {
            // 브라우저에게 데이터 전달이 끝났다고 알린다.
            controller.close();
            return;
          }

          // 데이터를 얻고 컨트롤러를 통하여 그 데이터를 브라우저에 넘긴다.
          controller.enqueue(value);
          push();
        });
      }

      push();
    },
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See Also

- [WHATWG Stream Visualiser](https://whatwg-stream-visualizer.glitch.me/), for a basic visualisation of readable, writable, and transform streams.
