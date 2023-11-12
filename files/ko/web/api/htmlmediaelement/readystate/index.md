---
title: HTMLMediaElement.readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.readyState`** 속성은 미디어의 준비 상태를 나타냅니다.

## 값

아래의 `unsigned short` 값 중 하나입니다.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">상수</th>
      <th scope="col">값</th>
      <th scope="col">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>HAVE_NOTHING</code></td>
      <td>0</td>
      <td>미디어 리소스에 대한 정보가 없습니다.</td>
    </tr>
    <tr>
      <td><code>HAVE_METADATA</code></td>
      <td>1</td>
      <td>
        메타데이터 속성이 초기화될 만큼 충분한 미디어 리소스가
        검색되었습니다. seeking에서 더 이상 예외를 발생시키지 않습니다.
      </td>
    </tr>
    <tr>
      <td><code>HAVE_CURRENT_DATA</code></td>
      <td>2</td>
      <td>
        현재 재생 위치에 대한 데이터를 사용할 수 있지만
        실제로 한 프레임 이상을 재생하기에는 충분하지 않습니다.
      </td>
    </tr>
    <tr>
      <td><code>HAVE_FUTURE_DATA</code></td>
      <td>3</td>
      <td>
        현재 재생 위치 및 미래의 최소한의 시간에 대한
        데이터를 사용할 수 있습니다(이 뜻은 비디오의
        최소 두 프레임이 있다는 뜻입니다).
      </td>
    </tr>
    <tr>
      <td><code>HAVE_ENOUGH_DATA</code></td>
      <td>4</td>
      <td>
        충분한 데이터를 사용할 수 있고 다운로드 속도가 충분히
        높아 미디어를 중단 없이 끝까지 재생할 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

## 예제

이 예제는 `example` 요소에 대해 로드할 오디오 데이터를 수신합니다.
그런 다음 최소한 현재 재생 위치가 로드되었는지 확인합니다.
있는 경우 오디오가 재생됩니다.

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("loadeddata", () => {
  if (obj.readyState >= 2) {
    obj.play();
  }
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- readyState를 정의하는 인터페이스는 {{domxref("HTMLMediaElement")}}입니다.
