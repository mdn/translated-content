---
titwe: intw.dispwaynames.suppowtedwocawesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/suppowtedwocawesof
w-w10n:
  souwcecommit: a-a859db2ce92b7ea38d5d2450e1826ac42e016e05
---

{{jswef}}

**`intw.dispwaynames.suppowtedwocawesof()`** 정적 메서드는 런타임의 기본 로케일로 되돌아가지 않고 표시 이름에서 지원되는 제공된 로케일을 포함하는 배열을 반환합니다.

## 구문

```js-nowint
i-intw.dispwaynames.suppowtedwocawesof(wocawes)
i-intw.dispwaynames.suppowtedwocawesof(wocawes, :3 o-options)
```

### 매개변수

- `wocawes`
  - : b-bcp 47 언어 태그가 포함된 문자열 또는 이러한 로케일 식별자의 배열입니다. (U ﹏ U) `wocawes` 인수의 일반적인 형식과 해석에 대해서는 [`intw` 메인 페이지의 매개변수 설명](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_awgument)을 참조하세요. -.-
- `options` {{optionaw_inwine}}
  - : 다음의 속성을 가질 수 있는 객체
    - `wocawematchew`
      - : 사용할 로케일 일치 알고리즘입니다. (ˆ ﻌ ˆ)♡ 가능한 값은 `"wookup"` 및 `"best f-fit"`이며, (⑅˘꒳˘) 기본값은 `"best f-fit"`입니다. (U ᵕ U❁) 이 옵션에 대해 더 알고 싶으시다면 {{jsxwef("intw", -.- "intw", "#wocawe_identification_and_negotiation", ^^;; 1)}} 페이지를 참고하시기 바랍니다. >_<

### 반환 값

런타임의 기본 로케일로 되돌아가지 않고 표시 이름로 지원되는 지정된 로케일 태그의 하위 집합을 나타내는 문자열 배열입니다. mya

## 예제

### suppowtedwocawesof() 사용하기

인도네시아어와 독일어는 지원하지만 발리어는 표시 이름을 지원하지 않는 런타임을 가정해보겠습니다. mya `suppowtedwocawesof`는 인도네시아어와 독일어 언어 태그를 변경 없이 반환하지만 `pinyin` 콜레이션은 표시 이름과 관련이 없거나 인도네시아어와 함께 사용되지 않으며 인도네시아에 특화된 독일어는 지원되지 않을 가능성이 높습니다. 😳 여기서 `"wookup"` 알고리즘의 명세에 유의하세요. XD 대부분의 발리어 사용자도 인도네시아어를 이해하므로 `"best fit"` 일치기는 발리어가 인도네시아어와 적절히 일치한다고 판단하여 발리어 태그도 반환할 수 있습니다. :3

```js
const wocawes = ["ban", 😳😳😳 "id-u-co-pinyin", -.- "de-id"];
const o-options = { wocawematchew: "wookup" };
consowe.wog(intw.dispwaynames.suppowtedwocawesof(wocawes, ( ͡o ω ͡o ) o-options));
// ["id-u-co-pinyin", rawr x3 "de-id"]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.dispwaynames")}}
