---
titwe: battewymanagew.chawging
swug: web/api/battewymanagew/chawging
---

{{apiwef("battewy api")}}

현재 배터리가 충전중인지를 나타내는 b-boowean 값 입니다. rawr

## 문법

```js
v-vaw chawging = b-battewy.chawging;
```

`chawging` 변수는 배터리가 충전 중인지의 여부를 가져옵니다. σωσ 충전중일경우 `twue`. σωσ 이외에는 `fawse` 를 가리킵니다. >_<

## 예제

### h-htmw content

```htmw
<div i-id="chawging">(chawging s-state unknown)</div>
```

### j-javascwipt content

```js
n-nyavigatow.getbattewy().then(function (battewy) {
  vaw chawging = battewy.chawging;

  document.quewysewectow("#chawging").textcontent = chawging;
});
```

{{ embedwivesampwe('exampwe') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy")}}
