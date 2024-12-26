---
title: 교차 출처 이미지와 캔버스 허용하기
slug: Web/HTML/CORS_enabled_image
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

HTML은 이미지 처리를 위해 {{Glossary("CORS")}} header를 포함하고 있는 [`crossorigin`](/ko/docs/Web/HTML/Element/img#crossorigin) 속성을 제공합니다. 이는 {{ HTMLElement("img") }} 요소에서 정의된, 외부 origin으로 부터 가져오는 이미지가 {{HTMLElement("canvas")}}에서 사용할 수 있도록 해줍니다. 마치 현재 origin에서 가져온 것처럼 말입니다

`crossorigin` 속성이 어떻게 사용되는지 자세히 알고 싶다면, [CORS settings attributes](/ko/docs/Web/HTML/Attributes/crossorigin) 를 참고하세요.

## 보안과 오염된 canvas들

다른 호스트들에 있는 이미지나 비디오를 포함한 canvas 비트맵의 픽셀들은 다양한 출처로 부터 가져오기 때문에, 보안과 관련된 문제를 피할 수 없습니다.

CORS를 통하지 않고, 다른 origin으로 부터 가져온 데이터들은 canvas에 그려지는 즉시 canvas는 **오염**됩니다. 오염된 canvas는 더 이상 안전하지 않은 것으로 여겨지고, canvas 이미지에서 데이터를 가져오려는 어떤 시도든 exception이 발생합니다.

만약 외부 출처 콘텐츠가 HTML {{HTMLElement("img")}} 또는 SVG {{SVGElement("svg")}} 요소라면, canvas의 콘텐츠를 가져오려는 시도는 허용되지 않습니다.

만약 외부 출처 콘텐츠가 {{domxref("HTMLCanvasElement")}} 또는 {{domxref("ImageBitMap")}} 로부터 오는 이미지이고, 이미지의 source가 동일 출처 원칙과 맞지 않는다면 canvas의 콘텐츠를 읽으려는 시도는 막힙니다.

오염된 캔버스에서 다음 중 하나를 호출하면 오류가 발생합니다:

- 캔버스 컨텍스트에서 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}를 호출
- {{HTMLElement("canvas")}} 요소 자체에서 {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}}, {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} 또는 {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}}를 호출

canvas가 오염된 상태에서 이러한 작업을 시도해보면 `SecurityError`가 발생합니다. 이렇게 하면 사용자가 이미지를 사용하여 원격 웹 사이트에서 무단으로 정보를 가져와 개인 데이터가 노출되는 것을 방지할 수 있습니다.

## 외부 출처의 이미지 저장

이 예제는 외부 출처의 이미지를 검색하여 로컬 스토리지에 저장할 수 있도록 허용하고자 합니다. 이를 구현하려면 서버를 구성하고 웹사이트 자체에 대한 코드를 작성해야 합니다.

### 웹 서버 구성

가장 먼저 필요한것은 교차 출처 접근을 허용하도록 {{HTTPHeader("Access-Control-Allow-Origin")}} 헤더가 있는 이미지 파일을 호스팅하도록 구성된 서버입니다.

[Apache](https://httpd.apache.org/)를 사용하여 사이트를 서비스한다고 가정해보겠습니다. 아래와같이 HTML5 보일러플레이트 [CORS 이미지에 대한 Apache 서버 구성 파일](https://github.com/h5bp/server-configs-apache/blob/master/src/cross-origin/images.conf)을 살펴봅시다.

```xml
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(bmp|cur|gif|ico|jpe?g|png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

간단히 말해 이 설정은 인터넷 어디에서나 그래픽 파일(".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" 및 ".webp" 확장자를 가진)의 교차 출처로 접근할 수 있도록 서버를 구성합니다.

### 저장 기능 구현하기

이제 서버가 이미지 교차 출처 검색을 허용하도록 구성되었으므로 코드가 실행중인 동일한 도메인에서 이미지를 제공하는 것처럼 사용자가 이미지를 [로컬 스토리지](/ko/docs/Web/API/Web_Storage_API)에 저장할 수 있도록 하는 코드를 작성할 수 있습니다.

핵심은 로드될 {{domxref("HTMLImageElement")}}에 {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}}을 설정하여 [`crossorigin`](/ko/docs/Web/HTML/Global_attributes#crossorigin)속성을 사용하는 것입니다. 이렇게 하면 이미지 데이터를 다운로드 하려고 할때 브라우저가 교차 출처 접근을 요청하도록 지시합니다.

#### 다운로드 시작하기

다운로드를 시작하는 코드 (예: 사용자가 "Download" 버튼을 클릭할 때 실행할 코드)는 다음과 같습니다.

```js
function startDownload() {
  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}
```

여기서는 하드코딩된 URL(`imageURL`)을 사용하고 있지만 어디에서나 쉽게 찾을 수 있습니다. 다운로드를 시작하려면 {{domxref("HTMLImageElement.Image", "Image()")}} 생성자를 사용하여 새로운 {{domxref("HTMLImageElement")}} 객체를 생성합니다. 그런다음 `crossOrigin` 속성을 `"Anonymous"`으로 설정하여 교차 출처 다운로드를 허용하도록 이미지를 구성합니다. (이미지 교차 출처의 인증이 되지 않은 다운로드를 허용). 이미지 요소에서 발생하는 {{domxref("Window/load_event", "load")}} 이벤트에 대한 이벤트 수신기가 추가되며 이는 이미지 데이터가 수신되었음을 의미 합니다.

마지막으로 이미지의 {{domxref("HTMLImageElement.src", "src")}} 속성을 다운로드할 이미지의 URL로 설정하면 다운로드가 시작됩니다.

#### 이미지 수신 및 저장하기

새로 다운로드한 이미지를 처리하는 코드는 `imageReceived()` 메서드에서 찾을 수 있습니다.

```js
function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.log("Error: " + err);
  }
}
```

`imageReceived()` 가 호출되어 다운로드한 이미지를 수신하는 `HTMLImageElement` 의 `"load"` 이벤트를 처리합니다. 이 이벤트는 다운로드한 데이터를 모두 사용할 수 있게 되면 트리거 됩니다. 이미지를 데이터 URL로 변환하는 데 사용할 새 {{HTMLElement("canvas")}} 요소를 생성하고 변수 `context` 에서 캔버스의 2D 드로잉 컨텍스트({{domxref("CanvasRenderingContext2D")}})에 접근하는 것으로 시작됩니다.

캔버스 크기가 수신된 이다지와 일치하도록 조정된 다음 {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}를 사용하여 이미지를 캔버스에 그립니다. 그런 다음 캔버스가 문서에 삽입되어 이미지가 표시됩니다.

이제 이미지를 실제로 로컬에 저장할 차례입니다. 이를 위해 {{domxref("Window.localStorage", "localStorage")}} 전역 객체을 통해 액세스되는 웹 스토리지 API의 로컬 스토리지 매커니즘을 사용합니다. 캔버스 메서드 {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}}을 사용하여 이미지를 PNG 이미지를 나타내는 data:// URL 로 변환한 다음 {{domxref("Storage.setItem", "setItem()")}}을 사용하여 로컬 스토리지에 저장합니다.

## See also

- [WebGL 과 Chrome 13에서 교차출처 이미지 사용하기](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML 명세 - `crossorigin` 속성](http://whatwg.org/html#attr-img-crossorigin)
- [Web Storage API](/ko/docs/Web/API/Web_Storage_API)
