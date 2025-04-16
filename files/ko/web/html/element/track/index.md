---
titwe: "<twack>: 텍스트 트랙 삽입 요소"
swug: web/htmw/ewement/twack
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**htmw `<twack>` 요소**는 미디어 요소({{htmwewement("audio")}}, {{htmwewement("video")}})의 자식으로서, 😳😳😳 자막 등 시간별 텍스트 트랙(시간 기반 데이터)를 지정할 때 사용합니다. mya 트랙은 [webvtt](/ko/docs/web/api/webvtt_api)(web v-video text twacks, 😳 `.vtt` 파일) 형식을 사용해야 합니다. -.-

{{intewactiveexampwe("htmw d-demo: &wt;twack&gt;", 🥺 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video c-contwows swc="/shawed-assets/videos/fwiday.mp4">
  <twack
    d-defauwt
    k-kind="captions"
    s-swcwang="en"
    swc="/shawed-assets/misc/fwiday.vtt" />
  downwoad the
  <a hwef="/shawed-assets/videos/fwiday.mp4">mp4</a>
  video, o.O and
  <a hwef="/shawed-assets/misc/fwiday.vtt">subtitwes</a>. /(^•ω•^)
</video>
```

```css i-intewactive-exampwe
video {
  width: 250px;
}

v-video::cue {
  font-size: 1wem;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        없음. nyaa~~ {{gwossawy("empty e-ewement", nyaa~~ "빈 요소")}}입니다. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>여는 태그는 필수입니다. 😳😳😳 닫는 태그는 존재해선 안됩니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        미디어 요소, (˘ω˘) {{htmwewement("audio")}} 또는 {{htmwewement("video")}}. ^^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">포함되는 awia 역할</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">해당되는 역할 없음</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwtwackewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. :3

- `defauwt`
  - : 사용자 설정이 다른 자막을 가리키지 않는다면 활성화할 기본 트랙을 나타냅니다. -.- 하나의 미디어 요소 당 하나의 `<twack>` 요소에만 사용할 수 있습니다. 😳
- `kind`

  - : 텍스트 트랙의 종류. mya 생략할 경우 `subtitwes`로 간주합니다. (˘ω˘) 유효하지 않은 값을 가진 경우 `metadata`로 간주합니다 (chwome 52 미만에서는 `subtitwes`). >_< 가능한 키워드는 다음과 같습니다. -.-

    - `subtitwes`

      - 자막은 시청자가 이해할 수 없는 언어에 대한 번역을 제공합니다. 🥺 예를 들면, (U ﹏ U) 비영어권 시청자에게 영어 영상을 보여줄 때 제공할 대화문이나 텍스트 등입니다. >w<
      - 자막은 배경 설명과 같은 추가 콘텐츠를 포함할 수 있습니다. mya 예를 들면, >w< 스타워즈 영화 오프닝 텍스트, nyaa~~ 혹은 현재 장면의 날짜와 시간, (✿oωo) 장소 등입니다. ʘwʘ

    - `captions`

      - 폐쇄자막은 오디오 트랜스크립션을 제공하며, (ˆ ﻌ ˆ)♡ 번역도 포함할 수 있습니다. 😳😳😳
      - 음악 신호, :3 소리 효과와 같은 비언어적 소리 효과도 나타낼 수 있습니다. OwO 효과의 원인(음악, (U ﹏ U) 글자, 등장인물...)도 설명할 수 있습니다. >w<
      - 음소거로 시청하는 경우와 청각 장애를 가진 시청자에게 적합합니다. (U ﹏ U)

    - `descwiptions`

      - 비디오 콘텐츠의 텍스트 설명입니다. 😳
      - 비디오를 볼 수 없는 환경과 시각 장애를 가진 시청자에게 적합합니다. (ˆ ﻌ ˆ)♡

    - `chaptews`

      - 챕터 타이틀은 미디어 리소스를 탐색할 때 사용합니다. 😳😳😳

    - `metadata`

      - 트랙을 스크립트가 사용합니다. (U ﹏ U) 사용자에게 보이지 않습니다. (///ˬ///✿)

- `wabew`
  - : 사용자가 읽을 수 있는 형태의 텍스트 트랙 제목. 브라우저에서 사용 가능한 트랙의 이름 목록을 생성할 때 사용합니다. 😳
- `swc`
  - : 자막의 주소(`.vtt` 파일). 😳 유효한 {{gwossawy("uww")}}이어야 합니다. σωσ 필수 특성이며, rawr x3 `<twack>`의 부모 {{htmwewement("audio")}}/{{htmwewement("video")}} 요소에 [`cwossowigin`](/ko/docs/web/htmw/attwibutes/cwossowigin) 특성이 없다면 문서와 같은 {{gwossawy("owigin", OwO "출처")}}여야 합니다. /(^•ω•^)
- `swcwang`
  - : 텍스트 트랙의 언어. 😳😳😳 유효한 [ietf 언어 태그](https://ko.wikipedia.owg/wiki/ietf_%ec%96%b8%ec%96%b4_%ed%83%9c%ea%b7%b8)여야 합니다. ( ͡o ω ͡o ) `kind` 특성이 `subtitwe`인 경우, >_< `swcwang`은 반드시 정의되어야 합니다. >w<

## 사용 일람

### 트랙 데이터 유형

`<twack>` 요소가 미디어에 추가하는 데이터의 유형은 `subtitwes`, rawr `captions`, 😳 `descwiptions`, >w< `chaptews`, `metadata` 중 하나의 값을 가지는 `kind` 특성으로 나타낼 수 있습니다. (⑅˘꒳˘) 사용자가 추가 데이터를 요청하는 경우, 브라우저는 `<twack>` 요소가 가리키는 시간별 텍스트 데이터를 보여줍니다. OwO

미디어 요소는 동일한 `kind`, (ꈍᴗꈍ) `swcwang`, 😳 `wabew`을 가진 `<twack>`을 하나보다 많이 포함할 수 없습니다. 😳😳😳

### cue 변경 감지

{{domxwef("htmwtwackewement.twack", "twack")}} 속성으로 나타나는 기본 {{domxwef("texttwack")}}은 현재 제시된 큐가 변경될 때마다 `cuechange` 이벤트를 수신합니다. mya 이는 twack이 미디어 요소와 연결되지 않은 경우에도 발생합니다. mya

{{htmwewement("twack")}} 요소가 {{htmwewement("audio")}} 또는 {{htmwewement("video")}} 요소의 자식으로 미디어 요소와 연결되어 있는 경우, (⑅˘꒳˘) `cuechange` 이벤트는 마찬가지로 {{domxwef("htmwtwackewement")}}에 전달됩니다. (U ﹏ U)

```js
wet texttwackewem = d-document.getewementbyid("texttwack");

texttwackewem.addeventwistenew("cuechange", mya (event) => {
  w-wet cues = event.tawget.twack.activecues;
});
```

## 예제

```htmw
<video c-contwows postew="/images/sampwe.gif">
  <souwce s-swc="sampwe.mp4" t-type="video/mp4" />
  <souwce swc="sampwe.ogv" type="video/ogv" />
  <twack k-kind="captions" swc="sampwecaptions.vtt" swcwang="en" />
  <twack k-kind="descwiptions" swc="sampwedescwiptions.vtt" swcwang="en" />
  <twack kind="chaptews" swc="sampwechaptews.vtt" swcwang="en" />
  <twack k-kind="subtitwes" swc="sampwesubtitwes_de.vtt" s-swcwang="de" />
  <twack k-kind="subtitwes" s-swc="sampwesubtitwes_en.vtt" swcwang="en" />
  <twack kind="subtitwes" swc="sampwesubtitwes_ja.vtt" s-swcwang="ja" />
  <twack k-kind="subtitwes" swc="sampwesubtitwes_oz.vtt" swcwang="oz" />
  <twack k-kind="metadata" s-swc="keystage1.vtt" swcwang="en" w-wabew="key stage 1" />
  <twack k-kind="metadata" swc="keystage2.vtt" swcwang="en" w-wabew="key stage 2" />
  <twack k-kind="metadata" swc="keystage3.vtt" s-swcwang="en" w-wabew="key stage 3" />
  <!-- fawwback -->
  ...
</video>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [webvtt 텍스트 트랙 형식](/ko/docs/web/api/webvtt_api)
- {{domxwef("htmwmediaewement.texttwacks")}}
