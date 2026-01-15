---
title: MIME 타입 (IANA 미디어 타입)
slug: Web/HTTP/Guides/MIME_types
original_slug: Web/HTTP/MIME_types
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

**미디어 타입** (**Multipurpose Internet Mail Extensions 또는 MIME type**로도 알려져 있음)이란 문서, 파일 또는 바이트 집합의 성격과 형식을 나타냅니다. MIME 타입은 IETF의 {{RFC(6838)}}에 정의 및 표준화되어 있습니다.

[인터넷 할당 번호 관리 기관(IANA)](https://www.iana.org/)은 모든 공식 MIME 타입을 담당하며 [미디어 타입](https://www.iana.org/assignments/media-types/media-types.xhtml)에서 가장 최신의 전체 목록을 찾을 수 있습니다.

> [!WARNING]
> 브라우저는 '파일 확장자가 아닌' MIME 타입을 사용하여 URL 처리 방법을 결정합니다.
> 따라서, 웹 서버가 응답의 {{HTTPHeader("Content-Type")}} 헤더에 올바른 MIME 타입을 보내는 것이 중요합니다.
> 올바르게 구성하지 않으면, 브라우저가 파일 내용을 잘못 해석할 가능성이 높고, 사이트가 제대로 작동하지 않고 다운로드한 파일이 잘못 처리될 수 있습니다.

## MIME 타입의 구조

MIME 타입은 가장 일반적으로 슬래시(`/`)로 구분된 'type'과 'subtype'의 두 부분으로 구성됩니다. 또한 이 사이에는 공백이 없습니다.

```plain
type/subtype
```

**_type_** 은 `video` 또는 `text`와 같이 데이터 타입이 속하는 일반 카테고리를 나타냅니다.

**_subtype_** 은 MIME 타입이 나타내는 지정된 타입의 정확한 데이터 종류를 식별합니다.
예를 들어, MIME 타입 `text`의 경우 하위 타입은 `plain` (평문 텍스트), `html` ({{Glossary("HTML")}} 소스 코드) 또는 `calendar` (iCalendar/`.ics` 용)입니다.

각 타입에는 고유한 하위 타입이 있습니다. MIME 타입은 항상 타입과 하위 타입 모두 가지며, 둘 중 하나만 가지지는 않습니다.

추가적인 세부정보를 제공하기 위해 선택적 **매개변수**를 추가할 수 있습니다.

```plain
type/subtype;parameter=value
```

예를 들어, 기본 타입이 `text`인 MIME 타입의 경우 선택적 `charset` 매개변수를 추가하여 데이터의 문자에 사용되는 문자 세트를 지정할 수 있습니다.
`문자 집합`이 지정되지 않은 경우, {{Glossary("user agent", "사용자 에이전트")}} 설정으로 재정의되지 않는 한 기본 값은 {{Glossary("ASCII")}} (`US-ASCII`)입니다.
UTF-8 텍스트 파일을 지정하려면, MIME 타입 `text/plain;charset=UTF-8`이 사용됩니다.

MIME 타입은 대소문자를 구분하지는 않지만 전통적으로 소문자로 쓰여집니다. 매개변수 값은 대소문자를 구분할 수 있습니다.

### 타입

타입에는 **discrete** 및 **multipart**라는 두 가지 클래스가 있습니다. 개별 타입은 단일 텍스트나 음악 파일, 단일 비디오 등 단일 파일이나 매체를 나타내는 타입입니다.
multipart 타입은 여러 컴포넌트 조각으로 구성된 문서를 나타내며, 각 부분은 고유한 개별 MIME 타입을 가질 수 있고, multipart 타입은 하나의 트랜잭션으로 함께 전송되는 여러 파일을 캡슐화할 수 있습니다.
예를 들어, 이메일에 여러 파일을 첨부할 때 multipart MIME 타입이 사용됩니다.

### 개별 타입

현재 IANA에 등록된 개별 타입은 다음과 같습니다.

- `application`
  - : 다른 타입 중 하나에 명시적으로 속하지 않는, 모든 종류의 이진 데이터입니다.
    어떤 방식으로든 실행되거나 해석될 데이터 또는 특정 어플리케이션이나 어플리케이션 범위를 사용해야 하는 이진 데이터 입니다.
    일반 이진 데이터(또는 실제 타입을 알 수 없는 이진 데이터)는 `application/octet-stream`입니다.
    다른 일반적인 예로는 `application/pdf`, `application/pkcs8` 및 `application/zip`을 들 수 있습니다.
    [(IANA에서 애플리케이션 타입 레지스트리를 확인하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : 오디오 또는 음악 데이터입니다. 예로는 `audio/mpeg`,
    `audio/vorbis`를 들 수 있습니다.
    [(IANA에서 오디오 타입 레지스트리를 확인하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : MIME 타입을 사용하는 방법을 보여주는 예제에서, 자리 표시자로 사용하도록 예약되어 있습니다. 이 타입은 샘플 코드 목록 및 문서 외부에서 사용되어선 안 됩니다.
    `example`은 하위 타입으로도 사용될 수 있습니다.
    예를 들어, 웹에서 오디오 작업과 관련된 경우, MIME 타입 `audio/example`은 해당 타입이 자리 표시자임을 나타내기 위해 사용될 수 있고, 실제 코드를 사용할 때 적절한 타입으로 대체되어야 합니다.
- `font`
  - : 글꼴/서체 데이터입니다. 일반적인 예로 `font/woff`, `font/ttf` 및 `font/otf`를 들 수 있습니다.
    [(IANA에서 글꼴 타입 레지스트리를 확인하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : 비트맵과 벡터 정지 이미지를 모두 포함하는 이미지 또는 그래픽 데이터 애니메이션 {{Glossary("GIF")}} 또는 APNG와 같은 정지 이미지 형식의 애니메이션 버전입니다.
    일반적인 예로`image/jpeg`, `image/png` 및 `image/svg+xml`를 들 수 있습니다.
    [(IANA에서 이미지 타입 레지스트리를 확인하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : 3D 객체 또는 화면에 대한 모델 데이터입니다. 일반적인 예로 `model/3mf` 및 `model/vrml`를 들 수 있습니다..
    [(IANA에서 모델 타입 레지스트리를 확인하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : 사람이 읽을 수 있는 콘텐츠, 소스 코드 또는 쉼표로 구분된 값 (CSV) 형태 데이터와 같은, 텍스트 형식의 데이터를 가지는 텍스트 전용 데이터입니다.
    예로는 `text/plain`, `text/csv` 및 `text/html`이 있습니다.
    [(IANA에서 텍스트 타입 레지스트리를 확인하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : MP4 영화(`video/mp4`)와 같은 비디오 데이터 또는 파일입니다.
    [(IANA에서 비디오 타입 레지스트리를 확인하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

특정 하위 타입이 없는 텍스트 문서의 경우, `text/plain`을 사용해야 합니다.
마찬가지로, 특정 하위 타입이나 알려진 하위 타입이 없는 이진 데이터로 이루어진 문서의 경우, `application/octet-stream`을 사용해야 합니다.

### Multipart 타입

**Multipart** 타입은 일반적으로 다른 MIME 타입들을 지닌 개별적인 파트들로 나누어지는 문서의 그룹을 나타냅니다. 종종 MIME 타입이 다른 부분은 특히 이메일 시나리오(모두 동일한 파일의 일부이며 여러 개의 각각의 파일을 나타냄(**복합 문서**를 의미))에서도 사용할 수 있습니다.

[HTML Forms](/ko/docs/Learn_web_development/Extensions/Forms) 의 {{HTTPMethod("POST")}} 메서드에서 사용되는 `multipart/form-data`와 문서 일부분을 보내기 위해 {{HTTPStatus("206")}} `Partial Content`를 사용하는 `multipart/byteranges`를 제외하면, HTTP는 다중부분 문서를 특별한 방식으로 처리하지 않습니다. 메시지가 브라우저로 전송됩니다(아마도 문서를 표시하는 방법을 모르는 경우 '다른 이름으로 저장'창을 표시함).

2개의 다중부분 타입이 있습니다.

- `message`
  - : 다른 메시지를 캡슐화하는 메시지입니다. 예를 들어, 데이터의 일부로 전달된 메시지가 포함되어 있는 이메일을 나타내는 데 사용할 수 있거나 또는 마치 여러 메시지인 것럼 매우 큰 메시지를 청크로 나누어 보낼 수 있습니다. 예를 들어, 데이터의 일부로 전달된 메시지가 포함된 이메일을 나타내는 데 사용할 수 있습니다. 또는 마치 여러 메시지인 것처럼 매우 큰 메시지를 청크로 나누어 보낼 수 있습니다.
    예를 들면, `message/rfc822` (전달되거나 회신된 메시지 인용) 및 `message/partial`을 포함하여 큰 메시지를 자동으로 작은 메시지로 나누어 수신자가 재조립할 수 있도록 합니다.
    [(IANA에서 메시지 타입 레지스트리를 확인하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : 개별적으로 서로 다른 MIME 타입을 가질 수 있는 여러 컴포넌트로 구성된 데이터입니다.
    예를 들어 `multipart/form-data` ({{domxref("FormData")}} API를 사용해 생성된 데이터의 경우) 및 `multipart/byteranges` (defined in {{RFC(7233, "", "5.4.1")}}에 정의되어 있고 {{Glossary("HTTP")}}의 {{HTTPStatus(206)}} "Partial Content"와 함께 사용됩니다. 가져온 데이터는 {{HTTPHeader("Range")}} 헤더를 사용하여 전달되는 것과 같이 콘텐츠의 일부일 뿐입니다).
    [(IANA에서 Multipart 타입 레지스트리를 참조하세요)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## 웹 개발자들을 위한 중요한 MIME 타입

### `application/octet-stream`

이 타입은 이진 파일을 위한 기본값입니다. 이 타입은 실제로 '잘 알려지지 않은' 이진 파일을 의미하므로, 브라우저는 보통 자동으로 실행하지 않거나 실행해야 할지 묻기도 합니다. {{HTTPHeader("Content-Disposition")}} 헤더가 값 `attachment` 와 함게 설정되었고 'Save As' 파일을 제안하는지 여부에 따라 브라우저가 그것을 다루게 됩니다.

### `text/plain`

이것은 텍스트 파일에 대한 기본값입니다. 실제로 '알려지지 않은 텍스트' 파일일지라도 브라우저들은 그것을 보여줄 수 있다고 가정합니다.

> [!NOTE]
> `text/plain`이 '모든 종류의 텍스트 데이터'를 의미하지는 않습니다.
> 만약 브라우저가 특정 종류의 텍스트 데이터를 예상한 경우, 반드시 일치한다고 간주하지 않을 겁니다.
> 특히, CSS 파일을 선언한 {{HTMLElement("link")}} 요소로부터 `text/plain` 파일을 다운로드할 경우, `text/plain`으로 표현된다면 브라우저는 그것을 유효한 CSS 파일로 감지하지 않을 겁니다.
> CSS의 MIME 타입인 `text/css`이 사용되어야만 합니다.

### `text/css`

웹 페이지를 그리는 CSS 파일들은 `text/css` 파일이 **되어야만 합니다**.
서버가 `.css` 접미사를 가진 파일들을 CSS 파일이라고 인식하지 못하면, `text/plain` 또는 `application/octet-stream` MIME 타입으로 전송할지도 모릅니다.
이런 경우 대부분의 브라우저들이 CSS 파일이라고 인식하지 못하며 조용히 무시될 겁니다.

### `text/html`

모든 HTML 컨텐츠는 이 타입과 함께 제공되어야 합니다. `application/xml+html`와 같은 XHTML을 위한 대체 MIME 타입들은 현재에는 대부분 사용되지 않습니다.

### `text/javascript`

[IANA 미디어 타입](https://www.iana.org/assignments/media-types/media-types.xhtml#text)마다, [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) 및 [HTML 명세](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript), JavaScript 컨텐츠는 MIME 타입 `text/javascript` 사용해서 제공되어야 합니다.
다른 MIME 타입은 JavaScript에 유효한 것으로 간주되지 않으며, `text/javascript` 이외의 MIME 타입을 사용하면 스크립트가 로드되거나 실행되지 않을 수 있습니다.

일부 JavaScript 콘텐츠는 스크립트 콘텐츠에 대한 문자 집합을 지정하려는 시도로, MIME 타입의 일부로 `charset` 매개변수와 함께 잘못 제공되는 것을 발견할 수 있습니다.
해당 `charset` 매개변수는 JavaScript 콘텐츠에 유효하지 않으며, 대부분의 경우 스크립트 로드에 실패하게 됩니다.

#### 레거시 JavaScript MIME 타입

역사적 이유로 `text/javascript` MIME 타입 외에도 [MIME 스니핑 표준](https://mimesniff.spec.whatwg.org/) (브라우저가 MIME 타입을 해석하고 유효한 타입이 없는 콘텐츠로 무엇을 해야 하는지 파악하는 방법에 대한 정의)을 사용하면 다음 레거시 JavaScript MIME 타입을 사용하여 JavaScript를 제공할 수도 있습니다.

- `application/javascript` {{deprecated_inline}}
- `application/ecmascript` {{deprecated_inline}}
- `application/x-ecmascript` {{Non-standard_Inline}}
- `application/x-javascript` {{Non-standard_Inline}}
- `text/ecmascript` {{deprecated_inline}}
- `text/javascript1.0` {{Non-standard_Inline}}
- `text/javascript1.1` {{Non-standard_Inline}}
- `text/javascript1.2` {{Non-standard_Inline}}
- `text/javascript1.3` {{Non-standard_Inline}}
- `text/javascript1.4` {{Non-standard_Inline}}
- `text/javascript1.5` {{Non-standard_Inline}}
- `text/jscript` {{Non-standard_Inline}}
- `text/livescript` {{Non-standard_Inline}}
- `text/x-ecmascript` {{Non-standard_Inline}}
- `text/x-javascript` {{Non-standard_Inline}}

> [!NOTE]
> 주어진 {{Glossary("user agent", "사용자 에이전트")}}가 이들 중 일부 또는 전부를 지원할 수 있더라도 `text/javascript`만 사용해야 합니다.
> 현재는 물론 앞으로도 작동이 보장되는 유일한 MIME 타입입니다.

### 이미지 타입

MIME 타입이 `image`인 파일에는 이미지 데이터가 포함되어 있습니다. 하위 타입은 데이터가 나타내는 특정 이미지 파일 형식을 지정합니다.

다음 이미지 타입은 웹페이지에서 사용하기에 '안전한' 것으로 간주될 만큼 일반적으로 사용됩니다.

- [`image/apng`](/ko/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/ko/docs/Web/Media/Formats/Image_types#avif_image) : AV1 이미지 파일 포맷 (AVIF)
- [`image/gif`](/ko/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange 포맷 (GIF)
- [`image/jpeg`](/ko/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group 이미지 (JPEG)
- [`image/png`](/ko/docs/Web/Media/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/ko/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/ko/docs/Web/Media/Formats/Image_types#webp_image): Web Picture 포맷 (WEBP)

[이미지 파일 타입 및 포맷 가이드](/ko/docs/Web/Media/Formats/Image_types#common_image_file_types)에서는 다양한 이미지 포맷을 사용해야 하는 경우에 대한 정보와 권장사항을 제공합니다.

<!--
| MIME 타입       | 이미지 타입                                 |
| --------------- | ------------------------------------------- |
| `image/gif`     | GIF 이미지 (무손실 압축, PNG에 의해 대체됨) |
| `image/jpeg`    | JPEG 이미지                                 |
| `image/png`     | PNG 이미지                                  |
| `image/svg+xml` | SVG 이미지 (벡터 이미지)                    |

WebP (`image/webp`) 추가에 대한 논의가 있지만 새로운 타입의 이미지는 코드 베이스 크기의 증가를 불러오므로, 새로운 보안 문제를 야기할 수도 있어서 브라우저 벤더들은 그것을 수용하기 전에 매우 신중한 분위기입니다.

다른 종류의 이미지들은 웹 문서 내에서 찾아볼 수 있습니다. 예를 들어, 많은 브라우저들은 파비콘 혹은 그와 비슷한 아이콘 이미지 타입을 지원합니다. 개별적으로 이런 컨텍스트 내에서, `image/x-icon` MIME 타입을 이용해 지원되고 있습니다. -->

### 오디오와 비디오 타입

이미지 경우처럼, HTML은 {{HTMLElement("audio")}}과 {{HTMLElement("video")}} 요소에 사용하기 위한 특정 파일 및 코덱 타입을 지원하도록 요구하지 않으므로 중요합니다. 미디어에 사용할 파일 형식과 코덱을 선택할 때 대상 고객과 사용할 수 있는 브라우저 범위(및 해당 브라우저의 버전)를 고려하세요.

[미디어 컨테이너 형식 가이드](/ko/docs/Web/Media/Guides/Formats/Containers)는 웹 브라우저에서 일반적으로 지원되는 파일 형식 목록을 제공합니다. 특별한 사용 사례에 대한 정보, 단점, 호환성 정보 및 기타 세부 정보가 포함되어 있습니다.

[오디오 코덱](/ko/docs/Web/Media/Formats/Audio_codecs) 및 [비디오 코덱](/ko/docs/Web/Media/Guides/Formats/Video_codecs) 가이드에는 웹 브라우저가 지원하는 다양한 코덱이 나열되어 있습니다. 지원하는 오디오 채널 수, 사용되는 압축의 종류, 유용한 비트 전송률 등과 같은 기술 정보와 함께 호환성 세부 정보를 제공하는 경우가 많습니다.

[WebRTC에서 사용하는 코덱](/ko/docs/Web/Media/Formats/WebRTC_codecs) 안내서는 주요 웹 브라우저에서 지원하는 코덱을 구체적으로 다루면서, 확장하므로 지원하는 브라우저 범위에 가장 적합한 코덱을 선택할 수 있습니다.

오디오 또는 비디오 파일의 MIME 타입은 일반적으로 컨테이너 형식(파일 타입)을 지정합니다. 선택적 [코덱 매개변수](/ko/docs/Web/Media/Guides/Formats/codecs_parameter)를 MIME 타입에 추가하여 사용할 코덱과 미디어 인코딩에 사용됩 옵션(예, 코덱 프로필, 레벨, 기타 정보)을 추가로 지정할 수 있습니다.

웹 콘텐츠에 사용되는 가장 일반적인 MIME 유형은 다음과 같지만, 사용 가능한 모든 유형의 전체 목록은 아닙니다. 자세한 내용은 [미디어 컨테이너 형식 가이드](/ko/docs/Web/Media/Guides/Formats/Containers)를 참조하세요.

| MIME 타입                                                  | 오디오 및 비디오 타입                                                                                                                                                                |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `audio/wave`, `audio/wav`, `audio/x-wav`, `audio/x-pn-wav` | WAVE 컨테이너 형식의 오디오 파일입니다. PCM 오디오 코덱 (WAVE 코덱 "1")은 종종 지원되지만, 다른 코덱은 지원이 제한됩니다.                                                            |
| `audio/webm`                                               | WebM 컨테이너 형식의 오디오 파일입니다. Vorbis 및 Opus는 WebM 명세에서 공식적으로 지원하는 코덱입니다.                                                                               |
| `video/webm`                                               | WebM 컨테이너 형식의 비디오 파일(오디오 포함 가능) VP8 및 VP9는 가장 일반적인 비디오 코덱입니다. Vorbis 및 Opus는 가장 일반적인 오디오 코덱입니다.                                   |
| `audio/ogg`                                                | Ogg 컨테이너 형식의 오디오 파일입니다. Vorbis는 이러한 컨테이너에 사용되는 가장 일반적인 코덱이지만, Opus는 이제 Ogg에서도 지원됩니다.                                               |
| `video/ogg`                                                | Ogg 컨테이너 형식의 비디오 파일(오디오 포함 가능) Theora는 그 안에서 사용되는 일반적인 비디오 코덱입니다. Vorbis가 일반적으로 오디오 코덱이지만, Opus가 점점 더 보편화되고 있습니다. |
| `application/ogg`                                          | Ogg 컨테이너 형식을 사용하는 오디오 또는 비디오 파일입니다. Theora는 그 안엗서 사용되는 일반적인 비디오 코덱입니다. Vorb is는 일반적인 오디오 코덱입니다.                            |

### `multipart/form-data`

`multipart/form-data`은 브라우저에서 서버로 완성된 [HTML Form](/ko/docs/Learn_web_development/Extensions/Forms)의 내용을 전송 시 사용할 수 있습니다.

다중부분 문서 형식으로써, 경계(이중 대시 `'--'` 로 시작되는 문자열)로 구분되어지는 다른 파트들로 구성됩니다. 각 파트는 그 자체로 개체이며 자신만의 HTTP 헤더를 가지는데, 파일 업로드 필드를 위한 헤더로는 {{HTTPHeader("Content-Disposition")}}, {{HTTPHeader("Content-Type")}}이 있습니다.

```http
Content-Type: multipart/form-data; boundary=aBoundaryString
(other headers associated with the multipart document as a whole)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(data)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(data)
--aBoundaryString
(more subparts)
--aBoundaryString--
```

다음은 HTML `<form>`입니다:

```html
<form
  action="http://localhost:8000/"
  method="post"
  enctype="multipart/form-data">
  <label>Name: <input name="myTextField" value="Test" /></label>
  <label><input type="checkbox" name="myCheckBox" /> Check</label>
  <label>
    Upload file: <input type="file" name="myFile" value="test.txt" />
  </label>
  <button>Send the file</button>
</form>
```

`<form>`은 다음 메시지를 전송하게 됩니다:

```http
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--
```

### `multipart/byteranges`

`multipart/byteranges` MIME 타입은 브라우저에 부분적 응답을 보내는 데 사용됩니다.

{{HTTPStatus("206", "206 Partial Content")}} 상태 코드가 전송된 경우, MIME 타입은 문서가 각각의 요청된 범위들 중 하나인 몇 가지 파트들로 구성되어 있음을 알려주기 위해 사용됩니다. 다른 다중부분 타입처럼, {{HTTPHeader("Content-Type")}}은 이 조각들을 분리하기 위해 `boundary` 디렉티브를 사용합니다. 각각의 다른 파트들은 문서의 실제 타입을 가진 {{HTTPHeader("Content-Type")}} 헤더와 그들이 나타내는 범위를 가진 {{HTTPHeader("Content-Range")}}를 지니고 있습니다.

```http
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## 정확한 MIME 타입 설정의 중요성

대부분의 웹 서버들은 기본 타입 중 하나인 `application/octet-stream` MIME 타입을 사용해 알려지지 않은 타입의 리소스를 전송합니다. 보안상의 이유로, 대부분의 브라우저들은 그런 리소스에 대한 사용자 정의된 기본 동작 설정을 허용하지 않으며, 그것을 사용하려면 디스크에 저장해야 합니다.

자주 발생하는 잘못된 서버 구성입니다.

- RAR로 인코딩된 파일.
  이 경우에, 이상적인 부분은 원본 파일의 실제 타입입니다. .RAR 파일은 다양한 타입의 여러 리소스를 보유할 수 있으므로 이는 종종 불가능합니다.
  이 경우는, `application/x-rar-compressed`를 전송하도록 서버를 구성하세요.
- 오디오 및 비디오.
  올바른 MIME 타입을 가진 리소스만 {{HTMLElement("video")}} 또는 {{HTMLElement("audio")}} 요소에서 재생됩니다.
  [오디오 및 비디오 미디어 타입](/ko/docs/Web/Media/Formats)을 반드시 정확하게 지정하세요.
- 독점 파일 형식.
  대부분의 브라우저는 이 일반 MIME 타입에 대한 기본 동작(예, "Word에서 열기") 정의를 허용하지 않으므로 `application/octet-stream`을 사용하지 마세요.
  `application/vnd.mspowerpoint`와 같은 특정 타입을 사용하면 사용자가 선택한 프레젠테이션 소프트웨어에서 이러한 파일을 자동으로 열 수 있습니다.

## MIME 스니핑

MIME 타입이 없거나 브라우저가 MIME 타입이 올바르지 않다고 판단하는 경우, 브라우저는 리소스의 바이트를 보고 올바른 MIME 타입을 추측하는 'MIME 스니핑'을 수행할 수 있습니다.

각 브라우저는 서로 다른 상황에서 MIME 스니핑을 다르게 수행합니다. (예를 들어, Safari는 전송된 MIME 타입이 적합하지 않은 경우 URL 파일 확장자를 확인합니다) 일부 MIME 타입은 실행 가능한 콘텐츠를 나타내므로 보안 문제가 있습니다. 서버는 {{HTTPHeader("X-Content-Type-Options")}} 헤더를 전송하여 MIME 스니핑을 방지할 수 있습니다.

## 문서 타입을 전달하는 다른 방법

MIME 타입이 문서 타입 정보를 전달하는 유일한 방법은 아닙니다.

- 특히 Microsoft Windows에서는 파일 이름 접미사가 사용되는 경우가 있습니다.
  모든 운영 체제에서 이러한 접미사를 의미 있는 것으로 간주하는 것은 아니며(예, Linux 및 macOS), 접미사가 정확하다는 보장도 없습니다.
- 매직 넘버. 다양한 형식의 구문을 사용하면 바이트 구조를 보고 파일 타입을 추론할 수 있습니다.
  예를 들어, GIF 파일은 16진수 `47 49 46 38 39` (`GIF89`)로 시작하고, PNG 파일은 `89 50 4E 47` (`.PNG`)로 시작합니다.
  모든 파일 형식에 매직 넘버가 있는 것은 아니므로, 이 역시 100% 신뢰할 수는 없습니다.

## 같이 보기

- [웹 미디어 기술](/ko/docs/Web/Media)
- [웹에서 사용되는 미디어 타입 가이드](/ko/docs/Web/Media/Formats)
- [서버의 MIME 타입을 적절하게 구성하기](/ko/docs/Learn/Server-side/Configuring_server_MIME_types)
