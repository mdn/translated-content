---
title: MediaDevices
slug: Web/API/MediaDevices
l10n:
  sourceCommit: b2875dbaa70efb5850084b9802803b439db325f5
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

{{domxref("Media Capture and Streams API", "", "", "nocode")}} 的 **`MediaDevices`** 介面提供了存取已連接媒體輸入裝置（如攝影機、麥克風）以及螢幕共享的功能。本質上，它讓你能夠存取任何媒體資料的硬體來源。

{{InheritanceDiagram}}

## 實例屬性

_繼承自其父介面 {{domxref("EventTarget")}} 的屬性。_

## 實例方法

_繼承自其父介面 {{domxref("EventTarget")}} 的方法。_

- {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}
  - : 取得包含系統可用媒體輸入與輸出裝置資訊的陣列。
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : 回傳一個符合 {{domxref("MediaTrackSupportedConstraints")}} 的物件，指出 {{domxref("MediaStreamTrack")}} 介面支援哪些可約束屬性。參見 [Media Streams API](/zh-TW/docs/Web/API/Media_Capture_and_Streams_API/Constraints) 以了解更多關於約束及其用法。
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : 提示使用者選擇顯示器或顯示器的部分區域（例如視窗），以擷取為用於共享或錄製目的的 {{domxref("MediaStream")}}。回傳一個解析為 `MediaStream` 的 Promise。
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : 在經由提示取得使用者權限後，開啟系統上的攝影機及／或麥克風，並提供一個包含視訊軌及／或音訊軌輸入的 {{domxref("MediaStream")}}。
- {{domxref("MediaDevices.selectAudioOutput", "selectAudioOutput()")}} {{Experimental_Inline}}
  - : 提示使用者選擇特定的音訊輸出裝置。

## 事件

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : devicechange 事件將在媒體輸入或輸出裝置連接到使用者的電腦或從中移除時被觸發。

## 範例

```js
// 將變數放在全域作用域，以便在瀏覽器主控台中使用。
const video = document.querySelector("video");
const constraints = {
  audio: false,
  video: true,
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    const videoTracks = stream.getVideoTracks();
    console.log("取得符合約束的串流：", constraints);
    console.log(`使用視訊裝置：${videoTracks[0].label}`);
    stream.onremovetrack = () => {
      console.log("串流已結束");
    };
    video.srcObject = stream;
  })
  .catch((error) => {
    if (error.name === "OverconstrainedError") {
      console.error(
        `你的裝置不支援解析度 ${constraints.video.width.exact}x${constraints.video.height.exact} px。`,
      );
    } else if (error.name === "NotAllowedError") {
      console.error("你需要授予此頁面存取攝影機與麥克風的權限。");
    } else {
      console.error(`getUserMedia 錯誤：${error.name}`, error);
    }
  });
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Media Capture and Streams API](/zh-TW/docs/Web/API/Media_Capture_and_Streams_API)：此介面所屬的 API。
- [Screen Capture API](/zh-TW/docs/Web/API/Screen_Capture_API)：定義了 {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} 方法的 API。
- [WebRTC API](/zh-TW/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}：回傳可用於存取裝置之 `MediaDevices` 物件的參照。
- [CameraCaptureJS：](https://github.com/chrisjohndigital/CameraCaptureJS) 使用 `MediaDevices` 與 MediaStream Recording API 進行 HTML 視訊擷取與播放。
- [OpenLang](https://github.com/chrisjohndigital/OpenLang)：使用 `MediaDevices` 與 MediaStream Recording API 進行視訊錄製的 HTML 視訊語言實驗室 Web 應用程式。
