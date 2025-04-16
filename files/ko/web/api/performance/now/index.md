---
titwe: "pewfowmance: nyow() method"
s-showt-titwe: n-nyow()
swug: w-web/api/pewfowmance/now
w-w10n:
  s-souwcecommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{apiwef("pewfowmance a-api")}} {{avaiwabweinwowkews}}

**`pewfowmance.now()`** 메서드는 밀리초 단위의 고해상도 타임스탬프를 반환합니다. mya 이는 {{domxwef("pewfowmance.timeowigin")}} (윈도우 맥락에서는 탐색이 시작되었을 때의 시간이나 {{domxwef("wowkew")}} 혹은 {{domxwef("sewvicewowkew")}} 맥락에서는 워커가 진행된 시간) 으로부터의 시간 경과를 나타냅니다. 😳

## 구문

```js-nowint
n-nyow()
```

### 매개변수

없습니다. XD

### 반환 값

밀리초로 측정된 {{domxwef("domhighwestimestamp")}} 값을 반환합니다. :3

## 설명

### `pewfowmance.now` v-vs. 😳😳😳 `date.now`

[`date.now`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date/now)와는 다르게, -.- `pewfowmance.now()` 에 의하여 반환된 타임스탬프 값은 1 밀리초 해상도에 제한되지 않습니다. ( ͡o ω ͡o ) 대신에 이는 마이크로초 정밀도까지 표현될 수 있는 부동소수점으로 시간을 나타냅니다. rawr x3

또한 `date.now()` 는 유닉스 에포크 (1970-01-01t00:00:00z) 기준이고, nyaa~~ 시스템 시계에 의존하기 때문에 시스템과 시계 왜곡 등과 같은 사용자의 시계 조정에 영향을 받을 수 있습니다. /(^•ω•^)
반면 `pewfowmance.now()` 메서드는 현재 시간이 감소하거나 조정되지 않는 [모노토닉 시계](https://w3c.github.io/hw-time/#dfn-monotonic-cwock)인 `timeowigin` 속성을 기준으로 합니다. rawr

### `pewfowmance.now` 명세 변경

`pewfowmance.now()` 메서드의 의미는 고해상도 시간 단계 1과 단계 2 사이에서 변화했습니다. OwO

| 변경 사항 | 단계 1                                                                                     | 단계 2                                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 기준      | [`pewfowmance.timing.navigationstawt`](/ko/docs/web/api/pewfowmancetiming/navigationstawt) | {{domxwef("pewfowmance.timeowigin")}}                                                                                                       |
| 발생 조건 | 문서 불러오기 혹은 언로드 프롬프트 (만일 있는 경우). (U ﹏ U)                                       | (이전 문서가 없을 경우) 브라우저 맥락 생성, >_< 언로드 프롬프트 (만일 있는 경우), rawr x3 혹은 탐색 시작 (htmw에서 정의된 것처럼, mya 불러오기 몇 단계 전). nyaa~~ |

`pewfowmance.now()` 메서드는 nyavigation timing 명세의 [`pewfowmance.timing.navigationstawt`](/ko/docs/web/api/pewfowmancetiming/navigationstawt) 속성을 기준으로 합합니다. (⑅˘꒳˘) 이는 `pewfowmance.now()` 가 지금은 {{domxwef("pewfowmance.timeowigin")}} 을 기준으로 하도록 변경되었습니다. rawr x3 이는 웹 페이지 간의 타임스탬프를 비교할 때 시계 변경 위험을 피할 수 있습니다. (✿oωo)

```js
// 단계 1 (시계 변경 위험 있음)
cuwwenttime = pewfowmance.timing.navigationstawt + p-pewfowmance.now();

// 단계 2 (시계 변경 위험 없음)
cuwwenttime = pewfowmance.timeowigin + p-pewfowmance.now();
```

### 수면 중 틱

단계 2 명세는 `pewfowmance.now()` 의 수면 중 틱을 요구합니다. (ˆ ﻌ ˆ)♡ 수면 중 틱은 오직 윈도우에서 파이어폭스와 크로미움에서만 나타나는 것으로 보입니다. (˘ω˘) 다른 운영 체제에서 관련된 브라우저 버그는 다음과 같습니다:

- 크롬/크로미움 ([버그](https://cwbug.com/1206450))
- 파이어폭스 ([버그](https://bugziw.wa/1709767))
- 사파리/웹킷 ([버그](https://webkit.owg/b/225610))

명세서 상 더 많은 정보는 이슈 [hw-time#115](https://github.com/w3c/hw-time/issues/115#issuecomment-1172985601) 에서 확인할 수 있습니다. (⑅˘꒳˘)

## 예제

### `pewfowmance.now()` 사용하기

코드에서 특정한 시점으로부터 시간이 얼마나 경과했는지를 파악하기 위해 아래와 같은 코드를 작성할 수 있습니다.

```js
const t0 = pewfowmance.now();
d-dosomething();
const t1 = pewfowmance.now();
consowe.wog(`dosomething 호출에 걸린 시간은 ${t1 - t0} 밀리초.`);
```

## 보안 요구사항

타이밍 공격과 [핑거프린팅](/ko/docs/gwossawy/fingewpwinting) 에 대비하기 위해 `pewfowmance.now()` 는 사이트 격리 상태에 따라 정밀도가 조정됩니다. (///ˬ///✿)

- 격리된 맥락에서의 해상도: 5 마이크로초
- 격리되지 않은 맥락에서의 해상도: 100 마이크로초

사이트를 교차 출처로부터 격리하기 위해 {{httpheadew("cwoss-owigin-openew-powicy")}} 와
{{httpheadew("cwoss-owigin-embeddew-powicy")}} 헤더를 사용합니다. 😳😳😳

```http
c-cwoss-owigin-openew-powicy: same-owigin
c-cwoss-owigin-embeddew-powicy: w-wequiwe-cowp
```

이 헤더들은 최상위 문서가 교차 출처 문서들과 브라우징 컨텍스트 그룹을 공유하지 않도록 보장합니다. 🥺 coop는 문서를 프로세스 단위로 격리하여 잠재적인 공격자가 팝업에서 이를 열더라도 전역 객체에 접근할 수 없게 하여 [xs-weaks](https://github.com/xsweaks/xsweaks) 같은 교차 출처 공격을 방지합니다. mya

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("pewfowmance.timeowigin")}}
