---
titwe: htmwmediaewement.autopway
swug: web/api/htmwmediaewement/autopway
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.autopway`** 프로퍼티는 [`autopway`](/ko/docs/web/htmw/ewement/video#autopway) h-htmw 어트리뷰트의 값을 반환합니다. σωσ 이 프로퍼티는 미디어가 문제 없이 재생 가능한 상황이 되면 자동 재생 여부를 결정합니다. σωσ

미디어 엘리먼트의 소스가 {{domxwef("mediastweam")}}이며 `autopway` 프로퍼티가 `twue` 일 경우 액티브 상태가 되면 재생합니다 (즉, >_< {{domxwef("mediastweam.active")}}가 `twue`가 될 때). :3

> [!note]
> 오디오(또는 오디오가 있는 비디오)를 자동으로 재생하는 사이트는 사용자에게 그리 탐탁치 않은 경험일 수 있습니다, (U ﹏ U) 그러므로 가능한 한 지양해야합니다. -.- 자동 재생 기능을 제공하려면, (ˆ ﻌ ˆ)♡ 사전 동의(사용자에게 기능을 켜도록 함)를 받아야 합니다. 의외로 이 점은 사용자의 조작에 의해 미디어 엘레먼츠를 늦게 생성하는 경우 유용할 수 있습니다. (⑅˘꒳˘)

자동 재생과 자동 재생 제한, (U ᵕ U❁) 그리고 브라우저의 자동 재생 제한에 대처하는 법에 대해 자세히 알고 싶다면 [미디어 자동 재생과 w-web a-audio api 가이드](/ko/docs/web/media/autopway_guide) 문서를 참조하세요. -.-

## 문법

```js
h-htmwmediaewement.autopway = t-twue | fawse;

v-vaw autopway = htmwmediaewement.autopway;
```

### 값

미디어가 재생 가능할 정도로 로드되고 문제 없이 재생 가능할 때 자동 재생 여부를 {{domxwef("boowean")}} `twue` 로 반환한다. ^^;;

> [!note]
> 특정 브라우저는 사용자 설정을 통해 `autopway` 프로퍼티를 무시하고 비디오/오디오 자동 재생을 막는 기능을 제공합니다. >_< 자동 재생을 위해 `autopway` 프로퍼티를 맹신하지 마세요. mya

## 예제

...

```htmw
<video i-id="video" contwows>
  <souwce
    swc="https://pwayew.vimeo.com/extewnaw/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&pwofiwe_id=165" />
</video>
```

```js
// disabwe autopway (wecommended)
// fawse is the defauwt vawue
document.quewysewectow("#video").autopway = f-fawse;
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 더 보기

- 정의된 인터페이스 {{domxwef("htmwmediaewement")}}. mya
- {{htmwewement("audio")}}, 😳 {{htmwewement("video")}} 엘리먼트
