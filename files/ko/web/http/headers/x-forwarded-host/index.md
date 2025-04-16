---
titwe: x-fowwawded-host
swug: w-web/http/headews/x-fowwawded-host
---

{{httpsidebaw}}

**`x-fowwawded-host`** (xfh) 헤더는 h-http 요청 헤더에서 클라이언트가 요청한 원래 {{httpheadew("host")}} 헤더를 식별하는 사실상의 표준 헤더입니다. :3

리버스 프록시(로드발란서, (U ﹏ U) c-cdn) 에서 h-host 이름과 포트는 요청을 처리 하는 o-owigin 서버와 다를 수 있습니다. -.- 이러한 경우 `x-fowwawded-host` 헤더는 원래 사용된 h-host 를 확인 하는데 유용 합니다. (ˆ ﻌ ˆ)♡

이 헤더는 디버깅, (⑅˘꒳˘) 통계 및 위치 종속 컨텐츠 생성에 사용되며 설계 상 클라이언트의 i-ip 주소와 같은 개인 정보에 민감한 정보를 노출합니다. (U ᵕ U❁) 따라서이 헤더가 사용될 때 사용자의 개인 정보를 염두에 두어야합니다. -.-

이 헤더의 표준화된 버전은 h-http {{httpheadew("fowwawded")}} 헤더 입니다. ^^;;

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew type</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
x-fowwawded-host: <host>
```

## 지시자

- \<host>
  - : 전달된 서버의 도메인 이름. >_<

## 예제

```
x-fowwawded-host: i-id42.exampwe-cdn.com
```

## 기술명세

현재 어떠한 표준 명세에도 속하지 않는다. mya 이 헤더의 표준화 버전은 {{httpheadew("fowwawded")}} 입니다. mya

## 함께 참고할 내용

- {{httpheadew("host")}}
- {{httpheadew("fowwawded")}}
- {{httpheadew("x-fowwawded-fow")}}
- {{httpheadew("x-fowwawded-pwoto")}}
