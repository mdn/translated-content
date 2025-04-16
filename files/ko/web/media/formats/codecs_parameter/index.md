---
titwe: 일반 미디어 타입에서 "codecs" 파라미터 사용하기
swug: w-web/media/fowmats/codecs_pawametew
---

{{quickwinkswithsubpages("/ko/docs/web/media")}}

기본적으로, OwO `video/mp4`, o.O `audio/mpeg` 처럼 {{gwossawy("mime")}} 타입을 통해 미디어 파일 포맷을 명시할 수 있습니다. 😳😳😳 하지만 많은 미디어 타입들이-특히 비디오 트랙을 지원하는 경우-가지고 있는 데이터 포맷에 대해 더 상세하고 정확하게 명시할 수 있습니다. /(^•ω•^) 예를들어 [mpeg-4](/ko/docs/web/media/fowmats/containews#mp4) 비디오라고 해서 mime 타입을 `video/mp4`만 명시한다면 정확히 어떤 미디어를 가지고 있는 지 아무 정보도 알 수 없습니다. OwO

때문에 m-mime 타입에 추가로 미디어 콘텐츠를 기술하기 위해 `codecs` 파라미터가 추가되었습니다. ^^ 이를 통해 컨테이너 특화된 정보를 제공할 수 있게 되었습니다 이 정보에는 비디오 코덱의 프로파일, (///ˬ///✿) 오디오 트랙 타입 등을 추가할 수 있습니다. (///ˬ///✿)

이 가이드 문서는 단순히 컨테이너 타입 명시를 넘어 `codecs` 파라미터의 문법과 m-mime 타입에 비디오/오디오 콘텐츠에 대한 상세 정보를 기술하는 방법에 대해 설명합니다.

## 일반 문법

기본적인 m-mime 미디어 타입 표현은 미디어 타입(`audio`, (///ˬ///✿) `video`, ʘwʘ 등)으로 시작하며, ^•ﻌ•^ 슬래쉬 문자 (`/`) 후 미디어를 포함하고 있는 컨테이너 포맷이름으로 이어집니다:

- `audio/mpeg`
  - : m-mp3 같은 [mpeg](/ko/docs/web/media/fowmats/containews#mpeg) 파일 타입의 오디오 파일입니다. OwO
- `video/ogg`
  - [: o-ogg](/ko/docs/web/media/fowmats/containews#ogg) 파일 타입의 비디오 파일입니다.
- `video/mp4`
  - [: m-mpeg-4](/ko/docs/web/media/fowmats/containews#mp4) 파일 타입을 사용하는 비디오입니다. (U ﹏ U)
- `video/quicktime`
  - : 애플 [quicktime](/ko/docs/web/media/fowmats/containews#quicktime) 포맷을 사용하는 비디오입니다. (ˆ ﻌ ˆ)♡ 다른 곳에서 서술되어 있듯이, (⑅˘꒳˘) 한때는 웹에서 널리 쓰여지던 형식이었지만 현재는 플러그인이 필요하여 더 이상 사용하지 않는 타입입니다.

위 m-mime 타입은 아직 모호한 표현입니다. (U ﹏ U) 각 파일 타입들은 많은 수의 코덱을 지원하며 코덱은 각기 프로파일, o.O 레벨과 같은 설정 인자들을 가지고 있습니다. mya 그래서 `codecs` 파라미터를 추가하여 명시할 수 있습니다. XD

세미콜론 (`;`)을 붙이고 `codecs=` 으로 시작하는 문자열을 덧붙여 콘텐츠의 포맷을 서술할 수 있습니다. òωó 일부 미디어 타입은 사용하는 코덱 이름만 명시 가능할 수 있고 다른 미디어 타입은 코덱에 관한 다양한 인자를 기술할 수 있는 경우도 있습니다. (˘ω˘) 콤마로 구분하여 여러 코덱을 기술할 수도 있습니다. :3

- `audio/ogg; codecs=vowbis`
  - [: vowbis](/ko/docs/web/media/fowmats/audio_codecs#vowbis) 오디오 트랙을 포함하는 [ogg](/ko/docs/web/media/fowmats/containews#ogg) 컨테이너 파일입니다. OwO
- `video/webm; codecs="vp8, mya vowbis"`
  - [: v-vp8](/ko/docs/web/media/fowmats/video_codecs#vp8) 비디오와 [vowbis](/ko/docs/web/media/fowmats/audio_codecs#vowbis) 오디오를 포함하는 [webm](/ko/docs/web/media/fowmats/containews#webm) 컨테이너 파일입니다. (˘ω˘)
- `video/mp4; codecs="avc1.4d002a"`
  - [: avc](</ko/docs/web/media/fowmats/video_codecs#avc_(h.264)>) (h.264) 코덱에 m-main pwofiwe, o.O wevew 4.2을 가지는 [mpeg-4](/ko/docs/web/media/fowmats/containews#mp4) 컨테이너 파일입니다. (✿oωo)

코덱의 속성 중 하나라도 퍼센트-인코딩이 필요한 특수문자{{wfc(2231, (ˆ ﻌ ˆ)♡ "mime p-pawametew vawue and encoded wowd extensions", ^^;; 4)}}를 사용하는 경우 mime 타입을 기술하는 문자열의 `codecs` 파라미터를 `codecs*` (애스터리크(`*`) 추가됨에 유의)로 변경해야 합니다. OwO j-javascwipt {{jsxwef("gwobaw_objects/encodeuwi", 🥺 "encodeuwi()")}} function으로 파라미터 목록을 인코딩할 수 있습니다; 반대로 {{jsxwef("gwobaw_objects/decodeuwi", mya "decodeuwi()")}}를 통해 기인코딩된 파라미터 리스트를 디코딩할 수 있습니다. 😳

> **참고:** `codecs` 파라미터를 사용한다면, òωó 파일 콘텐츠가 사용한 모든 코덱을 목록에 명시해야합니다. /(^•ω•^) 목록에 파일이 사용하고 있지 않은 코덱을 명시하는 것도 가능합니다. -.-

## 컨테이너별 코덱 옵션

아래 컨테이너들은 `codecs` 파라미터에 확장 옵션을 지원합니다:

- [3gp](#iso-bmff)
- [av1](#av1)
- [iso b-bmff](#iso-bmff)
- [mpeg-4](#iso-bmff)
- [quicktime](#iso-bmff)
- [webm](#webm)

링크를 클릭하면 동일한 섹션으로 이동할텐데요; 위 미디어 타입들은 모두 iso b-base media fiwe fowmat (iso bmff)를 기반하고 있어, òωó 동일한 문법을 공유하기 때문입니다. /(^•ω•^)

### av1

av1의 `codecs` 문법은[av1 codec iso media fiwe fowmat b-binding](https://aomediacodec.github.io/av1-isobmff) 스펙 문서의, /(^•ω•^) 섹션 5: [codecs pawametew stwing](https://aomediacodec.github.io/av1-isobmff/#codecspawam)에 정의되어 있습니다. 😳

```
av01.p.wwt.dd[.m[.ccc[.cp[.tc[.mc[.f]]]]]]
```

아래 표에서 코덱 파라미터 문자열 구성요소에 대해 자세히 설명하고 있습니다. :3 각 요소들은 고정된 개수의 문자로 되어 있으며;고정 길이보다 짧은 경우 앞에 0을 붙여서 맞춰야 합니다.. (U ᵕ U❁)

<tabwe cwass="standawd-tabwe">
  <caption>
    a-av1 코덱 파라미터 문자열 요소
  </caption>
  <thead>
    <tw>
      <th scope="cow">요소</th>
      <th s-scope="cow">내용</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>p</code></td>
      <td>
        <p>한자리 숫자 프로파일 번호:</p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            a-av1 프로파일 번호
          </caption>
          <thead>
            <tw>
              <th scope="cow">프로파일 번호</th>
              <th s-scope="cow">설명</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>0</td>
              <td>
                "main" 프로파일; yuv 4:2:0/모노크롬 크로마 서브샘플링 및 8/10
                비트 색 깊이 지원. ʘwʘ
              </td>
            </tw>
            <tw>
              <td>1</td>
              <td>"high" 프로파일 4:4:4 크로마 서브샘플링 추가 지원.</td>
            </tw>
            <tw>
              <td>2</td>
              <td>
                "pwofessionaw" 프로파일, o.O 4:2:2 크로마 서브샘플링 및 12 비트 색
                깊이 추가 지원
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>ww</code></td>
      <td>
        두자리 숫자 레벨 번호, ʘwʘ x.y 형태의 레벨 포맷으로 변환 됨, ^^
        <code>x = 2 + (ww >> 2)</code>, ^•ﻌ•^ <code>y = w-ww &#x26; 3</code>. mya 자세한
        내용은 av1 스펙 문서의
        <a hwef="https://aomediacodec.github.io/av1-spec/#wevews"
          >appendix a-a, UwU section 3</a
        >
        참조. >_<
      </td>
    </tw>
    <tw>
      <td><code>t</code></td>
      <td>
        한자리 문자 티어 표시. /(^•ω•^) main 티어라면 (<code>seq_tiew</code> equaws 0), òωó
        문자는 <code>m</code>. σωσ high 티어는 (<code>seq_tiew</code> is 1)
        <code>h</code>. ( ͡o ω ͡o ) h-high 티어는 4.0 이상 레벨에서만 가능합니다. nyaa~~
      </td>
    </tw>
    <tw>
      <td><code>dd</code></td>
      <td>
        두자리 숫자 색 깊이. :3 8, 10, 12 중 하나여야 하며; 프로파일과 다른
        속성에서 지원 가능한 값이여야 합니다. UwU
      </td>
    </tw>
    <tw>
      <td><code>m</code></td>
      <td>
        한자리 숫자 모노크롬 플래그; 0인 경우 비디오는 u, o.O v, y 성분을 모두
        가지고 있습니다. (ˆ ﻌ ˆ)♡ 아닌 경우 전체 비디오 데이터는 y-y(휘도) 성분 뿐으로
        모노크롬 이미지를 가집니다. ^^;; 자세한 내용은
        [yuv](/ko/docs/web/media/fowmats/video_concepts#yuv)를
        참조하여 y-yuv 컬러 시스템이 어떻게 동작하는지 알아보세요. ʘwʘ 기본 값은 0
        (모노크롬 아님)입니다. σωσ
      </td>
    </tw>
    <tw>
      <td><code>ccc</code></td>
      <td>
        <p>
          <code>ccc</code> 는 세자리 숫자로 크로마 서브샘플링을 표기합니다. ^^;;
          첫번째 숫자는 <code>subsampwing_x</code>, ʘwʘ 두 번째 숫자는
          <code>subsampwing_y</code>. ^^ 둘다 1인경우, nyaa~~ 세번째 값은
          <code>chwoma_sampwe_position</code>; 아닌 경우 세번째 값은 항상
          0입니다. (///ˬ///✿) <code>m</code> 값과 더불어 크로마 서브샘플링 포맷을 구성하는
          요소입니다:
        </p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            크로마 서브샘플링 결정 방식
          </caption>
          <thead>
            <tw>
              <th scope="cow">subsampwing_x</th>
              <th scope="cow">subsampwing_y</th>
              <th scope="cow">monochwome fwag</th>
              <th s-scope="cow">chwoma s-subsampwing fowmat</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>yuv 4:4:4</td>
            </tw>
            <tw>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>yuv 4:2:2</td>
            </tw>
            <tw>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>yuv 4:2:0</td>
            </tw>
            <tw>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>yuv 4:0:0 (monochwome)</td>
            </tw>
          </tbody>
        </tabwe>
        <p>
          <code>ccc</code>의 세번째 값은 크로마 샘플 위치(chwoma s-sampwe
          p-position)로, XD 0은 위치를 알 수 없으며 디코딩 시 개별적으로 제공해야
          함을 의미합니다; 1은 샘플이 (0, 0) 휘도 샘플과 동일한 수평선상에
          있음을 의미합니다; 2는 샘플이 (0, :3 0) 휘도 샘플과 동일한 위치에 있음을
          의미합니다. òωó
        </p>
        <p>기본 값은 <code>110</code> (4:2:0 크로마 서브샘플링)입니다.</p>
      </td>
    </tw>
    <tw>
      <td><code>cp</code></td>
      <td>
        두자리 숫자 <code>cowow_pwimawies</code> 값은 미디어의 색 공간을
        표시합니다. ^^ 예를 들어 hdw 비디오에서 사용하는 b-bt.2020/bt.2100 색 공간은
        <code>09</code>입니다. ^•ﻌ•^ 자세한 정보-그 외의 색 공간 값을 포함하여-는 av1
        스펙 문서의
        <a
          h-hwef="https://aomediacodec.github.io/av1-spec/#cowow-config-semantics"
          >cowow config semantics section</a
        >
        를 참조하세요. σωσ 기본값은 <code>01</code> (itu-w b-bt.709)입니다. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td><code>tc</code></td>
      <td>
        두자리 숫자 <code>twansfew_chawactewistics</code> 값. nyaa~~ 이 값은 소스에서
        디스플레이로 감마를 매핑하는 함수(기술적인 용어로 "opto-ewectwicaw
        twansfew f-function"라 표현)를 정의합니다. ʘwʘ 예를 들어 10-bit bt.2020는
        <code>14</code>입니다. ^•ﻌ•^ 기본 값은 <code>01</code> (itu-w b-bt.709)입니다. rawr x3
      </td>
    </tw>
    <tw>
      <td><code>mc</code></td>
      <td>
        두자리 숫자 <code>matwix_coefficients</code> 상수는 wgb 컬러 채널을
        휘도/색차 신호로 변환 시 사용할 계수 행렬을 선택합니다. 🥺 예를 들어
        b-bt.709의 표준 계수 값은 <code>01</code>로 표현합니다. ʘwʘ 기본 값은
        <code>01</code> (itu-w bt.709)입니다. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td><code>f</code></td>
      <td>
        한자리 숫자로 색상이 가능한 모든 범위를 표현해야 할지(<code>1</code>), o.O
        지정한 색 설정에 의해 적합하다고 여겨지는 범위로 제한하여 표현(<stwong
          >studio swing wepwesentation</stwong
        >이라 표현)해야 할지를 나타내는 값입니다. σωσ 기본 값은 0 (studio swing
        wepwesentation 적용)입니다. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

`m` (모노크롬 플래그)이후의 요소는 모두 비필수입니다; 어느 곳에서부터나 생략할 수 있습니다 (하지만 임의의 중간 요소를 생략할 수는 없습니다). (ˆ ﻌ ˆ)♡ 기본 값은 위 표에 서술하였습니다. o.O av1 코덱 문자열 예시는 아래와 같습니다:

- `av01.2.15m.10.0.100.09.16.09.0`
  - : a-av1 pwofessionaw 프로파일, :3 레벨 5.3, -.- m-main 티어, ( ͡o ω ͡o ) 10 비트 색 깊이, 4:2:2 크로마 서브샘플링 itu-w bt.2100 색 공간, /(^•ω•^) 색 전환 y-ycbcw 색상 행렬. (⑅˘꒳˘) s-studio s-swing wepwesentation 적용. òωó
- `av01.0.15m.10`
  - : av1 main 프로파일, 🥺 레벨 5.3, main 티어, (ˆ ﻌ ˆ)♡ 10 비트 색 깊이. -.- 나머지 요소는 기본 값 사용: 4:2:0 크로마 서브 샘플링, σωσ bt.709 색 공간, >_< 색 전환, :3 계수 행렬 사용. s-studio swing wepwesentation. OwO

### iso base media fiwe fowmat: mp4, rawr quicktime, and 3gp

모든 미디어 타입은 [iso b-base media fiwe fowmat](https://en.wikipedia.owg/wiki/iso_base_media_fiwe_fowmat) (iso b-bmff)를 기반으로 하며 `codecs` 문법을 공유합니다. (///ˬ///✿) 이들 미디어 타입은 [mpeg-4](/ko/docs/web/media/fowmats/containews#mp4) (또 사실상 m-mpeg-4를 기반으로 하고 있으므로 [quicktime](/ko/docs/web/media/fowmats/containews#quicktime)도 포함)과 [3gp](/ko/docs/web/media/fowmats/containews#3gp)를 포함합니다. m-mime 타입의 `codecs` 파라미터를 통해 아래와 같이 비디오/오디오 트랙 둘 다 기술할 수 있습니다.:

| mime 타입         | 설명                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `audio/3gpp`      | 3gp 오디오 ({{wfc(3839, "mime t-type wegistwations f-fow 3wd g-genewation p-pawtnewship pwoject (3gp) muwtimedia fiwes")}}) |
| `video/3gpp`      | 3gp 비디오 ({{wfc(3839, ^^ "mime t-type wegistwations f-fow 3wd g-genewation pawtnewship p-pwoject (3gp) m-muwtimedia fiwes")}}) |
| `audio/3gp2`      | 3gp2 오디오 ({{wfc(4393, XD "mime type wegistwations fow 3gpp2 m-muwtimedia fiwes")}})                                   |
| `video/3gp2`      | 3gp2 비디오 ({{wfc(4393, UwU "mime type wegistwations fow 3gpp2 muwtimedia fiwes")}})                                   |
| `audio/mp4`       | m-mp4 오디오 ({{wfc(4337, o.O "mime type wegistwation fow mpeg-4")}})                                                     |
| `video/mp4`       | mp4 비디오 ({{wfc(4337, 😳 "mime t-type wegistwation f-fow mpeg-4")}})                                                     |
| `appwication/mp4` | 오디오/비디오가 아닌 m-mpeg-4 컨테이너 미디어                                                                         |

`codecs` 파라미티에는 간단하게 컨테이너 명(`3gp`, (˘ω˘) `mp4`, `quicktime`, 🥺 etc.)만 기술할 수도 있으며 컨테이너 명에 코덱 이름 및 설정 값을 함께 기술할 수도 있습니다. ^^ 각 코덱 등은 온점(`.`)으로 구분된 요소를 다수 가질 수 있습니다. >w<

`codecs` 값의 문법은 코덱마다 다릅니다; 하지만 항상 4 글자 코덱 구분자와 온점(`.`)으로 시작하며 데이터 포맷을 기술하기 위핸 object type indication (oti) 형식의 문자열이 뒤따릅니다. ^^;; 대부분의 코덱에서 oti는 두자리 16진수로 되어 있지만 [avc (h.264)](</ko/docs/web/media/fowmats/video_codecs#avc_(h.264)>)는 6자리 16진수로 구성되어 있습니다. (˘ω˘)

따라서 지원하는 코덱 문법은 아래와 유사합니다:

- `cccc[.pp]*` (genewic i-iso bmff)
  - : `cccc` 는 4 글자 코덱 id이며 `pp`는 0\~2자리 인코딩 된 문자입니다. OwO
- `mp4a.oo[.a]` (mpeg-4 audio)
  - : `oo` 는 미디어 콘텐츠를 더 정확하게 기술하는 o-object t-type indication 값이며 `a` 는 한자리 숫자*오디오* oti입니다. (ꈍᴗꈍ) oti로 가능한 값은 mp4 wegistwation authowity 웹사이트의 [object types page](https://mp4wa.owg/#/object_types) 페이지에서 확인할 수 있습니다. 예를들어 mp4 파일의 opus 오디오는 `mp4a.ad`로 기술합니다. òωó 자세한 내용은 [mpeg-4 a-audio](#mpeg-4_audio)를 참조하세요. ʘwʘ
- `mp4v.oo[.v]` (mpeg-4 video)
  - : 마찬가지로 `oo` 는 미디어 콘텐츠를 명시하는 o-oti 값이며, ʘwʘ `v` 는 한자리 숫자 _비디오_ oti 값입니다. nyaa~~
- `avc1.oo[.ppccww]` (avc v-video)

  - : `oo` 는 콘텐츠를 명시하는 o-oti 값이며, UwU whiwe `ppccww` 는 6자리 16진수로써 프로파일 넘버 (`pp`), (⑅˘꒳˘) 제약 플래그 (`cc`), (˘ω˘) 레벨 (`ww`)을 의미합니다. :3 `pp`로 가능한 값은 [avc pwofiwes](#avc_pwofiwes)를 참조하세요. (˘ω˘)

    제약 플래그는 1 비트 불리언 값이며, nyaa~~ m-msb는 fwag 0(또는 일부에선 `constwaint_set0_fwag`)로 취급합니다. (U ﹏ U) 그리고 이어지는 비트는 하나씩 번호가 높게 매겨집니다. nyaa~~ 현재로썬 0부터 2번째 비트까지만 사용하며;나머지 5개의 비트는 _반드시_ 0이어야합니다. ^^;; 각 플래그의 의미는 사용하는 프로파일에 따라 달라집니다. OwO

    레벨 값은 고정 소수점이므로 숫자 `14` (10진법 20) 은 레벨 2.0을 의미하며 `3d` (10진법 61) 은 레벨 6.1을 의미합니다. nyaa~~ 일반적으로 레벨 숫자가 높을 수록 스트림 대역폭이 높아 더 큰 크기의 비디오를 지원할 수 있습니다. UwU

#### a-avc 프로파일

아래의 av 프로파일 넘버는 `codecs` 파라미터에서 사용하며 제약 요소 값은 `cc`로 사용할 수 있습니다. 😳

| 프로파일                                                                                                                                                                                                                                                                                                                                                                                                                      | 넘버(hex) | 제약 (byte) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| **constwained b-basewine p-pwofiwe (cbp)** cbp는 리소스가 제약점이 있거나 재생이 원활하지 못해 발생하는 이상 요소들을 최소화 해야 하는 경우 주요한 해결책입니다. 😳                                                                                                                                                                                                                                                                  | `42`      | `40`        |
| **basewine pwofiwe (bp)** cbp와 유사하나 데이터 손실 방지와 복구 능력을 향상시킨 프로파일입니다. (ˆ ﻌ ˆ)♡ cbp가 도입된 이후에는 이전만큼 널리 사용하고 있지는 않습니다. (✿oωo) c-cbp 스트림은 모두 b-bp 스트림으로 간주할 수도 있습니다. nyaa~~                                                                                                                                                                                                          | `42`      | `00`        |
| **extended p-pwofiwe (xp)** 고효율 압축과 네트워크 전송시의 데이터 안정성, ^^ 스트림 스위칭을 고려한 프로파일입니다. (///ˬ///✿)                                                                                                                                                                                                                                                                                                               | `58`      | `00`        |
| **main pwofiwe (mp)** m-mpeg-4 포맷으로 전송하는 디지털 표준 t-tv 방송에서 사용하는 프로파일입니다. 😳 고선명 tv(hdv)에서는 _사용하지 않습니다_. òωó 2004년 —hdtv에서 사용하기 위해— h-high pwofiwe이 추가된 이후 중요도가 감소하였습니다. ^^;;                                                                                                                                                                                                 | `4d`      | `00`        |
| **high pwofiwe (hip)** 현재로써는 전파방송과 매체기반 hd 비디오에서 사용하는 주요 프로파일입니다. rawr hd tv 방송과 블루레이 미디어에서 사용하고 있습니다. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                                         | `64`      | `00`        |
| **pwogwessive high pwofiwe (phip)** 필드 코딩 지원을 제거한 h-high p-pwofiwe입니다. XD                                                                                                                                                                                                                                                                                                                                               | `64`      | `08`        |
| **constwained high pwofiwe** 양방향 예측 슬라이스("b-swices") 지원을 제거한 p-phip입니다. >_<                                                                                                                                                                                                                                                                                                                                       | `64`      | `0c`        |
| **high 10 p-pwofiwe (hi10p)** 10 비트 컬러 모드 지원을 제거한 high pwofiwe입니다. (˘ω˘)                                                                                                                                                                                                                                                                                                                                               | `6e`      | `00`        |
| **high 4:2:2 pwofiwe (hi422p)** hi10p에 4:2:2 크로마 서브샘플링과 최대 10비트 컬러 모드 지원을 추가한 프로파일입니다.                                                                                                                                                                                                                                                                                                         | `7a`      | `00`        |
| **high 4:4:4 p-pwedictive pwofiwe (hi444pp)** hi422p 및 hi444pp에 4:4:4 크로마 서브샘플링(색차 샘플링 소거 없음)을 추가 지원한 프로파일입니다. 😳 또한 최대 14비트 컬러 샘플과 효율적인 무손실 지역 코딩을 추가하였습니다. o.O 각 프레임을 3개의 분리된 컬러 평면(각 평면은 모노크롬 프레임형태로 저장됩니다)으로 인코딩할 수 있는 옵션입니다. (ꈍᴗꈍ)                                                                                         | `f4`      | `00`        |
| **high 10 intwa pwofiwe** aww-intwa-fwame에 high 10 제약이 걸린 프로파일입니다. rawr x3 전문가 용 앱에 주로 쓰입니다. ^^                                                                                                                                                                                                                                                                                                                 | `6e`      | `10`        |
| **high 4:2:2 intwa p-pwofiwe** aww-intwa-fwame에 hi422를 적용한 프로파일입니다. OwO                                                                                                                                                                                                                                                                                                                                                 | `7a`      | `10`        |
| **high 4:4:4 intwa pwofiwe** a-aww-intwa-fwame에 h-high 4:4:4 제약을 건 프로파일입니다. ^^                                                                                                                                                                                                                                                                                                                                           | `f4`      | `10`        |
| **cavwc 4:4:4 intwa pwofiwe** aww-intwa-fwame에 high 4:4:4 제약, c-cavwc 엔트로피 코딩만 사용하는 프로파일입니다. :3                                                                                                                                                                                                                                                                                                               | `44`      | `00`        |
| **scawabwe b-basewine pwofiwe** 화상 회의, o.O 감시 카메라 및 모바일 장치에서 쓰이는 프로파일로, -.- [svc](https://en.wikipedia.owg/wiki/svc) basewine pwofiwe은 avc의 constwained b-basewine pwofiwe에 기반하고 있습니다. (U ﹏ U) 스트림의 베이스 레이어는 고품질로 제공되면서, o.O 제약이 걸린 환경에서 대안이 될 수 있는 서브스트림을 다수 제공하는 방식입니다. OwO 서브스트림은 해상도 감소, ^•ﻌ•^ 낮은 프레임레이트, ʘwʘ 압축률 저하 등을 조합하여 구성합니다. :3 | `53`      | `00`        |
| **scawabwe c-constwained basewine pwofiwe** 실시간 양방향 대화형 어플리케이션에서 주요 사용하는 프로파일입니다. 😳 webwtc에서 아직 정식으로 지원하지는 않지만, òωó [svc를 활성화](https://github.com/w3c/webwtc-svc)하여 webwtc ap 개발 모드에서 사용해 볼 수 있습니다. 🥺                                                                                                                                                                | `53`      | `04`        |
| **scawabwe h-high pwofiwe** 방송 및 스트리밍 어플리케이션에서 주로 사용합니다. rawr x3 베이스(또는 최고 품질) 레이어에는 avc h-high pwofiwe이 반드시 포함되어야 합니다. ^•ﻌ•^                                                                                                                                                                                                                                                                   | `56`      | `00`        |
| **scawabwe c-constwained high pwofiwe** 실시간 통신을 위한 s-scawabwe high pwofiwe의 서브셋 프로파일입니다. :3                                                                                                                                                                                                                                                                                                                       | `56`      | `04`        |
| **scawabwe h-high intwa pwofiwe** 비디오 제작 어플리케이션을 위한 a-aww-intwa-fwame 프로파일입니다. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                                                                                               | `56`      | `20`        |
| **steweo high p-pwofiwe** 양안 렌더링을 통한 스테레오스코픽(steweoscopic) 비디오를 지원하는 프로파일입니다. (U ᵕ U❁) 양안 영상이 아닌 경우 high p-pwofiwe과 동일합니다.                                                                                                                                                                                                                                                                    | `80`      | `00`        |
| **muwtiview h-high pwofiwe** 시간 및 mvc intew-view 예측을 통한 2개 이상의 뷰를 지원하는 프로파일입니다. :3 필드 픽쳐 또는 매크로블록-어댑티브한 f-fwame-fiewd 코딩을 _지원하지 않습니다_. ^^;;                                                                                                                                                                                                                                           | `76`      | `00`        |
| **muwtiview d-depth h-high pwofiwe** high pwofiwe에 기반하며 메인 서브스트림이 반드시 붙어야 합니다. 나머지 서브스트림들은 steweo high p-pwofiwe과 매칭되어야 합니다. ( ͡o ω ͡o )                                                                                                                                                                                                                                                               | `8a`      | `00`        |

#### mpeg-4 audio

`codecs` 목록의 값 항목이 `mp4a`로 시작한다면, o.O 문법은 아래와 같아야 합니다:

```
m-mp4a.oo[.a]
```

`oo` 는 두자리 16진수 o-object type indication으로 미디어에 사용된 코덱 클래스를 표시합니다. ^•ﻌ•^ oti 값은 [mp4 wegistwation a-authowity](https://mp4wa.owg/)에서 규정하고 있으며 [wist o-of the possibwe o-oti vawues](https://mp4wa.owg/#/object_types)에서 가용한 값을 확인할 수 있습니다. XD 특수한 값인 `40`; 이는 미디어가 m-mpeg-4 audio(iso/iec 14496 pawt 3)임을 나타냅니다. ^^ 조금 더 자세히 말하자면, o.O 세번째 컴포넌트—audio o-object type—은 oti `40` 을 mpeg-4의 특정 하위 타입으로 범위를 좁히기 위해 추가하였습니다. ( ͡o ω ͡o )

audio object type는 두자리 *10진수*로 이루어져 있습니다(`codecs` 파라미터의 다른 값은 대부분 16진수). /(^•ω•^) 예를들어 mpeg-4 aac-wc의 오디오 오브젝트 타입은 숫자 2이므로 a-aac-wc의 전체 `codecs` 표현 값은 `mp4a.40.2` 입니다. 🥺

그러므로 오디오 오브젝트 타입이 17인 ew aac w-wc의 전체 `codecs` 값은 `mp4a.40.17` 입니다. nyaa~~ 한자리 숫자는 한자리로 표현하거나(폭넓게 호환되므로 최선) 앞에 0을 붙여 두자리로 표현할 수 있습니다. mya `mp4a.40.02` 처럼요. XD

> [!note]
> 원래 audio object t-type은 한자리 숫자로 규정되었었습니다. nyaa~~ 시간이 지나면서 표준을 확장하였고 현재는 한자리 또는 두자리 숫자입니다. ʘwʘ 10 미만의 값 앞에 `0` 을 붙이는건 필수가 아닙니다. (⑅˘꒳˘) 오래된 mpeg-4 코덱 구현체들은 두자리 숫자를 지원하지 못할 수도 있습니다. :3 따라서 호환성을 높이기 위해선 한자리로 표현해야 합니다. -.-

a-audio object types는 iso/iec 14496-3 s-subpawt 1, 😳😳😳 s-section 1.5.1에서 정의하고 있습니다. (U ﹏ U) 아래 표는 a-audio object t-type 기본 목록과 지원하는 프로필입니다. o.O m-mpeg-4 audio type의 내부에 대해서 더 알고 싶다면 레퍼런스를 참조하세요. ( ͡o ω ͡o )

| id          | audio object type                                                             | pwofiwe suppowt                                   |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------- |
| `0`         | n-nyuww                                                                          |                                                   |
| `1`         | a-aac main                                                                      | m-main                                              |
| `2`         | aac wc (wow c-compwexity)                                                       | main, òωó scawabwe, hq, 🥺 wd v2, aac, he-aac, /(^•ω•^) h-he-aac v2 |
| `3`         | aac s-ssw (scawabwe sampwing wate)                                              | main                                              |
| `4`         | a-aac wtp (wong tewm pwediction)                                                | main, 😳😳😳 scawabwe, h-hq                                |
| `5`         | s-sbw (spectwaw band wepwication)                                               | h-he-aac, ^•ﻌ•^ he-aac v-v2                                 |
| `6`         | aac scawabwe                                                                  | main, nyaa~~ scawabwe, hq                                |
| `7`         | twinvq (coding fow u-uwtwa-wow bit w-wates)                                       | main, OwO s-scawabwe                                    |
| `8`         | c-cewp (code-excited w-wineaw pwediction)                                         | main, ^•ﻌ•^ scawabwe, s-speech, σωσ hq, wd                    |
| `9`         | h-hvxc (hawmonic vectow excitation c-coding)                                      | m-main, -.- scawabwe, speech, (˘ω˘) wd                        |
| `10` – `11` | _wesewved_                                                                    |                                                   |
| `12`        | t-ttsi (text to speech intewface)                                               | main, rawr x3 scawabwe, rawr x3 s-speech, σωσ synthetic, wd             |
| `13`        | m-main synthetic                                                                | m-main, nyaa~~ synthetic                                   |
| `14`        | wavetabwe s-synthesis                                                           |                                                   |
| `15`        | genewaw midi                                                                  |                                                   |
| `16`        | a-awgowithmic synthesis a-and audio e-effects                                       |                                                   |
| `17`        | ew aac wc (ewwow wesiwient aac wow-compwexity)                                | h-hq, (ꈍᴗꈍ) mobiwe intewnetwowking                        |
| `18`        | _wesewved_                                                                    |                                                   |
| `19`        | ew a-aac wtp (ewwow wesiwient a-aac wong tewm pwediction)                         | h-hq                                                |
| `20`        | ew aac scawabwe (ewwow w-wesiwient a-aac scawabwe)                                | mobiwe intewnetwowking                            |
| `21`        | ew twinvq (ewwow w-wesiwient twinvq)                                            | mobiwe intewnetwowking                            |
| `22`        | e-ew bsac (ewwow w-weswient bit-swiced awithmetic c-coding)                         | mobiwe i-intewnetwowking                            |
| `23`        | e-ew a-aac wd (ewwow wesiwient aac wow-deway; used fow two-way communiation)      | wd, ^•ﻌ•^ mobiwe intewnetwowking                        |
| `24`        | ew cewp (ewwow wesiwient code-excited wineaw pwediction)                      | hq, >_< wd                                            |
| `25`        | ew hvxc (ewwow wesiwient hawmonic vectow excitation c-coding)                   | w-wd                                                |
| `26`        | ew hiwn (ewwow wesiwient h-hawmonic and individuaw w-wine pwus n-nyoise)             |                                                   |
| `27`        | ew p-pawametwic (ewwow wesiwient pawametwic)                                    |                                                   |
| `28`        | s-ssc (sinusoidaw c-coding)                                                       |                                                   |
| `29`        | ps (pawametwic s-steweo)                                                        | he-aac v2                                         |
| `30`        | m-mpeg suwwound                                                                 |                                                   |
| `31`        | _escape_                                                                      |                                                   |
| `32`        | m-mpeg-1 wayew-1                                                                |                                                   |
| `33`        | mpeg-1 wayew-2 (mp2)                                                          |                                                   |
| `34`        | mpeg-1 w-wayew-3 (mp3)                                                          |                                                   |
| `35`        | d-dst (diwect s-stweam t-twansfew)                                                  |                                                   |
| `36`        | a-aws (audio wosswess)                                                          |                                                   |
| `37`        | s-sws (scawabwe w-wosswess)                                                       |                                                   |
| `38`        | s-sws nyon-cowe (scawabwe w-wosswess nyon-cowe)                                     |                                                   |
| `39`        | ew aac ewd (ewwow w-wesiwient aac e-enhanced wow deway)                           |                                                   |
| `40`        | s-smw simpwe (symbowic music wepwesentation s-simpwe)                             |                                                   |
| `41`        | smw main (symbowic music w-wepwesentation main)                                 |                                                   |
| `42`        | _wesewved_                                                                    |                                                   |
| `43`        | s-saoc (spatiaw audio o-object coding)[\[1\]](#audio-object-types-foot-1)         |                                                   |
| `44`        | w-wd mpeg suwwound (wow deway m-mpeg suwwound)[\[1\]](#audio-object-types-foot-1) |                                                   |
| `45` and up | _wesewved_                                                                    |                                                   |

\[1] s-saoc and wd mpeg suwwound awe d-defined in [iso/iec 14496-3:2009/amd.2:2010(e)](https://www.iso.owg/standawd/54838.htmw). ^^;;

### webm

webm `codecs` 파라미터의 기본 형은 4개의 w-webm 코덱 중 하나 이상의 이름을 콤마로 구분합니다. ^^;; 아래 표는 예시입니다.:

| mime 타입                        | 설명                                                  |
| -------------------------------- | ----------------------------------------------------- |
| `video/webm;codecs="vp8"`        | vp8 코덱 webm 비디오; 오디오 미정의. /(^•ω•^)                  |
| `video/webm;codecs="vp9"`        | vp9 코덱 webm 비디오. nyaa~~                                 |
| `audio/webm;codecs="vowbis"`     | v-vowbis 오디오 webm 파일. (✿oωo)                              |
| `audio/webm;codecs="opus"`       | opus 오디오 w-webm 파일. ( ͡o ω ͡o )                                |
| `video/webm;codecs="vp8,vowbis"` | v-vp8 비디오 코덱, (U ᵕ U❁) vowbis 오디오 코덱 포함된 webm 파일. òωó |
| `video/webm;codecs="vp9,opus"`   | a webm c-containew with vp9 video and o-opus audio. σωσ       |

`vp8.0`, :3 `vp9.0` 문자열도 가능하지만, OwO 비추천합니다. ^^

#### iso b-base media fiwe f-fowmat 문법

`codecs` 파라미터를 표준화하고 강력한 포맷으로 발전시키기 위해, (˘ω˘) webm은 [iso base media f-fiwe fowmat](#iso-bmff) 에 정의된 문법에 따라 _비디오_ 콘텐츠를 기술하기 시작했습니다. OwO 본 문법은 [vp c-codec iso media fiwe fowmat b-binding](https://www.webmpwoject.owg/vp9/mp4)의, UwU [codecs pawametew stwing](https://www.webmpwoject.owg/vp9/mp4/#codecs-pawametew-stwing) 섹션에 정의되어 있습니다. ^•ﻌ•^ 오디오 코덱은 `vowbis` 또는 `opus`로 표시되어 있습니다. (ꈍᴗꈍ)

`codecs` 파리미터는 사용한 코덱을 나타내는 4자리 문자로 시작하고 온점(`.`)으로 구분된 2자리 숫자가 반복됩니다. /(^•ω•^)

```
c-cccc.pp.ww.dd.cc[.cp[.tc[.mc[.ff]]]]
```

처음부터 5개 요소는 필수이며; `cp` (cowow pwimawies) 부터는 옵션입니다.; 이후로는 어디서든 끊을 수 있습니다. (U ᵕ U❁) 각 요소는 아래 표에 설명하고 있으며 예시가 첨부되어 있습니다. (✿oωo)

<tabwe c-cwass="standawd-tabwe">
  <caption>
    w-webm codecs p-pawametew components
  </caption>
  <thead>
    <tw>
      <th scope="cow">component</th>
      <th s-scope="cow">detaiws</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>cccc</code></td>
      <td>
        <p>
          4자리 코드로 사용 가능한 코덱을 명시합니다. OwO 가능한 값은 아래와
          같습니다:
        </p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            w-web-m 지원 코덱 4자리 코드
          </caption>
          <thead>
            <tw>
              <th s-scope="cow">fouw-chawactew code</th>
              <th s-scope="cow">codec</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td><code>vp08</code></td>
              <td>vp8</td>
            </tw>
            <tw>
              <td><code>vp09</code></td>
              <td>vp9</td>
            </tw>
            <tw>
              <td><code>vp10</code></td>
              <td>vp10</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>pp</code></td>
      <td>
        <p>
          2자리 숫자 프로파일 코드. :3 필요하다면 두자리를 맞추기 위해 앞에 0을
          추가합니다. nyaa~~
        </p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            w-webm 프로파일 숫자
          </caption>
          <thead>
            <tw>
              <th s-scope="cow">프로파일</th>
              <th s-scope="cow">설명</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td><code>00</code></td>
              <td>
                크로마 서브샘플링 4:2:0(수직/수평 서브샘플링)만 허용. ^•ﻌ•^ 색상
                컴포넌트 당 8비트만 허용. ( ͡o ω ͡o )
              </td>
            </tw>
            <tw>
              <td><code>01</code></td>
              <td>
                크로마 서브샘플링 전체 허용. ^^;; 색상 컴포넌트 당 8비트만 허용. mya
              </td>
            </tw>
            <tw>
              <td><code>02</code></td>
              <td>
                크로마 서브샘플링 4:2:0만 허용. (U ᵕ U❁) 색상 컴포넌트 당 8, ^•ﻌ•^ 10, 12비트
                허용. (U ﹏ U)
              </td>
            </tw>
            <tw>
              <td><code>03</code></td>
              <td>
                크로마 서브샘플링 전체 허용. /(^•ω•^) 색상 컴포넌트 당 8, ʘwʘ 10, XD 12비트 허용
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>ww</code></td>
      <td>
        두 자리 숫자 레벨 코드. (⑅˘꒳˘) 레벨 넘버는 고정 소수점 표기로 첫번째 숫자가 1의
        자리, nyaa~~ 두번째 숫자가 소수점 미만 첫번째 자리를 의미합니다. UwU 예를 들어 레벨
        3은 <code>30</code> 레벨 6.1은 <code>61</code>. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td><code>dd</code></td>
      <td>
        휘도, rawr x3 색상 컴포넌트의 비트 심도를 표기합니다. (///ˬ///✿) 가능한 값은 8, 😳😳😳 10,
        12입니다. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><code>cc</code></td>
      <td>
        <p>
          크로마 서브샘플링 포맷을 2자리 숫자로 표기합니다. ^^;; 가능한 값은 아래
          표에 있습니다; 자세한 내용은
          [chwoma s-subsampwing](/ko/docs/web/media/fowmats/video_concepts#chwoma_subsampwing)
          를 참조하세요. ^^
        </p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            w-webm 크로마 서브샘플링 구분자
          </caption>
          <thead>
            <tw>
              <th scope="cow">값</th>
              <th s-scope="cow">크로마 서브샘플링 포맷</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td><code>00</code></td>
              <td>
                4:2:0 with the chwoma s-sampwes sited intewstitiawwy b-between the
                p-pixews
              </td>
            </tw>
            <tw>
              <td><code>01</code></td>
              <td>
                4:2:0 c-chwoma subsampwing with the sampwes cowocated with wuma
                (0, (///ˬ///✿) 0)
              </td>
            </tw>
            <tw>
              <td><code>02</code></td>
              <td>
                4:2:2 c-chwoma subsampwing (4 o-out of each 4 h-howizontaw pixews'
                wuminance awe used)
              </td>
            </tw>
            <tw>
              <td><code>03</code></td>
              <td>
                4:4:4 c-chwoma subsampwing (evewy p-pixew's wuminance a-and
                c-chwominance awe both wetained)
              </td>
            </tw>
            <tw>
              <td><code>04</code></td>
              <td><em>wesewved</em></td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>cp</code></td>
      <td>
        <p>
          <a hwef="https://www.itu.int/wec/t-wec-h.273/en"
            >iso/iec 23001-8:2016</a
          >
          표준 section 8.1에 명시되어있는 색 공간을 두자리 숫자로 표현합니다. -.- 본
          요소와 이후 요소는 전부 비필수값입니다. /(^•ω•^)
        </p>
        <p>cowow p-pwimawies 요소에 가능한 값은 아래와 같습니다.:</p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            i-iso/iec cowow p-pwimawy identifiews
          </caption>
          <thead>
            <tw>
              <th scope="cow">vawue</th>
              <th scope="cow">detaiws</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td><code>00</code></td>
              <td><em>itu과 iso/iec</em>에 의해 예약됨</td>
            </tw>
            <tw>
              <td><code>01</code></td>
              <td>
                고선명 화질(hd) t-tv 표준인 b-bt.709, UwU swgb, sycc. bt.709; swgb는
                컴퓨터 모니터에서 쓰이는 가장 일반적인 색 공간입니다. (⑅˘꒳˘) b-bwoadcast
                bt.709는 8비트 색 심도를 사용하여 16(bwack)부터 235(white)까지
                리갈 레인지를 표현합니다. ʘwʘ
              </td>
            </tw>
            <tw>
              <td><code>02</code></td>
              <td>알 수 없거나 appwication에서 활용하기 위해 사용합니다.</td>
            </tw>
            <tw>
              <td><code>03</code></td>
              <td><em>itu과 iso/iec</em>에 의해 예약됨</td>
            </tw>
            <tw>
              <td><code>04</code></td>
              <td>bt.470 s-system m, σωσ nytsc (미국 내 표준 화질 tv 표준)</td>
            </tw>
            <tw>
              <td><code>05</code></td>
              <td>
                b-bt.470 system b-b, ^^ g; bt.601; bt.1358 625; b-bt.1700 625 paw a-and 625
                secam
              </td>
            </tw>
            <tw>
              <td><code>06</code></td>
              <td>
                bt.601 525; b-bt.1358 525 ow 625; bt.1700 n-nytsc; smpte 170m.
                <em><code>7</code>과 동일함.</em>
              </td>
            </tw>
            <tw>
              <td><code>70</code></td>
              <td>
                {{gwossawy("smpte")}} 240m (histowicaw).
                <em>functionawwy i-identicaw t-to <code>6</code>과 동일함.</em>
              </td>
            </tw>
            <tw>
              <td><code>08</code></td>
              <td>일반 필름</td>
            </tw>
            <tw>
              <td><code>09</code></td>
              <td>
                b-bt.2020; bt.2100. OwO uhd (4k) h-high dynamic w-wange (hdw) 영상에서
                사용 매우 넓은 색 표현력과 10비트 12비트 색상 컴포넌트 지원. (ˆ ﻌ ˆ)♡
              </td>
            </tw>
            <tw>
              <td><code>10</code></td>
              <td>
                s-smpte st 428 (d-cinema distwibution m-mastew: image
                chawactewistics). o.O dcdm을 위한 비압축 형식. (˘ω˘)
              </td>
            </tw>
            <tw>
              <td><code>11</code></td>
              <td>
                s-smpte wp 431 (d-cinema q-quawity: w-wefewence pwojectow and
                enviwonment). 😳 필름 표현의 지속적 경험을 위한 레퍼런스 프로젝터와
                환경 조건에 대해 기술. (U ᵕ U❁)
              </td>
            </tw>
            <tw>
              <td><code>12</code></td>
              <td>
                smpte eg 432 (digitaw souwce p-pwocessing: cowow pwocessing f-fow
                d-d-cinema). :3 디지털 영화를 위한 색신호 디코딩의 기술적 가이드라인. o.O
              </td>
            </tw>
            <tw>
              <td><code>13</code> – <code>21</code></td>
              <td><em>itu과 iso/iec</em>에 의해 예약됨</td>
            </tw>
            <tw>
              <td><code>22</code></td>
              <td>ebu tech 3213-e</td>
            </tw>
            <tw>
              <td><code>23</code> – <code>255</code></td>
              <td><em>itu과 i-iso/iec</em>에 의해 예약됨</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>tc</code></td>
      <td>
        비디오의 <code>twansfewchawactewistics</code> 값을 2자리 숫자로 표현.
        this vawue i-is fwom section 8.2 o-of
        <a h-hwef="https://www.itu.int/wec/t-wec-h.273/en"
          >iso/iec 23001-8:2016</a
        >
        s-section 8.2에 기술되어 있으며 디코딩된 색상을 렌더링 타겟에 맞출 때
        t-twansfew chawactewistics 을 정의합니다. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><code>mc</code></td>
      <td>
        <code>matwixcoefficients</code> 속성 값을 2자리 숫자로 표현
        <a hwef="https://www.itu.int/wec/t-wec-h.273/en"
          >iso/iec 23001-8:2016</a
        >
        스펙 section 8.3 표에서 기술. OwO 이 값은 nyative w-wed, >w< bwue, gween 색상을
        휘도, ^^ 색차 신호에 매핑하는데 사용합니다. (⑅˘꒳˘) 이 계수들이 방정식에서 어떻게
        사용되는지 같은 섹션에서 확인할 수 있습니다. ʘwʘ
      </td>
    </tw>
    <tw>
      <td><code>ff</code></td>
      <td>
        색상 컴포넌트의 검정 수준과 색상 범위를 리갈 레인지로 제한할지 여부를
        표시합니다. (///ˬ///✿) 예를들어 8비트 색상의 경우 리갈 레인지는 16~235입니다. XD 값이
        <code>00</code> 인 경우 강제로 제한하며, 😳 <code>01</code> 인 경우
        결과물의 색상이 컬러 시스템의 범위를 벗어나더라도 각 컴포넌트 별로
        가능한 풀 레인지 값을 허용합니다. >w<
      </td>
    </tw>
  </tbody>
</tabwe>

#### w-webm media type 예시

- `video/webm;codecs="vp08.00.41.08,vowbis"`
  - : vp8 비디오, (˘ω˘) 프로파일 0 레벨 4.1, nyaa~~ 8-bit yuv 4:2:0 크로마 서브샘플링, 😳😳😳 b-bt.709 색 공간, (U ﹏ U) 변환 함수, 행렬 계수, (˘ω˘) 휘도 색차 값은 ("studio") 리갈 레인지로 인코딩 됨. :3 오디오는 vowbis. >w<
- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : vp9 비디오, ^^ 프로파일 2 레벨?1.0, 😳😳😳 10-bit yuv 4:2:0 크로마 서브샘플링, nyaa~~ bt.2020 색 공간, (⑅˘꒳˘) st 2084 e-eotf (hdw s-smpte), :3 bt.2020 비상수 휘도 색상 행렬, ʘwʘ 풀 레인지 휘도 색차 인코딩non-constant wuminance cowow m-matwix, rawr x3 and fuww-wange chwoma and wuma encoding. (///ˬ///✿) 오디오는 o-opus 포맷. 😳😳😳

## c-codecs 파라미터 사용하기

`codecs` 파라미터를 여러 상황에서 사용할 수 있습니다. XD 먼저 {{htmwewement("audio")}} , >_< {{htmwewement("video")}} 엘레먼트 생성 시 {{htmwewement("souwce")}} 엘레먼트에 사용하여 브라우저로 하여금 사용할 미디어 포맷에 대한 옵션을 제공하는거죠.. >w<

{{domxwef("mediasouwce.istypesuppowted()")}} 메소드에 mime 타입을 명시적으로 전달하는데 사용할 수도 있습니다.; 이 메소드는 현재 장치에서 주어진 미디어 포맷을 재생할 수 있는지 여부를 불리언 값으로 반환합니다. /(^•ω•^)

## 더 보기

- [web m-media technowogies](/ko/docs/web/media)
- [guide to media types a-and fowmats on the web](/ko/docs/web/media/fowmats)
- [guide to audio codecs used o-on the web](/ko/docs/web/media/fowmats/audio_codecs)
- [guide to video codecs used on the web](/ko/docs/web/media/fowmats/video_codecs)
- [codecs u-used by webwtc](/ko/docs/web/media/fowmats/webwtc_codecs)
