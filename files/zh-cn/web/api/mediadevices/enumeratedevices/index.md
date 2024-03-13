---
title: MediaDevices.enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
---

{{APIRef("WebRTC")}}

{{domxref("MediaDevices")}} 的方法 **`enumerateDevices()`** 请求一个可用的媒体输入和输出设备的列表，例如麦克风，摄像机，耳机设备等。返回的 {{domxref("Promise")}} 完成时，会带有一个描述设备的 {{domxref("MediaDeviceInfo")}} 的数组。

## 语法

```plain
var enumeratorPromise = navigator.mediaDevices.enumerateDevices();
```

### 返回值

返回一个 {{ domxref("Promise") }} 。当完成时，它接收一个 {{domxref("MediaDeviceInfo")}} 对象的数组。每个对象描述一个可用的媒体输入输出设备。.

如果枚举失败，promise 也会被拒绝（rejected）。

## 示例

这是一个使用 `enumerateDevices()` 的例子。它只是输出一个带有标签（有标签的情况下）的 [device ID](/zh-CN/docs/Web/API/MediaDeviceInfo/deviceId) 的列表。

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("不支持 enumerateDevices() .");
  return;
}

// 列出相机和麦克风。

navigator.mediaDevices
  .enumerateDevices()
  .then(function (devices) {
    devices.forEach(function (device) {
      console.log(
        device.kind + ": " + device.label + " id = " + device.deviceId,
      );
    });
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });
```

这将会输出类似以下的内容：

```plain
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

或者，如果有一个或多个 {{domxref("MediaStream")}} 处于活动状态或者获得了持久授权，将会输出以下内容：

```plain
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("navigator.mediaDevices.getUserMedia()")}}
- [WebRTC](/zh-CN/docs/WebRTC) - the introductory page to the API
- [MediaStream API](/zh-CN/docs/WebRTC/MediaStream_API) - the API for the media stream objects
- [Taking webcam photos](/zh-CN/docs/WebRTC/taking_webcam_photos) - a tutorial on using `getUserMedia()` for taking photos rather than video.
