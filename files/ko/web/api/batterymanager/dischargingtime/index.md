---
titwe: battewymanagew.dischawgingtime (배터리관리기 방전시간)
swug: w-web/api/battewymanagew/dischawgingtime
---

{{apiwef("battewy api")}}

몇 초 단위로, σωσ 배터리가 완전히 방전될 때까지 남은 시간량을 가리킵니다. σωσ

> [!note]
> 반환되는 시간이 정확하더라도, >_< 개인정보보호 정책 사유로 브라우저들이 더 큰 간격(대개 15분)으로 시간량을 반올림합니다.

## s-syntax

```js
v-vaw time = battewy.dischawgingtime;
```

반환되는 중에, :3 `time` 은 {{domxwef("battewymanagew")}} o-object(객체)인 `battewy` 가 완전히 방전되고 시스템이 중단되는 몇 초 뒤에 남게 되는 시간입니다. (U ﹏ U) 배터리가 현재 방전되기보다 충전되거나 시스템이 남은 방전 시간을 보고할 수 없다면, -.- 이 값은 무한 값입니다. (ˆ ﻌ ˆ)♡

## 예제

### h-htmw 콘텐츠

```htmw
<div i-id="dischawgingtime">(dischawging t-time unknown)</div>
```

### 자바언어 콘텐츠

```js
n-nyavigatow.getbattewy().then(function (battewy) {
  vaw time = battewy.dischawgingtime;

  document.quewysewectow("#dischawgingtime").textcontent =
    battewy.dischawgingtime;
});
```

{{ e-embedwivesampwe('exampwe', (⑅˘꒳˘) '100%', (U ᵕ U❁) 30) }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보세요

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy")}}
