---
title: Worker.postMessage()
slug: Web/API/Worker/postMessage
---
{{APIRef("Web Workers API")}}

{{domxref("Worker")}} interface의 메서드, **`postMessage()`** 는 `Worker` 자신의 내부 영역으로 메시지를 전달합니다. 이 메서드는 `Worker` 자신에게 보낼 하나의 매개변수를 받습니다. 매개변수로 들어갈 데이터는 순환 참조를 포함하는 [structured clone](/ko/docs/Web/Guide/DOM/The_structured_clone_algorithm) algorithm에 의해 다루어지는 JavaScript 객체를 포함에 어떤 값이든 들어갈 수 있습니다.

`Worker`는 정보를 다시 {{domxref("DedicatedWorkerGlobalScope.postMessage")}} 메서드를 사용해 받은 정보를 산란시키는 스레드로 전달해줄 수 있다.

## Syntax

```js
myWorker.postMessage(aMessage, transferList);
```

### Parameters

<dl><dt><em>aMessage</em></dt><dd>worker로 전해 줄 객체; 이 매개변수는 {{domxref("DedicatedWorkerGlobalScope.onmessage")}} 이벤트 핸들러로 전해질 이벤트의 데이터 필드에 들어갈 것이다. 순환 참조를 포함하는 <a href="/en-US/docs/Web/Guide/DOM/The_structured_clone_algorithm" title="http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#transferable">structured clone</a> 알고리즘에 의해 다루어지는 JavaScript 객체 혹은 어떤 값이라도 이 매개변수에 들어갈 수 있다.</dd><dt><em>transferList</em> {{optional_inline}}</dt><dd>An optional <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" title="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">array</a> of {{domxref("Transferable")}} objects to transfer ownership of. If the ownership of an object is transferred, it becomes unusable (<em>neutered</em>) in the context it was sent from and becomes available only to the worker it was sent to.</dd><dd>Transferable objects are instances of classes like {{domxref("ArrayBuffer")}}, {{domxref("MessagePort")}} or {{domxref("ImageBitmap")}} objects can be transferred. <code>null</code> is not an acceptable value for the <code>transferList</code>.</dd></dl>

### Returns

Void.

## Example

The following code snippet shows the creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor. When either of two form inputs (`first` and `second`) have their values changed, {{event("change")}} events invoke `postMessage()` to send the value of both inputs to the current worker.

```js
var myWorker = new Worker('worker.js');

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
```

For a full example, see our[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

> **참고:** `postMessage()` can only send a single object at once. As seen above, if you want to pass multiple values you can send an array.

### Transfer Example

This example shows a Firefox add-on that transfers an `ArrayBuffer` from the main thread to the `ChromeWorker`, and then the `ChromeWorker` transfers it back to the main thread.

#### Main thread code:

```js
var myWorker = new ChromeWorker(self.path + 'myWorker.js');

function handleMessageFromWorker(msg) {
    console.log('incoming message from worker, msg:', msg);
    switch (msg.data.aTopic) {
        case 'do_sendMainArrBuff':
            sendMainArrBuff(msg.data.aBuf)
            break;
        default:
            throw 'no aTopic on incoming message to ChromeWorker';
    }
}

myWorker.addEventListener('message', handleMessageFromWorker);

// Ok lets create the buffer and send it
var arrBuf = new ArrayBuffer(8);
console.info('arrBuf.byteLength pre transfer:', arrBuf.byteLength);

myWorker.postMessage(
    {
        aTopic: 'do_sendWorkerArrBuff',
        aBuf: arrBuf // The array buffer that we passed to the transferrable section 3 lines below
    },
    [
        arrBuf // The array buffer we created 9 lines above
    ]
);

console.info('arrBuf.byteLength post transfer:', arrBuf.byteLength);
```

#### Worker code

```js
self.onmessage = function (msg) {
    switch (msg.data.aTopic) {
        case 'do_sendWorkerArrBuff':
                sendWorkerArrBuff(msg.data.aBuf)
            break;
        default:
            throw 'no aTopic on incoming message to ChromeWorker';
    }
}

function sendWorkerArrBuff(aBuf) {
    console.info('from worker, PRE send back aBuf.byteLength:', aBuf.byteLength);

    self.postMessage({aTopic:'do_sendMainArrBuff', aBuf:aBuf}, [aBuf]);

    console.info('from worker, POST send back aBuf.byteLength:', aBuf.byteLength);
}
```

#### Output logged

```
arrBuf.byteLength pre transfer: 8                              bootstrap.js:40
arrBuf.byteLength post transfer: 0                             bootstrap.js:42

from worker, PRE send back aBuf.byteLength: 8                  myWorker.js:5:2

incoming message from worker, msg: message { ... }             bootstrap.js:20
got back buf in main thread, aBuf.byteLength: 8                bootstrap.js:12

from worker, POST send back aBuf.byteLength: 0                 myWorker.js:7:2
```

`byteLength` goes to 0 as it is transferred. To see a full working example of this Firefox demo add-on see here: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- The {{domxref("Worker")}} interface it belongs to.
