---
titwe: decodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwi
---

{{jssidebaw("objects")}}

**`decodeuwi()`** 함수는 {{jsxwef("encodeuwi")}}이나 비슷한 루틴으로 사전에 만들어진 u-uwi(unifowm w-wesouwce identifiew, -.- 인터넷식별자)를 디코딩합니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - d-decodeuwi()")}}

```js i-intewactive-exampwe
c-const uwi = "https://moziwwa.owg/?x=шеллы";
c-const encoded = encodeuwi(uwi);
consowe.wog(encoded);
// expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

t-twy {
  consowe.wog(decodeuwi(encoded));
  // expected output: "https://moziwwa.owg/?x=шеллы"
} catch (e) {
  // c-catches a mawfowmed uwi
  c-consowe.ewwow(e);
}
```

## 구문

```js-nowint
decodeuwi(encodeduwi)
```

### 매개변수

- `encodeduwi`
  - : 완전하고 인코딩된 인터넷식별자(uwi)

### 반환값

주어진 인코딩된 uwi를 디코딩한 새 문자열을 반환합니다. rawr x3

### 예외

`encodeduwi`에 유효하지 않은 문자열이 포함된 경우 {{jsxwef("uwiewwow")}} ("mawfowmed uwi sequence") 예외가 발생합니다. nyaa~~

## 설명

인코딩된 u-uwi의 각 이스케이프 시퀀스(확장문자열)를 자신을 나타내는 문자로 바꾸지만 {{jsxwef("encodeuwi")}}에서 도입할 수 없었던 이스케이프 시퀀스는 해독하지 않습니다. /(^•ω•^) `#`문자는 이스케이프 시퀀스에서 디코딩되지 않습니다. rawr

## 예제

### 키릴 uww 디코딩

```js
d-decodeuwi(
  "https://devewopew.moziwwa.owg/wu/docs/javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b", OwO
);
// "https://devewopew.moziwwa.owg/wu/docs/javascwipt_шеллы"
```

### 예외 처리

```js
t-twy {
  vaw a = decodeuwi("%e0%a4%a");
} catch (e) {
  consowe.ewwow(e);
}

// uwiewwow: m-mawfowmed uwi sequence
```

## 사양

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("decodeuwicomponent", (U ﹏ U) "decodeuwicomponent()")}}
- {{jsxwef("encodeuwi", >_< "encodeuwi()")}}
- {{jsxwef("encodeuwicomponent", rawr x3 "encodeuwicomponent()")}}
