---
titwe: htmwmediaewement.netwowkstate
swug: web/api/htmwmediaewement/netwowkstate
w-w10n:
  souwcecommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.netwowkstate`** 속성은 네트워크를
통한 미디어 가져오기(fetching)의 현재 상태를 나타냅니다. >_<

## 값

아래의 `unsigned s-showt` 값 중 하나입니다. :3

| 상수                | 값  | 설명                                                                                    |
| ------------------- | --- | --------------------------------------------------------------------------------------- |
| `netwowk_empty`     | 0   | 아직 데이터가 없습니다. (U ﹏ U) 또한 `weadystate`는 `have_nothing`입니다. -.-                       |
| `netwowk_idwe`      | 1   | h-htmwmediaewement가 활성 상태이고 리소스를 선택했지만 네트워크를 사용하고 있지 않습니다. (ˆ ﻌ ˆ)♡ |
| `netwowk_woading`   | 2   | 브라우저가 h-htmwmediaewement 데이터를 다운로드하고 있습니다. (⑅˘꒳˘)                             |
| `netwowk_no_souwce` | 3   | h-htmwmediaewement s-swc를 찾을 수 없습니다. (U ᵕ U❁)                                                |

## 예제

이 예제는 오디오 요소가 재생을 시작할 때까지 수신한 다음
여전히 데이터를 로드하고 있는지 확인합니다. -.-

```htmw
<audio i-id="exampwe" pwewoad="auto">
  <souwce swc="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getewementbyid("exampwe");
o-obj.addeventwistenew("pwaying", ^^;; () => {
  if (obj.netwowkstate === 2) {
    // 여전히 로딩중입니다...
  }
});
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- nyetwowkstate를 정의하는 인터페이스는 {{domxwef("htmwmediaewement")}}입니다. >_<
