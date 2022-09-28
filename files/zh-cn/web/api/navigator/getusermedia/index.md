---
title: navigator.getUserMedia
slug: Web/API/Navigator/getUserMedia
---

> **备注：** 此 API 已更名为 {{domxref("MediaDevices.getUserMedia()")}}。请使用那个版本进行替代！这个已废弃的 API 版本仅为了向后兼容而存在。

{{APIRef}}{{deprecated_header}}

**Navigator.getUserMedia()** 方法提醒用户需要使用音频（0 或者 1）和（0 或者 1）视频输入设备，比如相机，屏幕共享，或者麦克风。如果用户给予许可，**successCallback** 回调就会被调用，{{domxref("MediaStream")}} 对象作为回调函数的参数。如果用户拒绝许可或者没有媒体可用，**errorCallback** 就会被调用，类似的，**`PermissionDeniedError` **或者** `NotFoundError`** 对象作为它的参数。注意，有可能以上两个回调函数都不被调用，因为不要求用户一定作出选择（允许或者拒绝）。

## 语法

```
navigator.getUserMedia ( constraints, successCallback, errorCallback );
```

### 参数

**constraints**

{{domxref("MediaStreamConstaints")}} 对象指定了请求使用媒体的类型，还有每个类型的所需要的参数。具体细节请参见 {{domxref("MediaDevices.getUserMedia()")}} 方法下面的 [constraints](/zh-CN/docs/Web/API/MediaDevices/getUserMedia#Parameters) 部分。

**successCallback**

当调用成功后，successCallback 中指定的函数就被调用，包含了媒体流的 {{domxref("MediaStream")}} 对象作为它的参数，你可以把媒体流对象赋值给合适的元素，然后使用它，就像下面的例子一样：

```
function(stream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(stream);
   video.onloadedmetadata = function(e) {
      // Do something with the video here.
   };
}
```

**errorCallback**

当调用失败，errorCallback 中指定的函数就会被调用，{{domxref("MediaStreamError")}} 对象作为它唯一的参数；此对象基于 {{domxref("DOMException")}} 对象构建。错误码描述见参见以下：

| Error                   | Description                        |
| ----------------------- | ---------------------------------- |
| `PermissionDeniedError` | 使用媒体设备请求被用户或者系统拒绝 |
| `NotFoundError`         | 找不到 constraints 中指定媒体类型  |

## 示例

### 宽度和高度

使用 getUserMedia() 的示例，包括了可以适用于多种浏览器前缀的代码。注意这种使用方式已经被废除，现代的使用方法请参见 {{domxref("MediaDevices.getUserMedia()")}} 下面的[示例](/zh-CN/docs/Web/API/MediaDevices/getUserMedia#Frame_rate)部分。

```
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
      function(stream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(stream);
         video.onloadedmetadata = function(e) {
           video.play();
         };
      },
      function(err) {
         console.log("The following error occurred: " + err.name);
      }
   );
} else {
   console.log("getUserMedia not supported");
}
```

## 权限

在一个可以安装的 app（比如，Firefox OS app）中使用 getUserMedia()，你需要在你的 manifest 文件中指定一个或者多个以下条目：

```
"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}
```

参见 [permission: audio-capture](/zh-CN/Apps/Developing/App_permissions#audio-capture) 和 [permission: video-capture](/zh-CN/Apps/Developing/App_permissions#video-capture) 以查看更多信息。

## 浏览器兼容性

{{Compat}}

> **警告：** 新代码应当使用 {{domxref("Navigator.mediaDevices.getUserMedia()")}} 替代。

## 更多参见

- {{domxref("MediaDevices.getUserMedia()")}} 替代了当前废弃的版本。
- [WebRTC](/zh-CN/docs/WebRTC) - the introductory page to the API
- [MediaStream API](/zh-CN/docs/WebRTC/MediaStream_API) - the API for the media stream objects
- [Taking webcam photos](/zh-CN/docs/WebRTC/taking_webcam_photos) - a tutorial on using `getUserMedia() for taking photos rather than video.`
