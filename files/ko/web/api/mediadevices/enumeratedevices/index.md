---
title: MediaDevices.enumerateDevices()
slug: Web/API/MediaDevices/enumerateDevices
---

{{APIRef("WebRTC")}}

{{domxref("MediaDevices")}}의 **`enumerateDevices()`** 메서드는 사용(또는 접근)이 가능한 미디어 입력장치나 출력장치들의 리스트를 가져옵니다. 예를 들면 마이크, 카메라, 헤드셋 등의 미디어 입/출력 장치 리스트를 불러오는 것 이죠. 이 메서드는 {{domxref("Promise")}}를 반환하는데, 이 Promise가 resolve되면 장치(device)정보가 들어있는 {{domxref("MediaDeviceInfo")}} 배열(array)을 확인할 수 있습니다.

## Syntax (구문)

```js
var enumeratorPromise = navigator.mediaDevices.enumerateDevices();
```

### Return value ( 반환값 )

반환받는 {{ domxref("Promise") }}는 모든 장치 리스트를 가져오는 것에 성공하면 {{domxref("MediaDeviceInfo")}}객체 배열(array)를 받습니다. 배열에 들어있는 객체들은 각각의 장치정보를 가지고 있습니다.

장치 리스트를 가져오는 것이 실패하면, promise는 rejected처리 됩니다.

## Example (예제)

`enumerateDevices()`을 사용하는 방법을 알아봅시다. 아래는 장치 종류와 [device IDs (장치 아이디)](/ko/docs/Web/API/MediaDeviceInfo/deviceId)를 반환하며, 레이블이 있을 경우 레이블도 보여주는 간단한 코드 입니다.

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices()를 지원하지 않습니다.");
  return;
}

// 카메라와 마이크 리스트

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

위 코드를 실행하면 아래와 같은 결과를 볼 수 있을 것입니다.:

```
videoinput: id = csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: id = RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: id = r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

또는 하나 이상의 {{domxref("MediaStream")}}이 사용 가능하거나 접근(사용권한)이 가능할 경우:

```
videoinput: FaceTime HD Camera (Built-in) id=csO9c0YpAf274OuCPUA53CNE0YHlIr2yXCi+SqfBZZ8=
audioinput: default (Built-in Microphone) id=RKxXByjnabbADGQNNZqLVLdmXlS0YkETYCIbg+XxnvM=
audioinput: Built-in Microphone id=r2/xw1xUPIyZunfV1lGrKOma5wTOvCkWfZ368XCndm0=
```

## 명세서

{{Specifications}}

## Browser compatibility (브라우저 호환)

{{Compat}}

## See also

- {{domxref("navigator.mediaDevices.getUserMedia()")}}
- [WebRTC](/ko/docs/WebRTC) - the introductory page to the API
- [MediaStream API](/ko/docs/WebRTC/MediaStream_API) - the API for the media stream objects
- [Taking webcam photos](/ko/docs/WebRTC/taking_webcam_photos) - a tutorial on using `getUserMedia()` for taking photos rather than video.
