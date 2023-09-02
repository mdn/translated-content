---
title: "<track>: 텍스트 트랙 삽입 요소"
slug: Web/HTML/Element/track
---

{{HTMLSidebar}}

**HTML `<track>` 요소**는 미디어 요소({{HTMLElement("audio")}}, {{HTMLElement("video")}})의 자식으로서, 자막 등 시간별 텍스트 트랙(시간 기반 데이터)를 지정할 때 사용합니다. 트랙은 [WebVTT](/ko/docs/Web/API/WebVTT_API)(Web Video Text Tracks, `.vtt` 파일) 또는 [Timed Text Markup Language(TTML)](https://w3c.github.io/ttml2/index.html)형식을 사용해야 합니다.

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        없음. {{glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        미디어 요소. 다른
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >
        자식보다 앞에 위치해야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("default")}}
  - : 사용자 설정이 다른 자막을 가리키지 않는다면 활성화할 기본 트랙을 나타냅니다. 하나의 미디어 요소 당 하나의 `<track>` 요소에만 사용할 수 있습니다.
- {{htmlattrdef("kind")}}

  - : 텍스트 트랙의 종류. 생략할 경우 `subtitles`로 간주합니다. 유효하지 않은 값을 가진 경우 `metadata`로 간주합니다. (Chrome 52 미만에서는 `subtitles`) 가능한 키워드는 다음과 같습니다.

    - `subtitles`

      - 자막은 시청자가 이해할 수 없는 언어에 대한 번역을 제공합니다. 예를 들면, 비영어권 시청자에게 영어 영상을 보여줄 때 제공할 대화문이나 텍스트 등입니다.
      - 자막은 배경 설명과 같은 추가 콘텐츠를 포함할 수 있습니다. 예를 들면, 스타워즈 영화 오프닝 텍스트, 혹은 현재 장면의 날짜와 시간, 장소 등입니다.

    - `captions`

      - 폐쇄자막은 오디오 트랜스크립션을 제공하며, 번역도 포함할 수 있습니다.
      - 음악 신호, 소리 효과와 같은 비언어적 소리 효과도 나타낼 수 있습니다. 효과의 원인(음악, 글자, 등장인물...)도 설명할 수 있습니다.
      - 음소거로 시청하는 경우와 청각 장애를 가진 시청자에게 적합합니다.

    - `descriptions`

      - 비디오 콘텐츠의 텍스트 설명입니다.
      - 비디오를 볼 수 없는 환경과 시각 장애를 가진 시청자에게 적합합니다.

    - `chapters`

      - 챕터 타이틀은 미디어 리소스를 탐색할 때 사용합니다.

    - `metadata`

      - 트랙을 스크립트가 사용합니다. 사용자에게 보이지 않습니다.

- {{htmlattrdef("label")}}
  - : 사용자가 읽을 수 있는 형태의 텍스트 트랙 제목. 브라우저에서 사용 가능한 트랙의 이름 목록을 생성할 때 사용합니다.
- {{htmlattrdef("src")}}
  - : 자막의 주소(`.vtt` 파일). 유효한 {{glossary("URL")}}이어야 합니다. 필수 특성이며, `<track>`의 부모 {{htmlelement("audio")}}/{{htmlelement("video")}} 요소에 [`crossorigin`](/ko/docs/Web/HTML/CORS_settings_attributes) 특성이 없다면 문서와 같은 {{glossary("origin", "출처")}}여야 합니다.
- {{htmlattrdef("srclang")}}
  - : 텍스트 트랙의 언어. 유효한 [IETF 언어 태그](https://ko.wikipedia.org/wiki/IETF_%EC%96%B8%EC%96%B4_%ED%83%9C%EA%B7%B8)여야 합니다. `kind` 특성이 `subtitle`인 경우 필수 항목입니다.

## 사용 일람

### 트랙 데이터 유형

`<track>` 요소가 미디어에 추가하는 데이터의 유형은 `kind` 특성으로 나타낼 수 있습니다. 사용자가 추가 데이터를 요청하는 경우, 브라우저는 `<track>` 요소가 가리키는 시간별 텍스트 데이터를 보여줍니다.

미디어 요소는 동일한 `kind`, `srclang`, `label`을 가진 `<track>`을 하나보다 많이 포함할 수 없습니다.

### Detecting cue changes

The underlying {{domxref("TextTrack")}}, indicated by the {{domxref("HTMLTrackElement.track", "track")}} property, receives a `cuechange` event every time the currently-presented cue is changed. This happens even if the track isn't associated with a media element.

If the track _is_ associated with a media element, using the {{HTMLElement("track")}} element as a child of the {{HTMLElement("audio")}} or {{HTMLElement("video")}} element, the `cuechange` event is also sent to the {{domxref("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

## 예제

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
  <!-- Fallback -->
  ...
</video>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [WebVTT 텍스트 트랙 형식](/ko/docs/HTML/WebVTT)
- {{domxref("HTMLMediaElement.textTracks")}}
