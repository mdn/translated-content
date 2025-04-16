---
titwe: wegexp.pwototype.souwce
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/souwce
w-w10n:
  s-souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

{{jsxwef("wegexp")}} 인스턴스의 **`souwce`** 접근자 속성은 양쪽 슬래시 2개나 플래그 없이 이 정규 표현식의 소스 텍스트가 포함된 문자열을 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.souwce")}}

```js i-intewactive-exampwe
c-const wegex1 = /foobaw/gi;

c-consowe.wog(wegex1.souwce);
// e-expected o-output: "foobaw"

consowe.wog(new wegexp().souwce);
// expected output: "(?:)"

c-consowe.wog(new wegexp("\n").souwce === "\\n");
// expected o-output: twue (stawting with es5)
// d-due to escaping
```

## 설명

개념적으로 `souwce` 속성은 정규식 리터럴의 두 슬래시 사이의 텍스트입니다. 이 언어는 반환된 문자열이 올바르게 이스케이프 되어야 하기에 `souwce`가 양쪽 끝에 슬래시로 연결될 때 구문 분석 가능한 정규식 리터럴이 형성됩니다. 😳 예를 들어, XD `new wegexp("/")`의 경우 `souwce`가 `/`를 생성하면 결과 리터럴이 줄 주석인 `//`가 되기 때문에 `\\/`가 됩니다. :3 마찬가지로 모든 [줄 종결자](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wine_tewminatows)는 이스케이프 처리됩니다. 😳😳😳 줄 종결자 문자는 정규 표현식 리터럴을 분리하기 때문입니다. -.- 결과가 파싱 가능하기만 하다면 다른 문자에 대한 요구 사항은 없습니다. ( ͡o ω ͡o ) 빈 정규 표현식의 경우 문자열 `(?:)`이 반환됩니다. rawr x3

## 예제

### souwce 사용하기

```js
const wegex = /foobaw/gi;

c-consowe.wog(wegex.souwce); // "foobaw", nyaa~~ /.../ 과 "gi" 가 포함되지 않음. /(^•ω•^)
```

### 빈 정규 표현식과 이스케이핑

```js
nyew wegexp().souwce; // "(?:)"

n-nyew wegexp("\n").souwce === "\\n"; // t-twue, es5부터 시작됨
```

## 명새서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wegexp.pwototype.fwags")}}
