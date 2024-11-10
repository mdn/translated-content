---
title: 미디어 컨테이너 포맷 (파일 타입)
slug: Web/Media/Formats/Containers
---

{{QuickLinksWithSubpages("/ko/docs/Web/Media")}}

오디오와 비디오 파일 포맷은 두 파트에서 정의할 수 있습니다.(오디오 비디오가 한 파일에 있으면 물론 3 파트지요): 오디오/비디오 코덱와 미디어 컨테이너 포맷(도는 파일 타입)입니다. 이 가이드 문서는 웹에서 널리 쓰이는 컨테이너 포맷에 대해 알아보고 기본적인 스펙와 장단점 그리고 적절한 사용법을 설명하고 있습니다.

[WebRTC](/ko/docs/Web/API/WebRTC_API) 는 컨테이너를 사용하지 않습니다. 대신에 각 트랙을 나타내는{{domxref("MediaStreamTrack")}} 객체를 통해 인코딩 된 오디오/비디오 트랙을 한 곳에서 다른 곳으로 직접 스트리밍합니다. WebRTC에서 일반적으로 사용하는 코덱이나 브라우저 호환성을 알아보려면 [Codecs used by WebRTC](/ko/docs/Web/Media/Formats/WebRTC_codecs) 문서를 참고하세요.

## 일반적인 컨테이너 포맷

미디어 컨테이너 포맷에는 여러 종류가 있지만 여러분들은 보통 아래 나열된 목록의 포맷을 주로 만나게 될 겁니다. 일부는 오디오만 지원하는 것도 있고 오디오와 비디오 모두를 지원하는 포맷도 있죠. MIME 타입과 확장자도 나열되어 있습니다. 웹상에서 가장 많이 쓰이는 컨테이너 포맷은 아마도 MPEG-4 (MP4), Quicktime Movie (MOV), Wavefile Audio File Format (WAV)일겁니다. 또한 MP3, Ogg, WebM, AVI 등의 포맷도 볼 수 있지요. 하지만 모든 브라우저가 이 다양한 포맷들을 지원하는 것은 아닙니다. 사용하기 편하고 다른 조합과의 구분을 위해 특정한 컨테이너와 코덱의 조합은 독자적인 MIME type과 확장자를 가지기도 합니다. 예를들어 Opus 오디오 트랙만을 가진 Ogg파일은 가끔 Opus 파일이라 불리며 `.opus` 확장자를 가지는 경우도 있습니다. 하지만 실제로는 단순한 Ogg 파일일 뿐이죠.

반대 케이스로 특정 코덱이 특정 컨테이너에 담긴 형태가 매우 보편적일 경우 독자적인 형식으로 취급하는 경우도 있습니다. MP3 오디오 파일이 대표적인 경우로, MPEG-1 컨테이너에 MPEG-1 Audio Layer III 코덱으로 인코딩 된 오디오 트랙 하나만이 담긴 케이스입니다. 컨테이너는 일반적인 MPEG지만 이 형식은 `audio/mp3` MIME 타입과 `.mp3` 확장자를 사용합니다.

## 컨테이너 포맷(파일 타입) 인덱스

특정 컨테이너 포맷에 대해 더 알아보려면 아래 목록에서 찾아 클릭하세요. 컨테이너 사용법과 지원하는 코덱, 지원하는 브라우저 등을 알 수 있습니다.

- [일반적인 컨테이너 포맷](#일반적인-컨테이너-포맷)
- [컨테이너 포맷(파일 타입) 인덱스](#컨테이너-포맷파일-타입-인덱스)
  - [3GP](#3gp)
  - [ADTS](#adts)
  - [FLAC](#flac)
  - [MPEG/MPEG-2](#mpegmpeg-2)
  - [MPEG-4 (MP4)](#mpeg-4-mp4)
  - [Ogg](#ogg)
  - [QuickTime](#quicktime)
  - [WAVE (WAV)](#wave-wav)
  - [WebM](#webm)
- [알맞은 컨테이너 선택하기](#알맞은-컨테이너-선택하기)
  - [가이드라인](#가이드라인)
  - [컨테이너 선택 가이드](#컨테이너-선택-가이드)
    - [오디오 전용 파일](#오디오-전용-파일)
    - [비디오 파일](#비디오-파일)
- [다양한 컨테이너간 호환성 극대화](#다양한-컨테이너간-호환성-극대화)
- [명세서](#명세서)
- [브라우저 호환성](#브라우저-호환성)
- [더 보기](#더-보기)

### 3GP

**3GP** 또는 **3GPP** 컨테이너는 셀룰러 네트워크를 통해 전송하고 모바일 장치에서 사용하기 위해 고안되었습니다. 원래 3G 모바일 폰을 위해 디자인하였지만 현대의 모바일 폰과 네트워크에서도 사용하고 있습니다. 하지만 네트워크 처리량이 늘어나면서 3GP 포맷의 필요성은 점차 줄어들고 있죠. 그러나 여전히 느린 네트워크나 저사양 폰에서는 유용한 컨테이너이기도 합니다.

이 컨테이너는 ISO Base Media File Format과 MPEG-4 기반이지만 저대역폭 케이스에 최적화되어 있습니다.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

위는 3GP 컨테이너의 기본 MIME 타입입니다; 사용하는 코덱에 따라 다른 타입을 사용할 수도 있습니다; 또한 MIME 타입 문자열에 [`codecs` 파라미터를 추가하여](/ko/docs/Web/Media/Formats/codecs_parameter#ISO-BMFF) 어떠한 오디오/비디오 코덱을 사용했는지 표시할 수 있으며 profile, level, 코덱 설정 값도 추가하여 전달할 수 있습니다.

<table class="standard-table">
  <caption>
    3GP가 지원하는 비디오 코덱.
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup
          ><a href="#3gp-vid-footnote-1">1</a>,<a href="#3gp-vid-footnote-1"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 (MP4v-es)</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] FIrefox only supports 3GP on [OpenMAX](https://www.khronos.org/openmax/)-based devices, which currently means the Boot to Gecko (B2G) platform.

\[2] Firefox support for H.264 relies upon the operating system's media infrastructure, so it is available as long as the OS supports it.

<table class="standard-table">
  <caption>
    3GP가 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AMR-NB</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB+</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AAC-LC</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup
          ><a href="#3gp-aud-footnote-1">1</a>,<a href="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v1</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup
          ><a href="#3gp-aud-footnote-1">1</a>,<a href="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v2</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup
          ><a href="#3gp-aud-footnote-1">1</a>,<a href="#av1-vid-footnote-2"
            >2</a
          ></sup
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#3gp-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] FIrefox only supports 3GP on [OpenMAX](https://www.khronos.org/openmax/)-based devices, which currently means the Boot to Gecko (B2G) platform.

\[2] Firefox support for AAC relies upon the operating system's media infrastructure, so it is available as long as the OS supports it.

### ADTS

**Audio Data Transport Stream** (**ADTS**) 는 인터넷 라디오 같은 오디오 스트림을 사용하기 위해 MPEG-4 Part 3로 규정된 컨테이너 포맷입니다. 근본적으로 ACC 오디오 데이터에서 스트림만 깐 것과 거의 동일하며 최소한의 헤더만 담긴 ADTS 프레임으로 구성되어 있습니다.

| Audio                             |
| --------------------------------- |
| `audio/aac`[\[1\]](#adts-foot-1)  |
| `audio/mpeg`[\[1\]](#adts-foot-1) |

\[1] The MIME type used for ADTS depends on what kind of audio frames are contained within. If ADTS frames are used, the `audio/aac` MIME type should be used. If the audio frames are in MPEG-1/MPEG-2 Audio Layer I, II, or III format, the MIME type should be `audio/mpeg`.

<table class="standard-table">
  <caption>
    ADTS가 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#adts-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Firefox support for AAC relies upon the operating system's media infrastructure, so it is available as long as the OS supports it.

### FLAC

**Free Lossless Audio Codec** (**FLAC**)은 무손실 오디오 코덱입니다; 이 코덱을 담을 수 있는 컨테이너 역시 FLAC이라 부릅니다. 이 포맷은 어느 특허에도 묶여있지 않아 자유롭게 사용할 수 있습니다. FLAC 파일은 FLAC 오디오 데이터만 담을 수 있습니다.

| Audio        |
| ------------ |
| `audio/flac` |

<table class="standard-table">
  <caption>
    FLAC이 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG/MPEG-2

[**MPEG-1**](https://ko.wikipedia.org/wiki/MPEG-1)과 [**MPEG-2**](https://ko.wikipedia.org/wiki/MPEG-2)은 근본적으로 동일합니다. the Moving Picture Experts Group (MPEG)에서 만들었으며 DVD 등의 물리적 매체에서 널리 쓰이고 있습니다.

인터넷에서 아마 가장 많이 사용되는 MPEG 파일 포맷은 [Layer_III/MP3](https://ko.wikipedia.org/wiki/MPEG-1) 일 겁니다; MP3 파일은 전 세계의 디지털 오디오 장치에서 널리 재생되고 있습니다. 반대로 MPEG-1, MPEG-2는 웹에서 별로 사용하고 있지 않죠.

MPEG-1과 MPEG-2 간의 차이점은 컨테이너 포맷이 아니라 미디어 데이터 포맷에 있습니다. MPEG-1은 1992년 소개되었으며; MPEG-2는 1996년에 소개되었습니다.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<table class="standard-table">
  <caption>
    MPEG-1과 MPEG-2가 지원하는 비디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Part 2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2 Part 2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    MPEG-1과 MPEG-2가 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Audio Layer I</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer II</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG-4 (MP4)

**[MPEG-4](https://ko.wikipedia.org/wiki/MPEG-4)** (**MP4**) 는 최신 MPEG 파일 포맷입니다. 파트 1과 14 스펙에서 정의된 두 가지 버전의 포맷이 있습니다. MP4는 오늘날 유명한 컨테이너 포맷으로 많이 쓰이는 코덱을 지원하며 널리 사용되고 있습니다.

최초의 MPEG-4 Part 1 포맷은 1999년 발표되었습니다; Part 14에서 정의된 버전 2 포맷은 2003년 추가되었습니다. MP4 파일 포맷은 [Apple](https://www.apple.com/)이 개발한 [QuickTime file format](https://en.wikipedia.org/wiki/QuickTime_File_Format)에서 파생된 [ISO base media file format](https://en.wikipedia.org/wiki/ISO_base_media_file_format)에서 다시 파생되었습니다.

MPEG-4 미디어 타입을 표기할 때 (`audio/mp4` or `video/mp4`), MIME 타입에 [`codecs` 파라미터를 추가하여](/ko/docs/Web/Media/Formats/codecs_parameter#ISO-BMFF) 사용하는 오디오/비디오 코덱을 명시할 수 있으며 추가적으로 profile, level, 코덱 설정 등을 명기할 수 있습니다.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

위는 MPEG-4 미디어 컨테이너의 기본 타입입니다; 어떤 코덱을 쓰느냐에 따라 MIME 타입도 달라질 수 있습니다. 또한 MIME 타입에 [`codecs` 파라미터를 추가하여](/ko/docs/Web/Media/Formats/codecs_parameter#ISO-BMFF) 사용하는 오디오/비디오 코덱을 명시할 수 있으며 추가적으로 profile, level, 코덱 설정 등을 명기할 수 있습니다.

<table class="standard-table">
  <caption>
    MPEG-4가 지원하는 비디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#mp4-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AV1</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#mp4-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Firefox support for H.264 relies upon the operating system's media infrastructure, so it is available as long as the OS supports it.

\[2] Firefox support for AV1 is currently disabled by default; it can be enabled by setting the preference `media.av1.enabled` to `true`.

<table class="standard-table">
  <caption>
    MPEG-4가 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#mp4-aud-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Firefox support for H.264 relies upon the operating system's media infrastructure, so it is available as long as the OS supports it.

### Ogg

**[Ogg](https://en.wikipedia.org/wiki/Ogg)는** [Xiph.org Foundation](https://www.xiph.org/)이 운영하는 자유 오픈 컨테이너 포맷입니다. Theora, Vorbis, and Opus등의 Ogg 프레임워크는 특허에 얽매이지 않게 정의되었습니다. 재단 웹사이트에서 [Xiph.org documents about the Ogg format](https://xiph.org/ogg/)를 확인할 수 있습니다.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

MIME 타입에 [`codecs` 파라미터를 추가하여](/ko/docs/Web/Media/Formats/codecs_parameter#Ogg) 사용하는 오디오/비디오 코덱을 명시할 수 있으며 트랙의 미디어 포맷에 대한 추가 정보도 기입할 수 있습니다.

<table class="standard-table">
  <caption>
    Ogg가 지원하는 비디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Theora</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Ogg가 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### QuickTime

**QuickTime** 파일 포맷(**QTFF**, **QT**, **MOV**) 는 동일한 이름의 미디어 프레임워크에서 사용하기 위해 애플이 개발했습니다. 확장자 `.mov`는 최초 영화에서 쓰이기 위해 개발되었다는 의미에서 지어졌으며 보통 "QuickTime movie" 포맷이라 불립니다. QTFF가 MPEG-4 파일 포맷에 기반하였지만 두 포맷에는 분명한 차이점이 있으며 상호 호환되지 않습니다.

QuickTime 파일은 오디오, 비디오 텍스트 트랙 등 시간축을 가지는 다수의 데이터 타입을 지원합니다. QuickTime 파일은 원래 macOS에서 사용하기 위해 개발되었지만 수 년이 지나면서 윈도우즈 환경에서는 QuickTime for Windows를 통해 사용할 수 있게 되었습니다. 그러나 2016년 초부터 애플은 더 이상 QuickTime for Windows를 유지 보수하지 않으며 알려진 보안 취약점으로 인해 _사용해선 안됩니다_. 하지만 Windows Media Player 가 현재 QuickTime version 2.0 및 이전 버전을 지원하며; 이후 버전의 QuickTime은 서드파티 플러그인을 통해 지원합니다.

Mac OS에서 QuickTime 프레임워크는 QuickTime 포맷의 영상 파일 및 코덱 뿐만아니라 널리 쓰이는 오디오/비디오 코덱 상당 수를 지원합니다. 정지 화상 이미지 포맷도 포함해서요. (QuickTime 플러그인이 설치되었거나 QuickTime과 바로 연동된 브라우저를 포함 한)맥 애플리케이션은 QuickTime을 통해서 ACC, AIFF, MP#, PCM, Qualcomm PureVoice 등의 오디오 포맷과 AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 through H.265, MJPEG, MPEG-1, MPEG-4 Part 2, Sorenson 등 수 많은 비디오 포맷을 읽고 쓸 수 있습니다.

추가적인 코덱을 지원하기 위해 QuickTime에 다수의 서드파티 컴포넌트를 설치할 수도 있습니다.

QuickTime은 처음부터 지금까지 근본적으로 애플 디바이스에서 사용하기 위해 만들어졌기 때문에 인터넷 환경에서 널리 쓰이고 있지는 않습니다. 애플 스스로도 현재는 MP4 비디오를 사용하고 있구요. 게다가 QuickTime 프레임워크마저 deprecated되면서 macOS 10.15 Catalina부터는 사용이 불가능해졌습니다.

| Video             |
| ----------------- |
| `video/quicktime` |

`video/quicktime` 은 QuickTime 미디어 컨테이너의 기본 MIME 타입입니다. QuickTime (Mac OS의 미디어 프레임워크)이 다양한 컨테이너와 코덱을 지원하므로 다른 많은 MIME 타입 역시 지원합니다.

MIME 타입에 [`codecs` 파라미터를 추가하여](/ko/docs/Web/Media/Formats/codecs_parameter#ISO-BMFF) 사용하는 오디오/비디오 코덱을 명시할 수 있으며 추가적으로 profile, level, 코덱 설정 등을 명기할 수 있습니다.

<table class="standard-table">
  <caption>
    QuickTime이 지원하는 비디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Cinepak</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Component Video</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">DV</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.261</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Motion JPEG</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 3</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    QuickTime이 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ALaw 2:1</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Apple Lossless (ALAC)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Microsoft ADPCM</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law 2:1 (u-Law)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WAVE (WAV)

Waveform Audio File Format (WAVE)는 보통 줄여서 WAV라 불리며 `.wav` 확장자를 갖습니다. 오디오 비트스트림 데이터를 담기 위해 Microsoft와 IBM이 개발했습니다. 대부분의 WAV 파일은 linear PCM 포맷의 오디오 데이터를 담고 있습니다.

이 파일 포맷은 Resource Interchange File Format (RIFF)에서 파생되었으며 애플의 AIFF 같은 다른 파생 형식와 유사합니다..

WAVE 포맷은 1991년 처음 발표되었습니다.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

<table class="standard-table">
  <caption>
    WAVE가 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ADPCM (Adaptive Differential Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">GSM 06.10</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LPCM (Linear Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law (u-Law)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

**[WebM](https://en.wikipedia.org/wiki/WebM)** (Web Media)는 [Matroska](https://en.wikipedia.org/wiki/Matroska)에 기반하여 현대 웹 환경에서 사용하기 위해 디자인되었습니다. 특정 제품들은 WebM 컨테이너에 다른 코덱을 사용하기도 하지만 기본적으로는 무료 오픈 코덱을 사용하여 완전한 자유-오픈 기술을 지향하고 있습니다.

WebM은 2010년 처음 소개되었습니다..

| Audio        | Video        |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<table class="standard-table">
  <caption>
    WebM이 지원하는 비디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AV1</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#av1-vid-footnote-1">1</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>
        Yes<sup><a href="#av1-vid-footnote-2">2</a></sup>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP:9</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Firefox support for AV1 is currently disabled by default; it can be enabled by setting the preference `media.av1.enabled` to `true`.

\[2] Firefox support for H.264 relies upon the operating system's media infrastructure, so it is available as long as the OS supports it.

<table class="standard-table">
  <caption>
    WebM이 지원하는 오디오 코덱
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser support
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 알맞은 컨테이너 선택하기

여러분의 미디어 데이터에 알맞은 컨테이너를 선택하고 사용하기 위해서 몇 가지 고려해야 할 점들이 있습니다. 상대적으로 어떤 점이 더 중요한지는 요구사항이나 라이선스, 호환성, 타겟 고객 등에 따라 달라질 수 있습니다.

### 가이드라인

최선책 역시 미디어 데이터로 무엇을 하느냐에 달렸습니다. 미디어를 녹화/편집하는 것은 재생과 전혀 다른 이야기입니다. 최소한 노이즈 축적이라도 방지하려고 무손실 압축을 사용하면 매번 재 압축할 때 마다 압축 데이터가 누적되므로 미디어 데이터를 처리할때는 압축하지 않은 데이터를 사용하는게 퍼포먼스가 좋습니다.

- 저사양 단말 또는 저속 네트워크를 사용하는 고객을 대상으로 하고 있다면 3GP 컨테이너와 적절한 압축 코덱을 고려해 볼 수 있습니다.
- 인코딩시 필수 사항이 있다면 컨테이너 선택 시 적절한 코덱을 지원하는 지 확인해야 합니다.
- 미디어가 상용이 아니며 오픈 포맷일 경우 FLAC(오디오), WebM(비디오) 등의 오픈 컨테이너 포맷을 고려해 보세요.
- 어떠한 이유로 미디어를 한가지 포맷으로 제공해야 한다면 많은 디바이스와 브라우저에 널리 쓰여지는 MP3(오디오), MP4(비디오, 오디오)등의 포맷을 선택하세요.
- 미디어가 오디오만 있다면 오디오 전용 컨테이너를 사용하는게 합당합니다. 현재는 특허가 모두 만료되어 널리 쓰여지는 MP3가 좋은 선택입니다. WAVE도 좋지만 비압축이므로 대용량 오디오 샘플의 경우에는 사용을 주의하세요. 모든 타겟 브라우저가 지원한다면 무손실 압축을 지원하는 FLAC이 최선입니다.

슬픈 일이지만 주요 무손실 압축 포맷 (FLAC, ALAC) 모두 폭넓게 지원되고 있지 않습니다. 둘 중에 FLAC이 그나마 낫지만 macOS에서는 추가적인 소프트웨어 설치 없이는 지원을 안합니다. iOS에서는 아예 불가능하구요. 무손실 오디오를 플랫폼에 무관하게 제공하려면 FLAC과 ALAC 둘 다 지원해야 합니다.

### 컨테이너 선택 가이드

아래의 테이블은 다양한 시나리오에서 사용할 컨테이너에 대한 권고안입니다. 이는 추천일 뿐이며 컨테이너 포맷을 선택할 때에는 여러분의 제품이나 기관의 상황을 고려하여 선택하세요.

#### 오디오 전용 파일

| 만약에...                         | 추천 컨테이너 포맷           |
| --------------------------------- | ---------------------------- |
| 일반 재생 목적으로 압축 파일 사용 | MP3 (MPEG-1 Audio Layer III) |
| 무손실 압축 파일                  | FLAC with ALAC fallback      |
| 무압축 파일                       | WAV                          |

이제는 MP3 특허가 모두 만료되었으므로 오디오 파일 선택은 별로 어려운 문제가 아닙니다. 폭넓게 쓰이는 MP3를 사용하면서 특허료를 내야 하느냐에 대한 고민을 할 필요가 없죠.

#### 비디오 파일

| 만약에...                             | 추천 컨테이너 포맷                |
| ------------------------------------- | --------------------------------- |
| 가능한 오픈 포맷을 사용한 일반 비디오 | WebM (MP4 호환 추가)              |
| 일반 비디오                           | MP4 (WebM, Ogg 호환 추가)         |
| 저속 네트워크상의 고효율 압축         | 3GP (MP4 호환 추가)               |
| 구형 단말/브라우저 지원               | QuickTime (AVI, MPEG-2 호환 추가) |

몇 가지 가정 하의 권고입니다. 최종 결정 전에 여러가지를 따져보아야 하며 인코딩 해야 할 미디어가 많은 경우 특히나 심사숙고해야 합니다.

## 다양한 컨테이너간 호환성 극대화

호환성을 높이려면 한가지 버전 이상의 미디어 파일 제공을 고려해 볼 수 있습니다. {{HTMLElement("audio")}}, {{HTMLElement("video")}} 엘리먼트 아래에 {{HTMLElement("source")}} 엘리먼트를 추가하여 구현할 수 있죠. 예를 들어 Ogg, WebM 비디오를 우선하되 호환성을 위해 MP4 포맷을 추가할 수 있습니다. 레트로하게 QuickTime이나 AVI 호환을 추가하는 것도 좋은 방법입니다.

구현하려면 우선 [`src`](/ko/docs/Web/HTML/Element/video#src) 어트리뷰트 없이 `<video>` (또는 `<audio>`) 엘리먼트를 생성합니다. 그 후 `<video>` 엘리먼트 아래에 {{HTMLElement("source")}} 엘리먼트를 제공하려는 미디어 포맷별로 추가합니다. 이 방식은 대역폭 상황에 따라 소스를 선택하는 방식으로도 사용할 수 있지만 여기서는 포맷 옵션을 제공하기로 하죠.

아래 예제에서는 두 포맷 타입의 비디오를 제공합니다: WebM and MP4.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

첫번째 비디오는 WebM 포맷입니다([`type`](/ko/docs/Web/HTML/Element/video#type) 어트리뷰트가 `video/webm`). {{Glossary("user agent")}}는 재생이 불가능 한 경우 `type` 이 `video/mp4` 인 다음 옵션으로넘어갑니다. 둘 다 재생이 불가능 할 경우 "This browser does not support the HTML5 video element." 문구가 표시됩니다.

## 명세서

| 명세서                                                                                                                                                       | 설명                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | 컨테이너 포멧을 정의                                                                                            |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 오디오)                                                                            | ADTS를 포함한 MP4 오디오를 정의                                                                                 |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | FLAC 포멧 명세서                                                                                                |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 시스템)                                                                            | MPEG-1 컨테이너 포멧을 정의                                                                                     |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 시스템)                                                                            | MPEG-2 컨테이너 포멧을 정의                                                                                     |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 파일 포멧)                                                                  | MPEG-4 (MP4) version 2 컨테이너 포멧을 정의                                                                     |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 시스템)                                                                            | original MPEG-4 (MP4) 컨테이너 포멧을 정의                                                                      |
| {{RFC(3533)}}                                                                                                                                                | Ogg 컨테이너 포멧                                                                                               |
| {{RFC(5334)}}                                                                                                                                                | Ogg 미디어 형식과 파일 확장자                                                                                   |
| [QuickTime File Format Specification](https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFPreface/qtffPreface.html)                 | QuickTime movie (MOV) 포멧                                                                                      |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | 공식 WAVE 사양에 가장 가까운 것                                                                                 |
| [Resource Interchange File Format](https://docs.microsoft.com/windows/win32/xaudio2/resource-interchange-file-format--riff-) (WAV가 씀)                      | RIFF 포멧을 정의. WAVE 파일은 RIFF의 형식                                                                       |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | WebM을 위한 Matroska 적용 안내서                                                                                |
| [Matroska Specifications](https://matroska.org/index.html)                                                                                                   | WebM을 기반으로 하는 Matroska 컨테이너 포멧에 대한 명세서                                                       |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | [미디어 소스 확장자](/ko/docs/Web/API/Media_Source_Extensions_API)와 함께 사용하기 위한 WebM 바이트 스트림 포멧 |

## 브라우저 호환성

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">
        컨테이너 형식 이름
      </th>
      <th
        colspan="3"
        scope="col"
        style="text-align: center; border-right: 2px solid #d4dde4"
      >
        오디오
      </th>
      <th colspan="3" scope="col" style="text-align: center">비디오</th>
    </tr>
    <tr>
      <th scope="col" style="vertical-align: bottom">MIME 형식</th>
      <th scope="col" style="vertical-align: bottom">확장자</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        브라우저 지원
      </th>
      <th scope="col" style="vertical-align: bottom">MIME 형식</th>
      <th scope="col" style="vertical-align: bottom">확장자</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        브라우저 지원
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="vertical-align: bottom">3GP</th>
      <td style="vertical-align: top"><code>audio/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        ADTS (Audio Data Transport Stream)
      </th>
      <td style="vertical-align: top"><code>audio/aac</code></td>
      <td style="vertical-align: top"><code>.aac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">FLAC</th>
      <td style="vertical-align: top"><code>audio/flac</code></td>
      <td style="vertical-align: top"><code>.flac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: top">
        MPEG-1 / MPEG-2 (MPG or MPEG)
      </th>
      <td style="vertical-align: top"><code>audio/mpeg</code></td>
      <td style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td rowspan="2" style="vertical-align: top"><code>video/mpeg</code></td>
      <td rowspan="2" style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td rowspan="2" style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <td style="vertical-align: top"><code>audio/mp3</code></td>
      <td style="vertical-align: top"><code>.mp3</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">MPEG-4 (MP4)</th>
      <td style="vertical-align: top"><code>audio/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4a</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4v</code><br /><code>.m4p</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">Ogg</th>
      <td style="vertical-align: top"><code>audio/ogg</code></td>
      <td style="vertical-align: top">
        <code>.oga</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/ogg</code></td>
      <td style="vertical-align: top">
        <code>.ogv</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">QuickTime Movie (MOV)</th>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">—</td>
      <td style="vertical-align: top"><code>video/quicktime</code></td>
      <td style="vertical-align: top"><code>.mov</code></td>
      <td style="vertical-align: top">Safari</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WAV (Waveform Audiofile)</th>
      <td style="vertical-align: top"><code>audio/wav</code></td>
      <td style="vertical-align: top"><code>.wav</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WebM</th>
      <td style="vertical-align: top"><code>audio/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
  </tbody>
</table>

## 더 보기

- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
- [MediaStream Recording API](/ko/docs/Web/API/MediaStream_Recording_API)
- {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements
