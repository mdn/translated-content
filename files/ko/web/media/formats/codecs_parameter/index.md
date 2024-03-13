---
title: 일반 미디어 타입에서 "codecs" 파라미터 사용하기
slug: Web/Media/Formats/codecs_parameter
---

{{QuickLinksWithSubpages("/ko/docs/Web/Media")}}

기본적으로, `video/mp4`, `audio/mpeg` 처럼 {{Glossary("MIME")}} 타입을 통해 미디어 파일 포맷을 명시할 수 있습니다. 하지만 많은 미디어 타입들이-특히 비디오 트랙을 지원하는 경우-가지고 있는 데이터 포맷에 대해 더 상세하고 정확하게 명시할 수 있습니다. 예를들어 [MPEG-4](/ko/docs/Web/Media/Formats/Containers#MP4) 비디오라고 해서 MIME 타입을 `video/mp4`만 명시한다면 정확히 어떤 미디어를 가지고 있는 지 아무 정보도 알 수 없습니다.

때문에 MIME 타입에 추가로 미디어 콘텐츠를 기술하기 위해 `codecs` 파라미터가 추가되었습니다. 이를 통해 컨테이너 특화된 정보를 제공할 수 있게 되었습니다 이 정보에는 비디오 코덱의 프로파일, 오디오 트랙 타입 등을 추가할 수 있습니다.

이 가이드 문서는 단순히 컨테이너 타입 명시를 넘어 `codecs` 파라미터의 문법과 MIME 타입에 비디오/오디오 콘텐츠에 대한 상세 정보를 기술하는 방법에 대해 설명합니다.

## 일반 문법

기본적인 MIME 미디어 타입 표현은 미디어 타입(`audio`, `video`, 등)으로 시작하며, 슬래쉬 문자 (`/`) 후 미디어를 포함하고 있는 컨테이너 포맷이름으로 이어집니다:

- `audio/mpeg`
  - : MP3 같은 [MPEG](/ko/docs/Web/Media/Formats/Containers#MPEG) 파일 타입의 오디오 파일입니다.
- `video/ogg`
  - [: Ogg](/ko/docs/Web/Media/Formats/Containers#Ogg) 파일 타입의 비디오 파일입니다.
- `video/mp4`
  - [: MPEG-4](/ko/docs/Web/Media/Formats/Containers#MP4) 파일 타입을 사용하는 비디오입니다.
- `video/quicktime`
  - : 애플 [QuickTime](/ko/docs/Web/Media/Formats/Containers#QuickTime) 포맷을 사용하는 비디오입니다. 다른 곳에서 서술되어 있듯이, 한때는 웹에서 널리 쓰여지던 형식이었지만 현재는 플러그인이 필요하여 더 이상 사용하지 않는 타입입니다.

위 MIME 타입은 아직 모호한 표현입니다. 각 파일 타입들은 많은 수의 코덱을 지원하며 코덱은 각기 프로파일, 레벨과 같은 설정 인자들을 가지고 있습니다. 그래서 `codecs` 파라미터를 추가하여 명시할 수 있습니다.

세미콜론 (`;`)을 붙이고 `codecs=` 으로 시작하는 문자열을 덧붙여 콘텐츠의 포맷을 서술할 수 있습니다. 일부 미디어 타입은 사용하는 코덱 이름만 명시 가능할 수 있고 다른 미디어 타입은 코덱에 관한 다양한 인자를 기술할 수 있는 경우도 있습니다. 콤마로 구분하여 여러 코덱을 기술할 수도 있습니다.

- `audio/ogg; codecs=vorbis`
  - [: Vorbis](/ko/docs/Web/Media/Formats/Audio_codecs#Vorbis) 오디오 트랙을 포함하는 [Ogg](/ko/docs/Web/Media/Formats/Containers#Ogg) 컨테이너 파일입니다.
- `video/webm; codecs="vp8, vorbis"`
  - [: VP8](/ko/docs/Web/Media/Formats/Video_codecs#VP8) 비디오와 [Vorbis](/ko/docs/Web/Media/Formats/Audio_codecs#Vorbis) 오디오를 포함하는 [WebM](/ko/docs/Web/Media/Formats/Containers#WebM) 컨테이너 파일입니다.
- `video/mp4; codecs="avc1.4d002a"`
  - [: AVC](</ko/docs/Web/Media/Formats/Video_codecs#AVC_(H.264)>) (H.264) 코덱에 Main Profile, Level 4.2을 가지는 [MPEG-4](/ko/docs/Web/Media/Formats/Containers#MP4) 컨테이너 파일입니다.

코덱의 속성 중 하나라도 퍼센트-인코딩이 필요한 특수문자{{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}}를 사용하는 경우 MIME 타입을 기술하는 문자열의 `codecs` 파라미터를 `codecs*` (애스터리크(`*`) 추가됨에 유의)로 변경해야 합니다. JavaScript {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} function으로 파라미터 목록을 인코딩할 수 있습니다; 반대로 {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}를 통해 기인코딩된 파라미터 리스트를 디코딩할 수 있습니다.

> **참고:** `codecs` 파라미터를 사용한다면, 파일 콘텐츠가 사용한 모든 코덱을 목록에 명시해야합니다. 목록에 파일이 사용하고 있지 않은 코덱을 명시하는 것도 가능합니다.

## 컨테이너별 코덱 옵션

아래 컨테이너들은 `codecs` 파라미터에 확장 옵션을 지원합니다:

- [3GP](#iso-bmff)
- [AV1](#av1)
- [ISO BMFF](#iso-bmff)
- [MPEG-4](#iso-bmff)
- [QuickTime](#iso-bmff)
- [WebM](#webm)

링크를 클릭하면 동일한 섹션으로 이동할텐데요; 위 미디어 타입들은 모두 ISO Base Media File Format (ISO BMFF)를 기반하고 있어, 동일한 문법을 공유하기 때문입니다.

### AV1

AV1의 `codecs` 문법은[AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff) 스펙 문서의, 섹션 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam)에 정의되어 있습니다.

```
av01.P.LLT.DD[.M[.CCC[.cp[.tc[.mc[.F]]]]]]
```

아래 표에서 코덱 파라미터 문자열 구성요소에 대해 자세히 설명하고 있습니다. 각 요소들은 고정된 개수의 문자로 되어 있으며;고정 길이보다 짧은 경우 앞에 0을 붙여서 맞춰야 합니다..

<table class="standard-table">
  <caption>
    AV1 코덱 파라미터 문자열 요소
  </caption>
  <thead>
    <tr>
      <th scope="col">요소</th>
      <th scope="col">내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>P</code></td>
      <td>
        <p>한자리 숫자 프로파일 번호:</p>
        <table class="standard-table">
          <caption>
            AV1 프로파일 번호
          </caption>
          <thead>
            <tr>
              <th scope="col">프로파일 번호</th>
              <th scope="col">설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>
                "Main" 프로파일; YUV 4:2:0/모노크롬 크로마 서브샘플링 및 8/10
                비트 색 깊이 지원.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High" 프로파일 4:4:4 크로마 서브샘플링 추가 지원.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional" 프로파일, 4:2:2 크로마 서브샘플링 및 12 비트 색
                깊이 추가 지원
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        두자리 숫자 레벨 번호, X.Y 형태의 레벨 포맷으로 변환 됨,
        <code>X = 2 + (LL >> 2)</code>, <code>Y = LL &#x26; 3</code>. 자세한
        내용은 AV1 스펙 문서의
        <a href="https://aomediacodec.github.io/av1-spec/#levels"
          >Appendix A, section 3</a
        >
        참조.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        한자리 문자 티어 표시. Main 티어라면 (<code>seq_tier</code> equals 0),
        문자는 <code>M</code>. High 티어는 (<code>seq_tier</code> is 1)
        <code>H</code>. High 티어는 4.0 이상 레벨에서만 가능합니다.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        두자리 숫자 색 깊이. 8, 10, 12 중 하나여야 하며; 프로파일과 다른
        속성에서 지원 가능한 값이여야 합니다.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        한자리 숫자 모노크롬 플래그; 0인 경우 비디오는 U, V, Y 성분을 모두
        가지고 있습니다. 아닌 경우 전체 비디오 데이터는 Y(휘도) 성분 뿐으로
        모노크롬 이미지를 가집니다. 자세한 내용은
        [YUV](/ko/docs/Web/Media/Formats/Video_concepts#yuv)를
        참조하여 YUV 컬러 시스템이 어떻게 동작하는지 알아보세요. 기본 값은 0
        (모노크롬 아님)입니다.
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> 는 세자리 숫자로 크로마 서브샘플링을 표기합니다.
          첫번째 숫자는 <code>subsampling_x</code>, 두 번째 숫자는
          <code>subsampling_y</code>. 둘다 1인경우, 세번째 값은
          <code>chroma_sample_position</code>; 아닌 경우 세번째 값은 항상
          0입니다. <code>M</code> 값과 더불어 크로마 서브샘플링 포맷을 구성하는
          요소입니다:
        </p>
        <table class="standard-table">
          <caption>
            크로마 서브샘플링 결정 방식
          </caption>
          <thead>
            <tr>
              <th scope="col">subsampling_x</th>
              <th scope="col">subsampling_y</th>
              <th scope="col">Monochrome flag</th>
              <th scope="col">Chroma subsampling format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>YUV 4:4:4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>YUV 4:2:2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>YUV 4:2:0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>YUV 4:0:0 (Monochrome)</td>
            </tr>
          </tbody>
        </table>
        <p>
          <code>CCC</code>의 세번째 값은 크로마 샘플 위치(chroma sample
          position)로, 0은 위치를 알 수 없으며 디코딩 시 개별적으로 제공해야
          함을 의미합니다; 1은 샘플이 (0, 0) 휘도 샘플과 동일한 수평선상에
          있음을 의미합니다; 2는 샘플이 (0, 0) 휘도 샘플과 동일한 위치에 있음을
          의미합니다.
        </p>
        <p>기본 값은 <code>110</code> (4:2:0 크로마 서브샘플링)입니다.</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        두자리 숫자 <code>color_primaries</code> 값은 미디어의 색 공간을
        표시합니다. 예를 들어 HDR 비디오에서 사용하는 BT.2020/BT.2100 색 공간은
        <code>09</code>입니다. 자세한 정보-그 외의 색 공간 값을 포함하여-는 AV1
        스펙 문서의
        <a
          href="https://aomediacodec.github.io/av1-spec/#color-config-semantics"
          >Color config semantics section</a
        >
        를 참조하세요. 기본값은 <code>01</code> (ITU-R BT.709)입니다.
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        두자리 숫자 <code>transfer_characteristics</code> 값. 이 값은 소스에서
        디스플레이로 감마를 매핑하는 함수(기술적인 용어로 "opto-electrical
        transfer function"라 표현)를 정의합니다. 예를 들어 10-bit BT.2020는
        <code>14</code>입니다. 기본 값은 <code>01</code> (ITU-R BT.709)입니다.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        두자리 숫자 <code>matrix_coefficients</code> 상수는 RGB 컬러 채널을
        휘도/색차 신호로 변환 시 사용할 계수 행렬을 선택합니다. 예를 들어
        BT.709의 표준 계수 값은 <code>01</code>로 표현합니다. 기본 값은
        <code>01</code> (ITU-R BT.709)입니다.
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        한자리 숫자로 색상이 가능한 모든 범위를 표현해야 할지(<code>1</code>),
        지정한 색 설정에 의해 적합하다고 여겨지는 범위로 제한하여 표현(<strong
          >studio swing representation</strong
        >이라 표현)해야 할지를 나타내는 값입니다. 기본 값은 0 (studio swing
        representation 적용)입니다.
      </td>
    </tr>
  </tbody>
</table>

`M` (모노크롬 플래그)이후의 요소는 모두 비필수입니다; 어느 곳에서부터나 생략할 수 있습니다 (하지만 임의의 중간 요소를 생략할 수는 없습니다). 기본 값은 위 표에 서술하였습니다. AV1 코덱 문자열 예시는 아래와 같습니다:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional 프로파일, 레벨 5.3, Main 티어, 10 비트 색 깊이, 4:2:2 크로마 서브샘플링 ITU-R BT.2100 색 공간, 색 전환 YCbCr 색상 행렬. Studio swing representation 적용.
- `av01.0.15M.10`
  - : AV1 Main 프로파일, 레벨 5.3, Main 티어, 10 비트 색 깊이. 나머지 요소는 기본 값 사용: 4:2:0 크로마 서브 샘플링, BT.709 색 공간, 색 전환, 계수 행렬 사용. Studio swing representation.

### ISO Base Media File Format: MP4, QuickTime, and 3GP

모든 미디어 타입은 [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) (ISO BMFF)를 기반으로 하며 `codecs` 문법을 공유합니다. 이들 미디어 타입은 [MPEG-4](/ko/docs/Web/Media/Formats/Containers#MP4) (또 사실상 MPEG-4를 기반으로 하고 있으므로 [QuickTime](/ko/docs/Web/Media/Formats/Containers#QuickTime)도 포함)과 [3GP](/ko/docs/Web/Media/Formats/Containers#3GP)를 포함합니다. MIME 타입의 `codecs` 파라미터를 통해 아래와 같이 비디오/오디오 트랙 둘 다 기술할 수 있습니다.:

| MIME 타입         | 설명                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `audio/3gpp`      | 3GP 오디오 ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP 비디오 ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2 오디오 ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2 비디오 ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4 오디오 ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4 비디오 ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | 오디오/비디오가 아닌 MPEG-4 컨테이너 미디어                                                                         |

`codecs` 파라미티에는 간단하게 컨테이너 명(`3gp`, `mp4`, `quicktime`, etc.)만 기술할 수도 있으며 컨테이너 명에 코덱 이름 및 설정 값을 함께 기술할 수도 있습니다. 각 코덱 등은 온점(`.`)으로 구분된 요소를 다수 가질 수 있습니다.

`codecs` 값의 문법은 코덱마다 다릅니다; 하지만 항상 4 글자 코덱 구분자와 온점(`.`)으로 시작하며 데이터 포맷을 기술하기 위핸 Object Type Indication (OTI) 형식의 문자열이 뒤따릅니다. 대부분의 코덱에서 OTI는 두자리 16진수로 되어 있지만 [AVC (H.264)](</ko/docs/Web/Media/Formats/Video_codecs#AVC_(H.264)>)는 6자리 16진수로 구성되어 있습니다.

따라서 지원하는 코덱 문법은 아래와 유사합니다:

- `cccc[.pp]*` (Generic ISO BMFF)
  - : `cccc` 는 4 글자 코덱 ID이며 `pp`는 0\~2자리 인코딩 된 문자입니다.
- `mp4a.oo[.A]` (MPEG-4 audio)
  - : `oo` 는 미디어 콘텐츠를 더 정확하게 기술하는 Object Type Indication 값이며 `A` 는 한자리 숫자*오디오* OTI입니다. OTI로 가능한 값은 MP4 Registration Authority 웹사이트의 [Object Types page](http://mp4ra.org/#/object_types) 페이지에서 확인할 수 있습니다. 예를들어 MP4 파일의 Opus 오디오는 `mp4a.ad`로 기술합니다. 자세한 내용은 [MPEG-4 audio](#mpeg-4_audio)를 참조하세요.
- `mp4v.oo[.V]` (MPEG-4 video)
  - : 마찬가지로 `oo` 는 미디어 콘텐츠를 명시하는 OTI 값이며, `V` 는 한자리 숫자 _비디오_ OTI 값입니다.
- `avc1.oo[.PPCCLL]` (AVC video)

  - : `oo` 는 콘텐츠를 명시하는 OTI 값이며, while `PPCCLL` 는 6자리 16진수로써 프로파일 넘버 (`PP`), 제약 플래그 (`CC`), 레벨 (`LL`)을 의미합니다. `PP`로 가능한 값은 [AVC profiles](#avc_profiles)를 참조하세요.

    제약 플래그는 1 비트 불리언 값이며, MSB는 flag 0(또는 일부에선 `constraint_set0_flag`)로 취급합니다. 그리고 이어지는 비트는 하나씩 번호가 높게 매겨집니다. 현재로썬 0부터 2번째 비트까지만 사용하며;나머지 5개의 비트는 _반드시_ 0이어야합니다. 각 플래그의 의미는 사용하는 프로파일에 따라 달라집니다.

    레벨 값은 고정 소수점이므로 숫자 `14` (10진법 20) 은 레벨 2.0을 의미하며 `3D` (10진법 61) 은 레벨 6.1을 의미합니다. 일반적으로 레벨 숫자가 높을 수록 스트림 대역폭이 높아 더 큰 크기의 비디오를 지원할 수 있습니다.

#### AVC 프로파일

아래의 AV 프로파일 넘버는 `codecs` 파라미터에서 사용하며 제약 요소 값은 `CC`로 사용할 수 있습니다.

| 프로파일                                                                                                                                                                                                                                                                                                                                                                                                                      | 넘버(Hex) | 제약 (byte) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| **Constrained Baseline Profile (CBP)** CBP는 리소스가 제약점이 있거나 재생이 원활하지 못해 발생하는 이상 요소들을 최소화 해야 하는 경우 주요한 해결책입니다.                                                                                                                                                                                                                                                                  | `42`      | `40`        |
| **Baseline Profile (BP)** CBP와 유사하나 데이터 손실 방지와 복구 능력을 향상시킨 프로파일입니다. CBP가 도입된 이후에는 이전만큼 널리 사용하고 있지는 않습니다. CBP 스트림은 모두 BP 스트림으로 간주할 수도 있습니다.                                                                                                                                                                                                          | `42`      | `00`        |
| **Extended Profile (XP)** 고효율 압축과 네트워크 전송시의 데이터 안정성, 스트림 스위칭을 고려한 프로파일입니다.                                                                                                                                                                                                                                                                                                               | `58`      | `00`        |
| **Main Profile (MP)** MPEG-4 포맷으로 전송하는 디지털 표준 TV 방송에서 사용하는 프로파일입니다. 고선명 TV(HDV)에서는 _사용하지 않습니다_. 2004년 —HDTV에서 사용하기 위해— High Profile이 추가된 이후 중요도가 감소하였습니다.                                                                                                                                                                                                 | `4D`      | `00`        |
| **High Profile (HiP)** 현재로써는 전파방송과 매체기반 HD 비디오에서 사용하는 주요 프로파일입니다. HD TV 방송과 블루레이 미디어에서 사용하고 있습니다.                                                                                                                                                                                                                                                                         | `64`      | `00`        |
| **Progressive High Profile (PHiP)** 필드 코딩 지원을 제거한 High Profile입니다.                                                                                                                                                                                                                                                                                                                                               | `64`      | `08`        |
| **Constrained High Profile** 양방향 예측 슬라이스("B-slices") 지원을 제거한 PHiP입니다.                                                                                                                                                                                                                                                                                                                                       | `64`      | `0C`        |
| **High 10 Profile (Hi10P)** 10 비트 컬러 모드 지원을 제거한 High Profile입니다.                                                                                                                                                                                                                                                                                                                                               | `6E`      | `00`        |
| **High 4:2:2 Profile (Hi422P)** Hi10P에 4:2:2 크로마 서브샘플링과 최대 10비트 컬러 모드 지원을 추가한 프로파일입니다.                                                                                                                                                                                                                                                                                                         | `7A`      | `00`        |
| **High 4:4:4 Predictive Profile (Hi444PP)** Hi422P 및 Hi444PP에 4:4:4 크로마 서브샘플링(색차 샘플링 소거 없음)을 추가 지원한 프로파일입니다. 또한 최대 14비트 컬러 샘플과 효율적인 무손실 지역 코딩을 추가하였습니다. 각 프레임을 3개의 분리된 컬러 평면(각 평면은 모노크롬 프레임형태로 저장됩니다)으로 인코딩할 수 있는 옵션입니다.                                                                                         | `F4`      | `00`        |
| **High 10 Intra Profile** all-intra-frame에 High 10 제약이 걸린 프로파일입니다. 전문가 용 앱에 주로 쓰입니다.                                                                                                                                                                                                                                                                                                                 | `6E`      | `10`        |
| **High 4:2:2 Intra Profile** all-intra-frame에 Hi422를 적용한 프로파일입니다.                                                                                                                                                                                                                                                                                                                                                 | `7A`      | `10`        |
| **High 4:4:4 Intra Profile** all-intra-frame에 High 4:4:4 제약을 건 프로파일입니다.                                                                                                                                                                                                                                                                                                                                           | `F4`      | `10`        |
| **CAVLC 4:4:4 Intra Profile** all-intra-frame에 High 4:4:4 제약, CAVLC 엔트로피 코딩만 사용하는 프로파일입니다.                                                                                                                                                                                                                                                                                                               | `44`      | `00`        |
| **Scalable Baseline Profile** 화상 회의, 감시 카메라 및 모바일 장치에서 쓰이는 프로파일로, [SVC](https://en.wikipedia.org/wiki/SVC) Baseline Profile은 AVC의 Constrained Baseline profile에 기반하고 있습니다. 스트림의 베이스 레이어는 고품질로 제공되면서, 제약이 걸린 환경에서 대안이 될 수 있는 서브스트림을 다수 제공하는 방식입니다. 서브스트림은 해상도 감소, 낮은 프레임레이트, 압축률 저하 등을 조합하여 구성합니다. | `53`      | `00`        |
| **Scalable Constrained Baseline Profile** 실시간 양방향 대화형 어플리케이션에서 주요 사용하는 프로파일입니다. WebRTC에서 아직 정식으로 지원하지는 않지만, [SVC를 활성화](https://github.com/w3c/webrtc-svc)하여 WebRTC AP 개발 모드에서 사용해 볼 수 있습니다.                                                                                                                                                                | `53`      | `04`        |
| **Scalable High Profile** 방송 및 스트리밍 어플리케이션에서 주로 사용합니다. 베이스(또는 최고 품질) 레이어에는 AVC High Profile이 반드시 포함되어야 합니다.                                                                                                                                                                                                                                                                   | `56`      | `00`        |
| **Scalable Constrained High Profile** 실시간 통신을 위한 Scalable High Profile의 서브셋 프로파일입니다.                                                                                                                                                                                                                                                                                                                       | `56`      | `04`        |
| **Scalable High Intra Profile** 비디오 제작 어플리케이션을 위한 all-intra-frame 프로파일입니다.                                                                                                                                                                                                                                                                                                                               | `56`      | `20`        |
| **Stereo High Profile** 양안 렌더링을 통한 스테레오스코픽(stereoscopic) 비디오를 지원하는 프로파일입니다. 양안 영상이 아닌 경우 High profile과 동일합니다.                                                                                                                                                                                                                                                                    | `80`      | `00`        |
| **Multiview High Profile** 시간 및 MVC inter-view 예측을 통한 2개 이상의 뷰를 지원하는 프로파일입니다. 필드 픽쳐 또는 매크로블록-어댑티브한 frame-field 코딩을 _지원하지 않습니다_.                                                                                                                                                                                                                                           | `76`      | `00`        |
| **Multiview Depth High Profile** High Profile에 기반하며 메인 서브스트림이 반드시 붙어야 합니다. 나머지 서브스트림들은 Stereo High Profile과 매칭되어야 합니다.                                                                                                                                                                                                                                                               | `8A`      | `00`        |

#### MPEG-4 audio

`codecs` 목록의 값 항목이 `mp4a`로 시작한다면, 문법은 아래와 같아야 합니다:

```
mp4a.oo[.A]
```

`oo` 는 두자리 16진수 Object Type Indication으로 미디어에 사용된 코덱 클래스를 표시합니다. OTI 값은 [MP4 Registration Authority](http://mp4ra.org/)에서 규정하고 있으며 [list of the possible OTI values](http://mp4ra.org/#/object_types)에서 가용한 값을 확인할 수 있습니다. 특수한 값인 `40`; 이는 미디어가 MPEG-4 audio(ISO/IEC 14496 Part 3)임을 나타냅니다. 조금 더 자세히 말하자면, 세번째 컴포넌트—Audio Object Type—은 OTI `40` 을 MPEG-4의 특정 하위 타입으로 범위를 좁히기 위해 추가하였습니다.

Audio Object Type는 두자리 *10진수*로 이루어져 있습니다(`codecs` 파라미터의 다른 값은 대부분 16진수). 예를들어 MPEG-4 AAC-LC의 오디오 오브젝트 타입은 숫자 2이므로 AAC-LC의 전체 `codecs` 표현 값은 `mp4a.40.2` 입니다.

그러므로 오디오 오브젝트 타입이 17인 ER AAC LC의 전체 `codecs` 값은 `mp4a.40.17` 입니다. 한자리 숫자는 한자리로 표현하거나(폭넓게 호환되므로 최선) 앞에 0을 붙여 두자리로 표현할 수 있습니다. `mp4a.40.02` 처럼요.

> **참고:** 원래 Audio Object Type은 한자리 숫자로 규정되었었습니다. 시간이 지나면서 표준을 확장하였고 현재는 한자리 또는 두자리 숫자입니다. 10 미만의 값 앞에 `0` 을 붙이는건 필수가 아닙니다. 오래된 MPEG-4 코덱 구현체들은 두자리 숫자를 지원하지 못할 수도 있습니다. 따라서 호환성을 높이기 위해선 한자리로 표현해야 합니다.

Audio Object Types는 ISO/IEC 14496-3 subpart 1, section 1.5.1에서 정의하고 있습니다. 아래 표는 Audio Object Type 기본 목록과 지원하는 프로필입니다. MPEG-4 audio type의 내부에 대해서 더 알고 싶다면 레퍼런스를 참조하세요.

| ID          | Audio Object Type                                                             | Profile support                                   |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------- |
| `0`         | NULL                                                                          |                                                   |
| `1`         | AAC Main                                                                      | Main                                              |
| `2`         | AAC LC (Low Complexity)                                                       | Main, Scalable, HQ, LD v2, AAC, HE-AAC, HE-AAC v2 |
| `3`         | AAC SSR (Scalable Sampling Rate)                                              | Main                                              |
| `4`         | AAC LTP (Long Term Prediction)                                                | Main, Scalable, HQ                                |
| `5`         | SBR (Spectral Band Replication)                                               | HE-AAC, HE-AAC v2                                 |
| `6`         | AAC Scalable                                                                  | Main, Scalable, HQ                                |
| `7`         | TwinVQ (Coding for ultra-low bit rates)                                       | Main, Scalable                                    |
| `8`         | CELP (Code-Excited Linear Prediction)                                         | Main, Scalable, Speech, HQ, LD                    |
| `9`         | HVXC (Harmonic Vector Excitation Coding)                                      | Main, Scalable, Speech, LD                        |
| `10` – `11` | _Reserved_                                                                    |                                                   |
| `12`        | TTSI (Text to Speech Interface)                                               | Main, Scalable, Speech, Synthetic, LD             |
| `13`        | Main Synthetic                                                                | Main, Synthetic                                   |
| `14`        | Wavetable Synthesis                                                           |                                                   |
| `15`        | General MIDI                                                                  |                                                   |
| `16`        | Algorithmic Synthesis and Audio Effects                                       |                                                   |
| `17`        | ER AAC LC (Error Resilient AAC Low-Complexity)                                | HQ, Mobile Internetworking                        |
| `18`        | _Reserved_                                                                    |                                                   |
| `19`        | ER AAC LTP (Error Resilient AAC Long Term Prediction)                         | HQ                                                |
| `20`        | ER AAC Scalable (Error Resilient AAC Scalable)                                | Mobile Internetworking                            |
| `21`        | ER TwinVQ (Error Resilient TwinVQ)                                            | Mobile Internetworking                            |
| `22`        | ER BSAC (Error Reslient Bit-Sliced Arithmetic Coding)                         | Mobile Internetworking                            |
| `23`        | ER AAC LD (Error Resilient AAC Low-Delay; used for two-way communiation)      | LD, Mobile Internetworking                        |
| `24`        | ER CELP (Error Resilient Code-Excited Linear Prediction)                      | HQ, LD                                            |
| `25`        | ER HVXC (Error Resilient Harmonic Vector Excitation Coding)                   | LD                                                |
| `26`        | ER HILN (Error Resilient Harmonic and Individual Line plus Noise)             |                                                   |
| `27`        | ER Parametric (Error Resilient Parametric)                                    |                                                   |
| `28`        | SSC (Sinusoidal Coding)                                                       |                                                   |
| `29`        | PS (Parametric Stereo)                                                        | HE-AAC v2                                         |
| `30`        | MPEG Surround                                                                 |                                                   |
| `31`        | _Escape_                                                                      |                                                   |
| `32`        | MPEG-1 Layer-1                                                                |                                                   |
| `33`        | MPEG-1 Layer-2 (MP2)                                                          |                                                   |
| `34`        | MPEG-1 Layer-3 (MP3)                                                          |                                                   |
| `35`        | DST (Direct Stream Transfer)                                                  |                                                   |
| `36`        | ALS (Audio Lossless)                                                          |                                                   |
| `37`        | SLS (Scalable Lossless)                                                       |                                                   |
| `38`        | SLS Non-core (Scalable Lossless Non-core)                                     |                                                   |
| `39`        | ER AAC ELD (Error Resilient AAC Enhanced Low Delay)                           |                                                   |
| `40`        | SMR Simple (Symbolic Music Representation Simple)                             |                                                   |
| `41`        | SMR Main (Symbolic Music Representation Main)                                 |                                                   |
| `42`        | _Reserved_                                                                    |                                                   |
| `43`        | SAOC (Spatial Audio Object Coding)[\[1\]](#audio-object-types-foot-1)         |                                                   |
| `44`        | LD MPEG Surround (Low Delay MPEG Surround)[\[1\]](#audio-object-types-foot-1) |                                                   |
| `45` and up | _Reserved_                                                                    |                                                   |

\[1] SAOC and LD MPEG Surround are defined in [ISO/IEC 14496-3:2009/Amd.2:2010(E)](https://www.iso.org/standard/54838.html).

### WebM

WebM `codecs` 파라미터의 기본 형은 4개의 WebM 코덱 중 하나 이상의 이름을 콤마로 구분합니다. 아래 표는 예시입니다.:

| MIME 타입                        | 설명                                                  |
| -------------------------------- | ----------------------------------------------------- |
| `video/webm;codecs="vp8"`        | VP8 코덱 WebM 비디오; 오디오 미정의.                  |
| `video/webm;codecs="vp9"`        | VP9 코덱 WebM 비디오.                                 |
| `audio/webm;codecs="vorbis"`     | Vorbis 오디오 WebM 파일.                              |
| `audio/webm;codecs="opus"`       | Opus 오디오 WebM 파일.                                |
| `video/webm;codecs="vp8,vorbis"` | VP8 비디오 코덱, Vorbis 오디오 코덱 포함된 WebM 파일. |
| `video/webm;codecs="vp9,opus"`   | A WebM container with VP9 video and Opus audio.       |

`vp8.0`, `vp9.0` 문자열도 가능하지만, 비추천합니다.

#### ISO Base Media File Format 문법

`codecs` 파라미터를 표준화하고 강력한 포맷으로 발전시키기 위해, WebM은 [ISO Base Media File Format](#ISO-BMFF) 에 정의된 문법에 따라 _비디오_ 콘텐츠를 기술하기 시작했습니다. 본 문법은 [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4)의, [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) 섹션에 정의되어 있습니다. 오디오 코덱은 `vorbis` 또는 `opus`로 표시되어 있습니다.

`codecs` 파리미터는 사용한 코덱을 나타내는 4자리 문자로 시작하고 온점(`.`)으로 구분된 2자리 숫자가 반복됩니다.

```
cccc.PP.LL.DD.CC[.cp[.tc[.mc[.FF]]]]
```

처음부터 5개 요소는 필수이며; `cp` (color primaries) 부터는 옵션입니다.; 이후로는 어디서든 끊을 수 있습니다. 각 요소는 아래 표에 설명하고 있으며 예시가 첨부되어 있습니다.

<table class="standard-table">
  <caption>
    WebM codecs parameter components
  </caption>
  <thead>
    <tr>
      <th scope="col">Component</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>cccc</code></td>
      <td>
        <p>
          4자리 코드로 사용 가능한 코덱을 명시합니다. 가능한 값은 아래와
          같습니다:
        </p>
        <table class="standard-table">
          <caption>
            Web-M 지원 코덱 4자리 코드
          </caption>
          <thead>
            <tr>
              <th scope="col">Four-character code</th>
              <th scope="col">Codec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>vp08</code></td>
              <td>VP8</td>
            </tr>
            <tr>
              <td><code>vp09</code></td>
              <td>VP9</td>
            </tr>
            <tr>
              <td><code>vp10</code></td>
              <td>VP10</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>PP</code></td>
      <td>
        <p>
          2자리 숫자 프로파일 코드. 필요하다면 두자리를 맞추기 위해 앞에 0을
          추가합니다.
        </p>
        <table class="standard-table">
          <caption>
            WebM 프로파일 숫자
          </caption>
          <thead>
            <tr>
              <th scope="col">프로파일</th>
              <th scope="col">설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td>
                크로마 서브샘플링 4:2:0(수직/수평 서브샘플링)만 허용. 색상
                컴포넌트 당 8비트만 허용.
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                크로마 서브샘플링 전체 허용. 색상 컴포넌트 당 8비트만 허용.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                크로마 서브샘플링 4:2:0만 허용. 색상 컴포넌트 당 8, 10, 12비트
                허용.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                크로마 서브샘플링 전체 허용. 색상 컴포넌트 당 8, 10, 12비트 허용
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        두 자리 숫자 레벨 코드. 레벨 넘버는 고정 소수점 표기로 첫번째 숫자가 1의
        자리, 두번째 숫자가 소수점 미만 첫번째 자리를 의미합니다. 예를 들어 레벨
        3은 <code>30</code> 레벨 6.1은 <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        휘도, 색상 컴포넌트의 비트 심도를 표기합니다. 가능한 값은 8, 10,
        12입니다.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          크로마 서브샘플링 포맷을 2자리 숫자로 표기합니다. 가능한 값은 아래
          표에 있습니다; 자세한 내용은
          [Chroma subsampling](/ko/docs/Web/Media/Formats/Video_concepts#chroma_subsampling)
          를 참조하세요.
        </p>
        <table class="standard-table">
          <caption>
            WebM 크로마 서브샘플링 구분자
          </caption>
          <thead>
            <tr>
              <th scope="col">값</th>
              <th scope="col">크로마 서브샘플링 포맷</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td>
                4:2:0 with the chroma samples sited interstitially between the
                pixels
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 chroma subsampling with the samples colocated with luma
                (0, 0)
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                4:2:2 chroma subsampling (4 out of each 4 horizontal pixels'
                luminance are used)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 chroma subsampling (every pixel's luminance and
                chrominance are both retained)
              </td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td><em>Reserved</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        <p>
          <a href="https://www.itu.int/rec/T-REC-H.273/en"
            >ISO/IEC 23001-8:2016</a
          >
          표준 Section 8.1에 명시되어있는 색 공간을 두자리 숫자로 표현합니다. 본
          요소와 이후 요소는 전부 비필수값입니다.
        </p>
        <p>Color primaries 요소에 가능한 값은 아래와 같습니다.:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Color primary identifiers
          </caption>
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td><em>ITU과 ISO/IEC</em>에 의해 예약됨</td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                고선명 화질(HD) TV 표준인 BT.709, sRGB, sYCC. BT.709; sRGB는
                컴퓨터 모니터에서 쓰이는 가장 일반적인 색 공간입니다. Broadcast
                BT.709는 8비트 색 심도를 사용하여 16(Black)부터 235(White)까지
                리갈 레인지를 표현합니다.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>알 수 없거나 application에서 활용하기 위해 사용합니다.</td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>ITU과 ISO/IEC</em>에 의해 예약됨</td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>BT.470 System M, NTSC (미국 내 표준 화질 TV 표준)</td>
            </tr>
            <tr>
              <td><code>05</code></td>
              <td>
                BT.470 System B, G; BT.601; BT.1358 625; BT.1700 625 PAL and 625
                SECAM
              </td>
            </tr>
            <tr>
              <td><code>06</code></td>
              <td>
                BT.601 525; BT.1358 525 or 625; BT.1700 NTSC; SMPTE 170M.
                <em><code>7</code>과 동일함.</em>
              </td>
            </tr>
            <tr>
              <td><code>70</code></td>
              <td>
                {{Glossary("SMPTE")}} 240M (historical).
                <em>Functionally identical to <code>6</code>과 동일함.</em>
              </td>
            </tr>
            <tr>
              <td><code>08</code></td>
              <td>일반 필름</td>
            </tr>
            <tr>
              <td><code>09</code></td>
              <td>
                BT.2020; BT.2100. UHD (4K) High Dynamic Range (HDR) 영상에서
                사용 매우 넓은 색 표현력과 10비트 12비트 색상 컴포넌트 지원.
              </td>
            </tr>
            <tr>
              <td><code>10</code></td>
              <td>
                SMPTE ST 428 (D-Cinema Distribution Master: Image
                characteristics). DCDM을 위한 비압축 형식.
              </td>
            </tr>
            <tr>
              <td><code>11</code></td>
              <td>
                SMPTE RP 431 (D-Cinema Quality: Reference projector and
                environment). 필름 표현의 지속적 경험을 위한 레퍼런스 프로젝터와
                환경 조건에 대해 기술.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Color Processing for
                D-Cinema). 디지털 영화를 위한 색신호 디코딩의 기술적 가이드라인.
              </td>
            </tr>
            <tr>
              <td><code>13</code> – <code>21</code></td>
              <td><em>ITU과 ISO/IEC</em>에 의해 예약됨</td>
            </tr>
            <tr>
              <td><code>22</code></td>
              <td>EBU Tech 3213-E</td>
            </tr>
            <tr>
              <td><code>23</code> – <code>255</code></td>
              <td><em>ITU과 ISO/IEC</em>에 의해 예약됨</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        비디오의 <code>transferCharacteristics</code> 값을 2자리 숫자로 표현.
        This value is from Section 8.2 of
        <a href="https://www.itu.int/rec/T-REC-H.273/en"
          >ISO/IEC 23001-8:2016</a
        >
        Section 8.2에 기술되어 있으며 디코딩된 색상을 렌더링 타겟에 맞출 때
        transfer characteristics 을 정의합니다.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        <code>matrixCoefficients</code> 속성 값을 2자리 숫자로 표현
        <a href="https://www.itu.int/rec/T-REC-H.273/en"
          >ISO/IEC 23001-8:2016</a
        >
        스펙 Section 8.3 표에서 기술. 이 값은 native red, blue, green 색상을
        휘도, 색차 신호에 매핑하는데 사용합니다. 이 계수들이 방정식에서 어떻게
        사용되는지 같은 섹션에서 확인할 수 있습니다.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        색상 컴포넌트의 검정 수준과 색상 범위를 리갈 레인지로 제한할지 여부를
        표시합니다. 예를들어 8비트 색상의 경우 리갈 레인지는 16~235입니다. 값이
        <code>00</code> 인 경우 강제로 제한하며, <code>01</code> 인 경우
        결과물의 색상이 컬러 시스템의 범위를 벗어나더라도 각 컴포넌트 별로
        가능한 풀 레인지 값을 허용합니다.
      </td>
    </tr>
  </tbody>
</table>

#### WebM media type 예시

- `video/webm;codecs="vp08.00.41.08,vorbis"`
  - : VP8 비디오, 프로파일 0 레벨 4.1, 8-bit YUV 4:2:0 크로마 서브샘플링, BT.709 색 공간, 변환 함수, 행렬 계수, 휘도 색차 값은 ("studio") 리갈 레인지로 인코딩 됨. 오디오는 Vorbis.
- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9 비디오, 프로파일 2 레벨?1.0, 10-bit YUV 4:2:0 크로마 서브샘플링, BT.2020 색 공간, ST 2084 EOTF (HDR SMPTE), BT.2020 비상수 휘도 색상 행렬, 풀 레인지 휘도 색차 인코딩non-constant luminance color matrix, and full-range chroma and luma encoding. 오디오는 Opus 포맷.

## codecs 파라미터 사용하기

`codecs` 파라미터를 여러 상황에서 사용할 수 있습니다. 먼저 {{HTMLElement("audio")}} , {{HTMLElement("video")}} 엘레먼트 생성 시 {{HTMLElement("source")}} 엘레먼트에 사용하여 브라우저로 하여금 사용할 미디어 포맷에 대한 옵션을 제공하는거죠..

{{domxref("MediaSource.isTypeSupported()")}} 메소드에 MIME 타입을 명시적으로 전달하는데 사용할 수도 있습니다.; 이 메소드는 현재 장치에서 주어진 미디어 포맷을 재생할 수 있는지 여부를 불리언 값으로 반환합니다.

## 더 보기

- [Web media technologies](/ko/docs/Web/Media)
- [Guide to media types and formats on the web](/ko/docs/Web/Media/Formats)
- [Guide to audio codecs used on the web](/ko/docs/Web/Media/Formats/Audio_codecs)
- [Guide to video codecs used on the web](/ko/docs/Web/Media/Formats/Video_codecs)
- [Codecs used by WebRTC](/ko/docs/Web/Media/Formats/WebRTC_codecs)
