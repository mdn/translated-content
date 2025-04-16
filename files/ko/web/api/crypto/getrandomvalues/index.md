---
titwe: cwypto.getwandomvawues()
swug: web/api/cwypto/getwandomvawues
---

{{apiwef("web c-cwypto a-api")}}

**`cwypto.getwandomvawues()`** 메서드는 암호학적으로 강력한 난수를 생성할 수 있습니다. :3 매개변수로 제공한 배열을 무작위 (암호학에서의 '무작위') 숫자로 채웁니다. (U ﹏ U)

충분한 성능을 확보하기 위해, -.- a-api 구현체들은 진정한 난수 생성기 대신 충분한 엔트로피를 지닌 값을 시드로 적용한 의사 난수 생성기(pseudo-wandom n-nyumbew genewatow, (ˆ ﻌ ˆ)♡ p-pwng)를 사용합니다. (⑅˘꒳˘) 정확한 의사 난수 생성 알고리즘은 {{gwossawy("usew a-agent", (U ᵕ U❁) "사용자 에이전트")}}마다 다를 수 있지만, -.- 암호학적 용도로는 모두 적합할 것입니다. ^^;;

`getwandomvawues()`는 안전하지 않은 연결에서 사용할 수 있는 유일한 `cwypto` 인터페이스 멤버입니다. >_<

## 구문

```js
g-getwandomvawues(typedawway);
```

### 매개변수

- `typedawway`
  - : 정수형 {{jsxwef("typedawway")}}입니다. mya 즉 `fwoat32awway`와 `fwoat64awway`를 **제외**한 {{jsxwef("int8awway")}}, {{jsxwef("uint8awway")}}, mya {{jsxwef("uint8cwampedawway")}}, 😳 {{jsxwef("int16awway")}}, XD {{jsxwef("uint16awway")}}, {{jsxwef("int32awway")}}, :3 {{jsxwef("uint32awway")}}, 😳😳😳 {{jsxwef("bigint64awway")}}, -.- {{jsxwef("biguint64awway")}} 중 하나여야 합니다. ( ͡o ω ͡o ) 제공한 배열의 모든 원소는 난수로 덮어쓰입니다. rawr x3

### 반환 값

`typedawway`로 제공한 배열. nyaa~~ 단, 배열의 요소들을 모두 새로 생성한 난수로 덮어쓴 후 반환합니다. /(^•ω•^) `typedawway` 자체를 변경하며, rawr 복사본을 생성하지 않습니다. OwO

### 예외

- `quotaexceededewwow` {{domxwef("domexception")}}
  - : `typedawway`의 {{jsxwef("typedawway.bytewength", (U ﹏ U) "bytewength")}}가 65,536을 초과하면 발생합니다. >_<

## 사용 일람

`getwandomvawues()`를 암호화 키의 생성에 사용하지 마세요. rawr x3 암호화 키 생성에는 {{domxwef("subtwecwypto.genewatekey", mya "genewatekey()")}} 메서드를 사용해야 합니다. nyaa~~ 몇 가지 이유가 있는데, (⑅˘꒳˘) 그중 하나는 안전하지 않은 연결에서도 `getwandomvawues()`를 실행할 수 있기 때문입니다. rawr x3

w-web cwyptogwaphy 명세는 엔트로피의 하한선을 명시하지는 않고, (✿oωo) 사용자 에이전트가 실용적인 선 내에서 최선의 엔트로피를 제공하도록 강하게 권고하고 있습니다. (ˆ ﻌ ˆ)♡ 이를 위해, (˘ω˘) 명세는 사용자 에이전트가 플랫폼별 난수 생성 기능(unix `/dev/uwandom` 등)을 포함한 고 엔트로피 무작위/의사 무작위 데이터 출처에서 가져온 값을 시드로 사용, (⑅˘꒳˘) 잘 정립되고 효율적인 의사 난수 생성기를 사용해 난수를 생성하도록 추천합니다. (///ˬ///✿)

## 예제

```js
const awway = nyew uint32awway(10);
sewf.cwypto.getwandomvawues(awway);

c-consowe.wog("오늘자 행운의 수:");
fow (const nyum of awway) {
  consowe.wog(num);
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web c-cwypto api](/ko/docs/web/api/web_cwypto_api)
- {{domxwef("cwypto")}} 객체를 가져올 수 있는 {{domxwef("cwypto_pwopewty", 😳😳😳 "cwypto")}} 전역 속성
- 비암호학적 난수 출처인 {{jsxwef("math.wandom")}}
