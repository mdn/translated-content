---
title: "Navigator : share() 메서드"
short-title: share()
slug: Web/API/Navigator/share
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

{{domxref("Navigator")}} 인터페이스의 **`share()`** 메서드는 디바이스의 기본 공유 메커니즘을 호출하여 텍스트, URL 또는 파일 등의 데이터를 공유합니다. 사용 가능한 공유 대상은 장치에 따라 다르지만 클립보드, 연락처 및 이메일 애플리케이션, 웹사이트, 블루투스 등이 포함될 수 있습니다.

이 메서드는 `undefined`로 완료되는 {{jsxref("Promise")}}를 반환합니다. Windows에서는 이는 공유 팝업이 열릴 때 Promis가 완료되고, Android에서는 데이터가 성공적으로 공유 대상에 전달된 후 완료됩니다.

[Web Share API](/ko/docs/Web/API/Web_Share_API)는 [web-share](/ko/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) permission policy에 의해 제어됩니다.
`share()` 메서드는 권한이 지원되지만 허용되지 않은 경우 예외를 발생시킬 수 있습니다.

## 구문

```js-nolint
navigator.share(data)
```

### 매개변수

- `data` {{optional_inline}}
  - : 공유할 데이터를 포함한 객체입니다.

    사용자 에이전트에게 알려지지 않은 속성은 무시되고, 공유 데이터는 사용자 에이전트가 이해하는 속성에 대해서만 평가됩니다.
    모든 속성은 선택적이지만, 적어도 하나 이상 지정되어야 합니다.

    가능한 값은 다음과 같습니다.
    - `url` {{optional_inline}}
      - : 공유할 URL을 나타내는 문자열
    - `text` {{optional_inline}}
      - : 공유할 텍스트를 나타내는 문자열.
    - `title` {{optional_inline}}
      - : 공유할 제목을 나타내는 문자열. May be ignored by the target.
    - `files` {{optional_inline}}
      - : 공유할 파일들을 나타내는 {{domxref("File")}} 객체 배열. 공유 가능한 파일 유형은 [아래](#공유가능한 파일 유형)를 참고하세요.

### 반환 값

`undefined`로 완료하거나, 아래 [예외](#예외)중 하나로 거부될 수 있는 {{jsxref("Promise")}}를 반환합니다.

### 예외

{{jsxref("Promise")}}는 다음 `DOMException` 값 중 하나를 reject합니다.

- `InvalidStateError` {{domxref("DOMException")}}
  - : 문서가 완전히 활성화되지 않았거나, 다른 공유 작업이 진행 중입니다.
- `NotAllowedError` {{domxref("DOMException")}}
  - : `web-share` [Permissions Policy](/ko/docs/Web/HTTP/Guides/Permissions_Policy) 이 해당 기능을 차단하거나, 창에 {{Glossary("transient activation")}}가 없거나, 보안상의 이유로 파일 공유가 차단되었습니다.
- {{jsxref("TypeError")}}
  - : 지정한 공유 데이터가 유효하지 않습니다. 가능한 이유는 다음과 같습니다.
    - `data` 매개변수가 완전히 생략되었거나 알 수 없는 값의 속성만 포함하고 있는 경우. 사용자 에이전트가 인식할 수 없는 속성은 무시됨을 주의하세요.
    - URL 형식이 잘못되었습니다.
    - 파일이 지정되었지만 지원되지 않는 파일인 경우.
    - 지정된 데이터가 사용자 에이전트에 의해 "적대적인 공유"로 여겨지는 경우.

- `AbortError` {{domxref("DOMException")}}
  - : 사용자가 공유 작업을 취소했거나 사용가능한 공유 대상이 없는 경우.
- `DataError` {{domxref("DOMException")}}
  - : 공유 대상을 시작하거나 데이터 전송를 전송하는 동안 문제가 발생한 경우.

## 공유가능한 파일 유형

다음은 일반적으로 공유할 수 있는 파일 형식 목록입니다. 항상 {{domxref("navigator.canShare()")}}로 가능 여부를 확인하는 것이 좋습니다.

- 애플리케이션
  - `.pdf` - `application/pdf`
- 오디오
  - `.flac` - `audio/flac`
  - `.m4a` - `audio/x-m4a`
  - `.mp3` - `audio/mpeg` (also accepts `audio/mp3`)
  - `.oga` - `audio/ogg`
  - `.ogg` - `audio/ogg`
  - `.opus` - `audio/ogg`
  - `.wav` - `audio/wav`
  - `.weba` - `audio/webm`
- 이미지
  - `.avif` - `image/avif`
  - `.bmp` - `image/bmp`
  - `.gif` - `image/gif`
  - `.ico` - `image/x-icon`
  - `.jfif` - `image/jpeg`
  - `.jpeg` - `image/jpeg`
  - `.jpg` - `image/jpeg`
  - `.pjp` - `image/jpeg`
  - `.pjpeg` - `image/jpeg`
  - `.png` - `image/png`
  - `.svg` - `image/svg+xml`
  - `.svgz` - `image/svg+xml`
  - `.tif` - `image/tiff`
  - `.tiff` - `image/tiff`
  - `.webp` - `image/webp`
  - `.xbm` - `image/x-xbitmap`
- 텍스트
  - `.css` - `text/css`
  - `.csv` - `text/csv`
  - `.ehtml` - `text/html`
  - `.htm` - `text/html`
  - `.html` - `text/html`
  - `.shtm` - `text/html`
  - `.shtml` - `text/html`
  - `.text` - `text/plain`
  - `.txt` - `text/plain`
- 비디오
  - `.m4v` - `video/mp4`
  - `.mp4` - `video/mp4`
  - `.mpeg` - `video/mpeg`
  - `.mpg` - `video/mpeg`
  - `.ogm` - `video/ogg`
  - `.ogv` - `video/ogg`
  - `.webm` - `video/webm`

## 보안

`share()` 메서드를 사용하려면 현재 문서에 [web-share](/ko/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) Permissions Policy 와 {{Glossary("transient activation")}}가 있어야 합니다. (이는 버튼 클릭 같은 UI 이벤트에 의해 트리거되어야 하며 스크립트로 임의의 지점에서 실행할 수 없습니다.) 또한, 이 메서드는 네이티브 구현에서 공유를 지원하는 유효한 데이터가 지정해야 합니다.

## 예제

### URL 공유하기

아례 예시는 Web Share API를 호출하여 MDN의 URL을 공유합니다.
[Web Share 테스트](https://mdn.github.io/dom-examples/web-share/) ([소스 코드 보기](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)).

#### HTML

공유를 발생시키는 버튼과 테스트 결과를 단락을 생성합니다.

```html
<p><button>Share MDN!</button></p>
<p class="result"></p>
```

#### JavaScript

```js
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
```

#### 결과

버튼을 클릭하면 사용자의 플랫폼에서 공유 다이얼로그를 엽니다. 버튼 아래에는 공유가 성공했는지 여부가 표시되거나 오류 코드가 제공됩니다.

{{EmbedLiveSample('Sharing a URL','','','','','','web-share')}}

### 파일 공유하기

파일을 공유하려면, 먼저 {{domxref("navigator.canShare()")}}를 호출하여 테스트합니다. 그런 다음 `navigator.share()` 호출에 파일 목록을 포함합니다.

#### HTML

```html
<div>
  <label for="files">Select images to share:</label>
  <input id="files" type="file" accept="image/*" multiple />
</div>
<button id="share" type="button">Share your images!</button>
<output id="output"></output>
```

#### JavaScript

`title` 과 `text` 속성은 중요하지 않으므로, `navigator.canShare()`에 전달되는 데이터 객체에는 `files`속성만이 포함됩니다.

```js
const input = document.getElementById("files");
const output = document.getElementById("output");

document.getElementById("share").addEventListener("click", async () => {
  const files = input.files;

  if (files.length === 0) {
    output.textContent = "No files selected.";
    return;
  }

  // feature detecting navigator.canShare() also implies
  // the same for the navigator.share()
  if (!navigator.canShare) {
    output.textContent = `Your browser doesn't support the Web Share API.`;
    return;
  }

  if (navigator.canShare({ files })) {
    try {
      await navigator.share({
        files,
        title: "Images",
        text: "Beautiful images",
      });
      output.textContent = "Shared!";
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
    }
  } else {
    output.textContent = `Your system doesn't support sharing these files.`;
  }
});
```

#### 결과

{{EmbedLiveSample('Sharing files')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
