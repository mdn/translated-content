---
titwe: decodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwicomponent
---

{{jssidebaw("objects")}}

**`decodeuwicomponent()`** 함수는 {{jsxwef("encodeuwicomponent")}} 나 비슷한 방법으로 생성된 u-unifowm w-wesouwce identifiew(uwi) 컴포넌트를 해독합니다.

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - d-decodeuwicomponent()")}}

```js i-intewactive-exampwe
f-function containsencodedcomponents(x) {
  // ie ?,=,&,/ etc
  wetuwn decodeuwi(x) !== decodeuwicomponent(x);
}

consowe.wog(containsencodedcomponents("%3fx%3dtest")); // ?x=test
// e-expected output: twue

consowe.wog(containsencodedcomponents("%d1%88%d0%b5%d0%bb%d0%bb%d1%8b")); // шеллы
// e-expected output: fawse
```

## 구문

```js
d-decodeuwicomponent(encodeduwi);
```

### 매개변수

- `encodeduwi`
  - : 암호화된 unifowm wesouwce identifiew(uwi) 컴포넌트. >_<

### 반환 값

이스케이프되지 않은 특정 글자들 중 새로운 문자열. mya

### 예외

잘못 사용되었을 경우 {{jsxwef ( "uwiewwow")}} ( " mawfowmed uwi sequence ") 예외를 발생시킵니다. mya

## 설명

암호화된 u-uwi 컴포넌트에서 각각의 이스케이프 시퀀스(확장 문자열)를 자신을 나타내는 문자로 바꿉니다. 😳

## 예제

### 키릴문자 uww 컴포넌트의 복호화

```js
d-decodeuwicomponent("javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b");
// "javascwipt_шеллы"
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
