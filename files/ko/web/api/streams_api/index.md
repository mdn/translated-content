---
title: Streams API
slug: Web/API/Streams_API
---

{{SeeCompatTable}}{{APIRef("Streams")}}

Streams API는 Javascript를 이용해 네트워크를 통해 전송된 데이터 스트림에 접근하여 원하는 대로 처리가 가능한 API를 제공합니다.

## 개념과 사용법

Streaming은 네트워크를 통해 받은 리소스를 작은 조각으로 나누어, Bit 단위로 처리합니다. 이는 브라우저가 수신한 자원을 웹페이지에 표현할 때 주로 사용하는 방법입니다. — Video buffer는 재생되기 전 천천히 채워지며 가끔 이미지도 천천히 로딩되는 것을 보실 수 있을 겁니다..

하지만 Javascript에서는 지금까지 불가능했습니다. 이전에는 (비디오나 텍스트 파일 등의) 리소스를 처리하기 위해서 우선, 전체 파일을 다운로드 받은 후 알맞은 포맷으로 파싱된 후에야, 전송된 전체 데이터를 처리할 수 있었습니다.

With Javascript에 Stream이 도입된 후에는 모든 것이 바뀌었는데, 이제 Buffer, String 또는 blob 없이도 Javascript를 통해 Raw Data를 비트 단위로 처리할 수 있습니다.

![](concept.png)

장점은 또 있습니다 — Stream의 시작 또는 종료를 감지할 수 있으며, 여러 stream을 엮어서 에러를 처리하거나 필요한 경우 stream을 취소할 수도 있습니다. 또한 stream이 읽어들이는 속도에 따라 반응할 수도 있지요.

Stream의 주요한 기본 사용법은 응답 데이터를 stream으로 만드는 것입니다. {{domxref("fetch()")}}를 통해 정상적으로 전송된 응답 {{domxref("Body")}}는 {{domxref("ReadableStream")}}로 표현 가능합니다. 또한 {{domxref("ReadableStream.getReader()")}}를 통해 Reader 객체를 얻어 데이터를 읽을 수도 있으며, {{domxref("ReadableStream.cancel()")}}로 Stream을 취소하는 것 등이 가능합니다.

조금 더 복잡한 사용법은 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 생성자를 통해 사용자가 직접 Stream을 생성하는 것입니다. 예를 들자면 [service worker](/ko/docs/Web/API/Service_Worker_API)에 전달할 데이터를 Stream으로 만들 수도 있습니다.

{{domxref("WritableStream")}}을 사용하면 Stream에 데이터를 쓰는 것도 가능합니다..

> **참고:** [Streams API concepts](/ko/docs/Web/API/Streams_API/Concepts), [Using readable streams](/ko/docs/Web/API/Streams_API/Using_readable_streams), [Using writable streams](/ko/docs/Web/API/Streams_API/Using_writable_streams) — 페이지에서 stream에 관한 더 자세한 이론과 예제를 찾을 수 있습니다.

## 스트림 인터페이스

### 읽기 스트림(Readable streams)

- {{domxref("ReadableStream")}}
  - : 데이터 읽기 스트림을 나타냅니다. [Fetch API](/ko/docs/Web/API/Fetch_API)의 결과 스트림이나 개발자가 정의한 스트림(예, 커스텀 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 클래스)등을 핸들링할 수 있습니다.
- {{domxref("ReadableStreamDefaultReader")}}
  - : 네트워크(예, fetch 요청)등에서 전달된 스트림 데이터를 처리하는 기본 Reader를 반환합니다.
- {{domxref("ReadableStreamDefaultController")}}
  - : {{domxref("ReadableStream")}}의 상태나 내부 큐를 컨트롤 할 수 있는 기본 컨트롤러를 반환합니다. 기본 컨트롤러는 Byte 스트림 외의 스트림에만 해당합니다.

### 쓰기 스트림(writable streams)

- {{domxref("WritableStream")}}
  - : 목적지 스트림에 데이터를 쓰기 위한 표준 추상 인터페이스를 제공하는 객체입니다. 이 객체는 내장 백프레셔와 큐잉을 구현하고 있습니다.
- {{domxref("WritableStreamDefaultWriter")}}
  - : 쓰기 스트림에 데이터 조각들을 쓰기 위한 기본 Writer 객체를 반환한다.
- {{domxref("WritableStreamDefaultController")}}
  - : {{domxref("WritableStream")}} 상태를 컨트롤하는 기본 컨트롤러를 반환한다. `WritableStream`을 생성하면 해당 스트림을 컨트롤 하기 위해 `WritableStreamDefaultController` 인스턴스가 내부적으로 생성된다.

### 관련 스트림 API와 기능

- {{domxref("ByteLengthQueuingStrategy")}}
  - : 스트림을 생성할 때 기본으로 사용 할 내장 byte length queuing strategy를 제공합니다.
- {{domxref("CountQueuingStrategy")}}
  - : 스트림을 생성할 때 기본적으로 사용 할 내장 chunk counting queuing strategy를 제공합니다..

### 외부 API 확장

- {{domxref("Request")}}
  - : 새 `Request` 객체가 생성될 때 `RequestInit` 딕셔너리의 `body`에 {{domxref("ReadableStream")}} 를 전달할 수 있습니다. 이 `Request`는 {{domxref("fetch()")}} 에 전달되에서 스트림을 fetch하는데 사용됩니다.
- {{domxref("Body")}}
  - : {{domxref("fetch()")}} 성공 시 기본적으로 {{domxref("Body")}} {{domxref("ReadableStream")}}로 제공되며, reader를 붙여 데이터를 읽어들일 수 있습니다.

### ByteStream 관련 인터페이스

> **경고:** **중요**: 아래 항목들은 아직 구현된 곳이 없으며, 스펙의 세부 사항이 구현할 수 있을 만큼 충분한 지 논의가 진행중입니다. 추후 변경될 수 있습니다.

- {{domxref("ReadableStreamBYOBReader")}}
  - : 개발자가 직접 제공하여 stream data를 읽을 수 있는 BYOB ("bring your own buffer") reader를 표현합니다. (예 커스텀 {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} 생성자).
- {{domxref("ReadableByteStreamController")}}
  - : {{domxref("ReadableStream")}}의 상태와 내부 큐를 컨트롤 하는 컨트롤러 객체를 표현합니다. Byte stream 컨트롤러는 byte stream을 위한 컨트롤러입니다.
- {{domxref("ReadableStreamBYOBRequest")}}
  - : {{domxref("ReadableByteStreamController")}}의 request를 표현합니다.

## 예제

Streams API 문서와 참조할 만한 예제를 함께 작성하였습니다 — [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams) 를 참조하세요. 예제는 아래와 같습니다.:

- [Simple stream pump](http://mdn.github.io/dom-examples/streams/simple-pump/): ReadableStream에서 어떻게 데이터를 읽어들여 다른 곳으로 전달하는지 보여줍니다.
- [Grayscale a PNG](http://mdn.github.io/dom-examples/streams/grayscale-png/): PNG file의 ReadableStream을 통해 grayscale로 변경하는 방법을 보여줍니다.
- [Simple random stream](http://mdn.github.io/dom-examples/streams/simple-random-stream/): 커스텀 스트림을 통해 무작위 문자열을 생성하고, 데이터 청크로 큐잉한 뒤, 다시 읽어들이는 방법에 대해 설명합니다.
- [Simple tee example](http://mdn.github.io/dom-examples/streams/simple-tee-example/): 이 예제는 simple random stream 예제를 확장하여, 스트림을 분할하고 각 스트림이 독립적으로 데이터를 읽는 방법을 보여줍니다.
- [Simple writer](http://mdn.github.io/dom-examples/streams/simple-writer/): Writable stream에 데이터를 쓰는 방법을 설명하고, 스트림 데이터를 디코드하여 UI로 표현하는 방법을 보여줍니다.
- [Unpack chunks of a PNG](http://mdn.github.io/dom-examples/streams/png-transform-stream/): [`pipeThrough()`](/ko/docs/Web/API/ReadableStream/pipeThrough) 을 통해 PNG file을 PNG 청크 스트림으로 변환하는 방식으로 ReadableStream을 다른 데이터 타입 스트림으로 전환하는 방법을 설명합니다.

다른 개발자의 예제:

- [Progress Indicators with Streams, Service Workers, & Fetch](https://fetch-progress.anthum.com/).

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- [Streams API 개](/ko/docs/Web/API/Streams_API/Concepts)념
- [Readable stream 사용하기](/ko/docs/Web/API/Streams_API/Using_readable_streams)
- [Writable stream 사용하기](/ko/docs/Web/API/Streams_API/Using_writable_streams)
