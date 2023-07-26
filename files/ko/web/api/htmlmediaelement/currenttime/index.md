---
title: HTMLMediaElement.currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 80d4cfb4515b339111e175dbeb8d2b91fd3ee1a0
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 인터페이스의 **`currentTime`** 속성은
현재 재생 시간을 초 단위로 지정합니다.

`currentTime`의 값을 변경하면 미디어를 새로운 시간으로 찾습니다.

## 값

현재 재생 시간을 초 단위로 나타내는 배정밀도 부동 소수점 값입니다.

미디어가 아직 재생되지 않은 경우 `currentTime` 값은 {{domxref("HTMLMediaElement.play", "play()")}}
메서드가 호출된 후 재생이 시작되는 미디어 내의 시간 위치를 나타냅니다.

`currentTime`을 새 값으로 설정하면 미디어를 사용할 수 있는 경우
지정된 시간으로 미디어를 찾습니다.

라이브로 스트리밍되는 미디어와 같이 지속 시간(duration)이 없는 미디어의 경우
브라우저가 미디어 버퍼에서 만료된 미디어의 일부를 가져오지 못할 수 있습니다.
또한 타임라인이 0초에서 시작하지 않는 미디어는 해당 타임라인의 가장 빠른 시간
이전으로 검색할 수 없습니다.

미디어의 길이(초)는 {{domxref("HTMLMediaElement.duration", "duration")}} 속성을
사용하여 결정할 수 있습니다.

## 예제

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## 사용 일람

### 시간 정밀도 감소

타이밍 공격 및 [핑거프린팅](/ko/docs/Glossary/Fingerprinting)으로부터 보호하기 위해 브라우저는 `currentTime`에서
반환된 값을 반올림하거나 조정할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- currentTime을 정의하는 인터페이스는 {{domxref("HTMLMediaElement")}}입니다
- 시간을 설정하는 또 다른 방법은 {{domxref("HTMLMediaElement.fastSeek()")}}를 참고하세요
- 미디어 재생 시간(초)는 {{domxref("HTMLMediaElement.duration")}}를 참고하세요
