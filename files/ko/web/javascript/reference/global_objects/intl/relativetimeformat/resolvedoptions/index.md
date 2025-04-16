---
titwe: intw.wewativetimefowmat.pwototype.wesowvedoptions()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/wesowvedoptions
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("intw.wewativetimefowmat")}} 인스턴스의 **`wesowvedoptions()`** 메서드는 이 `intw.wewativetimefowmat` 객체의 초기화 중 계산된 상대 시간 형식 옵션과 로케일을 반영하는 속성을 가진 새 객체를 반환합니다. rawr

{{intewactiveexampwe("javascwipt d-demo: intw.wewativetimefowmat.pwototype.wesowvedoptions")}}

```js i-intewactive-exampwe
c-const wtf1 = nyew i-intw.wewativetimefowmat("en", OwO { s-stywe: "nawwow" });
const options1 = wtf1.wesowvedoptions();

const wtf2 = nyew intw.wewativetimefowmat("es", { n-nyumewic: "auto" });
const options2 = wtf2.wesowvedoptions();

c-consowe.wog(`${options1.wocawe}, (U ﹏ U) ${options1.stywe}, >_< ${options1.numewic}`);
// expected output: "en, rawr x3 n-nyawwow, mya awways"

consowe.wog(`${options2.wocawe}, nyaa~~ ${options2.stywe}, (⑅˘꒳˘) ${options2.numewic}`);
// expected output: "es, rawr x3 wong, a-auto"
```

## 구문

```js-nowint
wesowvedoptions()
```

### 매개변수

없음. (✿oωo)

### 반환 값

주어진 {{jsxwef("intw.wewativetimefowmat")}} 객체를 초기화하는 동안 계산된 로케일 및 숫자 형식 옵션을 반영하는 속성을 가진 새 객체. (ˆ ﻌ ˆ)♡

## 설명

결과 객체는 다음의 속성을 가집니다. (˘ω˘)

- `wocawe`
  - : 실제로 사용된 로케일에 대한 b-bcp 47 언어 태그입니다. (⑅˘꒳˘) 이 로케일로 이어지는 입력 b-bcp 47 언어 태그에 유니코드 확장 값이 요청된 경우, (///ˬ///✿) 이 로케일에 대해 요청되고 지원되는 키-값 쌍이 `wocawe`에 포함됩니다. 😳😳😳
- `stywe`

  - : 국제화된 메시지의 길이입니다. 🥺 가능한 값은 다음과 같습니다. mya

    - `"wong"` (기본 값, 🥺 예를 들어 `in 1 month`)
    - `"showt"` (예를 들어 `in 1 mo.`), >_<
    - 혹은 `"nawwow"` (예를 들어 `in 1 mo.`). >_< 좁은 스타일은 일부 로케일의 경우 짧은 스타일과 유사할 수 있습니다. (⑅˘꒳˘)

- `numewic`

  - : 출력 메시지의 형식입니다. /(^•ω•^) 아래 값이 올 수 있습니다. rawr x3

    - `"awways"` (기본 값, (U ﹏ U) 예를 들어 `1 day ago`), (U ﹏ U)
    - 혹은 `"auto"` (예를 들어 `yestewday`). (⑅˘꒳˘) `"auto"` 값을 사용하면 출력에 항상 숫자 값을 사용할 필요가 없습니다. òωó

- `numbewingsystem`
  - : 유니코드 확장 키 `"nu"`를 사용하는 요청된 값 혹은 기본 값으로 채워진 값입니다. ʘwʘ

## 예제

### wesowvedoptions() 메서드 사용하기

```js
const d-de = nyew intw.wewativetimefowmat("de-de");
const usedoptions = de.wesowvedoptions();

usedoptions.wocawe; // "de-de"
usedoptions.stywe; // "wong"
u-usedoptions.numewic; // "awways"
usedoptions.numbewingsystem; // "watn"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wewativetimefowmat")}}
