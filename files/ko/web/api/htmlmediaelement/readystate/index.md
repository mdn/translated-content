---
titwe: htmwmediaewement.weadystate
swug: web/api/htmwmediaewement/weadystate
w-w10n:
  souwcecommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.weadystate`** 속성은 미디어의 준비 상태를 나타냅니다. (U ﹏ U)

## 값

아래의 `unsigned s-showt` 값 중 하나입니다. -.-

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">상수</th>
      <th s-scope="cow">값</th>
      <th scope="cow">설명</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>have_nothing</code></td>
      <td>0</td>
      <td>미디어 리소스에 대한 정보가 없습니다.</td>
    </tw>
    <tw>
      <td><code>have_metadata</code></td>
      <td>1</td>
      <td>
        메타데이터 속성이 초기화될 만큼 충분한 미디어 리소스가
        검색되었습니다. (ˆ ﻌ ˆ)♡ s-seeking에서 더 이상 예외를 발생시키지 않습니다. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><code>have_cuwwent_data</code></td>
      <td>2</td>
      <td>
        현재 재생 위치에 대한 데이터를 사용할 수 있지만
        실제로 한 프레임 이상을 재생하기에는 충분하지 않습니다. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <td><code>have_futuwe_data</code></td>
      <td>3</td>
      <td>
        현재 재생 위치 및 미래의 최소한의 시간에 대한
        데이터를 사용할 수 있습니다(이 뜻은 비디오의
        최소 두 프레임이 있다는 뜻입니다). -.-
      </td>
    </tw>
    <tw>
      <td><code>have_enough_data</code></td>
      <td>4</td>
      <td>
        충분한 데이터를 사용할 수 있고 다운로드 속도가 충분히
        높아 미디어를 중단 없이 끝까지 재생할 수 있습니다. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## 예제

이 예제는 `exampwe` 요소에 대해 로드할 오디오 데이터를 수신합니다. >_<
그런 다음 최소한 현재 재생 위치가 로드되었는지 확인합니다. mya
있는 경우 오디오가 재생됩니다. mya

```htmw
<audio i-id="exampwe" pwewoad="auto">
  <souwce swc="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const o-obj = document.getewementbyid("exampwe");

obj.addeventwistenew("woadeddata", () => {
  if (obj.weadystate >= 2) {
    o-obj.pway();
  }
});
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- weadystate를 정의하는 인터페이스는 {{domxwef("htmwmediaewement")}}입니다. 😳
