---
title: MediaDevices.getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaDevices")}} 인터페이스의 **`getUserMedia()`** 메서드는 사용자에게 미디어 입력 장치 사용 권한을 요청하며, 사용자가 수락하면 요청한 미디어 종류의 트랙을 포함한 {{domxref("MediaStream")}}을 반환합니다. 스트림은 카메라, 비디오 녹화 장치, 스크린 공유 장치 등 하드웨어와 가장 비디오 소스가 생성하는 비디오 트랙과, 마이크, A/D 변환기 등 물리적과 가상 오디오 장치가 생성하는 오디오 스트림, 그리고 그 외의 다른 종류의 스트림을 포함할 수 있습니다.

반환하는 값은 {{domxref("MediaStream")}} 객체로 이행하는 {{jsxref("Promise")}}입니다. 사용자가 권한 요청을 거부했거나 일치하는 유형의 미디어를 사용할 수 없는 경우, 프로미스는 각각 `NonAllowedError`와 `NotFoundError`로 거부합니다.

> **참고:** 사용자가 권한 요청에 대한 선택을 하지 않고 완전히 무시할 수도 있기 때문에, 프로미스 또한 이행도 거부도 하지 않을 수 있습니다.

보통, {{domxref("MediaDevices")}} 싱글톤 객체는 다음과 같이 {{domxref("navigator.mediaDevices")}}를 사용해 접근합니다.

```js
async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* 스트림 사용 */
  } catch (err) {
    /* 오류 처리 */
  }
}
```

프로미스를 직접 사용할 경우 다음과 같습니다.

```js
navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    /* 스트림 사용 */
  })
  .catch(function (err) {
    /* 오류 처리 */
  });
```

> **참고:** 현재 문서를 안전하게 불러온 경우가 아니라면 `navigator.mediaDevices`는 `undefined`이므로 `getUserMedia()`도 사용할 수 없습니다. [개인정보와 보안](#개인정보와_보안) 항목에서 `getUserMedia()`와 관련된 보안 문제를 자세히 살펴보세요.

## 구문

```js
const promise = navigator.mediaDevices.getUserMedia(constraints);
```

### 매개변수

- `constraints`

  - : 요청할 미디어 유형과 각각에 대한 요구사항을 지정하는 {{domxref("MediaStreamConstraints")}} 객체.`constraints` 매개변수는 두 개의 구성 요소, `video`와 `audio`를 가지는 객체로, 요청할 미디어 유형에 대해 설명합니다. 둘 중 적어도 하나는 지정해야 합니다. 브라우저가 주어진 유형과 제약을 만족하는 미디어 트랙을 하나도 찾을 수 없는 경우 프로미스는 `NotFoundError`와 함께 거부합니다.다음은 특별한 요구사항 없이 오디오와 비디오 둘 다 요청하는 매개변수입니다.

    ```js
    { audio: true, video: true }
    ```

    미디어 타입에 true 가 지정된 경우 각 타입에 맞는 장치가 사용 준비된 상태이어야 하며, 만약 사용 준비가 안 된 상태에서 getUserMedia() 를 호출하면 오류를 반환합니다.constraints 매개변수에 세부사항을 지정하여 카메라와 마이크에 세부적인 요청을 할 수 있습니다. 아래의 코드는 비디오의 해상도를 1280x720로 지정하는 예제입니다.

    ```js
    { audio: true, video: { width: 1280, height: 720 } }
    ```

    브라우저는 지정한 해상도의 비디오 트랙을 가져오기 위해 시도하지만, 어떤 이유로든 지정한 해상도의 트랙을 가져올 수 없다면 다른 해상도의 비디오 트랙을 반환합니다.아래와 같이 `min`, `max` 키워드를 사용하여 최소 해상도를 1280x720으로 지정할 수도 있으며, `exact` (논리적으로 `min == max` 와 같음) 키워드를 사용하여 특정 해상도를 지정할 수도 있습니다.

    ```js
    { audio: true, video: { width: { min: 1280 }, height: { min: 720 } } }
    ```

    만약 카메라에서 지원하는 해상도 중에서 1280x720해상도가 없거나 이 이상의 해상도 역시 없는 경우 promise는 rejected 상태로 `OverconstrainedError` 를 반환하며, 사용자에게 미디어 장치 사용 권한 요청을 하지 않습니다.`min`, `max` 키워드만 사용한 경우 최소, 최대 해상도를 지정할 수는 있지만, 브라우저는 최솟값을 기준으로 제공할 수 있는 해상도를 찾아 미디어 스트림을 반환합니다. 일반적으로 이러한 동작은 우리의 의도와 다릅니다. 그래서 `ideal` 키워드를 사용하여 이상적인 해상도를 지정할 수 있습니다.아래의 코드를 논리적으로 해석하면 1024x776 - 1120x800 - 1350x1020 - 1920x1080 와 같이 지원하는 여러 해상도가 있으면 브라우저는 `ideal` 해상도와 가장 근사하는 1120x800 해상도를 미디어 장치에 요청 후 반환합니다.

    ```js
    { audio: true, video: { width: { min: 1024, ideal: 1280, max: 1920 }, height: { min: 776, ideal: 720, max: 1080 } } }
    ```

    아래와 같이 최솟값 최댓값 지정 없이 `ideal` 해상도만 지정할 수도 있습니다.

    ```js
    { audio: true, video: { width: { ideal: 1280 }, height: { ideal: 720 } } }
    ```

    모바일 장치의 전면 카메라를 요청하기 위한 코드:

    ```js
    { audio: true, video: { facingMode: "user" } }
    ```

    모바일 장치의 후면 카메라를 요청하기 위한 코드:

    ```js
    { audio: true, video: { facingMode: { exact: "environment" } } }
    ```

### 반환 값

요청한 미디어를 성공적으로 얻었다면 {{domxref("MediaStream")}} 을 수신하는 핸들러가 {{jsxref("Promise")}} 형태로 스트림을 반환합니다.

### 예외

promise 이행이 실패하면 실패 처리 핸들러로 {{domxref("DOMException")}} 에러 객체가 전달됩니다. 발생 가능한 에러 종류:

- `AbortError`
  - : 사용자와 운영체제에서 하드웨어 장치 사용 권한을 부여받고 `NotReadableError` 에러를 발생시키는 하드웨어 문제가 발생하지 않았지만, 다른 프로그램에서 해당 장치를 사용 중인 경우 이 에러가 발생합니다.
- `NotAllowedError`
  - : 사용자가 브라우저 설정을 통해 장치에 대한 접근권한을 차단하였거나 장치 사용 권한 요청에 거부한 경우 이 에러가 발생합니다. 이 외에도 어떤 식으로든 장치에 대한 접근을 차단하였다면 이 에러가 발생합니다.> **참고:** 이전 버전의 규격에서는 이 에러와 `SecurityError` 를 동일한 의미로 사용하였지만, 현재 버전에서는 다른 의미로 사용하므로 혼용하여선 안 됩니다.
- `NotFoundError`
  - : constraints 매개변수 조건에 맞는 미디어 트랙이 없는 경우 이 에러가 발생합니다.
- `NotReadableError`
  - : 사용자가 접근 권한을 부여했고 조건에 맞는 미디어 트랙도 있지만 어떤 이유로든 장치에 액세스 할 수 없어서 운영체제, 브라우저, 웹 페이지 레벨에서 하드웨어 에러가 발생하여 이 에러가 발생합니다.
- `OverconstrainedError`
  - : The specified constraints resulted in no candidate devices which met the criteria requested. The error is an object of type `OverconstrainedError`, and has a `constraint` property whose string value is the name of a constraint which was impossible to meet, and a `message` property containing a human-readable string explaining the problem.> **참고:** Because this error can occur even when the user has not yet granted permission to use the underlying device, it can potentially be used as a fingerprinting surface.
- `SecurityError`
  - : User media support is disabled on the {{domxref("Document")}} on which `getUserMedia()` was called. The mechanism by which user media support is enabled and disabled is left up to the individual user agent.
- `TypeError`
  - : The list of constraints specified is empty, or has all constraints set to `false`.

## User privacy

As an API that may involve significant privacy concerns, `getUserMedia()` is held by the specification to very specific requirements for user notification and permission management. First, `getUserMedia()` must always get user permission before opening any media gathering input such as a webcam or microphone. Browsers may offer a once-per-domain permission feature, but they must ask at least the first time, and the user must specifically grant ongoing permission if they choose to do so.

Of equal importance are the rules around notification. Browsers are required to display an indicator that shows that a camera or microphone is in use, above and beyond any hardware indicator that may exist. They must also show an indicator that permission has been granted to use a device for input, even if the device is not actively recording at the moment.

In Firefox, for example, the URL bar displays a pulsing red icon to indicate that recording is underway. The icon is gray if the permission is in place but recording is not currently underway. The device's physical light is used to indicate whether or not recording is currently active. If you've muted your camera (so-called "facemuting"), your camera's activity light goes out to indicate that the camera is not actively recording you, without discarding the permission to resume using the camera once muting is over.

## Examples

### Width and height

This example gives a preference for camera resolution, and assigns the resulting {{domxref("MediaStream")}} object to a video element.

```js
// Prefer camera resolution nearest to 1280x720.
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
  }); // always check for errors at the end.
```

### Using the new API in older browsers

Here's an example of using `navigator.mediaDevices.getUserMedia()`, with a polyfill to cope with older browsers. Note that this polyfill does not correct for legacy differences in constraints syntax, which means constraints won't work well across browsers. It is recommended to use the [adapter.js](https://github.com/webrtc/adapter) polyfill instead, which does handle constraints.

```js
// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function (constraints) {
    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia =
      navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(
        new Error("getUserMedia is not implemented in this browser"),
      );
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function (resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  };
}

navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then(function (stream) {
    var video = document.querySelector("video");
    // Older browsers may not have srcObject
    if ("srcObject" in video) {
      video.srcObject = stream;
    } else {
      // Avoid using this in new browsers, as it is going away.
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

### Frame rate

Lower frame-rates may be desirable in some cases, like WebRTC transmissions with bandwidth restrictions.

```js
var constraints = { video: { frameRate: { ideal: 10, max: 15 } } };
```

### Front and back camera

On mobile phones.

```js
var front = false;
document.getElementById("flip-button").onclick = function () {
  front = !front;
};

var constraints = { video: { facingMode: front ? "user" : "environment" } };
```

## Permissions

To use `getUserMedia()` in an installable app (for example, a [Firefox OS app](/en-US/Apps/Build/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial)), you need to specify one or both of the following fields inside your manifest file:

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

See [permission: audio-capture](/en-US/Apps/Developing/App_permissions#audio-capture) and [permission: video-capture](/en-US/Apps/Developing/App_permissions#video-capture) for more information.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- The older {{domxref("navigator.getUserMedia()")}} legacy API.
- {{domxref("mediaDevices.enumerateDevices()")}}: Learn the types and number of devices the user has available.
- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API (Media Streams)](/ko/docs/Web/API/Media_Streams_API)
- [Taking webcam photos](/ko/docs/Web/API/WebRTC_API/Taking_still_photos): A tutorial on using `getUserMedia()` to taking photos rather than video.
