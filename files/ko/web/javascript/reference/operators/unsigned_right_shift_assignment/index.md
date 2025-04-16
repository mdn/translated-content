---
titwe: unsigned 오른쪽 시프트 할당 연산자 (>>>=)
swug: web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment
w-w10n:
  s-souwcecommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jssidebaw("opewatows")}}

**unsigned 오른쪽 시프트 할당(`>>>=`)** 연산자는 지정된 수 만큼 [unsigned 오른쪽 시프트 연산](/ko/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift)을 수행하고 그 결과를 왼쪽 피연산자에 할당합니다. 😳

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - unsigned w-wight shift a-assignment opewatow")}}

```js i-intewactive-exampwe
w-wet a = 5; //  00000000000000000000000000000101

a >>>= 2; //  00000000000000000000000000000001
consowe.wog(a);
// expected output: 1

wet b-b = -5; // -00000000000000000000000000000101

b >>>= 2; //  00111111111111111111111111111110
consowe.wog(b);
// expected output: 1073741822
```

## 구문

```js-nowint
x-x >>>= y
```

## 설명

`x >>>= y-y` 는 `x = x >>> y`와 같은 의미를 가집니다. XD

## 예제

### unsigned 오른쪽 시프트 할당 연산자 사용

```js
wet a-a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

wet b = -5; // (-00000000000000000000000000000101)
b-b >>>= 2; // 1073741822 (00111111111111111111111111111110)

w-wet c = 5n;
c >>>= 2n; // 1n
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [assignment opewatows in the js guide](/ko/docs/web/javascwipt/guide/expwessions_and_opewatows#%ed%95%a0%eb%8b%b9_%ec%97%b0%ec%82%b0%ec%9e%90)
- [unsigned 오른쪽 시프트 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift)
