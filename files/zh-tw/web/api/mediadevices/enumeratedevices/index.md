---
title: MediaDevices.enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
---

{{APIRef("WebRTC")}}

{{domxref("MediaDevices")}}方法請求一個可用的媒體輸入與媒體輸出裝置列表，像是麥克風、相機、耳機等等。返回值{{jsxref("Promise")}}可被解析為一個描述裝置的{{domxref("MediaDeviceInfo")}}陣列。

對特定設備的存取由[Permissions API](/zh-TW/docs/Web/API/Permissions_API)控制。返回的裝置列表會省略任何未授予相應權限的設備，包括麥克風、相機、揚聲器選擇（對於輸出裝置）等等。

## 語法

```js-nolint
enumerateDevices()
```

### 參數

無。

### 返回值

當返回值{{jsxref("Promise")}}完成時，會得到一個{{domxref("MediaDeviceInfo")}}物件的陣列。陣列裡的每個物件描述一個可用的媒體輸入與輸出設備（只有被授予權限的裝置），物件的順序是有意義的，預設捕獲的裝置會被列在第一個。

如果枚舉失敗，promise 會被拒絕。

## 範例

以下是一個使用`enumerateDevices()`的範例，它會產生一個帶有標籤的（如果有標籤的話）[device ID](/zh-TW/docs/Web/API/MediaDeviceInfo/deviceId)列表。

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
  return;
}

// List cameras and microphones.

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

這可能會產生：

```bash
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

或者如果有一個或多個{{domxref("MediaStream")}}處於活動狀態或是被授予持久性的權限，則將產生：

```bash
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## 規範

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 參見

- {{domxref("MediaDevices.getUserMedia")}}
- [WebRTC](/zh-TW/docs/Web/API/WebRTC_API) - the introductory page to the API
- [MediaStream API](/zh-TW/docs/Web/API/Media_Streams_API) - the API for the media stream objects
- [Taking webcam photos](/zh-TW/docs/Web/API/WebRTC_API/Taking_still_photos) - a
  tutorial on using `getUserMedia()` for taking photos rather than video.
