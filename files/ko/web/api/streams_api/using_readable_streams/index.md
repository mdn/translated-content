---
title: Using readable streams
slug: Web/API/Streams_API/Using_readable_streams
---

{{apiref("Streams")}}

자바스크립트 개발자로서, 프로그래밍적으로 네트워크로부터 받은 데이터 스트림을 Chunk단위로 읽고 다루는 것은 매우 유용합니다! 그러나 어떻게 스트림 API의 Readable stream을 잘 사용할수 있을까요. 이번 내용은 그것을 설명하고 있습니다.

> **참고:** This article assumes that you understand the use cases of readable streams, and are aware of the high-level concepts. If not, we suggest that you first read the [Streams concepts and usage overview](/ko/docs/Web/API/Streams_API#Concepts_and_usage) and dedicated [Streams API concepts](/ko/docs/Web/API/Streams_API/Concepts) article, then come back.

> **참고:** If you are looking for information on writable streams try [Using writable streams](/ko/docs/Web/API/Streams_API/Using_writable_streams) instead.

## Browser support

파이어폭스 65+ 와 크롬 42+ 에서 Fetch Body 객체를 스트림으로서 사용 할수 있고, custom readable 스트림을 만들수 있습니다. 현재 [Pipe chains](/ko/docs/Web/API/Streams_API/Concepts#Pipe_chains)의 경우 오직 크롬에서만 지원하고 있고 그 기능은 변경될 수 있습니다.

## Finding some examples

이번 내용과 관련한 많은 예제를 [dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams) 에서 살펴볼수 있습니다. 이곳에서 모든 소스를 확인할수 있을 뿐만 아니라 예제 사이트 링크도 확인할수 있습니다.

## Consuming a fetch as a stream

[Fetch API](/ko/docs/Web/API/Fetch_API) 는 네트워크를 통해 리소스를 가져오는 [XHR](/ko/docs/Web/API/XMLHttpRequest)의 현대적인 대안책 입니다. Fetch API의 수많은 이점 가운데 가장 훌륭한점은 최근 브라우저들이 Fetch Response를 Readable 스트림으로 이용할수 있게 하는 기능을 추가한것 입니다.

{{domxref("Body")}} 믹스인은 {{domxref("Body.body","body")}} 속성을 포함하고 있습니다. 그리고 이 {{domxref("Body.body","body")}} 속성은 {{domxref("Body.body","body")}}의 내용을 Readable 스트림으로 노출시키는 간단한 getter 입니다. 이 {{domxref("Body")}} 믹스인은 {{domxref("Request")}}와 {{domxref("Response")}} 인터페이스로부터 구현 되며, 따라서 두 경우 모두 사용 할수 있습니다. 다만 Response body의 스트림을 사용하는 것이 조금더 명확합니다.

우리의 [Simple stream pump](https://github.com/mdn/dom-examples/tree/master/streams/simple-pump)예시에서 보여주듯([see it live also](https://mdn.github.io/dom-examples/streams/simple-pump/)), Readable 스트림을 노출시키기 위해서는 단지 Response의 body 속성에 접근하기만 하면 됩니다.

```js
// 오리지널 이미지를 Fetch 함
fetch("./tortoise.png")
  // body 를 ReadableStream으로 가공함
  .then((response) => response.body);
```

이것은 우리에게 {{domxref("ReadableStream")}} 객체를 제공해 줍니다.

### Attaching a reader

이제 우리는 스트림화된 body를 가지고 있으며, 이 스트림을 읽기 위해서는 리더기를 붙여야 합니다. 이 작업은 {{domxref("ReadableStream.getReader()")}} 메서드를 사용하여 처리합니다.

```js
// 오리지널 이미지를 Fetch 함
fetch('./tortoise.png')
// body 를 ReadableStream으로 가공함
.then(response => response.body)
.then(body => {
  const reader = body.getReader();
```

이 메서드를 실행하면 리더기가 생성되고 이 리더기를 스트림에 고정(locks) 시킵니다. {{domxref("ReadableStreamDefaultReader.releaseLock()")}} 메서드를 사용하는등 이 고정(locks)을 풀기전 까지는(released), 그 어떤 다른 리더기들도 이 스트림을 읽을수 없습니다.

또한 `response.body` 는 동기이므로 굳이 프로미스를 사용할 필요가 없으며, 위의 예시를 한번의 스텝으로 줄일수 있다는 점에 주목해 주십시요

```js
// 오리지널 이미지를 Fetch 함
  fetch('./tortoise.png')
  // body 를 ReadableStream으로 가공함
  .then(response => {
    const reader = response.body.getReader();
```

### Reading the stream

이제 우리는 우리의 리더기를 추가하였습니다. 우리는 리더기의 {{domxref("ReadableStreamDefaultReader.read()")}} 메서드를 사용하여 스트림으로 부터 data chunk들을 읽을수 있게 되었습니다.

정확하게는 이 메서드는 각 스트림으로부터 하나의 data chunk를 읽습니다. 그리고 이러한 data chunk는 우리가 원하는대로 사용할 수 있습니다.

예를 들어 우리의 Simple stream pump example에서는 {{domxref("ReadableStreamDefaultReader.read()")}} 사용하여 Data Chunk를 새로운 커스텀 `ReadableStream`에 집어 넣고 있습니다. 그리고 만약 읽을수 있는 다음 Data Chunk가 있다면, {{domxref("ReadableStreamDefaultReader.read()")}} 를 다시 사용하여 다음 Data Chunk를 커스텀 `ReadableStream`에 집어 넣습니다. 더이상 읽을수 있는 Data Chunk가 없다면, 그 커스텀 `ReadableStream`(우리는 이 새로운 Readable 스트림에 대해 다음 섹션에서 다 자세히 살펴 볼것 입니다.)을 통해 새로운 {{domxref("Response")}} 객체를 생성합니다. 그 다음 이 {{domxref("Response")}} 객체를 {{domxref("Blob")}} 형태로 변환하고 이 {{domxref("Blob")}} 으로 부터 {{domxref("URL.createObjectURL()")}} 메서드를 사용하여 URL 객체를 생성합니다. 마지막으로 이 URL객체를 {htmlelement("img")}} 에 적용하여 이미지를 보여줌으로서 fetch된 오리지널 이미지를 효과적으로 복사하는 것입니다.

```js
  return new ReadableStream({
    start(controller) {
      return pump();
      function pump() {
        // 스트림의 다음 Chunk에 대한 액세스를 제공하는 psomise를 리턴한다.
        return reader.read().then(({ done, value }) => {
          // 더이상 읽을 데이터 조각이 없을때 스트림을 닫는다
          if (done) {
              controller.close();
              return;
          }
          // 데이터 조각을 새로운 스트림(새로 만드는 커스텀 스트림)에 넣는다.
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
.then(stream => new Response(stream))
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
.then(url => console.log(image.src = url))
.catch(err => console.error(err));
```

어떻게 `read()` 가 사용되었는지 자세히 들여다 봅시다. 위 예제의 `pump()` 함수는 제일먼저 `read()` 를 실행하였습니다. 그리고 이 `read()` 는 스트림으로부터 읽어 들인 내용의 결과를 `{ done, value }` 의 형식으로 가지고 있는 pomise를 반환합니다.

```js
return reader.read().then(({ done, value }) => {
```

스트림으로부터 읽어 들인 내용은 아래 3가지 타입이 있습니다.

- chunk를 아직 읽을수 있는 경우에 프로미스는 `{ value: theChunk, done: false }` 객체와 함께 fulfill 됩니다.
- 스트림이 닫힌 경우에 프로미스는 `value: undefined, done: true }` 객체와 함께 fulfill 됩니다.
- 스트림에서 애러가 발생한 경우 promise는 관련 애러와 함께 reject 됩니다.

다음으로 우리는 `done` 이 `true` 인지 아닌지 확인해 봐야 합니다.

만약 `done` 이 `true` 라면 더이상 읽어들일 chunk가 없다는 뜻입니다. 따라서 우리는 함수 밖으로 빠져 나가야 하고 {{domxref("ReadableStreamDefaultController.close()")}} 를 통하여 커스텀 스트림을 닫아야 합니다.

```js
if (done) {
  controller.close();
  return;
}
```

> **참고:** 여기서 사용한 `close()` 는 새로만든 커스텀 스트림의 일부이며 오리지널 스트림의 것이 아닙니다. 커스텀 스트림에 대해서는 다음섹션에서 더 자세히 살펴 볼 예정입니다.

만약 `done` 이 `true` 가 아니라면, 우선 읽어 드린 Chunk를 처리하고 (`value` 속성), `pump()` 함수를 재귀적으로 다시 호출 함으로서 다음 chunk를 읽어 드립니다.

```js
// 다음 data chunk를 새로운 readable 스트림에 집어 넣음
controller.enqueue(value);
return pump();
```

다음은 스트림 리더기를 사용할때의 기본적인 패턴 입니다.

1. 스트림을 읽음으로서 실행되는 함수를 작성합니다.
2. 만약 읽을수 있는 스트림이 더이상 없다면, 함수를 리턴 시킵니다.
3. 만약 읽을수 있는 스트림이 아직 남아 있다면, 우선 읽어 드린 chunk를 처리하고, 다음 chunk를 읽어 드리기 위해 함수를 다시 실행합니다.
4. 더이상 읽을수 있는 스트림이 없을때까지 함수를 재귀적으로 실행하고, 최종적으로 읽을수 있는 스트림이 없을경우 2번 Step을 따릅니다.

## Creating your own custom readable stream

두번째 파트에서 사용했던 Simple stream pump example 예제에서 우리는 fetch body로 부터 읽어드린 이미지에 대한 data를 우리가 자체적으로 만든 커스텀 readable 스트림에 다시 옮겨 심었습니다. 그럼 어떻게 스트림을자체적으로 만들수 있을까요? 우리는 `ReadableStream()`생성자 함수를 통해 커스텀 readable 스트림을 만들 수 있습니다.

### The ReadableStream() constructor

Fetch와 같이 브라우저에서 스트림을 제공할때 그것을 읽어 들이는 일은 쉬운 일입니다. 그러나 때때로 새로운 커스텀 스트림을 만들고 이것을 data chunk들로 채워넣어야 하는 경우가 있습니다. {{domxref("ReadableStream.ReadableStream","ReadableStream()")}}을 아래의 구문과 같이 사용함으로서 이것을 가능하게 할수 있습니다. 구문이 처음에는 다소 복잡해 보일수 있습니다만, 실제로는 그렇게 복잡하지 않습니다.

기본적인 핵심 구문은 다음과 같습니다.

```js
const stream = new ReadableStream({
  start(controller) {

  },
  pull(controller) {

  },
  cancel() {

  },
  type,
  autoAllocateChunkSize
}, {
  highWaterMark,
  size()
});
```

생성자 함수는 두개의 객체를 인자로 받습니다. 첫번째 인자는 필수 값이며, 이것은 우리가 읽어 들일 기본 소스의 모델을 JavasScrip 적으로 생성 합니다. 두번째 인자는 옵션 값이며, 이것은 커스텀 스트림에 사용할 커스텀 queuing 전략을 수립하게 합니다. 두번째 인자의 경우 매우 드물게 설정하는 값이므로 지금은 첫번째 인자에 집중하도록 하겠습니다.

첫번째 인자인 객체는 5개의 맴버를 가질수 있으며, 제일 첫번째 맴버만 필수 입니다.

1. `start(controller)` — `ReadableStream` 이 생성되자 마자 딱 한번만 호출 되는 메서드 입니다. 이 메서드에는 스트림을 기능을 설정할 수 있는 코드가 포함되어야 합니다. 예를 들면 데이터 생성을 시작한다거나 아니면 소스에 접근하여 데이터를 가져오는 코드등이 들어가게 될것입니다.
2. `pull(controller)` — 이 메서드는 스트림 내부의 queue가 가득 찰때까지 반복적으로 호출 됩니다. 더 많은 청크가 큐에 들어갈 때 스트림을 제어하는 데 사용할 수 있습니다.
3. `cancel()` — 이 메서드는 스트림이 캔슬될때 호출 됩니다 (예를 들어 {domxref("ReadableStream.cancel()")}} 이 호출 되었을때). 메서드의 내용은 스트림 소스에 대한 액세스를 해제하는 데 필요한 모든 것을 수행해야합니다.
4. `type` and `autoAllocateChunkSize` — 스트림이 바이트 스트림임을 나타 내기 위해 사용됩니다. 바이트 스트림은 목적과 사용 사례가 일반 (기본) 스트림과 약간 다르므로 향후 자습서에서 별도로 다룰 것입니다. 또한 아직 어느 곳에서도 구현되지 않았습니다.

simple example code 를 다시한번 살펴보면, `ReadableStream()` 생성자가 `start()` 메서드 단 하나만 가지고 있다는 것을 알아챌수 있을 것 입니다. 이 `start()` 메서드 fetch된 스트림으로 부터 데이터를 읽어 들이고 있습니다.

```js
  return new ReadableStream({
    start(controller) {
      return pump();
      function pump() {
        return reader.read().then(({ done, value }) => {
          // 더이상 읽을수 있는 data가 없다면 스트림을 닫는다
          if (done) {
            controller.close();
            return;
          }
          // 데이터 조각을 새로운 스트림(새로 만드는 커스텀 스트림)에 넣는다.
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
```

### ReadableStream controllers

ReadableStrem() 생성자에 인자로 전달된 객체안의 `start()` 와 `pull()` 메서드에 controller라는 인자가 전달되는 것을 볼수 있습니다. 이것은 {{domxref("ReadableStreamDefaultController")}} 클래스의 인스턴스이며 우리의 스트림을 제어하는데 사용 됩니다.

우리의 예제에서, 우리는 fetch된 body로부터 chunk의 값을 읽은 뒤 그 값을 커스텀 스트림에 집어 넣기 위해 Controller의 {{domxref("ReadableStreamDefaultController.enqueue","enqueue()")}} 메서드를 상용하고 있습니다.

또한, fetch된 body를 읽어 들이는 것이 끝나면 컨트롤러의 {{domxref("ReadableStreamDefaultController.close","close()")}}를 사용하여 커스텀 스트림을 닫습니다. 이때 이미 삽입된 chunk들은 여전히 읽을수 있지만 새로운 chunk는 집어 넣을수 없습니다. 그리고 읽는 것이 모두 긑나면 스트림은 닫힙니다.

### Reading from custom streams

우리의 Simple stream pump example 에서, 우리는 {domxref("Response.Response", "Response")}} 생성자 함수에 우리가 만든 커스텀 readable 스트림을 인자로 전달하였으며 그렇게 생성된 response 인스턴스를 `blob()` 으로 사용 하였습니다.

```js
.then(stream => new Response(stream))
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
.then(url => console.log(image.src = url))
.catch(err => console.error(err));
```

그러나 커스텀 스트림은 여전히 `ReadableStream` 인스턴스입니다. 즉, 우리는 여전히 리더기를 커스텀 스트림에 붙일수 있다는 뜻입니다. 예를 들어 [Simple random stream demo](https://github.com/mdn/dom-examples/blob/master/streams/simple-random-stream/index.html) ([see it live also](https://mdn.github.io/dom-examples/streams/simple-random-stream/)) 를 살펴 보십시요. 이 예제에서는 커스텀 스트림을 생성한후, 랜덤 문자열을 생성된 커스텀 스트림에 집어 넣습니다. 그 후 문자열 생성 중지 버튼을 눌렀을때 커스텀 스트림에 집어 넣었던 랜덤 문자열을 커스텀 스트림으로 부터 다시 읽어 옵니다.

**Note:** {{domxref("FetchEvent.respondWith()")}} 메서드를 사용하여 스트림을 다루기 위해서는 스트림에 삽입된 내용이 만드시 {{jsxref("Uint8Array")}} 이어야 합니다. ({{domxref("TextEncoder")}} 등을 사용)

[Simple random stream demo](https://github.com/mdn/dom-examples/blob/master/streams/simple-random-stream/index.html) ([see it live also](https://mdn.github.io/dom-examples/streams/simple-random-stream/)) 에서 커스텀 스트림 생성자 함수는 `start()` 메서드를 가지고 있으며, 이 메서드는 {{domxref("WindowTimers.setInterval()")}} 을 사용하여 매초마다 새로운 랜덤 문자열을 생성하고 이 문자열을 {{domxref("ReadableStreamDefaultController.enqueue()")}} 를 사용하여 스트림안에 넣습니다. 만약 문자열 생성 중지 버튼을 누른다면 이 interval 이 취소됨과 동시에 `readStream()` 함수를 호출하여 스트림으로 부터 스트림에 넣은 문자열 전부를 읽어 드립니다. 이때 스트림에 chunk data(여기서는 랜덤 문자열)를 넣는 것도 중단 했기때문에 스트림을 닫습니다.

```js
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();
      // Add the string to the stream
      controller.enqueue(string);
      // show it on the screen
      let listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);
    button.addEventListener("click", function () {
      clearInterval(interval);
      readStream();
      controller.close();
    });
  },
  pull(controller) {
    // We don't really need a pull in this example
  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    clearInterval(interval);
  },
});
```

스트림에 넣은 문자열 전부를 읽고 다루기 위해 만든 커스텀 함수인 `readStream()` 함수를 살펴보면, 우선 {{domxref("ReadableStream.getReader()")}}를 사용하여 리더기를 스트림에 고정시키는 것을 볼수 있습니다. 그 후 앞서 살펴봤던 패턴과 마찬가지로 `read()` 를 사용하여 chunk를 읽어 들이고 `done` 이 `true` 인지 아닌지 확인 합니다. 만약 `true` 이면 `readStream()` 함수의 프로세스를 끝내버리고 그렇지 않으면 읽어드린 chunk를 후속처리한 후 `read()` 를 재귀적으로 실행합니다.

```js
function readStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() returns a promise that resolves
  // when a value has been received
  reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent =
      "Read " + charsReceived + " characters so far. Current chunk = " + chunk;
    list2.appendChild(listItem);

    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
```

### Closing and cancelling streams

우리는 이미 앞서 스트림을 닫는 메서드인 {{domxref("ReadableStreamDefaultController.close()")}} 를 살펴보았습니다. 이미 언급했다 시피, 스트림이 닫혔다 하더라고 이미 들어가 있는 chunk는 읽을 수 있습니다.

만약 스트림을 완벽하게 제거하고 삽입된 모든 chunk를 날리고 싶다면, {{domxref("ReadableStream.cancel()")}} 또는 {{domxref("ReadableStreamDefaultReader.cancel()")}} 메서드를 사용 하면 됩니다.

## Teeing a stream

때로는 하나의 스트림을 동시 두번 읽어들여야 할 경우가 있습니다. {{domxref("ReadableStream.tee()")}} 메서드가 이를 가능하게 합니다. {{domxref("ReadableStream.tee()")}} 메서드는 두개의 독립적인 카피된 스트림을 가지고 있는 배열을 제공합니다. 이 카피된 두개의 스트림은 두개의 독립적인 리더기로 각각 읽어 들일 수 있습니다.

이런 경우는 아마 [ServiceWorker](/ko/docs/Web/API/Service_Worker_API) 안에서 필요할 것입니다. 만약 서버로부터 fetch된 response를 브라우저에도 전달하고 서비스 워커 캐시에도 전달해야 하다면 하나의 스트림에 대해 두개의 카피본이 필요 할 것입니다. 왜냐하면 response body (Readablestream)는 단 한번만 사용될 수 있고 하나의 Readablestream은 하나의 리더기만 붙을수 있기 때문입니다.

위 내용에 대한 예제를 [Simple tee example](https://github.com/mdn/dom-examples/blob/master/streams/simple-tee-example/index.html) ([see it live also](https://mdn.github.io/dom-examples/streams/simple-tee-example/))에서 살펴 볼수 있습니다. 이 예제는 랜덤 문자열 생성 버튼에 대한 이벤트가 없다는 점과, 이 예제에서의 스트림은 teed되어 두개의 스트림이 두개의 리더기로 읽어진다는 점만 제외하면 앞서 살펴본 Simple random stream 예제와 매우 유사하게 동작합니다.

```js
function teeStream() {
  const teedOff = stream.tee();
  readStream(teedOff[0], list2);
  readStream(teedOff[1], list3);
}
```

## Pipe chains

One very experimental feature of streams is the ability to pipe streams into one another (called a [pipe chain](/ko/docs/Web/API/Streams_API/Concepts#Pipe_chains)). This involves two methods — {{domxref("ReadableStream.pipeThrough()")}}, which pipes a readable stream through a writer/reader pair to transform one data format into another, and {{domxref("ReadableStream.pipeTo()")}}, which pipes a readable stream to a writer acting as an end point for the pipe chain.

This functionality is at a very experimental stage and is subject to change, so we have no explored it too deeply as of yet.

We have created an example called [Unpack Chunks of a PNG](https://github.com/mdn/dom-examples/tree/master/streams/png-transform-stream) ([see it live also](https://mdn.github.io/dom-examples/streams/png-transform-stream/)) that fetches an image as a stream, then pipes it through to a custom PNG transform stream that retrieves PNG chunks out of a binary data stream.

```js
// Fetch the original image
fetch("png-logo.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  // Create a gray-scaled PNG stream out of the original
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

## Summary

That explains the basics of "default" readable streams. We'll explain bytestreams in a separate future article, once they are available in browsers.
