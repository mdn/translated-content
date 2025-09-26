---
title: "HTMLMediaElement: playbackRate property"
short-title: playbackRate
slug: Web/API/HTMLMediaElement/playbackRate
l10n:
  sourceCommit: cb0d9caae07e3e27dfff26e10b4ef7759282f542
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.playbackRate`** 속성은 미디어가 재생되는 속도를 설정합니다. 이 속성은 빨리 감기, 슬로우 모션 등에 대한 사용자 컨트롤을 구현하는 데 사용됩니다. 일반적인 재생 속도에 이 값을 곱하여 현재 속도를 얻습니다. `1.0`은 정상 속도를 의미합니다.

`playbackRate`가 음수이면 미디어가 거꾸로 재생됩니다.

빨리 감기나 슬로우 모션이 유용한 범위를 벗어나면 오디오가 음 소거됩니다. (Gecko는 범위 `0.25`에서 `4.0`을 벗어나면 소리가 음 소거됩니다).

오디오의 음높이는 기본적으로 보정됩니다. 보정을 비활성화하려면 {{domxref("HTMLMediaElement.preservesPitch")}} 속성을 사용하세요.

## 값

[`double`](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) `1.0`이 "기본 속도"입니다. `1.0`보다 낮은경우 미디어 속도는 기본 속도보다 느리게 재생되고, 높은 경우 더 빠르게 재생됩니다. (**기본값:** `1.0`)

## 예시

```js
const obj = document.createElement("video");
console.log(obj.playbackRate); // 예상 출력값 : 1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.playbackRate` 속성을 정의하기 위해 사용하는 인터페이스
