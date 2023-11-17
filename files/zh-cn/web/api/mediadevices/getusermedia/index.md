---
title: MediaDevices.getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
---

{{APIRef("WebRTC")}}

**`MediaDevices.getUserMedia()`** 会提示用户给予使用媒体输入的许可，媒体输入会产生一个{{domxref("MediaStream")}}，里面包含了请求的媒体类型的轨道。此流可以包含一个视频轨道（来自硬件或者虚拟视频源，比如相机、视频采集设备和屏幕共享服务等等）、一个音频轨道（同样来自硬件或虚拟音频源，比如麦克风、A/D 转换器等等），也可能是其他轨道类型。

它返回一个 {{jsxref("Promise")}} 对象，成功后会`resolve`回调一个 {{domxref("MediaStream")}} 对象。若用户拒绝了使用权限，或者需要的媒体源不可用，`promise`会`reject`回调一个 `PermissionDeniedError` 或者 `NotFoundError` 。

> **备注：** 返回的 promise 对象可能既不会 resolve 也不会 reject，因为用户不是必须选择允许或拒绝。

通常你可以使用 {{domxref("navigator.mediaDevices")}} 来获取 {{domxref("MediaDevices")}} ，例如：

```js
navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    /* 使用这个 stream stream */
  })
  .catch(function (err) {
    /* 处理 error */
  });
```

## 语法

```js
var promise = navigator.mediaDevices.getUserMedia(constraints);
```

### 参数

- `constraints`

  - : 作为一个{{domxref("MediaStreamConstraints")}} 对象，指定了请求的媒体类型和相对应的参数。

    constraints 参数是一个包含了`video` 和 `audio`两个成员的`MediaStreamConstraints` 对象，用于说明请求的媒体类型。必须至少一个类型或者两个同时可以被指定。如果浏览器无法找到指定的媒体类型或者无法满足相对应的参数要求，那么返回的 Promise 对象就会处于 rejected［失败］状态，`NotFoundError`作为 rejected［失败］回调的参数。

    以下同时请求不带任何参数的音频和视频：

    ```js
    { audio: true, video: true }
    ```

    如果为某种媒体类型设置了 `true` ，得到的结果的流中就需要有此种类型的轨道。如果其中一个由于某种原因无法获得，`getUserMedia()` 将会产生一个错误。

    当由于隐私保护的原因，无法访问用户的摄像头和麦克风信息时，应用可以使用额外的 constraints 参数请求它所需要或者想要的摄像头和麦克风能力。下面演示了应用想要使用 1280x720 的摄像头分辨率：

    ```js
    {
      audio: true,
      video: { width: 1280, height: 720 }
    }
    ```

    浏览器会试着满足这个请求参数，但是如果无法准确满足此请求中参数要求或者用户选择覆盖了请求中的参数时，有可能返回其他的分辨率。

    强制要求获取特定的尺寸时，可以使用关键字`min`、`max` 或者 `exact`（就是 min == max）。以下参数表示要求获取最低为 1280x720 的分辨率。

    ```js
    {
      audio: true,
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      }
    }
    ```

    如果摄像头不支持请求的或者更高的分辨率，返回的 Promise 会处于 rejected 状态，`NotFoundError 作为`rejected 回调的参数，而且用户将不会得到要求授权的提示。

    造成不同表现的原因是，相对于简单的请求值和`ideal`关键字而言，关键字`min`, `max`, 和 `exact`有着内在关联的强制性，请看一个更详细的例子：

    ```js
    {
      audio: true,
      video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 776, ideal: 720, max: 1080 }
      }
    }
    ```

    当请求包含一个 ideal（应用最理想的）值时，这个值有着更高的权重，意味着浏览器会先尝试找到最接近指定的理想值的设定或者摄像头（如果设备拥有不止一个摄像头）。

    简单的请求值也可以理解为是应用理想的值，因此我们的第一个指定分辨率的请求也可以写成如下：

    ```js
    {
      audio: true,
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }
    ```

    并不是所有的 constraints 都是数字。例如，在移动设备上面，如下的例子表示优先使用前置摄像头（如果有的话）：

    ```js
    { audio: true, video: { facingMode: "user" } }
    ```

    强制使用后置摄像头，请用：

    ```js
    { audio: true, video: { facingMode: { exact: "environment" } } }
    ```

### 返回值

返回一个 {{jsxref("Promise")}}，这个 Promise 成功后的回调函数带一个 {{domxref("MediaStream")}} 对象作为其参数。

### 异常

返回一个失败状态的 Promise，这个 Promise 失败后的回调函数带一个{{domxref("DOMException")}}对象作为其参数。可能的异常有：

- `AbortError`［中止错误］
  - : 尽管用户和操作系统都授予了访问设备硬件的权利，而且未出现可能抛出`NotReadableError`异常的硬件问题，但仍然有一些问题的出现导致了设备无法被使用。
- `NotAllowedError`［拒绝错误］

  - : 用户拒绝了当前的浏览器实例的访问请求；或者用户拒绝了当前会话的访问；或者用户在全局范围内拒绝了所有媒体访问请求。

    > **备注：** 较旧版本的规范使用了`SecurityError`，但在新版本当中`SecurityError`被赋予了新的意义。

- `NotFoundError`［找不到错误］
  - : 找不到满足请求参数的媒体类型。
- `NotReadableError`［无法读取错误］
  - : 尽管用户已经授权使用相应的设备，操作系统上某个硬件、浏览器或者网页层面发生的错误导致设备无法被访问。
- `OverconstrainedError`［无法满足要求错误］

  - : 指定的要求无法被设备满足，此异常是一个类型为`OverconstrainedError`的对象，拥有一个`constraint`属性，这个属性包含了当前无法被满足的`constraint`对象，还拥有一个`message`属性，包含了阅读友好的字符串用来说明情况。

    > **备注：** 因为这个异常甚至可以在用户尚未授权使用当前设备的情况下抛出，所以应当可以当作一个探测设备能力属性的手段［fingerprinting surface］。

- `SecurityError`［安全错误］
  - : 在`getUserMedia()` 被调用的 {{domxref("Document")}} 上面，使用设备媒体被禁止。这个机制是否开启或者关闭取决于单个用户的偏好设置。
- `TypeError`［类型错误］
  - : constraints 对象未设置［空］，或者都被设置为`false`。

## 示例

### 宽度和高度

这个例子设置了摄像头分辨率，并把结果的 {{domxref("MediaStream")}} 分配给了一个 video 元素。

```js
// 想要获取一个最接近 1280x720 的相机分辨率
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (mediaStream) {
    var video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = function (e) {
      video.play();
    };
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  }); // 总是在最后检查错误
```

### 在旧的浏览器中使用新的 API

这是一个使用 `navigator.mediaDevices.getUserMedia()`的例子，带一个 polyfill 以适应旧的浏览器。要注意的是这个 polyfill 并不能修正一些约束语法上的遗留差异，这表示约束在某些浏览器上可能不会很好地运行。推荐使用处理了约束的 [adapter.js](https://github.com/webrtc/adapter) polyfill 来替代。

```js
// 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
// 因为这样可能会覆盖已有的属性。这里我们只会在没有 getUserMedia 属性的时候添加它。
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function (constraints) {
    // 首先，如果有 getUserMedia 的话，就获得它
    var getUserMedia =
      navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // 一些浏览器根本没实现它 - 那么就返回一个 error 到 promise 的 reject 来保持一个统一的接口
    if (!getUserMedia) {
      return Promise.reject(
        new Error("getUserMedia is not implemented in this browser"),
      );
    }

    // 否则，为老的 navigator.getUserMedia 方法包裹一个 Promise
    return new Promise(function (resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  };
}

navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then(function (stream) {
    var video = document.querySelector("video");
    // 旧的浏览器可能没有 srcObject
    if ("srcObject" in video) {
      video.srcObject = stream;
    } else {
      // 防止在新的浏览器里使用它，应为它已经不再支持了
      video.src = window.URL.createObjectURL(stream);
    }
    video.onloadedmetadata = function (e) {
      video.play();
    };
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });
```

### 帧率

在某些情况下，比如 WebRTC 上使用受限带宽传输时，低帧率可能更适宜。

```js
var constraints = { video: { frameRate: { ideal: 10, max: 15 } } };
```

### 前置或者后置摄像头

在移动设备（电话）上

```js
var front = false;
document.getElementById("flip-button").onclick = function () {
  front = !front;
};

var constraints = { video: { facingMode: front ? "user" : "environment" } };
```

## 权限

在一个可安装的 app（如[Firefox OS app](/zh-CN/Apps/Build/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial)）中使用 `getUserMedia()` ，你需要在声明文件中指定以下的权限：

```js
"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}
```

参见 [permission: audio-capture](/zh-CN/Apps/Developing/App_permissions#audio-capture) 和 [permission: video-capture](/zh-CN/Apps/Developing/App_permissions#video-capture) 来获取更多信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 旧的 [navigator.getUserMedia](/zh-CN/docs/Web/API/Navigator/getUserMedia) 遗留 API
- [navigator.enumerateDevices](/zh-CN/docs/Web/API/MediaDevices/enumerateDevices) - 获取用户可用的设备类型和数量
- [WebRTC](/zh-CN/docs/WebRTC) - WebRTC API 的介绍页面
- [MediaStream API](/zh-CN/docs/WebRTC/MediaStream_API) - 媒体流对象的 API
- [Taking webcam photos](/zh-CN/docs/WebRTC/taking_webcam_photos) - 一个关于使用 `getUserMedia()` 拍照而非录视频的教程
