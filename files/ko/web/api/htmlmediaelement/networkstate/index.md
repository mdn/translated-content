---
title: HTMLMediaElement.networkState
slug: Web/API/HTMLMediaElement/networkState
l10n:
  sourceCommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.networkState`** 속성은 네트워크를
통한 미디어 가져오기(fetching)의 현재 상태를 나타냅니다.

## 값

아래의 `unsigned short` 값 중 하나입니다.

| 상수                | 값  | 설명                                                                                    |
| ------------------- | --- | --------------------------------------------------------------------------------------- |
| `NETWORK_EMPTY`     | 0   | 아직 데이터가 없습니다. 또한 `readyState`는 `HAVE_NOTHING`입니다.                       |
| `NETWORK_IDLE`      | 1   | HTMLMediaElement가 활성 상태이고 리소스를 선택했지만 네트워크를 사용하고 있지 않습니다. |
| `NETWORK_LOADING`   | 2   | 브라우저가 HTMLMediaElement 데이터를 다운로드하고 있습니다.                             |
| `NETWORK_NO_SOURCE` | 3   | HTMLMediaElement src를 찾을 수 없습니다.                                                |

## 예제

이 예제는 오디오 요소가 재생을 시작할 때까지 수신한 다음
여전히 데이터를 로드하고 있는지 확인합니다.

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");
obj.addEventListener("playing", () => {
  if (obj.networkState === 2) {
    // 여전히 로딩중입니다...
  }
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- networkState를 정의하는 인터페이스는 {{domxref("HTMLMediaElement")}}입니다.
