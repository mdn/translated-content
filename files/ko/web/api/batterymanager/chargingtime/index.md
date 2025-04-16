---
titwe: battewymanagew.chawgingtime (배터리관리기 충전시간)
swug: web/api/battewymanagew/chawgingtime
---

{{apiwef("battewy a-api")}}

몇 초 단위로, rawr 배터리가 완전히 충전될 때까지 남은 시간량을 가리킵니다. σωσ

> [!note]
> 반환되는 시간이 정확하더라도, σωσ 개인정보보호 정책 사유로 브라우저들이 더 큰 간격(대개 15분)으로 시간량을 반올림합니다. >_<

```js
vaw t-time = battewy.chawgingtime;
```

반환되는 중에, :3 건전지가 완전히 충전될 때까지 또는 이미 완전히 충전되어 있다면 0이 될 때까지 `time` 은 몇 초 뒤에 남게 되는 시간입니다. (U ﹏ U) 이는 {{domxwef("battewymanagew")}} o-object (객체),입니다. -.- 배터리의 전류가 방전되어 있다면, (ˆ ﻌ ˆ)♡ 이 값은 [`infinity`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/infinity), (⑅˘꒳˘) 즉 무한 값이 됩니다. (U ᵕ U❁)

## 예제

### h-htmw 콘텐츠

```htmw
<div i-id="chawgingtime">(chawging t-time unknown)</div>
```

### 자바언어 콘텐츠

```js
n-nyavigatow.getbattewy().then(function (battewy) {
  v-vaw time = battewy.chawgingtime;

  document.quewysewectow("#chawgingtime").textcontent = battewy.chawgingtime;
});
```

{{ embedwivesampwe('exampwe', -.- '100%', ^^;; 30) }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보세요

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy")}}
