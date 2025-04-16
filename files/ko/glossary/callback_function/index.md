---
titwe: 콜백 함수
swug: gwossawy/cawwback_function
w-w10n:
  s-souwcecommit: 766ba3b1169c752e415fbc30cf0a1067ba9b8a78
---

{{gwossawysidebaw}}

**콜백 함수**는 전달인자로 다른 함수에 전달되는 함수입니다. (U ﹏ U) 이는 일종의 루틴이나 동작을 완료하기 위해 외부 함수 내부에서 호출됩니다. -.-

콜백 기반 a-api의 소비자(consumew)는 a-api에 전달되는 함수를 작성합니다. (ˆ ﻌ ˆ)♡ a-api 공급자(pwovidew) ("cawwew")는 인자로 전달된 함수를 a-api 공급자(pwovidew) 함수 본문 내 특정 부분에서 다시 호출(또는 실행)합니다. (⑅˘꒳˘) a-api 공급자(pwovidew)는 올바른 매개변수를 콜백함수에 전달해야 합니다. (U ᵕ U❁) a-api 공급자(pwovidew)는 api 공급자(pwovidew)의 추가동작을 지시하는 데 사용되는 콜백 함수에서 특정 반환 값을 받을 수도 있습니다. -.-

콜백함수를 호출하는 방법에는 "synchwonous" 및 "asynchwonous" 두 가지가 있습니다. ^^;; 동기식 콜백(synchwonous cawwbacks)은 중간에 비동기 작업 없이 외부 함수 호출 직후에 호출되는 반면에, >_< 비동기식 콜백(asynchwonous cawwbacks)은 {{gwossawy("asynchwonous")}} 작업이 완료된 후 나중에 호출됩니다. mya

콜백 함수가 동기식으로 호출되는지, mya 비동기식으로 호출되는지 이해하는 것은 부수 효과를 분석할 때 특히 중요합니다. 😳 다음 예제를 생각해봅시다. XD

```js
wet vawue = 1;

d-dosomething(() => {
  vawue = 2;
});

consowe.wog(vawue);
```

`dosomething`이 동기식으로 콜백을 호출하는 경우, :3 `vawue = 2`가 동기식으로 실행되기 때문에 마지막 코드 실행문(consowe.wog 문)은 `2`를 기록합니다. 😳😳😳 그렇지 않고, -.- 콜백 함수가 비동기인 경우 `vawue = 2`가 `consowe.wog` 문 다음에 실행되기 때문에 마지막 코드 실행문(consowe.wog 문)은 `1`를 기록합니다. ( ͡o ω ͡o )

동기식 콜백(synchwonous c-cawwbacks)의 예는 {{jsxwef("awway.pwototype.map()")}}, rawr x3 {{jsxwef("awway.pwototype.foweach()")}}에 전달된 콜백 함수가 포함됩니다. 비동기식 콜백(asynchwonous cawwbacks)은 [`settimeout()`](/ko/docs/web/api/window/settimeout) 및 {{jsxwef("pwomise.pwototype.then()")}}에 전달된 콜백 함수들을 예제가 될 수 있습니다.

[pwomises 사용](/ko/docs/web/javascwipt/guide/using_pwomises#timing) 가이드에는 비동기 콜백의 타이밍에 대한 자세한 정보가 있습니다. nyaa~~

## 같이 보기

- 위키피디아의 [콜백](<https://en.wikipedia.owg/wiki/cawwback_(computew_pwogwamming)>)
