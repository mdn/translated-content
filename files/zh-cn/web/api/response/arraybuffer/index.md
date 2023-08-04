---
title: Response.arrayBuffer()
slug: Web/API/Response/arrayBuffer
---

{{APIRef("Fetch")}}{{ SeeCompatTable() }}

{{domxref("Response")}}上的方法 **`arrayBuffer()`** 接受一个 {{domxref("Response")}} 流，并等待其读取完成。它返回一个 promise 实例，并 resolve 一个 {{domxref("ArrayBuffer")}} 对象。

## 语法

```js
response.arrayBuffer().then(function(buffer) {
  // do something with buffer
)};
```

### 参数

无。

### 返回值

A promise that resolves with an {{domxref("ArrayBuffer")}}.

## 例子

In our [fetch array buffer example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-array-buffer) (run [fetch array buffer live](http://mdn.github.io/fetch-examples/fetch-array-buffer/)), we have a Play button. When pressed, the `getData()` function is run.

In `getData()` we create a new request using the {{domxref("Request.Request")}} constructor, then use it to fetch an OGG music track. We also use {{domxref("AudioContext.createBufferSource")}} to create an audio buffer source. When the fetch is successful, we read an {{domxref("ArrayBuffer")}} out of the response using `arrayBuffer()`, decode the audio data using {{domxref("AudioContext.decodeAudioData")}}, set the decoded data as the audio buffer source's buffer (`source.buffer`), then connect the source up to the {{domxref("AudioContext.destination")}}.

Once `getData()` has finished running, we start the audio source playing with `start(0)`, then disable the play button so it can't be clicked again when it is already playing (this would cause an error.)

```js
function getData() {
  source = audioCtx.createBufferSource();

  var myRequest = new Request("viper.ogg");

  fetch(myRequest).then(function (response) {
    response.arrayBuffer().then(function (buffer) {
      audioCtx.decodeAudioData(buffer, function (decodedData) {
        source.buffer = decodedData;
        source.connect(audioCtx.destination);
      });
    });
  });
}

// wire up buttons to stop and play audio

play.onclick = function () {
  getData();
  source.start(0);
  play.setAttribute("disabled", "disabled");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
