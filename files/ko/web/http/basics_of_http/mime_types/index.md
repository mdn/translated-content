---
title: MIME 타입
slug: Web/HTTP/Basics_of_HTTP/MIME_types
---

{{HTTPSidebar}}

**MIME 타입**이란 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 메커니즘입니다: 웹에서 파일의 확장자는 별 의미가 없습니다. 그러므로, 각 문서와 함께 올바른 MIME 타입을 전송하도록, 서버가 정확히 설정하는 것이 중요합니다. 브라우저들은 리소스를 내려받았을 때 해야 할 기본 동작이 무엇인지를 결정하기 위해 대게 MIME 타입을 사용합니다.

수 많은 종류의 문서가 있으므로 많은 MIME 타입들이 존재합니다. 우리는 이 글에서 웹 개발에 있어 가장 중요한 MIME 타입들 중 몇 가지를 나열해 살펴보긴 하겠지만, 특정 종류의 문서에 딱 들어맞는 것을 보려면 다음의 전용 문서를 참고하시기 바랍니다: [MIME 타입의 전체 목록](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types).

MIME 타입은 문서 타입 정보를 실어나르는 유일한 방법은 아닙니다:

- 이름의 접미사가 때때로 사용되는데, 특히 Microsoft의 윈도우즈 시스템이 그렇습니다. 모든 운영체제들이 이런 접미사를 의미있게 생각하는 것은 아니며(Linux 혹은 OS X의 경우 그렇습니다), 외부 MIME 타입의 경우처럼 그들이 정확하다는 보장도 없습니다.
- 매직 넘버. 다른 종류의 파일의 문법은 구조 상 보여지는 타입을 결정하는데 도움을 줍니다. 예를 들어, 각 GIF 파일들은 47 49 46 38 16진수 값 \[GIF89]로 시작되며 PNG 파일의 경우 89 50 4E 47 \[.PNG]로 시작됩니다. 파일의 모든 타입들이 이런 매직 넘버를 가지고 있는 것은 아니므로 100% 신뢰할 만한 시스템은 아니기도 합니다.

웹에서는 MIME 타입만이 가장 적절하며, 그러므로 조심스럽게 설정되어야 합니다. 브라우저와 서버들은 일반적인 타입이 제공된 경우에만 MIME 타입을 정의하고, 일치하는지 점검하거나 정확한 MIME 타입을 찾기 위해 접미사나 매직 넘버에 근거하는 휴리스틱(발견적 경험)을 사용합니다.

## 문법

### 일반적인 구조

```
type/subtype
```

MIME 타입의 구조는 매우 간단합니다; `'/'`로 구분된 두 개의 문자열인 타입과 서브타입으로 구성됩니다. 스페이스는 허용되지 않습니다. *type*은 카테고리를 나타내며 _개별(discrete) 혹은_ _멀티파트_ 타입이 될 수 있습니다. _subtype_ 은 각각의 타입에 한정됩니다.

MIME 타입은 대소문자를 구분하지는 않지만 전통적으로 소문자로 쓰여집니다.

### 개별 타입

```
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/octet-stream
…
```

_개별_ 타입은 문서의 카테고리를 가리키며, 다음 중 하나가 될 수 있습니다:

| 타입          | 설명                                                                                                                                   | 일반적인 서브타입 예시                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | 텍스트를 포함하는 모든 문서를 나타내며 이론상으로는 인간이 읽을 수 있어야 합니다                                                       | `text/plain`, `text/html`, `text/css, text/javascript`                                                                                          |
| `image`       | 모든 종류의 이미지를 나타냅니다. (animated gif처럼) 애니메이션되는 이미지가 이미지 타입에 포함되긴 하지만, 비디오는 포함되지 않습니다. | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`                                                                               |
| `audio`       | 모든 종류의 오디오 파일들을 나타냅니다.                                                                                                | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav`                                                                                    |
| `video`       | 모든 종류의 비디오 파일들을 나타냅니다.                                                                                                | `video/webm`, `video/ogg`                                                                                                                       |
| `application` | 모든 종류의 이진 데이터를 나타냅니다.                                                                                                  | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

특정 서브타입이 없는 텍스트 문서들에 대해서는 `text/plain`가 사용되어야 합니다. 특정 혹은 알려진 서브타입이 없는 이진 문서에 대해서는 유사하게, `application/octet-stream`이 사용되어야 합니다.

### 멀티파트 타입

```
multipart/form-data
multipart/byteranges
```

_멀티파트_ 타입은 일반적으로 다른 MIME 타입들을 지닌 개별적인 파트들로 나누어지는 문서의 카테고리를 가리킵니다. 즉 이 타입은 _합성된_ 문서를 나타내는 방법입니다. [HTML Forms](/ko/docs/Web/Guide/HTML/Forms)과 {{HTTPMethod("POST")}} 메서드의 관계 속에서 사용되는 `multipart/form-data` 그리고 전체 문서의 하위 집합만 전송하기 위한 {{HTTPStatus("206")}} `Partial Content` 상태 메시지와 함께 사용되는 `multipart/byteranges`를 제외하고는, HTTP가 멀티파트 문서를 다룰 수 있는 특정한 방법은 존재하지 않습니다: 메시지는 브라우저에 간단히 전달됩니다 (문서를 인라인에 어떻게 디스플레이할지 모르기에, '다른 이름으로 저장' 윈도우를 제시할 겁니다)

## 웹 개발자들을 위한 중요한 MIME 타입

### `application/octet-stream`

이 타입은 이진 파일을 위한 기본값입니다. 이 타입은 실제로 _잘 알려지지 않은_ 이진 파일을 의미하므로, 브라우저는 보통 자동으로 실행하지 않거나 실행해야 할지 묻기도 합니다. {{HTTPHeader("Content-Disposition")}} 헤더가 값 `attachment` 와 함게 설정되었고 'Save As' 파일을 제안하는지 여부에 따라 브라우저가 그것을 다루게 됩니다.

### `text/plain`

이것은 텍스트 파일에 대한 기본값입니다. 실제로 _알려지지 않은 텍스트_ 파일일지라도 브라우저들은 그것을 디스플레이할 수 있다고 가정합니다.

> **참고:** `text/plain`이 *모든 종류의 텍스트 데이터*를 의미하지는 않는다는 것을 알아두시기 바랍니다. 만약 브라우저가 특정 종류의 텍스트 데이터를 예상한 경우, 반드시 일치한다고 간주하지 않을 겁니다. 특히, CSS 파일을 선언한 {{HTMLElement("link")}} 엘리먼트로부터 `text/plain` 파일을 다운로드할 경우, `text/plain`으로 표현된다면 브라우저는 그것을 유효한 CSS 파일로 감지하지 않을 겁니다. CSS의 MIME 타입인 `text/css`이 사용되어야 합니다.

### `text/css`

웹 페이지 내에서 보통 인터프리트되어야 하는 모든 CSS 파일들은 `text/css` 파일이 되어야 합니다. 대게 서버들은 `.css` 접미사를 가진 파일들을 CSS 파일이라고 인식하지 못해 `text/plain` 혹은 `application/octet-stream` MIME 타입으로 전송합니다: 이런 경우 대부분의 브라우저들이 CSS 파일이라고 인식하지 못하며 조용히 무시될 겁니다. 올바른 타입으로 CSS 파일을 서브하는데 특별한 주의가 필요합니다.

### `text/html`

모든 HTML 컨텐츠는 이 타입과 함께 서브되어야 합니다. `application/xml+html`와 같은 XHTML을 위한 대체 MIME 타입들은 현재에는 대부분 쓸모가 없습니다(HTML5이 이 포맷을 흡수했습니다).

### 이미지 타입

오직 널리 알려지고 웹에 안전하다고 취급되는 소수의 이미지 타입만이 웹 페이지 내에서 사용될 수 있습니다:

| MIME 타입       | 이미지 타입                                 |
| --------------- | ------------------------------------------- |
| `image/gif`     | GIF 이미지 (무손실 압축, PNG에 의해 대체됨) |
| `image/jpeg`    | JPEG 이미지                                 |
| `image/png`     | PNG 이미지                                  |
| `image/svg+xml` | SVG 이미지 (벡터 이미지)                    |

WebP (`image/webp`) 추가에 대한 논의가 있지만 새로운 타입의 이미지는 코드 베이스 크기의 증가를 불러오므로, 새로운 보안 문제를 야기할 수도 있어서 브라우저 벤더들은 그것을 수용하기 전에 매우 신중한 분위기입니다.

다른 종류의 이미지들은 웹 문서 내에서 찾아볼 수 있습니다. 예를 들어, 많은 브라우저들은 파비콘 혹은 그와 비슷한 아이콘 이미지 타입을 지원합니다. 개별적으로 이런 컨텍스트 내에서, `image/x-icon` MIME 타입을 이용해 지원되고 있습니다.

### 오디오와 비디오 타입

이미지처럼, HTML은 {{HTMLElement("audio")}}과 {{HTMLElement("video")}} 엘리먼트에 사용하기 위한 지원 타입셋을 정의하지는 않습니다. 그래서 그것들 중에 비교적 작은 그룹이 웹에서 사용될 수 있습니다. [HTML audio 그리고 video 엘리먼트에 의해 지원되는 미디어 포맷](/ko/docs/Web/HTML/Supported_media_formats)에서 사용될 수 있는 코덱과 컨테이너 모두를 설명하고 있습니다.

이런 파일들의 MIME 타입은 대부분 컨테이너 포맷을 나타내며 웹 컨텍스트에서 대부분의 타입들은 다음과 같습니다:

| MIME 타입                                               | 오디오 혹은 비디오 타입                                                                                                                                                                      |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | WAVE 컨테이너 포맷 내 오디오 파일. PCM 오디오 코덱 (WAVE codec "1")이 자주 지원되며, 다른 코덱들이 좀 더 제한된 상태로 지원됩니다(PCM 오디오 코덱이 없는 경우).                              |
| `audio/webm`                                            | WebM 컨테이너 포맷 내 오디오 파일. 가장 일반적인 오디오 코덱인 Vorbis 그리고 Opus이 사용됩니다.                                                                                              |
| `video/webm`                                            | WebM 컨테이너 포맷 내, 오디오를 지원 가능한 비디오 파일. VP8 그리고 VP9이 이 안에서 가장 일반적으로 사용되는 비디오 코덱입니다; 가장 일반적인 오디오 코덱인 Vorbis 그리고 Opus가 사용됩니다. |
| `audio/ogg`                                             | OGG 컨테이너 포맷 내 오디오 파일. 이 컨텐이너 내에서는 Vorbis가 가장 일반적으로 사용되는 오디오 코덱입니다.                                                                                  |
| `video/ogg`                                             | OGG 컨테이너 포맷 내, 오디오를 지원 가능한 비디오 파일. 이 안에서 가장 흔한 비디오 코덱은 Theora 입니다; 흔한 오디오 코덱은 Vorbis입니다.                                                    |
| `application/ogg`                                       | OGG 컨테이너 포맷을 사용하는 오디오 혹은 비디오 파일. 이 안에서 가장 흔한 비디오 코덱은 Theora 입니다; 흔한 오디오 코덱은 Vorbis입니다.                                                      |

### `multipart/form-data`

`multipart/form-data`은 브라우저에서 서버로 [HTML Form](/ko/docs/Web/Guide/HTML/Forms)의 내용을 전송 시 사용할 수 있습니다. 멀티 파트 문서 형식으로써, 경계(이중 대시 `'--'` 로 시작되는 문자열)로 구분되어지는 다른 파트들로 구성됩니다. 각 파트는 그 자체로 개체이며 자신만의 HTTP 헤더를 가지는데, 파일 업로드 필드를 위한 헤더로는 {{HTTPHeader("Content-Disposition")}}, 그리고 가장 일반적인 것 중 하나인 {{HTTPHeader("Content-Type")}}이 있습니다({{HTTPHeader("Content-Length")}}은 경계선이 구분자로 사용되므로 무시됩니다).

```
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

다음은 HTML form입니다:

```html
<form action="http://localhost:8000/" method="post" enctype="multipart/form-data">
  <input type="text" name="myTextField">
  <input type="checkbox" name="myCheckBox">Check</input>
  <input type="file" name="myFile">
  <button>Send the file</button>
</form>
```

HTML form은 다음 메시지를 전송하게 됩니다:

```
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

`multipart/byteranges`는 브라우저로 회신하는 부분적인 응답 전송의 컨텍스트 내에서 사용됩니다. {{HTTPStatus("206")}} `Partial Content` 상태 코드가 전송된 경우, MIME 타입은 문서가 각각의 요청된 범위들 중 하나인 몇 가지 파트들로 구성되어 있음을 알려주기 위해 사용됩니다. 다른 멀티파트 타입처럼, {{HTTPHeader("Content-Type")}}은 경계선 문자열을 정의하기 위해 `boundary` 디렉티브를 사용합니다. 각각의 다른 파트들은 문서의 실제 타입을 가진 {{HTTPHeader("Content-Type")}} 헤더와 그들이 나타내는 범위를 가진 {{HTTPHeader("Content-Range")}}를 지니고 있습니다.

```
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="vieport" content
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

대부분의 웹 서버들은 기본 타입 중 하나인 `application/octet-stream` MIME 타입을 사용해 알려지지 않은 타입의 리소스를 전송합니다; 보안상의 이유로, 대부분의 브라우저들은 그런 리소스에 대한 사용자화된 기본 동작 설정을 허용하지 않으며 그것을 사용하려면 디스크에 저장할 것을 사용자에게 강제합니다. 정확치 않게 구성된 서버들의 몇 가지 일반적 사례들은 다음의 파일 타입에서 일어납니다:

- 인코딩된 RAR 파일. 이상적인 것은 인코딩된 파일의 실제 타입을 설정 가능한 것입니다; 이런 일은 대게 불가능합니다(서버가 모르는 타입일 수도 있고 이런 파일들은 다른 타입의 몇몇 리소스들을 포함하고 있을 수도 있습니다). 이런 경우에, `application/x-rar-compressed` MIME 타입을 전송하도록 서버를 구성하여 사용자가 그에 대한 유용한 기본적인 동작을 정의하지 않게 될 겁니다.
- 오디오와 비디오 파일. 적합한 MIME 타입을 가진 리소스만이 {{ HTMLElement("video") }} 혹은 {{ HTMLElement("audio") }} 엘리먼트 내에서 인식되어 재생될 수 있을 겁니다. [오디오와 비디오를 위한 정확한 타입 사용](/En/Media_formats_supported_by_the_audio_and_video_elements)을 확인하시기 바랍니다.
- 개인적인 파일 타입. 개인적인 파일 타입을 서브한 경우 특별한 주의를 기울여야 합니다. 특별한 처리가 불가능하므로 가능하면 `application/octet-stream` 사용을 피하시기 바랍니다: 대부분의 브라우저들은 이런 포괄적인 MIME 타입에 대한 ("워드에서 열기"와 같은) 기본적인 동작의 정의를 허용하지 않습니다.

## MIME 스니핑

MIME 타입이 없을 때, 혹은 클라이언트가 타입이 잘못 설정됐다고 판단한 어떤 다른 경우에, 브라우저들은 MIME 스니핑을 시도할 수도 있는데, 이는 리소스를 훑어보고 정확한 MIME 타입을 추측 해내는 것입니다. 각각의 브라우저들은 이런 과정을 다른 방식으로, 다른 환경 속에서 처리해냅니다. 이런 과정에 관한 몇 가지 보안 관련 사항들이 있는데, 몇몇 MIME 타입들은 실행 가능한 컨텐츠를 나타내고 다른 타입들은 그렇지 않기 때문입니다. 서버들은 {{HTTPHeader("Content-Type")}} 중에{{HTTPHeader("X-Content-Type-Options")}}를 전송하여 이런 MIME 스니핑을 차단할 수 있습니다.

## 함께 참고할 내용

- [서버의 MIME 타입을 적절하게 구성하기](/ko/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types)
- [HTML audio 그리고 video 엘리먼트에서 지원하는 미디어 포맷들](/ko/docs/Web/HTML/Supported_media_formats)
